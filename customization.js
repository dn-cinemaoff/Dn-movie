const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  ARTISTS:[
      "Ranwan Liyanage original",
      "Amal Perera original",
      "Clarence Wijewardena original",
      "Sunil Edirisinghe original",
      "Victor Ratnayake original",
      "Nanda Malini original",
      "Sanuka Wickramasinghe original",
      "Kasun Kalhara original",
      "Uresha Ravihari original",
      "Dinesh Kanagaratnam original"
    ],
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `
✘◍ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

⭕ *ᎷϴᏙᏆᎬ ႮᏢᎠᎪͲᎬ ᏟᎻᎪΝΝᎬᏞ*➻
https://whatsapp.com/channel/0029VbAXPal4yltU1ep32l0H

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⏰ Time Now : ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃☠️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🎃 𝙱𝚘𝚝 : 𝙳𝙸𝙻𝙰 V${packageJson.version}
┃🧩 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃🎡 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📡 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃💡 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🧸 𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🧮 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃🪅 𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
        `.trim();
  },
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎀 *𝑫𝑰𝑳𝑨 TIKTOK DOWNLOADER* 🎀

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
❄️ 𝑫𝑰𝑳𝑨 FB DOWNLOADER ❄️
    
🌬️ TITLE 🌬️ ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
🪼 𝑫𝑰𝑳𝑨 TWITTER DOWNLOADER 🪼

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "https://i.ibb.co/WNw4s8dY/Flux-Dev-A-hyperdetailed-fantasy-poster-of-a-beautiful-young-w-3.jpg",
  ALIVEVOICE: "./src/media/Auto_voice/alive.aac",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
🐤 𝑫𝑰𝑳𝑨 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 🐤

✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⏰ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃☠️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🎃 𝙱𝚘𝚝 : 𝑫𝑰𝑳𝑨 V${packageJson.version}
┃🧩 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃🎡 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📡 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃💡𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🧮 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃🪅 𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

🧸 ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 𝑫𝑰𝑳𝑨🫟
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🔮 *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${movieData.title}
🪄 *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${movieData.rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.metadata?.releaseDate || "𝙽/𝙰"}
🌍 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${movieData.metadata?.country || "𝙽/𝙰"}
⏰ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${movieData.metadata?.runtime || "𝙽/𝙰"}
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🔮 *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* 𝘾𝙝𝙚𝙘𝙠 𝙞𝙩 𝙤𝙪𝙩 → ${title}
       
🪄 *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌍 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏰ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"} 
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

📺 *𝚃𝚅 𝚂𝚑𝚘𝚠:* ${movieResponse.episodeInfo?.title || "𝙽/𝙰"}
🎞️ *𝙴𝚙𝚒𝚜𝚘𝚍𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}
📅 *𝙳𝚊𝚝𝚎:* ${movieResponse.episodeInfo?.date || "𝙽/𝙰"}
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🔮 *𝙼𝚘𝚟𝚒𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieData.data.title}
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.data.releaseDate}
🌍 *𝙽𝚎𝚝𝚠𝚘𝚛𝚔:* ${movieData.data.network}
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🔮 *𝚃𝚒𝚝𝚕𝚎:* ${title}  
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${releaseDate}  
🌍 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:*  ${country}      
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🔮 ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🔮 *𝚃𝚒𝚝𝚕𝚎:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏰ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿
──────────────────
🔮 *Title:* ${title}
🪄 *Rating:* ${rating}

📃 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿  
        
🔮 ${movieData.title}  
🪄 Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿  

