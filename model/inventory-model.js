import * as fs   from "fs/promises"

export const  getJSON = async () =>{
   return JSON.parse(await fs.readFile("./db/inventory.json","utf8"))
}
export const  setJSON = async (payload) =>{
   return await fs.writeFile("./db/inventory.json",JSON.stringify(payload))
}