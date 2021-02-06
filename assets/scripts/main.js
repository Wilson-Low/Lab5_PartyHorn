// main.js

// TODO
let volumeNum = document.getElementById('volume-number');
let volumeSlider = document.getElementById('volume-slider');
let audio = document.getElementById('horn-sound');
let hornSelection = document.getElementById('audio-selection');
let soundImage = document.getElementById('sound-image');
let button = document.getElementById('honk-btn');
volumeNum.addEventListener('input', function(){changeVolume(volumeNum, volumeSlider);});
volumeSlider.addEventListener('input', function(){changeVolume(volumeSlider, volumeNum);});
hornSelection.addEventListener('input', function(){
    if (document.getElementById('radio-air-horn').checked) {
        audio.src = './assets/media/audio/air-horn.mp3';
        soundImage.src = './assets/media/images/air-horn.svg';
    }
    else if (document.getElementById('radio-car-horn').checked) {
        audio.src = './assets/media/audio/car-horn.mp3';
        soundImage.src = './assets/media/images/car.svg';
    }
    else {
        audio.src = './assets/media/audio/party-horn.mp3';
        soundImage.src = './assets/media/images/party-horn.svg';
    }
});
button.addEventListener('click', function(event){
    event.preventDefault();
    audio.play()
});

function changeVolume(changedParam, toChangeParam) {
    let volume = changedParam.value;
    if (volume == '') {
        volume = 0;
    }
    toChangeParam.value = volume;
    
    let volumeIcon = document.getElementById('volume-image')
    if (volume >= 67) {
        volumeIcon.src = './assets/media/icons/volume-level-3.svg';
        button.disabled = false;
    }
    else if (volume >= 34) {
        volumeIcon.src = './assets/media/icons/volume-level-2.svg';
        button.disabled = false;
    }
    else if (volume >= 1) {
        volumeIcon.src = './assets/media/icons/volume-level-1.svg';
        button.disabled = false;
    }
    else {
        volumeIcon.src = './assets/media/icons/volume-level-0.svg';
        button.disabled = true;
    }
    audio.volume = volume / 100
}