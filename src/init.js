$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  
  
  $('.lineUpButton').on('click', function(event) {
    for(var i = 0; i<window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
  
  $('.swapDancersButton').on('click', function(event) {
    
    
    console.log(window.dancers[0].top);
    if(window.dancers.length % 2 === 0) {
      for(var i = 0; i<window.dancers.length; i+=2) {
        var top1 = window.dancers[i].top;
        var left1 = window.dancers[i].left;
        var top2 = window.dancers[i+1].top;
        var left2 = window.dancers[i+1].left;
        window.dancers[i+1].top = top1;
        window.dancers[i+1].left = left1;
        window.dancers[i].top = top2;
        window.dancers[i].left = left2;
      
        var styleSettings1 = {
          top: window.dancers[i].top,
          left: window.dancers[i].left
        };
        var styleSettings2 = {
          top: window.dancers[i+1].top,
          left: window.dancers[i+1].left
        };
        window.dancers[i].$node.css(styleSettings2);
        window.dancers[i+1].$node.css(styleSettings1);
      }
    } else {
      alert('Sorry, every dancer needs a partner. Make another dancer.')
    }
    
  })
  
});

