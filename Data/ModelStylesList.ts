/**
 * List off all face styles
 */

let KDModelStyles: Record<string, Record<string, string[]>> = {
	Nevermere: {
		Cosplay: [
			"Wolf1",
			"Wolf2",
			"Wolf1",
			"Wolf2",
			"Wolf1",
			"Wolf2",
			"Wolf1",
			"Wolf2",
			"ArcticFox",
			"",
		],
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
		],
		Bodystyle: [
			"Pale",
			"Default",
			"Tan",
		],
		Facestyle: [
			"CyanCute",
			"CyanCute2",
			"TealCute",
			"GreenCute",
			"WolfgirlBlue",
			"WolfgirlCyan",
			"WolfgirlBrown",
			"WolfgirlOrange",
			"WolfgirlRare",
			"WolfgirlGrey",
		],
	},
	Elf: {
		Cosplay: [
			"Elf1",
			"Elf2",
			"Elf3",
			"Elf4",
			"Elf5",
			"Elf6",
		],
		Hairstyle: [
			"Elf1",
			"ElfShort",
			"ElfLong",
			"GreenMessy",
			"GreenPonytail",
			"LavenderPonytail",
			"GingerLong",
			"VeryPeachPonytail",
			"PeachTwintails",
		],
		Bodystyle: [
			"Pale",
			"Default",
		],
		Facestyle: [
			"Elf1",
			"GreenNormal",
			"GreenCute",
			"GreenAngry",
			"CyanNormal",
			"Cyan",
			"Amber1",
			"Amber2",
			"Amber3",
		],
	},
	Dryad: {
		Hairstyle: [
			"Elf1",
			"ElfShort",
			"ElfLong",
			"GreenMessy",
			"GreenPonytail",
			"LavenderPonytail",
			"GingerLong",
			"VeryPeachPonytail",
			"PeachTwintails",
		],
		Bodystyle: [
			"Dryad",
		],
		Facestyle: [
			"Brown1",
			"Brown2",
			"Brown3",
			"Brown4",
			"Amber1",
			"Amber2",
			"Amber3",
		],
	},
	DarkElf: {
		Cosplay: [
			"Elf1",
			"Elf2",
			"Elf3",
			"Elf4",
			"Elf5",
			"Elf6",
		],
		Hairstyle: [
			"SlateTwintails",
			"BlueMessy",
			"BlueBangs",
			"PurpleBraid",
			"LavenderTwintails",
			"DarkPurpleSideBangs",
		],
		Bodystyle: [
			"Pale",
			"ElementalPale",
			"ElementalCorrupted",
		],
		Facestyle: [
			"GreenNormal",
			"GreenCute",
			"GreenAngry",
			"CyanNormal",
			"Cyan",
		],
	},
	BlackCatGirl: {
		Cosplay: [
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty2",
		],
		Hairstyle: [
			"SlateTwintails",
			"KittyShort",
			"KittyLong",
		],
		Bodystyle: [
			"Pale",
			"Default",
			"Tan",
			"Mid",
			"MidTan",
		],
		Facestyle: [
			"GreenNormal",
			"GreenAngry",
			"GreenCute",
			"CyanNormal",
			"Cyan",
		],
	},
	Mummy: {
		Cosplay: [
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty",
			"Kitty2",
		],
		Hairstyle: [
			"SlateTwintails",
			"KittyShort",
			"KittyLong",
		],
		Bodystyle: [
			"Tan",
			"Mid",
			"MidTan",
			"DarkTan",
		],
		Facestyle: [
			"GreenNormal",
			"GreenAngry",
			"GreenCute",
			"GreenOpen",
			"Hazel",
			"RedEyes",
		],
	},
	FireElemental: {
		Hairstyle: [
			"Fire1",
			"SlateShortPonytail",
			"SlateTwintails",
			"FireLong",
			"FireTwintails",
			"FireMessy",
		],
		Bodystyle: [
			"ElementalFire",
			"ElementalTan",
		],
		Facestyle: [
			"PinkCute",
			"PinkAngry",
			"RedOpen",
			"PurpleCute",
			"PurpleAngry",
			"MagentaCute",
		],
		Cosplay: [
			"",
			"Elf3",
		],
	},
	Demon: {
		Hairstyle: [
			"SlateShortPonytail",
			"SlateTwintails",
			"BlackTwintails",
			"PurpleTwintails",
			"DarkPurpleSideBangs",
			"PurpleBraid",
			"LavenderTwintails",
			"BlueMessy",
			"BlueLong1",
		],
		Bodystyle: [
			"Demon",
			"ElementalCorrupted",
		],
		Facestyle: [
			"RedScary",
			"RedOpen",
			"PurpleCute",
			"PurpleAngry",
			"PinkCute",
			"PinkAngry",
			"RedEyes",
		],
		Cosplay: [
			"Elf1",
			"Elf2",
			"Elf3",
		],
	},
	Angel: {
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
			"Maid6",
			"WhiteTwintails",
		],
		Bodystyle: [
			"Pale",
			"ElementalPale",
			"Tan",
		],
		Facestyle: [
			"YellowAngry",
			"YellowCute",
			"Amber1",
		],
		Cosplay: [
			"Elf1",
			"Elf2",
			"Elf3",
		],
	},
	EarthElemental: {
		Hairstyle: [
			"BrownPonytail",
			"BrownShort",
			"Brown1",
		],
		Bodystyle: [
			"Tan",
			"MidTan",
			"DarkTan",
			"ElementalTan",
			"ElementalPale",
		],
		Facestyle: [
			"PinkCute",
			"PinkAngry",
			"RedOpen",
			"PurpleCute",
			"PurpleAngry",
			"MagentaCute",
		],
		Cosplay: [
			"",
			"Elf3",
		],
	},
	AirElemental: {
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
			"LavenderPonytail",
		],
		Bodystyle: [
			"Tan",
			"MidTan",
			"ElementalTan",
			"ElementalPale",
			"Pale",
		],
		Facestyle: [
			"PinkCute",
			"PinkAngry",
			"RedOpen",
			"PurpleCute",
			"PurpleAngry",
			"MagentaCute",
		],
		Cosplay: [
			"",
			"Elf3",
		],
	},
	WaterElemental: {
		Hairstyle: [
			"Water1",
			"BlueMessy",
			"BlueLong1",
			"BlueHime",
			"BlueBangs",
			"LightBlueLong",
			"LightBlueMedium",
			"BlueBraid",
			"BlueTwintail",
		],
		Bodystyle: [
			"ElementalWater",
		],
		Facestyle: [
			"PinkCute",
			"PinkAngry",
			"RedOpen",
			"PurpleCute",
			"PurpleAngry",
			"MagentaCute",
			"RedEyes",
		],
		Cosplay: [
			"",
			"Elf3",
		],
	},
	ElementalLatex: {
		Hairstyle: [
			"Water1",
			"BlueMessy",
			"BlueLong1",
			"BlueHime",
			"BlueBangs",
			"LightBlueLong",
			"LightBlueMedium",
			"LightBlueShort",
		],
		Bodystyle: [
			"ElementalLatex",
		],
		Facestyle: [
			"PinkCute",
			"PinkAngry",
			"RedOpen",
			"PurpleCute",
			"PurpleAngry",
			"MagentaCute",
		],
		Cosplay: [
			"",
			"Elf3",
		],
	},
	IceElemental: {
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
			"LavenderPonytail",
			"LightBlueLong",
			"LightBlueMedium",
		],
		Bodystyle: [
			"ElementalIce",
			"ElementalPale",
		],
		Facestyle: [
			"PinkCute",
			"PinkAngry",
			"RedOpen",
			"PurpleCute",
			"PurpleAngry",
			"MagentaCute",
		],
		Cosplay: [
			"",
			"Elf3",
		],
	},
	Zombie: {
		Bodystyle: [
			"Zombie",
			"Pale",
			"ElementalPale",
		],
		Facestyle: [
			"Fuuka",
			"PinkCute",
			"PinkAngry",
			"RedOpen",
			"RedScary",
		],
		Hairstyle: [
			"PeachShort",
			"PinkMessy",
			"PinkNeat",
			"PinkNeat",
			"PinkNeat",
			"BlackTwintails",
			"SlateTwintails",
			"DarkPurpleSideBangs",
			"PurpleBraid",
		],
	},
	Necromancer: {
		Hairstyle: [
			"PeachShort",
			"PinkMessy",
			"PinkNeat",
			"PinkNeat",
			"PinkNeat",
			"BlackTwintails",
			"SlateTwintails",
			"DarkPurpleSideBangs",
			"PurpleBraid",
		],
		Bodystyle: [
			"Pale",
			"ElementalPale",
		],
		Facestyle: [
			"PinkCute",
			"PinkAngry",
			"Cyan",
			"CyanAngry",
			"CyanCute",
			"CyanCute2",
			"TealCute",
			"BlueCute",
		],
		Cosplay: [
			"",
			"",
			"",
			"",
			"",
			"Elf3",
		],
	},
	Shadow: {
		Hairstyle: [
			"PeachShort",
			"PinkMessy",
			"PinkNeat",
			"PinkNeat",
			"PinkNeat",
			"BlackTwintails",
			"SlateTwintails",
			"DarkPurpleSideBangs",
			"PurpleBraid",
			"PurpleTwintails",
		],
		Bodystyle: [
			"Pale",
			"Default",
			"Tan",
			"ElementalPale",
			"ElementalCorrupted",
		],
		Facestyle: [
			"GreenAngry",
			"CyanAngry",
			"PinkAngry",
			"MagentaCute",
			"Amber1",
			"Amber2",
			"Amber3",
			"RedScary",
			"RedOpen",
			"RedEyes",
		],
		Cosplay: [
			"",
			"Elf1",
			"Elf3",
		],
	},
	Bandit: {
		Hairstyle: [
			"Ginger",
			"Ginger2",
			"OrangeBraid",
			"BrownShort",
			"Brown1",
			"PinkMessy",
			"KittyShort",
			"RedheadTwintail",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Tan",
			"MidTan",
			"DarkTan",
		],
		Facestyle: [
			"Brown1",
			"Brown2",
			"Brown3",
			"Amber1",
			"Amber2",
			"Amber3",
			"RedOpen",
		],
	},

	BlueHair: {
		Hairstyle: [
			"Water1",
			"BlueMessy",
			"BlueLong1",
			"BlueHime",
			"BlueBangs",
			"LightBlueLong",
			"LightBlueMedium",
			"BlueBraid",
			"BlueTwintail",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
			"MidTan",
		],
		Facestyle: [
			"Amber1",
			"Amber2",
			"Amber3",
			"GreenOpen",
			"GreenNormal",
			"CyanCute",
			"PurpleCute",
			"Brown3",
		],
	},
	GreenHair: {
		Hairstyle: [
			"GreenMessy",
			"GreenPonytail",
			"GreenTwintail",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
			"MidTan",
		],
		Facestyle: [
			"Amber1",
			"Amber2",
			"Amber3",
			"GreenOpen",
			"GreenNormal",
			"CyanCute",
			"PurpleCute",
			"Brown3",
		],
	},
	WhiteHair: {
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
			"LavenderPonytail",
			"Maid1",
			"Maid2",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
			"MidTan",
			"DarkTan",
		],
		Facestyle: [
			"BlueCute",
			"MagentaCute",
			"PinkCute",
			"PinkAngry",
			"PurpleAngry",
			"PurpleCute",
			"Brown1",
			"Brown2",
			"Brown3",
		],
	},
	Maid: {
		Hairstyle: [
			"Maid1",
			"Maid2",
			"Maid3",
			"Maid4",
			"Maid6",
		],
		Bodystyle: [
			"Default",
			"Tan",
			"Pale",
			"MidTan",
		],
		Facestyle: [
			"BlueCute",
			"MagentaCute",
			"PinkCute",
			"PinkAngry",
			"PurpleAngry",
			"PurpleCute",
			"Brown1",
			"Brown2",
			"Brown3",
			"Hazel",
		],
	},
	Water: {
		Hairstyle: [
			"Water1",
			"BlueMessy",
			"BlueLong1",
			"BlueHime",
			"BlueBangs",
			"LightBlueLong",
			"LightBlueMedium",
			"LightBlueShort",
			"BlueBraid",
			"BlueTwintail",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
			"MidTan",
		],
		Facestyle: [
			"Cyan",
			"CyanNormal",
			"CyanAngry",
			"CyanCute",
			"CyanCute2",
			"PurpleCute",
		],
	},
	Ice: {
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
			"LavenderPonytail",
			"LightBlueLong",
			"LightBlueMedium",
			"LightBlueShort",
			"BlueTwintail",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
		],
		Facestyle: [
			"TealCute",
			"BlueCute",
			"CyanAngry",
			"CyanCute",
			"CyanCute2",
		],
	},
	Earth: {
		Hairstyle: [
			"Ginger",
			"Ginger2",
			"GingerLong",
			"OrangeBraid",
			"PeachShort",
			"BrownPonytail",
			"BrownShort",
			"Brown1",
			"Brown2",
			"Brown3",
			"Brown4",
			"DeepRed",
			"PeachTwintails",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
		],
		Facestyle: [
			"Amber1",
			"Amber2",
			"Amber3",
			"Brown1",
			"Brown2",
			"Brown3",
			"TealCute",
			"BlueCute",
		],
	},
	Air: {
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
			"LavenderPonytail",
			"PeachTwintails",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
		],
		Facestyle: [
			"TealCute",
			"BlueCute",
			"CyanAngry",
			"CyanCute",
			"CyanCute2",
		],
	},

	Fire: {
		Hairstyle: [
			"Fire1",
			"SlateShortPonytail",
			"SlateTwintails",
			"FireLong",
			"FireTwintails",
			"FireMessy",
		],
		Bodystyle: [
			"Default",
			"Tan",
			"DarkTan",
			"Pale",
		],
		Facestyle: [
			"GreenOpen",
			"GreenAngry",
			"Amber1",
			"Amber2",
			"Amber3",
			"Brown1",
			"Brown2",
			"RedOpen",
		],
	},

	DragonPoison: {
		Hairstyle: [
			"GreenMessy",
			"GreenPonytail",
			"GreenShiny",
			"PurpleBraid",
			"LavenderTwintails",
			"DarkPurpleSideBangs",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
			"Tan",
			"DarkTan",
		],
		Facestyle: [
			"GreenOpen",
			"GreenAngry",
			"GreenNormal",
			"PurpleCute",
			"TealCute",
			"PurpleAngry",
			"LightBlueCute",
		],
		Cosplay: [
			"DragonPoison"
		],
	},


	DragonCrystal: {
		Hairstyle: [
			"CrystalHair",
			"CrystalHair",
			"CrystalHair",
			"PinkMessy",
			"PinkNeat",
			"PinkNeat",
			"PinkNeat",

		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
			"Tan",
			"DarkTan",
		],
		Facestyle: [
			"CrystalFace",
			"CrystalFace",
			"PinkCute",
			"PinkAngry",
		],
		Cosplay: [
			"DragonCrystal",
		],
	},

	DragonIce: {
		Hairstyle: [
			"Wolfgirl1",
			"Wolfgirl2",
			"Wolfgirl3",
			"LavenderPonytail",
			"LightBlueLong",
			"LightBlueMedium",
			"LightBlueShort",
			"BlueTwintail",
		],
		Bodystyle: [
			"Default",
			"Mid",
			"Pale",
		],
		Facestyle: [
			"TealCute",
			"BlueCute",
			"CyanAngry",
			"CyanCute",
			"CyanCute2",
		],
		Cosplay: [
			"DragonIce"
		],
	},
	DragonShadow: {
		Hairstyle: [
			"SlateShortPonytail",
			"SlateTwintails",
			"BlackTwintails",
			"PurpleTwintails",
			"DarkPurpleSideBangs",
			"PurpleBraid",
			"LavenderTwintails",
			"BlueMessy",
			"BlueLong1",
		],
		Bodystyle: [
			"Demon",
			"ElementalCorrupted",
		],
		Facestyle: [
			"YellowOpen",
			"YellowRound",
			"YellowKjus",
		],
		Cosplay: [
			"DragonIce"
		],
	},

	RedHair: {
		Hairstyle: [
			"Fire1",
			"SlateShortPonytail",
			"SlateTwintails",
			"FireLong",
			"FireTwintails",
			"FireMessy",
			"DeepRed",
		],
		Bodystyle: [
			"Default",
			"Tan",
			"DarkTan",
			"Pale",
		],
		Facestyle: [
			"GreenOpen",
			"GreenAngry",
			"GreenNormal",
			"PurpleCute",
			"TealCute",
			"PurpleAngry",
			"LightBlueCute",
		],
	},
	Melissa: {
		Bodystyle: [
			"Default",
		],
		Facestyle: [
			"Melissa",
		],
		Hairstyle: [
			"Melissa",
		],
	},
	Nara: {
		Cosplay: [
			"Nara",
		],
		Bodystyle: [
			"Nara",
		],
		Facestyle: [
			"Nara",
		],
		Hairstyle: [
			"Nara",
		],
	},
	Myrtrice: {
		Bodystyle: [
			"Default",
		],
		Facestyle: [
			"Myrtrice",
		],
		Hairstyle: [
			"Myrtrice",
		],
	},
	Fuuka: {
		Cosplay: [
			"Fuuka",
		],
		Bodystyle: [
			"Zombie",
		],
		Facestyle: [
			"Fuuka",
		],
		Hairstyle: [
			"Fuuka",
		],
	},
	Dollmaker: {
		Bodystyle: [
			"Default",
		],
		Facestyle: [
			"GreenAngry",
		],
		Hairstyle: [
			"BlueBraid",
		],
	},
};