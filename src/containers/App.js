import React from 'react';

import Header from '../pages/Header'
import SearchField from '../components/search-field/search-field'
import Scroll from '../components/scroll/scroll'
import CardList from '../components/card-list/card-list'
import { connect }  from 'react-redux';
import {requestRobots, setSearchField} from "../actions";
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)

  }

  async componentDidMount () {
    this.props.onRequestRobots();
  }


  render() {

    // let {robots} = this.state
    const {robots, searchField, onSearchChange, isPending, error } = this.props
    let filteredList = null
    if(robots) {
      filteredList = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()))
    }
    
    return (
      <div className="App">
        <Header />
        <SearchField onSearchChange={onSearchChange}/>

        <Scroll>
          {isPending ?  <h1>Loading...</h1> :
          <CardList robos={filteredList}/> }
        </Scroll>
      </div>
  );
  }
}

const mapStateToProps = ({searchRobots, requestRobots}) => {
  return {
    searchField: searchRobots.searchField,
    robots:requestRobots.robots,
    isPending:requestRobots.isPending,
    error:requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots:() => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
