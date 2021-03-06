export default (params, { history, location }) => {
    const paramsClone = Object.assign({}, params);

    ["sort", "search", "where"].forEach(key => {
        if (typeof paramsClone[key] === "object") {
            paramsClone[key] = JSON.stringify(paramsClone[key]);
        }
    });

    const keys = ["limit", "after", "before", "where", "search", "sort"];

    const query = new URLSearchParams(location.search);
    keys.forEach(key => {
        if (typeof paramsClone[key] !== "undefined") {
            query.set(key, paramsClone[key]);
        } else {
            query.delete(key);
        }
    });

    history.push({ search: query.toString() });
};
