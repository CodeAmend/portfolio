import {FETCH_COMMITS} from './types';
import axios from 'axios';



export function fetchCommits() {
  const TOKEN = process.env.GITHUB_API_TOKEN || {};
  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }

  const request = axios.get("https://api.github.com/users/codeamend/repos", config);

  return {
    type: FETCH_COMMITS,
    payload: request
  }

}
