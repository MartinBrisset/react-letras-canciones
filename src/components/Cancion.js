const Cancion = ({letra}) => {

    if (letra.length === 0) {
        return null
    }

    return ( 
        <>
            <h2>Letra canción</h2>
            <p className='letra'>{letra}</p>
        </>
    );
}
 
export default Cancion;