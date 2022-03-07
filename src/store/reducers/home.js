const initialState = {
    //! 注意! 需要渲染的时候直接给数组
    songList:[]
}
export const searchResult = (state=initialState,action) => {
    const {type,payload} = action
    switch (type) {
        case 'home/search':
            return {
                ...state,
                songList: [...payload]
            }
        default:return state
    }
}