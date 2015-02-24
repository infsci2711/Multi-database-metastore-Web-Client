var restBaseUrl = "http://localhost:7654/";

function metaStoreViewModel(DBtype,IPAddress,port,username,password,DBname) {
	var self = this;

	self.DBtype = ko.observable(DBtype);
	self.IPAddress = ko.observable(IPAddress);
	self.port = ko.observable(port);
	self.username = ko.observable(username);
	self.password = ko.observable(password);
	self.DBname = ko.observable(DBname);

}

function metaStoresViewModel() {
	var self = this;

	self.mStore = ko.observableArray();

	self.newmetaStore = ko.observable(new metaStoreViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "metaStore",
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.mStores.removeAll();

				for (var i = 0; i < data.length; i++) {
					var mStore = new metaStoreViewModel(data[i].DBtype,data[i].IPAddress,data[i].port,data[i].username,data[i].password,data[i].DBname);
                   
					self.mStores.push(mStore);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting metastores list. Please try again.");
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
				self.mStore.push(new metaStoreViewModel(data.DBtype,data.IPAddress,data.port,data.username,data.password,data.DBname));
				self.newmetaStore(new metaStoreViewModel());
			},
			error: function(data) {
				alert("Something went wrong while adding new metastore. Please try again.");
			}
		});
	};

	self.findAll();
}

ko.applyBindings(new metaStoresViewModel());