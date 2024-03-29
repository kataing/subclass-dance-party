var makeTwinklyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('twinkle');
};


makeTwinklyDancer.prototype = Object.create(makeDancer.prototype);
makeTwinklyDancer.prototype.constructor = makeTwinklyDancer;

makeTwinklyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this.step);

  // console.log(oldStep);
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  this.$node.fadeToggle();
};