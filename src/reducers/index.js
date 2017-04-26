import {combineReducers} from 'redux';
import SkillsReducer from './skills_reducer';
import CommitsReducer from './commits_reducer';
import ProjectsReducer from './project_reducer';

const rootReducer = combineReducers({skills: SkillsReducer, commits: CommitsReducer, projects: ProjectsReducer});

export default rootReducer;
