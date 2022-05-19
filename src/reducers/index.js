import { combineReducers } from 'redux';
import catsAssessmentReducer from './catsAssessmentReducer';

const rootReducer = combineReducers({
  catsAssessment: catsAssessmentReducer
})

export default rootReducer;