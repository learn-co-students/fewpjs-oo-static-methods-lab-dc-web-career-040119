class Formatter {
    static capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1) }

    static sanitize(string) { return string.replace(/[^A-Za-z0-9-'\s]+/g, '') }

    static titleize(string) {
        return string.split(' ').map((word) => {
            if (string.split(' ').indexOf(word) === 0 ||
                word !== 'the' &&
                word !== 'a' &&
                word !== 'an' &&
                word !== 'of' &&
                word !== 'for' &&
                word !== 'at' &&
                word !== 'by' &&
                word !== 'from'&&
                word !== 'but' &&
                word !== 'and') {
                return this.capitalize(word)
            } else {
                return word
            }
        }).join(' ')
    }
}