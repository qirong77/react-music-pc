import http from "../../utils/request"
// 获取搜索结果
export const getSearchResults = (value) => {
    return async dispatch => {
      const { data: res } = await http.get(`/search?keywords=${value}&limit=3`)
      dispatch(setSearchResults(res.result.songs))
    }
  }
  export const setSearchResults = songList => {
    return {
      type: 'home/search',
      payload: songList
    }
  }