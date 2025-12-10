
public class Membership {
	
	private String typeOfMembership;
	private double discount;
	private double fees;
	
	public Membership(String typeOfMembership, double discount, double fees) {
		super();
		this.typeOfMembership = typeOfMembership;
		this.discount = discount;
		this.fees = fees;
	}
	
	public String getTypeOfMembership() {
		return typeOfMembership;
	}
	public void setTypeOfMembership(String typeOfMembership) {
		this.typeOfMembership = typeOfMembership;
	}
	public double getDiscount() {
		return discount;
	}
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	public double getFees() {
		return fees;
	}
	public void setFees(double fees) {
		this.fees = fees;
	}
	
	

}
