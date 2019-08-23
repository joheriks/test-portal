package org.vaadin.joheriks.portlet;

import com.vaadin.flow.component.WebComponentExporter;
import com.vaadin.flow.component.webcomponent.WebComponent;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;

@Theme(Lumo.class)
public class PortletContentExporter extends WebComponentExporter<PortletContent> {

    public PortletContentExporter() {
        super("portlet-content");
    }

    protected void configureInstance(WebComponent<PortletContent> webComponent, PortletContent component) {

    }
}
