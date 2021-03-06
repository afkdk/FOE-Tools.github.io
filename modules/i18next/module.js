const { join } = require("path");
const { existsSync, readFileSync, writeFileSync, mkdirSync } = require("fs");

const supportedLocales = [
  "en",
  "fr",
  "de",
  "ru",
  "nl",
  "hu",
  "pl",
  "sv",
  "pt",
  "es",
  "sk",
  "tr",
  "it",
  "cs",
  "da"
];

module.exports = async function () {
  const { rootDir, generate: { dir: generateDir } } = this.options;
  const dirPath = "locales";

  // generate foe-data in dist
  this.nuxt.hook('generate:done', async () => {
    for (const lng of supportedLocales) {
      const fileName = `${lng}.json`;
      const generateFilePath = join(generateDir, dirPath, lng, "translation.json");

      if (!existsSync(join(generateDir, dirPath, lng))) {
        if (!existsSync(join(generateDir, dirPath))) {
          mkdirSync(join(generateDir, dirPath));
        }
        mkdirSync(join(generateDir, dirPath, lng));
      }

      writeFileSync(generateFilePath, readFileSync(join(rootDir, dirPath, fileName)));
    }
  });

  // render foe-data via SSR
  this.nuxt.hook('render:setupMiddleware', () => {
    for (const lng of supportedLocales) {
      const fileName = `translation.json`;
      this.nuxt.server.useMiddleware({
        path: `${dirPath}/${lng}/${fileName}`,
        async handler(req, res) {
          res.setHeader('Content-Type', 'application/json');
          const ressource = require(join(rootDir, dirPath, `${lng}.json`));
          res.end(JSON.stringify(ressource.translation));
        }
      })
    }
  })

};
