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
  gameIsOn: boolean,
  cards: Card[] | [];
  isModalVisible: boolean,
  score: number,
  counter: number
}

const initialState: RootState = {
  gameIsOn: true,
  cards: [],
  isModalVisible: true,
  score: 0,
  counter: 60,
};

export default initialState;