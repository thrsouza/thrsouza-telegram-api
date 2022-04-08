import MessageService from '../services/MessageService.js'

class MessageController {
  async store(req, res) {
    try {
      const { name, email, message } = req.body
      await MessageService.send({ name, email, message })
      res.status(200).json({ ok: true })
    } catch (error) {
      console.log(error)
      res.status(500).json({ ok: false })
    }
  }
}

export default new MessageController()
