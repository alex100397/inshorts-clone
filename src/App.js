import './App.css';
import NavInShorts from './components/NavInShorts'
import NewsContent from './components/NewsContent/NewsContent'
import { useState, useEffect } from 'react'
import apiKey from './data/Config'
import axios from 'axios'
import Footer from './components/Footer/Footer'

function App() {

const [category,setCategory] = useState("General");
const [newsArray,setNewsArray] = useState([]);
const [newsResult,setNewsResult] = useState();
const [loadMore,setLoadMore] = useState(20);

const newsApi = async () => {
  try{
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadMore}`);
    setNewsArray(news.data.articles);
    setNewsResult(news.data.totalResults);
  }
  catch(error){
    console.log(error)
  }
};

useEffect(()=> {
  newsApi();
},[newsResult,category,loadMore]);

  return (
    <div className="App">
      <NavInShorts setCategory={setCategory}/>
      <NewsContent newsArray={newsArray} newsResult={newsResult} loadMore={loadMore} setLoadMore={setLoadMore}/>
      <Footer/>
    </div>
  );
}

export default App;
