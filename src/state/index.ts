export type CardFromData = {
  id: number,
  name: string,
  url: string,
}

export type Card = {
  id: number,
  name: string,
  url: string,
  isFlipped: boolean,
}

export type RootState = {
  cards: Card[] | [];
}

const initialState: RootState = {
  cards: [],
};

export default initialState;