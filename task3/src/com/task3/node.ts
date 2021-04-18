export class Node<T> {
    private _key: number;
    private _data: T;
    private _left: Node<T> | null;
    private _right: Node<T> | null;
    constructor(NewKey: number, NewData: T) {
        this._key = NewKey;
        this._data = NewData;
        this._left = null;
        this._right = null;
    }

    public get key(): number {
        return this._key;
    }

    public set key(value: number) {
        this._key = value;
    }

    public get left(): Node<T> | null {
        return this._left;
    }

    public set left(node: Node<T> | null) {
        this._left = node;
    }

    public get right(): Node<T> | null {
        return this._right;
    }

    public set right(node: Node<T> | null) {
        this._right = node;
    }
    public get data(): T {
        return this._data;
    }

    public set data(data: T) {
        this._data = data;
    }

    public print(): string {
        let result: string = this._key.toString();
        if (this.left != null && this.right != null) {
            result = this.key + "( " + this.left.print() + ", " + this.right.print() + " )";
        } else if (this.left != null) {
            result = this.key + "( " + this.left.print() + ", null )";
        } else if (this.right != null) {
            result = this.key + "( null, " + this.right.print() + " )";
        } else {
            result = this.key + "( null, null )";
        }
        return result;
    }
}
