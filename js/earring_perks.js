const earring_perks = [
  {
    "id": "perkid_common_cdr",
    "name": "Refreshing",
    "description": "Reduces max cooldowns by ${1 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/Resurge1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "CDR"
    ]
  },
  {
    "id": "perkid_common_cdronhit",
    "name": "Refreshing Ward",
    "description": "Reduces active cooldowns by ${0.5 * perkMultiplier}% after being hit 5 times. Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/Rally1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "CDR"
    ]
  },
  {
    "id": "perkid_common_cdrondodge",
    "name": "Refreshing Evasion",
    "description": "Reduces active cooldowns by ${0.5 * perkMultiplier}% after exiting the dodge animation.",
    "icon": "LyShineUI/Images/Icons/Perks/Rally1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "CDR"
    ]
  },
  {
    "id": "perkid_common_luck",
    "name": "Luck",
    "description": "+${0.5 * perkMultiplier}% chance at rare items from chests and monsters.",
    "icon": "LyShineUI/Images/Icons/Perks/Lucky1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Luck"
    ]
  },
  {
    "id": "perkid_earring_healthregen",
    "name": "Regenerating",
    "description": "You gain ${0.25 * perkMultiplier}% health every second.",
    "icon": "LyShineUI/Images/Icons/Perks/Health1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Regen"
    ]
  },
  {
    "id": "perkid_earring_manaregen",
    "name": "Focused",
    "description": "+${5 * perkMultiplier} mana regen.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Regen"
    ]
  },
  {
    "id": "perkid_earring_staminaregen",
    "name": "Nimble",
    "description": "+${5 * perkMultiplier}% stamina regen.",
    "icon": "LyShineUI/Images/Icons/Perks/Unstoppable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Regen"
    ]
  },
  {
    "id": "perkid_earring_threatadd",
    "name": "Despised",
    "description": "You generate ${5 * perkMultiplier}% more threat.",
    "icon": "LyShineUI/Images/Icons/Perks/LightningDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Threat"
    ]
  },
  {
    "id": "perkid_earring_threatsub",
    "name": "Beloved",
    "description": "You generate ${5 * perkMultiplier}% less threat.",
    "icon": "LyShineUI/Images/Icons/Perks/Gambit1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Threat"
    ]
  },
  {
    "id": "perkid_earring_threatsubondodge",
    "name": "Evasive",
    "description": "Reduce the generation of threat by -50% for 5 seconds after performing a dodge.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Threat"
    ]
  },
  {
    "id": "perkid_earring_healthonpotion",
    "name": "Healthy Toast",
    "description": "When you drink a mana potion gain ${3 * perkMultiplier}% of your max health.",
    "icon": "LyShineUI/Images/Icons/Perks/Health1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00424,
    "labels": [
      "Consume"
    ]
  },
  {
    "id": "perkid_earring_manaonpotion",
    "name": "Mana Toast",
    "description": "When you drink a health potion gain ${10 * perkMultiplier} mana.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00424,
    "labels": [
      "Consume"
    ]
  },
  {
    "id": "perkid_earring_removeonpotion",
    "name": "Purifying Toast",
    "description": "When you drink a regeneration potion lose ${1} debuff.",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.01636,
    "labels": [
      "Consume"
    ]
  },
  {
    "id": "perkid_earring_gainonpotion",
    "name": "Duplicating Toast",
    "description": "When you drink a potion ${5 * perkMultiplier}% chance it doesn't consume.",
    "icon": "LyShineUI/Images/Icons/Perks/WeaverMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "ConsumeAdd"
    ]
  },
  {
    "id": "perkid_earring_potioncdr",
    "name": "Refreshing Toast",
    "description": "Potions cooldown ${10 * perkMultiplier}% faster.",
    "icon": "LyShineUI/Images/Icons/Perks/Sage1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "ConsumeCDR"
    ]
  },
  {
    "id": "perkid_earring_arcanist",
    "name": "Arcanist Mastery",
    "description": "+${5 * perkMultiplier} Minimum Arcanist Crafted Item Quality.",
    "icon": "LyShineUI/Images/Icons/Perks/ArcanistMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Trade Skill"
    ]
  },
  {
    "id": "perkid_earring_armorer",
    "name": "Armorer Mastery",
    "description": "+${5 * perkMultiplier} Minimum Armorer Crafted Item Quality.",
    "icon": "LyShineUI/Images/Icons/Perks/ArmorerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Trade Skill"
    ]
  },
  {
    "id": "perkid_earring_cook",
    "name": "Cooking Mastery",
    "description": "+${4 * perkMultiplier}% chance to craft additional items when Cooking.",
    "icon": "LyShineUI/Images/Icons/Perks/ChefMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Trade Skill"
    ]
  },
  {
    "id": "perkid_earring_engineer",
    "name": "Engineer Mastery",
    "description": "+${5 * perkMultiplier} Minimum Engineer Crafted Item Quality.",
    "icon": "LyShineUI/Images/Icons/Perks/EngineerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Trade Skill"
    ]
  },
  {
    "id": "perkid_earring_jeweler",
    "name": "Jewelcrafter Mastery",
    "description": "+${5 * perkMultiplier} Minimum Jewelcrafter Crafted Item Quality.",
    "icon": "LyShineUI/Images/Icons/Perks/JewelcrafterMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Trade Skill"
    ]
  },
  {
    "id": "perkid_earring_weaponsmith",
    "name": "Weaponsmith Mastery",
    "description": "+${5 * perkMultiplier} Minimum Weaponsmith Crafted Item Quality.",
    "icon": "LyShineUI/Images/Icons/Perks/Weaponsmithmastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Trade Skill"
    ]
  }
]