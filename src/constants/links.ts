export type Link = {
  url: string
  icon: string
  set?: string
  text?: string
  excludeHCard?: boolean
}

export const links: Link[] = [
  {
    url: 'https://ayos.blog',
    icon: 'blog',
  },
  {
    url: '/threads',
    text: 'threads',
    icon: 'needle-thread',
    set: 'tabler',
    excludeHCard: true,
  },
  {
    url: 'https://metapixl.com/i/portfolio/ayo',
    icon: 'image',
    text: 'photos',
    excludeHCard: true,
  },
  // {
  //   url: "https://www.npmjs.com/~aayco",
  //   icon: "npm",
  //   set: "gg"
  // }
  {
    url: 'https://soundcloud.com/ayoayco',
    icon: 'soundcloud',
    text: 'music',
    excludeHCard: true,
  },
]

export default links

export const footerLinks: Link[] = [
  {
    text: "Ayo's Forge",
    url: 'https://git.ayo.run/ayo/',
    icon: 'git',
  },
  {
    text: 'SourceHut',
    url: 'https://sr.ht/~ayoayco',
    icon: 'sourcehut',
  },
  {
    text: 'GitHub',
    url: 'https://ayco.io/gh',
    icon: 'github',
  },
  {
    text: 'Mastodon',
    url: 'https://social.ayco.io/public/local',
    icon: 'mastodon',
  },
  {
    text: 'Pixelfed',
    url: 'https://metapixl.com/@ayo',
    icon: 'pixelfed',
  },
  {
    text: 'Bluesky',
    url: 'http://bsky.app/profile/ayo.ayco.io',
    icon: 'bluesky',
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayoayco/',
    icon: 'linkedin',
  },
]

export const socialLinks: Link[] = [
  /**
   * TODO: add all socials to about page
   */
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayoayco',
    icon: 'linkedin',
    excludeHCard: true,
  },
  {
    text: 'NPM',
    url: 'https://www.npmjs.com/~aayco',
    icon: 'npm',
    excludeHCard: true,
  },
  {
    text: 'Instagram',
    url: 'https://instagram.com/ayoayco',
    icon: 'instagram',
    excludeHCard: true,
  },
]
