// -------------------------------------------- //
// ---------Chpater Four examples---------------//
// -------------------------------------------- //
$(function() {

  // Init Controller
  var scrollMagicController = new ScrollMagic.Controller();

  //creating the animation that will trigger on certain "scene" moments
  //according to the scrollMagic plugin.
  var tween = TweenMax.to("#animation", 0.5, {
    backgroundColor: 'rgb(255, 39, 46)',
    scale: 7,
    rotation: 360

  });

  // Create the Scene and trigger when visible with ScrollMagic
  var scene = new ScrollMagic.Scene({
    triggerElement: '#scene',
    offset: 150 // offset the trigger 150px below #scene's top
  })
  .setTween(tween)
  .addTo(scrollMagicController);

});
