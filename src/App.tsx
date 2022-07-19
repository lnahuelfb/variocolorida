import Footer from './components/footer'
import Header from './components/header'
import Contacto from './pages/contacto'
import Inicio from './pages/inicio'
import SobreMi from './pages/sobreMi'
import Trabajos from './pages/trabajos'

function App() {
  return (
    <div>
      <Header />
      <Inicio />
      <SobreMi />
      <Trabajos />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
