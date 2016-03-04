'use strict';
(function(window, emr, L, mapData) {
	var StorageTileLayer = L.TileLayer.extend({
		_imageToDataUri : function(image) {
			var canvas = window.document.createElement('canvas');
			canvas.width = image.naturalWidth || image.width;
			canvas.height = image.naturalHeight || image.height;
			var context = canvas.getContext('2d');
			context.drawImage(image, 0, 0);
			return canvas.toDataURL('image/png');
		},

		_tileOnLoadWithCache : function() {
			var document = this._layer.options.document;
			if (document) {
				document.add(this._storageKey, this._layer._imageToDataUri(this));
			}
			L.TileLayer.prototype._tileOnLoad.apply(this, arguments);
		},

		_setUpTile : function(tile, key, value, cache) {
			tile._layer = this;
			if (cache) {
				tile._storageKey = key;
				tile.onload = this._tileOnLoadWithCache;
				tile.crossOrigin = 'Anonymous';
			} else {
				tile.onload = this._tileOnLoad;
			}
			tile.onerror = this._tileOnError;
			tile.src = value;
		},

		_loadTile : function(tile, tilePoint) {
			this._adjustTilePoint(tilePoint);
			var key = tilePoint.z + ',' + tilePoint.y + ',' + tilePoint.x;
			var self = this;
			if (this.options.document) {
				this.options.document.get(key, function(value) {
					if (value) {
						self._setUpTile(tile, key, value, false);
					} else {
						self._setUpTile(tile, key, self.getTileUrl(tilePoint), true);
					}
				}, function() {
					self._setUpTile(tile, key, self.getTileUrl(tilePoint), true);
				});
			} else {
				self._setUpTile(tile, key, self.getTileUrl(tilePoint), false);
			}
		}
	});

	emr.on('mapLoad', function(Document) {
		L.mapbox.accessToken = window.offlineMaps.mapDetails.mapAccessToken;
		var data = window.offlineMaps.mapDetails.mapData;
		//console.log(data);
		window.map = L.mapbox.map('mapViewContainer', 'mapbox.streets');
		//new StorageTileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		var tileSrc='http://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token='+window.offlineMaps.mapDetails.mapAccessToken;
		new StorageTileLayer(tileSrc, {
			document : Document
		}).addTo(window.map);
		addMarkersOnMap(data);
		emr.fire('mapLoaded');
	});
})(window, window.offlineMaps.eventManager, L);

