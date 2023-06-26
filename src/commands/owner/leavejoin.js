const { Client, MessageEmbed, ApplicationCommandOptionType } = require("discord.js");
const client = new Client();

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
   
