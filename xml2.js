const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity("You",{type: 'WATCHING'})

});

 client.on('message', message => {
  if (message.content === '-1-') {   
      if (message.author.id !== '447179855898083338')
 return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

 client.on('message', message => {
  if (message.content === '-2-') {   
      if (message.author.id !== '447179855898083338')
 return message.react('🤦🏻‍♂️')
    const channel = message.member.voiceChannel;

    channel.leave()
  }
});



client.login(process.env.BOT_TOKEN);
