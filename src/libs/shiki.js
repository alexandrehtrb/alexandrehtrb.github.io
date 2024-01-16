const shiki = require('shiki');
const htmlencode = require('htmlencode');

module.exports = (eleventyConfig, options) => {
  // empty call to notify 11ty that we use this feature
  // eslint-disable-next-line no-empty-function
  eleventyConfig.amendLibrary('md', () => {});

  eleventyConfig.on('eleventy.before', async () => {
    const highlighter = await shiki.getHighlighter(options);
    eleventyConfig.amendLibrary('md', (mdLib) =>
      mdLib.set({
        highlight: (code, lang) => {
          if (lang === "mermaid") {
            const extra_classes = options?.extra_classes ? ' ' + options.extra_classes : '';
            return `<div class="mermaid${extra_classes}">${htmlencode.htmlEncode(code)}</div>`;
          }
          else {
            return highlighter.codeToHtml(code, { lang });
          }
        }
      })
    );
  });
};