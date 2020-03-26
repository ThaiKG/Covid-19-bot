const Discord = require('discord.js')
const randomPuppy = require('random-puppy');
module.exports = {
    name: 'jojo',
    description: "",
    async execute(msg, args){
        const subReddits = ["ShitPostCrusaders"];
        const random = subReddits[Math.floor(Math.random()*subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed();
            embed.setColor("RANDOM")
            embed.setImage(img)
            embed.setTitle("ZA WARUDO!!")
            embed.setURL('https://www.reddit.com/r/ShitPostCrusaders/')
        msg.channel.send(embed)
            
    }
}