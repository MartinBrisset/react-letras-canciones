import { useState } from "react";

const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const [error, setError] = useState(false)

    const {artista, cancion} = busqueda

    const actualizarState = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const buscarInfo = (e) => {
        e.preventDefault()
        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        setBusquedaLetra(busqueda)
    }

    return ( 

        <div className='bg-info'>
            { error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p> : null}
            <div className='container'>
                <div className='row'>
                    <form
                        className='col card tex-white bg-transparent mb-5 pt-5 pb-5'
                    >
                        <fieldset>
                            <legend className='text-center'>
                                Buscador de Letras de Canciones
                            </legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artista'
                                            placeholder='Daddy Yankee'
                                            onChange={actualizarState}
                                            value={artista}
                                            ></input>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Cancion</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='cancion'
                                            placeholder='Gasolina'
                                            onChange={actualizarState}
                                            value={cancion}
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                                onClick={buscarInfo}
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
}
 
export default Formulario;