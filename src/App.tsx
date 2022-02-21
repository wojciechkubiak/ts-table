import { Provider } from "react-redux";
import "./App.css";
import Work from "./containers/Work/Work";
import { store } from "./store/store";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <div className="App">
        <Work/>
      </div>
    </Provider>
  );
};

export default App;
