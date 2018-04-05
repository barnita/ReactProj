import React, { Component } from 'react';
import Square from './Square';
import calculateWinner from './calculateWinner';
class Board extends Component{
   constructor(props)
   {
       super(props);
       this.state={
           squares:Array(9).fill(null),
           xIsNext: true,
       };
    }
   handleClick(i)
   {
    //console.log("handleClick");
    //console.log(i);
    debugger;
       const squares=this.state.squares.slice();
       console.log(squares);
       if (calculateWinner(squares) || squares[i]) {
        return;
        }
       squares[i]=this.state.xIsNext?'X':'O';
       this.setState({
           squares:squares,
           xIsNext: !this.state.xIsNext,
        });
   }
    renderSuare(i){
        debugger;
        return(
            <Square value={this.state.squares[i]}
            onClick={()=>this.handleClick(i)}
            />
        );
    }
    render(){
        let status;
        const winner=calculateWinner(this.state.squares);
        if (winner)
        {
            status='Winner'+winner;
        }
        else{
            status = 'Next player: '+ (this.state.xIsNext?'X':'O');
        }
        return(
            <div>
            <div className="status">{status}</div>
             <div className="board-row">
                {this.renderSuare(0)}
                {this.renderSuare(1)}
                {this.renderSuare(2)}
             </div>
             <div className="board-row">
                {this.renderSuare(3)}
                {this.renderSuare(4)}
                {this.renderSuare(5)}
             </div> 
             <div className="board-row">
                {this.renderSuare(6)}
                {this.renderSuare(7)}
                {this.renderSuare(8)}
             </div>   
            </div>
        );
    }
}

export default Board;