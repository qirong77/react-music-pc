const initialState = {
    //! 注意! 需要渲染的时候直接给数组
    album:[]
}
export const newAlbum = (state=initialState,action) => {
    const {type,payload} = action
    switch (type) {
        case 'browser/album':
            return {
                ...state,
                album: [...payload]
            }
        default:return state
    }
}