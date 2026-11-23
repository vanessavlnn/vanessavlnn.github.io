(function () {
  "use strict";
  var data = window.portfolioData || {};
  var projectEmpty = document.getElementById("project-empty");
  var featuredProject = document.getElementById("featured-project");
  var projectGrid = document.getElementById("project-grid");
  var projectArchive = document.getElementById("project-archive");
  var archiveList = document.getElementById("archive-list");
  var researchList = document.getElementById("research-list");

  function escapeHTML(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function safeUrl(value) {
    if (!value) return "";
    var url = String(value).trim();
    if (url.indexOf("https://") === 0 || url.indexOf("http://") === 0 || url.indexOf("mailto:") === 0) return escapeHTML(url);
    return "";
  }

  function safeImage(value) {
    if (!value) return "";
    var url = String(value).trim();
    if (url.indexOf("assets/") === 0 || url.indexOf("https://") === 0 || url.indexOf("http://") === 0) return escapeHTML(url);
    return "";
  }

  function tagsHTML(items, className) {
    if (!Array.isArray(items)) return "";
    return items.map(function (item) {
      return '<span class="' + className + '">' + escapeHTML(item) + "</span>";
    }).join("");
  }

  function detailUrl(type, id) {
    var route = type === "project" ? "projects/detail.html" : "research/detail.html";
    return route + "?slug=" + encodeURIComponent(id);
  }

  function previewHTML(item, featured) {
    var image = safeImage(item.image);
    if (image) {
      return '<div class="project-preview' + (featured ? " preview-featured" : "") +
        '"><img src="' + image + '" alt="' +
        escapeHTML(item.imageAlt || ("Preview of " + (item.title || "project"))) +
        '" loading="lazy"></div>';
    }
    return '<div class="project-preview preview-placeholder' + (featured ? " preview-featured" : "") +
      '" aria-label="Visual preview not yet added"><div class="preview-window">' +
      '<div class="preview-chrome"><i></i><i></i><i></i><span>PROJECT VIEW</span></div>' +
      '<div class="preview-lines"><b></b><b></b><b></b></div>' +
      '<strong>PREVIEW<br>COMING SOON</strong></div></div>';
  }

  function projectLinks(item) {
    var links = item.links || {};
    var html = "";
    var demo = safeUrl(links.demo);
    var repo = safeUrl(links.repository);
    if (demo) html += '<a class="small-link" href="' + demo + '" target="_blank" rel="noopener noreferrer">Demo ↗</a>';
    if (repo) html += '<a class="small-link" href="' + repo + '" target="_blank" rel="noopener noreferrer">Repository ↗</a>';
    return html;
  }

  function statusBadge(status) {
    if (!status) return "";
    return '<span class="mini-tag">' + escapeHTML(status) + "</span>";
  }

  function renderFeatured(item) {
    var id = String(item.id || "project-1");
    return '<article class="featured-project reveal"><div class="featured-visual">' +
      previewHTML(item, true) +
      '<span class="feature-stamp" aria-hidden="true">FEATURED<br>BUILD</span>' +
      '</div><div class="featured-copy">' +
      '<div class="project-meta"><span>' + escapeHTML(item.category || "PROJECT") +
      '</span><span>' + escapeHTML(item.year || "") + "</span></div>" +
      "<h3>" + escapeHTML(item.title || "Project") + "</h3>" +
      '<p class="project-summary">' + escapeHTML(item.summary || "") + "</p>" +
      (item.role ? '<p class="role-line"><span class="mono-label">ROLE</span> ' + escapeHTML(item.role) + "</p>" : "") +
      '<div class="tag-list">' + tagsHTML(item.stack || [], "mini-tag") + " " + statusBadge(item.status) + "</div>" +
      '<div class="project-actions"><a class="text-action" href="' + detailUrl("project", id) +
      '">Read case study <span aria-hidden="true">↗</span></a>' + projectLinks(item) +
      "</div></div></article>";
  }

  function renderProjectCard(item, index) {
    var id = String(item.id || ("project-" + index));
    return '<article class="project-card reveal"><a class="project-card-link" href="' +
      detailUrl("project", id) + '" aria-label="Open case study: ' + escapeHTML(item.title || "Project") +
      '">' + previewHTML(item, false) + '<div class="project-meta"><span>' +
      escapeHTML(item.category || "PROJECT") + '</span><span>' + escapeHTML(item.year || "") +
      "</span></div><h3>" + escapeHTML(item.title || "Project") + "</h3>" +
      '<p class="project-summary">' + escapeHTML(item.summary || "") + "</p>" +
      '<div class="project-card-bottom"><span class="tag-list">' +
      tagsHTML((item.stack || []).slice(0, 3), "mini-tag") +
      '</span><span class="card-arrow" aria-hidden="true">↗</span></div></a></article>';
  }

  function renderProjectArchive(items) {
    if (!items.length) {
      projectArchive.hidden = true;
      return;
    }
    projectArchive.hidden = false;
    document.getElementById("archive-count").textContent = String(items.length).padStart(2, "0") + " ENTRIES";
    archiveList.innerHTML = items.map(function (item, index) {
      var id = String(item.id || ("archive-" + index));
      return '<a class="archive-entry" href="' + detailUrl("project", id) +
        '"><span class="archive-title">' + escapeHTML(item.title || "Project") +
        '</span><span class="archive-meta">' + escapeHTML(item.category || "Experiment") +
        " · " + escapeHTML(item.year || "") +
        '</span><span class="archive-arrow" aria-hidden="true">↗</span></a>';
    }).join("");
  }

  function renderProjects() {
    var items = Array.isArray(data.projects) ? data.projects : [];
    if (!items.length) return;
    projectEmpty.hidden = true;
    featuredProject.innerHTML = renderFeatured(items[0]);
    projectGrid.innerHTML = items.slice(1, 4).map(function (item, index) {
      return renderProjectCard(item, index + 1);
    }).join("");
    renderProjectArchive(items.slice(4));
  }

  function renderResearch() {
    var items = Array.isArray(data.research) ? data.research : [];
    if (!items.length) return;
    researchList.innerHTML = items.map(function (item, index) {
      var id = String(item.id || ("research-" + index));
      var paper = safeUrl((item.links || {}).paper);
      var repo = safeUrl((item.links || {}).repository);
      return '<article class="research-entry reveal"><div class="research-index">R / ' +
        String(index + 1).padStart(2, "0") + '</div><div class="research-content">' +
        '<div class="research-meta"><span>' + escapeHTML(item.topic || "ACADEMIC RESEARCH") +
        '</span><span>' + escapeHTML(item.status || "STATUS NOT SET") +
        (item.year ? " · " + escapeHTML(item.year) : "") + "</span></div>" +
        "<h3>" + escapeHTML(item.title || "Research") + "</h3>" +
        "<p>" + escapeHTML(item.summary || "") + "</p>" +
        '<div class="research-actions"><a class="text-action" href="' + detailUrl("research", id) +
        '">View methods & findings <span aria-hidden="true">↗</span></a>' +
        (paper ? '<a class="small-link" href="' + paper + '" target="_blank" rel="noopener noreferrer">Paper ↗</a>' : "") +
        (repo ? '<a class="small-link" href="' + repo + '" target="_blank" rel="noopener noreferrer">Repository ↗</a>' : "") +
        "</div></div></article>";
    }).join("");
  }

  function renderToolkit() {
    var groups = Array.isArray(data.toolkit) ? data.toolkit : [];
    document.getElementById("toolkit-grid").innerHTML = groups.map(function (group) {
      return '<article class="tool-card"><div class="tool-card-head"><span class="tool-code">' +
        escapeHTML(group.code || "•") + '</span><h3>' + escapeHTML(group.title || "") +
        '</h3></div><div class="tool-tags">' + tagsHTML(group.items || [], "tool-tag") +
        "</div></article>";
    }).join("");
  }

  function renderJourney() {
    var items = Array.isArray(data.journey) ? data.journey : [];
    document.getElementById("journey-list").innerHTML = items.map(function (item, index) {
      var facts = Array.isArray(item.facts) && item.facts.length
        ? '<ul class="journey-facts">' + item.facts.map(function (fact) {
            return "<li>" + escapeHTML(fact) + "</li>";
          }).join("") + "</ul>"
        : "";
      return '<article class="journey-entry reveal" style="--i:' + index + '">' +
        '<span class="timeline-point" aria-hidden="true"></span>' +
        '<div class="journey-date">' + escapeHTML(item.period || "") +
        "<span>" + String(index + 1).padStart(2, "0") + "</span></div>" +
        '<div class="journey-detail"><p class="mono-label">' + escapeHTML(item.kind || "EXPERIENCE") +
        "</p><h3>" + escapeHTML(item.title || "") + '</h3><p class="journey-org">' +
        escapeHTML(item.organization || "") + '</p><p class="journey-summary">' +
        escapeHTML(item.summary || "") + "</p>" + facts + "</div></article>";
    }).join("");
  }

  function renderHighlights() {
    var items = Array.isArray(data.highlights) ? data.highlights : [];
    document.getElementById("highlights-list").innerHTML = items.map(function (item) {
      return '<article class="highlight-item"><span class="highlight-year">' +
        escapeHTML(item.year || "") + '</span><h3>' + escapeHTML(item.title || "") +
        '</h3><p>' + escapeHTML(item.description || "") + "</p></article>";
    }).join("");
  }

  function renderContact() {
    var profile = data.profile || {};
    var links = [];
    var email = safeUrl(profile.email ? "mailto:" + profile.email : "");
    var github = safeUrl(profile.github);
    var linkedin = safeUrl(profile.linkedin);
    if (email) links.push('<a class="button button-primary" href="' + email + '">Send email <span class="arrow" aria-hidden="true">↗</span></a>');
    if (github) links.push('<a class="contact-social" href="' + github + '" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>');
    if (linkedin) links.push('<a class="contact-social" href="' + linkedin + '" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>');
    document.getElementById("contact-links").innerHTML = links.join("");
  }

  /* ── RENDER ── */
  renderProjects();
  renderResearch();
  renderToolkit();
  renderJourney();
  renderHighlights();
  renderContact();
  document.getElementById("current-year").textContent = String(new Date().getFullYear());

  /* ── MOBILE NAV ── */
  var menuButton = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-nav");

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  menuButton.addEventListener("click", function () {
    var opening = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
    nav.classList.toggle("is-open", opening);
    document.body.classList.toggle("menu-open", opening);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 680 && menuButton.getAttribute("aria-expanded") === "true") closeMenu();
  });

  /* ── SCROLL REVEAL ── */
  var revealItems = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  } else {
    document.body.classList.add("motion-ready");
    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  }

  /* ── ACTIVE NAV HIGHLIGHT ── */
  var navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  var sections = [];
  navLinks.forEach(function (link) {
    var target = document.querySelector(link.getAttribute("href"));
    if (target) sections.push({ el: target, link: link });
  });

  if (sections.length && "IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var match = sections.find(function (s) { return s.el === entry.target; });
        if (match) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { l.removeAttribute("aria-current"); });
            match.link.setAttribute("aria-current", "page");
          }
        }
      });
    }, { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" });
    sections.forEach(function (s) { navObserver.observe(s.el); });
  }
})();
