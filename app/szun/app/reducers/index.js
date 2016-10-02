import { combineReducers } from 'redux'
import randomData from './randomData'
import adjustColours from './adjustColours'

const dataApp = combineReducers({
    randomData,
    adjustColours
})

export default dataApp
