import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
