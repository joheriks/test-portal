# Vaadin Portlet Starter Project
Project to get started with a Vaadin application that is running inside a 
portlet in a portal, as defined in the JSR-286 (Java Portlet API 2.0) standard.
Clone the repository and import the project to the IDE of your choice as a Maven
project. You need to have Java 8 or 11 installed.

To run the portlet application, it must be deployed to a portal. We currently
support Apache Pluto (https://portals.apache.org/pluto/). The easiest way
to try out your application is to run a Maven goal which starts an embedded
Tomcat 8 serving the Pluto Portal driver:

`mvn -Pdemo package cargo:run`

Visit http://localhost:8080/pluto, and log in as `pluto`, password `pluto`.
The starter portlet (`TestPortlet1`) appears to the right of the "About" 
portlet. 

To run the integration tests:

`mvn -Pdemo -Pintegration-tests verify` 

TODO: Production deployment instructions
