import java.util.HashMap;
import java.util.Map;

public class MembershipFactory {

	private static MembershipFactory instance;
	
	private Map<String, Membership> pool;
	
	private MembershipFactory() {
		this.pool = new HashMap<String, Membership>();
		this.pool.put("GOLD", new Membership("GOLD", 2000.0, 25000.0));
		this.pool.put("SILVER", new Membership("SILVER", 1500.0, 20000.0));
	}
	
	public Membership createMembership(String typeOfMembership, double discount, double fees) {
		Membership membership = new Membership(typeOfMembership, discount, fees);
		return membership;
	}
	
	public Membership create(String typeOfMembership) {
		return this.pool.get(typeOfMembership);
	}
	
	
	public static MembershipFactory getInstance() {
		if(instance == null) {
			instance = new MembershipFactory();
		}
		return instance;
		
	}
}
