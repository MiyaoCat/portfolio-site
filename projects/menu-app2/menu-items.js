var menuItems = [
	{
		slug: "ramen",
		name: "Ramen",
		description: "Yummy in your tummy. Comes with soft boiled egg, nori, bamboo shoots and corn. Togarashi flakes are included separately.",
		price: 10,
		image: "./images/ramen2.jpg",
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
		description: "Delicious fish grilled King Salmon caught from the fisherman you see on Discovery Channel. Itadakimasu!",
		price: 8,
		image: "./images/salmon-wide.jpeg",
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
		description: "Crispy and tender. Crunchy on the outside, soft and moist on the inside.",
		price: 10,
		image: "./images/chicken-karaage.jpeg"
	},
	{
		slug: "udon",
		name: "Udon",
		description: "Thicc noods. Comes with kamaboko (fish cakes), nori, and one peice of shrimp tempurahhhh.",
		price: 10,
		image: "./images/udon.jpeg",
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