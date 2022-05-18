import "./App.css";

import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
import SideNav from "./components/side-navigation/side-navigation.component";

function App() {
  return (
    <div className="App">
      <SideNav />
      <SignInSignUp />
    </div>
  );
}

export default App;
