// import "./assets/styles/app.scss";
import AppRouter from "./router";
import store from "./store";
import { Encrypt } from "./modules";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/_Websitmain.scss"
store.subscribe(() => {
  if (process.env.REACT_APP_PERSIST_STORE_DATA === "ENABLED") {
    sessionStorage.setItem("_store", Encrypt(store.getState(), "local"));
  } else {
    store.getState();
  }
});

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={true}
        limit={2}
      />
      <div className="app-component">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
