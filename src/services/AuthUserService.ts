import axios from 'axios'

class AuthUserService {
  async execute (code: string): Promise<any> {
    const url = 'https://github.com/login/oauth/access_token'
    const params = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    }

    const headers = { Accept: 'application/json' }

    const response = await axios.post(url, null, { headers, params })

    return response.data
  }
}

export { AuthUserService }
