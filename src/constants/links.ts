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
