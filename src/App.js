import AllPosts from "./components/AllPosts";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <h1>
        Blog Client
      </h1>
      <Switch>

        <Route exact path="/">
          <AllPosts />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
