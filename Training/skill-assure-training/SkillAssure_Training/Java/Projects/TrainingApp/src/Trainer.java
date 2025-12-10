import java.util.ArrayList;
import java.util.List;

public class Trainer {
	
	private long id;
	private String name;
	private Organization organization; //Trainer has one Organization
	private List<Training> trainings = new ArrayList<Training>();
	private List<Trainee> trainees = new ArrayList<Trainee>();
	
	
	public Trainer(long id, String name, Organization organization) {
		super();
		this.id = id;
		this.name = name;
		this.organization = organization;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Organization getOrganization() {
		return organization;
	}


	public void setOrganization(Organization organization) {
		this.organization = organization;
	}


	public List<Training> getTrainings() {
		return trainings;
	}


	public void setTrainings(List<Training> trainings) {
		this.trainings = trainings;
	}


	public List<Trainee> getTrainees() {
		return trainees;
	}


	public void setTrainees(List<Trainee> trainees) {
		this.trainees = trainees;
	}

	
	
	

}
