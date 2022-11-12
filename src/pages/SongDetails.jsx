import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Error, DetailsHeader, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from '../redux/services/shazamCore'


const SongDetails = () => {
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { songid } = useParams()
    const temp = useGetSongDetailsQuery(songid)
    console.log(temp)
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
    // console.log(songData)
    return (
        <div className="flex flex-col">
            {/* <DetailsHeader artistId={artistId} songData={songData}/> */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {songData?.sections[1].type === 'LYRICS' ?
                        songData?.sections[1].text.map((line, i) => 
                            (<p className='text-gray-400 text-base my-1'>{line}</p>))
                        :
                        (<p>Sorry, No Lyrics Found.</p>)
                    }
                </div>

            </div>
        </div>
    )
};

export default SongDetails;