import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw ` ${mssg.example} :\n${usedPrefix + command} Aya hai bulawa naat`
  let res = await yts(text)
  let vid = res.videos[0]
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!vid) throw 'CouldnT found try an other name'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `╭━━━━⊱𝗣𝗥𝗜𝗡𝗖𝗘 𝗣𝗟𝗔𝗬𝗘𝗥⊱━━━━❣️
*🎉 ${mssg.title}:* ${title}
*🖇️ ${mssg.link}:* ${url}
*📆 ${mssg.aploud}:* ${publishedTime}
*⌚ ${mssg.duration}:* ${durationH}
*👀 ${mssg.views}:* ${viewH}
*📃 ${mssg.desc}:* ${description}
╰━━━━━━━⚡𝑷-𝑴𝑫⚡━━━━━━━❣️`

conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: vap,
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: "⚡𝑷-𝑴𝑫⚡",
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }
  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['song','play']
handler.tags = ['downloader']
handler.command = /^song|play$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
