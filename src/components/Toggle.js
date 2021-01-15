import React, { PureComponent } from "react";
import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/searchbox-component";

export default class Toggle extends PureComponent {
  state = { data: [], searchField: " " };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((err) => console.log(err));
  }
  searchInput = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    //Destructure data and searchfield

    const { data, searchField } = this.state;

    //Filter  the state and check for match
    const filteredData = data.filter((singledata) =>
      singledata.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <SearchBox placeholder="Filter list" handleChange={this.searchInput} />
        <CardList cardNumber={filteredData}></CardList>
      </div>
    );
  }
}
