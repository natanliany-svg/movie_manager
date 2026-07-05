
import * as fileService from `./file_service.js`
import * as validator from `../utils/validator.js`

export async function getAllMovies() {
    try {
        const movies = await fileService.readTheFile()
        return movies 
    } catch (error) {
        throw new Error(`ERROR , ${error.message}`);
    }
}



export async function createMovie(title, genre, year, rating) {
    try {
        validator.validateMovieData(title, year, rating)
        const movies = await fileService.readTheFile()
        const newId = movies.length === 0 ? 1 : Math.max(...movies.map(m => m.id)) + 1
        
        const newMovie = {
            id: newId,
            title: title,
            genre: genre,
            year: year,
            rating: rating
        }

        movies.push(newMovie)

        await fileService.writeTheFile(movies)
        return newMovie

    } catch (error) {
        throw error
    }
}





export async function deleteMovie(id) {
    try {
        const movies = await fileService
    }    
}


















// מבנה הפונקציה הראשונה 
// async function someLogic(){
//     const movies = await fileService.readTheFile();
//     await fileService.writeTheFile(movies)
// }

// export async function getAllMovies() {
//     try{
//         const movies = await readTheFile()
//         return movies
//     }
//     catch(error){
//         throw new Error (`ERROR`, error.message)
//     };
    
    
// }
