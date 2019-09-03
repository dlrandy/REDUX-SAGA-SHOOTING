import React, { Component } from 'react'

import './App.css'
import { OwnProps, StateProps, DispatchProps, State } from '../types/type';

class App extends Component<StateProps & DispatchProps & OwnProps, State> {

  state = {
    open: false,
    count: 0
  }

  handleFetchClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    this.props.fetchStarWarsRequest(e)
    this.setState({open: true});
  }

  handleConfirmClick = () => {
    this.props.confirmFetchRequest();
    this.setState({open: false});
  }

  handleFetchPlanetsClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    this.props.fetchStarWarsPlanetRequest(e);
  }

  handleQueue = () => {
    this.props.queueChannelRequests();
    this.setState((state) => ({
      count: state.count + 1
    }));
    
  }
  render() {
    return (
      <div>
      <h1>Redux Saga</h1>
      <div>
        {this.props.starWars.people.map((person, i) => <h4 key={i}>{person.name}</h4>)}
      </div>
      <div>
          {this.props.starWars.planet.map((planet, i) => <h4 key={i}>{planet.name}</h4>)}
        </div>
      <div>
          <div style={!this.state.open ? {display: 'none'} : {}} className='model'>
            <button onClick={this.handleConfirmClick}>Confirm</button>
          </div>
        </div>
      <button onClick={this.handleFetchClick}>Load People</button>
      <button onClick={this.handleFetchPlanetsClick}>Load Planets</button>
      <div>
          <h3># of Button Clicks {this.state.count}</h3>
          <h3># of Saga effects {this.props.starWars.count}</h3>
        </div>
        <button onClick={this.props.fetchChannelRequests}>Load More</button>
        <button onClick={this.handleQueue}>Queue Channel</button>
    </div>
    );
  }
}

export default App;
