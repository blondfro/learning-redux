import SkiDayList from '../ui/SkiDayList'
import { removeDay } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state, props) => (
    {
        days: state.allSkiDays,
        filter: props.params.filter
    }
);

const mapDispatchToProps = (dispatch) => ({
   onRemoveDay(date) {
       removeDay(date)
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(SkiDayList)

// export default (props) =>
//     <SkiDayList days={sample}
//                 filter={props.params.filter}
//                 onRemoveDay={date => console.log('remove day on', date)} />
