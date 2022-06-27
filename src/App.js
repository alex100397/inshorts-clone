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
const [newsResult,setNewsResult] = useState("");

const newsApi = async () => {
  try{
    const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}`);
    setNewsArray(news.data.articles);
    setNewsResult(news.data.totalResults);
  }
  catch(error){
    console.log(error)
  }
};

useEffect(()=> {
  newsApi();
},[newsResult,category]);

  return (
    <div className="App">
      <NavInShorts setCategory={setCategory}/>
      <NewsContent/>
      <Footer/>
    </div>
  );
}

export default App;
