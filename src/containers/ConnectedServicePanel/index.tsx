import { Store } from '../../store/root/reducer';
import { connect } from 'react-redux';
import { ServicePanel } from '../../components/SearchInitialPage/ServicePanel';
import { addQuery } from '../../store/recents/actions';
import { setSearchStatus } from '../../store/locations/actions';

const mapStateToProps = (store: Store) => ({
  searches: store.recents.searches,
  status: store.locations.searchStatus,
  locations: store.locations.locations,
  error: store.locations.errorMessage,
});

const mapDispatchToProps = {
  addQuery,
  setSearchStatus,
};

export const ConnectedServicePanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicePanel);
