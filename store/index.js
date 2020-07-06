export const state = () => ({
  // All Geomanic figures in binary order so its index will match its binary
  // representation. For instance:
  //
  // cards[3] lines are binary 3 (0011)
  cards: [
    {
      name: 'Via',
      numeral: 'XVI',
      lines: [0,0,0,0],
      sign: '♋︎',
      planet: '☽'
    },
    {
      name: 'Cauda Draconis',
      numeral: 'XIII',
      lines: [0,0,0,1],
      sign: '☋',
      planet: '♄♂︎'
    },
    {
      name: 'Puer',
      numeral: 'I',
      lines: [0,0,1,0],
      sign: '♈︎',
      planet: '♂︎',
      elements: {
        inner: '',
        outer: ''
      }
    },
    {
      name: 'Fortuna Minor',
      numeral: 'XV',
      lines: [0,0,1,1],
      sign: '♌︎',
      planet: '☉'
    },
    {
      name: 'Puella',
      numeral: 'VII',
      lines: [0,1,0,0],
      sign: '♎︎',
      planet: '♀︎'
    },
    {
      name: 'Amissio',
      numeral: 'II',
      lines: [0,1,0,1],
      sign: '♉︎',
      planet: '♀︎'
    },
    {
      name: 'Carcer',
      numeral: 'X',
      lines: [0,1,1,0],
      sign: '♑︎',
      planet: '♄'
    },
    {
      name: 'Lætitia',
      numeral: 'XII',
      lines: [0,1,1,1],
      sign: '♓︎',
      planet: '♃'
    },
    {
      name: 'Caput Draconis',
      numeral: 'XIV',
      lines: [1,0,0,0],
      sign: '☊',
      planet: '♃♀︎'
    },
    {
      name: 'Conjunctio',
      numeral: 'VI',
      lines: [1,0,0,1],
      sign: '♍︎',
      planet: '☿'
    },
    {
      name: 'Acquisitio',
      numeral: 'IX',
      lines: [1,0,1,0],
      sign: '♐︎',
      planet: '♃'
    },
    {
      name: 'Rubeus',
      numeral: 'VIII',
      lines: [1,0,1,1],
      sign: '♏︎',
      planet: '♂︎'
    },
    {
      name: 'Fortuna Major',
      numeral: 'V',
      lines: [1,1,0,0],
      sign: '♌︎',
      planet: '☉'
    },
    {
      name: 'Albus',
      numeral: 'III',
      lines: [1,1,0,1],
      sign: '♊︎',
      planet: '☿'
    },
    {
      name: 'Tristitia',
      numeral: 'XI',
      lines: [1,1,1,0],
      sign: '♒︎',
      planet: '♄'
    },
    {
      name: 'Populus',
      numeral: 'IV',
      lines: [1,1,1,1],
      sign: '♋︎',
      planet: '☽'
    },
  ]
})
