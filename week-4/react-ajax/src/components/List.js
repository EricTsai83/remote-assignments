import Item from './Item';
import {v4} from 'uuid'; // 隨機產生 id

const List = ({isLoading, data}) => {
  return (
    <div className="repo-result">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // 將 item 物件依序 render 出來
        data.map(item => {
          const {name, visibility, description, topics} = item;
          return (
            <Item
              key={v4()}
              name={name}
              visibility={visibility}
              description={description}
              topics={topics}
            />
          );
        })
      )}
    </div>
  );
};

export default List;
