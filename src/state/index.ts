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
  isSucceed: boolean,
  isFailed: boolean,
}

export type RootState = {
  gameIsOn: boolean,
  cards: Card[] | [];
  score: number,
  counter: number,
  isModalVisible: boolean,
  turn: { id: number, name: string }[] | [],
  turnNumber: number,
}

const initialState: RootState = {
  gameIsOn: false, // prevent playing when game is off
  cards: [],
  score: 0, // The starting score
  counter: 60 * 4, // The time before game over in seconds
  isModalVisible: true, // The state of the welcome and end modal
  turn: [], // The buffer for a game turn, contains two played cards max to compare
  turnNumber: 0, // The total number of game
};

export default initialState;