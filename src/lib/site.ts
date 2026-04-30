export const SITE = {
  name: 'Will Yennie',
  shortName: 'wy',
  domain: 'willyennie.dev',
  url: 'https://willyennie.dev',
  description:
    'Will Yennie, full-stack engineer based in NYC. Personal site, work, projects.',
  email: 'wryennie@gmail.com',
  github: 'https://github.com/wyennie',
  linkedin: 'https://www.linkedin.com/in/will-yennie',
  location: 'New York, NY',
  available: true,
} as const;

export const NAV = [
  { href: '/', label: 'index' },
  { href: '/work', label: 'work' },
  { href: '/projects', label: 'projects' },
  { href: '/writing', label: 'writing' },
  { href: '/now', label: 'now' },
] as const;
