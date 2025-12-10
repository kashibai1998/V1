import java.util.Date;
import java.util.List;

public class Assessment {

    private long assessmentId;
    private String desc;
    private int noQuestions;
    private Date dtAssessment;
    private List<Question> questions;

    public Assessment(long assessmentId, String desc, int noQuestions, Date dtAssessment) {
        this.assessmentId = assessmentId;
        this.desc = desc;
        this.noQuestions = noQuestions;
        this.dtAssessment = dtAssessment;
    }

    public long getAssessmentId() {
        return assessmentId;
    }

    public void setAssessmentId(long assessmentId) {
        this.assessmentId = assessmentId;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getNoQuestions() {
        return noQuestions;
    }

    public void setNoQuestions(int noQuestions) {
        this.noQuestions = noQuestions;
    }

    public Date getDtAssessment() {
        return dtAssessment;
    }

    public void setDtAssessment(Date dtAssessment) {
        this.dtAssessment = dtAssessment;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public int getTotalMarks(){
        return questions.stream().mapToInt(q -> q.getMarks()).sum();
    }
}
