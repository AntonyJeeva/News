import React from 'react'
import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'


function Main() {

  const [newsArticles, setNewsArticles] = useState([])


  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6e66bd0526134071ab890117a3b3e371').then((response)=> response.json()).then((result)=> setNewsArticles(result.articles))
  },[])



  return (
   

    <div className='main-board'>This is the main news page

    {newsArticles.map((news, index)=> {
      return <NewsItem key={index}  news ={news}/>
    })}
    
    </div>
  )
}

export default Main