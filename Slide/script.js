var models=[
    {
        name : 'Bmw',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/fiat/fiorino/2020/1-4-pop'
    },
    {
        name : 'Mazda',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/fiat/fiorino/2020/1-4-pop'
    },
    {
        name : 'Volvo S-60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/fiat/fiorino/2020/1-4-pop'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/fiat/fiorino/2020/1-4-pop'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/fiat/fiorino/2020/1-4-pop'
    },
]

var index = 0;
var slaytCount = models.length;
var interval;

var settings ={
    duration : '2000',
    random : false
};
init(settings);
document.querySelectorAll('.fas').forEach(function(item){
item.addEventListener('mouseenter',function(){
clearInterval(interval);
});
});

document.querySelectorAll('.fas').forEach(function(item){
item.addEventListener('mouseleave',function(){
init(settings);
});
});

function init(settings){
var prev;
   interval =  setInterval(function(){
if(settings.random)
{
//random index
do{
    index = Math.floor(Math.random()*slaytCount);
}while(index == prev);
prev = index;

}
else
{
    if(slaytCount== index+1)
    {
        index=-1;
    }
    showSlide(index);
    console.log(index);
    index++;
    //artan index
}
showSlide(index);
    },settings.duration)
}



function showSlide(i)
{

    index = i;

if(i<0)
{

    index= slaytCount-1;

}

if(i>=slaytCount)
{

    index= 0;

}


    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.btn-primary').setAttribute('href',models[index].link);
}



document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
index--;
showSlide(index);
console.log(index);
});




document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
index++;
showSlide(index);
console.log(index);
});