import { useState } from 'react';

function TopicForm ({ createTopic }) {
  const [ title, setTitle ] = useState('');

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      createTopic({title});
      console.log(`created ${title}`);
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" className="form_input" value={title} onChange={handleChange} />
      <button type="submit" className="form_submit">Create</button>
    </form>
  );
}

export default TopicForm;