import './styles/App.css';
import React from 'react'
import Game from './components/Game'
import images from './images/index'

function App() {
  return <Game images={images} />
}


export default App;

