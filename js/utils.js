'use strict';

(function () {

  window.utils = {

    getRandomFromInterval: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    getRandomElement: function (array) {
      var item = array[Math.floor(Math.random() * array.length)];
      return item;
    },

    getRandomArray: function (array) {
      var copyArray = array.slice(0, window.utils.getRandomFromInterval(1, array.length));
      return copyArray;
    },

    isEscPress: function (evt, action) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        action();
      }
    },

    isEnterPress: function (evt, action) {
      if (evt.key === 'Enter') {
        action();
      }
    }

    // colorize: function (element, elementField, arrayColors) {
    //   element.addEventListener('click', function () {
    //     var color = getRandElement(arrayColors);
    //     if (element.tagName.toLowerCase() === 'div') {
    //       element.style.background = color;
    //       elementField.value = color;
    //     } else {
    //       element.style.fill = color;
    //       elementField.value = color;
    //     }
    //   });
    // }

  };

})();