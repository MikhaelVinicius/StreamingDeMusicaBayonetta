import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Error, Loader, SongCard} from '../components';
import { useSelector } from 'react-redux';

const AroundYou = () =>{
 const [country, setCountry] = useState('');
 const [loading, setLoading] = useState(true);
 const {activeSong, isPlaying} = useSelector((state) => state.player);
useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_BWeDu1SxlPQsgxiDC8NexSpoKVKM9`).then((res) => setCountry(res?.data?.location?.country)).catch((err) => console.log(err)).finally(() => setLoading(false));
    //at_BWeDu1SxlPQsgxiDC8NexSpoKVKM9
}, [country]);
return(
<div/>

);
};
export default AroundYou;
