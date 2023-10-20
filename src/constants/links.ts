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
    url: "https://ayco.io/gh/",
    icon: "github",
  },
  {
    url: "https://www.npmjs.com/~aayco",
    icon: "npm",
    set: "gg"
  }
];

export default links;