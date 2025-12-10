package com.SkillAssure.CalculatorApp.Test;

import static org.junit.Assert.assertEquals;
import org.junit.runners.MethodSorters;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.experimental.categories.Category;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.*;

import com.SkillAssure.CalculatorApp.Calculators.MathCalculator;

interface FastTests {
}
interface SlowTests {
}

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(Parameterized.class)	
public class TestPrioritization {

	private int n1Int;
	private int n2Int;
	private int result;

	public TestPrioritization(int n1Int, int n2Int ,int result) {
		super();
		this.n1Int = n1Int;
		this.n2Int = n2Int;
		this.result = result;
	}

	@Category({SlowTests.class})
	@Test
	public void testAdd1() {
		System.out.println("Inside slow test");
		assertEquals(result, MathCalculator.add(n1Int, n2Int));
	}
	
	@Category({FastTests.class})
	@Test
	public void testAdd2() {
		System.out.println("Inside fast test");
		assertEquals(result, MathCalculator.add(n1Int, n2Int));
	}
	
	@Test
	public void testAdd10() {
		System.out.println("Inside testAdd1()");
		assertEquals(result, MathCalculator.add(n1Int, n2Int));
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
	         { 2, 2 , 4}
	      });
	   }
	
}
