import path from "node:path"
import fs from "fs-extra"

import { DataBase } from "./db"
import mdxTranslatePrompts from "./prompts/mdxTranslatePrompts"

const resolve = (...pathSegments: string[]) =>
  path.resolve(process.cwd(), ...pathSegments)

const db = new DataBase(resolve("./bin/translateData.json"))

async function run(model: string, input: any) {
  const response = await fetch(
    `https://gemini-openai-proxy.deno.dev/v1/chat/completions`,
    {
      headers: {
        Authorization: "Bearer AIzaSyCh116nRVxPxjrSdI6r2KuyP5pqJe2daPA",
      },
      method: "POST",
      body: JSON.stringify(input),
    }
  )
  const result = await response.json()
  return result
}

// const docsPath = resolve("./content/docs/zh/")
const encoding = "utf8"

// const files = fs.readdirSync(docsPath)

const docsPath = "./content/docs"
// const langs = ["Japanese"]
let currentLang = "jp"
const readFiles = (path: string) => {
  const zhPath = `${docsPath}/zh`
  const filePath = resolve(zhPath, path)
  const files = fs.readdirSync(filePath)
  files.forEach((name) => {
    const fileName = path === "." ? name : `${path}/${name}`
    if (!fileName.includes(".")) {
      readFiles(fileName)
      return
    }
    const langFileName = `${currentLang}/${fileName}`
    const value = db.get(langFileName)
    if (value === undefined) {
      db.set(langFileName, false)
    }
  })
}

readFiles(".")

console.log(db.data)

const translateContent = (content: string) =>
  run("@cf/meta/llama-2-7b-chat-fp16", {
    model: "gemini-1.5-flash-latest",
    messages: [
      { role: "system", content: mdxTranslatePrompts("Japanese") },
      {
        role: "user",
        content: content,
      },
    ],
  })

async function bootstrap() {
  for (const key in db.data) {
    if (!db.data[key]) {
      console.log("[start]", key)
      const originPath = resolve(docsPath, key.replace('jp/', 'en/'))
      const content = fs.readFileSync(originPath, encoding)
      // console.log("🚀 ~ bootstrap ~ content:", content)

      const filePath = resolve(docsPath, key)
      // console.log("🚀 ~ bootstrap ~ filePath:", filePath)
      fs.ensureFileSync(filePath)
      const ret = await translateContent(content)
      fs.writeFileSync(filePath, ret.choices[0].message.content)
      db.set(key, true)
      console.log("success:", key)
    } else {
      console.log("[done]", key)
    }
  }
}

bootstrap()
// const content = fs.readFileSync(filePath, encoding)
// console.log("content", content)

// run("@cf/meta/llama-2-7b-chat-fp16", {
//   model: "gemini-1.5-flash-latest",
//   messages: [
//     { role: "system", content: mdxTranslatePrompts },
//     {
//       role: "user",
//       content: content,
//     },
//   ],
// }).then((data) => {
//   // console.log(JSON.stringify(data))
//   return fs.writeFileSync(filePath + '.zh.mdx', data.choices[0].message.content)
// })
