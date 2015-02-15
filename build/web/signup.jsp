<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!---<link rel="icon" href="../../favicon.ico">-->

    <title>sign up</title>

    <!-- Bootstrap core CSS -->
    <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="pattern.css" rel="stylesheet">

    <script src="http://getbootstrap.com/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- Custom styles for this template -->
    <link href="http://getbootstrap.com/examples/carousel/carousel.css" rel="stylesheet">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <!-- Bootstrap core CSS -->
        <link href="http://getbootstrap.com/dist/css/bootstrap.min.css" rel="stylesheet">
            <!-- Custom styles for this template -->
        <link href="http://getbootstrap.com/examples/signin/signin.css" rel="stylesheet">
  </head>
<!-- NAVBAR
================================================== -->
  <body>

      

        <div class="container" >
    
            <form  class="form-signin" method ="POST" action = "">
                <h1 class="form-signin-heading">sign up</h1>
                <br>
                <select name="protocol">
                    <option>protocol</option>
                </select>
                <select name="format">
                    <option>format</option>
                </select>
                <br><br>
                
                <input type="text" name="Database name" size="50" class="form-control" placeholder="Database name" required autofocus/>
                 <br>
                <input type="text" name="User name" size="50" class="form-control" placeholder="User name" required/>
                 <br>
                <input type="password" name="password" size="50" class="form-control" placeholder="Password" required/>
                 
                <input type="password" name="confirm password" size="50" class="form-control" placeholder="Confirm Password" required/>
                
                <input type="text" name="port" size="50" class="form-control" placeholder="port" required />
                 <br>
                <input type="text" name="URL" size="50" class="form-control" placeholder="URL" required />
                <p></p>
                <button class="btn btn-primary btn-primary btn-block" type="submit" >Sign up</button><button class="btn btn-primary btn-primary btn-block">Reset</button>
            </form>

        </div>
    </body>
</html>