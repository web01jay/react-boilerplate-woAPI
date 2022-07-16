import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";
import './App.css';
import "./assets/css/styles.css";
import Loader from "./components/Loader";
import RouterComponent from "./routes";
import AppViewModal from "./viewmodals/App";

function App() {

  const {userDetails, loading} = AppViewModal

  return (
    <main className="App">
      {loading ? <Loader /> : <RouterComponent userDetails={userDetails} />}
    </main>
  );
}

export default App;
