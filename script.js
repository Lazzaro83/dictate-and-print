function record(){
    // starts using API speech recognition present in browser
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    var recognition = new SpeechRecognition();
    // populating text while speaking
    recognition.interimResults = true;

    let p = document.createElement('p');
    const words = document.querySelector('.dictate');
    words.appendChild(p);

  recognition.addEventListener('result', e => {
    // creates an Array from content of speechRecognition
    const transcript = Array.from(e.results)
      //takes first thing in Array and uses transcript to join it and populate p element with it's content
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

      p.textContent = transcript;
      //console.log(transcript);
      // creates new p element after pause in speach
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
    });

    //after end of speach it starts the whole process again
    recognition.addEventListener('end', recognition.start);

    recognition.start();
}
