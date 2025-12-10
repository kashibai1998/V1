package com.SkillAssure.CalculatorApp.Test;

import static org.junit.Assert.assertEquals;
import org.junit.Assert;
import org.junit.Test;

import com.SkillAssure.CalculatorApp.Calculators.MathCalculator;

public class AnnotationsAndAssertionsLab1 {

	// Gives an understanding of the Assertions and @Test annotations
	@Test
	public void testAdd1() {
		assertEquals(5, MathCalculator.add(3, 2));
	}

	// Test this method on MathCalculator.add(a, b)
	// a & b should be float values
	// Use the assertEquals method
	@Test
	public void testAdd2() {
		float expectedDoubleValue = 6.6f;
		float actualDoubleValue = MathCalculator.add(3.4f, 3.2f);
		assertEquals(expectedDoubleValue, actualDoubleValue, 0.01);

	}

}
