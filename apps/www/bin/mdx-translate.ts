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

const zhPath = "./content/docs/zh/"
const readFiles = (path: string) => {
  const filePath = resolve(zhPath, path)
  const files = fs.readdirSync(filePath)
  files.forEach((name) => {
    const fileName = path === "." ? name : `${path}/${name}`
    if (!fileName.includes(".")) {
      readFiles(fileName)
      return
    }
    const value = db.get(fileName)
    if (value === undefined) {
      db.set(fileName, false)
    }
  })
}

readFiles(".")

console.log(db.data)

const translateContent = (content: string) =>
  run("@cf/meta/llama-2-7b-chat-fp16", {
    model: "gemini-1.5-flash-latest",
    messages: [
      { role: "system", content: mdxTranslatePrompts },
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
      const filePath = resolve(zhPath, key)
      const content = fs.readFileSync(filePath, encoding)
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
