export interface ILink {
    displayText: string,
    routerLink: string,
    homepageImgLink?: string,
    matIcon?: string,
}

// Currently for internal navigation only
export const links: ILink[] = [
    {
        routerLink: '/',
        displayText: 'Home',
        matIcon: 'home'
    },
    {
        routerLink: '/shoppinglist',
        displayText: 'Shopping Lists',
        homepageImgLink: '/assets/shopping-list.jpg',
        matIcon: 'local_grocery_store'
    },
    {
        routerLink: '/recipes',
        displayText: 'Recipes',
        homepageImgLink: '/assets/recipes.jpg',
        matIcon: 'edit_note'
    },
];