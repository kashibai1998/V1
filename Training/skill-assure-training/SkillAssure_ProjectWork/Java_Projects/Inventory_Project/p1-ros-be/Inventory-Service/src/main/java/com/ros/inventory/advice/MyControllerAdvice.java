package com.ros.inventory.advice;

import java.util.NoSuchElementException;

import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.ros.inventory.Exception.InventoryException;


@ControllerAdvice
public class MyControllerAdvice {

	// If value not found error occur, it handle this exception
	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<String> handleEmptyException(EntityNotFoundException elementException){
		
		return new ResponseEntity<String>("No data found with this ID, please check your ID",HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(ArrayIndexOutOfBoundsException.class)
	public ResponseEntity<String> handlearrayException(ArrayIndexOutOfBoundsException elementException){
		
		return new ResponseEntity<String>("Array is out of bound",HttpStatus.INSUFFICIENT_STORAGE);
	}
	
	@ExceptionHandler(InventoryException.class)
	public ResponseEntity<String> handlenullException(InventoryException elementException){
		
		return new ResponseEntity<String>("No data found ..!, please enter a valid input",HttpStatus.NOT_FOUND);
	}
	
	
}
