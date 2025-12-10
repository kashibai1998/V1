
public class Account {

	private int accountId;
	private String name;
	private double balance;

	public Account(int accountId, String name, double balance) {
		super();
		this.accountId = accountId;
		this.name = name;
		this.balance = balance;
	}

	public boolean equals(Object obj){
		return false;
		
	}
	
	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

}
