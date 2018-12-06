import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: "All",
      rated: "All",
      sort: "Name",
      windowWidth: window.innerWidth,
      currItems: [].concat(this.props.items)
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSize.bind(this));
    this.updateSize();
  }

  updateSize() {
      this.setState({windowWidth: window.innerWidth});
  }

  // Sets the state whenever the user types on the search bar

  onChoseGenre = (eventKey) => {
    this.setState({genre: eventKey});
  }

  onChoseRated = (eventKey) => {
    this.setState({rated: eventKey});
  }

  sortByScoreHighLow = () => {
    this.setState({
       currItems: this.state.currItems.sort(this.sortScoreHighLow),
       sort: "Score High to Low"
    });
  }

  sortByScoreLowHigh = () => {
    this.setState({
       currItems: this.state.currItems.sort(this.sortScoreLowHigh),
       sort: "Score Low to High"
    });
  }

  sortByName = () => {
    this.setState({
       currItems: this.state.currItems.sort(this.sortName),
       sort: "Name"
    });
  }

  sortScoreHighLow = (item1, item2) => {
      /* If they have the same score, sort by name */
      if (item2.score - item1.score === 0) {
          return this.sortName(item1, item2); 
      }
      else {
          return item2.score - item1.score; 
      }  
  }

  sortScoreLowHigh = (item1, item2) => {
    /* If they have the same score, sort by name */
    if (item2.score - item1.score === 0) {
        return this.sortName(item1, item2); 
    }
    else {
        return item1.score - item2.score; 
    }  
  }

  sortName = (item1, item2) => {
    /* If they have the same score, sort by name */
    var name1 = item1.name.toUpperCase(); // ignore upper and lowercase
    var name2 = item2.name.toUpperCase(); // ignore upper and lowercaseto

    if (name1 < name2) {
      return -1;
    }

    if (name1 > name2) {
      return 1;
    }

    return 0; 
}


  removeFilters = () => {
    this.setState({
       currItems: [].concat(this.props.items), 
       genre: "All", 
       rated: "All",
       sort: "Name"
    });
  }

  isFilteredGenre = (item) => {
      //console.log(item.genre)
      for (var i = 0; i < item.genre.length; i++) { 
         if (item.genre[i] === this.state.genre) {
            return true; 
         }
      }

      return false; 
  }

  filterItem = (item) => {
    // Checks if the current search term is contained in this item
    return (((this.state.genre === "All") || this.isFilteredGenre(item)) && ((this.state.rated === "All") || (item.rated === this.state.rated)));
  }

  render() {
    return (
      <div className="filter-list">
        <div className = "filters">

          <div className = "button-container">
          <DropdownButton bsSize = {this.state.windowWidth <= 590 && this.state.windowWidth >= 480 ? 'small' : 'default'} class = "dropdown" id="genreDropdown" title={"Genre: " + this.state.genre}>
            <MenuItem eventKey="All" active = {this.state.genre === "All"} onSelect={this.onChoseGenre}>All</MenuItem>
            <MenuItem eventKey="Action" active = {this.state.genre === "Action"} onSelect={this.onChoseGenre}>Action</MenuItem>
            <MenuItem eventKey="Adventure" active = {this.state.genre === "Adventure"} onSelect={this.onChoseGenre}>Adventure</MenuItem>
            <MenuItem eventKey="Animation" active = {this.state.genre === "Animation"} onSelect={this.onChoseGenre}>Animation</MenuItem>
            <MenuItem eventKey="Comedy" active = {this.state.genre === "Comedy"} onSelect={this.onChoseGenre}>Comedy</MenuItem>
            <MenuItem eventKey="Crime" active = {this.state.genre === "Crime"} onSelect={this.onChoseGenre}>Crime</MenuItem>
            <MenuItem eventKey="Drama" active = {this.state.genre === "Drama"} onSelect={this.onChoseGenre}>Drama</MenuItem>
            <MenuItem eventKey="Family" active = {this.state.genre === "Family"} onSelect={this.onChoseGenre}>Family</MenuItem>
            <MenuItem eventKey="Fantasy" active = {this.state.genre === "Fantasy"} onSelect={this.onChoseGenre}>Fantasy</MenuItem>
            <MenuItem eventKey="Romance" active = {this.state.genre === "Romance"} onSelect={this.onChoseGenre}>Romance</MenuItem>
          </DropdownButton> 
          </div>

          <div className = "button-container">
          <DropdownButton bsSize = {this.state.windowWidth <= 590 && this.state.windowWidth >= 480 ? 'small' : 'default'} class = "dropdown"  id="ratingDropdown" title={"Rated: " + this.state.rated}>
            <MenuItem eventKey="All" active = {this.state.rated === "All"} onSelect={this.onChoseRated}>All</MenuItem>
            <MenuItem eventKey="G" active = {this.state.rated === "G"} onSelect={this.onChoseRated}>G</MenuItem>
            <MenuItem eventKey="PG" active = {this.state.rated === "PG"}  onSelect={this.onChoseRated}>PG</MenuItem>
            <MenuItem eventKey="PG-13" active = {this.state.rated === "PG-13"}  onSelect={this.onChoseRated}>PG-13</MenuItem>
            <MenuItem eventKey="R" active = {this.state.rated === "R"} onSelect={this.onChoseRated}>R</MenuItem>
          </DropdownButton> 
          </div>

          <div className = "button-container">
          <DropdownButton bsSize = {this.state.windowWidth <= 590 && this.state.windowWidth >= 480 ? 'small' : 'default'} class = "dropdown" id="sortDropdown" title={"Sort by: " + this.state.sort}>
            <MenuItem active = {this.state.sort === "Name"}  onSelect={this.sortByName}>Name</MenuItem>
            <MenuItem active = {this.state.sort === "Score High to Low"} onSelect={this.sortByScoreHighLow}>Score High to Low</MenuItem>
            <MenuItem active = {this.state.sort === "Score Low to High"} onSelect={this.sortByScoreLowHigh}>Score Low to High</MenuItem>
          </DropdownButton>
          </div>

          <div className = "button-container">
          <button bsSize = {this.state.windowWidth <= 590 && this.state.windowWidth >= 450 ? 'xs' : 'default'} class = "reset" onClick={this.removeFilters}>
           Reset
          </button>
          </div>
        </div>

        <div className = "counter-container">
            Displaying {this.state.currItems.filter(this.filterItem).length} out of {this.props.items.length} movies
        </div>

        <List items={this.state.currItems.filter(this.filterItem)} />
      </div>
    );
  }
}


export default FilteredList;

