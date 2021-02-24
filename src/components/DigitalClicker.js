// Code DigitalClicker Component Here

import React from 'react'

class DigitalClicker extends React.Component {
    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = (event) => {
        this.setState(previousState => {
            return {
            timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
