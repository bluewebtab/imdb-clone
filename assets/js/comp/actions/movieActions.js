import axios from 'axios';
import moviesData from '../../moviesData'

import {GET_TRENDING_MOVIES
       } from './types';

export function getTrendingMovies(){
  return async(dispatch) =>{
  
  const search = new moviesData()
  await search.discoverMovies()
  console.log(search.result)
  const goodMovies = search.result
  
  
  dispatch({
    type: GET_TRENDING_MOVIES,
    payload: goodMovies
  })
}
}
      