//define functions here
function getIt(){$('p').on('click', function(){alert("Hey!");})}
function frameIt(){$('img').on('load', function(){$('img').classList.add('tasty');})}
function pressIt(){$('input').on('keydown', function(event){if(event.key==="G"){alert();}})}

$(document).ready(function(){

// call functions here

});
