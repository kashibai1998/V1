
public class Item {

	private long id;
	private String desc;
	private float rate;

	public Item(long id, String desc, float rate) {
		super();
		this.id = id;
		this.desc = desc;
		this.rate = rate;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public float getRate() {
		return rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

}
