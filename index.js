const Discord = require('discord.js');
const bot = new Discord.Client();
const {prefix, token} = require('./config.json');
const axios = require('axios');
const fs = require('fs');
let cooldown = new Set();
let cdsecs = 30;
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setActivity("the world collapse", {type: 'WATCHING'});
    let allUsers = bot.users.cache.array();
    
  });

bot.on('guildMemberAdd', member =>{
  if(db.get(member.id) == null){
    db.set(member.id, {money: 50, items: []});
  }
})

bot.on('message', async msg =>{
  const user = msg.mentions.users.first();
  const author = msg.author;
  function addRole(x){
    if(msg.guild.roles.cache.some(role => role.name === 'Infected')){
            
      let temp = msg.guild.roles.cache.find(role => role.name === 'Infected')
        let dis = x;
        dis.roles.add(temp);
    }
    else{
      msg.guild.roles.create({
        data: {
          name: 'Infected',
          color: '#008000',
        },
      })
      .then(function(){
        let temp = msg.guild.roles.cache.find(role => role.name === 'Infected')
        let dis = x;
        dis.roles.add(x);
      })
    }
  }

  function removeRole(x){
    let temp = msg.guild.roles.cache.find(role => role.name === 'Infected')
        let dis = x;
        dis.roles.remove(temp);
  }
  
  let args = msg.content.substring(prefix.length).split(" ");
  
  switch(args[0]){
    case "infect" :
      if(msg.member.hasPermission("ADMINISTRATOR"))
      bot.commands.get('infect').execute(msg, args, user);
      else
      msg.channel.send("*You do not have permission to use this command!*")
      break;

    case "test" :
      
      
      if(msg.member.hasPermission("ADMINISTRATOR"))
        cooldown.delete(msg.author.id)
      if(cooldown.has((msg.author.id))){
          msg.delete();
          msg.channel.send("*We are still preparing the test kits!*")
          
      }
      else{
      if(user){
        
        let chance = Math.random()*11 +1;
        if(chance < 3){
          msg.channel.send("<@" + user.id + ">" + " has been tested positive for Covid19. They are now subjected to self quarantine for 14 days!")
          addRole(msg.guild.member(user));
        }
        else{
          msg.channel.send("<@" + user.id + ">" + ", your test result came back negative. Stay safe!");
          removeRole(msg.guild.member(user));
        }
        
      }
      else{
        
          let chance = Math.random()*11 +1;
          if(chance < 5){
            msg.channel.send("<@" + msg.author + ">" + " has been tested positive for Covid19. They are now subjected to self quarantine for 14 days!")
           addRole(msg.guild.member(author));
          }
          else{
            msg.channel.send("<@" + msg.author + ">" + ", your test result came back negative. Stay safe!");
            removeRole(msg.guild.member(author));
          }
        }
        cooldown.add(msg.author.id)
        setTimeout(()=>{
          cooldown.delete(msg.author.id)
        }, cdsecs*1000)
       }
      
       break;
    case "status" :
      bot.commands.get('status').execute(msg, args, axios);
    break;
    
    case "help" :
      bot.commands.get('help').execute(msg,args,Discord);
      break;  
    case "meme" :
      bot.commands.get('meme').execute(msg, args); 
      break;
    case "jojo" :
      bot.commands.get('jojo').execute(msg,args);
  }
  


})



  bot.login(process.env.token);