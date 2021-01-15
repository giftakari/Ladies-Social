import React from 'react';
import './card.styles.css'

export default function Card({detail}) {


    return (
        <div className= "card-container">
            

            
                  <img  alt="monster" src={`https://randomuser.me/api/portraits/med/women/${detail.id}.jpg`} width="180px" height="180px"/>
             
           --<span>{detail.email}</span>



<span>{detail.username}</span>
<span>{detail.website}</span>


           
        </div>
    )
}
