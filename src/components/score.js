import React from 'react'

class Score extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <h3>Score: {this.props.score}</h3>
                <h4>Highest Score: {this.props.high}</h4>
            </div>
        )
    }
}

export default Score