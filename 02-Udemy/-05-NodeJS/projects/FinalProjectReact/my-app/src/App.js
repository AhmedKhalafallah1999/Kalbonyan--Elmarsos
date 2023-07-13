import "./App.css";
import Header from "./UI/header/header";
import LeftFrame from "../src/UI/leftFrame/leftFrame";
import SignUp from '../src/UI/signUp/signUp'
import CompleteSignUp from "./UI/completeSignUp/completeSign";
import LogIn from "./UI/logIn/logIn";
import ModifyUser from "./UI/modifyUserInfo/ModifyUser";
function App() {
  return (
    <>
    <Header/>
    <div className="App">
      
      <LeftFrame></LeftFrame>
      <SignUp/>
    <CompleteSignUp/>
    <LogIn/>
    <ModifyUser/>
    </div>
    </>
  );
}

export default App;
