type Data = object | Array<any>;
type PathNode = string | number;

export = objectshop;

export as namespace objectshop;

declare namespace objectshop {
    function has(src:any, path: Array<PathNode> | PathNode): boolean;
    function get(obj: Data, path: Array<PathNode> | PathNode);
    function set<T extends Data>(obj: T, path: Array<PathNode> | PathNode, newValue: any): T;
    function type(src: any): string;
}