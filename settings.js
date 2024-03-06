//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +254714890105
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: King" //ur yt chanel name
global.socialm = "GitHub: https://github.com/Samue-l1/ClassicV2" //
global.location = "Kenya, Nairobi" //ur location

//new
global.botname = '𝐄𝐌𝐊𝐀𝐘-𝐂𝐥' //ur bot name
global.ownernumber = '254714890105' //ur owner number
global.ownername = '𝐓𝐇𝐄𝐄 𝐄𝐌𝐊𝐀𝐘' //ur owner name
global.websitex = "https://t.me/+hhQQxFUABd81MDM0"
global.wagc = "https://chat.whatsapp.com/EPSGKau0IVi7J5lyOJO7Jk"
global.themeemoji = '🪀'
global.wm = "Classic Bot Inc."
global.botscript = 'https://github.com/Samue-l1/ClassicV2' //script link
global.packname = "Sticker By"
global.author = "
global.creator = "254714890105@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["254714890105"] // Premium User
global.hituet = 𝐄𝐦𝐤𝐚𝐲 𝐤𝐢𝐧𝐠

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
