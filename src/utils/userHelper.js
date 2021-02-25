

const itemKey = '_userId'
const isLocalStorageAvailable = typeof localStorage !== 'undefined'

const userHelper = {
    setUser : (userId) => {
       
        if(!isLocalStorageAvailable){
            throw Error('localstorage is not available')
        }
        localStorage.setItem(itemKey,userId)
        
    }, 
    getUser : () => {
        if(!isLocalStorageAvailable){
            throw Error('localstorage is not available')
        }
        return localStorage.getItem(itemKey)
    }
}



export default userHelper