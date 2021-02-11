import * as dotenv from "dotenv"
import * as express from "express"
dotenv.config()
import { Config, DB } from "./service/index.service"
import { TrackRepository } from "./repository/track.repository"

const app = express()
var cors = require('cors');

app.use(cors())

app.get('/', (req: any, res: any) => {
    res.send({ message: "Ok group6" })
})

app.get('/tracks', (req: any, res: any) => {
  const limit = req.query.limit

  TrackRepository.getTracks(limit)
      .then((tracks: any) => {
          res.send(tracks)
      }).catch(e => {
          // logs?
          res.status(500).send({ error: e.toString() })
      })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
}) 
