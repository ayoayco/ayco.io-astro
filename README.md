# Astro SSG for my personal site

## Background

This is the project for generating the static files for my personal site [ayo.ayco.io](https://ayo.ayco.io) built with [Astro SSG](https://astro.build).

## Development

You need [node](https://nodejs.org) and [pnpm](https://pnpm.io).

```bash
# clone project
$ git clone git@git.sr.ht:~ayoayco/ayco.io-astro

# go into project dir
$ cd ./ayco.io-astro

# install deps
$ corepack enable
$ pnpm i

```

## Commands

| Command             | Action                                    |
| ------------------- | ----------------------------------------- |
| `pnpm start`        | start dev server                          |
| `pnpm run build`    | generate static files to `dist` directory |
| `pnpm run deploy`   | run build and upload to my server         |
| `pnpm run prep:now` | back up and clear current now constants   |
