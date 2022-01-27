const armor_perks = [
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
    "id": "perkid_armor_defancient",
    "name": "Ancient Ward",
    "description": "+${2.5 * perkMultiplier}% Damage Absorption against Ancient Guardians.",
    "icon": "LyShineUI/Images/Icons/Perks/AncientWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgAbsorb"
    ]
  },
  {
    "id": "perkid_armor_defangryearth",
    "name": "Angry Earth Ward",
    "description": "+${2.5 * perkMultiplier}% Damage Absorption against Angry Earth.",
    "icon": "LyShineUI/Images/Icons/Perks/AngryEarthWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgAbsorb"
    ]
  },
  {
    "id": "perkid_armor_defbeast",
    "name": "Beast Ward",
    "description": "+${2.5 * perkMultiplier}% Damage Absorption against Beasts.",
    "icon": "LyShineUI/Images/Icons/Perks/BestialWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgAbsorb"
    ]
  },
  {
    "id": "perkid_armor_defcorrupted",
    "name": "Corrupted Ward",
    "description": "+${2.5 * perkMultiplier}% Damage Absorption against Corrupted.",
    "icon": "LyShineUI/Images/Icons/Perks/CorruptedWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgAbsorb"
    ]
  },
  {
    "id": "perkid_armor_deflost",
    "name": "Lost Ward",
    "description": "+${2.5 * perkMultiplier}% Damage Absorption against Lost.",
    "icon": "LyShineUI/Images/Icons/Perks/LostWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgAbsorb"
    ]
  },
  {
    "id": "perkid_armor_loggingluck",
    "name": "Reinforced Logging Luck",
    "description": "While Logging gain ${2 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/LoggingMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.003,
    "labels": [
      "Gathering"
    ]
  },
  {
    "id": "perkid_armor_harvestingluck",
    "name": "Reinforced Harvesting Luck",
    "description": "While Harvesting gain ${2 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/BotanistMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.003,
    "labels": [
      "Gathering"
    ]
  },
  {
    "id": "perkid_armor_miningluck",
    "name": "Reinforced Mining Luck",
    "description": "While Mining gain ${2 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/MiningMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.003,
    "labels": [
      "Gathering"
    ]
  },
  {
    "id": "perkid_armor_skinningluck",
    "name": "Reinforced Skinning Luck",
    "description": "While Skinning gain ${2 * perkMultiplier}% chance at finding rare items.",
    "icon": "LyShineUI/Images/Icons/Perks/SkinningMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.003,
    "labels": [
      "Gathering"
    ]
  },
  {
    "id": "perkid_armor_resistcorrupt",
    "name": "Corruption Resistance",
    "description": "+${5 * perkMultiplier} Corruption Resistance.",
    "icon": "LyShineUI/Images/Icons/Perks/CorruptionResistance1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Afflicted"
    ]
  },
  {
    "id": "perkid_armor_resistblight",
    "name": "Blight Resistance",
    "description": "+${5 * perkMultiplier} Blight Resistance.",
    "icon": "LyShineUI/Images/Icons/Perks/BlightResistance1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Afflicted"
    ]
  },
  {
    "id": "perkid_armor_defcritdmg",
    "name": "Resilient",
    "description": "Critical hits deal ${3 * perkMultiplier}% less damage to you.",
    "icon": "LyShineUI/Images/Icons/Perks/Mana1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00121,
    "labels": [
      "CritDef"
    ]
  },
  {
    "id": "perkid_armor_durability",
    "name": "Reinforced",
    "description": "+${20 * perkMultiplier}% Durability increase.",
    "icon": "LyShineUI/Images/Icons/Perks/Durable1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Durability"
    ]
  },
  {
    "id": "perkid_armor_durcc",
    "name": "Freedom",
    "description": "Slow, Stun, and Silence expires ${3 * perkMultiplier}% faster.",
    "icon": "LyShineUI/Images/Icons/Perks/VoidDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00303,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_armor_durdot",
    "name": "Vigor",
    "description": "Burn, Bleed, and Poison expires ${3 * perkMultiplier}% faster.",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00303,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_armor_durdebuff",
    "name": "Invigorated",
    "description": "Weaken, Disease, Exhaust, and Rend expires ${3 * perkMultiplier}% faster.",
    "icon": "LyShineUI/Images/Icons/Perks/Soldier1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00303,
    "labels": [
      "DebuffDur"
    ]
  },
  {
    "id": "perkid_ability_hatchet_feralrush",
    "name": "Energizing Feral Rush",
    "description": "Gain ${1 * perkMultiplier} stamina for each successful hit with Feral Rush.",
    "icon": "LyShineUI/Images/Icons/Perks/WoodworkerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.03455,
    "labels": [
      "Skill",
      "Hatchet"
    ]
  },
  {
    "id": "perkid_ability_hatchet_berserk",
    "name": "Keen Berserk",
    "description": "Increase Crit Chance by ${1 * perkMultiplier}% while under ${50}% HP while Berserking.",
    "icon": "LyShineUI/Images/Icons/Perks/WoodworkerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.02545,
    "labels": [
      "Skill",
      "Hatchet"
    ]
  },
  {
    "id": "perkid_ability_hatchet_ragingtorrent",
    "name": "Refreshing Torrent",
    "description": "Every hit of Raging Torrent reduces all Hatchet cooldowns by ${1 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/WoodworkerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Hatchet"
    ]
  },
  {
    "id": "perkid_ability_hatchet_rending_throw",
    "name": "Energizing Rending Throw",
    "description": "Rending Throw kills grant ${5 * perkMultiplier} Stamina.",
    "icon": "LyShineUI/Images/Icons/Perks/LumberjackMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.01273,
    "labels": [
      "Skill",
      "Hatchet"
    ]
  },
  {
    "id": "perkid_ability_hatchet_distancingthrow",
    "name": "Vorpal Distancing Throw",
    "description": "Social Distancing headshots deal ${5 * perkMultiplier}% additional damage.",
    "icon": "LyShineUI/Images/Icons/Perks/LumberjackMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Skill",
      "Hatchet"
    ]
  },
  {
    "id": "perkid_ability_hatchet_infectedthrow",
    "name": "Mending Infected Throw",
    "description": "Infected Throw kills return ${5 * perkMultiplier}% of the player's HP.",
    "icon": "LyShineUI/Images/Icons/Perks/LumberjackMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Skill",
      "Hatchet"
    ]
  },
  {
    "id": "perkid_ability_hammer_armorbreaker",
    "name": "Empowering Armor Breaker",
    "description": "If Armor Breaker breaks a block, the next attack within ${5} seconds deals ${3 * perkMultiplier}% additional damage.",
    "icon": "LyShineUI/Images/Icons/Perks/DebilitatingBlockBreaker1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.01636,
    "labels": [
      "Skill",
      "2HHammer"
    ]
  },
  {
    "id": "perkid_ability_hammer_mightygavel",
    "name": "Refreshing Mighty Gavel",
    "description": "Mighty Gavel kills reduce this ability's cooldown by ${5 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/EnfeeblingShockwave1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "2HHammer"
    ]
  },
  {
    "id": "perkid_ability_hammer_wreckingball",
    "name": "Penetrating Wrecking Ball",
    "description": "Wrecking Ball penetrates ${5 * perkMultiplier}% of the target's armor.",
    "icon": "LyShineUI/Images/Icons/Perks/StonecutterMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "2HHammer"
    ]
  },
  {
    "id": "perkid_ability_hammer_shockwave",
    "name": "Sundering Shockwave",
    "description": "Shockwave applies Rend, reducing target's damage absorption by ${5 * perkMultiplier}% for ${10} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/EnfeeblingShockwave1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "Skill",
      "2HHammer"
    ]
  },
  {
    "id": "perkid_ability_hammer_clearout",
    "name": "Repulsing Clear Out",
    "description": "Clear Out now knocks targets back an additional ${50 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/EnfeeblingShockwave1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Skill",
      "2HHammer"
    ]
  },
  {
    "id": "perkid_ability_hammer_pathofdestiny",
    "name": "Leeching Path Of Destiny",
    "description": "Heal for ${10 * perkMultiplier}% of the damage dealt from Path Of Destiny.",
    "icon": "LyShineUI/Images/Icons/Perks/EnfeeblingShockwave1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Skill",
      "2HHammer"
    ]
  },
  {
    "id": "perkid_ability_musket_powderburn",
    "name": "Crippling Powder Burn",
    "description": "Targets hit with Powder Burn are slowed by ${5 * perkMultiplier}% for ${5} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/GalvanizedTraps1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Musket"
    ]
  },
  {
    "id": "perkid_ability_musket_powershot",
    "name": "Refreshing Power Shot",
    "description": "Power Shot kills reduce this ability's cooldown by ${3 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/GalvanizedTraps1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.0103,
    "labels": [
      "Skill",
      "Musket"
    ]
  },
  {
    "id": "perkid_ability_musket_shootersstance",
    "name": "Empowering Shooter's Stance",
    "description": "Hitting a target while in Shooter's Stance grants Empower, increasing damage by ${4 * perkMultiplier}% for ${3} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/GalvanizedTraps1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Skill",
      "Musket"
    ]
  },
  {
    "id": "perkid_ability_musket_stoppingpower",
    "name": "Energizing Stopping Power",
    "description": "Gain ${10 * perkMultiplier} stamina on kill with Stopping Power.",
    "icon": "LyShineUI/Images/Icons/Perks/GalvanizedTraps1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Musket"
    ]
  },
  {
    "id": "perkid_ability_musket_traps",
    "name": "Accelerating Traps",
    "description": "Increase movement speed by ${5 * perkMultiplier}% for ${3} seconds after deploying a trap. (Does not stack.)",
    "icon": "LyShineUI/Images/Icons/Perks/GalvanizedTraps1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Musket"
    ]
  },
  {
    "id": "perkid_ability_musket_stickybomb",
    "name": "Mending Sticky Bombs",
    "description": "Gain ${5 * perkMultiplier}% of your max HP on kill with a Sticky Bomb Explosion.",
    "icon": "LyShineUI/Images/Icons/Perks/GalvanizedTraps1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Skill",
      "Musket"
    ]
  },
  {
    "id": "perkid_ability_spear_sweep",
    "name": "Bleeding Sweep",
    "description": "Sweep's Coup De Grace now applies Bleed for ${2 * perkMultiplier}% of weapon damage for ${4} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Retaliate1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Spear"
    ]
  },
  {
    "id": "perkid_ability_spear_javelin",
    "name": "Sundering Javelin",
    "description": "Javelin applies Rend, reducing target's damage absorption by ${5 * perkMultiplier}% for ${10} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Retaliate1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Spear"
    ]
  },
  {
    "id": "perkid_ability_spear_cyclone",
    "name": "Leeching Cyclone",
    "description": "Every hit of Cyclone heals you for ${10 * perkMultiplier}% of weapon damage.",
    "icon": "LyShineUI/Images/Icons/Perks/Retaliate1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00424,
    "labels": [
      "Skill",
      "Spear"
    ]
  },
  {
    "id": "perkid_ability_spear_perforate",
    "name": "Fortifying Perforate",
    "description": "Gain a stack of Fortify, increasing damage absorption by ${2 * perkMultiplier}% for ${6} seconds per successful Perforate hit.",
    "icon": "LyShineUI/Images/Icons/Perks/Retaliate1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Spear"
    ]
  },
  {
    "id": "perkid_ability_spear_skewer",
    "name": "Enfeebling Skewer",
    "description": "Skewer hits apply Weaken, reducing target's damage by ${3 * perkMultiplier}% for ${8} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Retaliate1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Spear"
    ]
  },
  {
    "id": "perkid_ability_spear_vaultkick",
    "name": "Keen Vault Kick",
    "description": "Vault Kick increases random Crit Chance by ${2 * perkMultiplier}% for ${5} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Retaliate1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.01636,
    "labels": [
      "Skill",
      "Spear"
    ]
  },
  {
    "id": "perkid_ability_bow_poisonshot",
    "name": "Enfeebling Poison Shot",
    "description": "Poison Shot's arrow also applies Weaken, reducing target's damage by ${3 * perkMultiplier}% for ${4} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/EngineerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Bow"
    ]
  },
  {
    "id": "perkid_ability_bow_evadeshot",
    "name": "Energizing Evade Shot",
    "description": "Gain ${2 * perkMultiplier} Stamina after hitting a target with Evade Shot.",
    "icon": "LyShineUI/Images/Icons/Perks/EngineerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.01636,
    "labels": [
      "Skill",
      "Bow"
    ]
  },
  {
    "id": "perkid_ability_bow_rainofarrows",
    "name": "Fortifying Rain of Arrows",
    "description": "Hitting a target with Rain of Arrows grants Fortify on self, increasing damage absorption by ${5 * perkMultiplier}% for ${6} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/EngineerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Bow"
    ]
  },
  {
    "id": "perkid_ability_bow_rapidshot",
    "name": "Penetrating Rapid Shot",
    "description": "Increase armor penetration of the final arrow of Rapid Shot attacks by ${5 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/EngineerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Bow"
    ]
  },
  {
    "id": "perkid_ability_bow_penetratingshot",
    "name": "Refreshing Penetrating Shot",
    "description": "Penetrating Shot kills reduce this ability's cooldown by ${3 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/EngineerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Bow"
    ]
  },
  {
    "id": "perkid_ability_bow_splintershot",
    "name": "Empowering Splinter Shot",
    "description": "Splinter Shot hits grant Empower, increase damage by ${4 * perkMultiplier}% for ${10} seconds or until the next attack.",
    "icon": "LyShineUI/Images/Icons/Perks/EngineerMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "Bow"
    ]
  },
  {
    "id": "perkid_ability_rapier_tondo",
    "name": "Keen Tondo",
    "description": "Increase Crit Chance by ${2 * perkMultiplier}% against targets affected by Tondo's Bleed.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00909,
    "labels": [
      "Skill",
      "Rapier"
    ]
  },
  {
    "id": "perkid_ability_rapier_flourishandfinish",
    "name": "Energizing Flourish",
    "description": "Gain ${5 * perkMultiplier} stamina on hit with Flourish.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Rapier"
    ]
  },
  {
    "id": "perkid_ability_rapier_flurry",
    "name": "Leeching Flurry",
    "description": "Each hit of Flurry restores returns ${10 * perkMultiplier}% of the damage as health.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Skill",
      "Rapier"
    ]
  },
  {
    "id": "perkid_ability_rapier_riposte",
    "name": "Sundering Riposte",
    "description": "Riposte grants Rend, reducing damage absorption of target by ${5 * perkMultiplier}% for ${10} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Skill",
      "Rapier"
    ]
  },
  {
    "id": "perkid_ability_rapier_evade",
    "name": "Omnidirectional Evade",
    "description": "Evade's Adagio upgrade is applied when evading in any direction.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0,
    "labels": [
      "Skill",
      "Rapier"
    ]
  },
  {
    "id": "perkid_ability_rapier_fleche",
    "name": "Refreshing Fleche",
    "description": "Hitting a target via a Crit Backstab with Fleche reduces this ability's cooldown by ${5 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/Keen1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "Rapier"
    ]
  },
  {
    "id": "perkid_ability_lifestaff_divineembrance",
    "name": "Refreshing Divine Embrace",
    "description": "Using Divine Embrace on a target below 50% health reduces the cooldown by ${10 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/Magician1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "LifeStaff"
    ]
  },
  {
    "id": "perkid_ability_lifestaff_sacredground",
    "name": "Fortifying Sacred Ground",
    "description": "Allies healed by Sacred Ground gain Fortify, increasing damage absorption by ${3 * perkMultiplier}% for ${5} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Magician1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00424,
    "labels": [
      "Skill",
      "LifeStaff"
    ]
  },
  {
    "id": "perkid_ability_lifestaff_splashoflight",
    "name": "Energizing Splash Of Light",
    "description": "Allies hit with Splash of Light gain ${3 * perkMultiplier} stamina.",
    "icon": "LyShineUI/Images/Icons/Perks/Magician1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "LifeStaff"
    ]
  },
  {
    "id": "perkid_ability_lifestaff_orbofprotection",
    "name": "Mending Protection",
    "description": "Increase healing power by ${5 * perkMultiplier}% for ${3} seconds if Orb of Protection heals an ally with less than ${50}% health.",
    "icon": "LyShineUI/Images/Icons/Perks/Magician1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "LifeStaff"
    ]
  },
  {
    "id": "perkid_ability_lifestaff_lightsembrace",
    "name": "Accelerating Light's Embrace",
    "description": "Allies below full health gain Haste when hit with Light's Embrace, increasing movement speed by ${5 * perkMultiplier}% for ${3} Seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Magician1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "LifeStaff"
    ]
  },
  {
    "id": "perkid_ability_lifestaff_beacon",
    "name": "Revitalizing Beacon",
    "description": "Using Beacon increases healing power on self by ${5 * perkMultiplier}% for ${12} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/Magician1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.01273,
    "labels": [
      "Skill",
      "LifeStaff"
    ]
  },
  {
    "id": "perkid_ability_firestaff_pillaroffire",
    "name": "Refreshing Pillar of Fire",
    "description": "Reduce this ability's cooldown by ${3 * perkMultiplier}% per enemy hit with Pillar of Fire. (${3}} hits max.)",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "FireStaff"
    ]
  },
  {
    "id": "perkid_ability_firestaff_meteorshower",
    "name": "Empowering Meteor Shower",
    "description": "Meteor Shower hits deal ${10 * perkMultiplier}% additional damage to targets at full Health.",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.004,
    "labels": [
      "Skill",
      "FireStaff"
    ]
  },
  {
    "id": "perkid_ability_firestaff_fireball",
    "name": "Empowering Fireball",
    "description": "Fireball impact deals ${5 * perkMultiplier}% additional damage.",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.0103,
    "labels": [
      "Skill",
      "FireStaff"
    ]
  },
  {
    "id": "perkid_ability_firestaff_incinerate",
    "name": "Siphoning Incinerate",
    "description": "Restore ${2 * perkMultiplier} mana per hit with Incinerate. (${3}} hits max.)",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "FireStaff"
    ]
  },
  {
    "id": "perkid_ability_firestaff_flamethrower",
    "name": "Accelerating Flamethrower",
    "description": "Applying ${3}} stacks of burn damage on a target with Flamethrower grants Haste, increasing movement speed by ${5 * perkMultiplier}% for ${2}} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "FireStaff"
    ]
  },
  {
    "id": "perkid_ability_firestaff_burnout",
    "name": "Efficient Burnout",
    "description": "Mana regen rate increased by ${10 * perkMultiplier}% for ${8} seconds after using Burnout.",
    "icon": "LyShineUI/Images/Icons/Perks/FireDMG1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00545,
    "labels": [
      "Skill",
      "FireStaff"
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
    "id": "perkid_ability_greataxe_charge",
    "name": "Refeshing Charge",
    "description": "Using Charge on a target with full health reduces the cooldown by ${5 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/WeaponSmithMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Skill",
      "2hAxe"
    ]
  },
  {
    "id": "perkid_ability_greataxe_reap",
    "name": "Crippling Reap",
    "description": "If target hit with Reap is below 50% health, they are Slowed, reducing movement speed by ${10 * perkMultiplier}% for ${2} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/WeaponSmithMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00455,
    "labels": [
      "Skill",
      "2hAxe"
    ]
  },
  {
    "id": "perkid_ability_greataxe_execute",
    "name": "Mending Execute",
    "description": "Gain ${5 * perkMultiplier}% of health back on kill with Execute.",
    "icon": "LyShineUI/Images/Icons/Perks/WeaponSmithMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00473,
    "labels": [
      "Skill",
      "2hAxe"
    ]
  },
  {
    "id": "perkid_ability_greataxe_whirlwind",
    "name": "Fortifying Whirlwind",
    "description": "Whirlwind hits grant Fortify on self, increasing damage absorption by ${3 * perkMultiplier}% for ${2} seconds. (5 stacks max.)",
    "icon": "LyShineUI/Images/Icons/Perks/WeaponSmithMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00467,
    "labels": [
      "Skill",
      "2hAxe"
    ]
  },
  {
    "id": "perkid_ability_greataxe_maelstrom",
    "name": "Enfeebling Maelstrom",
    "description": "Targets hit by Maelstrom's No Reprieve are Weakened, reducing their attack damage by ${3 * perkMultiplier}% for ${4} seconds.",
    "icon": "LyShineUI/Images/Icons/Perks/WeaponSmithMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00727,
    "labels": [
      "Skill",
      "2hAxe"
    ]
  },
  {
    "id": "perkid_ability_greataxe_gravitywell",
    "name": "Insatiable Gravity Well",
    "description": "Gain ${20 * perkMultiplier}% of your damage with Gravity Well back as health, and cast another burst around you on successful hit that deals ${125}% weapon damage.",
    "icon": "LyShineUI/Images/Icons/Perks/WeaponSmithMastery1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.003,
    "labels": [
      "Skill",
      "2hAxe"
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
    "id": "perkid_ability_voidgauntlet_voidblade_lifesteal",
    "name": "Voracious Blade",
    "description": "While below ${50}% health, successful Void Blade hits heal self for ${10 * perkMultiplier}% of the damage done.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk6.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.004,
    "labels": [
      "Skill",
      "VoidGauntlet"
    ]
  },
  {
    "id": "perkid_ability_voidgauntlet_nullchamber_nullify",
    "name": "Nullifying Oblivion",
    "description": "On activation, Oblivion removes limited duration buffs from enemies within its radius.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk6.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.002,
    "labels": [
      "Skill",
      "VoidGauntlet"
    ]
  },
  {
    "id": "perkid_ability_voidgauntlet_scream_disease",
    "name": "Putrefying Scream",
    "description": "On successful hit, Petrifying Scream inflicts Disease, reducing the target's healing by ${10 * perkMultiplier}% for ${10}s.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk6.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00364,
    "labels": [
      "Skill",
      "VoidGauntlet"
    ]
  },
  {
    "id": "perkid_ability_voidgauntlet_decayingorb_reducebuffs",
    "name": "Diminishing Orb",
    "description": "On hit, Orb of Decay reduces the duration of the target's buffs by ${20 * perkMultiplier}%.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk6.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.003,
    "labels": [
      "Skill",
      "VoidGauntlet"
    ]
  },
  {
    "id": "perkid_ability_voidgauntlet_drainingtether_slow",
    "name": "Slowing Tether",
    "description": "On successful hit, Baleful Tether inflicts Slow, reducing the target's move speed by ${20 * perkMultiplier}% for ${3}s.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk6.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.001,
    "labels": [
      "Skill",
      "VoidGauntlet"
    ]
  },
  {
    "id": "perkid_ability_voidgauntlet_essencerupture_empower",
    "name": "Empowering Rupture",
    "description": "On killing blow of a target you've afflicted with Essence Rupture, gain Empower, increasing your damage by ${10 * perkMultiplier}% for ${5}s.",
    "icon": "LyShineUI/Images/Icons/Perks/iceMagic_Perk6.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.004,
    "labels": [
      "Skill",
      "VoidGauntlet"
    ]
  },
  {
    "id": "perkid_armor_rangedefense_physical",
    "name": "Physical Aversion",
    "description": "You take ${2 * perkMultiplier}% less damage from ranged physical standard attacks.",
    "icon": "LyShineUI/Images/Icons/Perks/PhysicalWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgAbsorb"
    ]
  },
  {
    "id": "perkid_armor_rangedefense_elemental",
    "name": "Elemental Aversion",
    "description": "You take ${2 * perkMultiplier}% less damage from ranged elemental standard attacks.",
    "icon": "LyShineUI/Images/Icons/Perks/ElementalWard1.png",
    "type": "Generated",
    "attributes": [],
    "ScalingPerGearScore": 0.00182,
    "labels": [
      "DmgAbsorb"
    ]
  }
]