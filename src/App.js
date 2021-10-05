import Login from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from './pages/signup';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
         <Route exact path="/">
          <Login/>
        </Route>
          <Route exact path="/signup">
          <Signup/>
        </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
