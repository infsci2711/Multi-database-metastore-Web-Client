/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var restBaseUrl = "http://localhost:7654/";
//var dbname = document.getElementById("dbname");
var dbname = "group1";

function tableViewModel(table) {
	var self = this;

	self.table = ko.observable(table);
	
}

function tablesViewModel() {
	var self = this;

	self.tables = ko.observableArray();

	self.newtable = ko.observable(new tableViewModel());

	self.findAll = function() {
		$.ajax({
			//url: restBaseUrl + "Table/"+ dbname,
                        url: restBaseUrl + "metaStore",
			type: 'GET',
			dataType: 'json',
			contentType: "application/json",
			crossDomain: true,
			success: function(data) {
				self.tables.removeAll();

				for (var i = 0; i < data.length; i++) {
					var table = new tableViewModel(data[i].table);
                   
					self.tables.push(table);
				}
			},
			error: function(data) {
				alert("Something went wrong while getting dbs table list. Please try again.");
			}
		});
	};


	self.findAll();
}

ko.applyBindings(new tablesViewModel());
