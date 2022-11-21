import { useNavigate } from "react-router-dom";
// import { useGetArtistDetailsQuery } from '../redux/services/shazamCore'

const ArtistCard = ({ track }) => {
    const artistId = track.artists[0].adamid
    // const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId)
    // const artistImg = artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
    const navigate = useNavigate()
    return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'
        onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
        <img alt='artist'
        src={track?.images?.coverart}
        className='w-full h-56 rounded-lg' />
        <p className='mt-4 font-semibold text-lg truncate'>{track.subtitle}</p>
    </div>
    )
};

export default ArtistCard;
