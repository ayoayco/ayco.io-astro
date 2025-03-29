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

export const footerLinks = [
  {
    text: 'SourceHut',
    url: 'https://sr.ht/~ayoayco',
  },
  {
    text: 'GitHub',
    url: 'https://github.com/ayoayco',
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayoayco',
  },
  {
    text: 'Pixelfed',
    url: 'https://metapixl.com/@ayo',
  },
  {
    text: 'SoundCloud',
    url: 'https://SoundCloud.com/ayoayco',
  },
  {
    text: 'NPM',
    url: 'https://www.npmjs.com/~aayco',
  },
  {
    text: 'Instagram',
    url: 'https://instagram.com/ayoayco',
  },
  {
    text: 'Mastodon',
    url: 'https://main.elk.zone/social.ayco.io/@ayo',
  },
]
