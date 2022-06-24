import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom"

//Construir el componente
function App (){
    return(
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
        )
};



  //Exportar el componente

export default App;