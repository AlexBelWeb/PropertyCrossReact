import * as React from 'react';
import { RecentSearchesList } from '../RecentSearchesList';
import { LocationsList } from '../LocationsList';
import { ErrorAlert } from '../ErrorAlert';
import { Spinner } from '../Spinner/Spinner';
import { AddQueryAction } from '../../../store/recents/actions';
import {
  SetSearchStatusAction,
} from '../../../store/locations/actions';

export interface ServicePanelProps {
  searches: object[];
  status: string;
  locations: any[];
  error: string;
  addQuery: (location: object) => AddQueryAction
  setSearchStatus: (status: string) => SetSearchStatusAction
}

export const ServicePanel: React.FC<ServicePanelProps> = (
  props: ServicePanelProps,
) => {
  const { searches, status, locations, error, addQuery, setSearchStatus} = props;

  let childComponent;
  if (status === 'init') {
    childComponent = <RecentSearchesList searches={searches}/>;
  } else if (status === 'success') {
    childComponent = <LocationsList locations={locations}
                                    addQuery={addQuery}
                                    setSearchStatus={setSearchStatus}/>;
  } else if (status === 'failure') {
    childComponent = <ErrorAlert message={error}/>;
  } else if (status === 'loading') {
    childComponent = <Spinner/>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 offset-sm-3 mb-3">
          {childComponent}
        </div>
      </div>
    </div>
  );
};
