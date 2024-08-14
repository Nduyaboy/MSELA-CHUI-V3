//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
     case 'jarvis':
     case 'autotalk':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
           throw false
          }}
      chat.jarvis = isEnable
     break
	case 'pmblocker':
	case 'pbm':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.pmblocker = isEnable
break	  
case 'autobio':
  isAll = true
  if (!isROwner) {
  global.dfail('rowner', m, conn)
  throw false
  }
  bot.autoBio = isEnable
  break	 
      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
      case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autosticker = isEnable
      break
      case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSpam = isEnable
      break
    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
      case 'antitoxic':
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'autostatus':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      chat.viewStory = isEnable
      break

    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
      
      case 'antibotclone':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBotClone = isEnable
      break

      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'chatbot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.chatbot = isEnable
      break
     
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
      case 'autotype':
    case 'alwaysonline':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.autotype = isEnable
      break
      
      case 'anticall':
        case 'nocall':
          isAll = true
          if (!isOwner) {
            global.dfail('owner', m, conn)
            throw false
          }
          bot.antiCall = isEnable
          break
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
     if (!/[01]/.test(command)) return m.reply(`
╭━⊱⊱⊱『 *🌐𝐎𝐍/𝐎𝐅𝐅 𝐌𝐄𝐍𝐔🌐* 』⊱⊱⊱━╮

╭━━━━⊱『 *𝐎𝐖𝐍𝐄𝐑*』⊱━━━━╮
│⛊ ${usedPrefix}𝗣𝗠𝗕𝗟𝗢𝗖𝗞𝗘𝗥
│⛊ ${usedPrefix}𝗢𝗡𝗟𝗬𝗗𝗠
│⛊ ${usedPrefix}𝗚𝗥𝗢𝗨𝗣𝗢𝗡𝗟𝗬
│⛊ ${usedPrefix}𝗔𝗨𝗧𝗢𝗧𝗬𝗣𝗘
│⛊ ${usedPrefix}𝗔𝗨𝗧𝗢𝗕𝗜𝗢
│⛊ ${usedPrefix}𝗔𝗡𝗧𝗜𝗕𝗢𝗧𝗖𝗟𝗢𝗡𝗘
│⛊ ${usedPrefix}𝗔𝗡𝗧𝗜𝗖𝗔𝗟𝗟
╰━━━━━━━━━━━━━━━╯
╭━━━━⊱『 *𝐀𝐃𝐌𝐈𝐍*』⊱━━━━╮
│⛊ ${usedPrefix}𝗪𝗘𝗟𝗖𝗢𝗠𝗘
│⛊ ${usedPrefix}𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞
│⛊ ${usedPrefix}𝗗𝗘𝗧𝗘𝗖𝗧
│⛊ ${usedPrefix}𝗝𝗔𝗥𝗩𝗜𝗦
│⛊ ${usedPrefix}𝗔𝗡𝗧𝗜𝗦𝗣𝗔𝗠
│⛊ ${usedPrefix}𝗔𝗡𝗧𝗜𝗧𝗢𝗫𝗜𝗖
╰━━━━━━━━━━━━━━╯
╭━━━━⊱『 *𝗨𝗦𝗘𝗥𝗦*』⊱━━━━╮
│⛊ ${usedPrefix}𝗖𝗛𝗔𝗧𝗕𝗢𝗧 
╰━━━━━━━━━━━━━━╯
*🔻𝐄𝐗𝐀𝐌𝐏𝐋𝐄🔻 :*
*${usedPrefix}𝗢𝗡* 𝗪𝗘𝗟𝗖𝗢𝗠𝗘
*${usedPrefix}𝗢𝗙𝗙* 𝗪𝗘𝗟𝗖𝗢𝗠𝗘
`)
      throw false
  }

m.reply(`✅ *${type}* 𝘏𝘈𝘚 𝘉𝘌𝘌𝘕 *${isEnable ? '𝘈𝘊𝘛𝘐𝘝𝘈𝘛𝘌𝘋' : '𝘋𝘌𝘈𝘊𝘛𝘐𝘝𝘈𝘛𝘌𝘋'}* ${isAll ? '𝘍𝘖𝘙 𝘛𝘏𝘐𝘚 𝘎𝘙𝘖𝘜𝘗' : isUser ? '' : '𝘍𝘖𝘙 𝘛𝘏𝘐𝘚 𝘊𝘏𝘈𝘛'}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['config']
handler.command = /^((en|dis)able|(turn)?o(n|ff)|[01])$/i

export default handler
