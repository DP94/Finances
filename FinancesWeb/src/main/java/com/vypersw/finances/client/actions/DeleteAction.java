package com.vypersw.finances.client.actions;

import com.vypersw.finances.client.results.DeleteResult;
import com.vypersw.finances.dto.VyperDTO;

public class DeleteAction extends VyperAction<DeleteResult> {

    private VyperDTO dto;

    public DeleteAction() {
    }

    public VyperDTO getDto() {
        return dto;
    }

    public void setDto(VyperDTO dto) {
        this.dto = dto;
    }
}
