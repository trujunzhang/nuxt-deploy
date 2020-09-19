import Express from 'express'
import next from 'next'
import Path from 'path'

import { ParseServerSetup, TwitterRouter, UploadImagesController } from './controllers'

import { IServerHelper, ServerHelper } from '@app/tools'

import { setupDebugEnv } from './config'
import { routes } from './routes'

// i18next
// ================================
import nextI18NextMiddleware from 'next-i18next/middleware'
import NextI18NextInstance from './i18n'
const nextI18next = NextI18NextInstance

// async(await) for express.js
// https://github.com/davidbanham/express-async-errors
require('express-async-errors')

setupDebugEnv()

const envPort = process.env.PORT
const port = Number(envPort) || 4000

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})

const handler = routes.getRequestHandler(app)

const serverHelper: IServerHelper = new ServerHelper(__dirname)

app.prepare().then(async() => {
  // create Express.js application
  const server: Express.Application = Express()

  server.use((req, res, next) => {
    res.set({
      // since there is no res.header class in Parse, we use the equivalent to set the response headers
      'Access-Control-Allow-Origin': '*/*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, X-Parse-Session-Token'
    })
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, X-Parse-Session-Token'
    )

    next()
  })

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  server.use(Express.static(serverHelper.getPublicPath(Path), { maxAge: 31557600000 }))
  server.use(Express.static(serverHelper.getStaticPath(Path), { maxAge: 31557600000 }))

  // ====================================
  // TWITTER ROUTES ======================
  // =====================================
  new TwitterRouter().setup(server)

  // ====================================
  // Parse Server  ======================
  // =====================================
  new ParseServerSetup(serverHelper).setup(server)

  // ====================================
  // Upload Images======================
  // ====================================
  new UploadImagesController().setup(server)

  server.get('*', (req, res) => {
    return handler(req, res)
  })
  server.use(handler)
  server.listen(port, () => {
    // if (err) {
    //   throw err
    // }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
