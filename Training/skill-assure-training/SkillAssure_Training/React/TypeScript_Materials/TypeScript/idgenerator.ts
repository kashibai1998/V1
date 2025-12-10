export class Idgenerator{
    public static customerid: number = 111;
    public static orderid: number = 1;
    public static itemid: number = 1;

    public static getCustomerId(): number{
        return Idgenerator.customerid++;
    }

    public static getOrderId(): number{
        return Idgenerator.orderid++;
    }

    public static getItemId(): number{
        return Idgenerator.itemid++;
    }

}