package com.SkillAssure.CalculatorApp.Test;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.SkillAssure.CalculatorApp.Calculators.MathCalculator;

public class AnnotationWorkFlow {
	
	//Run it and check which methods are getting executes 1st
	//Know the importance of annotations used there
	@Test
	public void testAdd1() {
		System.out.println("Inside testAdd1()");
		assertEquals(5, MathCalculator.add(3, 2));
	}
	
	@Test
	public void testAdd2() {
		System.out.println("Inside testAdd2()");

		assertEquals(5.5, MathCalculator.add(3.0, 2.5),0.001);
	}
	
	@BeforeClass
	public static void setUp() {
		System.out.println("Inside setUp()");

	}
	
	
	@Before
	public void preTestActions() {
		System.out.println("Inside preTestActions()");

	}	
	
}
