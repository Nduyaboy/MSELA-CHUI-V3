import axios from 'axios';
import fs from 'fs';

const handler = async (m, { conn, args, command }) => {
  if (!args[0]) throw '🚩Provide a link...';
  const userUrl = args[0];

  const apiUrl = `https://skizo.tech/api/download?url=${encodeURIComponent(userUrl)}&apikey=${global.xzn}`;

  try {
    const response = await axios.get(apiUrl);
    const videoUrl = response.data.url[0].url;

    await m.reply(`Downloading the video ${videoUrl}`);

    const videoResponse = await axios({
      method: 'GET',
      url: videoUrl,
      responseType: 'stream',
    });

    const videoName = `video-${Date.now()}.mp4`;
    const videoPath = `./${videoName}`;

    const writer = fs.createWriteStream(videoPath);
    videoResponse.data.pipe(writer);

    writer.on('finish', async () => {
      await conn.sendFile(m.chat, fs.readFileSync(videoPath), videoName, '', m);

      fs.unlinkSync(videoPath);

      m.reply('The video was successfully downloaded and sent!');
    });

    writer.on('error', (err) => {
      m.reply(`There was an error while downloading the video: ${err.message}`);
    });
  } catch (error) {
    m.reply(`An error occurred: ${error.message}`);
  }
};

handler.help = ['all'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(alldl|getvideo|gett)$/i;

export default handler;
