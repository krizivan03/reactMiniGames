import React from 'react'

class TicTacToe extends React.Component{

    state = { 
        topLeft:"",
        top: "",
        topRight: "",
        left: "",
        center: "",
        right: "",
        bottomLeft: "",
        bottom:"",
        bottomRight:"",
        turn: "x",
        gameIsWon: 0 // 0 no, 1 yes
    }
    
    resetBoard = () =>{
        this.setState({
            topLeft:"",
            top: "",
            topRight: "",
            left: "",
            center: "",
            right: "",
            bottomLeft: "",
            bottom:"",
            bottomRight:"",
            turn: "x",
            gameIsWon:0
        })
    }
    checkWinner = () =>{
        if (this.state.topLeft === this.state.top && this.state.top === this.state.topRight) {
            // this.setState({
            //     gameIsWon:1
            // })
            console.log(this.state.gameIsWon)
        }
        
    }
    

    render(){

        return(
        <div>
            <div className = "row">
                <div className = "justify-content-center align-items-center p50 col-4"><button id = "topLeft" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({topLeft:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.topLeft}</button></div>
                <div className = "justify-content-center align-items-center p50 col-4 border border-top-0 border-bottom-0"><button id = "top" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({top:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.top}</button></div>
                <div className = "justify-content-center align-items-center p50 col-4"><button id = "topRight" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({topRight:this.state.turn, turn:nextTurn}); this.checkWinner()}}  className = "p50 bg-transparent border-0 fullFont" >{this.state.topRight}</button></div>
            </div>
            <div className = "row">
                <div className = "justify-content-center align-items-center p50 col-4 border-top border-bottom"><button id="left" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({left:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.left}</button></div>
                <div className = "justify-content-center align-items-center p50 col-4 border"><button id = "center" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({center:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.center}</button></div>
                <div className = "justify-content-center align-items-center p50 col-4 border-top border-bottom"><button id = "right" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({right:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.right}</button></div>
            </div>
            <div className = "row">
                <div className = "justify-content-center align-items-center p50 col-4"><button id = "bottomLeft" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({bottomLeft:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.bottomLeft}</button></div>
                <div className = "justify-content-center align-items-center p50 col-4  border border-top-0 border-bottom-0"><button id = "bottom" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({bottom:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.bottom}</button></div>
                <div className = "justify-content-center align-items-center p50 col-4"><button id = "bottomRight" onClick = {()=>{var nextTurn = this.state.turn === "x" ? "o":"x"; this.setState({bottomRight:this.state.turn, turn:nextTurn})}} className = "p50 bg-transparent border-0 fullFont" >{this.state.bottomRight}</button></div>
            </div>
            <button onClick = {this.resetBoard} className ="btn btn-outline-dark my-3">RESET</button>
        </div>
        );
    }
}
export default TicTacToe