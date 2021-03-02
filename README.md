# Movies APP

## :point_right: Project Introduction :point_left:
App that let you search,rate and add your favorite movies.
## Author
- LinkedIn: [@Martin Angelov](https://www.linkedin.com/in/martin-angelov-6968ab190/)


## Table of Content
1. [Stack](https://github.com/amartinn/MoviesApp#stack)
2. [Routing](https://github.com/amartinn/MoviesApp#routing)
3. [Backend endpoints](https://github.com/amartinn/MoviesApp#backend-endpoints)
## Stack
Main libraries:
- React
- Redux
- react-router
- material-ui
- mongoose
- express

## Routing

Route | Description
------|------------
/ | Home Page
/search/:query | Search Page
/movies/:id | details page

## Backend Endpoints

**backend api is successfully deployed at : https://movies-appps.herokuapp.com**

**Movies:**

**Add movie to favorites:**

method: **POST** </br>
endpoint: /api/movies/add </br>
request :  </br>
```
{
      movieId: string,
      userId: string
}
```
response: The user's movie list

**Remove movie from favorites:**

method: **DELETE** </br>
endpoint: /api/movies/remove </br>
request :  </br>
```
{
      movieId: string,
      userId: string
}
```
response: The user's movie list

**Get movies:**

method: **GET** </br>
endpoint: /api/movies </br>
query: </br>
```
{
      userId: string,
}
```
response: The user's movie list


**Comments:**

**Create comment:**

method: **POST** </br>
endpoint: /api/comments/create </br>
request :  </br>
```
{
    movieId: string,
    userId: string,
    comment: String //the text  
}
```
response: Created comment

**Update comment:**

method: **PUT** </br>
endpoint: /api/comments/update </br>
request :  </br>
```
{
    movieId: string,
    userId: string
    comment: String //the text
}
```
response: Updated comment

**Get comments:**

method: **GET** </br>
endpoint: /api/comments </br>
query: </br>
```
{
    userId: string,
}
```
response: The list of comments for that user 





**Ratings:**

**Create rating:**

method: **POST** </br>
endpoint: /api/ratings/create </br>
request :  </br>
```
{
    movieId: string,
    userId: string,
    rating: number // total number of stars 
}
```
response: Created rating

**Update rating:**

method: **PUT** </br>
endpoint: /api/ratings/update </br>
request :  </br>
```
{
    movieId: string,
    userId: string
    rating: number // total number of stars 
}
```
response: Updated rating

**Get ratings:**

method: **GET** </br>
endpoint: /api/ratings </br>
query: </br>
```
{
     userId: string,
}
```
response: The list of ratings for that user



**User:**

**Create user:**

method: **POST** </br>
endpoint: /api/user </br>
request : none
response: Created User



