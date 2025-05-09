const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const { minify: minify_html } = require("html-minifier-terser");
const is_production = typeof process.env.NODE_ENV === "string" && process.env.NODE_ENV === "production";
const fs = require("fs");

async function do_minifyhtml(source, output_path) {

  if (!is_production || !output_path.endsWith(".html")) return source;

  const result = await minify_html(source, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: false, // precisa ser false senão deixa links grudados com texto
    continueOnParseError: true,
    decodeEntities: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    quoteCharacter: `"`,
    removeComments: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
    useShortDoctype: true
  });

  console.log(`MINIFY ${output_path}`, source.length, "→", result.length, `(${((1 - (result.length / source.length)) * 100).toFixed(2)}% reduction)`);

  return result;
}

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(require("./src/libs/shiki.js"));
  eleventyConfig.addPlugin(require("./src/libs/mermaid.js"));
  eleventyConfig.addPlugin(pluginRss);

  // To enable merging of tags
  eleventyConfig.setDataDeepMerge(true);

  // Copy these static files to _site folder
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/manifest.json");

  // To create excerpts
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: "post_excerpt",
    excerpt_separator: "<!-- excerpt -->"
  });

  // To create a filter to determine duration of post
  eleventyConfig.addFilter("readTime", (value) => {
    const content = value;
    const textOnly = content.replace(/(<([^>]+)>)/gi, "");
    const readingSpeedPerMin = 450;
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin));
  });

  // Portuguese date format
  eleventyConfig.addFilter("localizedDateFormat", function(date, locale) {
    return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
  });

  // Enable us to iterate over all the tags, excluding posts and all
  eleventyConfig.addCollection("tagList", collection => {
    const tagsSet = new Set();
    collection.getAll().forEach(item => {
      if (!item.data.tags) return;
      item.data.tags
        .filter(tag => !["posts", "all"].includes(tag))
        .forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  });

  const md = markdownIt({ html: true, linkify: true });
  md.use(markdownItAnchor, {
    level: [1, 2],
    permalink: markdownItAnchor.permalink.headerLink({
      safariReaderFix: true,
      class: "header-anchor",
    })
  });
  eleventyConfig.setLibrary("md", md);

  // post_img shortcode
  eleventyConfig.addLiquidShortcode("post_img", (filename, alt) => {
    return `<img class="my-4" src="/assets/img/posts/${filename}" alt="${alt}" />`;
  });

  // post_avif_img shortcode
  eleventyConfig.addLiquidShortcode("post_avif_img", (avif_filename, fallback_filename, alt) => {
    return `<picture class="my-4"><source type="image/avif" srcset="/assets/img/posts/${avif_filename}" alt="${alt}"/><img src="/assets/img/posts/${fallback_filename}" alt="${alt}"/></picture>`;
  });

  // image_caption shortcode
  eleventyConfig.addLiquidShortcode("image_caption", (text) => {
    return `<em class="text-sm italic">${text}</em>`;
  });

  // inline SVGs shortcodes
  eleventyConfig.addLiquidShortcode("svg_2025_03_least_ordinary_squares_linear_fitting_a", () => {
    return fs.readFileSync("src/assets/img/posts/2025_03_least_ordinary_squares_linear_fitting_a.svg", "utf8");
  });
  eleventyConfig.addLiquidShortcode("svg_2025_03_least_ordinary_squares_linear_fitting_b", () => {
    return fs.readFileSync("src/assets/img/posts/2025_03_least_ordinary_squares_linear_fitting_b.svg", "utf8");
  });
  eleventyConfig.addLiquidShortcode("svg_2025_03_least_ordinary_squares_exponential_fitting_a", () => {
    return fs.readFileSync("src/assets/img/posts/2025_03_least_ordinary_squares_exponential_fitting_a.svg", "utf8");
  });
  eleventyConfig.addLiquidShortcode("svg_2025_03_least_ordinary_squares_exponential_fitting_b", () => {
    return fs.readFileSync("src/assets/img/posts/2025_03_least_ordinary_squares_exponential_fitting_b.svg", "utf8");
  });

  eleventyConfig.addTransform("htmlmin", do_minifyhtml);

  return {
    dir: {
      input: "src"
    }
  };
};
