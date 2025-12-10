import java.util.ArrayList;
import java.util.List;

public class Unit {
	
	private String name;
	private int durationHrs;
	private List<Topic> topics = new ArrayList<Topic>();
	
	public Unit(String name, int durationHrs) {
		super();
		this.name = name;
		this.durationHrs = durationHrs;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDurationHrs() {
		return durationHrs;
	}

	public void setDurationHrs(int durationHrs) {
		this.durationHrs = durationHrs;
	}

	public List<Topic> getTopics() {
		return topics;
	}

	public void setTopics(List<Topic> topics) {
		this.topics = topics;
	}
	
	
	
	

}
