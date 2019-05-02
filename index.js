const bt1 = document.querySelector('button');
const audio = document.querySelector('audio');
bt1.addEventListener('click',function(e){
    audio.src = 'SPIDER-MAN FAR FROM HOME - Official Teaser Trailer.mp3';
    audio.play();
});