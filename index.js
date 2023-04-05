const { Telegraf } = require('telegraf')

const bot = new Telegraf('bot token')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => {
    
        ctx.telegram.sendDocument(ctx.from.id,{
            source:'C:\/Users\/user\/Desktop\/bot\/youffile.pdf',
            filename:'1.pdf'
    
        })
    
    //ctx.reply('Hey there')
    
    
})

bot.launch()
