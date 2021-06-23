import "./App.css";
import { routes } from "./routes";
import { BrowserRouter, Switch } from "react-router-dom";
// layouts
import { AuthLayout } from "./layouts/AuthLayout";
import { MainLayout } from "./layouts/MainLayout";
import { ProfileLayout } from "./layouts/ProfileLayout";
// pages
import { UserProfile } from "./pages/UserProfile";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const state = useSelector((state) => state);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [currentUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <AuthLayout path={routes.login} component={Login} />
          <AuthLayout path={routes.sign_up} component={SignUp} />
          <ProfileLayout path={routes.user_profile} component={UserProfile} />
         <MainLayout path={routes.home} component={Home} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
