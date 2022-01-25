type Data = object | Array<any>;
type PathNode = string | number;

export = objectshop;

export as namespace objectshop;

declare namespace objectshop {
    function has(src:any, path: Array<PathNode> | PathNode): boolean;
    function get(src: Data, path: Array<PathNode> | PathNode);
    function set<T extends Data>(src: T, path: Array<PathNode> | PathNode, value: any): T;
    function type(src: any): string;
    function deepCopy<T>(src: T): T;
}