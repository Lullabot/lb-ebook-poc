const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Generate a collection of all books with their pages
  eleventyConfig.addCollection("booksWithPages", function (collectionApi) {
    const books = collectionApi.getFilteredByGlob("src/ebooks/*/index.html");
    const pages = collectionApi.getFilteredByGlob("src/ebooks/*/pages/*.md");

    return books.map(book => {
      const bookSlug = book.filePathStem.split('/')[2];
      const bookPages = pages
        .filter(page => page.inputPath.includes(bookSlug))
        .sort((a, b) => {
          const numA = parseInt(a.fileSlug.replace('page-', ''), 10);
          const numB = parseInt(b.fileSlug.replace('page-', ''), 10);
          return numA - numB;
        });

      return {
        book: {
          title: book.data.title,
          shortTitle: book.data.shortTitle,
          slug: bookSlug,
          url: book.url
        },
        pages: bookPages.map((page, index) => ({
          ...page.data,  // Include all frontmatter data
          title: page.data.title,
          url: page.url,
          filePathStem: page.filePathStem,
          inputPath: page.inputPath,
          tags: page.data.tags || [],  // Ensure tags is always an array
          index: index,
          previous: index > 0 ? bookPages[index - 1] : null,
          next: index < bookPages.length - 1 ? bookPages[index + 1] : null,
        }))
      };
    });
  });

  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/css/**/*.css",
  });

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("src/ebooks/**/*.png");
  eleventyConfig.addPassthroughCopy("src/ebooks/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/ebooks/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/ebooks/**/*.gif");
  eleventyConfig.addPassthroughCopy("src/js/interactions.js");

  eleventyConfig.addShortcode("image", function (src, alt, bookSlug) {
    let fullSrc = `/ebooks/${bookSlug}/images/${src}`;
    return `<img src="${fullSrc}" alt="${alt}">`;
  });

  eleventyConfig.addShortcode("img", function (src, alt, width, height, bookSlug) {
    let metadata = Image(src, {
      widths: [260, 570],
      formats: ["png"],
    });

    let data = width === 260 ? metadata.jpeg[0] : metadata.jpeg[1];

    return `<img src="${data.url}" width="${width}" height="${height}" alt="${alt}" loading="lazy" decoding="async">`;
  });

  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
