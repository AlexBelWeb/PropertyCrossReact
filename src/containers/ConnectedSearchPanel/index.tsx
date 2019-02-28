import { connect } from 'react-redux';
import {
  getLocationsByName,
  getLocationsByCoords,
} from '../../store/locations/actions';
import { SearchPanel } from '../../components/SearchInitialPage/SearchPanel';
import { Store } from '../../store/root/reducer';

const mapStateToProps = (store: Store) => ({
  lastSearch: store.recents.lastSearch,
});

const mapDispatchToProps = {
  getLocationsByName,
  getLocationsByCoords,
};

export const ConnectedSearchPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
