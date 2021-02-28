const isLocalStorageAvailable = typeof localStorage !== 'undefined'

const localStorageHelper = {
    setItem: (key, value) => {

        if (!isLocalStorageAvailable) {
            throw Error('localstorage is not available')
        }
        localStorage.setItem(key, value)

    },
    getItem: (key) => {
        if (!isLocalStorageAvailable) {
            throw Error('localstorage is not available')
        }
        return localStorage.getItem(key)
    }
}



export default localStorageHelper