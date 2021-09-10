import AllPosts from "./components/AllPosts";
import ViewPost from "./components/ViewPost";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

        <Route exact path='/posts/:id'>
          <ViewPost />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
