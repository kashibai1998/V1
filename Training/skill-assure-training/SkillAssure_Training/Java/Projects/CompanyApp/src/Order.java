import java.util.ArrayList;
import java.util.List;

public class Order {

	private long orderId;
	private String name;
	private List<OrderedItem> orderItems = new ArrayList<OrderedItem>();

	public Order(long orderId, String name) {
		super();
		this.orderId = orderId;
		this.name = name;
	}

	public long getOrderId() {
		return orderId;
	}

	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<OrderedItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderedItem> orderItems) {
		this.orderItems = orderItems;
	}

}
