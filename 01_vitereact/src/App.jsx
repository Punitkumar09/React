import Chai from "./chai";

function App() {
  const username = "punit";

  return (
    <>
      <Chai />
      <h1>hello {username}</h1> //evaluated expression
      <p>test para</p>
    </>
  );
}

export default App;
