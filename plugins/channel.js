let handler = async (m, { conn }) => {

m.reply(`*حسابي على الإنستغرام \n 𝑴𝒚 𝑰𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 𝒂𝒄𝒄𝒐𝒖𝒏𝒕:*\n
*instagram.com/oussama_15o3*
*تابعني هناك 👻*`)
}
handler.help = ['my-insta']
handler.tags = ['infobot']
handler.command = /^(my-insta)$/i

export default handler;
