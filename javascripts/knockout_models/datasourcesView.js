function ColumnViewModel(columnName) {
    var self = this;

    self.columnName = ko.observable(columnName);
}

function TableModel(tableName, columns) {
      var self = this;

      self.tableName = ko.observable(tableName);
      self.columns = ko.observableArray(columns);
}

function DatasourceModel(did, ip, port, databaseName, username, password, DBtype, tables, title, description) {
    var self = this;

    self.did = ko.observable(did);
    self.ip = ko.observable(ip);
    self.port = ko.observable(port);
    self.databaseName = ko.observable(databaseName);
    self.username = ko.observable(username);
    self.password = ko.observable(password);
    self.dbType = ko.observable(DBtype);
    self.tables = ko.observableArray(tables);
    self.title = ko.observable(title);
    self.description = ko.observable(description);


    self.selectedTable = ko.observable();

    self.save = function() {
        var datasourceToSend = {"ipAddress": self.ip(), "port": self.port(), "dbName": self.databaseName(),
        "username": self.username(), "password": self.password(), "dbType": self.dbType(), 
        "title": self.title(), "description": self.description() };

        $.ajax({
            url: restBaseUrl + "datasources/add",
            type: 'PUT',
            dataType: 'json',
            data: JSON.stringify(datasourceToSend) ,
            contentType: "application/json",
            crossDomain: true,
            success: function(data) {
               document.getElementById("successNote").style.visibility = "visible";
            },
            error: function(data) {
               alert("Error1");
            }
        });
    }
}

function DatasourcesModel() {
	var self = this;

	self.datasources = ko.observableArray();
                self.selectedDatasource = ko.observable();

	self.getDatasources = function() {
                    var data = ko.toJS(self);
                    data.query = $("#sqlquery").val();
                    //to test it, use firefox
                    $.ajax({
                        url: restBaseUrl + "datasources",
                        type: 'GET',
                        dataType: 'json',
                        success: function(data) {
                           processDatasources(self, data);
                        },
                        error: function(data) {
                           alert("Wrong datasource, please check");
                        }
                    });
	};

      function processDatasources(self, data) {

            $.each(data, function(i, datasource) {

                var tables = [];

                $.each(datasource.tables, function(j, table) {

                    var columns = [];

                    $.each(table.columns, function(k, column) {
                        columns.push(new ColumnViewModel(column.columnName));
                    })
    debugger;
                    var tableView = new TableModel(table.tableName, columns);
                    tables.push(tableView);
                })

    debugger;
                var datasources = new DatasourceModel(datasource.id,  datasource.ipAddress, datasource.port, datasource.dbName, 
                    datasource.username, datasource.password, datasource.dbType, tables, datasource.title, datasource.description);
                self.datasources.push(datasources);
            })
      }

        self.getDatasources();
}

ko.applyBindings(new DatasourcesModel(), $("#datasourcesContainer")[0]);

ko.applyBindings(new DatasourceModel(), $("#newDatasourceForm")[0]);
