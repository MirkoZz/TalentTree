var Personnage = {
	niveau: 1,
	vie: 100,
	mana: 100,
	xp: 0,
	points: 51,
	carac: {
		force: 100,
		agilite: 50,
		endu: 70,
		intel: 20,
		esprit: 50
	}
}

var Arbre = {
	pointsDepenses: 1,

	ligne1: {
		lock: false,
		competence1: [0, 3, true],
		competence2: [0, 5, true],
		competence3: [0, 3, true, false] // Points alloués, points max, skill débloqué, débloque son enfant
	},
	ligne2: {
		lock: false,
		competence1: [0, 2, false],
		competence2: [0, 5, false, false],
		competence3: [0, 3, false]
	},
	ligne3: {
		lock: false,
		competence1: [0, 2, false],
		competence2: [0, 1, false],
		competence3: [0, 3, false, false]
	},
	ligne4: {
		lock: false,
		competence1: [0, 5, false],
		competence2: [0, 2, false]
	},
	ligne5: {
		lock: false,
		competence1: [0, 5, false],
		competence2: [0, 1, false, false],
		competence3: [0, 5, false],
		competence4: [0, 5, false]
	},
	ligne6: {
		lock: false,
		competence1: [0, 5, false],
		competence2: [0, 3, false]
	},
	ligne7: {
		lock: false,
		competence1: [0, 1, false]
	}
}

