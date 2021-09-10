import AllPosts from "./components/AllPosts";
import ViewPost from "./components/ViewPost";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
