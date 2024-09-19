// show the cash out form 
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    console.log('show cash out button clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide the add money form
    document.getElementById('add-money-form').classList.add('hidden')
});
// show the add money form and hide the cash our form 
document.getElementById('btn-show-add-money-form').addEventListener('click', function (){
   document.getElementById('add-money-form').classList.remove('hidden');
   document.getElementById('cash-out-form').classList.add('hidden');
})