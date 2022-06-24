import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer'
import {Routes, Route} from 'react-router-dom'

const Main = ()=>{
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer slogan= "BE MAN // PREMIUM JEWELRY"/>}/>

                <Route path='/categoria/:category' element={"Hola"}/>

                <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

            </Routes>
        </main>
    )
};

export default Main;