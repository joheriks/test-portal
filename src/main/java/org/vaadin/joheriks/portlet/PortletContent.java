package org.vaadin.joheriks.portlet;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.formlayout.FormLayout;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.portal.VaadinPortlet;

public class PortletContent extends VerticalLayout {

    public PortletContent() {
        VaadinPortlet portlet = VaadinPortlet.getCurrent();
        String name = portlet.getPortletName();
        String serverInfo = portlet.getPortletContext().getServerInfo();
        Button button = new Button("Click me", event -> Notification.show(
                "Hello from " + name + " running in " + serverInfo + "!"));
        add(button);
    }
}
