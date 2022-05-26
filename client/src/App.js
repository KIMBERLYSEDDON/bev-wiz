import { BrowserRouter } from "react-router-dom";

import BevWizRoutes from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BevWizRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
