import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Auth/LoginPage";
import RegisterPage from "./Auth/RegisterPage";
import IdeasPage from "./Ideas/IdeaPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IdeasPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
};

export default App;
