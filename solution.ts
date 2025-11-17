function formatValue( num: string | number | boolean): string | number | boolean{
    if( typeof num === 'string'){
        return num.toUpperCase();
    }
    else if(typeof num === 'number'){
        return num * 10;
    }
    else if(typeof num === 'boolean'){
        return !num;
    }

    return num;

};


function getLength(num: string |  any[]): number{
    if(typeof num === 'string'){
        return num.length;
    }else if(typeof(num)){
        return num.length;
    }

    return 0;
}

class Person {
    name : string;
    age : number

    constructor(name: string, age: number){
        this.name = name
        this.age = age

    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age} ';`

    }
}

// const Person1 = new Person('John Doe' , 30);
// console.log(Person1.getDetails());
// const Person2 = new Person('Alice' , 25);
// console.log(Person2.getDetails());


interface item {
    title: string;
    rating: number;
}
const books: item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// const filterByRating: item[] = books.filter((item:item) => {
//     return item.rating >= 4.0;
// })



function filterByRating(item1: item[]): item[]{
    return item1.filter(item => item.rating >= 4);
}

// console.log(filterByRating(books));



interface properties {
    id : number;
    name: string;
    email: string;
    isActive: boolean;
}

const users: properties[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

function filterActiveUsers(user2 : properties[]): properties[]{
    return user2.filter(properties => properties.isActive);
}

// console.log(filterActiveUsers(users));



interface Book {
    title : string;
    author : string;
    publishedYear : number;
    isAvailable : boolean;
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

function printBookDetails(book : Book) {
    const availableStatus = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableStatus} `);
}

// printBookDetails(myBook);


function getUniqueValues<T extends number>(array1: T[], array2: T[]): T[] {
  const uniqueValue: T[] = []

    for (let i = 0; i < array1.length; i++) {
        let duplicates = false;
        for (let j = 0; j < uniqueValue.length; j++) {
            if (array1[i] === uniqueValue[j]) {
                duplicates = true;
                break;

            }
        }
        if (!duplicates) {
            uniqueValue[uniqueValue.length] = array1[i];
        }
    }

    for (let i = 0; i < array2.length; i++) {
        let duplicates = false;
        for (let j = 0; j < uniqueValue.length; j++) {
            if (array2[i] === uniqueValue[j]) {
                duplicates = true;
                break;

            }
        }
        if (!duplicates) {
            uniqueValue[uniqueValue.length] = array2[i];
        }
    }

    return uniqueValue;

}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

interface Product {
    name : string;
    price : number;
    quantity : number;
    discount? : number;
}

function calculateTotalPrice(products : Product[]): number {
    if ( products.length === 0) {
        return 0;
    }

    const total = products.reduce((accumulator, product ) => {
        let productTotal = product.price * product.quantity;

        if(product.discount !== undefined) {
            const discountAmount = productTotal * (product.discount / 100);
            productTotal -= discountAmount;
        }
        return accumulator + productTotal;
    },0)

    return total;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));


