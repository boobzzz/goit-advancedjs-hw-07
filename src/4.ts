abstract class House {
    protected key: Key;
    protected door: boolean = false;
    protected tenants: Person[];

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(key: Key): void;
}

class Key {
    private signature: number;

    constructor() {
        this.signature = Math.ceil(Math.random() * 999);
    }

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

class MyHouse extends House {
    constructor(protected key: Key) {
        super();
    }

    public openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house: MyHouse = new MyHouse(key);
const person: Person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};