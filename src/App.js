import { Route, Switch } from 'react-router-dom'
import Login from "./components/Login";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/todoList' component={TodoList} />
      </Switch>
    </>
  );
}

export default App;
