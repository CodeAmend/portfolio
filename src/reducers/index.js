import {combineReducers} from 'redux';
import SkillsReducer from './skills_reducer';

const rootReducer = combineReducers({
  skills: SkillsReducer
})

export default rootReducer;
