(function() {
		
	angular.module('googleMaps', ['uiGmapgoogle-maps'])
	
	.config(function(uiGmapGoogleMapApiProvider) {
		uiGmapGoogleMapApiProvider.configure({
			//    key: 'your api key',
			v: '3.20', //defaults to latest 3.X anyhow
			libraries: 'weather,geometry,visualization'
		});
	})
	
	.controller("mapController", function($scope, uiGmapGoogleMapApi) {
		// Do stuff with your $scope.
		// Note: Some of the directives require at least something to be defined originally!
		// e.g. $scope.markers = []
		$scope.map = { 
			center: { latitude: 39.5, longitude: -98.35 },
			zoom: 4,
		};
		$scope.options = {scrollwheel: false};
		
    $scope.locations = [{name:"Flagstaff, AZ",latitude:35.1992,longitude:-111.6311,id:0},{name:"Santa Fe, NM",latitude:35.6672,longitude:-105.9644,id:1},{name:"Fort Collins, CO",latitude:40.5592,longitude:-105.0781,id:2},{name:"Laramie, WY",latitude:41.3167,longitude:-105.5833,id:3},{name:"Omaha, NE",latitude:41.25,longitude:-96,id:4},{name:"Lawrence, KS",latitude:38.9717,longitude:-95.2353,id:5},{name:"Fayetteville, AR",latitude:36.0764,longitude:-94.1608,id:6},{name:"Tulsa, OK",latitude:36.1314,longitude:-95.9372,id:7},{name:"Austin, TX",latitude:30.25,longitude:-97.75,id:8},{name:"Layfayette, LA",latitude:30.2167,longitude:-92.0333,id:9},{name:"Hattiesburg, MS",latitude:31.3158,longitude:-89.3086,id:10},{name:"Tallahassee, FL",latitude:30.455,longitude:-84.2533,id:11},{name:"Birmingham, AL",latitude:33.525,longitude:-86.813,id:12},{name:"Nashville, TN",latitude:36.1667,longitude:-86.7833,id:13},{name:"Athens, GA",latitude:33.95,longitude:-83.3833,id:14},{name:"Greenville, SC",latitude:34.8444,longitude:-82.3856,id:15},{name:"Raleigh, NC",latitude:35.7806,longitude:-78.6389,id:16},{name:"Virginia Beach, VA",latitude:36.8506,longitude:-75.9779,id:17},{name:"Baltimore, MD",latitude:39.2833,longitude:-76.6167,id:18},{name:"Wilmington, DE",latitude:39.7458,longitude:-75.5467,id:19},{name:"New Haven, CT",latitude:41.31,longitude:-72.9236,id:20},{name:"Brattleboro, VT",latitude:42.85,longitude:-72.5822,id:21},{name:"Manchester, NH",latitude:42.9908,longitude:-71.4636,id:22},{name:"Portland, ME",latitude:43.6667,longitude:-70.2667,id:23},{name:"Boston, MA",latitude:42.3601,longitude:-71.0589,id:24},{name:"Providence, RI",latitude:41.8236,longitude:-71.4222,id:25},{name:"Hoboken, NJ",latitude:40.75,longitude:-74.03,id:26},{name:"New York City, NY",latitude:40.7127,longitude:-74.0059,id:27},{name:"Philadelphia, PA",latitude:39.95,longitude:-75.1667,id:28},{name:"Charleston, WV",latitude:38.3472,longitude:-81.6333,id:29},{name:"Dayton, OH",latitude:39.7594,longitude:-84.1917,id:30},{name:"Louisville, KY",latitude:38.25,longitude:-85.7667,id:31},{name:"St. Louis, MO",latitude:38.6272,longitude:-90.1978,id:32},{name:"Valparaiso, IN",latitude:41.4761,longitude:-87.0569,id:33},{name:"South Haven, MI",latitude:42.4031,longitude:-86.2736,id:34},{name:"Milwaukee, WI",latitude:43.05,longitude:-87.95,id:35},{name:"Chicago, IL",latitude:41.8369,longitude:-87.6847,id:36},{name:"Des Moines, IA",latitude:41.5908,longitude:-93.6208,id:37},{name:"Minneapolis, MN",latitude:44.9778,longitude:-93.265,id:38},{name:"Fargo, ND",latitude:46.8772,longitude:-96.7894,id:39},{name:"Sioux Falls, SD",latitude:43.5364,longitude:-96.7317,id:40},{name:"Bozeman, MT",latitude:45.6778,longitude:-111.0472,id:41},{name:"Idaho Falls, ID",latitude:43.5,longitude:-112.0333,id:42},{name:"Park City, UT",latitude:40.6594,longitude:-111.4997,id:43},{name:"Las Vegas, NV",latitude:36.1215,longitude:-115.1739,id:44},{name:"Portland, OR",latitude:45.52,longitude:-122.6819,id:45},{name:"Seattle, WA",latitude:47.6097,longitude:-122.3331,id:46},{name:"Anchorage, AK",latitude:61.2167,longitude:-149.9,id:47},{name:"Honolulu, HI",latitude:21.3,longitude:-157.8167,id:48},{name:"Los Angeles, CA",latitude:34.05,longitude:-118.25,id:49}];
		
		// uiGmapGoogleMapApi is a promise.
		// The "then" callback function provides the google.maps object.
		uiGmapGoogleMapApi.then(function(maps) {
			console.log(maps);
		});
	});	
})();