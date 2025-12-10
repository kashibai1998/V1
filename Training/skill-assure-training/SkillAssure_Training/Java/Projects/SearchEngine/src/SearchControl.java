import java.io.File;
import java.util.Scanner;

public class SearchControl {

	public void initSearch() {
		File[] driveList = File.listRoots();
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter File Name : ");
		String fileName = sc.next();
		performFileSearch(fileName, driveList);
	}
	
	public void performFileSearch(String fileName, File[] driveList) {
		SearchMgr searchMgr = new SearchMgr();
		searchMgr.startSearch(driveList, fileName);
	}
}
