var UndergroundWineRouter = Backbone.Router.extend({
	routes: {
    "": "home",
    "wines": "wines"
  },
  home: function() {

  	var wine1= new Wine({})
  	var wine2= new Wine({})

  	var wineView1 = new WineView({ model: wine1})
  	var wineView2 = new WineView({ model:wine2}) 


    console.log('home was hit')
  },
  wines: function(){
    $.ajax({
      type: "GET",
      url: "http://services.wine.com/api/beta2/service.svc/JSON/catalog?apikey=d5791d1238c1625fd2807acdf352be2a&size=25&offset=10&filter=categories(7155+124)term=mondavi+cab"
    }).done(function(res){ parsewines(res) })
  }
})