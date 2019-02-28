import * as React from 'react';
import { AddQueryAction } from '../../../store/recents/actions';
import { SetSearchStatusAction } from '../../../store/locations/actions';

interface LocationsListProps {
  locations: Array<any>
  addQuery: (location: object) => AddQueryAction
  setSearchStatus: (status: string) => SetSearchStatusAction
}

interface LocationsListState {

}

export class LocationsList extends React.Component<LocationsListProps, LocationsListState> {

  handleLocationClick = (location: object) => {
    this.props.addQuery(location);
    this.props.setSearchStatus('init');
    //TODO: getProperties
  };

  render() {
    const locations = this.props.locations.map(location => {
      return (
        <button className="list-group-item list-group-item-action"
                key={location.id}
                onClick={() => {
                  this.handleLocationClick(location);
                }}>
          {location.longTitle}
        </button>
      );
    });

    return (
      <div>
        <div className="row">
          <div className="col text-xs-center text-sm-center pb-2">
            <h3>Available locations</h3>
          </div>
        </div>
        <div className="list-group mb-3">
          {locations}
        </div>
      </div>
    );
  }
}
