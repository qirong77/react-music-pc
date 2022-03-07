
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getSearchResults } from '../store/actions/home.js'
import '../styles/text.css'
export default function Text() {
  const dispatch = useDispatch()
  useEffect(()=> {
    const action = getSearchResults('love')
    dispatch(action)
  })
    return (
        <>

      </>
    )
}