import geoJsonData from "../data/GeoJsonExample";

function parse() {
    let ctg = new Set();
    geoJsonData.features.map((feature) => {
        ctg.add(feature.properties.category);
    });
    return [...ctg];
}

const initialState = {
    categories: parse()
};

export function categoryReducer(state = initialState, action) {
    switch (action.type){
        case "SET":
            return Object.assign({}, state, {categories: action.categories});
    }
    return state;
}