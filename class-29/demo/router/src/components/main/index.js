import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from '../list';
import Home from '../home';
import Details from '../details';
import Product from '../product';
function Main() {
  const people = ['osama', 'aya', 'bayan', 'malek'];
  let items = people.map((person) => <li key={person}>{person}</li>);
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" render={() => <h2>Profile!!!!!</h2>} />
        <Route path="/people">
          <List>{items}</List>
        </Route>
        <Route path="/details" component={Details} />
        <Route path="/product/:productname" component={Product} />
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
