import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Guru322/api/Guru/BOT-JSON/Messi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*the best* 🥶☠️ \n *messi >>>>>> all player* 🫡 \n *Barcelona >>>> real madrid* 🥸 \n *عندك شي رأي أخر خليه لينا ف كرك سالينا* `, m)} 
//conn.sendButton(m.chat, "*the best - الأفضل*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7']
handler.tags = ['img']
handler.command = /^(ronaldo|cr7)$/i
export default handler
