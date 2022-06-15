import Header from './components/Header';
import Main from './components/Main';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

//Construir el componente
function App (){
    return( 
        <>
            <Header/>
            <Main/>
            <ItemListContainer saludo= "Bienvenido a nuestra tienda amigo"/>
            <Footer/>
        </> 
        )
  };



  //Exportar el componente

export default App;