# Portlet starter
Application to get started with Vaadin portlet. Pluto portal for demo and testing purposes
under profile `integration-tests`.

To start Tomcat 8 with Pluto 3.1.0 portal driver and single portlet:
- `mvn -Pintegration-tests clean package cargo:run`
- Visit http://localhost:8080/pluto
- Log in as `pluto`, password `pluto`
- The test portlet (`TestPortlet1`) is to the right of the "About" portlet 

To run the ITs:
- `mvn -Pintegration-tests verify` 

Portlet can alternatively be packaged as war (`mvn clean install`) and installed
manually into the deployment directory of a portal.