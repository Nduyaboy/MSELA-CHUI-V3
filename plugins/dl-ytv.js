
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed'
let limit = 320
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
	if (!args || !args[0]) throw `✳️ ${mssg.example} :\n${usedPrefix + command} past your Yt link here`
    if (!args[0].match(/youtu/gi)) throw `❎ ${mssg.noLink('YouTube')}`
	 let chat = global.db.data.chats[m.chat]
	 m.react(rwait) 
	
	 let q = args[1] || '360p'
 try {
		const yt = await fg.ytv(args[0], q)
		let { title, dl_url, quality, size, sizeB } = yt
        let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 Downloading', ` ${isLimit ? `≡  *𝗬𝗢𝗨𝗧𝗨𝗕𝗘*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ Download Completed' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
     
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp4', `
 
╭━━━━⊱𝗬𝗢𝗨𝗧𝗨𝗕𝗘⊱━━━━𓅓 
*📌${mssg.title}:* ${title}
*🎞️${mssg.quality}:* ${quality}
*⚖️${mssg.size}:* ${size}
╰━━━━━𝗣-𝗠𝗗━━━━━━𓅓`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done) 
 	} catch {
 	
	try {
	let yt = await fg.ytmp4(args[0], q)
    let { title, size, sizeB, dl_url, quality } = yt
  
  let isLimit = limit * 1024 < sizeB 
 
  await conn.loadingMsg(m.chat, '📥 Downloading', ` ${isLimit ? `≡  *𝗬𝗢𝗨𝗧𝗨𝗕𝗘*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ Download Completed' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
	  
if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp4', `
 ≡  *FG YTDL 2*
  
▢ *📌${mssg.title}* : ${title}
*🎞️${mssg.quality}:* ${quality}
▢ *⚖️${mssg.size}* : ${size}
`.trim(), m, false, { asDocument: chat.useDocument })
		m.react(done)
		
	} catch {
		await m.reply(`❎ ${mssg.error}`)
	}
		} 
}
handler.help = ['ytmp4 <link yt>']
handler.tags = ['dl'] 
handler.command = ['ytmp4', 'fgmp4', 'ytv']
handler.diamond = false

export default handler
