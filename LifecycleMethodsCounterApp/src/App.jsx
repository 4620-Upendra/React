import { useState,Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'


class App extends Component{
  state={isShow:true}

  render(){
    return(
      <div>
        {this.state.isShow && <Counter/>}
        <button className='btn' onClick={()=>this.setState({isShow:!this.state.isShow})}>
          {this.state.isShow?"Hide":"Show"}</button>
      </div>
      
    )
  }
}

export default App
