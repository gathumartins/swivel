$(document).ready(function() { 
    var video = document.getElementById("eclecticsVideo");

    // Get the button
    var btn = document.getElementById("myVidBtn");
    
    // Pause and play the video, and change the button text
    function vidFunction() {
        if (video.play) {
            video.pause();
        } 
    }
var comments = $("#comments-scroller");
var mytimer = $(".timer");
var myEnter = $("#enter-scroller")
comments.owlCarousel({
    itemsCustom : [
      [0, 1],
      [450, 1],
      [600, 1],
      [700, 1],
      [1000, 2],
      [1200, 2],
      [1400, 2],
      [1600, 3]
    ],
    navigation : false,
  //Autoplay
    autoPlay : true,
    stopOnHover : true,
  // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    transitionSpeed:7000,
  
    pagination : false,
  
  });
  myEnter.owlCarousel({
    itemsCustom : [
      [0, 1],
      [450, 1],
      [600, 2],
      [700, 2],
      [1000, 3],
      [1200, 3],
      [1400, 3],
      [1600, 4]
    ],
    navigation : false,
  //Autoplay
    autoPlay : true,
    stopOnHover : true,
  // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    transitionSpeed:7000,
  
    pagination : false,
  
  });
  $("#swivelPartners").owlCarousel({
   
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 5,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3],
    navigation : false,
    stopOnHover : true,
    pagination : false,
});
// counter
$.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
        // set options for current element
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from:            $(this).data('from'),
            to:              $(this).data('to'),
            speed:           $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals:        $(this).data('decimals')
        }, options);
        
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
            increment = (settings.to - settings.from) / loops;
        
        // references & variables that will change with each update
        var self = this,
            $self = $(this),
            loopCount = 0,
            value = settings.from,
            data = $self.data('countTo') || {};
        
        $self.data('countTo', data);
        
        // if an existing interval can be found, clear it first
        if (data.interval) {
            clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);
        
        // initialize the element with the starting value
        render(value);
        
        function updateTimer() {
            value += increment;
            loopCount++;
            
            render(value);
            
            if (typeof(settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
            }
            
            if (loopCount >= loops) {
                // remove the interval
                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;
                
                if (typeof(settings.onComplete) == 'function') {
                    settings.onComplete.call(self, value);
                }
            }
        }
        
        function render(value) {
            var formattedValue = settings.formatter.call(self, value, settings);
            $self.html(formattedValue);
        }
    });
};

$.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
};

function formatter(value, settings) {
    return value.toFixed(settings.decimals);
}
mytimer.each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});
