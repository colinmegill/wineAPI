function parsewines (res) {
	_.each(res.Products.List, function(element, index){
		$("#winelist").append("<li>"+element.Name+"</li>");
	})
}
