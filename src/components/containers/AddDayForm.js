import AddDayForm from '../ui/AddDayForm';
import { withRouter } from 'react-router';
import {
    addDay,
    clearSuggestions,
    suggestResortNames
} from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state, props) => ({
   suggestions: state.resortNames.suggestions,
   fetching: state.resortNames.fetching,
   router: props.router
});

const mapDispatchToProps = dispatch => ({
    onNewDay({resort, date, powder, backcountry}) {
        dispatch(addDay(resort, date, powder, backcountry))
    },
    onChange(value) {
        value
            ? dispatch(suggestResortNames(value))
            : dispatch(clearSuggestions())
    },
    onClear() {
        dispatch(clearSuggestions())
    }
});



const Container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm);

export default withRouter(
    (props) => 
        <Container />
)