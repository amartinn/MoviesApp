import LS from './localStorageHelper'

const key = '_userId'
export const getUserId = () => {
    return LS.getItem(key)
}
export const setUserId = (id) => {
    LS.setItem(key,id)
}