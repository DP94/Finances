package com.vypersw.finances.client.widget;

import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.SpanElement;
import com.google.gwt.user.client.ui.Button;

public class MenuButton extends Button {
	
	private SpanElement icon;
	private SpanElement textElement;
	
	public static final String CLASS_NAME = "finances-menu-button";
	
	public MenuButton() {
		super(Document.get().createPushButtonElement());
		getButtonElement().setClassName(CLASS_NAME);
		
		icon = Document.get().createSpanElement();
		getButtonElement().appendChild(icon);
	}
	
	public void setIconStyle(String style) {
		icon.setClassName("finances-menu-button-icon " + style);
	}
	
	@Override
	public void setText(String text) {
		if (textElement == null) {
			textElement = Document.get().createSpanElement();
			getButtonElement().appendChild(textElement);
			textElement.setClassName("finances-menu-button-label");
		}
		this.textElement.setInnerText(text);
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
