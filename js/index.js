/**
 * jq ready
 */
$(function() {
  $('#app').fullpage({
    'verticalCentered': true,
    'controlArrows': false,
    'sectionsColor': ['red', 'blue', 'yellow', 'indigo'],
    'css': true,
    'navigation': true,
    // 'navigationColor': '#000',
    'navigationTooltips': ['one', 'two', 'three', 'four'],
    'scrollingSpeed': 600
  });

});