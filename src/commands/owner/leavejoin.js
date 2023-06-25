client.on('guildCreate', guild => {
    // اسم البوت الرسمي لديك
    const officialBot = "ProControl";
    
    // معرّف السيرفر الرئيسي
    const mainServerId = "1122241424197427200";

    // اسم الروم لإرسال رسالة الدخول فيه في السيرفر الرئيسي
    const joinChannelName = "guild-join";

    if (guild.id === mainServerId) {
        // العثور على الروم بناءً على الاسم
        const joinChannel = guild.channels.cache.find(channel => channel.name === joinChannelName);

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

    // اسم الروم لإرسال رسالة الخروج فيه في السيرفر الرئيسي
    const leaveChannelName = "guild-leave";

    if (guild.id === mainServerId) {
        // العثور على الروم بناءً على الاسم
        const leaveChannel = guild.channels.cache.find(channel => channel.name === leaveChannelName);

        if (leaveChannel) {
            // إرسال رسالة الخروج في الروم المحدد
            leaveChannel.send(`${officialBot} has left the server.`);
        }
    }
});
