import {combineReducers} from 'redux';
import SkillsReducer from './skills_reducer';
import CommitsReducer from './commits_reducer';

const rootReducer = combineReducers({
  skills: SkillsReducer,
  commits: CommitsReducer
});

export default rootReducer;
