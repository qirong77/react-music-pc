import http from '../../utils/request'

export const getNewAlbum = () => {
  return async dispatch => {
    const { data: res } = await http.get('/album/newest')
    dispatch(setNewAlbum(res.albums))
  }
}
// 虽然是请求不用到reducer，但是保存到redux就需要reducer
export const setNewAlbum = newAlbum => {
  return {
    type: 'browser/album',
    payload: newAlbum
  }
}
