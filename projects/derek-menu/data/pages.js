import { renderMenu, renderItem, renderItemDetail } from "../rendering.js";
import state from "../state.js";

const pages = {};

pages.landing = `
	<section>
		<h1>Landing</h1>
		
		<button data-route='menu'>Enter</button>
	</section>
`;

pages.menu = `
	<section class='page-menu'>
		<h1>Menu</h1>

		${renderMenu()}
	</section>
`;

pages.itemDetail = `
	<section class='item-detail'>
		<h1>Detail</h1>

		${renderItemDetail()}
	</section>
`;

pages.admin = `
	<section>
		<h1>Admin</h1>
		
		<form name="newItem">
			<div class='field'>
				<label>name</label>
				<input type='text' data-input='name' required />
			</div>

			<div class='field'>
				<label>price</label>
				<input type='text' data-input='price' required />
			</div>

			<div class='field'>
				<label>color</label>
				<input type='text' data-input='color' required />
			</div>

			<button type='submit' data-action='new'>Add item</button>
		</form>
	</section>
`;

// for some reason - these input required attributes aren't forcing them to be required...

export default pages;
