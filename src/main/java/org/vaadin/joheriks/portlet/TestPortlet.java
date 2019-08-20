package org.vaadin.joheriks.portlet;

import javax.portlet.GenericPortlet;
import javax.portlet.PortletConfig;
import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Portlet-under-test goes here
 */
public class TestPortlet extends GenericPortlet {

    public static Logger logger = LoggerFactory.getLogger(TestPortlet.class);

    @Override
    public void init(PortletConfig config) throws PortletException {
        super.init(config);
        logger.debug("Initializing");
    }

    @Override
    protected void doView(RenderRequest request, RenderResponse response)
            throws PortletException, IOException {
        logger.debug("Rendering view");
        response.getWriter().write("<b>HELLO PORTLET</b>");
    }
}
