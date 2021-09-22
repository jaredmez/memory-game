import React from 'react'
import Score from './score'
import Card from './card'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            highscore: 0,
            cars: this.props.images,
            isWinning: true
        }
    }

    handleClick = (id) => {
        this.shuffle();
        this.handleScore(id);
    }

    handleScore = (id) => {
        const oldArr = this.state.cars;
        const newArr = oldArr.map(car => {
            if(id === car.id && car.clicked === false) {
                this.increment();
                return {
                    id: car.id, 
                    name: car.name, 
                    url: car.url,
                    clicked: true,
                }
            }else if(id === car.id && car.clicked === true){
                console.log('you loose')
            }
            return car
        })
        this.setState({cars: newArr})
        console.log(this.state.cars);
        
        
    }

    shuffle = () => {            
            const a = this.state.cars;
            for (let i = a.length - 1; i>0; i--) {
              const j = Math.floor(Math.random() * (i +1));
              [a[i], a[j]] = [a[j], a[i]];
            }
            
            this.setState({cars:a})
    }

    increment = () =>{
        this.setState({score: this.state.score + 1})
    }

    render() {
        console.log(this.state.cars);
        let carsArr = []; 
        this.state.cars.map((car, indx) => {
            carsArr.push(<Card
                            key={indx}
                            pic={car.url}
                            alt={car.name}
                            id={car.id}
                            clicked={car.clicked}
                            onClick={this.handleClick}
                        />)
        })
        return(
            <div className='game'>
                <Score 
                    high={this.state.highscore}
                    score={this.state.score}/>
                <div className="board">
                    {carsArr}
                </div>
            </div>
        )
    }
}

export default Game