import { Header, Home, SignUp, Login } from "./components"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>

    </div>
  )
}

export default App