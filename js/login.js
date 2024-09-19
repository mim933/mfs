// console.log('button clicking file added')
document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
   
    const phoneNumber = document.getElementById('Phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber,pinNumber);



    //  this not the good way 
    if(phoneNumber === '5' && pinNumber=== '1234'){
        console.log('You are logged in')
        window.location.href ='./home.html'
    }else{
        alert('wrong phone number or pin.');
    }
})