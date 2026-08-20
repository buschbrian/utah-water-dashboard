# utah-water-dashboard

This repository exists to keep saved links working. It holds no dashboard.

The project is now the **[Western Water Dashboard](https://github.com/buschbrian/western-water-dashboard)**:
it covers eleven states and 75 drainage areas across hydrologic regions 14 to
18, and the Utah name stopped being true.

GitHub redirects a renamed repository, but it does not redirect that
repository's GitHub Pages site. So every bookmark to
`buschbrian.github.io/utah-water-dashboard/` returned 404 the moment the
rename landed. This serves a redirect at that address instead.

`404.html` is the load-bearing part. GitHub Pages serves it for any path it
cannot find, so a deep link -- `/methods.html`, `/snow.html?state=ID` -- lands
here and is sent on to the same page on the new site with its query string
intact. `index.html` is the same page for the root.

Keeping the old name also keeps anyone else from claiming it and inheriting
the traffic of a dashboard they did not write.

The reasoning is the same one [ADR-031](https://github.com/buschbrian/western-water-dashboard/blob/main/docs/decisions/ADR-031-keep-the-retired-routes-as-redirects.md)
gives for the retired routes inside the site: retired addresses preserve
bookmarks, and a redirect is cheap where a broken link is not.
