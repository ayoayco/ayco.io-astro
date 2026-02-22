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

You can do this by adding a `.env` file with the following content (replace the IP):

```bash
# .env
HOST=123.456.789.00
```

There is a service worker (`src/sw.mjs`) that caches assets on client browsers. For cache invalidation, the version property in package.json is used. Increment the version via `npm version patch` (or `minor`, `major`) if there is a significant change in the website's assets.

If you want to run build before deploying, do `npm run build:deploy`

## Auto-mirror to various code forges

The power of git lies within its decentralized nature. I push this project to three different code forges, because I'm paranoid like that. No, I just like to show off. I do this with a post-commit hook that automatically calls "git push <repo> --mirror", and you can see that in the `.husky/post-commit` file.

---

_Just keep building._<br />
_~Ayo_
