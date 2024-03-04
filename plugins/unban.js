let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('تم فك حظرك من البوت من قبل صاحب البوت لذا قم بالتابعته في أنستا
            /ninatagram.com/oussama_15o3')
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.owner = true

export default handler
