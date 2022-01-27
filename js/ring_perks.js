const ring_perks = [
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
    "id": "perkid_ring_healperdmg",
    "name": "Leeching",
    "description": "You gain ${1 * perkMultiplier}% of your damage as health. Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/LifeLeech1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.008,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_ring_manaonhit",
    "name": "Siphoning",
    "description": "You gain ${1 * perkMultiplier}% mana per hit (cooldown 10s). Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_ring_dmgfire",
    "name": "Fire Damage",
    "description": "You deal ${3 * perkMultiplier}% more Fire damage.",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_dmgice",
    "name": "Ice damage",
    "description": "You deal ${3 * perkMultiplier}% more Ice damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_dmglightning",
    "name": "Lightning Damage",
    "description": "You deal ${3 * perkMultiplier}% more Lightning damage.",
    "icon": "LyShineUI/Images/Icons/Perks/LightningDmg1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_dmgvoid",
    "name": "Void Damage",
    "description": "You deal ${3 * perkMultiplier}% more Void damage.",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_dmgarcane",
    "name": "Arcane Damage",
    "description": "You deal ${3 * perkMultiplier}% more Arcane damage.",
    "icon": "LyShineUI/Images/Icons/Perks/MagicDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_dmgthurst",
    "name": "Thrust Damage",
    "description": "You deal ${3 * perkMultiplier}% more Thrust damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_dmgslash",
    "name": "Slash Damage",
    "description": "You deal ${3 * perkMultiplier}% more Slash damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_dmgstrike",
    "name": "Strike Damage",
    "description": "You deal ${3 * perkMultiplier}% more Strike damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_crit",
    "name": "Keen Awareness",
    "description": "+${3 * perkMultiplier}% critical chance.",
    "icon": "LyShineUI/Images/Icons/Perks/Critical1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "DmgType"
    ]
  },
  {
    "id": "perkid_ring_durposion",
    "name": "Poisoning",
    "description": "Poison you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/Opportunist1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_ring_durbleed",
    "name": "Blood Letting",
    "description": "Bleed you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_ring_durburning",
    "name": "Burning",
    "description": "Burning you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_ring_durslow",
    "name": "Crippling",
    "description": "Slow you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/Rally1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_ring_durweaken",
    "name": "Enfeebling",
    "description": "Weaken you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_ring_durdisease",
    "name": "Infected",
    "description": "Disease you apply lasts ${5 * perkMultiplier}% longer.",
    "icon": "LyShineUI/Images/Icons/Perks/Precise1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_ring_maxstamina",
    "name": "Hearty",
    "description": "You have ${5 * perkMultiplier}% more max stamina.",
    "icon": "LyShineUI/Images/Icons/Perks/Unstoppable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Stam"
    ]
  },
  {
    "id": "perkid_ring_maxmana",
    "name": "Brillant",
    "description": "You have +${5 * perkMultiplier}% max mana.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Mana"
    ]
  },
  {
    "id": "perkid_ring_healing",
    "name": "Sacred",
    "description": "+${3 * perkMultiplier}% Outgoing Healing.",
    "icon": "LyShineUI/Images/Icons/Perks/Health1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Healing"
    ]
  },
  {
    "id": "perkid_ring_dmgnature",
    "name": "Nature damage",
    "description": "You deal ${3 * perkMultiplier}% more Nature damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "DmgType"
    ]
  }
]