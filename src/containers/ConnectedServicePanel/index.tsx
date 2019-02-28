import { connect } from 'react-redux';

import { Store } from '../../store/root/reducer';
import { ServicePanel } from '../../components/SearchInitialPage/ServicePanel';
import { addQuery } from '../../store/recents/actions';
import { resetSearch } from '../../store/locations/actions';

const mapStateToProps = (store: Store) => ({
  searches: store.recents.searches,
  status: store.locations.searchStatus,
  locations: store.locations.locations,
  error: store.locations.errorMessage,
});

const mapDispatchToProps = {
  addQuery,
  resetSearch,
};

export const ConnectedServicePanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicePanel);
