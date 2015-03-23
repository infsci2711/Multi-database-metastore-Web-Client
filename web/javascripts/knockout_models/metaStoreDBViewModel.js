var restBaseUrl = "http://localhost:7654/";

function metaStoreDBViewModel(database) {
	var self = this;

	self.database = ko.observable(database);
}

function metaStoresDBViewModel() {
	var self = this;

	self.metastores = ko.observableArray();

	self.newmetaStore = ko.observable(new metaStoreDBViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "Database",
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.metastores.removeAll();

				for (var i = 0; i < data.length; i++) {
					var metaStoreDB = new metaStoreDBViewModel(data[i].database);
                   
					self.metastores.push(metaStoreDB);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting dbs list. Please try again.");
			}
		});
	};


	self.findAll();
}

ko.applyBindings(new metaStoresDBViewModel());

