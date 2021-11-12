require('dotenv').config()
const questions = require('./questions-multi')
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
    msg.content.includes('!pytanie')
    // && msg.author.id === '234760750583775242'
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
        `Najpierw przypomnijmy sobie podstawowe różnice między :two: :no_mouth: Giant and 1v1:

        W grze biorą udział :two: drużyny po :two: graczy
        Każda drużyna ma wspólne życie, a jego startowa ilość to :three: :zero:
        Drużyny mają wspólne tury (każdy członek drużyny ma upkeep w tym samym czasie, itd.).
        `,
      )
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (
    msg.content.includes('!link') &&
    msg.author.id === '234760750583775242'
  ) {
    msg.channel
      .send(`https://blogs.magicjudges.org/2hg/faq/`)
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (
    msg.content.includes('!feedback') &&
    msg.author.id === '234760750583775242'
  ) {
    msg.channel
      .send(`https://forms.gle/PoQsrbKEhYvGetb77`)
      .catch((error) => console.log('coś się jebło szeszej'))
  } else if (
    msg.content.includes('!attendance') &&
    msg.author.id === '234760750583775242'
  ) {
    msg.channel
      .send(`https://forms.gle/FAxUrYqK6LKG5JAS8`)
      .catch((error) => console.log('coś się jebło szeszej'))
  }
})
