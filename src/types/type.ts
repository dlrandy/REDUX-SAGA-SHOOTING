export interface Person {
  name : string;
}

export interface Planet {
  name : string;
}

export interface OwnProps {
  // starWars : {
  //   people: Array <Person>
  // }
};
export interface DispatchProps {
  fetchChannelRequests: () => any,
  queueChannelRequests: () => any,
  confirmFetchRequest: () => any,
  fetchStarWarsRequest : (e : React.MouseEvent < HTMLButtonElement >) => any,
  fetchStarWarsPlanetRequest : (e : React.MouseEvent < HTMLButtonElement >) => any
}
export interface StateProps {
  starWars : {
    people: Array <Person>,
    planet: Array <Planet>,
    count: number,
  }
};

export type Props = StateProps & DispatchProps & OwnProps;

export interface State {
  count: number;
  open: boolean;
}