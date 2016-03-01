window.MIKE = (function($){
	var _window = $(window);
	var _MIKE = {};
	var _kendoRouter = {};
	var _baseLayout = {};
	var _homeView = {};
    var _aboutView = {};
	var _troubleshootingView = {};
    var _moreView = {};
    var _guestbookView = {};
   
	
	//set up our views, layout, and routes
	_MIKE.initSPA = function() {
        
       

		_baseLayout = new kendo.Layout('base-layout-template');

		_kendoRouter = new kendo.Router();
		
		_kendoRouter.bind('change', function(e) {
			_MIKE.selectMenuItem();
		});		
		
		_homeView = new kendo.View('home-view', {
			model: window.Photon.getPhotonModel()
		});
        
        _aboutView = new kendo.View('about-view', {
			//model: window.Photon.getAboutModel()
		});
        
        _troubleshootingView = new kendo.View('troubleshooting-view', {
			//model: window.Photon.getPhotonModel()
		});
        
        _moreView = new kendo.View('more-view', {
			//model: window.Photon.getPhotonModel()
		});
        
        _guestbookView = new kendo.View('guestbook-view', {
			model: window.Guestbook.getGuestbookModel(),
            show: function() {
				this.model.getEntries();
			}          
		});
        
        _kendoRouter.route('/', function() {
		   _baseLayout.showIn('#content', _homeView);
            
		});

        _kendoRouter.route('/guestbook', function() {
			_baseLayout.showIn('#content', _guestbookView)
		});
        
        _kendoRouter.route('/about', function() {
			_baseLayout.showIn('#content', _aboutView);            
		});
        
        _kendoRouter.route('/troubleshooting', function() {
			_baseLayout.showIn('#content', _troubleshootingView);            
		});
        
         _kendoRouter.route('/more', function() {
			_baseLayout.showIn('#content', _moreView);            
		});
        
		
	}

	//start our router and render our initial view
	_MIKE.startSPA = function() {
		_kendoRouter.start();
		_baseLayout.render('#main');
	}

	
	_MIKE.selectMenuItem = function() {
		//this can vary depending on where a user enters the application
		var currentView = document.URL.split('#/')[1];
		
		$('.navbar-nav>li').removeClass('active')

		if(currentView === undefined || currentView === '') {
			$('.navbar-nav>li.home').addClass('active');
		}
		else {
			$('.navbar-nav>li.' + currentView + '').addClass('active');
		}
	}


	//start the app
	_MIKE.startApp = function () {
			this.initSPA();
			this.startSPA();
			this.selectMenuItem();
	}

	return _MIKE;

})(jQuery);