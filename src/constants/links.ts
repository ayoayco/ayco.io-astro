export type Link = {
  url: string
  icon: string
  set?: string
  text?: string
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
  },
  {
    url: 'https://metapixl.com/i/portfolio/ayo',
    icon: 'image',
    text: 'photos',
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
  },
]

export default links

export const footerLinks: Link[] = [
  {
    text: 'SourceHut',
    url: 'https://sr.ht/~ayoayco',
    icon: 'sourcehut',
  },
  {
    text: 'Mastodon',
    url: 'https://social.ayco.io/@ayo',
    icon: 'mastodon',
  },
  {
    text: 'Pixelfed',
    url: 'https://metapixl.com/@ayo',
    icon: 'pixelfed',
  },
  {
    text: 'SoundCloud',
    url: 'https://SoundCloud.com/ayoayco',
    icon: 'soundcloud',
  },
  {
    text: 'GitHub',
    url: 'https://github.com/ayoayco',
    icon: 'github',
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayoayco',
    icon: 'linkedin',
  },
  {
    text: 'NPM',
    url: 'https://www.npmjs.com/~aayco',
    icon: 'npm',
  },
  // {
  //   text: 'Instagram',
  //   url: 'https://instagram.com/ayoayco',
  //   icon: 'instagram',
  // },
  {
    text: 'Bluesky',
    url: 'https://bsky.app/profile/ayco.io',
    icon: 'bluesky',
  },
]