/* 23-06-2015 Changes starts */
window.globalmarkers = [];
function addMarkersOnMap(data) {
	var lat=data.campaignLocation.lat;
	var lon=data.campaignLocation.lon;
	window.map.setView([lat, lon], 10);
	var markers = new L.MarkerClusterGroup();
	var json = data.contacts;
	// alert("Hi "+json[0].displayName);
	/*var popup = L.popup({
    	'className' : 'custom'

	}).setContent('hi');*/
	/*var popupData = '<div class="my-class"> \
        <h1>The Header</h1> \
        <p>The paragraph of text</p> \
        <div class="my-quote"> \
            <p>The quote I\'d like to put in a div</p> \
        </div> \
    </div>';*/
	for(var v = 0; v < globalmarkers.length; v++) {
		window.map.removeLayer(globalmarkers[v]);
	}
	window.globalmarkers = [];
	
	/*var popup = L.popup({
    	'className' : 'custom'

	}).setContent('hi');*/
	
	/*for (var i = 0; i < json.length; i++) {

		var a = {};
		a.type = "Feature";
		a.geometry = {};
		a.geometry.type = "Point";
		a.geometry.coordinates = [];
		a.geometry.coordinates[0] = json[i].lat;
		a.geometry.coordinates[1] = json[i].lon;
		json[i].markerpoint = a;
	}

	console.log("\n\n\n ------------------ \n"+angular.toJson(json)+"\n------------------\n\n\n");*/
	$('#name_details').hide();
	for (var i = 0; i < json.length; i++) {
		//popup = '<b>'+json[i].displayName+'</b><br>'+json[i].addressLine1+'</b>'" "+json[i].addressLine3;
		//popup.setContent("<b>"+json[i].displayName+"</b>");

		/*var popup = L.popup({
    	//'className' : 'custom',
    	  //'keepInView' : 'true'
			//'autoPan' : 'false',
			

		}).setContent("<div class = 'trigger'><p class='startAlign'>(A) <span class='contactAppointment'>Appointment: Thursday 9PM - 10 PM</span></p><img class= 'imgLeft' src='images/hotlist_grey.svg'><img class='imgSelected' src='images/disposition_icons/dispos10.svg'><img class='imgRight' src='images/likesname_grey.svg'><div class='panel-addr'><p>"+json[i].addressLine1+" "+'</b>'+json[i].addressLine3
+"</p><p>"+json[i].displayName+"</p><p>"+json[i].displayName+"</p><p>(312) 653-3445</p></div></div>");*/
		/*.setContent("<b>"+json[i].displayName+"</b>");*/
		
		var marker=L.marker([json[i].lat, json[i].lon], {
			icon: L.icon({
			iconUrl : './images/disposition_icons/'+json[i].iconName+'.svg',
			iconRetinaUrl : './images/disposition_icons/'+json[i].iconName+'.svg'
		})
		})//.bindPopup(popup).on('click', onClick);;
		//marker.bindPopup(popup).openPopup(); 


		marker.on('click', function(e){
    		//console.log(e.target._latlng.lat);
    		//console.log(e.target._latlng.lng);
    		var clicked_lat=e.target._latlng.lat;
    		var clicked_lng=e.target._latlng.lng;
    		for(var j=0;j<json.length;j++)
    		{
               
    			if(clicked_lat==json[j].lat && clicked_lng==json[j].lon)
    			{
                    console.log(json[j].members);
                    var membersName="";
                     for(var k=0;k<json[j].members.length;k++)
    		{
                if(json[j].members[k].rank == 1){
                 membersName= membersName+"<p>"+json[j].members[k].firstname+" "+json[j].members[k].lastname +"</p><p>";
                   
                }
                if(json[j].members[k].rank == 2)
                {
                    membersName= membersName+json[j].members[k].name+"</p>";
                    
                }
               
            }
                    
    				var newData = "<div class = 'trigger'><p class='startAlign'>(A) <span class='contactAppointment'>Appointment: Thursday 9PM - 10 PM</span></p><img class= 'imgLeft' src='images/hotlist_grey.svg'><img class='imgSelected' src='images/disposition_icons/"+json[j].iconName+".svg'><img class='imgRight' src='images/likesname_grey.svg'><div class='panel-addr'><p>"+json[j].street+" "+'</b>'+json[j].city
						+"</p>"+membersName+"<p></p><p>"+json[j].phoneNumber+"</p></div></div>";
	   		 			//console.log(newData);
    				if(screen.width<=768)
    				{
	    				$('#name_details').show();
	    				$('#name_details').html(newData);

	    				$('#mapViewContainer').on('click', function() {
           					$('#name_details').hide();
    					});
	    			}
	    			else
	    			{
	    				var clickedMarker=e.target;
	    				clickedMarker.unbindPopup();
	    				clickedMarker.bindPopup(newData).openPopup();

	    			}
    			
                }
    		}


		});
		
		
		function onClick(event) {
   		 	event.target.closePopup();
   		 	alert(i);
   		 	console.log(json);
   		 	var newData = "<div class = 'trigger'><p class='startAlign'>(A) <span class='contactAppointment'>Appointment: Thursday 9PM - 10 PM</span></p><img class= 'imgLeft' src='images/hotlist_grey.svg'><img class='imgSelected' src='images/disposition_icons/dispos10.svg'><img class='imgRight' src='images/likesname_grey.svg'><div class='panel-addr'><p>"+json[i].street+" "+'</b>'+json[i].city
+"</p><p>"+json[i].name+"</p><p>"+json[i].name+"</p><p>"+json[j].phoneNumber+"</p></div></div>";
   		 	console.log(newData);
   			$('#name_details').show();
    		$('#name_details').html(newData);

		}

		markers.addLayer(marker);
		window.globalmarkers.push(markers);

		

		// '<b>'+json[i].displayName+'</b><br>'+json[i].addressLine1+'</b><br>'+json[i].addressLine3

		/*.bindPopup("<b>"+json[i].displayName+"</b><br>"+json[i].addressLine1+" "+"</b>"+json[i].addressLine3);
		markers.addLayer(marker);
		window.globalmarkers.push(markers);*/
	};

	
	window.map.addLayer(markers);
}

