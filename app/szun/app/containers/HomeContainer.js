import { connect } from 'react-redux';
import { adjustColourValues } from '../actions';
import Home from '../components/Home/Home'


const mapStateToProps = (state) => {
    return {
        data: []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRangeChange: (elem) => {
            dispatch(adjustColourValues(elem));
        }
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer



