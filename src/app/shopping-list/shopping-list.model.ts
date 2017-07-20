export class ShoppingList {

    constructor(
        public title: string,
        public dateCreated: Date,
        public dateModified: Date,
        public createdBy: String,     // User
        public modifiedBy: String,    // User
        public users?: String[],      // User[]
        public type?: String[],        // ListType
        public description?: string,
        public states?: String,       // SessionState[],
        public id?: string) {
        }
}
