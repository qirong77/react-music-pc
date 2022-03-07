import { Swiper, Image, Button, Mask, Input } from 'antd-mobile'
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getNewAlbum } from '../store/actions/browser'
import { RightOutline } from 'antd-mobile-icons'
import { useFormik } from 'formik'
import styles from '../styles/browser.module.scss'
import { useNavigate } from 'react-router-dom'
export default function Browser() {
  //登录表单
  const form = useFormik({
    initialValues: {
      mobile: '13295951735',
      password: '123123'
    },
    onSubmit: values => {
      console.log(values)
    }
  })
  //遮罩层
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  //进入页面加载数据
  const dispatch = useDispatch()
  useEffect(() => {
    const action = getNewAlbum()
    dispatch(action)
  }, [dispatch])
  const albums = useSelector(state => state.newAlbum.album)
  let albums2 = []
  let a3 = []
  for (let i = 0; i < albums.length; i += 2) {
    a3.push([albums[i], albums[i + 1]])
    albums2.push(a3)
    a3 = []
  }
  //路由跳转
  const navigate = useNavigate()
  const change = event => {
    event.preventDefault()
    let navItem = event.target
    navigate('/home/' + navItem.getAttribute('index'))
  }
  //-------- 渲染时候的初始数据很重要！如果不是就赋值！重新拆分形成新数组
  const album3 = albums2
  // ---------因为组件第一次渲染的时候还没有获取到数据，所以这样不行
  const albumItem2 = album3.map(album => (
    <Swiper.Item className={styles.swiperItem} key={album[0][0].id}>
      <div className={styles.Album}>
      <div>
          <span className={styles.span1}>{album[0][0].company}</span>
          <span className={styles.span2}>{album[0][0].name}</span>
          <span className={styles.span3}>{album[0][0].artist.name}</span>
          </div>
        <Image src={album[0][0].picUrl} width={'90%'} height={'70%'} fit="conatin" className={styles.img1} style={{ borderRadius: 12 }}/>
      </div>
      <div className={styles.Album}>
<div>
          <span className={styles.span1}>{album[0][1].company}</span>
          <span className={styles.span2}>{album[0][1].name}</span>
          <span className={styles.span3}>{album[0][1].artist.name}</span>
          </div>
        <Image src={album[0][1].artist.picUrl}width={'90%'} height={'70%'} fit="conatin" className={styles.img1} style={{ borderRadius: 12 }}/>
      </div>
    </Swiper.Item>
  ))
  return (
    <>
      <nav>
        <div className={styles.login}>
          <Button color="danger" size="mini" onClick={() => setVisible(true)}>
            Login
          </Button>
          <Mask visible={visible} onMaskClick={() => setVisible(false)}>
            <div className={styles.overlayContent} onClick={() => console.log('123')}>
              <div className={styles.container}>
                <div>use apple id login</div>
                <Input className={styles.ipt} placeholder="请输入内容" value={form.values.mobile} onChange={form.handleChange} />
                <Input
                  className={styles.ipt}
                  placeholder="请输入内容"
                  value={form.values.password}

                  // onChange={val => {
                  //   setValue(val)
                  // }}
                ></Input>
                <Button color="danger" size="small" onClick={form.handleSubmit}>
                  Primary
                </Button>
              </div>
            </div>
          </Mask>
        </div>
        <div className={styles.title}>浏览</div>
      </nav>
      <Swiper indicator={() => null} className={styles.slider1} autoplay allowTouchMove={false} ref={ref} loop>
     
 {albumItem2}

      </Swiper>
      {/* 下面这个可以用哪数组渲染！ */}
      <div className={styles.explore}>
        <header>探索更多</header>
        <div className={styles.category1}>
          <div className={styles.category} onClick={change} index="category">
            按类别浏览
            <RightOutline className={styles.arr1} />
          </div>
          <div className={styles.category}>
            减压
            <RightOutline className={styles.arr1} />
          </div>
          <div className={styles.category}>
            排行榜
            <RightOutline className={styles.arr1} />
          </div>
        </div>
      </div>
    </>
  )
}
