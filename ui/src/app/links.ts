export interface ILink {
    displayText: string,
    routerLink: string,
    homepageImgLink?: string
}

// Currently for internal navigation only
export const links: ILink[] = [
    {
        routerLink: '/',
        displayText: 'Home'
    },
    {
        routerLink: '/shoppinglist',
        displayText: 'Shopping Lists',
        homepageImgLink: '/assets/shopping-list.jpg'
    },
    {
        routerLink: '/recipes',
        displayText: 'Recipes',
        homepageImgLink: '/assets/recipes.jpg'
    },
];