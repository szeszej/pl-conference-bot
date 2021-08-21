const questions = [
  {
    question: 'Jak działa mulliganowanie w 2HG?',
    type: 'multiple',
    answers: [
      'Gracze drużyny rozpoczynającej, jeden po drugim, mulliganują aż nie zatrzymają rąk, a następnie druga drużyna robi to samo',
      'Gracze drużyny rozpoczynającej mulliganują jednocześnie aż nie zatrzymają rąk, a następnie druga drużyna robi to samo',
      'Gracze drużyny rozpoczynającej mulliganują jednocześnie, a następnie druga drużyna robi tyo samo. Powtarzamy ten proces aż wszyscy gracze nie zatrzymają rąk',
    ],
  },
  {
    question: 'Czy gracze dostają darmowego mulligana?',
    type: 'yesno',
  },
  {
    question:
      'Czy gracze rozpoczynający pomijają swój pierwszy draw step w grze?',
    type: 'yesno',
  },
  {
    question:
      'Aleks pyta się swoje teammate’a Artura czy powinien zatrzymać rękę czy zmulliganować. Natalia natychmiast wzywa sędziego. Jaka jest odpowiednia kara (zakładamy, że to Competitive REL)?',
    type: 'multiple',
    answers: [
      'Aleks dostaje Match Loss za Outside Assistance',
      'Aleks dostaje Warning za Mulligan Procedure Violation',
      'Aleks nie dostaje żadnej kary - w 2HG można konsultować się ze swoimi teammate’ami',
    ],
  },
  {
    question:
      'Alwira, siedząca po lewej, i Ameryk, siedzący po prawej, nie zgadzają się co do tego, czy Alwira powinna zmulliganować rękę. Ameryk mówi, że powinna, Alwira się zgadza się z nim. Jakie jest prawidłowe rozwiązanie tego konfliktu?',
    type: 'multiple',
    answers: [
      'Każdy gracz podejmuje wybory za siebie - nie można zmusić Alwiry, żeby zmulliganowała',
      'Alwira musi zmulliganować',
      'Gracze rzucają monetą, aby rozwiązać konflikt',
      'Gracze powinni rzucić wezwać sędziego, aby rozwiązał konflikt',
    ],
  },
  {
    question:
      'Alberta zaczyna swój Main Phase z Sorin, Lord of Innistrad i Grizzly Bear na stole. Jej teammate, Alonz, kontroluje Forest Bear. Kiedy Alberta aktywuje drugą zdolność Sorina, jakie statystyki będą miały oba misie?',
    type: 'multiple',
    answers: [
      'Oba będą 2/2',
      'Grizzly Bear będzie 2/2 a Forest Bear będzie 3/2',
      'Grizzly Bear będzie 3/2 a Forest Bear będzie 2/2',
      'Oba będą 3/2',
    ],
  },
  {
    question:
      'Adelajda i Abba mają po Ajani’s Pridemate na stole. Adelajda zagrywa !card Vampiric Touch! celując w jednego z przeciwników. Po tym jak Vampiric Touch zresolve’uje i stos jest pusty, ile będzie counterków na każdym Pridemate’cie?',
    type: 'multiple',
    answers: [
      'Oba będą miały po  1 counterku',
      'Pridemate Adelajdy będzie miał 1 counter, Pridemate Abby będzie miał 0 counterków',
      'Pridemate Adelajdy będzie miał 0 counterków, Pridemate Abby będzie miał 1 counter',
      'Oba będą miały 0 counterków',
    ],
  },
  {
    question:
      'Arwena i Armin mają 30 życia i grają przeciwko Nigdziebądź i Nonie, którzy również mają 30 życia. Armin kontroluje token 1/1 Vampire i rzuca Arterial Flow. Zakładając, że i Nigdziebądź i Nonie mieli po 2 karty na ręce, co stanie się po tym, jak Flow zresolve’uje?',
    type: 'multiple',
    answers: [
      'Aktywna drużyna będzie na 32 życia, a nieaktywna drużyna będzie na 28 i żaden z jej członków nie będzie miał kart na ręce',
      'Aktywna drużyna będzie na 32 życia, a nieaktywna drużyna będzie na 26 i jeden z jej członków (wybiera drużyna nieaktywna) nie będzie miał kart na ręce',
      'Aktywna drużyna będzie na 34 życia, a nieaktywna drużyna będzie na 26 i żaden z jej członków nie będzie miał kart na ręce',
      'Aktywna drużyna będzie na 32 życia, a nieaktywna drużyna będzie na 26i żaden z jej członków nie będzie miał kart na ręce',
    ],
  },
  {
    question:
      'Anna (po lewej) i Alumni (po prawej) siedzą naprzeciwko (odpowiednio) Nolana i Nadiny. Alumni chce zaatakować swoim Abyssal Specterem. Zakładając, że nie ma blocków ni removalu, jak sprawić, żeby to Nolan zdiscardował kartę z triggera Spectera?',
    type: 'multiple',
    answers: [
      'Alumni musi zadeklarować, że Specter atakuje Nolana',
      'Podczas combat damage step, Alumni musi przydzielić obrażenia ze Spectera Nolanowi',
      'Nie da się tak zrobić, gracze zawsze atakują przeciwnika naprzeciwko siebie',
      'Alumni nie musi nic mówić, stwory domyślnie atakują przeciwnika po lewej',
    ],
  },
  {
    question:
      'Anna (po lewej) i Alumni (po prawej) siedzą naprzeciwko (odpowiednio) Nolana i Nadiny. Alumni atakuje swoim Abyssal Specterem i nie mówi nic. Nie ma bloków. Co dzieje się w combat damage step?',
    type: 'multiple',
    answers: [
      'I Nolan i Nadina wyrzucają kartę',
      'Nolan wyrzuca kartę',
      'Nadina wyrzuca kartę',
      'Żaden z graczy nie wyrzuca karty',
    ],
  },
  {
    question:
      'Alokar, teammate Anastazji, ma na stole Grizzly Bear. Natalia, teammate Nirwany, kontroluje Ghostly Prison. Aktywna drużyna deklaruje atak Grizzly Bearem, a Alokar mówi “Atakuję Nirwanę”. Co się dzieje?',
    type: 'multiple',
    answers: [
      'Alokar może zaatakować misiem bez żadnych przeszkód',
      'Alokar nadal musi dopłacić 2 many do ataku',
      'Drużyna Alokara nadal musi dopłacić 2 many do ataku',
      'To tak nie działa - drużyny atakują drużynę przeciwną, nie konkretnych graczy',
    ],
  },
  {
    question:
      'Aran deklaruje atak Bane of Bala Ged w Normalsa, teammate’a Nienormalsa. Co się dzieje, kiedy trigger Bane’a zresolve’uje?',
    type: 'multiple',
    answers: [
      'I Normals i Nienormals muszą zexile’ować po dwa permanenty',
      'Normals musi zexile’ować dwa permanenty',
      'Aran wybiera, którzy z broniących się graczy exile’uje dwa permanenty',
    ],
  },
  {
    question:
      'Po tym jak Bane zaatakował Normalsa, Nienormals chce pomóc swojego teammate’owi blokując Bane’s swoim Grizzly Bearem. Czy mogą to zrobić?',
    type: 'yesno',
  },
  {
    question:
      'Alan rozpoczyna swój upkeep z Verdant Force na stole. Ile Saprolingów zostanie stworzonych jego triggerem w tym upkeepie?',
    type: 'multiple',
    answers: [1, 2, 3, 4],
  },
  {
    question:
      'Alan rozpoczyna swój upkeep z Barbed Wire w stole. Zakładając, że nic więcej nie dzieje się w tym upkeepie, ile obrażeń otrzyma drużyna Alana?',
    type: 'multiple',
    answers: [1, 2, 3, 4],
  },
  {
    question:
      'Alicja, teammate Alfonsa, zagrywa Time Warp w siebie, a następnie drużyna kończy turę. Co się dzieje?',
    type: 'multiple',
    answers: [
      'Zaczyna się tura drużyny przeciwnej, bo dodatkowe tury nie działają w 2HG',
      'Alicja dostaje turę, ale Alfons nie',
      'Drużyna Alicji dostaje dodatkową turę',
    ],
  },
  {
    question:
      'Arsen kontroluje Sorina Markova i celuje w Niesporczaka drugą zdolnością. Drużyna Niesporczaka jest na 20 życia. Co się dzieje?',
    type: 'multiple',
    answers: [
      'Drużyna Niesporczaka zostaje na 10 życia',
      'Aby życie Niesporczaka i jego teammate’a mogło zostać zmienione na 10, każdy z nich traci po 10 życia. W efekcie życie drużyny zmienia się na 0',
      'Życie drużyny Niesporczaka zostaje na 20, ponieważ w 2HG gracze nie mają indywidualnych wartości życia',
    ],
  },
  {
    question:
      'Arnold aktywuje Door to Nothingness celując w Nomada. Co się stanie, kiedy zdolność zresolve’uje?',
    type: 'multiple',
    answers: [
      'Nomad przegrywa grę, jego teammate może grać dalej',
      'Obaj przeciwnicy przegrywają jako drużyna',
      'Nic się nie dzieje, tego typu efekty nie działają w 2HG',
    ],
  },
  {
    question:
      'Arkad i Al atakują Ninę i Noda Glistener Elfem. Nina i Nod mają już 9 poison counterków. Nie ma bloków. Co dzieje się w combat damage step?',
    type: 'multiple',
    answers: [
      'Nina i Nod przegrywają grę z powodu posiadania 10 poison counterków',
      'Nina i Nod mają teraz 10 poison counterków, ale mogą grać dalej',
      'Tak się nie da. Gracze otrzymują poison counterki indywidualnie, nie jako drużyna',
    ],
  },
  {
    question:
      'W drafcie 2HG, ile kart bierze każda drużyna przed przekazaniem boosterka dalej',
    type: 'multiple',
    answers: [0.75, 1, 2, 'Nie ma draftów 2HG'],
  },
  {
    question: 'Czy mecze 2HG gra się do 2 wygranych?',
    type: 'yesno',
  },
  {
    question: 'Czy nauczyliście się czegoś nowego podczas tego seminaru?',
    type: 'yesno',
  },
  {
    question: 'Jak oceniacie ten seminar',
    type: 'rating',
  },
]

module.exports = questions
