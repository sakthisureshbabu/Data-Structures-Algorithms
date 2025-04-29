// Deep comparison

// Design a shallow comparison function

const typeOf = input => {
    const rawObject = Object.prototype.toString.call(input).toLowerCase();
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObject)[1];
    return type;
}

const deepCompare = (src, tgt) => {
    if (typeof(src) !== typeOf(tgt))
        return false;

    if(typeOf(src) === 'array') {
        if(src.length !== tgt.length)
            return false;

        return src.every((ele, idx) => deepCompare(el, tgt[idx]));
    }

    if(typeOf(src) === 'object') {
        if(Object.keys(src).length !== Object.keys(tgt).length)
            return false;

        return Object.keys(src).every(key => deepCompare(src[key], tgt[key]));
    }

    if(typeOf(src) === 'date') {
        return src.getTime() === tgt.getTime();
    }

    return src === tgt;
}