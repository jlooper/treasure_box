window.Photon = (function($){
	var _photonModule = {};
	var _photonViewModel = {};
    
    var photonId = process.env.PHOTON_ID || '123';
    var photonAccessToken = process.env.PHOTON_ACCESS_TOKEN || '123';

	var url = 'https://api.particle.io/v1/devices/'+photonId+'/setPosition/';
	
	_photonViewModel = kendo.observable({

		
		open: function(e){

			
			e.preventDefault();

			var dataToPost = {
				params: 140,
				access_token: photonAccessToken				
			};
			
			$.ajax({
				url: url,
				type: 'POST',
    			data: dataToPost
			}).done(function(data) {
				$('.alert-success').toggle();
				$(".success-message").html(data.message);
			}).fail(function(data) {
				console.log(data)
				$('.alert-danger').toggle();
				$(".fail-message").html(data.message);
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
				$('.alert-success').toggle();
				$(".success-message").html(data.message);
			}).fail(function(data) {
				console.log(data)
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