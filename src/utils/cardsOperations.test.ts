import {
  getRandomNumber,
  createEmptyCards,
  selectCards,
  duplicateCards,
  resetPlayingCards,
  shuffleCards,
  isAllCardsFound,
} from './cardsOperations';

const fakeCardsData = [
  { id: 1, name: "1", url: "" },
  { id: 2, name: "2", url: "" },
  { id: 3, name: "3", url: "" }
];

const fakeCards = fakeCardsData.map((card) => {
  return {
    ...card,
    isFlipped: false,
    isSucceed: false,
    isFailed: false,
  }
});

describe('getRandomNumber operations', () => {
  it('should return a number between 0 and 2', () => {
    expect(getRandomNumber(3)).toBeGreaterThanOrEqual(0);
    expect(getRandomNumber(3)).toBeLessThanOrEqual(2);
  });
});

describe('createEmptyCards operations', () => {
  it('should create an array of 0 empty cards', () => {
    expect(createEmptyCards(0)).toEqual([]);
  });

  it('should create an array of 3 empty cards', () => {
    expect(createEmptyCards(3)).toEqual(fakeCards);
  });
});

describe('selectCards operations', () => {
  it('should choose 2 cards in the cards array', () => {
    const chosenCards = selectCards([...fakeCardsData], 2);
    expect(chosenCards.length).toEqual(2);
    expect(chosenCards[0].id).toBeDefined();
    expect(chosenCards[1].id).toBeDefined();
    expect(chosenCards[0].name).toBeDefined();
    expect(chosenCards[1].name).toBeDefined();
    expect(chosenCards[0].url).toBeDefined();
    expect(chosenCards[1].url).toBeDefined();
    expect(chosenCards[0].id).not.toEqual(chosenCards[1].id);
  });

  it('should pick cards in the cards array', () => {
    expect(selectCards(fakeCardsData, 3)).toEqual(fakeCardsData);
  });

  it('should pick all cards in the cards array', () => {
    expect(selectCards(fakeCardsData, 4)).toEqual(fakeCardsData);
  });
});

describe('duplicateCards operations', () => {
  it('should duplicate the items in the array', () => {
    expect(duplicateCards(fakeCardsData, 3)).toEqual(
      [
        ...fakeCardsData,
        { ...fakeCardsData[0], "id": 4 },
        { ...fakeCardsData[1], "id": 5 },
        { ...fakeCardsData[2], "id": 6 },
      ]
    );
  });
});

describe('resetPlayingCards operations', () => {
  it('should reset the items in the array', () => {
    expect(resetPlayingCards(fakeCardsData)).toEqual(fakeCards);
  });
});

describe('shuffleCards operations', () => {
  it('should shuffle the items in the array', () => {
    expect(shuffleCards(fakeCards)).toHaveLength(3);
    expect(
      shuffleCards(fakeCards).sort((a, b) => {
        return a.id - b.id
      })
    ).toEqual(fakeCards);
  });
});

describe('isAllCardsFound operations', () => {
  it('should return false because at least one card is not found', () => {
    expect(isAllCardsFound(fakeCards)).toBe(false);
  });

  it('should return true because all cards are found', () => {
    const fakeAllCardsFound = fakeCardsData.map((card) => {
      return {
        ...card,
        isFlipped: false,
        isSucceed: true,
        isFailed: false,
      }
    });

    expect(isAllCardsFound(fakeAllCardsFound)).toBe(true);
  });
});