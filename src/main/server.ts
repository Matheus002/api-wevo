import  express, { request, response } from "express"

import "../db"

const app = express()

app.get('/', (request, response) => {
  return response.json({message: "Olá Wevo"})
})


app.listen(3333, () => console.log('Server running at http://localhost:3333'))