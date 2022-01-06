class sudo {
    /**
     * @name sudo
     * @kind constructor
     * @param {Object} options options
     * @param {any} [options.setMessage] message
     * @param {any} [options.setText] text sent by sudo user
     * @param {any} [options.setMember] member
     */
    constructor(options) {
        if(!options.setText) throw new TypeError('Missing argument: text')
        if(typeof options.setText !== 'string') throw new TypeError('Text must be in a string')
        if(!options.setMember) throw new TypeError('Missing argument: member')
        if(!options.setMessage) throw new TypeError('Missing argument: message')
    
        this.setMessage = options.setMessage;
        this.setText = options.setText
        this.setMember = options.setMember
    }
    async start() {
        this.setMessage.channel.createWebhook(this.setMember.user.username, {
            avatar: this.setMember.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(this.setText)
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })

    }
}
module.exports = sudo;