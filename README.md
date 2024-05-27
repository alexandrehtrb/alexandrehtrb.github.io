# Blog starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/a9b962b7-9df1-49db-9b40-e5fedbc8ba9e/deploy-status)](https://app.netlify.com/sites/eleventy-blog-starter/deploys)

View the live demo [here](https://eleventy.rongying.co/), hosted on Netlify

![homepage](blog-v2.png)
![darkmode](blog-dark.png)

## Aims
A blog that still runs without javascript. Hence, no bundlers. 


## Features
- Static Site Gen - Eleventy

- Tailwind CSS v2.0 / Tailwind Typography / Dark Mode

- Create excerpts using the `<!-- excerpt -->`

- Custom ReadTime filter

- 404 page

+ Tags page to view posts related to tag
  - Use of a `tagList` collection defined in `.eleventy.js`
  - `/tags` - show all available tags (excluding all and posts) as buttons (`tags.md`)
  - `/tags/tag-name` - shows all posts related to that tag (`tagList.md`)

+ Sitemap and Robots.txt 
  - Change site url in `_data/site.json`

+ Shortcode to handle images
  - Add image under `src/assets/img/posts` and use the asset_img short code
  - `{% asset_img 'filename' 'alt_text' %}` eg. `{% asset_img 'mailbox.jpg' 'mailbox' %}`

- Draft posts using the `published` frontmatter

+ Posts pagination in `index.html` 
  - change the `size` frontmatter variable
- ESLint

+ Bash script to create new post (based on YYYY and MM)
```bash
$ ./create new blog post
Created new post at src/posts/2021/01/new-blog-post.md
```


## Running locally

Create your blogpost under `src/posts`. I like to have mine sorted by YY/MM.

Navigate to localhost:8080 after starting the server.

```sh
npm install
npm run dev

# or

pnpm install
pnpm dev
```


## Deployment

### GitHub Pages

Just commit and push to `master` branch, a GitHub Action will start and deploy.

### Netlify / Surge / Firebase hosting / etc hosting providers

[<img src="https://www.netlify.com/img/deploy/button.svg" />](https://app.netlify.com/start/deploy?repository=https://github.com/alexandrehtrb/alexandrehtrb.github.io)

Build Command: `npm run build` or `pnpm dev`

Output folder: `_site`