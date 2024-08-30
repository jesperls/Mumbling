import { Injectable } from '@angular/core';
import { GameCardCategory, GameCard, Category } from './game-card/game-card';


@Injectable({
  providedIn: 'root'
})
export class GameService {
	private phrases: GameCardCategory[] = [
		{
			category: {
				title: 'Pop Culture'
			},
			cards: [
				{ mumbled: "Door Her Text Pull Horror", actual: "Dora the Explorer" },
	  			{ mumbled: "Vector Hero Yell", actual: "Victory Royale" },
	  			{ mumbled: "Lip Prawn Shames", actual: "Lebron James" },
	  			{ mumbled: "Fish Hits Bin Hers", actual: "Fidget Spinners" },
	  			{ mumbled: "Is Bunch Pops Queer Pans", actual: "Sponge Bob Square Pants" },
	  			{ mumbled: "Duh Waned Drr Hawk Jon's Son", actual: "Dwayne The Rock Johnson" },
	  			{ mumbled: "Dock Kink Tomb Eye Their Ab Hissed", actual: "Talking to my therapist" },
	  			{ mumbled: "Tea Pff Ache Fit He Yo", actual: "Deepfake video" },
	  			{ mumbled: "Yeah Skew Ween", actual: "Yass queen" },
	  			{ mumbled: "Mocks Suck Curb Berk", actual: "Mark Zuckerberg" },
	  			{ mumbled: "Dale Hers Whiffed", actual: "Taylor Swift" },
	  			{ mumbled: "May Chore Head Flack", actual: "Major red flag" },
	  			{ mumbled: "Inn Flew Answer Sin Duh Why Yelled", actual: "Influencers in the wild" },
	  			{ mumbled: "My Cull Chore Den", actual: "Michael Jordan" },
	  			{ mumbled: "Come Pew Turf High Russ", actual: "Computer virus" },
	  			{ mumbled: "Is Bunch Pops Queer Pans", actual: "Sponge Bob Square Pants" },
	  			{ mumbled: "High Seed Head Pee Pull", actual: "I See Dead People" },
	  			{ mumbled: "Cow Fit Mine Teen", actual: "Covid-19" },
	  			{ mumbled: "Thick Talk", actual: "TikTok" },
	  			{ mumbled: "Cry Yo Curry And Sea", actual: "Cryptocurrency" },
	  			{ mumbled: "Sew Shell Me Dia", actual: "Social Media" },
	  			{ mumbled: "Egg Socks Tent Shall Cry Sis", actual: "Existential Crisis" },
	  			{ mumbled: "Palm Pin Spies Lot E", actual: "Pumpkin spice latte" },
	  			{ mumbled: "Lee Give Ledge An Age", actual: "League of Legends" },
	  			{ mumbled: "Sail Earn On", actual: "Sailor moon" },
	  			{ mumbled: "That Och Ing Deed", actual: "The walking dead" },
	  			{ mumbled: "Goose Igg Am", actual: "Gucci Gang" },
	  			{ mumbled: "In Trees Out Of Thought", actual: "Intrusive thought" },
	  			{ mumbled: "Hull Owed Are Ness Mail Ore Drained", actual: "Hello darkness my old friend" },
	  			{ mumbled: "Peer Um Id Scheme", actual: "Pyramid scheme" },
	  			{ mumbled: "Can Spare Us With Terrace Tea", actual: "Conspiracy theory" },
	  			{ mumbled: "Disk Core Knit Ten", actual: "Discord kitten" },
	  			{ mumbled: "Go Too To Have Maze Womp", actual: "Get out of my swamp" },
	  			{ mumbled: "Scott Build It Oil It", actual: "Skibidi toilet" },
	  			{ mumbled: "Wool Dove War Graph Tea", actual: "World of Warcraft" },
	  			{ mumbled: "Jan Eur Is Igg Est", actual: "January sixth" },
	  			{ mumbled: "Boom Real Are Art", actual: "Boomer alert" },
	  			{ mumbled: "Eight On Neck Ed Cab Eyes", actual: "Eighteen naked cowboys" },
				{ mumbled: "Babe Idiot Awe", actual: "Baby Yoda" },
				{ mumbled: "The Row Zone Him Pause Trim Ing Omus", actual: "There is an impostor among us" },
				{ mumbled: "What The Eyes Edge Ma", actual: "What the sigma" },
				{ mumbled: "Tress Tell Him Press", actual: "Dress to impress" },
				{ mumbled: "Train At Tunnel If", actual: "Try not to laugh" }
			],
		},
		{
			category: {
				title: 'Kinky'
			},
			cards: [
				{ mumbled: "Knit Flick Sand Shill", actual: "Netflix and chill" },
				{ mumbled: "Thames Till Of Ridge In", actual: "I'm still a virgin" },
				{ mumbled: "Spy Tin Mom Oath ", actual: "Spit in my mouth" },
				{ mumbled: "Sum Maul Tick Ken Urge He", actual: "Small dick energy" },
				{ mumbled: "Haim's Oh Or Knee", actual: "I'm so horny" },
				{ mumbled: "Gum Tip Ap Awe ", actual: "Come to papa" },
				{ mumbled: "Sell Ebb Red Tees Ex'd Ape", actual: "Celebrity sex tape" },
				{ mumbled: "Sit Tucked If", actual: "Seductive" },
				{ mumbled: "Purr Res Dimp Lance", actual: "Breast implants" },
				{ mumbled: "Fool Vill Link Of And Us See", actual: "Fulfilling a fantasy" },
				{ mumbled: "Won Numb Ache Gout", actual: "Wanna make out" },
				{ mumbled: "Woo Hip Sand Shane's", actual: "Whips and chains" },
				{ mumbled: "Spreh Dior Lex", actual: "Spread your legs" },
				{ mumbled: "Isle Of View", actual: "I Love You" },
				{ mumbled: "Aisle Of Eat", actual: "I Love feet" },
				{ mumbled: "Was Bring Sweet Nuttings", actual: "Whispering sweet nothings" },
				{ mumbled: "See An May Ace", actual: "Sit on my face" },
				{ mumbled: "Go A Nail For Zzz", actual: "Get on all fours" },
				{ mumbled: "Tons A Corn At Tons Ache", actual: "To suck or not to suck" },
				{ mumbled: "Too Cow Fire Pan Ts", actual: "Take off your pants" },
				{ mumbled: "Cell Flew Viz Kid", actual: "Self love is key" },
				{ mumbled: "Sec Show Illy Race Trait Ed", actual: "Sexually frustrated" },
				{ mumbled: "Ruin Of All Fee Rick", actual: "Remove all fabric" },
				{ mumbled: "York An Is Me", actual: "You can kiss me" },
				{ mumbled: "Dull Days Arr Eight", actual: "Dildos are great" },
				{ mumbled: "Pain Is Seas Mat Are", actual: "Penis size matters" },
				{ mumbled: "Sec Show It Ran Sit Id Does Ease", actual: "Sexually transmitted disease" },
				{ mumbled: "An Lee That Ease Tea", actual: "Unleash the beast" },
				{ mumbled: "Nose Trying Set Ash Tea ", actual: "No strings attached" },
				{ mumbled: "It Spit Earth An Ache I Speak Ted ", actual: "It's bigger than I expected" },
				{ mumbled: "Pain Is En Lore German Till", actual: "Penis enlargement pills" },
				{ mumbled: "Las To Aite Oz Rate", actual: "Last night was great" },
				{ mumbled: "Sing Gill An Dread It Um Ing Gill", actual: "Single and ready to mingle" },
				{ mumbled: "An Sat Is Fight Sec Sleeve", actual: "Unsatisfied sex life" }
			]
		},
		{
			category: {
				title: 'Party'
			},
			cards: [
				{ mumbled: "Fom Hid Dink Bro Fews Lee", actual: "Vomiting profusely" },
				{ mumbled: "As Bres Home Art Tean Knee", actual: "Espresso Martini" },
				{ mumbled: "Vash Inn Up Plea Laid", actual: "Fashionably late" },
				{ mumbled: "Ace Tongue Kay", actual: "I Stink" },
				{ mumbled: "Dawn Dude Rugs", actual: "Don't do drugs" },
				{ mumbled: "Hoe Pin-Up Hits Depot Lease", actual: "Open up! It's the police!" },
				{ mumbled: "Thirds Teeth Or Stay", actual: "Thirsty thursday" },
				{ mumbled: "Deed Ring King", actual: "Day drinking" },
				{ mumbled: "Am Edd Igg Tide To Air Owen", actual: "I am addicted to heroin" },
				{ mumbled: "During Scare Run Me", actual: "Drinks are on me" },
				{ mumbled: "Junk Earn Eyes Ter", actual: "Jaegermeister" },
				{ mumbled: "Take Ash At", actual: "Take a shot" },
				{ mumbled: "During Chris Pan Sub Louis", actual: "Drink responsibly" },
				{ mumbled: "Pack Ing Up Ozone", actual: "Puking up a storm" },
				{ mumbled: "Boys Men Dwell Are", actual: "Basement dweller" },
				{ mumbled: "Them Are Ming If Ter", actual: "The morning after" },
				{ mumbled: "Shot Sphere Every Ann", actual: "Shots for everyone" },
				{ mumbled: "Nave Are Peak Of This Edge En", actual: "Never speak of this again" },
				{ mumbled: "Laws Html All It", actual: "Lost my wallet" },
				{ mumbled: "The Rings Nap Are Tea", actual: "There is no party" },
				{ mumbled: "Tim Each To An Dull", actual: "Too much to handle" },
				{ mumbled: "Thing Kit Sewing Tear Aim", actual: "Think its going to rain" },
				{ mumbled: "During Carry Ing", actual: "Drunk driving" },
				{ mumbled: "Home Aim Ton Anns", actual: "High maintenance" },
				{ mumbled: "Neds Um Watt Are", actual: "Need some water" },
				{ mumbled: "Pal It Ich An Slay", actual: "Politician's lie" },
				{ mumbled: "During Can Add Vain Share", actual: "Drunken adventure" },
				{ mumbled: "Age Us Turn Up", actual: "I just threw up" },
			]
		},
		{
			category: {
				title: 'Misc'
			},
			cards: [
				{ mumbled: "Ewe Night Ted King Dumb", actual: "United Kingdom" },
				{ mumbled: "She Is Burg Her", actual: "Cheeseburger" },
				{ mumbled: "Clue Tin Furry", actual: "Gluten free" },
				{ mumbled: "Birch Who’ll Ray Yell Lid He", actual: "Virtual Reality" },
				{ mumbled: "Sew Fiat Tune Yawn", actual: "Soviet Union" },
				{ mumbled: "Whole Imp Pig Aims", actual: "Olympic Games" },
				{ mumbled: "Jock Lit Hip Goo Keys", actual: "Chocolate Chip Cookies" },
				{ mumbled: "Purr Cork Ink", actual: "Burger King" },
				{ mumbled: "Though Wok Calves Aim", actual: "The Walk of Shame" },
				{ mumbled: "Nor Thumb Air Reckon", actual: "North American" },
				{ mumbled: "Dozen May Kenny Cents Tomb He", actual: "Doesn't Make Any Sense To Me" },
				{ mumbled: "Won Hunt Dread Hollers", actual: "One Hundred Dollars" },
				{ mumbled: "Arrest Mike Ace", actual: "I Rest My Case" },
				{ mumbled: "Wad Abe Hunch Off Nuns Hence", actual: "What A Bunch Of Nonsense" },
				{ mumbled: "Tempo Might Hung", actual: "Tip Of My Tongue" },
				{ mumbled: "Fatty Cans Itty", actual: "Vatican City" },
				{ mumbled: "Kwan Tan Nemo Bake You Bah", actual: "Guantanamo Bay, Cuba" },
				{ mumbled: "Aid Eye Mud Us Sin", actual: "A Dime A Dozen" },
				{ mumbled: "Hemp Heath Reap Layer", actual: "MP3 Player" },
				{ mumbled: "Eggs Marx Despot", actual: "X Marks The Spot" },
				{ mumbled: "Duke Hum Mere Off Hen", actual: "Do You Come Here Often?" },
				{ mumbled: "Hit Sub Pow Dime", actual: "It's About Time" },
				{ mumbled: "Mike Lion Tis Inner Scent", actual: "My Client Is Innocent" },
				{ mumbled: "Gore Done Names ", actual: "Garden gnomes" },
			]
		}
	];

	getPhrases(category: string): GameCard[] {
		const categoryObj = this.phrases.find((phrase) => phrase.category.title === category);
		if (categoryObj) {
			return categoryObj.cards;
		}
		return [];
	}

	getCategories(): Category[] {
		const categories = [{ title: 'Random', amount: 0 }];
		// push all categories with their calculated amount of phrases
		this.phrases.forEach((phrase) => {
			categories.push({
				title: phrase.category.title,
				amount: phrase.cards.length
			});
			categories[0].amount += phrase.cards.length;
		});
		return categories;
	}

	getRandomPhrase(category: string): {card: GameCard, category: string} {
		if (category === 'Random') {
			return this.getAnyRandomPhrase();
		}
		const phrases = this.getPhrases(category);
		const randomIndex = Math.floor(Math.random() * phrases.length);
		return { card: phrases[randomIndex], category };
	}

	getAnyRandomPhrase(): {card: GameCard, category: string} {
		const randomCategoryIndex = Math.floor(Math.random() * this.phrases.length);
		const category = this.phrases[randomCategoryIndex].category.title;
		return this.getRandomPhrase(category);
	}
}
