//3. a) Create a person (firstName, lastName, age) object, with a nested address (city, street, zipCode) object
 //b) Add a getFullName method on the person object that prints out the first name and last name
 //c) Access and display the address properties
 //d) Display the full name of Person object using the method you have created

 const person = {
    firstName: 'Ansh',
    lastName: 'Patel',
    age: 20,
    address: {
        city: 'Kenya',
        street: 'section 58',
        zipCode: '20100'
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};