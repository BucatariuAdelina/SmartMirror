/* Prima data preluam elementele pe care le avem in html */

const player = document.querySelector('.player');
const video =player.querySelector('.viewer');


const Buttons = document.querySelector('.Buttons');
const btnNext = Buttons.querySelector('.btnNext');
const btnPrevious = Buttons.querySelector('.btnPrevious');


const videos = ["video1.mp4","video2.mp4"];

btnNext.addEventListener('click',nextVideo);
btnPrevious.addEventListener('click',previousVideo);
let videoPlaying=0;

function nextVideo(){
    if(videoPlaying < videos.length-1){
        videoPlaying++;
    }else{
        videoPlaying = 0;
        video.src = "video/" + videos[0];
    }
    video.src = "video/" + videos[videoPlaying];
}
function previousVideo(){
    if(videoPlaying > 0){
        videoPlaying--;
    }else{
        videoPlaying = 0;
        video.src = "video/" + videos[0];    
    }
}
/* Functiile 
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton(){
    const icon = this.paused ? '►' : '| |';
    toggle.textContent = icon;
    console.log('Update Button');
}
function skip(){
   console.log(this.dataset.skip);
   video.currentTime += parseFloat(this.dataset.skip);
   console.log('SKIPPING!');
}
function handleRangeUpdate(){
    video[this.name]= this.value;
    console.log(this.value);
    console.log(this.name);
}
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;


}
/*  
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);
*/

