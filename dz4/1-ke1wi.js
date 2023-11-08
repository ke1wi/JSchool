class VigenèreCipher {
    constructor(key, abc) {

        this.encode = function (str) {
            let res = "";
            for (let i in str) {
                let el = str[i];
                let k = key[i % key.length];
                if (abc.indexOf(el) >= 0) {
                    res += abc[(abc.indexOf(el) + abc.indexOf(k)) % abc.length];
                } else {
                    res += el;
                }
            }
            return res;
        };


        this.decode = function (str) {
            let res = "";
            for (let i in str) {
                let el = str[i];
                let k = key[i % key.length];
                if (abc.indexOf(el) >= 0) {
                    res += abc[(abc.indexOf(el) + abc.length - abc.indexOf(k)) % abc.length];
                } else {
                    res += el;
                };
            }
            return res;
        };
    }
}