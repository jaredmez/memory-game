import './App.css';
import React, {Component} from 'react'

function App() {
  const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  return (
      <div>
        <FilterableProductTable products={products}/>
      </div>
  )
}

function ProductCategoryRow(props) {
  return (
    <h2>{props.category}</h2>
  )
}

function ProductRow(props) {
  const {stocked, price, name} = props.product
  return (
    <div>
        <p><span style={{color: !stocked && 'red'}}>{name}</span> {price}</p>
      </div>
  )
}

function ProductTable(props) {
  console.log(props);
  const rows = [];
  let lastCat = null;
  props.products.map(item => {
    if(item.category !== lastCat) {
      rows.push(<ProductCategoryRow key={item.category} category={item.category} />);
      lastCat = item.category;
    }
    if(props.inStockOnly && !item.stocked) { 
      return;
    }
    if(item.name.indexOf(props.filterTxt) === -1) {
      return;
    }
    rows.push(<ProductRow
      key={item.name}
      product={item}
    />)
    
  })
  return(
    <div>
        {rows}
    </div>
  )
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <input 
          onChange={(e) => this.props.handleChange(e)}
          value={this.props.filterTxt}
          type='text' 
          name='userinput' 
          placeholder="Search..."
        /><br/>
        <p>
          <input 
            name="stock" 
            type='checkbox'
            checked={this.props.inStockOnly}
            onChange={(e)=>this.props.handleChange(e)}
          />
          Only products in stock
        </p>
      </div>
    )
  }
}

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterTxt: "",
      inStockOnly: false

    }
  }

  handleChange = (input) => {
    this.setState( () => {
      if (input.target.name == 'stock') {
        return {inStockOnly: !this.state.inStockOnly};
      }
      return {
        filterTxt: input.target.value
      }
    })
  }

  render () {
    console.log(this.state.filterTxt);
    const {filterTxt, inStockOnly} = this.state;
    return (
      <div className='table'>
        <SearchBar 
          filterTxt={filterTxt} 
          inStockOnly={inStockOnly}
          handleChange={this.handleChange}
        />
        <ProductTable 
          products={this.props.products}
          filterTxt={filterTxt} 
          inStockOnly={inStockOnly}
        />
      </div>
    )
  }
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


