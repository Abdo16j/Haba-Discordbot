client.on('guildCreate', guild => {
    // اسم البوت الرسمي لديك
    const officialBot = "ProControl";
    
    // معرّف السيرفر الرئيسي
    const mainServerId = "1122241424197427200";

    // معرّف الروم لإرسال رسالة الدخول فيه في السيرفر الرئيسي
    const joinChannelId = "1122241426445578428";

    if (guild.id === mainServerId) {
        // العثور على الروم بناءً على المعرّف
        const joinChannel = guild.channels.cache.get(joinChannelId);

        if (joinChannel) {
            // إرسال رسالة الدخول في الروم المحدد
            joinChannel.send(`${officialBot} has joined the server.`);
        }
    }
});

client.on('guildDelete', guild => {
    // اسم البوت الرسمي لديك
    const officialBot = "ProControl";
    
    // معرّف السيرفر الرئيسي
    const mainServerId = "1122241424197427200";

    // معرّف الروم لإرسال رسالة الخروج فيه في السيرفر الرئيسي
    const leaveChannelId = "1122241426445578429";

    if (guild.id === mainServerId) {
        // العثور على الروم بناءً على المعرّف
        const leaveChannel = guild.channels.cache.get(leaveChannelId);

        if (leaveChannel) {
            // إرسال رسالة الخروج في الروم المحدد
            leaveChannel.send(`${officialBot} has left the server.`);
        }
    }
});
