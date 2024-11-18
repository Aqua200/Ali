import fetch from 'node-fetch';

// Handler principal para la declaración
let handler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'declaracion') {
        const imageUrl = 'https://qu.ax/lpPQ.jpg'; // URL de la imagen de la confesión
        const messageText = `Si desea realizar una compra de WhatsApp Bot ❇️ 👉 Sigue estas reglamentación, 👾 

> *Primero que nada se debe hacer el pago al momentod de la compra y el bot se irá construyendo al pasar los días*

> No faltar el respecto al creador del Bot 

> Para realizar una compra debe tener como método de pago `PayPal` Que es internacional y para `Argentina` esta *Mercado Pago, Naranja X* etc 

Si tienes todo bajo control por favor confirme la compra con un *`Si`* para empezar el nuevo del proyecto ✅

Recuerda que se necesita al momento de la compra: *Nombre del Bot, Emojis que llevará el bot, Fotos para el bot - pronombres entre otro* 
➡️ Powered By Ianalejandrook15x.`;

        await conn.sendButton(m.chat, messageText, 'Declaración', imageUrl, [
            ['Sí, confirmo la compra', `${usedPrefix}Si`],
            ['No necesito realizarla', `${usedPrefix}No`]
        ], m);
    }
};

// Acción si el usuario elige "Sí"
let siHandler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'si') {
        const yesImageUrl = 'https://qu.ax/abKS.jpg'; // Imagen para la respuesta "Sí"
        const yesAudioUrl = 'https://qu.ax/lyds.mp3'; // Audio para la respuesta "Sí"
        const yesMessageText = `¡Qué alegría que hayas aceptado! Me siento increíblemente feliz y emocionado por lo que está por venir. Desde que te conocí, he soñado con este momento, y ahora que es real, no puedo esperar para vivir momentos inolvidables contigo.\n\nGracias por darme esta oportunidad. 💖`;

        await conn.sendMessage(m.chat, { 
            image: { url: yesImageUrl }, 
            caption: yesMessageText
        }, { quoted: m });

        await conn.sendMessage(m.chat, { 
            audio: { url: yesAudioUrl }, 
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    }
};

// Acción si el usuario elige "No"
let noHandler = async (m, { conn, usedPrefix, command }) => {
    if (command === 'no') {
        const noImageUrl = 'https://qu.ax/eFBg.jpg'; // Imagen para la respuesta "No"
        const noMessageText = `Entiendo y agradezco tu sinceridad. Aunque no haya sido el resultado que esperaba, valoro mucho nuestra amistad y quiero que sepas que seguiré aquí para ti. 😊`;
        const noAudioUrl = 'https://qu.ax/Pgxz.mp3'; // Audio para la respuesta "No"

        await conn.sendMessage(m.chat, { 
            image: { url: noImageUrl }, 
            caption: noMessageText
        }, { quoted: m });

        await conn.sendMessage(m.chat, { 
            audio: { url: noAudioUrl }, 
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    }
};

// Vincular los comandos al texto "#declaracion", "si", y "no"
handler.command = ['declaracion', 'si', 'no'];
handler.tags = ["downloader"]
handler.help = ["declaracion"];

// Exportar el handler
export default handler;