function estActivee() {
	if (Arbre.ligne7.competence1[0] != 0) {
		Arbre.ligne6.lock = true;
		Arbre.ligne5.lock = true;
		Arbre.ligne4.lock = true;
		Arbre.ligne3.lock = true;
		Arbre.ligne2.lock = true;
		Arbre.ligne1.lock = true;
	} else if ((Arbre.ligne6.competence1[0] + Arbre.ligne6.competence2[0]) != 0) {
		Arbre.ligne6.lock = false;
		Arbre.ligne5.lock = true;
		Arbre.ligne4.lock = true;
		Arbre.ligne3.lock = true;
		Arbre.ligne2.lock = true;
		Arbre.ligne1.lock = true;
	} else if ((Arbre.ligne5.competence1[0] + Arbre.ligne5.competence2[0] + Arbre.ligne5.competence3[0] + Arbre.ligne5.competence4[0]) != 0) {
		Arbre.ligne6.lock = false;
		Arbre.ligne5.lock = false;
		Arbre.ligne4.lock = true;
		Arbre.ligne3.lock = true;
		Arbre.ligne2.lock = true;
		Arbre.ligne1.lock = true;
	} else if ((Arbre.ligne4.competence1[0] + Arbre.ligne4.competence2[0]) != 0) {
		Arbre.ligne6.lock = false;
		Arbre.ligne5.lock = false;
		Arbre.ligne4.lock = false;
		Arbre.ligne3.lock = true;
		Arbre.ligne2.lock = true;
		Arbre.ligne1.lock = true;
	} else if ((Arbre.ligne3.competence1[0] + Arbre.ligne3.competence2[0] + Arbre.ligne3.competence3[0]) != 0) {
		Arbre.ligne6.lock = false;
		Arbre.ligne5.lock = false;
		Arbre.ligne4.lock = false;
		Arbre.ligne3.lock = false;
		Arbre.ligne2.lock = true;
		Arbre.ligne1.lock = true;
	} else if ((Arbre.ligne2.competence1[0] + Arbre.ligne2.competence2[0] + Arbre.ligne2.competence3[0]) != 0) {
		Arbre.ligne6.lock = false;
		Arbre.ligne5.lock = false;
		Arbre.ligne4.lock = false;
		Arbre.ligne3.lock = false;
		Arbre.ligne2.lock = false;
		Arbre.ligne1.lock = true;
	} else if ((Arbre.ligne1.competence1[0] + Arbre.ligne1.competence2[0] + Arbre.ligne1.competence3[0]) != 0) {
		Arbre.ligne6.lock = false;
		Arbre.ligne5.lock = false;
		Arbre.ligne4.lock = false;
		Arbre.ligne3.lock = false;
		Arbre.ligne2.lock = false;
		Arbre.ligne1.lock = false;
	}

	if (Arbre.pointsDepenses > 30) {
	
		Arbre.ligne2.competence1[2] = true;
		Arbre.ligne2.competence2[2] = true;
		Arbre.ligne2.competence3[2] = true;
	
		Arbre.ligne3.competence1[2] = true;
	
		Arbre.ligne4.competence1[2] = true;
	
		Arbre.ligne5.competence1[2] = true;
		Arbre.ligne5.competence2[2] = true;
		Arbre.ligne5.competence3[2] = true;
		Arbre.ligne5.competence4[2] = true;
	
		Arbre.ligne6.competence1[2] = true;
		Arbre.ligne6.competence2[2] = true;
	
		Arbre.ligne7.competence1[2] = true;

		document.querySelector("#autreRequis18").style.color = "green";
	}
	if (Arbre.pointsDepenses > 25 && Arbre.pointsDepenses <= 30) {

		Arbre.ligne2.competence1[2] = true;
		Arbre.ligne2.competence2[2] = true;
		Arbre.ligne2.competence3[2] = true;
	
		Arbre.ligne3.competence1[2] = true;
	
		Arbre.ligne4.competence1[2] = true;
	
		Arbre.ligne5.competence1[2] = true;
		Arbre.ligne5.competence2[2] = true;
		Arbre.ligne5.competence3[2] = true;
		Arbre.ligne5.competence4[2] = true;
	
		Arbre.ligne6.competence1[2] = true;
		Arbre.ligne6.competence2[2] = true;
	
		Arbre.ligne7.competence1[2] = false;
		
		document.querySelector("#imgSkill16").src = "images/skill16Available.PNG";

		if (Arbre.ligne6.competence2[0] !== Arbre.ligne6.competence2[1]) {
			document.querySelector("#imgSkill17").src = "images/skill17Available.PNG";
		} else {
			document.querySelector("#imgSkill17").src = "images/skill17Full.PNG";
		}

		document.querySelector("#cptSkill16").style.visibility = "visible";
		document.querySelector("#cptSkill17").style.visibility = "visible";

		document.querySelector("#autreRequis16").style.color = "green";
		document.querySelector("#autreRequis17").style.color = "green";

		document.querySelector("#imgSkill18").src = "images/skill18Off.PNG";
		document.querySelector("#cptSkill18").style.visibility = "hidden";
	}
	if (Arbre.pointsDepenses > 20 && Arbre.pointsDepenses <= 25) {

		Arbre.ligne2.competence1[2] = true;
		Arbre.ligne2.competence2[2] = true;
		Arbre.ligne2.competence3[2] = true;
	
		Arbre.ligne3.competence1[2] = true;
	
		Arbre.ligne4.competence1[2] = true;
	
		Arbre.ligne5.competence1[2] = true;
		Arbre.ligne5.competence2[2] = true;
		Arbre.ligne5.competence3[2] = true;
		Arbre.ligne5.competence4[2] = true;
	
		Arbre.ligne6.competence1[2] = false;
		Arbre.ligne6.competence2[2] = false;
	
		Arbre.ligne7.competence1[2] = false;
		
		document.querySelector("#imgSkill12").src = "images/skill12Available.PNG";

		if (Arbre.ligne5.competence2[0] !== Arbre.ligne5.competence2[1]) {
			document.querySelector("#imgSkill13").src = "images/skill13Available.PNG";
		} else {
			document.querySelector("#imgSkill13").src = "images/skill13Full.PNG";
		}
		
		document.querySelector("#imgSkill14").src = "images/skill14Available.PNG";
		document.querySelector("#imgSkill15").src = "images/skill15Available.PNG";

		document.querySelector("#cptSkill12").style.visibility = "visible";
		document.querySelector("#cptSkill13").style.visibility = "visible";
		document.querySelector("#cptSkill14").style.visibility = "visible";
		document.querySelector("#cptSkill15").style.visibility = "visible";

		document.querySelector("#autreRequis12").style.color = "green";
		document.querySelector("#autreRequis13").style.color = "green";
		document.querySelector("#autreRequis14").style.color = "green";
		document.querySelector("#autreRequis15").style.color = "green";

		document.querySelector("#imgSkill16").src = "images/skill16Off.PNG";
		document.querySelector("#imgSkill17").src = "images/skill17Off.PNG";

		document.querySelector("#cptSkill16").style.visibility = "hidden";
		document.querySelector("#cptSkill17").style.visibility = "hidden";
	}
	if (Arbre.pointsDepenses > 15 && Arbre.pointsDepenses <= 20) {

		Arbre.ligne2.competence1[2] = true;
		Arbre.ligne2.competence2[2] = true;
		Arbre.ligne2.competence3[2] = true;
	
		Arbre.ligne3.competence1[2] = true;
	
		Arbre.ligne4.competence1[2] = true;
	
		Arbre.ligne5.competence1[2] = false;
		Arbre.ligne5.competence2[2] = false;
		Arbre.ligne5.competence3[2] = false;
		Arbre.ligne5.competence4[2] = false;
	
		Arbre.ligne6.competence1[2] = false;
		Arbre.ligne6.competence2[2] = false;
	
		Arbre.ligne7.competence1[2] = false;

		document.querySelector("#imgSkill10").src = "images/skill10Available.PNG";
		
		document.querySelector("#cptSkill10").style.visibility = "visible";

		document.querySelector("#autreRequis10").style.color = "green";
		document.querySelector("#autreRequis11").style.color = "green";

		document.querySelector("#imgSkill12").src = "images/skill12Off.PNG";
		document.querySelector("#imgSkill13").src = "images/skill13Off.PNG";
		document.querySelector("#imgSkill14").src = "images/skill14Off.PNG";
		document.querySelector("#imgSkill15").src = "images/skill15Off.PNG";

		document.querySelector("#cptSkill12").style.visibility = "hidden";
		document.querySelector("#cptSkill13").style.visibility = "hidden";
		document.querySelector("#cptSkill14").style.visibility = "hidden";
		document.querySelector("#cptSkill15").style.visibility = "hidden";
	}
	if (Arbre.pointsDepenses > 10 && Arbre.pointsDepenses <= 15) {

		Arbre.ligne2.competence1[2] = true;
		Arbre.ligne2.competence2[2] = true;
		Arbre.ligne2.competence3[2] = true;
	
		Arbre.ligne3.competence1[2] = true;
	
		Arbre.ligne4.competence1[2] = false;
	
		Arbre.ligne5.competence1[2] = false;
		Arbre.ligne5.competence2[2] = false;
		Arbre.ligne5.competence3[2] = false;
		Arbre.ligne5.competence4[2] = false;
	
		Arbre.ligne6.competence1[2] = false;
		Arbre.ligne6.competence2[2] = false;
	
		Arbre.ligne7.competence1[2] = false;

		if (Arbre.ligne3.competence1[0] !== Arbre.ligne3.competence1[1]) {
			document.querySelector("#imgSkill7").src = "images/skill7Available.PNG";
		} else {
			document.querySelector("#imgSkill7").src = "images/skill7Full.PNG";
		}
		
		document.querySelector("#cptSkill7").style.visibility = "visible";

		document.querySelector("#autreRequis7").style.color = "green";
		document.querySelector("#autreRequis8").style.color = "green";
		document.querySelector("#autreRequis9").style.color = "green";

		document.querySelector("#imgSkill10").src = "images/skill10Off.PNG";

		document.querySelector("#cptSkill10").style.visibility = "hidden";
	}
	if (Arbre.pointsDepenses > 5 && Arbre.pointsDepenses <= 10) {

		Arbre.ligne2.competence1[2] = true;
		Arbre.ligne2.competence2[2] = true;
		Arbre.ligne2.competence3[2] = true;
	
		Arbre.ligne3.competence1[2] = false;
	
		Arbre.ligne4.competence1[2] = false;
	
		Arbre.ligne5.competence1[2] = false;
		Arbre.ligne5.competence2[2] = false;
		Arbre.ligne5.competence3[2] = false;
		Arbre.ligne5.competence4[2] = false;
	
		Arbre.ligne6.competence1[2] = false;
		Arbre.ligne6.competence2[2] = false;
	
		Arbre.ligne7.competence1[2] = false;

		if (Arbre.ligne2.competence1[0] !== Arbre.ligne2.competence1[1]) {
			document.querySelector("#imgSkill4").src = "images/skill4Available.PNG";
		} else {
			document.querySelector("#imgSkill4").src = "images/skill4Full.PNG";
		}
		
		document.querySelector("#imgSkill5").src = "images/skill5Available.PNG";

		if (Arbre.ligne2.competence3[0] !== Arbre.ligne2.competence3[1]) {
			document.querySelector("#imgSkill6").src = "images/skill6Available.PNG";
		} else {
			document.querySelector("#imgSkill6").src = "images/skill6Full.PNG";
		}

		document.querySelector("#imgSkill7").src = "images/skill7Off.PNG";

		document.querySelector("#autreRequis4").style.color = "green";
		document.querySelector("#autreRequis5").style.color = "green";
		document.querySelector("#autreRequis6").style.color = "green";

		document.querySelector("#cptSkill4").style.visibility = "visible";
		document.querySelector("#cptSkill5").style.visibility = "visible";
		document.querySelector("#cptSkill6").style.visibility = "visible";
		document.querySelector("#cptSkill7").style.visibility = "hidden";

	}
	if (Arbre.pointsDepenses >= 0 && Arbre.pointsDepenses <= 5) {
		
		for (var i = 4; i < 19; i++) {
			document.querySelector("#imgSkill" + i).src = "images/skill" + i + "Off.PNG";
			document.querySelector("#cptSkill" + i).style.visibility = "hidden";
		}
	}

	verifSkill8();
	verifSkill9();
	verifSkill11();
	verifSkill18();
	console.log(Personnage.carac);
}

