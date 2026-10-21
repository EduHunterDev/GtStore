import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/shared/Footer"

function App() {

  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<p>Produtos</p>}/>
        <Route path="/" element={<p>Login</p>}/>
        <Route path="/" element={<p>Carrinho</p>}/>
      </Routes>
    </main>
    


    <Footer/>

    </BrowserRouter>

  )
}

export default App
