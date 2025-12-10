import java.io.File;
import java.util.Map;

public class SearchMgr {

	public Map<String, SearchResult> startSearch(File[] driveList, String fileName){
		for(File drive : driveList) {
			System.out.println(drive + " Thread created");
			FileSearcher fileSearcher = new FileSearcher(drive, fileName);
			fileSearcher.start();
		}
		return null;
	}
}
