import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TestMain {
    public static void main(String[] Args){
        MCQQuestion mcqQuestion1 = new MCQQuestion("MCQ q1", 20);
        MCQQuestion mcqQuestion2 = new MCQQuestion("MCQ q2", 10);

        HandsOnQuestion handsOnQuestion1 = new HandsOnQuestion("HO q1", "ref Doc1", 15);
        HandsOnQuestion handsOnQuestion2 = new HandsOnQuestion("HO q2", "ref Doc2", 15);


        List<Question> questions1 = new ArrayList<>();
        questions1.add(mcqQuestion1);
        questions1.add(handsOnQuestion1);

        List<Question> questions2 = new ArrayList<>();
        questions2.add(handsOnQuestion2);
        questions2.add(mcqQuestion2);

        Assessment assessment1 = new Assessment(1, "assessment1", 2, new Date());
        assessment1.setQuestions(questions1);

        Assessment assessment2 = new Assessment(1, "assessment1", 2, new Date());
        assessment2.setQuestions(questions2);

        List<Assessment> assessments1 = new ArrayList<>();
        assessments1.add(assessment1);
        List<Assessment> assessments2 = new ArrayList<>();
        assessments2.add(assessment2);


        Iteration[] iterations = new Iteration[3];
        iterations[0] = new Iteration(1, "goal1", new Course());
        iterations[0].setAssessments(assessments1);
        iterations[1] = new Iteration(2, "goal2", new Course());
        iterations[1].setAssessments(assessments2);
        iterations[2] = new Iteration(3, "goal3", new Course());
        iterations[2].setAssessments(assessments1);

        SkillAssureTrainingModel skillAssureTrainingModel = new SkillAssureTrainingModel("company1");
        skillAssureTrainingModel.setIterations(iterations);

        System.out.println(skillAssureTrainingModel.getNumHandsOnBasedAssessments());
        System.out.println(skillAssureTrainingModel.getNumMCQBasedAssessments());
        System.out.println(skillAssureTrainingModel.getTotalAssessmentsInTheTraining());
        System.out.println(skillAssureTrainingModel.getTotalScoreOfAllAssessments());
        System.out.println();
    }
}
