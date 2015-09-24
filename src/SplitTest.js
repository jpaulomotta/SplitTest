var SplitTest = (function() {
    'use restrict';
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function setCookie(value) {
        document.cookie = "splitTest=" + value;
    }

    function getCookie() {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;\s*)splitTest\s*\=\s*([^;]*).*$)|^.*$"), "$1");
    }

    return {
        make: function(versions) {
            keys = Object.keys(versions);
            storedKey = getCookie();

            if(storedKey && versions[storedKey]) {
                versions[storedKey].call(null);
            } else {
                selectedVersionKey = keys[getRandomInt(0, keys.length)];
                versions[selectedVersionKey].call(null);
                setCookie(selectedVersionKey);
            } 
        }
    }
})();
