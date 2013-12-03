$(document).ready(function () {
	toggleFlashlight();
});

var toggleFlashlight = function() {
	$('#flashlight').on('click', function() {
		window.plugins.flashlight.toggle();
	});
};
