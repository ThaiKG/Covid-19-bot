module.exports = {
    name: 'help',
    description: "",
    execute(msg, args, Discord){
        const embed = new Discord.MessageEmbed();
      
      embed.setTitle("Covid19 Bot Commands");
      embed.addField("Help","help");
      embed.addField("Status","status <global or country name>");
      embed.addField("Trolling","admins only - infect <@username> \ntest <user(optional)>");
      embed.addField("Memes", "meme \njojo")
      embed.setFooter("Make sure to add the prefix " + "\"" + "c!" + "\" at the front of each commands!")
      msg.channel.send(embed);
      
    }



}