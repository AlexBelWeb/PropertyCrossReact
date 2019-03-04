import * as React from 'react';

import { AddQueryAction } from '../../../store/recents/actions';
import { ResetSearchAction } from '../../../store/locations/actions';
import { PropertiesLocation } from '../../../types/locations.types';
import { Link } from 'react-router-dom';

interface LocationsListProps {
  locations: Array<PropertiesLocation>
  addQuery: (location: PropertiesLocation) => AddQueryAction
  resetSearch: () => ResetSearchAction
}

export class LocationsList extends React.Component<LocationsListProps> {

  handleLocationClick = (location: PropertiesLocation) => {
    this.props.addQuery(location);
    this.props.resetSearch();
  };

  renderLocations = () =>
    this.props.locations.map(location => (
        <button className="list-group-item list-group-item-action"
                key={location.id}
                onClick={() => {
                  this.handleLocationClick(location);
                }}>
          <Link to={`/${location.placeName}/properties`}>{location.longTitle}</Link>
        </button>
      )
    );

  render() {
    return (
      <>
        <div className="row">
          <div className="col text-xs-center text-sm-center pb-2">
            <h3>Available locations</h3>
          </div>
        </div>
        <div className="list-group mb-3">
          {this.renderLocations()}
        </div>
      </>
    );
  }
}