function actualisePoints() {
	Arbre.pointsDepenses++;
	Personnage.points--;

	document.querySelector("#showPoints").innerHTML = Personnage.points;
	document.querySelector("#showDepenses").innerHTML = Arbre.pointsDepenses - 1;
}

function actualisePoints2() {
	if (Personnage.points < 51) {
		Arbre.pointsDepenses--;
		Personnage.points++;
	}

	document.querySelector("#showPoints").innerHTML = Personnage.points;
	document.querySelector("#showDepenses").innerHTML = Arbre.pointsDepenses - 1;
}

function onClickGauche(nbPtAct, nbPtMax, is_Active, idCpt, idImg, srcImg, infoSkill){
	if (window.matchMedia("(max-width: 640px)").matches) {
		$(infoSkill).css("position", "fixed").css("left", "0").css("top", "0").css("height", "250px").css("display", "block").css("width", "94.5%").css("border-radius", "0px");

		setTimeout(function() {
			$(infoSkill).css("display", "none").fadeOut("slow");
		}, 3000);
	}
	
	estActivee();
	if (is_Active === true && Personnage.points > 0) {
		if (nbPtAct < nbPtMax) {
			nbPtAct++;
			actualisePoints();
			estActivee();
			document.querySelector(idCpt).innerHTML = nbPtAct + "/" + nbPtMax;

			if (nbPtAct === nbPtMax) {
				document.querySelector(idImg).src = srcImg;
				document.querySelector(idCpt).style.color = "gold";
			}
		}
	}
	return nbPtAct;
}

function onClickDroit(nbPtAct, nbPtMax, lock, idCpt, idImg, srcImg, srcImgOff, is_Active) {
	estActivee();
	if (lock === false) {
		if (nbPtAct > 0) {
			nbPtAct--;
			actualisePoints2();
			estActivee();
			document.querySelector(idCpt).innerHTML = nbPtAct + "/" + nbPtMax;
			document.querySelector(idImg).src = srcImg;
			document.querySelector(idCpt).style.color = "lime";
		}
	}
	return nbPtAct;
}

