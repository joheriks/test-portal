# test-portal
Pluto portal with single portlet for testing purposes

To start Tomcat 8 with Pluto 3.1.0 portal driver and single portlet:

- `mvn clean package cargo:run`
- Visit http://localhost:8080/pluto
- Log in as `pluto`, password `pluto`
- The test portlet (`TestPortlet1`) is to the right of the "About" portlet 
