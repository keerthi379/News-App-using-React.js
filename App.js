import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

// news api key = dd4fabca03674cd2b7c526abc6b49212

 function App() {

   let [articles,setArticles] = useState([]);
   let [category,setCategory] = useState("india");

  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=${category}&from=2023-12-07&apiKey=dd4fabca03674cd2b7c526abc6b49212")
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
    .catch((err)=>{
      console.log(err)
    })
    
  },[category]) 

  return (
    <div className="App">
      
      <header className='header'>

        <h3> Short News </h3>

        <input type="text" onChange={(event)=>{
          if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else
          {
            setCategory("india")
          }
          
        }} placeholder='Search News...'/>

      </header>

    <section className='news-articles'>

    {

      articles.length!==0?

      articles.map((articles)=>{
        return(
          <News articles = {articles}/>
        )
      })
      :
      <h3> No News Found For The Searched Text. </h3>
    }

    </section>

    </div>
  );
}

export default App;
