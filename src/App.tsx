import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/common/Layout";
function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/list" component={Dashboard} />
      </Layout>
    </Switch>
  );
}

export default App;
