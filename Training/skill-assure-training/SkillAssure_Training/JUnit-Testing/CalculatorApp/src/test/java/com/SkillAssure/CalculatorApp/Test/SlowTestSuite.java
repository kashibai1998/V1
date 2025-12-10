package com.SkillAssure.CalculatorApp.Test;

import org.junit.experimental.categories.Categories.IncludeCategory;
import org.junit.runner.RunWith;
import org.junit.runners.Suite.SuiteClasses;
import org.junit.experimental.categories.Categories;

@RunWith(Categories.class)
@IncludeCategory(SlowTests.class)
@SuiteClasses({AnnotationsAndAssertions.class, AnnotationWorkFlow.class,DataProviderDemo.class,TestPrioritization.class})
 // Note that Categories is a kind of Suite
 public class SlowTestSuite {
     // Will run A.b and B.d, but not A.a and A.c
 }