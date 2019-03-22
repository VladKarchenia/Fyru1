// Bot name - ReminderBot
// Bot username - Reminder_fyru_bot

const Telegraf = require('telegraf')

const TOKEN = '773180252:AAFo57suCxZx_RgDvave66SGqrsJVTSl2dE'

const bot = new Telegraf(TOKEN)
bot.start((ctx) => {
  // console.log(ctx)
  // console.log(ctx.update.message)
  ctx.reply('Welcome')
})

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears((msg, ctx) => {
  console.log(msg)
  ctx.reply('Hey there')
})
bot.launch()
