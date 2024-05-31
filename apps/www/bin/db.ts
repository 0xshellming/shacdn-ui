import fs from "fs-extra"

export class DataBase {
  data: { [key: string]: any }
  constructor(private readonly path: string) {
    this.data = fs.readJsonSync(path)
  }

  set(name: string, value: boolean) {
    console.log("set", name, value)
    this.data[name] = value
    fs.writeJSONSync(this.path, this.data)
  }

  get(name: string) {
    return this.data[name]
  }
}
