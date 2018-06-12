export var Hermitage = {
	"type": "Feature",
	"id": 1,
	"properties": {
		"name": "winterPalace",
		"desc": "Some description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter placeSome description about winter place",
		"color": "#7f2",
		"category": "palace"
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [[
			[30.311387, 59.940482],
			[30.313146, 59.939246],
			[30.316386, 59.940407],
			[30.314519, 59.941643],
			[30.311387, 59.940482]
		]]
	}
};

export var NewHolland = {
	"type": "Feature",
    "id": 2,
	"properties": {
		"name": "newHolland",
		"desc": "Some description about new holland",
		"category": "prison"
	},
	"geometry": {
		"type": "Polygon",
		"coordinates": [[
			[30.286045074462894, 59.92933428058327],
			[30.286045074462894, 59.92929396150716],
			[30.286104083061222, 59.92925095443866],
			[30.287219882011417, 59.92897678306626],
			[30.287246704101566, 59.92899291085676],
			[30.29013276100159, 59.92830747284557],
			[30.290438532829288, 59.92826715252152],
			[30.290717482566837, 59.92831016086543],
			[30.290738940238956, 59.92822683214847],
			[30.291012525558475, 59.92816500748128],
			[30.29288470745087, 59.9280440458427],
			[30.293335318565372, 59.92805748604653],
			[30.29341578483582, 59.92810049466226],
			[30.293453335762027, 59.9281865117264],
			[30.292772054672245, 59.92954931482813],
			[30.292589664459232, 59.92960038525645],
			[30.292546749114994, 59.92968371052338],
			[30.29268085956574, 59.92976972348257],
			[30.291962027549747, 59.93114052491953],
			[30.291779637336735, 59.93120503182689],
			[30.29163479804993, 59.931207719611976],
			[30.2881532907486, 59.93013796394294],
			[30.286087989807132, 59.9293826634099],
			[30.286045074462894, 59.92933428058327]
		],[
			[30.290969610214237, 59.92893377558654],
			[30.29014348983765, 59.92919181962843],
			[30.28985381126404, 59.92961920065761],
			[30.289945006370548, 59.929656831427884],
			[30.289939641952518, 59.92968639843171],
			[30.290808677673343, 59.92996056393945],
			[30.290948152542118, 59.92983423305562],
			[30.29116272926331, 59.92951168393591],
			[30.291200280189518, 59.9294122306581],
			[30.29136121273041, 59.929027854375974],
			[30.29113054275513, 59.92894183949326],
			[30.290969610214237, 59.92893377558654]
		]]
	}
};

const geoJsonData = {
	"type": "FeatureCollection",
	"features": [
		Hermitage,
		NewHolland
	]
};

export default geoJsonData;
