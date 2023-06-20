import React, {useState, useEffect} from "react";


const GifCard = ({gifarray}) => {

    let single = false
    const gifArray = gifarray;
    if(gifarray==='h'){
        single = true
    }
    

    

    return (
        <div>
            <h1
                style={{
                    fontSize: '40px',
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: '20px',
                }}
            >Gif Gallery</h1>
            {!single && Object.entries(gifArray).map(([key, value]) => (
                <img key={key} src={value} alt={key} />
            ))}
            {single && gifArray.map((url, index) => (
            <img key={index} src={url} alt={`Image ${index}`} />
            ))}



        </div>
      );
}
      

export default GifCard;