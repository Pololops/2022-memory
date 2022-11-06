import type { CardFromData } from '../state/index';

export const GET_SCORE_FROM_LOCAL_STORAGE = 'GET_SCORE_FROM_LOCAL_STORAGE';
export const GET_CARDS = 'GET_CARDS';
export const FLIP_CARD = 'FLIP_CARD';
export const START_GAME = 'START_GAME';
export const TEST_COMBINATION = 'TEST_COMBINATION';
export const SEARCH_NOT_FOUND_CARD = 'SEARCH_NOT_FOUND_CARD';
export const INIT_NEXT_TURN = 'INIT_NEXT_TURN';
export const STOP_GAME = 'STOP_GAME';
export const INCREASE_SCORE = 'INCREASE_SCORE';
export const DECREASE_SCORE = 'DECREASE_SCORE';

interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

type anyActions = Action<string, any>;
type getScoreFromLocalStorageAction = Action<typeof GET_SCORE_FROM_LOCAL_STORAGE, null>;
type getCardsAction = Action<typeof GET_CARDS, CardFromData[]>;
type flipCardAction = Action<typeof FLIP_CARD, number>;
type startGameAction = Action<typeof START_GAME, null>;
type stopGameAction = Action<typeof STOP_GAME, null>;
type testCombinationAction = Action<typeof TEST_COMBINATION, null>;
type searchNotFoundCardAction = Action<typeof SEARCH_NOT_FOUND_CARD, null>;
type initNextTurnAction = Action<typeof INIT_NEXT_TURN, null>;
type increaseScoreAction = Action<typeof INCREASE_SCORE, number>;
type decreaseScoreAction = Action<typeof DECREASE_SCORE, number>;


export type Actions = 
    getScoreFromLocalStorageAction | 
    getCardsAction | 
    flipCardAction | 
    startGameAction | 
    stopGameAction | 
    testCombinationAction | 
    searchNotFoundCardAction | 
    initNextTurnAction |
    increaseScoreAction | 
    decreaseScoreAction |
    anyActions;


/**
 * An action creator function
 * @returns An action function with its type and payload
 */
function createAction<T extends string, P>(type: T, payload: P): Action<T, P> {
    if (!payload) return { type };

    return { type, payload };
}

/**
 * Action type function to get score from localStorage
 */
export function getScoreFromLocalStorage(): getScoreFromLocalStorageAction {
    return createAction(GET_SCORE_FROM_LOCAL_STORAGE, null);
}

/**
 * Action type function to put cards in state
 */
export function getCards(cards: CardFromData[]): getCardsAction {
    return createAction(GET_CARDS, cards);
}

/**
 * Action type function to flip a card on click
 */
export function flipCard(id: number): flipCardAction {
    return createAction(FLIP_CARD, id);
}

/**
 * Action type function to reset and start the game
 */
export function startGame(): startGameAction {
    return createAction(START_GAME, null);
}

/**
 * Action type function to test two clicked cards
 */
export function testCombination(): testCombinationAction {
    return createAction(TEST_COMBINATION, null);
}

/**
 * Action type function to search a not found card in cards
 */
export function searchNotFoundCard(): searchNotFoundCardAction {
    return createAction(SEARCH_NOT_FOUND_CARD, null);
}

/**
 * Action type function to flip cards when wrong combination
 */
export function initNextTurn(): initNextTurnAction {
    return createAction(INIT_NEXT_TURN, null);
}

/**
 * Action type function to stop the game and prevent clicking cards
 */
export function stopGame(): stopGameAction {
    return createAction(STOP_GAME, null);
}

/**
 * Action type function to increase score by 10 points
 */
export function increaseScore(): increaseScoreAction {
    return createAction(INCREASE_SCORE, 10);
}

/**
 * Action type function to decrease score by 5 points
 */
export function decreaseScore(): decreaseScoreAction {
    return createAction(DECREASE_SCORE, 5);
}