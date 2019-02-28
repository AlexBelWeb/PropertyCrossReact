import * as React from 'react';

interface RecentSearchesListProps {
  searches: Array<any>;
}

export const RecentSearchesList: React.FC<RecentSearchesListProps> = (
  props: RecentSearchesListProps
) => {
  const recents = props.searches.map(query => {
    return (
      <button className="list-group-item list-group-item-action" key={query.id}>
        {query.longTitle}
      </button>
    );
  });

  const noRecents = (
    <div className="list-group-item text-center">No recent searches</div>
  );

  return (
    <div className="row">
      <div className="col text-xs-center text-sm-center pb-2">
        <h3>Recent searches</h3>
        <div className="list-group mb-3">
          {recents.length ? recents : noRecents}
        </div>
      </div>
    </div>
  );
};
