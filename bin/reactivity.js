const dinner = {
    meal: 'rice'
}

const handler = {
    get(target, property, receiver) {
        track(target, property)
        return Reflect.get(...arguments)
    },
    set(target, key, value, receiver) {
        let oldValue = target[key];
        let result = Reflect.set(...arguments)
        if(oldValue != result) {
            trigger(target, key)
        }
        return result;
    }
}

const mealProxy = new Proxy(dinner, handler);
console.log(mealProxy.meal)