const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;ɪᴋᴋ𝚈;;;'
                    + 'FN:ɪᴋᴋ𝚈\n' // full name
                    + 'ORG:Darr;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283115192154:+62 831-1519-2154\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Ilman', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
