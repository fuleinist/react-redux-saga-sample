import React from 'react';
import MButton from '../containers/MButton';
import NewsItem from '../containers/NewsItem'
import NewsItemList from '../containers/NewsItemList'
import NewsItemCard from '../containers/NewsItemCard'
import Loading from '../containers/Loading'


/*let App = () => (
  <div>
    <MButton />
    <Loading />
    <NewsItem />
    <NewsItemList />
    <NewsItemCard />
  </div>
);*/

let App = () => (
  <div>
    <MButton />
    <Loading />
    <NewsItemCard />
  </div>
);


export default App;
