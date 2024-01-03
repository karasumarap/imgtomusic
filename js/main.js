let key = 0;
function loadImage(obj) {
    for (i = 0; i < obj.files.length; i++) {
        var fileReader = new FileReader();
        fileReader.onload = (function (e) {
            var field = document.getElementById("imgPreviewField");
            var figure = document.createElement("figure");
            var rmBtn = document.createElement("input");
            var img = new Image();
            img.src = e.target.result;
            img.className = 'uploaded-image'; // クラスを追加
            rmBtn.type = "button";
            rmBtn.name = key;
            rmBtn.value = "削除";
            rmBtn.onclick = (function () {
                var element = document.getElementById("img-" + String(rmBtn.name)).remove();
            });
            figure.setAttribute("id", "img-" + key);
            figure.appendChild(img);
            figure.appendChild(rmBtn)
            field.appendChild(figure);
            key++;
        });
        fileReader.readAsDataURL(obj.files[i]);
    }
}

// 音楽を再生する関数
function playMusic() {
    let audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
}

// 音楽を一時停止する関数
function pauseMusic() {
    let audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
}

// 音楽を停止する関数
function stopMusic() {
    let audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.load(); // loadメソッドで再読み込みし、音楽を停止する
}