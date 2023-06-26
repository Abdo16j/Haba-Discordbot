const { Client, MessageEmbed, ApplicationCommandOptionType, Intents } = require("discord.js");
const intents = new Intents([
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MEMBERS,
  // أضف الانتوس الإضافية التي تحتاجها هنا
]);
const client = new Client({ intents });

module.exports = {
  name: "logs",
  description: "leave-join guilds",
  category: "OWNER",
  botPermissions: ["EMBED_LINKS"],
  command: {
    enabled: true,
    usage: "<script>",
    minArgsCount: 1,
  },
  slashCommand: {
    enabled: false,
    options: [
      {
        name: "expression",
        description: "bot logs",
        type: ApplicationCommandOptionType.STRING,
        required: true,
      },
    ],
  },
};

client.on("guildCreate", (guild) => {
  const embed = new MessageEmbed()
    .setTitle("I'm Added To A new server!")
    .setColor("GREEN")
    .setDescription(
      `Am Added To ${guild.name}, with ${guild.memberCount}\n\nTotal server: ${client.guilds.cache.size}\nTotal users: ${client.users.cache.size}`
    )
    .setTimestamp();

  const LogChannel = client.channels.cache.get("1122241426445578428");
  LogChannel.send(embed);
});

client.on("guildDelete", (guild) => {
  const embed = new MessageEmbed()
    .setTitle("I left a server!")
    .setColor("RED")
    .setDescription(
      `I left ${guild.name}, that had ${guild.memberCount}\n\nTotal server: ${client.guilds.cache.size}\nTotal users: ${client.users.cache.size}`
    )
    .setTimestamp();

  const LogChannel = client.channels.cache.get("1122241426445578428");
  LogChannel.send(embed);
});

// إضافة معرّف السيرفر المحذوف إلى القائمة
visitedServers.push(guild.id);
