package com.vypersw.finances.dto.currency;

import java.io.Serializable;

public class CurrencyDTO implements Serializable {
	
	private String currencyCode;
	private Long currencyId;
	
	public CurrencyDTO() {
		
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}

	public Long getCurrencyId() {
		return currencyId;
	}

	public void setCurrencyId(Long currencyId) {
		this.currencyId = currencyId;
	}
}
