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
  {
    url: "https://ayco.io/@ayo",
    icon: "mastodon",
    text: "social"
  },
  {
    url: "https://metapixl.com/i/portfolio/ayo",
    icon: "image",
    text: "photos"
  },
  {
    url: "https://www.npmjs.com/~aayco",
    icon: "npm",
    set: "gg"
  }
];

export default links;
