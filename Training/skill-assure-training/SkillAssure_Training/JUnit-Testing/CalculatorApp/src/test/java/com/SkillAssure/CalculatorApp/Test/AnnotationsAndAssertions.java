package com.SkillAssure.CalculatorApp.Test;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.SkillAssure.CalculatorApp.Calculators.MathCalculator;

public class AnnotationsAndAssertions {
	
	//Gives an understanding of the Assertions and @Test annotations
	@Test
	public void testAdd1() {
		assertEquals(5, MathCalculator.add(3, 2));
	}
	
}
