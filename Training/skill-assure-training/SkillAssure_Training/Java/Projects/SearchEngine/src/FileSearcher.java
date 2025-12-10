import java.io.File;

public class FileSearcher extends Thread {

	public File folder;
	public String fileToSearch;
	
	public FileSearcher(File folder, String fileToSearch) {
		this.folder = folder;
		this.fileToSearch = fileToSearch;
	}
	
	public void run() {
		this.searchForFile();
	}
	
	public void searchForFile(){
		File[] fileList = folder.listFiles();
		if(fileList == null) {
			// throw drive empty exception
			System.out.println("throw drive empty exception");
		} else {
			searchFileInDrive(folder, fileToSearch);
		}
	}
	
	public void searchFileInDrive(File folder, String fileToSearch) {
		File[] fileList = folder.listFiles();
		if(fileList != null) {
			for(File fileName : fileList) {
//				if(fileName.isDirectory()) {
//					searchFileInDrive(fileName, fileToSearch);
//					System.out.println(fileName.getName());
//				} 
				if(fileName.getName().equals(fileToSearch)) {
					System.out.println(fileToSearch + " file found on this path : " + fileName.toString());
				}
				
			}
		}
	}
}
