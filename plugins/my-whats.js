let handler = async (m, { conn }) => {

m.reply(`*إذا واجهتك مشكلة تواصل معي هنا* \n *𝑴𝒚 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 𝒂𝒄𝒄𝒐𝒖𝒏𝒕:*\n
*+212655691692*
*تابعني هناك 👻*`)
}
handler.help = ['my-whats']
handler.tags = ['infobot']
handler.command = /^(my-whats)$/i

export default handler;
