describe('twinklyDancer', function() {
  var twinklyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    twinklyDancer = new makeTwinklyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(twinklyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a fadeToggle function that makes its node twinkle', function() {
    sinon.spy(twinklyDancer.$node, 'fadeToggle');
    twinklyDancer.step();
    expect(twinklyDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(twinklyDancer, 'step');
      expect(twinklyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(twinklyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(twinklyDancer.step.callCount).to.be.equal(2);
    });
  });
});