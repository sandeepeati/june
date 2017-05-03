var commands = {
    'june': function() {
    	tts('Hello boss');
    	ai('Hello boss!');
		
    },

    'how are you': function() {
    	tts('I am super fine boss');
		ai("I am super fine boss!");
    },

    'open *name': function(name) {
    	tts('opening '+name);
    	ai('opening '+name);
    	myWindow = window.open('https://www.'+name+'.com');
    },

    'close *name': function(name) {
    	tts('closing '+name);
    	ai('closing '+name);
    	myWindow.close();
    },

    'search *query': function(query){
    	tts('Searching '+query);
    	ai('Searching '+query);
    	myWindow = window.open('https://www.google.co.in/search?q='+query);
    }
};

annyang.addCommands(commands);
annyang.start();

function ai(word){
	var ai = document.getElementById('ai');
	ai.innerHTML = word;
}

function tts(word) {
	var msg = new SpeechSynthesisUtterance(word);
	speechSynthesis.speak(msg);
}