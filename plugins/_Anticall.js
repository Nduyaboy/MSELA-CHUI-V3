const { WAMessageStubType } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

export async function all(m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.antiCall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO )) {
	    await delay(1000) 
		await conn.reply(m.chat, `*🐯We apologize, at the moment we cannot receive calls, whether in a group or private.*

*📌If you need help or request a feature, please message the owner. Contacting bots is not good because you are annoying the bot owner. Please respect the policy of using bots. You will be banned now so that you do not repeat the same thing again with any bot.*
*You can unban yourself by contacting Owner.*`, m)
    
		return conn.updateBlockStatus(m.chat, "block") 
	}
}
