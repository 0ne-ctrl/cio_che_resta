/* global monogatari */

// Persistent Storage Variable
monogatari.storage ({
	player: {
		name: ''
	},
	clickedObjects: [],
	// Default = oggetti della Torcia; ogni scena a oggetti lo reimposta al suo ingresso
	allObjects: ['cornice', 'pianta_2', 'porta', 'mobile'],
	lastClickedObject: null,
	// objectDescriptions: {
	// 	obj1: "Descrizione oggetto 1, pappappero.",
	// 	obj2: "Descrizione oggetto 2, pappapperollà."
	// },
	frasiRabbia: [
		"NO, NO, NO!",
		"NON DOVEVA SUCCEDERE!",
		"DOVEVO PROTEGGERTI",
		"È COLPA MIA",
		"PERCHÉ?!",
		"NON È GIUSTO!",
		"DOVEVO ESSERCI IO!",
		"SONO UNA BRUTTA PERSONA",
		"NON C'È SOLUZIONE!",
		"VORREI SPARIRE",
		"TUTTI MI ODIANO",
		"HO ROVINATO TUTTO!"
	],
	allClicked: false,
	torchInitialized: false,
	glitchGameCompleted: false,
	glitchGamePhase: 1,
	gameStartTime: null,
});