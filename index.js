require('dotenv').config()
const questions = require('./questions')
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
        } else if (question.type === 'rating') {
          msg.react('1️⃣')
          msg.react('2️⃣')
          msg.react('3️⃣')
          msg.react('4️⃣')
          msg.react('5️⃣')
        }
      })
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (msg.content.includes('!wiedza')) {
    msg.channel
      .send(questions[20].question)
      .then((msg) => {
        msg.react('👍')
        msg.react('👎')
      })
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (msg.content.includes('!ocena')) {
    msg.channel
      .send(questions[21].question)
      .then((msg) => {
        msg.react('1️⃣')
        msg.react('2️⃣')
        msg.react('3️⃣')
        msg.react('4️⃣')
        msg.react('5️⃣')
      })
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (
    msg.content.includes('!link' && msg.author.id === '234760750583775242')
  ) {
    msg.channel
      .send(
        'Link do egzaminu z DMTR: https://judgeacademy.com/courses/mtg-digital-magic-tournament-rules/',
      )
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (msg.content.includes('!konfa')) {
    msg.channel
      .send('Jak oceniacie dzisiejszą konferencję?')
      .then((msg) => {
        msg.react('1️⃣')
        msg.react('2️⃣')
        msg.react('3️⃣')
        msg.react('4️⃣')
        msg.react('5️⃣')
      })
      .catch((error) => console.log('coś się jebło szeszej'))
  }
})
