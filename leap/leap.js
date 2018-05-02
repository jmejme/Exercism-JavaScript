// LEAP YEAR
/* on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
  unless the year is also evenly divisible by 400
*/

var Year = function (year) {
 this.year = year;
};

Year.prototype.isLeap = function () {
  // Condensed
  // return this.year%4==0 && (this.year%100!=0 || this.year%400==0);
 
  if ( this.year % 400 == 0 ) {
    return true;
  } else if ( ( this.year % 4 == 0 ) && ( this.year % 100 != 0 ) ) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
