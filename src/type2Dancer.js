var makeType2Dancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)

};


makeType2Dancer.prototype = Object.create(makeDancer.prototype);
makeType2Dancer.prototype.constructor = makeType2Dancer;

var oldStep = makeDancer.prototype.step;

makeType2Dancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this.step);

  // console.log(oldStep);
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeToggle(); //change this for different functionality
};