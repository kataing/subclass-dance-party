var makeSlidyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slide');
};


makeSlidyDancer.prototype = Object.create(makeDancer.prototype);
makeSlidyDancer.prototype.constructor = makeSlidyDancer;

makeSlidyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var randPosition1 = 90*Math.random();
  var randPosition2 = 90*Math.random();
  var randPosition3 = 90*Math.random();
  var randPosition4 = 75*Math.random();

  this.$node.animate({
    left: `${randPosition1}%`,
    right: `${randPosition2}%`,
    top: `${randPosition3}%`,
    bottom: `${randPosition4}%`,
    opacity: '.88' 
  });
};
