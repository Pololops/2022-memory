import { 
  duplicateCards, 
  resetCards, 
  shuffleCards, 
} from './cardsOperator';

const fakeCardsData = [
  { "id": 1, "name": "1", "url": "/" },
  { "id": 2, "name": "2", "url": "/" },
  { "id": 3, "name": "3", "url": "/" }
];

const fakeCards = fakeCardsData.map((card) => {
  return {
    ...card,
    isFlipped: false,
    isSucceed: false,
    isFailed: false,
  }
});

describe('Cards operations', () => {
  it('should duplicate the items in the array', () => {
    expect(duplicateCards(fakeCardsData)).toEqual(
      [
        ...fakeCardsData, 
        {...fakeCardsData[0], "id": 4 },
        {...fakeCardsData[1], "id": 5 },
        {...fakeCardsData[2], "id": 6 },
      ]
    );
  });

  it('should reset the items in the array', () => {
    expect(resetCards(fakeCardsData)).toEqual(fakeCards);
  });

  it('should shuffle the items in the array', () => {
    expect(shuffleCards(fakeCards)).toHaveLength(3);
    expect(
      shuffleCards(fakeCards).sort((a, b) => {
        return a.id - b.id
      })
    ).toEqual(fakeCards);
  });
});