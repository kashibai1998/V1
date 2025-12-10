
public class Customer {
	
	private String custId;
	private String name;
	private String email;
	
	public Customer(String custId, String name, String email) {
		super();
		this.custId = custId;
		this.name = name;
		this.email = email;
	}

	public String getCustId() {
		return custId;
	}

	public void setCustId(String custId) {
		this.custId = custId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	
	

}
