/*!
 * React / Redux one pager
 *
 * @perksc October 2016
 */

/**
 * Library imports
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

/**
 * App imports
 */
import Core from './components/Core/Core';
import AlgoDashboard from './containers/AlgoDashboard';

/**
 * Reducers. They take in an action and a state, and return a new state
 */
const reducerOne = (state = null, action) => {

    switch (action.type) {
        case 'MAKE_UPPERCASE': {
            const newState = state.toString().toUpperCase();
            return newState;
        }
        default:
            return state
    }
};

const reducerTwo = (state = null, action) => {

    switch (action.type) {
        case 'FILTER_BAD_RESULTS': {
            const newState = state.map(x => x.archived == false);
            return newState;
        }
        default:
            return state
    }
};

/**
 * Combine the reducers into a single dataApp
 */
const dataApp = combineReducers({
    reducerOne,
    reducerTwo
})


/**
 * Now we have a set of reducers, we can create a store
 */
let store = createStore(dataApp);


/**
 * An Action Creator for each of our actions
 */
const makeUppercase = () => {
    return {
        type: 'MAKE_UPPERCASE',
    }
};

const filterBadResults = () => {
    return {
        type: 'FILTER_BAD_RESULTS',
    }
};

/**
 * THE COMPONENT
 *
 * This is our ui element which contains JSX or other markup
 *
 * Extends React.Component and inherits certain events: componentWillMount, render etc
 */

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
        //This dispatches an action. You can do it from a React lifecycle event,
        //or as the result of a UI event such as a button click.
        this.props.onMakeBig();
    }

    render() {

        return (
            <div>
                <h1>
                    { this.props.name }
                </h1>
                <span>
                    { this.props.age }
                </span>
            </div>


        );
    }
}

/**
 * THE CONTAINER
 *
 * Does a few things: maps state to component properties, and maps events to component properties.
 *
 * Does all of this so that the UI component can stay UI focused and not worry at all about its Redux bindings
 */
const mapStateToProps = (state) => {
    return {
        name: state.name,
        age: state.age
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMakeBig: () => {
            const action = makeUppercase();
            setInterval(() => {
                dispatch(action)
            }, 700)
        }
    }
};

//Mapping between the container and the component
const AlgoDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);


/**
 * THE TOP LEVEL PAGE
 *
 * Declares that this app is a Redux app (using the Provider element), using a Router (the Router element) and
 * finally outputs as a React app using ReactDOM.render
 *
 */


const browserHistory = useRouterHistory(createHistory)({ basename: '/' })

// Declare routes
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="*" component={Core}>

                {/* Default route*/}
                <IndexRoute component={AlgoDashboard} />

            </Route>

        </Router>
    </Provider>,
    document.getElementById('app')
);

<div id="app"></div>