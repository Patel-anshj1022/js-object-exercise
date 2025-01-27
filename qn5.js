//4. Delete the address property in Person
//b) Access the address property, what does it display? Explain


const person = {
    firstName: 'Ansh',
    lastName: 'Patel',
    age: 20,
    address: {
        city: 'Nakuru',
        street: 'Section 58',
        zipCode: '20100'
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};


delete person.address;

console.log(person.address); 
//It displays undefined
//Explanation:
//Because the address property doesnt exist anymore.
