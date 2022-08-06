import Header from "./components/Header/Header";
import MyRoutes from "./Routes";

import "../node_modules/modern-normalize/modern-normalize.css";
import "./sass/main.scss";
import "./App.scss";

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <MyRoutes />
    </div>
  );
};

export default App;
