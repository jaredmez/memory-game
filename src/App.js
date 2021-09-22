import './styles/App.css';
import React from 'react'
import Game from './components/Game'
import images from './images/index'

function App() {
  return <Game images={images} />
}


export default App;
//--------------------------class component attempt below ---------------
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       score: 0,
//       highScore: 0,
//       cards: [
//         {id: 1,
//         img: images.a,
//         isClicked: false
//         },
//         {id: 2,
//         img: images.b,
//         isClicked: false
//         },
//         {id: 3,
//         img: images.c,
//         isClicked: false
//         },
//         {id: 4,
//           img: images.d,
//           isClicked: false
//         },
//         {id: 5,
//           img: images.e,
//           isClicked: false
//         },
//         {id: 6,
//           img: images.f,
//           isClicked: false
//         },
//         {id: 7,
//           img: images.g,
//           isClicked: false
//         },
//         {id: 8,
//           img: images.h,
//           isClicked: false
//         }
          
//       ]
//     }
//   }

//   handleClick = () => {
//     console.log(this.state.cards);
    
//     this.shuffle();
//   }

//   shuffle = () => {
//       this.setState(prevState => {
//         console.log(prevState.cards);
//       const a = prevState.cards;
//       for (let i = a.length - 1; i>0; i--) {
//         const j = Math.floor(Math.random() * (i +1));
//         [a[i], a[j]] = [a[j], a[i]];
//       }
//       return {cards: a};
//     })
//     console.log(this.state.cards);
//   }


//   render() {
    
//     return (
//       <div>
//         <img src={this.state.cards[0].img} width="300px" onClick={this.handleClick}/>
//         <img src={this.state.cards[1].img} width="300px"/>
//         <img src={this.state.cards[2].img} width="300px"/>
//       </div>
//     )
//   }

// }




// ----------------------------------hooks attempt below --------------------

  //   const [score, setScore] = useState(0);

//   const handleClick = (e) => {
//     console.log(e.target.getAttribute('name'))
//     if (e.target.getAttribute('name')== 'false') {
//       e.target.setAttribute('name', 'true');
//       setScore(score +1);
      
//     }
//     else alert('you loose')
    
//   }


//   return (
//     <div className="App">
//       <h2>Score: {score}</h2>
//       <div 
//         name="false"
//         className="item" 
//         onClick={handleClick}
//       >Box1</div>
//       <div 
//         name="false"
//         className="item" 
//         onClick={handleClick}
//       >Box2</div>
//       <div 
//         name="false"
//         className="item" 
//         onClick={handleClick}
//       >Box3</div>

//     </div>
//   );
// }


