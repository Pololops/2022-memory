import type { CardFromData } from '../state/index';

export const GET_AND_INIT_CARDS = 'GET_AND_INIT_CARDS';
export const FLIP_CARD = 'FLIP_CARD';

type CardsActionType = {
  type: string,
  payload: CardFromData[] | [],
}

type NumberPayloadActionsType = {
  type: string,
  payload: number,
}

export type ActionTypes = CardsActionType | NumberPayloadActionsType;

export const getAndInitCards = (cards: CardFromData[]): CardsActionType => ({
  type: 'GET_AND_INIT_CARDS',
  payload: cards,
});

export const flipCard = (id: number): NumberPayloadActionsType => ({
  type: 'FLIP_CARD',
  payload: id,
});