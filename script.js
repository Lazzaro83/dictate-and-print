// starts using API speech recognition present in browser
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function record(){
    
    // populating text while speaking
    recognition.interimResults = true;

    let p = document.createElement('p');
    const dictate = document.querySelector('.dictate');
    dictate.appendChild(p);

  recognition.addEventListener('result', e => {
    // creates an Array from content of speechRecognition
    const transcript = Array.from(e.results)
      //takes first thing in Array and uses transcript to join it and populate p element with it's content
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')

      p.textContent = transcript;
      console.log(transcript);
      // creates new p element after pause in speach
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        dictate.appendChild(p);
      }
    });

    //after end of speach it starts the whole process again
    recognition.addEventListener('end', recognition.start);

    recognition.start();
}

function stop(){
    recognition.stop();
}

function sendEmail(){
  var text = document.querySelector(".dictate").textContent;
  //console.log(text);
  var body = document.getElementById('body');
  var mail = document.createElement("div");
  mail.className = "input";
  var mailTo = document.createElement("input");
  mailTo.placeholder = "Mail to: "
  var subject = document.createElement("input");
  subject.placeholder = "Subject of mail: "
  var mailText = document.createElement("p");
  mailText.textContent = text;
  mailText.className = "textStyle";
  var buttonSend = document.createElement("button");
  buttonSend.innerHTML = "Send!";
  buttonSend.className = "buttonSend";
  buttonSend.onclick = function(){
    mail.style.visibility = "hidden";
    //there should be also mail sending functionality
  }
  mail.appendChild(mailTo);
  mail.appendChild(subject);
  mail.appendChild(mailText);
  mail.appendChild(buttonSend);
  body.appendChild(mail);
}

function printText(){
  var text = document.querySelector(".dictate").textContent;
  var originalContent = document.body.innerHTML;
  document.body.innerHTML = text;
  window.print();
  document.body.innerHTML = originalContent;
}