var restBaseUrl = "http://localhost:7654/";

function metaStoreViewModel(DBtype,IPAdress,port,username,password,DBname) {
	var self = this;

	self.DBtype = ko.observable(DBtype);
	self.IPAdress = ko.observable(IPAdress);
	self.port = ko.observable(port);
	self.username = ko.observable(username);
	self.password = ko.observable(password);
	self.DBname = ko.observable(DBname);

}

function metaStoresViewModel() {
	var self = this;

	self.metaStore = ko.observableArray();

	self.newmetaStore = ko.observable(new metaStoreViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "metastore",
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.metastore.removeAll();

				for (var i = 0; i < data.length; i++) {
					var metastore = new metaStoreViewModel(data[i].DBtype,data[i].IPAdress,data[i].port,data[i].username,data[i].password,data[i].DBname);
                   
					self.metastore.push(metastore);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting persons list. Please try again.");
			}
		});
	};

	self.addmetaStore = function() {
		$.ajax({
			url: restBaseUrl + "metaStore",
			type: 'PUT',
			data: ko.toJSON(self.newmetaStore()),
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.metastore.push(new metaStoreViewModel(data.DBtype,data.IPAdress,data.port,data.username,data.password,data.DBname));
				self.newmetaStore(new metaStoreViewModel());
			},
			error: function(data) {
				alert("Something went wrong while adding new person. Please try again.");
			}
		});
	};

	self.findAll();
}

ko.applyBindings(new metaStoresViewModel(), $("#metastoresContainer")[0]);