import React from 'react'
import Card from './card'
import '../styles/board.css'

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cardInfo: []
        }
    }

    // componentDidMount() {
    //     const arr = this.props;
    //     this.setState(() => {
    //         const cards = arr.map(card => {
    //             return {
    //                 name: card.name,
    //                 url: card.url,
    //                 isClicked: false
    //             }
    //         })
    //         return {cardInfo: cards}
    //     })
    // }

    render() {
        console.log(this.state.cardInfo);
        // const cars = this.props.images;
        // let carsArr = []; 
        // cars.map((car, indx) => {
        //     carsArr.push(<Card
        //                     key={indx}
        //                     pic={car.url}
        //                     alt={car.name}
        //                 />)
        // })
        
        return(
            <div className='board'>
                {/* {carsArr} */}
            </div>
        )
    }
}

export default Board