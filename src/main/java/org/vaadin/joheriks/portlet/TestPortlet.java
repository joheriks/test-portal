package org.vaadin.joheriks.portlet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.vaadin.flow.portal.VaadinPortlet;

public class TestPortlet extends VaadinPortlet {

    public static Logger logger = LoggerFactory.getLogger(TestPortlet.class);

    public String getName() {
        return "testsuite";
    }
}
