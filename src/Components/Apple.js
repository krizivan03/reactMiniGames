import React from 'react'

class Apple extends React.Component{
    state = {
        top: this.props.top,
        left: this.props.left,
        

    }
    componentWillReceiveProps(){
        this.setState({
            top: this.props.top,
            left: this.props.left,
        })
    }
    render(){
        return(
            <div className = "apple rounded" style = {{top: `${this.state.top}%`, left: `${this.state.left}%`}}></div>
        );
    }
}
export default Apple;