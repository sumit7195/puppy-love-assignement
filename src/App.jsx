import { Switch, Route } from "react-router-dom"
import Navbar from "./components/nav"
import Puppy from "./components/puppy"
import Search from "./components/search"
import Home from "./components/home"

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Switch>

          <Route exact path="/puppy/:id"  component={Puppy}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/" component={Home}/>




      </Switch>
    </div>
  )
}

export default App
