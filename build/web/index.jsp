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

    <title>Log in</title>

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

      
      <a href="signup.jsp">sign up</a>
        <div class="container" >
    
            <form  class="form-signin" method ="POST" action = "">
                <h1 class="form-signin-heading">Login</h1>
                <br>
                <select name="dbname">
                    <option>please select your database</option>
                </select>
                <br><br>
                
                <input type="text" name="name" size="50" class="form-control" placeholder="Username" required autofocus/>
                <input type="password" name="password" size="20" class="form-control" placeholder="Password" required/>
                <button class="btn btn-lg btn-primary btn-block" type="submit" >Sign in</button>
                
            </form>

        </div>
    </body>
</html>