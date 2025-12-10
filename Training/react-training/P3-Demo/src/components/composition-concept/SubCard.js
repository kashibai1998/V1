import Card from "./Card";
function SubCard() {
    const data = "React tutorial";
    return (
        <div>
            <Card>
                <h1>Hi SubCard!!</h1>
                <h2>This my first SubCard</h2>
                <h4>{data}</h4>
            </Card>
        </div>
    )

}
export default SubCard;