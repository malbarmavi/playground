export class List<T> extends Array<T> {

    constructor() {
        super();
    }

    get count(): number {
        return this.length;
    }

    add(value: T): void {
        this.push(value);
    }

    get(index: number): T {
        return this[index];
    }

    contains(item: T): boolean {
        if (this.indexOf(item) != -1) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.splice(0, this.count);
    }
}