(function () {
  "use strict";
  var data = window.portfolioData || {};
  var root = document.querySelector("[data-detail-type]");
  var type = root ? root.dataset.detailType : "";
  var output = document.getElementById("detail-content");
  var isProject = type === "project";

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
    if (url.indexOf("assets/") === 0) url = "../" + url;
    if (url.indexOf("../assets/") === 0 || url.indexOf("https://") === 0 || url.indexOf("http://") === 0) return escapeHTML(url);
    return "";
  }

  function sectionHTML(title, value) {
    if (!value || (Array.isArray(value) && !value.length)) return "";
    var content;
    if (Array.isArray(value)) {
      content = "<ul>" + value.map(function (item) { return "<li>" + escapeHTML(item) + "</li>"; }).join("") + "</ul>";
    } else {
      content = "<p>" + escapeHTML(value) + "</p>";
    }
    return '<section class="detail-section"><h2>' + escapeHTML(title) + "</h2>" + content + "</section>";
  }

  function linksHTML(links) {
    if (!links || typeof links !== "object") return "";
    var labels = { repository: "Repository", demo: "Live demo", paper: "Paper", document: "Document", dataset: "Dataset" };
    var linksMarkup = Object.keys(links).map(function (key) {
      var url = safeUrl(links[key]);
      if (!url) return "";
      return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' +
        escapeHTML(labels[key] || key) + " ↗</a>";
    }).join("");
    return linksMarkup ? '<div class="detail-links">' + linksMarkup + "</div>" : "";
  }

  function galleryHTML(gallery) {
    if (!Array.isArray(gallery) || !gallery.length) return "";
    var figures = gallery.map(function (image) {
      var src = safeImage(image.src);
      if (!src) return "";
      return '<figure><img src="' + src + '" alt="' + escapeHTML(image.alt || "") +
        '" loading="lazy"><figcaption>' + escapeHTML(image.caption || "") + "</figcaption></figure>";
    }).join("");
    return figures ? '<div class="detail-gallery">' + figures + "</div>" : "";
  }

  function showNotFound() {
    var back = isProject ? "../index.html#projects" : "../index.html#research";
    output.innerHTML = '<a class="detail-back" href="' + back + '">← Back to portfolio</a>' +
      '<div class="detail-head"><p class="section-kicker">' +
      (isProject ? "PROJECT / CASE STUDY" : "RESEARCH / DETAIL") +
      '</p><h1>Detail not yet available</h1></div>' +
      '<div class="detail-empty"><h2>This content has not been added yet.</h2>' +
      "<p>The detail page will work once the original information is entered into the portfolio data.</p></div>";
  }

  function render(item) {
    var details = item.details || {};
    var category = isProject ? (item.category || "PROJECT") : (item.topic || "ACADEMIC RESEARCH");
    var status = item.status ? [item.status] : [];
    var meta = [category, item.year].concat(status).filter(Boolean);
    var image = safeImage(item.image);
    var headline = '<header class="detail-head"><p class="section-kicker">' +
      (isProject ? "PROJECT / CASE STUDY" : "RESEARCH / EXPLORATION") +
      "</p><h1>" + escapeHTML(item.title || "") + '</h1><p class="detail-lede">' +
      escapeHTML(item.summary || "") + '</p><div class="detail-meta">' +
      meta.map(function (tag) { return '<span class="mini-tag">' + escapeHTML(tag) + "</span>"; }).join("") +
      "</div></header>";

    var imageBlock = image
      ? '<img class="detail-hero-image" src="' + image + '" alt="' +
        escapeHTML(item.imageAlt || ("Visual of " + (item.title || ""))) + '">'
      : '<div class="detail-placeholder" aria-label="Project image not yet added">SUPPORTING VISUAL NOT YET ADDED</div>';

    var sections;
    var stack = Array.isArray(item.stack) ? item.stack : [];

    if (isProject) {
      sections = [
        ["Project overview", details.overview || item.summary],
        ["Problem or motivation", details.problem],
        ["Objective", details.objective],
        ["Role and contribution", details.contribution || item.role],
        ["Technical implementation", details.implementation],
        ["Development process", details.process],
        ["Key features", details.features],
        ["Results or outcomes", details.outcome],
        ["Challenges", details.challenges],
        ["Lessons learned", details.lessons]
      ];
    } else {
      sections = [
        ["Summary", details.abstract || item.summary],
        ["Research objective", details.objective],
        ["Methodology", details.methodology],
        ["Data and research materials", details.data || details.materials],
        ["Model or analytical approach", details.approach],
        ["Evaluation", details.evaluation],
        ["Findings", details.findings],
        ["Limitations", details.limitations],
        ["My contribution", details.contribution]
      ];
    }

    var sectionsMarkup = sections.map(function (entry) { return sectionHTML(entry[0], entry[1]); }).join("");
    if (details.gallery) sectionsMarkup += galleryHTML(details.gallery);

    var aside = '<aside class="detail-aside"><h2>' +
      (isProject ? "Technologies & links" : "Status & documents") + "</h2>" +
      (stack.length ? '<div class="tag-list">' + stack.map(function (tag) {
        return '<span class="mini-tag">' + escapeHTML(tag) + "</span>";
      }).join("") + "</div>" : "") + linksHTML(item.links) + "</aside>";

    output.innerHTML = '<a class="detail-back" href="../index.html#' +
      (isProject ? "projects" : "research") + '">← Back to ' +
      (isProject ? "projects" : "research") + "</a>" + headline + imageBlock +
      '<div class="detail-layout"><div class="detail-sections">' +
      sectionsMarkup + "</div>" + aside + "</div>";

    document.title = item.title + (isProject ? " — Case Study | " : " — Research | ") + "Vanessa";
  }

  var slug = new URLSearchParams(window.location.search).get("slug");
  var collection = isProject ? data.projects : data.research;
  var item = Array.isArray(collection) ? collection.find(function (entry) { return String(entry.id) === String(slug); }) : null;

  if (item) render(item);
  else showNotFound();

  var year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
