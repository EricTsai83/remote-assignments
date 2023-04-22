import {v4} from 'uuid'; // 隨機產生 id
const Item = ({name, visibility, description, topics}) => {
  return (
    <div className="item">
      <div className="name">{`${name}`}</div>
      <div className="visibility">{`${visibility}`}</div>
      <div className="description">{`${description}`}</div>

      {topics.map(topic => {
        return <div key={v4()} className="topic">{`${topic}`}</div>;
      })}
    </div>
  );
};

export default Item;
