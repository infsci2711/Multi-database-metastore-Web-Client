
var restBaseUrl = "http://54.152.26.131:7654/";

function databaseViewModel(database) {
	var self = this;

	self.database = ko.observable(database);
	
}

function databasesViewModel() {
	var self = this;

	self.databases = ko.observableArray();

	self.newdatabase = ko.observable(new databaseViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "Database",
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.databases.removeAll();

				for (var i = 0; i < data.length; i++) {
					var database = new databaseViewModel(data[i].database);
                   
					self.databases.push(database);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting dbs list. Please try again.");
			}
		});
	};
        

	self.findAll();
}

ko.applyBindings(new databasesViewModel());