function verifSkill8() {
	if (Arbre.ligne2.competence2[0] === Arbre.ligne2.competence2[1]) {
		Arbre.ligne2.competence2[3] = true;
		Arbre.ligne3.competence2[2] = true;
		document.querySelector("#cptSkill8").innerHTML = Arbre.ligne3.competence2[0] + "/" + Arbre.ligne3.competence2[1];
		if (Arbre.ligne3.competence2[0] === Arbre.ligne3.competence2[1]) {
			document.querySelector("#imgSkill8").src = "images/skill8Full.PNG";
			document.querySelector("#cptSkill8").style.color = "gold";
		} else {
			document.querySelector("#imgSkill8").src = "images/skill8Available.PNG";
			document.querySelector("#cptSkill8").style.color = "lime";
		}
		document.querySelector("#cptSkill8").style.visibility = "visible";
		document.querySelector("#requis8").style.color = "green";
		document.querySelector("#fleche2").style.filter = "grayscale(0%)";
	} else {
		Arbre.ligne2.competence2[3] = false;
		Arbre.ligne3.competence2[2] = false;
		Arbre.pointsDepenses -= Arbre.ligne3.competence2[0];
		Personnage.points += Arbre.ligne3.competence2[0];
		Arbre.ligne3.competence2[0] = 0;
		document.querySelector("#imgSkill8").src = "images/skill8Off.PNG";
		document.querySelector("#cptSkill8").style.visibility = "hidden";
		document.querySelector("#requis8").style.color = "red";
		document.querySelector("#fleche2").style.filter = "grayscale(100%)";
	}
}

function verifSkill9() {
	if (Arbre.ligne1.competence3[0] === Arbre.ligne1.competence3[1]) {
		Arbre.ligne1.competence3[3] = true;
		Arbre.ligne3.competence3[2] = true;
		document.querySelector("#cptSkill9").innerHTML = Arbre.ligne3.competence3[0] + "/" + Arbre.ligne3.competence3[1];
		if (Arbre.ligne3.competence3[0] === Arbre.ligne3.competence3[1]) {
			document.querySelector("#imgSkill9").src = "images/skill9Full.PNG";
			document.querySelector("#cptSkill9").style.color = "gold";
		} else {
			document.querySelector("#imgSkill9").src = "images/skill9Available.PNG";
			document.querySelector("#cptSkill9").style.color = "lime";
		}
		document.querySelector("#requis9").style.color = "green";
		document.querySelector("#cptSkill9").style.visibility = "visible";
		document.querySelector("#fleche1").style.filter = "grayscale(0%)";
	} else {
		Arbre.ligne1.competence3[3] = false;
		Arbre.ligne3.competence3[2] = false;
		Arbre.pointsDepenses -= Arbre.ligne3.competence3[0];
		Personnage.points += Arbre.ligne3.competence3[0];
		Arbre.ligne3.competence3[0] = 0;
		document.querySelector("#imgSkill9").src = "images/skill9Off.PNG";
		document.querySelector("#cptSkill9").style.visibility = "hidden";
		document.querySelector("#requis9").style.color = "red";
		document.querySelector("#fleche1").style.filter = "grayscale(100%)";
	}
}

function verifSkill11() {
	if (Arbre.ligne3.competence3[0] === Arbre.ligne3.competence3[1]) {
		Arbre.ligne3.competence3[3] = true;
		Arbre.ligne4.competence2[2] = true;
		document.querySelector("#cptSkill11").innerHTML = Arbre.ligne4.competence2[0] + "/" + Arbre.ligne4.competence2[1];
		if (Arbre.ligne4.competence2[0] === Arbre.ligne4.competence2[1]) {
			document.querySelector("#imgSkill11").src = "images/skill11Full.PNG";
			document.querySelector("#cptSkill11").style.color = "gold";
		} else {
			document.querySelector("#imgSkill11").src = "images/skill11Available.PNG";
			document.querySelector("#cptSkill11").style.color = "lime";
		}
		document.querySelector("#requis11").style.color = "green";
		document.querySelector("#cptSkill11").style.visibility = "visible";
		document.querySelector("#fleche3").style.filter = "grayscale(0%)";
	} else {
		Arbre.ligne3.competence3[3] = false;
		Arbre.ligne4.competence2[2] = false;
		Arbre.pointsDepenses -= Arbre.ligne4.competence2[0];
		Personnage.points += Arbre.ligne4.competence2[0];
		Arbre.ligne4.competence2[0] = 0;
		document.querySelector("#imgSkill11").src = "images/skill11Off.PNG";
		document.querySelector("#cptSkill11").style.visibility = "hidden";
		document.querySelector("#requis11").style.color = "red";
		document.querySelector("#fleche3").style.filter = "grayscale(100%)";
	}
}

function verifSkill18() {
	if (Arbre.ligne5.competence2[0] === Arbre.ligne5.competence2[1]) {
		Arbre.ligne5.competence2[3] = true;
		Arbre.ligne7.competence1[2] = true;
		document.querySelector("#cptSkill18").innerHTML = Arbre.ligne7.competence1[0] + "/" + Arbre.ligne7.competence1[1];
		if (Arbre.ligne7.competence1[0] === Arbre.ligne7.competence1[1]) {
			document.querySelector("#imgSkill18").src = "images/skill18Full.PNG";
			document.querySelector("#cptSkill18").style.color = "gold";
		} else {
			document.querySelector("#imgSkill18").src = "images/skill18Available.PNG";
			document.querySelector("#cptSkill18").style.color = "lime";
		}
		document.querySelector("#requis18").style.color = "green";
		document.querySelector("#cptSkill18").style.visibility = "visible";
		document.querySelector("#fleche4").style.filter = "grayscale(0%)";
	} else {
		Arbre.ligne5.competence2[3] = false;
		Arbre.ligne7.competence1[2] = false;
		Arbre.pointsDepenses -= Arbre.ligne7.competence1[0];
		Personnage.points += Arbre.ligne7.competence1[0];
		Arbre.ligne7.competence1[0] = 0;
		document.querySelector("#imgSkill18").src = "images/skill18Off.PNG";
		document.querySelector("#cptSkill18").style.visibility = "hidden";
		document.querySelector("#requis18").style.color = "red";
		document.querySelector("#fleche4").style.filter = "grayscale(100%)";
	}
}

