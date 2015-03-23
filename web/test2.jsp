<%-- 
    Document   : test2
    Created on : Mar 23, 2015, 5:03:27 AM
    Author     : wanghao
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p><%out.print(request.getAttribute("dbname"));
             
        %></p>
    </body>
</html>
