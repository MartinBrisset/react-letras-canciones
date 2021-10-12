import axios from "axios";
import { useEffect, useState } from "react";
import Artista from "./components/Artista";
import Cancion from "./components/Cancion";
import Formulario from "./components/Formulario";

function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) {
      return
    }

    const consultarApiLetra = async () => {

      const {artista, cancion} = busquedaLetra



      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, info] = await Promise.all([
        axios.get(url),
        axios.get(url2),
      ])

      setLetra(letra.data.lyrics)
      setInfo(info.data.artists[0])
    }
    consultarApiLetra()

  }, [busquedaLetra])

  return (

    <>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Artista
              info={info}
            />
          </div>
          <div className='col-md-6'>
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </>


  );
}

export default App;
