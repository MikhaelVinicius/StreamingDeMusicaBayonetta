import {ArtistCard, Loader, Error} from '../components';

import { useGetArtistDetailsQuery} from "../redux/services/shazamCore";


const TopArtists = () => {

const {data, isFetching, error} =  useGetArtistDetailsQuery();

if (isFetching) return <Loader title={"Carregando os artistas em alta..."}/>

if(error) return <Error/>;

return(
    <div>
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
          Artistas em alta
        </h2>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((track)=> (
                <ArtistCard key={track.key} track={track}/>
            ))}

        </div>




    </div>
    


)




}

export default TopArtists;
