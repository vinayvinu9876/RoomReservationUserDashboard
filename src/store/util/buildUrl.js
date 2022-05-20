const host = "http://localhost:8080/";

const buildUrl = (path) => (host + path);

export default buildUrl;