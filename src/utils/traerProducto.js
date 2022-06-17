import producto from './producto'

const traerProducto = () => {
    return new Promise ((resolve,reject) => (
        setTimeout ( ()=> {
            resolve(producto)
        },1000)
    ))
}

export default traerProducto;