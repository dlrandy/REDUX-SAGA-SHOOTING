import { connect } from 'react-redux';
import App from '../components/App'
import { fetchStarWarsRequest,confirmFetchRequest, queueChannelRequests } from '../actions';
import { OwnProps, StateProps, DispatchProps } from '../types/type';
import { Dispatch } from 'redux';
import { fetchStarWarsPlanetRequest, fetchChannelRequests } from '../actions/index';
const mapStateToProps = ({starWars}:any, {}: OwnProps):StateProps => ({starWars})

const bindActionsToDispatch = (dispatch:Dispatch):DispatchProps => ({
  fetchChannelRequests: () => dispatch(fetchChannelRequests()),
  queueChannelRequests: () => dispatch(queueChannelRequests()),
  confirmFetchRequest: () => dispatch(confirmFetchRequest()) ,
  fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
  fetchStarWarsPlanetRequest: () => dispatch(fetchStarWarsPlanetRequest())
})

const AppContainer = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, bindActionsToDispatch)(App);

export default AppContainer;