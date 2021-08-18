import "./App.css";
// import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import AddStudent from "../src/pages/AddStudent";
import StudentDirectory from "../src/pages/StudentDirectory";
import AdminLogin from "../src/pages/AdminLogin";
import Home from "../src/pages/Home";
export default function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/StudentDirectory" component={StudentDirectory}></Route>
          <Route path="/AddStudent" component={AddStudent}></Route>
          <Route path="/AdminLogin" component={AdminLogin}></Route>
        </Switch>
      </main>
    </div>
  );
}
