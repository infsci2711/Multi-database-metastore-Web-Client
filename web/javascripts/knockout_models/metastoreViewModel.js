//let KO know that we will take care of managing the bindings of our children
ko.bindingHandlers.stopBinding = {
    init: function() {
        return { controlsDescendantBindings: true };
    }        
};
    
//KO 2.1, now allows you to add containerless support for custom bindings
ko.virtualElements.allowedBindings.stopBinding = true;

var restBaseUrl = "http://54.152.26.131:7654/";

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

	self.metastores = ko.observableArray();

	self.newmetaStore = ko.observable(new metaStoreViewModel());

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
					var metaStore = new metaStoreViewModel(data[i].DBtype,data[i].IPAddress,data[i].port,data[i].username,data[i].password,data[i].DBname);
                   
					self.metastores.push(metaStore);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting dbs list. Please try again.");
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
				self.metastores.push(new metaStoreViewModel(data.DBtype,data.IPAddress,data.port,data.username,data.password,data.DBname));
				self.newmetaStore(new metaStoreViewModel());
			},
			error: function(data) {
				alert("Something went wrong while adding new db. Please try again.");
			}
		});
	};

	self.findAll();

}

function tableViewModel(table) {
	var self = this;

	self.table = ko.observable(table);
	
}

function tablesViewModel() {
	var self = this;

	//self[dbname+'_tables'] = ko.observableArray();

	self.tables = ko.observableArray();

	self.newtable = ko.observable(new tableViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "Table/group1",
//                        url: restBaseUrl + "metaStore",
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				//self[dbname+'_tables'].removeAll();
				self.tables.removeAll();

				for (var i = 0; i < data.length; i++) {
					var table = new tableViewModel(data[i].table);
					self.tables.push(table);
                   
					//self[dbname+'_tables'].push(table);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting dbs table list. Please try again.");
			}
		});
	};


	self.findAll();
}

ko.applyBindings(new metaStoresViewModel());
ko.applyBindings(new tablesViewModel(), document.getElementById("innerTable"));

