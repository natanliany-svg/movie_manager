import js from 'readline-sync'
import * as movieService from './services/movie_service.js'
import * as fileService from './services/file_service.js'




function printMenu() {
    console.log(`
============================== 
Movie Collection Manager
============================== 

1. Show all movies 
2. Show by id 
3  Create new movie 
4. Delete movie 
5. Update rate 
6  Search by name 
7. Sort by genre 
8. Show statistics 
9. Exit  
==============================`);
}

async function startApp() {
    let isRunning = true

    while (isRunning) {
        printMenu()
        const choice = js.question("אנא בחר פעולה:")
        switch (choice) {
            case '1':
                try {
                    const movies = await movieService.getAllMovies()
                    console.log('the list of movies')
                    movies.forEach(movie => {
                        console.log(`מזהה:  ${movie.id} | שם הסרט: ${movie.title} | סגנון: ${movie.genre} | שנת יציאה: ${movie.year} | דירוג: ${movie.rating}`)
                        })
                    } catch(error) {
                        console.error('\n' + error.message);
                    }
                    break
                case '9':
                    console.log('good buy !');
                    isRunning = false 
                    break

                default:
                    console.log("please try again");
                        
                        
            
        }
    }
}

startApp()





