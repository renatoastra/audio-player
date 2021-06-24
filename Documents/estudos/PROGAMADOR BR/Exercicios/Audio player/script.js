var songs = ["./audios/MC TIMBU - PALAVRAS NAO BASTÃO, TEM QUE SE ENVOLVER [ DJ BRUNO ].mp3", "./audios/Gaullin - OP OPA.mp3", "./audios/maneskin.mp3", "./audios/komodosong.mp3" ]
var songImage = ["./image/img1.gif", "./image/img2.gif", "./image/img3.gif", "./image/img4.gif"]
var musicIndex = 0
var songName = ["MC TIMBU - Palavras não bastão", "Gaullin - OP OPA", "Maneskin - Beggin", "Alvvays - Dreams Tonite"]
var musicImg = document.getElementById("musicImg")
var musicName = document.getElementById("musicName")
var audio = document.getElementById("audio")
var barra = document.getElementById("barra")
var timer = document.getElementById("timer")



function playMusica(){

    audio.play()
}

function pauseMusica(){
    audio.pause()
}

function skipMusic(){
        if(musicIndex < songs.length -1){
            musicIndex += 1
            audio.src = songs[musicIndex]
            musicImg.src = songImage[musicIndex]
            musicName.innerText = songName[musicIndex]

        }               
        audio.play()
        
}
function previousMusic(){
    if(musicIndex > 0){
        musicIndex -= 1
        audio.src = songs[musicIndex]
        musicImg.src = songImage[musicIndex]
        musicName.innerText = songName[musicIndex]
        audio.play()
    }

}


audio.addEventListener("ended", function(){
    if(audio.currentTime == audio.duration){
        skipMusic()}
    }
)



function progressBar(){

    barra.value = audio.currentTime;
    barra.setAttribute("max", audio.duration);

}

setInterval(progressBar, 500)

barra.addEventListener("input", function(event){
    audio.currentTime = event.target.value
    console.log(barra)
})