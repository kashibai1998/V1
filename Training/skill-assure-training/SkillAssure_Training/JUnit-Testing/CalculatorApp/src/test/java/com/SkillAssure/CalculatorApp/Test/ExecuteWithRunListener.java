package com.SkillAssure.CalculatorApp.Test;

 

import org.junit.runner.JUnitCore;

 

public class ExecuteWithRunListener {
    
    public static void main(String[] args)
    {
        JUnitCore runner = new JUnitCore();
        runner.addListener(new ExecutionListener());
        runner.run(AnnotationsAndAssertions.class, AnnotationWorkFlow.class);
    }

 

}
