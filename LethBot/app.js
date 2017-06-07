const discord = require("discord.js");
const client = new discord.Client();
const token = 'MzE5OTI4NTQwNjg0MzUzNTM2.DBIHDQ.NXw0YUVfYcfxGLfNL1sEyfKr6a8';

//Set '*' prefix to all commands
function commandIs(str, message) {
    return message.content.toLowerCase().startsWith("!" + str); //check if message starts with '!'
}

//Write to console when ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  //const collection = client.users.clone();
});

//Greetings message
client.on('message', message => {
    var args = message.content.split(/[]+/); //split message at every space using regex
  if (commandIs("hello", message) && (message.author != client.user)) { //must have prefix and author not be bot
    console.log("'hello' command received");
    message.channel.send("Hello " + message.author.username);
  }
  if (commandIs("linkAvatar", message) && (message.author != client.user)) { //must have prefix and author not be bot
    console.log("'linkAvatar' command received");
    message.channel.send("" + collection[3].username);
  }
  //...
});

//Login token
client.login(token);

