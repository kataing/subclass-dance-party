var makeSlidyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slide');
};


makeSlidyDancer.prototype = Object.create(makeDancer.prototype);
makeSlidyDancer.prototype.constructor = makeSlidyDancer;

makeSlidyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this.step);
  // console.log(oldStep);
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.slideUp();
  // this.$node.slideDown(); //change this for different functionality
  // this.$node.toggle();
  // var styleSettings = {
  //   background: solid red
  // };
  // this.$node.css(styleSettings);
  var randPosition1 = 1450*Math.random();
  var randPosition2 = 1450*Math.random();
  var randPosition3 = 1050*Math.random();
  var randPosition4 = 1050*Math.random();
  // var randDirection = directions[Math.floor(Math.random()*2)]
  this.$node.animate({
    left: `${randPosition1}px`,
    right: `${randPosition2}px`,
    top: `${randPosition3}px`,
    bottom: `${randPosition4}px`,
    height: '10px',
    width: '10px',
    opacity: '.66' //
  });
};

//instead of px , use %
// makeSlidyDancer.prototype.colorizer = function() {

// };
