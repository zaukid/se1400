let ltGameCounter = 0;
let ctrGameCounter = 1;
let rtGameCounter = 2;

const ltGameLogoDisplaySm = document.getElementById('ltGameLogoDisplaySm');
const ltGameLogoDisplayMd = document.getElementById('ltGameLogoDisplayMd');
const ltGameLogoDisplayLg = document.getElementById('ltGameLogoDisplayLg');

const ctrGameLogoDisplaySm = document.getElementById('ctrGameLogoDisplaySm');
const ctrGameLogoDisplayMd = document.getElementById('ctrGameLogoDisplayMd');
const ctrGameLogoDisplayLg = document.getElementById('ctrGameLogoDisplayLg');

const rtGameLogoDisplaySm = document.getElementById('rtGameLogoDisplaySm');
const rtGameLogoDisplayMd = document.getElementById('rtGameLogoDisplayMd');
const rtGameLogoDisplayLg = document.getElementById('rtGameLogoDisplayLg');

const gameTitle = document.getElementById('Title');
const gameBiline = document.getElementById('Biline');
const gameBrief = document.getElementById('Brief');
const gameLink = document.getElementById('Link');

document.getElementById('leftArrow').addEventListener('click', () => {
	ltGameCounter--;
	ctrGameCounter--;
	rtGameCounter--;

	if (ltGameCounter < 0) {
		ltGameCounter = gameLogosSm.length - 1; //<!--Loop back to the last game logo-->//
	}
	if (ctrGameCounter < 0) {
		ctrGameCounter = gameLogosSm.length - 1; //< !--Loop back to the last game logo-- >//
	}
	if (rtGameCounter < 0) {
		rtGameCounter = gameLogosSm.length - 1; //< !--Loop back to the last game logo-- >//
	}

	ltGameLogoDisplaySm.src = gameLogosSm[ltGameCounter];
	ltGameLogoDisplayMd.srcset = gameLogosMd[ltGameCounter];
	ltGameLogoDisplayLg.srcset = gameLogosLg[ltGameCounter];

	ctrGameLogoDisplaySm.src = gameLogosSm[ctrGameCounter];
	ctrGameLogoDisplayMd.srcset = gameLogosMd[ctrGameCounter];
	ctrGameLogoDisplayLg.srcset = gameLogosLg[ctrGameCounter];

	rtGameLogoDisplaySm.src = gameLogosSm[rtGameCounter];
	rtGameLogoDisplayMd.srcset = gameLogosMd[rtGameCounter];
	rtGameLogoDisplayLg.srcset = gameLogosLg[rtGameCounter];

	gameTitle.textContent = Title[ltGameCounter];
	gameBiline.textContent = Biline[ltGameCounter];
	gameBrief.innerHTML = Brief[ltGameCounter];
	gameLink.href = Link[ltGameCounter];
});

document.getElementById('rightArrow').addEventListener('click', () => {
	ltGameCounter++;
	ctrGameCounter++;
	rtGameCounter++;

	if (ltGameCounter >= gameLogosSm.length) {
		ltGameCounter = 0; //< !--Loop back to the first game logo-- >
	}
	if (ctrGameCounter >= gameLogosSm.length) {
		ctrGameCounter = 0; //< !--Loop back to the first game logo-- >
	}
	if (rtGameCounter >= gameLogosSm.length) {
		rtGameCounter = 0;//< !--Loop back to the first game logo-- >
	}

	ltGameLogoDisplaySm.src = gameLogosSm[ltGameCounter];
	ltGameLogoDisplayMd.srcset = gameLogosMd[ltGameCounter];
	ltGameLogoDisplayLg.srcset = gameLogosLg[ltGameCounter];

	ctrGameLogoDisplaySm.src = gameLogosSm[ctrGameCounter];
	ctrGameLogoDisplayMd.srcset = gameLogosMd[ctrGameCounter];
	ctrGameLogoDisplayLg.srcset = gameLogosLg[ctrGameCounter];

	rtGameLogoDisplaySm.src = gameLogosSm[rtGameCounter];
	rtGameLogoDisplayMd.srcset = gameLogosMd[rtGameCounter];
	rtGameLogoDisplayLg.srcset = gameLogosLg[rtGameCounter];

	gameTitle.textContent = Title[ltGameCounter];
	gameBiline.textContent = Biline[ltGameCounter];
	gameBrief.innerHTML = Brief[ltGameCounter];
	gameLink.href = Link[ltGameCounter];
});