import { House, BadgePlus } from 'lucide-react';

export const nav_links = [
	{
		title: 'Home',
		link: '',
		icon: House,
		notAuth: true,
	},
	{
		title: 'Blogs',
		link: 'blogs',
		icon: BadgePlus,
		notAuth: true,
	},
	{
		title: 'Create',
		link: 'create',
		icon: BadgePlus,
		notAuth: false,
	},
];
