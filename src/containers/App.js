import React from 'react';

import Header from '../pages/Header'
import SearchField from '../components/search-field/search-field'
import Scroll from '../components/scroll/scroll'
import CardList from '../components/card-list/card-list'

import './App.css';

class App extends React.Component {
  constructor () {
    super() 

    this.state = {
      robos : null,
      searchText : ''
    }
  }

  async componentDidMount () {
    
    let userResp = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let users = await userResp.json()

    this.setState({
      robos:users
    })
  }

  onSearchRobo = (e) => {
    e.preventDefault();
    let search = e.target.value.trim()
    this.setState({
      searchText:search
    })

  }
  render() {

    let {robos, searchText} = this.state
    let filteredList = null
    if(robos) {
      filteredList = robos.filter((robo) => robo.name.toLowerCase().includes(searchText.toLowerCase()))
    }
    
    return (
      <div className="App">
        <Header />
        <SearchField onSearchRobo={this.onSearchRobo}/>
        <Scroll>
          <CardList robos={filteredList}/>
        </Scroll>
      </div>
  );
  }
}

export default App;
