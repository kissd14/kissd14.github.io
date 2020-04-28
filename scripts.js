console.log("hi this is a test");
let Stumpjumper ={
    brand:"Specialized",
    type:"Stumpjumper",
    year:"2020",
    description: "This is a trail bike, for a lot of pedaling.",
    src:"./pictures/Stumpjumper.jpg"
}
let Enduro ={
    brand:"Specialized",
    type:"Enduro",
    year:"2020",
    description: "This is an enduro bike, for a lot of descending, and it climbs surprisingly well.",
    src:"./pictures/Enduro.jpg"
}
let Demo ={
    brand:"Specialized",
    type:"Demo",
    year:"2020",
    description: "This is a downhill bike, for a lot of descending, only for descending, it's a csillagromboló!",
    src:"./pictures/Demo.jpg"
}

let list= [Stumpjumper,Enduro,Demo]
let bikes={
    Stumpjumper:Stumpjumper,
    Enduro:Enduro,
    Demo:Demo,
}

list.forEach(element => {
    $( ".thumbnail" ).append( '<img id='+element.type+' src="/'+element.src+'">' );
});

/*$("#Stumpjumper").click(function(){
$(".picture img").remove();
$(".picture").append('<img src="./pictures/Stumpjumer.jpg">');
})*/

let id_thumb;

$(".thumbnail-container").on('click','.thumbnail img', function() {
    console.log($(this).attr('id') );
    id_thumb=$(this).attr('id');
    $(".picture img").remove();
    $(".picture").append('<img src="./pictures/'+id_thumb+'.jpg">');
    $("#info").html("");
    $("#info").append('<h1>'+bikes[id_thumb].brand+' '+bikes[id_thumb].type+' '+bikes[id_thumb].year+'</h1>');
    $("#info").append('<h4>'+bikes[id_thumb].description+'</h4>');
    
})
' '

