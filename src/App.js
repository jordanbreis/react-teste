import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import test1 from "./test1";
import test2 from "./test2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="main">
                <Link to="test1">Navegar para o Primeiro Teste</Link>
                <Link to="test2">Navegar para o Segundo Teste</Link>
              </div>
            </div>
          }
        />
        <Route
          path="test1"
          element={
            <div className="teste1">
              <h2>Primeiro Teste</h2>
              <img
                src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg"
                alt="Imagem 1"
              />
            </div>
          }
        />
        <Route
          path="test2"
          element={
            <div className="teste2">
              <h2>Segundo Teste</h2>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
              <div class="inline">
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
                <img src="https://www.wallpapertip.com/wmimgs/25-258610_4k-scenery.jpg" />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
