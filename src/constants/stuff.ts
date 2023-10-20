
export const stuff: {
  icon: string;
  text: string;
  link?: {url: string, text: string};
}[] = [
  {
    icon: '🧐',
    text: 'Software Extraordinaire'
  },
  {
    icon: '🕵🏻‍♂️',
    text: 'Frontend Detective'
  },
  {
    icon: '😱',
    text: 'Building',
    link: {
      url: 'https://mc-fly.vercel.app',
      text: 'McFly'
    }
  },
  {
    icon: '🧸',
    text: 'Creator of',
    link: {
      url: 'https://cozy-reader.vercel.app',
      text: 'Cozy'
    }
  },
//   {
//     icon: '🧱',
//     text: '...and some',
//     link: {
//       url: '/stuff',
//       text: 'small stuff'
//     }
//   },
  {
    icon: '🦌',
    text: 'Contributor to',
    link: {
      url: 'https://elk.zone/@ayo@ayco.io',
      text: 'Elk.zone'
    }
  }
]