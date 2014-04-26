$(document).ready(function() {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    console.log('speech started')
  };

  recognition.onerror = function(event) {
    console.log(event);
  };

  recognition.onend = function() {
    console.log('speech ended');
  };

  recognition.onresult = function(event) {
    var transcript = '';
    var final_received = false;
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      transcript += event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        console.log(transcript.trim());
        $.post('http://localhost:8080', {"text":transcript.trim()})
        transcript = ''
      }
    }
  };

  recognition.lang = 'en-GB'
  recognition.start();
});
