const userText = document.getElementById('inputText');
const speechBtn = document.getElementById('speech');

speechBtn.addEventListener('click', function () {
    const speechText = userText.value;

    let speechData = new SpeechSynthesisUtterance();
    
    // Get a list of available voices
    const voices = speechSynthesis.getVoices();

    // Find a voice that you like (you can change the index)
    const selectedVoice = voices[3]; // You can change the index to choose a different voice

    speechData.text = speechText;
    speechData.voice = selectedVoice; // Set the selected voice

    speechSynthesis.speak(speechData);
})
