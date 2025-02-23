import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from './SearchBox';
import { useState } from "react";

function App(){

  const [robotsState, setRobotsState] = useState(robots);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
    console.log(event.target.value);
  }

  const filteredRobots = robotsState.filter((robot)=>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox handleInput={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  )
}

export default App;


