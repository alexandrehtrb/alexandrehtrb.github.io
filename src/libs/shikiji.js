/*import { getHighlighter } from 'shikiji'

module.exports = (eleventyConfig, options) => {
  // empty call to notify 11ty that we use this feature
  // eslint-disable-next-line no-empty-function
  eleventyConfig.amendLibrary('md', () => {});

  eleventyConfig.on('eleventy.before', async () => {
    // `getHighlighter` is async, it initializes the internal and
	// loads the themes and languages specified.
	const highlighter = await getHighlighter({
	  themes: ['vitesse-dark'],
	  langs: ['javascript'],
	});
	
    eleventyConfig.amendLibrary('md', (mdLib) =>
      mdLib.set({
        highlight: (code, lang) => highlighter.codeToHtml(code, { lang }),
      })
    );
  });
};
*/