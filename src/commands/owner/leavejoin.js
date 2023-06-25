// قائمة لتخزين معرفات السيرفرات التي تمت زيارتها
let visitedServers = [];

client.on('guildCreate', guild => {
    // اسم البوت الرسمي لديك
    const officialBot = "ProControl";

    // معرف الروم في السيرفر الرئيسي لإرسال رسالة الدخول
    const joinChannelId = "1122241426445578428";

    // السيرفر الرئيسي الذي تود الإعلان عن الانضمام إليه
    const mainServerId = "1122241424197427200";

    // اذا كان السيرفر الذي تمت دعوة البوت اليه ليس السيرفر الرئيسي ولم يتم زيارته بالفعل
    if (guild.id !== mainServerId && !visitedServers.includes(guild.id)) {
        const mainServer = client.guilds.cache.get(mainServerId);

        if (mainServer) {
            const joinChannel = mainServer.channels.cache.get(joinChannelId);

            if (joinChannel) {
                joinChannel.send(`The bot ${officialBot} has joined a new server: ${guild.name}`);
            }
        }

        // إضافة معرّف السيرفر الجديد إلى القائمة
        visitedServers.push(guild.id);
    }
});

client.on('guildDelete', guild => {
    // اسم البوت الرسمي لديك
    const officialBot = "ProControl";

    // معرف الروم في السيرفر الرئيسي لإرسال رسالة الخروج
    const leaveChannelId = "1122241426445578429";

    // السيرفر الرئيسي الذي تود الإعلان عن الخروج منه
    const mainServerId = "1122241424197427200";

    // اذا كان السيرفر الذي تم حذف البوت منه ليس السيرفر الرئيسي ولم يتم زيارته بالفعل
    if (guild.id !== mainServerId && !visitedServers.includes(guild.id)) {
        const mainServer = client.guilds.cache.get(mainServerId);

        if (mainServer) {
            const leaveChannel = mainServer.channels.cache.get(leaveChannelId);

            if (leaveChannel) {
                leaveChannel.send(`The bot ${officialBot} has left a server: ${guild.name}`);
            }
        }

        // إضافة معرّف السيرفر المحذوف إلى القائمة
        visitedServers.push(guild.id);
    }
});
