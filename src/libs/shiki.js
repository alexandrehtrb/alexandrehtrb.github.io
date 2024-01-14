const shiki = require('shiki');

module.exports = (eleventyConfig, options) => {
  // empty call to notify 11ty that we use this feature
  // eslint-disable-next-line no-empty-function
  eleventyConfig.amendLibrary('md', () => {});

  eleventyConfig.on('eleventy.before', async () => {
    const highlighter = await shiki.getHighlighter(options);
    eleventyConfig.amendLibrary('md', (mdLib) =>
      mdLib.set({
        highlight: (code, lang) => highlighter.codeToHtml(code, { lang }),
      })
    );
  });
};