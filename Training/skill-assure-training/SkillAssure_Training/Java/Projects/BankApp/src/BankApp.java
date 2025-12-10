import java.util.ArrayList;

public class BankApp {

	public static int checkEquality(ArrayList<Account> accountArray) {
		int count=0;
		int[] flag=new int[accountArray.size()];
		for(int i=0;i<accountArray.size();i++) {
			if(flag[i]==-1)
				continue;
			for(int j=1;j<accountArray.size();j++) {
				if(accountArray.get(i).equals(accountArray.get(j))) {
					count++;
					flag[j]=-1;
				}
			}
		}
		return count;
		
	}
	}
