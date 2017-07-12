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

public class ISAAccountWidget extends AccountWidget {
	private static Binder binder = GWT.create(Binder.class);

	interface Binder extends UiBinder<Widget, ISAAccountWidget> {
	}

	@UiField
	Label accountName;

	@UiField
	Label accountBalance;

    OMSVGSVGElement svg;
    OMSVGCircleElement c2;
	
	public ISAAccountWidget() {
		initWidget(binder.createAndBindUi(this));
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
	}
}
