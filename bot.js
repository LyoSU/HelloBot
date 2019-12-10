const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

async function main () {
  bot.telegram.sendMessage(66478514, 'Hello from GitHub Actions!')
}

;(async () => {
  await main()
})()

bot.use(async (ctx, next) => {
  ctx.reply('Hello from GitHub Actions!')
})

bot.launch().then(() => {
  console.log('bot start polling')
})
