/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.kiminvestment.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/_not-found'],
};
