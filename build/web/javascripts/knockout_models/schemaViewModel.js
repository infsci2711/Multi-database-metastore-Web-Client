var restBaseUrl = "http://localhost:7654/";

function schemaViewModel(TBfield,TBtype,TBnull,TBkey,TBdefault,TBextra) {
	var self = this;

	self.DBtype = ko.observable(TBfield);
	self.IPAddress = ko.observable(TBtype);
	self.port = ko.observable(TBnull);
	self.username = ko.observable(TBkey);
	self.password = ko.observable(TBdefault);
	self.DBname = ko.observable(TBextra);
}

function schemaViewModel() {
	var self = this;

	self.schemas = ko.observableArray();

	self.schema = ko.observable(new schemaViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "Schema/"+document.getElementById("dbname")+"/"+document.getElementById("tablename"),
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.metastores.removeAll();

				for (var i = 0; i < data.length; i++) {
					var schema = new schemaViewModel(data[i].TBfield,data[i].TBtype,data[i].TBnull,data[i].TBkey,data[i].TBdefault,data[i].TBextra);
                   
					self.schema.push(schema);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting dbs list. Please try again.");
			}
		});
	};

	// self.addmetaStore = function() {
	// 	$.ajax({
	// 		url: restBaseUrl + "schema",
	// 		type: 'PUT',
	// 		data: ko.toJSON(self.newmetaStore()),
	// 		dataType: 'json',
	// 		contentType: "application/json",
	// 		crossDomain: true,
	// 		success: function(data) {
	// 			self.metastores.push(new metaStoreViewModel(data.firstName, data.lastName));
	// 			self.newmetaStore(new metaStoreViewModel());
	// 		},
	// 		error: function(data) {
	// 			alert("Something went wrong while adding new db. Please try again.");
	// 		}
	// 	});
	// };

	self.findAll();
}

ko.applyBindings(new schemaViewModel());