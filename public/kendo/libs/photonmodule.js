window.Photon = (function($){
	var _photonModule = {};
	var _photonViewModel = {};

	
	//temporary before RequireJS
	_photonViewModel = kendo.observable({
		
		open: function(e){

			
			e.preventDefault();

			var dataToPost = {
				params: 140,
				access_token: '822a6a1265e7948ba1cfd7931eb4f63af04a1bf5'				
			};

			var serializedDataToPost = JSON.stringify(dataToPost);

			$.ajax({
				url: 'https://api.particle.io/v1/devices/270025001647343339383037/setpos',
				type: 'post',
				data: serializedDataToPost,
				contentType: 'application/x-www-form-encoded'
			}).done(function(data) {
				$('.alert-success').toggle();
				$(".success-message").html(data.message);
			}).fail(function(datsa) {
				$('.alert-danger').toggle();
				$(".fail-message").html(data.message);
			});
		},

		close: function(e){

			e.preventDefault();

			var data = {
				params: 60,
				access_token: '822a6a1265e7948ba1cfd7931eb4f63af04a1bf5'
				
			};

			//var serializedDataToPost = JSON.stringify(dataToPost);
			//console.log(serializedDataToPost)
			$.ajax({
				url: 'https://api.particle.io/v1/devices/270025001647343339383037/setpos/',
				type: 'post',
				data: data,
				contentType: 'application/json'
			}).done(function(data) {
				$('.alert-success').toggle();
				$(".success-message").html(data.message);
			}).fail(function(data) {
				$('.alert-danger').toggle();
				$(".fail-message").html(data.message);
			});
		}
	});

	_photonModule.getPhotonModel = function() {
		return _photonViewModel;
	}

	return _photonModule;

})(jQuery);