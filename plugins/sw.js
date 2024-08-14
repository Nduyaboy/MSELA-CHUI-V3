let handler = async (m, { conn }) => {
	if (m.quoted?.chat != 'status@broadcast') throw `Quote Status Messages`
	let buffer = await m.quoted.download()
	await conn.sendFile(m.chat, buffer, '', m.quoted.text || '', null, false, { quoted: m }).catch(_ => m.reply(m.quoted.text || ''))
}

handler.help = ['downloadsw']
handler.tags = ['tools']
handler.command = /^(swsave|statussave)$/i

export default handler
