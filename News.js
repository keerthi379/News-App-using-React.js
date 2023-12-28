export default function News(props)
{


   return(

    <div className="news">
        
        <div className="news-img">
            <img src={props.articles.urlToImage}/>
        </div>

        <h3> {props.articles.title} </h3>

        <p> {props.articles.description?.substring(0,100).concat("...")} <a href={props.articles.url} target="_blank"> Read More </a> </p>


        <div className="source">
            <p> Author: {props.articles.author} </p>
            <p>{props.articles.source.name}</p>
        </div>

    </div>

   ) 
}
