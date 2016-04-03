export class ComponentPosition {
    constructor(valueX=0, valueY=0){
        this.x = valueX;
        this.y = valueY;
    }
    static get name () {
        return 'position';
    }
}

export class ComponentDescription {
    constructor(description = 'Generic description'){
        this.value = description;
    }
    static get name () {
        return 'description';
    }
}

