import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav> Navbar</nav>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
// outlet is to render the children
export default App;
