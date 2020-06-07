import React, {Component} from 'react';

class Game extends Component {
    // contains winning state, reset capability, tracks moves
    constructor(props) {
        super(props);
        this.state = {
            tiles: generateInitStates(),
            didWinGame: false,
            moves: 0
        }
    }
    resetTiles() {
        this.setState({
            tiles : generateInitStates(),
            didWinGame : false,
            moves: 0
        })
    }
    handleTileClick(ind) {
        if(this.state.didWinGame === true){ return; }

        var tiles = this.state.tiles.slice();
        tiles = toggleTiles(tiles, ind);
        this.setState({
            tiles: tiles,
            moves: this.state.moves + 1
        });

        if (didWinGame(tiles)===true) {
            this.setState({didWinGame: true});
            console.log("you won")
            return;
        }
    }
    render() {
        var statusText;
        var buttonText;
        if (this.state.didWinGame === true) {
            statusText = "You won! Want to play again?";
            buttonText = "Play Again";
        } else {
            statusText = "Turn off all the lights to win!";
            buttonText = "Restart"
        }
        return (
            <section className="has-text-centered section">
                <div className="subtitle has-text-light">{statusText}</div>
                <button className="button has-text-light has-background-link" 
                    onClick={() => this.resetTiles()}>{buttonText}
                </button>
                <br/><br/>
                <Board tiles={this.state.tiles} onClick={(ind) => this.handleTileClick(ind)}/>
                <br/><br/>
                <div className="subtitle has-text-light">Moves: {this.state.moves}</div>
            </section>
        )
    }
}

class Board extends Component {
    renderTile(ind) {
        return(
            <Tile 
            key={ind}
            value={this.props.tiles[ind]}
            onClick={() => this.props.onClick(ind)}
            />
            )
        }
        
    render() {
        var tileSquares = [];
        for (var i = 0; i < 25; i++){
            tileSquares.push(this.renderTile(i));
        }
        return(
                <div className="board">
                    {tileSquares}
                </div>
        )
    }
}
        
function Tile(props) {
    return(
        <button 
        className={`square ${props.value === 0 ? 'unlit' : 'lit'}`} 
        onClick={props.onClick}/>
    );
}
function generateInitStates() {
    var tiles = []
    for (var i=0; i<25; i++) {
        var randomBinary = Math.floor(Math.random()*2) // generates 0 or 1
        tiles.push(randomBinary);
    }
    return tiles;
}

export const toggleTiles = (initTiles, ind) => {
    const tiles = initTiles.slice()
    const targetIndices = [ind, ind-5, ind-1, ind+1, ind+5];
    const targetExistingIndices = targetIndices.filter(index => //filters out foul indices
        (index >=0 && index<25) && 
        (Math.abs(ind-index) > 1 || Math.floor(index/5) === Math.floor(ind/5))
    );
    for (var i = 0; i < targetExistingIndices.length; i++){
        if (tiles[targetExistingIndices[i]] === 0) {
            tiles[targetExistingIndices[i]] = 1;
        } else {
            tiles[targetExistingIndices[i]] = 0;
        }
    }
    return tiles;
}

export const didWinGame = (tiles) => {
    for (var i = 0; i < tiles.length; i++){
        if (tiles[i]===1) {
            return false;
        }
    }
    return true;
}

export default Game;
