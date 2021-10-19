const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  category: "fun",
  description: "Show Member Avatar!",
  usage: "Avatar | <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    let Member = message.mentions.users.first() || message.guild.member(args[0]) || message.author;

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .addField(
        "Links",
        `[Png](${Member.displayAvatarURL({
          format: "png",
          size: 1024,
          dynamic: true

        })}) | [Jpg](${Member.displayAvatarURL({
          format: "jpg",
          size: 1024,
          dynamic: true
          
        })}) | [Webp](${Member.displayAvatarURL({
          format: "webp",
          size: 1024,
          dynamic: true

        })})`
      )
      .setImage(Member.displayAvatarURL({ dynamic: true }))
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};