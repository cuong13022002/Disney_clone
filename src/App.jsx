import './App.css'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'
function App() {
  return (
    <div>
        <h1 className="">

            <Header/>

            <Slider/>

            <ProductionHouse/>

            <GenreMovieList/>
        </h1>
    </div>
  )
}

export default App
