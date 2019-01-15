'use strict';


var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPikeUl = document.getElementById('firstAndPike');
var seatacAirportUl = document.getElementById('seatacAirport');
var seattleCenterUl = document.getElementById('seattleCenter');
var capitolHillUl = document.getElementById('capitolHill');
var alkiUl = document.getElementById('alki');

// First and Pike
var firstAndPike = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  randomCustomersPerHour: [],
  totalCookiesPerDay: 0,
  locationName: '1st and Pike',
  calcRandomCustomersPerHour: function() {
      for (var i = 0 ; i < hours.length; i++) {
        this.randomCustomersPerHour.push(getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour));
        console.log('number:', this.randomCustomersPerHour[i]);
      }
    },
    render: function() {
      for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        var cookiesPerHour = Math.floor(this.randomCustomersPerHour[i] * this.averageCookiesPerCustomer);
        liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies`;
        this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour;
        console.log('total:', this.totalCookiesPerDay);
        console.log('just assigned a value liEl', liEl);
        firstAndPikeUl.appendChild(liEl);
      }
      var liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
      firstAndPikeUl.appendChild(liEl);
    }
};
// Seatac Airport
var seatacAirport = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 25,
  averageCookiesPerCustomer: 1.2,
  randomCustomersPerHour: [],
  totalCookiesPerDay: 0,
  locationName: 'Seatac Airport',
  calcRandomCustomersPerHour: function() {
      for (var i = 0 ; i < hours.length; i++) {
        this.randomCustomersPerHour.push(getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour));
        console.log('number:', this.randomCustomersPerHour[i]);
      }
    },
    render: function() {
      for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        var cookiesPerHour = Math.floor(this.randomCustomersPerHour[i] * this.averageCookiesPerCustomer);
        liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies`;
        this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour;
        console.log('total:', this.totalCookiesPerDay);
        console.log('just assigned a value liEl', liEl);
        seatacAirportUl.appendChild(liEl);
      }
      var liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
      seatacAirportUl.appendChild(liEl);
    }
};

// // Seattle Center
var seattleCenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 3.7,
  randomCustomersPerHour: [],
  totalCookiesPerDay: 0,
  locationName: 'Seattle Center',
  calcRandomCustomersPerHour: function() {
      for (var i = 0 ; i < hours.length; i++) {
        this.randomCustomersPerHour.push(getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour));
        console.log('number:', this.randomCustomersPerHour[i]);
      }
    },
    render: function() {
      for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        var cookiesPerHour = Math.floor(this.randomCustomersPerHour[i] * this.averageCookiesPerCustomer);
        liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies`;
        this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour;
        console.log('total:', this.totalCookiesPerDay);
        console.log('just assigned a value liEl', liEl);
        seattleCenterUl.appendChild(liEl);
      }
      var liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
      seattleCenterUl.appendChild(liEl);
    }
};

// // capitol hill
var capitolHill = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  averageCookiesPerCustomer: 3.7,
  randomCustomersPerHour: [],
  totalCookiesPerDay: 0,
  locationName: 'Seattle Center',
  calcRandomCustomersPerHour: function() {
      for (var i = 0 ; i < hours.length; i++) {
        this.randomCustomersPerHour.push(getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour));
        console.log('number:', this.randomCustomersPerHour[i]);
      }
    },
    render: function() {
      for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        var cookiesPerHour = Math.floor(this.randomCustomersPerHour[i] * this.averageCookiesPerCustomer);
        liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies`;
        this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour;
        console.log('total:', this.totalCookiesPerDay);
        console.log('just assigned a value liEl', liEl);
        capitolHillUl.appendChild(liEl);
      }
      var liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
      capitolHillUl.appendChild(liEl);
    }
};


// Alki
var alki = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  averageCookiesPerCustomer: 4.6,
  randomCustomersPerHour: [],
  totalCookiesPerDay: 0,
  locationName: 'Alki',
  calcRandomCustomersPerHour: function() {
      for (var i = 0 ; i < hours.length; i++) {
        this.randomCustomersPerHour.push(getRandomInt(this.minCustomersPerHour, this.maxCustomersPerHour));
        console.log('number:', this.randomCustomersPerHour[i]);
      }
    },
    render: function() {
      for (var i = 0; i < hours.length; i++) {
        var liEl = document.createElement('li');
        var cookiesPerHour = Math.floor(this.randomCustomersPerHour[i] * this.averageCookiesPerCustomer);
        liEl.textContent = `${hours[i]}: ${cookiesPerHour} cookies`;
        this.totalCookiesPerDay = this.totalCookiesPerDay + cookiesPerHour;
        console.log('total:', this.totalCookiesPerDay);
        console.log('just assigned a value liEl', liEl);
        alkiUl.appendChild(liEl);
      }
      var liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
      alkiUl.appendChild(liEl);
    }
};

// // // --------- to generate the random for each time slot ----------
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var hourlyCustomers = getRandomInt(23, 65);
console.log('the random number created is: ', hourlyCustomers);

// ---------------
firstAndPike.calcRandomCustomersPerHour();
firstAndPike.render();
seatacAirport.calcRandomCustomersPerHour();
seatacAirport.render();
seattleCenter.calcRandomCustomersPerHour();
seattleCenter.render();
capitolHill.calcRandomCustomersPerHour();
capitolHill.render();
alki.calcRandomCustomersPerHour();
alki.render();
