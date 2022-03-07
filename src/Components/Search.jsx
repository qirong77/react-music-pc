import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSearchResults } from '../store/actions/home'
import styles from '../styles/search.module.scss'
import { Image} from 'antd-mobile'
export default function Search() {
  let params = useParams()
  const dispatch = useDispatch()
  const songList = useSelector(state => state.searchResult.songList)
  console.log(songList)
  useEffect(()=> {
      // 注意使用的需要需要点一个id
      const action = getSearchResults(params.id)
       dispatch(action)
  },[params.id,dispatch])
  const songs = songList.map(song=>(
    <li>
    <Image src={song.album.artist.img1v1Url} width={80} height={80} fit='fill' style={{ borderRadius: 40 }}></Image>
    <div>
      <div>{song.name}</div>
      <div>{song.artists[0].name}</div>
    </div>
  </li>
  ))
  return <>
  <header>最佳结果</header>
  <div className={styles.search_result}>
{songs}
  </div>
  </>
}
