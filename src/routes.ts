import { Router } from 'express'
import { AuthUserController } from 'controllers/AuthUserController'

const router = Router()

router.get('/github', (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID ?? ''
  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${clientId}`

  res.redirect(GITHUB_AUTH_URL)
})

router.get('/signin/callback', (req, res) => {
  const { code } = req.query

  return res.json({ code })
})

router.post('/auth', new AuthUserController().handle)

export { router }
