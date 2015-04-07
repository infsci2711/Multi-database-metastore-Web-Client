package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import javax.servlet.RequestDispatcher;

public final class table_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html lang>\n");
      out.write("  <head>\n");
      out.write("        <meta charset=\"utf-8\">\n");
      out.write("\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n");
      out.write("\t\n");
      out.write("        \n");
      out.write("        <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" media=\"screen\">\n");
      out.write("        \n");
      out.write("    <!-- Bootstrap core CSS -->\n");
      out.write("    <link href=\"pattern.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"css/metro-bootstrap.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"css/metro-bootstrap-responsive.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"css/iconFont.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"css/docs.css\" rel=\"stylesheet\">\n");
      out.write("    <link href=\"js/prettify/prettify.css\" rel=\"stylesheet\">\n");
      out.write("\n");
      out.write("\n");
      out.write("    <!-- Load JavaScript Libraries -->\n");
      out.write("    <script src=\"js/jquery/jquery.min.js\"></script>\n");
      out.write("    <script src=\"js/jquery/jquery.widget.min.js\"></script>\n");
      out.write("    <script src=\"js/jquery/jquery.mousewheel.js\"></script>\n");
      out.write("    <script src=\"js/jquery/jquery.dataTables.js\"></script>\n");
      out.write("    <script src=\"js/prettify/prettify.js\"></script>\n");
      out.write("\n");
      out.write("\n");
      out.write("    <!-- Metro UI CSS JavaScript plugins -->\n");
      out.write("    <script src=\"js/load-metro.js\"></script>\n");
      out.write("\n");
      out.write("    <!-- Local JavaScript -->\n");
      out.write("    <script src=\"js/docs.js\"></script>\n");
      out.write("    <script src=\"js/github.info.js\"></script>\n");
      out.write("    <!-- Custom styles for this template -->\n");
      out.write("    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("            <!-- Bootstrap core CSS -->\n");
      out.write("    <link href=\"http://getbootstrap.com/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n");
      out.write("            <!-- Custom styles for this template -->\n");
      out.write("    <link href=\"http://getbootstrap.com/examples/signin/signin.css\" rel=\"stylesheet\">\n");
      out.write("  </head>\n");
      out.write("  \n");
      out.write("    <body class=\"metro\" style=\"background-color: #efeae3\">\n");
      out.write("        <div class=\"container\" >\n");
      out.write("            <div id=\"tableContainer\">\n");
      out.write("                <p id=\"dbname\" hidden>");
out.print(request.getParameter("dbname"));
      out.write("</p>\n");
      out.write("                \n");
      out.write("                ");

                String dbname = request.getParameter("dbname");
                session.setAttribute("dbname",dbname);
                
      out.write("\n");
      out.write("                <h3>There are <span data-bind=\"text: tables().length\"></span> tables in this database.\n");
      out.write("\t\t    <button class=\"btn btn-default\" data-bind=\"click: findAll\">Refresh</button>\n");
      out.write("\t\t    \t</h3>\n");
      out.write("                    <table class=\"table striped hovered dataTables\" id=\"dataTables-1\" cellspacing=\"0\" width=\"100%\">\n");
      out.write("\t\t            \t\t            <thead>\n");
      out.write("\t\t                <tr>  \n");
      out.write("                                    <th>#</th>\n");
      out.write("\t\t                    <th>table</th>\n");
      out.write("\t\t                 \n");
      out.write("\t\t                </tr> \n");
      out.write("\t\t            </thead> \n");
      out.write("                            <tfoot>\n");
      out.write("\t\t                <tr>  \n");
      out.write("                                    <th>#</th>\n");
      out.write("\t\t                    <th>table</th>\n");
      out.write("\t\t                </tr> \n");
      out.write("\t\t            </tfoot>\n");
      out.write("\t\t            <tbody data-bind=\"foreach: tables\">\n");
      out.write("\t\t                <tr>  \n");
      out.write("                                    <td data-bind=\"text: $index\"></td> \n");
      out.write("\n");
      out.write("                                    <td ><a data-bind=\"text: table, attr:{href:'schema.jsp?tablename=' + table()}\"></a></td>\n");
      out.write("                                    \n");
      out.write("\t\t                </tr>     \n");
      out.write("\t\t            </tbody>\n");
      out.write("                            \n");
      out.write("\t\t        </table>\n");
      out.write("      </div>\n");
      out.write("            </div>\n");
      out.write("    <script>\n");
      out.write("  loadalert();\n");
      out.write("    $(document).ready(function(){\n");
      out.write("    $('#dataTables-1').DataTable();\n");
      out.write("});\n");
      out.write("\n");
      out.write("\n");
      out.write("    </script>\n");
      out.write("    <script src=\"js/hitua.js\"></script>\n");
      out.write("\n");
      out.write("<!--    <script src=\"http://getbootstrap.com/assets/js/ie-emulation-modes-warning.js\"></script>-->\n");
      out.write("    <script type=\"text/javascript\" src=\"javascripts/jquery-2.1.3.min.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"javascripts/bootstrap.min.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"javascripts/knockout-3.2.0.js\"></script>\n");
      out.write("    <script type=\"text/javascript\" src=\"javascripts/knockout_models/tableViewModel.js\"></script>\n");
      out.write("  </body>\n");
      out.write("</html>\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
