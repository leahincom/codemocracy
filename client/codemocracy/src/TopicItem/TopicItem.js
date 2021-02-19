import moment from 'moment';

function TopicItem ({ topic, deleteTopic, voteTopic }) {
  return (
    <div className="topic">
      <div className="topic_vote">
        <button className="vote_btn" onClick={() => voteTopic(topic._id, 'up')}>
          <span role="img" aria-label="vote up">👍</span>
        </button>
        <div className="vote_score">{topic.score}</div>
        <button className="vote_btn" onClick={() => voteTopic(topic._id, 'down')}>
          <span role="img" aria-label="note down">👎</span>
        </button>
      </div>

      <div className="topic_content">
        <h3 className="content_title">{topic.title}</h3>
        <p className="content_date">
          Created on {moment(topic.published_at).format('Do MM')}
        </p>
      </div>

      <div className="topic_delete" onClick={() => deleteTopic(topic._id)}>
        <button className="delete_btn">
          <span role="img" aria-label="trash">🗑</span>
        </button>
      </div>
    </div>
  )
}

export default TopicItem;