/*========== LIGNE 1 ==========*/

$("#imgSkill1").click(function() {
	if ((Arbre.ligne1.competence1[0] != Arbre.ligne1.competence1[1]) && Personnage.points > 0) {
		Personnage.carac.intel += 10;
	}
	Arbre.ligne1.competence1[0] = onClickGauche(Arbre.ligne1.competence1[0], Arbre.ligne1.competence1[1], Arbre.ligne1.competence1[2], "#cptSkill1", "#imgSkill1", "images/skill1Full.PNG", "#infoSkill1");
});

$("#imgSkill2").click(function() {
	if ((Arbre.ligne1.competence2[0] != Arbre.ligne1.competence2[1]) && Personnage.points > 0) {
		Personnage.carac.endu += 10;
	}
	Arbre.ligne1.competence2[0] = onClickGauche(Arbre.ligne1.competence2[0], Arbre.ligne1.competence2[1], Arbre.ligne1.competence2[2], "#cptSkill2", "#imgSkill2", "images/skill2Full.PNG", "#infoSkill2");
});

$("#imgSkill3").click(function() {
	if ((Arbre.ligne1.competence3[0] != Arbre.ligne1.competence3[1]) && Personnage.points > 0) {
		Personnage.carac.force += 10;
	}
	Arbre.ligne1.competence3[0] = onClickGauche(Arbre.ligne1.competence3[0], Arbre.ligne1.competence3[1], Arbre.ligne1.competence3[2], "#cptSkill3", "#imgSkill3", "images/skill3Full.PNG", "#infoSkill3");
	verifSkill9();
});


$("#imgSkill1").contextmenu(function() {
	if (Arbre.ligne1.competence1[0] > 0) {
		Personnage.carac.intel -= 10;
	}
	Arbre.ligne1.competence1[0] = onClickDroit(Arbre.ligne1.competence1[0], Arbre.ligne1.competence1[1], Arbre.ligne1.lock, "#cptSkill1", "#imgSkill1", "images/skill1Available.PNG", Arbre.ligne1.competence1[2]);
});

$("#imgSkill2").contextmenu(function() {
	if (Arbre.ligne1.competence2[0] > 0) {
		Personnage.carac.endu -= 10;
	}
	Arbre.ligne1.competence2[0] = onClickDroit(Arbre.ligne1.competence2[0], Arbre.ligne1.competence2[1], Arbre.ligne1.lock, "#cptSkill2", "#imgSkill2", "images/skill2Available.PNG", Arbre.ligne1.competence2[2]);
});

$("#imgSkill3").contextmenu(function() {
	if (Arbre.ligne1.competence3[0] > 0) {
		Personnage.carac.force -= 10;
	}
	Arbre.ligne1.competence3[0] = onClickDroit(Arbre.ligne1.competence3[0], Arbre.ligne1.competence3[1], Arbre.ligne1.lock, "#cptSkill3", "#imgSkill3", "images/skill3Available.PNG", Arbre.ligne1.competence3[2]);
	verifSkill9();
});

/*========== LIGNE 2 ==========*/

$("#imgSkill4").click(function() {
	if ((Arbre.ligne2.competence1[0] != Arbre.ligne2.competence1[1]) && Personnage.points > 0) {
		Personnage.carac.esprit += 10;
	}
	Arbre.ligne2.competence1[0] = onClickGauche(Arbre.ligne2.competence1[0], Arbre.ligne2.competence1[1], Arbre.ligne2.competence1[2], "#cptSkill4", "#imgSkill4", "images/skill4Full.PNG", "#infoSkill4");
});

$("#imgSkill5").click(function() {
	if ((Arbre.ligne2.competence2[0] != Arbre.ligne2.competence2[1]) && Personnage.points > 0) {
		Personnage.carac.agilite += 10;
	}
	Arbre.ligne2.competence2[0] = onClickGauche(Arbre.ligne2.competence2[0], Arbre.ligne2.competence2[1], Arbre.ligne2.competence2[2], "#cptSkill5", "#imgSkill5", "images/skill5Full.PNG", "#infoSkill5");
	verifSkill8();
});

$("#imgSkill6").click(function() {
	if ((Arbre.ligne2.competence3[0] != Arbre.ligne2.competence3[1]) && Personnage.points > 0) {
		Personnage.carac.agilite += 10;
	}
	Arbre.ligne2.competence3[0] = onClickGauche(Arbre.ligne2.competence3[0], Arbre.ligne2.competence3[1], Arbre.ligne2.competence3[2], "#cptSkill6", "#imgSkill6", "images/skill6Full.PNG", "#infoSkill6");
});



$("#imgSkill4").contextmenu(function() {
	if (Arbre.ligne2.competence1[0] > 0) {
		Personnage.carac.esprit -= 10;
	}
	Arbre.ligne2.competence1[0] = onClickDroit(Arbre.ligne2.competence1[0], Arbre.ligne2.competence1[1], Arbre.ligne2.lock, "#cptSkill4", "#imgSkill4", "images/skill4Available.PNG", Arbre.ligne2.competence1[2]);
});

$("#imgSkill5").contextmenu(function() {
	if (Arbre.ligne2.competence2[0] > 0) {
		Personnage.carac.agilite -= 10;
	}
	Arbre.ligne2.competence2[0] = onClickDroit(Arbre.ligne2.competence2[0], Arbre.ligne2.competence2[1], Arbre.ligne2.lock, "#cptSkill5", "#imgSkill5", "images/skill5Available.PNG", Arbre.ligne2.competence2[2]);
	verifSkill8();
});

