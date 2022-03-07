import styles from '../styles/Category.module.scss'
import { RightOutline } from 'antd-mobile-icons'
import { useEffect } from 'react'
import { getCategory } from '../store/actions/category'
import { useDispatch,useSelector } from 'react-redux'
export default function Category() {
  const dispatch = useDispatch()
  useEffect(()=> {
    const action = getCategory()
    dispatch(action)
  },[dispatch])
  const categories = useSelector(state => state.categories.categories)
  console.log(categories)
  const category = categories.map((item)=>(
        <div className={styles.category} index={item.name} key={item.name}>
          {item.name}
          <RightOutline className={styles.arr1} />
        </div>

  ))
  return (
    <>
      <div className={styles.category1}>
        {category}
      </div>
    </>
  )
}
