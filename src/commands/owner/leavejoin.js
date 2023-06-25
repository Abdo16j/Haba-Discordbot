client.on('guildCreate', guild => {
    // اسم البوت الرسمي لديك
    const officialBot = "ProControl";

    // معرف الروم في السيرفر الرسمي لإرسال رسالة الدخول
    const joinChannelId = "1122241426445578428";

    // السيرفر الرسمي الذي تود الإعلان عن الانضمام إليه
    const mainServerId = "1122241424197427200";

    // اذا كان السيرفر الذي تمت دعوة البوت اليه هو السيرفر الرسمي
    if (guild.id !== mainServerId) {
        const mainServer = client.guilds.cache.get(mainServerId);

        if (mainServer) {
            const joinChannel = mainServer.channels.cache.get(joinChannelId);

            if (joinChannel) {
                joinChannel.send(`The bot ${officialBot} has joined a new server: ${guild.name}`);
            }
        }
    }
});

client.on('guildDelete', guild => {
    // اسم البوت الرسمي لديك
    const officialBot = "ProControl";

    // معرف الروم في السيرفر الرسمي لإرسال رسالة الخروج
    const leaveChannelId = "1122241426445578429";

    // السيرفر الرسمي الذي تود الإعلان عن الخروج منه
    const mainServerId = "1122241424197427200";

    // اذا كان السيرفر الذي تمت حذف البوت منه هو السيرفر الرسمي
    if (guild.id !== mainServerId) {
        const mainServer = client.guilds.cache.get(mainServerId);

        if (mainServer) {
            const leaveChannel = mainServer.channels.cache.get(leaveChannelId);

            if (leaveChannel) {
                leaveChannel.send(`The bot ${officialBot} has left a server: ${guild.name}`);
            }
        }
    }
});

