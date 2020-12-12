import http from '../../utils/http'
import * as types from './constants'
import { Dispatch } from "redux";

const key = 'XEXvkyZvA8JUgfjddI8fKVChSOOv2zdgMeoLl4Xa'
export const SearchAstroid = (id: string) => (dispatch: Dispatch) => {
  http.get(`${id}?api_key=${key}`)
  .then (res => {
    console.log(res.data)
    dispatch({type: types.SET_ASTROID, payload: res.data })
  })
  .catch(err => {
    alert('Something Went Wrong')
  })
}

export const StartRandomSearch = () => (dispatch: Dispatch) => {
  http.get(`browse?api_key=${key}`)
  .then(res => {
    const randomAstroidId = res.data.near_earth_objects[Math.floor(Math.random() * res.data.near_earth_objects.length)].id
    http.get(`https://api.nasa.gov/neo/rest/v1/neo/${randomAstroidId}?api_key=${key}`)
    .then(res => {
      dispatch({type: types.SET_ASTROID, payload: res.data})
    })
  })
  .catch(err => {
    console.log(err)
  })
}
