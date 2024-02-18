/* eslint-disable react/prop-types */
// import React from 'react'
import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'


function Main(props) {

  const [newsArticles, setNewsArticles] = useState([])
    //props.newsCategory 
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.newsCategory}&apiKey=6e66bd0526134071ab890117a3b3e371`).then((response)=> response.json()).then((result)=> setNewsArticles(result.articles))
  },[props.newsCategory])



  return (
   

    <div className='main-board'>

    {/* {newsArticles.map((news, index)=> {
      return <NewsItem key={index}  news ={news}/>
    })} */}

    {newsArticles ? (
  newsArticles.map((news, index) => {
    return <NewsItem key={index} news={news} />;
  })
) : (
  <div>Loading...</div>
)}
    
    </div>
  )
}

export default Main