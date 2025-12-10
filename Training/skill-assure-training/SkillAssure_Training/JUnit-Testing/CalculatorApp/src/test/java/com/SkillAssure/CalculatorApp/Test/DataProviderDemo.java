package com.SkillAssure.CalculatorApp.Test;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import com.SkillAssure.CalculatorApp.Calculators.MathCalculator;
@RunWith(Parameterized.class)	
public class DataProviderDemo {

	private int n1Int;
	private int n2Int;

	public DataProviderDemo(int n1Int, int n2Int) {
		super();
		this.n1Int = n1Int;
		this.n2Int = n2Int;

	}


	@Test
	public void testAdd1() {
		System.out.println("Inside testAdd1()");
		assertEquals(n1Int+n2Int, MathCalculator.add(n1Int, n2Int));
	}

	@BeforeClass
	public static void setUp() {
		System.out.println("Inside setUp()");

	}

	@AfterClass
	public static void tearDown() {
		System.out.println("Inside tearDown()");

	}

	@Before
	public void preTestActions() {
		System.out.println("Inside preTestActions()");

	}	

	@After
	public void postTestActions() {
		System.out.println("Inside postTestActions()");

	}
	
	@Parameterized.Parameters
	   public static Collection primeNumbers() {
	      return Arrays.asList(new Object[][] {
	         { 2, 2},
	      });
	   }
	
}
