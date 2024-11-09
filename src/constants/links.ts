export type Link = {
  url: string;
  icon: string;
  set?: string;
  text?: string;
};


export const links: Link[] = [
  {
    url: "https://ayos.blog",
    icon: "blog",
  },
  /*
  {
    url: "https://ayco.io/@ayo",
    icon: "mastodon",
    text: "social"
  },
  */
  {
    url: "/threads",
    text: "threads",
    icon: "needle-thread",
    set: "tabler"
  },
  {
    url: "https://metapixl.com/i/portfolio/ayo",
    icon: "image",
    text: "photos"
  },
  // {
  //   url: "https://www.npmjs.com/~aayco",
  //   icon: "npm",
  //   set: "gg"
  // }
  {
    url: "https://soundcloud.com/ayoayco",
    icon: "soundcloud",
    text: "music"
  }
];

export default links;

export const footerLinks = [
 {
    text: 'GitHub',
    url: 'https://github.com/ayoayco'
  },
  {
    text: 'SourceHut',
    url: 'https://sr.ht/~ayoayco'
  },
  {
    text: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayoayco'
  },
  {
    text: 'Pixelfed',
    url: 'https://metapixl.com/@ayo'
  },
  {
    text: 'SoundCloud',
    url: 'https://SoundCloud.com/ayoayco'
  },
  {
    text: 'NPM',
    url: 'https://www.npmjs.com/~aayco'
  },
  {
    text: 'Instagram',
    url: 'https://instagram.com/ayoayco'
  },
  {
    text: 'Web Tools',
    url: 'https://m.webtoo.ls/@ayo'
  },
  {
    text: 'Ayco Social',
    url: 'https://social.ayco.io'
  },
  {
    text: 'Bluesky',
    url: 'https://bsky.app/profile/ayco.io'
  }
]