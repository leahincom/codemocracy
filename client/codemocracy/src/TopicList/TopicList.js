import TopicItem from '../TopicItem/TopicItem';

function TopicList ({ topics, deleteTopic, voteTopic }) {
  return (
    topics
    .sort((a,b) => a.score < b.score ? 1 : -1)
    .map(topic => {
      return <TopicItem 
        key = {topic._id}
        topic = {topic}
        deleteTopic = {deleteTopic}
        voteTopic = {voteTopic}
      />
    })
  )
}

export default TopicList;