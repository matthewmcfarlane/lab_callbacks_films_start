const { prototype } = require("mocha");

const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.allTitles = function(){
  const allTitles = this.films.map(title => this.films.title);
};

Cinema.prototype.findByTitle = function(title){
  const result = this.films.find(film => film.title === title);
  return result
}

Cinema.prototype.filterByGenre = function(genre){
  const result = this.films.filter(film => film.genre === genre);
  return result
}

Cinema.prototype.checkFilmsByYear = function(year){
  const result = this.films.some(film => film.year === year);
  return result
}


Cinema.prototype.checkIfAllOverLength = function (length){
  const result = this.films.every(film => film.length > length);
  return result
}


Cinema.prototype.totalRunTimeAllFilms = function(){
  let result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
  return result
}

module.exports = Cinema;
