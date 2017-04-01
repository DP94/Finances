package com.vypersw.finances.user;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_CURRENCY")
public class Currency implements Serializable {

	public Currency() {
	}
	
	@Id
	@Column(name = "CURRENCY_ID")
	@GeneratedValue
	private Long currencyId;
	
	@Column(name = "CURRENCY_CODE")
	private String currencyCode;
	
	public Long getCurrencyId() {
		return currencyId;
	}

	public void setCurrencyId(Long currencyId) {
		this.currencyId = currencyId;
	}

	public String getCurrencyCode() {
		return currencyCode;
	}

	public void setCurrencyCode(String currencyCode) {
		this.currencyCode = currencyCode;
	}
}
