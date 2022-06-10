import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

//Construir el componente
function App (){
    return( 
        <>
            <Header/>
            <Main/>
            <Footer/>
        </> 
        )
  };



  //Exportar el componente

export default App;