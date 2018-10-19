var card = document.getElementsByClassName('card');
var circle = document.getElementsByClassName('circle');
var content = document.getElementsByClassName('content-card');
var link = document.getElementsByClassName('link');

function cardClick(e) {
	var element = e.target.parentNode;
	if(element.classList == "card-wrapper") {
		element.classList.remove('card-wrapper');
		element.classList.add('card-wrapper-select');
	} else if(element.classList == "card-wrapper-select") {
		element.classList.remove('card-wrapper-select');
		element.classList.add('card-wrapper');
	} else if(element.classList == "card-wrapper-select card-wrapper-select-hover") {
		element.classList.remove('card-wrapper-select');
		element.classList.remove('card-wrapper-select-hover');
		element.classList.add('card-wrapper');
	}
}

function cardClickCircle(e) {
	var element = e.target.parentNode.parentNode.parentNode.parentNode;
	if(element.classList == "card-wrapper") {
		element.classList.remove('card-wrapper');
		element.classList.add('card-wrapper-select');
	} else if(element.classList == "card-wrapper-select") {
		element.classList.remove('card-wrapper-select');
		element.classList.add('card-wrapper');
	} else if(element.classList == "card-wrapper-select card-wrapper-select-hover") {
		element.classList.remove('card-wrapper-select');
		element.classList.remove('card-wrapper-select-hover');
		element.classList.add('card-wrapper');
	} 
}

function cardClickContent(e) {
	var element = e.target.parentNode.parentNode.parentNode;
	if(element.classList == "card-wrapper") {
		element.classList.remove('card-wrapper');
		element.classList.add('card-wrapper-select');
	} else if(element.classList == "card-wrapper-select") {
		element.classList.remove('card-wrapper-select');
		element.classList.add('card-wrapper');
	} else if(element.classList == "card-wrapper-select card-wrapper-select-hover") {
		element.classList.remove('card-wrapper-select');
		element.classList.remove('card-wrapper-select-hover');
		element.classList.add('card-wrapper');
	} 
}

function leaveMouse(e) {
	var element = e.target.parentNode;
	if(element.classList == 'card-wrapper-select') {
		element.classList.add('card-wrapper-select-hover');
	}
};

function linkClick(e) {
	var element = e.target.parentNode.previousElementSibling;
	if(element.classList == "card-wrapper") {
		element.classList.remove('card-wrapper');
		element.classList.add('card-wrapper-select');
	}
}
for(i = 0; i < link.length, i < card.length, i < content.length, i < content.length, i < circle.length; i++) {
	link[i].addEventListener('click', function(e) {
		linkClick(e);
	}, false);
	card[i].addEventListener('click', function(e) {
		cardClick(e);
	}, false);
	card[i].addEventListener('mouseleave', function(e) {
		leaveMouse(e);
	}, false);
	content[i].addEventListener('click', function(e) {
		cardClickContent(e);
	}, false);
	circle[i].addEventListener('click', function(e) {
		cardClickCircle(e);
	}, false);
}