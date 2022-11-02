// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CodeWithVishakha',
  tagline: 'Come Fly The Friendly Frontend.',
  url: 'fascinating-pudding-6ae6ab.netlify.app',
  baseUrl: '/my_docusaurus_website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Vishakha-Sawra', // Usually your GitHub org/user name.
  projectName: 'my-docusaurus-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CodeWithVishakha',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Courses', position: 'right'},
          {to: '/login', label: 'Login', position: 'right'},
          {to: '/about', label: 'About', position: 'right'},
          {
            href: 'https://github.com/Vishakha-Sawra',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Vishakha-Sawra',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCsK0TtSkJAjn-FdaeVreVFA',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.youtube.com/channel/UCsK0TtSkJAjn-FdaeVreVFA',
              },
              {
                label: 'Email',
                href: 'https://www.youtube.com/channel/UCsK0TtSkJAjn-FdaeVreVFA',
              },
              {
                label: 'Instagram',
                href: 'https://www.youtube.com/channel/UCsK0TtSkJAjn-FdaeVreVFA',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vishakha Sawra`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
