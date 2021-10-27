import { Request, Response } from 'express'
import { AuthUserService } from 'services/AuthUserService'

class AuthUserController {
  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const service = new AuthUserService()

      const result = await service.execute(req.body.code)

      return res.json(result)
    } catch (error) {
      const errorStatus = error?.code ?? 500
      const errorMessage = error?.message ?? 'Ocorreu um erro'

      return res.status(errorStatus).json({ error: errorMessage })
    }
  }
}

export { AuthUserController }
