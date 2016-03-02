window.Photon = (function($){
	var _photonModule = {};
	var _photonViewModel = {};
	var url = 'https://api.particle.io/v1/devices/270025001647343339383037/setPosition/';
	var access = '822a6a1265e7948ba1cfd7931eb4f63af04a1bf5';
		
	_photonViewModel = kendo.observable({

		
		open: function(e){

			
			e.preventDefault();

			var dataToPost = {
				params: 140,
				access_token: access				
			};
			
			$.ajax({
				url: url,
				type: 'POST',
    			data: dataToPost
			}).done(function(data) {
				toastr.success(data.message);
			}).fail(function(data) {
				toastr.error(data.message);
			});
		},

		close: function(e){

			e.preventDefault();

			var dataToPost = {
				params: 70,
				access_token: access				
			};
			
			$.ajax({
				url: url,
				type: 'POST',
    			data: dataToPost
			}).done(function(data) {
				toastr.success(data.message);
			}).fail(function(data) {
				toastr.error(data.message);
			});
		}
	});

	_photonModule.getPhotonModel = function() {
		return _photonViewModel;
	}

	return _photonModule;

})(jQuery);