$("#imgSkill6").contextmenu(function() {
	if (Arbre.ligne2.competence3[0] > 0) {
		Personnage.carac.agilite -= 10;
	}
	Arbre.ligne2.competence3[0] = onClickDroit(Arbre.ligne2.competence3[0], Arbre.ligne2.competence3[1], Arbre.ligne2.lock, "#cptSkill6", "#imgSkill6", "images/skill6Available.PNG", Arbre.ligne2.competence3[2]);
});

/*========== LIGNE 3 ==========*/

$("#imgSkill7").click(function() {
	if ((Arbre.ligne3.competence1[0] != Arbre.ligne3.competence1[1]) && Personnage.points > 0) {
		Personnage.carac.force += 10;
	}
	Arbre.ligne3.competence1[0] = onClickGauche(Arbre.ligne3.competence1[0], Arbre.ligne3.competence1[1], Arbre.ligne3.competence1[2], "#cptSkill7", "#imgSkill7", "images/skill7Full.PNG", "#infoSkill7");
});

$("#imgSkill8").click(function() {
	if ((Arbre.ligne3.competence2[0] != Arbre.ligne3.competence2[1]) && Personnage.points > 0) {
		Personnage.carac.force += 10;
	}
	Arbre.ligne3.competence2[0] = onClickGauche(Arbre.ligne3.competence2[0], Arbre.ligne3.competence2[1], Arbre.ligne3.competence2[2], "#cptSkill8", "#imgSkill8", "images/skill8Full.PNG", "#infoSkill8");
});

$("#imgSkill9").click(function() {
	if (Arbre.pointsDepenses > 10) {
		if ((Arbre.ligne3.competence3[0] != Arbre.ligne3.competence3[1]) && Personnage.points > 0) {
			Personnage.carac.agilite += 10;
		}
		Arbre.ligne3.competence3[0] = onClickGauche(Arbre.ligne3.competence3[0], Arbre.ligne3.competence3[1], Arbre.ligne3.competence3[2], "#cptSkill9", "#imgSkill9", "images/skill9Full.PNG", "#infoSkill9");		
	}
	verifSkill11();
});


$("#imgSkill7").contextmenu(function() {
	if (Arbre.ligne3.competence1[0] > 0) {
		Personnage.carac.force -= 10;
	}
	Arbre.ligne3.competence1[0] = onClickDroit(Arbre.ligne3.competence1[0], Arbre.ligne3.competence1[1], Arbre.ligne3.lock, "#cptSkill7", "#imgSkill7", "images/skill7Available.PNG", Arbre.ligne3.competence1[2]);
});

$("#imgSkill8").contextmenu(function() {
	if (Arbre.ligne3.competence2[0] > 0) {
		Personnage.carac.force -= 10;
	}
	Arbre.ligne3.competence2[0] = onClickDroit(Arbre.ligne3.competence2[0], Arbre.ligne3.competence2[1], Arbre.ligne3.lock, "#cptSkill8", "#imgSkill8", "images/skill8Available.PNG", Arbre.ligne3.competence2[2]);
});

$("#imgSkill9").contextmenu(function() {
	if (Arbre.pointsDepenses > 10) {
		if (Arbre.ligne3.competence3[0] > 0) {
			Personnage.carac.agilite -= 10;
		}
		Arbre.ligne3.competence3[0] = onClickDroit(Arbre.ligne3.competence3[0], Arbre.ligne3.competence3[1], Arbre.ligne3.lock, "#cptSkill9", "#imgSkill9", "images/skill9Available.PNG", Arbre.ligne3.competence3[2]);
	}
	verifSkill11();
});

/*========== LIGNE 4 ==========*/

$("#imgSkill10").click(function() {
	if ((Arbre.ligne4.competence1[0] != Arbre.ligne4.competence1[1]) && Personnage.points > 0) {
		Personnage.carac.force += 10;
	}
	Arbre.ligne4.competence1[0] = onClickGauche(Arbre.ligne4.competence1[0], Arbre.ligne4.competence1[1], Arbre.ligne4.competence1[2], "#cptSkill10", "#imgSkill10", "images/skill10Full.PNG", "#infoSkill10");
});

$("#imgSkill11").click(function() {
	if (Arbre.pointsDepenses > 15) {
		if ((Arbre.ligne4.competence2[0] != Arbre.ligne4.competence2[1]) && Personnage.points > 0) {
			Personnage.carac.force += 10;
		}
		Arbre.ligne4.competence2[0] = onClickGauche(Arbre.ligne4.competence2[0], Arbre.ligne4.competence2[1], Arbre.ligne4.competence2[2], "#cptSkill11", "#imgSkill11", "images/skill11Full.PNG", "#infoSkill11");
	}
});


$("#imgSkill10").contextmenu(function() {
	if (Arbre.ligne4.competence1[0] > 0) {
		Personnage.carac.force -= 10;
	}
	Arbre.ligne4.competence1[0] = onClickDroit(Arbre.ligne4.competence1[0], Arbre.ligne4.competence1[1], Arbre.ligne4.lock, "#cptSkill10", "#imgSkill10", "images/skill10Available.PNG", Arbre.ligne4.competence1[2]);
});

$("#imgSkill11").contextmenu(function() {
	if (Arbre.pointsDepenses > 15) {
		if (Arbre.ligne4.competence2[0] > 0) {
			Personnage.carac.force -= 10;
		}
		Arbre.ligne4.competence2[0] = onClickDroit(Arbre.ligne4.competence2[0], Arbre.ligne4.competence2[1], Arbre.ligne4.lock, "#cptSkill11", "#imgSkill11", "images/skill11Available.PNG", Arbre.ligne4.competence2[2]);
	}
});

