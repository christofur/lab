import { connect } from 'react-redux';
import { fetchRandomData } from '../actions';
import Dashboard from '../components/Dashboard/Dashboard'

const mapDataToContent = (data) => {

    if(!data || !data.length)
        return data;

    const content =  data[0].map((element) => {
        return element[1] % 2 ? '.' : ',';
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
            setInterval(() => {
                dispatch(action)
            }, 700)
        }
    }
};

const AlgoDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default AlgoDashboard



