import type { CardFromData } from '../state/index';

export const GET_CARDS = 'GET_CARDS';
export const FLIP_CARD = 'FLIP_CARD';
export const START_GAME = 'START_GAME';
export const STOP_GAME = 'STOP_GAME';

interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
    if (!payload) return { type };

    return { type, payload };
}

type anyActions = Action<string, any>;
type getCardsAction = Action<typeof GET_CARDS, CardFromData[]>;
type flipCardAction = Action<typeof FLIP_CARD, number>;
type startGameAction = Action<typeof START_GAME, null>;
type stopGameAction = Action<typeof STOP_GAME, null>;

export type Actions = 
    getCardsAction | 
    flipCardAction | 
    startGameAction | 
    stopGameAction | 
    anyActions;

export function getAndInitCards(cards: CardFromData[]): getCardsAction {
    return createAction(GET_CARDS, cards);
}

export function flipCard(id: number): flipCardAction {
    return createAction(FLIP_CARD, id);
}

export function startGame(): startGameAction {
    return createAction(START_GAME, null);
}

export function stopGame(): stopGameAction {
    return createAction(STOP_GAME, null);
}

// export function getAndInitCards (cards: CardFromData[]): <T extends string, P>(type: T, payload: P): Action<T, P> {
//   type: 'GET_AND_INIT_CARDS',
//   payload: cards,
// };

// export const flipCard = (id: number): NumberPayloadActionsType => ({
//   type: 'FLIP_CARD',
//   payload: id,
// });

// export const startGame = (): NoPayloadActionType => ({
//   type: 'START_GAME',
// });