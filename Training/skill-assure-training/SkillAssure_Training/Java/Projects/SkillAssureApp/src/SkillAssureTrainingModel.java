public class SkillAssureTrainingModel {
    private String clientName;
    private Iteration[] iterations;

    public SkillAssureTrainingModel(String clientName) {
        this.clientName = clientName;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public Iteration[] getIterations() {
        return iterations;
    }

    public void setIterations(Iteration[] iterations) {
        this.iterations = iterations;
    }

    public int getTotalAssessmentsInTheTraining(){
        int total = 0;
        for(Iteration iteration : iterations){
            total += iteration.getAssessments().size();
        }
        return total;
    }
    

    public int getNumMCQBasedAssessments(){
        long MCQAssessments = 0;
        for(Iteration iteration : iterations) {
            for(Assessment assessment : iteration.getAssessments()){
                MCQAssessments += assessment.getQuestions().stream().filter(question -> question instanceof MCQQuestion).count();
            }
        }
        return (int)MCQAssessments;
    }

    public int getNumHandsOnBasedAssessments(){
        long NumHandsOnBasedAssessments = 0;
        for(Iteration iteration : iterations) {
            for(Assessment assessment : iteration.getAssessments()){
                NumHandsOnBasedAssessments += assessment.getQuestions().stream().filter(question -> question instanceof HandsOnQuestion).count();
            }
        }
        return (int)NumHandsOnBasedAssessments;
    }

    public int getTotalScoreOfAllAssessments(){
        int score = 0;
        for (Iteration iteration : iterations){
            score += iteration.getAssessments().stream().mapToInt(Assessment::getTotalMarks).sum();
        }
        return score;
    }
}
