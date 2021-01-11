import React from 'react'

class Snake extends React.Component{
    state = {
        top: this.props.top,
        left: this.props.left,
        direction: this.props.dir, // 37 left, 38 up, 39 right, 40 down, 
        rate: this.props.rate,
    }
    componentWillReceiveProps(){
        this.setState({
            top: this.props.top,
            left: this.props.left,
            direction: this.props.dir, // 37 left, 38 up, 39 right, 40 down, 
            rate: this.props.rate,
        })
    }
    render(){
        return(
                <div className = "snake shadow-sm mx-0 rounded " style = {{top: `${this.state.top}%`, left: `${this.state.left}%`}}></div>
            
        );
    }
}
export default Snake;