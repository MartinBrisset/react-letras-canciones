const Artista = ({info}) => {

    if (!info.strArtist) {
        return null
    }

    
    const {strArtistThumb, strGenre, strBiographyES, strArtist} = info
    
    return ( 
        <>
            <div className='card border-light'>
                <div className='card-header bg-primary text-light font-weight-bold'>
                    Informacion del Artista
                </div>
                <div className='card-body'>
                    <img src={strArtistThumb} alt='Logo Artista' />
                    <p className='card-text'>
                        Genero: {strGenre}
                    </p>
                    <h2 className='card-text'>
                        Biografia: {strArtist}
                    </h2>
                    <p className='card-text'>
                        {strBiographyES}
                    </p>
                    <p className='card-text'>
                        <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </p>
                </div>
            </div>
        </>
    );

}
 
export default Artista;