// Video //

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage']
	});
   
    var landingPageVideo = videojs('landing-page-video', {
    controls: false,
    autoplay: true,
    preload: true,
    loop: true,
  });
    
//-------------------------------------------------------------------------    
// Slider //    


( function( window ) {
'use strict';

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}
    
//-------------------------------------------------------------------------    
// PhotoStack //    

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

new Photostack( document.getElementById( 'photostack-3' ), {
callback : function( item ) {
}
});


//-------------------------------------------------------------------------    
// TIDE //
      
var dataProvider = [
  {
    "time": "1 AM",
    "meters": 0.18,
    "name": "LOW"
  },
  {
    "time": "7 AM",
    "meters": 1.03,
    "name": "HIGH"
  },
  {
    "time": "12 PM",
    "meters": 0.6,
    "name": "LOW"
  },
  {
    "time": "7 PM",
    "meters": 1.66,
    "name": "HIGH"
  }
];
var guideLabel = "Now - " + 2.4 + "ft"
var guideCategory = "12 PM"
var balloonText = "[[value]] meters";
var categoryFieldName = 'time';
var valueFieldName = 'meters';

var chart = AmCharts.makeChart("chartdiv", tideChartOptions());

function tideChartOptions() {
 
  return {
    "type": "serial",
    "categoryField": categoryFieldName,
    "addClassNames": true,
    "autoMargins": false,
    "marginBottom": 30,
    "marginLeft": -10,
    "marginRight": -10,
    "marginTop": 0,
    "panEventsEnabled": false,
    "sequencedAnimation": false,
    "backgroundAlpha": 0, // will be 0 to not have a background
    "backgroundColor": "#111111",
    "fontFamily": "monda",
    "handDrawScatter": 0,
    "handDrawThickness": 0,
    "precision": 2,
    "tapToActivate": false,
    "touchClickDuration": 2,
    "categoryAxis": {
      "color": "#ffffff",
      "inside": false,
      "guides": [{
        "category": guideCategory,
        "above": true,
        "lineColor": "#FFFFFF",
        "expand": true,
        "label": guideLabel,
        "inside": true,
        "position": "bottom",
        "labelRotation": 90,
        "lineThickness": 3
      }]
    },
    "chartCursor": {
      "enabled": true,
      "balloonPointerOrientation": " vertical",
      "bulletsEnabled": true,
      "bulletSize": 0,
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0.1,
      "cursorColor": "#FFFFFF",
      "fullWidth": true,
      "graphBulletAlpha": 1,
      "graphBulletSize": 1,
      "leaveAfterTouch": false,
      "leaveCursor": true,
      "oneBalloonOnly": true,
      "selectionAlpha": 1,
      "tabIndex": 0,
      "valueLineAlpha": 0.19,
      "zoomable": false,
      "valueZoomable": false
    },
    "graphs": [
      {
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletBorderColor": "#333",
        "bulletColor": "#FFFFFF",
        "bulletHitAreaSize": 10,
        "bulletSize": 6,
        "cursorBulletAlpha": 0,
        "fillAlphas": 1,
        "fillColors": ["#63C9F0", "#3498DB"],
        "fixedColumnWidth": 3,
        "fontSize": 15,
        "gapPeriod": 10,
        "id": "AmGraph-1",
        "labelOffset": 200,
        "legendAlpha": 0,
        "lineColor": "#57D0F9",
        "lineThickness": 4,
        "markerType": "circle",
        "maxBulletSize": 6,
        "minBulletSize": 6,
        "negativeFillColors": "#38D1E5",
        "negativeLineColor": "#57D0F9",
        "periodSpan": 0,
        "showAllValueLabels": true,
        "showBulletsAt": "high",
        "showHandOnHover": true,
        "title": "graph 1",
        "type": "smoothedLine",
        "balloonText": balloonText,
        "valueField": valueFieldName,
      }
    ],
    "valueAxes": [
      {
        "id": "ValueAxis-1",
        "autoGridCount": false,
        "axisThickness": 0,
        "boldLabels": true,
        "centerLabels": true,
        "gridThickness": 0,
        "minHorizontalGap": 3,
        "minVerticalGap": 19
      }
    ],
    "balloon": {
      "borderAlpha": 0,
      "borderColor": "#C96DD8",
      "color": "#1A1A1A",
      "cornerRadius": 3,
      "fillAlpha": 0.95,
      "fixedPosition": false,
      "fontSize": 15,
      "offsetX": 10,
      "offsetY": 10,
      "pointerWidth": 3,
      "shadowAlpha": 0,
      "shadowColor": "#FFFFFF",
      "showBullet": true,
      "verticalPadding": 10
    },
    "dataProvider": dataProvider
  }
}    

//-------------------------------------------------------------------------
// Font Animation //    
    
$('.header').textillate({
  selector: '.texts', // the default selector to use when detecting multiple texts to animate
  loop: true,
  minDisplayTime: 2000, // sets the minimum display time for each text before it is replaced
  initialDelay: 0, // sets the initial delay before starting the animation // (note that depending on the in effect you may need to manually apply
  autoStart: true,
  inEffects: [], // custom set of 'in' effects. This effects whether or not the // character is shown/hidden before or after an animation
  outEffects: [ 'tada' ],

  // in animation settings
  in: {
    effect: 'fadeInDownBig',
    delayScale: 1.5,
    delay: 50, // set the delay between each character
    sync: false, // set to true to animate all the characters at the same time
    shuffle: false, // randomize the character sequence
    reverse: false, // reverse the character sequence
    callback: function () {} // callback that executes once the animation has finished
  },

  // out animation settings.
  out: {
    effect: 'tada',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'char'
});
    
$('.header2').textillate({
  selector: '.texts',  // the default selector to use when detecting multiple texts to animate
  loop: true,
  minDisplayTime: 4000, // sets the minimum display time for each text before it is replaced
  initialDelay: 0,
  autoStart: true,
  inEffects: [],  // custom set of 'in' effects. This effects whether or not the // character is shown/hidden before or after an animation
  outEffects: [ 'tada' ],

  // in animation settings
  in: {
    effect: 'fadeInDownBig',
    delayScale: 2,
    delay: 50, // set the delay between each character
    sync: false, // set to true to animate all the characters at the same time
    shuffle: false,
    reverse: false, // reverse the character sequence
    callback: function () {} // callback that executes once the animation has finished
  },

  // out animation settings.
  out: {
    effect: 'tada',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'char'
});       
   
$('.header3').textillate({
  selector: '.texts',  // the default selector to use when detecting multiple texts to animate
  loop: true,
  minDisplayTime: 4000, // sets the minimum display time for each text before it is replaced
  initialDelay: 0,
  autoStart: true,
  inEffects: [],  // custom set of 'in' effects. This effects whether or not the // character is shown/hidden before or after an animation
  outEffects: [ 'tada' ],

  // in animation settings
  in: {
    effect: 'fadeInDownBig',
    delayScale: 2,
    delay: 50, // set the delay between each character
    sync: false, // set to true to animate all the characters at the same time
    shuffle: false,
    reverse: false, // reverse the character sequence
    callback: function () {} // callback that executes once the animation has finished
  },

  // out animation settings.
  out: {
    effect: 'tada',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'char'
});    
    
$('.header4').textillate({
  selector: '.texts',  // the default selector to use when detecting multiple texts to animate
  loop: true,
  minDisplayTime: 4000, // sets the minimum display time for each text before it is replaced
  initialDelay: 0,
  autoStart: true,
  inEffects: [],  // custom set of 'in' effects. This effects whether or not the // character is shown/hidden before or after an animation
  outEffects: [ 'tada' ],

  // in animation settings
  in: {
    effect: 'rollIn',
    delayScale: 2,
    delay: 50, // set the delay between each character
    sync: false, // set to true to animate all the characters at the same time
    shuffle: false,
    reverse: false, // reverse the character sequence
    callback: function () {} // callback that executes once the animation has finished
  },

  // out animation settings.
  out: {
    effect: 'tada',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'char'
});        
 
    
$('.header5').textillate({
  selector: '.texts',  // the default selector to use when detecting multiple texts to animate
  loop: false,
  minDisplayTime: 4000, // sets the minimum display time for each text before it is replaced
  initialDelay: 20,
  autoStart: true,
  inEffects: [],  // custom set of 'in' effects. This effects whether or not the // character is shown/hidden before or after an animation

  // in animation settings
  in: {
    effect: 'rotateInDownLeft',
    delayScale: 5,
    delay: 50, // set the delay between each character
    sync: false, // set to true to animate all the characters at the same time
    shuffle: false,
    reverse: false, // reverse the character sequence
    callback: function () {} // callback that executes once the animation has finished
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'char'
}); 
    
$('.header6').textillate({
  selector: '.texts',  // the default selector to use when detecting multiple texts to animate
  loop: false,
  minDisplayTime: 4000, // sets the minimum display time for each text before it is replaced
  initialDelay: 20,
  autoStart: true,
  inEffects: [],  // custom set of 'in' effects. This effects whether or not the // character is shown/hidden before or after an animation

  // in animation settings
  in: {
    effect: 'rotateInDownLeft',
    delayScale: 5,
    delay: 50, // set the delay between each character
    sync: false, // set to true to animate all the characters at the same time
    shuffle: false,
    reverse: false, // reverse the character sequence
    callback: function () {} // callback that executes once the animation has finished
  },

  // callback that executes once textillate has finished
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')
  type: 'char'
});     
    
});






















