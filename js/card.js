'use strict';

(function () {

  var cardTemplate = document.querySelector('#card').content.querySelector('.map__card');

  var getPhotoAppartamet = function (photos) {

    var cardPhotoTemplate = cardTemplate.querySelector('.popup__photos').querySelector('img');
    var fragment = document.createDocumentFragment();

    for (var j = 0; j < photos.length; j++) {
      var newCardPhoto = cardPhotoTemplate.cloneNode(true);
      newCardPhoto.src = photos[j];
      fragment.appendChild(newCardPhoto);
    }
    return fragment;
  };

  var getFeatures = function (features) {
    var cardTypeTemplate = cardTemplate.querySelector('.popup__feature');

    var fragment = document.createDocumentFragment();
    for (var i = 0; i < features.length; i++) {
      var newCardType = cardTypeTemplate.cloneNode();
      newCardType.className = 'popup__feature' + ' ' + 'popup__feature--' + features[i];
      fragment.appendChild(newCardType);
    }
    return fragment;
  };
  var getTypeAppartamet = function (type) {

    switch (type) {
      case 'palace':
        type = 'Дворец';
        break;
      case 'flat':
        type = 'Комната';
        break;
      case 'house':
        type = 'Дом';
        break;
      case 'bungalo':
        type = 'Бунгало';
        break;
    }
    return type;
  };

  var getNewCard = function (offer) {

    var newCardTemplate = cardTemplate.cloneNode(true);

    newCardTemplate.querySelector('.popup__title').textContent = offer.offer.title;
    newCardTemplate.querySelector('.popup__text--address').textContent = offer.offer.address;
    newCardTemplate.querySelector('.popup__text--price').textContent = offer.offer.price + ' ₽/ночь';
    newCardTemplate.querySelector('.popup__type').textContent = getTypeAppartamet(offer.offer.type);

    newCardTemplate.querySelector('.popup__text--capacity').textContent = offer.offer.rooms + ' комнаты для ' + offer.offer.guests + ' гостей';
    newCardTemplate.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.offer.checkin + ' выезд до ' + offer.offer.checkout;

    var listFeatures = newCardTemplate.querySelector('.popup__features');
    newCardTemplate.replaceChild(listFeatures.cloneNode(), listFeatures);
    var listNewFeatures = newCardTemplate.querySelector('.popup__features');
    listNewFeatures.appendChild(getFeatures(offer.offer.feature));

    newCardTemplate.querySelector('.popup__description').textContent = offer.offer.description;

    var listPhotos = newCardTemplate.querySelector('.popup__photos');
    newCardTemplate.replaceChild(listPhotos.cloneNode(), listPhotos);
    var listNewPhotos = newCardTemplate.querySelector('.popup__photos');
    listNewPhotos.appendChild(getPhotoAppartamet(offer.offer.photo));

    newCardTemplate.querySelector('.popup__avatar').src = offer.author.avatar;

    var close = newCardTemplate.querySelector('.popup__close');

    var onPopupEscPress = function (evt) {
      window.utils.isEscPress(evt, closePopup);
    };

    var closePopup = function () {
      newCardTemplate.remove();
      window.map.removePinActive(close);
      document.removeEventListener('keydown', onPopupEscPress);
    };

    document.addEventListener('keydown', onPopupEscPress);

    close.addEventListener('keydown', function (evt) {
      window.utils.isEnterPress(evt, closePopup);
    });

    close.addEventListener('click', function () {
      closePopup();
    });

    return newCardTemplate;
  };

  window.card = {
    getNewCard: getNewCard,
  };
})();
