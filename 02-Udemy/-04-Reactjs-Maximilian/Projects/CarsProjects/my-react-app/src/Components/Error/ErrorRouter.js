import Header from "../../UI/Header/header";
function ErrorRouter() {
  <>
    <Header />
    <div className="container">
      <h1 style={{ color: "black" }}>An error Occured!</h1>
      <p>Could not find this page</p>
    </div>
  </>;
}
export default ErrorRouter;
