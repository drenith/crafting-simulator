const ice_gauntlet_perks = [
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
    "id": "perkid_ability_icegauntlet_unbrokenwinds",
    "name": "Unbroken Winds",
    "description": "Gain 10% Mana after a full Wind Chill burst.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Skill",
      "IceGauntlet"
    ]
  },
  {
    "id": "perkid_ability_icegauntlet_unendingthaw",
    "name": "Unending Thaw",
    "description": "Frost effects remains on enemies for 2 seconds after exiting Ice Storm.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk2.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Skill",
      "IceGauntlet"
    ]
  },
  {
    "id": "perkid_ability_icegauntlet_icedrefresh",
    "name": "Iced Refresh",
    "description": "A killing blow with Ice Spike's Mighty Spike will reduce all Ice cooldowns by ${20 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk3.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "IceGauntlet"
    ]
  },
  {
    "id": "perkid_ability_icegauntlet_healingtomb",
    "name": "Healing Tomb",
    "description": "Gain 10% Health after exiting Entomb with full mana.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk6.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Skill",
      "IceGauntlet"
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
  }
]