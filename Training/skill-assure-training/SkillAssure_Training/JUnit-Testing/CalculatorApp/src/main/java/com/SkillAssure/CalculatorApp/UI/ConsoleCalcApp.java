package com.SkillAssure.CalculatorApp.UI;



import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.SkillAssure.CalculatorApp.Calculators.MathCalculator;
import com.SkillAssure.CalculatorApp.Operations.StringOperations;

public class ConsoleCalcApp {
	
	//Create Logger object
	private static Logger log = LogManager.getLogger(ConsoleCalcApp.class);
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(MathCalculator.add(2, 3));
		System.out.println(MathCalculator.add(2.5, 3.5));
		System.out.println(StringOperations.add("Skill","Assure"));
		System.out.println(StringOperations.isSubString("Skill","SkillAssure"));
		
		//Try out the levels
		
	}
}
