/*
 * Sends a saved link to the same page on the renamed site.
 *
 * The project became the Western Water Dashboard when its coverage passed
 * beyond Utah. GitHub redirects a renamed repository but not its Pages site,
 * so without this every bookmark to the old address returns 404 -- including
 * deep links carrying a reader's chosen place or reservoir.
 *
 * The path after the repository name and the whole query string are carried
 * across unchanged, so a shared `?state=UT&reservoir=Flaming+Gorge` link
 * still opens on what it named rather than on the front page.
 */
(function () {
  "use strict";
  var FROM = "/utah-water-dashboard";
  var TO = "/western-water-dashboard";
  var path = window.location.pathname;
  var rest = path.indexOf(FROM) === 0 ? path.slice(FROM.length) : path;
  if (rest === "" || rest === "/") rest = "/";
  var target = window.location.origin + TO + rest
    + window.location.search + window.location.hash;
  var link = document.getElementById("target");
  if (link) { link.href = target; link.textContent = target; }
  window.location.replace(target);
})();
