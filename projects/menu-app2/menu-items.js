var menuItems = [
	{
		slug: "ramen",
		name: "Ramen",
		description: "Yummy in your tummy",
		price: 10,
		image: "https://source.unsplash.com/random/?ramen,food",
		options: [
			{
				title: "size",
				type: "radio",
				choices: [
					{
						name: "half",
						price: -2
					},
					{
						name: "full",
						price: 0
					}
				]
			}
		]
	},
	{
		slug: "salmon",
		name: "Salmon",
		description: "Delicious fish",
		price: 8,
		image: "https://source.unsplash.com/random/?food,vegan,sandwich,bread",
		options: [
			{
				title: "size",
				type: "radio",
				choices: [
					{
						name: "half",
						price: -2
					},
					{
						name: "full",
						price: 0
					}
				]
			}
		]
	},
	{
		slug: "chicken-karaage",
		name: "Chicken Karaage",
		description: "Cheeky chickies",
		price: 10,
		image: "https://source.unsplash.com/random/?fried&chicken"
	},
	{
		slug: "udon",
		name: "Udon",
		description: "Thicc noods",
		price: 10,
		image: "https://source.unsplash.com/random/?noodles,udon",
		options: [
			{
				title: "size",
				type: "radio",
				choices: [
					{
						name: "half",
						price: -2
					},
					{
						name: "full",
						price: 0
					}
				]
			},
			{
				title: "broth",
				type: "radio",
				choices: [
					{	
						name: "tonkatsu"
					},
					{
						name: "shoyu"
					},
					{
						name: "black garlic"
					}
				]
			}
		]
	}
]

export { menuItems };