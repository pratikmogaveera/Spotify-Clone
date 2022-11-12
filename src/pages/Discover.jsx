import { Error, Loader, SongCard } from '../components'
import { genres } from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'
import { useDispatch, useSelector } from 'react-redux';
const Discover = () => {
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const genreTitle = genres[0].title
    const { data, isFetching, error } = useGetTopChartsQuery()
    if (isFetching) return <Loader title='Songs are loading..' />

    if (error) return <Error />

    return (
        <div className='flex flex-col'>
            <div className='w-full flex justify-between items-center flex-col sm:flex-row mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-left'>Discover: {genreTitle}</h2>
                <select className='bg-[#000000] text-gray-300 p-2 text-md rounded-lg outline-none sm:mt-0 mt-5'
                    onChange={() => { }}
                    value=''
                >
                    {genres.map(genre => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select>
            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>

    )
};

export default Discover;
