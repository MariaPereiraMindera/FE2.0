import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import LinkList from "./components/LinkList";
import CreateLink from "./components/CreateLink";
import Search from "./components/Search";
import LinkListSubscription from "./components/LinkListSubscription";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/subs">Subscription</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>GraphQL Normal</h1>
                <LinkList />
              </>
            }
          />
          <Route
            path="/subs"
            element={
              <>
                <h1>GraphQL Subscription</h1>
                <CreateLink />
                <LinkListSubscription />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <h1>GraphQL Search</h1>
                <Search />
              </>
            }
          />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
