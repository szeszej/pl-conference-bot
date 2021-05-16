const questions = [
  {
    question:
      "Game loss to kara polegający na tym, że gracz przegrywa obecnie trwającą grę (musi po prostu kliknąć na Concede), jeśli miałby w ten sposób przegrać mecz, to tak właśnie się dzieje. Co jednak dzieje się, jeśli gracze są akurat pomiędzy grami w meczu?",
    type: "multiple",
    answers: [
      "Gracz po prostu musi nacisnąć Concede podczas sideboardowania",
      "Gracze muszą zrestartować mecz i poddawać się w taki sposób, żeby wynik odzwierciedlał stan faktyczny, a osoba z Game Lossem mogła wybrać czy chce zaczynać czy dobierać",
      "Game Loss przechodzi na kolejny mecz",
      "Game Loss jest jest downgrade’owany do Warninga",
    ],
  },
  {
    question:
      "W zwykłym IPG, Game Play Errors to błędy, jakie może popełnić gracz w samej grze, np. zapomnieć dociągnąć karty lub dociągnąć o jedną za dużo. Jakie Game Play Errors możemy przyznawać według DIPG?",
    type: "multipleYesno",
    answers: [
      "Missed Trigger",
      "Looking at Extra Cards",
      "Hidden Card Error",
      "Mulligan Procedure Error",
      "Game Rule Violation",
      "Failure to Maintain Game State,
    ],
  },
  {
    question: "W zwykłym IPG, Tournament Errors to błędy, które gracze mogą popełnić poza samą grą, np. spóźnić się na początek rundy lub mieć złą decklistę. Tournament Errors możemy przyznawać według DIPG?",
    type: "multipleYesno",
    answers: [
      "Tardiness",
      "Outside Assistance",
      "Slow Play",
      "Deck Problems",
      "Decklist Problems",
      "Disconnect",
      "Communication Policy Violation",
    ],
  },
  {
    question: "W zwykłym IPG głównym powodem przyznania karty kary Tardiness (spóźnialstwo) jest nie bycie na swoim miejscu w momencie rozpoczęcie rundy. Jaka jest główny powód przyznania karty za to przewinienie podczas turniejów cyfrowych?",
    type: "multiple",
    answers: [
      "W momencie startu rundy gracz nie rozpoczął jeszcze meczu",
      "Po rozpoczęciu rundy gracz nie skontaktował się z osobami funkcyjnymi",
      "Po rozpoczęciu rundy gracz nie skontaktował się ze swoim przeciwnikiem w rozsądnym czasie",
      "Gracza nie ma przy komputerze w momencie rozpoczęcia rundy",
    ],
  },
  {
    question: "Tournament Error: Outside Assistance (pomoc z zewnątrz) w zwykłym IPG to przewinienie polegające na próbie uzyskania private information lub porad dotyczących swojego meczu (albo dawanie komuś private information lub porad dotyczących ich meczu). Czy według DIPG graczowi, który ogląda stream swojego przeciwnika należy się TE:OA?",
    type: "yesno",
  },
  {
    question:
      "Czy pytając się swojego przeciwnika “czy masz kontrę na ręce?” popełniamy Tournament Error: Outside Assistance (według zwykłego IPG jest to dozwolone)?",
    type: "yesno",
  },
  {
    question:
      "Według zwykłego IPG jeśli gracz otrzyma informacje o swoim meczu od osoby trzeciej, ale samemu nie zabiegał o nie, nie otrzymuje karty z Tournament Error: Outside Assistance. DIPG z kolei zawiera dodatkowy warunek nie otrzymania tejże kary. Aby jej nie dostać, gracz musi:",
    type: "multiple",
    answers: [
      "Poinformować o tym fakcie przeciwnika i powstrzymać się od podejmowania decyzji bazując na tych informacjach",
      "Usunąć wiadomość, zablokować znajomego i powstrzymać się od podejmowania decyzji bazując na tych informacjach",
      "Zignorować otrzymane informacje",
      "Poinformować o tym fakcie osoby funkcyjne i powstrzymać się od podejmowania decyzji bazując na tych informacjach",
    ],
  },
  {
    question:
      "Czy używanie zewnętrznych programów, które pokazują ci informacje, które nie byłyby normalnie dostępne w grze to przewinienie, które karane jest Tournament Error: Outside Assistance?",
    type: "yesno",
  },
  {
    question:
      "Według zwykłego IPG, jeśli spectator (widz) popełnia Tournament Error: Outside Assistance, należy dodać go do turnieju, wlepić mu karę i wyprosić. W jaki sposób możemy ukarać spectatora, który popełnia to wykroczenie podczas turnieju cyfrowego?",
    type: "multiple",
    answers: [
      "zbanować na platformie, na której prowadzony jest turniej",
      "zbanować go na Arenie",
      "zgłosić bezpośrednio do Wizards of the Coast",
      "zgłosić na policję",
    ],
  },
  {
    question:
      "Tournament Error: Slow Play (powolna gra) w zwykłym IPG to kara za... zbyt powolną grę, ale tylko jeśli nie robimy tego specjalnie. Czy ma ona jakiekolwiek zastosowanie w turniejach, które używają wbudowanego w Arenę zegara?",
    type: "yesno",
  },
  {
    question:
      "Jeśli turniej nie używa zegara Arenowego, ile maksymalnie czasu można przeznaczyć na sideboardowanie, aby nie otrzymać kary Tournament Error: Slow Play?",
    type: "multiple",
    answers: [
      "1 minutę",
      "3 minuty",
      "5 minut",
      "nie ma limitu",
    ],
  },
  {
    question: "Według DIPG, jaka jest kara za TE: Decks Problems?",
    type: "multiple",
    answers: [
      "Warning",
      "Game Loss",
      "Match Loss",
      "Disqualification",
    ],
  },
  {
    question: "Czy jeśli decklista jest nielegalna, zmieniamy ją w ten sposób, aby pasowała do decku?",
    type: "yesno",
  },
  {
    question:
      "Czy jeśli decklista jest legalna, ale talia gracza różni się od niej, to czy zmieniamy ją w ten sposób, aby pasowała do decku?",
    type: "yesno",
  },
  {
    question: "Co dzieje się, jeśli gracz nie ma na Arenie kart, które wpisał do decklisty?",
    type: "multiple",
    answers: [
      "Zostaje zdyskwalifikowany",
      "Zostaje zdyskwalifikowany, ale tylko jeśli nie ma wildcard, żeby je stworzyć",
      "Musi użyć dowolnych innych wybranych przez siebie kart zamiast tych z decklisty ",
      "Musi użyć wybranych przez siebie basic landów zamiast tych kart",
    ],
  },
  {
    question:
      "Czy za pomocą TE: Deck Problems karamy również osoby, które celowo zmieniły swój deck?",
    type: "yesno",
  },
  {
    question: "Tournament Error: Disconnect (rozłączenie) nie istnieje w papierowym IPG. W jakich sytuacjach należy przyznać tę karę według DIPG?",
    type: "multiple",
    answers: [
      "Gracz zostaje rozłączny z grą",
      "Gracz, z którym był kontakt, przestaje odpowiadać przez dłuższy czas",
      "Oba powyższe",
      "Żadne z powyższych",
    ],
  },
  {
    question: "Według DIPG, jaka jest kara za TE: Disconnect?",
    type: "multiple",
    answers: [
      "Warning",
      "Game Loss",
      "Match Loss",
      "Disqualification",
    ],
  },
  {
    question:
      "Czy jeśli gracz przegra grę/mecz z powodu rozłączenia, czy ta gra/mecz jest powtarzana?",
    type: "yesno",
  },
  {
    question:
      "Jeśli przegrana gra z powodu rozłączenia nie kończy automatycznie meczu, co dzieje się dalej z meczem?",
    type: "multiple",
    answers: [
      "Gracz grają normalnie dalej",
      "Rozłączony gracz otrzyma dodatkowo Game Loss w kolejnej rundzie",
      "Rozłączony gracz nie może się sideboardować",
      "Gracze muszą zrestartować mecz i poddawać się w taki sposób, żeby wynik odzwierciedlał stan faktyczny i odpowiednia osoba mogła wybrać play/draw",
    ],
  },
  {
    question:
      "Przez jaki maksymalnie czas gracz może być rozłączony zanim kara nie zostanie zwiększona do Match Lossa?",
    type: "multiple",
    answers: [
      "5 minut",
      "10 minut",
      "15 minut",
      "nie ma limitu",
    ],
  },
  {
    question:
      "Co należy zrobić, kiedy po upływie ogłoszonego wcześniej czasu, dla meczu nie został zgłoszony wynik, a żaden z graczy nie odpowiada?",
    type: "multiple",
    answers: [
      "Obaj gracze otrzymują przegraną",
      "Obaj gracze otrzymują wygraną",
      "Mecz kończy się remisem",
      "Gracze zostają zdyskwalifikowani",
    ],
  },
  {
    question: "Czy nauczyliście się dzisiaj czegoś nowego?",
    type: "yesno",
  },
  {
    question: "Jak podobał się Wam seminar?",
    type: "rating",
  },
];

module.exports = questions;
