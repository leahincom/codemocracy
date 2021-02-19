import { useState, useEffect } from 'react';
import ApiService from './ApiService';
import TopicForm from './TopicForm/TopicForm'
import TopicList from './TopicList/TopicList'

function App () {
  const [ topics, setTopics ] = useState([]);

  useEffect(() => {
    ApiService.getTopics()
    .then(topics => setTopics(topics))
  }, []);

  useEffect(() => {
    console.log(topics)
  }, [topics]);

  const createTopic = (body) => {
    ApiService.postTopic(body)
    .then(topic => {
      setTopics(prevTopics => [...prevTopics, topic]);
    });
  };

  const deleteTopic = (id) => {
    ApiService.deleteTopic(id)
    .then(() => {
      setTopics(topics => topics.filter(topic => topic.id !== id))
    });
  }

  const voteTopic = (id, dir) => {
    ApiService.voteTopic(id, dir)
    .then(updatedTopic => {
      setTopics(topics => {
        const index = topics.findIndex(topic => topic._id === updatedTopic._id);
        return [...topics].splice(index, updatedTopic);
      })
    })
  }

  return (
    <div className="App">
      <TopicForm createTopic={createTopic} />
      <TopicList 
        topics = {topics} 
        deleteTopic = {deleteTopic}
        voteTopic = {voteTopic}
      />
    </div>
  );
}

export default App;