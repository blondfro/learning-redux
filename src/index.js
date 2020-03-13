import storeFactory from './store';
import * as actions from './actions';

const store = storeFactory();

store.dispatch(
    actions.suggestResortNames("hea")
);
