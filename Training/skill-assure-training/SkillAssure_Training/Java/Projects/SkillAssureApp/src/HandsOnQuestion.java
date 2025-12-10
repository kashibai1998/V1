public class HandsOnQuestion extends Question{
    private String questionDescription;
    private String referenceDocument;

    public HandsOnQuestion(String questionDescription, String referenceDocument, int marks) {
        this.questionDescription = questionDescription;
        this.referenceDocument = referenceDocument;
        this.setMarks(marks);
    }

    public String getQuestionDescription() {
        return questionDescription;
    }

    public void setQuestionDescription(String questionDescription) {
        this.questionDescription = questionDescription;
    }

    public String getReferenceDocument() {
        return referenceDocument;
    }

    public void setReferenceDocument(String referenceDocument) {
        this.referenceDocument = referenceDocument;
    }
}
