import { SongBar } from './'

const RelatedSongs = ({ data, isPlaying, activeSong, handlePlayClick, handlePauseClick, artistId }) => (
    <div className='flex flex-col bg-[#000] p-1 lg:p-2'>
        <h1 className='mt-1 font-bold text-3xl'>Related Songs:</h1>
        <div className='mt-6 w-full flex flex-col'>
            {data?.map((song,i) => <SongBar 
                                        key={`${artistId}-${song.key}-${i}`}
                                        song={song}
                                        i={i}
                                        artistId={artistId}
                                        isPlaying={isPlaying}
                                        activeSong={activeSong}
                                        handlePauseClick={handlePauseClick}
                                        handlePlayClick={handlePlayClick}
                                    />)
            }
        </div>
    </div>
);

export default RelatedSongs;
