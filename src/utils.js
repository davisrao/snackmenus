function capitalizeWord(type){
    const upper = type.charAt(0).toUpperCase() + type.slice(1, type.length - 1);
    return upper;
}

function getIdFromName(name){
    const id = name.toLowerCase().split(" ").join("-");
    return id;
}

export {capitalizeWord, getIdFromName};
