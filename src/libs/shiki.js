const htmlencode = require('htmlencode');

module.exports = (eleventyConfig, options) => {
  // empty call to notify 11ty that we use this feature
  // eslint-disable-next-line no-empty-function
  eleventyConfig.amendLibrary('md', () => { });

  eleventyConfig.on('eleventy.before', async () => {
    const shiki = await import('shiki');
    const fs = await import('fs');
    const { transformerNotationDiff } = await import('@shikijs/transformers');

    // Load the theme object from a file, a network request, or anywhere
    const darkColourTheme = JSON.parse(fs.readFileSync('src/libs/nomos-black-colour-theme.json', 'utf8'))
    const highlighter = await shiki.createHighlighter(
    {
      themes: ["light-plus"],
      langs: [
        'shell',
        'html',
        'batch',
        'powershell',
        'yaml',
        'sql',
        'csharp',
        'fsharp',
        'xml',
        'javascript',
        'css'
      ],
    });

    await highlighter.loadTheme(darkColourTheme);

    eleventyConfig.amendLibrary('md', (mdLib) =>
      mdLib.set({
        highlight: (code, lang) => {
          if (lang === "mermaid") {
            const extra_classes = options?.extra_classes ? ' ' + options.extra_classes : '';
            return `<div class="mermaid${extra_classes}">${htmlencode.htmlEncode(code)}</div>`;
          }
          else {
            return highlighter.codeToHtml(code,
               {
                lang: lang,
                themes: {
                  light: "light-plus",
                  dark: "NomosBlack"
                },
                transformers: [ transformerNotationDiff() ]
              });
          }
        }
      })
    );
  });
};