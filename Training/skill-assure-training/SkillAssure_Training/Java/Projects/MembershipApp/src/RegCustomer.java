
public class RegCustomer extends Customer {
	
	private String dtReg;
	private Membership membership;
	
	public RegCustomer(String custId, String name, String email) {
		super(custId, name, email);
		// TODO Auto-generated constructor stub
	}
	
	public String getDtReg() {
		return dtReg;
	}

	public void setDtReg(String dtReg) {
		this.dtReg = dtReg;
	}

	public Membership getMembership() {
		return membership;
	}

	public void setMembership(Membership membership) {
		this.membership = membership;
	}
	
	
 
}
