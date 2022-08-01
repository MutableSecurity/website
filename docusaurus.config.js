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
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MutableSecurity', // Usually your GitHub org/user name.
  projectName: 'mutablesecurity.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
            to: '/docs/users',
            label: 'Users Guide',
            position: 'left'
          },
          {
            to: '/docs/developers',
            label: 'Developers Guide',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/MutableSecurity',
            position: "right",
            className: "navbar-icon github",
            "aria-label": "GitHub",
          },
          {
            href: 'https://pypi.org/project/mutablesecurity/',
            position: "right",
            className: "navbar-icon pypi",
            "aria-label": "PyPi",
          },
          {
            href: 'https://linkedin.com/company/mutablesecurity',
            position: "right",
            className: "navbar-icon linkedin",
            "aria-label": "LinkedIn",
          },
          {
            href: 'https://twitter.com/mutablesecurity',
            position: "right",
            className: "navbar-icon twitter",
            "aria-label": "Twitter",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Users Guide',
                to: '/docs/users',
              },
              {
                label: 'Developers Guide',
                to: '/docs/developers',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Links',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
