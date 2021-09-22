import React from 'react'
import '../styles/card.css'

class Card extends React.Component{

    render() {
        return(
            <div className="card">

                <img 
                    src={this.props.pic}                    
                    alt={this.props.alt}
                    onClick={()=>this.props.onClick(this.props.id)}
                />
            </div>
        )
    }
}

export default Card