package com.vypersw.finances.services;

import java.util.ArrayList;

import com.vypersw.finances.dto.currency.CurrencyDTO;

public interface CurrencyService {
	public ArrayList<CurrencyDTO> getAllCurrencies();
}
