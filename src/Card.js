import React from 'react';
import './Card.css';


const Card = (props)=>{
    const {books} = props;
return(
    <>
            <div className='main'>
    {/* {console.log(books[0].volumeInfo.imageLinks.thumbnail)} */}
    {books.map((data)=>{
        // console.log(data.volumeInfo.imageLinks)
        const thumbnail = data.volumeInfo.imageLinks;
        console.log(thumbnail);
        return (
            
        <div className="card">
            {JSON.stringify(thumbnail.smallThumbnail)}
            {/* <img src={thumbnail} /> */}
        Magic Card
      </div>
      
      )
    })}
    

<a href="https://mythrillfiction.com/" target="_blank">Mythrill</a>
</div>
    </>
)
}

export default Card;