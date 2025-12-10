import java.util.ArrayList;
import java.util.List;

public class TestMain {

	public static void main(String[] args) {
		// Create a company
		
		Company comp = new Company("Company");
		
		//Create CUstomers
		Customer c1 = new Customer("1", "Suchi", "suchi@gmail.com");
		Customer c2 = new Customer("2", "Sandhya", "sandhya@gmail.com");
		
		//Create RegCustomers
		RegCustomer rc1 = new RegCustomer("3", "Shruthi", "sru@gmail.com");
		RegCustomer rc2 = new RegCustomer("4", "Anand", "anand@gmail.com");
		rc1.setDtReg("22-9-20");
		rc2.setDtReg("25-7-21");
		
		MembershipFactory memfactory = MembershipFactory.getInstance();
		rc1.setMembership(memfactory.create("GOLD"));
		rc2.setMembership(memfactory.create("SILVER"));
		
		List<Customer> cus = new ArrayList<Customer>();
		cus.add(c1);
		cus.add(c2);
		cus.add(rc1);
		cus.add(rc2);
		
		//adding all customers to comp
		comp.setCustomers(cus);
	
		displayCompDetails(comp);
		
		

	}

	private static void displayCompDetails(Company comp) {
		for(Customer customer: comp.getCustomers()) {
			System.out.println("Cust Id : " + customer.getCustId());
			System.out.println("Cust Name : " + customer.getName());
			if(customer instanceof RegCustomer) {
				RegCustomer reg = (RegCustomer) customer;   
				System.out.println("Type of membership : " + reg.getMembership().getTypeOfMembership());
				System.out.println("Fees : " + reg.getMembership().getFees());
			}
			
		}
		
	}

}
