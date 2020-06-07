import React from 'react';
import Game, {toggleTiles, didWinGame} from './game.js';


const initTileSet = [
    0,0,1,1,0,
    1,0,0,1,1,
    0,1,0,0,0,
    0,1,1,0,1,
    0,0,1,1,0]
describe('toggleTiles Function', () => {
    it('should toggle corner and surrounding tiles', () => {
        const postTileSet = [
            1,1,1,1,0,
            0,0,0,1,1,
            0,1,0,0,0,
            0,1,1,0,1,
            0,0,1,1,0]
        const newTileSet = toggleTiles(initTileSet, 0);
        expect(newTileSet).toEqual(postTileSet);
    });


    it('should toggle edge and surrounding tiles', () => {  
        const postTileSet = [
            0,0,1,1,0,
            1,0,1,1,1,
            0,0,1,1,0,
            0,1,0,0,1,
            0,0,1,1,0]
        const newTileSet = toggleTiles(initTileSet, 12);
        expect(newTileSet).toEqual(postTileSet);
    });

    it('should toggle middle and surrounding tiles', () => {  
        const postTileSet = [
            0,0,1,1,0,
            1,0,1,1,1,
            0,0,1,1,0,
            0,1,0,0,1,
            0,0,1,1,0]
        const newTileSet = toggleTiles(initTileSet, 12);
        expect(newTileSet).toEqual(postTileSet);
    });

});

describe('didWinGame Function', () => {
    it('should return false with many 1s', () => {
        const nonWinningTileSet = [
            0,0,1,1,0,
            1,0,1,1,1,
            0,0,1,1,0,
            0,1,0,0,1,
            0,0,1,1,0]
        const didWinBool = didWinGame(nonWinningTileSet);
        expect(didWinBool).toEqual(false);
    });
    it('should return false with one 1', () => {
        const almostWinningTileSet = [
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,1]
        const didWinBool = didWinGame(almostWinningTileSet);
        expect(didWinBool).toEqual(false);
    });
    it('should return true with all zeros', () => {
        const winningTileSet = [
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0,
            0,0,0,0,0]    
        const didWinBool = didWinGame(winningTileSet);
        expect(didWinBool).toEqual(true);       
    });


})



