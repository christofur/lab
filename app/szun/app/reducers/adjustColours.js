import { adjustColourValues } from '../actions';

const adjustColours = (state = null, action) => {

    //short circuit if we don't want to handle the current action type
    if(action.type !== adjustColourValues().type)
        return state;

    console.info(`We're handling the adjustColourValues action. State is currently ${state} and elem is ${action.elem}`);

    //we do want to handle the action
    if(!state)
        return 1;

    return ++state;
}

export default adjustColours;