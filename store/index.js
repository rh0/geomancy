export const state = () => ({
  // All Geomanic figures in binary order so its index will match its binary
  //   representation. For instance:
  //   cards[3] lines are binary 3 (0011)
  cards: [
    {
      name: 'Via',
      numeral: 'XVI',
      lines: [0,0,0,0],
      sign: '♋︎',
      planet: '☽',
      elements: {
        inner: '▽',
        innerName: 'water',
        outer: '▽',
        outerName: 'water'
      }
    },
    {
      name: 'Cauda Draconis',
      numeral: 'XIII',
      lines: [0,0,0,1],
      sign: '☋',
      planet: '♄♂︎',
      elements: {
        inner: '△',
        innerName: 'fire',
        outer: '△',
        outerName: 'fire'
      }
    },
    {
      name: 'Puer',
      numeral: 'I',
      lines: [0,0,1,0],
      sign: '♈︎',
      planet: '♂︎',
      elements: {
        inner: '△',
        innerName: 'air',
        outer: '△',
        outerName: 'fire'
      }
    },
    {
      name: 'Fortuna Minor',
      numeral: 'XV',
      lines: [0,0,1,1],
      sign: '♌︎',
      planet: '☉',
      elements: {
        inner: '△',
        innerName: 'fire',
        outer: '△',
        outerName: 'fire'
      }
    },
    {
      name: 'Puella',
      numeral: 'VII',
      lines: [0,1,0,0],
      sign: '♎︎',
      planet: '♀︎',
      elements: {
        inner: '▽',
        innerName: 'water',
        outer: '△',
        outerName: 'air'
      }
    },
    {
      name: 'Amissio',
      numeral: 'II',
      lines: [0,1,0,1],
      sign: '♉︎',
      planet: '♀︎',
      elements: {
        inner: '△',
        innerName: 'fire',
        outer: '▽',
        outerName: 'earth'
      }
    },
    {
      name: 'Carcer',
      numeral: 'X',
      lines: [0,1,1,0],
      sign: '♑︎',
      planet: '♄',
      elements: {
        inner: '▽',
        innerName: 'earth',
        outer: '▽',
        outerName: 'earth'
      }
    },
    {
      name: 'Lætitia',
      numeral: 'XII',
      lines: [0,1,1,1],
      sign: '♓︎',
      planet: '♃',
      elements: {
        inner: '△',
        innerName: 'fire',
        outer: '▽',
        outerName: 'water'
      }
    },
    {
      name: 'Caput Draconis',
      numeral: 'XIV',
      lines: [1,0,0,0],
      sign: '☊',
      planet: '♃♀︎',
      elements: {
        inner: '▽',
        innerName: 'earth',
        outer: '△',
        outerName: 'fire'
      }
    },
    {
      name: 'Conjunctio',
      numeral: 'VI',
      lines: [1,0,0,1],
      sign: '♍︎',
      planet: '☿',
      elements: {
        inner: '△',
        innerName: 'air',
        outer: '▽',
        outerName: 'earth'
      }
    },
    {
      name: 'Acquisitio',
      numeral: 'IX',
      lines: [1,0,1,0],
      sign: '♐︎',
      planet: '♃',
      elements: {
        inner: '△',
        innerName: 'air',
        outer: '△',
        outerName: 'fire'
      }
    },
    {
      name: 'Rubeus',
      numeral: 'VIII',
      lines: [1,0,1,1],
      sign: '♏︎',
      planet: '♂︎',
      elements: {
        inner: '△',
        innerName: 'air',
        outer: '▽',
        outerName: 'water'
      }
    },
    {
      name: 'Fortuna Major',
      numeral: 'V',
      lines: [1,1,0,0],
      sign: '♌︎',
      planet: '☉',
      elements: {
        inner: '▽',
        innerName: 'earth',
        outer: '△',
        outerName: 'fire'
      }
    },
    {
      name: 'Albus',
      numeral: 'III',
      lines: [1,1,0,1],
      sign: '♊︎',
      planet: '☿',
      elements: {
        inner: '▽',
        innerName: 'water',
        outer: '△',
        outerName: 'air'
      }
    },
    {
      name: 'Tristitia',
      numeral: 'XI',
      lines: [1,1,1,0],
      sign: '♒︎',
      planet: '♄',
      elements: {
        inner: '▽',
        innerName: 'earth',
        outer: '△',
        outerName: 'air'
      }
    },
    {
      name: 'Populus',
      numeral: 'IV',
      lines: [1,1,1,1],
      sign: '♋︎',
      planet: '☽',
      elements: {
        inner: '▽',
        innerName: 'water',
        outer: '▽',
        outerName: 'water'
      }
    },
  ]
})
