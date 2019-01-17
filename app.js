'use strict';
//global variables

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var myTable = document.getElementById('table');
var submissionForm =
document.getElementById('newstoressubmissionForm');

// make constructor for stores
var allLocations = [];

function Locations(locationsName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerCustomer) {
  this.locationsName = locationsName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.totalCookiesPerDay = [];
  this.randomCustomersPerHour = [];
  this.totalCookiesPerHour =[];
  this.totalDailySales = 0;
  this.index = allLocations.push(this) - 1;
}

//create store instances
new Locations('1st and Pike', 23, 65, 6.3);
new Locations('Seatac Airport', 3, 24, 1.2);
new Locations('Seattle Center', 11, 38, 3.7);
new Locations('Capitol Hill', 20, 38, 2.3);
new Locations('Alki', 2, 16, 4.6);

console.log(allLocations);
// cal random customer per hour
Locations.prototype.calcRandomCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour);
  }
}

// // cal total cookies per day
Locations.prototype.calcTotalDailySales = function(){
  this.calcRandomCustomersPerHour();
  for (var i = 0; i < hours.length; i++){
    this.totalCookiesPerHour.push(Math.ceil(this.randomCustomersPerHour[i] * this.averageCookiesPerCustomer));
    this.totalDailySales += this.totalCookiesPerHour[i];
  }
}

// render function
Locations.prototype.render = function(){
  this.calcTotalDailySales();
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.locationsName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);
  myTable.appendChild(trEl);
}

//functions for header row
function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  myTable.appendChild(trEl);
}

function renderAlllocations(){
  for (var i = 0; i < alllocations.length; i++) {
    allLocations[i].render();
  }
};

function makeFooterRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  //below calculates total for all stores per hour
  var dailyTotalAllLocations = 0;
  for (var i = 0; i < hours.length; i++) {
    var total = 0;
    for (var j = 0; j < allLocations.length; j++){
      total += allLocations[j].totalCookiesPerHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = total;
    trEl.appendChild(thEl);
    dailyTotalAllLocations += total;
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = dailyTotalAllLocations;
  trEl.appendChild(thEl);
  myTable.appendChild(trEl);
}

makeHeaderRow();
for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
}
makeFooterRow();
