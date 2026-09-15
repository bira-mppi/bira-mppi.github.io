# BIRA-MPPI project page

Static academic project page for **BIRA-MPPI: Belief-Informed Responsiveness-Aware Planning for Robot Navigation in Dynamic Crowds**.

## Preview

From this directory, run `python3 -m http.server 8000 --bind 127.0.0.1` and open `http://127.0.0.1:8000`.
No package installation or build step is required. The page also works on GitHub Pages.

## Content and assets

- `index.html`: paper summary, framework overview, and directly visible experiment result table.
- `static/css/index.css`: responsive page styles.
- `static/js/index.js`: resource links, reduced-motion-aware video playback, and the back-to-top link.
- `static/videos/demo.mp4`: supplied navigation demonstration.
- `static/images/framework.png`: supplied framework figure.
- `static/pdfs/paper.pdf`: the supplied manuscript PDF, copied from `icra2027/root.pdf`.

Research content and results were transcribed from the supplied `icra2027/root.tex`. Navigation time and path length are conditional on successful episodes. Runtime measurements are means on an NVIDIA GeForce RTX 5060 Laptop GPU.

The manuscript currently contains template author names. Authors, affiliations, venue, and BibTeX are intentionally omitted until verified information is supplied. Do not infer publication status from the manuscript folder name. The bundled template PDF and legacy carousel assets are not linked from the page.

## Updating the resource buttons

Edit `projectLinks` near the top of `static/js/index.js`:

```js
const projectLinks = {
  paper: 'static/pdfs/paper.pdf',
  github: '', // Add the full GitHub repository URL here.
  arxiv: '',  // Add the full arXiv abstract-page URL here.
};
```

An empty value keeps its button disabled. Filling in a URL enables it automatically. To update the PDF, replace `static/pdfs/paper.pdf`; alternatively, set `paper` to the full URL of a hosted PDF. Save and refresh the local preview. Publish the changed files to update the live website.

## Credits

Layout and section sequence inspired by [CFM-MPPI](https://cfm-mppi.github.io/). Based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) and [Nerfies](https://nerfies.github.io/).

Website licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
