type PathNode = string | number;

export = objectshop;

export as namespace objectshop;

declare namespace objectshop {
    function get(obj: object, path: Array<PathNode>);
    function set(obj: object, path: Array<PathNode>, newValue: any)
}