🔮 *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
🪄 *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating}
📅 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${year}
⏰ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${duration}
        `.trim();
  },
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎺 SONG DOWNLOADER
      
✅ Song Found!
          
• 🪗 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• ⛓‍💥 *Link:* ${data.url}
          
🎧 Enjoy your music with 𝑫𝑰𝑳𝑨 Bot  
❤️ Created by DILAKSHA PRABATH 
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎯 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🦠 *Enjoy the video brought to you by DILA Bot!* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎊 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🏮 *Title:* ${data.title}
• ⏰ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• ⛓‍💥 *Link:* ${data.url}
          
🧧 Enjoy your music with 𝑫𝑰𝑳𝑨 Bot  
❤️ Created by DILAKSHA PRABATH 
        `.trim();
  },
  YTMP4: function (data) {
    return `
🧬 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🧲 *Enjoy the video brought to you by DILA🪄* 
        `.trim();
  },
  //=====================hiru news===========================================
  AUTONEWS: function (source, newsData, isGroup, groupMetadata, conf) {
    return `
📰 *『  𝑫𝑵 𝑵𝑬𝑾𝑺 』* 🗞️

✨ *${source.toUpperCase()} News Update*

📌 *Title:* ${newsData.title}
📅 *Date:* ${newsData.date || "N/A"}

📝 *Description:*
${newsData.desc || "No details available"}
${isGroup ? `\n\n📨 *Shared In:* ${groupMetadata?.subject || "Group"}\n🛡️ *Admin:* ${conf.MNAME}\n` : ""}
🔗 *Read more:* ${newsData.url}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`.trim();
  },
  AUTOMOVIE: function (title, rating, metadata, description, isGroup, groupMetadata, conf) {
    return `
📽️ *『 𝐃𝐍 𝐌𝐎𝐕𝐈𝐄𝐒 』* 🍿

🔮 *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
🪄 *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌍 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏰ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres?.map(g => `#${g}`).join(" • ") || "𝙽/𝙰"}

${isGroup ? `📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupMetadata?.subject || "Group"}\n🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}` : ""}

📝 *𝙈𝚘𝚟𝚒𝚎 𝙎𝚞𝚖𝚖𝚊𝚛𝚢:*
${description || "— 𝙉𝙤 𝙙𝙚𝙩𝙖𝙞𝙡𝙨 𝙖𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 —"}

━━━━━━━━━━━━━━━
${conf.FOOTER}`.trim();
  },
  AUTOSONG: function (foundSong, currentArtist, nextArtist, config, botNumber, isGroup, groupMetadata) {
    return `
💃 *『 𝐃𝐍  𝑴𝑼𝑺𝑰𝑪 』* 🥁

━━━━━━━━━━━━━━━━━━━
🥁 *𝚂𝙾𝙽𝙶 𝙳𝙴𝚃𝙰𝙸𝙻𝚂* 🎺
╠➤ *𝚃𝚒𝚝𝚕𝚎:* ${foundSong.title}
╠➤ *𝙰𝚛𝚝𝚒𝚜𝚝:* ${currentArtist.replace(" original", "")}
╠➤ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${foundSong.timestamp || "𝙽/𝙰"}
╠➤ *𝚅𝚒𝚎𝚠𝚜:* ${foundSong.views.toLocaleString() || "𝙽/𝙰"}
╠➤ *𝚄𝚙𝚕𝚘𝚊𝚍𝚎𝚍:* ${foundSong.ago || "𝙽/𝙰"}
╠➤ *𝙽𝚎𝚡𝚝 𝙰𝚛𝚝𝚒𝚜𝚝:* ${nextArtist}
━━━━━━━━━━━━━━━━━━━
🪂 *𝚈𝚘𝚞𝚃𝚞𝚋𝚎 𝙻𝙸𝙽𝙺:* 
    ${foundSong.url}
    ${isGroup ? `

━━━━━━━━━━━━━━━━━━━
💃 *𝙶𝚁𝙾𝚄𝙿 𝙸𝙽𝙵𝙾* 
╠➤ *𝙽𝚊𝚖𝚎:* ${groupMetadata?.subject || "Group"}
╠➤ *𝙰𝚍𝚖𝚒𝚗:* ${config.MNAME}
╠➤ *𝙱𝚘𝚝 𝙽𝚞𝚖𝚋𝚎𝚛:* ${botNumber}
━━━━━━━━━━━━━━━━━━━
` : ""}
${config.FOOTER || "*✦͙͙͙*͙*❥⃝∗⁎.ʚ𝙳𝙽 𝚖𝚒𝚞𝚜𝚒𝚌 ɞ.⁎∗❥⃝**͙✦͙͙͙*"}`.trim();
  },
  AIMODEPROMPT: function (userMessage) {
    return `
    You're an advanced AI assistant called "King DILA AI."  
    
    usermessage in {${userMessage}}`;
  }
};
