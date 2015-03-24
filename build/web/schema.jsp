<!DOCTYPE html>
<html lang>
  <head>
        <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
        
        <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
        
    <!-- Bootstrap core CSS -->
    <link href="pattern.css" rel="stylesheet">
    <link href="css/metro-bootstrap.css" rel="stylesheet">
    <link href="css/metro-bootstrap-responsive.css" rel="stylesheet">
    <link href="css/iconFont.css" rel="stylesheet">
    <link href="css/docs.css" rel="stylesheet">
    <link href="js/prettify/prettify.css" rel="stylesheet">


    <!-- Load JavaScript Libraries -->
    <script src="js/jquery/jquery.min.js"></script>
    <script src="js/jquery/jquery.widget.min.js"></script>
    <script src="js/jquery/jquery.mousewheel.js"></script>
    <script src="js/jquery/jquery.dataTables.js"></script>
    <script src="js/prettify/prettify.js"></script>


    <!-- Metro UI CSS JavaScript plugins -->
    <script src="js/load-metro.js"></script>

    <!-- Local JavaScript -->
    <script src="js/docs.js"></script>
    <script src="js/github.info.js"></script>
    <!-- Custom styles for this template -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <!-- Bootstrap core CSS -->
    <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
            <!-- Custom styles for this template -->
    <link href="http://getbootstrap.com/examples/signin/signin.css" rel="stylesheet">
  </head>

    <body class="metro" style="background-color: #efeae3">
        <div class="container" >
            <div id="schemasContainer">
                <p id="dbname" ><%out.print(session.getAttribute("dbname"));%></p>
                <p id="tablename"><%out.print(request.getParameter("tablename"));%></p>

                        <h3>There are <span data-bind="text: schemas().length"></span> Schemas in this Table.
		        	<button class="btn btn-default" data-bind="click: findAll">Refresh</button>
		    	</h3>
                    <table class="table striped hovered dataTables" id="dataTables-1" cellspacing="0" width="100%">
		            <thead>
		                <tr>  
                                    <th>#</th>
		                    <th>field</th>
		                    <th>type</th>
                                    <th>null</th>
                                    <th>key</th>
                                    <th>extra</th>
		                </tr> 
		            </thead> 
                            <tfoot>
		                <tr>  
                                    <th>#</th>
		                    <th>field</th>
		                    <th>type</th>
                                    <th>null</th>
                                    <th>key</th>
                                    <th>extra</th>
		                </tr> 
		            </tfoot>
		            <tbody data-bind="foreach: schemas">
		                <tr>  
                                    <td data-bind="text: $index"></td> 
		                    <td data-bind="text: TBfield"></td>  
		                    <td data-bind="text: TBtype"></td>
		                    <td data-bind="text: TBnull"></td>
		                    <td data-bind="text: TBkey"></td>
		                    <td data-bind="text: TBextra"></td>
                                    
		                </tr>     
		            </tbody>
		        </table>
      </div>
            </div>
    
<!--    <script src="http://getbootstrap.com/assets/js/ie-emulation-modes-warning.js"></script>-->
    <script type="text/javascript" src="javascripts/jquery-2.1.3.min.js"></script>
    <script type="text/javascript" src="javascripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="javascripts/knockout-3.2.0.js"></script>
    <script type="text/javascript" src="javascripts/knockout_models/schemaViewModel.js"></script>
  </body>
</html> 
