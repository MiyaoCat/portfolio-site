console.log(">>>>>>>>", state.getDetail());
const found = menuItems.find(function (item) {
	return item.slug == state.getDetail();
});

setTimeout(function () {
	console.log("item", found);
}, 500);

return `
		<article class='item' data-id='x'>
			<h2>xxx</h2>
			<p>xxx</p>

			<button data-route='itemDetail'>Details<idutton>

			<button data-action='add'>Add to cart</button>
		</article>
	`;
