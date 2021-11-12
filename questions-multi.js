const questions = [
  {
    question: 'Do players get a free mulligan?',
    type: 'yesno',
  },
  {
    question:
      'Does the starting player skip their first draw step in the game (in general)?',
    type: 'yesno',
  },
  {
    question:
      'How does the Active Player, Nonactive Player (APNAP) rule work in multiplayer games?',
    type: 'multiple',
    answers: [
      'First the active player makes the choice, then each other player, going clockwise, makes the choice',
      'First the active player makes the choice, then each other player in turn order makes the choice',
      'First the active player makes the choice, then elects another player to make the choice. Repeat until everyone has made the choice.',
    ],
  },
  {
    question:
      'With the Attack Multiple Players Option, what happens at the beginning of the combat phase?',
    type: 'multiple',
    answers: [
      'The AP chooses the opponents they intend to attack, they become the defending players',
      'Once the Declare Attacks step is over, all opponents who are attacked by AP become the defending players',
      'All of AP’s opponents automatically become the defending players',
    ],
  },
  {
    question:
      'Aran declares Bane of Bala Ged as attacking Noddy. Notty and Nobby aren’t attacked. What happens when Bane’s triggered ability resolves?',
    type: 'multiple',
    answers: [
      'Both Noddy, Notty, and Nobby have to exile two permanents',
      'Noddy has to exile two permanents',
      'Aran gets to choose which of the defending players has to exile two permanents',
    ],
  },
  {
    question:
      'Once the Bane attacks Noddy, Nobby wants to help them by blocking it with Grizzly Bear. Are they allowed to block creatures attacking another player (in general)?',
    type: 'yesno',
  },
  {
    question:
      'When multiple players are attacked at the same time, sometimes blockers need to be declared simultaneously. What order does declaring blockers follow?',
    type: 'multiple',
    answers: [
      'APNAP',
      'Clockwise',
      'Counter-clockwise',
      'The order is determined by playing games of Rock-Paper-Scissors',
    ],
  },
  {
    question:
      'What happens when a player leaves the game? Multiple answers may be true here!',
    type: 'multipleYesno',
    answers: [
      'All objects owned by that player leave the game',
      'Any effects which give that player control of any objects end',
      'Any effects which give that player control of any players end',
      'If that player controlled any objects on the stack not represented by cards, those objects cease to exist',
      'At the end of the process, if there are any objects still controlled by that player, those objects are exiled',
    ],
  },
  {
    question:
      'Alex casts Mind Control on Nina’s Bear Cub. What happens if, later on, Nina leaves the game?',
    type: 'multiple',
    answers: [
      'Bear Cub leaves the game and Mind Control is exiled',
      'Bear Cub remains under Alex’s control',
      'Bear Cub leaves the game and Mind Control is put into Alex’s graveyard',
      'Both Bear Cub and Mind control are exiled',
    ],
  },
  {
    question:
      'Alex casts Mind Control on Nina’s Bear Cub. What happens if, later on, Alex leaves the game?',
    type: 'multiple',
    answers: [
      'Mind Control leaves the game and Nina regains control over Bear Cub',
      'Mind Control is exiled and Nina regains control over Bear Cub',
      'Mind Control leaves the game and Bear Cub is exiled',
      'Both Mind Control and Bear Cub leave the game',
    ],
  },
  {
    question:
      'Alex casts Act of Treason on Nina’s Forest Bear. What happens if, before this turn ends, Alex leaves the game?',
    type: 'multiple',
    answers: [
      'Forest Bear leaves the game',
      'Forest Bear returns under Nina’s control',
      'Forest Bear is exiled',
    ],
  },
  {
    question:
      'Alex casts Bribery targeting Nina and puts Balduvian Bears onto the battlefield from Nina’s library. What happens if Alex then leaves the game?',
    type: 'multiple',
    answers: [
      'Balduvian Bears leaves the game',
      'Nina gains control of Balduvian Bears',
      'Balduvian Bears is exiled',
    ],
  },
  {
    question:
      'Alex casts Bribery targeting Nina and puts Golden Bear onto the battlefield from Nina’s library. Alex then ends the turn and Bianca’s turn begins. In her main phase, Bianca casts Act of Treason targeting Golden Bear controlled by Alex and gains control of it. Alex, mortified by this incredible play, leaves the game. What happens to Golden Bear?',
    type: 'multiple',
    answers: [
      'Golden Bear leaves the game',
      'Nina gains control of Golden Bear',
      'Golden Bear is exiled',
    ],
  },
  {
    question:
      'Alan is playing against Numenera and Natalia. Alan has controlled Akroan Horse owned by Numenera for several turns and both Numenera and Natalia have 3 tokens created with it. Since Alan now sees that they’ve been tricked, they leave the game. What happens to Akroan Horse and the tokens?',
    type: 'multiple',
    answers: [
      'Akroan Horse is exiled and nothing happens to the tokens',
      'Akroan Horse returns to Numenera and nothing happens to the tokens',
      'Akroan Horse returns to Numenera and Natalia’s tokens leave the game',
      'Akroan Horse returns to Numenera and Numenera’s tokens leave the game',
    ],
  },
  {
    question:
      'Amaranth leaves the game during their turn, but Nelly (whose turn would be next) would still like to do something before their turn begins. Will Nelly have an opportunity to do so?',
    type: 'yesno',
  },
  {
    question:
      'Abdomen controls Jace, Architect of Thought and uses its first ability and then, to spite their opponents, leaves the game. How long will the effect of the ability last?',
    type: 'multiple',
    answers: [
      'The effect will last indefinitely',
      'The effect expires immediately',
      'The effect lasts until Abdomen’s next turn would have begun',
    ],
  },
  {
    question:
      'Nelly controls their Commander - Ayula, Queen Among Bears. Armin casts Banishing Light and when it resolves, they choose Ayula as the target of the triggered ability. After the trigger resolves, Nelly chooses to move Ayula to the command zone, then casts Disenchant targeting Banishing Light. After Disenchant resolves, will Ayula return to the battlefield?',
    type: 'yesno',
  },
  {
    question:
      'Nelly controls their Commander - Child of Alara. Armin casts Go for the Throat. After Go for the Throat is finished resolving, Nelly chooses to move Child of Alara to the command zone. Will Child’s triggered ability trigger?',
    type: 'yesno',
  },
  {
    question:
      'Adam controls City of Brass and their Commander is Kozilek, the Great Distortion. What types of mana can City of Brass produce?',
    type: 'multiple',
    answers: [
      'One mana of any color',
      'One mana of any color or one colorless mana',
      'One colorless mana',
      'It cannot produce mana',
    ],
  },
  {
    question: 'Can a player’s Commander deck have a companion?',
    type: 'yesno',
  },
  {
    question: 'Have you learned anything new during this seminar?',
    type: 'yesno',
  },
  {
    question: 'How did you like the seminar?',
    type: 'rating',
  },
]

module.exports = questions
