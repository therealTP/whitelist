const localStorageService = {
    get(key) {
        return window.localStorage.getItem(key);
    },
    set(key, val) {
        window.localStorage.setItem(key, val);
    },
    del(key) {
        window.localStorage.removeItem(key);
    }
};

module.exports = localStorageService;