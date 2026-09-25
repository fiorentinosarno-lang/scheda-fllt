// =============================================================================
// FALLOUT TTRPG - EDITABLE CHARACTER SHEET LOGIC v3.5
// Complete Engine: Anatomical Paperdoll, Survival Pips, 4-Part Weapon Damage,
// Perk S.P.E.C.I.A.L. Filters & Availability, Background Tag Skills, Level Up Wizard,
// Race Sync, Canvas Compressed Portrait, and 1-5 Trait Ranks.
// =============================================================================

// Default character state model
const DEFAULT_CHARACTER = {
  info: {
    name: "Vagabondo Solitario",
    player: "",
    race: "human",
    raceVariant: "Standard",
    background: "vault_dweller",
    level: 1,
    xp: 0,
    karmaCaps: { max: 1, current: 1, flipped: false }
  },
  racialOptions: {
    activeIds: ["human_resourceful"],
    customTraits: []
  },
  portrait: null,
  limbs: {
    head: "healthy",
    torso: "healthy",
    armL: "healthy",
    armR: "healthy",
    legL: "healthy",
    legR: "healthy"
  },
  special: {
    strength: 5,
    perception: 5,
    endurance: 5,
    charisma: 5,
    intelligence: 5,
    agility: 5,
    luck: 5
  },
  specialMods: {
    strength: "+0",
    perception: "+0",
    endurance: "+0",
    charisma: "+0",
    intelligence: "+0",
    agility: "+0",
    luck: "+0"
  },
  skills: {
    barter:        { name: "Commerciare (Barter)",      attr: "charisma",      tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    breach:        { name: "Violare (Breach)",           attr: "perception",    altAttr: "intelligence", useAlt: false, tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    crafting:      { name: "Costruire (Crafting)",       attr: "intelligence",  tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    energyWeapons: { name: "Armi ad Energia",            attr: "perception",    tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    explosives:    { name: "Esplosivi (Explosives)",     attr: "perception",    tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    guns:          { name: "Pistole / Armi Fuoco",       attr: "agility",       tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    intimidation:  { name: "Intimidire (Intimidation)",  attr: "strength",      altAttr: "charisma", useAlt: false, tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    medicine:      { name: "Medicina (Medicine)",        attr: "perception",    altAttr: "intelligence", useAlt: false, tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    meleeWeapons:  { name: "Corpo a Corpo (Melee)",      attr: "strength",      tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    sneak:         { name: "Sneak (Furtività)",          attr: "agility",       tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    science:       { name: "Scienza (Science)",          attr: "intelligence",  tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    speech:        { name: "Oratoria (Speech)",          attr: "charisma",      tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    survival:      { name: "Sopravvivenza (Survival)",   attr: "endurance",     tag: false, baseMod: 0, points: 0, extra: 0, total: 0 },
    unarmed:       { name: "Disarmato (Unarmed)",        attr: "strength",      tag: false, baseMod: 0, points: 0, extra: 0, total: 0 }
  },
  vitals: {
    currentHp: 10, maxHp: 10,
    currentSp: 10, maxSp: 10,
    currentAp: 10, maxAp: 10, recycledAp: 0,
    healingRate: 3, combatSequence: 0,
    fatigue: 0, hunger: 0, dehydration: 0, exhaustion: 0,
    radDc: 12, rads: 0, passiveSense: 12,
    partyNerve: 0, groupSneak: 0,
    ac: 10, dt: 0
  },
  armor: {
    name: "Tuta del Vault 111",
    type: "cloth",
    quality: "standard",
    legendaryEffect: "",
    legendaryEffects: [],
    decay: 0,
    installedUpgrades: [
      { id: "u_lead_lined", name: "Lead Lined (Foderata di Piombo)", rank: 1, maxRank: 3, effect: "DC Radiazioni -2." }
    ]
  },
  powerArmor: {
    owned: false,
    equipped: false,
    modelId: "t45",
    currentDp: 15,
    maxDp: 15,
    decay: 0,
    fusionMinutes: 240,
    overheated: false,
    installedUpgrades: [],
    pieces: {
      head: { name: "Casco / Elmo", model: "T-45", level: "Mk I", condition: "healthy", damage: 0, maxHp: 15, mod: "" },
      torso: { name: "Torace / Busto", model: "T-45", level: "Mk I", condition: "healthy", damage: 0, maxHp: 30, mod: "" },
      armL: { name: "Braccio Sinistro", model: "T-45", level: "Mk I", condition: "healthy", damage: 0, maxHp: 15, mod: "" },
      armR: { name: "Braccio Destro", model: "T-45", level: "Mk I", condition: "healthy", damage: 0, maxHp: 15, mod: "" },
      legL: { name: "Gamba Sinistra", model: "T-45", level: "Mk I", condition: "healthy", damage: 0, maxHp: 20, mod: "" },
      legR: { name: "Gamba Destra", model: "T-45", level: "Mk I", condition: "healthy", damage: 0, maxHp: 20, mod: "" }
    }
  },
  pipboy: {
    owned: false,
    model: "pb3000mk4",
    decay: 0,
    installedUpgrades: [],
    notes: ""
  },
  customResistances: [],
  weapons: [
    {
      id: "w1",
      name: "Pistola 10mm",
      type: "Pistola (Fuoco)",
      quality: "standard",
      legendaryEffect: "",
      legendaryEffects: [],
      ap: 5,
      attackMod: "+0",
      damage: "2d4",
      baseDamage: "2d4",
      skillBonus: 0,
      perkBonus: 0,
      condPenalty: 0,
      rangeMult: "x8 / x16",
      crit: "19, 1d4",
      ammoType: "10mm",
      selectedAmmo: "Standard",
      ammoCurrent: 12,
      ammoMax: 12,
      properties: "Robusto, Rinculo",
      installedMods: [
        { id: "r_speedloader", name: "Speedloader (Ricarica Rapida)", effect: "Ricaricare costa 4 AP anziché 6 AP." }
      ],
      decay: 0,
      load: 6,
      reqStr: 3,
      hands: 1
    },
    {
      id: "w2",
      name: "Coltello da Combattimento",
      type: "Mischia / Corpo a Corpo",
      quality: "standard",
      legendaryEffect: "",
      legendaryEffects: [],
      ap: 3,
      attackMod: "+0",
      damage: "2d4",
      baseDamage: "2d4",
      skillBonus: 0,
      perkBonus: 0,
      condPenalty: 0,
      rangeMult: "5 ft",
      crit: "20, x3",
      ammoType: "-",
      selectedAmmo: "Standard",
      ammoCurrent: 0,
      ammoMax: 0,
      properties: "Preciso, Da Lancio",
      installedMods: [
        { id: "m_sharpened", name: "Sharpened (Affilata)", effect: "L'arma guadagna Dilaniante (Mangle)." }
      ],
      decay: 0,
      load: 2,
      reqStr: 1,
      hands: 1
    }
  ],
  traits: [
    { id: "small_frame", name: "Piccola Stazza (Small Frame)", rank: 1, maxRank: 5, effect: "Agilità aumenta di +1. Svantaggio ai tiri salvezza contro condizioni e fratture agli arti." }
  ],
  perks: [
    { id: "p1", name: "Pistolero (Gunslinger)", effect: "+2 all'attacco con pistole. Gira un Karma Cap su colpo mirato alla testa per critico automatico." }
  ],
  bio: {
    personality: "",
    personalityTraits: ["Pragmatico", "Paura dei Radscorpioni"],
    age: "25",
    gender: "M",
    height: "1.80 m",
    weight: "75 kg",
    eyes: "Azzurri",
    hair: "Castani",
    marks: "Cicatrice sottile sopra l'occhio sinistro",
    backstory: "Nato nel Vault 111, uscito per esplorare le rovine del Commonwealth.",
    events: [
      { date: "Anno 2287", title: "Apertura del Vault 111", desc: "Uscito nella Zona Contaminata in cerca di risorse." }
    ],
    goalShort: "Trovare un rifornimento sicuro di cibo e munizioni.",
    goalLong: "Ricostruire una comunità stabile e sicura nella Zona Contaminata.",
    goals: [
      { desc: "Trovare un purificatore d'acqua per l'insediamento", type: "Breve Termine", completed: false },
      { desc: "Ristabilire contatti con Bunker Hill", type: "Lungo Termine", completed: false }
    ],
    allies: "Mercanti della Carovana di Bunker Hill",
    enemies: "Banda di predoni dei Rust Devils",
    relationships: [
      { name: "Trashcan Carla", role: "Mercante Itinerante", type: "ally", notes: "Sconto del 10% sui rottami" },
      { name: "Judge Zeller", role: "Capo Predoni Rust Devils", type: "enemy", notes: "Ha messo una taglia su di me" }
    ],
    masterNotes: "",
    masterGifts: [
      { title: "Segnale Radio d'Emergenza", desc: "Puoi richiedere 1 consegna aerea d'emergenza una volta per campagna." }
    ]
  },
  inventory: [
    { id: "i1", name: "Fucile da Caccia (Hunting Rifle)", qty: 1, load: 9, cost: "150c", notes: "Arma: Danno 2d8, A Due Mani, STR req 6", isEquippable: "weapon", weaponData: { name: "Fucile da Caccia", type: "Fucile", ap: 6, damage: "2d8", baseDamage: "2d8", skillBonus: 0, perkBonus: 0, condPenalty: 0, rangeMult: "x15 / x30", crit: "19, 2d8", ammoType: ".308", ammoCurrent: 5, ammoMax: 5, reqStr: 6, hands: 2, properties: "Accurato, A Due Mani", load: 9 } },
    { id: "i2", name: "Armatura di Metallo (Metal)", qty: 1, load: 20, cost: "250c", notes: "Armatura: AC 12, DT 0, 4 Slot, STR req 5", isEquippable: "armor", armorData: { name: "Armatura di Metallo", type: "metal", quality: "standard" } },
    { id: "i3", name: "Zaino in Cuoio",         qty: 1, load: 10,  cost: "20c",  notes: "+50 Carico trasportabile" },
    { id: "i4", name: "Stimpak",                 qty: 2, load: 2,   cost: "75c",  notes: "Ripristina HP pari a Tasso Guarigione" },
    { id: "i5", name: "Rad-X",                   qty: 1, load: 0.1, cost: "40c",  notes: "DC Radiazioni -2 per 3 ore" },
    { id: "i6", name: "Acqua Purificata",         qty: 2, load: 2,   cost: "20c",  notes: "Rimuove 3 livelli di disidratazione" },
    { id: "i7", name: "Grimaldelli (Lockpicks)", qty: 5, load: 1,   cost: "100c", notes: "DC Scasso ridotta di 5" }
  ],
  caps: 85,
  carryMax: 50,
  pipboy: {
    owned: false,
    model: "pb3000mk4",
    decay: 0,
    installedUpgrades: [],
    notes: ""
  }
};

// Global active state
var character = JSON.parse(JSON.stringify(DEFAULT_CHARACTER));
window.character = character;
let pickerContext = null;

// =============================================================================
// COMPUTATION ENGINE
// =============================================================================

function calculateModFromScore(score) {
  const mod = score - 5;
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

function parseModInt(modStr) {
  if (typeof modStr === "number") return modStr;
  if (!modStr) return 0;
  return parseInt(modStr.toString().replace("+", ""), 10) || 0;
}

function getStatMod(statName) {
  const rawMod = character.specialMods[statName];
  if (rawMod !== undefined && rawMod !== "") {
    return parseModInt(rawMod);
  }
  return (character.special[statName] || 5) - 5;
}

function getEffectiveStrength() {
  const baseStr = parseInt(character.special && character.special.strength, 10) || 5;
  const isPaEquipped = !!(character.powerArmor && character.powerArmor.equipped);
  if (!isPaEquipped) return baseStr;
  let paMinStr = 10;
  const hasHydraulic = (character.powerArmor.installedUpgrades || []).some(u => {
    const uid = (u.id || "").toLowerCase();
    const uname = (u.name || "").toLowerCase();
    return uid.includes("hydraulic") || uid.includes("idraul") || uid.includes("servo") || uname.includes("idraul") || uname.includes("hydraulic");
  });
  if (hasHydraulic) paMinStr = 12;
  return Math.max(paMinStr, baseStr);
}

function togglePersonalProfile() {
  const body = document.getElementById("personal-profile-body");
  const icon = document.getElementById("profile-toggle-icon");
  if (!body) return;
  const isHidden = body.classList.toggle("collapsed");
  if (icon) {
    icon.textContent = isHidden ? "[+] Espandi Profilo" : "[-] Riduci Profilo";
  }
  try { localStorage.setItem("fallout_profile_collapsed", isHidden ? "1" : "0"); } catch(e){}
}

function switchVaultTab(tabId) {
  document.querySelectorAll(".vault-tab-page").forEach(p => {
    p.classList.remove("active");
  });
  const target = document.getElementById(tabId);
  if (target) target.classList.add("active");

  document.querySelectorAll(".vault-tab-btn").forEach(b => {
    if (b.getAttribute("data-tab") === tabId) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
  try { localStorage.setItem("fallout_active_tab", tabId); } catch(e){}
}

function updateDerivedValues() {
  const lvl = parseInt(character.info.level, 10) || 1;
  const str = parseInt(character.special.strength, 10) || 5;
  const isPaEquipped = !!(character.powerArmor && character.powerArmor.equipped);
  const effectiveStr = getEffectiveStrength();

  const perMod = getStatMod("perception");
  const endMod = getStatMod("endurance");
  const agiMod = getStatMod("agility");

  const lvlEntry = (FALLOUT_RULES_DATA.levelTable && FALLOUT_RULES_DATA.levelTable[Math.min(29, lvl - 1)]) || {
    spBase: 10, hpBase: 10, agiMult: 1, endMult: 1
  };

  // Calculate perk bonuses for AP, AC, DT, HP, SP, and Rads
  let perkApBonus = 0;
  let perkCarryBonus = 0;
  let perkPassiveSenseBonus = 0;

  if (Array.isArray(character.perks)) {
    character.perks.forEach(p => {
      const pName = (p.name || "").toLowerCase();
      const pId = (p.id || "").toLowerCase();
      if (pId === "p_action_boy" || pName.includes("action boy") || pName.includes("action girl")) {
        perkApBonus += 2;
      }
      if (pId === "p_strong_back" || pName.includes("strong back") || pName.includes("schiena forte")) {
        perkCarryBonus += 25 * (p.rank || 1);
      }
      if (pId === "p_blind_devil" || pName.includes("blind devil") || pName.includes("diavolo cieco")) {
        perkPassiveSenseBonus += 5;
      }
    });
  }

  // Calculate armor upgrade bonuses for carry capacity, rad resistance, stamina, AP and senses
  let upgradeCarryBonus = 0;
  let upgradeRadDcReduction = 0;
  let upgradeSpBonus = 0;
  let upgradeApBonus = 0;
  let upgradePassiveSenseBonus = 0;
  let upgradeCombatSeqBonus = 0;

  if (isPaEquipped && Array.isArray(character.powerArmor.installedUpgrades)) {
    character.powerArmor.installedUpgrades.forEach(u => {
      const r = u.rank || 1;
      if (u.id === "pa_sensor_array") upgradePassiveSenseBonus += (r === 3 ? 20 : r === 2 ? 10 : 5);
      if (u.id === "pa_calibrated_shocks" || u.name.toLowerCase().includes("calibrated shocks")) upgradeCarryBonus += (r === 3 ? 50 : r === 2 ? 30 : 15);
      if (u.id === "u_lead_lined") upgradeRadDcReduction += (r === 3 ? 6 : r === 2 ? 4 : 2);
    });
  } else if (Array.isArray(character.armor.installedUpgrades)) {
    character.armor.installedUpgrades.forEach(u => {
      const r = u.rank || 1;
      if (u.id === "u_pocketed") upgradeCarryBonus += (r === 3 ? 50 : r === 2 ? 25 : 10);
      if (u.id === "u_lead_lined") upgradeRadDcReduction += (r === 3 ? 6 : r === 2 ? 4 : 2);
      if (u.id === "u_fitted" && r >= 2) upgradeSpBonus += lvl; // Rank 2: +Livello a SP massimi
      if (u.id === "u_fitted" && r >= 3) upgradeCombatSeqBonus += 5; // Rank 3: +5 Iniziativa/Sequenza
      if (u.id === "u_insulated" && r === 1) upgradeApBonus -= 1; // Rank 1: -1 AP max
      if (u.id === "pa_sensor_array") upgradePassiveSenseBonus += (r === 3 ? 20 : r === 2 ? 10 : 5);
    });
  }

  const computedMaxHp = lvlEntry.hpBase + (lvlEntry.endMult * endMod);
  const computedMaxSp = lvlEntry.spBase + (lvlEntry.agiMult * agiMod) + upgradeSpBonus;
  // AP base è sempre 10, modificato da talenti (Action Boy) e upgrade (Insulated) fino a un massimo di 15
  const computedMaxAp = Math.min(15, Math.max(1, 10 + perkApBonus + upgradeApBonus));
  const surv = typeof getSurvivalMaluses === "function" ? getSurvivalMaluses() : { toHitMalus: 0, regenMalusVal: 0, dmgMalus: 0, hunger: 0, dehydration: 0 };
  let baseHealingRate = Math.max(1, 3 + endMod);
  let effectiveHealingRate = baseHealingRate;

  if (surv.dehydration > 0) {
    effectiveHealingRate = 0; // Disidratazione blocca totalmente la guarigione naturale
  } else if (surv.hunger > 0) {
    const hMalus = Math.ceil(surv.hunger / 2);
    effectiveHealingRate = Math.max(0, baseHealingRate - hMalus);
  }
  const computedHealingRate = effectiveHealingRate;
  const computedCombatSeq = perMod + agiMod + upgradeCombatSeqBonus;
  const computedPassiveSense = 12 + perMod + upgradePassiveSenseBonus + perkPassiveSenseBonus;
  const computedRadDc = Math.max(2, 12 - endMod - upgradeRadDcReduction);
  const racialCarryBonus = (character.info && character.info.race === "super_mutant") ? 40 : 0;
  const computedCarryMax = Math.max(10, effectiveStr * 10) + upgradeCarryBonus + perkCarryBonus + racialCarryBonus;

  const maxHpEl = document.getElementById("max-hp");
  const maxSpEl = document.getElementById("max-sp");
  const maxApEl = document.getElementById("max-ap");
  const healingEl = document.getElementById("val-healing-rate");
  const combatSeqEl = document.getElementById("val-combat-seq");
  const passiveEl = document.getElementById("val-passive-sense");
  const radDcEl = document.getElementById("val-rad-dc");
  const carryMaxEl = document.getElementById("carry-max");

  if (maxHpEl && !maxHpEl.dataset.custom) { character.vitals.maxHp = computedMaxHp; maxHpEl.value = computedMaxHp; }
  if (maxSpEl && !maxSpEl.dataset.custom) { character.vitals.maxSp = computedMaxSp; maxSpEl.value = computedMaxSp; }
  if (maxApEl && !maxApEl.dataset.custom) { character.vitals.maxAp = computedMaxAp; maxApEl.value = computedMaxAp; }
  if (healingEl && !healingEl.dataset.custom) { character.vitals.healingRate = computedHealingRate; healingEl.value = computedHealingRate; }
  if (combatSeqEl && !combatSeqEl.dataset.custom) { character.vitals.combatSequence = computedCombatSeq; combatSeqEl.value = computedCombatSeq; }
  if (passiveEl && !passiveEl.dataset.custom) { character.vitals.passiveSense = computedPassiveSense; passiveEl.value = computedPassiveSense; }
  if (radDcEl && !radDcEl.dataset.custom) { character.vitals.radDc = computedRadDc; radDcEl.value = computedRadDc; }
  if (carryMaxEl && !carryMaxEl.dataset.custom) { character.carryMax = computedCarryMax; carryMaxEl.value = computedCarryMax; }

  // Mirror to Core (Tab 1) Vitals Inputs
  const coreMaxHpEl = document.getElementById("core-max-hp");
  const coreMaxSpEl = document.getElementById("core-max-sp");
  const coreMaxApEl = document.getElementById("core-max-ap");
  const coreHealingEl = document.getElementById("core-val-healing-rate");
  const coreCombatSeqEl = document.getElementById("core-val-combat-seq");
  const corePassiveEl = document.getElementById("core-val-passive-sense");
  const coreRadDcEl = document.getElementById("core-val-rad-dc");

  if (coreMaxHpEl && !coreMaxHpEl.dataset.custom) coreMaxHpEl.value = character.vitals.maxHp;
  if (coreMaxSpEl && !coreMaxSpEl.dataset.custom) coreMaxSpEl.value = character.vitals.maxSp;
  if (coreMaxApEl && !coreMaxApEl.dataset.custom) coreMaxApEl.value = character.vitals.maxAp;
  if (coreHealingEl && !coreHealingEl.dataset.custom) coreHealingEl.value = character.vitals.healingRate;
  if (coreCombatSeqEl && !coreCombatSeqEl.dataset.custom) coreCombatSeqEl.value = character.vitals.combatSequence;
  if (corePassiveEl && !corePassiveEl.dataset.custom) corePassiveEl.value = character.vitals.passiveSense;
  if (coreRadDcEl && !coreRadDcEl.dataset.custom) coreRadDcEl.value = character.vitals.radDc;

  recalcArmor();
  recalcSkills();
  updateInventoryAndCarry();

  const discEl = document.getElementById("val-discount");
  const coreDiscEl = document.getElementById("core-val-discount");
  const carMod = getStatMod("charisma");
  const discStr = `${Math.max(0, carMod * 5)}%`;
  if (discEl) discEl.textContent = discStr;
  if (coreDiscEl) coreDiscEl.textContent = discStr;
  if (typeof renderDashboardOverview === "function") renderDashboardOverview();
  if (typeof renderKarmaCaps === "function") renderKarmaCaps();
  if (typeof updateMobileHUD === "function") updateMobileHUD();
}

function recalcArmor() {
  let upgradeAcBonus = 0;
  let upgradeDtBonus = 0;
  let perkAcBonus = 0;
  let perkDtBonus = 0;

  if (Array.isArray(character.perks)) {
    character.perks.forEach(p => {
      const pName = (p.name || "").toLowerCase();
      const pId = (p.id || "").toLowerCase();
      if (pId === "p_toughness" || pName.includes("toughness") || pName.includes("robustezza")) {
        perkDtBonus += (p.rank || 1);
      }
      if (pId === "p_robot_thick_plating" || pName.includes("thick plating") || pName.includes("placcatura rinforzata")) {
        perkAcBonus += (p.rank || 1);
        perkDtBonus += (p.rank || 1);
      }
      if (pId === "p_mutant_evolution" || pName.includes("evolution") || pName.includes("evoluzione mutante")) {
        perkAcBonus += 1;
        perkDtBonus += 1;
      }
      // Perk INT: Nerd Rage! (+3 DT quando HP < 50%)
      if (pId === "nerd_rage" || pName.includes("nerd rage") || pName.includes("furia da nerd")) {
        const curHp = character.vitals ? (character.vitals.currentHp || 0) : 10;
        const maxHp = character.vitals ? (character.vitals.maxHp || 10) : 10;
        if (curHp < (maxHp / 2)) {
          perkDtBonus += 3;
        }
      }
      // Perk Super Mutante: Feel No Wounds (+1 DT)
      if (pId === "feel_no_wounds" || pName.includes("feel no wounds") || pName.includes("non sento ferite")) {
        perkDtBonus += 1;
      }
    });
  }

  const isPaEquipped = !!(character.powerArmor && character.powerArmor.equipped);

  if (isPaEquipped) {
    const paMatch = (FALLOUT_RULES_DATA.powerArmorModels || []).find(a => a.id === character.powerArmor.modelId) || { ac: 14, dt: 6 };
    let paUpgradeAc = 0;
    let paUpgradeDt = 0;
    if (Array.isArray(character.powerArmor.installedUpgrades)) {
      character.powerArmor.installedUpgrades.forEach(u => {
        const r = u.rank || 1;
        if (u.id === "u_hardened") paUpgradeAc += (r === 3 ? 3 : r === 2 ? 2 : 1);
        if (u.id === "u_reinforced") paUpgradeDt += (r === 3 ? 4 : r === 2 ? 2 : 1);
      });
    }

    // Decay PA: ogni 2 livelli di usura riduce AC e DT di 1
    const decay = parseInt(character.powerArmor.decay, 10) || 0;
    const decayPenalty = Math.floor(decay / 2);

    character.vitals.ac = Math.max(0, paMatch.ac + perkAcBonus + paUpgradeAc - decayPenalty);
    character.vitals.dt = Math.max(0, paMatch.dt + perkDtBonus + paUpgradeDt - decayPenalty);
  } else {
    if (Array.isArray(character.armor.installedUpgrades)) {
      character.armor.installedUpgrades.forEach(u => {
        const r = u.rank || 1;
        if (u.id === "u_hardened") upgradeAcBonus += (r === 3 ? 3 : r === 2 ? 2 : 1);
        if (u.id === "u_reinforced") upgradeDtBonus += (r === 3 ? 4 : r === 2 ? 2 : 1);
        if (u.id === "u_light" && r >= 1) upgradeDtBonus -= 1;
      });
    }

    const armMatch = (FALLOUT_RULES_DATA.armors || []).find(a => a.id === character.armor.type);
    let ac = armMatch ? armMatch.ac : 10;
    let dt = armMatch ? armMatch.dt : 0;

    ac += upgradeAcBonus + perkAcBonus;
    const racialDtBonus = (character.info && character.info.race === "robot" && character.info.raceVariant === "robot_protectron") ? 1 : 0;
    dt += upgradeDtBonus + perkDtBonus + racialDtBonus;

    // Decay (every 2 levels of decay = -1 AC and -1 DT)
    const decay = parseInt(character.armor.decay, 10) || 0;
    const decayPenalty = Math.floor(decay / 2);
    ac = Math.max(0, ac - decayPenalty);
    dt = Math.max(0, dt - decayPenalty);

    character.vitals.ac = ac;
    character.vitals.dt = dt;
  }

  const acEl = document.getElementById("val-ac");
  const dtEl = document.getElementById("val-dt");
  if (acEl && (!acEl.dataset || !acEl.dataset.custom)) acEl.value = character.vitals.ac;
  if (dtEl && (!dtEl.dataset || !dtEl.dataset.custom)) dtEl.value = character.vitals.dt;
}

// Recalculate Skills with transparent formula (Base + Punti + Extra = Total)
function recalcSkills() {
  const luckBonus = Math.floor(getStatMod("luck") / 2);

  Object.keys(character.skills).forEach(skillKey => {
    const sk = character.skills[skillKey];
    const attrName = (sk.useAlt && sk.altAttr) ? sk.altAttr : sk.attr;
    const attrMod = getStatMod(attrName);
    const computedBase = attrMod + luckBonus;
    sk.baseMod = computedBase;

    const points = parseInt(sk.points, 10) || 0;
    const extra = parseInt(sk.extra, 10) || (sk.tag ? 2 : 0);
    const racialSkillBonus = (character.info && character.info.race === "ghoul" && character.info.raceVariant === "ghoul_many_roads") ? 2 : 0;
    
    // Bonus dalle Mod e Upgrade Pip-Boy installati
    let pipboySkillBonus = 0;
    if (character.pipboy && character.pipboy.owned && Array.isArray(character.pipboy.installedUpgrades)) {
      character.pipboy.installedUpgrades.forEach(u => {
        if (u.id === "pbu_lockpick_assist" && skillKey === "breach") pipboySkillBonus += 2;
        if (u.id === "pbu_hacking_module" && skillKey === "science") pipboySkillBonus += 2;
        if (u.id === "pbu_vault_sync" && (skillKey === "science" || skillKey === "medicine" || skillKey === "crafting")) pipboySkillBonus += 1;
        if (u.id === "pbu_medscanner" && (u.rank || 1) >= 3 && skillKey === "medicine") pipboySkillBonus += 2;
      });
    }

    const computedTotal = computedBase + points + extra + racialSkillBonus + pipboySkillBonus;
    sk.total = computedTotal;

    const baseEl = document.getElementById(`skill-base-${skillKey}`);
    const totEl = document.getElementById(`skill-total-${skillKey}`);

    if (baseEl && !baseEl.dataset.custom) baseEl.value = computedBase >= 0 ? `+${computedBase}` : `${computedBase}`;
    if (totEl && !totEl.dataset.custom) totEl.value = computedTotal >= 0 ? `+${computedTotal}` : `${computedTotal}`;
  });
}

// =============================================================================
// RENDERING FUNCTIONS
// =============================================================================

function renderAll() {
  renderHeroInfo();
  renderRacialBonuses();
  renderBackgroundSkillsPreview();
  renderBio();
  renderSpecial();
  renderSkills();
  renderVitals();
  renderBodyPaperdoll();
  renderArmor();
  renderPowerArmor();
  renderResistancesSection();
  renderWeapons();
  renderTraits();
  renderPerks();
  renderInventory();
  renderSurvivalPips();
  renderArmorDecay();
  renderPipboy();
  renderDashboardOverview();
  renderDashboardPerks();
}


// =============================================================================
// NUKA-COLA KARMA CAPS ENGINE v2.0
// Dynamically calculated based on Race, S.P.E.C.I.A.L. Luck, Traits, Perks & GM Mod.
// Interactive Nuka-Cola bottle caps: Red/Active <-> Gray/Spent
// =============================================================================

function getNukaCapSvgMarkup(isSpent, index) {
  const polyPoints = "46.8,2.1 53.2,2.1 56.3,8.0 61.1,3.3 67.1,5.2 68.4,11.7 74.4,8.6 79.6,12.2 78.9,18.8 85.5,17.7 89.4,22.6 86.8,28.8 93.4,29.6 95.7,35.4 91.4,40.5 97.5,43.3 98.0,49.6 92.4,53.2 97.4,57.6 96.0,63.7 89.6,65.5 93.1,71.2 89.9,76.7 83.2,76.5 84.9,83.0 80.3,87.3 73.9,85.1 73.6,91.8 67.9,94.5 62.5,90.6 60.3,96.9 54.0,97.8 50.0,92.5 46.0,97.8 39.7,96.9 37.5,90.6 32.1,94.5 26.4,91.8 26.1,85.1 19.7,87.3 15.1,83.0 16.8,76.5 10.1,76.7 6.9,71.2 10.4,65.5 4.0,63.7 2.6,57.6 7.6,53.2 2.0,49.6 2.5,43.3 8.6,40.5 4.3,35.4 6.6,29.6 13.2,28.7 10.6,22.6 14.5,17.7 21.1,18.8 20.4,12.2 25.6,8.6 31.6,11.7 32.9,5.2 38.9,3.3 43.7,8.0";
  const capId = "nuka_" + index;

  return `<svg viewBox="0 0 100 100" width="36" height="36" class="nuka-cap-svg">
  <defs>
    <radialGradient id="nukaRed_${capId}" cx="38%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#ff4d4d"/>
      <stop offset="40%" stop-color="#dc2626"/>
      <stop offset="80%" stop-color="#991b1b"/>
      <stop offset="100%" stop-color="#580e0e"/>
    </radialGradient>
    <linearGradient id="nukaMetal_${capId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="50%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
  </defs>
  <!-- Fluted Rim (21 Crimps) -->
  <polygon points="${polyPoints}" fill="url(#nukaMetal_${capId})" stroke="#334155" stroke-width="1.2" stroke-linejoin="round"/>
  <!-- Crimson Enamel Surface -->
  <circle cx="50" cy="50" r="40" fill="url(#nukaRed_${capId})" stroke="#fee2e2" stroke-width="0.6" stroke-opacity="0.8"/>
  <!-- Inner Rim Ridge -->
  <circle cx="50" cy="50" r="36.5" fill="none" stroke="#7f1d1d" stroke-width="1" stroke-dasharray="2.5, 2"/>
  <!-- Nuka Ribbon Wave -->
  <path d="M 18 52 C 32 38, 54 58, 82 46 C 68 56, 42 42, 18 52 Z" fill="#ffffff" opacity="0.95"/>
  <!-- Nuka Text -->
  <text x="50" y="41" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-style="italic" font-weight="900" font-size="16" fill="#ffffff" letter-spacing="-0.4">Nuka</text>
  <!-- COLA Text -->
  <text x="50" y="65" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-style="italic" font-weight="900" font-size="12" fill="#ffffff" letter-spacing="1.2">COLA</text>
  <!-- Gloss Reflection -->
  <ellipse cx="38" cy="26" rx="16" ry="6.5" fill="#ffffff" opacity="0.3" transform="rotate(-20 38 26)"/>
</svg>`;
}

function calculateMaxKarmaCaps() {
  let base = 1;
  const breakdown = ["Base: 1"];

  // 1. Race / Racial Traits
  const race = (character.info && character.info.race ? character.info.race : "human").toLowerCase();
  const activeRacial = (character.racialOptions && Array.isArray(character.racialOptions.activeIds)) ? character.racialOptions.activeIds : [];
  const hasResourceful = activeRacial.includes("human_resourceful") || (race === "human" && activeRacial.length === 0);
  if (hasResourceful) {
    base += 1;
    breakdown.push("Umano (Intraprendente): +1");
  }

  // 2. S.P.E.C.I.A.L. Fortuna (Luck)
  const luckScore = parseInt(character.special && character.special.luck ? character.special.luck : 5, 10) || 5;
  if (luckScore >= 10) {
    base += 2;
    breakdown.push(`Fortuna (${luckScore} = 10): +2`);
  } else if (luckScore >= 8) {
    base += 1;
    breakdown.push(`Fortuna (${luckScore} >= 8): +1`);
  }

  // 3. Talenti (Traits)
  if (Array.isArray(character.traits)) {
    character.traits.forEach(t => {
      const tId = (t.id || "").toLowerCase();
      const isWW = !!t.isWildWasteland;
      const rank = parseInt(t.rank, 10) || 1;
      if (tId === "gifted" || (t.name && t.name.toLowerCase().includes("portentoso"))) {
        const bonus = (isWW || rank >= 2) ? 2 : 1;
        base += bonus;
        breakdown.push(`Tratto Portentoso${isWW ? ' (WW)' : ''}: +${bonus}`);
      }
    });
  }

  // 4. Perks
  if (Array.isArray(character.perks)) {
    character.perks.forEach(p => {
      const pId = (p.id || "").toLowerCase();
      const pName = (p.name || "").toLowerCase();
      const r = parseInt(p.rank, 10) || 1;
      if (pId === "make_it_double" || pName.includes("make it double") || pName.includes("fallo doppio")) {
        base += r;
        breakdown.push(`Perk Fallo Doppio: +${r}`);
      }
      if (pId === "celebrity" || pName.includes("celebrità") || pName.includes("celebrity")) {
        if (p.assignedFollowerActive) {
          base -= 1;
          breakdown.push("Perk Celebrità (Compagno attivo): -1");
        }
      }
    });
  }

  // 5. Custom GM / Manual Mod
  const customMod = parseInt(character.info && character.info.karmaCaps && character.info.karmaCaps.customMod ? character.info.karmaCaps.customMod : 0, 10) || 0;
  if (customMod !== 0) {
    base += customMod;
    breakdown.push(`Modificatore Manuale/Master: ${customMod >= 0 ? '+' : ''}${customMod}`);
  }

  const finalMax = Math.max(0, base);
  return { max: finalMax, breakdown: breakdown.join(" | ") };
}

function renderKarmaCaps() {
  if (!character.info) character.info = {};
  if (!character.info.karmaCaps) {
    character.info.karmaCaps = { max: 1, current: 1, customMod: 0, spentArray: [false] };
  }

  const calc = calculateMaxKarmaCaps();
  const max = calc.max;
  const breakdown = calc.breakdown;
  character.info.karmaCaps.max = max;

  if (!Array.isArray(character.info.karmaCaps.spentArray)) {
    const prevCurrent = typeof character.info.karmaCaps.current === "number" ? character.info.karmaCaps.current : (character.info.karmaCaps.flipped ? 0 : max);
    const arr = [];
    for (let i = 0; i < max; i++) {
      arr.push(i >= prevCurrent);
    }
    character.info.karmaCaps.spentArray = arr;
  } else {
    while (character.info.karmaCaps.spentArray.length < max) {
      character.info.karmaCaps.spentArray.push(false);
    }
    if (character.info.karmaCaps.spentArray.length > max) {
      character.info.karmaCaps.spentArray = character.info.karmaCaps.spentArray.slice(0, max);
    }
  }

  const activeCount = character.info.karmaCaps.spentArray.filter(s => !s).length;
  character.info.karmaCaps.current = activeCount;
  character.info.karmaCaps.flipped = activeCount === 0;

  const valEl = document.getElementById("karma-caps-val");
  if (valEl) valEl.textContent = activeCount;

  const maxEl = document.getElementById("karma-caps-max");
  if (maxEl) maxEl.textContent = max;

  const badgeEl = document.getElementById("karma-status-badge");
  if (badgeEl) {
    if (activeCount === 0) {
      badgeEl.style.background = "#f1f5f9";
      badgeEl.style.color = "#64748b";
      badgeEl.style.borderColor = "#cbd5e1";
    } else {
      badgeEl.style.background = "#fee2e2";
      badgeEl.style.color = "#991b1b";
      badgeEl.style.borderColor = "#fca5a5";
    }
  }

  const breakdownEl = document.getElementById("karma-breakdown-text");
  if (breakdownEl) {
    breakdownEl.title = breakdown;
  }

  const flipBtn = document.getElementById("karma-flip-btn");
  if (flipBtn) {
    if (activeCount === 0) {
      flipBtn.textContent = "RIPRISTINA TUTTI";
      flipBtn.className = "btn btn-sm btn-danger";
    } else if (activeCount < max) {
      flipBtn.textContent = `RIPRISTINA (${max - activeCount} SPESI)`;
      flipBtn.className = "btn btn-sm btn-warning";
    } else {
      flipBtn.textContent = "TUTTI ATTIVI";
      flipBtn.className = "btn btn-sm";
    }
  }

  const container = document.getElementById("karma-caps-container");
  if (!container || typeof document.createElement !== "function") return;
  container.innerHTML = "";

  if (max === 0) {
    container.innerHTML = '<span style="font-size:12px; color:#94a3b8; font-style:italic;">Nessun Karma Cap disponibile</span>';
    return;
  }

  character.info.karmaCaps.spentArray.forEach((isSpent, idx) => {
    const capDiv = document.createElement("div");
    capDiv.className = `nuka-cap-item ${isSpent ? "spent" : "active"}`;
    if (typeof capDiv.setAttribute === "function") {
      capDiv.setAttribute("role", "button");
      capDiv.setAttribute("tabindex", "0");
    }
    capDiv.title = isSpent
      ? `Tappo Nuka-Cola #${idx + 1}: SPESO / GRIGIO (Clicca per riattivare)`
      : `Tappo Nuka-Cola #${idx + 1}: ATTIVO / ROSSO (Clicca per consumare)`;

    capDiv.innerHTML = getNukaCapSvgMarkup(isSpent, idx);

    if (typeof capDiv.addEventListener === "function") {
      capDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleKarmaCap(idx);
      });

      capDiv.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleKarmaCap(idx);
        }
      });
    }

    container.appendChild(capDiv);
  });
}

function toggleKarmaCap(index) {
  if (!character.info) character.info = {};
  if (!character.info.karmaCaps) {
    character.info.karmaCaps = { max: 1, current: 1, customMod: 0, spentArray: [false] };
  }
  const calc = calculateMaxKarmaCaps();
  const max = calc.max;
  if (!Array.isArray(character.info.karmaCaps.spentArray)) {
    character.info.karmaCaps.spentArray = new Array(max).fill(false);
  }
  if (index >= 0 && index < character.info.karmaCaps.spentArray.length) {
    character.info.karmaCaps.spentArray[index] = !character.info.karmaCaps.spentArray[index];
    renderKarmaCaps();
    saveCharacter();
  }
}

function adjustKarmaCapCustomMod(delta) {
  if (!character.info) character.info = {};
  if (!character.info.karmaCaps) {
    character.info.karmaCaps = { max: 1, current: 1, customMod: 0, spentArray: [false] };
  }
  const currentMod = parseInt(character.info.karmaCaps.customMod, 10) || 0;
  character.info.karmaCaps.customMod = currentMod + delta;
  updateDerivedValues();
  saveCharacter();
}

function renderHeroInfo() {
  const nameEl = document.getElementById("char-name");
  if (nameEl) nameEl.value = character.info.name || "";
  const nameHdr = document.getElementById("char-name-header");
  if (nameHdr) nameHdr.value = character.info.name || "";

  const playerEl = document.getElementById("char-player");
  if (playerEl) playerEl.value = character.info.player || "";
  const playerHdr = document.getElementById("char-player-header");
  if (playerHdr) playerHdr.value = character.info.player || "";

  const raceEl = document.getElementById("char-race");
  if (raceEl) raceEl.value = character.info.race || "human";

  const raceVarEl = document.getElementById("char-race-variant");
  if (raceVarEl) raceVarEl.value = character.info.raceVariant || "";

  const bgEl = document.getElementById("char-background");
  if (bgEl) bgEl.value = character.info.background || "vault_dweller";

  const lvlEl = document.getElementById("char-level");
  if (lvlEl) lvlEl.value = character.info.level || 1;
  const lvlCore = document.getElementById("char-level-core");
  if (lvlCore) lvlCore.value = character.info.level || 1;

  const xpEl = document.getElementById("char-xp");
  if (xpEl) xpEl.value = character.info.xp || 0;
  const xpHdr = document.getElementById("char-xp-header");
  if (xpHdr) xpHdr.value = character.info.xp || 0;

  renderKarmaCaps();

  renderPortrait();
}

function renderPortrait() {
  const container = document.getElementById("portrait-display");
  if (!container) return;
  if (character.portrait) {
    container.innerHTML = `<img src="${character.portrait}" alt="Ritratto Personaggio" class="portrait-img">`;
  } else {
    container.innerHTML = `
      <div class="portrait-placeholder">
        <div style="font-size:33px;">📷</div>
        <div style="font-size:11px; color:var(--text-dim); margin-top:4px;">SPAZIO FOTO<br>(Clicca per caricare o trascina)</div>
      </div>`;
  }
}

// Handle Photo Upload with HTML5 Canvas Compression to ensure localStorage quota is protected
function handlePortraitFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    alert("Seleziona un file immagine valido (JPG, PNG, WebP).");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      // Scale down image to max 350x350
      const maxDim = 350;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        } else {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      character.portrait = canvas.toDataURL("image/jpeg", 0.85);
      renderPortrait();
      saveCharacter();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// =============================================================================
// ANATOMICAL HUMAN PAPERDOLL (Stato & Condizione Arti)
// =============================================================================

function toggleLimb(limbKey) {
  if (!character.limbs) {
    character.limbs = { head: "healthy", torso: "healthy", armL: "healthy", armR: "healthy", legL: "healthy", legR: "healthy" };
  }

  // Check Adamantium Skeleton perk (Synth)
  if (typeof hasPerkOrTrait === "function" && (hasPerkOrTrait("adamantium_skeleton") || hasPerkOrTrait("scheletro d'adamantio") || hasPerkOrTrait("adamantium skeleton"))) {
    showToast("🛡️ <strong>Scheletro d'Adamantio (Perk Synth):</strong> Immunità totale a condizioni e menomazioni agli arti!", "info");
    return;
  }

  // Check Robot Robobrain all-terrain rollers (non tranciabili)
  const isRobot = (character.info.race || "").toLowerCase() === "robot";
  const raceVar = character.info.raceVariant || "";
  if (isRobot && raceVar === "robot_robobrain" && (limbKey === "legL" || limbKey === "legR")) {
    const current = character.limbs[limbKey] || "healthy";
    if (current === "crippled") {
      showToast("🧠 <strong>Robobrain:</strong> I Cingoli per Qualsiasi Terreno non possono essere recisi/tranciati!", "warning");
      character.limbs[limbKey] = "healthy";
      renderBodyPaperdoll();
      updateDerivedValues();
      saveCharacter();
      return;
    }
  }

  const current = character.limbs[limbKey] || "healthy";
  let next = "healthy";
  if (current === "healthy") next = "crippled";
  else if (current === "crippled") next = "severed";
  else next = "healthy";

  character.limbs[limbKey] = next;
  renderBodyPaperdoll();
  updateDerivedValues();
  saveCharacter();
}

function renderBodyPaperdoll() {
  if (!character.limbs) {
    character.limbs = { head: "healthy", torso: "healthy", armL: "healthy", armR: "healthy", legL: "healthy", legR: "healthy" };
  }

  const limbKeys = ["head", "torso", "armL", "armR", "legL", "legR"];
  const limbLabels = {
    head: "TESTA",
    torso: "TORSO",
    armL: "BRACCIO SX",
    armR: "BRACCIO DX",
    legL: "GAMBA SX",
    legR: "GAMBA DX"
  };

  const penalties = [];

  limbKeys.forEach(key => {
    const status = character.limbs[key] || "healthy";
    const pathEl = document.getElementById(`limb-${key}`);
    const btnEl = document.getElementById(`btn-limb-${key}`);

    if (pathEl) {
      pathEl.setAttribute("class", `limb-path limb-${status}`);
    }

    let statusText = "SANA";
    if (status === "crippled") statusText = "MENOMATA ⚠️";
    if (status === "severed") statusText = "RECISA 💀";

    if (btnEl) {
      btnEl.className = `limb-quick-btn status-${status}`;
      btnEl.textContent = `${limbLabels[key]}: ${statusText}`;
    }

    // Mirror to Core (Tab 1) Paperdoll
    const corePathEl = document.getElementById(`core-limb-${key}`);
    const coreBtnEl = document.getElementById(`core-btn-limb-${key}`);
    if (corePathEl) {
      corePathEl.setAttribute("class", `limb-path limb-${status}`);
    }
    if (coreBtnEl) {
      coreBtnEl.className = `limb-quick-btn status-${status}`;
      coreBtnEl.textContent = `${limbLabels[key]}: ${statusText}`;
    }

    // Accumulate penalties
    if (status === "crippled") {
      if (key === "head") penalties.push("🧠 Testa Menomata: -2 Percezione e Svantaggio a tutte le prove mentali.");
      if (key === "torso") penalties.push("🫁 Torso Menomato: Svantaggio a prove fisiche e SP max ridotti.");
      if (key === "armL") penalties.push("🦾 Braccio SX Menomato: Svantaggio ad attacchi con armi a due mani o disarmato.");
      if (key === "armR") penalties.push("🦾 Braccio DX Menomato: Svantaggio ad attacchi e disarmato da mano dominante.");
      if (key === "legL" || key === "legR") penalties.push("🦵 Gamba Menomata: Movimento dimezzato e AP massimi -2.");
    } else if (status === "severed") {
      if (key === "head") penalties.push("💀 Testa Recisa: Decapitazione / Danno Mortale Immediato!");
      if (key === "torso") penalties.push("💔 Torso Sventrato: Ferita Mortale / Emorragia Critica (1d6 danni per round).");
      if (key === "armL" || key === "armR") penalties.push(`🦾 ${limbLabels[key]} Reciso: Arto amputato permanente, impossibile impugnare oggetti con questa mano.`);
      if (key === "legL" || key === "legR") penalties.push(`🦵 ${limbLabels[key]} Recisa: Arto amputato permanente, movimento a terra (Strisciare / Sedia a rotelle / Protesi).`);
    }
  });

  // Perk & Razziali arti status badges
  if (typeof hasPerkOrTrait === "function" && (hasPerkOrTrait("adamantium_skeleton") || hasPerkOrTrait("scheletro d'adamantio") || hasPerkOrTrait("adamantium skeleton"))) {
    penalties.unshift("🛡️ <strong>Scheletro d'Adamantio (Perk Synth):</strong> Immunità totale a fratture e menomazioni arti! Danni HP da colpi mirati dimezzati (½).");
  }
  if ((character.info.race || "").toLowerCase() === "gen2_synth" && character.info.raceVariant === "synth_brittle") {
    penalties.push("⚠️ <strong>Variante Corpo Fragile:</strong> Gli attacchi mirati subiti infliggono 2 condizioni all'arto anziché una! (Vulnerabilità Elettricità)");
  }
  if ((character.info.race || "").toLowerCase() === "robot") {
    if (character.info.raceVariant === "robot_robobrain") {
      penalties.push("🧠 <strong>Sottotipo Robobrain:</strong> Attacchi mirati alla testa infliggono 2 condizioni all'arto. Cingoli per qualsiasi terreno non recidibili.");
    } else {
      penalties.push("⚙️ <strong>Razza Robot:</strong> Immune a shock da arti tranciati e a sanguinamento (riattaccabili con 3 rottami + 1 circuito).");
    }
  }

  const penaltySummaryEl = document.getElementById("limb-penalties-summary");
  const corePenaltySummaryEl = document.getElementById("core-limb-penalties");
  const summaryContent = (penalties.length === 0)
    ? "🟢 Nessuna menomazione: corpo in piena efficienza operativa."
    : penalties.map(p => `<div>${p}</div>`).join("");
  const borderColor = (penalties.length === 0) ? "var(--success)" : "var(--warning)";
  const textColor = (penalties.length === 0) ? "var(--text-bright)" : "var(--warning)";

  if (penaltySummaryEl) {
    penaltySummaryEl.innerHTML = summaryContent;
    penaltySummaryEl.style.borderColor = borderColor;
    penaltySummaryEl.style.color = textColor;
  }
  if (corePenaltySummaryEl) {
    corePenaltySummaryEl.innerHTML = summaryContent;
    corePenaltySummaryEl.style.borderColor = borderColor;
    corePenaltySummaryEl.style.color = textColor;
  }
}

// =============================================================================
// BACKGROUND TAG SKILLS PREVIEW & 1-CLICK APPLY
// =============================================================================

function renderBackgroundSkillsPreview() {
  const container = document.getElementById("bg-skills-preview");
  if (!container) return;

  const bgId = character.info.background || "vault_dweller";

  if (bgId === "custom") {
    if (!Array.isArray(character.info.customBackgroundSkills) || character.info.customBackgroundSkills.length !== 3) {
      character.info.customBackgroundSkills = ["guns", "sneak", "survival"];
    }

    const skillOptions = Object.keys(character.skills).map(k => {
      const sk = character.skills[k];
      return `<option value="${k}">${sk.name}</option>`;
    }).join("");

    const dropdownsHtml = character.info.customBackgroundSkills.map((selKey, sIdx) => {
      const opts = Object.keys(character.skills).map(k => {
        const sk = character.skills[k];
        const isSel = k === selKey ? "selected" : "";
        return `<option value="${k}" ${isSel}>${sk.name}</option>`;
      }).join("");

      return `
        <select class="input-field bg-custom-skill-select" onchange="onCustomBackgroundSkillChange(${sIdx}, this.value)" style="font-size:11px; padding:2px 4px; max-width:140px;">
          ${opts}
        </select>`;
    }).join(" ");

    container.innerHTML = `
      <div style="font-weight:bold; color:var(--text-bright); font-size:11px; width:100%; margin-bottom:2px;">
        ⚙️ Scegli le 3 Abilità Tag del tuo Background Personalizzato (+2 ciascuna):
      </div>
      <div style="display:flex; align-items:center; gap:4px; flex-wrap:wrap; width:100%;">
        ${dropdownsHtml}
        <button type="button" class="btn btn-sm btn-primary no-print" onclick="applyBackgroundTagSkills()" style="font-size:10px; padding:2px 6px;" title="Applica +2 Tag alle 3 abilità personalizzate scelte">
          ⚡ Applica 3 Tag (+2)
        </button>
      </div>
    `;
    return;
  }

  const bgData = (FALLOUT_RULES_DATA.backgrounds || []).find(b => b.id === bgId) || {
    name: "Background", skills: ["Sopravvivenza", "Armi da Fuoco", "Scienza"]
  };

  const skillChips = (bgData.skills || []).map(s => `<span class="bg-skill-tag-chip">${s}</span>`).join(" ");

  container.innerHTML = `
    <div style="font-weight:bold; color:var(--text-bright); font-size:11px;">
      Bonus Tag Background (+2 a 3 Abilità):
    </div>
    <div style="display:flex; align-items:center; gap:4px; flex-wrap:wrap;">
      ${skillChips}
      <button type="button" class="btn btn-sm btn-primary no-print" onclick="applyBackgroundTagSkills()" style="font-size:10px; padding:2px 6px;" title="Applica automaticamente +2 Tag alle 3 abilità del background">
        ⚡ Applica Tag (+2)
      </button>
    </div>
  `;
}

function onCustomBackgroundSkillChange(slotIdx, skillKey) {
  if (!Array.isArray(character.info.customBackgroundSkills)) {
    character.info.customBackgroundSkills = ["guns", "sneak", "survival"];
  }
  character.info.customBackgroundSkills[slotIdx] = skillKey;
  renderBackgroundSkillsPreview();
  saveCharacter();
}

function applyBackgroundTagSkills() {
  if (character.info && character.info.bgSkillsApplied) {
    alert("Le abilità di Background sono già state assegnate a questo personaggio! Possono essere aggiunte una sola volta per personaggio.");
    return;
  }
  const bgId = character.info.background || "vault_dweller";

  if (bgId === "custom") {
    const customKeys = character.info.customBackgroundSkills || ["guns", "sneak", "survival"];
    let applied = 0;
    customKeys.forEach(sKey => {
      if (character.skills[sKey]) {
        character.skills[sKey].tag = true;
        character.skills[sKey].extra = 2;
        applied++;
      }
    });
    updateDerivedValues();
    renderSkills();
    saveCharacter();
    alert(`⚡ Applicato bonus Tag (+2) a ${applied} abilità del Background Personalizzato!`);
    return;
  }

  const bgData = (FALLOUT_RULES_DATA.backgrounds || []).find(b => b.id === bgId);
  if (!bgData || !bgData.skills) return;

  const nameToKey = {
    "commerciare": "barter", "barter": "barter", "baratto": "barter",
    "violare": "breach", "breach": "breach", "scasso": "breach",
    "costruire": "crafting", "crafting": "crafting", "riparazione": "crafting",
    "armi ad energia": "energyWeapons", "energy weapons": "energyWeapons", "energia": "energyWeapons", "armi a energia": "energyWeapons",
    "esplosivi": "explosives", "explosives": "explosives",
    "armi da fuoco": "guns", "pistole": "guns", "guns": "guns",
    "intimidire": "intimidation", "intimidation": "intimidation",
    "medicina": "medicine", "medicine": "medicine",
    "corpo a corpo": "meleeWeapons", "melee": "meleeWeapons", "melee weapons": "meleeWeapons",
    "sneak": "sneak", "furtivita": "sneak", "furtività": "sneak",
    "scienza": "science", "science": "science",
    "oratoria": "speech", "speech": "speech", "eloquenza": "speech",
    "sopravvivenza": "survival", "survival": "survival",
    "disarmato": "unarmed", "unarmed": "unarmed"
  };

  let appliedCount = 0;
  bgData.skills.forEach(skillName => {
    const cleanName = skillName.toLowerCase().trim();
    const sKey = nameToKey[cleanName] || Object.keys(character.skills).find(k => character.skills[k].name.toLowerCase().includes(cleanName));
    if (sKey && character.skills[sKey]) {
      character.skills[sKey].tag = true;
      character.skills[sKey].extra = 2;
      appliedCount++;
    }
  });

  updateDerivedValues();
  renderSkills();
  saveCharacter();
  alert(`⚡ Applicato bonus Tag (+2) a ${appliedCount} abilità del background (${bgData.name})!`);
}

// =============================================================================
// SURVIVAL PIPS ENGINE (Fame, Disidratazione, Stanchezza, Fatica, Radiazioni)
// =============================================================================

function getSurvivalMaluses() {
  const v = (character && character.vitals) ? character.vitals : {};
  const hunger = parseInt(v.hunger, 10) || 0;
  const dehydration = parseInt(v.dehydration, 10) || 0;
  const exhaustion = parseInt(v.exhaustion, 10) || 0;
  const fatigue = parseInt(v.fatigue, 10) || 0;
  const rads = parseInt(v.rads, 10) || 0;

  // Arcane Arcade Fallout TTRPG 2.1 (pp. 122-124, 133-135):
  // Fame, Disidratazione, Stanchezza, Fatica e Radiazioni infliggono ciascuno -1 cumulativo a tutti i tiri d20
  const toHitMalus = hunger + dehydration + exhaustion + fatigue + rads;

  // Rigenerazione naturale: disidratazione blocca del tutto la guarigione, fame riduce di 1 ogni 2 livelli
  let regenStr = "0";
  let regenMalusVal = 0;
  if (dehydration > 0) {
    regenStr = "0 (Disidratato)";
    regenMalusVal = 999;
  } else if (hunger > 0) {
    regenMalusVal = Math.ceil(hunger / 2);
    regenStr = `-${regenMalusVal}`;
  }

  // Danno mischia/disarmato: debolezza fisica da stanchezza/fame severa (-1 ogni 3 livelli combinati)
  const dmgMalus = Math.floor((hunger + exhaustion + fatigue) / 3);

  // Radiazioni max HP/SP
  const radDice = rads > 0 ? `${rads}d4` : "0";

  return {
    hunger,
    dehydration,
    exhaustion,
    fatigue,
    rads,
    toHitMalus,
    regenStr,
    regenMalusVal,
    dmgMalus,
    radDice,
    hasMalus: toHitMalus > 0 || rads > 0
  };
}
window.getSurvivalMaluses = getSurvivalMaluses;

function renderSurvivalPips() {
  const tracks = [
    { id: "hunger-pips", key: "hunger", max: 10, colorClass: "pip-hunger", label: "Fame" },
    { id: "dehydration-pips", key: "dehydration", max: 10, colorClass: "pip-dehydration", label: "Disidratazione" },
    { id: "exhaustion-pips", key: "exhaustion", max: 10, colorClass: "pip-exhaustion", label: "Stanchezza" },
    { id: "fatigue-pips", key: "fatigue", max: 9, colorClass: "pip-fatigue", label: "Fatica" },
    { id: "rad-pips", key: "rads", max: 10, colorClass: "pip-rads", label: "Radiazioni" }
  ];

  tracks.forEach(tr => {
    const container = document.getElementById(tr.id);
    if (!container) return;

    const currentVal = parseInt(character.vitals[tr.key], 10) || 0;
    let pipsHtml = "";

    for (let i = 1; i <= tr.max; i++) {
      const isFilled = i <= currentVal;
      pipsHtml += `
        <div class="pip-box ${tr.colorClass} ${isFilled ? "filled" : ""}" onclick="setSurvivalLevel('${tr.key}', ${i})" title="${tr.label} Livello ${i}">
          ${i}
        </div>`;
    }

    container.innerHTML = pipsHtml;
  });

  // Render Visual Malus Summary Banner
  const surv = getSurvivalMaluses();
  const summaryEl = document.getElementById("survival-malus-summary");
  if (summaryEl) {
    if (surv.hasMalus) {
      summaryEl.innerHTML = `
        <div style="font-size:10.5px; font-weight:800; color:var(--text-bright); width:100%; text-transform:uppercase; letter-spacing:0.5px;">
          ⚠ Malus Sopravvivenza Attivi:
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:5px; width:100%;">
          <span class="survival-malus-chip malus-chip-danger" title="Penalità cumulativa a tutti i tiri per colpire e test d20: -1 per ogni livello di Fame, Sete, Stanchezza, Fatica, Radiazioni">
            🎯 -${surv.toHitMalus} Hit
          </span>
          <span class="survival-malus-chip malus-chip-warning" title="Penalità al Tasso di Guarigione e recupero naturale durante il riposo">
            🩸 ${surv.regenStr} Regen
          </span>
          ${surv.dmgMalus > 0 ? `
            <span class="survival-malus-chip malus-chip-warning" title="Penalità al danno per sfinimento fisico">
              💥 -${surv.dmgMalus} Danno
            </span>` : ""
          }
          ${surv.rads > 0 ? `
            <span class="survival-malus-chip malus-chip-rads" title="Danno permanente non curabile a HP/SP massimi: tira ${surv.radDice}">
              ☢️ ${surv.radDice} Rads HP
            </span>` : ""
          }
        </div>
      `;
    } else {
      summaryEl.innerHTML = `
        <span class="survival-malus-chip malus-chip-ok" style="width:100%; justify-content:center;">
          ✓ Nessun Malus Attivo [Condizioni Ottimali]
        </span>
      `;
    }
  }

  // Aggiorna controlli e stato del pannello Radiazioni (Pag. 124)
  const radInfo = calculateRadiationDC();
  const radDcBadge = document.getElementById("radiation-dc-badge");
  if (radDcBadge) {
    radDcBadge.textContent = `CD ATTUALE: ${radInfo.currentDc}`;
    radDcBadge.title = `Formula: 12 - Mod. END (${radInfo.endMod >= 0 ? '+' : ''}${radInfo.endMod}) = ${12 - radInfo.endMod}${radInfo.reductions > 0 ? ' - ' + radInfo.reductions + ' (Equip/Perk)' : ''}${radInfo.successBonus > 0 ? ' + ' + radInfo.successBonus + ' (Successi Irradiamento)' : ''}`;
  }

  const radDcExpl = document.getElementById("radiation-dc-explanation");
  if (radDcExpl) {
    radDcExpl.innerHTML = `Formula: <strong>12 - Modificatore Costituzione (${radInfo.endMod >= 0 ? '+' : ''}${radInfo.endMod})</strong> = Base <strong>${radInfo.baseDc}</strong>${radInfo.successBonus > 0 ? ` + <strong>${radInfo.successBonus}</strong> da successi accumulati` : ''}. CD Attuale: <strong style="color:var(--accent-amber);">${radInfo.currentDc}</strong>.`;
  }

  const radAlert = document.getElementById("radiation-critical-alert");
  if (radAlert) {
    const rads = parseInt(character.vitals.rads, 10) || 0;
    if (rads >= 10) {
      radAlert.style.display = "block";
      radAlert.innerHTML = `
        <div style="background:#fee2e2; border:1px solid #ef4444; color:#991b1b; padding:8px; border-radius:4px; font-size:11px; font-weight:800;">
          💀 RADIAZIONI LETALI (10/10 RADS): SEI MORTO!
          <div style="font-size:10.5px; font-weight:normal; margin-top:2px; margin-bottom:4px;">
            Regola Ufficiale (Pag. 124): Tira una prova di Fortuna (CD 20). Con un successo rinasci come Ghoul cosciente (1 HP); con meno di 5 diventi un Ghoul Ferale ostile.
          </div>
          <button type="button" class="btn btn-xs btn-danger" onclick="rollGhoulTransformationCheck()" style="font-size:11px; font-weight:800; width:100%;">
            🎲 Effettua Prova Rinascita Ghoul (Fortuna CD 20)
          </button>
        </div>
      `;
    } else {
      radAlert.style.display = "none";
    }
  }
}

function setSurvivalLevel(key, level) {
  const current = parseInt(character.vitals[key], 10) || 0;
  // If clicking on the currently selected level, toggle it off to level - 1
  if (current === level) {
    character.vitals[key] = Math.max(0, level - 1);
  } else {
    character.vitals[key] = level;
  }
  renderSurvivalPips();
  updateDerivedValues();
  renderWeapons();
  saveCharacter();
}

function calculateRadiationDC() {
  const endScore = parseInt(character.special && character.special.endurance, 10) || 5;
  let endMod = endScore - 5;
  if (character.specialMods && character.specialMods.endurance !== undefined && character.specialMods.endurance !== "") {
    const parsed = parseModInt(character.specialMods.endurance);
    if (!isNaN(parsed)) endMod = parsed;
  }
  let baseDc = 12 - endMod;

  let reductions = 0;
  if (Array.isArray(character.perks)) {
    if (character.perks.some(p => (p.name || "").toLowerCase().includes("rad resistance") || (p.name || "").toLowerCase().includes("resistenza alle radiazioni"))) {
      reductions += 3;
    }
  }

  const equippedArmor = character.equippedArmor || {};
  if (equippedArmor.name && equippedArmor.name.toLowerCase().includes("hazmat")) {
    reductions += 10;
  }
  if (equippedArmor.name && equippedArmor.name.toLowerCase().includes("gas mask")) {
    reductions += 2;
  }

  baseDc = Math.max(1, baseDc - reductions);
  const successBonus = parseInt(character.vitals && character.vitals.radDcSuccessBonus, 10) || 0;
  const currentDc = Math.max(1, baseDc + successBonus);

  return {
    baseDc,
    reductions,
    successBonus,
    currentDc,
    endMod
  };
}
window.calculateRadiationDC = calculateRadiationDC;

function rollRadiationCheck() {
  const radInfo = calculateRadiationDC();
  const d20 = Math.floor(Math.random() * 20) + 1;
  const isSuccess = d20 >= radInfo.currentDc;

  if (isSuccess) {
    character.vitals.radDcSuccessBonus = (character.vitals.radDcSuccessBonus || 0) + 2;
    renderSurvivalPips();
    saveCharacter();
    showToast(`☢️ <strong>Test Radiazioni SUPERATO!</strong> (Tiro: ${d20} vs CD ${radInfo.currentDc})<br>Hai resistito! La tua CD Radiazioni aumenta di <strong>+2</strong> (Nuova CD: ${radInfo.currentDc + 2}) fino a che non rimuovi tutti i Rads.`, "success");
  } else {
    const radDmg = Math.floor(Math.random() * 4) + 1;
    character.vitals.rads = Math.min(10, (character.vitals.rads || 0) + 1);
    character.vitals.permanentRadDamage = (character.vitals.permanentRadDamage || 0) + radDmg;
    renderSurvivalPips();
    updateDerivedValues();
    saveCharacter();
    showToast(`☢️ <strong>Test Radiazioni FALLITO!</strong> (Tiro: ${d20} vs CD ${radInfo.currentDc})<br>Guadagni <strong>+1 Livello di Radiazioni</strong> (Livello ${character.vitals.rads}/10).<br>Subisci <strong>${radDmg} danni permanenti non curabili</strong> a HP e SP!`, "danger");
  }
}
window.rollRadiationCheck = rollRadiationCheck;

function toggleRadiationSeverityGuide() {
  const el = document.getElementById("radiation-severity-guide");
  if (!el) return;
  el.style.display = el.style.display === "none" ? "block" : "none";
}
window.toggleRadiationSeverityGuide = toggleRadiationSeverityGuide;

function cleanseRadiationDoses() {
  character.vitals.rads = 0;
  character.vitals.radDcSuccessBonus = 0;
  character.vitals.permanentRadDamage = 0;
  renderSurvivalPips();
  updateDerivedValues();
  saveCharacter();
  showToast(`💊 <strong>Decontaminazione Eseguita!</strong><br>Tutti i livelli di Radiazioni sono stati azzerati, i danni permanenti rimossi e la CD Radiazioni è tornata al valore base.`, "success");
}
window.cleanseRadiationDoses = cleanseRadiationDoses;

function rollGhoulTransformationCheck() {
  const luckScore = parseInt(character.special && character.special.luck, 10) || 5;
  const luckMod = (typeof getStatMod === "function") ? getStatMod("luck") : (luckScore - 5);
  const d20 = Math.floor(Math.random() * 20) + 1;
  const total = d20 + luckMod;

  if (total >= 20) {
    character.info.race = "Ghoul";
    character.vitals.rads = 0;
    character.vitals.currentHp = 1;
    character.vitals.permanentRadDamage = 0;
    renderSurvivalPips();
    renderHeroInfo();
    updateDerivedValues();
    saveCharacter();
    alert(`🎉 INCREDIBILE! (Tiro ${d20} + Fortuna ${luckMod} = ${total} vs CD 20)\n\nSei sopravvissuto alla dose letale di radiazioni e sei rinato come GHOUL con 1 Punto Ferita!\nLa tua razza è stata aggiornata a Ghoul.`);
  } else if (total < 5) {
    alert(`💀 DESTINO TRAGICO (Tiro ${d20} + Fortuna ${luckMod} = ${total} < 5)\n\nLa mente del tuo personaggio soccombe alle radiazioni letali: sei rinato come GHOUL FERALE!\nIl tuo personaggio è ora ostile e il controllo passa al Game Master.`);
  } else {
    alert(`☠️ MORTE DEFINITIVA (Tiro ${d20} + Fortuna ${luckMod} = ${total} vs CD 20)\n\nIl tuo corpo non ha retto la contaminazione atomica. Il personaggio è deceduto.`);
  }
}
window.rollGhoulTransformationCheck = rollGhoulTransformationCheck;

// =============================================================================
// RACIAL BONUSES & SYNC
// =============================================================================

const RACE_VARIANTS_MAP = {
  human: [
    {
      id: "standard",
      name: "Standard (Tenacia)",
      nameEN: "Standard (Tenacity)",
      descIT: "Nei tiri salvezza contro la morte (death saves), muori al 4° fallimento anziché al 3°.",
      descEN: "When you roll death saves, you die when you fail your fourth death save instead of your third.",
      effect: "Nei tiri salvezza contro la morte (death saves), muori al 4° fallimento anziché al 3°.",
      effectEN: "When you roll death saves, you die when you fail your fourth death save instead of your third."
    },
    {
      id: "human_resourceful",
      name: "Variante: Intraprendente (Resourceful)",
      nameEN: "Variant: Resourceful",
      descIT: "Ottieni 1 Karma Cap addizionale utilizzabile in ogni sessione di gioco.",
      descEN: "You gain one extra Karma Cap that you can use each game.",
      effect: "Ottieni 1 Karma Cap extra utilizzabile in ogni sessione.",
      effectEN: "You gain one extra Karma Cap that you can use each game."
    },
    {
      id: "human_unexposed",
      name: "Variante: Non Esposto (Unexposed)",
      nameEN: "Variant: Unexposed",
      descIT: "Svantaggio a tutti i tiri salvezza e prove contro Radiazioni e Dipendenze (tipico di chi è cresciuto al sicuro in un Vault).",
      descEN: "You have disadvantage on all Radiation and Addiction checks.",
      effect: "Svantaggio a tutti i tiri per resistere a Radiazioni e Dipendenze.",
      effectEN: "You have disadvantage on all Radiation and Addiction checks."
    },
    {
      id: "human_gen3_secret",
      name: "Variante: Synth Gen-3 Segreto (Gen 3 Synth)",
      nameEN: "Variant: Gen 3 Synth",
      descIT: "Nessun bonus iniziale; sviluppo psicologico o narrativo con il GM. In alternativa alla creazione tira un d20: con un 20 sei segretamente un Synth Gen-3 dell'Istituto.",
      descEN: "This variant option provides no abilities or statistical change. However it can provide a psychological or narrative one. Work with your GM on how this potentiality could affect your character. Alternatively, when creating your human character; roll a d20. On a 20, your character is secretly a Gen 3 Synth.",
      effect: "Roll d20: con un 20 sei segretamente un Synth Gen-3 dell'Istituto.",
      effectEN: "Roll d20: On a 20, your character is secretly a Gen 3 Synth."
    }
  ],
  ghoul: [
    {
      id: "standard",
      name: "Standard (Evoluzione & Anatomia Resiliente)",
      nameEN: "Standard (Evolution & Resilient Anatomy)",
      descIT: "Immunità a radiazioni e livelli di radiazione (nessun effetto da cibo/acqua contaminati). Resistenza ai veleni. SP da cibo/farmaci e cure stimpak dimezzate. Danni da sanguinamento dimezzati.",
      descEN: "You cannot gain levels of radiation and you are immune to radiation damage. Additionally, you gain no Irradiated levels from consuming food or water. Resilient Anatomy: resistant to poison damage; food/chem SP and stimpak HP halved; bleed damage halved.",
      effect: "Immune a radiazioni, resistenza ai veleni, cure stimpak dimezzate.",
      effectEN: "Immune to radiation, poison resistance, stimpaks halved."
    },
    {
      id: "ghoul_old_bones",
      name: "Variante: Ossa Vecchie / Ghoul Centenario (Old Bones)",
      nameEN: "Variant: Old Bones",
      descIT: "Sei immune ai danni da veleno e ottieni automaticamente il perk 'Cucito Insieme (Stitched Together)'.",
      descEN: "You are immune to poison damage and you gain the Stitched Together perk.",
      effect: "Immunità ai danni da veleno e ottieni il perk Cucito Insieme (Stitched Together).",
      effectEN: "You are immune to poison damage and you gain the Stitched Together perk.",
      autoPerks: ["stitched_together"]
    },
    {
      id: "ghoul_many_roads",
      name: "Variante: Molte Strade Percorse (Many Roads Walked)",
      nameEN: "Variant: Many Roads Walked",
      descIT: "I lunghi decenni trascorsi nella Zona ti hanno insegnato molto: ottieni un bonus di +2 a tutte le abilità e ricevi 1 perk extra al 1° Livello.",
      descEN: "You gain a +2 in all skills and you gain an extra perk at 1st Level.",
      effect: "+2 a tutte le abilità e 1 perk extra al 1° livello.",
      effectEN: "+2 in all skills and an extra perk at 1st Level."
    },
    {
      id: "ghoul_half_life",
      name: "Variante: Mezzavita (Half Life)",
      nameEN: "Variant: Half Life",
      descIT: "La tua mente vacilla ogni giorno: al 15° Livello cedi alla ghoulificazione, perdi il controllo della mente e il tuo personaggio passa sotto il controllo del GM.",
      descEN: "Your mind slips each day, ghoulification has taken an immense toll on you and you feel yourself slowly becoming feral. When you reach Level 15, you are fully consumed by ghoulification, your mind is no longer your own, and your character is controlled by the GM.",
      effect: "Al 15° livello effettui un tiro salvezza o perdi il controllo diventando un ghoul feroce.",
      effectEN: "At Level 15, fully consumed by ghoulification, controlled by GM."
    }
  ],
  gen2_synth: [
    {
      id: "standard",
      name: "Standard (Corpo Inorganico)",
      nameEN: "Standard (Inorganic Body)",
      descIT: "Immunità a radiazioni e veleno. Nessun effetto da farmaci, cibi o bevande. Nessun bisogno biologico di respirare, mangiare, bere o dormire.",
      descEN: "You are immune to radiation and poison. You gain no effects from Chems, Drinks or Food. Additionally you have no need to breathe, sleep, eat, or drink.",
      effect: "Immune a radiazioni e veleno. Nessun bisogno di respirare, mangiare o dormire.",
      effectEN: "Immune to radiation and poison. No need to breathe, sleep, eat, or drink."
    },
    {
      id: "synth_brittle",
      name: "Variante: Corpo Fragile (Brittle Body)",
      nameEN: "Variant: Brittle Body",
      descIT: "Gli attacchi mirati subiti infliggono due condizioni all'arto anziché una. Vulnerabilità ai danni da elettricità.",
      descEN: "Whenever a creature makes a targeted attack against you, you gain two limb conditions instead of one. Additionally you are vulnerable to electricity damage.",
      effect: "Attacchi mirati infliggono 2 condizioni all'arto. Vulnerabilità all'elettricità.",
      effectEN: "Targeted attacks inflict 2 limb conditions. Vulnerable to electricity damage."
    },
    {
      id: "synth_hardware",
      name: "Variante: Aggiornamenti Hardware e Software (Software and Hardware Upgrades)",
      nameEN: "Variant: Software and Hardware Upgrades",
      descIT: "Quando acquisisci un perk, sei considerato a tutti gli effetti un Robot per soddisfare i requisiti dei perk.",
      descEN: "Whenever you gain a perk, you are considered a Robot for perk requirements.",
      effect: "Considerato come Robot per i requisiti e l'installazione dei perk.",
      effectEN: "Whenever you gain a perk, you are considered a Robot for perk requirements."
    },
    {
      id: "synth_algorithms",
      name: "Variante: Algoritmi IA (AI Algorithms)",
      nameEN: "Variant: Artificial Intelligence Algorithms",
      descIT: "Ogni volta che ottieni punti abilità (al passaggio di livello), ne ricevi 1 addizionale.",
      descEN: "Whenever you gain skill points, you gain 1 more.",
      effect: "Quando ottieni Punti Abilità al passaggio di livello, ne ricevi 1 addizionale.",
      effectEN: "Whenever you gain skill points, you gain 1 more."
    }
  ],
  robot: [
    {
      id: "robot_handy",
      name: "Sottotipo: Mister Handy (Handy)",
      nameEN: "Subtype: Handy (Mister Handy)",
      descIT: "Propulsore a getto (Jet Engine): vola a mezz'aria, immune a trappole al suolo. 3 braccia/occhi montati sul nucleo; non ha testa, inguine o gambe bersagliabili (propulsore a getto bersagliabile a +2 AP). Richiede 1 gallone di carburante o 6 rottami d'olio ogni 7 giorni (o nucleo di fusione per 30 gg). 3 attrezzi/armi integrati a scelta (Sega Meccanica, Cesoie, Trapano, Pinza, Cannello).",
      descEN: "Jet Engine: hovers, ignores floor traps. Round core with 3 arms/eyes; no head, groin, legs (jet engine targetable at +2 AP). Requires fuel weekly. 3 integrated tools/weapons (Buzz Saw, Clippers, Drill, Gripper, Torch).",
      effect: "Propulsore a getto (vola a mezz'aria, immune a trappole), 3 braccia/attrezzi integrati. Richiede carburante ogni 7 giorni.",
      effectEN: "Jet Engine (hovers, ignores floor traps), 3 arms/tools. Requires fuel weekly."
    },
    {
      id: "robot_protectron",
      name: "Sottotipo: Protectron",
      nameEN: "Subtype: Protectron",
      descIT: "Corazzatura Rinforzata: la tua DT aumenta di 1 anche senza armatura. Lento: massimo 6 AP spendibili in movimento per turno. Arma integrata nel braccio a scelta (Taser, Laser, Defibrillatore, Cryo Spray, Pistola Chiodatrice).",
      descEN: "Reinforced Plating: Your DT increases by 1 even if you aren't wearing armor. Slow: Can only spend a maximum of 6 AP on movement during your turns. Protect and Serve: Integrated arm weapon (Taser, Laser, Defibrillator, Cryo Spray, Nail Gun).",
      effect: "+1 DT naturale anche senza armatura. Massimo 6 AP spendibili in movimento per turno. Arma integrata.",
      effectEN: "+1 DT even without armor. Max 6 AP movement per turn. Integrated arm weapon."
    },
    {
      id: "robot_robobrain",
      name: "Sottotipo: Robobrain",
      nameEN: "Subtype: Robobrain",
      descIT: "Cingoli per Qualsiasi Terreno: nessun costo AP extra in terreno difficile. Neurotrasmettitori: vulnerabilità all'elettricità; attacchi mirati alla testa infliggono 2 condizioni all'arto.",
      descEN: "All Terrain Rollers: Do not have to spend extra AP to move through difficult terrain. NeuroTransmitters: Vulnerable to electricity damage; targeted attacks to head inflict two conditions.",
      effect: "Cingoli all-terrain (nessun costo extra in terreno difficile). Vulnerabilità all'elettricità. Attacchi alla testa infliggono 2 condizioni.",
      effectEN: "All-terrain rollers (ignore difficult terrain). Vulnerable to electricity. Head hits inflict 2 conditions."
    }
  ],
  super_mutant: [
    {
      id: "standard",
      name: "Standard (Forza Superiore)",
      nameEN: "Standard (Superior Strength)",
      descIT: "Forza Superiore: il tuo punteggio di Forza aumenta di 1 (minimo 6) e Carico +40. Fabbisogno cibo/acqua raddoppiato (Sforzo Massiccio). Decadimento armi/armature +1 (Ingombrante/Goffo). Non può usare armature atomiche convenzionali.",
      descEN: "Superior Strength: Strength increases by 1 and cannot be lower than 6. Carry Load increased by 40. Mass Exertion: daily food and water doubled. Bulky: weapons and armor gain 1 additional level of decay.",
      effect: "La Forza aumenta di 1 (minimo 6) e Carico +40. Fabbisogno cibo/acqua raddoppiato. Usura +1.",
      effectEN: "Strength increases by 1 (min 6), Carry Load +40. Daily food/water doubled. Decay +1."
    },
    {
      id: "sm_flawed",
      name: "Variante: Ceppo Difettoso (Defective Strain)",
      nameEN: "Variant: Defective Strain",
      descIT: "Forza e Costituzione (Endurance) aumentano entrambe di +2 e Carico +40. Tuttavia, l'Intelligenza è ridotta di 2 e non può superare 3. Sostituisce Forza Superiore.",
      descEN: "Strength and Endurance ability scores both increase by 2 and your Carry Load is increased by 40. However, your Intelligence ability score is reduced by 2 and cannot be raised higher than a 3. Replaces Superior Strength trait.",
      effect: "+2 FOR e +2 END, +40 Carico extra, ma INT ridotta di 2 (massimo 3). Sostituisce Forza Superiore.",
      effectEN: "+2 STR and +2 END, +40 Carry Load, INT reduced by 2 (max 3). Replaces Superior Strength."
    },
    {
      id: "sm_nightkin",
      name: "Variante: Nightkin / Ombra (Nightkin)",
      nameEN: "Variant: Nightkin",
      descIT: "La tua Forza aumenta di 1 (minimo 6) e Carico +40. Campo Stealth: spendi 3 AP per diventare invisibile per 1 minuto (usi successivi nella stessa giornata riducono temporaneamente PER di 1 per 24h, min 1).",
      descEN: "Strength score increases by 1 and cannot be lower than 6. Additionally your Carry Load is increased by 40. Stealth Field: spend 3 AP to turn invisible for 1 minute. Each use after first per day reduces Perception by 1 for 24h (min 1).",
      effect: "+1 FOR (min 6), +40 Carico. Campo Stealth: spendi 3 AP per diventare invisibile per 1 minuto (usi successivi riducono PER).",
      effectEN: "+1 STR (min 6), +40 Carry Load. Stealth Field: spend 3 AP for 1 min invisibility."
    }
  ]
};

const RACIAL_PAGE26_TRAIT_MAP = {
  human: "fast_metabolism",
  ghoul: "activated_actinides",
  gen2_synth: "dense_circuitry",
  robot: "cheaper_parts",
  super_mutant: "onerous_regeneration"
};

// Global language toggle state: 'IT' (Italian translation) or 'EN' (verbatim rulebook text)
window.racialLanguageMode = window.racialLanguageMode || "IT";

function toggleRacialLanguageMode() {
  window.racialLanguageMode = (window.racialLanguageMode === "EN") ? "IT" : "EN";
  renderRacialBonuses();
}

function syncRacialPerksAndBonuses(previousVariantId) {
  if (!character.perks) character.perks = [];
  const raceId = character.info.race || "human";
  const variantId = character.info.raceVariant || "standard";
  const variants = RACE_VARIANTS_MAP[raceId] || [];
  const activeVar = variants.find(v => v.id === variantId) || variants[0];

  const neededPerkIds = (activeVar && activeVar.autoPerks) || [];

  // Remove any previously auto-granted racial perk that is no longer granted by the new race/variant
  character.perks = character.perks.filter(p => {
    if (!p.isRacialAuto) return true;
    return neededPerkIds.includes(p.id);
  });

  // Add newly needed auto perks if not already present
  neededPerkIds.forEach(pId => {
    const alreadyHas = character.perks.some(p => p.id === pId);
    if (!alreadyHas) {
      const pDef = (FALLOUT_RULES_DATA.perks || []).find(p => p.id === pId) || {
        id: pId,
        name: pId === "stitched_together" ? "Cucito Insieme (Stitched Together)" : pId,
        nameEN: "Stitched Together",
        category: "Razziale: Ghoul",
        req: "Ghoul, Variante: Ossa Vecchie (Old Bones)",
        ranks: ["Il tuo corpo ha visto il peggio che la Zona Contaminata possa offrire. Se mai perdi uno dei tuoi arti (eccetto la testa), puoi spendere 5 minuti per riattaccarlo purché tu possieda un kit di pronto soccorso e l'arto tranciato. Inoltre, puoi spendere 1 minuto per recuperare un numero di punti ferita pari al tuo tasso di guarigione (Healing Rate). Una volta curato in questo modo, non puoi farlo di nuovo finché non riposi per almeno 6 ore."],
        ranksEN: ["Your body has seen the worst the wasteland has to offer. If you ever lose any of your limbs, besides your head, you can spend 5 minutes reattaching the limb so long as you have a first aid kit and you still have the limb you lost. Additionally, you can spend 1 minute to heal a number of hit points equal to your healing rate. Once you heal in this way, you cannot do it again until you rest for at least 6 hours."],
        effect: "Riattacchi arti tranciati (tranne la testa) in 5 min con un kit di pronto soccorso. Recuperi HP pari all'Healing Rate in 1 min (1 volta per riposo di 6 ore).",
        effectEN: "Reattach severed limbs in 5 min with first aid kit. Heal HP equal to healing rate in 1 min (once per 6h rest)."
      };

      const effectIT = (pDef.ranks && pDef.ranks[0]) || pDef.effect || "";
      const effectEN = (pDef.ranksEN && pDef.ranksEN[0]) || pDef.effectEN || "";

      character.perks.push({
        id: pDef.id,
        name: pDef.name,
        nameEN: pDef.nameEN || pDef.name,
        category: pDef.category || "Razziale",
        req: pDef.req || "",
        effect: effectIT,
        effectIT: effectIT,
        effectEN: effectEN,
        isRacialAuto: true,
        grantedBy: activeVar ? activeVar.name : variantId,
        displayLang: "IT"
      });

      if (typeof showToast === "function") {
        showToast(`⚡ Perk razziale acquisito: ${pDef.name}!`, "success");
      }
    }
  });
}

function onRaceChange(raceId) {
  const oldVariant = character.info.raceVariant;
  character.info.race = raceId;
  character.info.raceLocked = false;
  const availableVariants = RACE_VARIANTS_MAP[raceId] || [];
  const defaultVar = availableVariants[0] ? availableVariants[0].id : "standard";
  character.info.raceVariant = defaultVar;
  character.racialOptions.activeIds = [defaultVar];

  syncRacialPerksAndBonuses(oldVariant);
  renderRacialBonuses();
  renderPerks();
  updateDerivedValues();
  renderResistancesSection();
  renderSkills();
  saveCharacter();
}

function onRaceVariantChange(variantId) {
  if (character.info && character.info.raceLocked && character.info.raceVariantLocked) {
    alert("La variante razziale è già stata confermata e non può essere modificata!");
    return;
  }
  const oldVariant = character.info.raceVariant;
  character.info.raceVariant = variantId;
  character.racialOptions.activeIds = [variantId];

  syncRacialPerksAndBonuses(oldVariant);
  renderRacialBonuses();
  renderPerks();
  updateDerivedValues();
  renderResistancesSection();
  renderSkills();
  saveCharacter();
}

function addRacialTraitPage26ToCharacter(traitId) {
  if (!character.traits) character.traits = [];
  if (character.traits.some(t => t.id === traitId)) {
    alert("Questo tratto razziale è già presente tra i tratti del tuo personaggio!");
    return;
  }
  const t = (FALLOUT_RULES_DATA.traitsCompendium || []).find(item => item.id === traitId);
  if (!t) return;

  const standardText = (t.ranks && t.ranks[0]) || t.effect || "";
  const wwText = t.wildWasteland || (t.ranks && t.ranks[1]) || "";
  character.traits.push({
    id: t.id,
    name: t.name,
    category: t.category,
    req: t.req,
    isWildWasteland: false,
    effectStandard: standardText,
    effectWildWasteland: wwText,
    effect: standardText
  });

  updateDerivedValues();
  renderTraits();
  renderRacialBonuses();
  saveCharacter();
  alert(`Aggiunto con successo il tratto razziale: ${t.name}!`);
}

function renderRacialBonuses() {
  const raceId = character.info.race || "human";
  const raceData = (FALLOUT_RULES_DATA.races || []).find(r => r.id === raceId) || (FALLOUT_RULES_DATA.races && FALLOUT_RULES_DATA.races[0]);

  const raceSelect = document.getElementById("char-race");
  const variantSelect = document.getElementById("char-race-variant");

  if (raceSelect) {
    raceSelect.value = raceId;
    raceSelect.disabled = false;
  }
  if (variantSelect) {
    variantSelect.disabled = false;
  }
  const quickSelect = document.getElementById("char-race-header");
  if (quickSelect) quickSelect.value = raceId;

  const lockBadge = document.getElementById("race-lock-status-badge");
  if (lockBadge) {
    lockBadge.innerHTML = `<span style="font-size:12px; font-weight:800; color:#1d4ed8; background:#eff6ff; border:1px solid #bfdbfe; padding:3px 10px; border-radius:4px; display:inline-flex; align-items:center; gap:5px;">🔓 RAZZA MODIFICABILE LIBERAMENTE</span>`;
  }

  // Popola la select delle varianti
  if (variantSelect) {
    const variants = RACE_VARIANTS_MAP[raceId] || [];
    variantSelect.innerHTML = variants.map(v => `
      <option value="${v.id}" ${v.id === character.info.raceVariant ? "selected" : ""}>
        ${v.name}
      </option>
    `).join("");
  }

  const innateContainer = document.getElementById("racial-innate-container");
  const optionalList = document.getElementById("racial-optional-list");
  const isEN = window.racialLanguageMode === "EN";

  if (innateContainer && raceData) {
    let innateHtml = `
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(37,99,235,0.06); padding:6px 10px; border-radius:5px; margin-bottom:8px; border:1px solid rgba(37,99,235,0.2);">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="font-size:12px; font-weight:800; color:var(--text-bright); text-transform:uppercase; letter-spacing:0.5px;">📖 Lingua Regole &amp; Manuale:</span>
          <span style="font-size:11px; font-weight:800; color:${isEN ? '#b45309' : '#1d4ed8'}; background:${isEN ? '#fef3c7' : '#eff6ff'}; padding:2px 7px; border-radius:3px; border:1px solid ${isEN ? '#fde68a' : '#bfdbfe'};">
            ${isEN ? '🇬🇧 INGLESE MANUALE' : '🇮🇹 ITALIANO'}
          </span>
        </div>
        <button type="button" class="btn btn-sm ${isEN ? 'btn-warning' : 'btn-outline-primary'} no-print" onclick="toggleRacialLanguageMode()" style="font-size:12px; font-weight:800; padding:2px 10px; display:inline-flex; align-items:center; gap:5px; cursor:pointer;" title="Alterna tra la traduzione italiana e il testo originale in inglese dal manuale">
          ${isEN ? '🇮🇹 Mostra in Italiano' : '🇬🇧 Mostra Manuale EN'}
        </button>
      </div>

      <div style="font-size:12.5px; color:var(--text-bright); text-transform:uppercase; font-weight:800; letter-spacing:0.5px; margin-bottom:6px;">
        ${isEN ? `Innate Racial Traits (${raceData.nameEN || raceData.name}):` : `Tratti Innati Ufficiali (${raceData.name}):`}
      </div>
      <div style="display:flex; flex-direction:column; gap:8px;">`;

    (raceData.innateTraits || []).forEach(t => {
      const traitName = isEN ? (t.nameEN || t.name) : t.name;
      const traitEffect = isEN ? (t.effectEN || t.effect) : t.effect;
      innateHtml += `
        <div class="racial-trait-box" style="background:var(--bg-card, #f8fafc); border:1.5px solid var(--border-color, #cbd5e1); border-left:4.5px solid var(--accent-secondary, #2563eb); border-radius:6px; padding:8px 12px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:800; font-size:14px; color:var(--accent-secondary, #1d4ed8);">
              ★ ${traitName}
            </div>
            ${t.effectEN ? `
              <button type="button" class="btn btn-xs ${isEN ? 'btn-outline-primary' : 'btn-outline-secondary'} no-print" onclick="toggleRacialLanguageMode()" title="Alterna lingua testo" style="font-size:10.5px; padding:1px 6px;">
                ${isEN ? '🇮🇹 IT' : '🇬🇧 EN'}
              </button>
            ` : ''}
          </div>
          <div style="font-size:13px; color:var(--text-bright, #1e293b); margin-top:4px; line-height:1.45;">
            ${traitEffect}
          </div>
        </div>`;
    });

    innateHtml += `</div>`;
    innateContainer.innerHTML = innateHtml;
  }

  if (optionalList && raceData) {
    const p26TraitId = RACIAL_PAGE26_TRAIT_MAP[raceId];
    const p26Trait = (FALLOUT_RULES_DATA.traitsCompendium || []).find(t => t.id === p26TraitId);
    const hasP26 = (character.traits || []).some(t => t.id === p26TraitId);

    const activeVarId = character.info.raceVariant || "standard";
    const curVar = (RACE_VARIANTS_MAP[raceId] || []).find(v => v.id === activeVarId) || (RACE_VARIANTS_MAP[raceId] || [])[0];

    const varName = curVar ? (isEN ? (curVar.nameEN || curVar.name) : curVar.name) : "Standard";
    const varDesc = curVar ? (isEN ? (curVar.descEN || curVar.effectEN || curVar.effect) : (curVar.descIT || curVar.effect)) : "";
    const hasAutoPerks = curVar && curVar.autoPerks && curVar.autoPerks.length > 0;

    let optHtml = `
      <div style="margin-bottom:8px; padding:10px 12px; background:var(--bg-card, #f8fafc); border:1.5px solid var(--border-color, #cbd5e1); border-left:4.5px solid var(--accent-amber, #d97706); border-radius:6px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
          <div style="font-weight:800; font-size:13px; color:var(--accent-amber, #b45309); text-transform:uppercase; letter-spacing:0.5px;">
            ${isEN ? 'Active Variant / Subtype:' : 'Variante / Sottotipo Attivo:'} ${varName}
          </div>
          <button type="button" class="btn btn-xs ${isEN ? 'btn-outline-primary' : 'btn-outline-secondary'} no-print" onclick="toggleRacialLanguageMode()" title="Alterna lingua testo" style="font-size:10.5px; padding:1px 6px;">
            ${isEN ? '🇮🇹 Mostra IT' : '🇬🇧 Testo Originale EN'}
          </button>
        </div>
        <div style="font-size:13px; color:var(--text-bright, #1e293b); margin-top:4px; line-height:1.45;">
          ${varDesc}
        </div>
        ${hasAutoPerks ? `
          <div style="margin-top:8px; padding:6px 10px; background:rgba(34, 197, 94, 0.1); border:1px solid rgba(34, 197, 94, 0.35); border-radius:4px; font-size:12.5px; color:#14532d; display:flex; align-items:center; gap:6px;">
            <span style="font-weight:900; font-size:14px;">✓</span>
            <span><strong>${isEN ? 'Automatic Perk Granted:' : 'Perk Razziale Assegnato Automaticamente:'}</strong> ${curVar.autoPerks.map(id => id === 'stitched_together' ? 'Cucito Insieme (Stitched Together)' : id).join(', ')}</span>
          </div>
        ` : ''}
      </div>`;

    if (p26Trait) {
      optHtml += `
      <div style="padding:10px 12px; background:var(--bg-card, #f8fafc); border:1.5px solid ${hasP26 ? 'var(--accent-secondary, #2563eb)' : 'var(--border-color, #cbd5e1)'}; border-left:4.5px solid ${hasP26 ? '#2563eb' : '#94a3b8'}; border-radius:6px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <div style="font-weight:800; font-size:13.5px; color:var(--text-bright);">
            ${isEN ? 'Optional Racial Trait (Rulebook Page 26):' : 'Tratto Razziale Opzionale (Manuale Pag. 26):'} <span style="color:var(--accent-secondary, #1d4ed8);">${p26Trait.name}</span>
          </div>
          ${hasP26 ? `
            <span style="font-size:11.5px; font-weight:800; color:#1d4ed8; background:rgba(37,99,235,0.1); padding:2px 8px; border-radius:4px; border:1px solid rgba(37,99,235,0.3); white-space:nowrap;">[ATTIVO NEI TRATTI]</span>
          ` : `
            <button type="button" class="btn btn-sm btn-primary no-print" onclick="addRacialTraitPage26ToCharacter('${p26TraitId}')" title="Aggiungi questo tratto razziale al tuo personaggio">
              + Aggiungi ai Tratti
            </button>
          `}
        </div>
        <div style="font-size:13px; color:var(--text-bright, #1e293b); margin-top:6px; line-height:1.45;">
          ${(p26Trait.ranks && p26Trait.ranks[0]) || p26Trait.effect}
        </div>
      </div>`;
    }

    optionalList.innerHTML = optHtml;
  }
}
function escapeQuotes(str) {
  if (!str) return "";
  return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

function showTraitDetailModal(title, text, category = "Tratto Razziale") {
  const modal = document.getElementById("trait-detail-modal");
  const titleEl = document.getElementById("trait-detail-title");
  const catEl = document.getElementById("trait-detail-category");
  const textEl = document.getElementById("trait-detail-text");

  if (!modal || !titleEl || !textEl) return;

  titleEl.textContent = title;
  catEl.textContent = category;
  textEl.innerHTML = text.replace(/\n/g, "<br>");
  modal.style.display = "flex";
}

function closeTraitDetailModal() {
  const modal = document.getElementById("trait-detail-modal");
  if (modal) modal.style.display = "none";
}

// =============================================================================
// S.P.E.C.I.A.L. & SKILLS ENGINE
// =============================================================================

function renderSpecial() {
  const stats = ["strength", "perception", "endurance", "charisma", "intelligence", "agility", "luck"];
  let totalScore = 0;
  stats.forEach(st => {
    const scoreEl = document.getElementById(`stat-${st}`);
    const modEl = document.getElementById(`mod-${st}`);
    const currentScore = character.special[st] || 5;
    totalScore += (parseInt(currentScore, 10) || 0);
    const computedMod = calculateModFromScore(currentScore);

    if (scoreEl) scoreEl.value = currentScore;
    if (modEl) {
      if (!modEl.dataset.custom) {
        character.specialMods[st] = computedMod;
        modEl.value = computedMod;
      } else {
        modEl.value = character.specialMods[st] || computedMod;
      }
    }
  });

  const poolEl = document.getElementById("special-pool-info");
  if (poolEl) {
    poolEl.textContent = `Totale Punti: ${totalScore}/38`;
  }
}

function adjustStat(statName, delta) {
  const current = parseInt(character.special[statName], 10) || 5;
  const newScore = Math.max(1, Math.min(30, current + delta));
  character.special[statName] = newScore;
  const newMod = calculateModFromScore(newScore);
  character.specialMods[statName] = newMod;

  const scoreInput = document.getElementById(`stat-${statName}`);
  if (scoreInput) scoreInput.value = newScore;

  const modInput = document.getElementById(`mod-${statName}`);
  if (modInput) {
    delete modInput.dataset.custom;
    modInput.value = newMod;
  }

  renderSpecial();
  updateDerivedValues();
  renderSkills();
  saveCharacter();
}

function updateStatScore(statName, val) {
  const score = Math.max(1, Math.min(30, parseInt(val, 10) || 1));
  character.special[statName] = score;
  const newMod = calculateModFromScore(score);
  character.specialMods[statName] = newMod;

  const modInput = document.getElementById(`mod-${statName}`);
  if (modInput) {
    delete modInput.dataset.custom;
    modInput.value = newMod;
  }

  renderSpecial();
  updateDerivedValues();
  renderSkills();
  saveCharacter();
}

function updateStatMod(statName, val) {
  character.specialMods[statName] = val;
  const modInput = document.getElementById(`mod-${statName}`);
  if (modInput) modInput.dataset.custom = "true";
  updateDerivedValues();
  renderSkills();
  saveCharacter();
}

function renderSkills() {
  const container = document.getElementById("skills-list-body");
  if (!container) return;

  const skillKeys = Object.keys(character.skills);
  const childrenCount = container.children ? container.children.length : (container.childNodes ? container.childNodes.length : 0);

  if (childrenCount !== skillKeys.length) {
    let html = "";
    skillKeys.forEach(skillKey => {
      const sk = character.skills[skillKey];
      const currentAttr = (sk.useAlt && sk.altAttr) ? sk.altAttr : sk.attr;
      const attrLabel = currentAttr.toUpperCase().substring(0, 3);
      const isTagged = !!sk.tag;
      const baseVal = sk.baseMod >= 0 ? `+${sk.baseMod}` : `${sk.baseMod}`;
      const ptsVal = sk.points || 0;
      const extraVal = sk.extra !== undefined ? sk.extra : (isTagged ? 2 : 0);
      const totVal = sk.total >= 0 ? `+${sk.total}` : `${sk.total}`;

      let altToggleHtml = "";
      if (sk.altAttr) {
        altToggleHtml = `
          <span class="skill-attr-tag has-alt" id="skill-alt-toggle-${skillKey}" onclick="toggleSkillAltAttr('${skillKey}')" title="Clicca per alternare attributo tra ${sk.attr.toUpperCase()} e ${sk.altAttr.toUpperCase()}">
            ${attrLabel} ⮂
          </span>`;
      } else {
        altToggleHtml = `
          <span class="skill-attr-tag" id="skill-alt-toggle-${skillKey}" title="Attributo: ${sk.attr.toUpperCase()}">
            ${attrLabel}
          </span>`;
      }

      html += `
        <div class="skill-row ${isTagged ? 'skill-tagged' : ''}" id="skill-row-${skillKey}">
          <input type="checkbox" class="skill-tag-check" id="skill-tag-${skillKey}" ${isTagged ? 'checked' : ''} onchange="toggleSkillTag('${skillKey}', this.checked)" title="Tag Skill (+2)">
          <span class="skill-name" title="${sk.name}">${sk.name}</span>
          ${altToggleHtml}
          <input type="text" class="skill-val-input skill-base" id="skill-base-${skillKey}" value="${baseVal}" onchange="updateSkillField('${skillKey}', 'baseMod', this.value)" title="Base (Mod. Caratteristica + Fortuna/2)">
          <span class="skill-calc-sep">+</span>
          <input type="number" class="skill-val-input" id="skill-points-${skillKey}" value="${ptsVal}" min="0" max="99" oninput="updateSkillField('${skillKey}', 'points', this.value)" title="Punti Abilità assegnati">
          <span class="skill-calc-sep">+</span>
          <input type="number" class="skill-val-input" id="skill-extra-${skillKey}" value="${extraVal}" min="0" max="99" oninput="updateSkillField('${skillKey}', 'extra', this.value)" title="Punti Extra (Tag/Equip/Master)">
          <span class="skill-calc-sep">=</span>
          <input type="text" class="skill-total-val" id="skill-total-${skillKey}" value="${totVal}" onchange="updateSkillTotalCustom('${skillKey}', this.value)" title="Totale Abilità">
        </div>`;
    });
    container.innerHTML = html;
  } else {
    skillKeys.forEach(skillKey => {
      const sk = character.skills[skillKey];
      const isTagged = !!sk.tag;
      const rowEl = document.getElementById(`skill-row-${skillKey}`);
      const tagEl = document.getElementById(`skill-tag-${skillKey}`);
      const baseEl = document.getElementById(`skill-base-${skillKey}`);
      const ptsEl = document.getElementById(`skill-points-${skillKey}`);
      const extEl = document.getElementById(`skill-extra-${skillKey}`);
      const totEl = document.getElementById(`skill-total-${skillKey}`);
      const altToggle = document.getElementById(`skill-alt-toggle-${skillKey}`);

      if (rowEl) {
        if (isTagged) rowEl.classList.add("skill-tagged");
        else rowEl.classList.remove("skill-tagged");
      }
      if (tagEl) tagEl.checked = isTagged;
      if (baseEl && !baseEl.dataset.custom) baseEl.value = sk.baseMod >= 0 ? `+${sk.baseMod}` : `${sk.baseMod}`;
      if (ptsEl) ptsEl.value = sk.points || 0;
      if (extEl) extEl.value = sk.extra !== undefined ? sk.extra : (isTagged ? 2 : 0);
      if (totEl && !totEl.dataset.custom) totEl.value = sk.total >= 0 ? `+${sk.total}` : `${sk.total}`;
      if (altToggle) {
        const currentAttr = (sk.useAlt && sk.altAttr) ? sk.altAttr : sk.attr;
        const attrLabel = currentAttr.toUpperCase().substring(0, 3);
        altToggle.textContent = sk.altAttr ? `${attrLabel} ⮂` : attrLabel;
      }
    });
  }
}

function toggleSkillTag(skillKey, isTagged) {
  character.skills[skillKey].tag = isTagged;
  character.skills[skillKey].extra = isTagged ? 2 : 0;
  recalcSkills();
  renderSkills();
  saveCharacter();
}

function toggleSkillAltAttr(skillKey) {
  if (character.skills[skillKey] && character.skills[skillKey].altAttr) {
    character.skills[skillKey].useAlt = !character.skills[skillKey].useAlt;
    recalcSkills();
    renderSkills();
    saveCharacter();
  }
}

function updateSkillField(skillKey, field, val) {
  const num = parseInt(val.toString().replace("+", ""), 10) || 0;
  character.skills[skillKey][field] = num;
  updateDerivedValues();
  renderSkills();
  saveCharacter();
}

function updateSkillTotalCustom(skillKey, val) {
  const num = parseInt(val.replace("+", ""), 10) || 0;
  character.skills[skillKey].total = num;
  const inputEl = document.getElementById(`skill-total-${skillKey}`);
  if (inputEl) inputEl.dataset.custom = "true";
  saveCharacter();
}

function renderVitals() {
  const syncPairs = [
    ["current-sp", "currentSp", 0],
    ["max-sp", "maxSp", 10],
    ["current-hp", "currentHp", 0],
    ["max-hp", "maxHp", 10],
    ["current-ap", "currentAp", 0],
    ["max-ap", "maxAp", 10],
    ["val-healing-rate", "healingRate", 3],
    ["val-combat-seq", "combatSequence", 0],
    ["recycled-ap", "recycledAp", 0],
    ["val-passive-sense", "passiveSense", 12],
    ["val-rad-dc", "radDc", 12],
    ["input-party-nerve", "partyNerve", 0],
    ["input-group-sneak", "groupSneak", 0]
  ];

  syncPairs.forEach(([id, prop, defVal]) => {
    const val = character.vitals[prop] !== undefined ? character.vitals[prop] : defVal;
    const el1 = document.getElementById(id);
    const el2 = document.getElementById("core-" + id);
    if (el1) el1.value = val;
    if (el2) el2.value = val;
  });

  const acEl = document.getElementById("val-ac");
  if (acEl) acEl.value = character.vitals.ac || 10;
  const dtEl = document.getElementById("val-dt");
  if (dtEl) dtEl.value = character.vitals.dt || 0;
}

// =============================================================================
// ARMOR & POWER ARMOR ENGINE
// =============================================================================

function updateArmorQuality(qualityVal) {
  character.armor.quality = qualityVal;
  if (qualityVal === "legendary") {
    if (!Array.isArray(character.armor.legendaryEffects) || character.armor.legendaryEffects.length === 0) {
      character.armor.legendaryEffects = character.armor.legendaryEffect ? [character.armor.legendaryEffect] : [""];
    }
  }
  updateDerivedValues();
  renderArmor();
  saveCharacter();
}

function addArmorLegendaryTrait() {
  if (!Array.isArray(character.armor.legendaryEffects)) {
    character.armor.legendaryEffects = character.armor.legendaryEffect ? [character.armor.legendaryEffect] : [];
  }
  character.armor.legendaryEffects.push("");
  renderArmor();
  saveCharacter();
}

function updateArmorLegendaryTrait(tIdx, val) {
  if (!Array.isArray(character.armor.legendaryEffects)) {
    character.armor.legendaryEffects = character.armor.legendaryEffect ? [character.armor.legendaryEffect] : [];
  }
  character.armor.legendaryEffects[tIdx] = val;
  character.armor.legendaryEffect = character.armor.legendaryEffects.filter(Boolean).join(" | ");
  saveCharacter();
}

function removeArmorLegendaryTrait(tIdx) {
  if (!Array.isArray(character.armor.legendaryEffects)) return;
  character.armor.legendaryEffects.splice(tIdx, 1);
  character.armor.legendaryEffect = character.armor.legendaryEffects.filter(Boolean).join(" | ");
  renderArmor();
  saveCharacter();
}

function getArmorSlotCapacity() {
  if (!character.armor) character.armor = { installedUpgrades: [] };
  const armMatch = (FALLOUT_RULES_DATA.armors || []).find(a => a.id === character.armor.type) || { slots: 8, name: "Stoffa (Cloth)" };
  const baseSlots = armMatch.slots || 8;
  const isLegendary = character.armor.quality === "legendary";
  const bonusSlots = isLegendary ? (parseInt(character.armor.legendaryBonusSlots, 10) !== undefined ? parseInt(character.armor.legendaryBonusSlots, 10) : 1) : 0;
  const totalSlots = baseSlots + bonusSlots;
  const installed = Array.isArray(character.armor.installedUpgrades) ? character.armor.installedUpgrades : [];
  const usedSlots = installed.length; // Ogni upgrade installato occupa esattamente 1 slot, indipendentemente dal grado!
  const isFull = usedSlots >= totalSlots;
  return { armMatch, baseSlots, bonusSlots, totalSlots, usedSlots, isFull, isLegendary };
}

function adjustArmorLegendarySlots(delta) {
  if (!character.armor) character.armor = {};
  const cur = character.armor.legendaryBonusSlots !== undefined ? character.armor.legendaryBonusSlots : 1;
  const next = Math.max(0, Math.min(5, cur + delta));
  character.armor.legendaryBonusSlots = next;
  renderArmor();
  saveCharacter();
}

function renderArmor() {
  if (!character.armor) character.armor = { type: "cloth", quality: "standard", installedUpgrades: [] };

  const nameEl = document.getElementById("armor-name");
  if (nameEl) nameEl.value = character.armor.name || "";
  const typeEl = document.getElementById("armor-type");
  if (typeEl) typeEl.value = character.armor.type || "cloth";
  const qualEl = document.getElementById("armor-quality-select");
  if (qualEl) qualEl.value = character.armor.quality === "legendary" ? "legendary" : "standard";

  const legBox = document.getElementById("armor-legendary-box");
  const legList = document.getElementById("armor-legendary-list");
  const legSlotsVal = document.getElementById("armor-legendary-slots-val");
  
  if (legSlotsVal) {
    const curBonus = character.armor.legendaryBonusSlots !== undefined ? character.armor.legendaryBonusSlots : 1;
    legSlotsVal.textContent = `+${curBonus}`;
  }

  if (legBox) {
    if (character.armor.quality === "legendary") {
      legBox.style.display = "block";
      if (!Array.isArray(character.armor.legendaryEffects)) {
        character.armor.legendaryEffects = character.armor.legendaryEffect ? [character.armor.legendaryEffect] : [""];
      }
      if (character.armor.legendaryEffects.length === 0) {
        character.armor.legendaryEffects = [""];
      }
      if (legList) {
        legList.innerHTML = character.armor.legendaryEffects.map((eff, tIdx) => `
          <div class="legendary-trait-row" style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
            <span class="legendary-star-icon" style="color:#eab308; font-weight:bold;">★</span>
            <input type="text" class="input-field legendary-effect-input" value="${eff || ""}" placeholder="Es. Camaleonte: invisibile da fermo | Rad-Resistant: +25 Rad Res..." oninput="updateArmorLegendaryTrait(${tIdx}, this.value)" style="flex:1;">
            <button type="button" class="btn btn-sm btn-danger no-print" onclick="removeArmorLegendaryTrait(${tIdx})" title="Rimuovi tratto">✕</button>
          </div>
        `).join("");
      }
    } else {
      legBox.style.display = "none";
    }
  }

  // Calculate Capacity
  const cap = getArmorSlotCapacity();
  const charStr = typeof getEffectiveStrength === "function" ? getEffectiveStrength() : (parseInt(character.special.strength, 10) || 5);
  const armorReqStr = cap.armMatch.reqStr || 1;

  // Header Slots Counter
  const slotsInfo = document.getElementById("armor-slots-info");
  if (slotsInfo) {
    slotsInfo.innerHTML = `Slot: <strong>${cap.usedSlots}/${cap.totalSlots}</strong> ${cap.isFull ? '<span style="color:#ef4444; font-weight:bold; margin-left:4px;">[PIENO]</span>' : '<span style="color:#10b981; margin-left:4px;">(' + (cap.totalSlots - cap.usedSlots) + ' liberi)</span>'}`;
  }

  // Visual Dots for Slots
  const dotsContainer = document.getElementById("armor-slots-dots-container");
  if (dotsContainer) {
    let dotsHtml = "";
    for (let i = 0; i < cap.totalSlots; i++) {
      const isUsed = i < cap.usedSlots;
      const isBonusLeg = i >= cap.baseSlots;
      const cls = `armor-slot-dot ${isUsed ? 'used' : ''} ${isBonusLeg ? 'legendary-slot' : ''}`;
      const title = isBonusLeg ? `Slot Leggendario Aggiuntivo ${i + 1} (${isUsed ? 'Occupato' : 'Libero'})` : `Slot Base ${i + 1} (${isUsed ? 'Occupato' : 'Libero'})`;
      dotsHtml += `<div class="${cls}" title="${title}">${isBonusLeg ? '★' : (i + 1)}</div>`;
    }
    dotsContainer.innerHTML = dotsHtml;
  }

  const container = document.getElementById("armor-upgrades-container");
  if (container) {
    let warnHtml = "";
    if (charStr < armorReqStr) {
      warnHtml = `<div class="equip-warning-badge" style="background:rgba(239, 68, 68, 0.15); border:1px solid #ef4444; color:#fca5a5; padding:6px 10px; border-radius:4px; margin-bottom:6px; font-size:11px;">⚠️ <strong>FORZA INSUFFICIENTE PER L'ARMATURA</strong> (Richiede FOR ${armorReqStr}, attuale ${charStr}): Movimento dimezzato e penalità di agilità.</div>`;
    }

    let fullSlotWarn = "";
    if (cap.isFull) {
      fullSlotWarn = `
        <div class="armor-full-slot-warning">
          <span>⚠️ <strong>Capienza Massima Raggiunta (${cap.usedSlots}/${cap.totalSlots}):</strong> Questa armatura non può contenere altre modifiche contemporanee. Per installarne una nuova, devi prima rimuovere o sostituire una modifica esistente.</span>
        </div>
      `;
    }

    const installed = character.armor.installedUpgrades || [];
    if (installed.length === 0) {
      container.innerHTML = warnHtml + fullSlotWarn + `
        <div style="font-size:11.5px; color:var(--text-dim); padding:10px; text-align:center; background:var(--bg-tertiary); border:1px dashed var(--border-color); border-radius:4px;">
          Nessuna modifica installata su questa armatura (${cap.armMatch.name || "Stoffa"}). Clicca <strong>[+ Aggiungi Upgrade]</strong> per consultare il catalogo mod (${cap.totalSlots} slot disponibili).
        </div>
      `;
    } else {
      let totAc = 0;
      let totDt = 0;
      let totCarry = 0;
      let totRad = 0;

      let itemsHtml = "";
      installed.forEach((u, idx) => {
        const currentRank = u.rank || 1;
        const ruleMod = (FALLOUT_RULES_DATA.armorUpgrades || []).find(m => m.id === u.id);
        const maxR = u.maxRank || (ruleMod ? ruleMod.maxRank : 3);
        const ranksList = (ruleMod && ruleMod.ranks) ? ruleMod.ranks : (u.ranks || [u.effect]);

        // Calculate specific stats for badge
        let statBadges = [];
        if (u.id === "u_hardened") {
          const acVal = currentRank === 3 ? 3 : currentRank === 2 ? 2 : 1;
          totAc += acVal;
          statBadges.push(`<span class="upgrade-stat-badge ac-badge">+${acVal} AC</span>`);
        } else if (u.id === "u_reinforced") {
          const dtVal = currentRank === 3 ? 4 : currentRank === 2 ? 2 : 1;
          totDt += dtVal;
          statBadges.push(`<span class="upgrade-stat-badge dt-badge">+${dtVal} DT</span>`);
        } else if (u.id === "u_light") {
          totDt -= 1;
          const loadRed = currentRank >= 2 ? 10 : 5;
          statBadges.push(`<span class="upgrade-stat-badge dt-badge" style="background:#e67e22; color:#fff;">-1 DT | Peso -${loadRed} lbs</span>`);
        } else if (u.id === "u_pocketed") {
          const cVal = currentRank === 3 ? 50 : currentRank === 2 ? 25 : 10;
          totCarry += cVal;
          statBadges.push(`<span class="upgrade-stat-badge carry-badge">+${cVal} lbs Carico</span>`);
        } else if (u.id === "u_lead_lined") {
          const rVal = currentRank * 2;
          totRad += rVal;
          statBadges.push(`<span class="upgrade-stat-badge rad-badge">-${rVal} DC Rad</span>`);
        } else if (u.id === "u_fitted") {
          statBadges.push(`<span class="upgrade-stat-badge" style="background:#8b5cf6; color:#fff;">DT x2 Area ${currentRank >= 2 ? '| +Vigore' : ''} ${currentRank >= 3 ? '| +Iniziativa' : ''}</span>`);
        } else if (u.id === "u_strengthened") {
          statBadges.push(`<span class="upgrade-stat-badge" style="background:#ec4899; color:#fff;">+${currentRank >= 2 ? '5' : '3'} DT Crit</span>`);
        } else if (u.id === "u_sturdy") {
          statBadges.push(`<span class="upgrade-stat-badge" style="background:#06b6d4; color:#fff;">Ignora Usura 1-${currentRank >= 2 ? '4' : '2'}</span>`);
        } else if (u.id === "u_camouflage") {
          statBadges.push(`<span class="upgrade-stat-badge" style="background:#10b981; color:#fff;">Furtività +${currentRank * 3}</span>`);
        } else if (u.id === "u_insulated") {
          statBadges.push(`<span class="upgrade-stat-badge" style="background:#0284c7; color:#fff;">Anti-Ipotermia</span>`);
        }

        // Build level-by-level progression preview (Grado 1, Grado 2, Grado 3)
        // I benefici si sommano cumulativamente come da manuale
        let progressionHtml = `<div class="armor-upgrade-progression" style="margin-top:6px; display:flex; flex-direction:column; gap:3px;">`;
        if (ranksList && ranksList.length > 0) {
          ranksList.forEach((effText, rIdx) => {
            const rNum = rIdx + 1;
            const isUnlocked = rNum <= currentRank;
            const isTarget = rNum === currentRank;
            progressionHtml += `
              <div class="armor-rank-step ${isUnlocked ? 'active-rank-step' : 'locked-rank-step'}">
                <span class="rank-step-badge">${isUnlocked ? '✓ Grado ' + rNum + ' [ATTIVO]' : '🔒 Grado ' + rNum + ' [NON SBLOCCATO]'}:</span>
                <span class="rank-step-desc">${effText}</span>
              </div>
            `;
          });
        }
        progressionHtml += `
          <div style="font-size:10px; color:var(--text-dim); margin-top:3px; font-style:italic;">
            ℹ️ Regolamento: I benefici di ciascun grado si sommano cumulativamente a quelli dei gradi precedenti. L'aumento di grado non occupa slot aggiuntivi.
          </div>
        </div>`;

        itemsHtml += `
          <div class="installed-mod-row" style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:6px; padding:10px; margin-bottom:8px;">
            <div class="installed-mod-top" style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
              <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-bottom:4px;">
                  <span style="font-size:13px; font-weight:bold; color:var(--text-bright);">${u.name}</span>
                  <span style="font-size:10px; font-family:monospace; background:rgba(0,0,0,0.3); border:1px solid var(--border-color); padding:1px 5px; border-radius:3px; color:var(--accent);">1 Slot Occupato</span>
                  ${statBadges.join(" ")}
                </div>
                <div style="font-size:11px; color:var(--text-dim);">
                  Modifica installata: <strong>Grado ${currentRank} di ${maxR}</strong> &bull; Costo base: ${ruleMod ? ruleMod.cost : '?'}
                </div>
              </div>

              <div style="display:flex; align-items:center; gap:8px;" class="no-print">
                <div class="trait-rank-box" style="display:flex; align-items:center; gap:3px; background:rgba(0,0,0,0.3); padding:2px 6px; border-radius:4px; border:1px solid var(--border-color);">
                  <button type="button" class="btn btn-sm" onclick="adjustArmorUpgradeRank(${idx}, -1)" title="Riduci Grado" ${currentRank <= 1 ? 'disabled style="opacity:0.35; cursor:not-allowed;"' : 'style="padding:1px 6px; font-weight:bold;"'}>-</button>
                  <span class="trait-rank-val" style="font-size:11px; font-weight:bold; min-width:48px; text-align:center;">Grado ${currentRank}</span>
                  <button type="button" class="btn btn-sm" onclick="adjustArmorUpgradeRank(${idx}, 1)" title="Aumenta Grado (Beneficio aggiuntivo senza occupare slot)" ${currentRank >= maxR ? 'disabled style="opacity:0.35; cursor:not-allowed;"' : 'style="padding:1px 6px; font-weight:bold;"'}>+</button>
                </div>
                <button type="button" class="btn btn-sm btn-danger btn-del-mod" onclick="removeArmorUpgrade(${idx})" title="Rimuovi Modifica (Libera 1 Slot)" style="padding:2px 8px; font-weight:bold;">✕</button>
              </div>
            </div>

            ${progressionHtml}
          </div>
        `;
      });

      // Add summary banner at top if any bonuses
      let summaryBar = "";
      if (totAc > 0 || totDt !== 0 || totCarry > 0 || totRad > 0) {
        summaryBar = `
          <div class="armor-upgrades-summary-bar">
            <span>🛡️ <strong>Totale Bonus Modifiche:</strong></span>
            ${totAc > 0 ? `<span class="sum-tag ac-tag">+${totAc} AC</span>` : ""}
            ${totDt !== 0 ? `<span class="sum-tag dt-tag">${totDt > 0 ? '+' : ''}${totDt} DT</span>` : ""}
            ${totCarry > 0 ? `<span class="sum-tag carry-tag">+${totCarry} lbs Carico</span>` : ""}
            ${totRad > 0 ? `<span class="sum-tag rad-tag">-${totRad} DC Rad</span>` : ""}
          </div>`;
      }

      container.innerHTML = warnHtml + fullSlotWarn + summaryBar + itemsHtml;
    }
  }

  // Power armor panel
  const paPanel = document.getElementById("power-armor-panel");
  const togglePaBtn = document.getElementById("btn-toggle-pa");
  if (paPanel && togglePaBtn) {
    if (character.armor.isPowerArmor) {
      paPanel.style.display = "flex";
      togglePaBtn.textContent = "ESCI DA POWER ARMOR";
      togglePaBtn.className = "btn btn-sm btn-danger";
      document.getElementById("pa-model-select").value = character.armor.paModel || "t45";
      document.getElementById("pa-current-dp").value = character.armor.paCurrentDp || 15;
      document.getElementById("pa-max-dp").value = character.armor.paDp || 15;
      document.getElementById("pa-fusion-timer").value = character.armor.fusionCoreMinutes || 240;
    } else {
      paPanel.style.display = "none";
      togglePaBtn.textContent = "INDOSSA POWER ARMOR";
      togglePaBtn.className = "btn btn-sm";
    }
  }
}

function adjustArmorUpgradeRank(idx, delta) {
  if (!character.armor || !Array.isArray(character.armor.installedUpgrades)) return;
  const up = character.armor.installedUpgrades[idx];
  if (!up) return;
  const ruleMod = (FALLOUT_RULES_DATA.armorUpgrades || []).find(m => m.id === up.id);
  const maxR = up.maxRank || (ruleMod ? ruleMod.maxRank : 3);
  const newRank = Math.max(1, Math.min(maxR, (up.rank || 1) + delta));
  up.rank = newRank;

  if (ruleMod && ruleMod.ranks && ruleMod.ranks[newRank - 1]) {
    up.effect = ruleMod.ranks[newRank - 1];
  }

  recalcArmor();
  updateDerivedValues();
  renderArmor();
  saveCharacter();
  showToast(`🛡️ Grado ${up.name} aggiornato a: <strong>Grado ${newRank}/${maxR}</strong>!`, "info");
}

function removeArmorUpgrade(idx) {
  if (!character.armor || !Array.isArray(character.armor.installedUpgrades)) return;
  const up = character.armor.installedUpgrades[idx];
  const name = up ? up.name : "Modifica";
  character.armor.installedUpgrades.splice(idx, 1);
  recalcArmor();
  updateDerivedValues();
  renderArmor();
  saveCharacter();
  showToast(`🗑️ Rimossa modifica: <strong>${name}</strong>. Slot liberato!`, "info");
}

function closeArmorSlotsModal() {
  const modal = document.getElementById("armor-slots-modal");
  if (modal) modal.style.display = "none";
}

function showArmorSlotsFullModal(cap) {
  const modal = document.getElementById("armor-slots-modal");
  const body = document.getElementById("armor-slots-modal-body");
  if (!modal || !body) {
    alert(`Slot modifiche esauriti (${cap.usedSlots}/${cap.totalSlots})! Rimuovi prima una modifica per aggiungerne una nuova.`);
    return;
  }

  const installed = character.armor.installedUpgrades || [];
  body.innerHTML = `
    <div style="margin-bottom:12px; color:var(--text-bright);">
      L'armatura attuale (<strong>${cap.armMatch.name || "Armatura"}</strong>) dispone di un massimo di <strong>${cap.totalSlots} slot</strong> modifiche contemporanee (di cui ${cap.baseSlots} base${cap.bonusSlots > 0 ? ' e +' + cap.bonusSlots + ' bonus leggendari' : ''}) e sono attualmente <strong>tutti occupati (${cap.usedSlots}/${cap.totalSlots})</strong>.
    </div>
    <div style="margin-bottom:12px; font-size:12.5px; color:var(--text-dim); background:rgba(0,0,0,0.25); padding:8px 10px; border-radius:4px; border-left:3px solid #f59e0b;">
      📌 <strong>Regola del Manuale:</strong> Se l'armatura ha esaurito gli slot disponibili, per installare una nuova modifica devi prima <strong>togliere uno degli slot occupati</strong> oppure scegliere quale modifica esistente sostituire.
    </div>
    <div style="font-weight:bold; font-size:12px; text-transform:uppercase; color:var(--text-bright); margin-bottom:6px;">Modifiche attualmente installate:</div>
    <div style="display:flex; flex-direction:column; gap:6px; margin-bottom:14px;">
      ${installed.map((u, idx) => `
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:5px; padding:6px 10px;">
          <div>
            <div style="font-weight:bold; font-size:12.5px; color:var(--text-bright);">${u.name} (Grado ${u.rank || 1})</div>
            <div style="font-size:11px; color:var(--text-dim);">${u.effect || ""}</div>
          </div>
          <div style="display:flex; gap:6px;">
            <button type="button" class="btn btn-sm btn-primary" onclick="replaceArmorUpgrade(${idx})" style="font-size:11px; padding:3px 8px;" title="Sostituisci direttamente questa modifica con una nuova">
              🔄 Sostituisci
            </button>
            <button type="button" class="btn btn-sm btn-danger" onclick="removeArmorUpgradeAndReopen(${idx})" style="font-size:11px; padding:3px 8px;" title="Rimuovi questa modifica e libera 1 slot">
              ✕ Rimuovi
            </button>
          </div>
        </div>
      `).join("")}
    </div>
    <div style="display:flex; justify-content:flex-end;">
      <button type="button" class="btn btn-sm" onclick="closeArmorSlotsModal()">Chiudi</button>
    </div>
  `;

  modal.style.display = "flex";
}

function removeArmorUpgradeAndReopen(idx) {
  removeArmorUpgrade(idx);
  closeArmorSlotsModal();
  setTimeout(() => {
    addArmorUpgrade();
  }, 100);
}

function replaceArmorUpgrade(idx) {
  closeArmorSlotsModal();
  const installed = character.armor.installedUpgrades || [];
  const oldUpg = installed[idx];
  const oldName = oldUpg ? oldUpg.name : "Modifica";

  const allMods = FALLOUT_RULES_DATA.armorUpgrades || [];
  // Exclude mods that are already installed on other slots
  const otherInstalledIds = installed.filter((_, i) => i !== idx).map(u => u.id);
  const avail = allMods.filter(m => !otherInstalledIds.includes(m.id));

  openPickerModal(`SOSTITUISCI "${oldName.toUpperCase()}"`, avail, (newUpg) => {
    character.armor.installedUpgrades[idx] = {
      id: newUpg.id,
      name: newUpg.name,
      rank: 1,
      maxRank: newUpg.maxRank || 3,
      effect: (newUpg.ranks && newUpg.ranks[0]) || newUpg.effect || ""
    };
    recalcArmor();
    updateDerivedValues();
    renderArmor();
    saveCharacter();
    showToast(`🔄 Sostituita <strong>${oldName}</strong> con <strong>${newUpg.name}</strong>!`, "success");
  });
}


function renderArmorDecay() {
  // Can be bound to visual decay pips if present
}

// =============================================================================
// WEAPONS ENGINE WITH COMPLETE TACTICAL TO-HIT & DAMAGE BREAKDOWN
// =============================================================================


/**
 * Analizza le caratteristiche di un'arma per determinarne la compatibilità
 * con modifiche e munizioni speciali secondo il manuale di Fallout TTRPG.
 */
function getWeaponCompatibility(w) {
  if (!w) return { isRanged: false, isMelee: true, isLegendary: false };

  const wType = (w.type || w.category || "").toLowerCase();
  const wName = (w.name || "").toLowerCase();
  const wProps = (w.properties || "").toLowerCase();
  const wAmmo = (w.ammo || w.ammoType || "").toLowerCase();
  const wQuality = (w.quality || "").toLowerCase();

  const isLegendary = wQuality === "legendary" || wQuality === "leggendaria" || wName.includes("★") || wProps.includes("leggendari");
  const isMelee = wType.includes("mischia") || wType.includes("corpo") || wType.includes("melee") || wType.includes("disarmato") || wType.includes("unarmed") || wAmmo === "nessuna" || wAmmo === "none" || wAmmo === "-" || wName.includes("lama") || wName.includes("coltello") || wName.includes("spada") || wName.includes("mazza") || wName.includes("sledge") || wName.includes("wrench") || wName.includes("chiave") || wName.includes("bastone");
  const isUnarmed = wType.includes("disarmato") || wType.includes("unarmed") || wName.includes("pugno") || wName.includes("fist") || wName.includes("tirapugni");
  const isEnergy = wType.includes("energia") || wType.includes("laser") || wType.includes("plasma") || wType.includes("gamma") || wType.includes("cryo") || wType.includes("gauss") || wAmmo.includes("cell") || wAmmo.includes("ec") || wName.includes("laser") || wName.includes("plasma") || wName.includes("gauss");
  const isHeavy = wType.includes("pesante") || wType.includes("heavy") || wName.includes("minigun") || wName.includes("lanciamissili") || wName.includes("fat man") || wName.includes("lanciafiamme") || wAmmo.includes("missile") || wAmmo.includes("5mm") || wAmmo.includes("mini nuke") || wAmmo.includes("fuel");
  const isShotgun = wType.includes("pompa") || wType.includes("shotgun") || wName.includes("doppietta") || wAmmo.includes("gauge") || wName.includes("shotgun") || wName.includes("pompa");
  const isRevolver = wType.includes("revolver") || wName.includes("revolver") || wName.includes(".357") || wName.includes(".44") || wName.includes("tamburo");
  const isRifle = (wType.includes("fucile") || wName.includes("fucile") || wName.includes("carabina") || wName.includes("rifle") || wName.includes("caccia")) && !isShotgun;
  const isHandgun = (wType.includes("pistola") || wName.includes("pistola") || isRevolver) && !isEnergy;
  const isTwoHanded = w.hands === 2 || wProps.includes("a due mani") || wProps.includes("two handed") || wProps.includes("2 mani");
  const isRanged = !isMelee && !wType.includes("esplosiv");
  const isBallistic = isRanged && !isEnergy && !isShotgun && !isHeavy;

  return {
    isLegendary,
    isMelee,
    isUnarmed,
    isEnergy,
    isHeavy,
    isShotgun,
    isRevolver,
    isRifle,
    isHandgun,
    isTwoHanded,
    isRanged,
    isBallistic
  };
}

/**
 * Verifica se una modifica è compatibile con una specifica arma.
 * Regola Fallout: Solo le armi leggendarie possono superare le restrizioni di categoria.
 */
function isWeaponModAllowed(w, mod) {
  if (!w || !mod) return false;
  const comp = getWeaponCompatibility(w);

  // 1. Armi leggendarie possono equipaggiare qualsiasi modifica
  if (comp.isLegendary) return true;

  // 2. Modifiche ad uso esclusivo leggendario
  if (mod.legendaryOnly && !comp.isLegendary) return false;

  const app = Array.isArray(mod.appliesTo) ? mod.appliesTo.map(x => x.toLowerCase()) : [String(mod.appliesTo || "all").toLowerCase()];
  if (app.includes("all") || app.includes("any") || app.includes("tutte")) return true;

  // Armi non da fuoco (Mischia/Disarmato) non possono installare mod da fuoco/caricatori/silenziatori
  if (!comp.isRanged && (app.includes("firearms") || app.includes("ballistic") || app.includes("energy") || app.includes("shotgun") || app.includes("rifle") || app.includes("handgun") || app.includes("revolver") || app.includes("heavy"))) {
    return false;
  }

  // Compatibilità per categoria
  if (app.includes("melee") && comp.isMelee) return true;
  if (app.includes("unarmed") && comp.isUnarmed) return true;
  if (app.includes("energy") && comp.isEnergy) return true;
  if (app.includes("revolver") && comp.isRevolver) return true;
  if (app.includes("shotgun") && comp.isShotgun) return true;
  if (app.includes("rifle") && comp.isRifle) return true;
  if (app.includes("handgun") && comp.isHandgun) return true;
  if (app.includes("heavy") && comp.isHeavy) return true;
  if (app.includes("smg") && ((w.type || w.category || "").toLowerCase().includes("mitra") || (w.name || "").toLowerCase().includes("smg"))) return true;
  if (app.includes("two_handed") && comp.isTwoHanded && comp.isRanged) return true;
  if (app.includes("ballistic") && comp.isBallistic) return true;
  if (app.includes("firearms") && comp.isRanged) return true;

  return false;
}
window.isWeaponModAllowed = isWeaponModAllowed;
window.getWeaponCompatibility = getWeaponCompatibility;

/**
 * Calcola dinamicamente la capienza massima del caricatore dell'arma,
 * considerando la capienza base e i bonus degli upgrade installati.
 */
function calculateWeaponCapacity(w) {
  if (!w) return 0;
  const comp = getWeaponCompatibility(w);
  if (comp.isMelee && !comp.isEnergy) return 0;

  let baseCap = parseInt(w.baseCapacity !== undefined ? w.baseCapacity : (w.capacity !== undefined ? w.capacity : w.ammoMax), 10);
  if (isNaN(baseCap) || baseCap <= 0) {
    const ref = (FALLOUT_RULES_DATA.weapons || []).find(rw => rw.name.toLowerCase() === (w.name || "").toLowerCase());
    baseCap = ref && ref.capacity ? ref.capacity : 6;
  }
  if (w.baseCapacity === undefined) {
    w.baseCapacity = baseCap;
  }

  let finalCap = baseCap;
  (w.installedMods || []).forEach(m => {
    const ruleMod = (FALLOUT_RULES_DATA.weaponMods || []).find(rm => rm.id === m.id);
    if (ruleMod) {
      if (ruleMod.ammoBonus) {
        if (typeof ruleMod.ammoBonus === "number") {
          finalCap += ruleMod.ammoBonus;
        } else if (ruleMod.ammoBonus === "x2") {
          finalCap *= 2;
        }
      }
    } else {
      const mName = (m.name || "").toLowerCase();
      if (mName.includes("caricatore maggiorato") || mName.includes("large mag") || mName.includes("increased clip")) {
        finalCap += 3;
      } else if (mName.includes("tamburo") || mName.includes("drum mag")) {
        finalCap *= 2;
      }
    }
  });

  return Math.max(1, finalCap);
}
window.calculateWeaponCapacity = calculateWeaponCapacity;

/**
 * Restituisce la lista di munizioni speciali compatibili con l'arma specifica.
 */
function getCompatibleSpecialAmmo(w) {
  if (!w) return [];
  const comp = getWeaponCompatibility(w);
  if (comp.isMelee && !comp.isEnergy) {
    return [{ id: "ammo_none", name: "Nessuna (Corpo a Corpo)", effect: "Le armi da mischia e corpo a corpo non utilizzano munizioni.", modCost: "-" }];
  }

  const allSpecial = FALLOUT_RULES_DATA.specialAmmo || [];
  return allSpecial.filter(am => {
    if (comp.isLegendary) return true; // Le armi leggendarie possono impiegare qualsiasi munizione speciale
    if (am.category === "universal") return true;
    if (am.category === "shotgun" && comp.isShotgun) return true;
    if (am.category === "energy" && comp.isEnergy) return true;
    if (am.category === "heavy" && comp.isHeavy) return true;
    if (am.category === "ballistic" && comp.isBallistic) return true;
    return false;
  });
}
window.getCompatibleSpecialAmmo = getCompatibleSpecialAmmo;

function calculateWeaponTacticalBreakdown(w) {
  const wType = (w.type || "").toLowerCase();
  const wProps = (w.properties || "").toLowerCase();

  // 1. Default governing characteristic and skills based on Fallout rules
  let defaultAttr = "agility";
  let defaultSkill = "guns";
  let defaultDmgAttr = "agility";

  if (wType.includes("mischia") || wType.includes("melee") || wType.includes("corpo")) {
    defaultAttr = "strength";
    defaultSkill = "meleeWeapons";
    defaultDmgAttr = "strength";
  } else if (wType.includes("disarmato") || wType.includes("unarmed")) {
    defaultAttr = "strength";
    defaultSkill = "unarmed";
    defaultDmgAttr = "strength";
  } else if (wType.includes("energia") || wType.includes("laser") || wType.includes("plasma") || wType.includes("gauss")) {
    defaultAttr = "perception";
    defaultSkill = "energyWeapons";
    defaultDmgAttr = "perception";
  } else if (wType.includes("pesante") || wType.includes("heavy") || wType.includes("minigun") || wType.includes("lanciamissili")) {
    defaultAttr = "strength";
    defaultSkill = "guns";
    defaultDmgAttr = "strength";
  } else if (wType.includes("esplosiv") || wType.includes("granata") || wType.includes("mina")) {
    defaultAttr = "perception";
    defaultSkill = "explosives";
    defaultDmgAttr = "none";
  }

  const governingAttr = w.governingAttr || defaultAttr;
  const governingSkill = w.governingSkill || defaultSkill;
  const dmgAttr = w.dmgAttr !== undefined ? w.dmgAttr : defaultDmgAttr;

  // 2. Attributes and modifiers
  const attrVal = parseInt(character.special && character.special[governingAttr], 10) || 5;
  const attrMod = typeof getStatMod === "function" ? getStatMod(governingAttr) : (attrVal - 5);

  let dmgAttrMod = 0;
  if (dmgAttr && dmgAttr !== "none" && character.special && character.special[dmgAttr] !== undefined) {
    dmgAttrMod = typeof getStatMod === "function" ? getStatMod(dmgAttr) : ((parseInt(character.special[dmgAttr], 10) || 5) - 5);
  }

  // 3. Skill Bonus from character model
  const sk = character.skills && character.skills[governingSkill];
  const skillBonus = sk ? (parseInt(sk.total, 10) || 0) : 0;

  // 4. Base weapon hit bonus
  let weaponBaseHit = 0;
  if (w.attackMod) {
    const cleanStr = String(w.attackMod).replace("+", "").trim();
    weaponBaseHit = parseInt(cleanStr, 10) || 0;
  }

  // 5. Installed weapon modifications
  let modsHitBonus = 0;
  let modsDmgBonus = 0;
  let extraDmgDice = "";

  (w.installedMods || []).forEach(m => {
    const eff = (m.effect || "").toLowerCase();
    const name = (m.name || "").toLowerCase();

    // Sights and Barrel hit bonuses
    if (name.includes("reflex") || eff.includes("mirino reflex") || name.includes("ottica") || eff.includes("ottica")) {
      if (name.includes("ottica") || eff.includes("+2 al tiro")) modsHitBonus += 2;
      else modsHitBonus += 1;
    } else if (name.includes("canna lunga") || eff.includes("+1 al tiro")) {
      modsHitBonus += 1;
    } else {
      const hitMatch = eff.match(/\+(\d+)\s*(?:al tiro|to hit|tiro per colpire)/i);
      if (hitMatch) modsHitBonus += parseInt(hitMatch[1], 10);
    }

    // Damage bonuses
    if (name.includes("temprato") || eff.includes("castello temprato") || eff.includes("+2 al danno base")) {
      modsDmgBonus += 2;
    } else if (name.includes("condensatore") || eff.includes("+1d6")) {
      extraDmgDice = extraDmgDice ? `${extraDmgDice} + 1d6` : "1d6";
    } else {
      const dmgMatch = eff.match(/\+(\d+)\s*(?:al danno|damage|danni)/i);
      if (dmgMatch) modsDmgBonus += parseInt(dmgMatch[1], 10);
    }
  });

  // 5b. Special Ammunition Effects
  let ammoEffect = "";
  if (w.selectedAmmo && w.selectedAmmo !== "Standard" && !w.selectedAmmo.includes("Nessuna")) {
    const sAmmo = w.selectedAmmo.toLowerCase();
    if (sAmmo.includes("esplosiva") || sAmmo.includes("explosive")) {
      extraDmgDice = extraDmgDice ? `${extraDmgDice} + 1d6 esp.` : "1d6 esp.";
      ammoEffect = "Esplosiva: +1d6 danno ad area";
    } else if (sAmmo.includes("sovraccarica") || sAmmo.includes("overcharged")) {
      extraDmgDice = extraDmgDice ? `${extraDmgDice} + 1d6 energ.` : "1d6 energ.";
      ammoEffect = "Sovraccarica: +1d6 energia, -2 DT bersaglio";
    } else if (sAmmo.includes("massima potenza") || sAmmo.includes("max charge")) {
      extraDmgDice = extraDmgDice ? `${extraDmgDice} + 2d6 energ.` : "2d6 energ.";
      ammoEffect = "Massima Potenza: +2d6 energia, -4 DT bersaglio";
    } else if (sAmmo.includes("plasma infused") || sAmmo.includes("plasma")) {
      extraDmgDice = extraDmgDice ? `${extraDmgDice} + 1d6 plasma` : "1d6 plasma";
      ammoEffect = "★ Plasma Infuso: +1d6 plasma";
    } else if (sAmmo.includes("pulse slug") || sAmmo.includes("impulso emp")) {
      extraDmgDice = extraDmgDice ? `${extraDmgDice} + 2d6 shock` : "2d6 shock";
      ammoEffect = "Impulso EMP: +2d6 shock vs robot e armature atomiche";
    } else if (sAmmo.includes("a punta cava") || sAmmo.includes("hollow point")) {
      modsDmgBonus += 3;
      ammoEffect = "Punta Cava: +3 danno (raddoppia DT bersaglio)";
    } else if (sAmmo.includes("ottimizzata") || sAmmo.includes("optimized")) {
      modsDmgBonus += 2;
      ammoEffect = "Ottimizzata: +2 danno, -1 DT";
    } else if (sAmmo.includes("tracciante") || sAmmo.includes("tracer")) {
      modsHitBonus += 1;
      ammoEffect = "Tracciante: +1 al tiro per colpire";
    } else if (sAmmo.includes("perforante") || sAmmo.includes("armor piercing") || sAmmo.includes("ap")) {
      ammoEffect = "Perforante: Ignora -3 DT (Soglia Danni) del bersaglio";
    } else if (sAmmo.includes("alito del drago") || sAmmo.includes("dragon's breath") || sAmmo.includes("incendiaria")) {
      ammoEffect = "Incendiaria: Appicca fuoco al bersaglio (danno continuo nel round)";
    } else if (sAmmo.includes("flechette") || sAmmo.includes("dardi")) {
      ammoEffect = "Flechette: Causa sanguinamento, ignora -2 DT";
    } else if (sAmmo.includes("slug") || sAmmo.includes("palla singola")) {
      modsDmgBonus += 2;
      ammoEffect = "Palla Singola: +2 danno a media/lunga distanza";
    } else if (sAmmo.includes("nuka")) {
      extraDmgDice = extraDmgDice ? `${extraDmgDice} + 3d6 rad/esp.` : "3d6 rad/esp.";
      ammoEffect = "Nuka Nuke Atomica: +3d6 rad/esp. su vasta area";
    } else if (sAmmo.includes("homing") || sAmmo.includes("ricerca termica")) {
      modsHitBonus += 2;
      ammoEffect = "Ricerca Termica: +2 al tiro per colpire";
    }
  }

  // 6. Perks bonuses
  const perksHitBonus = parseInt(w.perkHitBonus, 10) || 0;
  const perksDmgBonus = parseInt(w.perkBonus, 10) || 0;

  // 7. Survival Maluses
  const surv = typeof getSurvivalMaluses === "function" ? getSurvivalMaluses() : { toHitMalus: 0, dmgMalus: 0 };
  const survHitMalus = surv.toHitMalus || 0;
  const survDmgMalus = surv.dmgMalus || 0;

  // 8. Strength requirement check
  const charStr = typeof getEffectiveStrength === "function" ? getEffectiveStrength() : (parseInt(character.special.strength, 10) || 5);
  const reqStr = parseInt(w.reqStr, 10) || 1;
  const isUnderStr = charStr < reqStr;

  // 9. Total Net TO-HIT
  const netHit = skillBonus + weaponBaseHit + modsHitBonus + perksHitBonus - survHitMalus;
  const netHitStr = netHit >= 0 ? `+${netHit}` : `${netHit}`;

  // 10. Total Net DAMAGE
  const rawBase = (w.baseDamage || w.damage || "1d6").trim();
  const baseDmgDice = rawBase.replace(/\s*[+-]\s*\d+/g, "").trim() || "1d6";
  const skillDmg = parseInt(w.skillBonus, 10) || 0;
  const condPenalty = parseInt(w.condPenalty, 10) || 0;
  const netDmgFlat = dmgAttrMod + skillDmg + modsDmgBonus + perksDmgBonus - survDmgMalus - condPenalty;

  let totalDmgFormula = baseDmgDice;
  if (extraDmgDice) totalDmgFormula += ` + ${extraDmgDice}`;
  if (netDmgFlat > 0) totalDmgFormula += ` + ${netDmgFlat}`;
  else if (netDmgFlat < 0) totalDmgFormula += ` - ${Math.abs(netDmgFlat)}`;

  return {
    governingAttr,
    attrVal,
    attrMod,
    governingSkill,
    skillBonus,
    weaponBaseHit,
    modsHitBonus,
    perksHitBonus,
    survHitMalus,
    netHit,
    netHitStr,
    dmgAttr,
    dmgAttrMod,
    baseDmgDice,
    extraDmgDice,
    skillDmg,
    modsDmgBonus,
    perksDmgBonus,
    survDmgMalus,
    condPenalty,
    netDmgFlat,
    totalDmgFormula,
    ammoEffect,
    isUnderStr,
    reqStr,
    charStr
  };
}
window.calculateWeaponTacticalBreakdown = calculateWeaponTacticalBreakdown;

function calculateWeaponDamageString(w) {
  return calculateWeaponTacticalBreakdown(w).totalDmgFormula;
}
window.calculateWeaponDamageString = calculateWeaponDamageString;

function updateWeaponDamageField(wIdx, field, val) {
  const w = character.weapons[wIdx];
  if (!w) return;

  if (field === "baseDamage") {
    w.baseDamage = val;
  } else {
    w[field] = parseInt(val, 10) || 0;
  }
  const b = calculateWeaponTacticalBreakdown(w);
  w.damage = b.totalDmgFormula;

  const totalDisplay = document.getElementById(`dmg-total-display-${wIdx}`);
  if (totalDisplay) totalDisplay.textContent = w.damage;
  const tacticalDisplay = document.getElementById(`tactical-dmg-display-${wIdx}`);
  if (tacticalDisplay) tacticalDisplay.textContent = w.damage;

  renderWeapons();
  saveCharacter();
}
window.updateWeaponDamageField = updateWeaponDamageField;

function updateWeaponGovAttr(wIdx, val) {
  if (!character.weapons[wIdx]) return;
  character.weapons[wIdx].governingAttr = val;
  renderWeapons();
  saveCharacter();
}
window.updateWeaponGovAttr = updateWeaponGovAttr;

function updateWeaponGovSkill(wIdx, val) {
  if (!character.weapons[wIdx]) return;
  character.weapons[wIdx].governingSkill = val;
  renderWeapons();
  saveCharacter();
}
window.updateWeaponGovSkill = updateWeaponGovSkill;

function updateWeaponDmgAttr(wIdx, val) {
  if (!character.weapons[wIdx]) return;
  character.weapons[wIdx].dmgAttr = val;
  renderWeapons();
  saveCharacter();
}
window.updateWeaponDmgAttr = updateWeaponDmgAttr;

function renderWeapons() {
  const container = document.getElementById("weapons-container");
  const dualWieldBanner = document.getElementById("dual-wield-status-banner");
  if (!container) return;

  // Render Dual Wield Status Banner
  if (dualWieldBanner) {
    const dwStatus = getDualWieldStatus();
    dualWieldBanner.innerHTML = dwStatus.text;
    dualWieldBanner.style.borderColor = dwStatus.isWarning ? "var(--warning)" : "var(--border-color)";
    dualWieldBanner.style.color = dwStatus.isWarning ? "var(--warning)" : "var(--text-bright)";
  }

  if (!character.weapons || character.weapons.length === 0) {
    container.innerHTML = `<div style="font-size:13px; color:var(--text-dim); padding:16px; text-align:center; background:var(--bg-card); border:1px dashed var(--border-color); border-radius:6px;">Nessuna arma equipaggiata. Clicca sui pulsanti in alto o equipaggiane una dall'inventario.</div>`;
    return;
  }

  const special = character.special || {};
  const charStr = typeof getEffectiveStrength === "function" ? getEffectiveStrength() : (parseInt(special.strength, 10) || 5);
  const charAgi = parseInt(special.agility, 10) || 5;
  const charPer = parseInt(special.perception, 10) || 5;
  const charEnd = parseInt(special.endurance, 10) || 5;
  const charInt = parseInt(special.intelligence, 10) || 5;
  const charCha = parseInt(special.charisma, 10) || 5;
  const charLck = parseInt(special.luck, 10) || 5;

  const charStrMod = typeof getStatMod === "function" ? getStatMod("strength") : (charStr - 5);
  const charAgiMod = typeof getStatMod === "function" ? getStatMod("agility") : (charAgi - 5);
  const charPerMod = typeof getStatMod === "function" ? getStatMod("perception") : (charPer - 5);
  const charEndMod = typeof getStatMod === "function" ? getStatMod("endurance") : (charEnd - 5);
  const charIntMod = typeof getStatMod === "function" ? getStatMod("intelligence") : (charInt - 5);
  const charChaMod = typeof getStatMod === "function" ? getStatMod("charisma") : (charCha - 5);
  const charLckMod = typeof getStatMod === "function" ? getStatMod("luck") : (charLck - 5);

  const skills = character.skills || {};
  const getSkTot = (k) => skills[k] ? (parseInt(skills[k].total, 10) || 0) : 0;

  let html = "";

  character.weapons.forEach((w, idx) => {
    const comp = getWeaponCompatibility(w);
    const isLegendary = comp.isLegendary;
    const qualityClass = isLegendary ? "quality-legendary" : "";
    const isTwoHanded = comp.isTwoHanded;
    const isMelee = comp.isMelee;
    const maxCap = calculateWeaponCapacity(w);
    w.ammoMax = maxCap;
    if (w.ammoCurrent === undefined) w.ammoCurrent = maxCap;

    if (w.baseDamage === undefined) w.baseDamage = w.damage || "2d4";
    if (w.skillBonus === undefined) w.skillBonus = 0;
    if (w.perkBonus === undefined) w.perkBonus = 0;
    if (w.perkHitBonus === undefined) w.perkHitBonus = 0;
    if (w.condPenalty === undefined) w.condPenalty = 0;

    const b = calculateWeaponTacticalBreakdown(w);
    w.damage = b.totalDmgFormula;

    // Range calculation with Perception
    let computedRange = w.rangeMult || "x8 / x16";
    const rangeMatch = String(w.rangeMult || "").match(/x?(\d+)\s*\/\s*x?(\d+)/);
    if (rangeMatch) {
      const shortDist = parseInt(rangeMatch[1], 10) * charPer;
      const longDist = parseInt(rangeMatch[2], 10) * charPer;
      computedRange = `${shortDist}m / ${longDist}m (${w.rangeMult})`;
    }

    html += `
      <div class="weapon-card ${qualityClass}" id="weapon-card-${idx}">
        <!-- WEAPON HEADER -->
        <div class="weapon-card-header">
          <div style="display:flex; align-items:center; gap:8px; flex:1; flex-wrap:wrap;">
            <input type="text" class="input-field weapon-title-input" value="${w.name || "Nuova Arma"}" onchange="updateWeaponField(${idx}, 'name', this.value)" style="font-weight:900; font-size:15px; color:var(--text-bright); min-width:180px;">
            <select class="input-field quality-select" onchange="updateWeaponQuality(${idx}, this.value)" title="Qualità Arma">
              <option value="standard" ${!isLegendary ? "selected" : ""}>Standard</option>
              <option value="legendary" ${isLegendary ? "selected" : ""}>★ Leggendaria</option>
            </select>
            <span class="bio-item-tag ${isTwoHanded ? "rival" : "ally"}" style="font-size:11px; font-weight:800;">
              ${isTwoHanded ? "2 Mani" : "1 Mano"}
            </span>
          </div>
          <div style="display:flex; gap:5px;">
            <button class="btn btn-sm btn-inv-equip no-print" onclick="unequipWeaponToInventory(${idx})" title="Riponi quest'arma nello zaino">📦 Riponi</button>
            <button class="btn btn-sm btn-danger no-print" onclick="deleteWeapon(${idx})" title="Elimina Arma">✕</button>
          </div>
        </div>

        <!-- GOVERNING CHARACTERISTIC & SKILL PANEL -->
        <div class="weapon-governing-panel">
          <div class="governing-item">
            <span class="governing-label">🎯 Caratteristica per Colpire:</span>
            <select class="governing-select" onchange="updateWeaponGovAttr(${idx}, this.value)" title="Caratteristica SPECIAL che determina la base per colpire">
              <option value="agility" ${b.governingAttr === "agility" ? "selected" : ""}>Agilità [AGI ${charAgi} (${charAgiMod >= 0 ? "+" + charAgiMod : charAgiMod})] (Pistole, Fucili)</option>
              <option value="strength" ${b.governingAttr === "strength" ? "selected" : ""}>Forza [FOR ${charStr} (${charStrMod >= 0 ? "+" + charStrMod : charStrMod})] (Mischia, Disarmato, Pesanti)</option>
              <option value="perception" ${b.governingAttr === "perception" ? "selected" : ""}>Percezione [PER ${charPer} (${charPerMod >= 0 ? "+" + charPerMod : charPerMod})] (Armi Energia, Cecchino)</option>
              <option value="endurance" ${b.governingAttr === "endurance" ? "selected" : ""}>Costituzione [END ${charEnd} (${charEndMod >= 0 ? "+" + charEndMod : charEndMod})]</option>
              <option value="intelligence" ${b.governingAttr === "intelligence" ? "selected" : ""}>Intelligenza [INT ${charInt} (${charIntMod >= 0 ? "+" + charIntMod : charIntMod})]</option>
              <option value="charisma" ${b.governingAttr === "charisma" ? "selected" : ""}>Carisma [CHA ${charCha} (${charChaMod >= 0 ? "+" + charChaMod : charChaMod})]</option>
              <option value="luck" ${b.governingAttr === "luck" ? "selected" : ""}>Fortuna [LCK ${charLck} (${charLckMod >= 0 ? "+" + charLckMod : charLckMod})]</option>
            </select>
          </div>
          <div class="governing-item">
            <span class="governing-label">📖 Abilità Applicata:</span>
            <select class="governing-select" onchange="updateWeaponGovSkill(${idx}, this.value)" title="Abilità d20 le cui competenze si applicano all'attacco">
              <option value="guns" ${b.governingSkill === "guns" ? "selected" : ""}>Pistole / Armi Fuoco [Totale: +${getSkTot("guns")}]</option>
              <option value="energyWeapons" ${b.governingSkill === "energyWeapons" ? "selected" : ""}>Armi ad Energia [Totale: +${getSkTot("energyWeapons")}]</option>
              <option value="meleeWeapons" ${b.governingSkill === "meleeWeapons" ? "selected" : ""}>Corpo a Corpo [Totale: +${getSkTot("meleeWeapons")}]</option>
              <option value="unarmed" ${b.governingSkill === "unarmed" ? "selected" : ""}>Disarmato [Totale: +${getSkTot("unarmed")}]</option>
              <option value="explosives" ${b.governingSkill === "explosives" ? "selected" : ""}>Esplosivi [Totale: +${getSkTot("explosives")}]</option>
            </select>
          </div>
          <div class="governing-item">
            <span class="governing-label">💥 Caratteristica Danno:</span>
            <select class="governing-select" onchange="updateWeaponDmgAttr(${idx}, this.value)" title="Caratteristica il cui modificatore si aggiunge al danno secondo il regolamento">
              <option value="agility" ${b.dmgAttr === "agility" ? "selected" : ""}>Agilità (+${charAgiMod}) [Armi a Distanza p.64]</option>
              <option value="strength" ${b.dmgAttr === "strength" ? "selected" : ""}>Forza (+${charStrMod}) [Mischia / Disarmato p.60]</option>
              <option value="perception" ${b.dmgAttr === "perception" ? "selected" : ""}>Percezione (+${charPerMod}) [Armi Energia]</option>
              <option value="none" ${b.dmgAttr === "none" ? "selected" : ""}>Nessun Bonus Caratteristica (+0)</option>
            </select>
          </div>
        </div>

        <!-- TACTICAL COMBAT BANNER: HIGH-CONTRAST TO HIT & DAMAGE -->
        <div class="weapon-tactical-banner">
          <!-- 1. TO HIT BADGE -->
          <div class="tactical-badge to-hit-badge">
            <span class="tactical-badge-icon">🎯</span>
            <div class="tactical-badge-body">
              <div class="tactical-badge-label">TO HIT (TIRO PER COLPIRE)</div>
              <div class="tactical-badge-row">
                <span class="tactical-badge-val" title="Tiro per colpire effettivo d20">${b.netHitStr}</span>
                <button type="button" class="btn btn-sm btn-roll-weapon no-print" onclick="openDiceModal({ weapon: character.weapons[${idx}], mode: 'attack' })" title="Tira per colpire (d20 + ${b.netHitStr})">🎲 Tira Colpire</button>
              </div>
              <!-- Itemized breakdown pills -->
              <div class="tactical-pills-row">
                <span class="tactical-pill pill-stat" title="Modificatore caratteristica ${b.governingAttr.toUpperCase()}">${b.governingAttr.substring(0,3).toUpperCase()}: ${b.attrMod >= 0 ? "+" + b.attrMod : b.attrMod}</span>
                <span class="tactical-pill pill-skill" title="Bonus conferito dall'abilità ${b.governingSkill}">Skill: +${b.skillBonus}</span>
                <span class="tactical-pill pill-base" title="Modificatore base arma">Arma: <input type="text" class="pill-input" value="${w.attackMod || "+0"}" onchange="updateWeaponField(${idx}, 'attackMod', this.value); renderWeapons();"></span>
                <span class="tactical-pill pill-mods" title="Bonus da modifiche installate">Mod: +${b.modsHitBonus}</span>
                <span class="tactical-pill pill-perk" title="Bonus talenti/perk">Perk: <input type="number" class="pill-input" value="${w.perkHitBonus || 0}" onchange="updateWeaponField(${idx}, 'perkHitBonus', parseInt(this.value,10)||0); renderWeapons();"></span>
                ${b.survHitMalus > 0 ? `<span class="tactical-pill pill-malus" title="Malus Sopravvivenza (Fame, Sete, Stanchezza, Fatica, Rads)">Sopravvivenza: -${b.survHitMalus}</span>` : ""}
              </div>
            </div>
          </div>

          <!-- 2. DAMAGE BADGE -->
          <div class="tactical-badge damage-badge">
            <span class="tactical-badge-icon">💥</span>
            <div class="tactical-badge-body">
              <div class="tactical-badge-label">DAMAGE (DANNO TOTALE)</div>
              <div class="tactical-badge-row">
                <span class="tactical-badge-val" id="tactical-dmg-display-${idx}" title="Formula danno finale">${b.totalDmgFormula}</span>
                <button type="button" class="btn btn-sm btn-roll-dmg no-print" onclick="openDiceModal({ weapon: character.weapons[${idx}], mode: 'damage' })" title="Tira il danno dell'arma con dadi speciali / da combattimento">💥 Tira Danno</button>
              </div>
              <!-- Itemized breakdown pills -->
              <div class="tactical-pills-row">
                <span class="tactical-pill pill-base" title="Dadi base dell'arma">Dadi: <input type="text" class="pill-input" style="width:50px;" value="${b.baseDmgDice}" onchange="updateWeaponDamageField(${idx}, 'baseDamage', this.value);"></span>
                ${b.dmgAttr && b.dmgAttr !== "none" ? `<span class="tactical-pill pill-stat" title="Bonus caratteristica al danno">${b.dmgAttr.substring(0,3).toUpperCase()}: ${b.dmgAttrMod >= 0 ? "+" + b.dmgAttrMod : b.dmgAttrMod}</span>` : ""}
                <span class="tactical-pill pill-skill" title="Bonus abilità al danno">Skill: <input type="number" class="pill-input" value="${w.skillBonus || 0}" onchange="updateWeaponDamageField(${idx}, 'skillBonus', this.value);"></span>
                <span class="tactical-pill pill-mods" title="Bonus danno da modifiche installate">Mod: +${b.modsDmgBonus}</span>
                <span class="tactical-pill pill-perk" title="Bonus danno da Perk">Perk: <input type="number" class="pill-input" value="${w.perkBonus || 0}" onchange="updateWeaponDamageField(${idx}, 'perkBonus', this.value);"></span>
                ${b.survDmgMalus > 0 ? `<span class="tactical-pill pill-malus" title="Penalità sfinimento sopravvivenza">Sfinimento: -${b.survDmgMalus}</span>` : ""}
                ${b.condPenalty > 0 ? `<span class="tactical-pill pill-malus" title="Penalità usura arma">Usura: -${b.condPenalty}</span>` : ""}
              </div>
            </div>
          </div>
        </div>

        ${b.isUnderStr ? `
          <div class="equip-warning-badge" style="background:#fee2e2; border:1.5px solid #dc2626; color:#991b1b; padding:8px 12px; border-radius:6px; font-weight:800; font-size:12.5px; display:flex; align-items:center; gap:8px;">
            ⚠️ FORZA INSUFFICIENTE (Richiede FOR ${b.reqStr}, attuale ${b.charStr}): Svantaggio a tutti gli attacchi e costo AP +2 per attacco!
          </div>` : ""
        }

        ${isLegendary ? `
          <div class="legendary-traits-section">
            <div class="legendary-traits-header">
              <span class="legendary-badge">★ TRATTI LEGGENDARI (${(w.legendaryEffects || []).length})</span>
              <button type="button" class="btn btn-sm no-print" onclick="addWeaponLegendaryTrait(${idx})">+ Aggiungi Tratto</button>
            </div>
            <div class="legendary-traits-list">
              ${(w.legendaryEffects && w.legendaryEffects.length > 0 ? w.legendaryEffects : [""]).map((eff, tIdx) => `
                <div class="legendary-trait-row">
                  <span class="legendary-star-icon">★</span>
                  <input type="text" class="input-field legendary-effect-input" value="${eff || ""}" placeholder="Es. Biforcata, Esplosiva, Furente, Penetrazione, Due Colpi..." oninput="updateWeaponLegendaryTrait(${idx}, ${tIdx}, this.value)">
                  <button type="button" class="btn btn-sm btn-danger no-print" onclick="removeWeaponLegendaryTrait(${idx}, ${tIdx})" title="Rimuovi tratto">✕</button>
                </div>
              `).join("")}
            </div>
          </div>` : ""
        }

        <!-- Weapon Stats Grid -->
        <div class="weapon-stats-grid">
          <div class="weapon-stat-unit">
            <span class="stat-unit-label">Tipo</span>
            <input type="text" class="stat-unit-val" value="${w.type || "Pistola"}" oninput="updateWeaponField(${idx}, 'type', this.value)">
          </div>
          <div class="weapon-stat-unit">
            <span class="stat-unit-label">AP</span>
            <input type="number" class="stat-unit-val" value="${w.ap || 4}" oninput="updateWeaponField(${idx}, 'ap', parseInt(this.value,10)||0)">
          </div>
          <div class="weapon-stat-unit">
            <span class="stat-unit-label">Req FOR</span>
            <input type="number" class="stat-unit-val" value="${w.reqStr || 1}" oninput="updateWeaponField(${idx}, 'reqStr', parseInt(this.value,10)||0); renderWeapons();">
          </div>
          <div class="weapon-stat-unit">
            <span class="stat-unit-label">Gittata Effettiva</span>
            <input type="text" class="stat-unit-val" value="${computedRange}" oninput="updateWeaponField(${idx}, 'rangeMult', this.value)" title="Gittata Corta / Lunga calcolata moltiplicando per PER">
          </div>
          <div class="weapon-stat-unit">
            <span class="stat-unit-label">Critico</span>
            <input type="text" class="stat-unit-val" value="${w.crit || "20, 1d6"}" oninput="updateWeaponField(${idx}, 'crit', this.value)">
          </div>
          <div class="weapon-stat-unit">
            <span class="stat-unit-label">Peso (lbs)</span>
            <input type="number" class="stat-unit-val" value="${w.load || 4}" oninput="updateWeaponField(${idx}, 'load', parseFloat(this.value)||0)">
          </div>
        </div>

        <!-- Dedicated High-Contrast Ammo Module -->
        <div class="weapon-ammo-card">
          <div class="ammo-card-top">
            <div class="ammo-counter-unit">
              <span class="ammo-unit-label">Munizioni (Caricate / Max)</span>
              <div class="ammo-inputs-wrap">
                <input type="number" class="ammo-num-input" value="${w.ammoCurrent !== undefined ? w.ammoCurrent : maxCap}" oninput="updateWeaponField(${idx}, 'ammoCurrent', parseInt(this.value,10)||0)" title="Colpi attualmente nel caricatore" ${isMelee ? 'disabled style="opacity:0.4;"' : ''}>
                <span class="ammo-slash">/</span>
                <input type="number" class="ammo-num-input" value="${maxCap}" oninput="updateWeaponField(${idx}, 'ammoMax', parseInt(this.value,10)||0)" title="Capienza caricatore (modificata da upgrade)" ${isMelee ? 'disabled style="opacity:0.4;"' : ''}>
                <span class="ammo-type-tag" title="Calibro / Munizione">${w.ammo || w.ammoType || (isMelee ? "Mischia" : "-")}</span>
              </div>
            </div>

            <div class="ammo-select-unit">
              <span class="ammo-unit-label">Munizione Speciale Compatibile</span>
              <select class="input-field ammo-type-select" onchange="updateWeaponAmmo(${idx}, this.value)" ${isMelee ? 'disabled style="opacity:0.5;"' : ''}>
                ${renderAmmoOptions(w.selectedAmmo, w)}
              </select>
            </div>
          </div>

          <div id="ammo-effect-${idx}" class="ammo-effect-banner">
            ${getAmmoEffectDescription(w.selectedAmmo, w) || "Effetto: Munizione convenzionale standard da tabella."}
          </div>
        </div>

        <!-- Weapon Properties Field -->
        <div style="padding:8px 10px; background:var(--bg-input); border:1.5px solid var(--border-color); border-radius:var(--radius); margin-top:4px;">
          <div style="display:flex; align-items:center; justify-content:space-between; font-size:11.5px; color:var(--text-dim); margin-bottom:3px;">
            <span style="font-weight:bold; text-transform:uppercase;">Proprietà & Note (Req FOR: ${b.reqStr} | ${isTwoHanded ? "A Due Mani" : "A Una Mano"}):</span>
          </div>
          <input type="text" class="input-field" value="${w.properties || ""}" oninput="updateWeaponField(${idx}, 'properties', this.value)" style="font-size:13px; font-weight:600;" placeholder="Es. Rinculo, Durevole, Accurato, A Due Mani...">
        </div>

        <!-- Weapon Installed Mods Section (+) -->
        <div class="weapon-mods-section">
          <div class="weapon-mods-header">
            <span style="font-weight:800; font-size:12px; text-transform:uppercase;">Modifiche Installate (${(w.installedMods || []).reduce((sum, m) => sum + (m.slots || 1), 0)}/${isLegendary ? 8 : (isMelee ? 4 : 6)} Slot)</span>
            <button type="button" class="btn btn-sm no-print" onclick="openWeaponModPicker(${idx})">+ Aggiungi Modifica</button>
          </div>
          <div class="installed-mods-list">
            ${renderInstalledModsList(w.installedMods, idx)}
          </div>
        </div>
      </div>`;
  });

  container.innerHTML = html;
  if (typeof renderDashboardPerks === "function") renderDashboardPerks();
}

function getAmmoEffectDescription(ammoName, w) {
  if (!w && typeof character !== "undefined" && character.weapons) {
    w = character.weapons.find(x => x && x.selectedAmmo === ammoName);
  }
  if (w) {
    const comp = getWeaponCompatibility(w);
    if (comp.isMelee && !comp.isEnergy) {
      return "Arma da Mischia: non impiega munizioni convenzionali.";
    }
  }
  const match = (FALLOUT_RULES_DATA.specialAmmo || []).find(a => a.name === ammoName);
  return match ? `⚡ Effetto ${ammoName}: ${match.effect}` : "Effetto: Munizione convenzionale standard da tabella.";
}

function hasDualWieldPerk() {
  const perks = character.perks || [];
  return perks.some(p => {
    const n = (p.name || "").toLowerCase();
    const id = (p.id || "").toLowerCase();
    return n.includes("due armi") || n.includes("dual") || n.includes("ambidestro") || id.includes("dual");
  });
}

function getDualWieldStatus() {
  const weapons = character.weapons || [];
  const charStr = typeof getEffectiveStrength === "function" ? getEffectiveStrength() : (parseInt(character.special.strength, 10) || 5);
  const hasDualPerk = hasDualWieldPerk();

  if (weapons.length === 0) {
    return { text: "✋ <strong>MANI LIBERE:</strong> Nessuna arma attiva equipaggiata.", isWarning: false };
  }
  if (weapons.length === 1) {
    const w = weapons[0];
    const isTwoHanded = w.hands === 2 || (w.properties || "").toLowerCase().includes("a due mani");
    if (isTwoHanded) {
      return { text: `✋✋ <strong>IMPUGNATURA A DUE MANI:</strong> ${w.name}`, isWarning: false };
    }
    return { text: `✋ <strong>ARMA IMPUGNATA:</strong> ${w.name} (1 Mano)`, isWarning: false };
  }
  if (weapons.length >= 2) {
    const w1 = weapons[0];
    const w2 = weapons[1];
    const w1TwoHand = w1.hands === 2 || (w1.properties || "").toLowerCase().includes("a due mani");
    const w2TwoHand = w2.hands === 2 || (w2.properties || "").toLowerCase().includes("a due mani");

    if (w1TwoHand || w2TwoHand) {
      return { text: `⚠️ <strong>CONFLITTO MANI:</strong> ${w1TwoHand ? w1.name : w2.name} è a due mani! Richiede entrambe le mani libere.`, isWarning: true };
    }

    if (hasDualPerk) {
      const heavyDual = (parseFloat(w1.load) > 4 && parseFloat(w2.load) > 4);
      if (heavyDual && charStr < 7) {
        return { text: `⚠️ <strong>DUAL WIELDING PESANTE:</strong> ${w1.name} + ${w2.name} (Richiede FOR 7+ per evitare penalità AP)`, isWarning: true };
      }
      return { text: `⚔️ <strong>DUAL WIELDING ATTIVO (Talento Acquisito):</strong> ${w1.name} (Mano Primaria) + ${w2.name} (Mano Secondaria AP -1)`, isWarning: false };
    } else {
      return { 
        text: `✋ <strong>ARMA ATTIVA:</strong> ${w1.name} | ✋ <strong>ARMA SECONDARIA (Foderata):</strong> ${w2.name} <span style="font-size:11px; color:var(--text-dim); margin-left:6px;">(Dual Wielding non attivo: richiede il Talento 'Combattere con Due Armi')</span>`, 
        isWarning: false 
      };
    }
  }
}

function renderAmmoOptions(selected, w) {
  let opts = "";
  const compatible = getCompatibleSpecialAmmo(w);
  compatible.forEach(am => {
    const isSel = am.name === selected ? "selected" : "";
    opts += `<option value="${am.name}" ${isSel}>${am.name} (${am.modCost})</option>`;
  });
  return opts;
}

function renderInstalledModsList(mods, weaponIdx) {
  if (!mods || mods.length === 0) {
    return `<div style="font-size:11px; color:var(--text-dim); padding:2px 0;">Nessuna modifica installata. Clicca [+ Aggiungi Modifica].</div>`;
  }
  let html = "";
  mods.forEach((m, modIdx) => {
    html += `
      <div class="installed-mod-row">
        <span class="mod-dot">●</span>
        <div style="flex:1;">
          <span class="mod-name">${m.name}</span>
          <div class="mod-effect-brief">${m.effect || ""}</div>
        </div>
        <button class="btn btn-sm btn-danger btn-del-mod no-print" onclick="removeWeaponMod(${weaponIdx}, ${modIdx})">✕</button>
      </div>`;
  });
  return html;
}

function updateWeaponField(weaponIdx, field, val) {
  if (!character.weapons[weaponIdx]) return;
  character.weapons[weaponIdx][field] = val;
  if (field === "load") updateInventoryAndCarry();
  saveCharacter();
}

function updateWeaponQuality(weaponIdx, qualityVal) {
  if (!character.weapons[weaponIdx]) return;
  const w = character.weapons[weaponIdx];
  w.quality = qualityVal;
  if (qualityVal === "legendary") {
    if (!Array.isArray(w.legendaryEffects) || w.legendaryEffects.length === 0) {
      w.legendaryEffects = w.legendaryEffect ? [w.legendaryEffect] : [""];
    }
  }
  renderWeapons();
  saveCharacter();
}

function addWeaponLegendaryTrait(weaponIdx) {
  const w = character.weapons[weaponIdx];
  if (!w) return;
  if (!Array.isArray(w.legendaryEffects)) {
    w.legendaryEffects = w.legendaryEffect ? [w.legendaryEffect] : [];
  }
  w.legendaryEffects.push("");
  renderWeapons();
  saveCharacter();
}

function updateWeaponLegendaryTrait(weaponIdx, traitIdx, val) {
  const w = character.weapons[weaponIdx];
  if (!w) return;
  if (!Array.isArray(w.legendaryEffects)) {
    w.legendaryEffects = w.legendaryEffect ? [w.legendaryEffect] : [];
  }
  w.legendaryEffects[traitIdx] = val;
  w.legendaryEffect = w.legendaryEffects.filter(Boolean).join(" | ");
  saveCharacter();
}

function removeWeaponLegendaryTrait(weaponIdx, traitIdx) {
  const w = character.weapons[weaponIdx];
  if (!w || !Array.isArray(w.legendaryEffects)) return;
  w.legendaryEffects.splice(traitIdx, 1);
  w.legendaryEffect = w.legendaryEffects.filter(Boolean).join(" | ");
  renderWeapons();
  saveCharacter();
}

function updateWeaponAmmo(weaponIdx, ammoName) {
  if (!character.weapons[weaponIdx]) return;
  character.weapons[weaponIdx].selectedAmmo = ammoName;
  const descEl = document.getElementById(`ammo-effect-${weaponIdx}`);
  if (descEl) descEl.textContent = getAmmoEffectDescription(ammoName);
  saveCharacter();
}

function removeWeaponMod(weaponIdx, modIdx) {
  if (!character.weapons[weaponIdx]) return;
  character.weapons[weaponIdx].installedMods.splice(modIdx, 1);
  renderWeapons();
  saveCharacter();
}

function deleteWeapon(weaponIdx) {
  if (confirm("Vuoi davvero eliminare quest'arma?")) {
    character.weapons.splice(weaponIdx, 1);
    renderWeapons();
    updateInventoryAndCarry();
    saveCharacter();
  }
}

// =============================================================================
// TRAITS ENGINE WITH 1-5 RANK PROGRESSION
// =============================================================================

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function autoResizeTextarea(ta) {
  if (!ta) return;
  ta.style.height = 'auto';
  const targetH = Math.max(145, ta.scrollHeight + 8);
  ta.style.setProperty('height', targetH + 'px', 'important');
}

function findCompendiumTrait(t) {
  if (!t) return null;
  const rules = (typeof FALLOUT_RULES_DATA !== 'undefined') ? FALLOUT_RULES_DATA : ((typeof window !== 'undefined' && window.FALLOUT_RULES_DATA) ? window.FALLOUT_RULES_DATA : (typeof global !== 'undefined' ? global.FALLOUT_RULES_DATA : null));
  const list = rules?.traitsCompendium || [];
  if (t.id && list.find(x => x.id === t.id)) return list.find(x => x.id === t.id);
  if (t.traitRefId && list.find(x => x.id === t.traitRefId)) return list.find(x => x.id === t.traitRefId);
  const normName = (t.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  return list.find(x => {
    const normX = (x.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    return normX === normName || normX.includes(normName) || normName.includes(normX);
  }) || null;
}

function isTraitAllowedForRace(trait, charRace) {
  if (!trait) return false;
  const race = (charRace || "human").toLowerCase().trim();
  const req = (trait.req || "").toLowerCase();
  const cat = (trait.category || "").toLowerCase();

  // If it's a racial trait or mentions a race in requirements:
  if (cat.includes("razziale") || req.includes("umano") || req.includes("human") || 
      req.includes("ghoul") || req.includes("synth") || req.includes("robot") || 
      req.includes("super mutant") || req.includes("mutante")) {
    
    if (race === "human" && (req.includes("umano") || req.includes("human"))) return true;
    if (race === "ghoul" && req.includes("ghoul")) return true;
    if (race === "synth" && req.includes("synth")) return true;
    if (race === "robot" && req.includes("robot")) return true;
    if (race === "super_mutant" && (req.includes("super mutant") || req.includes("mutante"))) return true;
    return false; // Exclusive to another race!
  }

  // General and background traits are allowed
  return true;
}

function toggleTraitWildWasteland(idx) {
  if (!character.traits || !character.traits[idx]) return;
  const t = character.traits[idx];
  const compT = findCompendiumTrait(t);
  t.isWildWasteland = !t.isWildWasteland;

  if (compT && t.category !== "Personalizzato") {
    const isEN = t.displayLang === "EN";
    if (t.isWildWasteland) {
      t.effect = isEN ? (compT.wildWastelandEn || compT.descEn) : (compT.wildWasteland || compT.desc);
    } else {
      t.effect = isEN ? compT.descEn : compT.desc;
    }
  }
  renderTraits();
  saveCharacter();
  showToast(`🏜️ Wild Wasteland per <strong>${t.name}</strong>: ${t.isWildWasteland ? 'ATTIVATO' : 'DISATTIVATO'}`, "info");
}
window.toggleTraitWildWasteland = toggleTraitWildWasteland;

function toggleTraitLang(idx) {
  if (!character.traits || !character.traits[idx]) return;
  const t = character.traits[idx];
  const compT = findCompendiumTrait(t);
  t.displayLang = (t.displayLang === "EN") ? "IT" : "EN";

  if (compT && t.category !== "Personalizzato") {
    const isWW = !!t.isWildWasteland;
    const isEN = t.displayLang === "EN";
    if (isWW) {
      t.effect = isEN ? (compT.wildWastelandEn || compT.descEn) : (compT.wildWasteland || compT.desc);
    } else {
      t.effect = isEN ? compT.descEn : compT.desc;
    }
  }
  renderTraits();
  saveCharacter();
  showToast(`🌐 Lingua per <strong>${t.name}</strong>: ${t.displayLang === "EN" ? "Inglese (Manuale)" : "Italiano"}`, "info");
}
window.toggleTraitLang = toggleTraitLang;

function renderTraits() {
  const container = document.getElementById("traits-list-container");
  if (!container) return;

  if (!character.traits || character.traits.length === 0) {
    container.innerHTML = `<div style="font-size:13px; color:var(--text-dim); padding:12px; text-align:center;">Nessun tratto assegnato.<br>Clicca <strong>[+ Compendio]</strong> o <strong>[+ Custom]</strong> per aggiungerne uno.</div>`;
    return;
  }

  let html = "";
  character.traits.forEach((t, idx) => {
    const compT = findCompendiumTrait(t);
    if (!t.displayLang) t.displayLang = "IT";

    // Auto-sync effect text with official compendium
    if (compT && t.category !== "Personalizzato") {
      const isWW = !!t.isWildWasteland;
      const isEN = t.displayLang === "EN";
      if (isWW) {
        t.effect = isEN ? (compT.wildWastelandEn || compT.descEn) : (compT.wildWasteland || compT.desc);
      } else {
        t.effect = isEN ? compT.descEn : compT.desc;
      }
    }

    const hasWW = !!(compT && (compT.wildWasteland || compT.wildWastelandEn));
    const isWW = !!t.isWildWasteland;
    const isEN = t.displayLang === "EN";
    const hasEnText = !!(compT && compT.descEn);

    html += `
      <div class="trait-card" style="${isWW ? 'border-left: 4.5px solid #d97706; background: rgba(217, 119, 6, 0.03);' : ''}">
        <div class="trait-card-header" style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <input type="text" class="input-field trait-name" value="${escapeHtml(t.name || "Nuovo Tratto")}" onchange="updateTraitField(${idx}, 'name', this.value)" placeholder="Nome Tratto" style="font-weight:800; font-size:14.5px; color:var(--text-bright); flex:1; min-width:0;">
          <div class="trait-card-controls no-print" style="display:flex; align-items:center; gap:6px;">
            ${hasWW ? `
              <button type="button" class="btn btn-xs ${isWW ? 'btn-warning' : 'btn-outline-secondary'}" onclick="toggleTraitWildWasteland(${idx})" title="Attiva/Disattiva variante opzionale Zona Contaminata Selvaggia (Wild Wasteland)" style="font-size:11px; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:4px; cursor:pointer;">
                ${isWW ? '🏜️ Wild Wasteland: ON' : '🏜️ Wild Wasteland: OFF'}
              </button>
            ` : ''}
            ${hasEnText ? `
              <button type="button" class="btn btn-xs ${isEN ? 'btn-warning' : 'btn-outline-primary'}" onclick="toggleTraitLang(${idx})" title="Alterna tra traduzione in italiano e testo originale in inglese" style="font-size:11px; font-weight:800; padding:2px 7px; border-radius:4px; display:inline-flex; align-items:center; gap:4px; cursor:pointer;">
                ${isEN ? '🇮🇹 IT' : '🇬🇧 EN'}
              </button>
            ` : ''}
            <button type="button" class="btn btn-sm btn-danger trait-del-btn" onclick="deleteTrait(${idx})" title="Rimuovi Tratto">✕</button>
          </div>
        </div>
        <textarea class="input-field trait-effect" oninput="autoResizeTextarea(this)" onchange="updateTraitField(${idx}, 'effect', this.value)" placeholder="Descrizione ed effetti del tratto...">${t.effect || ""}</textarea>
        ${hasWW && isWW ? `
          <div style="font-size:11px; color:#d97706; font-weight:700; margin-top:3px; display:flex; align-items:center; gap:4px;">
            ⚠️ Regola opzionale Wild Wasteland attiva (raddoppia benefici e penalità)
          </div>
        ` : ''}
      </div>`;
  });

  container.innerHTML = html;
  const scheduleTask = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (cb) => setTimeout(cb, 16);
  scheduleTask(() => {
    if (container.querySelectorAll) {
      container.querySelectorAll('textarea.trait-effect').forEach(autoResizeTextarea);
    }
  });

  if (typeof renderDashboardPerks === "function") renderDashboardPerks();
}

function adjustTraitRank(idx, delta) {
  // Traits in Fallout TTRPG do not have 1-5 ranks, but kept for compatibility
  renderTraits();
}

function updateTraitField(idx, field, val) {
  if (!character.traits[idx]) return;
  character.traits[idx][field] = val;
  saveCharacter();
}

function deleteTrait(idx) {
  character.traits.splice(idx, 1);
  renderTraits();
  saveCharacter();
}

// =============================================================================
// PERKS ENGINE & S.P.E.C.I.A.L. AVAILABILITY CHECKER
// =============================================================================

function isPerkAvailable(perk) {
  if (!perk) return { available: true, reason: "" };

  const charLvl = parseInt(character.info.level, 10) || 1;

  // Level check
  if (perk.reqLvl && charLvl < perk.reqLvl) {
    return { available: false, reason: `Richiede Livello ${perk.reqLvl} (Attuale ${charLvl})` };
  }

  // Stat check
  if (perk.reqStat && perk.reqVal) {
    const statKey = perk.reqStat.toLowerCase();
    const charStatVal = parseInt(character.special[statKey], 10) || 5;
    if (charStatVal < perk.reqVal) {
      const statLabelMap = {
        strength: "Forza", perception: "Percezione", endurance: "Robustezza",
        charisma: "Carisma", intelligence: "Intelligenza", agility: "Agilità", luck: "Fortuna"
      };
      return { 
        available: false, 
        reason: `Richiede ${statLabelMap[statKey] || perk.reqStat} ${perk.reqVal}+ (Attuale ${charStatVal})` 
      };
    }
  }

  return { available: true, reason: "Requisiti Soddisfatti" };
}

function findCompendiumPerk(p) {
  if (!p) return null;
  const perks = (typeof FALLOUT_RULES_DATA !== "undefined" && FALLOUT_RULES_DATA.perks) ? FALLOUT_RULES_DATA.perks : [];
  const pId = (p.perkRefId || p.id || "").toString().toLowerCase().trim();
  const pName = (p.name || "").toString().toLowerCase().trim();

  // 1. Direct ID match
  let found = perks.find(item => item.id.toLowerCase() === pId || ("p_" + item.id.toLowerCase()) === pId);
  if (found) return found;

  // 2. Exact name match
  found = perks.find(item => 
    item.name.toLowerCase() === pName || 
    (item.nameEN && item.nameEN.toLowerCase() === pName)
  );
  if (found) return found;

  // 3. Name with parentheses e.g. "Diavolo Cieco (Blind Devil)"
  const matchParentheses = pName.match(/\(([^)]+)\)/);
  const insideParen = matchParentheses ? matchParentheses[1].trim().toLowerCase() : "";
  const outsideParen = pName.replace(/\([^)]+\)/, "").trim().toLowerCase();

  found = perks.find(item => {
    const itemName = item.name.toLowerCase();
    const itemEn = (item.nameEN || "").toLowerCase();
    if (insideParen && (itemEn === insideParen || itemName === insideParen || item.id.toLowerCase() === insideParen)) return true;
    if (outsideParen && (itemName.includes(outsideParen) || outsideParen.includes(itemName) || itemEn === outsideParen)) return true;
    if (itemEn && (pName.includes(itemEn) || itemEn.includes(pName))) return true;
    return false;
  });
  if (found) return found;

  // 4. Substring fallback
  if (pName.length > 3) {
    found = perks.find(item => item.name.toLowerCase().includes(pName) || pName.includes(item.name.toLowerCase()));
    if (found) return found;
  }

  return null;
}
window.findCompendiumPerk = findCompendiumPerk;

function togglePerkCardLang(idx) {
  if (!character.perks || !character.perks[idx]) return;
  const p = character.perks[idx];
  const compP = findCompendiumPerk(p);
  const rankIdx = (p.rank && p.rank > 1) ? p.rank - 1 : 0;

  if (compP) {
    p.effectEN = (compP.ranksEN && compP.ranksEN[rankIdx]) || compP.ranksEN?.[0] || compP.effectEN || p.effectEN || "";
    p.effectIT = (compP.ranksIT && compP.ranksIT[rankIdx]) || compP.ranksIT?.[0] || (compP.ranks && compP.ranks[rankIdx]) || compP.ranks?.[0] || compP.effectIT || compP.effect || p.effectIT || "";
  }

  if (p.displayLang === "EN") {
    p.displayLang = "IT";
    p.effect = p.effectIT || p.effect;
  } else {
    p.displayLang = "EN";
    p.effect = p.effectEN || p.effect;
  }

  renderPerks();
  saveCharacter();
}
window.togglePerkCardLang = togglePerkCardLang;

function toggleAllPerksLang() {
  if (!character.perks || character.perks.length === 0) return;
  const hasAnyEN = character.perks.some(p => p.displayLang === "EN");
  const targetLang = hasAnyEN ? "IT" : "EN";

  character.perks.forEach((p, idx) => {
    const compP = findCompendiumPerk(p);
    const rankIdx = (p.rank && p.rank > 1) ? p.rank - 1 : 0;
    if (compP) {
      p.effectEN = (compP.ranksEN && compP.ranksEN[rankIdx]) || compP.ranksEN?.[0] || compP.effectEN || p.effectEN || "";
      p.effectIT = (compP.ranksIT && compP.ranksIT[rankIdx]) || compP.ranksIT?.[0] || (compP.ranks && compP.ranks[rankIdx]) || compP.ranks?.[0] || compP.effectIT || compP.effect || p.effectIT || "";
    }
    p.displayLang = targetLang;
    p.effect = (targetLang === "EN") ? (p.effectEN || p.effect) : (p.effectIT || p.effect);
  });

  renderPerks();
  saveCharacter();
  showToast(`🌐 Lingua di tutti i perk impostata su: <strong>${targetLang === "EN" ? "Inglese (Manuale Ufficiale)" : "Italiano"}</strong>`, "info");
}
window.toggleAllPerksLang = toggleAllPerksLang;

function renderPerks() {
  const container = document.getElementById("perks-list");
  if (!container) return;

  if (!character.perks || character.perks.length === 0) {
    container.innerHTML = `<div style="font-size:13px; color:var(--text-dim); padding:12px; text-align:center;">Nessun perk assegnato.<br>Clicca <strong>[+ Compendio]</strong> o <strong>[+ Custom]</strong> per aggiungerne uno.</div>`;
    return;
  }

  let html = "";
  character.perks.forEach((p, idx) => {
    const compP = findCompendiumPerk(p);
    const rankIdx = (p.rank && p.rank > 1) ? p.rank - 1 : 0;
    let canonicalEN = "";
    let canonicalIT = "";
    if (compP) {
      canonicalEN = (compP.ranksEN && compP.ranksEN[rankIdx]) || compP.ranksEN?.[0] || compP.effectEN || "";
      canonicalIT = (compP.ranksIT && compP.ranksIT[rankIdx]) || compP.ranksIT?.[0] || (compP.ranks && compP.ranks[rankIdx]) || compP.ranks?.[0] || compP.effectIT || compP.effect || "";
      if (canonicalEN) p.effectEN = canonicalEN;
      if (canonicalIT) p.effectIT = canonicalIT;
    }

    // Default to Italian if not explicitly set
    if (!p.displayLang) {
      p.displayLang = "IT";
    }

    // Unconditionally ensure p.effect is consistent with active display language and official compendium
    if (compP && p.category !== "Personalizzato") {
      if (p.displayLang === "IT" && canonicalIT) {
        p.effect = canonicalIT;
      } else if (p.displayLang === "EN" && canonicalEN) {
        p.effect = canonicalEN;
      }
    } else {
      if (p.displayLang === "IT") {
        if (p.effectIT) {
          const isEnglishContent = p.effectEN && (
            p.effect === p.effectEN || 
            p.effectEN.startsWith(p.effect) || 
            p.effect.startsWith(p.effectEN.slice(0, 25))
          );
          if (!p.effect || isEnglishContent) {
            p.effect = p.effectIT;
          }
        }
      } else if (p.displayLang === "EN") {
        if (p.effectEN) {
          const isItalianContent = p.effectIT && (
            p.effect === p.effectIT || 
            p.effectIT.startsWith(p.effect) || 
            p.effect.startsWith(p.effectIT.slice(0, 25))
          );
          if (!p.effect || isItalianContent) {
            p.effect = p.effectEN;
          }
        }
      }
    }

    const hasEnText = !!(p.effectEN || (compP && compP.ranksEN && compP.ranksEN[0]));
    const isEN = p.displayLang === "EN";
    const isAuto = !!p.isRacialAuto;

    html += `
      <div class="perk-card" style="${isAuto ? 'border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.03);' : ''}">
        <div class="perk-card-header" style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <div style="display:flex; align-items:center; gap:6px; flex:1; min-width:0;">
            ${isAuto ? `<span style="font-size:10.5px; font-weight:800; color:#b45309; background:#fef3c7; border:1px solid #fde68a; padding:1px 6px; border-radius:3px; white-space:nowrap;" title="Assegnato automaticamente dalla razza/variante">★ RAZZIALE</span>` : ''}
            <input type="text" class="input-field perk-name-input" value="${escapeHtml(p.name || "Nuovo Perk")}" onchange="updatePerkField(${idx}, 'name', this.value)" placeholder="Nome Perk" style="font-weight:800; font-size:14.5px; color:var(--text-bright); flex:1; min-width:0;">
          </div>
          <div style="display:flex; align-items:center; gap:4px;" class="no-print">
            ${hasEnText ? `
              <button type="button" class="btn btn-xs ${isEN ? 'btn-warning' : 'btn-outline-primary'}" onclick="togglePerkCardLang(${idx})" title="Alterna tra traduzione in italiano e testo originale in inglese dal manuale" style="font-size:11.5px; font-weight:800; padding:2px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:4px; cursor:pointer;">
                ${isEN ? '🇮🇹 Mostra IT' : '🇬🇧 Mostra EN'}
              </button>
            ` : ''}
            <button type="button" class="btn btn-sm btn-danger no-print perk-del-btn" onclick="deletePerk(${idx})" title="Rimuovi Perk">✕</button>
          </div>
        </div>
        <textarea class="input-field perk-effect-input" oninput="autoResizeTextarea(this)" onchange="updatePerkField(${idx}, 'effect', this.value)" placeholder="Descrizione ed effetti del perk...">${p.effect || ""}</textarea>
        <div style="font-size:11px; margin-top:3px; font-weight:700; display:flex; align-items:center; justify-content:space-between;">
          <span style="color:${isEN ? 'var(--accent-amber, #d97706)' : 'var(--accent-secondary, #2563eb)'}; font-style:italic;">
            ${isEN ? '📖 Testo Originale dal Manuale (EN)' : '🇮🇹 Traduzione Ufficiale in Italiano'}
          </span>
          ${hasEnText ? `
            <a href="javascript:void(0)" onclick="togglePerkCardLang(${idx})" style="font-size:11px; text-decoration:underline; color:var(--text-dim); cursor:pointer;">
              ${isEN ? "Passa all'Italiano" : "Verifica testo originale EN"}
            </a>
          ` : ''}
        </div>
      </div>`;
  });

  container.innerHTML = html;
  const scheduleTask = typeof requestAnimationFrame === "function" ? requestAnimationFrame : (cb) => setTimeout(cb, 16);
  scheduleTask(() => {
    if (container.querySelectorAll) {
      container.querySelectorAll('textarea.perk-effect-input').forEach(autoResizeTextarea);
    }
  });

  if (typeof renderDashboardPerks === "function") renderDashboardPerks();
}
function updatePerkField(idx, field, val) {
  if (!character.perks[idx]) return;
  character.perks[idx][field] = val;
  saveCharacter();
}

function deletePerk(idx) {
  character.perks.splice(idx, 1);
  renderPerks();
  saveCharacter();
}

// =============================================================================
// BIO & PROFILE SECTION
// =============================================================================

function renderBio() {
  if (!character.bio) character.bio = JSON.parse(JSON.stringify(DEFAULT_CHARACTER.bio));

  document.getElementById("bio-personality").value = character.bio.personality || "";
  document.getElementById("bio-age").value = character.bio.age || "";
  document.getElementById("bio-gender").value = character.bio.gender || "";
  document.getElementById("bio-height").value = character.bio.height || "";
  document.getElementById("bio-weight").value = character.bio.weight || "";
  document.getElementById("bio-eyes").value = character.bio.eyes || "";
  document.getElementById("bio-hair").value = character.bio.hair || "";
  document.getElementById("bio-marks").value = character.bio.marks || "";
  document.getElementById("bio-backstory").value = character.bio.backstory || "";
  document.getElementById("bio-goal-short").value = character.bio.goalShort || "";
  document.getElementById("bio-goal-long").value = character.bio.goalLong || "";
  document.getElementById("bio-allies").value = character.bio.allies || "";
  document.getElementById("bio-enemies").value = character.bio.enemies || "";
  document.getElementById("bio-master-notes").value = character.bio.masterNotes || "";

  // 1. Dynamic Personality Traits
  const persListEl = document.getElementById("bio-personality-list");
  if (persListEl) {
    if (!character.bio.personalityTraits) character.bio.personalityTraits = [];
    persListEl.innerHTML = character.bio.personalityTraits.map((tr, idx) => `
      <div class="bio-dynamic-item">
        <span style="color:var(--text-bright);">🧠 ${tr}</span>
        <button class="btn btn-sm btn-danger no-print" onclick="removeBioPersonalityTrait(${idx})">✕</button>
      </div>`).join("");
  }

  // 2. Dynamic Events
  const eventsListEl = document.getElementById("bio-events-list");
  if (eventsListEl) {
    if (!character.bio.events) character.bio.events = [];
    eventsListEl.innerHTML = character.bio.events.map((ev, idx) => `
      <div class="bio-dynamic-item">
        <div style="flex:1;">
          <div style="font-weight:bold; color:var(--text-bright);">${ev.title || "Evento"} <span class="bio-item-tag">${ev.date || ""}</span></div>
          <div style="font-size:11px; color:var(--text-dim);">${ev.desc || ""}</div>
        </div>
        <button class="btn btn-sm btn-danger no-print" onclick="removeBioEvent(${idx})">✕</button>
      </div>`).join("");
  }

  // 3. Dynamic Goals
  const goalsListEl = document.getElementById("bio-goals-list");
  if (goalsListEl) {
    if (!character.bio.goals) character.bio.goals = [];
    goalsListEl.innerHTML = character.bio.goals.map((g, idx) => `
      <div class="bio-dynamic-item">
        <div style="flex:1;">
          <span class="bio-item-tag ${g.completed ? "completed" : "rival"}">${g.type || "Obiettivo"}</span>
          <span style="margin-left:4px; color:var(--text-bright); font-weight:${g.completed ? "normal" : "bold"}; ${g.completed ? "text-decoration:line-through;" : ""}">${g.desc}</span>
        </div>
        <button class="btn btn-sm ${g.completed ? "btn-primary" : ""}" onclick="toggleBioGoalStatus(${idx})" title="Alterna completato">${g.completed ? "✓" : "○"}</button>
        <button class="btn btn-sm btn-danger no-print" onclick="removeBioGoal(${idx})">✕</button>
      </div>`).join("");
  }

  // 4. Dynamic Relationships
  const relListEl = document.getElementById("bio-relationships-list");
  if (relListEl) {
    if (!character.bio.relationships) character.bio.relationships = [];
    relListEl.innerHTML = character.bio.relationships.map((rel, idx) => `
      <div class="bio-dynamic-item">
        <div style="flex:1;">
          <span class="bio-item-tag ${rel.type === "ally" ? "ally" : rel.type === "enemy" ? "enemy" : "rival"}">${rel.type === "ally" ? "Alleato" : rel.type === "enemy" ? "Nemico" : "Contatto"}</span>
          <strong style="color:var(--text-bright); margin-left:4px;">${rel.name}</strong> <span style="font-size:11px; color:var(--text-dim);">${rel.role || ""}</span>
          ${rel.notes ? `<div style="font-size:11px; color:var(--accent); margin-top:2px;">${rel.notes}</div>` : ""}
        </div>
        <button class="btn btn-sm btn-danger no-print" onclick="removeBioRelationship(${idx})">✕</button>
      </div>`).join("");
  }

  // 5. Dynamic Master Gifts
  const giftsListEl = document.getElementById("bio-gifts-list");
  if (giftsListEl) {
    if (!character.bio.masterGifts) character.bio.masterGifts = [];
    giftsListEl.innerHTML = character.bio.masterGifts.map((gift, idx) => `
      <div class="bio-dynamic-item">
        <div style="flex:1;">
          <strong style="color:var(--warning);">⭐ ${gift.title}</strong>
          <div style="font-size:11px; color:var(--text-dim);">${gift.desc || ""}</div>
        </div>
        <button class="btn btn-sm btn-danger no-print" onclick="removeBioGift(${idx})">✕</button>
      </div>`).join("");
  }
}

function addBioPersonalityTrait() {
  const tr = prompt("Inserisci nuovo tratto caratteriale, tic o fobia:");
  if (!tr) return;
  if (!character.bio.personalityTraits) character.bio.personalityTraits = [];
  character.bio.personalityTraits.push(tr);
  renderBio();
  saveCharacter();
}
function removeBioPersonalityTrait(idx) {
  character.bio.personalityTraits.splice(idx, 1);
  renderBio();
  saveCharacter();
}

function addBioEvent() {
  const title = prompt("Titolo dell'evento o momento chiave della storia:");
  if (!title) return;
  const date = prompt("Data / Anno / Luogo (opzionale):") || "";
  const desc = prompt("Descrizione delle conseguenze o dettagli:") || "";
  if (!character.bio.events) character.bio.events = [];
  character.bio.events.push({ title, date, desc });
  renderBio();
  saveCharacter();
}
function removeBioEvent(idx) {
  character.bio.events.splice(idx, 1);
  renderBio();
  saveCharacter();
}

function addBioGoal() {
  const desc = prompt("Descrizione dell'obiettivo o missione:");
  if (!desc) return;
  const type = prompt("Tipologia (es. Breve Termine, Lungo Termine, Personale):") || "Breve Termine";
  if (!character.bio.goals) character.bio.goals = [];
  character.bio.goals.push({ desc, type, completed: false });
  renderBio();
  saveCharacter();
}
function toggleBioGoalStatus(idx) {
  character.bio.goals[idx].completed = !character.bio.goals[idx].completed;
  renderBio();
  saveCharacter();
}
function removeBioGoal(idx) {
  character.bio.goals.splice(idx, 1);
  renderBio();
  saveCharacter();
}

function addBioRelationship() {
  const name = prompt("Nome del PNG, compagno o fazione:");
  if (!name) return;
  const role = prompt("Ruolo o fazione (es. Mercante di Bunker Hill, Cecchino RNC):") || "";
  const typeChoice = prompt("Tipo di legame: 1 = Alleato, 2 = Rivale/Contatto, 3 = Nemico/Taglia", "1");
  const type = typeChoice === "3" ? "enemy" : typeChoice === "2" ? "rival" : "ally";
  const notes = prompt("Note o accordi particolari:") || "";
  if (!character.bio.relationships) character.bio.relationships = [];
  character.bio.relationships.push({ name, role, type, notes });
  renderBio();
  saveCharacter();
}
function removeBioRelationship(idx) {
  character.bio.relationships.splice(idx, 1);
  renderBio();
  saveCharacter();
}

function addBioGift() {
  const title = prompt("Titolo del Dono, Benedizione o Potere Speciale Master:");
  if (!title) return;
  const desc = prompt("Descrizione ed effetto in gioco:") || "";
  if (!character.bio.masterGifts) character.bio.masterGifts = [];
  character.bio.masterGifts.push({ title, desc });
  renderBio();
  saveCharacter();
}
function removeBioGift(idx) {
  character.bio.masterGifts.splice(idx, 1);
  renderBio();
  saveCharacter();
}

// =============================================================================
// INVENTORY & CARRY ENGINE
// =============================================================================

function updateInventoryAndCarry() {
  let totalLoad = 0;

  (character.inventory || []).forEach(it => {
    const qty = parseFloat(it.qty) || 1;
    const load = parseFloat(it.load) || 0;
    totalLoad += load * qty;
  });

  (character.weapons || []).forEach(w => {
    totalLoad += parseFloat(w.load) || 0;
  });

  if (character.armor && character.armor.type) {
    const armMatch = (FALLOUT_RULES_DATA.armors || []).find(a => a.id === character.armor.type);
    if (armMatch && armMatch.weight) {
      totalLoad += parseFloat(armMatch.weight);
    }
  }

  character.carryCurrent = Math.round(totalLoad * 10) / 10;

  const currentEl = document.getElementById("carry-current");
  const maxEl = document.getElementById("carry-max");
  if (currentEl) currentEl.value = character.carryCurrent;
  if (maxEl && (!maxEl.dataset || !maxEl.dataset.custom)) {
    maxEl.value = character.carryMax || 50;
  }
}

function updateInvField(idx, field, val) {
  if (!character.inventory[idx]) return;
  if (field === "qty" || field === "load") {
    character.inventory[idx][field] = parseFloat(val) || 0;
    updateInventoryAndCarry();
  } else {
    character.inventory[idx][field] = val;
  }
  saveCharacter();
}

function deleteInvItem(idx) {
  character.inventory.splice(idx, 1);
  renderInventory();
  updateInventoryAndCarry();
  saveCharacter();
}

function renderInventory() {
  const tbody = document.getElementById("inv-table-body");
  if (!tbody) return;

  let html = "";
  (character.inventory || []).forEach((it, idx) => {
    const isWeapon = it.isEquippable === "weapon" || (it.notes && it.notes.toLowerCase().includes("arma")) || (FALLOUT_RULES_DATA.weapons || []).some(w => w.name.toLowerCase() === (it.name || "").toLowerCase());
    const isArmor = it.isEquippable === "armor" || (it.notes && it.notes.toLowerCase().includes("armatura")) || (FALLOUT_RULES_DATA.armors || []).some(a => a.name.toLowerCase() === (it.name || "").toLowerCase());

    html += `
      <tr>
        <td><input type="text" class="input-field" value="${it.name || ""}" onchange="updateInvField(${idx}, 'name', this.value)" style="font-weight:${isWeapon || isArmor ? "bold" : "normal"};"></td>
        <td><input type="number" class="input-field" value="${it.qty || 1}" min="1" onchange="updateInvField(${idx}, 'qty', this.value)"></td>
        <td><input type="number" class="input-field" value="${it.load || 0}" step="0.5" onchange="updateInvField(${idx}, 'load', this.value)"></td>
        <td><input type="text" class="input-field" value="${it.cost || "0c"}" onchange="updateInvField(${idx}, 'cost', this.value)"></td>
        <td><input type="text" class="input-field" value="${it.notes || ""}" onchange="updateInvField(${idx}, 'notes', this.value)"></td>
        <td>
          <div style="display:flex; align-items:center; justify-content:center; gap:4px;">
            ${isWeapon ? `<button class="btn btn-sm btn-inv-equip" onclick="equipWeaponFromInventory(${idx})" title="Equipaggia quest'arma">⚔️ Equip</button>` : ""}
            ${isArmor ? `<button class="btn btn-sm btn-inv-equip" onclick="equipArmorFromInventory(${idx})" title="Indossa questa armatura">🛡️ Indossa</button>` : ""}
            ${(!isWeapon && !isArmor) ? `<button class="btn btn-sm" onclick="equipWeaponFromInventory(${idx})" title="Equipaggia come arma generica">⚔️</button>` : ""}
            <button class="btn btn-sm btn-danger no-print" onclick="deleteInvItem(${idx})" title="Rimuovi dallo zaino">✕</button>
          </div>
        </td>
      </tr>`;
  });

  tbody.innerHTML = html;
  document.getElementById("caps-val").value = character.caps || 0;
  updateInventoryAndCarry();
}

function equipWeaponFromInventory(invIdx, forceSlot = null) {
  const item = character.inventory[invIdx];
  if (!item) return;

  const wData = item.weaponData || (FALLOUT_RULES_DATA.weapons || []).find(w => w.name.toLowerCase() === item.name.toLowerCase()) || {
    name: item.name,
    type: "Arma",
    ap: 4,
    attackMod: "+0",
    damage: "1d6",
    baseDamage: "1d6",
    skillBonus: 0,
    perkBonus: 0,
    condPenalty: 0,
    rangeMult: "x8 / x16",
    crit: "20, 1d6",
    ammoType: "-",
    selectedAmmo: "Standard",
    ammoCurrent: 0,
    ammoMax: 0,
    reqStr: 3,
    hands: (item.notes && item.notes.toLowerCase().includes("due mani")) ? 2 : 1,
    properties: item.notes || "",
    load: item.load || 4
  };

  const newWeapon = {
    id: "w_" + Date.now(),
    name: wData.name || item.name,
    type: wData.type || "Pistola / Arma",
    quality: item.quality || "standard",
    legendaryEffect: item.legendaryEffect || "",
    legendaryEffects: item.legendaryEffects || [],
    ap: wData.ap || 4,
    attackMod: wData.attackMod || "+0",
    damage: wData.damage || "1d6",
    baseDamage: wData.baseDamage || wData.damage || "1d6",
    skillBonus: wData.skillBonus || 0,
    perkBonus: wData.perkBonus || 0,
    condPenalty: wData.condPenalty || 0,
    rangeMult: wData.rangeMult || wData.range || "x8 / x16",
    crit: wData.crit || "20, 1d6",
    ammoType: wData.ammoType || wData.ammo || "-",
    selectedAmmo: "Standard",
    ammoCurrent: wData.ammoCurrent !== undefined ? wData.ammoCurrent : (wData.capacity || 0),
    ammoMax: wData.ammoMax !== undefined ? wData.ammoMax : (wData.capacity || 0),
    reqStr: wData.reqStr || 3,
    hands: wData.hands || 1,
    properties: wData.properties || wData.props || "",
    installedMods: item.installedMods || [],
    decay: item.decay || 0,
    load: item.load || wData.weight || 4
  };

  if (forceSlot !== null && character.weapons[forceSlot]) {
    const oldW = character.weapons[forceSlot];
    character.inventory.push({
      id: "i_" + Date.now(),
      name: oldW.name,
      qty: 1,
      load: oldW.load || 4,
      cost: "50c",
      notes: `Arma: Danno ${oldW.damage}, AP ${oldW.ap}, ${oldW.properties || ""}`,
      isEquippable: "weapon",
      weaponData: JSON.parse(JSON.stringify(oldW))
    });
    character.weapons[forceSlot] = newWeapon;
    character.inventory.splice(invIdx, 1);
    closeEquipSwapModal();
  } else if (character.weapons.length >= 2 || (newWeapon.hands === 2 && character.weapons.length >= 1)) {
    openWeaponSwapModal(invIdx, newWeapon);
    return;
  } else {
    character.weapons.push(newWeapon);
    character.inventory.splice(invIdx, 1);
  }

  renderWeapons();
  renderInventory();
  updateDerivedValues();
  saveCharacter();
}

function openWeaponSwapModal(invIdx, newWeapon) {
  const modal = document.getElementById("equip-swap-modal");
  const title = document.getElementById("equip-swap-title");
  const desc = document.getElementById("equip-swap-desc");
  const optContainer = document.getElementById("equip-swap-options");
  const warnBox = document.getElementById("equip-swap-warning-box");

  if (!modal || !optContainer) return;

  title.textContent = `EQUIPAGGIAMENTO: ${newWeapon.name}`;
  const isTwoHanded = newWeapon.hands === 2 || (newWeapon.properties || "").toLowerCase().includes("a due mani");
  const charStr = typeof getEffectiveStrength === "function" ? getEffectiveStrength() : (parseInt(character.special.strength, 10) || 5);

  let warnings = "";
  if (charStr < (newWeapon.reqStr || 1)) {
    warnings += `<div class="equip-warning-badge">⚠️ FORZA INSUFFICIENTE: Richiede FOR ${newWeapon.reqStr}, attuale ${charStr}. Subirai svantaggio agli attacchi.</div>`;
  }
  if (isTwoHanded) {
    warnings += `<div class="equip-warning-badge">⚠️ ARMA A DUE MANI: Occupa entrambe le mani del personaggio.</div>`;
  }

  if (warnings) {
    warnBox.innerHTML = warnings;
    warnBox.style.display = "block";
  } else {
    warnBox.style.display = "none";
  }

  desc.innerHTML = `Stai equipaggiando <strong>${newWeapon.name}</strong> (${isTwoHanded ? "A Due Mani" : "A Una Mano"}). Scegli come gestire gli slot attivi:`;

  let optHtml = "";
  character.weapons.forEach((w, wIdx) => {
    optHtml += `
      <button class="btn btn-primary" style="justify-content:space-between; text-align:left; padding:8px 12px;" onclick="equipWeaponFromInventory(${invIdx}, ${wIdx})">
        <span>Sostituisci Slot ${wIdx + 1}: <strong>${w.name}</strong></span>
        <span style="font-size:11px; color:var(--text-dim);">(Ripone ${w.name} nello zaino)</span>
      </button>`;
  });

  if (!isTwoHanded) {
    optHtml += `
      <button class="btn" style="justify-content:space-between; padding:8px 12px;" onclick="forceAddWeaponSlot(${invIdx})">
        <span>Aggiungi come Arma Extra (Fondina / Schiena)</span>
        <span style="font-size:11px; color:var(--accent);">[Slot Aggiuntivo]</span>
      </button>`;
  }

  optContainer.innerHTML = optHtml;
  modal.style.display = "flex";
}

function forceAddWeaponSlot(invIdx) {
  const item = character.inventory[invIdx];
  if (!item) return;
  const wData = item.weaponData || (FALLOUT_RULES_DATA.weapons || []).find(w => w.name.toLowerCase() === item.name.toLowerCase()) || {
    name: item.name, type: "Arma", ap: 4, attackMod: "+0", damage: "1d6", baseDamage: "1d6", skillBonus: 0, perkBonus: 0, condPenalty: 0, rangeMult: "x8 / x16", crit: "20, 1d6", ammoType: "-", selectedAmmo: "Standard", ammoCurrent: 0, ammoMax: 0, reqStr: 3, hands: 1, properties: item.notes || "", load: item.load || 4
  };
  character.weapons.push({
    id: "w_" + Date.now(),
    name: wData.name || item.name,
    type: wData.type || "Pistola / Arma",
    quality: item.quality || "standard",
    legendaryEffect: item.legendaryEffect || "",
    legendaryEffects: item.legendaryEffects || [],
    ap: wData.ap || 4,
    attackMod: wData.attackMod || "+0",
    damage: wData.damage || "1d6",
    baseDamage: wData.baseDamage || wData.damage || "1d6",
    skillBonus: 0,
    perkBonus: 0,
    condPenalty: 0,
    rangeMult: wData.rangeMult || wData.range || "x8 / x16",
    crit: wData.crit || "20, 1d6",
    ammoType: wData.ammoType || wData.ammo || "-",
    selectedAmmo: "Standard",
    ammoCurrent: wData.ammoCurrent !== undefined ? wData.ammoCurrent : (wData.capacity || 0),
    ammoMax: wData.ammoMax !== undefined ? wData.ammoMax : (wData.capacity || 0),
    reqStr: wData.reqStr || 3,
    hands: wData.hands || 1,
    properties: wData.properties || wData.props || "",
    installedMods: item.installedMods || [],
    decay: item.decay || 0,
    load: item.load || wData.weight || 4
  });
  character.inventory.splice(invIdx, 1);
  closeEquipSwapModal();
  renderWeapons();
  renderInventory();
  updateDerivedValues();
  saveCharacter();
}

function closeEquipSwapModal() {
  const modal = document.getElementById("equip-swap-modal");
  if (modal) modal.style.display = "none";
}

function unequipWeaponToInventory(weaponIdx) {
  const w = character.weapons[weaponIdx];
  if (!w) return;

  character.inventory.push({
    id: "i_" + Date.now(),
    name: w.name,
    qty: 1,
    load: w.load || 4,
    cost: "50c",
    notes: `Arma: Danno ${w.damage}, AP ${w.ap}, ${w.properties || ""}`,
    isEquippable: "weapon",
    weaponData: JSON.parse(JSON.stringify(w))
  });

  character.weapons.splice(weaponIdx, 1);
  renderWeapons();
  renderInventory();
  updateDerivedValues();
  saveCharacter();
}

function equipArmorFromInventory(invIdx) {
  const item = character.inventory[invIdx];
  if (!item) return;

  const aMatch = (FALLOUT_RULES_DATA.armors || []).find(a => a.name.toLowerCase() === item.name.toLowerCase() || a.id === item.armorData?.type) || {
    id: "leather",
    name: item.name,
    ac: 11,
    dt: 1,
    slots: 6,
    weight: item.load || 15
  };

  if (character.armor && character.armor.name && character.armor.type !== "none") {
    character.inventory.push({
      id: "i_" + Date.now(),
      name: character.armor.name,
      qty: 1,
      load: (FALLOUT_RULES_DATA.armors.find(a => a.id === character.armor.type) || { weight: 10 }).weight,
      cost: "100c",
      notes: `Armatura: AC ${character.vitals.ac}, DT ${character.vitals.dt}`,
      isEquippable: "armor",
      armorData: JSON.parse(JSON.stringify(character.armor))
    });
  }

  character.armor.name = item.armorData?.name || item.name;
  character.armor.type = item.armorData?.type || aMatch.id || "cloth";
  character.armor.quality = item.armorData?.quality || "standard";
  character.armor.legendaryEffect = item.armorData?.legendaryEffect || "";
  character.armor.legendaryEffects = item.armorData?.legendaryEffects || [];
  character.armor.installedUpgrades = item.armorData?.installedUpgrades || [];
  character.armor.decay = item.armorData?.decay || 0;

  character.inventory.splice(invIdx, 1);
  renderArmor();
  renderInventory();
  updateDerivedValues();
  saveCharacter();
}

function unequipArmorToInventory() {
  if (!character.armor || character.armor.type === "none" || character.armor.type === "cloth") return;

  character.inventory.push({
    id: "i_" + Date.now(),
    name: character.armor.name,
    qty: 1,
    load: (FALLOUT_RULES_DATA.armors.find(a => a.id === character.armor.type) || { weight: 10 }).weight,
    cost: "100c",
    notes: `Armatura: AC ${character.vitals.ac}, DT ${character.vitals.dt}`,
    isEquippable: "armor",
    armorData: JSON.parse(JSON.stringify(character.armor))
  });

  character.armor.name = "Abiti Semplici";
  character.armor.type = "cloth";
  character.armor.quality = "standard";
  character.armor.legendaryEffect = "";
  character.armor.legendaryEffects = [];
  character.armor.installedUpgrades = [];
  character.armor.decay = 0;

  renderArmor();
  renderInventory();
  updateDerivedValues();
  saveCharacter();
}

// =============================================================================
// LEVEL UP ENGINE (Progressione Ufficiale Manuale Pag. 5)
// =============================================================================
var levelUpState = {

  active: false,
  targetLevel: 2,
  hpGain: 0,
  spGain: 0,
  baseSkillPoints: 0,
  allocatedSkills: {},
  perkEligible: false,
  chosenPerk: null
};

function openLevelUpWizard(targetLvl) {
  const currentLvl = parseInt(character.info.level, 10) || 1;
  const nextLvl = targetLvl !== undefined ? Math.max(1, Math.min(30, parseInt(targetLvl, 10))) : currentLvl + 1;

  if (currentLvl >= 30 && nextLvl > currentLvl) {
    alert("Livello massimo (30) già raggiunto!");
    return;
  }

  const currTable = (FALLOUT_RULES_DATA.levelTable && FALLOUT_RULES_DATA.levelTable[Math.max(0, currentLvl - 1)]) || { spBase: 10, hpBase: 10, agiMult: 1, endMult: 1, perks: 1 };
  const nextTable = (FALLOUT_RULES_DATA.levelTable && FALLOUT_RULES_DATA.levelTable[Math.min(29, nextLvl - 1)]) || { spBase: 80, hpBase: 80, agiMult: 15, endMult: 15, perks: 25 };

  const endMod = getStatMod("endurance");
  const agiMod = getStatMod("agility");

  const currHp = currTable.hpBase + (currTable.endMult * endMod);
  const nextHp = nextTable.hpBase + (nextTable.endMult * endMod);
  const hpGain = Math.max(0, nextHp - currHp);

  const currSp = currTable.spBase + (currTable.agiMult * agiMod);
  const nextSp = nextTable.spBase + (nextTable.agiMult * agiMod);
  const spGain = Math.max(0, nextSp - currSp);

  // Calcolo Punti Abilità secondo Tabella Ufficiale (Pagg. 5-6):
  // Si ottengono SOLO ai livelli 5, 9, 13, 17, 21, 25, 29!
  const SKILL_POINT_LEVELS = [5, 9, 13, 17, 21, 25, 29];
  let skillTriggers = 0;
  for (let l = currentLvl + 1; l <= nextLvl; l++) {
    if (SKILL_POINT_LEVELS.includes(l)) {
      skillTriggers++;
    }
  }

  const intScore = parseInt(character.special.intelligence, 10) || 5;
  let basePointsPerTrigger = 4;
  if (intScore <= 4) basePointsPerTrigger = 3;
  else if (intScore >= 6) basePointsPerTrigger = 5;

  let extraPointsPerTrigger = 0;
  if ((character.racialOptions.activeIds || []).includes("synth_algorithms")) {
    extraPointsPerTrigger += 1;
  }
  if ((character.perks || []).some(p => (p.name || "").toLowerCase().includes("istruito") || (p.name || "").toLowerCase().includes("educated"))) {
    extraPointsPerTrigger += 2;
  }

  const totalSkillPts = (basePointsPerTrigger + extraPointsPerTrigger) * skillTriggers;

  // Calcolo Perk secondo Tabella Ufficiale (Pagg. 5-6):
  // Si ottiene 1 perk a ogni livello TRANNE ai livelli 5, 9, 13, 17, 19!
  const NO_PERK_LEVELS = [5, 9, 13, 17, 19];
  let perksGained = 0;
  for (let l = currentLvl + 1; l <= nextLvl; l++) {
    if (!NO_PERK_LEVELS.includes(l)) {
      perksGained++;
    }
  }

  const perkEligible = perksGained > 0;

  levelUpState = {
    active: true,
    targetLevel: nextLvl,
    hpGain,
    spGain,
    baseSkillPoints: totalSkillPts,
    skillTriggers,
    perksGained,
    allocatedSkills: {},
    perkEligible,
    chosenPerk: null
  };

  renderLevelUpWizard();
  const modal = document.getElementById("level-up-modal");
  if (modal) modal.style.display = "flex";
}

function renderLevelUpWizard() {
  const newLvlEl = document.getElementById("lvl-wizard-new-level");
  if (newLvlEl) newLvlEl.textContent = levelUpState.targetLevel;

  const gainsDisplay = document.getElementById("lvl-gains-display");
  if (gainsDisplay) {
    gainsDisplay.innerHTML = `
      <div class="lvl-gain-item">
        <div class="lvl-gain-title">Nuovo Livello</div>
        <div class="lvl-gain-val" style="color:var(--accent);">L. ${levelUpState.targetLevel}</div>
      </div>
      <div class="lvl-gain-item">
        <div class="lvl-gain-title">Punti Ferita (HP)</div>
        <div class="lvl-gain-val">+${levelUpState.hpGain} HP</div>
      </div>
      <div class="lvl-gain-item">
        <div class="lvl-gain-title">Punti Stamina (SP)</div>
        <div class="lvl-gain-val">+${levelUpState.spGain} SP</div>
      </div>
      <div class="lvl-gain-item">
        <div class="lvl-gain-title">Nuovi Perk</div>
        <div class="lvl-gain-val" style="color:${levelUpState.perksGained > 0 ? "var(--warning)" : "var(--text-dim)"};">${levelUpState.perksGained > 0 ? `+${levelUpState.perksGained} Perk` : "0 (Livello Esente)"}</div>
      </div>`;
  }

  const intScore = parseInt(character.special.intelligence, 10) || 5;
  const formulaInfoEl = document.getElementById("lvl-skill-formula-info");
  const remainingBadge = document.getElementById("lvl-remaining-points-badge");
  const allocGrid = document.getElementById("lvl-skills-alloc-grid");

  if (levelUpState.baseSkillPoints === 0) {
    if (formulaInfoEl) formulaInfoEl.textContent = "(Punti assegnati solo ai liv. 5, 9, 13, 17, 21, 25, 29)";
    if (remainingBadge) {
      remainingBadge.textContent = "0 punti a questo livello";
      remainingBadge.style.background = "var(--border-color)";
    }
    if (allocGrid) {
      allocGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 12px; background: rgba(0,0,0,0.25); border-radius: 4px; color: var(--text-dim); font-size: 12px; line-height: 1.5; font-style: italic; border-left: 3px solid var(--accent);">
          ℹ️ <b>Regola Ufficiale (Manuale Pag. 5-6)</b>: I Punti Abilità non si ottengono a ogni livello, ma vengono assegnati al 5°, 9°, 13°, 17°, 21°, 25° e 29° livello.
        </div>`;
    }
  } else {
    if (formulaInfoEl) {
      formulaInfoEl.textContent = `(Intelligenza ${intScore}: ${intScore <= 4 ? "3 Pts" : intScore >= 6 ? "5 Pts" : "4 Pts"}${levelUpState.baseSkillPoints > 5 ? " + Bonus Synth/Istruito" : ""})`;
    }
    const totalAllocated = Object.values(levelUpState.allocatedSkills).reduce((acc, v) => acc + v, 0);
    const remaining = Math.max(0, levelUpState.baseSkillPoints - totalAllocated);
    if (remainingBadge) {
      remainingBadge.textContent = `Punti Rimanenti: ${remaining} / ${levelUpState.baseSkillPoints}`;
      remainingBadge.style.background = remaining === 0 ? "var(--success)" : "var(--accent)";
    }
    if (allocGrid) {
      let sHtml = "";
      Object.keys(character.skills).forEach(sKey => {
        const sk = character.skills[sKey];
        const alloc = levelUpState.allocatedSkills[sKey] || 0;
        sHtml += `
          <div class="lvl-skill-row">
            <span style="font-weight:bold; color:var(--text-bright);">${sk.name}</span>
            <div class="lvl-skill-ctrl">
              <button type="button" class="btn btn-sm lvl-skill-alloc-btn" onclick="allocateLevelUpSkill('${sKey}', -1)">-</button>
              <span class="lvl-skill-points-assigned">${alloc > 0 ? `+${alloc}` : "0"}</span>
              <button type="button" class="btn btn-sm lvl-skill-alloc-btn" onclick="allocateLevelUpSkill('${sKey}', 1)">+</button>
            </div>
          </div>`;
      });
      allocGrid.innerHTML = sHtml;
    }
  }

  const perkSec = document.getElementById("lvl-perk-section");
  const perkCard = document.getElementById("lvl-chosen-perk-card");
  if (perkSec) {
    if (levelUpState.perkEligible) {
      perkSec.style.display = "block";
      const buttonsRow = document.getElementById("lvl-perk-buttons-row");
      if (buttonsRow) buttonsRow.style.display = "flex";
      if (levelUpState.chosenPerk) {
        perkCard.innerHTML = `
          <div class="perk-card" style="border-color:var(--warning);">
            <div style="font-weight:bold; color:var(--warning); font-size:13px;">★ ${levelUpState.chosenPerk.name}</div>
            <div style="font-size:12px; color:var(--text-bright); margin-top:2px;">${levelUpState.chosenPerk.effect}</div>
          </div>`;
      } else {
        perkCard.innerHTML = `<div style="font-size:12px; color:var(--warning); font-style:italic;">Nessun perk ancora selezionato (Opzionale). Clicca sotto per sceglierne uno:</div>`;
      }
    } else {
      perkSec.style.display = "block";
      if (perkCard) {
        perkCard.innerHTML = `
          <div style="padding: 8px 10px; background: rgba(255,215,0,0.06); border: 1px dashed rgba(255,215,0,0.3); border-radius: 4px; font-size: 12px; color: var(--warning); line-height: 1.4;">
            ℹ️ <b>Nessun Perk a questo livello</b>: Secondo la tabella ufficiale (Pagg. 5-6), i livelli 5, 9, 13, 17 e 19 non conferiscono talenti perk.
          </div>`;
      }
      const buttonsRow = document.getElementById("lvl-perk-buttons-row");
      if (buttonsRow) buttonsRow.style.display = "none";
    }
  }
}

function allocateLevelUpSkill(skillKey, delta) {
  const currentAlloc = levelUpState.allocatedSkills[skillKey] || 0;
  const totalAllocated = Object.values(levelUpState.allocatedSkills).reduce((acc, v) => acc + v, 0);
  const remaining = levelUpState.baseSkillPoints - totalAllocated;

  if (delta > 0 && remaining <= 0) return;
  if (delta < 0 && currentAlloc <= 0) return;

  levelUpState.allocatedSkills[skillKey] = currentAlloc + delta;
  renderLevelUpWizard();
}

function pickLevelUpPerkCompendium() {
  openPerkPickerModal("SCEGLI NUOVO PERK DA COMPENDIO", (p) => {
    const effectIT = (p.ranksIT && p.ranksIT[0]) || (p.ranks && p.ranks[0]) || p.effectIT || p.effect || p.desc || "";
    const effectEN = (p.ranksEN && p.ranksEN[0]) || p.effectEN || "";
    levelUpState.chosenPerk = {
      id: p.id || ("p_" + Date.now()),
      perkRefId: p.id,
      name: p.name,
      category: p.category || "Generale",
      req: p.reqText || p.req || "Nessuno",
      effect: effectIT || effectEN,
      effectIT: effectIT,
      effectEN: effectEN,
      displayLang: "IT"
    };
    renderLevelUpWizard();
  });
}

function pickLevelUpPerkCustom() {
  const name = prompt("Nome del Perk Personalizzato:");
  if (!name) return;
  const effect = prompt("Descrizione dell'effetto del Perk:") || "";
  levelUpState.chosenPerk = {
    id: "p_" + Date.now(),
    name,
    effect
  };
  renderLevelUpWizard();
}

function confirmApplyLevelUp() {
  const totalAllocated = Object.values(levelUpState.allocatedSkills).reduce((acc, v) => acc + v, 0);
  if (levelUpState.baseSkillPoints > 0 && totalAllocated < levelUpState.baseSkillPoints) {
    if (!confirm(`Hai ancora ${levelUpState.baseSkillPoints - totalAllocated} punti abilità non assegnati. Vuoi applicare comunque il livello?`)) {
      return;
    }
  }

  character.info.level = levelUpState.targetLevel;
  delete document.getElementById("max-hp").dataset.custom;
  delete document.getElementById("max-sp").dataset.custom;

  Object.keys(levelUpState.allocatedSkills).forEach(sKey => {
    const pts = levelUpState.allocatedSkills[sKey] || 0;
    if (pts > 0) {
      character.skills[sKey].points = (parseInt(character.skills[sKey].points, 10) || 0) + pts;
    }
  });

  if (levelUpState.chosenPerk) {
    if (!character.perks) character.perks = [];
    character.perks.push(levelUpState.chosenPerk);
  }

  const modal = document.getElementById("level-up-modal");
  if (modal) modal.style.display = "none";
  updateDerivedValues();
  renderAll();
  saveCharacter();
  alert(`🎉 Congratulazioni! Hai raggiunto il Livello ${character.info.level} e tutti i parametri sono stati aggiornati.`);
}

function onLevelInputChange(val) {
  const newLvl = parseInt(val, 10) || 1;
  const currentLvl = parseInt(character.info.level, 10) || 1;
  if (newLvl > currentLvl) {
    openLevelUpWizard(newLvl);
  } else {
    character.info.level = Math.max(1, Math.min(30, newLvl));
    updateDerivedValues();
    renderHeroInfo();
    saveCharacter();
  }
}

function closeLevelUpModal() {
  const modal = document.getElementById("level-up-modal");
  if (modal) modal.style.display = "none";
}

// =============================================================================
// ADVANCED PERK PICKER MODAL (With S.P.E.C.I.A.L. Filters & English Names Search)
// =============================================================================

let activePerkFilterCat = "TUTTI";
let onlyAvailablePerks = false;

function openPerkPickerModal(title, onSelect) {
  const allPerks = FALLOUT_RULES_DATA.perks || [];
  activePerkFilterCat = "TUTTI";
  onlyAvailablePerks = false;

  const modal = document.getElementById("generic-picker-modal");
  const titleEl = document.getElementById("picker-title");
  const searchInput = document.getElementById("picker-search-input");

  if (!modal) return;
  if (titleEl) titleEl.textContent = title;
  if (searchInput) searchInput.value = "";

  currentPickerItems = allPerks;
  currentPickerCallback = onSelect;

  renderPerkPickerUI();
  modal.style.display = "flex";

  if (searchInput) {
    if (typeof searchInput.focus === "function") searchInput.focus();
    searchInput.oninput = () => renderPerkPickerUI();
  }
}

function setPerkFilterCategory(cat) {
  activePerkFilterCat = cat;
  renderPerkPickerUI();
}

function togglePerkAvailabilityFilter(checked) {
  onlyAvailablePerks = checked;
  renderPerkPickerUI();
}

function renderPerkPickerUI() {
  const listBody = document.getElementById("picker-list-body");
  const searchInput = document.getElementById("picker-search-input");
  if (!listBody) return;

  const q = searchInput ? (searchInput.value || "").toLowerCase().trim() : "";
  const allPerks = FALLOUT_RULES_DATA.perks || [];

  const categories = ["TUTTI", "FORZA", "PERCEZIONE", "COSTITUZIONE", "CARISMA", "INTELLIGENZA", "AGILITÀ", "FORTUNA", "GENERALE", "RAZZIALI"];

  const filterChipsHtml = `
  <div class="perk-filter-bar no-print" style="display:flex; flex-wrap:wrap; gap:5px; margin-bottom:8px;">
    ${categories.map(cat => `
      <button type="button" class="btn btn-sm ${activePerkFilterCat === cat ? "btn-primary" : "btn-secondary"}" onclick="setPerkFilterCategory('${cat}')" style="font-size:11px; padding:2px 8px;">
        ${cat}
      </button>
    `).join("")}
  </div>
  <label class="perk-avail-toggle no-print" style="display:flex; align-items:center; gap:6px; font-size:12px; margin-bottom:10px; cursor:pointer;">
    <input type="checkbox" ${onlyAvailablePerks ? "checked" : ""} onchange="togglePerkAvailabilityFilter(this.checked)">
    <span>Mostra solo Perk Disponibili (Requisiti S.P.E.C.I.A.L., Razza & Livello Soddisfatti)</span>
  </label>
  `;

  const filtered = allPerks.filter(p => {
    const pCat = (p.category || p.cat || "Generale").toUpperCase();
    if (activePerkFilterCat !== "TUTTI") {
      if (activePerkFilterCat === "COSTITUZIONE") {
        if (pCat !== "COSTITUZIONE" && pCat !== "ROBUSTEZZA") return false;
      } else if (activePerkFilterCat === "RAZZIALI") {
        if (!["RAZZIALE", "UMANO", "GHOUL", "ROBOT", "SYNTH", "SUPER MUTANTE"].includes(pCat)) return false;
      } else {
        if (pCat !== activePerkFilterCat) return false;
      }
    }

    if (q) {
      const matchName = (p.name || "").toLowerCase().includes(q);
      const matchEffect = (p.effect || "").toLowerCase().includes(q);
      const matchReq = (p.reqText || p.req || "").toLowerCase().includes(q);
      if (!matchName && !matchEffect && !matchReq) return false;
    }

    const availInfo = isPerkAvailable(p);
    if (onlyAvailablePerks && !availInfo.available) return false;

    return true;
  });

  currentPickerItems = filtered;

  const listHtml = filtered.map((p, idx) => {
    const availInfo = isPerkAvailable(p);
    return `
    <div class="picker-item" onclick="selectPickerItem(${idx})" style="border-left: 3px solid ${availInfo.available ? 'var(--accent-glow, #4ade80)' : 'var(--accent-red, #ef4444)'}; margin-bottom:6px; padding:8px 10px; background:var(--bg-tertiary); border-radius:4px; cursor:pointer;">
      <div class="picker-item-header" style="display:flex; justify-content:space-between; align-items:center;">
        <span class="picker-item-title" style="font-weight:bold; font-size:13px; color:var(--text-bright);">${p.name}</span>
        <span style="font-size:11px; font-weight:800; font-family:var(--font-mono); color:${availInfo.available ? 'var(--accent-glow, #4ade80)' : 'var(--accent-red, #ef4444)'};">
          ${availInfo.available ? '[OK] DISPONIBILE' : `[Bloccato: ${availInfo.reason}]`}
        </span>
      </div>
      <div style="font-size:11px; color:var(--accent); text-transform:uppercase; margin:3px 0; font-family:var(--font-mono);">
        Categoria: ${p.category || "Generale"} • Req: ${p.reqText || p.req || "Nessuno"}
      </div>
      <div class="picker-item-desc" style="font-size:12px; color:var(--text-dim); line-height:1.35;">${(p.ranks && p.ranks[0]) || p.effect || ""}</div>
    </div>`;
  }).join("");

  listBody.innerHTML = filterChipsHtml + (listHtml || `<div style="padding:16px; color:var(--text-dim); text-align:center;">Nessun perk trovato con i filtri correnti.</div>`);
}

function isPerkAvailable(perk) {
  if (!perk) return { available: true, reason: "" };
  const reqStr = (perk.reqText || perk.req || "").trim();
  if (!reqStr || reqStr.toLowerCase() === "nessuno" || reqStr.toLowerCase() === "none") {
    return { available: true, reason: "Nessun prerequisito" };
  }

  const charLvl = parseInt(character.info.level, 10) || 1;
  const charRace = (character.info.race || "human").toLowerCase();

  // 1. Controllo Livello
  const lvlMatch = reqStr.match(/level\s*(\d+)/i) || reqStr.match(/livello\s*(\d+)/i);
  if (lvlMatch) {
    const reqL = parseInt(lvlMatch[1], 10);
    if (charLvl < reqL) {
      return { available: false, reason: `Richiede Livello ${reqL} (Attuale: ${charLvl})` };
    }
  }

  // 2. Controllo Razza
  const isSynth = charRace === "gen2_synth" || charRace === "synth";
  const isRobot = charRace === "robot" || (isSynth && (character.racialOptions.activeIds || []).includes("synth_hardware"));
  const isGhoul = charRace === "ghoul";
  const isMutant = charRace === "super_mutant";
  const isHuman = charRace === "human";

  if (/\bhuman\b/i.test(reqStr) && !isHuman) {
    const allowsOther = (/\bghoul\b/i.test(reqStr) && isGhoul) || (/\bsuper mutant\b/i.test(reqStr) && isMutant);
    if (!allowsOther) return { available: false, reason: "Richiede Razza Umana" };
  }
  if (/\bghoul\b/i.test(reqStr) && !isGhoul) {
    const allowsOther = (/\bhuman\b/i.test(reqStr) && isHuman) || (/\bsuper mutant\b/i.test(reqStr) && isMutant);
    if (!allowsOther) return { available: false, reason: "Richiede Razza Ghoul" };
  }
  if (/\bsuper mutant\b/i.test(reqStr) && !isMutant) {
    const allowsOther = (/\bhuman\b/i.test(reqStr) && isHuman) || (/\bghoul\b/i.test(reqStr) && isGhoul);
    if (!allowsOther) return { available: false, reason: "Richiede Super Mutante" };
  }
  if (/\brobot\b/i.test(reqStr) && !isRobot) {
    const allowsOther = (/\bsynth\b/i.test(reqStr) && isSynth);
    if (!allowsOther) return { available: false, reason: "Richiede Razza Robot" };
  }
  if (/\bsynth\b/i.test(reqStr) && !isSynth) {
    const allowsOther = (/\brobot\b/i.test(reqStr) && isRobot);
    if (!allowsOther) return { available: false, reason: "Richiede Razza Synth" };
  }

  // 3. Controllo S.P.E.C.I.A.L.
  const statMap = {
    strength: "strength", forza: "strength",
    perception: "perception", percezione: "perception",
    endurance: "endurance", costituzione: "endurance", robustezza: "endurance",
    charisma: "charisma", carisma: "charisma",
    intelligence: "intelligence", intelligenza: "intelligence",
    agility: "agility", agilità: "agility", agilita: "agility",
    luck: "luck", fortuna: "luck"
  };

  for (const [sWord, sKey] of Object.entries(statMap)) {
    const lowerM = reqStr.match(new RegExp(`${sWord}\\s*(\\d+)\\s*(?:or lower|o inferiore)`, 'i'));
    if (lowerM) {
      const maxL = parseInt(lowerM[1], 10);
      const cVal = parseInt(character.special[sKey], 10) || 5;
      if (cVal > maxL) {
        return { available: false, reason: `Richiede ${sWord.toUpperCase()} ≤ ${maxL} (Attuale: ${cVal})` };
      }
      continue;
    }

    const m = reqStr.match(new RegExp(`${sWord}\\s*:?\\s*(\\d+)`, 'i'));
    if (m) {
      const minL = parseInt(m[1], 10);
      const cVal = parseInt(character.special[sKey], 10) || 5;
      if (cVal < minL) {
        return { available: false, reason: `Richiede ${sWord.toUpperCase()} ${minL}+ (Attuale: ${cVal})` };
      }
    }
  }

  return { available: true, reason: "Requisiti Soddisfatti" };
}



window.setPerkFilterCategory = setPerkFilterCategory;
window.togglePerkAvailabilityFilter = togglePerkAvailabilityFilter;
window.openPerkPickerModal = openPerkPickerModal;
window.isPerkAvailable = isPerkAvailable;

// =============================================================================
// GENERIC PICKER MODAL & COMPENDIUM HELPERS
// =============================================================================

let currentPickerItems = [];
let currentPickerFiltered = [];
let currentPickerCallback = null;

function openPickerModal(title, items, onSelect) {
  const modal = document.getElementById("generic-picker-modal");
  const titleEl = document.getElementById("picker-title");
  const searchInput = document.getElementById("picker-search-input");

  if (!modal) return;
  if (titleEl) titleEl.textContent = title;
  if (searchInput) searchInput.value = "";

  currentPickerItems = items || [];
  currentPickerFiltered = items || [];
  currentPickerCallback = onSelect;

  renderPickerList();
  modal.style.display = "flex";

  if (searchInput) {
    if (typeof searchInput.focus === "function") searchInput.focus();
    searchInput.oninput = () => renderPickerList();
  }
}

function renderPickerList() {
  const listBody = document.getElementById("picker-list-body");
  const searchInput = document.getElementById("picker-search-input");
  if (!listBody) return;

  const q = searchInput ? (searchInput.value || "").toLowerCase().trim() : "";
  const filtered = (currentPickerItems || []).filter(item => {
    if (!q) return true;
    const n = (item.name || "").toLowerCase();
    const d = (item.desc || item.descEn || item.effect || (item.ranks ? item.ranks[0] : "") || "").toLowerCase();
    const c = (item.category || item.type || item.cat || "").toLowerCase();
    const r = (item.req || "").toLowerCase();
    return n.includes(q) || d.includes(q) || c.includes(q) || r.includes(q);
  });

  currentPickerFiltered = filtered;

  if (filtered.length === 0) {
    listBody.innerHTML = '<div style="padding:16px; color:var(--text-dim); text-align:center;">Nessun elemento trovato.</div>';
    return;
  }

  listBody.innerHTML = filtered.map((item, idx) => {
    const reqHtml = (item.req && item.req !== "-") ? `
      <span style="font-size:10.5px; font-weight:800; color:#b45309; background:#fef3c7; border:1px solid #fde68a; padding:1px 6px; border-radius:3px; margin-left:6px; white-space:nowrap;">
        REQ: ${escapeHtml(item.req)}
      </span>` : "";

    const wwHtml = item.wildWasteland ? `
      <div style="margin-top:4px; font-size:11px; color:#d97706; font-weight:600; display:flex; align-items:center; gap:4px;">
        🏜️ Variante opzionale Wild Wasteland disponibile
      </div>` : "";

    return `
      <div class="picker-item" onclick="selectPickerItem(${idx})" style="margin-bottom:8px; padding:10px 12px; background:var(--bg-tertiary); border-radius:6px; cursor:pointer; border-left:4px solid var(--accent); transition:all 0.15s ease;">
        <div class="picker-item-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:4px;">
          <div style="display:flex; align-items:center; flex-wrap:wrap; gap:4px;">
            <span class="picker-item-title" style="font-weight:800; font-size:13.5px; color:var(--text-bright);">${escapeHtml(item.name || "Elemento")}</span>
            ${reqHtml}
          </div>
          ${item.cost ? `<span class="picker-item-badge" style="font-size:11px; color:var(--accent-amber); font-family:var(--font-mono); font-weight:700;">${item.cost}</span>` : ""}
        </div>
        ${item.category || item.type ? `<div style="font-size:11px; color:var(--accent); font-weight:700; text-transform:uppercase; margin:2px 0;">${item.category || item.type}</div>` : ""}
        <div class="picker-item-desc" style="font-size:12.5px; color:var(--text-dim); line-height:1.45; margin-top:2px;">${escapeHtml(item.desc || item.effect || (item.ranks ? item.ranks[0] : "") || "")}</div>
        ${wwHtml}
      </div>`;
  }).join("");
}

function selectPickerItem(idx) {
  const selected = (currentPickerFiltered || currentPickerItems)[idx];
  if (selected && currentPickerCallback) {
    currentPickerCallback(selected);
  }
  closePickerModal();
}

function closePickerModal() {
  const modal = document.getElementById("generic-picker-modal");
  if (modal) modal.style.display = "none";
  currentPickerCallback = null;
}

function openWeaponModPicker(weaponIdx) {
  const w = character.weapons[weaponIdx];
  if (!w) return;
  if (!Array.isArray(w.installedMods)) w.installedMods = [];

  const comp = getWeaponCompatibility(w);
  const maxSlots = comp.isLegendary ? 8 : (comp.isMelee ? 4 : 6);
  const usedSlots = (w.installedMods || []).reduce((sum, m) => sum + (m.slots || 1), 0);

  const filteredMods = (FALLOUT_RULES_DATA.weaponMods || []).filter(mod => {
    // 1. Cannot install duplicate of already installed mod
    const alreadyIn = (w.installedMods || []).find(m => m.id === mod.id);
    if (alreadyIn) return false;

    // 2. Slot cost check
    const modSlots = mod.slots || 1;
    if (usedSlots + modSlots > maxSlots) return false;

    // 3. Strict Compatibility Check via isWeaponModAllowed
    return isWeaponModAllowed(w, mod);
  });

  if (filteredMods.length === 0) {
    if (usedSlots >= maxSlots) {
      alert(`⚠️ Slot modifiche esauriti per quest'arma (${usedSlots}/${maxSlots}). Rimuovi una modifica esistente con ✕ prima di aggiungerne una nuova.`);
    } else {
      alert(`Nessuna modifica compatibile disponibile per ${w.name} (o hai già installato tutte le mod ammesse).`);
    }
    return;
  }

  openPickerModal(`MODIFICHE PER ${w.name.toUpperCase()} (Slot: ${usedSlots}/${maxSlots})`, filteredMods, (mod) => {
    w.installedMods.push({
      id: mod.id,
      name: mod.name,
      slots: mod.slots || 1,
      effect: mod.effect || "",
      weight: mod.weight || 0,
      value: mod.value || 0
    });

    // Update weapon capacity dynamically if mod alters clip/mag size
    w.ammoMax = calculateWeaponCapacity(w);
    w.ammoCurrent = Math.min(w.ammoCurrent !== undefined ? w.ammoCurrent : w.ammoMax, w.ammoMax);

    renderWeapons();
    updateDerivedValues();
    saveCharacter();
    showToast(`🔧 Installata modifica <strong>${mod.name}</strong> su <strong>${w.name}</strong>!`, "success");
  });
}

function removeWeaponMod(weaponIdx, modIdx) {
  if (!character.weapons[weaponIdx]) return;
  const w = character.weapons[weaponIdx];
  const mod = w.installedMods ? w.installedMods[modIdx] : null;
  const modName = mod ? mod.name : "Modifica";

  w.installedMods.splice(modIdx, 1);
  w.ammoMax = calculateWeaponCapacity(w);
  w.ammoCurrent = Math.min(w.ammoCurrent || 0, w.ammoMax);

  renderWeapons();
  updateDerivedValues();
  saveCharacter();
  showToast(`🗑️ Rimossa modifica: <strong>${modName}</strong> da <strong>${w.name}</strong>.`, "info");
}

function addTraitCompendium() {
  if (!character.traits) character.traits = [];
  const charRace = (character.info?.race || "human").toLowerCase();
  
  // Filter traits strictly by character race!
  const traitsList = (FALLOUT_RULES_DATA.traitsCompendium || []).filter(t => {
    return isTraitAllowedForRace(t, charRace);
  });

  const raceDisplayNames = {
    human: "Umano",
    ghoul: "Ghoul",
    robot: "Robot",
    synth: "Synth",
    super_mutant: "Super Mutante"
  };
  const raceLabel = raceDisplayNames[charRace] || charRace;

  openPickerModal(`AGGIUNGI TRATTO DA COMPENDIO (Razza: ${raceLabel})`, traitsList, (t) => {
    const effectIT = t.desc || (t.ranks && t.ranks[0]) || t.effect || "";
    const effectEN = t.descEn || (t.ranksEN && t.ranksEN[0]) || "";
    character.traits.push({
      id: t.id,
      traitRefId: t.id,
      name: t.name,
      category: t.category,
      req: t.req,
      isWildWasteland: false,
      displayLang: "IT",
      effect: effectIT
    });
    renderTraits();
    updateDerivedValues();
    saveCharacter();
  });
}

function addTraitCustom() {
  if (!character.traits) character.traits = [];
  character.traits.push({
    id: "t_" + Date.now(),
    name: "Nuovo Tratto Personalizzato",
    category: "Personalizzato",
    req: "Nessuno",
    isWildWasteland: false,
    effectStandard: "Descrizione effetto...",
    effectWildWasteland: "",
    effect: "Descrizione effetto..."
  });
  renderTraits();
  updateDerivedValues();
  saveCharacter();
}

function addPerkCompendium() {
  openPerkPickerModal("AGGIUNGI PERK DA COMPENDIO", (p) => {
    if (!character.perks) character.perks = [];
    const effectIT = (p.ranksIT && p.ranksIT[0]) || (p.ranks && p.ranks[0]) || p.effectIT || p.effect || "";
    const effectEN = (p.ranksEN && p.ranksEN[0]) || p.effectEN || "";
    character.perks.push({
      id: p.id || ("p_" + Date.now()),
      perkRefId: p.id,
      name: p.name,
      category: p.category || "Generale",
      req: p.reqText || p.req || "Nessuno",
      effect: effectIT || effectEN,
      effectIT: effectIT,
      effectEN: effectEN,
      displayLang: "IT"
    });
    renderPerks();
    updateDerivedValues();
    saveCharacter();
  });
}

function addPerkCustom() {
  if (!character.perks) character.perks = [];
  const name = prompt("Nome del Perk Personalizzato:");
  if (!name) return;
  const effect = prompt("Descrizione dell'effetto del Perk:") || "";
  character.perks.push({
    id: "p_" + Date.now(),
    name,
    category: "Personalizzato",
    req: "Nessuno",
    effect
  });
  renderPerks();
  updateDerivedValues();
  saveCharacter();
}

function addWeaponCompendium(category) {
  if (!character.weapons) character.weapons = [];
  const allWeapons = FALLOUT_RULES_DATA.weapons || [];
  const filtered = category ? allWeapons.filter(w => (w.type || "").toLowerCase().includes(category.toLowerCase())) : allWeapons;
  openPickerModal("AGGIUNGI ARMA DA COMPENDIO", filtered, (w) => {
    character.weapons.push({
      id: "w_" + Date.now(),
      name: w.name,
      type: w.type,
      skill: w.skill || "armi_leggere",
      damage: w.damage || "1d6",
      ap: w.ap || 4,
      range: w.range || "C",
      ammo: w.ammo || "Nessuna",
      installedMods: [],
      legendaryTraits: []
    });
    renderWeapons();
    updateDerivedValues();
    saveCharacter();
  });
}

function addWeaponFirearm() {
  addWeaponCompendium("arma da fuoco");
}

function addWeaponMelee() {
  addWeaponCompendium("mischia");
}

function addInvCompendium() {
  if (!character.inventory) character.inventory = [];
  const items = (FALLOUT_RULES_DATA.gear || []).concat(FALLOUT_RULES_DATA.ammo || []);
  openPickerModal("AGGIUNGI OGGETTO DA COMPENDIO", items, (item) => {
    character.inventory.push({
      id: "inv_" + Date.now(),
      name: item.name,
      qty: 1,
      weight: item.weight || 0,
      value: item.value || item.cost || 0,
      equipped: false
    });
    renderInventory();
    updateInventoryAndCarry();
    saveCharacter();
  });
}

function addInvItem() {
  if (!character.inventory) character.inventory = [];
  character.inventory.push({
    id: "inv_" + Date.now(),
    name: "Nuovo Oggetto",
    qty: 1,
    weight: 1,
    value: 0,
    equipped: false
  });
  renderInventory();
  updateInventoryAndCarry();
  saveCharacter();
}

function positionTooltip(e, tooltipEl) {
  const pad = 12;
  let x = e.clientX + pad;
  let y = e.clientY + pad;

  const rect = tooltipEl.getBoundingClientRect();
  if (x + rect.width > window.innerWidth - 10) {
    x = e.clientX - rect.width - pad;
  }
  if (y + rect.height > window.innerHeight - 10) {
    y = e.clientY - rect.height - pad;
  }

  tooltipEl.style.left = `${Math.max(5, x)}px`;
  tooltipEl.style.top = `${Math.max(5, y)}px`;
}

// =============================================================================
// GLOBAL WINDOW BINDINGS
// =============================================================================

window.applyTheme = applyTheme;
window.toggleLimb = toggleLimb;
window.setSurvivalLevel = setSurvivalLevel;
window.applyBackgroundTagSkills = applyBackgroundTagSkills;
window.updateWeaponDamageField = updateWeaponDamageField;
window.updateArmorQuality = updateArmorQuality;
window.addArmorLegendaryTrait = addArmorLegendaryTrait;
window.updateArmorLegendaryTrait = updateArmorLegendaryTrait;
window.removeArmorLegendaryTrait = removeArmorLegendaryTrait;
window.addWeaponLegendaryTrait = addWeaponLegendaryTrait;
window.updateWeaponLegendaryTrait = updateWeaponLegendaryTrait;
window.removeWeaponLegendaryTrait = removeWeaponLegendaryTrait;
window.hasDualWieldPerk = hasDualWieldPerk;
window.getDualWieldStatus = getDualWieldStatus;
window.adjustStat = adjustStat;
window.updateStatScore = updateStatScore;
window.updateStatMod = updateStatMod;
window.toggleSkillTag = toggleSkillTag;
window.toggleSkillAltAttr = toggleSkillAltAttr;
window.updateSkillField = updateSkillField;
window.updateSkillTotalCustom = updateSkillTotalCustom;
window.adjustTraitRank = adjustTraitRank;
window.updateTraitField = updateTraitField;
window.deleteTrait = deleteTrait;
window.updatePerkField = updatePerkField;
window.deletePerk = deletePerk;
window.levelUpState = levelUpState;
window.openLevelUpWizard = openLevelUpWizard;
window.closeLevelUpModal = closeLevelUpModal;
window.allocateLevelUpSkill = allocateLevelUpSkill;
window.pickLevelUpPerkCompendium = pickLevelUpPerkCompendium;
window.pickLevelUpPerkCustom = pickLevelUpPerkCustom;
window.confirmApplyLevelUp = confirmApplyLevelUp;
window.onLevelInputChange = onLevelInputChange;
window.setPerkFilterCategory = setPerkFilterCategory;
window.togglePerkAvailabilityFilter = togglePerkAvailabilityFilter;
window.selectPickerItem = selectPickerItem;
window.closePickerModal = closePickerModal;
window.openWeaponModPicker = openWeaponModPicker;

// =============================================================================
// RACIAL & ARMOR UPGRADE HELPER FUNCTIONS
// =============================================================================

function toggleRacialOption(id) {
  onRaceVariantChange(id);
}

function removeCustomRacialTrait(idx) {
  if (character.racialOptions && character.racialOptions.customTraits) {
    character.racialOptions.customTraits.splice(idx, 1);
    renderRacialBonuses();
    saveCharacter();
  }
}

function addCustomRacialTrait() {
  const name = prompt("Nome del Tratto Personalizzato:");
  if (!name) return;
  const eff = prompt("Effetto:") || "";
  if (!character.racialOptions) character.racialOptions = { activeIds: [], customTraits: [] };
  if (!character.racialOptions.customTraits) character.racialOptions.customTraits = [];
  character.racialOptions.customTraits.push({ name, effect: eff });
  renderRacialBonuses();
  saveCharacter();
}

function addArmorUpgrade() {
  if (!character.armor) character.armor = { installedUpgrades: [] };
  if (!Array.isArray(character.armor.installedUpgrades)) character.armor.installedUpgrades = [];

  const cap = getArmorSlotCapacity();
  if (cap.isFull) {
    showArmorSlotsFullModal(cap);
    return;
  }

  const allMods = FALLOUT_RULES_DATA.armorUpgrades || [];
  const installedIds = character.armor.installedUpgrades.map(u => u.id);
  const avail = allMods.filter(m => !installedIds.includes(m.id));

  if (avail.length === 0) {
    alert("Hai già installato tutte le modifiche compatibili disponibili.");
    return;
  }

  openPickerModal(`AGGIUNGI UPGRADE ARMATURA (${cap.usedSlots + 1}/${cap.totalSlots} Slot)`, avail, (upg) => {
    character.armor.installedUpgrades.push({
      id: upg.id,
      name: upg.name,
      rank: 1,
      maxRank: upg.maxRank || 3,
      effect: (upg.ranks && upg.ranks[0]) || upg.effect || ""
    });
    recalcArmor();
    updateDerivedValues();
    renderArmor();
    saveCharacter();
    showToast(`🛡️ Nuova modifica installata: <strong>${upg.name}</strong> (Slot ${character.armor.installedUpgrades.length}/${cap.totalSlots})`, "success");
  });
}

function addInventoryItem() {
  addInvItem();
}

function addCompendiumItemToInventory() {
  addInvCompendium();
}

window.toggleRacialOption = toggleRacialOption;
window.removeCustomRacialTrait = removeCustomRacialTrait;
window.adjustArmorUpgradeRank = adjustArmorUpgradeRank;
window.removeArmorUpgrade = removeArmorUpgrade;
window.updateWeaponField = updateWeaponField;
window.updateWeaponQuality = updateWeaponQuality;
window.updateWeaponAmmo = updateWeaponAmmo;
window.removeWeaponMod = removeWeaponMod;
window.deleteWeapon = deleteWeapon;
window.unequipWeaponToInventory = unequipWeaponToInventory;
window.equipWeaponFromInventory = equipWeaponFromInventory;
window.forceAddWeaponSlot = forceAddWeaponSlot;
window.closeEquipSwapModal = closeEquipSwapModal;
window.equipArmorFromInventory = equipArmorFromInventory;
window.unequipArmorToInventory = unequipArmorToInventory;
window.updateInvField = updateInvField;
window.deleteInvItem = deleteInvItem;
window.addCustomRacialTrait = addCustomRacialTrait;
window.addArmorUpgrade = addArmorUpgrade;
window.adjustArmorLegendarySlots = adjustArmorLegendarySlots;
window.closeArmorSlotsModal = closeArmorSlotsModal;
window.replaceArmorUpgrade = replaceArmorUpgrade;
window.removeArmorUpgradeAndReopen = removeArmorUpgradeAndReopen;
window.getArmorSlotCapacity = getArmorSlotCapacity;

window.addWeaponFirearm = addWeaponFirearm;
window.addWeaponMelee = addWeaponMelee;
window.addWeaponCompendium = addWeaponCompendium;
window.addTraitCompendium = addTraitCompendium;
window.addTraitCustom = addTraitCustom;
window.addPerkCompendium = addPerkCompendium;
window.addPerkCustom = addPerkCustom;
window.addInventoryItem = addInventoryItem;
window.addCompendiumItemToInventory = addCompendiumItemToInventory;
window.showTraitDetailModal = showTraitDetailModal;
window.closeTraitDetailModal = closeTraitDetailModal;
window.addBioPersonalityTrait = addBioPersonalityTrait;
window.removeBioPersonalityTrait = removeBioPersonalityTrait;
window.addBioEvent = addBioEvent;
window.removeBioEvent = removeBioEvent;
window.addBioGoal = addBioGoal;
window.toggleBioGoalStatus = toggleBioGoalStatus;
window.removeBioGoal = removeBioGoal;
window.addBioRelationship = addBioRelationship;
window.removeBioRelationship = removeBioRelationship;
window.addBioGift = addBioGift;
window.removeBioGift = removeBioGift;

// =============================================================================
// PIP-BOY ENGINE (MODULARE & MULTI-MASCHERINA)
// =============================================================================

function ensurePipboyDefaults() {
  if (!character.pipboy) {
    character.pipboy = {
      owned: false,
      model: "pb3000mk4",
      decay: 0,
      installedUpgrades: [],
      notes: "",
      flashlightActive: false,
      radioStation: "off"
    };
  }
  if (!character.pipboy.model) character.pipboy.model = "pb3000mk4";
  if (!Array.isArray(character.pipboy.installedUpgrades)) character.pipboy.installedUpgrades = [];
  if (character.pipboy.flashlightActive === undefined) character.pipboy.flashlightActive = false;
  if (!character.pipboy.radioStation) character.pipboy.radioStation = "off";
}

/**
 * Toggle Pip-Boy ownership on/off.
 */
function togglePipboyOwned(owned) {
  ensurePipboyDefaults();
  character.pipboy.owned = !!owned;
  renderPipboy();
  recalcSkills();
  renderSkills();
  saveCharacter();
  showToast(character.pipboy.owned ? "📟 <strong>Pip-Boy Equipaggiato:</strong> Funzionalità e telemetria attive!" : "📟 <strong>Pip-Boy Rimosso.</strong>", character.pipboy.owned ? "success" : "info");
}

/**
 * Called when user changes the Pip-Boy model dropdown.
 */
function onPipboyModelChange(modelId) {
  ensurePipboyDefaults();
  character.pipboy.model = modelId;
  const mdl = (FALLOUT_RULES_DATA.pipboyModels || []).find(m => m.id === modelId);
  if (mdl) {
    let usedSlots = 0;
    character.pipboy.installedUpgrades = character.pipboy.installedUpgrades.filter(u => {
      const def = (FALLOUT_RULES_DATA.pipboyUpgrades || []).find(d => d.id === u.id);
      if (!def) return false;
      if (usedSlots + def.slots <= mdl.upgradeSlots) {
        usedSlots += def.slots;
        return true;
      }
      return false;
    });
  }
  renderPipboy();
  recalcSkills();
  renderSkills();
  saveCharacter();
  showToast(`📟 Modello impostato: <strong>${mdl ? mdl.name : modelId}</strong>`, "info");
}

/**
 * Update Pip-Boy decay from pip (0-10 square click).
 */
function setPipboyDecay(val) {
  ensurePipboyDefaults();
  character.pipboy.decay = Math.max(0, Math.min(10, val));
  renderPipboyDecay();
  saveCharacter();
}

/**
 * Update Pip-Boy notes.
 */
function updatePipboyNotes(val) {
  ensurePipboyDefaults();
  character.pipboy.notes = val;
  saveCharacter();
}

/**
 * Toggle Pip-Boy flashlight.
 */
function togglePipboyFlashlight() {
  ensurePipboyDefaults();
  character.pipboy.flashlightActive = !character.pipboy.flashlightActive;
  if (typeof quickItemsState !== "undefined") {
    quickItemsState.torchOn = character.pipboy.flashlightActive;
  }
  if (typeof syncTorchUi === "function") syncTorchUi();
  renderPipboy();
  saveCharacter();
  const state = character.pipboy.flashlightActive;
  const hasPowerRelay = (character.pipboy.installedUpgrades || []).some(u => u.id === "pbu_power_relay");
  const range = hasPowerRelay ? "45 ft (Power Relay)" : "30 ft";
  showToast(`💡 <strong>Torcia Pip-Boy:</strong> ${state ? `ACCESA (Raggio ${range})` : 'SPENTA'}`, state ? "success" : "info");
}

/**
 * Scan Geiger counter.
 */
function triggerPipboyGeigerScan() {
  ensurePipboyDefaults();
  const rads = (character.vitals && character.vitals.rads) || 0;
  const dc = (character.vitals && character.vitals.radDc) || 12;
  if (rads === 0) {
    showToast(`☢️ <strong>Contatore Geiger:</strong> Zona sicura (0 Rads). Fondo radioattivo nella norma. DC Rad: ${dc}.`, "success");
  } else if (rads <= 4) {
    showToast(`☢️ <strong>Contatore Geiger:</strong> ⚠️ Rilevata radioattività (${rads} Rads)! DC Rad: ${dc}. Consigliato RadAway.`, "warning");
  } else {
    showToast(`☢️ <strong>Contatore Geiger:</strong> 🚨 ALLERTA RADIAZIONI GRAVE (${rads} Rads)! Contaminazione critica! DC Rad: ${dc}.`, "danger");
  }
}

/**
 * Cycle Pip-Boy radio stations.
 */
function cyclePipboyRadio() {
  ensurePipboyDefaults();
  const stations = [
    { id: "off", name: "Spenta" },
    { id: "diamond_city", name: "Diamond City Radio" },
    { id: "freedom", name: "Radio Freedom (Minutemen)" },
    { id: "enclave", name: "Radio Enclave (President Eden)" },
    { id: "emergency", name: "Frequenza SOS Emergenza" }
  ];
  const curIdx = stations.findIndex(s => s.id === character.pipboy.radioStation);
  const nextIdx = (curIdx + 1) % stations.length;
  character.pipboy.radioStation = stations[nextIdx].id;
  renderPipboy();
  saveCharacter();
  showToast(`📻 <strong>Radio Sintonizzata:</strong> ${stations[nextIdx].name}`, "info");
}

/**
 * Trigger EM pulse scan (costs 2 AP).
 */
function triggerPipboyEMScan() {
  ensurePipboyDefaults();
  const curAp = (character.vitals && character.vitals.currentAp !== undefined) ? character.vitals.currentAp : 10;
  if (curAp < 2) {
    alert("AP insufficienti per la scansione EM (richiede 2 AP).");
    return;
  }
  character.vitals.currentAp -= 2;
  const apEl = document.getElementById("current-ap");
  if (apEl) apEl.value = character.vitals.currentAp;
  const perMod = (typeof getStatMod === "function") ? getStatMod("perception") : 2;
  const range = 60;
  showToast(`📡 <strong>Sensore EM Attivato (-2 AP):</strong> Scansione battiti cardiaci entro ${range} ft. Percezione Passiva: ${12 + perMod}. Rilevamento completato.`, "success");
  renderPipboy();
  saveCharacter();
}

/**
 * Open V.A.T.S. targeting visual info modal/toast.
 */
function showVatsTargetingInfo() {
  showToast(`🎯 <strong>V.A.T.S. TARGETING:</strong><br>
  • <strong>Testa:</strong> -2 Colpire | Critico +1d6 | Menomazione: -2 PER<br>
  • <strong>Torso:</strong> Normale | Menomazione: Svantaggio fisico<br>
  • <strong>Braccia:</strong> -1 Colpire | Menomazione: Disarmo / Svantaggio armi<br>
  • <strong>Gambe:</strong> -1 Colpire | Menomazione: Movimento dimezzato`, "info");
}

/**
 * Open Pip-Boy Upgrade catalog modal.
 */
function addPipboyUpgrade() {
  openPipboyUpgradeModal();
}

function openPipboyUpgradeModal() {
  ensurePipboyDefaults();
  const modal = document.getElementById("pipboy-upgrade-modal");
  if (!modal) return;

  const modelId = character.pipboy.model;
  const mdl = (FALLOUT_RULES_DATA.pipboyModels || []).find(m => m.id === modelId) || { upgradeSlots: 5, name: "Pip-Boy 3000 Mk IV" };
  const totalSlots = mdl.upgradeSlots || 5;
  const usedSlots = getPipboyUsedSlots();

  const slotsInfo = document.getElementById("pb-modal-slots-info");
  if (slotsInfo) slotsInfo.textContent = `Slot Occupati: ${usedSlots} / ${totalSlots}`;

  const modelInfo = document.getElementById("pb-modal-model-info");
  if (modelInfo) modelInfo.textContent = `Modello: ${mdl.name}`;

  const listContainer = document.getElementById("pb-modal-upgrades-list");
  if (listContainer) {
    const allUpgrades = FALLOUT_RULES_DATA.pipboyUpgrades || [];
    const installed = character.pipboy.installedUpgrades || [];

    listContainer.innerHTML = allUpgrades.map(u => {
      const isAlreadyIn = installed.some(i => i.id === u.id);
      const hasEnoughSlots = (usedSlots + u.slots) <= totalSlots;
      
      // Model compatibility check
      const appliesTo = u.appliesTo || "Tutti i modelli";
      const isCompatible = appliesTo === "Tutti i modelli" || 
                           appliesTo.includes("Tutti i modelli") || 
                           appliesTo.includes(mdl.name) || 
                           (appliesTo.includes("3000") && (modelId.includes("3000") || modelId === "pbpimp" || modelId === "pbinstitute"));

      let actionBtn = "";
      if (isAlreadyIn) {
        actionBtn = `<span style="font-size:11px; font-weight:bold; color:#10b981; padding:3px 8px; background:rgba(16,185,129,0.12); border-radius:3px;">✓ Installato</span>`;
      } else if (!isCompatible) {
        actionBtn = `<span style="font-size:11px; color:#ef4444; padding:3px 6px; background:rgba(239,68,68,0.1); border-radius:3px;">Incompatibile</span>`;
      } else if (!hasEnoughSlots) {
        actionBtn = `<span style="font-size:11px; color:#d97706; padding:3px 6px; background:rgba(217,119,6,0.1); border-radius:3px;">Slot Pieni</span>`;
      } else {
        actionBtn = `<button type="button" class="btn btn-sm btn-primary" onclick="installPipboyUpgrade('${u.id}')" style="font-size:11.5px; padding:3px 10px;">+ Installa (${u.cost})</button>`;
      }

      return `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; padding:8px 10px; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:5px;">
          <div style="flex:1;">
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <span style="font-weight:bold; font-size:13px; color:var(--text-bright);">${u.name}</span>
              <span style="font-size:10.5px; padding:1px 5px; border-radius:3px; background:rgba(59,130,246,0.15); color:#2563eb; font-weight:bold;">${u.slots} ${u.slots === 1 ? 'Slot' : 'Slot'}</span>
              <span style="font-size:10.5px; color:#d97706; font-weight:bold;">${u.cost}</span>
            </div>
            <div style="font-size:11.5px; color:var(--text-bright); margin-top:3px; line-height:1.35;">${u.ranks ? u.ranks[0] : (u.effect || "")}</div>
            <div style="font-size:10.5px; color:var(--text-dim); margin-top:3px;">Compatibilità: <em>${u.appliesTo}</em> &nbsp;|&nbsp; Gradi max: <strong>${u.maxRank || 1}</strong></div>
          </div>
          <div style="align-self:center; margin-left:6px;">
            ${actionBtn}
          </div>
        </div>
      `;
    }).join("");
  }

  modal.style.display = "flex";
}

function closePipboyUpgradeModal() {
  const modal = document.getElementById("pipboy-upgrade-modal");
  if (modal) modal.style.display = "none";
}

function installPipboyUpgrade(upgradeId) {
  ensurePipboyDefaults();
  const allUpgrades = FALLOUT_RULES_DATA.pipboyUpgrades || [];
  const def = allUpgrades.find(u => u.id === upgradeId);
  if (!def) return;

  const totalSlots = ((FALLOUT_RULES_DATA.pipboyModels || []).find(m => m.id === character.pipboy.model) || { upgradeSlots: 5 }).upgradeSlots;
  const usedSlots = getPipboyUsedSlots();

  if (usedSlots + def.slots > totalSlots) {
    alert("Slot insufficienti per installare questo upgrade.");
    return;
  }

  character.pipboy.installedUpgrades.push({
    id: def.id,
    name: def.name,
    rank: 1,
    maxRank: def.maxRank || 1
  });

  renderPipboy();
  recalcSkills();
  renderSkills();
  saveCharacter();
  openPipboyUpgradeModal(); // Refresh modal state
  showToast(`📟 Upgrade installato: <strong>${def.name}</strong>!`, "success");
}

function changePipboyUpgradeRank(index, delta) {
  ensurePipboyDefaults();
  const u = character.pipboy.installedUpgrades[index];
  if (!u) return;
  u.rank = Math.max(1, Math.min(u.maxRank, (u.rank || 1) + delta));
  renderPipboy();
  recalcSkills();
  renderSkills();
  saveCharacter();
}

function removePipboyUpgrade(index) {
  ensurePipboyDefaults();
  const u = character.pipboy.installedUpgrades[index];
  const name = u ? u.name : "Upgrade";
  character.pipboy.installedUpgrades.splice(index, 1);
  renderPipboy();
  recalcSkills();
  renderSkills();
  saveCharacter();
  showToast(`🗑️ Rimosso upgrade: <strong>${name}</strong>`, "info");
}

function getPipboyUsedSlots() {
  ensurePipboyDefaults();
  return character.pipboy.installedUpgrades.reduce((sum, u) => {
    const def = (FALLOUT_RULES_DATA.pipboyUpgrades || []).find(d => d.id === u.id);
    return sum + (def ? def.slots : 1);
  }, 0);
}

/**
 * Render dynamic custom SVG Mascherina for each Pip-Boy model.
 */
function renderPipboyDeviceVisual(modelId) {
  const container = document.getElementById("pipboy-device-visual");
  if (!container) return;

  const mId = modelId || (character.pipboy && character.pipboy.model) || "pb3000mk4";
  const isTorchOn = !!(character.pipboy && character.pipboy.flashlightActive);
  const radio = (character.pipboy && character.pipboy.radioStation) || "off";
  const rads = (character.vitals && character.vitals.rads) || 0;
  const hpCur = (character.vitals && character.vitals.currentHp) || 10;
  const hpMax = (character.vitals && character.vitals.maxHp) || 10;
  const bpm = hpCur < (hpMax / 2) ? 138 : 72;

  let svgHtml = "";

  if (mId === "pb2000") {
    // 1. PIP-BOY 2000: Vintage Pre-War, Brass & Olive Drab with Vacuum Tubes & Amber CRT
    svgHtml = `
      <svg class="pipboy-svg" viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="crt-amber-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="${isTorchOn ? '0.45' : '0.2'}"/>
            <stop offset="100%" stop-color="#78350f" stop-opacity="0.05"/>
          </radialGradient>
        </defs>
        <!-- Wrist Casing (Olive-Bronze) -->
        <rect x="22" y="18" width="126" height="152" rx="16" fill="#3b4836" stroke="#b45309" stroke-width="2.5"/>
        <rect x="18" y="58" width="134" height="60" rx="4" fill="#2d3729" opacity="0.6"/>
        <!-- Dual Glowing Vacuum Tubes on Right -->
        <rect x="136" y="28" width="12" height="26" rx="4" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.2"/>
        <line x1="142" y1="32" x2="142" y2="50" stroke="#fef08a" stroke-width="1.5"/>
        <circle cx="142" cy="40" r="3" fill="#f59e0b" opacity="0.8"/>
        
        <rect x="136" y="60" width="12" height="26" rx="4" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.2"/>
        <line x1="142" y1="64" x2="142" y2="82" stroke="#fef08a" stroke-width="1.5"/>
        <circle cx="142" cy="72" r="3" fill="#f59e0b" opacity="0.8"/>

        <!-- CRT Display Curved Bezel -->
        <rect x="34" y="30" width="94" height="80" rx="8" fill="#181206" stroke="#d97706" stroke-width="2"/>
        <rect x="34" y="30" width="94" height="80" rx="8" fill="url(#crt-amber-glow)"/>
        
        <!-- Screen Content -->
        <text x="81" y="48" text-anchor="middle" fill="#f59e0b" font-size="7.5" font-family="'JetBrains Mono', monospace" font-weight="900">PIP-BOY 2000</text>
        <text x="81" y="59" text-anchor="middle" fill="#d97706" font-size="5" font-family="monospace">VAULT-TEC VINTAGE</text>
        <line x1="42" y1="63" x2="120" y2="63" stroke="#b45309" stroke-width="0.8" stroke-dasharray="2,2"/>
        <text x="81" y="73" text-anchor="middle" fill="#fbbf24" font-size="5.5" font-family="monospace">PULSE: ${bpm} BPM</text>
        <text x="81" y="83" text-anchor="middle" fill="${rads > 0 ? '#ef4444' : '#f59e0b'}" font-size="5" font-family="monospace">RADS: ${rads} • DC ${12}</text>
        <text x="81" y="93" text-anchor="middle" fill="${isTorchOn ? '#fef08a' : '#92400e'}" font-size="5" font-family="monospace">${isTorchOn ? '● TORCIA ON (30ft)' : '○ TORCIA OFF'}</text>
        <text x="81" y="103" text-anchor="middle" fill="#d97706" font-size="4.5" font-family="monospace">${radio !== 'off' ? '📻 ' + radio.toUpperCase() : 'RADIO: SPENTA'}</text>

        <!-- Analog Brass Knobs -->
        <circle cx="50" cy="142" r="8" fill="#92400e" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="81" cy="148" r="10" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="112" cy="142" r="8" fill="#92400e" stroke="#f59e0b" stroke-width="1.5"/>
        <!-- Rivets -->
        <circle cx="30" cy="26" r="2" fill="#d97706"/>
        <circle cx="128" cy="26" r="2" fill="#d97706"/>
        <circle cx="30" cy="162" r="2" fill="#d97706"/>
        <circle cx="128" cy="162" r="2" fill="#d97706"/>
      </svg>
    `;
  } else if (mId === "pb2000mk6") {
    // 2. PIP-BOY 2000 MK VI: Appalachia, Fiber-reinforced composite, Emerald Green CRT & Gauge
    svgHtml = `
      <svg class="pipboy-svg" viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
        <!-- Chassis (Reinforced Slate Olive) -->
        <rect x="20" y="18" width="130" height="154" rx="14" fill="#3f4a3e" stroke="#10b981" stroke-width="2"/>
        <!-- Top Vacuum Tube & Gauge -->
        <circle cx="48" cy="22" r="9" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <line x1="48" y1="22" x2="53" y2="17" stroke="#34d399" stroke-width="1.5"/>
        <rect x="110" y="10" width="14" height="24" rx="4" fill="rgba(16,185,129,0.25)" stroke="#10b981" stroke-width="1.2"/>
        <line x1="117" y1="14" x2="117" y2="30" stroke="#6ee7b7" stroke-width="1.2"/>

        <!-- Screen (Emerald Phosphor) -->
        <rect x="34" y="34" width="98" height="78" rx="6" fill="#042014" stroke="#059669" stroke-width="2"/>
        <text x="83" y="52" text-anchor="middle" fill="#34d399" font-size="7.5" font-family="'JetBrains Mono', monospace" font-weight="900">PIP-BOY 2000 Mk VI</text>
        <text x="83" y="63" text-anchor="middle" fill="#10b981" font-size="5" font-family="monospace">APPALACHIA SYSTEM</text>
        <line x1="42" y1="67" x2="124" y2="67" stroke="#047857" stroke-width="0.8"/>
        <text x="83" y="78" text-anchor="middle" fill="#6ee7b7" font-size="5.5" font-family="monospace">EM PULSE: ATTIVO</text>
        <text x="83" y="88" text-anchor="middle" fill="#10b981" font-size="5" font-family="monospace">VITAL MONITOR: ${hpCur}/${hpMax} HP</text>
        <text x="83" y="98" text-anchor="middle" fill="${isTorchOn ? '#fef08a' : '#047857'}" font-size="5" font-family="monospace">${isTorchOn ? '● TORCIA ATTIVA' : '○ TORCIA SPENTA'}</text>

        <!-- Rotary Dials & Mesh -->
        <rect x="30" y="126" width="110" height="34" rx="6" fill="#1f2937" stroke="#374151" stroke-width="1"/>
        <circle cx="56" cy="143" r="8" fill="#111827" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="85" cy="143" r="8" fill="#111827" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="114" cy="143" r="8" fill="#111827" stroke="#10b981" stroke-width="1.5"/>
      </svg>
    `;
  } else if (mId === "pb3000") {
    // 3. PIP-BOY 3000: Capital Wasteland Classic, Heavy Scroll Wheel, Jewel LEDs & Radio Tuning
    svgHtml = `
      <svg class="pipboy-svg" viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
        <!-- Main Body -->
        <rect x="22" y="16" width="126" height="156" rx="14" fill="#2d3748" stroke="#38a169" stroke-width="2"/>
        <!-- Left Wheel -->
        <rect x="6" y="55" width="16" height="60" rx="4" fill="#1a202c" stroke="#4a5568" stroke-width="1.5"/>
        <line x1="8" y1="65" x2="20" y2="65" stroke="#718096" stroke-width="1.2"/>
        <line x1="8" y1="75" x2="20" y2="75" stroke="#718096" stroke-width="1.2"/>
        <line x1="8" y1="85" x2="20" y2="85" stroke="#718096" stroke-width="1.2"/>
        <line x1="8" y1="95" x2="20" y2="95" stroke="#718096" stroke-width="1.2"/>
        <line x1="8" y1="105" x2="20" y2="105" stroke="#718096" stroke-width="1.2"/>

        <!-- Top Jewel LEDs -->
        <circle cx="50" cy="24" r="3.5" fill="#ef4444"/>
        <circle cx="85" cy="24" r="3.5" fill="#22c55e"/>
        <circle cx="120" cy="24" r="3.5" fill="#f59e0b"/>

        <!-- Screen (Classic Green) -->
        <rect x="34" y="36" width="98" height="76" rx="5" fill="#081c10" stroke="#22c55e" stroke-width="2"/>
        <text x="83" y="53" text-anchor="middle" fill="#48bb78" font-size="7.5" font-family="'JetBrains Mono', monospace" font-weight="900">PIP-BOY 3000</text>
        <text x="83" y="64" text-anchor="middle" fill="#38a169" font-size="5" font-family="monospace">CAPITAL WASTELAND</text>
        <line x1="42" y1="68" x2="124" y2="68" stroke="#22543d" stroke-width="0.8"/>
        <text x="83" y="79" text-anchor="middle" fill="#68d391" font-size="5.5" font-family="monospace">V.A.T.S. ONLINE</text>
        <text x="83" y="89" text-anchor="middle" fill="#48bb78" font-size="5" font-family="monospace">GEIGER: ${rads} RADS</text>
        <text x="83" y="99" text-anchor="middle" fill="${isTorchOn ? '#fef08a' : '#22543d'}" font-size="5" font-family="monospace">${isTorchOn ? '● TORCIA ON' : '○ TORCIA OFF'}</text>

        <!-- Lower Panel Knobs -->
        <circle cx="60" cy="140" r="7" fill="#1a202c" stroke="#38a169" stroke-width="1.5"/>
        <circle cx="85" cy="148" r="9" fill="#1a202c" stroke="#38a169" stroke-width="2"/>
        <circle cx="110" cy="140" r="7" fill="#1a202c" stroke="#38a169" stroke-width="1.5"/>
      </svg>
    `;
  } else if (mId === "pbpimp") {
    // 5. PIMP-BOY 3 BILLION: Solid 24k Gold with Diamond studs and Rich Gold Phosphor
    svgHtml = `
      <svg class="pipboy-svg" viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#eab308"/>
            <stop offset="100%" stop-color="#a16207"/>
          </linearGradient>
        </defs>
        <!-- Gold Body -->
        <rect x="20" y="16" width="130" height="158" rx="16" fill="url(#gold-grad)" stroke="#ca8a04" stroke-width="2.5"/>
        <!-- Diamond Studs around border -->
        <circle cx="30" cy="24" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="50" cy="24" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="70" cy="24" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="90" cy="24" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="110" cy="24" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="130" cy="24" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="140" cy="50" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="140" cy="80" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="140" cy="110" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="20" cy="50" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="20" cy="80" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>
        <circle cx="20" cy="110" r="3" fill="#ffffff" stroke="#eab308" stroke-width="0.8"/>

        <!-- Screen (Luxurious Gold Phosphor) -->
        <rect x="34" y="34" width="98" height="78" rx="6" fill="#241704" stroke="#facc15" stroke-width="2"/>
        <text x="83" y="52" text-anchor="middle" fill="#fde047" font-size="7" font-family="'JetBrains Mono', monospace" font-weight="900">★ PIMP-BOY 3 BILLION ★</text>
        <text x="83" y="63" text-anchor="middle" fill="#eab308" font-size="4.8" font-family="monospace">MICK & RALPH'S DELUXE</text>
        <line x1="42" y1="67" x2="124" y2="67" stroke="#ca8a04" stroke-width="0.8"/>
        <text x="83" y="78" text-anchor="middle" fill="#fef08a" font-size="5.5" font-family="monospace">BARTER DISCOUNT: +10%</text>
        <text x="83" y="88" text-anchor="middle" fill="#facc15" font-size="5" font-family="monospace">V.A.T.S. DELUXE READY</text>
        <text x="83" y="98" text-anchor="middle" fill="${isTorchOn ? '#ffffff' : '#a16207'}" font-size="5" font-family="monospace">${isTorchOn ? '● GOLDEN TORCH ON' : '○ TORCH OFF'}</text>

        <!-- Gold Knobs -->
        <circle cx="56" cy="142" r="8" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="1"/>
        <circle cx="85" cy="148" r="10" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="114" cy="142" r="8" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="1"/>
      </svg>
    `;
  } else if (mId === "pbinstitute") {
    // 6. PIP-PAD DELL'ISTITUTO: Minimalist Sterile White, Cyan Holographic Display
    svgHtml = `
      <svg class="pipboy-svg" viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
        <!-- Clean White Polymer Frame -->
        <rect x="20" y="16" width="130" height="160" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="22" y="18" width="126" height="156" rx="10" fill="#f1f5f9" stroke="#94a3b8" stroke-width="0.5"/>
        
        <!-- Flush Cyan Glass Screen -->
        <rect x="30" y="28" width="110" height="105" rx="6" fill="#041a20" stroke="#06b6d4" stroke-width="2"/>
        <text x="85" y="47" text-anchor="middle" fill="#38bdf8" font-size="7.5" font-family="'JetBrains Mono', monospace" font-weight="900">INSTITUTE DATA-PAD</text>
        <text x="85" y="58" text-anchor="middle" fill="#06b6d4" font-size="5" font-family="monospace">SYNTH GEN-3 INTERFACE</text>
        <line x1="38" y1="62" x2="132" y2="62" stroke="#0891b2" stroke-width="0.8"/>
        <text x="85" y="74" text-anchor="middle" fill="#7dd3fc" font-size="5.5" font-family="monospace">STATUS: BIOLINK SYNCHED</text>
        <text x="85" y="85" text-anchor="middle" fill="#38bdf8" font-size="5" font-family="monospace">PULSE: ${bpm} BPM • HP ${hpCur}/${hpMax}</text>
        <text x="85" y="96" text-anchor="middle" fill="${isTorchOn ? '#e0f2fe' : '#0891b2'}" font-size="5" font-family="monospace">${isTorchOn ? '● CYAN LED: ACTIVE' : '○ CYAN LED: OFF'}</text>
        <text x="85" y="107" text-anchor="middle" fill="#06b6d4" font-size="4.8" font-family="monospace">${radio !== 'off' ? 'SIGNAL: ' + radio.toUpperCase() : 'TRANSMITTER: STANDBY'}</text>

        <!-- Sleek Institute Capacitive Bar -->
        <rect x="45" y="148" width="80" height="6" rx="3" fill="#0891b2" opacity="${isTorchOn ? '0.9' : '0.4'}"/>
        <circle cx="85" cy="162" r="4" fill="#06b6d4"/>
      </svg>
    `;
  } else {
    // 4. Default: PIP-BOY 3000 MARK IV: Commonwealth Graphite Metallic with Holotape Deck
    svgHtml = `
      <svg class="pipboy-svg" viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
        <!-- Chassis (Dark Metallic Graphite) -->
        <rect x="20" y="18" width="130" height="152" rx="14" fill="#1e293b" stroke="#3ddc84" stroke-width="2"/>
        <!-- Holotape Top Port -->
        <rect x="50" y="8" width="70" height="14" rx="3" fill="#0f172a" stroke="#3ddc84" stroke-width="1.2"/>
        <line x1="56" y1="15" x2="114" y2="15" stroke="#3ddc84" stroke-width="1.5" stroke-dasharray="4,2"/>

        <!-- Screen (High-Res Green Scanlines) -->
        <rect x="32" y="30" width="102" height="82" rx="6" fill="#051c0f" stroke="#22c55e" stroke-width="2"/>
        <text x="83" y="48" text-anchor="middle" fill="#3ddc84" font-size="8" font-family="'JetBrains Mono', monospace" font-weight="900">PIP-BOY 3000 MK IV</text>
        <text x="83" y="59" text-anchor="middle" fill="#22c55e" font-size="5" font-family="monospace">COMMONWEALTH SYSTEM</text>
        <line x1="40" y1="63" x2="126" y2="63" stroke="#15803d" stroke-width="0.8"/>
        <text x="83" y="74" text-anchor="middle" fill="#4ade80" font-size="5.5" font-family="monospace">PULSE: ${bpm} BPM • V.A.T.S. OK</text>
        <text x="83" y="85" text-anchor="middle" fill="${rads > 0 ? '#ef4444' : '#3ddc84'}" font-size="5" font-family="monospace">GEIGER: ${rads} RADS • DC ${12}</text>
        <text x="83" y="96" text-anchor="middle" fill="${isTorchOn ? '#fef08a' : '#15803d'}" font-size="5" font-family="monospace">${isTorchOn ? '● TORCIA ATTIVA (30ft)' : '○ TORCIA SPENTA'}</text>
        <text x="83" y="106" text-anchor="middle" fill="#22c55e" font-size="4.8" font-family="monospace">${radio !== 'off' ? '📻 ' + radio.toUpperCase() : 'RADIO: OFF'}</text>

        <!-- Right Side Selector Dials & Bottom Buttons -->
        <rect x="144" y="50" width="12" height="42" rx="3" fill="#0f172a" stroke="#475569" stroke-width="1"/>
        <circle cx="54" cy="142" r="7" fill="#0f172a" stroke="#3ddc84" stroke-width="1.5"/>
        <circle cx="83" cy="148" r="9" fill="#0f172a" stroke="#3ddc84" stroke-width="2"/>
        <circle cx="112" cy="142" r="7" fill="#0f172a" stroke="#3ddc84" stroke-width="1.5"/>
      </svg>
    `;
  }

  container.innerHTML = svgHtml;
}

/**
 * Master render function for the entire Pip-Boy section.
 */
function renderPipboy() {
  ensurePipboyDefaults();
  const pb = character.pipboy;

  // Toggle UI
  const toggle = document.getElementById("pipboy-owned-toggle");
  if (toggle) toggle.checked = pb.owned;

  const content = document.getElementById("pipboy-content");
  const emptyState = document.getElementById("pipboy-empty-state");
  if (content) content.style.display = pb.owned ? "block" : "none";
  if (emptyState) emptyState.style.display = pb.owned ? "none" : "flex";

  if (!pb.owned) return;

  // Model select
  const modelSel = document.getElementById("pipboy-model-select");
  if (modelSel && pb.model) modelSel.value = pb.model;

  const mdl = (FALLOUT_RULES_DATA.pipboyModels || []).find(m => m.id === pb.model) || {
    id: "pb3000mk4",
    name: "Pip-Boy 3000 Mark IV",
    desc: "L'apice della tecnologia Vault-Tec da polso.",
    upgradeSlots: 5,
    baseFeatures: ["mappa", "holotape", "gps", "audio", "note", "sensore_em", "monitor_cardiaco", "geiger", "torcia", "radio", "vats"]
  };

  // Header badge
  const badge = document.getElementById("pipboy-model-badge");
  if (badge) {
    badge.textContent = mdl.name;
    badge.style.display = "inline-block";
  }

  // Model description
  const descEl = document.getElementById("pipboy-model-desc");
  if (descEl) descEl.textContent = mdl.desc;

  // Render dynamic custom visual mascherina for this model!
  renderPipboyDeviceVisual(pb.model);

  // Decay track
  renderPipboyDecay();

  // Render rich interactive features grid
  renderPipboyFeaturesGrid(mdl);

  // Upgrades slot info and dots
  const slotsInfo = document.getElementById("pipboy-upgrades-slots-info");
  if (slotsInfo) {
    slotsInfo.textContent = `Slot: ${getPipboyUsedSlots()}/${mdl.upgradeSlots}`;
  }
  const slotsDots = document.getElementById("pipboy-slots-dots");
  if (slotsDots) {
    const used = getPipboyUsedSlots();
    slotsDots.innerHTML = Array.from({ length: mdl.upgradeSlots }, (_, i) =>
      `<div class="pipboy-slot-dot ${i < used ? 'used' : ''}"></div>`
    ).join("");
  }

  // Render installed upgrades
  renderPipboyUpgrades();

  // Notes
  const notesEl = document.getElementById("pipboy-notes");
  if (notesEl) notesEl.value = pb.notes || "";
}

/**
 * Render rich interactive features for the active Pip-Boy model.
 */
function renderPipboyFeaturesGrid(mdl) {
  const featGrid = document.getElementById("pipboy-features-grid");
  if (!featGrid || !mdl) return;

  const allFeats = FALLOUT_RULES_DATA.pipboyBaseFeatures || {};
  const isTorchOn = !!character.pipboy.flashlightActive;
  const rads = (character.vitals && character.vitals.rads) || 0;
  const radio = character.pipboy.radioStation || "off";
  const hpCur = (character.vitals && character.vitals.currentHp) || 10;
  const hpMax = (character.vitals && character.vitals.maxHp) || 10;
  const bpm = hpCur < (hpMax / 2) ? 138 : 72;

  featGrid.innerHTML = (mdl.baseFeatures || []).map(fid => {
    const f = allFeats[fid] || { name: fid, icon: "⚙️", desc: "" };

    let controlHtml = "";
    if (fid === "torcia") {
      controlHtml = `
        <button type="button" class="btn btn-sm ${isTorchOn ? 'btn-success' : ''}" onclick="togglePipboyFlashlight()" style="font-size:10.5px; padding:2px 7px; margin-top:3px; width:100%;">
          ${isTorchOn ? '💡 ACCESA (30ft)' : '○ SPENTA'}
        </button>
      `;
    } else if (fid === "geiger") {
      controlHtml = `
        <button type="button" class="btn btn-sm" onclick="triggerPipboyGeigerScan()" style="font-size:10.5px; padding:2px 7px; margin-top:3px; width:100%;">
          ☢️ Scansiona (${rads} Rad)
        </button>
      `;
    } else if (fid === "radio") {
      const label = radio === "off" ? "📻 Spenta" : "📻 " + radio.replace(/_/g, " ").toUpperCase();
      controlHtml = `
        <button type="button" class="btn btn-sm" onclick="cyclePipboyRadio()" style="font-size:10.5px; padding:2px 7px; margin-top:3px; width:100%;" title="Clicca per cambiare stazione">
          ${label}
        </button>
      `;
    } else if (fid === "sensore_em") {
      controlHtml = `
        <button type="button" class="btn btn-sm btn-primary" onclick="triggerPipboyEMScan()" style="font-size:10.5px; padding:2px 7px; margin-top:3px; width:100%;">
          📡 Impulso (2 AP)
        </button>
      `;
    } else if (fid === "monitor_cardiaco") {
      controlHtml = `
        <div style="font-size:10.5px; font-weight:bold; color:${hpCur < (hpMax/2) ? '#ef4444' : '#10b981'}; margin-top:4px;">
          ❤️ ${bpm} BPM (${hpCur}/${hpMax} HP)
        </div>
      `;
    } else if (fid === "vats") {
      controlHtml = `
        <button type="button" class="btn btn-sm" onclick="showVatsTargetingInfo()" style="font-size:10.5px; padding:2px 7px; margin-top:3px; width:100%;">
          🎯 V.A.T.S. Mirato
        </button>
      `;
    } else if (fid === "mappa") {
      controlHtml = `<div style="font-size:10px; color:var(--text-dim); margin-top:4px;">GPS: 42°19'N 71°05'W</div>`;
    } else if (fid === "holotape") {
      controlHtml = `<div style="font-size:10px; color:#10b981; margin-top:4px;">Tape Ready</div>`;
    }

    return `
      <div class="pipboy-feature-card" style="padding:6px 8px; background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:5px; text-align:center;">
        <div style="font-weight:bold; font-size:11.5px; color:var(--text-bright); display:flex; align-items:center; justify-content:center; gap:4px;" title="${f.desc}">
          <span>${f.icon}</span>
          <span>${f.name.split(" ")[0]}</span>
        </div>
        ${controlHtml}
      </div>
    `;
  }).join("");
}

/**
 * Render installed upgrades cards with interactive capabilities.
 */
function renderPipboyUpgrades() {
  const pb = character.pipboy;
  if (!pb) return;
  const container = document.getElementById("pipboy-upgrades-container");
  if (!container) return;

  const upgrades = pb.installedUpgrades || [];
  if (upgrades.length === 0) {
    container.innerHTML = `
      <div style="color:var(--text-dim);font-size:12px;padding:10px;text-align:center;font-style:italic;background:var(--bg-tertiary);border-radius:4px;border:1px dashed var(--border-color);">
        Nessun upgrade installato. Clicca su "+ Aggiungi Upgrade" per consultare il catalogo Vault-Tec.
      </div>
    `;
    return;
  }

  container.innerHTML = upgrades.map((u, idx) => {
    const def = (FALLOUT_RULES_DATA.pipboyUpgrades || []).find(d => d.id === u.id);
    const rank = u.rank || 1;
    const maxRank = u.maxRank || (def ? def.maxRank : 1);
    const effectText = def && def.ranks ? def.ranks[rank - 1] : u.name;
    const slotsUsed = def ? def.slots : 1;
    const cost = def ? def.cost : "?";

    // Custom interactive upgrade buttons
    let actionBtn = "";
    if (u.id === "pbu_medscanner") {
      actionBtn = `
        <button type="button" class="btn btn-sm btn-primary" onclick="triggerMedScannerAction(${rank})" style="font-size:10.5px; padding:2px 8px;">
          🩺 Scansiona Bersaglio (${rank >= 3 ? '1 AP' : '3 AP'})
        </button>
      `;
    } else if (u.id === "pbu_stealth_field") {
      actionBtn = `
        <button type="button" class="btn btn-sm btn-success" onclick="triggerStealthFieldAction()" style="font-size:10.5px; padding:2px 8px;">
          👤 Attiva Stealth Boy (4 AP - 3 Rnd)
        </button>
      `;
    } else if (u.id === "pbu_autoinjector") {
      actionBtn = `<span style="font-size:10.5px; color:#10b981; font-weight:bold;">💉 Auto-Stimpak a <25% HP [ARMATO]</span>`;
    } else if (u.id === "pbu_hacking_module") {
      actionBtn = `<span style="font-size:10.5px; color:#2563eb; font-weight:bold;">💻 +2 a Scienza [ATTIVO]</span>`;
    } else if (u.id === "pbu_lockpick_assist") {
      actionBtn = `<span style="font-size:10.5px; color:#2563eb; font-weight:bold;">🔓 +2 a Violare (Breach) [ATTIVO]</span>`;
    } else if (u.id === "pbu_chem_analyzer") {
      actionBtn = `<span style="font-size:10.5px; color:#10b981; font-weight:bold;">🧪 -50% Rischio Dipendenze [ATTIVO]</span>`;
    } else if (u.id === "pbu_tacmap") {
      actionBtn = `<span style="font-size:10.5px; color:#f59e0b; font-weight:bold;">🗺️ Mappa Tattica: Nemici e Contenitori [ATTIVO]</span>`;
    } else if (u.id === "pbu_power_relay") {
      actionBtn = `
        <button type="button" class="btn btn-sm" onclick="showToast('⚡ Defibrillatore pronto: 3 AP per stabilizzare alleato a 0 HP', 'info')" style="font-size:10.5px; padding:2px 8px;">
          ⚡ Defibrillatore (3 AP)
        </button>
      `;
    } else if (u.id === "pbu_vault_sync") {
      actionBtn = `<span style="font-size:10.5px; color:#10b981; font-weight:bold;">🏛️ +1 Abilità Vault-Tec [ATTIVO]</span>`;
    }

    return `
      <div class="pipboy-upgrade-card" style="border:1px solid var(--border-color); background:var(--bg-card); padding:8px 10px; border-radius:6px; margin-bottom:6px;">
        <div class="pipboy-upgrade-header" style="display:flex; justify-content:space-between; align-items:center;">
          <span class="pipboy-upgrade-name" style="font-weight:bold; font-size:13px; color:var(--text-bright);">🔧 ${u.name}</span>
          <div class="pipboy-upgrade-rank-controls" style="display:flex; align-items:center; gap:4px;">
            <button type="button" class="pipboy-rank-btn btn btn-sm" onclick="changePipboyUpgradeRank(${idx}, -1)" ${rank <= 1 ? "disabled" : ""} style="padding:1px 6px; font-size:12px;">−</button>
            <span class="pipboy-rank-display" style="font-size:11px; font-weight:bold; min-width:65px; text-align:center;">Grado ${rank}/${maxRank}</span>
            <button type="button" class="pipboy-rank-btn btn btn-sm" onclick="changePipboyUpgradeRank(${idx}, 1)" ${rank >= maxRank ? "disabled" : ""} style="padding:1px 6px; font-size:12px;">+</button>
            <button type="button" class="pipboy-upgrade-delete-btn btn btn-sm btn-danger no-print" onclick="removePipboyUpgrade(${idx})" title="Rimuovi upgrade" style="padding:1px 6px; font-size:11px; margin-left:4px;">✕</button>
          </div>
        </div>
        <div class="pipboy-upgrade-effect" style="font-size:12px; color:var(--text-bright); margin:4px 0; line-height:1.35;">${effectText}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-top:4px;">
          <div class="pipboy-upgrade-slots-cost" style="font-size:10.5px; color:var(--text-dim);">
            <span>Slot: <strong>${slotsUsed}</strong></span> &nbsp;|&nbsp;
            <span>Costo: <strong>${cost}</strong></span>
          </div>
          <div>
            ${actionBtn}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function triggerMedScannerAction(rank) {
  const apCost = rank >= 3 ? 1 : 3;
  const curAp = (character.vitals && character.vitals.currentAp !== undefined) ? character.vitals.currentAp : 10;
  if (curAp < apCost) {
    alert(`AP insufficienti per la scansione medica (richiede ${apCost} AP).`);
    return;
  }
  character.vitals.currentAp -= apCost;
  const apEl = document.getElementById("current-ap");
  if (apEl) apEl.value = character.vitals.currentAp;
  
  if (rank === 1) {
    showToast(`🩺 <strong>Med-Scanner (-${apCost} AP):</strong> Bersaglio analizzato entro 15 ft. Rivelati HP attuali e massimi!`, "success");
  } else if (rank === 2) {
    showToast(`🩺 <strong>Med-Scanner (-${apCost} AP):</strong> Bersaglio analizzato: Rivelati HP, SP, AC, DT e tutte le condizioni attive (veleno, radiazioni)!`, "success");
  } else {
    showToast(`🩺 <strong>Med-Scanner Avanzato (-1 AP):</strong> Analisi medica completa a distanza: HP, SP, AC, DT, condizioni e diagnosi cura ottimale (+2 Medicina)!`, "success");
  }
  saveCharacter();
}

function triggerStealthFieldAction() {
  const curAp = (character.vitals && character.vitals.currentAp !== undefined) ? character.vitals.currentAp : 10;
  if (curAp < 4) {
    alert("AP insufficienti per attivare il Campo Stealth (richiede 4 AP).");
    return;
  }
  character.vitals.currentAp -= 4;
  const apEl = document.getElementById("current-ap");
  if (apEl) apEl.value = character.vitals.currentAp;
  showToast("👤 <strong>CAMPO STEALTH ATTIVATO (-4 AP):</strong> Sei Invisibile! Vantaggio a tutte le prove di Sneak per 3 Round o fino al primo attacco!", "success");
  saveCharacter();
}

/**
 * Render decay pip track for Pip-Boy.
 */
function renderPipboyDecay() {
  ensurePipboyDefaults();
  const container = document.getElementById("pipboy-decay-container");
  const badge = document.getElementById("pipboy-decay-badge");
  if (!container) return;

  const DECAY_MAX = 10;
  const decay = character.pipboy.decay || 0;
  container.innerHTML = Array.from({ length: DECAY_MAX }, (_, i) => {
    const filled = i < decay;
    const cls = filled ? "decay-pip filled" : "decay-pip";
    return `<div class="${cls}" title="Usura ${i + 1}" onclick="setPipboyDecay(${i < decay ? i : i + 1})"></div>`;
  }).join("");

  if (badge) badge.textContent = `${decay}/${DECAY_MAX}`;
}

// Expose Pip-Boy functions globally
window.togglePipboyOwned = togglePipboyOwned;
window.onPipboyModelChange = onPipboyModelChange;
window.setPipboyDecay = setPipboyDecay;
window.updatePipboyNotes = updatePipboyNotes;
window.addPipboyUpgrade = addPipboyUpgrade;
window.openPipboyUpgradeModal = openPipboyUpgradeModal;
window.closePipboyUpgradeModal = closePipboyUpgradeModal;
window.installPipboyUpgrade = installPipboyUpgrade;
window.changePipboyUpgradeRank = changePipboyUpgradeRank;
window.removePipboyUpgrade = removePipboyUpgrade;
window.togglePipboyFlashlight = togglePipboyFlashlight;
window.triggerPipboyGeigerScan = triggerPipboyGeigerScan;
window.cyclePipboyRadio = cyclePipboyRadio;
window.triggerPipboyEMScan = triggerPipboyEMScan;
window.showVatsTargetingInfo = showVatsTargetingInfo;
window.triggerMedScannerAction = triggerMedScannerAction;
window.triggerStealthFieldAction = triggerStealthFieldAction;
// POWER ARMOR ENGINE & PAPERDOLL FIGURE
// =============================================================================

function togglePowerArmorOwned(owned) {
  if (!character.powerArmor) {
    character.powerArmor = { owned: false, equipped: false, modelId: "t45", currentDp: 15, maxDp: 15, decay: 0, fusionMinutes: 240, overheated: false, installedUpgrades: [] };
  }
  character.powerArmor.owned = owned;
  if (!owned) {
    character.powerArmor.equipped = false;
  } else {
    ensurePowerArmorPieces();
  }
  renderPowerArmor();
  updateDerivedValues();
  saveCharacter();
}

function togglePowerArmorEquipped(equipped) {
  if (!character.powerArmor) return;
  character.powerArmor.equipped = equipped;
  if (equipped) ensurePowerArmorPieces();
  renderPowerArmor();
  updateDerivedValues();
  recalcArmor();
  saveCharacter();
}

function onPowerArmorModelChange(modelId) {
  if (!character.powerArmor) return;
  character.powerArmor.modelId = modelId;
  const mdl = (FALLOUT_RULES_DATA.powerArmorModels || []).find(m => m.id === modelId);
  if (mdl) {
    character.powerArmor.maxDp = mdl.dp;
    character.powerArmor.currentDp = Math.min(character.powerArmor.currentDp || mdl.dp, mdl.dp);
  }
  syncAllPowerArmorPiecesToModel(modelId);
  renderPowerArmor();
  updateDerivedValues();
  recalcArmor();
  saveCharacter();
}

function updatePowerArmorDP(val) {
  if (!character.powerArmor) return;
  character.powerArmor.currentDp = parseInt(val, 10) || 0;
  saveCharacter();
}

function updatePowerArmorTimer(val) {
  if (!character.powerArmor) return;
  character.powerArmor.fusionMinutes = parseInt(val, 10) || 0;
  saveCharacter();
}

function togglePowerArmorOverheated(val) {
  if (!character.powerArmor) return;
  character.powerArmor.overheated = val;
  saveCharacter();
}

function setPowerArmorDecay(val) {
  if (!character.powerArmor) return;
  character.powerArmor.decay = parseInt(val, 10) || 0;
  renderPowerArmor();
  updateDerivedValues();
  recalcArmor();
  saveCharacter();
}

function getPowerArmorUsedSlots() {
  if (!character.powerArmor || !character.powerArmor.installedUpgrades) return 0;
  return character.powerArmor.installedUpgrades.reduce((acc, u) => acc + (u.slots || 1), 0);
}

function addPowerArmorUpgrade() {
  if (!character.powerArmor) return;
  const mdl = (FALLOUT_RULES_DATA.powerArmorModels || []).find(m => m.id === character.powerArmor.modelId);
  const maxSlots = mdl ? mdl.modSlots : 4;
  const used = getPowerArmorUsedSlots();

  const avail = (FALLOUT_RULES_DATA.powerArmorUpgrades || []).filter(u => {
    const already = (character.powerArmor.installedUpgrades || []).find(iu => iu.id === u.id);
    if (already) return false;
    const req = u.slots || 1;
    return (used + req) <= maxSlots;
  });

  openPickerModal(`UPGRADE ARMATURA ATOMICA (Slot Usati: ${used}/${maxSlots})`, avail, (upg) => {
    if (!character.powerArmor.installedUpgrades) character.powerArmor.installedUpgrades = [];
    character.powerArmor.installedUpgrades.push({
      id: upg.id,
      name: upg.name,
      rank: 1,
      maxRank: upg.maxRank || 1,
      slots: upg.slots || 1,
      effect: (upg.ranks && upg.ranks[0]) || upg.effect || ""
    });
    renderPowerArmor();
    updateDerivedValues();
    recalcArmor();
    saveCharacter();
  });
}

function changePowerArmorUpgradeRank(idx, delta) {
  if (!character.powerArmor || !character.powerArmor.installedUpgrades) return;
  const upg = character.powerArmor.installedUpgrades[idx];
  if (!upg) return;
  const newR = Math.max(1, Math.min(upg.maxRank || 1, (upg.rank || 1) + delta));
  upg.rank = newR;
  const ref = (FALLOUT_RULES_DATA.powerArmorUpgrades || []).find(u => u.id === upg.id);
  if (ref && ref.ranks && ref.ranks[newR - 1]) {
    upg.effect = ref.ranks[newR - 1];
  }
  renderPowerArmor();
  updateDerivedValues();
  recalcArmor();
  saveCharacter();
}

function removePowerArmorUpgrade(idx) {
  if (!character.powerArmor || !character.powerArmor.installedUpgrades) return;
  character.powerArmor.installedUpgrades.splice(idx, 1);
  renderPowerArmor();
  updateDerivedValues();
  recalcArmor();
  saveCharacter();
}


function ensurePowerArmorPieces(pa) {
  if (!pa) pa = character.powerArmor;
  if (!pa) return;
  if (!pa.pieces) pa.pieces = {};

  const partDefs = [
    { key: "head", label: "Casco / Elmo", defaultHp: 15 },
    { key: "torso", label: "Torace / Busto", defaultHp: 30 },
    { key: "armL", label: "Braccio SX", defaultHp: 15 },
    { key: "armR", label: "Braccio DX", defaultHp: 15 },
    { key: "legL", label: "Gamba SX", defaultHp: 20 },
    { key: "legR", label: "Gamba DX", defaultHp: 20 }
  ];

  partDefs.forEach(def => {
    if (!pa.pieces[def.key]) {
      pa.pieces[def.key] = {
        name: def.label,
        model: "T-45",
        level: "Mk I",
        condition: "healthy",
        damage: 0,
        maxHp: def.defaultHp,
        mod: ""
      };
    }
  });
}

function onPowerArmorPartClick(partKey) {
  const pa = character.powerArmor;
  if (!pa || !pa.pieces || !pa.pieces[partKey]) return;
  const p = pa.pieces[partKey];
  const cycle = { healthy: "damaged", damaged: "broken", broken: "healthy" };
  p.condition = cycle[p.condition] || "healthy";
  renderPowerArmor();
  updateDerivedValues();
  recalcArmor();
  saveCharacter();
}

function setPowerArmorPieceCondition(partKey, cond) {
  const pa = character.powerArmor;
  if (!pa) return;
  ensurePowerArmorPieces(pa);
  if (pa.pieces[partKey]) {
    pa.pieces[partKey].condition = cond;
    renderPowerArmor();
    updateDerivedValues();
    recalcArmor();
    saveCharacter();
  }
}

function updatePowerArmorPiece(partKey, field, val) {
  const pa = character.powerArmor;
  if (!pa) return;
  ensurePowerArmorPieces(pa);
  if (pa.pieces[partKey]) {
    pa.pieces[partKey][field] = val;
    renderPowerArmor();
    saveCharacter();
  }
}

function syncAllPowerArmorPiecesToModel(modelId) {
  const pa = character.powerArmor;
  if (!pa) return;
  ensurePowerArmorPieces(pa);
  const mdlName = (modelId || "t45").toUpperCase();
  Object.keys(pa.pieces).forEach(pk => {
    pa.pieces[pk].model = mdlName;
  });
}

function renderPowerArmorPartsFigure() {
  if (!character.powerArmor) {
    character.powerArmor = { owned: false, pieces: {}, upgrades: [], legendaryTraits: [] };
  }
  const pa = character.powerArmor;
  ensurePowerArmorPieces(pa);

  const partDefs = [
    { key: "head", label: "Casco / Elmo", icon: "", defaultHp: 15 },
    { key: "torso", label: "Torace / Busto", icon: "", defaultHp: 30 },
    { key: "armL", label: "Braccio SX", icon: "", defaultHp: 15 },
    { key: "armR", label: "Braccio DX", icon: "", defaultHp: 15 },
    { key: "legL", label: "Gamba SX", icon: "", defaultHp: 20 },
    { key: "legR", label: "Gamba DX", icon: "", defaultHp: 20 }
  ];

  const modelOptions = ["T-45", "T-51", "T-60", "X-01", "X-02"];
  const levelOptions = ["Mk I", "Mk II", "Mk III", "Mk IV", "Mk V", "Mk VI"];

  // 1. Aggiorna silhouette SVG (classi e attributi)
  partDefs.forEach(def => {
    const p = pa.pieces[def.key];
    const svgEl = document.getElementById(`pa-svg-${def.key}`);
    if (svgEl && p) {
      const cond = p.condition || "healthy";
      svgEl.setAttribute("class", `pa-svg-part pa-part-${cond}`);
      svgEl.setAttribute("title", `${def.label}: ${p.model || "T-45"} ${p.level || "Mk I"} [${cond.toUpperCase()}] - Danni: ${p.damage || 0}/${p.maxHp || def.defaultHp} - Clicca per cambiare stato`);
    }
  });

  // 2. Render Griglia Schede 6 Componenti
  const grid = document.getElementById("pa-parts-grid");
  if (grid) {
    grid.innerHTML = partDefs.map(def => {
      const p = pa.pieces[def.key];
      const cond = p.condition || "healthy";
      const maxHp = p.maxHp !== undefined ? p.maxHp : def.defaultHp;
      const dmg = p.damage !== undefined ? p.damage : 0;
      const mod = p.mod || "";
      const currentModel = p.model || "T-45";
      const currentLevel = p.level || "Mk I";

      return `
        <div class="pa-part-card" id="pa-part-card-${def.key}">
          <div class="pa-part-header-row">
            <div class="pa-part-title">
              <span>${def.icon}</span>
              <span>${def.label}</span>
            </div>
            <div style="display:flex; gap:4px;">
              <select style="font-size:11.5px; padding:2px 5px; font-weight:700;" onchange="updatePowerArmorPiece('${def.key}', 'model', this.value)" title="Modello del Pezzo">
                ${modelOptions.map(m => `<option value="${m}" ${currentModel === m ? "selected" : ""}>${m}</option>`).join("")}
              </select>
              <select style="font-size:11.5px; padding:2px 5px; font-weight:800; color:var(--accent);" onchange="updatePowerArmorPiece('${def.key}', 'level', this.value)" title="Grado / Livello del Pezzo">
                ${levelOptions.map(l => `<option value="${l}" ${currentLevel === l ? "selected" : ""}>${l}</option>`).join("")}
              </select>
            </div>
          </div>

          <!-- Pulsanti Rapidi Stato Integrità -->
          <div class="pa-cond-buttons-row">
            <button type="button" class="pa-cond-btn ${cond === 'healthy' ? 'active-healthy' : ''}" onclick="setPowerArmorPieceCondition('${def.key}', 'healthy')" title="Integro: Protezione al 100%">
              Integro
            </button>
            <button type="button" class="pa-cond-btn ${cond === 'damaged' ? 'active-damaged' : ''}" onclick="setPowerArmorPieceCondition('${def.key}', 'damaged')" title="Usurato: Danno moderato">
              Usurato
            </button>
            <button type="button" class="pa-cond-btn ${cond === 'critical' ? 'active-critical' : ''}" onclick="setPowerArmorPieceCondition('${def.key}', 'critical')" title="Critico: Danno grave, riparazione consigliata">
              Critico
            </button>
            <button type="button" class="pa-cond-btn ${cond === 'broken' ? 'active-broken' : ''}" onclick="setPowerArmorPieceCondition('${def.key}', 'broken')" title="Rotto: Distrutto, nessuna protezione">
              Rotto
            </button>
          </div>

          <!-- Tracciamento Danni HP & Modifica -->
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; font-size:11.5px; margin-top:2px; align-items:center;">
            <div style="display:flex; align-items:center; gap:3px;">
              <span style="color:var(--text-bright); font-size:11px; font-weight:800;">Danni:</span>
              <input type="number" value="${dmg}" min="0" max="${maxHp}" style="width:42px; padding:2px 4px; text-align:center; font-size:11.5px; font-weight:700;" onchange="updatePowerArmorPiece('${def.key}', 'damage', this.value)" title="Danni correnti subiti da questo pezzo">
              <span style="color:var(--text-dim); font-weight:700;">/</span>
              <input type="number" value="${maxHp}" min="1" style="width:42px; padding:2px 4px; text-align:center; font-size:11.5px; font-weight:700;" onchange="updatePowerArmorPiece('${def.key}', 'maxHp', this.value)" title="Punti Ferita / Integrità massima del pezzo">
            </div>
            <div style="display:flex; align-items:center;">
              <input type="text" value="${mod}" placeholder="Mod pezzo..." style="width:100%; padding:2px 6px; font-size:11.5px;" onchange="updatePowerArmorPiece('${def.key}', 'mod', this.value)" title="Modifica installata sul pezzo (es. Targeting HUD, Bobine Tesla...)">
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

// =============================================================================
// RESISTENZE, IMMUNITÀ & SUSCETTIBILITÀ ENGINE (Manuale Pag. 131)
// =============================================================================


function renderPowerArmor() {
  const pa = character.powerArmor;
  if (!pa) return;

  const ownedToggle = document.getElementById("pa-owned-toggle");
  if (ownedToggle) ownedToggle.checked = !!pa.owned;

  const toggleBtn = document.getElementById("btn-toggle-pa");
  if (toggleBtn) {
    if (pa.equipped) {
      toggleBtn.textContent = "ESCI DA POWER ARMOR";
      toggleBtn.className = "btn btn-sm btn-danger no-print";
      toggleBtn.style.color = "#ff6b6b";
      toggleBtn.style.borderColor = "#ff6b6b";
    } else {
      toggleBtn.textContent = "INDOSSA POWER ARMOR";
      toggleBtn.className = "btn btn-sm no-print";
      toggleBtn.style.color = "var(--warning)";
      toggleBtn.style.borderColor = "var(--warning)";
    }
  }

  const panel = document.getElementById("power-armor-panel");
  if (panel) {
    panel.style.display = pa.owned ? "block" : "none";
  }

  if (!pa.owned) return;

  const modelSel = document.getElementById("pa-model-select");
  if (modelSel && pa.modelId) modelSel.value = pa.modelId;

  const currDpEl = document.getElementById("pa-current-dp");
  const maxDpEl = document.getElementById("pa-max-dp");
  if (currDpEl) currDpEl.value = pa.currentDp !== undefined ? pa.currentDp : 15;
  if (maxDpEl) maxDpEl.value = pa.maxDp !== undefined ? pa.maxDp : 15;

  const timerEl = document.getElementById("pa-fusion-timer");
  if (timerEl) timerEl.value = pa.fusionMinutes !== undefined ? pa.fusionMinutes : 240;

  const heatToggle = document.getElementById("pa-overheated-toggle");
  if (heatToggle) heatToggle.checked = !!pa.overheated;

  // Stats badge row
  const badgeRow = document.getElementById("pa-stats-badge-row");
  const mdl = (FALLOUT_RULES_DATA.powerArmorModels || []).find(m => m.id === (pa.modelId || "t45")) || { name: "T-45", ac: 14, dt: 6, dp: 15, slots: 6, repair: "DC 16", allottedMinutes: 240, desc: "" };
  if (badgeRow) {
    badgeRow.innerHTML = `
      <span class="pa-stat-chip" style="color:var(--warning); font-weight:bold;">${mdl.name}</span>
      <span class="pa-stat-chip">AC ${mdl.ac}</span>
      <span class="pa-stat-chip">DT ${mdl.dt}</span>
      <span class="pa-stat-chip">DP Base ${mdl.dp}</span>
      <span class="pa-stat-chip">Riparazione ${mdl.repair}</span>
      <span class="pa-stat-chip">Autonomia ${mdl.allottedMinutes} min (${Math.round(mdl.allottedMinutes / 60)}h)</span>
      <span class="pa-stat-chip" style="color:var(--success);">Forza 12 | Taglia Grande | Respira Sott'acqua</span>
    `;
  }

  // Decay track
  const decayContainer = document.getElementById("pa-decay-container");
  const decayBadge = document.getElementById("pa-decay-val-badge");
  const radAlert = document.getElementById("pa-decay-radiation-alert");
  const decay = pa.decay || 0;

  if (decayContainer) {
    decayContainer.innerHTML = Array.from({ length: 10 }, (_, i) => {
      const filled = i < decay;
      const cls = filled ? "decay-pip filled" : "decay-pip";
      return `<div class="${cls}" title="Usura PA ${i + 1}" onclick="setPowerArmorDecay(${i < decay ? i : i + 1})"></div>`;
    }).join("");
  }

  if (decayBadge) {
    let decayDesc = "[Integra]";
    if (decay >= 10) decayDesc = "[DECADIMENTO MASSIMO: Protezione persa]";
    else if (decay >= 6) decayDesc = "[Filtro Radiazioni Danneggiato]";
    else if (decay > 0) decayDesc = `[-${Math.floor(decay/2)} AC/DT]`;
    decayBadge.textContent = `${decay} / 10 ${decayDesc}`;
  }

  if (radAlert) {
    radAlert.style.display = decay >= 6 ? "block" : "none";
  }

  // Slots info & Upgrades
  const slotsInfo = document.getElementById("pa-slots-info");
  const usedSlots = getPowerArmorUsedSlots();
  if (slotsInfo) {
    slotsInfo.textContent = `Slot: ${usedSlots} / ${mdl.slots}`;
    slotsInfo.style.color = usedSlots > mdl.slots ? "var(--danger)" : "var(--warning)";
  }

  const upContainer = document.getElementById("pa-upgrades-container");
  if (upContainer) {
    const upgrades = pa.installedUpgrades || [];
    if (upgrades.length === 0) {
      upContainer.innerHTML = `<div style="color:var(--text-dim);font-size:12px;padding:4px;font-style:italic;">Nessun miglioramento Power Armor installato. Clicca [+ Aggiungi Upgrade PA].</div>`;
    } else {
      upContainer.innerHTML = upgrades.map((u, idx) => {
        const def = (FALLOUT_RULES_DATA.armorUpgrades || []).find(d => d.id === u.id);
        const rank = u.rank || 1;
        const maxRank = u.maxRank || (def ? def.maxRank : 1);
        const effectText = def ? (def.ranks[rank - 1] || def.ranks[0]) : (u.effect || u.name);
        const cost = def ? def.cost : "?";
        const slotsCost = def ? def.slots : 1;

        return `
          <div class="pa-upgrade-card">
            <div class="pa-upgrade-header">
              <span class="pa-upgrade-name"> ${u.name}</span>
              <div class="pa-upgrade-rank-ctrl">
                <button type="button" class="btn btn-sm" onclick="changePowerArmorUpgradeRank(${idx}, -1)" ${rank <= 1 ? "disabled" : ""}>−</button>
                <span style="font-size:11px; font-family:var(--font-mono); color:var(--text-bright);">Grado ${rank}/${maxRank}</span>
                <button type="button" class="btn btn-sm" onclick="changePowerArmorUpgradeRank(${idx}, 1)" ${rank >= maxRank ? "disabled" : ""}>+</button>
                <button type="button" class="btn btn-sm btn-danger no-print" onclick="removePowerArmorUpgrade(${idx})" title="Rimuovi upgrade" style="margin-left:4px;">✕</button>
              </div>
            </div>
            <div style="font-size:11px; color:var(--text-dim); line-height:1.4; margin-top:2px;">${effectText}</div>
            <div style="font-size:10px; color:var(--text-dim); font-family:var(--font-mono); margin-top:3px; display:flex; gap:8px;">
              <span>Slot occupati: ${slotsCost}</span>
              <span>Costo: ${cost}</span>
            </div>
          </div>
        `;
      }).join("");
    }
  }
  if (typeof renderDashboardOverview === "function") renderDashboardOverview();
}

// =============================================================================
// RESISTENZE, IMMUNITÀ & SUSCETTIBILITÀ ENGINE (Manuale Pag. 131)
// =============================================================================



// =============================================================================
// RESISTANCES, SUSCEPTIBILITIES & IMMUNITIES ENGINE
// =============================================================================

function hasPerkOrTrait(identifier) {
  if (!character) return false;
  const target = (identifier || "").toLowerCase().replace(/_/g, " ").trim();
  if (!target) return false;

  if (Array.isArray(character.perks)) {
    if (character.perks.some(p => {
      const id = (p.id || "").toLowerCase().replace(/_/g, " ").trim();
      const name = (p.name || "").toLowerCase();
      const nameEN = (p.nameEN || "").toLowerCase();
      return id === target || name.includes(target) || nameEN.includes(target);
    })) return true;
  }
  if (Array.isArray(character.traits)) {
    if (character.traits.some(t => {
      const id = (t.id || "").toLowerCase().replace(/_/g, " ").trim();
      const name = (t.name || "").toLowerCase();
      return id === target || name.includes(target);
    })) return true;
  }
  if (character.racialOptions && Array.isArray(character.racialOptions.activeIds)) {
    if (character.racialOptions.activeIds.some(id => id.toLowerCase().replace(/_/g, " ").trim() === target)) return true;
  }
  return false;
}

const NEMEO_DAMAGE_TYPES = [
  { id: "balistico", label: "Balistico (Ballistic)" },
  { id: "laser", label: "Laser" },
  { id: "plasma", label: "Plasma" },
  { id: "esplosivo", label: "Esplosivo (Explosive)" },
  { id: "fuoco", label: "Fuoco (Fire)" },
  { id: "elettricità", label: "Elettricità (Electricity)" },
  { id: "freddo", label: "Freddo (Cold)" },
  { id: "acido", label: "Acido (Acid)" },
  { id: "veleno", label: "Veleno (Poison)" },
  { id: "radiazioni", label: "Radiazioni (Radiation)" },
  { id: "contundente", label: "Contundente (Bludgeoning)" },
  { id: "impatto", label: "Impatto (Impact)" },
  { id: "perforante", label: "Perforante (Piercing)" },
  { id: "tagliente", label: "Tagliente (Slashing)" }
];

function computeDefensiveModifiers() {
  const result = {
    halfDamage: [],
    immune: [],
    vulnerable: []
  };

  const charRace = (character.info.race || "human").toLowerCase();
  const raceVar = character.info.raceVariant || "standard";
  const isGhoul = charRace === "ghoul";
  const isSynth = charRace === "gen2_synth" || charRace === "synth";
  const isRobot = charRace === "robot";
  const isMutant = charRace === "super_mutant";
  const isPAEquipped = character.powerArmor && character.powerArmor.equipped;

  // 1. Razze & Sottotipi
  if (isGhoul) {
    result.immune.push({ name: "Radiazioni", source: "Razza: Ghoul (Evoluzione)" });
    if (raceVar === "ghoul_old_bones") {
      result.immune.push({ name: "Veleno", source: "Variante Ghoul: Ossa Vecchie (Immunità)" });
    } else {
      result.halfDamage.push({ name: "Veleno", source: "Razza: Ghoul (Anatomia Resiliente)" });
    }
  }

  if (isSynth) {
    result.immune.push({ name: "Radiazioni", source: "Razza: Synth Gen-2 (Corpo Inorganico)" });
    result.immune.push({ name: "Veleno", source: "Razza: Synth Gen-2 (Corpo Inorganico)" });
    if (raceVar === "synth_brittle") {
      result.vulnerable.push({ name: "Elettricità", source: "Variante Synth: Corpo Fragile (Danno x2)" });
    }
  }

  if (isRobot) {
    result.immune.push({ name: "Radiazioni", source: "Razza: Robot (Corpo Inorganico)" });
    result.immune.push({ name: "Veleno", source: "Razza: Robot (Corpo Inorganico)" });
    result.immune.push({ name: "Sanguinamento", source: "Razza: Robot (Corpo Inorganico)" });
    result.immune.push({ name: "Shock da Arti Tranciati", source: "Razza: Robot (Arti Tranciati)" });
    if (raceVar === "robot_robobrain") {
      result.vulnerable.push({ name: "Elettricità", source: "Sottotipo Robot: Robobrain (Neurotrasmettitori)" });
      result.immune.push({ name: "Recisione Cingoli", source: "Sottotipo Robot: Robobrain (Cingoli per Qualsiasi Terreno)" });
    } else {
      result.vulnerable.push({ name: "Elettricità / Danni EMP", source: "Razza: Robot (Circuiti Esposti)" });
    }
  }

  if (isMutant) {
    result.immune.push({ name: "Radiazioni", source: "Razza: Super Mutante (Evoluzione FEV)" });
  }

  // 2. Armatura Atomica
  if (isPAEquipped) {
    result.immune.push({ name: "Radiazioni Ambientali", source: "Armatura Atomica Equipaggiata" });
    result.halfDamage.push({ name: "Danno da Caduta", source: "Asservosistemi Armatura Atomica" });
  }

  // 3. Tratti Razziali e Generali
  (character.traits || []).forEach(t => {
    const tName = (t.name || "").toLowerCase();
    if (tName.includes("actinidi") || t.id === "activated_actinides") {
      result.immune.push({ name: "Radiazioni Letali", source: `Tratto: ${t.name}` });
    }
  });

  // 4. Perk di Base, Intelligenza, Costituzione (A Tempo), Razziali
  // Perk INT: In Shining Armor (Armatura Riflettente - Intelligenza 7)
  if (hasPerkOrTrait("in_shining_armor") || hasPerkOrTrait("in shining armor") || hasPerkOrTrait("armatura riflettente")) {
    result.halfDamage.push({ 
      name: "Laser", 
      source: "Perk INT: Armatura Riflettente [19+ Fortuna riflette il colpo]" 
    });
    result.halfDamage.push({ 
      name: "Plasma", 
      source: "Perk INT: Armatura Riflettente [19+ Fortuna riflette il colpo]" 
    });
  }

  // Perk Synth: Adamantium Skeleton (Scheletro d'Adamantio - Razziale Synth / Arti)
  if (hasPerkOrTrait("adamantium_skeleton") || hasPerkOrTrait("adamantium skeleton") || hasPerkOrTrait("scheletro d'adamantio") || hasPerkOrTrait("scheletro di adamantio")) {
    result.immune.push({ 
      name: "Condizioni & Menomazioni Arti", 
      source: "Perk Synth: Scheletro d'Adamantio (Immunità Totale)" 
    });
    result.halfDamage.push({ 
      name: "Attacchi Mirati agli Arti", 
      source: "Perk Synth: Scheletro d'Adamantio (Danno HP dimezzato)" 
    });
  }

  // Perk A TEMPO: Nemean Sub-Dermal Armor (Armatura Sotto-Dermica Nemea - Costituzione 9)
  if (hasPerkOrTrait("nemean_sub_dermal_armor") || hasPerkOrTrait("nemean sub dermal armor") || hasPerkOrTrait("armatura sotto-dermica nemea") || hasPerkOrTrait("armatura sottodermica nemea")) {
    const nemean = (character.activeTimedBuffs && character.activeTimedBuffs.nemean) || { active: false, roundsRemaining: 3, choices: ["balistico", "laser", "esplosivo"] };
    if (nemean.active && (nemean.roundsRemaining || 0) > 0) {
      const choices = Array.isArray(nemean.choices) && nemean.choices.length > 0 ? nemean.choices : ["balistico", "laser", "esplosivo"];
      choices.forEach(ch => {
        const typeLabel = ch.charAt(0).toUpperCase() + ch.slice(1);
        result.halfDamage.push({
          name: typeLabel,
          source: `Perk END: Impianto Nemeo (A TEMPO: ${nemean.roundsRemaining} Rnd rim.)`
        });
      });
    }
  }

  // Perk Super Mutante: Feel No Wounds (Non Sento Ferite)
  if (hasPerkOrTrait("feel_no_wounds") || hasPerkOrTrait("feel no wounds") || hasPerkOrTrait("non sento ferite")) {
    result.halfDamage.push({ 
      name: "Danni agli HP (Reazione 6 AP)", 
      source: "Perk Mutante: Non Sento Ferite (Danno dimezzato se hai 6+ AP)" 
    });
  }

  // Perk: Lead Belly, Snakeater, Refractor
  (character.perks || []).forEach(p => {
    const pName = (p.name || "").toLowerCase();
    const pId = (p.id || "").toLowerCase();
    if ((pName.includes("scheletro di piombo") || pName.includes("lead belly") || pId === "lead_belly") && !result.halfDamage.some(x => x.name.includes("Cibo/Acqua"))) {
      result.halfDamage.push({ name: "Radiazioni da Cibo/Acqua", source: `Perk: ${p.name}` });
    }
    if ((pName.includes("resistenza al veleno") || pName.includes("snakeater") || pId === "snakeater") && !result.halfDamage.some(x => x.name === "Veleno") && !result.immune.some(x => x.name === "Veleno")) {
      result.halfDamage.push({ name: "Veleno", source: `Perk: ${p.name}` });
    }
    if ((pName.includes("riflessi refrattari") || pName.includes("refractor") || pId === "refractor") && !result.halfDamage.some(x => x.name.includes("Energia"))) {
      result.halfDamage.push({ name: "Danno da Energia", source: `Perk: ${p.name}` });
    }
  });

  // Timed Chems (Med-X, Rad-X)
  if (character.activeTimedBuffs) {
    if (character.activeTimedBuffs.medX && character.activeTimedBuffs.medX.active) {
      result.halfDamage.push({ name: "Danni Fisici (Med-X)", source: "Farmaco a Tempo: Med-X (1 ora)" });
    }
    if (character.activeTimedBuffs.radX && character.activeTimedBuffs.radX.active) {
      result.halfDamage.push({ name: "Radiazioni (Rad-X)", source: "Farmaco a Tempo: Rad-X (1 ora)" });
    }
  }

  // 5. Personalizzati
  (character.customResistances || []).forEach(cr => {
    const item = { name: cr.name, source: cr.source || "Personalizzato", id: cr.id };
    if (cr.type === "half") result.halfDamage.push(item);
    if (cr.type === "immune") result.immune.push(item);
    if (cr.type === "vuln") result.vulnerable.push(item);
  });

  return result;
}

function renderResistancesSection() {
  const data = computeDefensiveModifiers();

  const halfContainers = [document.getElementById("resistances-list"), document.getElementById("core-resistances-list")].filter(Boolean);
  const immuneContainers = [document.getElementById("immunities-list"), document.getElementById("core-immunities-list")].filter(Boolean);
  const vulnContainers = [document.getElementById("vulnerabilities-list"), document.getElementById("core-vulnerabilities-list")].filter(Boolean);

  const renderChips = (list) => {
    if (!list || list.length === 0) {
      return '<div style="font-size:11px; color:var(--text-dim); padding:4px;">Nessuna</div>';
    }
    return list.map(item => `
      <div class="resist-chip" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; padding:3px 6px; background:var(--bg-tertiary); border-radius:3px; border-left:2px solid var(--accent); box-sizing:border-box;">
        <div style="min-width:0; overflow:hidden; flex:1;">
          <div style="font-weight:bold; font-size:11.5px; color:var(--text-bright); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${item.name}">${item.name}</div>
          <div style="font-size:10px; color:var(--text-dim); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${item.source}">${item.source}</div>
        </div>
        ${item.id ? `<button type="button" class="btn btn-sm btn-danger no-print" onclick="removeCustomResistance('${item.id}')" style="font-size:10px; padding:0 4px; margin-left:4px; flex-shrink:0;">✕</button>` : ""}
      </div>
    `).join("");
  };

  const halfHtml = renderChips(data.halfDamage);
  const immuneHtml = renderChips(data.immune);
  const vulnHtml = renderChips(data.vulnerable);

  halfContainers.forEach(el => el.innerHTML = halfHtml);
  immuneContainers.forEach(el => el.innerHTML = immuneHtml);
  vulnContainers.forEach(el => el.innerHTML = vulnHtml);

  // Render Active Perks & Timed Buffs Banner
  renderActivePerksResistancesBanner();
}

function renderActivePerksResistancesBanner() {
  const banners = [
    document.getElementById("active-perks-resistances-banner"),
    document.getElementById("core-active-perks-resistances-banner")
  ].filter(Boolean);
  if (banners.length === 0) return;

  const cards = [];

  // 1. Perk A TEMPO: Impianto Nemeo
  const hasNemean = hasPerkOrTrait("nemean_sub_dermal_armor") || hasPerkOrTrait("nemean sub dermal armor") || hasPerkOrTrait("armatura sotto-dermica nemea") || hasPerkOrTrait("armatura sottodermica nemea");
  if (hasNemean) {
    if (!character.activeTimedBuffs) character.activeTimedBuffs = {};
    if (!character.activeTimedBuffs.nemean) {
      character.activeTimedBuffs.nemean = { active: false, roundsRemaining: 3, choices: ["balistico", "laser", "esplosivo"] };
    }
    const n = character.activeTimedBuffs.nemean;
    const choicesLabels = (n.choices || []).map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ");

    cards.push(`
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; background:${n.active ? 'rgba(16,185,129,0.12)' : 'rgba(37,99,235,0.08)'}; border:1px solid ${n.active ? 'rgba(16,185,129,0.4)' : 'rgba(37,99,235,0.3)'}; padding:6px 8px; border-radius:4px; margin-bottom:4px;">
        <div>
          <div style="font-weight:bold; font-size:12px; color:${n.active ? '#10b981' : 'var(--text-bright)'};">
            ⚡ IMPIANTO NEMEO (Costituzione 9)
            ${n.active ? `<span style="background:#10b981; color:#fff; font-size:10px; padding:1px 5px; border-radius:3px; margin-left:4px;">ATTIVO: ${n.roundsRemaining}/3 Round</span>` : `<span style="color:var(--text-dim); font-size:10.5px; margin-left:4px;">(Inattivo - Costo: 3 AP)</span>`}
          </div>
          <div style="font-size:10.5px; color:var(--text-dim); margin-top:2px;">
            Resistenze scelte (max 3): <strong style="color:var(--text-bright);">${choicesLabels || "Nessuna selezionata"}</strong>
          </div>
        </div>
        <div style="display:flex; gap:4px; align-items:center;">
          ${n.active ? `
            <button type="button" class="btn btn-sm" onclick="advanceNemeanRound()" title="Scala 1 round di combattimento" style="font-size:10.5px; padding:2px 6px;">⏳ Avanza Round (-1)</button>
            <button type="button" class="btn btn-sm btn-danger" onclick="toggleNemeanImplant()" title="Disattiva impianto" style="font-size:10.5px; padding:2px 6px;">✕ Disattiva</button>
          ` : `
            <button type="button" class="btn btn-sm btn-primary" onclick="toggleNemeanImplant()" title="Attiva per 3 Round spendendo 3 AP" style="font-size:10.5px; padding:2px 8px;">⚡ Attiva (3 AP)</button>
            <button type="button" class="btn btn-sm" onclick="openNemeanConfigModal()" title="Modifica i 3 tipi di danno" style="font-size:10.5px; padding:2px 6px;">⚙️ Tipi Danno</button>
          `}
        </div>
      </div>
    `);
  }

  // 2. Perk INT: Furia da Nerd! (Nerd Rage!)
  const hasNerdRage = hasPerkOrTrait("nerd_rage") || hasPerkOrTrait("nerd rage") || hasPerkOrTrait("furia da nerd");
  if (hasNerdRage) {
    const curHp = character.vitals ? (character.vitals.currentHp || 0) : 10;
    const maxHp = character.vitals ? (character.vitals.maxHp || 10) : 10;
    const isUnderHalf = curHp < (maxHp / 2);

    cards.push(`
      <div style="display:flex; justify-content:space-between; align-items:center; background:${isUnderHalf ? 'rgba(239,68,68,0.15)' : 'rgba(100,116,139,0.08)'}; border:1px solid ${isUnderHalf ? 'rgba(239,68,68,0.5)' : 'rgba(100,116,139,0.25)'}; padding:4px 8px; border-radius:4px; margin-bottom:4px;">
        <div>
          <span style="font-weight:bold; font-size:11.5px; color:${isUnderHalf ? '#ef4444' : 'var(--text-bright)'};">
            ${isUnderHalf ? '🔥 FURIA DA NERD! ATTIVA (HP < 50%)' : '🛡️ Furia da Nerd! (Perk INT 7)'}
          </span>
          <div style="font-size:10.5px; color:${isUnderHalf ? '#fca5a5' : 'var(--text-dim)'};">
            ${isUnderHalf ? 'Bonus attivo: +3 DT totale e +3 Danni a tutti gli attacchi!' : 'Inattivo (si attiva in automatico quando i punti ferita scendono sotto la metà).'}
          </div>
        </div>
        <div>
          <span style="font-size:10.5px; font-weight:bold; color:${isUnderHalf ? '#ef4444' : 'var(--text-dim)'};">${curHp} / ${maxHp} HP</span>
        </div>
      </div>
    `);
  }

  // 3. Perk INT: Armatura Riflettente (In Shining Armor)
  const hasShining = hasPerkOrTrait("in_shining_armor") || hasPerkOrTrait("in shining armor") || hasPerkOrTrait("armatura riflettente");
  if (hasShining) {
    cards.push(`
      <div style="background:rgba(14,165,233,0.08); border:1px solid rgba(14,165,233,0.3); padding:4px 8px; border-radius:4px; margin-bottom:4px; font-size:11px;">
        <span style="font-weight:bold; color:#0284c7;">✨ Armatura Riflettente (Perk INT 7):</span>
        <span style="color:var(--text-bright);"> Danni Laser e Plasma dimezzati (½). Se colpita/o, con 19+ al check Fortuna il raggio rifrange e colpisce l'attaccante!</span>
      </div>
    `);
  }

  // 4. Perk Synth: Scheletro d'Adamantio (Adamantium Skeleton)
  const hasAdamantium = hasPerkOrTrait("adamantium_skeleton") || hasPerkOrTrait("adamantium skeleton") || hasPerkOrTrait("scheletro d'adamantio");
  if (hasAdamantium) {
    cards.push(`
      <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.3); padding:4px 8px; border-radius:4px; margin-bottom:4px; font-size:11px;">
        <span style="font-weight:bold; color:#059669;">🛡️ Scheletro d'Adamantio (Perk Synth):</span>
        <span style="color:var(--text-bright);"> Immunità totale a tutte le condizioni/menomazioni agli arti. Danno HP da attacchi mirati dimezzato (½).</span>
      </div>
    `);
  }

  // 5. Timed chems bar (Med-X e Rad-X)
  const medXActive = !!(character.activeTimedBuffs && character.activeTimedBuffs.medX && character.activeTimedBuffs.medX.active);
  const radXActive = !!(character.activeTimedBuffs && character.activeTimedBuffs.radX && character.activeTimedBuffs.radX.active);

  cards.push(`
    <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:2px; padding-top:4px; border-top:1px dashed var(--border-color); font-size:10.5px;">
      <span style="color:var(--text-dim); font-weight:bold;">BUFF FARMACOLOGICI (A TEMPO):</span>
      <button type="button" class="btn btn-sm ${medXActive ? 'btn-success' : ''}" onclick="toggleChemBuff('medX')" style="font-size:10px; padding:1px 6px;">
        💊 Med-X (Danno Fisico ½) ${medXActive ? '✓ ATTIVO (1h)' : ''}
      </button>
      <button type="button" class="btn btn-sm ${radXActive ? 'btn-success' : ''}" onclick="toggleChemBuff('radX')" style="font-size:10px; padding:1px 6px;">
        ☢️ Rad-X (Resist. Radiazioni ½) ${radXActive ? '✓ ATTIVO (1h)' : ''}
      </button>
    </div>
  `);

  const bannerContent = cards.join("");
  banners.forEach(b => {
    if (cards.length > 0) {
      b.innerHTML = bannerContent;
      b.style.display = "block";
    } else {
      b.style.display = "none";
    }
  });
}

function showToast(msg, type = "info") {
  let toastEl = document.getElementById("pipboy-floating-toast");
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.id = "pipboy-floating-toast";
    toastEl.style.position = "fixed";
    toastEl.style.bottom = "24px";
    toastEl.style.right = "24px";
    toastEl.style.zIndex = "99999";
    toastEl.style.maxWidth = "360px";
    toastEl.style.padding = "10px 14px";
    toastEl.style.borderRadius = "6px";
    toastEl.style.fontFamily = "var(--font-sans, inherit)";
    toastEl.style.fontSize = "11.5px";
    toastEl.style.boxShadow = "0 4px 14px rgba(0,0,0,0.4)";
    toastEl.style.transition = "all 0.3s ease";
    document.body.appendChild(toastEl);
  }
  const bg = type === "warning" ? "#d97706" : type === "danger" ? "#dc2626" : type === "success" ? "#059669" : "#2563eb";
  toastEl.style.background = bg;
  toastEl.style.color = "#ffffff";
  toastEl.innerHTML = msg;
  toastEl.style.opacity = "1";
  toastEl.style.transform = "translateY(0)";
  clearTimeout(toastEl._timer);
  toastEl._timer = setTimeout(() => {
    toastEl.style.opacity = "0";
    toastEl.style.transform = "translateY(10px)";
  }, 4000);
}

function toggleNemeanImplant() {
  if (!character.activeTimedBuffs) character.activeTimedBuffs = {};
  if (!character.activeTimedBuffs.nemean) {
    character.activeTimedBuffs.nemean = { active: false, roundsRemaining: 3, choices: ["balistico", "laser", "esplosivo"] };
  }
  const n = character.activeTimedBuffs.nemean;
  if (!n.active) {
    const curAp = (character.vitals && character.vitals.currentAp !== undefined) ? character.vitals.currentAp : 10;
    if (curAp >= 3) {
      character.vitals.currentAp -= 3;
      const apInput = document.getElementById("current-ap");
      if (apInput) apInput.value = character.vitals.currentAp;
    }
    n.active = true;
    n.roundsRemaining = 3;
    const choicesLabels = (n.choices || []).map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ");
    showToast(`⚡ <strong>Impianto Nemeo Attivato!</strong> (-3 AP) Ottieni resistenza a <strong>${choicesLabels}</strong> per 3 Round (15s).`, "success");
  } else {
    n.active = false;
    showToast("⚡ <strong>Impianto Nemeo Disattivato.</strong>", "info");
  }
  renderResistancesSection();
  saveCharacter();
}

function advanceNemeanRound() {
  if (!character.activeTimedBuffs || !character.activeTimedBuffs.nemean || !character.activeTimedBuffs.nemean.active) return;
  const n = character.activeTimedBuffs.nemean;
  n.roundsRemaining = (n.roundsRemaining || 3) - 1;
  if (n.roundsRemaining <= 0) {
    n.active = false;
    n.roundsRemaining = 3;
    showToast("⌛ <strong>Impianto Nemeo esaurito!</strong> La durata di 3 round è terminata.", "warning");
  } else {
    showToast(`⏳ <strong>Impianto Nemeo:</strong> Round rimanenti ${n.roundsRemaining}/3.`, "info");
  }
  renderResistancesSection();
  saveCharacter();
}

function openNemeanConfigModal() {
  if (!character.activeTimedBuffs) character.activeTimedBuffs = {};
  if (!character.activeTimedBuffs.nemean) {
    character.activeTimedBuffs.nemean = { active: false, roundsRemaining: 3, choices: ["balistico", "laser", "esplosivo"] };
  }
  const n = character.activeTimedBuffs.nemean;
  const container = document.getElementById("nemean-types-checklist");
  if (container) {
    container.innerHTML = NEMEO_DAMAGE_TYPES.map(t => {
      const isChecked = (n.choices || []).includes(t.id);
      return `
        <label style="display:flex; align-items:center; gap:6px; font-size:12px; cursor:pointer; padding:3px 4px; border-radius:3px;">
          <input type="checkbox" class="nemean-type-cb" value="${t.id}" ${isChecked ? "checked" : ""} onchange="updateNemeanCount()">
          <span>${t.label}</span>
        </label>
      `;
    }).join("");
  }
  updateNemeanCount();
  const modal = document.getElementById("nemean-config-modal");
  if (modal) modal.style.display = "flex";
}

function updateNemeanCount() {
  const cbs = document.querySelectorAll(".nemean-type-cb:checked");
  const countEl = document.getElementById("nemean-selection-count");
  if (countEl) {
    countEl.textContent = `Selezionati: ${cbs.length} / 3 tipi massimi`;
    countEl.style.color = cbs.length === 3 ? "var(--success)" : cbs.length > 3 ? "var(--danger)" : "var(--accent)";
  }
}

function closeNemeanConfigModal() {
  const modal = document.getElementById("nemean-config-modal");
  if (modal) modal.style.display = "none";
}

function saveNemeanConfig() {
  const cbs = Array.from(document.querySelectorAll(".nemean-type-cb:checked")).map(cb => cb.value);
  if (cbs.length === 0) {
    alert("Seleziona almeno 1 tipo di danno (massimo 3).");
    return;
  }
  if (cbs.length > 3) {
    alert("Puoi selezionare al massimo 3 tipi di danno per l'Impianto Nemeo.");
    return;
  }
  if (!character.activeTimedBuffs) character.activeTimedBuffs = {};
  if (!character.activeTimedBuffs.nemean) {
    character.activeTimedBuffs.nemean = { active: false, roundsRemaining: 3, choices: [] };
  }
  character.activeTimedBuffs.nemean.choices = cbs;
  closeNemeanConfigModal();
  renderResistancesSection();
  saveCharacter();
  const choicesLabels = cbs.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ");
  showToast(`⚡ Impianto Nemeo configurato con successo: <strong>${choicesLabels}</strong>`, "success");
}

function toggleChemBuff(chemKey) {
  if (!character.activeTimedBuffs) character.activeTimedBuffs = {};
  if (!character.activeTimedBuffs[chemKey]) {
    character.activeTimedBuffs[chemKey] = { active: false };
  }
  const isNowActive = !character.activeTimedBuffs[chemKey].active;
  character.activeTimedBuffs[chemKey].active = isNowActive;
  const chemLabel = chemKey === "medX" ? "Med-X (Danno Fisico ½)" : "Rad-X (Radiazioni ½)";
  showToast(`${isNowActive ? '💊' : '✕'} ${chemLabel}: ${isNowActive ? 'ATTIVO (1 ora)' : 'Disattivato'}`, isNowActive ? "success" : "info");
  renderResistancesSection();
  saveCharacter();
}

function openAddCustomResistanceModal() {
  const modal = document.getElementById("custom-resistance-modal");
  if (modal) modal.style.display = "flex";
}

function closeCustomResistanceModal() {
  const modal = document.getElementById("custom-resistance-modal");
  if (modal) modal.style.display = "none";
}

function onCustomResistTypeChange(type) {}

function saveCustomResistance() {
  const nameEl = document.getElementById("custom-resist-name");
  const typeEl = document.getElementById("custom-resist-type");
  const catEl = document.getElementById("custom-resist-category");
  const sourceEl = document.getElementById("custom-resist-source");

  let name = nameEl ? nameEl.value.trim() : "";
  if (!name && typeEl && typeEl.value && typeEl.value !== "custom") {
    name = typeEl.value;
  }
  const type = catEl ? catEl.value : "half";
  const source = sourceEl ? sourceEl.value.trim() : "Personalizzato";

  if (!name) {
    alert("Inserisci il nome del danno o dell'effetto.");
    return;
  }

  if (!character.customResistances) character.customResistances = [];
  character.customResistances.push({
    id: "cr_" + Date.now(),
    name,
    type,
    source: source || "Personalizzato"
  });

  if (nameEl) nameEl.value = "";
  if (sourceEl) sourceEl.value = "";
  closeCustomResistanceModal();
  renderResistancesSection();
  saveCharacter();
}

function removeCustomResistance(id) {
  if (!character.customResistances) return;
  character.customResistances = character.customResistances.filter(r => r.id !== id);
  renderResistancesSection();
  saveCharacter();
}


// =============================================================================
// FLOATING TOOLTIP & COMPENDIUM MODAL
// =============================================================================

function openCompendiumModal() {
  const modal = document.getElementById("compendium-modal");
  if (modal) {
    modal.style.display = "flex";
    setCompendiumTab("weapons");
  }
}

function closeCompendiumModal() {
  const modal = document.getElementById("compendium-modal");
  if (modal) modal.style.display = "none";
}

let activeCompTab = "weapons";

function setCompendiumTab(tabName) {
  activeCompTab = tabName;
  document.querySelectorAll(".comp-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  renderCompendium();
}

function renderCompendium() {
  const container = document.getElementById("compendium-content");
  const searchInput = document.getElementById("comp-search-input");
  if (!container) return;

  const q = searchInput ? (searchInput.value || "").toLowerCase().trim() : "";
  const tabName = activeCompTab;
  let html = "";

  if (tabName === "weapons") {
    const list = (FALLOUT_RULES_DATA.weapons || []).filter(w => !q || w.name.toLowerCase().includes(q) || (w.type && w.type.toLowerCase().includes(q)));
    html = list.map(w => `
      <div class="comp-item" style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:4px; padding:6px 10px; margin-bottom:6px;">
        <div class="comp-item-header" style="display:flex; justify-content:space-between; font-weight:bold; font-size:13px; color:var(--text-bright);">
          <span>${w.name}</span>
          <span style="font-size:11px; color:var(--accent-amber);">${w.damage} Danno | AP ${w.ap}</span>
        </div>
        <div style="font-size:11px; color:var(--accent); text-transform:uppercase;">Tipo: ${w.type} | Gittata: ${w.range || "C"}</div>
      </div>`).join("");
  } else if (tabName === "traits") {
    const list = (FALLOUT_RULES_DATA.traitsCompendium || []).filter(t => !q || t.name.toLowerCase().includes(q) || (t.effect && t.effect.toLowerCase().includes(q)));
    html = list.map(t => `
      <div class="comp-item" style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:4px; padding:6px 10px; margin-bottom:6px;">
        <div class="comp-item-header" style="display:flex; justify-content:space-between; font-weight:bold; font-size:13px; color:var(--text-bright);">
          <span>${t.name}</span>
          <span style="font-size:11px; color:var(--accent);">${t.category || "Tratto"}</span>
        </div>
        <div style="font-size:12px; color:var(--text-dim); margin-top:2px;">${(t.ranks && t.ranks[0]) || t.effect || ""}</div>
      </div>`).join("");
  } else if (tabName === "perks") {
    const list = (FALLOUT_RULES_DATA.perks || []).filter(p => !q || p.name.toLowerCase().includes(q) || (p.effect && p.effect.toLowerCase().includes(q)));
    html = list.map(p => {
      const availInfo = isPerkAvailable(p);
      return `
      <div class="comp-item" style="background:var(--bg-tertiary); border:1px solid var(--border-color); border-radius:4px; padding:6px 10px; margin-bottom:6px; border-left:3px solid ${availInfo.available ? 'var(--accent-glow)' : 'var(--accent-red)'};">
        <div class="comp-item-header" style="display:flex; justify-content:space-between; font-weight:bold; font-size:13px; color:var(--text-bright);">
          <span>${p.name}</span>
          <span style="font-size:11px; color:${availInfo.available ? 'var(--accent-glow)' : 'var(--accent-red)'};">${availInfo.available ? '[OK]' : '[Bloccato]'}</span>
        </div>
        <div style="font-size:11px; color:var(--accent); text-transform:uppercase;">${p.category || "Perk"} | Req: ${p.reqText || p.req || "Nessuno"}</div>
        <div style="font-size:12px; color:var(--text-dim); margin-top:2px;">${(p.ranks && p.ranks[0]) || p.effect || ""}</div>
      </div>`;
    }).join("");
  } else {
    html = `<div style="padding:16px; color:var(--text-dim); text-align:center;">Nessun dato per questa scheda.</div>`;
  }

  container.innerHTML = html || `<div style="padding:16px; color:var(--text-dim); text-align:center;">Nessun elemento trovato.</div>`;
}

function setupTooltips() {
  const tooltipEl = document.getElementById("pipboy-tooltip");
  if (!tooltipEl) return;

  document.body.addEventListener("mouseover", (e) => {
    const target = e.target.closest("[data-keyword], [data-tooltip]");
    if (!target) return;

    let title = "";
    let category = "REGOLE VAULT-TEC";
    let text = "";

    if (target.dataset.keyword) {
      const kw = target.dataset.keyword.toLowerCase().trim();
      const entry = (FALLOUT_RULES_DATA.keywordsGlossary || {})[kw];
      if (entry) {
        title = entry.title;
        category = entry.cat;
        text = entry.text;
      }
    }

    if (!title && target.dataset.tooltip) {
      title = "Info";
      text = target.dataset.tooltip;
    }

    if (title || text) {
      tooltipEl.innerHTML = `
        <div class="tooltip-header" style="font-weight:bold; font-size:12px; color:var(--accent);">
          <span class="tooltip-title">${title}</span>
          <span class="tooltip-cat" style="font-size:10px; color:var(--text-dim); margin-left:6px;">${category}</span>
        </div>
        <div class="tooltip-body" style="font-size:11.5px; color:var(--text-bright); margin-top:3px;">${text}</div>`;
      tooltipEl.style.display = "block";
      positionTooltip(e, tooltipEl);
    }
  });

  document.body.addEventListener("mousemove", (e) => {
    if (tooltipEl.style.display === "block") {
      positionTooltip(e, tooltipEl);
    }
  });

  document.body.addEventListener("mouseout", (e) => {
    const target = e.target.closest("[data-keyword], [data-tooltip]");
    if (target) {
      tooltipEl.style.display = "none";
    }
  });
}


// =============================================================================
// PERSISTENCE, THEMES & IMPORT/EXPORT
// =============================================================================

function saveCharacter() {
  try {
    localStorage.setItem("fallout_ttrpg_character", JSON.stringify(character));
    const ind = document.getElementById("save-status-indicator");
    if (ind) {
      ind.textContent = "SALVATO [OK]";
      ind.className = "save-status saved";
    }
  } catch (e) {
    console.error("Save error", e);
  }
}

function loadCharacter() {
  try {
    const raw = localStorage.getItem("fallout_ttrpg_character");
    if (raw) {
      const parsed = JSON.parse(raw);
      character = Object.assign(JSON.parse(JSON.stringify(DEFAULT_CHARACTER)), parsed);
    }
  } catch (e) {
    console.error("Load error", e);
  }

  if (!character.traits) character.traits = [];
  if (!character.perks) character.perks = [];
  if (!character.weapons) character.weapons = [];
  if (!character.inventory) character.inventory = [];
  if (!character.limbs) character.limbs = { head: "healthy", torso: "healthy", armL: "healthy", armR: "healthy", legL: "healthy", legR: "healthy" };
  if (!character.racialOptions) character.racialOptions = { activeIds: [], customTraits: [] };
  if (!character.armor) character.armor = { installedUpgrades: [] };
  if (!character.bio) character.bio = {};
  if (typeof syncRacialTraitsToCharacter === "function") {
    syncRacialTraitsToCharacter(false);
  }

  if (!character.pipboy) {
    character.pipboy = { owned: false, model: "pb3000mk4", decay: 0, installedUpgrades: [], notes: "" };
  }
  if (!character.pipboy.installedUpgrades) character.pipboy.installedUpgrades = [];
  if (!character.pipboy.notes) character.pipboy.notes = "";
  if (!character.pipboy.model) character.pipboy.model = "pb3000mk4";

  if (!character.powerArmor) {
    character.powerArmor = {
      owned: false,
      equipped: false,
      modelId: "t45",
      currentDp: 15,
      maxDp: 15,
      decay: 0,
      fusionMinutes: 240,
      overheated: false,
      installedUpgrades: []
    };
  }
  if (!character.powerArmor.installedUpgrades) character.powerArmor.installedUpgrades = [];
  if (!character.powerArmor.modelId) character.powerArmor.modelId = "t45";
  if (!character.customResistances) character.customResistances = [];
  ensurePowerArmorPieces();
}

function applyTheme(themeName) {
  if (!["vault", "paper", "enclave"].includes(themeName)) {
    themeName = "vault";
  }
  document.body.setAttribute("data-theme", themeName);
  localStorage.setItem("fallout_theme", themeName);

  document.querySelectorAll("[data-set-theme]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-set-theme") === themeName);
  });
}

function exportCharacterJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  const charName = (character.info.name || "personaggio").replace(/\s+/g, "_").toLowerCase();
  downloadAnchor.setAttribute("download", `fallout_${charName}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importCharacterJSON(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      character = Object.assign(JSON.parse(JSON.stringify(DEFAULT_CHARACTER)), parsed);
      loadCharacter();
      renderAll();
      updateDerivedValues();
      saveCharacter();
      alert("Scheda importata con successo!");
    } catch (err) {
      alert("Errore durante l'importazione del file JSON: " + err.message);
    }
  };
  reader.readAsText(file);
}

function resetCharacter() {
  if (!confirm("Sei sicuro di voler resettare l'intera scheda? Tutti i progressi andranno persi.")) return;
  character = JSON.parse(JSON.stringify(DEFAULT_CHARACTER));
  renderAll();
  updateDerivedValues();
  saveCharacter();
}


// =============================================================================
// EVENT LISTENERS INITIALIZATION
// =============================================================================

function setupEventListeners() {
  // Character Info Live Listeners
  const charRaceEl = document.getElementById("char-race");
  if (charRaceEl) {
    charRaceEl.addEventListener("change", (e) => {
      onRaceChange(e.target.value);
    });
  }
  const charNameEl = document.getElementById("char-name");
  const charNameHdr = document.getElementById("char-name-header");
  if (charNameEl) {
    charNameEl.addEventListener("input", (e) => {
      character.info.name = e.target.value;
      if (charNameHdr && charNameHdr.value !== e.target.value) charNameHdr.value = e.target.value;
      saveCharacter();
    });
  }
  if (charNameHdr) {
    charNameHdr.addEventListener("input", (e) => {
      character.info.name = e.target.value;
      if (charNameEl && charNameEl.value !== e.target.value) charNameEl.value = e.target.value;
      saveCharacter();
    });
  }

  const charPlayerEl = document.getElementById("char-player");
  const charPlayerHdr = document.getElementById("char-player-header");
  if (charPlayerEl) {
    charPlayerEl.addEventListener("input", (e) => {
      character.info.player = e.target.value;
      if (charPlayerHdr && charPlayerHdr.value !== e.target.value) charPlayerHdr.value = e.target.value;
      saveCharacter();
    });
  }
  if (charPlayerHdr) {
    charPlayerHdr.addEventListener("input", (e) => {
      character.info.player = e.target.value;
      if (charPlayerEl && charPlayerEl.value !== e.target.value) charPlayerEl.value = e.target.value;
      saveCharacter();
    });
  }

  const charBgEl = document.getElementById("char-background");
  if (charBgEl) {
    charBgEl.addEventListener("change", (e) => {
      character.info.background = e.target.value;
      if (typeof renderBackgroundSkillsPreview === "function") renderBackgroundSkillsPreview();
      saveCharacter();
    });
  }
  const charLvlEl = document.getElementById("char-level");
  if (charLvlEl) {
    charLvlEl.addEventListener("change", (e) => {
      character.info.level = parseInt(e.target.value, 10) || 1;
      const coreLvl = document.getElementById("char-level-core");
      if (coreLvl && coreLvl.value != e.target.value) coreLvl.value = e.target.value;
      updateDerivedValues();
      saveCharacter();
    });
  }
  const charXpEl = document.getElementById("char-xp");
  const charXpHdr = document.getElementById("char-xp-header");
  if (charXpEl) {
    charXpEl.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10) || 0;
      character.info.xp = val;
      if (charXpHdr && parseInt(charXpHdr.value, 10) !== val) charXpHdr.value = val;
      saveCharacter();
    });
  }
  if (charXpHdr) {
    charXpHdr.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10) || 0;
      character.info.xp = val;
      if (charXpEl && parseInt(charXpEl.value, 10) !== val) charXpEl.value = val;
      saveCharacter();
    });
  }

  // Restore active vault tab and profile state
  try {
    const savedTab = localStorage.getItem("fallout_active_tab");
    if (savedTab && document.getElementById(savedTab)) {
      switchVaultTab(savedTab);
    }
    const profCollapsed = localStorage.getItem("fallout_profile_collapsed");
    if (profCollapsed === "1") {
      const pBody = document.getElementById("personal-profile-body");
      const pIcon = document.getElementById("profile-toggle-icon");
      if (pBody) pBody.classList.add("collapsed");
      if (pIcon) pIcon.textContent = "[+] Espandi Profilo";
    }
  } catch(e){}

  // Theme Buttons
  document.querySelectorAll("[data-set-theme]").forEach(btn => {
    btn.addEventListener("click", () => {
      const th = btn.getAttribute("data-set-theme");
      applyTheme(th);
    });
  });

  const savedTheme = localStorage.getItem("fallout_theme") || "vault";
  applyTheme(savedTheme);

  // Portrait Upload & Preset
  const portraitInput = document.getElementById("portrait-file-input");
  if (portraitInput) {
    portraitInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) handlePortraitFile(file);
    });
  }

  const portraitFrame = document.getElementById("portrait-display");
  if (portraitFrame) {
    portraitFrame.addEventListener("click", () => {
      if (portraitInput) portraitInput.click();
    });
  }

  const clearPhotoBtn = document.getElementById("btn-clear-photo");
  if (clearPhotoBtn) {
    clearPhotoBtn.addEventListener("click", () => {
      character.portrait = null;
      renderPortrait();
      saveCharacter();
    });
  }

  const presetSelect = document.getElementById("avatar-preset-select");
  if (presetSelect) {
    presetSelect.addEventListener("change", (e) => {
      const val = e.target.value;
      if (val === "vaultboy") character.portrait = "https://images.fineartamerica.com/images/artworkimages/medium/3/vault-boy-fallout-fallout-transparent.png";
      if (val === "ghoul") character.portrait = "https://static.wikia.nocookie.net/fallout/images/5/52/Fo4_Hancock.png";
      if (val === "synth") character.portrait = "https://static.wikia.nocookie.net/fallout/images/4/42/Fo4_Nick_Valentine.png";
      if (val === "supermutant") character.portrait = "https://static.wikia.nocookie.net/fallout/images/a/ae/Fo4_Strong.png";
      renderPortrait();
      saveCharacter();
    });
  }

  // Karma Controls
  const subKarmaBtn = document.getElementById("btn-sub-karma");
  if (subKarmaBtn) {
    subKarmaBtn.addEventListener("click", () => {
      adjustKarmaCapCustomMod(-1);
    });
  }

  const addKarmaBtn = document.getElementById("btn-add-karma");
  if (addKarmaBtn) {
    addKarmaBtn.addEventListener("click", () => {
      adjustKarmaCapCustomMod(1);
    });
  }

  const flipBtn = document.getElementById("karma-flip-btn");
  if (flipBtn) {
    flipBtn.addEventListener("click", () => {
      if (!character.info || !character.info.karmaCaps) return;
      const calc = calculateMaxKarmaCaps();
      const max = calc.max;
      if (!Array.isArray(character.info.karmaCaps.spentArray)) {
        character.info.karmaCaps.spentArray = new Array(max).fill(false);
      }
      const allActive = character.info.karmaCaps.spentArray.every(s => !s);
      if (allActive) {
        if (character.info.karmaCaps.spentArray.length > 0) {
          character.info.karmaCaps.spentArray[0] = true;
        }
      } else {
        character.info.karmaCaps.spentArray = character.info.karmaCaps.spentArray.map(() => false);
      }
      renderKarmaCaps();
      saveCharacter();
    });
  }


  // Two-way synchronization for Core Vitals (Tab 1)
  const syncInputIds = ["current-sp", "max-sp", "current-hp", "max-hp", "current-ap", "max-ap"];
  syncInputIds.forEach(baseId => {
    const mainEl = document.getElementById(baseId);
    const coreEl = document.getElementById("core-" + baseId);
    const key = baseId.replace("-", "").replace("sp", "Sp").replace("hp", "Hp").replace("ap", "Ap");

    if (coreEl) {
      coreEl.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10) || 0;
        character.vitals[key] = val;
        if (mainEl) mainEl.value = val;
        if (baseId.startsWith("max-")) {
          coreEl.dataset.custom = "true";
          if (mainEl) mainEl.dataset.custom = "true";
        }
        saveCharacter();
      });
    }

    if (mainEl) {
      mainEl.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10) || 0;
        character.vitals[key] = val;
        if (coreEl) coreEl.value = val;
        if (baseId.startsWith("max-")) {
          mainEl.dataset.custom = "true";
          if (coreEl) coreEl.dataset.custom = "true";
        }
        saveCharacter();
      });
    }
  });

  // Secondary derived sync for Core inputs
  ["val-healing-rate", "val-combat-seq", "recycled-ap", "val-passive-sense", "val-rad-dc", "input-party-nerve", "input-group-sneak"].forEach(baseId => {
    const mainEl = document.getElementById(baseId);
    const coreEl = document.getElementById("core-" + baseId);

    if (coreEl) {
      coreEl.addEventListener("input", (e) => {
        coreEl.dataset.custom = "true";
        if (mainEl) {
          mainEl.value = e.target.value;
          mainEl.dataset.custom = "true";
        }
        saveCharacter();
      });
    }
  });

  // Vitals inputs
  ["current-sp", "max-sp", "current-hp", "max-hp", "current-ap", "max-ap"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        if (id.startsWith("max-")) el.dataset.custom = "true";
        const key = id.replace("-", "").replace("sp", "Sp").replace("hp", "Hp").replace("ap", "Ap");
        character.vitals[key] = parseInt(e.target.value, 10) || 0;
        saveCharacter();
      });
    }
  });

  // Derived values custom override
  ["val-healing-rate", "val-combat-seq", "recycled-ap", "val-passive-sense", "val-rad-dc", "val-ac", "val-dt", "input-party-nerve", "input-group-sneak"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", (e) => {
        el.dataset.custom = "true";
        saveCharacter();
      });
    }
  });

  // Armor Controls
  const armorNameEl = document.getElementById("armor-name");
  if (armorNameEl) {
    armorNameEl.addEventListener("input", (e) => {
      character.armor.name = e.target.value;
      saveCharacter();
    });
  }

  const armorTypeEl = document.getElementById("armor-type");
  if (armorTypeEl) {
    armorTypeEl.addEventListener("change", (e) => {
      character.armor.type = e.target.value;
      updateDerivedValues();
      renderArmor();
      saveCharacter();
    });
  }

  const armorQualSelect = document.getElementById("armor-quality-select");
  if (armorQualSelect) {
    armorQualSelect.addEventListener("change", (e) => {
      updateArmorQuality(e.target.value);
    });
  }

  // Compendium Buttons
  const openCompBtn = document.getElementById("btn-open-compendium");
  if (openCompBtn) openCompBtn.addEventListener("click", openCompendiumModal);

  const closeCompBtn = document.getElementById("btn-close-compendium");
  if (closeCompBtn) closeCompBtn.addEventListener("click", closeCompendiumModal);

  const compSearch = document.getElementById("comp-search-input");
  if (compSearch) compSearch.addEventListener("input", renderCompendium);

  // Level Up Wizard Buttons
  const lvlPickCompBtn = document.getElementById("btn-lvl-pick-perk-comp");
  if (lvlPickCompBtn) lvlPickCompBtn.addEventListener("click", pickLevelUpPerkCompendium);

  const lvlPickCustBtn = document.getElementById("btn-lvl-pick-perk-custom");
  if (lvlPickCustBtn) lvlPickCustBtn.addEventListener("click", pickLevelUpPerkCustom);

  const lvlConfirmBtn = document.getElementById("btn-confirm-level-up");
  if (lvlConfirmBtn) lvlConfirmBtn.addEventListener("click", confirmApplyLevelUp);

  // Export / Import / Print / Reset
  const exportBtn = document.getElementById("btn-export-json");
  if (exportBtn) exportBtn.addEventListener("click", exportCharacterJSON);

  const importTrigger = document.getElementById("btn-import-trigger");
  const importInput = document.getElementById("import-file-input");
  if (importTrigger && importInput) {
    importTrigger.addEventListener("click", () => importInput.click());
    importInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        importCharacterJSON(e.target.files[0]);
      }
    });
  }

  const printBtn = document.getElementById("btn-print-sheet");
  if (printBtn) printBtn.addEventListener("click", () => window.print());

  const resetBtn = document.getElementById("btn-reset-sheet");
  if (resetBtn) resetBtn.addEventListener("click", resetCharacter);

  setupTooltips();
}

// Global Window Bindings for HTML onclick attributes
window.openPickerModal = openPickerModal;
window.renderPickerList = renderPickerList;
window.selectPickerItem = selectPickerItem;
window.closePickerModal = closePickerModal;
window.openWeaponModPicker = openWeaponModPicker;
window.addTraitCompendium = addTraitCompendium;
window.addTraitCustom = addTraitCustom;
window.addPerkCompendium = addPerkCompendium;
window.addPerkCustom = addPerkCustom;
window.addWeaponCompendium = addWeaponCompendium;
window.addWeaponFirearm = addWeaponFirearm;
window.addWeaponMelee = addWeaponMelee;
window.addInvCompendium = addInvCompendium;
window.addInvItem = addInvItem;

window.togglePowerArmorOwned = togglePowerArmorOwned;
window.togglePowerArmorEquipped = togglePowerArmorEquipped;
window.onPowerArmorModelChange = onPowerArmorModelChange;
window.updatePowerArmorDP = updatePowerArmorDP;
window.updatePowerArmorTimer = updatePowerArmorTimer;
window.togglePowerArmorOverheated = togglePowerArmorOverheated;
window.setPowerArmorDecay = setPowerArmorDecay;
window.addPowerArmorUpgrade = addPowerArmorUpgrade;
window.changePowerArmorUpgradeRank = changePowerArmorUpgradeRank;
window.removePowerArmorUpgrade = removePowerArmorUpgrade;
window.ensurePowerArmorPieces = ensurePowerArmorPieces;
window.onPowerArmorPartClick = onPowerArmorPartClick;
window.setPowerArmorPieceCondition = setPowerArmorPieceCondition;
window.updatePowerArmorPiece = updatePowerArmorPiece;
window.renderPowerArmorPartsFigure = renderPowerArmorPartsFigure;
window.renderPowerArmor = renderPowerArmor;

window.computeDefensiveModifiers = computeDefensiveModifiers;
window.renderResistancesSection = renderResistancesSection;
window.openAddCustomResistanceModal = openAddCustomResistanceModal;
window.closeCustomResistanceModal = closeCustomResistanceModal;
window.onCustomResistTypeChange = onCustomResistTypeChange;
window.saveCustomResistance = saveCustomResistance;
window.removeCustomResistance = removeCustomResistance;

window.openCompendiumModal = openCompendiumModal;
window.closeCompendiumModal = closeCompendiumModal;
window.setCompendiumTab = setCompendiumTab;
window.renderCompendium = renderCompendium;

window.saveCharacter = saveCharacter;
window.loadCharacter = loadCharacter;
window.applyTheme = applyTheme;
window.exportCharacterJSON = exportCharacterJSON;
window.importCharacterJSON = importCharacterJSON;
window.resetCharacter = resetCharacter;
window.setupEventListeners = setupEventListeners;

// =============================================================================
// INITIALIZATION
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  loadCharacter();
  renderAll();
  updateDerivedValues();
  setupEventListeners();

  // Initialize Vault-Tec OS Theme (green or bw)
  const savedOsTheme = localStorage.getItem("fallout_os_theme") || "green";
  applyVaultOsTheme(savedOsTheme);

  // Show character creation wizard on first visit (no saved character or wizard not completed)
  const hasSavedChar = !!localStorage.getItem("fallout_ttrpg_character");
  const wizDone = hasSavedChar && character.info && character.info.wizardCompleted;
  if (!wizDone) {
    setTimeout(() => showCharCreationWizard(), 300);
  }
});

window.getEffectiveStrength = getEffectiveStrength;
window.togglePersonalProfile = togglePersonalProfile;
window.switchVaultTab = switchVaultTab;


// =============================================================================
// DASHBOARD DECK, PERKS ACCORDION & VITAL MONITOR LOGIC
// =============================================================================

function renderDashboardOverview() {
  // 1. Sync Stick Figure (Omino Verde)
  if (!character.limbs) {
    character.limbs = { head: "healthy", torso: "healthy", armL: "healthy", armR: "healthy", legL: "healthy", legR: "healthy" };
  }
  const limbKeys = ["head", "torso", "armL", "armR", "legL", "legR"];
  const limbLabels = { head: "TESTA", torso: "TORSO", armL: "BRAC SX", armR: "BRAC DX", legL: "GAMB SX", legR: "GAMB DX" };
  const penalties = [];

  limbKeys.forEach(k => {
    const st = character.limbs[k] || "healthy";
    const dashPath = document.getElementById(`dash-limb-${k}`);
    const dashBtn = document.getElementById(`dash-btn-limb-${k}`);

    if (dashPath && typeof dashPath.setAttribute === "function") {
      dashPath.setAttribute("class", `limb-path limb-${st}`);
    }
    if (dashBtn) {
      dashBtn.className = `limb-quick-btn status-${st}`;
      let stText = "SANA";
      if (st === "crippled") stText = "MENOMATO [!]";
      if (st === "severed") stText = "RECISO ✕";
      dashBtn.textContent = `${limbLabels[k]}: ${stText}`;
    }

    if (st === "crippled") {
      if (k === "head") penalties.push("Testa Menomata (-2 PER, svantaggio a prove mentali)");
      if (k === "torso") penalties.push("Torso Menomato (svantaggio prove fisiche, -SP)");
      if (k === "armL" || k === "armR") penalties.push(`${limbLabels[k]} Menomato (svantaggio attacchi)`);
      if (k === "legL" || k === "legR") penalties.push(`${limbLabels[k]} Menomata (movimento dimezzato, -2 AP)`);
    } else if (st === "severed") {
      penalties.push(`${limbLabels[k]} RECISO (amputazione critica)`);
    }
  });

  const dashPenaltiesBox = document.getElementById("dash-limb-penalties");
  if (dashPenaltiesBox) {
    if (penalties.length > 0) {
      dashPenaltiesBox.className = "limb-penalty-banner has-penalty";
      dashPenaltiesBox.innerHTML = `<strong>⚠️ Penalità:</strong> ${penalties.join(" | ")}`;
    } else {
      dashPenaltiesBox.className = "limb-penalty-banner";
      dashPenaltiesBox.textContent = "[OK] Corpo in piena efficienza operativa.";
    }
  }

  // 2. Sync Pip-Boy Vital Monitor (HP, AP, SP)
  const maxHp = typeof calculateMaxHP === "function" ? calculateMaxHP() : (parseInt(character.vitals?.maxHp || character.vitals?.hpMax, 10) || 10);
  const curHp = parseInt(character.vitals?.currentHp ?? character.vitals?.hp, 10) || 0;
  const hpPct = Math.min(100, Math.max(0, Math.round((curHp / (maxHp || 1)) * 100)));

  const maxAp = typeof calculateMaxAP === "function" ? calculateMaxAP() : (parseInt(character.vitals?.maxAp || character.vitals?.apMax, 10) || 10);
  const curAp = parseInt(character.vitals?.currentAp ?? character.vitals?.ap, 10) || 0;
  const apPct = Math.min(100, Math.max(0, Math.round((curAp / (maxAp || 1)) * 100)));

  const maxSp = typeof calculateMaxSP === "function" ? calculateMaxSP() : (parseInt(character.vitals?.maxSp || character.vitals?.spMax, 10) || 10);
  const curSp = parseInt(character.vitals?.currentSp ?? character.vitals?.sp, 10) || 0;
  const spPct = Math.min(100, Math.max(0, Math.round((curSp / (maxSp || 1)) * 100)));

  const hpBar = document.getElementById("dash-hp-bar");
  const hpText = document.getElementById("dash-hp-text");
  if (hpBar) hpBar.style.width = `${hpPct}%`;
  if (hpText) hpText.textContent = `${curHp} / ${maxHp} (${hpPct}%)`;

  const apBar = document.getElementById("dash-ap-bar");
  const apText = document.getElementById("dash-ap-text");
  if (apBar) apBar.style.width = `${apPct}%`;
  if (apText) apText.textContent = `${curAp} / ${maxAp} (${apPct}%)`;

  const spBar = document.getElementById("dash-sp-bar");
  const spText = document.getElementById("dash-sp-text");
  if (spBar) spBar.style.width = `${spPct}%`;
  if (spText) spText.textContent = `${curSp} / ${maxSp} (${spPct}%)`;

  // Top Line Gauges Sync
  const topHpBar = document.getElementById("top-hp-bar");
  const topHpPct = document.getElementById("top-hp-pct");
  if (topHpBar) topHpBar.style.width = `${hpPct}%`;
  if (topHpPct) topHpPct.textContent = `(${hpPct}%)`;

  const topApBar = document.getElementById("top-ap-bar");
  const topApPct = document.getElementById("top-ap-pct");
  if (topApBar) topApBar.style.width = `${apPct}%`;
  if (topApPct) topApPct.textContent = `(${apPct}%)`;

  const topSpBar = document.getElementById("top-sp-bar");
  const topSpPct = document.getElementById("top-sp-pct");
  if (topSpBar) topSpBar.style.width = `${spPct}%`;
  if (topSpPct) topSpPct.textContent = `(${spPct}%)`;




  const pbModelDisplay = document.getElementById("dash-pb-model-name");
  if (pbModelDisplay) {
    const pbMod = character.pipboy?.model || "pipboy_3000_mk_iv";
    pbModelDisplay.textContent = (pbMod.replace(/_/g, " ").toUpperCase());
  }

  // 3. Sync Power Armor Card on Dashboard
  const isPaOwned = !!(character.powerArmor && character.powerArmor.owned);
  const paEquippedView = document.getElementById("dash-pa-equipped-view");
  const paNotEquippedView = document.getElementById("dash-pa-not-equipped-view");
  const paBadge = document.getElementById("dash-pa-badge");

  if (paEquippedView && paNotEquippedView) {
    if (isPaOwned) {
      paEquippedView.style.display = "block";
      paNotEquippedView.style.display = "none";
      if (paBadge) {
        paBadge.textContent = "EQUIPAGGIATA";
        paBadge.style.background = "#dcfce7";
        paBadge.style.color = "#15803d";
      }

      // Sync PA values
      const paModelTitle = document.getElementById("dash-pa-model-title");
      if (paModelTitle) paModelTitle.textContent = (character.powerArmor.model || "T-45").toUpperCase();

      const paDpVal = document.getElementById("dash-pa-dp-val");
      if (paDpVal) paDpVal.textContent = `${character.powerArmor.currentDP || 15} / ${character.powerArmor.maxDP || 15}`;

      const paFusionVal = document.getElementById("dash-pa-fusion-val");
      if (paFusionVal) paFusionVal.textContent = `${character.powerArmor.fusionTimer || 240} min`;

      // Update PA parts mini-silhouette colors
      if (character.powerArmor.pieces) {
        const pieceKeys = ["head", "torso", "armL", "armR", "legL", "legR"];
        pieceKeys.forEach(pk => {
          const partEl = document.getElementById(`dash-pa-piece-${pk}`);
          if (partEl && character.powerArmor.pieces[pk]) {
            const cond = character.powerArmor.pieces[pk].condition || "healthy";
            if (cond === "healthy") partEl.setAttribute("fill", "#22c55e");
            else if (cond === "damaged") partEl.setAttribute("fill", "#eab308");
            else if (cond === "critical") partEl.setAttribute("fill", "#f97316");
            else partEl.setAttribute("fill", "#ef4444");
          }
        });
      }
    } else {
      paEquippedView.style.display = "none";
      paNotEquippedView.style.display = "block";
      if (paBadge) {
        paBadge.textContent = "NON EQUIPAGGIATA";
        paBadge.style.background = "#e2e8f0";
        paBadge.style.color = "#64748b";
      }
    }
  }
}

function quickEquipPowerArmor() {
  if (!character.powerArmor) character.powerArmor = {};
  character.powerArmor.owned = true;
  character.powerArmor.equipped = true;
  if (!character.powerArmor.model) character.powerArmor.model = "t45";
  if (!character.powerArmor.currentDP) character.powerArmor.currentDP = 15;
  if (!character.powerArmor.maxDP) character.powerArmor.maxDP = 15;
  if (!character.powerArmor.fusionTimer) character.powerArmor.fusionTimer = 240;

  if (typeof renderPowerArmor === "function") renderPowerArmor();
  renderDashboardOverview();
  saveCharacter();
}

function toggleDashPerk(idx) {
  const detailPanel = document.getElementById(`dash-perk-detail-${idx}`);
  const arrow = document.getElementById(`dash-perk-arrow-${idx}`);
  if (!detailPanel) return;
  const isShown = detailPanel.style.display === "block";
  detailPanel.style.display = isShown ? "none" : "block";
  if (arrow) arrow.textContent = isShown ? "▼" : "▲";
}

function renderDashboardPerks() {
  const container = document.getElementById("dashboard-active-perks-list");
  const bonusesContainer = document.getElementById("dashboard-perks-bonuses-container");
  const countBadge = document.getElementById("dash-perks-count-badge");
  if (!container) return;

  const perks = character.perks || [];
  if (countBadge) countBadge.textContent = `${perks.length} Perk Attiv${perks.length === 1 ? 'o' : 'i'}`;

  // 1. RENDER ACTIVE PERKS WITH EXPANDABLE MINI-MENU
  if (perks.length === 0) {
    container.innerHTML = `
      <div style="padding:14px; text-align:center; color:var(--text-dim); font-size:12.5px; background:var(--bg-card); border-radius:6px; border:1px dashed var(--border-color);">
        Nessun talento o perk attivo attualmente assegnato. Vai nella scheda <strong>[Talenti / Perks]</strong> per aggiungerne dal compendio ufficiale.
      </div>`;
  } else {
    // Lookup compendium reference if available
    const compendiumPerks = (typeof rulesData !== "undefined" && rulesData.perks) ? rulesData.perks : [];

    let html = "";
    perks.forEach((p, idx) => {
      // Find matching rule entry
      const pNameLower = (p.name || "").toLowerCase().trim();
      const compMatch = compendiumPerks.find(cp => {
        const cpName = (cp.name || "").toLowerCase();
        return cpName.includes(pNameLower) || pNameLower.includes(cpName) || (cp.id && p.id && cp.id === p.id);
      });

      const itName = compMatch ? compMatch.name : (p.name || "Perk");
      const category = (compMatch && compMatch.category) ? compMatch.category : "Generale";
      const rank = p.rank || 1;
      const req = (compMatch && compMatch.req) ? compMatch.req : (p.req || "Nessuno");
      const itDesc = (compMatch && compMatch.ranks && compMatch.ranks[rank - 1]) 
        ? compMatch.ranks[rank - 1] 
        : (compMatch?.effect || p.effect || "Nessuna descrizione specificata.");

      html += `
        <div class="dash-perk-card" style="background:var(--bg-card); border:1.5px solid var(--border-color); border-radius:6px; overflow:hidden; transition:all 0.2s ease; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
          <div style="display:flex; justify-content:space-between; align-items:center; padding:9px 12px; cursor:pointer; background:var(--bg-tertiary);" onclick="toggleDashPerk(${idx})">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:13px; color:#4f46e5;">★</span>
              <strong style="font-size:13px; color:var(--text-bright);">${itName}</strong>
              <span class="badge" style="font-size:10px; background:rgba(79, 70, 229, 0.12); color:#4338ca; border:1px solid rgba(79, 70, 229, 0.25);">${category}</span>
              <span class="badge" style="font-size:10px; background:#f1f5f9; color:#475569; border:1px solid #cbd5e1;">Grado ${rank}</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:11px; color:#4f46e5; font-weight:700;">Dettagli / Traduzione</span>
              <span id="dash-perk-arrow-${idx}" style="font-size:11px; color:#4f46e5; transition:transform 0.2s ease;">▼</span>
            </div>
          </div>
          
          <!-- Collapsible Mini-Menu Accordion with Italian translation -->
          <div id="dash-perk-detail-${idx}" style="display:none; padding:12px 14px; border-top:1px solid var(--border-color); background:var(--bg-primary); animation:fadeInCodex 0.18s ease-in-out;">
            <div style="font-size:12px; line-height:1.5; color:var(--text-primary); white-space:pre-line; margin-bottom:8px;">
              ${itDesc}
            </div>
            <div style="display:flex; flex-wrap:wrap; gap:12px; font-size:11px; color:var(--text-dim); border-top:1px dashed var(--border-color); padding-top:6px;">
              <div><strong>Requisiti:</strong> ${req}</div>
              ${compMatch?.maxRank ? `<div><strong>Grado Massimo:</strong> ${compMatch.maxRank}</div>` : ""}
            </div>
          </div>
        </div>`;
    });
    container.innerHTML = html;
  }

  // 2. RENDER ACTIVE PERKS SPECIFIC BONUSES ZONE
  if (bonusesContainer) {
    const bonuses = [];
    perks.forEach(p => {
      const pName = (p.name || "").toLowerCase();
      const pEff = (p.effect || "").toLowerCase();

      // Detect specific bonuses
      if (pName.includes("gunslinger") || pName.includes("pistolero")) {
        bonuses.push({ icon: "🔫", label: "Precisione Pistole (+2 Attacco)", desc: "+2 all'attacco con pistole ad una mano. Critico automatico con Karma Cap mirato alla testa.", source: p.name || "Pistolero" });
      }
      if (pName.includes("deadeye") || pName.includes("occhio di falco")) {
        bonuses.push({ icon: "🎯", label: "Mira di Precisione", desc: "+2 al risultato attacchi o danni a distanza; attacchi mirati alla testa senza svantaggio", source: "Occhio di Falco" });
      }
      if (pName.includes("blind devil") || pName.includes("diavolo cieco")) {
        bonuses.push({ icon: "👁️", label: "Senso Cieco", desc: "Percepisci l'ambiente con precisione assoluta; nessuna penalità per cecità permanente", source: "Diavolo Cieco" });
      }
      if (pName.includes("heavyweight") || pName.includes("peso massimo")) {
        bonuses.push({ icon: "🏋️", label: "Armi Pesanti -50% Peso", desc: "Tutte le armi pesanti pesano la metà", source: "Peso Massimo" });
      }
      if (pName.includes("weapon handling") || pName.includes("maneggio")) {
        bonuses.push({ icon: "✋", label: "Requisito Forza -2", desc: "Il requisito di Forza per tutte le armi è ridotto di 2 punti", source: "Maneggio delle Armi" });
      }
      if (pName.includes("butcher") || pName.includes("macellaio")) {
        bonuses.push({ icon: "🔪", label: "Bonus Danni Taglienti", desc: "+1d4 danni taglienti con armi da mischia", source: "Macellaio" });
      }
      if (pName.includes("fisticuffs") || pName.includes("pugilato")) {
        bonuses.push({ icon: "🥊", label: "Bonus Disarmato", desc: "+1d4 danni a tutti gli attacchi a pugni e disarmati", source: "Pugilato" });
      }
      if (pName.includes("stonewall") || pName.includes("muro di pietra")) {
        bonuses.push({ icon: "🧱", label: "Stabilità Rocciosa", desc: "Immune a spinta, stordimento e atterramento da creature di pari taglia", source: "Muro di Pietra" });
      }
      if (pName.includes("lead belly") || pName.includes("scheletro di piombo")) {
        bonuses.push({ icon: "☢️", label: "Resistenza Rad Ingestione", desc: "Danno da radiazioni dimezzato da cibo e acqua contaminati", source: "Scheda & Perk" });
      }
      if (pName.includes("toughness") || pName.includes("robustezza")) {
        bonuses.push({ icon: "🛡️", label: "+1 Soglia Danni (DT)", desc: "+1 DT aggiuntiva a tutte le parti del corpo", source: "Robustezza" });
      }
      if (pName.includes("action boy") || pName.includes("action girl")) {
        bonuses.push({ icon: "⚡", label: "+2 Punti Azione (AP)", desc: "+2 AP massimi disponibili", source: "Action Boy/Girl" });
      }
      if (pName.includes("hauler") || pName.includes("strong back") || pName.includes("facchino") || pName.includes("schiena")) {
        bonuses.push({ icon: "🎒", label: "+50 lbs Carico", desc: "+50 libbre di capacità di carico massimo", source: "Facchino / Strong Back" });
      }
      if (pName.includes("snakeater") || pName.includes("veleno")) {
        bonuses.push({ icon: "🧪", label: "Resistenza Veleni (Danno ½)", desc: "Danno da veleni dimezzato", source: "Resistenza Veleno" });
      }
      // Generic mechanical bonus detection if not matched above
      const alreadyListed = bonuses.some(b => b.source.toLowerCase() === (p.name || "").toLowerCase());
      if (!alreadyListed && (pEff.includes("+") || pEff.includes("immune") || pEff.includes("resistenza") || pEff.includes("danni") || pEff.includes("ridott"))) {
        bonuses.push({ icon: "⭐", label: p.name || "Bonus Meccanico", desc: p.effect, source: p.name || "Talento Attivo" });
      }
    });

    if (bonuses.length === 0) {
      bonusesContainer.innerHTML = `
        <div style="font-size:12px; color:var(--text-dim); padding:6px 8px;">
          Nessun bonus passivo numerico attivo rilevato. I perk con bonus specifici (es. +danni, resistenze, modificatori DT/AP/Carico) compariranno qui in evidenza.
        </div>`;
    } else {
      bonusesContainer.innerHTML = bonuses.map(b => `
        <div class="perk-bonus-chip" style="display:flex; align-items:center; gap:8px; background:#ffffff; border:1.5px solid #f59e0b; border-left:3.5px solid #d97706; border-radius:6px; padding:6px 10px; box-shadow:0 1px 3px rgba(0,0,0,0.04); flex:1 1 calc(50% - 8px); min-width:260px;">
          <span style="font-size:17px;">${b.icon}</span>
          <div style="flex:1;">
            <div style="font-size:12px; font-weight:800; color:#92400e;">${b.label} <span style="font-size:10px; font-weight:600; color:var(--text-dim);">[${b.source}]</span></div>
            <div style="font-size:11px; color:var(--text-primary); margin-top:1px;">${b.desc}</div>
          </div>
        </div>`).join("");
    }
  }
}

// Window exports
window.renderDashboardOverview = renderDashboardOverview;
window.renderDashboardPerks = renderDashboardPerks;
window.quickEquipPowerArmor = quickEquipPowerArmor;
window.toggleDashPerk = toggleDashPerk;


function confirmAndLockRace() {
  if (confirm(`Confermi definitivamente la razza '${character.info.race || "human"}'? Una volta confermata, la razza è permanente e non potrà essere cambiata.`)) {
    character.info.raceLocked = true;
    renderRacialBonuses();
    saveCharacter();
    alert("Razza confermata e bloccata con successo!");
  }
}
window.confirmAndLockRace = confirmAndLockRace;


// =============================================================================
// CHARACTER CREATION, CONFIRMATION & LOCK / UNLOCK WORKFLOW
// =============================================================================

function updateCharacterModeUI() {
  const isFinalized = !!(character.info && character.info.isFinalized);
  const badgeContainer = document.getElementById("char-creation-mode-badge");
  const actionsContainer = document.getElementById("char-header-action-buttons");
  const raceSelectHeader = document.getElementById("char-race-header");
  const raceSelectTab = document.getElementById("char-race");
  const variantSelectTab = document.getElementById("char-race-variant");

  if (isFinalized) {
    // Modalità Gioco / Evoluzione (Razza e BG Tag bloccate)
    if (badgeContainer) {
      badgeContainer.innerHTML = `
        <span style="font-size:12px; font-weight:800; color:#166534; background:#dcfce7; border:1px solid #86efac; padding:3px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:5px;" title="La Razza e le 3 Abilità di Background sono bloccate e definitive. Il PG evolve normalmente.">
          🔒 IN GIOCO (EVOLUZIONE ATTIVA)
        </span>
      `;
    }
    if (actionsContainer) {
      actionsContainer.innerHTML = `
        <button type="button" class="btn btn-sm btn-outline-warning no-print" onclick="unlockCharacterForEditing()" style="font-weight:800; font-size:12.5px; padding:5px 10px; background:#fffbeb; color:#b45309; border:1.5px solid #f59e0b; border-radius:4px; cursor:pointer;" title="Se sei indeciso, riapri la bozza per modificare nuovamente Razza e Abilità">
          🔓 Sblocca per Modifiche
        </button>
        <button type="button" class="btn btn-sm btn-outline-secondary no-print" onclick="startNewCharacterFlow()" style="font-weight:800; font-size:12.5px; padding:5px 10px; background:#111827; color:#9ca3af; border:1.5px solid #374151; border-radius:4px; cursor:pointer;" title="Inizia una nuova scheda personaggio">
          ✚ Nuovo PG
        </button>
        <button type="button" class="btn btn-sm btn-primary no-print" id="btn-trigger-level-up" onclick="openLevelUpWizard()" title="Apri procedura guidata Sali di Livello" style="font-weight:800; padding:6px 14px; background:#1d4ed8; color:#ffffff; border:1.5px solid #1e40af; border-radius:4px; box-shadow:0 2px 5px rgba(29, 78, 216, 0.3); letter-spacing:0.5px; cursor:pointer; font-size:13px;">
          ▲ LEVEL UP
        </button>
      `;
    }
    if (raceSelectHeader) raceSelectHeader.disabled = true;
    if (raceSelectTab) raceSelectTab.disabled = true;
    if (variantSelectTab) variantSelectTab.disabled = true;
  } else {
    // Modalità Bozza / Creazione Libera (Tutto modificabile)
    if (badgeContainer) {
      badgeContainer.innerHTML = `
        <span style="font-size:12px; font-weight:800; color:#854d0e; background:#fef9c3; border:1px solid #fde047; padding:3px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:5px;" title="Stai creando il personaggio. Puoi modificare liberamente Razza, Background, le 3 Abilità Tag (+2) e ogni valore.">
          🟡 IN BOZZA (MODIFICA TUTTO)
        </span>
      `;
    }
    if (actionsContainer) {
      actionsContainer.innerHTML = `
        <button type="button" class="btn btn-sm no-print" onclick="showCharCreationWizard()" style="font-weight:800; font-size:12.5px; padding:5px 12px; background:#052e16; color:#4ade80; border:1.5px solid #22c55e; border-radius:4px; cursor:pointer; box-shadow:0 2px 6px rgba(34,197,94,0.2);" title="Apri il Wizard guidato per impostare Nome, Razza e Background">
          ☢ Wizard Creazione
        </button>
        <button type="button" class="btn btn-sm no-print" onclick="openCharacterLockModal()" style="font-weight:800; font-size:13px; padding:6px 14px; background:#16a34a; color:#ffffff; border:1.5px solid #15803d; border-radius:4px; box-shadow:0 2px 5px rgba(22,163,74,0.3); cursor:pointer;" title="Conferma e blocca la creazione: Razza e 3 Tag BG diventeranno definitive">
          🔒 CONFERMA & BLOCCA PG
        </button>
        <button type="button" class="btn btn-sm btn-outline-secondary no-print" onclick="startNewCharacterFlow()" style="font-weight:800; font-size:12.5px; padding:5px 10px; background:#111827; color:#9ca3af; border:1.5px solid #374151; border-radius:4px; cursor:pointer;" title="Ricomincia da zero con una scheda vuota">
          ✚ Nuovo PG
        </button>
        <button type="button" class="btn btn-sm btn-primary no-print" id="btn-trigger-level-up" onclick="openLevelUpWizard()" title="Apri procedura guidata Sali di Livello" style="font-weight:800; padding:6px 14px; background:#1d4ed8; color:#ffffff; border:1.5px solid #1e40af; border-radius:4px; box-shadow:0 2px 5px rgba(29, 78, 216, 0.3); letter-spacing:0.5px; cursor:pointer; font-size:13px;">
          ▲ LEVEL UP
        </button>
      `;
    }
    if (raceSelectHeader) raceSelectHeader.disabled = false;
    if (raceSelectTab) raceSelectTab.disabled = false;
    if (variantSelectTab) variantSelectTab.disabled = false;
  }

  // Update lock status badge in tab-page-race
  const raceBadge = document.getElementById("race-lock-status-badge");
  if (raceBadge) {
    if (isFinalized) {
      raceBadge.innerHTML = `<span style="font-size:12px; font-weight:800; color:#166534; background:#dcfce7; border:1px solid #86efac; padding:3px 10px; border-radius:4px; display:inline-flex; align-items:center; gap:5px;">🔒 RAZZA BLOCCATA IN GIOCO</span>`;
    } else {
      raceBadge.innerHTML = `<button type="button" class="btn btn-sm btn-warning" onclick="openCharacterLockModal()" style="font-size:12px; font-weight:800; padding:3px 10px;">🔒 Conferma Scelta Razza & PG</button>`;
    }
  }
}

function openCharacterLockModal() {
  const modal = document.getElementById("character-lock-modal");
  if (!modal) return;

  const raceNames = { human: "Umano (Human)", ghoul: "Ghoul", gen2_synth: "Synth Gen-2", robot: "Robot", super_mutant: "Super Mutante" };
  const currentRace = character.info.race || "human";
  const currentBg = character.info.background || "vault_dweller";

  const raceEl = document.getElementById("lock-modal-race-val");
  if (raceEl) raceEl.textContent = raceNames[currentRace] || currentRace;

  const bgData = (FALLOUT_RULES_DATA.backgrounds || []).find(b => b.id === currentBg);
  const bgEl = document.getElementById("lock-modal-bg-val");
  if (bgEl) bgEl.textContent = bgData ? bgData.name : currentBg;

  const skillsEl = document.getElementById("lock-modal-skills-val");
  if (skillsEl) {
    if (bgData && bgData.skills) {
      skillsEl.textContent = bgData.skills.join(", ");
    } else if (currentBg === "custom" && character.info.customBackgroundSkills) {
      skillsEl.textContent = character.info.customBackgroundSkills.join(", ");
    } else {
      skillsEl.textContent = "3 Abilità di Background";
    }
  }

  modal.style.display = "flex";
}

function closeCharacterLockModal() {
  const modal = document.getElementById("character-lock-modal");
  if (modal) modal.style.display = "none";
}

function finalizeAndLockCharacter() {
  closeCharacterLockModal();

  // Apply background skills if not already done
  if (!character.info.bgSkillsApplied) {
    applyBackgroundTagSkills();
  }

  character.info.isFinalized = true;
  character.info.raceLocked = true;
  character.info.bgSkillsApplied = true;

  updateCharacterModeUI();
  saveCharacter();
  alert("✓ Personaggio confermato e bloccato con successo! Razza e Abilità di Background sono definitive. Ora puoi far evolvere il PG con Level Up, nuove armi e perk.");
}

function unlockCharacterForEditing() {
  if (confirm("Sei indeciso sulle scelte iniziali? Riaprendo la bozza potrai nuovamente modificare Razza, Background, Abilità e ogni valore.\n\nVuoi riaprire la bozza del personaggio?")) {
    character.info.isFinalized = false;
    character.info.raceLocked = false;
    // Permette di riassegnare/cambiare
    updateCharacterModeUI();
    saveCharacter();
    alert("🔓 Personaggio sbloccato in Modalità Bozza! Puoi modificare liberamente tutto.");
  }
}

function startNewCharacterFlow() {
  if (!confirm("Vuoi iniziare la creazione di un NUOVO PERSONAGGIO da zero?\nTutti i dati attuali della scheda verranno reimpostati.")) {
    return;
  }
  character = JSON.parse(JSON.stringify(DEFAULT_CHARACTER));
  character.info.isFinalized = false;
  character.info.raceLocked = false;
  character.info.bgSkillsApplied = false;
  character.info.wizardCompleted = false;

  renderAll();
  updateDerivedValues();
  updateCharacterModeUI();
  saveCharacter();
  setTimeout(() => showCharCreationWizard(), 150);
}

window.openCharacterLockModal = openCharacterLockModal;
window.closeCharacterLockModal = closeCharacterLockModal;
window.finalizeAndLockCharacter = finalizeAndLockCharacter;
window.unlockCharacterForEditing = unlockCharacterForEditing;
window.startNewCharacterFlow = startNewCharacterFlow;
window.updateCharacterModeUI = updateCharacterModeUI;

// =============================================================================
// CHARACTER CREATION WIZARD
// =============================================================================

// Wizard state
const _wiz = {
  step: 1,
  selectedRace: null,
  selectedBg: null
};

// Races data for wizard (must match rules-data.js race IDs)
const WIZ_RACES = [
  {
    id: "human",
    name: "Umano",
    icon: "👤",
    color: "#3b82f6",
    desc: "La specie dominante sopravvissuta. Altamente adattabili e determinati. Nei tiri salvezza contro la morte, muori al 4° fallimento anziché al 3°."
  },
  {
    id: "ghoul",
    name: "Ghoul",
    icon: "💀",
    color: "#84cc16",
    desc: "Umani mutati da intense radiazioni. Immune a danni da radiazioni e livelli di irradiazione da cibo/acqua. Resistenza ai veleni."
  },
  {
    id: "gen2_synth",
    name: "Synth Gen-2",
    icon: "🤖",
    color: "#06b6d4",
    desc: "Umanoidi sintetici meccanici dell'Istituto. Corpo inorganico, immune a veleni e malattie. Resistenza fisica superiore."
  },
  {
    id: "robot",
    name: "Robot",
    icon: "⚙️",
    color: "#8b5cf6",
    desc: "Mister Handy, Protectron o Robobrain. Corpo inorganico, impossibile usare armor standard. Algoritmi IA e aggiornamenti hardware disponibili."
  },
  {
    id: "super_mutant",
    name: "Super Mutante",
    icon: "💪",
    color: "#ef4444",
    desc: "Umani mutati da FEV. Taglia Grande (+1 dado danno Corpo a Corpo), immune a malattie. Forza e Robustezza +2, INT e CHA −1."
  }
];

// Skill name to app.js input ID mapping
const WIZ_SKILL_MAP = {
  "Armi da Fuoco": "skill-guns",
  "Armi ad Energia": "skill-energy",
  "Corpo a Corpo": "skill-melee",
  "Disarmato": "skill-unarmed",
  "Esplosivi": "skill-explosives",
  "Sneak": "skill-sneak",
  "Medicina": "skill-medicine",
  "Scienza": "skill-science",
  "Costruire": "skill-repair",
  "Commerciare": "skill-barter",
  "Oratoria": "skill-speech",
  "Intimidire": "skill-intimidate",
  "Percezione": "skill-awareness",
  "Sopravvivenza": "skill-survival",
  "Violare": "skill-lockpick"
};

function showCharCreationWizard() {
  const overlay = document.getElementById("char-creation-overlay");
  if (!overlay) return;
  overlay.style.display = "block";
  _wiz.step = 1;
  _wiz.selectedRace = null;
  _wiz.selectedBg = null;
  wizGoStep(1);
  wizBuildRaceGrid();
  wizBuildBgList();

  // Focus name input
  const nameInput = document.getElementById("wiz-char-name");
  if (nameInput && typeof nameInput.focus === "function") setTimeout(() => nameInput.focus(), 100);
}

function wizGoStep(n) {
  _wiz.step = n;
  document.querySelectorAll(".wiz-step").forEach(el => el.style.display = "none");
  const target = document.getElementById(`wiz-step-${n}`);
  if (target) target.style.display = "block";

  const label = document.getElementById("wiz-step-label");
  if (label) label.textContent = `${n} / 3`;

  const bar = document.getElementById("wiz-progress-bar");
  if (bar) bar.style.width = `${Math.round((n / 3) * 100)}%`;
}

function wizValidateStep1() {
  const val = (document.getElementById("wiz-char-name") || {}).value || "";
  const err = document.getElementById("wiz-name-error");
  if (err) err.style.display = val.trim() ? "none" : "block";
}

function wizNextStep(fromStep) {
  if (fromStep === 1) {
    const name = (document.getElementById("wiz-char-name") || {}).value || "";
    if (!name.trim()) {
      const err = document.getElementById("wiz-name-error");
      if (err) err.style.display = "block";
      return;
    }
    wizGoStep(2);
  } else if (fromStep === 2) {
    if (!_wiz.selectedRace) return;
    wizGoStep(3);
  }
}

function wizBuildRaceGrid() {
  const grid = document.getElementById("wiz-race-grid");
  if (!grid) return;
  grid.innerHTML = WIZ_RACES.map(r => `
    <div id="wiz-race-card-${r.id}" onclick="wizSelectRace('${r.id}')"
      style="background:#0a0f0a; border:2px solid #374151; border-radius:8px; padding:16px 12px; text-align:center; cursor:pointer; transition:all 0.2s; position:relative;">
      <div style="font-size:29px; margin-bottom:8px; filter:drop-shadow(0 0 6px ${r.color});">${r.icon}</div>
      <div style="font-size:13px; font-weight:800; color:#e5e7eb; letter-spacing:1px; text-transform:uppercase;">${r.name}</div>
    </div>
  `).join("");
}

function wizSelectRace(raceId) {
  _wiz.selectedRace = raceId;

  // Update card visuals
  WIZ_RACES.forEach(r => {
    const card = document.getElementById(`wiz-race-card-${r.id}`);
    if (!card) return;
    if (r.id === raceId) {
      card.style.borderColor = r.color;
      card.style.boxShadow = `0 0 16px ${r.color}55`;
      card.style.background = `${r.color}15`;
    } else {
      card.style.borderColor = "#374151";
      card.style.boxShadow = "none";
      card.style.background = "#0a0f0a";
    }
  });

  // Show description
  const race = WIZ_RACES.find(r => r.id === raceId);
  const desc = document.getElementById("wiz-race-desc");
  const descName = document.getElementById("wiz-race-desc-name");
  const descText = document.getElementById("wiz-race-desc-text");
  if (desc && race) {
    desc.style.display = "block";
    descName.textContent = `${race.icon} ${race.name}`;
    descText.textContent = race.desc;
  }

  // Enable next button
  const btn = document.getElementById("wiz-btn-next-2");
  if (btn) {
    btn.disabled = false;
    btn.style.opacity = "1";
  }
}

function wizBuildBgList() {
  const list = document.getElementById("wiz-bg-list");
  if (!list || !window.FALLOUT_RULES_DATA) return;
  const bgs = FALLOUT_RULES_DATA.backgrounds || [];
  list.innerHTML = bgs.map(bg => `
    <div id="wiz-bg-card-${bg.id}" onclick="wizSelectBg('${bg.id}')"
      style="background:#0a0f0a; border:2px solid #374151; border-radius:6px; padding:12px 16px; cursor:pointer; display:flex; align-items:center; gap:12px; transition:all 0.2s;">
      <div style="flex:1;">
        <div style="font-size:13px; font-weight:800; color:#e5e7eb; letter-spacing:0.5px;">${bg.name}</div>
        <div style="font-size:12px; color:#6b7280; margin-top:3px;">
          Abilità: <span style="color:#fbbf24; font-weight:700;">${(bg.skills || []).join(" · ")}</span>
        </div>
      </div>
      <div style="font-size:19px; color:#374151;">○</div>
    </div>
  `).join("");
}

function wizSelectBg(bgId) {
  _wiz.selectedBg = bgId;
  const bgs = (window.FALLOUT_RULES_DATA && FALLOUT_RULES_DATA.backgrounds) || [];
  const bg = bgs.find(b => b.id === bgId);

  // Update card visuals
  bgs.forEach(b => {
    const card = document.getElementById(`wiz-bg-card-${b.id}`);
    if (!card) return;
    if (b.id === bgId) {
      card.style.borderColor = "#fbbf24";
      card.style.boxShadow = "0 0 12px rgba(251,191,36,0.3)";
      card.style.background = "rgba(251,191,36,0.08)";
      const dot = card.querySelector("div:last-child");
      if (dot) { dot.textContent = "●"; dot.style.color = "#fbbf24"; }
    } else {
      card.style.borderColor = "#374151";
      card.style.boxShadow = "none";
      card.style.background = "#0a0f0a";
      const dot = card.querySelector("div:last-child");
      if (dot) { dot.textContent = "○"; dot.style.color = "#374151"; }
    }
  });

  // Show skills preview
  if (bg) {
    const preview = document.getElementById("wiz-skills-preview");
    const skillsList = document.getElementById("wiz-skills-list");
    if (preview) preview.style.display = "block";
    if (skillsList) {
      skillsList.innerHTML = (bg.skills || []).map(s => `
        <div style="background:rgba(251,191,36,0.15); border:1px solid #fbbf24; border-radius:20px; padding:4px 14px; font-size:13px; font-weight:800; color:#fbbf24; font-family:'Courier New',monospace; letter-spacing:1px;">
          +2 ${s}
        </div>
      `).join("");
    }
  }

  // Enable finish button
  const btn = document.getElementById("wiz-btn-finish");
  if (btn) {
    btn.disabled = false;
    btn.style.opacity = "1";
  }
}

function wizFinalize() {
  const nameVal = ((document.getElementById("wiz-char-name") || {}).value || "").trim();
  const playerVal = ((document.getElementById("wiz-player-name") || {}).value || "").trim();

  if (!nameVal || !_wiz.selectedRace || !_wiz.selectedBg) return;

  // Apply name and player
  character.info.name = nameVal;
  character.info.player = playerVal;

  // Apply race
  character.info.race = _wiz.selectedRace;
  character.info.raceLocked = false;

  // Apply background
  character.info.background = _wiz.selectedBg;
  character.info.bgSkillsApplied = true;

  // Apply background skill bonuses (+2 Tag to each bg skill)
  const bgs = (window.FALLOUT_RULES_DATA && FALLOUT_RULES_DATA.backgrounds) || [];
  const bg = bgs.find(b => b.id === _wiz.selectedBg);
  if (bg && bg.skills && character.skills) {
    const nameToKey = {
      "commerciare": "barter", "barter": "barter",
      "violare": "breach", "breach": "breach", "scasso": "breach",
      "costruire": "crafting", "crafting": "crafting",
      "armi ad energia": "energyWeapons", "energy weapons": "energyWeapons", "energia": "energyWeapons",
      "esplosivi": "explosives", "explosives": "explosives",
      "armi da fuoco": "guns", "pistole": "guns", "guns": "guns",
      "intimidire": "intimidation", "intimidation": "intimidation",
      "medicina": "medicine", "medicine": "medicine",
      "corpo a corpo": "meleeWeapons", "melee": "meleeWeapons", "melee weapons": "meleeWeapons",
      "sneak": "sneak", "furtività": "sneak",
      "scienza": "science", "science": "science",
      "oratoria": "speech", "speech": "speech",
      "sopravvivenza": "survival", "survival": "survival",
      "disarmato": "unarmed", "unarmed": "unarmed",
      "percezione": "breach"
    };
    bg.skills.forEach(skillName => {
      const cleanName = skillName.toLowerCase().trim();
      const sKey = nameToKey[cleanName] || Object.keys(character.skills).find(k => (character.skills[k].name || "").toLowerCase().includes(cleanName));
      if (sKey && character.skills[sKey]) {
        character.skills[sKey].tag = true;
        character.skills[sKey].extra = 2;
      }
    });
  }

  // Mark as initialized (won't show wizard again)
  character.info.wizardCompleted = true;

  // Apply race in sheet
  if (typeof onRaceChange === "function") onRaceChange(_wiz.selectedRace);

  // Sync background dropdown in sheet
  const bgSelect = document.getElementById("char-background");
  if (bgSelect) bgSelect.value = _wiz.selectedBg;

  // Recalculate, render and save
  if (typeof recalcSkills === "function") recalcSkills();
  if (typeof renderAll === "function") renderAll();
  if (typeof updateDerivedValues === "function") updateDerivedValues();
  saveCharacter();

  // Update name fields in the sheet
  const nameFields = ["char-name", "char-name-header"];
  nameFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = nameVal;
  });
  const playerFields = ["char-player", "char-player-header"];
  playerFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = playerVal;
  });

  // Hide overlay with animation
  const overlay = document.getElementById("char-creation-overlay");
  if (overlay) {
    overlay.style.transition = "opacity 0.5s ease";
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
      overlay.style.opacity = "1";
    }, 500);
  }

  // Show welcome message
  setTimeout(() => {
    const raceName = (WIZ_RACES.find(r => r.id === _wiz.selectedRace) || {}).name || _wiz.selectedRace;
    console.log(`✦ Benvenuto ${nameVal}! Razza: ${raceName}, BG: ${_wiz.selectedBg}`);
  }, 600);
}

// Expose wizard functions globally
window.showCharCreationWizard = showCharCreationWizard;
window.wizGoStep = wizGoStep;
window.wizNextStep = wizNextStep;
window.wizValidateStep1 = wizValidateStep1;
window.wizSelectRace = wizSelectRace;
window.wizSelectBg = wizSelectBg;
window.wizFinalize = wizFinalize;

// =============================================================================
// VERTICAL TAB NAVIGATION (CORE / COMBAT / INVENTARIO / RELAZIONI / TUTTO)
// =============================================================================
function selectVerticalTab(targetId) {
  const tabs = document.querySelectorAll(".vtab-tab");
  tabs.forEach(t => {
    if (t.getAttribute("data-target") === targetId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  const sectionIds = ["row-core", "row-combat", "row-inv", "row-rel", "row-gdr", "row-tech"];

  if (targetId === "all") {
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "block";
    });
  } else {
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = (id === targetId) ? "block" : "none";
      }
    });
  }
  if (typeof window.scrollTo === "function") window.scrollTo({ top: 0, behavior: "smooth" });
  try { localStorage.setItem("fallout_vtab_active", targetId); } catch(e){}
}
window.selectVerticalTab = selectVerticalTab;

// =============================================================================
// FALLOUT MOBILE UX/UI ENGINE (ACCORDION & 5-SECTION SWITCHER)
// =============================================================================

function updateMobileHUD() {
  if (typeof document === "undefined") return;
  const hpEl = document.getElementById("m-hud-hp");
  const apEl = document.getElementById("m-hud-ap");
  const dtEl = document.getElementById("m-hud-dt");
  const radEl = document.getElementById("m-hud-rad");

  if (!character || !character.vitals) return;

  const curHp = character.vitals.currentHp !== undefined ? character.vitals.currentHp : (document.getElementById("core-current-hp") ? document.getElementById("core-current-hp").value : "--");
  const maxHp = character.vitals.maxHp !== undefined ? character.vitals.maxHp : (document.getElementById("core-max-hp") ? document.getElementById("core-max-hp").value : "--");
  const curAp = character.vitals.currentAp !== undefined ? character.vitals.currentAp : (document.getElementById("core-current-ap") ? document.getElementById("core-current-ap").value : "--");
  const maxAp = character.vitals.maxAp !== undefined ? character.vitals.maxAp : (document.getElementById("core-max-ap") ? document.getElementById("core-max-ap").value : "--");
  const dt = character.vitals.dt !== undefined ? character.vitals.dt : (document.getElementById("val-dt") ? document.getElementById("val-dt").value : "0");
  const rads = character.vitals.rads !== undefined ? character.vitals.rads : 0;
  const radDc = character.vitals.radDc !== undefined ? character.vitals.radDc : (document.getElementById("core-val-rad-dc") ? document.getElementById("core-val-rad-dc").value : "12");

  if (hpEl) hpEl.textContent = `PF ${curHp}/${maxHp}`;
  if (apEl) apEl.textContent = `PA ${curAp}/${maxAp}`;
  if (dtEl) dtEl.textContent = `DT ${dt}`;
  if (radEl) radEl.textContent = `Rad ${rads} (CD ${radDc})`;
}
window.updateMobileHUD = updateMobileHUD;

function switchMobileSection(sectionKey) {
  if (typeof document === "undefined") return;
  // Update mobile nav buttons state
  const navBtns = document.querySelectorAll("#fallout-mobile-dock .mobile-nav-btn");
  navBtns.forEach(btn => {
    if (btn.getAttribute("data-m-target") === sectionKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const catElements = document.querySelectorAll("[data-mobile-cat]");
  
  if (sectionKey === "all") {
    catElements.forEach(el => {
      const cat = el.getAttribute("data-mobile-cat");
      if (cat !== "desktop-only") {
        el.classList.remove("m-cat-hidden");
      } else {
        el.classList.add("m-cat-hidden");
      }
    });
    ["row-core", "row-combat", "row-inv", "row-rel"].forEach(id => {
      const row = document.getElementById(id);
      if (row) row.style.display = "block";
    });
  } else {
    catElements.forEach(el => {
      const cat = el.getAttribute("data-mobile-cat");
      if (cat === sectionKey) {
        el.classList.remove("m-cat-hidden");
      } else {
        el.classList.add("m-cat-hidden");
      }
    });

    const rowMap = {
      core: ["row-core"],
      perks: ["row-core"],
      survival: ["row-core"],
      weapons: ["row-combat"],
      armors: ["row-combat"],
      inventory: ["row-inv"],
      notes: ["row-rel"]
    };

    const targetRows = rowMap[sectionKey] || ["row-core"];
    ["row-core", "row-combat", "row-inv", "row-rel"].forEach(id => {
      const row = document.getElementById(id);
      if (row) {
        row.style.display = targetRows.includes(id) ? "block" : "none";
      }
    });
  }

  // Smooth scroll to top of content on mobile switch
  if (typeof window !== "undefined" && window.innerWidth <= 900) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  try { localStorage.setItem("fallout_mobile_active_section", sectionKey); } catch(e){}
}
window.switchMobileSection = switchMobileSection;

function toggleMobileTopTools() {
  if (typeof document === "undefined") return;
  const panel = document.getElementById("header-tools-collapsible");
  const btn = document.getElementById("mobile-tools-toggle");
  if (!panel) return;
  const isOpen = panel.classList.toggle("m-tools-open");
  if (btn) {
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    const arrow = btn.querySelector(".m-toggle-arrow");
    if (arrow) arrow.textContent = isOpen ? "▲" : "▼";
  }
}
window.toggleMobileTopTools = toggleMobileTopTools;

function initMobileAccordion() {
  if (typeof document === "undefined") return;
  document.querySelectorAll(".m-collapsible").forEach(box => {
    const titleBar = box.querySelector(".box-title-bar");
    if (!titleBar || titleBar.dataset.accordionBound) return;
    titleBar.dataset.accordionBound = "true";

    titleBar.addEventListener("click", (e) => {
      if (e.target.closest("button, input, select, textarea, a, label")) return;
      if (typeof window !== "undefined" && window.innerWidth <= 900) {
        box.classList.toggle("m-box-collapsed");
      }
    });
  });
}
window.initMobileAccordion = initMobileAccordion;

// Initialize active vertical tab or mobile section on load
document.addEventListener("DOMContentLoaded", () => {
  initMobileAccordion();
  updateMobileHUD();

  if (typeof window !== "undefined" && window.innerWidth <= 900) {
    const savedMobileSection = localStorage.getItem("fallout_mobile_active_section") || "core";
    switchMobileSection(savedMobileSection);
  } else {
    const savedTab = localStorage.getItem("fallout_vtab_active") || "row-core";
    selectVerticalTab(savedTab);
  }

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 900) {
        const savedMobileSection = localStorage.getItem("fallout_mobile_active_section") || "core";
        switchMobileSection(savedMobileSection);
      } else {
        document.querySelectorAll(".m-box-collapsed").forEach(el => el.classList.remove("m-box-collapsed"));
        document.querySelectorAll(".m-cat-hidden").forEach(el => el.classList.remove("m-cat-hidden"));
        const savedTab = localStorage.getItem("fallout_vtab_active") || "row-core";
        selectVerticalTab(savedTab);
      }
    });
  }
});

window.openLevelUpModal = openLevelUpWizard;

function getStatScore(statName) {
  if (!character || !character.special) return 5;
  const val = character.special[statName];
  return (val !== undefined && val !== null) ? parseInt(val, 10) : 5;
}
window.getStatScore = getStatScore;

// Synchronize level inputs
const origOnLevelInputChange = window.onLevelInputChange;
window.onLevelInputChange = function(val) {
  const topLvl = document.getElementById("char-level");
  const coreLvl = document.getElementById("char-level-core");
  if (topLvl && topLvl.value != val) topLvl.value = val;
  if (coreLvl && coreLvl.value != val) coreLvl.value = val;
  if (typeof origOnLevelInputChange === "function") {
    origOnLevelInputChange(val);
  }
};

// =============================================================================
// INTERACTIVE QUICK SLOTS (STIMPAK, RADAWAY, TORCH, BACKPACK)
// =============================================================================
let quickItemsState = {
  stimpak: 3,
  radaway: 2,
  torchOn: true,
  backpackEquipped: true
};

function useQuickStimpak() {
  if (quickItemsState.stimpak <= 0) {
    alert("Nessun Stimpak rimasto negli slot rapidi!");
    return;
  }
  const curHpEl = document.getElementById("current-hp");
  const maxHpEl = document.getElementById("max-hp");
  if (curHpEl && maxHpEl) {
    let cur = parseInt(curHpEl.value, 10) || 0;
    let max = parseInt(maxHpEl.value, 10) || 10;
    if (cur >= max) {
      alert("Punti Ferita già al massimo!");
      return;
    }
    quickItemsState.stimpak--;
    const healed = Math.min(max, cur + 4);
    curHpEl.value = healed;
    if (character.vitals) character.vitals.hp = healed;
    const stimQtyEl = document.getElementById("quick-stimpak-qty");
    if (stimQtyEl) stimQtyEl.textContent = quickItemsState.stimpak;
    saveCharacter();
    alert(`Stimpak utilizzato! Recuperati +4 HP (Attuali: ${healed}/${max}). Stimpak rimasti: ${quickItemsState.stimpak}`);
  }
}
window.useQuickStimpak = useQuickStimpak;

function useQuickRadAway() {
  if (quickItemsState.radaway <= 0) {
    alert("Nessun RadAway rimasto negli slot rapidi!");
    return;
  }
  quickItemsState.radaway--;
  const radQtyEl = document.getElementById("quick-radaway-qty");
  if (radQtyEl) radQtyEl.textContent = quickItemsState.radaway;
  const curSpEl = document.getElementById("current-sp");
  const maxSpEl = document.getElementById("max-sp");
  if (curSpEl && maxSpEl) {
    let cur = parseInt(curSpEl.value, 10) || 0;
    let max = parseInt(maxSpEl.value, 10) || 10;
    const restored = Math.min(max, cur + 2);
    curSpEl.value = restored;
    if (character.vitals) character.vitals.sp = restored;
  }
  saveCharacter();
  alert(`RadAway utilizzato! Livello radiazioni purificato (-2 Rads). RadAway rimasti: ${quickItemsState.radaway}`);
}
window.useQuickRadAway = useQuickRadAway;

function toggleQuickLight() {
  quickItemsState.torchOn = !quickItemsState.torchOn;
  if (character.pipboy) {
    character.pipboy.flashlightActive = quickItemsState.torchOn;
  }
  syncTorchUi();
  if (typeof renderPipboy === "function" && character.pipboy && character.pipboy.owned) {
    renderPipboy();
  }
  saveCharacter();
}

function syncTorchUi() {
  const isOn = !!quickItemsState.torchOn;
  const btn = document.getElementById("btn-quick-torch");
  if (btn) {
    if (isOn) {
      btn.textContent = "ATTIVA";
      btn.style.background = "#15803d";
      btn.style.color = "#fff";
    } else {
      btn.textContent = "SPENTA";
      btn.style.background = "#64748b";
      btn.style.color = "#fff";
    }
  }
}
window.toggleQuickLight = toggleQuickLight;

function toggleQuickBackpack() {
  quickItemsState.backpackEquipped = !quickItemsState.backpackEquipped;
  const btn = document.getElementById("btn-quick-backpack");
  const label = document.getElementById("quick-backpack-label");
  const maxCarryEl = document.getElementById("carry-max");
  let baseCarry = (getStatScore("strength") * 10) + 150;
  if (quickItemsState.backpackEquipped) {
    if (btn) {
      btn.textContent = "INDOSSATO";
      btn.style.background = "var(--accent-secondary)";
    }
    if (label) label.textContent = "Zaino (+20 lbs)";
    character.carryMax = baseCarry + 20;
  } else {
    if (btn) {
      btn.textContent = "NON INDOSSATO";
      btn.style.background = "#64748b";
    }
    if (label) label.textContent = "Zaino (Rimosso)";
    character.carryMax = baseCarry;
  }
  if (maxCarryEl) maxCarryEl.value = character.carryMax;
  saveCharacter();
}
window.toggleQuickBackpack = toggleQuickBackpack;

// =============================================================================
// PIP-BOY 2d20 & COMBAT DICE ROLLER ENGINE
// =============================================================================

let diceHistory = [];

function switchDiceTab(tabName) {
  const tabs = document.querySelectorAll(".dice-tab-btn");
  tabs.forEach(t => t.classList.remove("active"));
  const btn = document.getElementById(`tab-dice-${tabName}`);
  if (btn) btn.classList.add("active");

  const panels = ["2d20", "cd", "gen"];
  panels.forEach(p => {
    const el = document.getElementById(`dice-panel-${p}`);
    if (el) el.style.display = (p === tabName) ? "block" : "none";
  });
}
window.switchDiceTab = switchDiceTab;

function populateDiceSkillSelect() {
  const skillSelect = document.getElementById("dice-skill-select");
  if (!skillSelect) return;
  skillSelect.innerHTML = "";
  
  const skillEntries = Object.entries(character.skills || {});
  if (skillEntries.length === 0) {
    const fallback = [
      { id: "smallGuns", name: "Armi Leggere", attr: "agility" },
      { id: "melee", name: "Armi da Mischia", attr: "strength" },
      { id: "heavyWeapons", name: "Armi Pesanti", attr: "strength" },
      { id: "energyWeapons", name: "Armi ad Energia", attr: "perception" },
      { id: "speech", name: "Eloquenza", attr: "charisma" },
      { id: "sneak", name: "Furtività", attr: "agility" },
      { id: "lockpick", name: "Scassinare", attr: "perception" },
      { id: "medicine", name: "Medicina", attr: "intelligence" },
      { id: "repair", name: "Riparazione", attr: "intelligence" },
      { id: "science", name: "Scienza", attr: "intelligence" },
      { id: "survival", name: "Sopravvivenza", attr: "endurance" }
    ];
    fallback.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = `${s.name} (${s.attr.substring(0,3).toUpperCase()})`;
      opt.dataset.attr = s.attr;
      skillSelect.appendChild(opt);
    });
  } else {
    skillEntries.forEach(([key, sk]) => {
      const opt = document.createElement("option");
      opt.value = key;
      const tagMark = sk.tag ? " ★" : "";
      opt.textContent = `${sk.name || key}${tagMark} [Rank ${sk.points || 0}]`;
      opt.dataset.attr = sk.attr || "agility";
      opt.dataset.tag = sk.tag ? "true" : "false";
      opt.dataset.rank = sk.points || 0;
      opt.dataset.total = sk.total || sk.points || 0;
      skillSelect.appendChild(opt);
    });
  }
  updateDiceTN();
}
window.populateDiceSkillSelect = populateDiceSkillSelect;

function updateDiceTN() {
  const statSelect = document.getElementById("dice-stat-select");
  const skillSelect = document.getElementById("dice-skill-select");
  const tnDisplay = document.getElementById("dice-tn-display");
  const tagDisplay = document.getElementById("dice-tag-display");
  if (!statSelect || !skillSelect || !tnDisplay) return;

  const statName = statSelect.value;
  const statVal = getStatScore(statName) || 5;

  const selOpt = (skillSelect.options && skillSelect.selectedIndex >= 0) ? skillSelect.options[skillSelect.selectedIndex] : null;
  let skillVal = 0;
  let isTag = false;
  if (selOpt && character.skills && character.skills[selOpt.value]) {
    const sk = character.skills[selOpt.value];
    skillVal = sk.total || sk.points || 0;
    isTag = !!sk.tag;
  }

  const tn = statVal + skillVal;
  tnDisplay.textContent = tn;

  if (tagDisplay) {
    if (isTag) {
      tagDisplay.textContent = `★ TAG SKILL (Critico con d20 ≤ ${skillVal || 1})`;
      tagDisplay.style.display = "inline";
    } else {
      tagDisplay.textContent = "";
      tagDisplay.style.display = "none";
    }
  }
}
window.updateDiceTN = updateDiceTN;

function openDiceModal(opts) {
  const modal = document.getElementById("dice-modal");
  if (!modal) return;
  modal.style.display = "flex";

  populateDiceSkillSelect();

  if (opts && opts.weapon) {
    const w = opts.weapon;
    switchDiceTab("cd");
    const countEl = document.getElementById("dice-cd-count");
    const bonusEl = document.getElementById("dice-cd-bonus");
    const nameEl = document.getElementById("dice-cd-weapon-name");
    
    const b = typeof calculateWeaponTacticalBreakdown === "function" ? calculateWeaponTacticalBreakdown(w) : null;
    if (opts.mode === "attack") {
      switchDiceTab("2d20");
      const bonusEl = document.getElementById("dice-2d20-bonus") || document.getElementById("dice-d20-bonus");
      if (bonusEl && b) bonusEl.value = b.netHit;
      const targetEl = document.getElementById("dice-2d20-target");
      if (targetEl && b) targetEl.value = Math.max(10, 10 + b.netHit);
    } else {
      switchDiceTab("cd");
      let diceCount = 2;
      let flatBonus = b ? b.netDmgFlat : 0;
      if (w.damage) {
        const m = String(w.damage).match(/(\d+)\s*(?:cd|d|dadi)?/i);
        if (m) diceCount = parseInt(m[1], 10);
      }
      if (countEl) countEl.value = diceCount;
      if (bonusEl) bonusEl.value = flatBonus;
      if (nameEl) nameEl.value = w.name || "";
    }
  } else if (opts && opts.mode === "cd") {
    switchDiceTab("cd");
  } else {
    switchDiceTab("2d20");
  }
}
window.openDiceModal = openDiceModal;

function closeDiceModal() {
  const modal = document.getElementById("dice-modal");
  if (modal) modal.style.display = "none";
}
window.closeDiceModal = closeDiceModal;

function roll2d20Check() {
  const statSelect = document.getElementById("dice-stat-select");
  const skillSelect = document.getElementById("dice-skill-select");
  const diffSelect = document.getElementById("dice-diff-select");
  const poolSelect = document.getElementById("dice-pool-count");
  const resArea = document.getElementById("dice-results-2d20");
  if (!statSelect || !skillSelect || !resArea) return;

  const statName = statSelect.value;
  const statScore = getStatScore(statName) || 5;
  const skillKey = skillSelect.value;
  const skillData = (character.skills && character.skills[skillKey]) || { points: 0, tag: false, total: 0 };
  const skillScore = skillData.total || skillData.points || 0;
  const tn = statScore + skillScore;
  const isTag = !!skillData.tag;
  const critThreshold = isTag ? Math.max(1, skillScore) : 1;
  const diff = parseInt(diffSelect.value, 10) || 1;
  const numDice = parseInt(poolSelect.value, 10) || 2;

  // ANIMATION: Animated dice tumblers rapidly cycling values
  let animationHtml = "";
  for (let i = 0; i < numDice; i++) {
    animationHtml += `
      <div class="die-card dice-rolling" id="anim-d20-${i}">
        <div class="die-val" style="font-size:25px; font-weight:900; font-family:var(--font-mono); color:var(--accent-secondary, #2563eb);">🎲</div>
        <div style="font-size:11px; font-weight:800; text-transform:uppercase; margin-top:2px; color:var(--text-dim);">LANCIO...</div>
      </div>
    `;
  }
  resArea.innerHTML = `<div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center; padding:14px 0;">${animationHtml}</div>`;

  const rollBtn = (typeof event !== "undefined" && event && event.target && event.target.tagName === "BUTTON") ? event.target : null;
  if (rollBtn) rollBtn.disabled = true;

  const animInterval = setInterval(() => {
    for (let i = 0; i < numDice; i++) {
      const el = document.getElementById(`anim-d20-${i}`);
      if (el) {
        const valEl = el.querySelector(".die-val");
        if (valEl) valEl.textContent = Math.floor(Math.random() * 20) + 1;
      }
    }
  }, 45);

  setTimeout(() => {
    clearInterval(animInterval);
    if (rollBtn) rollBtn.disabled = false;

    let rolls = [];
    let successes = 0;
    let complications = 0;

    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * 20) + 1;
      let dieSuccesses = 0;
      let isCrit = false;
      let isComp = (roll === 20);

      if (roll <= tn) {
        if (roll <= critThreshold) {
          dieSuccesses = 2;
          isCrit = true;
        } else {
          dieSuccesses = 1;
        }
      }
      if (isComp) complications++;
      successes += dieSuccesses;

      rolls.push({ roll, dieSuccesses, isCrit, isComp });
    }

    const isSuccess = successes >= diff;
    const apGenerated = Math.max(0, successes - diff);

    let pillsHtml = rolls.map((r, i) => {
      let stateClass = r.isCrit ? "is-crit" : r.isComp ? "is-comp" : r.dieSuccesses > 0 ? "is-success" : "";
      let badge = r.isCrit ? "★ CRIT (2)" : r.dieSuccesses === 1 ? "✓ (1)" : r.isComp ? "⚠️ COMPLICAZIONE" : "✕ (0)";

      return `
        <div class="die-card dice-landed ${stateClass}">
          <div style="font-size:25px; font-weight:900; font-family:var(--font-mono);">${r.roll}</div>
          <div style="font-size:11px; font-weight:800; text-transform:uppercase; margin-top:2px;">${badge}</div>
        </div>
      `;
    }).join("");

    const outcomeBanner = isSuccess ? `
      <div style="background:#15803d; color:#fff; border-radius:6px; padding:10px 14px; font-weight:bold; display:flex; justify-content:space-between; align-items:center; animation:diceLand 0.3s ease;">
        <span style="font-size:16px; letter-spacing:0.5px;">✓ PROVA RIUSCITA! (${successes} Successi vs Diff ${diff})</span>
        <span style="background:#22c55e; color:#064e3b; padding:4px 8px; border-radius:4px; font-size:13px; font-weight:900;">+${apGenerated} Punti Azione (AP)</span>
      </div>` : `
      <div style="background:#b91c1c; color:#fff; border-radius:6px; padding:10px 14px; font-weight:bold; display:flex; justify-content:space-between; align-items:center; animation:diceLand 0.3s ease;">
        <span style="font-size:16px; letter-spacing:0.5px;">✕ PROVA FALLITA (${successes} Successi vs Diff ${diff})</span>
        <span style="font-size:13px; opacity:0.9;">Servivano ${diff} successi</span>
      </div>`;

    const complBanner = complications > 0 ? `
      <div style="background:#fef2f2; color:#b91c1c; border:1.5px solid #f87171; border-radius:6px; padding:8px 12px; font-size:13px; font-weight:bold; margin-top:6px; animation:compFlash 1.2s ease;">
        ⚠️ ${complications} COMPLICAZIONE/I GENERATE! Il GM introduce un imprevisto narrativo o spende AP oscuri.
      </div>` : "";

    resArea.innerHTML = `
      <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center; padding:10px 0;">
        ${pillsHtml}
      </div>
      ${outcomeBanner}
      ${complBanner}
    `;

    const timeStr = new Date().toLocaleTimeString();
    const selText = (skillSelect.options && skillSelect.selectedIndex >= 0 && skillSelect.options[skillSelect.selectedIndex]?.text) || skillKey;
    const skillName = selText.split("[")[0];
    addDiceLogEntry(`[${timeStr}] 2d20 Prova ${skillName} (TN ${tn}, Diff ${diff}): Dadi [${rolls.map(r=>r.roll).join(", ")}] → ${successes} Successi (${isSuccess ? "RIUSCITO +"+apGenerated+" AP" : "FALLITO"})${complications ? " ⚠️ "+complications+" Compl." : ""}`);
  }, 480);
}
window.roll2d20Check = roll2d20Check;

function rollCombatDice() {
  const countEl = document.getElementById("dice-cd-count");
  const bonusEl = document.getElementById("dice-cd-bonus");
  const nameEl = document.getElementById("dice-cd-weapon-name");
  const resArea = document.getElementById("dice-results-cd");
  if (!countEl || !resArea) return;

  const count = Math.max(1, Math.min(30, parseInt(countEl.value, 10) || 1));
  const bonus = parseInt(bonusEl.value, 10) || 0;
  const weaponName = (nameEl && nameEl.value.trim()) || "Attacco";

  // ANIMATION: Animated dice tumblers rapidly cycling symbols
  const symbols = ["💥 1", "💥💥 2", "⭐ 1+EFF", "⚪ 0", "—"];
  let animHtml = "";
  for (let i = 0; i < count; i++) {
    animHtml += `
      <div class="die-card dice-rolling" id="anim-cd-${i}">
        <div class="die-cd-icon" style="font-size:21px; font-weight:900;">💥</div>
        <div class="die-cd-lbl" style="font-size:11px; font-weight:800; text-transform:uppercase; margin-top:2px;">ROLL...</div>
      </div>
    `;
  }
  resArea.innerHTML = `<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; padding:12px 0;">${animHtml}</div>`;

  const rollBtn = (typeof event !== "undefined" && event && event.target && event.target.tagName === "BUTTON") ? event.target : null;
  if (rollBtn) rollBtn.disabled = true;

  const animInterval = setInterval(() => {
    for (let i = 0; i < count; i++) {
      const el = document.getElementById(`anim-cd-${i}`);
      if (el) {
        const iconEl = el.querySelector(".die-cd-icon");
        const lblEl = el.querySelector(".die-cd-lbl");
        const rSym = symbols[Math.floor(Math.random() * symbols.length)];
        if (iconEl) iconEl.textContent = rSym.split(" ")[0];
        if (lblEl) lblEl.textContent = rSym;
      }
    }
  }, 40);

  setTimeout(() => {
    clearInterval(animInterval);
    if (rollBtn) rollBtn.disabled = false;

    let dice = [];
    let totalDmg = bonus;
    let totalEffects = 0;

    for (let i = 0; i < count; i++) {
      const val = Math.floor(Math.random() * 6) + 1;
      let dmg = 0;
      let eff = 0;
      let label = "0";
      let icon = "⚪";

      if (val === 1) {
        dmg = 1;
        label = "1 DANNO";
        icon = "💥";
      } else if (val === 2) {
        dmg = 2;
        label = "2 DANNI";
        icon = "💥💥";
      } else if (val === 5 || val === 6) {
        dmg = 1;
        eff = 1;
        label = "1 DANNO + EFF";
        icon = "⭐ 1+EFF";
      } else {
        dmg = 0;
        label = "BIANCO";
        icon = "—";
      }

      totalDmg += dmg;
      totalEffects += eff;
      dice.push({ val, dmg, eff, label, icon });
    }

    let diceHtml = dice.map(d => {
      let stateClass = d.eff > 0 ? "is-crit" : d.dmg > 0 ? "is-success" : "";
      return `
        <div class="die-card dice-landed ${stateClass}">
          <div style="font-size:19px; font-weight:900;">${d.icon}</div>
          <div style="font-size:11px; font-weight:800; text-transform:uppercase; margin-top:2px;">${d.label}</div>
          <div style="font-size:10.5px; opacity:0.75; font-family:var(--font-mono);">d6: ${d.val}</div>
        </div>
      `;
    }).join("");

    resArea.innerHTML = `
      <div style="background:var(--bg-tertiary); border:1.5px solid var(--border-color); border-radius:6px; padding:12px 16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; animation:diceLand 0.3s ease;">
        <div>
          <div style="font-size:12px; text-transform:uppercase; font-weight:bold; color:var(--text-dim);">${weaponName} • ${count} CD ${bonus ? "+ "+bonus+" fisso" : ""}</div>
          <div style="font-size:27px; font-weight:900; color:#b91c1c; font-family:var(--font-display);">
            💥 ${totalDmg} DANNO TOTALE
          </div>
        </div>
        <div style="background:#fef3c7; border:1.5px solid #f59e0b; border-radius:6px; padding:8px 16px; text-align:center;">
          <div style="font-size:11px; font-weight:800; color:#b45309; text-transform:uppercase;">EFFETTI SPECIALI</div>
          <div style="font-size:25px; font-weight:900; color:#92400e;">⭐ ${totalEffects}</div>
        </div>
      </div>
      <div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:center; padding:12px 0;">
        ${diceHtml}
      </div>
    `;

    const timeStr = new Date().toLocaleTimeString();
    addDiceLogEntry(`[${timeStr}] Danno CD ${weaponName}: ${count} CD ${bonus ? "+"+bonus : ""} → ${totalDmg} Danni Totali, ⭐ ${totalEffects} Effetti.`);
  }, 480);
}
window.rollCombatDice = rollCombatDice;

function rollGenericDie(sides) {
  const resArea = document.getElementById("dice-results-gen");
  if (!resArea) return;

  // Animation phase
  resArea.innerHTML = `
    <div class="die-card dice-rolling" style="display:inline-flex; align-items:center; gap:14px; padding:12px 20px;">
      <span style="font-size:13px; font-weight:bold; text-transform:uppercase; color:var(--text-dim);">Tiro d${sides}:</span>
      <span id="anim-gen-val" style="font-size:31px; font-weight:900; color:var(--accent-secondary); font-family:var(--font-mono);">🎲</span>
    </div>
  `;

  const animInterval = setInterval(() => {
    const valEl = document.getElementById("anim-gen-val");
    if (valEl) valEl.textContent = Math.floor(Math.random() * sides) + 1;
  }, 40);

  setTimeout(() => {
    clearInterval(animInterval);
    const roll = Math.floor(Math.random() * sides) + 1;
    resArea.innerHTML = `
      <div class="die-card dice-landed" style="display:inline-flex; align-items:center; gap:14px; padding:12px 24px; border-color:var(--accent-secondary);">
        <span style="font-size:13px; font-weight:bold; text-transform:uppercase; color:var(--text-dim);">Tiro d${sides}:</span>
        <span style="font-size:33px; font-weight:900; color:var(--accent-secondary); font-family:var(--font-mono);">${roll}</span>
      </div>
    `;
    const timeStr = new Date().toLocaleTimeString();
    addDiceLogEntry(`[${timeStr}] Dado Standard d${sides} → Risultato: ${roll}`);
  }, 400);
}
window.rollGenericDie = rollGenericDie;

// Global ESC key listener to close dice modal or active overlay
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    const diceModal = document.getElementById("dice-modal");
    if (diceModal && diceModal.style.display !== "none") {
      closeDiceModal();
    }
  }
});

function addDiceLogEntry(msg) {
  diceHistory.unshift(msg);
  if (diceHistory.length > 20) diceHistory.pop();
  renderDiceLog();
}

function renderDiceLog() {
  const container = document.getElementById("dice-history-log");
  if (!container) return;
  container.innerHTML = diceHistory.map(entry => `
    <div style="padding:3px 6px; border-bottom:1px solid var(--border-color); color:var(--text-bright);">
      ${entry}
    </div>
  `).join("") || `<div style="color:var(--text-dim); padding:4px;">Nessun tiro recente.</div>`;
}

function clearDiceLog() {
  diceHistory = [];
  renderDiceLog();
}
window.clearDiceLog = clearDiceLog;



function startNewCharacter() {
  const confirmed = confirm("Vuoi iniziare la creazione di un NUOVO PERSONAGGIO?\n\n- Premi OK per avviare il Wizard di Creazione guidato (Nome -> Razza -> Background con abilità tag).\n- Premi ANNULLA per rimanere sul personaggio attuale.\n\n[Suggerimento]: Se vuoi conservare questo personaggio, assicurati di aver cliccato 'SALVA FILE' prima di procedere!");
  if (!confirmed) return;

  if (typeof openCreationWizard === "function") {
    openCreationWizard();
  } else {
    character = JSON.parse(JSON.stringify(DEFAULT_CHARACTER));
    loadCharacter();
    renderAll();
    updateDerivedValues();
    saveCharacter();
    alert("Nuovo personaggio inizializzato!");
  }
}
window.startNewCharacter = startNewCharacter;

// Global Window & CommonJS Exports
if (typeof window !== 'undefined') {
  window.recalcSkills = recalcSkills;
  window.updateDerivedValues = updateDerivedValues;
  window.renderWeapons = renderWeapons;
  window.character = character;
  window.toggleRacialLanguageMode = toggleRacialLanguageMode;
  window.togglePerkCardLang = togglePerkCardLang;
  window.onRaceChange = onRaceChange;
  window.onRaceVariantChange = onRaceVariantChange;
  window.syncRacialPerksAndBonuses = syncRacialPerksAndBonuses;
  window.renderRacialBonuses = renderRacialBonuses;
  window.renderPerks = renderPerks;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    character,
    recalcSkills,
    updateDerivedValues,
    renderWeapons,
    calculateWeaponTacticalBreakdown,
    getSurvivalMaluses,
    setSurvivalLevel,
    openDiceModal,
    toggleRacialLanguageMode,
    togglePerkCardLang,
    onRaceChange,
    onRaceVariantChange,
    syncRacialPerksAndBonuses,
    switchMobileSection,
    initMobileAccordion,
    updateMobileHUD,
    toggleMobileTopTools
  };
}

window.hasPerkOrTrait = hasPerkOrTrait;
window.toggleNemeanImplant = toggleNemeanImplant;
window.advanceNemeanRound = advanceNemeanRound;
window.openNemeanConfigModal = openNemeanConfigModal;
window.closeNemeanConfigModal = closeNemeanConfigModal;
window.updateNemeanCount = updateNemeanCount;
window.saveNemeanConfig = saveNemeanConfig;
window.toggleChemBuff = toggleChemBuff;
window.showToast = showToast;
window.switchMobileSection = switchMobileSection;
window.initMobileAccordion = initMobileAccordion;
window.updateMobileHUD = updateMobileHUD;
window.toggleMobileTopTools = toggleMobileTopTools;
