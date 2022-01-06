### discord.sudo


```sh
$ npm i discord.sudo
```


# Join our Discord server
**[https://discord.gg/HKNBsjW8zS](https://discord.gg/HKNBsjW8zS)**

# Features
- Super simple and easy to use 😎
- Beginner friendly 🤓
- And most of all, **REALLY FUN!** 🤪


![While in action](https://da-boss.webnode.com/_files/200000068-0452b0452e/450/Desktop%20Screenshot%202021.05.08%20-%2013.48.45.44.png)

**Package use:**
```
const {sudo} = require('discord.sudo')
const member = message.mentions.members.first()
const msg = args.slice(2).join(" ")
const sudoMessage = new sudo({
    setMessage: message,
    setText: msg, 
    setMember: member,
})
sudoMessage.start()
```

**Whats the sudo command?**
The sudo command will allow you to have a message look and display as if it were another user who had sent the message! 

**Will this get me in trouble?**
No, this command will not get users into trouble. Even though it looks like the user is sending it, remember its not! The message is still from the bot and will still contain the usual "bot" display. It will only be changing the messages display image and username for that sent message. 