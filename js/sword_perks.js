const sword_perks = [
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
    "id": "perkid_weapon_threatsub",
    "name": "Kind",
    "description": "You generate ${5 * perkMultiplier}% less threat.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Threat"
    ]
  },
  {
    "id": "perkid_weapon_dmgcrit",
    "name": "Vicious",
    "description": "+${3 * perkMultiplier}% critical damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Critical1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "DmgCon",
      "CritHeadshot"
    ]
  },
  {
    "id": "perkid_weapon_dmgbasic",
    "name": "Enchanted",
    "description": "Light and Heavy attacks deal ${5 * perkMultiplier}% more damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weaponmelee_dmgback",
    "name": "Rogue",
    "description": "+${5 * perkMultiplier}% more backstab damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Cruel1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weapon_siege",
    "name": "Ruinous",
    "description": "+${20 * perkMultiplier}% Siege Damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Ruinous1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weapon_cdrbasic",
    "name": "Refreshing Move",
    "description": "Light and Heavy attacks reduce your active weapon cooldowns by ${1 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_healondmg",
    "name": "Lifestealing",
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
    "id": "perkid_weapon_bleedoncrit",
    "name": "Keenly Jagged",
    "description": "On Crit: cause bleed that deals 7% weapon damage per second for ${10}s. (${10}s cooldown.)",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_fortifyoncrit",
    "name": "Keenly Fortified",
    "description": "On Critical: gain ${10 * perkMultiplier}% Fortify for ${3}s. (Cooldown ${10}s.)",
    "icon": "LyShineUI/Images/Icons/Perks/Soldier1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_empoweroncrit",
    "name": "Keenly Empowered",
    "description": "On Critical: gain ${15 * perkMultiplier}% Empower ${5}s. (Cooldown ${10}s.)",
    "icon": "LyShineUI/Images/Icons/Perks/Barbarian1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_hasteoncrit",
    "name": "Keen Speed",
    "description": "On Critical: gain ${30 * perkMultiplier}% Haste ${3}s. (Cooldown ${5}s.)",
    "icon": "LyShineUI/Images/Icons/Perks/Unstoppable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_manaonhit",
    "name": "Siphoning Blow",
    "description": "You gain ${1 * perkMultiplier}% mana per hit. (cooldown ${10}s). Does not trigger off persistent damage or DoT effects.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_chainlightning",
    "name": "Chain Lightning",
    "description": "Basic attack hits trigger a Lightning chain that bounces between close targets. (2s Cooldown)",
    "icon": "LyShineUI/Images/Icons/Perks/LightningDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc",
      "Lightning"
    ]
  },
  {
    "id": "perkid_weapon_chainfire",
    "name": "Chain Fire",
    "description": "Basic attack hits trigger a Fire chain that bounces between close targets. (2s Cooldown)",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc",
      "Fire"
    ]
  },
  {
    "id": "perkid_weapon_chainarcane",
    "name": "Chain Arcane",
    "description": "Basic attack hits trigger a Arcane chain that bounces between close targets. (2s Cooldown)",
    "icon": "LyShineUI/Images/Icons/Perks/MagicDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc",
      "Arcane"
    ]
  },
  {
    "id": "perkid_weapon_chainvoid",
    "name": "Chain Void",
    "description": "Basic attack hits trigger a Void chain that bounces between close targets. (2s Cooldown)",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc",
      "Void"
    ]
  },
  {
    "id": "perkid_weapon_chainice",
    "name": "Chain Ice",
    "description": "Basic attack hits trigger a Ice chain that bounces between close targets. (2s Cooldown)",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc",
      "Ice"
    ]
  },
  {
    "id": "perkid_weapon_critchance",
    "name": "Keen",
    "description": "+${3 * perkMultiplier}% critical chance.",
    "icon": "LyShineUI/Images/Icons/Perks/Critical1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Critical"
    ]
  },
  {
    "id": "perkid_weapon_onkillheal",
    "name": "Mortal Lifesteal",
    "description": "When you kill something gain ${3 * perkMultiplier}% health. (${5}s cooldown.)",
    "icon": "LyShineUI/Images/Icons/Perks/Brash1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "OnKill"
    ]
  },
  {
    "id": "perkid_weapon_onkillmana",
    "name": "Mortal Siphoning",
    "description": "When you kill something gain ${3 * perkMultiplier}% Mana. (${5}s cooldown.)",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "OnKill"
    ]
  },
  {
    "id": "perkid_weapon_onkillstamina",
    "name": "Mortal Energy",
    "description": "When you kill something gain ${5 * perkMultiplier} Stamina. (${5}s cooldown.)",
    "icon": "LyShineUI/Images/Icons/Perks/Unstoppable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "OnKill"
    ]
  },
  {
    "id": "perkid_weapon_onkillfortify",
    "name": "Mortal Fortification",
    "description": "When you kill something gain ${10}% Fortify for ${3}s. (${5}s cooldown.)",
    "icon": "LyShineUI/Images/Icons/Perks/Soldier1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "OnKill"
    ]
  },
  {
    "id": "perkid_weapon_onkillempower",
    "name": "Mortal Power",
    "description": "When you kill something gain ${15}% Empowered for ${5}s. (${5}s cooldown.)",
    "icon": "LyShineUI/Images/Icons/Perks/Barbarian1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "OnKill"
    ]
  },
  {
    "id": "perkid_weapon_onkillcdr",
    "name": "Mortal Refreshment",
    "description": "When you kill something reduce all cooldowns by ${-5 * perkMultiplier}%. (${5}s cooldown.)",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "OnKill"
    ]
  },
  {
    "id": "perkid_weapon_dmgancient",
    "name": "Ancient Bane",
    "description": "+${5 * perkMultiplier}% Damage to Ancients.",
    "icon": "LyShineUI/Images/Icons/Perks/AncientBane1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DmgCategory"
    ]
  },
  {
    "id": "perkid_weapon_dmgangryearth",
    "name": "Angry Earth Bane",
    "description": "+${5 * perkMultiplier}% Damage to Angry Earth.",
    "icon": "LyShineUI/Images/Icons/Perks/AngryEarthBane1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DmgCategory"
    ]
  },
  {
    "id": "perkid_weapon_dmgbeast",
    "name": "Beast Bane",
    "description": "+${5 * perkMultiplier}% Damage to Beasts.",
    "icon": "LyShineUI/Images/Icons/Perks/BestialBane1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DmgCategory"
    ]
  },
  {
    "id": "perkid_weapon_dmgcorrupted",
    "name": "Corrupted Bane",
    "description": "+${5 * perkMultiplier}% Damage to Corrupted.",
    "icon": "LyShineUI/Images/Icons/Perks/CorruptedBane1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DmgCategory"
    ]
  },
  {
    "id": "perkid_weapon_dmglost",
    "name": "Lost Bane",
    "description": "+${5 * perkMultiplier}% Damage to Lost.",
    "icon": "LyShineUI/Images/Icons/Perks/LostBane1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DmgCategory"
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
    "id": "perkid_ability_sword_reversestab",
    "name": "Contagious Reverse Stab",
    "description": "Reverse Stab transfers an active debuff from self to target hit.",
    "icon": "LyShineUI/Images/Icons/Perks/Brigand1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Skill",
      "Sword"
    ]
  },
  {
    "id": "perkid_ability_sword_whirlingblade",
    "name": "Empowering Whirling Blade",
    "description": "Base damage is increased by ${20}% while performing a Whirling Blade attack if 3 or more enemies are within the radius of the attack.",
    "icon": "LyShineUI/Images/Icons/Perks/Brigand1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Skill",
      "Sword"
    ]
  },
  {
    "id": "perkid_ability_sword_leapingstrike",
    "name": "Empowering Leaping Strike",
    "description": "Deal ${3 * perkMultiplier}% additional damage to targets slowed by Leaping Strike's Cowardly Punishment upgrade.",
    "icon": "LyShineUI/Images/Icons/Perks/Brigand1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Skill",
      "Sword"
    ]
  },
  {
    "id": "perkid_weapon_chainnature",
    "name": "Chain Nature",
    "description": "Basic attack hits trigger a Nature chain that bounces between close targets. (2s Cooldown)",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Proc",
      "Nature"
    ]
  },
  {
    "id": "perkid_weapon_disease_onlowhp_crit",
    "name": "Plagued Crits",
    "description": "Critical strikes against targets below ${50}% health inflict disease for ${6}s, reducing healing effectivness on the target by ${10 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/LifeLeech1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_disease_onlowhp_heavy",
    "name": "Plagued Strikes",
    "description": "Heavy attacks against targets inflict disease for ${8}s, reducing healing effectivness on the target by ${10 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/LifeLeech1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00273,
    "labels": [
      "Proc"
    ]
  },
  {
    "id": "perkid_weapon_dmgagainstgrit",
    "name": "Thwarting Counter",
    "description": "Deal ${5 * perkMultiplier}% additional damage against targets with active grit.",
    "icon": "LyShineUI/Images/Icons/Perks/Ruinous1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weapon_dmgwithgrit",
    "name": "Thwarting Strikes",
    "description": "Deal ${3 * perkMultiplier}% additional damage while you have active grit.",
    "icon": "LyShineUI/Images/Icons/Perks/Ruinous1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weapon_melee_chargedheavy_dmg",
    "name": "Trenchant Strikes",
    "description": "Fully charged heavy attacks deal ${3 * perkMultiplier}% additional damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Barbarian1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weapon_melee_chargedheavy_crit",
    "name": "Trenchant Crits",
    "description": "Fully charged heavy attacks deal ${5 * perkMultiplier}% additional Crit damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Barbarian1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weapon_melee_chargedheavy_rend",
    "name": "Trenchant Rend",
    "description": "Fully charged heavy attacks apply rend for ${7}s, reducing target's absorption by ${4 * perkMultiplier}%. (${12}s cooldown)",
    "icon": "LyShineUI/Images/Icons/Perks/Barbarian1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.005,
    "labels": [
      "DmgCon"
    ]
  },
  {
    "id": "perkid_weapon_melee_chargedheavy_heal",
    "name": "Trenchant Recovery",
    "description": "Fully charged heavy attacks heal the player for ${10 * perkMultiplier}% of the damage dealt.",
    "icon": "LyShineUI/Images/Icons/Perks/Barbarian1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "DmgCon"
    ]
  }
]