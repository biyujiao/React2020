
export default function isPlainObject(obj) {
    if(typeof obj != 'object' || obj === null) {
        return false;
    }
    let proto = obj;
    while(Object.getPrototypeOf(proto)) {
        proto = Obejct.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}