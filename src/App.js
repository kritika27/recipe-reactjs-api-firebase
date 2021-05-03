import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const Homepage = lazy(() => import("./pages/Hero/Hero"));
const Errorpage = lazy(() => import("./pages/Error/Error"));
const Recipelist = lazy(() => import("./pages/Recipe/RecipeList"));
const Recipedetails = lazy(() => import("./pages/SingleRecipe/SingleRecipe"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/recipe" component={Recipelist} />
          <Route exact path="/recipe/:id" children={<Recipedetails />} />
          <Route exact path="*" component={Errorpage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
