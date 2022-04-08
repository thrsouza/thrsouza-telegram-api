import { Telegraf } from 'telegraf'

class MessageService {
  async send({ name, email, message }) {
    const msg = `
You've received a new submission from Contact Form!

-
Name: ${name}
Email: ${email}
-
${message}
-

https://www.thiagosouza.com
    `

    const bot = new Telegraf(process.env.BOT_TOKEN)
    bot.telegram.sendMessage(process.env.CHAT_ID, msg)
  }
}

export default new MessageService()
