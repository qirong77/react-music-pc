import { Outlet } from 'react-router-dom'
import styles from '../styles/home.module.scss'
import { SearchBar,Image } from 'antd-mobile'
import { PlayOutline, AppstoreOutline, GlobalOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
export default function Home() {
  const searchRef = useRef(null)
  const navgate = useNavigate()
  // 点击导航更改背景颜色
  const changeBackground = event => {
    event.preventDefault()
    let navItem = event.target
    let i = 0
    for (i; i < navItem.parentNode.children.length; i++) {
      navItem.parentNode.children[i].style.backgroundColor = ''
    }
    navItem.style.backgroundColor = 'lightgray'
    navgate('/home/' + navItem.getAttribute('index'))
  }
  const search = val => {
    navgate('/home/search/' + val)
  }
  return (
    <>
      <div className={styles.left}>
        <div className={styles.left1}>
          {' '}
          <div className={styles.logo}>
          <Image src={require('../styles/apple_logo.jpg')} width={26} height={30} fit='fill'/>
            <span> Music</span>
          </div>
          <div className={styles.SearchBar}>
            {' '}
            <SearchBar
              placeholder="请输入内容"
              style={{ '--background': '#ffffff' }}
              ref={searchRef}
              onSearch={val => {
                search(val)
              }}
            />
          </div>
          <div className={styles.nav}>
            <div className={styles.r1} onClick={changeBackground} index="listen-now">
              <PlayOutline color="var(--adm-color-danger)" style={{ marginRight: 10 }} />
              现在就听
            </div>
            <div className={styles.r1} onClick={changeBackground} index="browser">
              <AppstoreOutline color="var(--adm-color-danger)" style={{ marginRight: 10 }}></AppstoreOutline>
              浏览
            </div>
            <div className={styles.r1} onClick={changeBackground} index="redio">
              <GlobalOutline color="var(--adm-color-danger)" style={{ marginRight: 10 }}></GlobalOutline>
              广播
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </>
  )
}
