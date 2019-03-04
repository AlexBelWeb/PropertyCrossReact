import * as React from 'react'

import { PropertyItem } from '../../../../types/property.types';

interface PropertiesListItemProps {
  property: PropertyItem
}

export const PropertiesListItem: React.FC<PropertiesListItemProps> = ({property}: PropertiesListItemProps) => (
  <div className="card mb-3">
    <img src={property.imgUrl} className="card-img-top" alt={property.title}/>
    <div className="card-block">
      <div className="card-body">
        <h5 className="card-title">
          {property.title}
        </h5>
        <h6>{property.priceFormatted}</h6>
      </div>
    </div>
    <div className="card-footer">
      <small className="text-muted">Updated: {property.updatedInDaysFormatted}</small>
    </div>
  </div>
);
