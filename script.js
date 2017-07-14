function record(){
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    var recognition = new SpeechRecognition();
    recognition.interimResults = true;

    var p = document.createElement('p');
    var words = document.querySelector('.dictate');
    words.appendChild(p);

    recognition.addEventListener('result', e => {
      console.log(e.results);
    /*   var transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        if (e.results[0].isFinal) {
          p = document.createElement('p');
          words.appendChild(p);
        }*/
    });

    recognition.addEventListener('end', recognition.start);

    recognition.start();
}
