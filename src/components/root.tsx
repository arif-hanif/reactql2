// Root entry point

// ----------------------------------------------------------------------------
// IMPORTS

/* NPM */
import * as React from "react";
import Helmet from "react-helmet";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";

/* Local */

// Styles - import for side-effects
import "@/global/styles";

// Routes
import routes from "@/data/routes";

// ----------------------------------------------------------------------------

const Root = () => (
  <div>
    <Helmet>
      <title>ReactQL starter kit - edit me!</title>
    </Helmet>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
  </div>
);

export default hot(module)(Root);
