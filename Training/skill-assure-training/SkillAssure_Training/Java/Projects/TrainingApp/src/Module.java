import java.util.ArrayList;
import java.util.List;

public class Module {
	
	private String name;
	private List<Unit> units = new ArrayList<Unit>();
	
	public Module(String name) {
		super();
		this.name = name;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Unit> getUnits() {
		return units;
	}
	public void setUnits(List<Unit> units) {
		this.units = units;
	}
	
}
