import type { CardFromData } from '../state/index';

export const GET_CARDS = 'GET_CARDS';
export const FLIP_CARD = 'FLIP_CARD';
export const START_GAME = 'START_GAME';
export const TEST_COMBINATION = 'TEST_COMBINATION';
export const INIT_NEXT_TURN = 'INIT_NEXT_TURN';
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
type testCombinationAction = Action<typeof TEST_COMBINATION, null>;
type initNextTurnAction = Action<typeof INIT_NEXT_TURN, null>;


export type Actions = 
    getCardsAction | 
    flipCardAction | 
    startGameAction | 
    stopGameAction | 
    anyActions;

export function getCards(cards: CardFromData[]): getCardsAction {
    return createAction(GET_CARDS, cards);
}

export function flipCard(id: number): flipCardAction {
    return createAction(FLIP_CARD, id);
}

export function startGame(): startGameAction {
    return createAction(START_GAME, null);
}

export function testCombination(): testCombinationAction {
    return createAction(TEST_COMBINATION, null);
}

export function initNextTurn(): initNextTurnAction {
    return createAction(INIT_NEXT_TURN, null);
}

export function stopGame(): stopGameAction {
    return createAction(STOP_GAME, null);
}