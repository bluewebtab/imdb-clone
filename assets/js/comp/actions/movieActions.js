import axios from 'axios';
import moviesData from '../../moviesData'

import {GET_TRENDING_MOVIES,
        TOP_RATED_MOVIES,
        PICKED_MOVIE
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

export function topRatedMovies(){
  return async(dispatch) =>{
  
  const search = new moviesData()
  await search.topRatedMovies()
  console.log(search.result)
  const goodMovies = search.result
  
  
  dispatch({
    type: TOP_RATED_MOVIES,
    payload: goodMovies
  })
}
}
      

export const pickedMovie = (movie) => dispatch => {

  dispatch({
    type: PICKED_MOVIE,
    payload: movie
  })

}