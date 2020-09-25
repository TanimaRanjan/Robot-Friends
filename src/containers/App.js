import React from 'react';

import Header from '../pages/Header'
import SearchField from '../components/search-field/search-field'
import Scroll from '../components/scroll/scroll'
import CardList from '../components/card-list/card-list'
import { connect }  from 'react-redux';
import { setSearchField } from "../actions";
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      robots : null,
      // searchText : ''
    }
  }

  async componentDidMount () {
    
    let userResp = await fetch(`https://jsonplaceholder.typicode.com/users`)
    let users = await userResp.json()

    this.setState({
      robots:users
    })
  }


  render() {

    console.log(this.props.store)
    let {robots} = this.state
    const { searchField, onSearchChange } = this.props
    let filteredList = null
    if(robots) {
      filteredList = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    }
    
    return (
      <div className="App">
        <Header />
        <SearchField onSearchChange={onSearchChange}/>
        <Scroll>
          <CardList robos={filteredList}/>
        </Scroll>
      </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
