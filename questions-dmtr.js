const questions = [
  {
    question: 'DMTR zawiera zasady prowadzenia następujących turniejów:',
    type: 'multiple',
    answers: [
      'Turniejów przeprowadzanych Online',
      'Turniejów w sieci LAN (lokalnych)',
      'Oba powyższe',
      'Żadne z powyższych',
    ],
  },
  {
    question:
      'W przypadku kiedy informacje turniejowe (factsheet) i DMTR zawierają sprzeczne instrukcje:',
    type: 'multiple',
    answers: [
      'Ważniejszy jest factsheet',
      'Ważniejszy jest DMTR',
      'Organizator decyduje, która instrukcja ma zastosowanie',
      'Sędzia główny decyduje, która instrukcja ma zastosowanie',
    ],
  },
  {
    question: 'Rola Lead Admin w DMTR oznacza:',
    type: 'multiple',
    answers: [
      'Organizatora',
      'Sędziego głównego',
      'Teamleadera',
      'Scorekeepera',
    ],
  },
  {
    question: 'Czy DMTR wymaga od gracza stabilnego łącza?',
    type: 'yesno',
  },
  {
    question: 'Czy DMTR wymaga od gracza zaktualizowanego klienta?',
    type: 'yesno',
  },
  {
    question:
      'Czy DMTR wymaga od gracza dołączenia do i uważania na Discord/MTGMelee/inny kanał komunikacyjny?',
    type: 'yesno',
  },
  {
    question:
      'Procedury przed grą oczywiście też różnią się pomiędzy medium cyfrowym i papierowym. Ułóżcie więc w kolejności od 1 do 6 (reagując odpowiednimi emotkami) następujące kroki, jakie gracze muszą podjąć przed grą:',
    type: 'sequence',
    answers: [
      'Wprowadź ID przeciwnika do Arena',
      'Wybierz talię, którą zarejestrowałeś w evencie',
      'Uruchom Arenę i wybierz Direct Challenge',
      'Wyślij Challenge',
      'Wybierz odpowiedni rodzaj Challenge',
      'Znajdź Arena ID przeciwnika',
    ],
  },
  {
    question:
      'Czy według DMTR dopuszczane są intentional draws (celowe remisy)?',
    type: 'yesno',
  },
  {
    question:
      'Co dzieje się, gdy gracze grają dalej po zakończeniu czasu rundy?',
    type: 'multiple',
    answers: [
      'Kontaktujemy się z nimi, żeby poinformować ich, że mogą zrobić jeszcze maksymalnie 5 tur w grze',
      'Dajemy im podwójną przegraną',
      'Wynik gry zostaje taki, jaki był w momencie skończenia się czasu',
      'Kontaktujemy się z nimi, aby dowiedzieć się, jak im idzie',
    ],
  },
  {
    question:
      'Czy według DMTR gracze mają dostęp do swojej decklisty w każdym momencie?',
    type: 'yesno',
  },
  {
    question:
      'Jeśli gracz dropuje, a turniej jest rozgrywany w trybie single/double elimination, co robimy z resztą drabinki?',
    type: 'multiple',
    answers: [
      'Zmieniamy całą drabinkę, żeby odzwierciedlić dropa',
      'Traktujemy tę sytuację tak jakby gracz otrzymał Match Lossa w każdej kolejnej rundzie',
      'Każdy kolejny jego mecz zakończy się remisem',
      'Jego przeciwnicy dostaną bye w każdym z meczu, w którym mieliby z nim grać',
    ],
  },
  {
    question: 'Czy według DMTR gracze mogą robić notatki podczas gier?',
    type: 'yesno',
  },
  {
    question: 'Czy według DMTR gracze mogą streamować swoje rozgrywki?',
    type: 'multiple',
    answers: [
      'Tak, bez ograniczeń',
      'Tak, ale tylko jeśli jest to feature match',
      'Tak, ale zaleca się ustawienie minimum 2-minutowego opóźnienia',
      'Nie',
    ],
  },
  {
    question:
      'Czy według DMTR sędzia główny może używać powtórek video podczas wydawania rulingów/prowadzenia dochodzenia?',
    type: 'yesno',
  },
  {
    question: 'Jakie są rodzaje informacji w DMTR?',
    type: 'multiple',
    answers: [
      'Private i public',
      'Status, free, private i public',
      'Open i closed',
      'Public, derived i private',
    ],
  },
  {
    question:
      'Czy według DMTR gracze mogą prosić przeciwników o podanie im private information?',
    type: 'yesno',
  },
  {
    question: 'Jakie zasady komunikacji zawiera DMTR?',
    type: 'multiple',
    answers: [
      'Gracze mają być mili i szybko odpowiadać osobom funkcyjnym',
      'Takie same jak w MTR',
      'Graczom nie wolno się ze sobą komunikować z wyjątkiem procedur przez meczem',
      'Graczom wolno komunikować się jedynie z osobami funkcyjnymi',
    ],
  },
  {
    question:
      'Czy według DMTR gracze mogą zastraszać lub nękać przeciwników używając social media albo ogólnodostępnych czatów?',
    type: 'yesno',
  },
  {
    question:
      'Czy DMTR (w związku z obecnością zegara szachowego na Arenie) uwzględnia w ogóle takie przewinienia jak Slow Play czy Stalling podczas eventów cyfrowych?',
    type: 'yesno',
  },
  {
    question:
      'Gracz przez Discord dostaje od swojego znajomego informacje dotyczące tego, co jego przeciwnik ma na ręce. Gracz nie prosił swojego znajomego o te informacje. Co powinien zrobić?',
    type: 'multiple',
    answers: [
      'Poinformować o tym fakcie przeciwnika i powstrzymać się od podejmowania decyzji bazując na tych informacjach',
      'Usunąć wiadomość, zablokować znajomego i powstrzymać się od podejmowania decyzji bazując na tych informacjach',
      'Zignorować otrzymane informacje',
      'Poinformować o tym fakcie osoby funkcyjne i powstrzymać się od podejmowania decyzji bazując na tych informacjach',
    ],
  },
  {
    question: 'Czy nauczyliście się dzisiaj czegoś nowego?',
    type: 'yesno',
  },
  {
    question: 'Jak podobał się Wam seminar?',
    type: 'rating',
  },
]

module.exports = questions
