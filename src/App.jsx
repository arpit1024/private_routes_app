import "./App.css";
import { Navbar } from "./Pages/Navbar";
import { AppRoutes } from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
