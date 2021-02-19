const BASE_URL = 'http://localhost:3001';

function getTopics() {
  return fetchRequest('/topics');
}

function postTopic (body) {
  return fetchRequest('/topics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
}

function deleteTopic (id) {
  return fetchRequest(`/topics/${id}`, {
    method: 'DELETE'
  });
}

function voteTopic (id, dir) {
  return fetchRequest(`/topics/${id}/${dir}`, {
    method: 'PUT'
  });
}

function fetchRequest (path, options) {
  return fetch(BASE_URL + path, options)
  .then(res => res.status <= 400 ? res : Promise.reject())
  .then(res => res.status === 204 ? res : res.json())
  .catch(err => {
    console.log(`Error fetching ${path}: `, err);
  });
}

export default {
  getTopics,
  postTopic,
  deleteTopic,
  voteTopic
}