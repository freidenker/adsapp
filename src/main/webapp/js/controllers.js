angular
  .module('adsApp.controllers')
  .controller('CarouselCtrl', function ($scope) {
/*    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    slides.push({ image: 'images/1.jpg', text: '亲爱的你，情人节快乐' });
    slides.push({ image: 'images/2.jpg', text: 'darling, Merry Christmas' }); */
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;


  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'images/' + (currIndex+1)+'.png',
      text: ['Nice image','Awesome photograph'][slides.length % 2],
      id: currIndex++
    });
  };
//  slides.push({ image: 'images/1.jpg', text: '亲爱的你，情人节快乐', id: 0 });
//  slides.push({ image: 'images/2.jpg', text: 'merry Christmas', id: 1 });


  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 2; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array; }
  });