/*========== LIGNE 5 ==========*/

$("#imgSkill12").click(function() {
	if ((Arbre.ligne5.competence1[0] != Arbre.ligne5.competence1[1]) && Personnage.points > 0) {
		Personnage.carac.intel += 10;
	}
	Arbre.ligne5.competence1[0] = onClickGauche(Arbre.ligne5.competence1[0], Arbre.ligne5.competence1[1], Arbre.ligne5.competence1[2], "#cptSkill12", "#imgSkill12", "images/skill12Full.PNG", "#infoSkill12");
});

$("#imgSkill13").click(function() {
	if ((Arbre.ligne5.competence2[0] != Arbre.ligne5.competence2[1]) && Personnage.points > 0) {
		Personnage.carac.endu += 10;
	}
	Arbre.ligne5.competence2[0] = onClickGauche(Arbre.ligne5.competence2[0], Arbre.ligne5.competence2[1], Arbre.ligne5.competence2[2], "#cptSkill13", "#imgSkill13", "images/skill13Full.PNG", "#infoSkill13");	
	verifSkill18();
});

$("#imgSkill14").click(function() {
	if ((Arbre.ligne5.competence3[0] != Arbre.ligne5.competence3[1]) && Personnage.points > 0) {
		Personnage.carac.esprit += 10;
	}
	Arbre.ligne5.competence3[0] = onClickGauche(Arbre.ligne5.competence3[0], Arbre.ligne5.competence3[1], Arbre.ligne5.competence3[2], "#cptSkill14", "#imgSkill14", "images/skill14Full.PNG", "#infoSkill14");
});

$("#imgSkill15").click(function() {
	if ((Arbre.ligne5.competence4[0] != Arbre.ligne5.competence4[1]) && Personnage.points > 0) {
		Personnage.carac.agilite += 10;
	}
	Arbre.ligne5.competence4[0] = onClickGauche(Arbre.ligne5.competence4[0], Arbre.ligne5.competence4[1], Arbre.ligne5.competence4[2], "#cptSkill15", "#imgSkill15", "images/skill15Full.PNG", "#infoSkill15");
});


$("#imgSkill12").contextmenu(function() {
	if (Arbre.ligne5.competence1[0] > 0) {
		Personnage.carac.intel -= 10;
	}
	Arbre.ligne5.competence1[0] = onClickDroit(Arbre.ligne5.competence1[0], Arbre.ligne5.competence1[1], Arbre.ligne5.lock, "#cptSkill12", "#imgSkill12", "images/skill12Available.PNG", Arbre.ligne5.competence1[2]);
});

$("#imgSkill13").contextmenu(function() {
	if (Arbre.ligne5.competence2[0] > 0) {
		Personnage.carac.endu -= 10;
	}
	Arbre.ligne5.competence2[0] = onClickDroit(Arbre.ligne5.competence2[0], Arbre.ligne5.competence2[1], Arbre.ligne5.lock, "#cptSkill13", "#imgSkill13", "images/skill13Available.PNG", Arbre.ligne5.competence2[2]);
	verifSkill18();
});

$("#imgSkill14").contextmenu(function() {
	if (Arbre.ligne5.competence3[0] > 0) {
		Personnage.carac.esprit -= 10;
	}
	Arbre.ligne5.competence3[0] = onClickDroit(Arbre.ligne5.competence3[0], Arbre.ligne5.competence3[1], Arbre.ligne5.lock, "#cptSkill14", "#imgSkill14", "images/skill14Available.PNG", Arbre.ligne5.competence3[2]);
});

$("#imgSkill15").contextmenu(function() {
	if (Arbre.ligne5.competence4[0] > 0) {
		Personnage.carac.agilite -= 10;
	}
	Arbre.ligne5.competence4[0] = onClickDroit(Arbre.ligne5.competence4[0], Arbre.ligne5.competence4[1], Arbre.ligne5.lock, "#cptSkill15", "#imgSkill15", "images/skill15Available.PNG", Arbre.ligne5.competence4[2]);
});

/*========== LIGNE 6 ==========*/

$("#imgSkill16").click(function() {
	if ((Arbre.ligne6.competence1[0] != Arbre.ligne6.competence1[1]) && Personnage.points > 0) {
		Personnage.carac.force += 10;
	}
	Arbre.ligne6.competence1[0] = onClickGauche(Arbre.ligne6.competence1[0], Arbre.ligne6.competence1[1], Arbre.ligne6.competence1[2], "#cptSkill16", "#imgSkill16", "images/skill16Full.PNG", "#infoSkill16");
});

$("#imgSkill17").click(function() {
	if ((Arbre.ligne6.competence2[0] != Arbre.ligne6.competence2[1]) && Personnage.points > 0) {
		Personnage.carac.esprit += 10;
	}
	Arbre.ligne6.competence2[0] = onClickGauche(Arbre.ligne6.competence2[0], Arbre.ligne6.competence2[1], Arbre.ligne6.competence2[2], "#cptSkill17", "#imgSkill17", "images/skill17Full.PNG", "#infoSkill7");
});


$("#imgSkill16").contextmenu(function() {
	if (Arbre.ligne6.competence1[0] > 0) {
		Personnage.carac.force -= 10;
	}
	Arbre.ligne6.competence1[0] = onClickDroit(Arbre.ligne6.competence1[0], Arbre.ligne6.competence1[1], Arbre.ligne6.lock, "#cptSkill16", "#imgSkill16", "images/skill16Available.PNG", Arbre.ligne6.competence1[2]);
});

