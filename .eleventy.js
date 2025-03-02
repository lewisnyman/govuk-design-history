const govukEleventyPlugin = require('govuk-eleventy-plugin')

module.exports = function (eleventyConfig) {
  const url = process.env.GITHUB_ACTIONS
    ? 'https://x-govuk.github.io/govuk-design-history/'
    : '/'
  const pathPrefix = process.env.GITHUB_ACTIONS
    ? '/govuk-design-history/'
    : '/'

  // Plugins
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    brandColour: '#28a',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl: 'https://x-govuk.github.io/govuk-design-history-docs/assets/opengraph-image.png',
    homeKey: 'GOV.UK Design History',
    parentSite: {
      url: 'https://x-govuk.github.io/#shared-projects',
      name: 'X-GOVUK shared projects'
    },
    pathPrefix,
    url,
    header: {
      organisationLogo: 'x-govuk',
      organisationName: 'X-GOVUK',
      productName: 'Design History',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    headingPermalinks: true,
    footer: {
      copyright: {
        text: '© X-GOVUK'
      },
      contentLicence: {
        html: 'Licensed under the <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-design-history-docs/blob/main/LICENSE.txt">MIT Licence</a>, except where otherwise stated'
      }
    }
  })

  // Pass through
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      layouts: '../node_modules/govuk-eleventy-plugin/layouts'
    },
    pathPrefix
  }
}
