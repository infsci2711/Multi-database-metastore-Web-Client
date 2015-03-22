var restBaseUrl = "http://localhost:7654/";

function metaStoreDBViewModel(DBname) {
	var self = this;

	self.DBname = ko.observable(DBname);
}

function metaStoresDBViewModel() {
	var self = this;

	self.metastores = ko.observableArray();

	self.newmetaStore = ko.observable(new metaStoreDBViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "metaStore",
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.metastores.removeAll();

				for (var i = 0; i < data.length; i++) {
					var metaStoreDB = new metaStoreDBViewModel(data[i].DBname);
                   
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

