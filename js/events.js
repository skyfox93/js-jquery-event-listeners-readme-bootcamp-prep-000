//define functions here
function getIt(){$('p').on('click', function(){alert("Hey!");})}
function frameIt(){$('img').on('load', function(){$('img').classNames.push('tasty');})}
function pressIt(){$('input').on('keydown',function(){if(event.key==="G"){alert();}})}

$(document).ready(function(){

// call functions here

});
