//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NpTW00d1h6RU53MHh5RU1uRzBLN0xMTlY4Z1NsQWR5YklRNjQ1RGtYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmF2ejZhQWlCNW12TCttUEFJMmhjUllnZkx0QXhNRUpXbDlNVVJrSG9sUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TGtONE9QS0l3RDNaTFQyK3o5cjVlOHlYVkpDazhLdm8rTXNsaFloOWxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmUWQ3RHBVZENFYWw2VEl0U3RDRW8wdVRoVFpKSGliWDZsR3Q4TUdQVW44PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFejdDSGRuaHFzK0traDFsSU15c0RKV2xqcEQzWXlPcGlMUi8zbS9iM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVvdHp2ZnhqckwvMjhIbWNuOXhkblIwQ3BFek4zRVNBclJLeTN4UVJsRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUVQdk5TRU15Y003MXpINWl5RFpuZ29DUzlzOE9KcGh6ek0xYVhmNVhFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHo5bjdPL09taXBMcmlDdnRGaGRaUTJoQldqeUszdEJsSzFWcndvbncwUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4rS0h5TWZHelZHVGJ0L2VKRVVnUzVMUkJVNGMzVVhGQVlIWGdGc3hsZWRtd3JyUTIvWGprMFErNkNPWDhJby9JZ0o5SEQwVWJaS3VmL2xWNDBKZ0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJvSHltZFBmVlllTkxsZDRmbEZEUGtwYXVzMkw0c3IxMzJBNHlkQVp5a1RrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxMkZUQnVrclNiZUpGWVVMRFFzbUZRIiwicGhvbmVJZCI6ImY2ZWIwNDNiLTZmMzktNDEwNi1hMmFhLWZkNGZmOGEzNTdiZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQR3RlaVdkalgwNTBpZEI3clFOakUzeVlTS3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGNOeDFNRzVGT00rSWZ1Z2IwUGxSaWlZUEJzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhWQUg5OTJBIiwibWUiOnsiaWQiOiI5NDc4NTkyMzkyOToyOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJvd25lciIsImxpZCI6IjEzNTE0MTczMzIwODI0OToyOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01HTDE5SURFTG1uK3NJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KcldjdlZuS1hSdThHZXRTeThCcmlXV2NFNElKREdBTGtZZDhlR2hMRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRhYVBkeHpFRHRZTEZvdTAzS1E2bktYWlRydHdnWVhVeEl1NTkvM2Q0eGlBZzZZRXYwR0lJSWI5a2M1QUFUYzNhQ0M0anVmZnNaTnFOeHVjUHF6V0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMZnZTZURZczRnSERnN3JBK29zOU5iYWtGWktWSDV1L3FjMUxiSk90RDFWOFZ1UU5KWlJCZ3lFNFhXdEJkMFJnZXVKSStNb3d1VFNCY0dDZXA4NkFDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1OTIzOTI5OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRpYTFuTDFaeWwwYnZCbnJVc3ZBYTRsbG5CT0NDUXhnQzVHSGZIaG9TeEcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTAyODY3OSwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFERmoifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785923929",
  PASSWORD: 
    process.env.PASSWORD || "dilaksha",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
