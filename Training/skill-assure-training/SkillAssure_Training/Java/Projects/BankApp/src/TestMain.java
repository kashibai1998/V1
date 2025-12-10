import java.util.ArrayList;
import java.util.List;

public class TestMain {

	public static void main(String[] args) {
		
		System.out.println("Banking App");
//		Account account1 = new Account(1001,"Kumar",25000); 
//		Account account2 = new Account(1002,"Shanthi", 5000); 
//		Account account3 = new Account(1003,"Kavya",25000); 
//		Account account4 = new Account(1004,"Mohan",5000); 
//		Account account5 = new Account(1005,"Dinesh",22000);
		
		Account account1 = new Account(1001,"Kumar",25000);
		Account account2 = new Account(1002,"Shanthi", 5000); 
		Account account3 = new Account(1003,"Kavya",25000);

		ArrayList<Account> accounts= new ArrayList<Account>();
		accounts.add(account1);
		accounts.add(account2);
		accounts.add(account3);
//		accounts.add(account4);
//		accounts.add(account5);
		
		BankApp bankApp= new BankApp();
		System.out.println(bankApp.checkEquality(accounts));
	}
}
