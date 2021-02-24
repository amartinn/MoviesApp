const storageItemName = '_favorites'

const localStorageHelper = {
    addToFavorites: (movieId) => {
        const items = JSON.parse(localStorage.getItem(storageItemName))
        if (items === null) {
            localStorage.setItem(storageItemName,JSON.stringify([movieId]))
        } else {
            items.push(movieId)
            localStorage.setItem(storageItemName, JSON.stringify(items))
        }
    },
    removeFromFavorites: (movieId) => {
        const items = JSON.parse(localStorage.getItem(storageItemName))
        const itemIndex = items.indexOf(movieId);
        items.splice(itemIndex, 1);
        localStorage.setItem(storageItemName, JSON.stringify(items))
    },
    isFavorite : (movieId) =>{
        const items = JSON.parse(localStorage.getItem(storageItemName))
        if(items == null) return false;
        return items.indexOf(movieId) !== -1;
    },
    getFavoriteMovies: () => (
        JSON.parse(localStorage.getItem(storageItemName))
    )
}
export default localStorageHelper