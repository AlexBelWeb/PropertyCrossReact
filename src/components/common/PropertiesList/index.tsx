import * as React from 'react';

import { PropertyItem } from '../../../types/property.types';
import { PropertiesListItem } from './PropertiesListItem';

interface PropertiesListProps {
  properties: Array<PropertyItem>;
}

const renderProperties = (properties: Array<PropertyItem>) =>
  properties.map(property => (
    <div className="col-xs-12 col-sm-3" key={property.id}>
      <PropertiesListItem property={property} />
    </div>
  ));

export const PropertiesList: React.FC<PropertiesListProps> = ({
  properties,
}: PropertiesListProps) => {
  return <div className="row">{renderProperties(properties)}</div>;
};
