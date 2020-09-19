export declare class PeopleInEvent {
    static config: {
        paginationCountPerPage: number;
    };
    static getRecipeIdsForQuery(peopleInEventModels: any): any;
    static getOtherUsersAlsoOrderedRecipe(terms: any, listTask: any, list: any): any;
    static getOrderedRecipeDict(peopleInEventListTask: any): IPeopleInEventListDict;
    static getOrderedRecipeCount(user: any, peopleInEventListDict: IPeopleInEventListDict): number;
    static getOrderedRecipeIds({ peopleInEventListDict, selectedUserId }: {
        peopleInEventListDict: any;
        selectedUserId: any;
    }): string[];
    /**
     * Basically, the 'peopleInEvent' parse instance can be created and removed as the same instance.
     * For Example:
     *     1. Created a 'PeopleInEvent' parse object for some use in the event and flagged it as '1'.
     *     2. One day, the 'PeopleInEvent' parse object will be removed only flagged as '0'.
     *     3. Other day, some user also want to create it again, but the parse instance already exist,
     *        So do not need to create a new 'PeopleInEvent' parse object,
     *        Just query it using 'PeopleInEvent' uniqueId.
     * @param eventUniqueId - uniqueId of the event
     * @param userId - id of the user
     * @returns {string}
     */
    static generateParseObjectUniqueId(eventUniqueId: string, userId: string): string;
    static hasOrdered({ orderedRecipeIds }: {
        orderedRecipeIds: any;
    }, recipe: IParseModelRecipes): boolean;
}
