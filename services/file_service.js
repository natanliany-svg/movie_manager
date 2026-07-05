import fs from 'fs'

// const fs = require('fs/promises')
import readlineSync from 'readline-sync';





export function readTheFile(){
  const data = new Promise((res, rej) => {
    fs.readFile("./data/movies.json", "utf-8" , (err,data)=>{
    if (err)return rej(err)
    res(JSON.parse(data))
  })})
  return data
}

export function writeTheFile(movies){
  return new Promise((res , rej) => {
    fs.writeFile(`./data/movies.json` , JSON.stringify(movies,null,2),"utf-8" , (err) => {
      if(err) return rej (err)
      res("בוצע")
    })
    })
}

// const read = readTheFile()
// setTimeout(() => {
//     console.log(read) 
// }
// , 5000);
