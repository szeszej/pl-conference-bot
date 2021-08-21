require('dotenv').config()
const questions = require('./questions-2hg-pl')
const Discord = require('discord.js')
const bot = new Discord.Client()

const TOKEN = process.env.TOKEN

bot.login(TOKEN)

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`)
})

const multipleChoice = (answers, msg) => {
  answers.forEach((answer, index) =>
    msg.channel
      .send((index + 10).toString(36).toUpperCase() + ') ' + answer)
      .then((msg) => msg.react('✅')),
  )
}

const multipleYesno = (answers, msg) => {
  answers.forEach((answer, index) =>
    msg.channel
      .send((index + 10).toString(36).toUpperCase() + ') ' + answer)
      .then((res) => {
        res.react('👍')
        res.react('👎')
      }),
  )
}

const sequence = (answers, msg) => {
  answers.forEach(
    (answer, index) =>
      msg.channel
        .send((index + 10).toString(36).toUpperCase() + ') ' + answer)
        .then((msg) => {
          msg.react('1️⃣')
          msg.react('2️⃣')
          msg.react('3️⃣')
          msg.react('4️⃣')
          msg.react('5️⃣')
          msg.react('6️⃣')
        }),
    //   .then((msg) => msg.message.react('2️⃣'))
    //   .then((msg) => msg.message.react('3️⃣'))
    //   .then((msg) => msg.message.react('4️⃣'))
    //   .then((msg) => msg.message.react('5️⃣'))
    //   .then((msg) => msg.message.react('6️⃣'))
  )
}

//Implement a Command Handler? https://www.sitepoint.com/discord-bot-node-js/
//https://discordjs.guide/

bot.on('message', (msg) => {
  if (
    msg.content.includes('!pytanie') &&
    msg.author.id === '234760750583775242'
  ) {
    const questionNumber = parseInt(msg.content.replace('!pytanie ', ''))
    const question = questions[questionNumber - 1]
    if (!question) {
      return msg.channel.send('Nie ma takiego pytania!')
    }
    msg.channel
      .send(questionNumber + '. ' + question.question)
      .then((msg) => {
        if (question.type === 'multiple') {
          multipleChoice(question.answers, msg)
        } else if (question.type === 'yesno') {
          msg.react('👍').then((res) => msg.react('👎'))
        } else if (question.type === 'sequence') {
          sequence(question.answers, msg)
        } else if (question.type === 'multipleYesno') {
          multipleYesno(question.answers, msg)
        } else if (question.type === 'rating') {
          msg.react('1️⃣')
          msg.react('2️⃣')
          msg.react('3️⃣')
          msg.react('4️⃣')
          msg.react('5️⃣')
        }
      })
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (
    msg.content.includes('!intro') &&
    msg.author.id === '234760750583775242'
  ) {
    msg.channel
      .send(
        `First a small reminder on the basic differences between 2HG and 1v1:

        There are :two: teams :two: players each
        Each team has a shared lifetotal that starts at :three: :zero:
        Teams have shared turns (each player on the team has upkeep at the same time, etc.).`,
      )
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (
    msg.content.includes('!link') &&
    msg.author.id === '234760750583775242'
  ) {
    msg.channel
      .send(`https://blogs.magicjudges.org/2hg/faq/`)
      .catch((error) => console.log('coś się jebło szeszej'))
  }
})
