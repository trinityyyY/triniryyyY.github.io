import { Node } from "./node.js";

export class BinarySearchTree<T> {
    private _root: Node<T> | null;
    constructor() {
        this._root = null;
    }

    public get root (): Node <T> | null {
        return this._root;
    }

    public set root (node: Node<T> | null) {
        this._root = node;
    }

    public insert(NewKey: number, NewData: T): void {
        const NewNode = new Node(NewKey, NewData);
        if (this.root === null) {
            this.root = NewNode;
        } else {
            this.insertNode(this.root, NewNode);
        }
    }

    private insertNode(node: Node<T>, NewNode: Node<T>): void {
        if (NewNode.key < node.key) {
            if (node.left === null) {
                node.left = NewNode;
            } else {
                this.insertNode(node.left, NewNode);
            }
        } else {
            if (node.right === null) {
                node.right = NewNode;
            } else {
                this.insertNode(node.right, NewNode);
            }
        }
    }

    public search(node: Node<T> | null, key: number): Node<T> | null {
        let result: Node<T> | null = node;
        if (node === null) {
            result = null;
        } else if (key < node.key) {
            result = this.search(node.left, key);
        } else if (key > node.key) {
            result = this.search(node.right, key);
        }
        return result;
    }

    minNode(node: Node<T>): Node<T> {
        let result: Node<T>;
        node.left === null ? result = node : result = this.minNode(node.left);
        return result;
    }

    remove(key: number): void {
        this.root = this.removeNode(this.root, key); // helper method below
    }
    removeNode(node: Node<T> | null, key: number): Node<T> | null  {
        let result: Node<T> | null = node;
        if (node === null) {
            result = null;
        } else if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            result = node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            result = node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                result = node;
            } else if (node.left === null) {
                node = node.right;
                result = node;
            } else if (node.right === null) {
                node = node.left;
                result = node;
            } else if (node.key === key) {
                // удаляем узел с двумя потомками
                // minNode правого поддерева хранится в новом узле
                const newNode = this.minNode(node.right);
                node.key = newNode.key;
                node.right = this.removeNode(node.right, newNode.key);
                result = node;
            }
        }
        return result;
    }

    public print(): string {
        let result: string;
        this.root === null ? result = "empty" : result = this.root.print();
        return result;
    }

    public printNode(node: Node<T> | null, key: number): string {
        let result: string = "not found!";
        if (node != null) {
            result = "key = " + node.key + "; data = " + node.data;
        }
        return result;
    }

}
