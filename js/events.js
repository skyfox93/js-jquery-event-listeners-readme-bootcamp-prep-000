//define functions here
function getIt(){$('p').on('click', function(){alert("Hey!");})}
function frameIt(){$('img').on('load', function(){$('img').classList.add('tasty');})}
function pressIt(){$('input').on('keydown', function(event){if(event.key==="G"){alert();}})}
function submitIt(){$('form').on('submit', function(){alert('Your form is going to be submitted now.');})}
$(document).ready(function(){

// call functions here

});
