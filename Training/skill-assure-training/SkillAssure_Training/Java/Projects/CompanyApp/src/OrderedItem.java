
public class OrderedItem {

	static int qty;
	private Item item;

	public OrderedItem(long id, int qty) {
		super();
		this.qty = qty;
	}

	public static int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	};

}
