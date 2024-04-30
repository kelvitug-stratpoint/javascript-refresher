// Asynchronous Programming 

let color = 'White';

let user = {
    name: 'Kazi',
    age: 30
}

let friends = ['Jack','Raju'];


console.log('Before');

console.log('After');

fetchUser(12345,function(user) {
    console.log(user);    
    sendMail(user.email,function(response){
        console.log(response);
    })
})

function fetchUser(userId,callback) {
    setTimeout(() => {
        console.log('Hi my name is kelvin');
        const fetchedUser = {
            id: userId,
            name: 'Kelvin',
            email: 'kelvindale.vitug@stratpoint.com'
        };
        callback(fetchedUser);
    }, 2000);
}


function sendMail(userEmail, callback) {

    setTimeout(() => {
        console.log('message sending');
        const response = {success: true};
        callback(response);
    }, 3000);
}
