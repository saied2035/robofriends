import React from 'react';
import  CardList from '../components/cardList';
import SearchBox from '../components/searchBox'
import './defaults.css'
import './app.css'
import Scroll from '../components/Scroll'
class  App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots:[],
			searchBar:''
		}
	}
	onSearchChange = (event) => {
		 this.setState({searchBar: event.target.value})
	}
          componentDidMount (){
              fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json()).then(users => this.setState({robots : users}));
          }

           render() {
            const {robots,searchBar} = this.state;

           const filteredRobots= robots.filter(robot => {
         	return robot.name.toLowerCase().includes( searchBar.toLowerCase())
               });
           
             return  !robots.length ? 

             <div style={{height:'100vh'}}className='flex justify-center items-center'><h1>Loading</h1></div>
             :
           	  (
                <div className="tc" style={{overflow:'hidden'}} >
                <h1 className="f1 ma2">RoboFriends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll numOfRobots={filteredRobots.length}>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
           	 	)
           }
}

export default App;