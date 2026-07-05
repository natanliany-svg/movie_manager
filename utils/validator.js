



export function validateMovieData(title, year, rating){
    if (!title || title.trim() === ''){
        throw new Error("The name movie cant be empty !!! ");        
    }

    const currentYear = new Date().getFullYear()
    if (year <= 1900 || year > currentYear) {
        throw new Error(`Tha year not in rang `);
        
    }
    if (rating < 0 || rating > 10) {
        throw new Error(`The rating not in rang `);
        
    }
}






























