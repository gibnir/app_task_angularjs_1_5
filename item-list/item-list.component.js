'use strict';

/**
* @class Ball
* Represents lottery ball
*/
class Ball {

  /**
  *
  */
  constructor(min, max) {
    this.value = 0;
    this.min = min;
    this.max = max;
  }
  
  /**
  *
  */
  setRandomValue() {
    var min_number = Math.ceil(this.min);
    var max_number = Math.floor(this.max);
    this.value = Math.floor(Math.random() * (max_number - min_number)) + min_number;
  }
}

/**
 * Get balls collection of SAME TYPE
 * @param {object} balls configuration object
 * @return {array} balls array
 */
 function Balls(config) {
  //console.log('[Balls] config', config);
  var balls = [];
  let {amount_to_draw, min_number, max_number } = config;
  
  while(amount_to_draw--) {
    let ball = new Ball(min_number, max_number);
    balls.push(ball);
  }
  
  return balls;
}


/**
 * Get balls groups collection with regular and strong balls
 * @param {object} configuration
 * @return {array} result [regular, strong]
 */
 function Row(data) {
  //console.log('Row data', data);
  var regular = new Balls(data.numbers_range);
  var strong = new Balls(data.strong_number_range);
  
  return [regular, strong];
}

// ROW OUTPUT: [ [regular, regular, regular],[strong, strong] ]

angular.
module('itemList').
component('itemList', {
  templateUrl: 'item-list/item-list.template.html',
  controller: ['Item',
  function PhoneListController(Item) {
    var self = this;
    self.items = [];  // placeholder for items
    
    var items = Item.query();
    
    // set controller items
    items.$promise.then((res) => {
      //console.log('feed', res.feed);
      
      // clone items
      self.items = Array.from(res.feed);
      
      // create balls row for each feed item
      for (let item of self.items) {
        item.balls = new Row(item);
      }      
    })

    /**
     * Play - roll random numbers for each row
     * @param {number} - index of item in items collection
     */
     self.play = function(index) {
      var items = self.items[index];      
      
      // flatten balls collection
      var balls = items.balls[0].concat(items.balls[1]);
      
      // set random value for each ball
      for (let ball of balls) {
        ball.setRandomValue();
      }
    }

  }]
});