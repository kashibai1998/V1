package com.SkillAssure.CalculatorApp.Operations;

public class StringOperations {

	public static String add(String s1, String s2)
	{
		return s1+s2;
	}
	public static boolean isSubString(String searchKey, String word)
	{
		return word.contains(searchKey);
	}
}
