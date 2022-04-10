import * as Yup from 'yup'

import MessageService from '../services/MessageService.js'

const validationErrorFeedbacks = [
  'No! God! Please! No!',
  'Are you testing me?',
  'This is a test and I can see you!',
]

class MessageController {
  async store(req, res) {
    try {
      const { name, email, message } = req.body

      const schema = Yup.object().shape({
        name: Yup.string().trim().required(),
        email: Yup.string().email().required(),
        message: Yup.string().trim().required(),
      })

      await schema.validate({ name, email, message }, { abortEarly: false })

      await MessageService.send({ name, email, message })
      res.status(200).json({ ok: true, message: 'Thanks for your submission!' })
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const feedbacks = validationErrorFeedbacks
        const feedback = feedbacks[Math.floor(Math.random() * feedbacks.length)]

        return res.status(400).json({
          ok: false,
          message: `${feedback} Complete all the fields correctly.`,
        })
      }

      return res.status(500).json({
        ok: false,
        message: 'Oops! There was a problem submitting your form.',
      })
    }
  }
}

export default new MessageController()
