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
	frasiRabbia: [
		"NO, NO, NO!",
		"NON DOVEVA SUCCEDERE!",
		"DOVEVO PROTEGGERTI",
		"È COLPA MIA",
		"PERCHÉ?!",
		"NON È GIUSTO!",
		"DOVEVO ESSERCI IO!",
		"SONO UNA BRUTTA PERSONA",
		"NON C’È SOLUZIONE!",
		"VORREI SPARIRE",
		"TUTTI MI ODIANO",
		"HO ROVINATO TUTTO!"
	],
	glitchGameCompleted: false,
	glitchGamePhase: 1,
	gameStartTime: null,
});