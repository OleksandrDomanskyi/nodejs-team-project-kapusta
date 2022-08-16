import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import MyRoutes from "./Routes";

import { getCurrentUser } from "./redux/auth/auth-operations";

import "../node_modules/modern-normalize/modern-normalize.css";
import "./sass/main.scss";
import "./App.scss";

const App = () => {

  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);
  
  return (
    <div className="App">
      <Header />
      <MyRoutes />
    </div>
  );
};

export default App;
