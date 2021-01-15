import React from 'react'
import Card from '../card/card-component'
import './card-list.styles.css'

function CardList(props) {


    return (
     <div  className="card-list">
      
     {  props.cardNumber.map(detail =>  <Card key={detail.id} detail={detail}/>)     }   
        </div> 
    )
}

export default CardList
