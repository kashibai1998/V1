import java.util.List;

public class Iteration {
    private int iterationNo;
    private String goal;
    private Course course;
    private List<Assessment> assessments;

    public Iteration(int iterationNo, String goal, Course course) {
        this.iterationNo = iterationNo;
        this.goal = goal;
        this.course = course;
    }

    public int getIterationNo() {
        return iterationNo;
    }

    public void setIterationNo(int iterationNo) {
        this.iterationNo = iterationNo;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public List<Assessment> getAssessments() {
        return assessments;
    }

    public void setAssessments(List<Assessment> assessments) {
        this.assessments = assessments;
    }
}
