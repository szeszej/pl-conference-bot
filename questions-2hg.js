const questions = [
  {
    question: "How does mulliganing work in 2HG?",
    type: "multiple",
    answers: [
      "The players on the starting team, one by one, take mulligans until they keep their hands, then the same follows for the other team",
      "The players on the starting team take mulligans simultaneously until they keep their hands, then the same follows for the other team",
      "The players on the starting team take a mulligan simultaneously, then the same happens for the other team. Repeat until every player has kept their hand.",
    ],
  },
  {
    question: "Do players get a free mulligan?",
    type: "yesno",
  },
  {
    question:
      "Do players in the starting team skip their first draw step in the game?",
    type: "yesno",
  },
  {
    question:
      "Altair asks their teammate, Allgemein whether they should keep their hand or mulligan. Nanite immediately calls a judge. What is the appropriate punishment, if any?",
    type: "multiple",
    answers: [
      "Altair receives a Match Loss for Outside Assistance",
      "Altair receives a Warning for Mulligan Procedure Violation",
      "Altair receives no punishment, consulting with your teammate is legal in 2HG",
    ],
  },
  {
    question:
      "Athena, sitting on the right, and Albany, sitting on the left, can’t agree as to whether Albany should take a mulligan. Athena says that Albany should do it, Albany disagrees. What is the proper resolution?",
    type: "multiple",
    answers: [
      "Each players is responsible for their own choices, Albany cannot be forced to take a mulligan",
      "Albany has to take the mulligan",
      "Players flip a coin to settle the dispute",
      "Players need to call a judge to settle the dispute",
    ],
  },
  {
    question:
      "Alberta begins their main phase with !card Sorin, Lord of Innistrad! and !card Grizzly Bear! on the battlefield. Their teammate, Alex, controls !card Forest Bear!. When Alberta activates the second ability of Sorin, what will be the stats of each of the bears?",
    type: "multiple",
    answers: [
      "Both will be 2/2s",
      "Grizzly Bear will be a 2/2 and Forest Bear will be a 3/2",
      "Grizzly Bear will be a 3/2 and Forest Bear will be a 2/2",
      "Both will be 3/2s",
    ],
  },
  {
    question:
      "Adelaida and Abigail each have !card Ajani’s Pridemate! in play. Adelaida casts !card Vampiric Touch! targeting one of the opponents. After Vampiric Touch resolves and the stack is empty, how many counters will be on each Pridemate?",
    type: "multiple",
    answers: [
      "Both will have 1 counter",
      "Adeilada’s will have 1 counter, Abigail’s will have 0 counters",
      "Adeilada’s will have 0 counters, Abigail’s will have 1 counter",
      "Both will have 0 counters",
    ],
  },
  {
    question:
      "Armagerd and Armin are at 30 life and are playing against Noscope and Nitro, also at 30 life. Armin controls a 1/1 Vampire token and casts !card Arterial Flow!. Assuming that Noscope and Nitro previously had 2 cards in hand each, what happens after the Flow resolves?",
    type: "multiple",
    answers: [
      "The active team will be at 32 life, the non-active team will be at 28 and neither of its members will have any cards in their hands",
      "The active team will be at 32 life, the non-active team will be at 26 and one of its members (the non-active team’s choice) will have no cards in their hand",
      "The active team will be at 34 life, the non-active team will be at 26 and neither of its members will have any cards in their hands ",
      "The active team will be at 32 life, the non-active team will be at 26 and neither of its members will have any cards in their hands ",
    ],
  },
  {
    question:
      "Anna on the left and Arven on the right are sitting opposite, respectively, Nolan and Nadina. Arven wants to attack with their !card Abyssal Specter!. Assuming there are no blocks or removal spells, how can they make sure that Nolan discards a card with the trigger of the Specter?",
    type: "multiple",
    answers: [
      "Arven needs to declare the Specter as attacking Nolan",
      "During combat damage step, Arven needs to assign the Specter’s damage to Nolan",
      "It’s not possible, players always attack the opponent directly in front of them",
      "Arven doesn’t need to do or say anything, creatures attack the opponent on the left by default",
    ],
  },
  {
    question:
      "Anna on the left and Arven on the right are sitting opposite, respectively, Nolan and Nadina. Arven attacks with their !card Abyssal Specter! saying nothing. There are no blocks. What happens in the combat damage step?",
    type: "multiple",
    answers: [
      "Both Nolan and Nadina discard a card",
      "Nolan discards a card",
      "Nadina discards a card",
      "Neither players discards a card",
    ],
  },
  {
    question:
      "Alokar, Anastasia’s teammate, has a !card Grizzly Bear! on the battlefield. Nathalia, Nelly’s teammate, controls !card Ghostly Prison!. The active team declares Grizzly Bear as the attacker with Alokar saying “I attack Nelly”. What happens?",
    type: "multiple",
    answers: [
      "Alokar may attack with the Bear as normal",
      "Alokar still needs to pay 2 mana to attack",
      "Alokar’s team still needs to pay 2 mana to attack",
      "This can’t happen as described, teams attack the other team, not specific players",
    ],
  },
  {
    question:
      "Aran declares !card Bane of Bala Ged! as attacking Noddy, Notty’s teammate. What happens when Bane’s triggered ability resolves?",
    type: "multiple",
    answers: [
      "Both Noddy and Notty have to exile two permanents",
      "Noddy has to exile two permanents",
      "Aran gets to choose which of the defending players has to exile two permanents",
    ],
  },
  {
    question:
      "Once the Bane attacks Noddy, Notty wants to help his teammate by blocking it with !card Grizzly Bear!. Are they allowed to block creatures attacking their teammate?",
    type: "yesno",
  },
  {
    question:
      "Alan begins their upkeep controlling !card Verdant Force!. How many Saprolings will be created with its triggered ability this upkeep?",
    type: "multiple",
    answers: [1, 2, 3, 4],
  },
  {
    question:
      "Alan begins their upkeep controlling !card Barbed Wire!. Assuming nothing else happens in this upkeep, how much damage will be dealt to Alan’s team this step?",
    type: "multiple",
    answers: [1, 2, 3, 4],
  },
  {
    question:
      "Alice, Alonse’s teammate, casts !card Time Warp! targeting themselves, then the team finishes their turn. What happens?",
    type: "multiple",
    answers: [
      "The other team gets to do their turn since extra turns don’t work in 2HG",
      "Alice will get another turn but Alonse won’t",
      "Alice’s team will get an extra turn",
      "This can’t happen as described, extra turn spells cannot be used in 2HG",
    ],
  },
  {
    question:
      "Arsen controls !card Sorin Markov! and targets Nobby with the second ability. Nobby’s team is at 20 life. What happens?",
    type: "multiple",
    answers: [
      "Nobby’s team’s lifetotal becomes 10",
      "To make Nobby and Nobby’s teammate lifetotal become 10, both lose 10 life. Then the team’s lifetotal becomes 0",
      "Nobby’s team’s lifetotal stays at 20 since in 2HG players don’t have life as individuals",
    ],
  },
  {
    question:
      "Arnold activates !card Door to Nothingness! targeting Nelly. What happens when the ability resolves?",
    type: "multiple",
    answers: [
      "Nelly loses the game, their teammate can continue playing as normal",
      "Both players lose the game as a team",
      "Nothingness happens, these types of effect don’t function in 2HG",
    ],
  },
  {
    question:
      "Arney and Al attack Nina and Nobby with !card Glistener Elf!. Nina and Nobby already have 9 poison counters on them. There are no blocks. What happens in the combat damage step?",
    type: "multiple",
    answers: [
      "Nina and Nobby lose the game due to having 10 poison counters",
      "Nina and Nobby now have a total of 10 poison counters but may continue playing",
      "This can’t happen as described, players get poison counters individually, not as a team",
    ],
  },
  {
    question:
      "In a 2HG draft, how many cards do each team pick before passing the booster pack?",
    type: "multiple",
    answers: [0.75, 1, 2, "2HG can’t be run as draft"],
  },
  {
    question: "Are 2HG matches played until 2 wins?",
    type: "yesno",
  },
  {
    question: "Have you learned anything new during this seminar?",
    type: "yesno",
  },
  {
    question: "How did you like the seminar?",
    type: "rating",
  },
];

module.exports = questions;
