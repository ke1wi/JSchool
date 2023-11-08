class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;

        this.itemCount = function () {
            return this.collection.length;
        };

        this.pageCount = function () {
            return Math.ceil(this.collection.length / this.itemsPerPage);
        };

        this.pageItemCount = function (pageIndex) {
            if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
                return -1;
            }
            return this.itemsPerPage - Math.ceil((((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) % this.itemsPerPage);
        };

        this.pageIndex = function (itemIndex) {
            if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
                return -1;
            }
            return Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
        };
    }
}