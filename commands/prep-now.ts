import { fileURLToPath } from 'node:url'
import { copyFileSync, readFileSync, writeFileSync } from 'node:fs'
import { consola } from 'consola'
import { colorize } from 'consola/utils'
import { dirname, resolve } from 'pathe'
import { mdToHTML } from './md-to-html.ts'
import now from '../src/constants/now.json'

export default async function newNow(): Promise<void> {
  consola.box('Preparing for a new Now page!')
  const postFileName = `${now.publishDate}.astro`
  consola.start(`Copying current now page to ${colorize('blue', postFileName)}`)

  try {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    const templateFilePath = resolve(__dirname, './now-template')
    const templateContent = readFileSync(templateFilePath, 'utf-8')

    const nowMdPath = resolve(__dirname, '../src/constants/now.md')
    const nowContent = readFileSync(nowMdPath, 'utf-8')
    const nowHtml = await mdToHTML(nowContent)

    const nowAstro = templateContent
      .replace('__title__', now.title)
      .replace('__description__', now.description)
      .replace('__publishedOn__', now.publishedOn)
      .replace('__publishDate__', now.publishDate)
      .replace('__publishState__', now.publishState)
      .replace('__content__', nowHtml)

    const newPostPath = resolve(
      __dirname,
      '../src/pages/now/and-then/posts/',
      postFileName
    )
    writeFileSync(newPostPath, nowAstro)

    /**
     * clear now.md
     */
    consola.start('Clearing now.md file...')
    const destinationMd = resolve(
      __dirname,
      '../src/constants/bkup',
      `${now.publishDate}.md`
    )
    copyFileSync(nowMdPath, destinationMd)
    writeFileSync(nowMdPath, '')
    consola.success('now.md cleared')

    /**
     * clear now.ts
     */
    consola.start('Clearing now.json file...')
    const newNowObj = Object.keys(now).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      now
    ) // Object.assign({}, now)
    newNowObj.publishDate = new Date().toISOString().split('T')[0] ?? ''
    const nowJsonPath = resolve(__dirname, '../src/constants/now.json')
    // backup file
    const destinationJson = resolve(
      __dirname,
      '../src/constants/bkup',
      `${now.publishDate}.json`
    )
    copyFileSync(nowJsonPath, destinationJson)

    writeFileSync(nowJsonPath, JSON.stringify(newNowObj, null, '\t'))

    consola.success('You may now update your Now content and props.\n')
  } catch (err) {
    consola.fail('Failed to create a new post from Now')
    consola.error(err)
  }
}
newNow()
