import java.util.ArrayList;
import java.util.List;

public class TestMain {
	public static void main(String[] args) {

		Company company = new Company(1, "zensar");

		Customer customer1 = new Customer(1001, "Pujari");
		Item item = new Item(1, "laptop", 50000);
		OrderedItem orderedItem = new OrderedItem(1, 5);
		
//		Customer customer1 = new Customer(1002, "Vaibhav");
//		Item item = new Item(1, "laptop", 50000);
//		OrderedItem orderedItem = new OrderedItem(1, 5);
		

		float a = item.getRate();
		float b = OrderedItem.getQty();
		
		System.out.println();
		System.out.println("TotalWorthOfOrderPlaced : " + a * b);

	}
}
