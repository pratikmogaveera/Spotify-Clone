import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore'


const AroundYou = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_e8bnA1uVEhZQ8q99TMUOV0Juyh9QJ`)
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [country])

    const {data, isFetching, error } = useGetSongsByCountryQuery(country)

    if(isFetching && loading) return <Loader title='Loading songs around you..'/>

    if(error && country) return <Error />

    return (
        <div className='flex flex-col'>
            <h2 className='text-3xl mt-4 mb-10 font-bold'>
                Around You:
                <span className='text-gray-400 ml-1'>{country}</span>
            </h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((song, i) => <SongCard 
                                            key={song.key}
                                            song={song}
                                            isPlaying={isPlaying}
                                            activeSong={activeSong}
                                            data={data}
                                            i={i}
                                        />)}
            </div>
        </div>
    )
};

export default AroundYou;
