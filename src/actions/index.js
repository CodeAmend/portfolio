import {FETCH_COMMITS} from './types';
import axios from 'axios';



export function fetchCommits() {
  const TOKEN = process.env.GITHUB_API_TOKEN || {};
  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }

  const request = axios.get("https://api.github.com/users/codeamend/repos", null, config);

  return (dispatch => {
    request.then((handledRequest) => {
      dispatch({ type: FETCH_COMMITS, payload: handledRequest.data });
    });
  });

}
