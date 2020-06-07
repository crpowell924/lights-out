import React from 'react';
import Game, {toggleTiles} from './game.js';


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


