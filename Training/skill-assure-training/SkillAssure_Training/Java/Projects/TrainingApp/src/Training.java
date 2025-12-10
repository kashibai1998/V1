import java.util.ArrayList;
import java.util.List;

public class Training {
	
	private String name;
	private Trainer trainer;
	private List<Trainee> trainees = new ArrayList<Trainee>();
	private Course course;
	
	public Training(String name) {
		super();
		this.name = name;
	}

	public Training(String name, Trainer trainer, Course course) {
		super();
		this.name = name;
		this.trainer = trainer;
		this.course = course;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Trainer getTrainer() {
		return trainer;
	}

	public void setTrainer(Trainer trainer) {
		this.trainer = trainer;
	}

	public List<Trainee> getTrainees() {
		return trainees;
	}

	public void setTrainees(List<Trainee> trainees) {
		this.trainees = trainees;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}
	
	public int getNumberOfTrainees() {
		return trainees.size();
		
	}
	
	public String getTrainingOrgName() {
		return trainer.getOrganization().getName();
		
	}
	
	public int getTrainingDurationInHrs() {
		List<Module> modules = new ArrayList<Module>();
		modules = getCourse().getModules();
		int durationInHrs= 0;
		for(Module module: modules) {
			for(Unit unit: module.getUnits()) {
				durationInHrs += unit.getDurationHrs();
				
			}
		}
		
		return durationInHrs;
		
	}
	
	
	
	

}
