package com.ros.inventory.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ros.inventory.Exception.InventoryException;
import com.ros.inventory.service.IInvoiceManager;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/invoice")
@CrossOrigin("*")
public class InvoiceController {
	@Autowired
	IInvoiceManager invoicemanager;

	@GetMapping("/getinvoice")
	@ResponseBody
	@Operation(summary="It will show list of Invoice")
	public ResponseEntity<?> getInvoice() {
		ResponseEntity<?> response;
		try {
			response = new ResponseEntity(invoicemanager.getInvoice(), HttpStatus.OK);
		} catch (InventoryException e) {

			response = new ResponseEntity(e.getMessage(), HttpStatus.OK);
			e.printStackTrace();
		}

		return response;
	}

	@GetMapping("/view/{id}")
	@ResponseBody
	@Operation(summary="It will fetch the detail invoice for particular invoice id")
	public ResponseEntity<?> view(@PathVariable(name = "id") UUID id) {
		ResponseEntity<?> response;
		try {
			response = new ResponseEntity(invoicemanager.viewInvoice(id), HttpStatus.OK);
		} catch (InventoryException e) {

			response = new ResponseEntity(e.getMessage(), HttpStatus.OK);
			e.printStackTrace();
		}

		return response;
	}

	@GetMapping("/monthlyview/{date}")
	@ResponseBody
	@Operation(summary="It will show invoice list for particular month by entring start date of month")
	public ResponseEntity<?> monthlyview(@PathVariable(name = "date") String date) {
		ResponseEntity<?> response;
		try {
			response = new ResponseEntity(invoicemanager.monthlyviewInvoice(date), HttpStatus.OK);
		} catch (InventoryException e) {

			response = new ResponseEntity(e.getMessage(), HttpStatus.OK);
			e.printStackTrace();
		}

		return response;
	}

	@GetMapping("/yearlyview/{yyyy}")
	@ResponseBody
	@Operation(summary="It will show the Invoice list for particular year")
	public ResponseEntity<?> yearlyview(@PathVariable(name = "yyyy") int yyyy) {

		ResponseEntity<?> response;
		try {
			response = new ResponseEntity(invoicemanager.yearlyviewInvoice(yyyy), HttpStatus.OK);
			// response = new ResponseEntity(invoicemanager.bulkDownloadInvoice(id),
			// HttpStatus.OK);
		} catch (InventoryException e) {

			response = new ResponseEntity(e.getMessage(), HttpStatus.OK);
			e.printStackTrace();
		}

		return response;
	}

}
