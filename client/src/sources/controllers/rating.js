class Rating {

    updateRating(movieId, rating) {
        return new Promise((resolve, reject) => {
            resolve({
                movieId,
                rating
            })
        })
    }
}

export default Rating