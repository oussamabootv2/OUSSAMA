let handler = async (m, { conn }) => {

m.reply(`*حسابي على الإنستغرام \n 𝑴𝒚 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 𝒂𝒄𝒄𝒐𝒖𝒏𝒕:*\n
*instagram.com/oussama_15o3*
*تابعني هناك 👻*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