$("#imgSkill17").contextmenu(function() {
	if (Arbre.ligne6.competence1[0] > 0) {
		Personnage.carac.esprit -= 10;
	}
	Arbre.ligne6.competence2[0] = onClickDroit(Arbre.ligne6.competence2[0], Arbre.ligne6.competence2[1], Arbre.ligne6.lock, "#cptSkill17", "#imgSkill17", "images/skill17Available.PNG", Arbre.ligne6.competence2[2]);
});

/*========== LIGNE 7 ==========*/

$("#imgSkill18").click(function() {
	if (Arbre.pointsDepenses > 30) {
		if ((Arbre.ligne7.competence1[0] != Arbre.ligne7.competence1[1]) && Personnage.points > 0) {
			Personnage.carac.force += 20;
			Personnage.carac.agilite += 20;
			Personnage.carac.endu += 20;
			Personnage.carac.esprit += 20;
			Personnage.carac.intel += 20;
		}
		Arbre.ligne7.competence1[0] = onClickGauche(Arbre.ligne7.competence1[0], Arbre.ligne7.competence1[1], Arbre.ligne7.competence1[2], "#cptSkill18", "#imgSkill18", "images/skill18Full.PNG", "#infoSkill18");		
	}
});


$("#imgSkill18").contextmenu(function() {
	if (Arbre.pointsDepenses > 30) {
		if (Arbre.ligne7.competence1[0] > 0) {
			Personnage.carac.force -= 20;
			Personnage.carac.agilite -= 20;
			Personnage.carac.endu -= 20;
			Personnage.carac.esprit -= 20;
			Personnage.carac.intel -= 20;
		}
		Arbre.ligne7.competence1[0] = onClickDroit(Arbre.ligne7.competence1[0], Arbre.ligne7.competence1[1], Arbre.ligne7.lock, "#cptSkill18", "#imgSkill18", "images/skill18Available.PNG", Arbre.ligne7.competence1[2]);
	}
});



function downloadPdf() {
	var pdf = new jsPDF();
	
	pdf.setFontType("italic");
	pdf.text(25, 25, "Points utilisés : " + (Arbre.pointsDepenses - 1) + "\nPoints restant : " + Personnage.points);

	pdf.setFontType("bold");
	pdf.text(25, 25, "\n\n\n\nVos compétences :");
	pdf.setLineWidth(0.5);
	pdf.line(25, 52, 77, 52); // x, y, toX, toY

	pdf.setFontType("");
	pdf.setFontSize(14);
	pdf.text(25, 25, 
		"\n\n\n\n\n\nIMPROVED HEROIC STRIKE : " + Arbre.ligne1.competence1[0] + "/" + Arbre.ligne1.competence1[1] + "\n" + 
		"DEFLECTION : " + Arbre.ligne1.competence2[0] + "/" + Arbre.ligne1.competence2[1] + "\n" + 
		"IMPROVED REND : " + Arbre.ligne1.competence3[0] + "/" + Arbre.ligne1.competence3[1] + "\n" + 
		"IMPROVED CHARGE : " + Arbre.ligne2.competence1[0] + "/" + Arbre.ligne2.competence1[1] + "\n" + 
		"TACTICAL MASTERY : " + Arbre.ligne2.competence2[0] + "/" + Arbre.ligne2.competence2[1] + "\n" + 
		"IMPROVED THUNDER CLAP : " + Arbre.ligne2.competence3[0] + "/" + Arbre.ligne2.competence3[1] + "\n" + 
		"IMPROVED OVERPOWER : " + Arbre.ligne3.competence1[0] + "/" + Arbre.ligne3.competence1[1] + "\n" + 
		"ANGER MANAGEMENT : " + Arbre.ligne3.competence2[0] + "/" + Arbre.ligne3.competence2[1] + "\n" + 
		"DEEP WOUNDS : " + Arbre.ligne3.competence3[0] + "/" + Arbre.ligne3.competence3[1] + "\n" + 
		"TWO-HANDED WEAPON SPECIALIZATION : " + Arbre.ligne4.competence1[0] + "/" + Arbre.ligne4.competence1[1] + "\n" + 
		"IMPALE : " + Arbre.ligne4.competence2[0] + "/" + Arbre.ligne4.competence2[1] + "\n" + 
		"AXE SPECIALIZATION : " + Arbre.ligne5.competence1[0] + "/" + Arbre.ligne5.competence1[1] + "\n" + 
		"SWEEPING STRIKES : " + Arbre.ligne5.competence2[0] + "/" + Arbre.ligne5.competence2[1] + "\n" + 
		"MACE SPECIALIZATION : " + Arbre.ligne5.competence3[0] + "/" + Arbre.ligne5.competence3[1] + "\n" + 
		"SWORD SPECIALIZATION : " + Arbre.ligne5.competence4[0] + "/" + Arbre.ligne5.competence4[1] + "\n" + 
		"POLEARM SPECIALIZATION : " + Arbre.ligne6.competence1[0] + "/" + Arbre.ligne6.competence1[1] + "\n" + 
		"IMPROVED HAMSTRING : " + Arbre.ligne6.competence2[0] + "/" + Arbre.ligne6.competence2[1] + "\n" + 
		"MORTAL STRIKE : " + Arbre.ligne7.competence1[0] + "/" + Arbre.ligne7.competence1[1]);
		
	pdf.save("Skills.pdf");
}

function verifMail() {
	var mail = document.querySelector("#mail").value;
	var reg = /[a-z\d._-]+@[a-z._-]{2,}\.[a-z]{2,4}/;

	if (reg.test(mail)) {} 
	else event.preventDefault();
}