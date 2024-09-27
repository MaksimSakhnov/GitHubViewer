import axios from 'axios';

const githubBase = axios.create({
  baseURL: 'https://api.github.com/',
  headers: { 'Content-Type': 'application/json' },
});

export default githubBase;
