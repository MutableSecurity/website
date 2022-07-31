// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MutableSecurity',
  tagline: 'Seamless deployment and management of cybersecurity solutions',
  url: 'https://mutablesecurity.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
        title: 'MutableSecurity',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/MutableSecurity',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://pypi.org/project/mutablesecurity/',
            label: 'PyPi',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sitemap',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Guides',
                to: '/docs/intro',
              },
              {
                label: 'Bog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'References',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MutableSecurity',
              },
              {
                label: 'PyPi',
                href: 'https://pypi.org/project/mutablesecurity/',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/mutablesecurity',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mutablesecurity',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MutableSecurity`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
