import storeFactory from './store';
import * as actions from './actions';


const store = storeFactory();


store.dispatch(
    actions.addDay("Heavenly", "2016-12-22")
);

store.dispatch(
    actions.removeDay( "2016-12-22")
);

store.dispatch(
    actions.setGoal(3)
);
