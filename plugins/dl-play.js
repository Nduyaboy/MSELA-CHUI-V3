import ytdl from 'youtubedl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
const streamPipeline = promisify(pipeline);

var handler = async (m, {
  conn,
  command,
  text,
  usedPrefix
}) => {
  if (!text) {
    throw `${mssg.example}: ${usedPrefix + command} Naat`;
  }
  m.reply(wait);
  try {
    let results = await yts(text);
    let tes = results.all[0]
    let {
      title,
      thumbnail,
      timestamp,
      views,
      ago,
      url
    } = tes;
    let teks = "\n*" + title + "*" + "\n\n*${mssg.duration}:* " + timestamp + "\n*${mssg.views}:* " + views + "\n*${mssg.aploud}:* " + ago + "\n*${mssg.link}:* " + url + "\n";
    let msg = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': teks
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': packname
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false,
              ...(await prepareWAMessageMedia({
                'image': {
                  'url': thumbnail
                }
              }, {
                'upload': conn.waUploadToServer
              }))
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Audio🎵\",\"id\":\".yta " + url + "\"}"
              }, {
                'name': "quick_reply",
                'buttonParamsJson': "{\"display_text\":\"Video📹\",\"id\":\".ytv " + url + "\"}"
              }]
            })
          })
        }
      }
    }, {
      'quoted': m
    });
    return await conn.relayMessage(m.chat, msg.message, {});
  } catch (err) {
    conn.sendFile(m.chat, eror, "anu.mp3", null, m, true, {
      'type': "audioMessage",
      'ptt': true
    });
  }
};

handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(play|song|lagu|music)$/i;


export default handler;
