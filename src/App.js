import './App.css';
import TicTacToe from './Components/TicTacToe';
import Snake from './Components/Snake'
import Apple from './Components/Apple'
import React from 'react'

class App extends React.Component{
  state = {
    inBounds:1, // 1 for yes, 0 no
    top: 0,
    left: 0,
    rate: 100,
    score: 0,
    maxScore: 0,
    direction: 39, // 37 left, 38 up, 39 right, 40 down, 
    aTop: -100000,
    aLeft: '',
    btnStart: "Start",
    snakeArray: [
      [0,0],
      [0,5]
    ]
}

checkBounds = async () =>{
  if (this.state.top >= 100 || this.state.top < 0 || this.state.left >= 95 || this.state.left < -5){
    this.setState({
      inBounds: 0,
      rate: 100,
      score: 0
    })
    throw `Out of Bounds: TOP: ${this.state.top}, LEFT: ${this.state.left}`
  }
  else{
    return 'In Bounds'
  }
  
}
checkIfEatable = () =>{
  if (this.state.top === this.state.aTop && this.state.left === this.state.aLeft-5) { 
    clearInterval(this.timer)
    this.timer = setInterval(this.moveSnake,this.state.rate)
    var theSnake = this.state.snakeArray
    theSnake.unshift([])
    let maxScore = this.state.score+1 > this.state.maxScore ? this.state.score+1: this.state.maxScore;
    this.setState({
      score: this.state.score + 1 ,
      maxScore: maxScore,
      aTop: Math.floor(Math.random() * (95 - 0) / 5) * 5 + 0,
      aLeft: Math.floor(Math.random() * (95 - 0) / 5) * 5 + 0,
      rate: this.state.rate-5,
      snakeArray:theSnake
    })
  }
}
componentDidMount(){
  window.addEventListener('keydown',this.handleKeyPress);
}
setTimer = () =>{
  clearInterval(this.timer)
  this.setState({
    inBounds:1, // 1 for yes, 0 no
    top: 0,
    left: 0,
    rate: 100,
    score: 0,
    btnStart: "Restart",
    direction: 39, // 37 left, 38 up, 39 right, 40 down, 
    aTop: Math.floor(Math.random() * (95 - 0) / 5) * 5 + 0,
    aLeft: Math.floor(Math.random() * (95 - 0) / 5) * 5 + 0,
    snakeArray: [
      [0,0],
      [0,5]]
  })
  this.timer = setInterval(this.moveSnake,this.state.rate)
}




handleKeyPress = (event) =>{
  var d = event.keyCode
  var cD = this.state.direction
  
  if (cD === 39 || cD === 37) { // if its moving horizontally
      switch (d) {
          case 38: // up
              this.setState({
                  direction: 38
              })
              break;
          case 40: // down
              this.setState({
                  direction: 40
              })
              break;
          default:
              break;
      }
  } else { 
      switch (d) { // if its moving vertically
          case 37: // left
              this.setState({
                  direction: 37
              })
              break;
          case 39: // right
              this.setState({
                  direction: 39
              })
              break;
          default:
              break;
      }
  }
}
moveSnake = () =>{
  if (this.state.inBounds == 1) {
    var cD = this.state.direction
  switch (cD) {
      case 37:
          this.moveLeft()
          break;
      case 39:
          this.moveRight()
          break;
      case 40:
          this.moveDown()
          break;
      case 38:
          this.moveUp()
          break;
      default:
          break;
  }
  }
}
moveRight = () =>{
  this.checkBounds()
  .then(success =>{
    this.checkIfEatable()
    console.log(success)
    var theArray = this.state.snakeArray
    var head = theArray[this.state.snakeArray.length-1]
    var newHead = [head[0],head[1]+5]
    theArray.shift()
    theArray.push(newHead)
    this.setState({
      left: (this.state.left + 5),
      snakeArray: theArray
    })})
  .catch( err =>{
    clearInterval(this.timer)
    console.log(err)
  })
}
moveLeft = () =>{
  this.checkBounds()
  .then(success =>{
    this.checkIfEatable()
    console.log(success)
    var theArray = this.state.snakeArray
    var head = theArray[this.state.snakeArray.length-1]
    var newHead = [head[0],head[1]-5]
    theArray.shift()
    theArray.push(newHead)
    this.setState({
      // left: this.state.left <= 0 ? 95: this.state.left-5
      left: this.state.left-5,
      snakeArray: theArray
  })})
  .catch(err =>{
    clearInterval(this.timer)
    console.log(err)
  })
}
moveUp = () =>{
  this.checkBounds()
  .then( success =>{
    this.checkIfEatable()
    console.log(success)
    var theArray = this.state.snakeArray
    var head = theArray[this.state.snakeArray.length-1]
    var newHead = [head[0]-5,head[1]]
    theArray.shift()
    theArray.push(newHead)
    this.setState({
      // top: this.state.top <= 0 ? 95: this.state.top-5
      top: this.state.top-5,
      snakeArray: theArray
    })})
  .catch( err =>{
    clearInterval(this.timer)
    console.log(err)
  })
}
moveDown = () =>{
  this.checkBounds()
  .then(success =>{
    this.checkIfEatable()
    console.log(success)
    var theArray = this.state.snakeArray
    var head = theArray[this.state.snakeArray.length-1]
    var newHead = [head[0]+5,head[1]]
    theArray.shift()
    theArray.push(newHead)
    this.setState({
      // top: (this.state.top +5) % 100
      top: (this.state.top +5),
      snakeArray: theArray
  })})
  .catch( err =>{
    clearInterval(this.timer)
    console.log(err)
  })
  
}

  render(){
    let theSnake = this.state.snakeArray.map((dot,i) =>{ return(<Snake check = {this.check} top = {dot[0]} left = {dot[1]} dir = {this.state.direction}></Snake>)})
    return (
      <div className="App row text-center m-auto d-flex justify-content-center align-items-center">
        <div className ="m-0">
        <h1>Snake Game</h1>
        <p>To maneuver the snake, utilize the arrow keys</p>
        </div>
        <div className = "col-6 m-0">
          <div className = "my-1 text-center">{"Max Score: " + this.state.maxScore}</div>
          <div className = "my-1 text-center">{"Current Score: " + this.state.score}</div>
          <div className = "my-1"><button onClick = {this.setTimer} className = "btn btn-dark">{this.state.btnStart}</button></div>
        </div>
        <div className = "App col-6 border border-dark rounded p-1 bg-success shadow-lg" style = {{height: `50%`, width: `50%`}}>
        {theSnake}
        <Apple top = {this.state.aTop} left = {this.state.aLeft} ></Apple>
        </div>
      </div>
      );
  }
}

export default App;
