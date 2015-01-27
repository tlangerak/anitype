/**
 * Register your submission and choose a character
 * For more information check out the documentation
 * http://anitype.com/documentation
 */
Anitype.register('L', {

  // Enter your name
  author: 'Thomas Langerak',

  // Enter a personal website, must have http
  website: 'http://thomaslangerak.nl/',

  // Make your animation here
  construct: function(two, points) {
  
    // Reference to instance
    var anitype = this; //create an object?

    // Create a Two.Polygon
    var polygon = anitype.makePolygon(points); //make polygon
    var pv = polygon.vertices; //create a vertice for both  lines
    _.each(pv, function(vert){
      vert.oX = vert.x; //create x value
      vert.oY = vert.y; //create y value
    });
    
    
    // Set an initial state
    var scale = 1; //????
    
    // Create the animation via a tween
    anitype.addTween(polygon, {
      to: { value: scale }, //no clue yet
      easing: Anitype.Easing.Bounce.InOut, //easing (Linear, Circular, Elastic.... In, Out, InOut (graph form))
      duration: 0, // Value from 0 - 1 how lang the animation takes
      start: 0,        // Value from 0 - 1 when the animation starts
      update:function(){ //update the fertices
      pv[2].x = (pv[0].oX - pv[2].oX) * this.value + pv[2].oX; //ver
      pv[2].y = (pv[0].oY - pv[2].oY) * this.value + pv[2].oY;
      
    }
    });

    anitype.addTween(polygon, {
      to: { value: scale },
      easing: Anitype.Easing.Bounce.Out,
      duration:0.9, // Value from 0 - 1
      start: 0,        // Value from 0 - 1
      update:function(){
      pv[0].x = (pv[2].oX - pv[0].oX) * this.value + pv[0].oX;
      pv[0].y = (pv[2].oY - pv[0].oY) * this.value + pv[0].oY;
    }
    })  


  
    // Return your polygon wrapped in a group.
    return two.makeGroup(polygon);

  }

});