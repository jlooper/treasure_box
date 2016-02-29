window.Guestbook = (function($){
	var _guestbookModule = {};
	var _guestbookViewModel = {};

	_guestbookViewModel = kendo.observable({
        name: '',
		box: 'duckweed',
		locale: 'WCG',
		date: '',
		message: '',
        
        getEntries: function(e){
            
            var id;
           
           $.ajax({
			url: '/api/guestbook/',
				type: 'get',
				contentType: 'application/json'
			}).done(function(data) {
                console.log(data)
				    
                if (data.length!=0) {
                    $(".guestbookHeader").show();
                }
                else {
                    $(".guestbookHeader").hide();
                }			
                $("#listViewGuestbook").kendoListView({
                    dataSource: data,
				    template: kendo.template($("#guestbook").html())
				});
                            
			}).fail(function(data) {
		});
            
        },
        
        submitGuestbookMessage: function(e){

			e.preventDefault();

			var dataToPost = {
                name: _guestbookViewModel.get('name'),
				message: _guestbookViewModel.get('message'),
                box: _guestbookViewModel.get('box'),
                locale: _guestbookViewModel.get('locale'),
                date: new Date()
			};

			var serializedDataToPost = JSON.stringify(dataToPost);

			var validator = $("#guestbookForm").kendoValidator().data("kendoValidator");
            
            if (validator.validate()) {
                
                $.ajax({
					url: '/api/guestbook',
					type: 'post',
					data: serializedDataToPost,
					contentType: 'application/json',
                    success: function(result) {
					   _guestbookViewModel.getEntries()
        		    }
				}).done(function(data) {
					//toastr.success(data.message);
                    //var router = new kendo.Router();
				}).fail(function(data) {
					//toastr.error(data.message);
				});
            } else {
               //toastr.error("Sorry, you seem to be missing some information. Please correct the errors before proceeding.");
             }
			
		}
	});

	_guestbookModule.getGuestbookModel = function() {
        return _guestbookViewModel;
	}


	return _guestbookModule;


})(jQuery);

		