package com.vypersw.finances.client.widget;

import org.vectomatic.dom.svg.OMSVGCircleElement;
import org.vectomatic.dom.svg.OMSVGDocument;
import org.vectomatic.dom.svg.OMSVGSVGElement;
import org.vectomatic.dom.svg.utils.OMSVGParser;
import org.vectomatic.dom.svg.utils.SVGConstants;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Widget;

public class SavingsAccountWidget extends AccountWidget {
	private static Binder binder = GWT.create(Binder.class);

	interface Binder extends UiBinder<Widget, SavingsAccountWidget> {
	}

	@UiField
	Label accountName;

	@UiField
	Label accountBalance;

    OMSVGSVGElement svg;
    OMSVGCircleElement c2;
	
	public SavingsAccountWidget(double percentage) {
		initWidget(binder.createAndBindUi(this));
		setUpAccountSVG(percentage);
	}

	private void setUpAccountSVG(double value) {
		OMSVGDocument doc = OMSVGParser.currentDocument();
		svg = doc.createSVGSVGElement();
		OMSVGCircleElement circle = doc.createSVGCircleElement(200f, 200f, 180f);
		circle.getStyle().setSVGProperty(SVGConstants.CSS_STROKE_DASHOFFSET_PROPERTY, "0");
		circle.getStyle().setSVGProperty(SVGConstants.CSS_STROKE_DASHARRAY_PROPERTY, "1130.96");
		c2 = doc.createSVGCircleElement(200f, 200f, 180f);
		c2.getStyle().setSVGProperty(SVGConstants.CSS_STROKE_DASHARRAY_PROPERTY, "1130.96");
		c2.getElement().setAttribute(SVGConstants.SVG_CLASS_ATTRIBUTE, "bar");
		svg.appendChild(circle);
		svg.appendChild(c2);
		main.getElement().appendChild(svg.getElement());
		c2.getStyle().setSVGProperty(SVGConstants.CSS_STROKE_DASHOFFSET_PROPERTY,
				getOffSetValue(value, c2.getAttribute(SVGConstants.SVG_R_ATTRIBUTE)) + "px");
		circle.getStyle().setSVGProperty(SVGConstants.SVG_FILL_ATTRIBUTE, "transparent");
		c2.getStyle().setSVGProperty(SVGConstants.SVG_FILL_ATTRIBUTE, "transparent");
	}

	private String getOffSetValue(double value, String r) {
		double radius = Double.parseDouble(r);
		double circumfrance = Math.PI * (radius * 2);
		return Double.toString(((100 - value) / 100) * circumfrance);
	}

	@Override
	public void setAccountBalance(String text) {
		accountBalance.setText(text);
	}

	@Override
	public void setAccountName(String name) {
		accountName.setText(name);
	}

	@Override
	public void setID(String id) {
		super.id = id;
		c2.setAttribute(SVGConstants.SVG_ID_ATTRIBUTE, id);
		main.getElement().setAttribute(SVGConstants.SVG_ID_ATTRIBUTE, "svg" + id);
	}

	@Override
	public void setVisible(boolean visible) {
		setVisibility(visible, id);
	}

	private static native void setVisibility(boolean visible, String id) /*-{
		if (visible) {
			$wnd.$("#svg" + id).show();
			$wnd.$("#" + id).css({
				strokeDashoffset : 500
			});
		} else {
			$wnd.$("#svg" + id).hide();
			$wnd.$("#" + id).css({
				strokeDashoffset : 1100
			});
		}
	}-*/;

}
