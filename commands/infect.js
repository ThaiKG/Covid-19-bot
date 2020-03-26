module.exports = {
    name: 'infect',
    description: "",
    execute(msg, args, user){
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
        if(user){
            if(msg.guild.member(user).roles.cache.find(role => role.name === 'Infected')){
              msg.channel.send("*You can't infect someone who is already infected, silly!*")
            }
            else{
              msg.channel.send("<@" + user.id + ">"  + " has been infected by Covid19. They are now subjected to self quarantine for 14 days!")
              addRole(msg.guild.member(user));
            }
          }
          else if(args.length < 2){
            if(msg.guild.member(msg.author).roles.cache.find(role => role.name === 'Infected')){
              msg.channel.send("*You can't infect someone who is already infected, silly!*")
            }
            else{
            msg.channel.send("<@" + msg.author + ">"  + " has been infected by Covid19. They are now subjected to self quarantine for 14 days!")
            addRole(msg.guild.member(author));
            }
          }
          else{
            var word = msg.content;
            var list = word.split(" ");
            var person = list[list.length-1];
            msg.channel.send(person  + " has been infected by Covid19. They are now subjected to self quarantine for 14 days!")
            addRole();
          }
    }
}