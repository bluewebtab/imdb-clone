import {GET_TRENDING_MOVIES,
        TOP_RATED_MOVIES,
        PICKED_MOVIE
       } from '../actions/types';

const initialState = {
        movies: '',
        filteredMovies: '',
        moviesData: '',
        showSearch: false,
        topRatedData: '',
        pickedMovie: ''
      }

      export default function(state = initialState, action){
        switch (action.type) {
            case GET_TRENDING_MOVIES:
              return{
                ...state,
                moviesData: action.payload
                
              }
              case TOP_RATED_MOVIES:
                return{
                  ...state,
                  topRatedData: action.payload
                }
                case PICKED_MOVIE:
                return{
                  ...state,
                  pickedMovie: action.payload
                }
            default:
              return state;
        }
      }