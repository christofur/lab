import { connect } from 'react-redux';
import { fetchRandomData } from '../actions';
import Dashboard from '../components/Dashboard/Dashboard'

const mapDataToContent = (data) => {

    if(!data || !data.length)
        return data;

    const content =  data[0].map((element) => {
        return '±';
    });

    return content;
}

const mapStateToProps = (state) => {
    return {
        data: mapDataToContent(state.randomData) || []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTick: () => {
            const action = fetchRandomData();
            dispatch(action);

            /*setInterval(() => {
                dispatch(action);
            }, 5000);*/

        }
    }
};

const AlgoDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default AlgoDashboard



