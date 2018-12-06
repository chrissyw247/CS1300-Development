import React, {Component} from 'react';
import './styles.css'

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
      return <p key={item.name}>{item.name}</p>
    });

    return items;
  }

  render() {
    return (
      <div class = "list-container">
        {this.props.items.map(item => <ListItem key = {item.name} listItem = {item}/>)}
      </div>
    )
  }
}

function importImages(r) {
  let images = {};
  r.keys().forEach(function(item, index) { images[item.replace('./', '')] = r(item);});
  return images;
}

const images = importImages(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const ListItem = (props) => (
    <div class = "movie-container">
        <div class = "movie-image-container">
            <img class = "movie-image" alt = "movie poster" src = {images[props.listItem.image]} />
        </div>
        <div class = "movie-information">
            <div class = "movie-title">
                {props.listItem.name}
            </div>
             <div class = "other-information">
                <em>Genre</em>: {props.listItem.genre.join(", ")}
            </div>
            <div class = "other-information">
                <em>Rated</em>: {props.listItem.rated}
            </div>
            <div class = "other-information">
                <em>Score</em>: {props.listItem.score}
            </div>
        </div>
    </div>
);

//const ListItem = (props) => <p> {props.listItem.name} </p>

export default List; 
