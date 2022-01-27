const amulet_perks = [
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
    "id": "perkid_amulet_deffire",
    "name": "Flame Protection",
    "description": "You take ${2 * perkMultiplier}% less Fire damage.",
    "icon": "LyShineUI/Images/Icons/Perks/FireWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_defice",
    "name": "Frozen Protection",
    "description": "You take ${2 * perkMultiplier}% less Ice damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_defvoid",
    "name": "Void Protection",
    "description": "You take ${2 * perkMultiplier}% less Void damage.",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_defthurst",
    "name": "Thrust Protection",
    "description": "You take ${2 * perkMultiplier}% less Thrust damage.",
    "icon": "LyShineUI/Images/Icons/Perks/ThrustWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_defslash",
    "name": "Slash Protection",
    "description": "You take ${2 * perkMultiplier}% less Slash damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Slashward1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_defarcane",
    "name": "Arcane Protection",
    "description": "You take ${2 * perkMultiplier}% less Arcane damage.",
    "icon": "LyShineUI/Images/Icons/Perks/MagicWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_deflightning",
    "name": "Lightning Protection",
    "description": "You take ${2 * perkMultiplier}% less Lightning damage.",
    "icon": "LyShineUI/Images/Icons/Perks/LightningWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_defstrike",
    "name": "Strike Protection",
    "description": "You take ${2 * perkMultiplier}% less Strike damage.",
    "icon": "LyShineUI/Images/Icons/Perks/StrikeWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_amulet_hp",
    "name": "Health",
    "description": "You have ${3 * perkMultiplier}% more maximum health.",
    "icon": "LyShineUI/Images/Icons/Perks/Health1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00424,
    "labels": [
      "Health"
    ]
  },
  {
    "id": "perkid_amulet_stamonlow",
    "name": "Stamina Recovery",
    "description": "When you are hit while below 50% gain ${50 * perkMultiplier} stamina (${30}s cooldown.) Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/Unstoppable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_amulet_manaonlow",
    "name": "Mana Recovery",
    "description": "When you are hit while below 50% gain ${50 * perkMultiplier} mana (${60}s cooldown.) Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_amulet_removeonlow",
    "name": "Purify",
    "description": "When you are hit while below 50% health you lose all debuffs. (${90}s cooldown.) Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_amulet_fortifyonlow",
    "name": "Fortified recovery",
    "description": "When you are hit while below 50% gain ${10 * perkMultiplier}% Fortify for ${5}s. (${90}s cooldown.) Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/Soldier1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_amulet_loggingluck",
    "name": "Adored Logging Luck",
    "description": "While Logging gain ${5 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/LoggingMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "GatheringLuck"
    ]
  },
  {
    "id": "perkid_amulet_harvestingluck",
    "name": "Adored Harvesting Luck",
    "description": "While Harvesting gain ${5 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/BotanistMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "GatheringLuck"
    ]
  },
  {
    "id": "perkid_amulet_miningluck",
    "name": "Adored Mining Luck",
    "description": "While Mining gain ${5 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/MiningMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "GatheringLuck"
    ]
  },
  {
    "id": "perkid_amulet_skinningluck",
    "name": "Adored Skinning Luck",
    "description": "While Skinning gain ${5 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/SkinningMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "GatheringLuck"
    ]
  },
  {
    "id": "perkid_amulet_durempower",
    "name": "Empowered",
    "description": "Empower you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/Monk1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "BuffDur"
    ]
  },
  {
    "id": "perkid_amulet_durhaste",
    "name": "Alacrity",
    "description": "Haste you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/Unstoppable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "BuffDur"
    ]
  },
  {
    "id": "perkid_amulet_durfortify",
    "name": "Fortified",
    "description": "Fortify you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/Soldier1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "BuffDur"
    ]
  },
  {
    "id": "perkid_amulet_healing",
    "name": "Divine",
    "description": "You gain ${5 * perkMultiplier}% more health from all incoming healing effects.",
    "icon": "LyShineUI/Images/Icons/Perks/Health1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Healing"
    ]
  },
  {
    "id": "perkid_amulet_defnature",
    "name": "Nature Protection",
    "description": "You take ${2 * perkMultiplier}% less Nature damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  }
]