
public class MCQQuestion extends Question{
    private String questionName;
    private String Option1;
    private String Option2;
    private String Option3;
    private String Option4;
    private String rightOption;

    public MCQQuestion(String questionName, int marks) {
        this.questionName = questionName;
        this.setMarks(marks);
    }

    public MCQQuestion(String questionName, String option1, String option2, String option3, String option4, String rightOption) {
        this.questionName = questionName;
        Option1 = option1;
        Option2 = option2;
        Option3 = option3;
        Option4 = option4;
        this.rightOption = rightOption;
    }

    public String getQuestionName() {
        return questionName;
    }

    public void setQuestionName(String questionName) {
        this.questionName = questionName;
    }

    public String getOption1() {
        return Option1;
    }

    public void setOption1(String option1) {
        Option1 = option1;
    }

    public String getOption2() {
        return Option2;
    }

    public void setOption2(String option2) {
        Option2 = option2;
    }

    public String getOption3() {
        return Option3;
    }

    public void setOption3(String option3) {
        Option3 = option3;
    }

    public String getOption4() {
        return Option4;
    }

    public void setOption4(String option4) {
        Option4 = option4;
    }

    public String getRightOption() {
        return rightOption;
    }

    public void setRightOption(String rightOption) {
        this.rightOption = rightOption;
    }
}

