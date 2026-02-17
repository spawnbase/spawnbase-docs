// @ts-check
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'
import posthog from 'astro-posthog'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.spawnbase.ai',
  prefetch: true,
  integrations: [
    posthog({
      posthogKey: import.meta.env.PUBLIC_POSTHOG_KEY,
      api_host: 'https://us.i.posthog.com',
    }),
    starlight({
      title: 'Spawnbase',
      description:
        'Documentation for Spawnbase — the visual AI agent builder. Guides, API reference, and tutorials for building automated workflows with AI.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://docs.spawnbase.ai/og-image.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://docs.spawnbase.ai/og-image.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
        },
      ],
      components: {
        Head: './src/components/Head.astro',
      },
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/9GQ4bXJQt9',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/spawnbase/spawnbase/edit/main/apps/docs/',
      },
      customCss: ['./src/styles/global.css'],
      sidebar: [
        { label: 'Quickstart', slug: 'quickstart' },
        {
          label: 'Agents',
          items: [
            { label: 'Overview', slug: 'agents/overview' },
            { label: 'Build', slug: 'agents/build' },
            { label: 'Deploy', slug: 'agents/deploy' },
          ],
        },
        {
          label: 'Nodes',
          items: [
            { label: 'Overview', slug: 'nodes/overview' },
            {
              label: 'Triggers',
              items: [
                { label: 'Schedule', slug: 'nodes/trigger/schedule' },
                { label: 'Manual', slug: 'nodes/trigger/manual' },
              ],
            },
            {
              label: 'AI',
              items: [
                { label: 'AI Agent', slug: 'nodes/ai/agent' },
                { label: 'MCP Servers', slug: 'nodes/ai/mcp-servers' },
              ],
            },
            {
              label: 'Actions',
              items: [
                { label: 'App Actions', slug: 'nodes/action/apps' },
                { label: 'Airtable', slug: 'nodes/action/airtable' },
                { label: 'Discord', slug: 'nodes/action/discord' },
                { label: 'GitHub', slug: 'nodes/action/github' },
                { label: 'Gmail', slug: 'nodes/action/gmail' },
                { label: 'Google Drive', slug: 'nodes/action/google_drive' },
                { label: 'Google Sheets', slug: 'nodes/action/google_sheets' },
                { label: 'HubSpot', slug: 'nodes/action/hubspot' },
                { label: 'Jira', slug: 'nodes/action/jira' },
                { label: 'Linear', slug: 'nodes/action/linear' },
                { label: 'Notion', slug: 'nodes/action/notion' },
                { label: 'PagerDuty', slug: 'nodes/action/pagerduty' },
                { label: 'PostHog', slug: 'nodes/action/posthog' },
                { label: 'Sentry', slug: 'nodes/action/sentry' },
                { label: 'Slack', slug: 'nodes/action/slack' },
                { label: 'Typeform', slug: 'nodes/action/typeform' },
              ],
            },
            { label: 'Troubleshooting', slug: 'nodes/troubleshooting' },
          ],
        },
      ],
    }),
  ],
  vite: {
    // @ts-ignore - Astro 5.x uses Vite 6.x internally, but @tailwindcss/vite types are for Vite 7.x
    plugins: [tailwindcss()],
  },
})
