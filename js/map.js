'use strict';

(function () {

  var map = document.querySelector('.map');
  var mapPinMain = document.querySelector('.map__pin--main');
  var filterContainer = map.querySelector('.map__filters-container');

  var pinsList = document.querySelector('.map__pins');

  var mapPinTemplate = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');


  mapPinMain.addEventListener('mouseup', leftMouseButtonPress);

  var LEFT_MOUSE_BUTTON = 0;

  function leftMouseButtonPress(e) {
    if (e.button === LEFT_MOUSE_BUTTON) {
      toggle(false);
    }
  }

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      toggle(false);
    }
  });

  var addPinHandlers = function () {
    var mapPinsItems = document.querySelectorAll('button.map__pin:not(.map__pin--main)');

    var openCard = function (item, pin) {

      item.addEventListener('click', function () {

        for (var j = 0; mapPinsItems.length > j; j++) {
          mapPinsItems[j].classList.remove('map__pin--active');
        }
        item.classList.add('map__pin--active');
        map.appendChild(window.card.getNewCard(pin), filterContainer);
        var mapCards = document.querySelectorAll('.popup');

        if (mapCards.length > 1) {
          mapCards[0].remove();
        }

      });
    };

    for (var i = 0; i < mapPinsItems.length; i++) {
      openCard(mapPinsItems[i], window.data.getPinsMap[i]);
    }
  };

  var deactivationPin = function (evt, newset) {
    var mapPinsItems = document.querySelectorAll('button.map__pin:not(.map__pin--main)');
    var mapCard = document.querySelector('.map__card');

    mapPinMain.removeEventListener('mousedown', window.move.mouseMove);

    mapPinMain.addEventListener('mouseup', leftMouseButtonPress);
    mapPinMain.remove();
    map.appendChild(mapPinMain, filterContainer);
    mapPinMain.style = 'pointer-events: auto; left: 570px; top: 375px;';
    window.form.addressArrival.value = mapPinMain.offsetLeft + ', ' + mapPinMain.offsetTop;

    if (evt.target === newset) {
      for (var j = 0; mapPinsItems.length > j; j++) {
        mapPinsItems[j].remove();
      }
    } else if (mapCard) {
      mapCard.remove();
    }
  };

  var getFilledPin = function (pin) {
    var newPinElement = mapPinTemplate.cloneNode(true);
    newPinElement.style = 'left: ' + pin.location.x + 'px' + '; ' + 'top: ' + pin.location.x + 'px' + ';';
    newPinElement.querySelector('img').src = pin.author.avatar;
    newPinElement.querySelector('img').alt = pin.offer.title;
    return newPinElement;
  };

  var renderPins = function (pins) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < pins.length; i++) {
      fragment.appendChild(getFilledPin(pins[i]));
      pinsList.appendChild(fragment);
    }
    return fragment;
  };

  var removePinActive = function (evt, close) {
    var mapPinsItems = document.querySelectorAll('button.map__pin:not(.map__pin--main)');

    if (evt.target === close) {
      for (var j = 0; mapPinsItems.length > j; j++) {
        mapPinsItems[j].classList.remove('map__pin--active');
      }
    }
  };


  var toggle = function (disabled) {
    window.form.activationForm(disabled);
    renderPins(window.data.getPinsMap);
    addPinHandlers();
    window.form.fullFieldPAdress(mapPinMain);
    window.move.pinMainMove();

    window.form.deactivationMap();
  };

  window.map = {
    deactivationPin: deactivationPin,
    removePinActive: removePinActive,
    leftMouseButtonPress: leftMouseButtonPress
  };

})();
