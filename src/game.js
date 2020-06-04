import React, {Component} from 'react';


function Square(props) {
  return(
    <button className="square"
    onClick={props.onClick}/>
  );
}

class Board extends Component {
  renderSquare(i) {
    return(
      <Square 
        //assign random value (on /off)
        //give onclick function
      />
    )
  }
}

class Game extends Component {

}