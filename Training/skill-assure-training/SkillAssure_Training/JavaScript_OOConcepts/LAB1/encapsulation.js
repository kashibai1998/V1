//Encapsulation menas hiding the details of data . and executing the functionality without revealing any execution details

function Book(t,a) {
    let title = t;
    let author = a;
    return {
        Summary:function() {
            console.log(`${title} written by ${author}.`)
            return `${title} written by ${author}.`;
        }
    }
}
const book1 = new Book("Äppu Warries", "Appu");
console.log(book1.Summary())