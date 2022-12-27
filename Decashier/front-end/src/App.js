import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
// import { Sukses, About, Login } from "./pages";
// import { render, screen } from "@testing-library/react";
import Home from "./pages";
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
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
