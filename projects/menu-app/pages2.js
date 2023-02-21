import { menuItems } from './menu-items.js';
import { renderMenu } from './render2.js';

const pages = {};

pages.menu = `
	${renderMenu(menuItems)};
`

export { pages }