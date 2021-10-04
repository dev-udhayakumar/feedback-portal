import Login from './pages/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './pages/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="feedback-dev.netlify.app/signup" component={Signup} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
