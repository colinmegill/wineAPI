var UndergroundWineRouter = Backbone.Router.extend({
	routes: {
    "": "home",    
  },
  home: function() {

  	var wine1= new Wine({})
  	var wine2= new Wine({})

  	var wineView1 = new WineView({ model: wine1})
  	var wineView2 = new WineView({ model:wine2}) 


    console.log('home was hit')
  }
})