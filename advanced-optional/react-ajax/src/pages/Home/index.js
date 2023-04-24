import {useState, useEffect} from 'react';
import {API_HOST} from '../../global/constants';
// import {TEST_HOST} from '../../global/constants';
import List from './components/List';
import Button from './components/Button';
import './normalize.css';
import './base.css';

const Home = () => {
  const [page, setPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  let isApiSubscribed = true;
  useEffect(() => {
    if (isApiSubscribed) {
      fetch(API_HOST + `page=${page}`)
        // fetch(TEST_HOST)
        .then(res => res.json())
        .then(data => setData(prev => [...prev, ...data]))
        .catch(err => console.log('Oh noes!', err))
        .finally(() => setIsLoading(false));
    }

    return () => {
      isApiSubscribed = false;
    };
  }, [page]);

  return (
    <div className="home">
      <List data={data} isLoading={isLoading} />
      <Button setPage={setPage} />
    </div>
  );
};

export default Home;
