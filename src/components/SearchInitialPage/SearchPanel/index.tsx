import * as React from 'react';
import { ChangeEvent } from 'react';
import {
  GetLocationActionByCoords,
  GetLocationActionByName,
} from '../../../store/locations/actions';

export interface SearchPanelProps {
  getLocationsByName: (key: string) => GetLocationActionByName
  getLocationsByCoords: (coords: object) => GetLocationActionByCoords
  lastSearch: any
}

interface SearchPanelState {
  query: any;
  humanQuery: string
}

export class SearchPanel extends React.Component<SearchPanelProps,
  SearchPanelState> {
  state = {
    query: this.props.lastSearch || {},
    humanQuery: '',
  };

  handleGoButtonClick = () => {
    const { humanQuery } = this.state;
    const key = humanQuery.split(/[\s,]+/).join('_').toLowerCase();
    this.props.getLocationsByName(key);
  };

  handleMyLocationButtonClick = () => {
    const coords = { lat: 0, long: 0 };
    window.navigator.geolocation.getCurrentPosition((position) => {
      coords.lat = position.coords.latitude;
      coords.long = position.coords.longitude;
      this.props.getLocationsByCoords(coords);
    });

  };

  handleSearchFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      humanQuery: e.target.value,
    });
  };

  render() {
    const { query: { longTitle = '' }, humanQuery } = this.state;
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Search</h1>
          <p className="lead text-muted">
            Use the form below to search for houses to buy.
            <br/> You can search by place-name, postcode, or click 'My
            location', to search in your current location!
          </p>
          <div className="row">
            <div className="col-xs-12 col-sm-6 offset-sm-3">
              <input onChange={this.handleSearchFormInput}
                     className="form-control"
                     type="text"
                     value={longTitle || humanQuery}
                     placeholder="Input your location"
              />
            </div>
          </div>
          <p>
            <button className="btn btn-success text-white m-2"
                    onClick={this.handleGoButtonClick}
            >
              GO
            </button>
            <button className="btn btn-primary text-white m-2"
                    onClick={this.handleMyLocationButtonClick}
            >
              MY LOCATION
            </button>
          </p>
        </div>
      </section>
    );
  }
}
