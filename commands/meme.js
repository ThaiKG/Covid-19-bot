const Discord = require('discord.js')
const randomPuppy = require('random-puppy');
module.exports = {
    name: 'meme',
    description: "",
    async execute(msg, args){
        const subReddits = ["CoronavirusMemes"];
        const random = subReddits[Math.floor(Math.random()*subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed();
            embed.setColor("RANDOM")
            embed.setImage(img)
            embed.setTitle("Here's your meme:")
            embed.setURL('https://www.reddit.com/r/CoronavirusMemes/')
        msg.channel.send(embed)
            
    }
}