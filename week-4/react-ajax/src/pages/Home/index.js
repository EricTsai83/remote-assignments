import {useState, useEffect} from 'react';
import {API_HOST} from '../../global/constants';
// import {TEST_HOST} from '../../global/constants';
import List from './components/List';
import Button from './components/Button';
import './normalize.css';
import './base.css';

const Home = () => {
  const [pageItemNum, setPageItemNum] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  // const submittingStatus = useRef(false);

  useEffect(() => {
    fetch(API_HOST + `?per_page=${pageItemNum}`)
      // fetch(TEST_HOST)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log('Oh noes!', err))
      .finally(() => setIsLoading(false));
  }, [pageItemNum]);

  return (
    <div className="home">
      <List repoData={data} loadStatus={isLoading} />
      <Button PageItemMultiplier={setPageItemNum} />
    </div>
  );
};

export default Home;
