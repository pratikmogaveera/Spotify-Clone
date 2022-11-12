import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ song, isPlaying, activeSong, handlePause, handlePlay, size}) =>
    (isPlaying && activeSong?.title === song.title ? (
        <FaPauseCircle
            size={size}
            className='text-gray-300'
            onClick={handlePause}    
        />
    ):
        <FaPlayCircle 
            size={size}
            className='text-gray-300'
            onClick={handlePlay}
        />
    )

export default PlayPause;
