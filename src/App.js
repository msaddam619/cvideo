import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./Landing";
import SearchAll from "./search-all";
import preload from "./data.json";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route
                path="/search"
                component={() => <SearchAll shows={preload.shows} />}
              />
              <Route
                path="/details/:id"
                component={props => {
                  const selectesShow = preload.shows.find(
                    show => show.imdbID === props.match.params.id
                  );

                  return <Details show={selectesShow} />;
                }}
              />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
