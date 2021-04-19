const musics = ['Bad Liar','Get you the moon','Life is good','Maroon Memories']
const stopBtn = document.getElementById('stopAll')
const musicName = document.getElementById('musicName')

stopBtn.classList.add('fa-stop')

musics.forEach(music =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = music

    btn.addEventListener('click',()=>{
        
        stopSongs()
        
        document.getElementById(music).play()

        stopBtn.classList.remove('fa-stop')
        stopBtn.classList.add('fa-pause')

        musicName.textContent = music
    })



    document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    musics.forEach(song => {
        song = document.getElementById(song)

        song.pause()
        song.currentTime = 0
        
        stopBtn.classList.add('fa-play')
        stopBtn.classList.remove('fa-pause')
        musicName.textContent = 'Stoped :('
    });
}







