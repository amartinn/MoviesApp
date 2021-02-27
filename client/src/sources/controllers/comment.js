
class Comment{

    updateComment(movieId,comment){
        
        return new Promise((resolve, reject) => {
            resolve({movieId,comment})
        })
    }
}

export default Comment