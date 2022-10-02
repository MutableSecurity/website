// @ts-check

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
  favicon: 'images/favicon.ico',
  organizationName: 'MutableSecurity',
  projectName: 'mutablesecurity.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false
            }
          };
        }
      };
    },
    './src/plugins/docusaurus-plugin-hotjar'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        googleAnalytics: {
          trackingID: 'UA-212855640-1',
          anonymizeIP: true
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MutableSecurity',
        logo: {
          alt: 'Logo',
          src: 'images/logo.svg'
        },
        items: [
          {
            to: '/docs/users/',
            label: 'Users Guide',
            position: 'left'
          },
          {
            to: '/docs/developers/',
            label: 'Developers Guide',
            position: 'left'
          },
          {
            to: '/blog/',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://dash.mutablesecurity.io',
            label: 'Dash',
            className: 'dash-link',
            position: 'left'
          },
          {
            href: 'https://github.com/MutableSecurity',
            position: 'right',
            className: 'navbar-icon github',
            'aria-label': 'GitHub'
          },
          {
            href: 'https://pypi.org/project/mutablesecurity',
            position: 'right',
            className: 'navbar-icon pypi',
            'aria-label': 'PyPi'
          },
          {
            href: 'https://linkedin.com/company/mutablesecurity',
            position: 'right',
            className: 'navbar-icon linkedin',
            'aria-label': 'LinkedIn'
          },
          {
            href: 'https://twitter.com/mutablesecurity',
            position: 'right',
            className: 'navbar-icon twitter',
            'aria-label': 'Twitter'
          },
          {
            href: 'https://www.youtube.com/channel/UCUtehFPhcG3Vi-EatUFz2nA',
            position: 'right',
            className: 'navbar-icon youtube',
            'aria-label': 'YouTube'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Home',
                to: '/'
              },
              {
                label: 'Users Guide',
                to: '/docs/users/'
              },
              {
                label: 'Developers Guide',
                to: '/docs/developers/'
              },
              {
                label: 'Blog',
                to: '/blog/'
              },
              {
                label: 'Dash',
                href: 'https://dash.mutablesecurity.io'
              }
            ]
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MutableSecurity'
              },
              {
                label: 'PyPi',
                href: 'https://pypi.org/project/mutablesecurity'
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/mutablesecurity'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mutablesecurity'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCUtehFPhcG3Vi-EatUFz2nA'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MutableSecurity`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: lightCodeTheme
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
      metadata: [
        {
          property: 'og:url',
          content: 'https://www.mutablesecurity.io'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'MutableSecurity'
        },
        {
          property: 'og:description',
          content:
            'Seamless deployment and management of cybersecurity solutions'
        },
        {
          property: 'og:image',
          content: 'https://www.mutablesecurity.io/images/link-preview.png'
        },
        {
          property: 'og:image:alt',
          content: 'Preview'
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '630'
        }
      ],
      hotjar: {
        siteId: '2707232'
      }
    })
};

module.exports = config;
