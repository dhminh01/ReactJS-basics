import { useRoutes } from "react-router-dom";
import { AppRoutes } from "./routes/Index";

function App() {
  let element = useRoutes(AppRoutes);
  return <div className="App">{element}</div>;
}

export default App;
