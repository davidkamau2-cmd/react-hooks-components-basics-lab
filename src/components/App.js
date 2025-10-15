import React from "react";

function NavBar() {
  return (
    <nav id="navbar">
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <Home />
    </div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <About />
    </div>
  );
}

export default App;
