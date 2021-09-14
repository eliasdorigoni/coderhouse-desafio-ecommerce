const PersistentCart = {
    get: function() {
        let items
        try {
            items = JSON.parse(window.localStorage.getItem('cart'))
            if (items === null) {
                items = []
            }
        } catch (e) {
            this.clear()
            items = []
        }

        return items
    },
    set: function(items) {
        window.localStorage.setItem('cart', JSON.stringify(items))
    },
    clear: function() {
        window.localStorage.clear()
    },
}

export default PersistentCart