const initialState = {
    //! 注意! 需要渲染的时候直接给数组
    categories:[]
}
export const categories = (state=initialState,action) => {
    const {type,payload} = action
    switch (type) {
        case 'category/':
            return {
                ...state,
                categories: [...payload]
            }
        default:return state
    }
}