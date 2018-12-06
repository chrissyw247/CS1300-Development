import React, { Component } from 'react';
import Header from './Header';
import FilteredList from './FilteredList';


//TODO (FilteredList): create a produce list using the 'const' variable keyword

const movies = [
//	{name: "Alice in Wonderland", score: 6.5, genre: ["Family", "Adventure", "Fantasy"], rated: "PG", image: "alice.jpg"},
	{name: "Atomic Blonde", score: 6.7, genre: ["Action", "Drama"], rated: "R", image: "atomic.jpg"},
	{name: "Baby Driver", score: 7.6, genre: ["Drama", "Action", "Crime"], rated: "R", image: "baby.jpg"},
	{name: "Batman v Superman", score: 6.5, genre: ["Action", "Adventure", "Fantasy"], rated: "PG-13", image: "batman.jpg"},
	{name: "Beauty and the Beast", score: 7.2, genre: ["Romance", "Family", "Fantasy"], rated: "PG", image: "beauty.jpg"},
	{name: "Call Me By Your Name", score: 7.9, genre: ["Drama", "Romance"], rated: "R", image: "call.png"},
	{name: "Cars", score: 7.1, genre: ["Comedy", "Family", "Animation"], rated: "G", image: "cars.jpg"},
	{name: "Catch Me If You Can", score: 8.1, genre: ["Drama", "Crime"], rated: "PG-13", image: "catch.jpg"},
	{name: "Crazy Rich Asians", score: 7.2, genre: ["Comedy", "Romance"], rated: "PG-13", image: "crazy.jpg"},
	{name: "Deadpool", score: 8.0, genre: ["Comedy", "Action", "Adventure"], rated: "R", image: "dead.jpg"},
	{name: "Finding Nemo", score: 8.1, genre: ["Comedy", "Animation", "Adventure"], rated: "G", image: "nemo.jpg"},
	{name: "Incredibles 2", score: 7.9, genre: ["Action", "Animation", "Adventure"], rated: "PG", image: "incredibles.jpeg"},
	{name: "Monsters, Inc", score: 8.1, genre: ["Comedy", "Animation", "Adventure"], rated: "G", image: "monsters.jpg"},
	{name: "Neighbors", score: 6.3, genre: ["Comedy"], rated: "R", image: "neighbors.jpg"},
	{name: "Pacific Rim", score: 6.9, genre: ["Action", "Adventure", "Sci-Fi"], rated: "PG-13", image: "pacific.jpeg"},
	{name: "Pulp Fiction", score: 8.9, genre: ["Crime", "Drama"], rated: "R", image: "pulp.jpg"},
	{name: "Ratatouille", score: 7.1, genre: ["Animation", "Adventure", "Family"], rated: "G", image: "rat.jpg"},
	{name: "Sixteen Candles", score: 7.1, genre: ["Comedy", "Romance"], rated: "PG", image: "candles.jpg"},
	{name: "Star Wars: Episode I", score: 6.5, genre: ["Action", "Adventure", "Fantasy"], rated: "PG", image: "star.jpg"},
	{name: "Superbad", score: 7.6, genre: ["Comedy"], rated: "R", image: "super.jpg"},
	{name: "Tarzan", score: 7.1, genre: ["Animation", "Adventure", "Family"], rated: "G", image: "tarzan.jpg"},
	{name: "The Lion King", score: 8.5, genre: ["Drama", "Animation", "Adventure"], rated: "G", image: "lion.jpg"},
	{name: "X-Men: Apocalypse", score: 7.0, genre: ["Adventure", "Action", "Sci-Fi"], rated: "PG-13", image: "apoc.jpg"},
	{name: "Zootopia", score: 8.0, genre: ["Comedy", "Animation", "Adventure"], rated: "PG", image: "zoo.jpg"},
];

class App extends Component {
    render() {
        return (
        	<div className = "App">
        		<Header name = {'movie'}/>

        		<FilteredList items={movies} />
        	</div>
        );
    }
}

export default App;