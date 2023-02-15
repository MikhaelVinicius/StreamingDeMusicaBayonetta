import SongBar from './SongBar';
import songBar from './SongBar'


const RelatedSongs = ({ data, isPlaying, activeSong, handLePauseClick, handLePlayClick, artistID}) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Músicas relacionadas</h1>
    <div className='mt-6 w-full flex flex-col'>
      {data?.map((song, i)=>(
        <SongBar
        key={`${song.key}-${artistID}`}
        song={song}
        i={i}
        artistID={artistID}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handLePauseClick={handLePauseClick}
        handLePlayClick={handLePlayClick}/>
      ))}
    </div>
    </div>
);

export default RelatedSongs;
