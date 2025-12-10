package com.ros.inventory.controller.dto;

import java.util.UUID;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SupplierPrimaryContactDto {

	private UUID contactInfoId;

	private String firstName;

	private String middleName;

	private String lastName;

	private String contactType;

	private String email;

	private long fax;

	private long mobile;

	private long telephone;

}
