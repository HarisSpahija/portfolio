$( document ).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '4394153711',
        limit: 30,
        resolution: 'standard_resolution',
        accessToken: '4394153711.1677ed0.658291727ba943a08c926bf9ad5735bf',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });
    userFeed.run();
});