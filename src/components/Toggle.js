import React, { PureComponent } from 'react'
import CardList from './card-list/card-list.component'

export default class Toggle extends PureComponent {

    state={ data : []}

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(json => { this.setState({data: json})})
        .catch(err => console.log(err))

    }

handleClick =()=>{
console.log(`click`)
}
    render() {


   
        return (
            <div>
      <CardList cardNumber ={this.state.data}>
            


             </CardList>
            </div>
        )
    }
}
