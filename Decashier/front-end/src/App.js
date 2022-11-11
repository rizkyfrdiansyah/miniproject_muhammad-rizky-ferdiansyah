import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Home, Sukses, About, Login } from "./pages";
// import { render, screen } from "@testing-library/react";

export default class App extends Component {
  render() {
    // test("renders learn react link", () => {
    //   render(<App />);
    //   const linkElement = screen.getByText(/learn react/i);
    //   expect(linkElement).toBeInTheDocument();
    // });
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sukses" component={Sukses} exact />
            <Route path="/about" component={About} exact />
            <Route path="/login" component={Login} exact />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
