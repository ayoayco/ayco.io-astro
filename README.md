# Astro SSG for my personal site

## Background

This is the project for generating the static files for my personal site [ayo.ayco.io](https://ayo.ayco.io) built with [Astro SSG](https://astro.build).

## Development

You need [node](https://nodejs.org) and [pnpm](https://pnpm.io).

```bash
# clone project
$ git clone https://git.ayo.run/ayo/ayco.io-astro

# go into project dir
$ cd ./ayco.io-astro

# install deps
$ pnpm i

```

## Commands

| Command             | Action                                         |
| ------------------- | ---------------------------------------------- |
| `pnpm run dev`      | start dev server                               |
| `pnpm run build`    | generate static files to `dist` directory      |
| `pnpm run deploy`   | upload to my server                            |
| `pnpm run prep:now` | back up and clear current `now page` constants |

## Deployment

For the script `npm run deploy`, you need to add an environmental variable named HOST containing the IP address of the host server. This will scp the build files into the server.

If you want to run build before deploying, do `npm run build:deploy`

---

_Just keep building._<br />
_~Ayo_
