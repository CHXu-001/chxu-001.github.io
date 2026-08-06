# Chenghao Xu Personal Website

This repository is now a plain static website.

## Files You Will Usually Edit

- `index.html`
  Main page content and section structure.
- `assets/personal-site.css`
  Visual style, spacing, colors, responsive layout.
- `assets/personal-site.js`
  Small interactions such as the mobile menu, project filter, and abstract toggles.

## Important Assets

- `assets/img/`
  Images used by the homepage.
- `assets/pdf/Resume.pdf`
  CV download file.

## Local Preview

You do not need Jekyll, Ruby, Docker, or al-folio anymore.

From the repository root, run:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://127.0.0.1:8080
```

## Deployment

This site is compatible with GitHub Pages as a static site.
The `.nojekyll` file is included so GitHub Pages serves it directly without Jekyll processing.

Recommended target repository:

- `https://github.com/Kyle-Xu001/kyle-xu001.github.io`

This local repository keeps the original `origin` remote and also includes a `kyle` remote for the deployment repository.

Useful commands:

```bash
git remote -v
git push kyle main
```
