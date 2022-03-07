import http from '../../utils/request'

export const getCategory = () => {
  return async dispatch => {
    const { data: res } = await http.get('/dj/catelist')
    dispatch(setCategory(res.categories))
  }
}
// 虽然是请求不用到reducer，但是保存到redux就需要reducer
export const setCategory = categories => {
  return {
    type: 'category/',
    payload: categories 
  }
}
