package com.ros.inventory.controller.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BankInfoDto {
	private UUID bankInfoId;

	private String bankName;

	private String bankBranchName;

	private String accountHolderName;

	private String bankIFSCCode;

	private long accountNumber;

}
