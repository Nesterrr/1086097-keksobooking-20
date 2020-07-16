'use strict';

(function () {

  var PIN_SIZE = {
    width: 50,
    height: 70
  };

  var QUANTITY_OF_PINS = 8;

  var getAvatar = function (min, max) {
    return 'img/avatars/user0' + window.utils.getRandomFromInterval(min, max) + '.png';
  };

  var getTitle = function (array) {
    return window.utils.getRandomElement(array);
  };

  var getLocation = function (min, max, ymin, ymax) {
    return window.utils.getRandomFromInterval(min, max) - (PIN_SIZE.width / 2) + ', ' + (window.utils.getRandomFromInterval(ymin, ymax) - PIN_SIZE.height);
  };

  var LOCATIONMINMAX = {
    X: {
      MIN: 0,
      MAX: 1200
    },
    Y: {
      MIN: 130,
      MAX: 630
    }
  };

  var TITLES = [
    'Крутая хата',
    'Так себе уголок',
    'Уютное гнездышко',
    'Шикарное местечко',
    'Зачахлый домик',
    'Дешево и сердито',
    'Атасный вид',
    'Это не серьезно'
  ];

  var TYPES = [
    'palace',
    'flat',
    'house',
    'bungalo'
  ];

  var CHECKIN = [
    '12:00',
    '13:00',
    '14:00'
  ];

  var CHECKOUT = [
    '12:00',
    '13:00',
    '14:00'
  ];

  var FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];
  var DESCRIPTIONS = [
    'офигенный',
    'охрененный',
    'просто улёт'
  ];
  var PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];

  var getOffersOptions = function () {

    return {

      author: {
        avatar: getAvatar(1, 8)
      },

      offer: {
        title: getTitle(TITLES),
        address: getLocation(LOCATIONMINMAX.X.MIN, LOCATIONMINMAX.X.MAX, LOCATIONMINMAX.Y.MIN, LOCATIONMINMAX.Y.MIN),
        price: window.utils.getRandomFromInterval(1000, 10000),
        type: window.utils.getRandomElement(TYPES),
        rooms: window.utils.getRandomFromInterval(1, 4),
        guests: window.utils.getRandomFromInterval(1, 8),
        checkin: window.utils.getRandomElement(CHECKIN),
        checkout: window.utils.getRandomElement(CHECKOUT),
        feature: window.utils.getRandomArray(FEATURES),
        description: window.utils.getRandomElement(DESCRIPTIONS),
        photo: window.utils.getRandomArray(PHOTOS)
      },

      location: {
        x: window.utils.getRandomFromInterval(300, 900),
        y: window.utils.getRandomFromInterval(130, 630)
      }
    };
  };

  var getPinsMap = function () {
    var pins = [];

    for (var i = 0; i < QUANTITY_OF_PINS; i++) {
      pins.push(getOffersOptions());
    }
    return pins;
  };


  window.data = {
    getPinsMap: getPinsMap(),
    LOCATIONMINMAX: LOCATIONMINMAX,
  };

})();
