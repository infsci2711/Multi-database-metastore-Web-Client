var restBaseUrl = "http://localhost:7654/";
var dbname = document.getElementById("dbname").innerHTML;
var tablename = document.getElementById("tablename").innerHTML;

function schemaViewModel(TBfield,TBtype,TBnull,TBkey,TBextra) {
	var self = this;

	self.TBfield = ko.observable(TBfield);
	self.TBtype = ko.observable(TBtype);
	self.TBnull = ko.observable(TBnull);
	self.TBkey = ko.observable(TBkey);
	self.TBextra = ko.observable(TBextra);
}

function schemasViewModel() {
	var self = this;

	self.schemas = ko.observableArray();

	self.schema = ko.observable(new schemaViewModel());

	self.findAll = function() {
		$.ajax({
			url: restBaseUrl + "Schema/"+dbname+"/"+tablename,
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.schemas.removeAll();

				for (var i = 0; i < data.length; i++) {
					var schema = new schemaViewModel(data[i].TBfield,data[i].TBtype,data[i].TBnull,data[i].TBkey,data[i].TBextra);
                   
					self.schemas.push(schema);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting dbs schema list. Please try again.");
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

ko.applyBindings(new schemasViewModel());