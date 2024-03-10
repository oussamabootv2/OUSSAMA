import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*the best* 🥶☠️ \n *messi <<<< all player* 🫡`, m)} 
//conn.sendButton(m.chat, "*the best - الأفضل*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['messi']
handler.tags = ['img']
handler.command = /^(messi)$/i
export default handler
