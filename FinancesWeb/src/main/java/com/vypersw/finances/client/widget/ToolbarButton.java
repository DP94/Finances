package com.vypersw.finances.client.widget;

import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.SpanElement;
import com.google.gwt.user.client.ui.Button;

public class ToolbarButton extends Button {
	
	private SpanElement icon;
	private SpanElement textElement;
	private String type;
	
	public static final String CLASS_NAME = "finances-toolbar-button";
	
	public ToolbarButton() {
		super(Document.get().createPushButtonElement());
		getButtonElement().setClassName(CLASS_NAME);
		
		icon = Document.get().createSpanElement();
		getButtonElement().appendChild(icon);
	}
	
	public void setIconStyle(String style) {
		icon.setClassName("finances-toolbar-button-icon " + style);
	}
	
	@Override
	public void setText(String text) {
		if (textElement == null) {
			textElement = Document.get().createSpanElement();
			getButtonElement().appendChild(textElement);
			textElement.setClassName("finances-toolbar-button-label");
		}
		this.textElement.setInnerText(text);
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public SpanElement getIcon() {
		return icon;
	}
	public void setIcon(SpanElement icon) {
		this.icon = icon;
	}
	
	public SpanElement getSpanText() {
		return textElement;
	}
	
	public void setText(SpanElement text) {
		this.textElement = text;
	}
}
