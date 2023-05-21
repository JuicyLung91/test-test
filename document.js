  document.addEventListener('DOMContentLoaded', function() {
    var videoElements = document.getElementsByTagName('video');
    console.log(videoElements);

    function handleAutoplay() {
      var screenWidth = window.innerWidth;

      console.log(screenWidth);
      for (var i = 0; i < videoElements.length; i++) {
        var video = videoElements[i];

        console.log(video, screenWidth <= 600);
        if (screenWidth <= 600) {
          video.removeAttribute('autoplay');
        } else {
          video.setAttribute('autoplay', 'autoplay');
        }
      }
    }

    // Initial call to handle autoplay based on the current screen size
    handleAutoplay();

    // Listen for window resize events and update autoplay accordingly
    window.addEventListener('resize', handleAutoplay);
  });