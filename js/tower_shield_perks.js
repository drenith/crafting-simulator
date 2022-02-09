const tower_shield_perks = [
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
    "id": "perkid_weapon_threatadd",
    "name": "Hated",
    "description": "You generate ${5 * perkMultiplier}% more threat.",
    "icon": "LyShineUI/Images/Icons/Perks/Gambit1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Threat"
    ]
  },
  {
    "id": "perkid_weaponmelee_blockingstam",
    "name": "Sturdy",
    "description": "You take ${5 * perkMultiplier}% less stamina damage while blocking.",
    "icon": "LyShineUI/Images/Icons/Perks/LightningWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Blocking"
    ]
  },
  {
    "id": "perkid_weaponmelee_blockingmove",
    "name": "Sure Footing",
    "description": "You move ${20 * perkMultiplier}% faster while blocking.",
    "icon": "LyShineUI/Images/Icons/Perks/Unstoppable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Blocking"
    ]
  },
  {
    "id": "perkid_shield_deffire",
    "name": "Flame Shield Ward",
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
    "id": "perkid_shield_defice",
    "name": "Frozen Shield Ward",
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
    "id": "perkid_shield_defvoid",
    "name": "Void Shield Ward",
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
    "id": "perkid_shield_defthurst",
    "name": "Thrust Shield Ward",
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
    "id": "perkid_shield_defslash",
    "name": "Slash Shield Ward",
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
    "id": "perkid_shield_defarcane",
    "name": "Arcane Shield Ward",
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
    "id": "perkid_shield_deflightning",
    "name": "Lightning Shield Ward",
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
    "id": "perkid_shield_defstrike",
    "name": "Strike Shield Ward",
    "description": "You take ${2 * perkMultiplier}% less Lightning damage.",
    "icon": "LyShineUI/Images/Icons/Perks/StrikeWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Defense"
    ]
  },
  {
    "id": "perkid_ability_shield_shieldbash",
    "name": "Repulsing Shield Bash",
    "description": "Shield Bash knocks back targets an additional ${25 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/Brigand1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Shield"
    ]
  },
  {
    "id": "perkid_ability_shield_shieldrush",
    "name": "Fortifying Shield Rush",
    "description": "After hitting a target with Shield Rush, gain Fortify, increasing damage absorption on self by ${5 * perkMultiplier}% for ${4} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Brigand1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Shield"
    ]
  },
  {
    "id": "perkid_ability_shield_finalstand",
    "name": "Accelerated Defiant Stance",
    "description": "Movement Speed Increased by ${5 * perkMultiplier}% for ${5} seconds after triggering Defiant Stance.",
    "icon": "LyShineUI/Images/Icons/Perks/Brigand1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Skill",
      "Shield"
    ]
  },
  {
    "id": "perkid_shield_defnature",
    "name": "Nature Shield Ward",
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