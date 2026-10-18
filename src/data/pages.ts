// Site pages in carousel order. NavMenu.astro renders the projects as cards;
// Navigation.astro's NextPrev cycles through the whole list (wrapping at
// both ends) and shows the current page's title.
export interface SitePage {
	href: string;
	title: string;
	/** Path to the 96px project illustration shown in NavMenu. */
	image?: string;
}

export const home: SitePage = { href: '/', title: 'Home' };

export const projects: Required<SitePage>[] = [
	{
		href: '/wave-dashboard-vision',
		title: 'Wave dashboard vision',
		image: '/images/projects/dashboard.svg',
	},
	{
		href: '/wave-design-systems',
		title: 'Wave design systems',
		image: '/images/projects/design-systems.svg',
	},
	{
		href: '/wave-illustrations',
		title: 'Wave illustrations',
		image: '/images/projects/illustrations.svg',
	},
	{
		href: '/whisky-lovers',
		title: 'Johnnie Walker’s Whisky Lovers',
		image: '/images/projects/whisky-lovers.svg',
	},
	{
		href: '/wave-navigation',
		title: 'Wave navigation',
		image: '/images/projects/navigation.svg',
	},
];

export const carouselPages: SitePage[] = [home, ...projects];
