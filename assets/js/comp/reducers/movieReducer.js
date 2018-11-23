import {GET_TRENDING_MOVIES
       } from '../actions/types';

const initialState = {
        movies: '',
        filteredMovies: '',
        moviesData: '',
        showSearch: false
      }

      export default function(state = initialState, action){
        switch (action.type) {
            case GET_TRENDING_MOVIES:
              return{
                ...state,
                moviesData: action.payload
                
              }
            default:
              return state;
        }
      }