import React from 'react'

function NewsItem(props) {
  console.log(props, "PROPSSS")
  return (
 

    <div className='news-item'>

<div className="card" style={{width: "18rem"}} >
  <img src= {props.news.urlToImage} className="card-img-top" alt="..."  style={{height : "300px" , width: "500px"}} />
  <div className="card-body">
    <h5 className="card-title">{props.news.title}</h5>
    <p className="card-text">{props.news.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>


  
  )
}

export default NewsItem