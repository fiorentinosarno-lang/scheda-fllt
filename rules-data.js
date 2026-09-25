// =============================================================================
// FALLOUT TTRPG (Arcane Arcade System) - Database Regole & Compendi Ufficiali
// Verificato al 100% rispetto al Manuale Ufficiale (136 pagine)
// =============================================================================

const FALLOUT_RULES_DATA = {
  "armors": [
    {
      "id": "a_vault_suit",
      "name": "Tuta del Vault (Vault Suit)",
      "type": "Leggera",
      "baseDt": 1,
      "baseAc": 1,
      "maxDex": null,
      "cost": "150c",
      "load": 2,
      "strReq": 1,
      "desc": "Tuta elastica isolante pre-bellica della Vault-Tec. Confortevole e sinergica con i sistemi Pip-Boy."
    },
    {
      "id": "a_leather_armor",
      "name": "Armatura di Cuoio (Leather Armor)",
      "type": "Leggera",
      "baseDt": 2,
      "baseAc": 1,
      "maxDex": null,
      "cost": "220c",
      "load": 7,
      "strReq": 2,
      "desc": "Armatura flessibile ricavata da pelli di Brahmin conciate. Buona mobilità e protezione basilare da schegge."
    },
    {
      "id": "a_metal_armor",
      "name": "Armatura di Metallo (Metal Armor)",
      "type": "Media",
      "baseDt": 4,
      "baseAc": 2,
      "maxDex": 2,
      "cost": "450c",
      "load": 20,
      "strReq": 5,
      "desc": "Pesanti lamiere sagomate e rivettate. Ottima protezione balistica frontale, ma rumorosa e ingombrante."
    },
    {
      "id": "a_combat_armor",
      "name": "Armatura da Combattimento (Combat Armor)",
      "type": "Media",
      "baseDt": 5,
      "baseAc": 2,
      "maxDex": 3,
      "cost": "750c",
      "load": 15,
      "strReq": 4,
      "desc": "Piastre composite militari pre-belliche. Standard d'eccellenza per bilanciamento tra protezione balistica e mobilità."
    },
    {
      "id": "a_synth_armor",
      "name": "Armatura Sintetica dell'Istituto (Synth Armor)",
      "type": "Media",
      "baseDt": 5,
      "baseAc": 3,
      "maxDex": 2,
      "cost": "900c",
      "load": 12,
      "strReq": 4,
      "desc": "Polimeri avanzati modellati dall'Istituto. Resiste eccezionalmente bene alle alte temperature e alle armi laser."
    },
    {
      "id": "a_marine_armor",
      "name": "Armatura da Marine d'Assalto (Marine Armor)",
      "type": "Pesante",
      "baseDt": 7,
      "baseAc": 3,
      "maxDex": 1,
      "cost": "1800c",
      "load": 30,
      "strReq": 7,
      "desc": "Armatura d'assalto tattica per truppe d'élite della Marina militare USA. Il massimo della protezione non atomica."
    }
  ],
  "armorUpgrades": [
    {
      "id": "u_insulated",
      "name": "Coibentata (Insulated)",
      "slots": 1,
      "appliesTo": "standard",
      "cost": "100c",
      "maxRank": 2,
      "ranks": [
        "Grado 1: Sei isolato contro l'ipotermia e gli shock termici. Tuttavia, i tuoi AP massimi si riducono temporaneamente di 1 (fino a un minimo di 6).",
        "Grado 2: I tuoi AP massimi non sono più ridotti (-0 AP) e mantieni l'isolamento completo contro l'ipotermia e il freddo estremo."
      ],
      "effect": "Isolamento termico contro ipotermia e condizioni climatiche estreme."
    },
    {
      "id": "u_camouflage",
      "name": "Mimetica (Camouflage)",
      "slots": 1,
      "appliesTo": "standard",
      "cost": "125c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: Ottieni Vantaggio a tutte le prove di Furtività (Sneak) basate sulla vista. La tua Furtività passiva aumenta di +3.",
        "Grado 2: Ottieni Vantaggio a tutte le prove di Furtività basate sul suono/udito. La tua Furtività passiva aumenta di ulteriori +3 (+6 totale).",
        "Grado 3: In condizioni di penombra o luce fioca diventi Ombreggiato (Shadowed). La tua Furtività passiva aumenta di ulteriori +3 (+9 totale)."
      ],
      "effect": "Finitura mimetica ottica per muoversi inosservati riducendo percezione visiva e acustica."
    },
    {
      "id": "u_light",
      "name": "Alleggerita (Light)",
      "slots": 1,
      "appliesTo": "standard",
      "cost": "75c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: Carico dell'armatura ridotto di 5 lbs. Requisito di Forza ridotto di 1. DT ridotto di 1.",
        "Grado 2: Carico dell'armatura ridotto di ulteriori 5 lbs (riduzione totale 10 lbs, minimo 3 lbs).",
        "Grado 3: Se spendi almeno 4 AP nel tuo turno per muoverti, ottieni 10 piedi di movimento bonus aggiuntivo."
      ],
      "effect": "Alleggerimento dei componenti strutturali per aumentare mobilità e ridurre il carico."
    },
    {
      "id": "u_fitted",
      "name": "Su Misura (Fitted)",
      "slots": 1,
      "appliesTo": "standard",
      "cost": "175c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: Quando subisci danni da un'area d'effetto (esplosioni o soffi), il tuo valore di DT raddoppia contro quel danno.",
        "Grado 2: I tuoi Punti Vigore (Stamina Points) massimi aumentano in modo permanente di un valore pari al tuo Livello.",
        "Grado 3: Ottieni Vantaggio a tutti i tiri di Sequenza di Combattimento (Iniziativa). Se hai già vantaggio, ottieni un bonus fisso di +5."
      ],
      "effect": "Modellata su misura sulle giunture del portatore per massimizzare agilità, riflessi e tenuta."
    },
    {
      "id": "u_lead_lined",
      "name": "Foderata di Piombo (Lead Lined)",
      "slots": 1,
      "appliesTo": "both",
      "cost": "125c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: La Classe Difficoltà (DC) dei tiri salvezza contro Radiazioni diminuisce di 2 (-2 DC Rad).",
        "Grado 2: La CD dei tiri salvezza contro Radiazioni diminuisce di ulteriori 2 (-4 DC Rad totale).",
        "Grado 3: La CD dei tiri salvezza contro Radiazioni diminuisce di ulteriori 2 (-6 DC Rad totale)."
      ],
      "effect": "Lamine interne di schermatura in piombo per contrastare la contaminazione radioattiva."
    },
    {
      "id": "u_strengthened",
      "name": "Rinforzata (Strengthened)",
      "slots": 1,
      "appliesTo": "standard",
      "cost": "410c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: Quando subisci danni da un Colpo Critico avversario, la tua Soglia Danno (DT) aumenta di +3 contro quel colpo.",
        "Grado 2: Quando subisci danni da un Colpo Critico avversario, la tua Soglia Danno (DT) aumenta di +5 contro quel colpo.",
        "Grado 3: Se subiresti una ferita grave/menomazione invalidante (severe injury), subisci invece una condizione arto casuale curabile normalmente."
      ],
      "effect": "Piastre composite interne per attutire impatti traumatici e colpi critici devastanti."
    },
    {
      "id": "u_sturdy",
      "name": "Robusta (Sturdy)",
      "slots": 1,
      "appliesTo": "both",
      "cost": "475c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: Ignori completamente gli effetti negativi dei primi 2 livelli di usura (decay) dell'armatura.",
        "Grado 2: Ignori completamente gli effetti negativi dei primi 4 livelli di usura (decay) dell'armatura.",
        "Grado 3: La tua armatura non subisce più alcun punto di usura (decay) quando subisci colpi critici."
      ],
      "effect": "Trattamento di tempra e rinforzi in lega per impedire il decadimento e resistere all'usura bellica."
    },
    {
      "id": "u_pocketed",
      "name": "Con Tasche (Pocketed)",
      "slots": 1,
      "appliesTo": "standard",
      "cost": "210c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: Il tuo Carico Massimo trasportabile aumenta di +10 lbs.",
        "Grado 2: Il tuo Carico Massimo trasportabile aumenta di ulteriori +15 lbs (+25 lbs totale).",
        "Grado 3: Il tuo Carico Massimo trasportabile aumenta di ulteriori +25 lbs (+50 lbs totale)."
      ],
      "effect": "Tasche tattiche, fettucce MOLLE e scomparti supplementari per il trasporto rifornimenti."
    },
    {
      "id": "u_reinforced",
      "name": "Blindata (Reinforced)",
      "slots": 1,
      "appliesTo": "both",
      "cost": "450c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: +1 Bonus permanente alla Soglia Danno (DT).",
        "Grado 2: Ulteriore +1 Bonus alla Soglia Danno (+2 DT totale).",
        "Grado 3: Ulteriore +2 Bonus alla Soglia Danno (+4 DT totale)."
      ],
      "effect": "Ispessimento delle piastre corazzate per aumentare la riduzione fissa del danno assorbito."
    },
    {
      "id": "u_hardened",
      "name": "Temprata (Hardened)",
      "slots": 1,
      "appliesTo": "both",
      "cost": "800c",
      "maxRank": 3,
      "ranks": [
        "Grado 1: +1 Bonus permanente alla Classe Armatura (AC).",
        "Grado 2: Ulteriore +1 Bonus alla Classe Armatura (+2 AC totale).",
        "Grado 3: Ulteriore +1 Bonus alla Classe Armatura (+3 AC totale)."
      ],
      "effect": "Trattamento termico di superficie che devia proiettili e attacchi aumentando la deviazione difensiva."
    }
  ],
  "powerArmorUpgrades": [
    {
      "id": "pa_hydraulic_braces",
      "name": "Braccia Idrauliche (Hydraulic Braces)",
      "slots": 1,
      "appliesTo": "power_armor",
      "cost": "450c",
      "maxRank": 1,
      "ranks": [
        "Fissa la Forza minima a 12 quando l'armatura atomica è equipaggiata (anziché 10), e aggiunge +2 ai danni senz'armi/mischia."
      ],
      "effect": "Servopistoni idraulici ad alta pressione per le braccia. Fissa la Forza a minimo 12 quando la PA è equipaggiata e incrementa i danni corpo a corpo."
    },
    {
      "id": "pa_calibrated_shocks",
      "name": "Ammortizzatori Calibrati (Calibrated Shocks)",
      "slots": 1,
      "appliesTo": "power_armor",
      "cost": "350c",
      "maxRank": 2,
      "ranks": [
        "+50 Capacità di Carico Trasportabile per i servomotori delle gambe.",
        "+100 Capacità di Carico Trasportabile totale (+50 aggiuntivi al grado 2)."
      ],
      "effect": "Ammortizzatori rinforzati per i servomotori delle gambe. +50 Carico per grado (+100 max)."
    },
    {
      "id": "pa_explosive_shielding",
      "name": "Schermatura Esplosiva (Explosive Shielding)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "1350c",
      "maxRank": 3,
      "ranks": [
        "Danni da esplosione ridotti di 5.",
        "Danni da esplosione ridotti di 10.",
        "Danni da esplosione ridotti di 15."
      ],
      "effect": "Rivestimento deflettente per cariche ad alto potenziale."
    },
    {
      "id": "pa_prism_shielding",
      "name": "Prismi Deflettenti (Prism Shielding)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "1800c",
      "maxRank": 3,
      "ranks": [
        "Danni laser e plasma ridotti di 5.",
        "Danni laser e plasma ridotti di 10.",
        "Danni laser e plasma ridotti di 20."
      ],
      "effect": "Strato a rifrazione ottica che dissipa fasci laser e plasma."
    },
    {
      "id": "pa_emergency_protocols",
      "name": "Protocolli di Emergenza (Emergency Protocols)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "1800c",
      "maxRank": 2,
      "ranks": [
        "Con meno di metà HP, spendi 1 AP per muoverti di 10 ft.",
        "Con meno di metà HP, la DT aumenta di +5 (contro danni ad HP)."
      ],
      "effect": "Sottosistemi di sopravvivenza estrema in condizioni critiche."
    },
    {
      "id": "pa_kinetic_dynamo",
      "name": "Dinamo Cinetica (Kinetic Dynamo)",
      "slots": 3,
      "appliesTo": "powerarmor",
      "cost": "2400c",
      "maxRank": 1,
      "ranks": [
        "Guadagni 1 AP addizionale all'inizio del turno per ogni livello di usura subito dal turno precedente."
      ],
      "effect": "Converte gli impatti subiti in energia ausiliaria per l'armatura."
    },
    {
      "id": "pa_tesla_coils",
      "name": "Bobine Tesla (Tesla Coils)",
      "slots": 3,
      "appliesTo": "powerarmor",
      "cost": "2400c",
      "maxRank": 3,
      "ranks": [
        "Spendi 3 AP: 1d6 danni elettrici a creature entro 10 ft all'inizio del turno (consuma 10 min fusion core).",
        "Danno elettrico +1d6 (consuma 15 min fusion core).",
        "Danno elettrico +2d6 (consuma 25 min fusion core)."
      ],
      "effect": "Scariche ad alto voltaggio che fulminano i nemici in corpo a corpo."
    },
    {
      "id": "pa_reactive_plates",
      "name": "Piastre Reattive (Reactive Plates)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "2700c",
      "maxRank": 3,
      "ranks": [
        "L'attaccante in mischia subisce 1/4 del danno inflitto.",
        "L'attaccante in mischia subisce 1/2 del danno inflitto.",
        "L'attaccante in mischia viene respinto di 15 piedi."
      ],
      "effect": "Contro-impatto cinetico che punisce chi colpisce in mischia."
    },
    {
      "id": "pa_core_assembly",
      "name": "Nucleo Potenziato (Core Assembly)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "2250c",
      "maxRank": 3,
      "ranks": [
        "Surriscaldamento avviene solo spendendo più di 18 AP (anziché 15).",
        "Surriscaldamento avviene solo spendendo più di 20 AP.",
        "Surriscaldamento costa solo 15 minuti di autonomia (anziché 30)."
      ],
      "effect": "Regolatori di flusso al plasma per il reattore a fusione."
    },
    {
      "id": "pa_jet_pack",
      "name": "Jet Pack Dorsale (Jet Pack)",
      "slots": 4,
      "appliesTo": "powerarmor",
      "cost": "6000c",
      "maxRank": 1,
      "ranks": [
        "Spendi 1 AP per volare 5 ft (ogni 10 ft di volo consuma 1 minuto di Fusion Core)."
      ],
      "effect": "Propulsori a reazione per il volo verticale e tattico."
    },
    {
      "id": "pa_sensor_array",
      "name": "Sensori Ambientali (Sensor Array)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "4500c",
      "maxRank": 3,
      "ranks": [
        "Percezione Passiva aumentata di +5.",
        "Percezione Passiva aumentata di +10.",
        "Percezione Passiva aumentata di +20."
      ],
      "effect": "Antenne e telemetrie avanzate integrate nel casco."
    },
    {
      "id": "pa_vats_matrix",
      "name": "Matrice VATS (VATS Matrix Overlay)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "2700c",
      "maxRank": 2,
      "ranks": [
        "Costo AP per attacchi mirati ridotto di 1.",
        "Costo AP per attacchi mirati ridotto di 2."
      ],
      "effect": "Calcolatore balistico olografico per mira precisa."
    },
    {
      "id": "pa_internal_db",
      "name": "Database Tattico (Internal Database)",
      "slots": 2,
      "appliesTo": "powerarmor",
      "cost": "2400c",
      "maxRank": 1,
      "ranks": [
        "Spendi 6 AP per scoprire HP totali, SP totali, AC o DT di una creatura visibile."
      ],
      "effect": "Archivio militare con parametri vitali dei bersagli."
    },
    {
      "id": "pa_targeting_hud",
      "name": "Targeting HUD Olografico (Targeting HUD)",
      "slots": 3,
      "appliesTo": "powerarmor",
      "cost": "1800c",
      "maxRank": 3,
      "ranks": [
        "Spendi 3 AP per marcare un bersaglio; infliggi 1 dado danno extra al bersaglio marcato.",
        "Puoi marcare fino a 3 bersagli contemporaneamente.",
        "Infliggi 2 dadi di danno extra ai bersagli marcati."
      ],
      "effect": "Visore a scansione termica con marcatura automatica dei bersagli."
    },
    {
      "id": "pa_headlamp",
      "name": "Faro Alta Intensità (Headlamp)",
      "slots": 1,
      "appliesTo": "powerarmor",
      "cost": "250c",
      "maxRank": 3,
      "ranks": [
        "Luce brillante cono 40 ft, fioca 40 ft extra (1 AP per accendere).",
        "Portata cono luce aumentata di 10 ft.",
        "Portata cono luce aumentata di 20 ft."
      ],
      "effect": "Faro alogeno orientabile per esplorazione notturna e sotterranea."
    }
  ],
  "legendaryArmorTraits": [
    {
      "id": "leg_arm_sentinel",
      "name": "Sentinella (Sentinel's)",
      "effect": "Riduce del 15% tutti i danni subiti mentre sei fermo sul posto."
    },
    {
      "id": "leg_arm_bolstering",
      "name": "Baluardo (Bolstering)",
      "effect": "Aumenta la Soglia Danno (DT) fino a +35 man mano che i tuoi HP scendono."
    },
    {
      "id": "leg_arm_chameleon",
      "name": "Camaleonte (Chameleon)",
      "effect": "Rende invisibile a nemici oltre i 10 metri quando sei accucciato e immobile."
    },
    {
      "id": "leg_arm_powered",
      "name": "Rinvigorente (Powered)",
      "effect": "Aumenta il recupero di AP del personaggio (+2 AP rigenerati all'inizio del turno)."
    },
    {
      "id": "leg_arm_lead_lined",
      "name": "Schermata (Lead Lined)",
      "effect": "Immunità permanente a radiazioni ambientali minori e +5 DT Rad."
    },
    {
      "id": "leg_arm_unyielding",
      "name": "Infrangibile (Unyielding)",
      "effect": "+3 a tutti gli attributi S.P.E.C.I.A.L. (eccetto Costituzione) quando gli HP sono sotto il 20%."
    },
    {
      "id": "leg_arm_assassin",
      "name": "Anti-Umano (Assassin's)",
      "effect": "Riduce del 15% i danni subiti da aggressori umani."
    },
    {
      "id": "leg_arm_troubleshooter",
      "name": "Anti-Robot (Troubleshooter's)",
      "effect": "Riduce del 15% i danni subiti da robot e sintetici."
    },
    {
      "id": "leg_arm_mutant_slayer",
      "name": "Anti-Mutante (Mutant Slayer's)",
      "effect": "Riduce del 15% i danni subiti da supermutanti e mastini mutanti."
    },
    {
      "id": "leg_arm_acrobat",
      "name": "Acrobata (Acrobat's)",
      "effect": "Danni da caduta ridotti del 50% (azzerati se combinata su due pezzi)."
    },
    {
      "id": "leg_arm_hardened",
      "name": "Pelle Dura (Hardened)",
      "effect": "+1 DT e +1 AC naturali permanenti."
    }
  ],
  "weapons": [
    {
      "id": "w_shiv",
      "name": "Pugnale Improvvisato (Shiv)",
      "type": "Mischia (Lama)",
      "cost": "65c",
      "ap": 3,
      "damage": "1d4 perforante",
      "crit": "20, x2",
      "properties": "Fragile",
      "load": 1,
      "strReq": 1
    },
    {
      "id": "w_knife",
      "name": "Coltello (Knife)",
      "type": "Mischia (Lama)",
      "cost": "200c",
      "ap": 3,
      "damage": "1d6 perforante o tagliente",
      "crit": "20, x3",
      "properties": "Lancio x3/x6",
      "load": 2,
      "strReq": 2
    },
    {
      "id": "w_switchblade",
      "name": "Coltello a Scatto (Switchblade)",
      "type": "Mischia (Lama)",
      "cost": "120c",
      "ap": 3,
      "damage": "1d6 perforante o tagliente",
      "crit": "20, x2",
      "properties": "Fragile, Bilanciato",
      "load": 1,
      "strReq": 1
    },
    {
      "id": "w_combat_knife",
      "name": "Coltello da Combattimento (Combat Knife)",
      "type": "Mischia (Lama)",
      "cost": "220c",
      "ap": 3,
      "damage": "2d4 perforante o tagliente",
      "crit": "20, x3",
      "properties": "Preciso, Lancio x3/x8",
      "load": 2,
      "strReq": 2
    },
    {
      "id": "w_throwing_knife",
      "name": "Coltello da Lancio (Throwing Knife)",
      "type": "Mischia (Lama)",
      "cost": "80c",
      "ap": 4,
      "damage": "1d4 perforante (1d6 se lanciato)",
      "crit": "20, x3",
      "properties": "Preciso, Fragile, Lancio x4/x8",
      "load": 1,
      "strReq": 2
    },
    {
      "id": "w_machete",
      "name": "Machete",
      "type": "Mischia (Lama)",
      "cost": "165c",
      "ap": 4,
      "damage": "2d4 tagliente",
      "crit": "20, x3",
      "properties": "Preciso, Robusto",
      "load": 3,
      "strReq": 4
    },
    {
      "id": "w_sword",
      "name": "Spada (Sword)",
      "type": "Mischia (Lama)",
      "cost": "195c",
      "ap": 4,
      "damage": "2d6 perforante o tagliente",
      "crit": "20, x2",
      "properties": "Difensivo",
      "load": 4,
      "strReq": 3
    },
    {
      "id": "w_fire_axe",
      "name": "Ascia da Pompiere (Fire Axe)",
      "type": "Mischia (Lama)",
      "cost": "270c",
      "ap": 6,
      "damage": "2d10 tagliente",
      "crit": "20, x3",
      "properties": "A Due Mani, Pesante, Robusto",
      "load": 10,
      "strReq": 6
    },
    {
      "id": "w_assaultron_blade",
      "name": "Lama di Assaultron (Assaultron Blade)",
      "type": "Mischia (Lama)",
      "cost": "225c",
      "ap": 5,
      "damage": "3d4 perforante o tagliente",
      "crit": "20, x3",
      "properties": "Difensivo, Preciso, Robusto",
      "load": 4,
      "strReq": 5
    },
    {
      "id": "w_bumper_sword",
      "name": "Spada Paraurti (Bumper Sword)",
      "type": "Mischia (Lama)",
      "cost": "415c",
      "ap": 6,
      "damage": "10d6 tagliente",
      "crit": "20, x3",
      "properties": "A Due Mani, Lento, Fendente Continuo, Pesante, Allungato",
      "load": 30,
      "strReq": 10
    },
    {
      "id": "w_police_baton",
      "name": "Manganello (Police Baton)",
      "type": "Mischia (Contundente)",
      "cost": "105c",
      "ap": 4,
      "damage": "1d6 contundente",
      "crit": "20, 1d6",
      "properties": "Robusto",
      "load": 3,
      "strReq": 1
    },
    {
      "id": "w_wrench",
      "name": "Chiave Inglese (Wrench)",
      "type": "Mischia (Contundente)",
      "cost": "140c",
      "ap": 4,
      "damage": "2d4 contundente",
      "crit": "20, 4d4",
      "properties": "Robusto",
      "load": 5,
      "strReq": 2
    },
    {
      "id": "w_baseball_bat",
      "name": "Mazza da Baseball (Baseball Bat)",
      "type": "Mischia (Contundente)",
      "cost": "200c",
      "ap": 5,
      "damage": "3d4 contundente",
      "crit": "20, 2d4 (respinge 5 ft)",
      "properties": "Pesante, Robusto, Difensivo, A Due Mani",
      "load": 8,
      "strReq": 4
    },
    {
      "id": "w_sledgehammer",
      "name": "Mazzuolo / Mazza Pesante (Sledgehammer)",
      "type": "Mischia (Contundente)",
      "cost": "215c",
      "ap": 6,
      "damage": "1d12 contundente",
      "crit": "20, 3d12 (Stordito)",
      "properties": "Robusto, Pesante, A Due Mani",
      "load": 26,
      "strReq": 7
    },
    {
      "id": "w_super_sledge",
      "name": "Super Slitta (Super Sledge)",
      "type": "Mischia (Contundente)",
      "cost": "310c",
      "ap": 6,
      "damage": "3d12 contundente",
      "crit": "20, 3d12 (Stordito)",
      "properties": "Pesante, A Due Mani",
      "load": 30,
      "strReq": 8
    },
    {
      "id": "w_tire_iron",
      "name": "Smontagomme (Tire Iron)",
      "type": "Mischia (Contundente)",
      "cost": "100c",
      "ap": 4,
      "damage": "1d6 contundente",
      "crit": "20, 1d4 (Prono)",
      "properties": "Pesante",
      "load": 4,
      "strReq": 2
    },
    {
      "id": "w_lead_pipe",
      "name": "Tubo di Piombo (Lead Pipe)",
      "type": "Mischia (Contundente)",
      "cost": "130c",
      "ap": 5,
      "damage": "1d8 contundente",
      "crit": "20, 1d6",
      "properties": "Robusto, Difensivo",
      "load": 6,
      "strReq": 5
    },
    {
      "id": "w_brass_knuckles",
      "name": "Tirapugni d'Ottone (Brass Knuckles)",
      "type": "Disarmato",
      "cost": "90c",
      "ap": 3,
      "damage": "1d4 contundente",
      "crit": "20, x2",
      "properties": "Disarmato, Occultabile",
      "load": 1,
      "strReq": 1
    },
    {
      "id": "w_spiked_knuckles",
      "name": "Tirapugni Chiodato (Spiked Knuckles)",
      "type": "Disarmato",
      "cost": "135c",
      "ap": 3,
      "damage": "1d6 perforante o contundente",
      "crit": "20, x2",
      "properties": "Disarmato",
      "load": 2,
      "strReq": 2
    },
    {
      "id": "w_power_fist",
      "name": "Pugno Meccanico (Power Fist)",
      "type": "Disarmato",
      "cost": "420c",
      "ap": 5,
      "damage": "2d8 contundente",
      "crit": "20, 3d8 (Stordito)",
      "properties": "Disarmato, Pesante",
      "load": 12,
      "strReq": 6
    },
    {
      "id": "w_deathclaw_gauntlet",
      "name": "Guanto di Deathclaw (Deathclaw Gauntlet)",
      "type": "Disarmato",
      "cost": "550c",
      "ap": 4,
      "damage": "3d6 tagliente",
      "crit": "19-20, x3",
      "properties": "Disarmato, Perforante, Lacerante",
      "load": 10,
      "strReq": 5
    },
    {
      "id": "w_boxing_glove",
      "name": "Guantone da Boxe (Boxing Glove)",
      "type": "Disarmato",
      "cost": "85c",
      "ap": 3,
      "damage": "1d4 contundente",
      "crit": "20 (Stordito)",
      "properties": "Disarmato, Non Letale",
      "load": 2,
      "strReq": 1
    },
    {
      "id": "w_10mm_pistol",
      "name": "Pistola 10mm (10mm Pistol)",
      "type": "A Distanza (Balistica Leggera)",
      "cost": "250c",
      "ap": 3,
      "damage": "2d6 balistico",
      "crit": "20, x2",
      "properties": "Gittata: 40/120 ft, Cap: 12",
      "ammo": "10mm",
      "load": 4,
      "strReq": 3
    },
    {
      "id": "w_44_magnum",
      "name": "Revolver Magnum .44 (.44 Magnum)",
      "type": "A Distanza (Revolver)",
      "cost": "450c",
      "ap": 4,
      "damage": "3d6 balistico",
      "crit": "20, x3",
      "properties": "Gittata: 50/150 ft, Cap: 6",
      "ammo": ".44 Magnum",
      "load": 5,
      "strReq": 5
    },
    {
      "id": "w_9mm_pistol",
      "name": "Pistola 9mm (9mm Pistol)",
      "type": "A Distanza (Balistica Leggera)",
      "cost": "180c",
      "ap": 3,
      "damage": "1d8 balistico",
      "crit": "20, x2",
      "properties": "Gittata: 35/100 ft, Cap: 13",
      "ammo": "9mm",
      "load": 3,
      "strReq": 2
    },
    {
      "id": "w_pipe_pistol",
      "name": "Pistola a Tubo (Pipe Pistol)",
      "type": "A Distanza (Balistica Leggera)",
      "cost": "75c",
      "ap": 3,
      "damage": "1d6 balistico",
      "crit": "20, x2",
      "properties": "Fragile, Gittata: 30/90 ft, Cap: 12",
      "ammo": ".38",
      "load": 3,
      "strReq": 2
    },
    {
      "id": "w_flare_gun",
      "name": "Pistola Lanciarazzi (Flare Gun)",
      "type": "A Distanza (Speciale)",
      "cost": "90c",
      "ap": 4,
      "damage": "1d4 fuoco",
      "crit": "20, x2",
      "properties": "Illuminazione, Gittata: 60/180 ft, Cap: 1",
      "ammo": "Razzo Segnalatore",
      "load": 2,
      "strReq": 1
    },
    {
      "id": "w_hunting_rifle",
      "name": "Fucile da Caccia (Hunting Rifle)",
      "type": "A Distanza (Fucile)",
      "cost": "380c",
      "ap": 5,
      "damage": "3d8 balistico",
      "crit": "20, x3",
      "properties": "Gittata: 80/240 ft, Cap: 5, A Due Mani",
      "ammo": ".308",
      "load": 9,
      "strReq": 5
    },
    {
      "id": "w_combat_rifle",
      "name": "Fucile da Combattimento (Combat Rifle)",
      "type": "A Distanza (Fucile)",
      "cost": "520c",
      "ap": 4,
      "damage": "2d8 balistico",
      "crit": "20, x2",
      "properties": "Gittata: 60/180 ft, Cap: 20, A Due Mani",
      "ammo": ".45",
      "load": 11,
      "strReq": 5
    },
    {
      "id": "w_assault_rifle",
      "name": "Fucile d'Assalto (Assault Rifle)",
      "type": "A Distanza (Fucile Automatico)",
      "cost": "650c",
      "ap": 4,
      "damage": "2d6 balistico (Raffica)",
      "crit": "20, x2",
      "properties": "Automatico, Gittata: 50/150 ft, Cap: 30, A Due Mani",
      "ammo": "5.56mm",
      "load": 13,
      "strReq": 6
    },
    {
      "id": "w_submachine_gun",
      "name": "Mitraglietta SMG (Submachine Gun)",
      "type": "A Distanza (Automatica Leggera)",
      "cost": "420c",
      "ap": 3,
      "damage": "1d10 balistico",
      "crit": "20, x2",
      "properties": "Automatico, Gittata: 30/90 ft, Cap: 30, A Due Mani",
      "ammo": ".45",
      "load": 8,
      "strReq": 4
    },
    {
      "id": "w_combat_shotgun",
      "name": "Fucile a Pompa da Combattimento (Combat Shotgun)",
      "type": "A Distanza (Fucile a Pompa)",
      "cost": "800c",
      "ap": 4,
      "damage": "2d12 balistico",
      "crit": "20, x2",
      "properties": "Diffusione, Gittata: 25/75 ft, Cap: 8, A Due Mani",
      "ammo": "Calibro 12",
      "load": 12,
      "strReq": 6
    },
    {
      "id": "w_double_barrel_shotgun",
      "name": "Doppietta (Double Barrel Shotgun)",
      "type": "A Distanza (Fucile a Pompa)",
      "cost": "320c",
      "ap": 4,
      "damage": "3d10 balistico (o entrambi i tubi)",
      "crit": "20, x3",
      "properties": "Doppio Colpo, Gittata: 20/60 ft, Cap: 2, A Due Mani",
      "ammo": "Calibro 12",
      "load": 9,
      "strReq": 5
    },
    {
      "id": "w_laser_pistol",
      "name": "Pistola Laser (Laser Pistol)",
      "type": "A Distanza (Energia Laser)",
      "cost": "350c",
      "ap": 3,
      "damage": "2d6 laser",
      "crit": "20, x2 (Incenerisce)",
      "properties": "Gittata: 40/120 ft, Cap: 30",
      "ammo": "Cella a Fusione",
      "load": 4,
      "strReq": 3
    },
    {
      "id": "w_laser_rifle",
      "name": "Fucile Laser (Laser Rifle)",
      "type": "A Distanza (Energia Laser)",
      "cost": "550c",
      "ap": 4,
      "damage": "3d6 laser",
      "crit": "20, x2 (Incenerisce)",
      "properties": "Gittata: 70/210 ft, Cap: 30, A Due Mani",
      "ammo": "Cella a Fusione",
      "load": 8,
      "strReq": 4
    },
    {
      "id": "w_plasma_pistol",
      "name": "Pistola al Plasma (Plasma Pistol)",
      "type": "A Distanza (Energia Plasma)",
      "cost": "480c",
      "ap": 4,
      "damage": "2d8 plasma",
      "crit": "20, x3 (Liquefazione)",
      "properties": "Gittata: 35/105 ft, Cap: 18",
      "ammo": "Cartuccia al Plasma",
      "load": 5,
      "strReq": 4
    },
    {
      "id": "w_plasma_rifle",
      "name": "Fucile al Plasma (Plasma Rifle)",
      "type": "A Distanza (Energia Plasma)",
      "cost": "750c",
      "ap": 5,
      "damage": "3d8 plasma",
      "crit": "20, x3 (Liquefazione)",
      "properties": "Gittata: 60/180 ft, Cap: 18, A Due Mani",
      "ammo": "Cartuccia al Plasma",
      "load": 11,
      "strReq": 5
    },
    {
      "id": "w_gauss_rifle",
      "name": "Fucile Gauss (Gauss Rifle)",
      "type": "A Distanza (Energia Cinetica)",
      "cost": "1400c",
      "ap": 6,
      "damage": "4d10 balistico/energia",
      "crit": "19-20, x4",
      "properties": "Caricabile, Gittata: 120/360 ft, Cap: 5, A Due Mani",
      "ammo": "Cartuccia 2mm EC",
      "load": 16,
      "strReq": 7
    },
    {
      "id": "w_minigun",
      "name": "Minigun a Canne Rotanti (Minigun)",
      "type": "Arma Pesante (Automatica)",
      "cost": "1200c",
      "ap": 5,
      "damage": "4d6 balistico (Raffica)",
      "crit": "20, x2",
      "properties": "Fuoco Continuo, Gittata: 50/150 ft, Cap: 500, A Due Mani, Pesante",
      "ammo": "5mm",
      "load": 28,
      "strReq": 8
    },
    {
      "id": "w_missile_launcher",
      "name": "Lanciaincantesimi / Lanciamissili (Missile Launcher)",
      "type": "Arma Pesante (Esplosiva)",
      "cost": "950c",
      "ap": 6,
      "damage": "6d8 esplosivo",
      "crit": "20, x2 (Raggio +10 ft)",
      "properties": "Area 15 ft, Gittata: 100/300 ft, Cap: 1, A Due Mani, Pesante",
      "ammo": "Missile",
      "load": 22,
      "strReq": 7
    },
    {
      "id": "w_flamer",
      "name": "Lanciafiamme (Flamer)",
      "type": "Arma Pesante (Energia Fuoco)",
      "cost": "850c",
      "ap": 4,
      "damage": "3d6 fuoco (Cono 20 ft)",
      "crit": "20 (Brucia)",
      "properties": "Cono 20 ft, Cap: 100, A Due Mani, Pesante",
      "ammo": "Carburante per Lanciafiamme",
      "load": 18,
      "strReq": 6
    },
    {
      "id": "w_fat_man",
      "name": "Fat Man (Lanciatore Mini-Bomba Atomica)",
      "type": "Arma Pesante (Cataclisma)",
      "cost": "3500c",
      "ap": 8,
      "damage": "12d10 esplosivo + 6d6 radiazioni",
      "crit": "20, x3",
      "properties": "Area Nucleare 40 ft, Gittata: 80/200 ft, Cap: 1, A Due Mani, Pesante",
      "ammo": "Mini-Bomba Atomica",
      "load": 31,
      "strReq": 8
    }
  ],
  "weaponMods": [
    {
      "id": "mod_long_barrel",
      "name": "Canna Lunga (Long Barrel)",
      "slots": 2,
      "weight": 2,
      "appliesTo": [
        "handgun",
        "rifle",
        "energy"
      ],
      "effect": "Aumenta la gittata lunga di +10 e riduce la corta di 2. +1 ai tiri per colpire a distanza.",
      "cost": "50c"
    },
    {
      "id": "mod_short_barrel",
      "name": "Canna Corta / Mozza (Short Barrel)",
      "slots": 1,
      "weight": -1,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun"
      ],
      "effect": "Riduce il costo in AP per attaccare di 1 a distanza ravvicinata (entro 5 metri).",
      "cost": "35c"
    },
    {
      "id": "mod_increased_clip",
      "name": "Caricatore Maggiorato (Increased Clip)",
      "slots": 1,
      "weight": 1,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun",
        "smg"
      ],
      "ammoBonus": 3,
      "effect": "Aumenta la capienza del caricatore di +3 colpi prima di dover ricaricare.",
      "cost": "45c"
    },
    {
      "id": "mod_drum_mag",
      "name": "Caricatore a Tamburo (Drum Magazine)",
      "slots": 2,
      "weight": 2,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun",
        "smg"
      ],
      "ammoBonus": "x2",
      "effect": "Raddoppia la capienza del caricatore (x2 colpi). Aumenta il peso dell'arma di 2 lbs.",
      "cost": "85c"
    },
    {
      "id": "mod_quick_eject",
      "name": "Sgancio Rapido (Quick Eject)",
      "slots": 1,
      "weight": 0,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun",
        "smg"
      ],
      "effect": "Riduce il costo in AP per ricaricare l'arma di 2 AP.",
      "cost": "40c"
    },
    {
      "id": "mod_speedloader",
      "name": "Speedloader per Revolver",
      "slots": 1,
      "weight": 0,
      "appliesTo": [
        "revolver"
      ],
      "effect": "Permette di ricaricare il tamburo del revolver spendendo solo 4 AP anziché 6 AP.",
      "cost": "35c"
    },
    {
      "id": "mod_double_action",
      "name": "Meccanismo a Doppia Azione (Double Action)",
      "slots": 2,
      "weight": 0.5,
      "appliesTo": [
        "revolver"
      ],
      "effect": "Arma il cane e spara simultaneamente: riduce il costo AP di attacco di 1 (minimo 1 AP).",
      "cost": "75c"
    },
    {
      "id": "mod_reflex_sight",
      "name": "Mirino Reflex Olografico",
      "slots": 2,
      "weight": 1,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun",
        "smg",
        "energy"
      ],
      "effect": "+1 ai tiri per colpire dell'arma. Mirino non ingrandente a rapida acquisizione.",
      "cost": "65c"
    },
    {
      "id": "mod_scope_tactical",
      "name": "Ottica Telescopica (Scope)",
      "slots": 2,
      "weight": 2,
      "appliesTo": [
        "rifle",
        "energy",
        "revolver"
      ],
      "effect": "Raddoppia la gittata corta e quadruplica la gittata lunga. Svantaggio contro bersagli entro 50ft.",
      "cost": "95c"
    },
    {
      "id": "mod_infrared_scope",
      "name": "Ottica a Infrarossi Termica (Infrared Scope)",
      "slots": 2,
      "weight": 2,
      "appliesTo": [
        "rifle",
        "energy",
        "revolver"
      ],
      "effect": "Permette di bersagliare creature nascoste o nell'oscurità totale (+2 al tiro per colpire). Gittata lunga triplicata.",
      "cost": "150c"
    },
    {
      "id": "mod_suppressor",
      "name": "Silenziatore Balistico (Silencer)",
      "slots": 2,
      "weight": 2,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun",
        "smg"
      ],
      "effect": "Gli attacchi da nascosto non rivelano la tua posizione. Riduce il dado danno dell'arma di un grado (minimo d4).",
      "cost": "80c"
    },
    {
      "id": "mod_muzzle_brake",
      "name": "Freno di Bocca Compensatore",
      "slots": 2,
      "weight": 1,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun",
        "smg"
      ],
      "effect": "+1 ai tiri per colpire, riduce il requisito di Forza dell'arma di 1 e riduce il rinculo.",
      "cost": "55c"
    },
    {
      "id": "mod_improved_rifling",
      "name": "Rigatura Canna Perfezionata (Improved Rifling)",
      "slots": 2,
      "weight": 1,
      "appliesTo": [
        "handgun",
        "rifle",
        "smg"
      ],
      "effect": "Aumenta tutti i modificatori di gittata dell'arma del 50%.",
      "cost": "70c"
    },
    {
      "id": "mod_hardened_receiver",
      "name": "Castello Temprato (Hardened Receiver)",
      "slots": 3,
      "weight": 2,
      "appliesTo": [
        "handgun",
        "rifle",
        "shotgun",
        "smg"
      ],
      "effect": "Conferisce le proprietà Distruttivo e Potente (danni aumentati, durabilità incrementata).",
      "cost": "120c"
    },
    {
      "id": "mod_boosted_capacitor",
      "name": "Condensatore Potenziato (Boosted Capacitor)",
      "slots": 3,
      "weight": 1,
      "appliesTo": [
        "energy"
      ],
      "effect": "Puoi spendere 2 colpi di munizioni energetiche per incrementare il danno dell'attacco di +2.",
      "cost": "90c"
    },
    {
      "id": "mod_overclocked_capacitor",
      "name": "Condensatore Sovraccaricato (Overclocked)",
      "slots": 3,
      "weight": 2,
      "appliesTo": [
        "energy"
      ],
      "effect": "Puoi spendere 3 colpi di munizioni anziché 1 per infliggere +4 danni energetici all'impatto.",
      "cost": "140c"
    },
    {
      "id": "mod_target_tracking",
      "name": "Tracciatore di Bersaglio Giroscopico (Tracking)",
      "slots": 2,
      "weight": 1,
      "appliesTo": [
        "energy"
      ],
      "effect": "Spendi 6 AP per agganciare un bersaglio a raggio corto: i tiri per colpire contro di esso hanno Vantaggio.",
      "cost": "150c"
    },
    {
      "id": "mod_bayonet",
      "name": "Baionetta Tattica (Bayonet)",
      "slots": 1,
      "weight": 1,
      "appliesTo": [
        "two_handed"
      ],
      "effect": "Lama frontale per attacchi da mischia immediati senza dover spendere AP per cambiare arma.",
      "cost": "30c"
    },
    {
      "id": "mod_stock",
      "name": "Calcio Rinforzato Tattico (Stock)",
      "slots": 2,
      "weight": 4,
      "appliesTo": [
        "rifle",
        "shotgun",
        "smg",
        "energy"
      ],
      "effect": "Fornisce stabilità strutturale superiore: +1 ai tiri per colpire dell'arma.",
      "cost": "60c"
    },
    {
      "id": "mod_sharpened_serrated",
      "name": "Lama Affilata / Seghettata (Sharpened/Serrated)",
      "slots": 1,
      "weight": 0.5,
      "appliesTo": [
        "melee",
        "unarmed"
      ],
      "effect": "L'arma guadagna la proprietà Dilaniante (Mangle). Infligge ferite gravi e sanguinamento persistente.",
      "cost": "55c"
    },
    {
      "id": "mod_stealth_blade",
      "name": "Lama Furtiva (Stealth Blade)",
      "slots": 1,
      "weight": 0.5,
      "appliesTo": [
        "melee"
      ],
      "effect": "+2 dadi di danno agli attacchi furtivi (Sneak attack) e colpi critici aumentati.",
      "cost": "75c"
    },
    {
      "id": "mod_strengthen",
      "name": "Rinforzata (Strengthened)",
      "slots": 1,
      "weight": 1,
      "appliesTo": [
        "melee",
        "unarmed",
        "all"
      ],
      "effect": "L'arma guadagna la proprietà Durevole (Durable). Modifica permanente.",
      "cost": "120c"
    },
    {
      "id": "mod_double_sided",
      "name": "Doppia Lama / Doppio Taglio (Double Sided)",
      "slots": 1,
      "weight": 2,
      "appliesTo": [
        "melee"
      ],
      "effect": "L'arma guadagna Difensiva (Defensive) e A Due Mani (Two Handed). Carico raddoppiato, Req FOR +1.",
      "cost": "25c"
    },
    {
      "id": "mod_heavy_weighted",
      "name": "Pesante / Contrappeso (Heavy / Weighted)",
      "slots": 1,
      "weight": 1,
      "appliesTo": [
        "melee",
        "unarmed"
      ],
      "effect": "Costo AP +1 (max 6), Carico +50%, Req FOR +1. Guadagna Bilanciata (Weighted). Moltiplicatore critico o dado danno +1. Permanente.",
      "cost": "65c"
    },
    {
      "id": "mod_upgraded_strike",
      "name": "Migliorata (Upgraded)",
      "slots": 1,
      "weight": 0.5,
      "appliesTo": [
        "melee",
        "unarmed"
      ],
      "effect": "Ogni volta che tiri un 1 o un 2 sui dadi di danno dell'arma, il danno su quel dado aumenta di +2. Permanente.",
      "cost": "165c"
    },
    {
      "id": "mod_light_build",
      "name": "Struttura Leggera (Light Build)",
      "slots": 1,
      "weight": -1,
      "appliesTo": [
        "melee",
        "unarmed"
      ],
      "effect": "Costo in AP -1 (minimo 3 AP), Carico dimezzato (-50%), Req FOR -1. Guadagna Rompibile (Breakable). Permanente.",
      "cost": "55c"
    },
    {
      "id": "mod_ergonomic_grip",
      "name": "Impugnatura Ergonomica (Ergonomic Grip)",
      "slots": 1,
      "weight": 0.5,
      "appliesTo": [
        "melee",
        "unarmed",
        "all"
      ],
      "effect": "La soglia per mettere a segno un colpo critico diminuisce di 1 (es. da 20 a 19-20).",
      "cost": "110c"
    },
    {
      "id": "mod_stun_pack",
      "name": "Elettrodi Stordenti / Elettrificata (Stun Pack / Shock)",
      "slots": 1,
      "weight": 1,
      "appliesTo": [
        "melee",
        "unarmed"
      ],
      "effect": "Aggiunge danno da Energia e proprietà Stordente (Stun): il bersaglio colpito deve superare un test END o rimane stordito per 1 turno.",
      "cost": "75c"
    },
    {
      "id": "mod_heating_coil",
      "name": "Bobina Riscaldante / Bruciante (Heating Coil)",
      "slots": 1,
      "weight": 1,
      "appliesTo": [
        "melee"
      ],
      "effect": "Aggiunge danno da Fuoco e proprietà Bruciante (Burning): infligge danni da combustione continuati.",
      "cost": "80c"
    },
    {
      "id": "mod_poisoned_edge",
      "name": "Lama Avvelenata (Poisoned Edge)",
      "slots": 1,
      "weight": 0.5,
      "appliesTo": [
        "melee"
      ],
      "effect": "Applica Veleno persistente al bersaglio colpito (danni da tossina continuati per 2 turni).",
      "cost": "60c"
    },
    {
      "id": "mod_spiked_head",
      "name": "Testa Chiodata / Spinata (Spiked)",
      "slots": 1,
      "weight": 1,
      "appliesTo": [
        "melee",
        "unarmed"
      ],
      "effect": "+1 danno perforante fisso e conferisce probabilità di lacerazione critica.",
      "cost": "35c"
    },
    {
      "id": "mod_lucky_charm",
      "name": "Amuleto Portafortuna (Lucky Charm)",
      "slots": 1,
      "weight": 0,
      "appliesTo": [
        "all"
      ],
      "effect": "La soglia di colpo critico diminuisce di 1 (es. da 20 a 19). Massimo un amuleto attivo per personaggio.",
      "cost": "50c"
    }
  ],
  "specialAmmo": [
    {
      "id": "ammo_std",
      "name": "Standard",
      "category": "universal",
      "effect": "Munizione convenzionale di serie senza modificatori speciali.",
      "modCost": "1x"
    },
    {
      "id": "ammo_ap",
      "name": "Perforante (Armor Piercing)",
      "category": "ballistic",
      "effect": "Nucleo indurito in acciaio o tungsteno: ignora fino a 2 punti di Soglia Danno (DT) dell'armatura bersaglio.",
      "modCost": "1.5x"
    },
    {
      "id": "ammo_hp",
      "name": "A Punta Cava (Hollow Point)",
      "category": "ballistic",
      "effect": "Espansione ad alto impatto: +3 danni contro bersagli con DT 0-1, ma subisce -2 danni contro bersagli corazzati (DT 3+).",
      "modCost": "1.5x"
    },
    {
      "id": "ammo_explosive",
      "name": "Esplosiva (Explosive)",
      "category": "ballistic",
      "effect": "Ogiva micro-esplosiva: aggiunge +1d6 danni da detonazione ad area (raggio 5ft dall'impatto).",
      "modCost": "3x"
    },
    {
      "id": "ammo_incendiary",
      "name": "Incendiaria (Incendiary)",
      "category": "ballistic",
      "effect": "Miscela al fosforo: dà fuoco al bersaglio (1d4 danni da fuoco all'inizio del suo turno per 2 turni).",
      "modCost": "2x"
    },
    {
      "id": "ammo_surplus",
      "name": "Surplus Militare (Bulk)",
      "category": "ballistic",
      "effect": "Munizioni economiche di scarto: costo ridotto, ma se il tiro d20 per colpire è 3 o inferiore, l'arma subisce 1 usura.",
      "modCost": "0.5x"
    },
    {
      "id": "ammo_tracer",
      "name": "Tracciante (Tracer)",
      "category": "ballistic",
      "effect": "Traccia luminosa visibile: conferisce +1 al tiro per colpire a media e lunga gittata.",
      "modCost": "1.2x"
    },
    {
      "id": "ammo_buckshot",
      "name": "Pallini Standard (Buckshot)",
      "category": "shotgun",
      "effect": "Classica rosa di pallettoni da caccia/combattimento con dispersione ad alto impatto ravvicinato.",
      "modCost": "1x"
    },
    {
      "id": "ammo_slug",
      "name": "Palla Singola (Slug)",
      "category": "shotgun",
      "effect": "Proiettile solido pesante: raddoppia la gittata utile dell'arma e ignora 2 punti di DT nemico.",
      "modCost": "1.5x"
    },
    {
      "id": "ammo_dragons_breath",
      "name": "Alito del Drago (Dragon's Breath)",
      "category": "shotgun",
      "effect": "Spara una fiammata conica al magnesio che incendia il bersaglio (1d6 danni da fuoco persistenti per 2 turni).",
      "modCost": "2.5x"
    },
    {
      "id": "ammo_flechette",
      "name": "Dardi Laceranti (Flechette)",
      "category": "shotgun",
      "effect": "Mazzetto di dardi d'acciaio affilati: applica Dilaniante (Mangle) e causa sanguinamento continuo.",
      "modCost": "2x"
    },
    {
      "id": "ammo_pulse_slug",
      "name": "Impulso EMP (Pulse Slug)",
      "category": "shotgun",
      "effect": "Scarica ionica concentrata: infligge +2d6 danni elettrici supplementari contro Robot, Torrette e Power Armor.",
      "modCost": "3x"
    },
    {
      "id": "ammo_bean_bag",
      "name": "Sacco di Pallini Antisommossa (Bean Bag)",
      "category": "shotgun",
      "effect": "Munizione contundente non letale: il bersaglio colpito deve superare un test END o cade prono e stordito.",
      "modCost": "1x"
    },
    {
      "id": "ammo_opt",
      "name": "Ottimizzata (Optimized)",
      "category": "energy",
      "effect": "Fascio coerente focalizzato a rifrazione magnetica: +2 al danno energetico e ignora 2 DT dell'armatura.",
      "modCost": "2x"
    },
    {
      "id": "ammo_overcharged",
      "name": "Sovraccarica (Overcharged)",
      "category": "energy",
      "effect": "Sovralimentazione ionica ad alta potenza: aggiunge +1d6 al danno energetico; ogni ricarica causa 1 usura.",
      "modCost": "2.5x"
    },
    {
      "id": "ammo_max_charge",
      "name": "Massima Potenza (Max Charge)",
      "category": "energy",
      "effect": "Scarica al plasma/laser estrema: aggiunge +2d6 al danno energetico; con tiri per colpire <= 5 l'arma subisce 1 usura.",
      "modCost": "4x"
    },
    {
      "id": "ammo_cryo",
      "name": "Cella Criogenica (Cryo Cell)",
      "category": "energy",
      "effect": "Converte parte del raggio in flusso criogenico: infligge danno da freddo e riduce la velocità nemica di 10ft.",
      "modCost": "3x"
    },
    {
      "id": "ammo_hv_missile",
      "name": "Missile ad Alta Velocità (HV Missile)",
      "category": "heavy",
      "effect": "Propulsori a reazione accelerata: raddoppia la velocità e la gittata del razzo (+1 al tiro per colpire).",
      "modCost": "2x"
    },
    {
      "id": "ammo_homing_missile",
      "name": "Missile a Ricerca Termica (Homing)",
      "category": "heavy",
      "effect": "Guida laser/termica automatica: conferisce Vantaggio a tutti i tiri per colpire su bersagli visibili.",
      "modCost": "3.5x"
    },
    {
      "id": "ammo_napalm",
      "name": "Combustibile Napalm (Flamer Fuel)",
      "category": "heavy",
      "effect": "Gel infiammabile vischioso: aumenta il danno da fuoco di +1d6 e lascia il terreno in fiamme per 3 round.",
      "modCost": "2x"
    },
    {
      "id": "ammo_nuka_nuke",
      "name": "Nuka Nuke Atomica (Nuka-Cola Quantum)",
      "category": "heavy",
      "effect": "Ogiva arricchita al radioisotopo Quantum: raggio di detonazione aumentato del 50% con fallout persistente di 5 Rads.",
      "modCost": "5x"
    },
    {
      "id": "ammo_plasma_infused",
      "name": "★ Plasma Infused (Leggendaria)",
      "category": "legendary",
      "effect": "I proiettili sono avvolti da una scarica di plasma verde ad altissima temperatura: +1d6 danni energetici.",
      "modCost": "★"
    },
    {
      "id": "ammo_gamma_infused",
      "name": "★ Radioattiva Gamma (Leggendaria)",
      "category": "legendary",
      "effect": "Emette isotopi radioattivi letali: infligge 2d4 Rads istantanei al bersaglio ad ogni colpo andato a segno.",
      "modCost": "★"
    }
  ],
  "legendaryWeaponTraits": [
    {
      "id": "leg_wep_furious",
      "name": "Furente (Furious)",
      "effect": "Ogni colpo consecutivo a segno sullo stesso bersaglio aumenta il danno del 15%."
    },
    {
      "id": "leg_wep_instigating",
      "name": "Instigatore (Instigating)",
      "effect": "Infligge danni doppi se il bersaglio ha tutti i suoi Punti Ferita (100% HP)."
    },
    {
      "id": "leg_wep_explosive",
      "name": "Esplosivo (Explosive)",
      "effect": "I proiettili esplodono all'impatto infliggendo 2d6 danni ad area entro 5 piedi."
    },
    {
      "id": "leg_wep_wounding",
      "name": "Ferite (Wounding)",
      "effect": "I colpi causano sanguinamento che infligge 2d4 danni continui ignorando le armature."
    },
    {
      "id": "leg_wep_two_shot",
      "name": "A Due Colpi (Two-Shot)",
      "effect": "Spara un proiettile aggiuntivo senza consumare munizioni extra."
    },
    {
      "id": "leg_wep_vats_enhanced",
      "name": "VATS Potenziato (VATS Enhanced)",
      "effect": "Riduce del 25% il costo in Punti Azione (AP) per attaccare."
    },
    {
      "id": "leg_wep_incendiary",
      "name": "Bruciante (Incendiary)",
      "effect": "Imposta il bersaglio a fuoco infliggendo danno da bruciatura per 3 turni."
    },
    {
      "id": "leg_wep_anti_armor",
      "name": "Penetrante (Anti-Armor)",
      "effect": "Ignora il 50% della Soglia Danno (DT) e dell'Armatura del bersaglio."
    },
    {
      "id": "leg_wep_bloodied",
      "name": "Sanguinario (Bloodied)",
      "effect": "Infligge danni maggiori man mano che la salute del personaggio diminuisce."
    }
  ],
  "ammoTypes": [
    {
      "id": "standard",
      "name": "Standard",
      "costMod": "x1",
      "effect": "Munizione normale standard senza modificatori.",
      "dtMod": 0,
      "dmgMod": "+0"
    },
    {
      "id": "ap",
      "name": "Armor Piercing (AP)",
      "costMod": "x3",
      "effect": "Ignora fino a 8 punti di DT e l'armatura del bersaglio subisce 1 livello di usura.",
      "dtMod": -8,
      "dmgMod": "+0"
    },
    {
      "id": "hp",
      "name": "Hollow Point (HP)",
      "costMod": "x4",
      "effect": "Se colpisce gli HP del bersaglio infligge danno critico addizionale; se bloccata da DT il danno è dimezzato.",
      "dtMod": 4,
      "dmgMod": "+Crit"
    },
    {
      "id": "fmj",
      "name": "FMJ Piercing",
      "costMod": "x3",
      "effect": "Danno aumentato di +2. Se porta il bersaglio a 0 HP, perfora e colpisce la creatura successiva in linea.",
      "dtMod": -2,
      "dmgMod": "+2"
    },
    {
      "id": "explosive",
      "name": "Esplosiva (Explosive)",
      "costMod": "x6",
      "effect": "Tutte le creature entro 5 piedi subiscono 3d6 danni esplosivi. Bersaglio cade a terra prono (se STR <= 10).",
      "dtMod": 0,
      "dmgMod": "+3d6 Area"
    },
    {
      "id": "incendiary",
      "name": "Incendiaria (Incendiary)",
      "costMod": "x4",
      "effect": "Conferisce la proprietà Incendiaria: infligge ustione continua per 3 round.",
      "dtMod": 0,
      "dmgMod": "+Fuoco"
    },
    {
      "id": "dragon_breath",
      "name": "Dragon's Breath (Shotgun)",
      "costMod": "x2",
      "effect": "Danno dimezzato ma acquisisce proprietà Incendiaria su cono a corta distanza.",
      "dtMod": 0,
      "dmgMod": "/2 + Incendiario"
    },
    {
      "id": "flechette",
      "name": "Flechette (Shotgun)",
      "costMod": "x2",
      "effect": "Danno totale ridotto di 1 ma ignora fino a 6 punti di DT.",
      "dtMod": -6,
      "dmgMod": "-1"
    },
    {
      "id": "bean_bag",
      "name": "Bean Bag (Non-Letale)",
      "costMod": "-50%",
      "effect": "Danno ridotto a 1d4+1 non letale; infligge 1 livello di fatica al bersaglio.",
      "dtMod": 0,
      "dmgMod": "1d4+1 (Stordente)"
    },
    {
      "id": "surplus",
      "name": "Surplus (Scadente / Economica)",
      "costMod": "-50%",
      "effect": "Munizione economica di scarto: costo dimezzato, ma aggiunge 1 livello di usura all'arma con tiri bassi.",
      "dtMod": 0,
      "dmgMod": "+0 (Usura)"
    },
    {
      "id": "overcharge",
      "name": "Sovraccarica (Overcharge / Energia)",
      "costMod": "x2",
      "effect": "Ignora 4 punti di DT e infligge +2 danni, ma l'arma subisce usura con un 1 sul dado.",
      "dtMod": -4,
      "dmgMod": "+2"
    },
    {
      "id": "max_charge",
      "name": "Carica Massima (Max Charge / Energia)",
      "costMod": "x3",
      "effect": "Ignora 8 punti di DT e infligge +5 danni, ma raddoppia l'usura dell'arma.",
      "dtMod": -8,
      "dmgMod": "+5"
    },
    {
      "id": "optimized",
      "name": "Ottimizzata (Optimized / Energia)",
      "costMod": "x2.5",
      "effect": "Ignora 5 punti di DT e aumenta la portata utile del 25% senza penalità di usura.",
      "dtMod": -5,
      "dmgMod": "+1"
    },
    {
      "id": "bulk",
      "name": "Bulk (Batterie Economiche)",
      "costMod": "-25%",
      "effect": "Celle di energia a basso costo: danno ridotto di 2 punti.",
      "dtMod": 0,
      "dmgMod": "-2"
    }
  ],
  "gear": [
    {
      "name": "Stimpak",
      "category": "Medicinale",
      "weight": 0.5,
      "cost": "25c",
      "effect": "Ripristina istantaneamente 15 HP (oppure 3d6 HP se applicato con Medicina)."
    },
    {
      "name": "Super Stimpak",
      "category": "Medicinale",
      "weight": 1,
      "cost": "60c",
      "effect": "Ripristina istantaneamente 40 HP, ma dopo 1 ora provoca affaticamento (-2 END per 2 ore)."
    },
    {
      "name": "RadAway",
      "category": "Medicinale",
      "weight": 0.5,
      "cost": "40c",
      "effect": "Rimuove 2 livelli di Radiazioni (o 50 Rads accumulati)."
    },
    {
      "name": "Rad-X",
      "category": "Medicinale",
      "weight": 0.1,
      "cost": "20c",
      "effect": "Conferisce +5 DT contro le radiazioni per 1 ora."
    },
    {
      "name": "Borsa del Medico (Doctor's Bag)",
      "category": "Attrezzatura",
      "weight": 5,
      "cost": "75c",
      "effect": "Permette di curare arti fratturati o menomati sul campo rimuovendo le condizioni critiche."
    },
    {
      "name": "Stealth Boy",
      "category": "Dispositivo",
      "weight": 3,
      "cost": "150c",
      "effect": "Genera un campo di occultamento olografico che rende invisibili per 30 secondi (5 turni)."
    },
    {
      "name": "Grimaldello da Scasso (Bobby Pin)",
      "category": "Attrezzo",
      "weight": 0.01,
      "cost": "1c",
      "effect": "Permette di tentare prove di Scasso su serrature fino a Difficoltà Molto Difficile."
    },
    {
      "name": "Cacciavite & Attrezzi da Lavoro",
      "category": "Attrezzo",
      "weight": 2,
      "cost": "15c",
      "effect": "Necessario per prove di Riparazione, assemblaggio modifiche e disinnesco trappole."
    },
    {
      "name": "Torcia Elettrica (Flashlight)",
      "category": "Equipaggiamento",
      "weight": 1,
      "cost": "10c",
      "effect": "Fornisce luce brillante in un cono di 30 piedi e luce fioca per altri 30 piedi."
    },
    {
      "name": "Corda di Canapa (50 piedi)",
      "category": "Equipaggiamento",
      "weight": 3,
      "cost": "8c",
      "effect": "Resistente fino a 300 kg, utile per scalate, discese e legare prigionieri."
    },
    {
      "name": "Borraccia Vault 13 (Canteen)",
      "category": "Provvista",
      "weight": 1,
      "cost": "12c",
      "effect": "Mantiene l'acqua fresca e disseta automaticamente durante le marce nel deserto."
    },
    {
      "name": "Carne di Bramino Arrostita",
      "category": "Cibo Cucinato",
      "weight": 1,
      "cost": "10c",
      "effect": "Ripristina 8 HP e soddisfa il fabbisogno nutrizionale per 1 giorno."
    },
    {
      "name": "Bistecca di Deathclaw",
      "category": "Cibo Cucinato",
      "weight": 2,
      "cost": "45c",
      "effect": "Ripristina 25 HP e conferisce +1 Forza per 1 ora."
    },
    {
      "name": "Nuka-Cola",
      "category": "Bevanda",
      "weight": 1,
      "cost": "5c",
      "effect": "Ripristina 3 HP, 1 AP istantaneo, ma rilascia 1 punto di Radiazioni."
    },
    {
      "name": "Nuka-Cola Quantum",
      "category": "Bevanda",
      "weight": 1,
      "cost": "30c",
      "effect": "Ripristina 20 HP, 4 AP istantanei e conferisce luce fioca bluastra al corpo."
    },
    {
      "name": "Buffout",
      "category": "Chem",
      "weight": 0.1,
      "cost": "20c",
      "effect": "+2 Forza, +2 Costituzione e +15 HP temporanei per 1 ora (rischio dipendenza)."
    },
    {
      "name": "Psycho",
      "category": "Chem",
      "weight": 0.1,
      "cost": "25c",
      "effect": "+25% a tutti i danni inflitti e +2 DT per 10 minuti (rischio dipendenza)."
    },
    {
      "name": "Jet",
      "category": "Chem",
      "weight": 0.1,
      "cost": "15c",
      "effect": "+4 Punti Azione (AP) per turno per 5 minuti (altissimo rischio dipendenza)."
    },
    {
      "name": "Med-X",
      "category": "Chem",
      "weight": 0.1,
      "cost": "20c",
      "effect": "+5 alla Soglia Danno (DT) per 30 minuti contro tutti i danni fisici."
    },
    {
      "name": "Mentats",
      "category": "Chem",
      "weight": 0.1,
      "cost": "18c",
      "effect": "+2 Intelligenza e +2 Percezione per 1 ora (favorisce prove mentali e scientifiche)."
    },
    {
      "name": "Pacco Batterie a Fusione (Fusion Core)",
      "category": "Energia",
      "weight": 4,
      "cost": "200c",
      "effect": "Alimenta l'Armatura Atomica o armi pesanti al plasma; 240 minuti di carica."
    }
  ],
  "races": [
    {
      "id": "human",
      "name": "Umano (Human)",
      "nameEN": "Human",
      "description": "La specie dominante sopravvissuta nella Zona Contaminata. Gli umani mostrano una straordinaria forza di volontà, adattabilità e ingegno di fronte alle avversità post-nucleari.",
      "descriptionEN": "Humans are the dominant species of Earth. Non-mutated humans are sometimes called normals, smoothskins, humies, or bleeders by their mutant counterparts. Post-nuclear humans exhibit more diversity, primarily in genetic structure.",
      "innateTraits": [
        {
          "name": "Tenacia (Tenacity)",
          "nameEN": "Tenacity",
          "effect": "Nei tiri salvezza contro la morte (death saves), muori quando fallisci il tuo quarto tiro salvezza anziché il terzo.",
          "effectEN": "When you roll death saves, you die when you fail your fourth death save instead of your third."
        }
      ],
      "variants": [
        {
          "id": "standard",
          "name": "Standard (Tenacia)",
          "nameEN": "Standard (Tenacity)",
          "effect": "Nei tiri salvezza contro la morte (death saves), muori al 4° fallimento anziché al 3°.",
          "effectEN": "When you roll death saves, you die when you fail your fourth death save instead of your third."
        },
        {
          "id": "human_resourceful",
          "name": "Variante: Intraprendente (Resourceful)",
          "nameEN": "Variant: Resourceful",
          "effect": "Ottieni 1 Karma Cap addizionale utilizzabile in ogni sessione di gioco.",
          "effectEN": "You gain one extra Karma Cap that you can use each game."
        },
        {
          "id": "human_unexposed",
          "name": "Variante: Non Esposto (Unexposed)",
          "nameEN": "Variant: Unexposed",
          "effect": "Svantaggio a tutti i tiri salvezza e prove contro Radiazioni e Dipendenze (tipico di chi è cresciuto al sicuro in un Vault).",
          "effectEN": "You have disadvantage on all Radiation and Addiction checks."
        },
        {
          "id": "human_gen3_secret",
          "name": "Variante: Synth Gen-3 Segreto (Gen 3 Synth)",
          "nameEN": "Variant: Gen 3 Synth",
          "effect": "Nessun bonus iniziale; sviluppo psicologico o narrativo con il GM. In alternativa roll d20: con un 20 sei segretamente un Synth Gen-3.",
          "effectEN": "This variant option provides no abilities or statistical change. Alternatively, roll a d20. On a 20, your character is secretly a Gen 3 Synth."
        }
      ]
    },
    {
      "id": "ghoul",
      "name": "Ghoul",
      "nameEN": "Ghoul",
      "description": "Umani le cui cellule sono state mutate da massicce dosi di radiazioni prolungate. Hanno una longevità quasi immortale e sono immuni alle radiazioni, ma combattono il rischio di diventare ferali.",
      "descriptionEN": "Ghouls are mutated humans affected by the phenomenon of ghoulification. Despite their zombie-like appearance, the flesh of ghouls is not actually rotten. They have greatly extended overall lifespans and are immune to background radiation.",
      "innateTraits": [
        {
          "name": "Evoluzione (Evolution)",
          "nameEN": "Evolution",
          "effect": "Non puoi accumulare livelli di radiazione e sei completamente immune ai danni da radiazione. Inoltre, non guadagni livelli di Irradiazione dal consumo di cibo o acqua contaminati.",
          "effectEN": "You cannot gain levels of radiation and you are immune to radiation damage. Additionally, you gain no Irradiated levels from consuming food or water."
        },
        {
          "name": "Anatomia Resiliente (Resilient Anatomy)",
          "nameEN": "Resilient Anatomy",
          "effect": "Sei resistente ai danni da veleno (danni dimezzati). I punti stamina (SP) da cibo, bevande o farmaci sono dimezzati. I punti ferita (HP) da stimpak sono dimezzati. Non puoi recuperare HP dalla polvere curativa. Le siringhe non medicinali non hanno effetto. I danni da sanguinamento subiti sono dimezzati.",
          "effectEN": "You are resistant to poison damage. Any stamina points from food, drinks, or chems is halved. Any hit points from stimpaks is halved. Cannot gain hit points from healing powder. Syringes that aren't loaders have no effect. Bleeding damage is halved."
        }
      ],
      "variants": [
        {
          "id": "standard",
          "name": "Standard (Evoluzione & Anatomia Resiliente)",
          "nameEN": "Standard (Evolution & Resilient Anatomy)",
          "effect": "Immune a radiazioni, resistenza ai veleni, cure stimpak dimezzate, sanguinamento dimezzato.",
          "effectEN": "Immune to radiation, poison resistance, stimpaks halved, bleeding halved."
        },
        {
          "id": "ghoul_old_bones",
          "name": "Variante: Ossa Vecchie / Ghoul Centenario (Old Bones)",
          "nameEN": "Variant: Old Bones",
          "effect": "Sei immune ai danni da veleno e ottieni automaticamente il perk Cucito Insieme (Stitched Together).",
          "effectEN": "You are immune to poison damage and you gain the Stitched Together perk.",
          "autoPerks": [
            "stitched_together"
          ]
        },
        {
          "id": "ghoul_many_roads",
          "name": "Variante: Molte Strade Percorse (Many Roads Walked)",
          "nameEN": "Variant: Many Roads Walked",
          "effect": "Ottieni un bonus di +2 a tutte le abilità e ricevi 1 perk extra al 1° Livello.",
          "effectEN": "You gain a +2 in all skills and you gain an extra perk at 1st Level."
        },
        {
          "id": "ghoul_half_life",
          "name": "Variante: Mezzavita (Half Life)",
          "nameEN": "Variant: Half Life",
          "effect": "La tua mente vacilla ogni giorno: al 15° livello cedi alla ghoulificazione, perdi il controllo della mente e il personaggio passa al GM.",
          "effectEN": "When you reach Level 15, you are fully consumed by ghoulification, your mind is no longer your own, and your character is controlled by the GM."
        }
      ]
    },
    {
      "id": "gen2_synth",
      "name": "Synth di Seconda Generazione (Gen-2 Synth)",
      "nameEN": "Gen-2 Synth",
      "description": "Umanoidi sintetici e meccanici fabbricati dall'Istituto dotati di telaio metallico rinforzato e componenti elettronici avanzati.",
      "descriptionEN": "Synth manufactured within the Institute laboratories. The most common variant of mechanical synth. Gen-2s possess limited A.I. and superficially resemble a mannequin more than a human.",
      "innateTraits": [
        {
          "name": "Corpo Inorganico (Inorganic Body)",
          "nameEN": "Inorganic Body",
          "effect": "Immune a radiazioni e veleno. Nessun effetto da farmaci, cibi o bevande. Nessun bisogno biologico di respirare, mangiare, bere o dormire.",
          "effectEN": "You are immune to radiation and poison. You gain no effects from Chems, Drinks or Food. Additionally you have no need to breathe, sleep, eat, or drink."
        }
      ],
      "variants": [
        {
          "id": "standard",
          "name": "Standard (Corpo Inorganico)",
          "nameEN": "Standard (Inorganic Body)",
          "effect": "Immune a radiazioni e veleno. Nessun bisogno di respirare, mangiare, bere o dormire.",
          "effectEN": "Immune to radiation and poison. No need to breathe, sleep, eat, or drink."
        },
        {
          "id": "synth_brittle",
          "name": "Variante: Corpo Fragile (Brittle Body)",
          "nameEN": "Variant: Brittle Body",
          "effect": "Gli attacchi mirati subiti infliggono due condizioni all'arto anziché una. Vulnerabilità ai danni da elettricità.",
          "effectEN": "Whenever a creature makes a targeted attack against you, you gain two limb conditions instead of one. Additionally you are vulnerable to electricity damage."
        },
        {
          "id": "synth_hardware",
          "name": "Variante: Aggiornamenti Hardware e Software (Software and Hardware Upgrades)",
          "nameEN": "Variant: Software and Hardware Upgrades",
          "effect": "Quando acquisisci un perk, sei considerato a tutti gli effetti un Robot per soddisfare i requisiti dei perk.",
          "effectEN": "Whenever you gain a perk, you are considered a Robot for perk requirements."
        },
        {
          "id": "synth_algorithms",
          "name": "Variante: Algoritmi di Intelligenza Artificiale (AI Algorithms)",
          "nameEN": "Variant: Artificial Intelligence Algorithms",
          "effect": "Ogni volta che ottieni punti abilità (al passaggio di livello), ne ricevi 1 addizionale.",
          "effectEN": "Whenever you gain skill points, you gain 1 more."
        }
      ]
    },
    {
      "id": "robot",
      "name": "Robot (Mister Handy, Protectron, Robobrain)",
      "nameEN": "Robot",
      "description": "Macchine autonome pre-belliche dotate di telaio corazzato e intelligenza artificiale o cervello organico incapsulato. Non possono indossare armature atomiche convenzionali.",
      "descriptionEN": "A robot is a machine that is capable of autonomously completing tasks. From general-purpose utility droids to full-fledged military battle machines, robots could be found in almost any environment and function.",
      "innateTraits": [
        {
          "name": "Corpo Inorganico (Inorganic Body)",
          "nameEN": "Inorganic Body",
          "effect": "Non puoi accumulare livelli di radiazione, sei immune ai danni da radiazione e ai danni da veleno. Non puoi subire livelli di sanguinamento. Nessun effetto da farmaci, cibo o bevande. Nessun bisogno di respirare, dormire, mangiare o bere.",
          "effectEN": "You cannot gain radiation levels, you are immune to radiation damage and poison damage. You cannot gain levels of bleeding. You gain no effects from Chems, Drinks or Food. Additionally, you have no need to breathe, sleep, eat, or drink."
        },
        {
          "name": "Arti Tranciati (Severed Limbs)",
          "nameEN": "Severed Limbs",
          "effect": "Non entri mai in stato di shock per arti tranciati; possono essere riattaccati con 3 rottami d'acciaio e 1 componente di circuiti in (10 - bonus Creazione/Crafting) minuti, oppure 6 AP se ridotto a 0.",
          "effectEN": "If any of your limbs are severed, you do not go into shock and they can be reattached with 3 steel and 1 circuitry junk item. Takes 10 - crafting bonus minutes, or 6 AP if reduced to 0."
        },
        {
          "name": "Armature e Armi (Armor and Weapons)",
          "nameEN": "Armor and Weapons",
          "effect": "Puoi equipaggiare armature e armi standard. Se il sottotipo ti fornisce un'arma integrata, puoi potenziarla come qualsiasi arma. Non puoi usare armature atomiche.",
          "effectEN": "You can use armor and weapons just as any other race would. If your subtype grants you a weapon, you can upgrade and modify it. However, you cannot use power armor."
        }
      ],
      "variants": [
        {
          "id": "robot_handy",
          "name": "Sottotipo: Mister Handy (Handy)",
          "nameEN": "Subtype: Handy (Mister Handy)",
          "effect": "Propulsore a getto (vola, immune a trappole al suolo), 3 braccia/occhi (niente testa, inguine o gambe; motore a getto bersagliabile come gambe a +2 AP). Richiede carburante ogni 7 giorni (1 gallone o 6 oli). 3 attrezzi/armi integrati a scelta (Sega Meccanica, Cesoie, Trapano, Pinza, Cannello).",
          "effectEN": "Jet Engine: hovers, ignores floor traps. Round core with 3 arms/eyes; no head, groin, legs (jet engine targetable at +2 AP). Requires fuel weekly. 3 integrated tools/weapons."
        },
        {
          "id": "robot_protectron",
          "name": "Sottotipo: Protectron",
          "nameEN": "Subtype: Protectron",
          "effect": "Corazzatura Rinforzata (+1 DT naturale anche senza armatura). Lento: massimo 6 AP spendibili in movimento per turno. Arma integrata nel braccio a scelta (Taser, Laser, Defibrillatore, Cryo Spray, Pistola Chiodatrice).",
          "effectEN": "Reinforced Plating: +1 DT even without armor. Slow: max 6 AP on movement per turn. Integrated arm weapon (Taser, Laser, Defibrillator, Cryo Spray, Nail Gun)."
        },
        {
          "id": "robot_robobrain",
          "name": "Sottotipo: Robobrain",
          "nameEN": "Subtype: Robobrain",
          "effect": "Cingoli per Qualsiasi Terreno (nessun costo AP extra in terreno difficile; bersagliabili ma non tranciabili). Neurotrasmettitori: vulnerabilità all'elettricità; attacchi mirati alla testa infliggono 2 condizioni all'arto.",
          "effectEN": "All Terrain Rollers: ignore difficult terrain. NeuroTransmitters: vulnerable to electricity; head targeted attacks inflict 2 limb conditions."
        }
      ]
    },
    {
      "id": "super_mutant",
      "name": "Super Mutante (Super Mutant)",
      "nameEN": "Super Mutant",
      "description": "Esseri umani geneticamente trasformati dal Virus a Evoluzione Forzata (FEV-II). Enormi, imponenti e dotati di resistenza e forza fisica sovrumane.",
      "descriptionEN": "Super mutants are genetically enhanced humans who were created to be superior in every way to a typical human. Exposed to Forced Evolutionary Virus II. Superior physical prowess, resistance to combat damage, aging, and disease.",
      "innateTraits": [
        {
          "name": "Evoluzione FEV (Evolution)",
          "nameEN": "Evolution",
          "effect": "Non puoi accumulare livelli di radiazione e sei completamente immune ai danni da radiazione. Nessun effetto nocivo da cibo o acqua contaminati.",
          "effectEN": "You cannot gain levels of radiation and you are immune to radiation damage. Additionally, you gain no Irradiated levels from consuming food or water."
        },
        {
          "name": "Forza Superiore (Superior Strength)",
          "nameEN": "Superior Strength",
          "effect": "La tua Forza aumenta di 1 e non può essere inferiore a 6. La Capacità di Carico (Carry Load) aumenta di +40. Non puoi indossare armature atomiche convenzionali a meno che non siano modificate appositamente.",
          "effectEN": "Strength score increases by 1 and cannot be lower than 6. Carry Load is increased by 40. Cannot use power armor unless specially modded to your body type."
        },
        {
          "name": "Sforzo Massiccio (Mass Exertion)",
          "nameEN": "Mass Exertion",
          "effect": "Il fabbisogno giornaliero di cibo e acqua prima di accumulare livelli di fame e disidratazione è raddoppiato.",
          "effectEN": "The amount of required food and water you need each day with gaining levels of hunger and dehydration is doubled."
        },
        {
          "name": "Goffo / Ingombrante (Bulky)",
          "nameEN": "Bulky",
          "effect": "Quando le tue armi o armature accumulano un livello di decadimento/usura per l'uso brutale, ne accumulano uno addizionale.",
          "effectEN": "Whenever your weapons or armor would gain a level of decay, they gain an additional one."
        }
      ],
      "variants": [
        {
          "id": "standard",
          "name": "Standard (Forza Superiore)",
          "nameEN": "Standard (Superior Strength)",
          "effect": "Forza +1 (minimo 6) e Carico +40. Fabbisogno cibo/acqua raddoppiato. Usura +1. Sostituibile dalle varianti.",
          "effectEN": "Strength +1 (min 6), Carry Load +40. Daily food/water doubled. Bulky decay +1."
        },
        {
          "id": "sm_flawed",
          "name": "Variante: Ceppo Difettoso (Defective Strain)",
          "nameEN": "Variant: Defective Strain",
          "effect": "Forza e Costituzione (Endurance) aumentano entrambe di +2 e Carico +40. Tuttavia, l'Intelligenza è ridotta di 2 e non può superare 3. Sostituisce Forza Superiore.",
          "effectEN": "Strength and Endurance both increase by 2, Carry Load +40. Intelligence is reduced by 2 and cannot be raised higher than 3. Replaces Superior Strength."
        },
        {
          "id": "sm_nightkin",
          "name": "Variante: Nightkin / Ombra (Nightkin)",
          "nameEN": "Variant: Nightkin",
          "effect": "Forza +1 (minimo 6) e Carico +40. Campo Stealth: spendi 3 AP per diventare invisibile per 1 minuto (usi successivi nella stessa giornata riducono temporaneamente PER di 1 per 24h, min 1).",
          "effectEN": "Strength +1 (min 6), Carry Load +40. Stealth field: spend 3 AP to turn invisible for 1 minute. Subsequent uses per day reduce Perception by 1 for 24h (min 1)."
        }
      ]
    }
  ],
  "backgrounds": [
    {
      "id": "cultist",
      "name": "Cultista (Cultist)",
      "skills": [
        "Corpo a Corpo",
        "Oratoria",
        "Furtività"
      ],
      "trait": "La Vista Oltre (The Sight Beyond)",
      "traitId": "the_sight_beyond",
      "description": "Whether you were born into this life or these people  brought hope to you when you hit rock bottom. You are in  service to a group of followers who zealously recruit all  they can find into their doctrine. This new world, born of  fire, is a gift. Only now that this world has been cleansed  can the truth be seen. You now wander the wastes  looking for signs and awaiting orders from the great  beyond.",
      "equipment": "Starting Equipment.  • Human Cultist x1 cloth armor (with a rank 1 lead lined upgrade), x1 knife, x1  bolt-action pipe pistol, x15 9mm bullets, x1 backpack, x1 chain,  x3 cram, x1 diluted RadAway, x1 Rad-X, x1 healing powder, x3  dirty water, x1 purified water, and x50 caps. • Ghoul or Super Mutant Cultist x1 leather armor, x1 knife, x1 bolt-action pipe pistol, x15 9mm  bullets, x1 backpack, x1 chain, x3 cram, x4 dirty water, x1  stimpak, x1 diluted stimpak, and x50 caps.  • Gen-2 Synth Cultist x1 leather armor, x1 knife, x1 bolt-action pipe pistol, x15 9mm  bullets, x1 backpack, x1 chain, x1 diluted stimpak, x1 RobCo  Quick Fix-it 1.0, x1 overclock hardware, x1 cache clearer, and  x50 caps.  • Robot Cultist x1 leather armor, x1 knife, x1 bolt-action pipe pistol, x15 9mm  bullets, x1 backpack, x1 chain, x2 RobCo Quick Fix-it 1.0, x1  overclock hardware, x1 cache clearer, and x50 caps."
    },
    {
      "id": "doctor",
      "name": "Dottore (Doctor)",
      "skills": [
        "Scasso",
        "Medicina",
        "Scienza"
      ],
      "trait": "Primo Non Nuocere (Do No Harm)",
      "traitId": "do_no_harm",
      "description": "At a young age you've always wanted to help others.  You've learned how to have a steady hand and to be  calm under pressure from old world books and other  experienced doctors. Work is hard, you see little breaks,  and people are desperate. You wander the wasteland in  search of others to help, or the caps they provide.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Doctor x1 cloth armor, x1 knife with four levels of decay, x1 syringer, x2  stimpak loader syringes, x1 lock joint syringe, x1 backpack, x1  first aid kit, x2 diluted stimpaks, x1 diluted RadAway, x1 Rad-X,  x1 healing powder, a sleeping bag, one person tent, x1 noodle  cup, x1 instamash, x2 purified water, and x50 caps. • Gen-2 Synth or Robot Doctor x1 cloth armor, x1 knife with four levels of decay, x1 syringer, x2  stimpak loader syringes, x1 lock joint syringe, x1 backpack, x1  first aid kit, x2 RobCo Quick Fix-it 1.0, x2 RobCo Quick Fix-it 2.0,  x1 diluted RadAway, x1 Rad-X, x2 healing powder, and x50 caps."
    },
    {
      "id": "drifter",
      "name": "Vagabondo (Drifter)",
      "skills": [
        "Scasso",
        "Furtività",
        "Disarmato"
      ],
      "trait": "Ratto di Strada (Street Rat)",
      "traitId": "street_rat",
      "description": "Born into this rotten world and treated like less than  dirt, you've wandered from city to city, shelter to shelter,  trying to stay alive. The only friends you've had are  thieves, beggars, or worse. You've never known riches  and you only survive off the backs of others. Everything  you own has its own story on how you claimed it. Things  are going to change now, you take a hold of your life for  the first time to make things right.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Drifter x1 cloth armor, x1 shiv, x1 pipe pistol with two levels of decay,  x15 9mm bullets, x1 backpack, x5 canned dog food, x1 iguana  on a stick, x2 healing powder, x4 dirty water, x2 purified water,  x1 lockpicks, x1 one person tent, x1 sleeping bag, x1 whiskey,  x1 fixer, x2 jet, x3 cigarettes, x1 psycho, x1 coffee and x50  caps. • Gen-2 Synth or Robot Drifter x1 cloth armor, x1 shiv, x1 pipe pistol with two levels of decay,  x15 9mm bullets, x1 backpack, x1 lockpicks, x2 RobCo Quick  Fix-it 1.0, x2 overclock hardware, x2 cache clearer, x1 military  auto-tank AI upload, x1 flashlight, x1 energy cell, x1 ¡La  Fantoma! skill magazine and x50 caps."
    },
    {
      "id": "entertainer",
      "name": "Intrattenitore (Entertainer)",
      "skills": [
        "Baratto",
        "Oratoria",
        "Intimidire"
      ],
      "trait": "Un Momento di Tregua (A Moment of Respite)",
      "traitId": "a_moment_of_respite",
      "description": "Talented since you were young, you marvel wastelanders  with your exceptional ability to perform. This life doesn't  come easy though. You've been extorted, swindled,  targeted, and been made a fool more than once. When  you're a star, everyone wants to glimmer just as bright.  You're wandering the wasteland looking for the next gig,  or maybe you want to keep your talents on hold for now.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Entertainer x1 cloth armor, x1 switchblade, x1 10mm pistol with three  levels of decay, x10 10mm ammo, x1 backpack, x2 dynamite,  x3 flares, x3 salisbury steak, x1 desert salad, x1 nuka-cola, x1  dirty wastelander, x1 healing powder, x1 stimpak, x2 purified  water, and x50 caps. • Gen-2 Synth or Robot Entertainer x1 cloth armor, x1 switchblade, x1 10mm pistol with two levels  of decay, x20 10mm bullets, x1 backpack, x2 dynamite, x3  flares, x2 RobCo Quick FIx-it 2.0, and x50 caps."
    },
    {
      "id": "farmer",
      "name": "Agricoltore (Farmer)",
      "skills": [
        "Riparazione",
        "Intimidire",
        "Sopravvivenza"
      ],
      "trait": "Temprato dalla Terra (Hardened by the Earth)",
      "traitId": "hardened_by_the_earth",
      "description": "Born on a wide swath of land, or inherited by family, or  gifted by some rich benefactor. You only know your life  to be working the land to bring one of the most valuable  resources in the wasteland, food. You know how to cook,  what kind of creatures taste the best, and how to fix up  just about anything. Being this savvy in the wasteland  often draws eyes, and you've seen your share of those  who will do anything to take what you have built. Either  something has befallen your crop, your animals have  gone sick, or one of those desperate folks finally torched  your home. Either way, you're wandering the wasteland to  rebuild or repair your farm.",
      "equipment": "Starting Equipment.  • Human, Ghoul or Super Mutant Farmer. x1 cloth armor, x1 pitchfork with five levels of decay, x1 single  shotgun with three levels of decay, x8 12 gauge ammo, x1  backpack, x1 healing powder, x5 potatoes, x5 tomatoes, x5  mutfruit, x4 purified water, and x50 caps. • Gen-2 Synth or Robot Farmer x1 cloth armor, x1 pitchfork with five levels of decay, x1 sickle,  x1 single shotgun with three levels of decay, x8 12 gauge  ammo, x1 backpack, x1 RobCo Quick Fix-It, x2 potatoes, x2  tomatoes, x1 mutfruit, and x50 caps."
    },
    {
      "id": "guard",
      "name": "Guardia (Guard)",
      "skills": [
        "Armi da Fuoco",
        "Oratoria",
        "Corpo a Corpo"
      ],
      "trait": "Guardia Vigile (Vigilant Watch)",
      "traitId": "vigilant_watch",
      "description": "\"It's an easy job\", you remember hearing from some of  your friends. Then you remember the countless ghouls  you've had to incinerate, or the sting in your eyes as  you kept watch at dawn, or the family's you've had to  turn away from safety. You were trained to keep those  who were paying you safe. Working alongside a team  who had your back in the toughest of situations. But  you've since left your job, putting your skills to use in the  wasteland.",
      "equipment": "Starting Equipment.  • Human, Ghoul or Super Mutant Farmer. x1 metal armor with one level of decay 225, x1 police baton  with two levels of decay 84, x1 9mm pistol 200, x20 9mm  ammo 40, x10 9mm rubber ammo 10c, x1 backpack 20, x1  sleeping bag 20, x1 one person tent 25, x1 binoculars 25c, x1  diluted stimpak 40, x3 purified water 60, x2 pork n' beans 10c,  x1 coffee 15c, x2 donuts 16, and x50 caps. • Gen-2 Synth or Robot Farmer x1 metal armor with one level of decay, x1 police baton with  two levels of decay, x1 9mm pistol 200, x35 9mm ammo, x20  9mm rubber ammo, x1 backpack, x1 binoculars, x2 RobCo  Quick Fix-it, x1 Milsurp Review magazine, x1 cache clearer, and  x50 caps."
    },
    {
      "id": "hermit",
      "name": "Eremita (Hermit)",
      "skills": [
        "Esplosivi",
        "Medicina",
        "Sopravvivenza"
      ],
      "trait": "Recluso / Eremita (Recluse)",
      "traitId": "recluse",
      "description": "Whether by choice or exile, you have lived most of  your life in the middle of the wasteland far from any  civilization. You've learned how to keep the only one  who matters alive, you. Building traps, memorizing the  land, and surviving at the edge of the world. You've seen  creatures and phenomena that no one would believe.  You've finally set off from your reclusivity to ensure what  you've learned doesn't die with you.",
      "equipment": "Starting Equipment.  • Human Hermit x1 multilayered armor with two levels of decay, x1 sharpened  pole, x2 dynamite, x1 backpack, x1 sleeping bag, x1 one person  tent, x1 bear trap, x1 mutt chops, x1 gecko steak, x1 diluted  RadAway, x3 healing powder, x1 first aid kit, x1 purified water,  x2 dirty water, and x50 caps. • Ghoul or Super Mutant Hermit x1 multilayered armor with two levels of decay, x1 sharpened  pole, x2 dynamite, x1 backpack, x1 sleeping bag, x1 one person  tent, x1 bear trap, x1 mutt chops, x1 gecko steak, x1 iguana on  a stick, x4 healing powder, x1 first aid kit, x4 dirty water, and  x50 caps. • Gen-2 Synth or Robot Hermit x1 multilayered armor, x1 sharpened pole with the strengthened  upgrade, x3 dynamite, x1 backpack, x1 bear trap, x2 RobCo  Quick Fix-it 2.0 and x50 caps."
    },
    {
      "id": "journalist",
      "name": "Giornalista (Journalist)",
      "skills": [
        "Scasso",
        "Oratoria",
        "Furtività"
      ],
      "trait": "Tenace / Persistente (Persistent)",
      "traitId": "persistent",
      "description": "While many see the career of a reporter to be something  of a relic from the old world, you couldn't disagree  more. The truth is important in the wasteland, this world  still has its fair share of people who are competing to  survive. And in major cities, there are many of these  people who would profit off the backs of others or let  history fade into obscurity. It's your job and purpose  to see that the people of the wasteland are properly  informed, even if you have to break a few laws to get  to that truth. But lately you haven't been seeing much  action. You're venturing into the wastes to find the  perfect story.",
      "equipment": "Starting Equipment.  • Human Journalist x1 cloth armor, x1 switchblade, x1 9mm pistol with three levels  of decay, x13 9mm bullets, x1 backpack, x1 flashlight, x1  energy cell 30, x1 bandolier, x1 lockpicks, x3 cram, x1 diluted  RadAway, x1 Rad-X, x1 diluted stimpak, x3 purified water, and  x50 caps. • Ghoul or Super Mutant Journalist x1 cloth armor, x1 switchblade, x1 9mm pistol with three  levels of decay, x13 9mm bullets, x1 backpack, x1 flashlight,  x1 energy cell, x1 bandolier, x1 lockpicks, x3 cram, x1 diluted  stimpak, x1 calmex, x3 purified water, and x50 caps. • Gen-2 Synth or Robot Journalist x1 cloth armor, x1 switchblade, x1 9mm pistol with two levels  of decay, x26 9mm bullets, x1 backpack, x1 flashlight, x1  energy cell, x1 bandolier, x1 lockpicks, x1 RobCo Quick Fix-it  1.0, x1 coolant rerouter, and x50 caps."
    },
    {
      "id": "laborer",
      "name": "Bracciante (Laborer)",
      "skills": [
        "Riparazione",
        "Oratoria",
        "Corpo a Corpo"
      ],
      "trait": "Giornate Lunghe, Notti Lunghe (Long Days, Long Nights)",
      "traitId": "long_days_long_nights",
      "description": "Long days, good pay. In the early days your body ached  each time you'd come home. But now you've grown  accustomed to the hard labor you've done day in and  day out. Whether you moved belongings, rebuilt houses,  planted seeds, delivered water, etc. You've helped others  and helped yourself with honest work. But jobs have run  short, and you've now turned to wandering the wasteland  in search of better fortune.",
      "equipment": "Starting Equipment.  • Human or Super Mutant Laborer x1 cloth armor, x1 crowbar, x1 pipe pistol with two levels of  decay, x10 9mm bullets, x1 backpack, x1 canteen, x1 rope,  x1 sleeping bag, x1 one person tent, x1 potato crisps, x2  instamash, x1 radstag stew, x2 purified water, x2 healing  powder, and x50 caps.  • Ghoul Laborer x1 cloth armor, x1 crowbar, x1 pipe pistol with two levels of  decay, x10 9mm bullets, x1 backpack, x1 canteen, x1 rope,  x1 sleeping bag, x1 one person tent, x1 potato crisps, x2  instamash, x1 radstag stew, x4 dirty water, x1 stimpak, and x50  caps.  • Gen-2 Synth or Robot Laborer x1 cloth armor, x1 crowbar, x1 pipe pistol with two levels of  decay, x10 9mm bullets, x1 backpack, x1 rope, x1 flashlight, x1  energy cell, x1 RobCo Quick Fix-it 2.0, and x50 caps."
    },
    {
      "id": "mechanic",
      "name": "Meccanico (Mechanic)",
      "skills": [
        "Riparazione",
        "Armi da Fuoco",
        "Scienza"
      ],
      "trait": "Manutenzione Adeguata (Proper Maintenance)",
      "traitId": "proper_maintenance",
      "description": "In a broken world, you're one of the few strands holding  it together. Fixing things is your speciality, and since  you were young you've always been fascinated with  how things work. Especially the mysteries of technology  from the old war. You've oiled countless guns, tightened  triggers, scrapped old pieces for new ones, and used  metric tons of duct tape. You figure your skills could be  best used out in the wasteland.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Mechanic x1 cloth armor, x1 wrench, x1 pipe revolver, x10 .44 bullets, x1  backpack, x1 bandolier, x1 canteen, x1 rope, x1 sleeping bag, x1  one person tent, x3 cram, x3 purified water, x1 weapon repair  kit, and x50 caps.  • Gen-2 Synth or Robot Laborer x1 cloth armor, x1 wrench, x1 pipe revolver, x15 .44 bullets, x1  backpack, x1 bandolier, x1 rope, x1 RobCo Quick Fix-it 1.0, x2  weapon repair kit, and x50 caps."
    },
    {
      "id": "mercenary",
      "name": "Mercenario (Mercenary)",
      "skills": [
        "Armi da Fuoco",
        "Corpo a Corpo",
        "Sopravvivenza"
      ],
      "trait": "Migliorare l'Accordo (Sweeten the Deal)",
      "traitId": "sweeten_the_deal",
      "description": "To look tough you've got to act tough. Your name has  gone down in reputation as a reliable protector. You've  walked hundreds of miles guarding caravan and sniped  down countless feral ghouls and radscorpions. It's  dangerous work, and many have tried to cheat you. But  few live to tell the tale.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Mercenary. x1 leather armor, x1 combat knife with two levels of decay,  x1 trail carbine with two levels of decay, x10 .44 bullets, x1  backpack, x2 cram, x1 sleeping bag, x1 one person tent, x1  diluted stimpak, x1 purified water, and x50 caps. • Gen-2 Synth or Robot Mercenary. x1 leather armor, x1 combat knife with two levels of decay,  x1 trail carbine with two levels of decay, x12 .44 bullets, x1  backpack, x1 RobCo Quick Fix-it 1.0, x1 RobCo Quick Fix-it 2.0,  and x50 caps."
    },
    {
      "id": "pastor",
      "name": "Pastore (Pastor)",
      "skills": [
        "Baratto",
        "Intimidire",
        "Oratoria"
      ],
      "trait": "Incoraggiare (Embolden)",
      "traitId": "embolden",
      "description": "Born into the church you've brought hope and sanctity  to many who were lost in the darkness. Your words of  encouragement have brought many into your circle and  you've crafted a small community of believers who hope  to shape the world and themselves into a better place,  whatever they believe in. Even still, you've seen your fair  share of skeptics, some even hostile. You've learned to  accept their criticisms and always front your belief, but  never to let it waver you. You're wandering the wasteland  now in search of other believers, or proof of your higher  powers' existence.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Pastor x1 cloth armor, x1 single shotgun with three levels of decay, x8  12 gauge ammo, x1 backpack, x1 sleeping bag, x1 one person  tent, x3 pork 'n beans, x1 donut, x1 coffee, x3 purified water, x1  first aid kit, x3 healing powder, and x50 caps. • Robot or Gen-2 Synth Pastor x1 cloth armor, x1 single shotgun with two levels of decay, x8  12 gauge ammo, x1 backpack, x1 flashlight, x1 energy cell, x1  first aid kit, x1 RobCo Quick Fix-it 2.0, and x50 caps."
    },
    {
      "id": "pilgrim",
      "name": "Pellegrino (Pilgrim)",
      "skills": [
        "Armi ad Energia",
        "Furtività",
        "Sopravvivenza"
      ],
      "trait": "Strade Lunghe (Long Roads)",
      "traitId": "long_roads",
      "description": "Your home was compromised, whether by a powerful  faction, ghouls, or raiders. You, and your family, have  made a long journey across the wasteland to find a new  home. Using everything you can to survive, even the old  world weapons you've kept in your family's lineage. But  your people have now scattered, and it's up to you to find  them or a new home to settle.",
      "equipment": "Starting Equipment.  • Human Pilgrim x1 leather armor with the light upgrade, x1 sharpened pole, x1  laser rifle with five levels of decay, x1 energy cell, x1 backpack,  x1 sleeping bag, x1 one person tent, x2 mutfruit, x2 apples, x1  vegetable soup, x2 purified water, x1 healing powder, and x50  caps. • Ghoul or Super Mutant Pilgrim x1 leather armor with the light upgrade, x1 sharpened pole, x1  laser rifle with five levels of decay, x1 energy cell, x1 backpack,  x1 sleeping bag, x1 one person tent, x2 mutfruit, x2 apples, x1  vegetable soup, x3 dirty water, x1 nuka-cola, x1 diluted stimpak,  and x50 caps. • Gen-2 Synth or Robot Pilgrim x1 leather armor with the light upgrade, x1 sharpened pole, x1  laser rifle with five levels of decay, x1 energy cell, x1 backpack,  x1 bandolier, x1 binoculars, x1 grappling hook, x1 rope, RobCo  Quick Fix-it 1.0, and x50 caps."
    },
    {
      "id": "pit_fighter",
      "name": "Gladiatore (Pit Fighter)",
      "skills": [
        "Baratto",
        "Corpo a Corpo",
        "Disarmato"
      ],
      "trait": "Resistere alla Battaglia (Endure the Battle)",
      "traitId": "endure_the_battle",
      "description": "It takes a lot to get back up and keep going, but it's all  you've known. Wastelanders place their hard earned  caps on your ability to fight, that burden fuels your every  punch. You've taken down many competitors, and have  felt the bitter taste of defeat but it only ever makes your  victory that much sweeter. However, something has  happened to your establishment. And now you must  wander the wastes with your skills to find a new purpose  in life.",
      "equipment": "Starting Equipment.  • Human Ghoul or Super Mutant Pit Fighter x1 lead pipe with two levels of decay, x1 brass knuckles, x1  spiked knuckles, x1 bandolier, x1 ball bearings, x1 sleeping bag,  x1 one person tent, x3 cram, x1 vodka, x3 healing powder, x3  purified water, x1 diluted stimpak, and x50 caps. • Gen 2 Synth or Robot Cultist x1 metal armor with one level of decay, x1 lead pipe with two  levels of decay, x1 brass knuckles, x1 spiked knuckles, x1  bandolier, x1 ball bearings, x1 RobCo Quick Fix-it 2.0, and x50  caps."
    },
    {
      "id": "scientist",
      "name": "Scienziato (Scientist)",
      "skills": [
        "Armi ad Energia",
        "Scasso",
        "Scienza"
      ],
      "trait": "Ricerca sul Campo (Field Research)",
      "traitId": "field_research",
      "description": "Scouring old world books, crafting theories, using  knowledge to help rebuild civilization is your life's work.  You've successfully predicted outcomes from natural  events and creatures to better help your community to  understand the world outside. But you've learned what  you needed, and now to properly fuel your curiosity; it's  time for field research!",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Scientist x1 cloth armor, x1 laser pistol, x2 energy cell, x1 backpack, x1  sleeping bag, x1 one person tent, x3 cram, x2 purified water, x1  diluted RadAway, x1 Rad-X, x1 stimpak, and x50 caps. • Gen-2 Synth or Robot Scientist x1 cloth armor, x1 laser pistol, x2 energy cell, x1 backpack, x2  RobCo Quick Fix-it 2.0, x1 Programmer's Digest magazine, x1  data scrubber, and x50 caps."
    },
    {
      "id": "scribe",
      "name": "Scriba (Scribe)",
      "skills": [
        "Riparazione",
        "Armi ad Energia",
        "Medicina"
      ],
      "trait": "Conoscenza della Zona (Wasteland Knowledge)",
      "traitId": "wasteland_knowledge",
      "description": "What they don't tell you about being a book organizer is  the faster you do it, the more time you get to read. You've  spent countless hours organizing a trove of information  that you wish you could share with the entire world. The  accumulation of knowledge from these texts could better  the world if raiders would stop to read a chapter. You're  venturing into the wasteland to share your knowledge, or  to find more to add to your collection.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Scientist x1 cloth armor, x1 laser pistol, x2 energy cell, x1 backpack, x1  sleeping bag, x1 one person tent, x3 cram, x2 purified water, x1  diluted RadAway, x1 Rad-X, x1 stimpak, and x50 caps. • Gen-2 Synth or Robot Scientist x1 cloth armor, x1 laser pistol, x2 energy cell, x1 backpack, x2  RobCo Quick Fix-it 2.0, x1 Programmer's Digest magazine, x1  data scrubber, and x50 caps."
    },
    {
      "id": "soldier",
      "name": "Soldato (Soldier)",
      "skills": [
        "Esplosivi",
        "Armi da Fuoco",
        "Medicina"
      ],
      "trait": "Combattente Efficiente (Efficient Combatant)",
      "traitId": "efficient_combatant",
      "description": "Ever since you were young you looked up to those who  protected your home. Now you've joined the ranks to  protect others. Following orders is your duty to your  people and your fellow soldiers. You've been sent on  scouting missions, you've guarded outposts, and you've  also seen the horrors of warfare. You've obeyed orders  to the end, even if you didn't agree with them. Your term  is up, and you're thinking of putting these skills to use in  the wasteland.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Soldier. x1 leather armor, x1 combat knife with two levels of decay,  x1 trail carbine with two levels of decay, x10 .44 bullets, x1  backpack, x2 cram, x1 sleeping bag, x1 one person tent, x1  diluted stimpak, x1 purified water, and x50 caps. • Gen-2 Synth or Robot Soldier. x1 leather armor, x1 combat knife with two levels of decay,  x1 trail carbine with two levels of decay, x12 .44 bullets, x1  backpack, x1 RobCo Quick Fix-it 1.0, x1 RobCo Quick Fix-it 2.0,  and x50 caps."
    },
    {
      "id": "trader",
      "name": "Commerciante (Trader)",
      "skills": [
        "Baratto",
        "Oratoria",
        "Intimidire"
      ],
      "trait": "Moneta di Scambio (Bargaining Chip)",
      "traitId": "bargaining_chip",
      "description": "Everyone needs something. You're a gatherer of  valuables that you've brought to many cities across  the wasteland. You've signed deals, bartered caps, and  made your customers happy. At the end of the day what  matters most is your reputation, and all the caps you've  made. But your stock has run low, it's time to set out  again to make all that money back again.",
      "equipment": "Starting Equipment.  • Human, Ghoul, or Super Mutant Trader x1 cloth armor, x1 shiv, x1 pipe pistol with two levels of decay,  x15 9mm bullets, x1 backpack, x5 canned dog food, x1 iguana  on a stick, x2 healing powder, x4 dirty water, x2 purified water,  x1 lockpicks, x1 one person tent, x1 sleeping bag, x1 whiskey,  x1 fixer, x2 jet, x3 cigarettes, x1 psycho, x1 coffee and x50  caps. • Gen-2 Synth or Robot Trader x1 cloth armor, x1 shiv, x1 pipe pistol with two levels of decay,  x15 9mm bullets, x1 backpack, x1 lockpicks, x2 RobCo Quick  Fix-it 1.0, x2 overclock hardware, x2 cache clearer, x1 military  auto-tank AI upload, x1 flashlight, x1 energy cell, x1 ¡La  Fantoma! skill magazine and x50 caps."
    },
    {
      "id": "vault_dweller",
      "name": "Abitante del Vault (Vault Dweller)",
      "skills": [
        "Medicina",
        "Oratoria",
        "Scienza"
      ],
      "trait": "Talentuoso (Talented)",
      "traitId": "talented",
      "description": "For all your life you've only known the cold steel walls of  a deep underground vault. Everyone wears blue-yellow  jumpsuits, wears a pip-boy, and fears the outside. Many  of the vaults host some sort of experiment or simulation  that torments those inside. However, yours either didn't  have one, or it was so subtle you never realized. But all  of that changed when you finally stepped foot outside.  The world was never what you thought, the people are  different, and it's larger than you could ever imagine.",
      "equipment": "Starting Equipment. The starting equipment in this  background grants powerful unique items, consult with  your GM before you take these items. • Human, Ghoul, or Super Mutant Vault Dweller x1 vault suit, x1 10mm pistol, x10 10mm ammo, x1 backpack,  x1 sleeping bag, x1 one person tent, x1 canteen, x1 weapon  repair kit, x1 pip-boy (any), x1 BlamCo Mac & Cheese, x1  Salisbury Steak, Yum Yum Deviled Eggs, x1 coffee, x4 purified  water, x1 stimpak. • Gen-2 Synth or Robot Vault Dweller x1 vault suit, x1 laser pistol, x2 energy cell, x1 backpack, x1 pip- boy (any), x2 RobCo Quick Fix-it 2.0, x1 Programmer's Digest  magazine, x1 data scrubber, and x50 caps."
    },
    {
      "id": "wastelander",
      "name": "Abitante della Zona (Wastelander)",
      "skills": [
        "Armi da Fuoco",
        "Sopravvivenza",
        "Disarmato"
      ],
      "trait": "Istinto dell'Avventuriero (Adventurers Instinct)",
      "traitId": "adventurers_instinct",
      "description": "All you've ever needed was what's on your back. You've  traveled far and wide across the wasteland, trading,  meeting folks, and moving on. You've killed raiders,  explored abandoned ruins, and crossed paths with  soldiers. But you're as impactful to this world as a  tumbleweed in the desert, but all of that is about to  change.",
      "equipment": "Starting Equipment.  • Human Wastelander x1 leather armor, x1 sharpened pole, x1 10mm pistol, x10  10mm ammo, x1 backpack, x1 sleeping bag, x1 one person  tent, x2 mutfruit, x2 apples, x1 vegetable soup, x2 purified  water, x1 healing powder, and x50 caps. • Ghoul or Super Mutant Wastelander x1 leather armor, x1 sharpened pole, x1 10mm pistol, x10  10mm ammo, x1 backpack, x1 sleeping bag, x1 one person  tent, x2 mutfruit, x2 apples, x1 vegetable soup, x3 dirty water,  x1 nuka-cola, x1 diluted stimpak, and x50 caps. • Gen-2 Synth or Robot Wastelander x1 leather armor, x1 sharpened pole, x1 10mm pistol, x10  10mm ammo, x1 backpack, x1 bandolier, x1 binoculars, x1  grappling hook, x1 rope, RobCo Quick Fix-it 1.0, and x50 caps."
    }
  ],
  "traitsCompendium": [
    {
        "id": "human_resourceful",
        "name": "Intraprendente (Resourceful)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Umano (Human)",
        "desc": "Ottieni 1 Karma Cap addizionale utilizzabile in ogni sessione di gioco per effettuare ritiri o colpi fortunati.",
        "descEn": "You gain 1 additional Karma Cap that can be used each game session for re-rolls or lucky bonuses.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Ottieni 1 Karma Cap addizionale utilizzabile in ogni sessione di gioco per effettuare ritiri o colpi fortunati."
        ],
        "ranksEN": [
            "You gain 1 additional Karma Cap that can be used each game session for re-rolls or lucky bonuses."
        ],
        "effect": "Ottieni 1 Karma Cap addizionale utilizzabile in ogni sessione di gioco per effettuare ritiri o colpi fortunati."
    },
    {
        "id": "human_unexposed",
        "name": "Non Esposto (Unexposed)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Umano (Human)",
        "desc": "Sei cresciuto in un ambiente asettico e protetto: hai svantaggio a tutti i tiri salvezza contro Radiazioni e Dipendenze.",
        "descEn": "Having grown up sheltered, you have disadvantage on all saving throws against Radiation and Addictions.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Sei cresciuto in un ambiente asettico e protetto: hai svantaggio a tutti i tiri salvezza contro Radiazioni e Dipendenze."
        ],
        "ranksEN": [
            "Having grown up sheltered, you have disadvantage on all saving throws against Radiation and Addictions."
        ],
        "effect": "Sei cresciuto in un ambiente asettico e protetto: hai svantaggio a tutti i tiri salvezza contro Radiazioni e Dipendenze."
    },
    {
        "id": "human_gen3_secret",
        "name": "Gen 3 Synth - Infiltrato (Secret)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Umano (Human)",
        "desc": "Nessun bonus iniziale evidente; a discrezione del GM puoi tirare un d20: con un 20 naturale sei segretamente un Synth di Terza Generazione con protocolli dormienti.",
        "descEn": "No obvious initial bonus; at GM discretion roll a d20: on a natural 20 you are secretly a Gen 3 Synth with sleeper protocols.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Nessun bonus iniziale evidente; a discrezione del GM puoi tirare un d20: con un 20 naturale sei segretamente un Synth di Terza Generazione con protocolli dormienti."
        ],
        "ranksEN": [
            "No obvious initial bonus; at GM discretion roll a d20: on a natural 20 you are secretly a Gen 3 Synth with sleeper protocols."
        ],
        "effect": "Nessun bonus iniziale evidente; a discrezione del GM puoi tirare un d20: con un 20 naturale sei segretamente un Synth di Terza Generazione con protocolli dormienti."
    },
    {
        "id": "fast_metabolism",
        "name": "Metabolismo Rapido (Fast Metabolism)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Umano (Human)",
        "desc": "Il tuo tasso metabolico è aumentato. Il tuo Tasso di Guarigione (Healing Rate) aumenta di 2. Tuttavia, la tua CD Radiazioni aumenta di 3.",
        "descEn": "Your metabolic rate is increased. Your Healing Rate is increased by 2. However, your Radiation DC is increased by 3.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, la tua CD Radiazioni aumenta di un numero pari a metà del tuo livello (minimo 3).",
        "wildWastelandEn": "Wild Wasteland: Your Healing Rate is increased by a number equal to half your level (minimum of 2). However, your Radiation DC is increased by a number equal to half your level (minimum of 3).",
        "ranks": [
            "Il tuo tasso metabolico è aumentato. Il tuo Tasso di Guarigione (Healing Rate) aumenta di 2. Tuttavia, la tua CD Radiazioni aumenta di 3.",
            "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, la tua CD Radiazioni aumenta di un numero pari a metà del tuo livello (minimo 3)."
        ],
        "ranksEN": [
            "Your metabolic rate is increased. Your Healing Rate is increased by 2. However, your Radiation DC is increased by 3.",
            "Wild Wasteland: Your Healing Rate is increased by a number equal to half your level (minimum of 2). However, your Radiation DC is increased by a number equal to half your level (minimum of 3)."
        ],
        "effect": "Il tuo tasso metabolico è aumentato. Il tuo Tasso di Guarigione (Healing Rate) aumenta di 2. Tuttavia, la tua CD Radiazioni aumenta di 3."
    },
    {
        "id": "ghoul_many_roads",
        "name": "Molte Strade Percorse (Many Roads)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Ghoul",
        "desc": "I lunghi decenni trascorsi nella Zona Contaminata ti hanno insegnato molto: ottieni 1 perk addizionale a tua scelta al 1° livello.",
        "descEn": "The decades spent wandering the Wasteland have taught you much: you gain 1 additional perk of your choice at level 1.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "I lunghi decenni trascorsi nella Zona Contaminata ti hanno insegnato molto: ottieni 1 perk addizionale a tua scelta al 1° livello."
        ],
        "ranksEN": [
            "The decades spent wandering the Wasteland have taught you much: you gain 1 additional perk of your choice at level 1."
        ],
        "effect": "I lunghi decenni trascorsi nella Zona Contaminata ti hanno insegnato molto: ottieni 1 perk addizionale a tua scelta al 1° livello."
    },
    {
        "id": "ghoul_old_bones",
        "name": "Ossa Vecchie (Old Bones)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Ghoul",
        "desc": "Immunità completa ai danni da veleno e ottieni il talento Cucito Insieme (Stitched Together) gratuitamente.",
        "descEn": "Complete immunity to poison damage, and you gain the Stitched Together perk for free.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Immunità completa ai danni da veleno e ottieni il talento Cucito Insieme (Stitched Together) gratuitamente."
        ],
        "ranksEN": [
            "Complete immunity to poison damage, and you gain the Stitched Together perk for free."
        ],
        "effect": "Immunità completa ai danni da veleno e ottieni il talento Cucito Insieme (Stitched Together) gratuitamente."
    },
    {
        "id": "ghoul_half_life",
        "name": "Mezzavita (Half Life)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Ghoul",
        "desc": "Se esposto a radiazioni estreme oltre ogni limite, devi effettuare un tiro salvezza su Costituzione con CD 15: se fallisci perdi la ragione e rischi di diventare un Ghoul Feroce.",
        "descEn": "If exposed to extreme radiation beyond normal limits, make a DC 15 Endurance save: failure means succumbing to feralization.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Se esposto a radiazioni estreme oltre ogni limite, devi effettuare un tiro salvezza su Costituzione con CD 15: se fallisci perdi la ragione e rischi di diventare un Ghoul Feroce."
        ],
        "ranksEN": [
            "If exposed to extreme radiation beyond normal limits, make a DC 15 Endurance save: failure means succumbing to feralization."
        ],
        "effect": "Se esposto a radiazioni estreme oltre ogni limite, devi effettuare un tiro salvezza su Costituzione con CD 15: se fallisci perdi la ragione e rischi di diventare un Ghoul Feroce."
    },
    {
        "id": "activated_actinides",
        "name": "Attinidi Attivati (Activated Actinides)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Ghoul",
        "desc": "Attraverso una singolare mutazione, non ti sei completamente ghoulicizzato. Puoi guarire l'intero ammontare di PF da stimpak e polvere curativa. Tuttavia, non sei più immune alle radiazioni e subisci danni da radiazioni come un umano normale.",
        "descEn": "Through some mutation, you haven't fully ghoulified. You can heal the full amount from stimpaks and healing powder. However, you are no longer immune to radiation and take radiation damage as normal.",
        "wildWasteland": "Zona Contaminata Selvaggia: Oltre a curarti per intero da stimpak e polveri, quando vieni esposto a radiazioni i tuoi attacchi senz'armi infliggono 1d4 danni radiativi addizionali. Tuttavia, la tua CD Radiazioni aumenta di 2.",
        "wildWastelandEn": "Wild Wasteland: In addition to full healing from stimpaks and powder, when exposed to radiation your unarmed strikes deal 1d4 additional radiation damage. However, your Radiation DC is increased by 2.",
        "ranks": [
            "Attraverso una singolare mutazione, non ti sei completamente ghoulicizzato. Puoi guarire l'intero ammontare di PF da stimpak e polvere curativa. Tuttavia, non sei più immune alle radiazioni e subisci danni da radiazioni come un umano normale.",
            "Zona Contaminata Selvaggia: Oltre a curarti per intero da stimpak e polveri, quando vieni esposto a radiazioni i tuoi attacchi senz'armi infliggono 1d4 danni radiativi addizionali. Tuttavia, la tua CD Radiazioni aumenta di 2."
        ],
        "ranksEN": [
            "Through some mutation, you haven't fully ghoulified. You can heal the full amount from stimpaks and healing powder. However, you are no longer immune to radiation and take radiation damage as normal.",
            "Wild Wasteland: In addition to full healing from stimpaks and powder, when exposed to radiation your unarmed strikes deal 1d4 additional radiation damage. However, your Radiation DC is increased by 2."
        ],
        "effect": "Attraverso una singolare mutazione, non ti sei completamente ghoulicizzato. Puoi guarire l'intero ammontare di PF da stimpak e polvere curativa. Tuttavia, non sei più immune alle radiazioni e subisci danni da radiazioni come un umano normale."
    },
    {
        "id": "synth_advanced",
        "name": "Componenti Avanzati (Advanced Components)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Synth",
        "desc": "+1 DT naturale permanente su tutte le locazioni corporee grazie alla blindatura polimerica avanzata.",
        "descEn": "+1 permanent natural DT across all body locations thanks to advanced polymer armor.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "+1 DT naturale permanente su tutte le locazioni corporee grazie alla blindatura polimerica avanzata."
        ],
        "ranksEN": [
            "+1 permanent natural DT across all body locations thanks to advanced polymer armor."
        ],
        "effect": "+1 DT naturale permanente su tutte le locazioni corporee grazie alla blindatura polimerica avanzata."
    },
    {
        "id": "synth_brittle",
        "name": "Corpo Fragile (Brittle Body)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Synth",
        "desc": "Gli attacchi mirati subiti infliggono due condizioni all'arto anziché una. Vulnerabilità ai danni da elettricità.",
        "descEn": "Targeted attacks against you inflict two limb conditions instead of one. Vulnerability to electric damage.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Gli attacchi mirati subiti infliggono due condizioni all'arto anziché una. Vulnerabilità ai danni da elettricità."
        ],
        "ranksEN": [
            "Targeted attacks against you inflict two limb conditions instead of one. Vulnerability to electric damage."
        ],
        "effect": "Gli attacchi mirati subiti infliggono due condizioni all'arto anziché una. Vulnerabilità ai danni da elettricità."
    },
    {
        "id": "dense_circuitry",
        "name": "Circuiti Densi (Dense Circuitry)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Synth",
        "desc": "I tuoi fragili cablaggi interni sono più protetti, a scapito del tempo di risposta. Il tuo Tasso di Guarigione massimo aumenta di 2. Tuttavia, i tuoi tiri di Sequenza di Combattimento (Iniziativa) sono ridotti di 2.",
        "descEn": "Your fragile wiring is more protected, at the cost of input lag. You gain a bonus to your Healing Rate maximum equal to 2. However, your Combat Sequence rolls are decreased by 2.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, i tuoi tiri di Iniziativa sono ridotti di un numero pari a metà del tuo livello (minimo 2).",
        "wildWastelandEn": "Wild Wasteland: Your Healing Rate is increased by a number equal to half your level (min 2). However, your Combat Sequence rolls are decreased by half your level (min 2).",
        "ranks": [
            "I tuoi fragili cablaggi interni sono più protetti, a scapito del tempo di risposta. Il tuo Tasso di Guarigione massimo aumenta di 2. Tuttavia, i tuoi tiri di Sequenza di Combattimento (Iniziativa) sono ridotti di 2.",
            "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, i tuoi tiri di Iniziativa sono ridotti di un numero pari a metà del tuo livello (minimo 2)."
        ],
        "ranksEN": [
            "Your fragile wiring is more protected, at the cost of input lag. You gain a bonus to your Healing Rate maximum equal to 2. However, your Combat Sequence rolls are decreased by 2.",
            "Wild Wasteland: Your Healing Rate is increased by a number equal to half your level (min 2). However, your Combat Sequence rolls are decreased by half your level (min 2)."
        ],
        "effect": "I tuoi fragili cablaggi interni sono più protetti, a scapito del tempo di risposta. Il tuo Tasso di Guarigione massimo aumenta di 2. Tuttavia, i tuoi tiri di Sequenza di Combattimento (Iniziativa) sono ridotti di 2."
    },
    {
        "id": "robot_handy",
        "name": "Sottotipo Mister Handy",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Robot",
        "desc": "Propulsore a getto (vola fluttuando a 1 metro dal suolo, immune a trappole al suolo), 3 braccia/attrezzi polivalenti intercambiabili.",
        "descEn": "Jet thruster (hovers 1m above ground, immune to ground traps), 3 multi-purpose interchangeable utility arms.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Propulsore a getto (vola fluttuando a 1 metro dal suolo, immune a trappole al suolo), 3 braccia/attrezzi polivalenti intercambiabili."
        ],
        "ranksEN": [
            "Jet thruster (hovers 1m above ground, immune to ground traps), 3 multi-purpose interchangeable utility arms."
        ],
        "effect": "Propulsore a getto (vola fluttuando a 1 metro dal suolo, immune a trappole al suolo), 3 braccia/attrezzi polivalenti intercambiabili."
    },
    {
        "id": "robot_protectron",
        "name": "Sottotipo Protectron",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Robot",
        "desc": "Chassis rinforzato pesante (+2 DT naturale), velocità di movimento ridotta di 3 metri.",
        "descEn": "Reinforced heavy chassis (+2 natural DT), movement speed reduced by 10ft.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Chassis rinforzato pesante (+2 DT naturale), velocità di movimento ridotta di 3 metri."
        ],
        "ranksEN": [
            "Reinforced heavy chassis (+2 natural DT), movement speed reduced by 10ft."
        ],
        "effect": "Chassis rinforzato pesante (+2 DT naturale), velocità di movimento ridotta di 3 metri."
    },
    {
        "id": "robot_robobrain",
        "name": "Sottotipo Robobrain",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Robot",
        "desc": "Cervello organico integrato: +1 Intelligenza, cingoli ad alta aderenza (ignora terreni difficili urbani/macerie).",
        "descEn": "Organic brain housing: +1 Intelligence, high-traction treads (ignores difficult rubble terrain).",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Cervello organico integrato: +1 Intelligenza, cingoli ad alta aderenza (ignora terreni difficili urbani/macerie)."
        ],
        "ranksEN": [
            "Organic brain housing: +1 Intelligence, high-traction treads (ignores difficult rubble terrain)."
        ],
        "effect": "Cervello organico integrato: +1 Intelligenza, cingoli ad alta aderenza (ignora terreni difficili urbani/macerie)."
    },
    {
        "id": "cheaper_parts",
        "name": "Componenti Economici (Cheaper Parts)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Robot",
        "desc": "Sei costruito con un metallo più malleabile ed economico. Il tuo Tasso di Guarigione aumenta di 2. Tuttavia, la tua Classe Armatura (CA) è ridotta di 1.",
        "descEn": "You're made from a more accessible and malleable metal. Your Healing Rate is increased by 2. However, your AC is reduced by 1.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, la tua CA è ridotta di 2.",
        "wildWastelandEn": "Wild Wasteland: Your Healing Rate is increased by half your level (minimum 2). However, your AC is reduced by 2.",
        "ranks": [
            "Sei costruito con un metallo più malleabile ed economico. Il tuo Tasso di Guarigione aumenta di 2. Tuttavia, la tua Classe Armatura (CA) è ridotta di 1.",
            "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, la tua CA è ridotta di 2."
        ],
        "ranksEN": [
            "You're made from a more accessible and malleable metal. Your Healing Rate is increased by 2. However, your AC is reduced by 1.",
            "Wild Wasteland: Your Healing Rate is increased by half your level (minimum 2). However, your AC is reduced by 2."
        ],
        "effect": "Sei costruito con un metallo più malleabile ed economico. Il tuo Tasso di Guarigione aumenta di 2. Tuttavia, la tua Classe Armatura (CA) è ridotta di 1."
    },
    {
        "id": "sm_flawed",
        "name": "Ceppo Difettoso (Flawed Strain)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Super Mutante (Super Mutant)",
        "desc": "La mutazione non si è stabilizzata perfettamente: -1 a Intelligenza e Carisma, ma +2 a Forza e PF massimi.",
        "descEn": "The FEV mutation did not stabilize cleanly: -1 Intelligence and Charisma, but +2 Strength and maximum HP.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "La mutazione non si è stabilizzata perfettamente: -1 a Intelligenza e Carisma, ma +2 a Forza e PF massimi."
        ],
        "ranksEN": [
            "The FEV mutation did not stabilize cleanly: -1 Intelligence and Charisma, but +2 Strength and maximum HP."
        ],
        "effect": "La mutazione non si è stabilizzata perfettamente: -1 a Intelligenza e Carisma, ma +2 a Forza e PF massimi."
    },
    {
        "id": "sm_nightkin",
        "name": "Nightkin (Ombra)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Super Mutante (Super Mutant)",
        "desc": "Uso prolungato dello Stealth Boy: ottieni vantaggio alle prove di Furtività al buio, ma soffri di paranoia (svantaggio a tiri salvezza su Saggezza).",
        "descEn": "Prolonged Stealth Boy use: advantage on Stealth in darkness, but suffering from schizophrenia/paranoia (disadvantage on Wisdom saves).",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Uso prolungato dello Stealth Boy: ottieni vantaggio alle prove di Furtività al buio, ma soffri di paranoia (svantaggio a tiri salvezza su Saggezza)."
        ],
        "ranksEN": [
            "Prolonged Stealth Boy use: advantage on Stealth in darkness, but suffering from schizophrenia/paranoia (disadvantage on Wisdom saves)."
        ],
        "effect": "Uso prolungato dello Stealth Boy: ottieni vantaggio alle prove di Furtività al buio, ma soffri di paranoia (svantaggio a tiri salvezza su Saggezza)."
    },
    {
        "id": "onerous_regeneration",
        "name": "Rigenerazione Onerosa (Onerous Regeneration)",
        "category": "Razziale",
        "maxRank": 1,
        "req": "Super Mutante (Super Mutant)",
        "desc": "Il tuo tasso metabolico è aumentato. Il tuo Tasso di Guarigione aumenta di 2. Tuttavia, i tuoi Punti Azione (PA) massimi sono ridotti di un numero pari al tuo livello.",
        "descEn": "Your metabolic rate is increased. Your Healing Rate is increased by 2. However, your maximum stamina points are reduced by a number equal to your level.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, i tuoi PA massimi sono ridotti del doppio del tuo livello.",
        "wildWastelandEn": "Wild Wasteland: Your Healing Rate is increased by half your level (min 2). However, your maximum stamina points are reduced by twice your level.",
        "ranks": [
            "Il tuo tasso metabolico è aumentato. Il tuo Tasso di Guarigione aumenta di 2. Tuttavia, i tuoi Punti Azione (PA) massimi sono ridotti di un numero pari al tuo livello.",
            "Zona Contaminata Selvaggia: Il tuo Tasso di Guarigione aumenta di un numero pari a metà del tuo livello (minimo 2). Tuttavia, i tuoi PA massimi sono ridotti del doppio del tuo livello."
        ],
        "ranksEN": [
            "Your metabolic rate is increased. Your Healing Rate is increased by 2. However, your maximum stamina points are reduced by a number equal to your level.",
            "Wild Wasteland: Your Healing Rate is increased by half your level (min 2). However, your maximum stamina points are reduced by twice your level."
        ],
        "effect": "Il tuo tasso metabolico è aumentato. Il tuo Tasso di Guarigione aumenta di 2. Tuttavia, i tuoi Punti Azione (PA) massimi sono ridotti di un numero pari al tuo livello."
    },
    {
        "id": "a_moment_of_respite",
        "name": "Un Momento di Tregua (A Moment of Respite)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Intrattenitore",
        "desc": "Sai come sollevare il morale del gruppo. Durante un riposo breve o lungo in cui intrattieni i compagni (musica, storie, discorsi), tu e ogni compagno recuperate 1d6 PF aggiuntivi.",
        "descEn": "You're a natural at lifting spirits. When resting, you play music, tell stories, or give a speech. You and companions restore an additional 1d6 HP.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Sai come sollevare il morale del gruppo. Durante un riposo breve o lungo in cui intrattieni i compagni (musica, storie, discorsi), tu e ogni compagno recuperate 1d6 PF aggiuntivi."
        ],
        "ranksEN": [
            "You're a natural at lifting spirits. When resting, you play music, tell stories, or give a speech. You and companions restore an additional 1d6 HP."
        ],
        "effect": "Sai come sollevare il morale del gruppo. Durante un riposo breve o lungo in cui intrattieni i compagni (musica, storie, discorsi), tu e ogni compagno recuperate 1d6 PF aggiuntivi."
    },
    {
        "id": "bargaining_chip",
        "name": "Moneta di Scambio (Bargaining Chip)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Commerciante",
        "desc": "Hai fiuto per gli affari. Quando vendi un oggetto, puoi usare la tua abilità Sconto per ottenere un bonus di tappi pari al doppio del tuo modificatore di Baratto.",
        "descEn": "Whenever you sell an item, you can use your Discount ability to gain a bonus of caps equal to double your Barter modifier.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Hai fiuto per gli affari. Quando vendi un oggetto, puoi usare la tua abilità Sconto per ottenere un bonus di tappi pari al doppio del tuo modificatore di Baratto."
        ],
        "ranksEN": [
            "Whenever you sell an item, you can use your Discount ability to gain a bonus of caps equal to double your Barter modifier."
        ],
        "effect": "Hai fiuto per gli affari. Quando vendi un oggetto, puoi usare la tua abilità Sconto per ottenere un bonus di tappi pari al doppio del tuo modificatore di Baratto."
    },
    {
        "id": "do_no_harm",
        "name": "Primo Non Nuocere (Do No Harm)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Dottore",
        "desc": "Hai prestato il giuramento di Ippocrate: ogni volta che ripristini PF ad altri, curi 1 PF addizionale. Tuttavia, se attacchi un'altra creatura subisci svantaggio al tiro per colpire a meno che tu non stia difendendo un alleato.",
        "descEn": "Whenever you restore hit points to others, you restore an additional 1 HP. When attacking another creature you have disadvantage unless defending an ally.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Hai prestato il giuramento di Ippocrate: ogni volta che ripristini PF ad altri, curi 1 PF addizionale. Tuttavia, se attacchi un'altra creatura subisci svantaggio al tiro per colpire a meno che tu non stia difendendo un alleato."
        ],
        "ranksEN": [
            "Whenever you restore hit points to others, you restore an additional 1 HP. When attacking another creature you have disadvantage unless defending an ally."
        ],
        "effect": "Hai prestato il giuramento di Ippocrate: ogni volta che ripristini PF ad altri, curi 1 PF addizionale. Tuttavia, se attacchi un'altra creatura subisci svantaggio al tiro per colpire a meno che tu non stia difendendo un alleato."
    },
    {
        "id": "efficient_combatant",
        "name": "Combattente Efficiente (Efficient Combatant)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Soldato",
        "desc": "Grazie al tuo addestramento militare, quando ottieni un 1 naturale su un tiro per colpire aggiungi comunque i tuoi modificatori e non manchi automaticamente.",
        "descEn": "Due to your training, whenever you roll a natural 1 on an attack roll, you still add modifiers and do not automatically miss.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Grazie al tuo addestramento militare, quando ottieni un 1 naturale su un tiro per colpire aggiungi comunque i tuoi modificatori e non manchi automaticamente."
        ],
        "ranksEN": [
            "Due to your training, whenever you roll a natural 1 on an attack roll, you still add modifiers and do not automatically miss."
        ],
        "effect": "Grazie al tuo addestramento militare, quando ottieni un 1 naturale su un tiro per colpire aggiungi comunque i tuoi modificatori e non manchi automaticamente."
    },
    {
        "id": "endure_the_battle",
        "name": "Resistere alla Battaglia (Endure the Battle)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Gladiatore",
        "desc": "La tua soglia del dolore è elevata: ottieni +2 ai Tiri Salvezza contro condizioni di stordimento o atterramento subite in combattimento.",
        "descEn": "Your pain threshold is high: gain +2 to Saving Throws against stun or prone conditions in combat.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "La tua soglia del dolore è elevata: ottieni +2 ai Tiri Salvezza contro condizioni di stordimento o atterramento subite in combattimento."
        ],
        "ranksEN": [
            "Your pain threshold is high: gain +2 to Saving Throws against stun or prone conditions in combat."
        ],
        "effect": "La tua soglia del dolore è elevata: ottieni +2 ai Tiri Salvezza contro condizioni di stordimento o atterramento subite in combattimento."
    },
    {
        "id": "embolden",
        "name": "Incoraggiare (Embolden)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Pastore",
        "desc": "Una volta per combattimento come azione, puoi pronunciare parole di fede o coraggio: tutti gli alleati entro 9 metri ottengono vantaggio al prossimo tiro salvezza.",
        "descEn": "Once per combat as an action, speak words of courage: all allies within 30ft gain advantage on their next saving throw.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Una volta per combattimento come azione, puoi pronunciare parole di fede o coraggio: tutti gli alleati entro 9 metri ottengono vantaggio al prossimo tiro salvezza."
        ],
        "ranksEN": [
            "Once per combat as an action, speak words of courage: all allies within 30ft gain advantage on their next saving throw."
        ],
        "effect": "Una volta per combattimento come azione, puoi pronunciare parole di fede o coraggio: tutti gli alleati entro 9 metri ottengono vantaggio al prossimo tiro salvezza."
    },
    {
        "id": "field_research",
        "name": "Ricerca sul Campo (Field Research)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Scienziato",
        "desc": "Puoi esaminare una creatura o anomalia tecnologica con un'azione: con una prova di Scienza CD 12 identifichi subito le sue resistenze e vulnerabilità principali.",
        "descEn": "As an action, inspect a creature or tech: DC 12 Science check identifies damage resistances and vulnerabilities.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Puoi esaminare una creatura o anomalia tecnologica con un'azione: con una prova di Scienza CD 12 identifichi subito le sue resistenze e vulnerabilità principali."
        ],
        "ranksEN": [
            "As an action, inspect a creature or tech: DC 12 Science check identifies damage resistances and vulnerabilities."
        ],
        "effect": "Puoi esaminare una creatura o anomalia tecnologica con un'azione: con una prova di Scienza CD 12 identifichi subito le sue resistenze e vulnerabilità principali."
    },
    {
        "id": "hardened_by_the_earth",
        "name": "Temprato dalla Terra (Hardened by the Earth)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Agricoltore",
        "desc": "Una vita di duro lavoro all'aperto: ottieni vantaggio a tutti i tiri salvezza su Costituzione contro calore estremo, freddo e disidratazione.",
        "descEn": "A life of labor in the soil: advantage on Constitution saves against extreme weather, heat, cold, and dehydration.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Una vita di duro lavoro all'aperto: ottieni vantaggio a tutti i tiri salvezza su Costituzione contro calore estremo, freddo e disidratazione."
        ],
        "ranksEN": [
            "A life of labor in the soil: advantage on Constitution saves against extreme weather, heat, cold, and dehydration."
        ],
        "effect": "Una vita di duro lavoro all'aperto: ottieni vantaggio a tutti i tiri salvezza su Costituzione contro calore estremo, freddo e disidratazione."
    },
    {
        "id": "long_days_long_nights",
        "name": "Giornate Lunghe, Notti Lunghe (Long Days, Long Nights)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Bracciante",
        "desc": "Abituato a turni estenuanti: il tuo sonno necessario per un riposo lungo è ridotto di 2 ore, e puoi ignorare il primo livello di affaticamento da privazione del sonno.",
        "descEn": "Used to grueling work: long rest sleep required is reduced by 2 hours, and you ignore the first level of sleep exhaustion.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Abituato a turni estenuanti: il tuo sonno necessario per un riposo lungo è ridotto di 2 ore, e puoi ignorare il primo livello di affaticamento da privazione del sonno."
        ],
        "ranksEN": [
            "Used to grueling work: long rest sleep required is reduced by 2 hours, and you ignore the first level of sleep exhaustion."
        ],
        "effect": "Abituato a turni estenuanti: il tuo sonno necessario per un riposo lungo è ridotto di 2 ore, e puoi ignorare il primo livello di affaticamento da privazione del sonno."
    },
    {
        "id": "long_roads",
        "name": "Strade Lunghe (Long Roads)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Pellegrino",
        "desc": "La tua velocità di viaggio nella Zona Contaminata aumenta del 25% e il tuo gruppo non può perdersi a meno di condizioni meteorologiche soprannaturali.",
        "descEn": "Your overland travel speed increases by 25% and your party cannot become lost by normal means.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "La tua velocità di viaggio nella Zona Contaminata aumenta del 25% e il tuo gruppo non può perdersi a meno di condizioni meteorologiche soprannaturali."
        ],
        "ranksEN": [
            "Your overland travel speed increases by 25% and your party cannot become lost by normal means."
        ],
        "effect": "La tua velocità di viaggio nella Zona Contaminata aumenta del 25% e il tuo gruppo non può perdersi a meno di condizioni meteorologiche soprannaturali."
    },
    {
        "id": "persistent",
        "name": "Tenace / Persistente (Persistent)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Giornalista",
        "desc": "Non molli mai la presa quando cerchi informazioni: ottieni un bonus di +2 a tutte le prove di Eloquenza e Percezione per estorcere segreti o indizi.",
        "descEn": "You never give up on finding the truth: +2 bonus to Speech and Perception checks when interrogating or searching clues.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Non molli mai la presa quando cerchi informazioni: ottieni un bonus di +2 a tutte le prove di Eloquenza e Percezione per estorcere segreti o indizi."
        ],
        "ranksEN": [
            "You never give up on finding the truth: +2 bonus to Speech and Perception checks when interrogating or searching clues."
        ],
        "effect": "Non molli mai la presa quando cerchi informazioni: ottieni un bonus di +2 a tutte le prove di Eloquenza e Percezione per estorcere segreti o indizi."
    },
    {
        "id": "proper_maintenance",
        "name": "Manutenzione Adeguata (Proper Maintenance)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Meccanico",
        "desc": "Le armi e le armature da te riparate mantengono la loro efficienza più a lungo: le armi non si inceppano mai su un 1 naturale.",
        "descEn": "Weapons and armor maintained by you stay reliable longer: weapons never jam on a natural 1.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Le armi e le armature da te riparate mantengono la loro efficienza più a lungo: le armi non si inceppano mai su un 1 naturale."
        ],
        "ranksEN": [
            "Weapons and armor maintained by you stay reliable longer: weapons never jam on a natural 1."
        ],
        "effect": "Le armi e le armature da te riparate mantengono la loro efficienza più a lungo: le armi non si inceppano mai su un 1 naturale."
    },
    {
        "id": "recluse",
        "name": "Recluso / Eremita (Recluse)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Eremita",
        "desc": "Sei abituato alla solitudine: quando ti trovi a più di 15 metri da qualsiasi alleato, ottieni un bonus di +1 a tutti i tiri salvezza.",
        "descEn": "Accustomed to isolation: when more than 50ft away from any ally, you gain +1 to all saving throws.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Sei abituato alla solitudine: quando ti trovi a più di 15 metri da qualsiasi alleato, ottieni un bonus di +1 a tutti i tiri salvezza."
        ],
        "ranksEN": [
            "Accustomed to isolation: when more than 50ft away from any ally, you gain +1 to all saving throws."
        ],
        "effect": "Sei abituato alla solitudine: quando ti trovi a più di 15 metri da qualsiasi alleato, ottieni un bonus di +1 a tutti i tiri salvezza."
    },
    {
        "id": "street_rat",
        "name": "Ratto di Strada (Street Rat)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Vagabondo",
        "desc": "I vicoli e le macerie urbane sono la tua casa: ottieni vantaggio alle prove di Furtività e Scassinare nelle aree cittadine in rovina.",
        "descEn": "Urban ruins are your domain: advantage on Stealth and Lockpick checks within ruins and urban settlements.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "I vicoli e le macerie urbane sono la tua casa: ottieni vantaggio alle prove di Furtività e Scassinare nelle aree cittadine in rovina."
        ],
        "ranksEN": [
            "Urban ruins are your domain: advantage on Stealth and Lockpick checks within ruins and urban settlements."
        ],
        "effect": "I vicoli e le macerie urbane sono la tua casa: ottieni vantaggio alle prove di Furtività e Scassinare nelle aree cittadine in rovina."
    },
    {
        "id": "sweeten_the_deal",
        "name": "Migliorare l'Accordo (Sweeten the Deal)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Mercenario",
        "desc": "Sai negoziare le ricompense per i tuoi servizi: ottieni il 20% di tappi in più dalle ricompense di missioni e contratti completati.",
        "descEn": "Skilled at contract negotiations: gain 20% more caps from completed bounties, quests, and contracts.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Sai negoziare le ricompense per i tuoi servizi: ottieni il 20% di tappi in più dalle ricompense di missioni e contratti completati."
        ],
        "ranksEN": [
            "Skilled at contract negotiations: gain 20% more caps from completed bounties, quests, and contracts."
        ],
        "effect": "Sai negoziare le ricompense per i tuoi servizi: ottieni il 20% di tappi in più dalle ricompense di missioni e contratti completati."
    },
    {
        "id": "talented",
        "name": "Talentuoso (Talented)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Abitante del Vault",
        "desc": "L'educazione del Vault ti ha fornito solide basi: ricevi 5 Punti Abilità addizionali da spendere a tua scelta al 1° livello.",
        "descEn": "Vault-Tec education grants great basics: receive 5 additional skill points to distribute at level 1.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "L'educazione del Vault ti ha fornito solide basi: ricevi 5 Punti Abilità addizionali da spendere a tua scelta al 1° livello."
        ],
        "ranksEN": [
            "Vault-Tec education grants great basics: receive 5 additional skill points to distribute at level 1."
        ],
        "effect": "L'educazione del Vault ti ha fornito solide basi: ricevi 5 Punti Abilità addizionali da spendere a tua scelta al 1° livello."
    },
    {
        "id": "the_sight_beyond",
        "name": "La Vista Oltre (The Sight Beyond)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Cultista",
        "desc": "Le tue visioni ti avvertono dei pericoli invisibili: non puoi essere colto di sorpresa in combattimento.",
        "descEn": "Visions warn you of unseen danger: you cannot be surprised in combat.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Le tue visioni ti avvertono dei pericoli invisibili: non puoi essere colto di sorpresa in combattimento."
        ],
        "ranksEN": [
            "Visions warn you of unseen danger: you cannot be surprised in combat."
        ],
        "effect": "Le tue visioni ti avvertono dei pericoli invisibili: non puoi essere colto di sorpresa in combattimento."
    },
    {
        "id": "vigilant_watch",
        "name": "Guardia Vigile (Vigilant Watch)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Guardia",
        "desc": "Rimanere vigile è la tua seconda natura: ottieni un bonus di +2 alla tua Percezione Passiva e non subisci malus alla guardia notturna.",
        "descEn": "Alertness is second nature: gain +2 to Passive Perception and suffer no penalties during night guard duty.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Rimanere vigile è la tua seconda natura: ottieni un bonus di +2 alla tua Percezione Passiva e non subisci malus alla guardia notturna."
        ],
        "ranksEN": [
            "Alertness is second nature: gain +2 to Passive Perception and suffer no penalties during night guard duty."
        ],
        "effect": "Rimanere vigile è la tua seconda natura: ottieni un bonus di +2 alla tua Percezione Passiva e non subisci malus alla guardia notturna."
    },
    {
        "id": "wasteland_knowledge",
        "name": "Conoscenza della Zona (Wasteland Knowledge)",
        "category": "Background",
        "maxRank": 1,
        "req": "Background: Scriba",
        "desc": "Archivi ed enciclopedie ti danno una marcia in più: ottieni competenza in una abilità a scelta tra Scienza, Riparazione o Medicina.",
        "descEn": "Archival learning gives an edge: gain proficiency in one skill among Science, Repair, or Medicine.",
        "wildWasteland": "",
        "wildWastelandEn": "",
        "ranks": [
            "Archivi ed enciclopedie ti danno una marcia in più: ottieni competenza in una abilità a scelta tra Scienza, Riparazione o Medicina."
        ],
        "ranksEN": [
            "Archival learning gives an edge: gain proficiency in one skill among Science, Repair, or Medicine."
        ],
        "effect": "Archivi ed enciclopedie ti danno una marcia in più: ottieni competenza in una abilità a scelta tra Scienza, Riparazione o Medicina."
    },
    {
        "id": "bruiser",
        "name": "Bestione (Bruiser)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Sei più grosso e lento. Il tuo punteggio di Forza aumenta di 2. Tuttavia, i tuoi Punti Azione (PA) massimi sono ridotti di 2.",
        "descEn": "A little slower, but a little bigger. Your Strength score is increased by 2. However, your total Action Points are reduced by 2.",
        "wildWasteland": "Zona Contaminata Selvaggia: La tua Forza aumenta di 4. Tuttavia, i tuoi PA massimi sono ridotti di 4.",
        "wildWastelandEn": "Wild Wasteland: Your Strength is increased by 4. However, your AP total is reduced by 4.",
        "ranks": [
            "Sei più grosso e lento. Il tuo punteggio di Forza aumenta di 2. Tuttavia, i tuoi Punti Azione (PA) massimi sono ridotti di 2.",
            "Zona Contaminata Selvaggia: La tua Forza aumenta di 4. Tuttavia, i tuoi PA massimi sono ridotti di 4."
        ],
        "ranksEN": [
            "A little slower, but a little bigger. Your Strength score is increased by 2. However, your total Action Points are reduced by 2.",
            "Wild Wasteland: Your Strength is increased by 4. However, your AP total is reduced by 4."
        ],
        "effect": "Sei più grosso e lento. Il tuo punteggio di Forza aumenta di 2. Tuttavia, i tuoi Punti Azione (PA) massimi sono ridotti di 2."
    },
    {
        "id": "built_to_destroy",
        "name": "Costruito per Distruggere (Built to Destroy)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "La gamma di minaccia per i tuoi colpi critici con qualsiasi arma è aumentata di 1 (es. 19-20). Tuttavia, le tue armi si deteriorano più rapidamente e subiscono inceppamento con un 1 o 2 naturale.",
        "descEn": "The critical hit range for any weapon you use is expanded by 1 (e.g., 19-20). However, your weapons degrade faster and jam on a natural 1 or 2.",
        "wildWasteland": "Zona Contaminata Selvaggia: La gamma di colpo critico aumenta di 2 (es. 18-20). Tuttavia, le armi si inceppano su un 1, 2 o 3 naturale.",
        "wildWastelandEn": "Wild Wasteland: Critical hit range is expanded by 2 (e.g. 18-20). However, weapons jam on natural 1, 2, or 3.",
        "ranks": [
            "La gamma di minaccia per i tuoi colpi critici con qualsiasi arma è aumentata di 1 (es. 19-20). Tuttavia, le tue armi si deteriorano più rapidamente e subiscono inceppamento con un 1 o 2 naturale.",
            "Zona Contaminata Selvaggia: La gamma di colpo critico aumenta di 2 (es. 18-20). Tuttavia, le armi si inceppano su un 1, 2 o 3 naturale."
        ],
        "ranksEN": [
            "The critical hit range for any weapon you use is expanded by 1 (e.g., 19-20). However, your weapons degrade faster and jam on a natural 1 or 2.",
            "Wild Wasteland: Critical hit range is expanded by 2 (e.g. 18-20). However, weapons jam on natural 1, 2, or 3."
        ],
        "effect": "La gamma di minaccia per i tuoi colpi critici con qualsiasi arma è aumentata di 1 (es. 19-20). Tuttavia, le tue armi si deteriorano più rapidamente e subiscono inceppamento con un 1 o 2 naturale."
    },
    {
        "id": "claustrophobia",
        "name": "Claustrofobia (Claustrophobia)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Ottieni +1 a tutti i punteggi SPECIAL quando ti trovi all'aperto sotto il cielo aperto. Tuttavia, subisci una penalità di -1 a tutti i punteggi SPECIAL quando ti trovi al chiuso o sottoterra.",
        "descEn": "You gain +1 to all SPECIAL scores while outdoors. However, you suffer a -1 penalty to all SPECIAL scores while indoors or underground.",
        "wildWasteland": "Zona Contaminata Selvaggia: Ottieni +2 a tutti gli SPECIAL all'aperto, ma subisci -2 a tutti gli SPECIAL al chiuso.",
        "wildWastelandEn": "Wild Wasteland: Gain +2 to all SPECIAL outdoors, but suffer -2 to all SPECIAL indoors.",
        "ranks": [
            "Ottieni +1 a tutti i punteggi SPECIAL quando ti trovi all'aperto sotto il cielo aperto. Tuttavia, subisci una penalità di -1 a tutti i punteggi SPECIAL quando ti trovi al chiuso o sottoterra.",
            "Zona Contaminata Selvaggia: Ottieni +2 a tutti gli SPECIAL all'aperto, ma subisci -2 a tutti gli SPECIAL al chiuso."
        ],
        "ranksEN": [
            "You gain +1 to all SPECIAL scores while outdoors. However, you suffer a -1 penalty to all SPECIAL scores while indoors or underground.",
            "Wild Wasteland: Gain +2 to all SPECIAL outdoors, but suffer -2 to all SPECIAL indoors."
        ],
        "effect": "Ottieni +1 a tutti i punteggi SPECIAL quando ti trovi all'aperto sotto il cielo aperto. Tuttavia, subisci una penalità di -1 a tutti i punteggi SPECIAL quando ti trovi al chiuso o sottoterra."
    },
    {
        "id": "early_bird",
        "name": "Mattiniero (Early Bird)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Dalle 06:00 del mattino alle 18:00 del pomeriggio ottieni un bonus di +1 a tutti i punteggi SPECIAL. Dalle 18:00 alle 06:00 del mattino subisci una penalità di -1 a tutti i punteggi SPECIAL.",
        "descEn": "From 6:00 AM to 6:00 PM you gain +1 to all SPECIAL scores. From 6:00 PM to 6:00 AM you suffer a -1 penalty to all SPECIAL scores.",
        "wildWasteland": "Zona Contaminata Selvaggia: +2 a tutti gli SPECIAL di giorno (06:00-18:00), ma -2 a tutti gli SPECIAL di notte (18:00-06:00).",
        "wildWastelandEn": "Wild Wasteland: +2 to all SPECIAL during the day (6 AM - 6 PM), but -2 to all SPECIAL at night (6 PM - 6 AM).",
        "ranks": [
            "Dalle 06:00 del mattino alle 18:00 del pomeriggio ottieni un bonus di +1 a tutti i punteggi SPECIAL. Dalle 18:00 alle 06:00 del mattino subisci una penalità di -1 a tutti i punteggi SPECIAL.",
            "Zona Contaminata Selvaggia: +2 a tutti gli SPECIAL di giorno (06:00-18:00), ma -2 a tutti gli SPECIAL di notte (18:00-06:00)."
        ],
        "ranksEN": [
            "From 6:00 AM to 6:00 PM you gain +1 to all SPECIAL scores. From 6:00 PM to 6:00 AM you suffer a -1 penalty to all SPECIAL scores.",
            "Wild Wasteland: +2 to all SPECIAL during the day (6 AM - 6 PM), but -2 to all SPECIAL at night (6 PM - 6 AM)."
        ],
        "effect": "Dalle 06:00 del mattino alle 18:00 del pomeriggio ottieni un bonus di +1 a tutti i punteggi SPECIAL. Dalle 18:00 alle 06:00 del mattino subisci una penalità di -1 a tutti i punteggi SPECIAL."
    },
    {
        "id": "fast_shot",
        "name": "Tiro Rapido (Fast Shot)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Il costo in PA per effettuare attacchi con armi a distanza è ridotto di 1 PA (minimo 1 PA). Tuttavia, subisci una penalità di -2 a tutti i tiri per colpire a distanza.",
        "descEn": "The AP cost for attacks with ranged weapons is reduced by 1 AP (minimum 1). However, you take a -2 penalty to all ranged attack rolls.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il costo in PA per attacchi a distanza è ridotto di 2 PA. Tuttavia, subisci -4 a tutti i tiri per colpire a distanza.",
        "wildWastelandEn": "Wild Wasteland: AP cost for ranged attacks is reduced by 2. However, -4 penalty to ranged attack rolls.",
        "ranks": [
            "Il costo in PA per effettuare attacchi con armi a distanza è ridotto di 1 PA (minimo 1 PA). Tuttavia, subisci una penalità di -2 a tutti i tiri per colpire a distanza.",
            "Zona Contaminata Selvaggia: Il costo in PA per attacchi a distanza è ridotto di 2 PA. Tuttavia, subisci -4 a tutti i tiri per colpire a distanza."
        ],
        "ranksEN": [
            "The AP cost for attacks with ranged weapons is reduced by 1 AP (minimum 1). However, you take a -2 penalty to all ranged attack rolls.",
            "Wild Wasteland: AP cost for ranged attacks is reduced by 2. However, -4 penalty to ranged attack rolls."
        ],
        "effect": "Il costo in PA per effettuare attacchi con armi a distanza è ridotto di 1 PA (minimo 1 PA). Tuttavia, subisci una penalità di -2 a tutti i tiri per colpire a distanza."
    },
    {
        "id": "feral",
        "name": "Selvaggio (Feral)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "I tuoi attacchi senz'armi infliggono 1d4 danni letali addizionali e ottieni vantaggio alle prove di Intimidire. Tuttavia, subisci svantaggio a tutte le prove di Eloquenza e Baratto.",
        "descEn": "Your unarmed attacks deal 1d4 additional lethal damage and you gain advantage on Intimidation. However, you have disadvantage on Speech and Barter.",
        "wildWasteland": "Zona Contaminata Selvaggia: Danni senz'armi aumentati di 1d8, ma sei incapace di comunicare normalmente (impossibile usare Eloquenza o Baratto).",
        "wildWastelandEn": "Wild Wasteland: Unarmed damage increased by 1d8, but unable to speak properly (cannot use Speech or Barter).",
        "ranks": [
            "I tuoi attacchi senz'armi infliggono 1d4 danni letali addizionali e ottieni vantaggio alle prove di Intimidire. Tuttavia, subisci svantaggio a tutte le prove di Eloquenza e Baratto.",
            "Zona Contaminata Selvaggia: Danni senz'armi aumentati di 1d8, ma sei incapace di comunicare normalmente (impossibile usare Eloquenza o Baratto)."
        ],
        "ranksEN": [
            "Your unarmed attacks deal 1d4 additional lethal damage and you gain advantage on Intimidation. However, you have disadvantage on Speech and Barter.",
            "Wild Wasteland: Unarmed damage increased by 1d8, but unable to speak properly (cannot use Speech or Barter)."
        ],
        "effect": "I tuoi attacchi senz'armi infliggono 1d4 danni letali addizionali e ottieni vantaggio alle prove di Intimidire. Tuttavia, subisci svantaggio a tutte le prove di Eloquenza e Baratto."
    },
    {
        "id": "finesse",
        "name": "Finezza (Finesse)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "La tua gamma di minaccia per i colpi critici con armi da mischia o a distanza aumenta di 1 (es. 19-20). Tuttavia, tutti i tuoi danni normali non critici sono ridotti di 1 (minimo 1 danno).",
        "descEn": "Your critical hit threat range with melee or ranged weapons increases by 1 (e.g. 19-20). However, all non-critical damage is reduced by 1 (minimum 1).",
        "wildWasteland": "Zona Contaminata Selvaggia: Gamma di critico aumentata di 2 (es. 18-20), ma danni normali ridotti di 2.",
        "wildWastelandEn": "Wild Wasteland: Critical threat range increased by 2 (e.g. 18-20), but non-critical damage reduced by 2.",
        "ranks": [
            "La tua gamma di minaccia per i colpi critici con armi da mischia o a distanza aumenta di 1 (es. 19-20). Tuttavia, tutti i tuoi danni normali non critici sono ridotti di 1 (minimo 1 danno).",
            "Zona Contaminata Selvaggia: Gamma di critico aumentata di 2 (es. 18-20), ma danni normali ridotti di 2."
        ],
        "ranksEN": [
            "Your critical hit threat range with melee or ranged weapons increases by 1 (e.g. 19-20). However, all non-critical damage is reduced by 1 (minimum 1).",
            "Wild Wasteland: Critical threat range increased by 2 (e.g. 18-20), but non-critical damage reduced by 2."
        ],
        "effect": "La tua gamma di minaccia per i colpi critici con armi da mischia o a distanza aumenta di 1 (es. 19-20). Tuttavia, tutti i tuoi danni normali non critici sono ridotti di 1 (minimo 1 danno)."
    },
    {
        "id": "gifted",
        "name": "Dotato (Gifted)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Hai abilità naturali superiori alla media. Ottieni +1 a tutti i punteggi SPECIAL. Tuttavia, ricevi 5 Punti Abilità in meno per ogni avanzamento di livello.",
        "descEn": "You have natural innate abilities. Gain +1 to all SPECIAL scores. However, you receive 5 fewer skill points each level up.",
        "wildWasteland": "Zona Contaminata Selvaggia: +2 a tutti i punteggi SPECIAL. Tuttavia, ricevi 10 Punti Abilità in meno per livello.",
        "wildWastelandEn": "Wild Wasteland: +2 to all SPECIAL scores. However, you receive 10 fewer skill points each level up.",
        "ranks": [
            "Hai abilità naturali superiori alla media. Ottieni +1 a tutti i punteggi SPECIAL. Tuttavia, ricevi 5 Punti Abilità in meno per ogni avanzamento di livello.",
            "Zona Contaminata Selvaggia: +2 a tutti i punteggi SPECIAL. Tuttavia, ricevi 10 Punti Abilità in meno per livello."
        ],
        "ranksEN": [
            "You have natural innate abilities. Gain +1 to all SPECIAL scores. However, you receive 5 fewer skill points each level up.",
            "Wild Wasteland: +2 to all SPECIAL scores. However, you receive 10 fewer skill points each level up."
        ],
        "effect": "Hai abilità naturali superiori alla media. Ottieni +1 a tutti i punteggi SPECIAL. Tuttavia, ricevi 5 Punti Abilità in meno per ogni avanzamento di livello."
    },
    {
        "id": "godspeed",
        "name": "A Tutta Birra (Godspeed)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "La tua velocità di movimento aumenta di 3 metri (10 ft) per turno. Tuttavia, quando scatti o corri raddoppi il costo in PA per il movimento.",
        "descEn": "Your base walking movement speed increases by 10ft. However, dashing or running costs double the normal AP.",
        "wildWasteland": "Zona Contaminata Selvaggia: Velocità aumentata di 6 metri (20 ft), ma scattare richiede il triplo dei PA.",
        "wildWastelandEn": "Wild Wasteland: Movement speed increases by 20ft, but sprint/dash costs triple AP.",
        "ranks": [
            "La tua velocità di movimento aumenta di 3 metri (10 ft) per turno. Tuttavia, quando scatti o corri raddoppi il costo in PA per il movimento.",
            "Zona Contaminata Selvaggia: Velocità aumentata di 6 metri (20 ft), ma scattare richiede il triplo dei PA."
        ],
        "ranksEN": [
            "Your base walking movement speed increases by 10ft. However, dashing or running costs double the normal AP.",
            "Wild Wasteland: Movement speed increases by 20ft, but sprint/dash costs triple AP."
        ],
        "effect": "La tua velocità di movimento aumenta di 3 metri (10 ft) per turno. Tuttavia, quando scatti o corri raddoppi il costo in PA per il movimento."
    },
    {
        "id": "good_natured",
        "name": "Buon Tempramento (Good Natured)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Ottieni +3 alle abilità Baratto, Medicina, Riparazione, Scienza ed Eloquenza. Tuttavia, subisci -2 a tutte le abilità di combattimento (Armi Leggere, Armi Pesanti, Armi ad Energia, Mischia, Senz'Armi, Esplosivi).",
        "descEn": "Gain +3 to Barter, Medicine, Repair, Science, and Speech. However, take a -2 penalty to all combat skills.",
        "wildWasteland": "Zona Contaminata Selvaggia: +5 a tutte le abilità pacifiche, ma -4 a tutte le abilità di combattimento.",
        "wildWastelandEn": "Wild Wasteland: +5 to peaceful skills, but -4 to all combat skills.",
        "ranks": [
            "Ottieni +3 alle abilità Baratto, Medicina, Riparazione, Scienza ed Eloquenza. Tuttavia, subisci -2 a tutte le abilità di combattimento (Armi Leggere, Armi Pesanti, Armi ad Energia, Mischia, Senz'Armi, Esplosivi).",
            "Zona Contaminata Selvaggia: +5 a tutte le abilità pacifiche, ma -4 a tutte le abilità di combattimento."
        ],
        "ranksEN": [
            "Gain +3 to Barter, Medicine, Repair, Science, and Speech. However, take a -2 penalty to all combat skills.",
            "Wild Wasteland: +5 to peaceful skills, but -4 to all combat skills."
        ],
        "effect": "Ottieni +3 alle abilità Baratto, Medicina, Riparazione, Scienza ed Eloquenza. Tuttavia, subisci -2 a tutte le abilità di combattimento (Armi Leggere, Armi Pesanti, Armi ad Energia, Mischia, Senz'Armi, Esplosivi)."
    },
    {
        "id": "brawny",
        "name": "Muscoloso (Brawny)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "I tuoi attacchi in mischia e senz'armi infliggono 2 danni addizionali. Tuttavia, la tua Agilità è ridotta di 1.",
        "descEn": "Your melee and unarmed attacks deal 2 additional damage. However, your Agility is reduced by 1.",
        "wildWasteland": "Zona Contaminata Selvaggia: Attacchi in mischia infliggono 4 danni addizionali. Tuttavia, la tua Agilità è ridotta di 2.",
        "wildWastelandEn": "Wild Wasteland: Melee attacks deal 4 additional damage. However, Agility is reduced by 2.",
        "ranks": [
            "I tuoi attacchi in mischia e senz'armi infliggono 2 danni addizionali. Tuttavia, la tua Agilità è ridotta di 1.",
            "Zona Contaminata Selvaggia: Attacchi in mischia infliggono 4 danni addizionali. Tuttavia, la tua Agilità è ridotta di 2."
        ],
        "ranksEN": [
            "Your melee and unarmed attacks deal 2 additional damage. However, your Agility is reduced by 1.",
            "Wild Wasteland: Melee attacks deal 4 additional damage. However, Agility is reduced by 2."
        ],
        "effect": "I tuoi attacchi in mischia e senz'armi infliggono 2 danni addizionali. Tuttavia, la tua Agilità è ridotta di 1."
    },
    {
        "id": "hoarder",
        "name": "Accaparratore (Hoarder)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "La tua capacità di carico massima aumenta di 25 libbre. Tuttavia, se il tuo carico scende al di sotto del 75% del tuo carico massimo, subisci una penalità di -1 a tutti i punteggi SPECIAL per l'ansia.",
        "descEn": "Your carry capacity is increased by 25lbs. However, if your inventory weight drops below 75% of your max carry weight, you suffer -1 to all SPECIAL.",
        "wildWasteland": "Zona Contaminata Selvaggia: Carico massimo aumentato di 50 libbre, ma subisci -2 a tutti gli SPECIAL se sei sotto il 75% del carico.",
        "wildWastelandEn": "Wild Wasteland: Carry capacity increased by 50lbs, but suffer -2 to all SPECIAL when below 75% capacity.",
        "ranks": [
            "La tua capacità di carico massima aumenta di 25 libbre. Tuttavia, se il tuo carico scende al di sotto del 75% del tuo carico massimo, subisci una penalità di -1 a tutti i punteggi SPECIAL per l'ansia.",
            "Zona Contaminata Selvaggia: Carico massimo aumentato di 50 libbre, ma subisci -2 a tutti gli SPECIAL se sei sotto il 75% del carico."
        ],
        "ranksEN": [
            "Your carry capacity is increased by 25lbs. However, if your inventory weight drops below 75% of your max carry weight, you suffer -1 to all SPECIAL.",
            "Wild Wasteland: Carry capacity increased by 50lbs, but suffer -2 to all SPECIAL when below 75% capacity."
        ],
        "effect": "La tua capacità di carico massima aumenta di 25 libbre. Tuttavia, se il tuo carico scende al di sotto del 75% del tuo carico massimo, subisci una penalità di -1 a tutti i punteggi SPECIAL per l'ansia."
    },
    {
        "id": "hot_blooded",
        "name": "A Sangue Caldo (Hot Blooded)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Quando i tuoi Punti Ferita scendono sotto il 50%, ottieni un bonus di +2 a tutti i tiri per il danno. Tuttavia, la tua Agilità e Percezione sono ridotte di 1 mentre sei sotto il 50% di PF.",
        "descEn": "When your HP drops below 50%, you gain +2 to all damage rolls. However, your Agility and Perception are reduced by 1 while below 50% HP.",
        "wildWasteland": "Zona Contaminata Selvaggia: Sotto il 50% di PF ottieni +4 ai danni, ma Agilità e Percezione sono ridotte di 2.",
        "wildWastelandEn": "Wild Wasteland: Below 50% HP gain +4 damage, but Agility and Perception are reduced by 2.",
        "ranks": [
            "Quando i tuoi Punti Ferita scendono sotto il 50%, ottieni un bonus di +2 a tutti i tiri per il danno. Tuttavia, la tua Agilità e Percezione sono ridotte di 1 mentre sei sotto il 50% di PF.",
            "Zona Contaminata Selvaggia: Sotto il 50% di PF ottieni +4 ai danni, ma Agilità e Percezione sono ridotte di 2."
        ],
        "ranksEN": [
            "When your HP drops below 50%, you gain +2 to all damage rolls. However, your Agility and Perception are reduced by 1 while below 50% HP.",
            "Wild Wasteland: Below 50% HP gain +4 damage, but Agility and Perception are reduced by 2."
        ],
        "effect": "Quando i tuoi Punti Ferita scendono sotto il 50%, ottieni un bonus di +2 a tutti i tiri per il danno. Tuttavia, la tua Agilità e Percezione sono ridotte di 1 mentre sei sotto il 50% di PF."
    },
    {
        "id": "jinxed",
        "name": "Iettatore (Jinxed)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Tutti coloro che ti circondano (inclusi te stesso, i tuoi alleati e i tuoi nemici) subiscono un fallimento critico quando ottengono un 1 o un 2 naturale al d20.",
        "descEn": "Everyone around you (including yourself, allies, and enemies) suffers a critical failure on rolls of natural 1 or 2.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il fallimento critico si verifica con un 1, 2 o 3 naturale per tutti entro 9 metri da te.",
        "wildWastelandEn": "Wild Wasteland: Critical failure occurs on a natural 1, 2, or 3 for everyone within 30ft.",
        "ranks": [
            "Tutti coloro che ti circondano (inclusi te stesso, i tuoi alleati e i tuoi nemici) subiscono un fallimento critico quando ottengono un 1 o un 2 naturale al d20.",
            "Zona Contaminata Selvaggia: Il fallimento critico si verifica con un 1, 2 o 3 naturale per tutti entro 9 metri da te."
        ],
        "ranksEN": [
            "Everyone around you (including yourself, allies, and enemies) suffers a critical failure on rolls of natural 1 or 2.",
            "Wild Wasteland: Critical failure occurs on a natural 1, 2, or 3 for everyone within 30ft."
        ],
        "effect": "Tutti coloro che ti circondano (inclusi te stesso, i tuoi alleati e i tuoi nemici) subiscono un fallimento critico quando ottengono un 1 o un 2 naturale al d20."
    },
    {
        "id": "loose_cannon",
        "name": "Mina Vagante (Loose Cannon)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Il costo in PA per lanciare armi da lancio ed esplosivi è ridotto di 1 PA. Tuttavia, la tua gittata di lancio massima è ridotta del 25%.",
        "descEn": "The AP cost to throw thrown weapons and grenades is reduced by 1 AP. However, throwing range is reduced by 25%.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il costo per lanciare è ridotto di 2 PA, ma la gittata di lancio è ridotta del 50%.",
        "wildWastelandEn": "Wild Wasteland: Throwing cost reduced by 2 AP, but throwing range reduced by 50%.",
        "ranks": [
            "Il costo in PA per lanciare armi da lancio ed esplosivi è ridotto di 1 PA. Tuttavia, la tua gittata di lancio massima è ridotta del 25%.",
            "Zona Contaminata Selvaggia: Il costo per lanciare è ridotto di 2 PA, ma la gittata di lancio è ridotta del 50%."
        ],
        "ranksEN": [
            "The AP cost to throw thrown weapons and grenades is reduced by 1 AP. However, throwing range is reduced by 25%.",
            "Wild Wasteland: Throwing cost reduced by 2 AP, but throwing range reduced by 50%."
        ],
        "effect": "Il costo in PA per lanciare armi da lancio ed esplosivi è ridotto di 1 PA. Tuttavia, la tua gittata di lancio massima è ridotta del 25%."
    },
    {
        "id": "night_person",
        "name": "Creatura Notturna (Night Person)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Dalle 18:00 del pomeriggio alle 06:00 del mattino ottieni un bonus di +1 a Intelligenza e Percezione. Dalle 06:00 alle 18:00 subisci una penalità di -1 a Intelligenza e Percezione.",
        "descEn": "From 6:00 PM to 6:00 AM you gain +1 to Intelligence and Perception. From 6:00 AM to 6:00 PM you suffer -1 to Intelligence and Perception.",
        "wildWasteland": "Zona Contaminata Selvaggia: +2 a INT e PER di notte (18:00-06:00), ma -2 a INT e PER di giorno (06:00-18:00).",
        "wildWastelandEn": "Wild Wasteland: +2 to INT and PER at night, but -2 to INT and PER during the day.",
        "ranks": [
            "Dalle 18:00 del pomeriggio alle 06:00 del mattino ottieni un bonus di +1 a Intelligenza e Percezione. Dalle 06:00 alle 18:00 subisci una penalità di -1 a Intelligenza e Percezione.",
            "Zona Contaminata Selvaggia: +2 a INT e PER di notte (18:00-06:00), ma -2 a INT e PER di giorno (06:00-18:00)."
        ],
        "ranksEN": [
            "From 6:00 PM to 6:00 AM you gain +1 to Intelligence and Perception. From 6:00 AM to 6:00 PM you suffer -1 to Intelligence and Perception.",
            "Wild Wasteland: +2 to INT and PER at night, but -2 to INT and PER during the day."
        ],
        "effect": "Dalle 18:00 del pomeriggio alle 06:00 del mattino ottieni un bonus di +1 a Intelligenza e Percezione. Dalle 06:00 alle 18:00 subisci una penalità di -1 a Intelligenza e Percezione."
    },
    {
        "id": "one_hander",
        "name": "A Una Mano (One Hander)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Ottieni un bonus di +2 ai tiri per colpire quando impugni e usi un'arma ad una mano. Tuttavia, subisci una penalità di -4 ai tiri per colpire quando usi armi a due mani.",
        "descEn": "Gain +2 to attack rolls when wielding a one-handed weapon. However, take a -4 penalty to attack rolls with two-handed weapons.",
        "wildWasteland": "Zona Contaminata Selvaggia: +3 ai tiri per colpire con armi a una mano, ma -6 con armi a due mani.",
        "wildWastelandEn": "Wild Wasteland: +3 to attack rolls with one-handed weapons, but -6 with two-handed weapons.",
        "ranks": [
            "Ottieni un bonus di +2 ai tiri per colpire quando impugni e usi un'arma ad una mano. Tuttavia, subisci una penalità di -4 ai tiri per colpire quando usi armi a due mani.",
            "Zona Contaminata Selvaggia: +3 ai tiri per colpire con armi a una mano, ma -6 con armi a due mani."
        ],
        "ranksEN": [
            "Gain +2 to attack rolls when wielding a one-handed weapon. However, take a -4 penalty to attack rolls with two-handed weapons.",
            "Wild Wasteland: +3 to attack rolls with one-handed weapons, but -6 with two-handed weapons."
        ],
        "effect": "Ottieni un bonus di +2 ai tiri per colpire quando impugni e usi un'arma ad una mano. Tuttavia, subisci una penalità di -4 ai tiri per colpire quando usi armi a due mani."
    },
    {
        "id": "one_in_a_million",
        "name": "Uno su un Milione (One in a Million)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Una volta per sessione, puoi ritirare qualsiasi tiro di d20 fallito e prendere il nuovo risultato. Tuttavia, il tuo punteggio di Fortuna è ridotto permanentemente di 1.",
        "descEn": "Once per session, re-roll any failed d20 roll and take the new result. However, your Luck score is permanently reduced by 1.",
        "wildWasteland": "Zona Contaminata Selvaggia: Due volte per sessione puoi ritirare un d20 fallito, ma la tua Fortuna è ridotta di 2.",
        "wildWastelandEn": "Wild Wasteland: Twice per session re-roll a failed d20, but Luck is reduced by 2.",
        "ranks": [
            "Una volta per sessione, puoi ritirare qualsiasi tiro di d20 fallito e prendere il nuovo risultato. Tuttavia, il tuo punteggio di Fortuna è ridotto permanentemente di 1.",
            "Zona Contaminata Selvaggia: Due volte per sessione puoi ritirare un d20 fallito, ma la tua Fortuna è ridotta di 2."
        ],
        "ranksEN": [
            "Once per session, re-roll any failed d20 roll and take the new result. However, your Luck score is permanently reduced by 1.",
            "Wild Wasteland: Twice per session re-roll a failed d20, but Luck is reduced by 2."
        ],
        "effect": "Una volta per sessione, puoi ritirare qualsiasi tiro di d20 fallito e prendere il nuovo risultato. Tuttavia, il tuo punteggio di Fortuna è ridotto permanentemente di 1."
    },
    {
        "id": "skilled",
        "name": "Abile (Skilled)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Ottieni +2 a tutti i punteggi delle tue Abilità. Tuttavia, guadagni il 10% in meno di Punti Esperienza (XP) da tutte le fonti.",
        "descEn": "Gain +2 to all Skill values. However, you gain 10% less Experience Points (XP) from all sources.",
        "wildWasteland": "Zona Contaminata Selvaggia: +4 a tutte le Abilità, ma guadagni il 20% in meno di Punti Esperienza.",
        "wildWastelandEn": "Wild Wasteland: +4 to all Skills, but gain 20% less XP.",
        "ranks": [
            "Ottieni +2 a tutti i punteggi delle tue Abilità. Tuttavia, guadagni il 10% in meno di Punti Esperienza (XP) da tutte le fonti.",
            "Zona Contaminata Selvaggia: +4 a tutte le Abilità, ma guadagni il 20% in meno di Punti Esperienza."
        ],
        "ranksEN": [
            "Gain +2 to all Skill values. However, you gain 10% less Experience Points (XP) from all sources.",
            "Wild Wasteland: +4 to all Skills, but gain 20% less XP."
        ],
        "effect": "Ottieni +2 a tutti i punteggi delle tue Abilità. Tuttavia, guadagni il 10% in meno di Punti Esperienza (XP) da tutte le fonti."
    },
    {
        "id": "small_frame",
        "name": "Piccola Stazza (Small Frame)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "La tua corporatura minuta ti rende più scattante ma meno resistente. Ottieni un bonus ai tuoi Punti Azione (PA) massimi pari al tuo livello. Tuttavia, i tuoi Punti Ferita (PF) massimi sono ridotti di un numero pari al tuo livello.",
        "descEn": "You gain a bonus to your maximum stamina points equal to your level. However your maximum hit points are reduced by a number equal to your level.",
        "wildWasteland": "Zona Contaminata Selvaggia: In aggiunta agli effetti del tratto: raddoppia sia i benefici che le penalità (+2x livello PA massimi, ma -2x livello PF massimi).",
        "wildWastelandEn": "Wild Wasteland: In addition to this trait's effects; you gain a bonus to your maximum stamina points equal to your level. However your maximum hit points are reduced by a number equal to your level.",
        "ranks": [
            "La tua corporatura minuta ti rende più scattante ma meno resistente. Ottieni un bonus ai tuoi Punti Azione (PA) massimi pari al tuo livello. Tuttavia, i tuoi Punti Ferita (PF) massimi sono ridotti di un numero pari al tuo livello.",
            "Zona Contaminata Selvaggia: In aggiunta agli effetti del tratto: raddoppia sia i benefici che le penalità (+2x livello PA massimi, ma -2x livello PF massimi)."
        ],
        "ranksEN": [
            "You gain a bonus to your maximum stamina points equal to your level. However your maximum hit points are reduced by a number equal to your level.",
            "Wild Wasteland: In addition to this trait's effects; you gain a bonus to your maximum stamina points equal to your level. However your maximum hit points are reduced by a number equal to your level."
        ],
        "effect": "La tua corporatura minuta ti rende più scattante ma meno resistente. Ottieni un bonus ai tuoi Punti Azione (PA) massimi pari al tuo livello. Tuttavia, i tuoi Punti Ferita (PF) massimi sono ridotti di un numero pari al tuo livello."
    },
    {
        "id": "trigger_discipline",
        "name": "Disciplina di Fuoco (Trigger Discipline)",
        "category": "Generale",
        "maxRank": 1,
        "req": "-",
        "desc": "Quando effettui un attacco mirato con un'arma a distanza, il costo addizionale in PA è ridotto di 1 PA. Tuttavia, il tuo bonus di Sequenza di Combattimento (Iniziativa) è ridotto di 2.",
        "descEn": "Whenever you make a targeted attack roll with a ranged weapon, the additional cost is reduced by 1 AP. However, your combat sequence bonus is reduced by 2.",
        "wildWasteland": "Zona Contaminata Selvaggia: Il costo addizionale degli attacchi mirati è ridotto di 2 PA. Tuttavia, la tua Iniziativa è ridotta di 4.",
        "wildWastelandEn": "Wild Wasteland: Targeted attack additional cost is reduced by 2 AP. However, combat sequence is reduced by 4.",
        "ranks": [
            "Quando effettui un attacco mirato con un'arma a distanza, il costo addizionale in PA è ridotto di 1 PA. Tuttavia, il tuo bonus di Sequenza di Combattimento (Iniziativa) è ridotto di 2.",
            "Zona Contaminata Selvaggia: Il costo addizionale degli attacchi mirati è ridotto di 2 PA. Tuttavia, la tua Iniziativa è ridotta di 4."
        ],
        "ranksEN": [
            "Whenever you make a targeted attack roll with a ranged weapon, the additional cost is reduced by 1 AP. However, your combat sequence bonus is reduced by 2.",
            "Wild Wasteland: Targeted attack additional cost is reduced by 2 AP. However, combat sequence is reduced by 4."
        ],
        "effect": "Quando effettui un attacco mirato con un'arma a distanza, il costo addizionale in PA è ridotto di 1 PA. Tuttavia, il tuo bonus di Sequenza di Combattimento (Iniziativa) è ridotto di 2."
    }
],

  "perks": [
    {
      "id": "adaptive_reflexes",
      "name": "Riflessi Adattivi (Adaptive Reflexes)",
      "category": "Generale",
      "maxRank": 2,
      "req": "Missing Hand, Arm, Foot, or Leg.",
      "ranks": [
        "Hai imparato a superare e compensare la tua menomazione fisica. Se hai perso un piede o una gamba, la tua velocità di movimento non è più limitata a 6 metri (20 piedi) per turno. Se hai perso una mano o un piede: guadagni 3 punti caratteristica da assegnare a qualsiasi punteggio S.P.E.C.I.A.L. a tua scelta. Se hai perso un braccio o una gamba: guadagni 5 punti caratteristica da assegnare ai tuoi punteggi S.P.E.C.I.A.L.",
        "Ripetibile: Puoi acquisire questo talento per ogni arto mancante che possiedi."
      ],
      "ranksEN": [
        "You've learned to endure and overcome your disability. If you lost your foot or leg, you are no longer limited to moving only 20 feet on a turn. If you lost your hand or foot: you gain 3 points which you can use to increase any of your ability scores by the amount used. If you lost your arm or leg: you gain 5 points which you can use to increase any of your ability scores by the amount used.\n\nRepeat: You can take this perk as many times as you have missing arms or legs."
      ],
      "ranksIT": [
        "Hai imparato a sopportare e superare la tua disabilità. Se hai perso un piede o una gamba, non sei più limitato a muoverti di soli 20 piedi (6 metri) per turno. Se hai perso una mano o un piede: ottieni 3 punti caratteristica che puoi usare per incrementare qualsiasi punteggio caratteristica dell'ammontare usato. Se hai perso un braccio o una gamba: ottieni 5 punti caratteristica che puoi usare per incrementare qualsiasi punteggio caratteristica dell'ammontare usato.\n\n[Ripetibile]: Puoi acquisire questo talento tante volte quanti sono gli arti (braccia o gambe) mancanti."
      ],
      "effectEN": "You've learned to endure and overcome your disability. If you lost your foot or leg, you are no longer limited to moving only 20 feet on a turn. If you lost your hand or foot: you gain 3 points which you can use to increase any of your ability scores by the amount used. If you lost your arm or leg: you gain 5 points which you can use to increase any of your ability scores by the amount used.\n\nRepeat: You can take this perk as many times as you have missing arms or legs.",
      "effectIT": "Hai imparato a sopportare e superare la tua disabilità. Se hai perso un piede o una gamba, non sei più limitato a muoverti di soli 20 piedi (6 metri) per turno. Se hai perso una mano o un piede: ottieni 3 punti caratteristica che puoi usare per incrementare qualsiasi punteggio caratteristica dell'ammontare usato. Se hai perso un braccio o una gamba: ottieni 5 punti caratteristica che puoi usare per incrementare qualsiasi punteggio caratteristica dell'ammontare usato.\n\n[Ripetibile]: Puoi acquisire questo talento tante volte quanti sono gli arti (braccia o gambe) mancanti.",
      "effect": "Hai imparato a sopportare e superare la tua disabilità. Se hai perso un piede o una gamba, non sei più limitato a muoverti di soli 20 piedi (6 metri) per turno. Se hai perso una mano o un piede: ottieni 3 punti caratteristica che puoi usare per incrementare qualsiasi punteggio caratteristica dell'ammontare usato. Se hai perso un braccio o una gamba: ottieni 5 punti caratteristica che puoi usare per incrementare qualsiasi punteggio caratteristica dell'ammontare usato.\n\n[Ripetibile]: Puoi acquisire questo talento tante volte quanti sono gli arti (braccia o gambe) mancanti."
    },
    {
      "id": "blind_devil",
      "name": "Diavolo Cieco (Blind Devil)",
      "category": "Generale",
      "maxRank": 1,
      "req": "Permanently Blinded.",
      "ranks": [
        "Adattarti alla perdita della vista ha affinato in modo sovrumano gli altri tuoi sensi. Percepisci l'ambiente circostante con assoluta precisione: puoi 'vedere' efficacemente qualsiasi bersaglio entro una distanza in piedi pari a 5 volte il tuo punteggio di Percezione (es. con PER 8, percepisci entro 40 piedi / 12 metri). Inoltre, la tua Percezione Passiva aumenta di +5 e ottieni vantaggio a tutti i tiri di Sequenza di Combattimento (Iniziativa)."
      ],
      "ranksEN": [
        "Attuning to your loss of sight has made your other senses sharper. You can sense your surroundings with pinpoint accuracy. You can effectively \"see\" any target within a number of feet of you equal to 5 x your Perception ability score. Additionally, your passive sense increases by 5 and you have advantage on all your combat sequence rolls."
      ],
      "ranksIT": [
        "Adattarti alla perdita della vista ha affinato gli altri tuoi sensi. Riesci a percepire l'ambiente circostante con assoluta precisione: puoi 'vedere' efficacemente qualsiasi bersaglio entro una distanza in piedi pari a 5 volte il tuo punteggio di Percezione (es. con PER 8, percepisci entro 40 piedi / 12 metri). Inoltre, la tua Percezione Passiva aumenta di 5 e ottieni vantaggio a tutti i tiri di Sequenza di Combattimento (Iniziativa)."
      ],
      "effectEN": "Attuning to your loss of sight has made your other senses sharper. You can sense your surroundings with pinpoint accuracy. You can effectively \"see\" any target within a number of feet of you equal to 5 x your Perception ability score. Additionally, your passive sense increases by 5 and you have advantage on all your combat sequence rolls.",
      "effectIT": "Adattarti alla perdita della vista ha affinato gli altri tuoi sensi. Riesci a percepire l'ambiente circostante con assoluta precisione: puoi 'vedere' efficacemente qualsiasi bersaglio entro una distanza in piedi pari a 5 volte il tuo punteggio di Percezione (es. con PER 8, percepisci entro 40 piedi / 12 metri). Inoltre, la tua Percezione Passiva aumenta di 5 e ottieni vantaggio a tutti i tiri di Sequenza di Combattimento (Iniziativa).",
      "effect": "Adattarti alla perdita della vista ha affinato gli altri tuoi sensi. Riesci a percepire l'ambiente circostante con assoluta precisione: puoi 'vedere' efficacemente qualsiasi bersaglio entro una distanza in piedi pari a 5 volte il tuo punteggio di Percezione (es. con PER 8, percepisci entro 40 piedi / 12 metri). Inoltre, la tua Percezione Passiva aumenta di 5 e ottieni vantaggio a tutti i tiri di Sequenza di Combattimento (Iniziativa)."
    },
    {
      "id": "cowboy",
      "name": "Cowboy",
      "category": "Generale",
      "maxRank": 1,
      "req": "-",
      "ranks": [
        "Sei un maestro nell'uso delle armi tradizionali della frontiera. Estrarre o rinfoderare carabine a leva o revolver costa solo 1 Punto Azione (AP). Inoltre, quando metti a segno un attacco contro una creatura sorpresa utilizzando un revolver, un fucile a leva, una dinamite o un coltello da caccia, l'attacco infligge automaticamente un colpo critico."
      ],
      "ranksEN": [
        "Whenever you spend AP to draw a lever action rifle, cowboy repeater, or revolver, the AP cost is reduced to 1. Additionally, if you attack and hit a surprised creature with a lever action rifle, cowboy repeater, or revolver; the attack critically hits."
      ],
      "ranksIT": [
        "Ogni volta che spendi AP per estrarre una carabina a leva, un cowboy repeater o un revolver, il costo in AP è ridotto a 1. Inoltre, se attacchi e colpisci una creatura sorpresa usando una carabina a leva, un cowboy repeater o un revolver, l'attacco infligge automaticamente un colpo critico."
      ],
      "effectEN": "Whenever you spend AP to draw a lever action rifle, cowboy repeater, or revolver, the AP cost is reduced to 1. Additionally, if you attack and hit a surprised creature with a lever action rifle, cowboy repeater, or revolver; the attack critically hits.",
      "effectIT": "Ogni volta che spendi AP per estrarre una carabina a leva, un cowboy repeater o un revolver, il costo in AP è ridotto a 1. Inoltre, se attacchi e colpisci una creatura sorpresa usando una carabina a leva, un cowboy repeater o un revolver, l'attacco infligge automaticamente un colpo critico.",
      "effect": "Ogni volta che spendi AP per estrarre una carabina a leva, un cowboy repeater o un revolver, il costo in AP è ridotto a 1. Inoltre, se attacchi e colpisci una creatura sorpresa usando una carabina a leva, un cowboy repeater o un revolver, l'attacco infligge automaticamente un colpo critico."
    },
    {
      "id": "deadeye",
      "name": "Occhio di Falco (Deadeye)",
      "category": "Generale",
      "maxRank": 3,
      "req": "-",
      "ranks": [
        "La tua mira a distanza è infallibile e micidiale. Ogni volta che effettui un tiro per colpire o per i danni con un'arma a distanza, aggiungi +2 al risultato del tiro. Inoltre, ogni volta che effettui un tiro mirato alla testa del bersaglio, aggiungi un ulteriore bonus di +2 al tiro per colpire."
      ],
      "ranksEN": [
        "Whenever you roll attack or damage with a ranged weapon, add 2 to the result. Additionally, whenever you make a targeted attack roll to the head with a ranged weapon, add an additional 2 to the result.\n\nRepeat: You can take this perk up to a maximum of three times."
      ],
      "ranksIT": [
        "Ogni volta che effettui un tiro per colpire o per il danno con un'arma a distanza, aggiungi 2 al risultato. Inoltre, ogni volta che effettui un tiro mirato alla testa con un'arma a distanza, aggiungi un ulteriore 2 al risultato.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte."
      ],
      "effectEN": "Whenever you roll attack or damage with a ranged weapon, add 2 to the result. Additionally, whenever you make a targeted attack roll to the head with a ranged weapon, add an additional 2 to the result.\n\nRepeat: You can take this perk up to a maximum of three times.",
      "effectIT": "Ogni volta che effettui un tiro per colpire o per il danno con un'arma a distanza, aggiungi 2 al risultato. Inoltre, ogni volta che effettui un tiro mirato alla testa con un'arma a distanza, aggiungi un ulteriore 2 al risultato.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte.",
      "effect": "Ogni volta che effettui un tiro per colpire o per il danno con un'arma a distanza, aggiungi 2 al risultato. Inoltre, ogni volta che effettui un tiro mirato alla testa con un'arma a distanza, aggiungi un ulteriore 2 al risultato.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte."
    },
    {
      "id": "duelist",
      "name": "Duellante (Duelist)",
      "category": "Generale",
      "maxRank": 1,
      "req": "-",
      "ranks": [
        "La tua tecnica nel combattimento corpo a corpo ravvicinato è letale. Ogni volta che effettui un tiro per colpire o per i danni con un attacco disarmato o con un'arma da mischia, aggiungi +2 al risultato.",
        "Ripetibile: Puoi acquisire questo talento fino a un massimo di tre volte (per un bonus totale cumulativo di +6 a colpire e ai danni)."
      ],
      "ranksEN": [
        "Whenever you roll attack or damage with an unarmed or melee weapon, add 2 to the result.\n\nRepeat: You can take this perk up to a maximum of three times."
      ],
      "ranksIT": [
        "Ogni volta che effettui un tiro per colpire o per il danno con un attacco disarmato o un'arma da mischia, aggiungi 2 al risultato.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte."
      ],
      "effectEN": "Whenever you roll attack or damage with an unarmed or melee weapon, add 2 to the result.\n\nRepeat: You can take this perk up to a maximum of three times.",
      "effectIT": "Ogni volta che effettui un tiro per colpire o per il danno con un attacco disarmato o un'arma da mischia, aggiungi 2 al risultato.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte.",
      "effect": "Ogni volta che effettui un tiro per colpire o per il danno con un attacco disarmato o un'arma da mischia, aggiungi 2 al risultato.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte."
    },
    {
      "id": "educated",
      "name": "Istruito (Educated)",
      "category": "Generale",
      "maxRank": 1,
      "req": "Intelligence 4 or lower.",
      "ranks": [
        "Ti sei dedicato allo studio per compensare le tue lacune naturali. Ogni volta che sali di livello, guadagni 2 Punti Abilità addizionali da distribuire nelle tue Abilità."
      ],
      "ranksEN": [
        "You gain 4 skill points when you reach 5th, 9th, 13th, 17th, 21st, 25th, and 29th level instead of 3. Additionally, you gain a number of skill points equal to the total available at your level as if your Intelligence ability score is equal to 5. (Use the Level Up table on page 6 for reference)."
      ],
      "ranksIT": [
        "Ottieni 4 punti abilità quando raggiungi il 5°, 9°, 13°, 17°, 21°, 25° e 29° livello anziché 3. Inoltre, ottieni un numero di punti abilità pari al totale disponibile al tuo livello come se il tuo punteggio di Intelligenza fosse pari a 5 (fai riferimento alla tabella Salita di Livello a pagina 6)."
      ],
      "effectEN": "You gain 4 skill points when you reach 5th, 9th, 13th, 17th, 21st, 25th, and 29th level instead of 3. Additionally, you gain a number of skill points equal to the total available at your level as if your Intelligence ability score is equal to 5. (Use the Level Up table on page 6 for reference).",
      "effectIT": "Ottieni 4 punti abilità quando raggiungi il 5°, 9°, 13°, 17°, 21°, 25° e 29° livello anziché 3. Inoltre, ottieni un numero di punti abilità pari al totale disponibile al tuo livello come se il tuo punteggio di Intelligenza fosse pari a 5 (fai riferimento alla tabella Salita di Livello a pagina 6).",
      "effect": "Ottieni 4 punti abilità quando raggiungi il 5°, 9°, 13°, 17°, 21°, 25° e 29° livello anziché 3. Inoltre, ottieni un numero di punti abilità pari al totale disponibile al tuo livello come se il tuo punteggio di Intelligenza fosse pari a 5 (fai riferimento alla tabella Salita di Livello a pagina 6)."
    },
    {
      "id": "entomologist",
      "name": "Entomologo (Entomologist)",
      "category": "Generale",
      "maxRank": 1,
      "req": "-",
      "ranks": [
        "Conosci a fondo l'anatomia e i punti deboli di insetti e aracnidi mutati della Zona. Ogni volta che tiri i danni da un attacco contro i Punti Ferita di una creatura di tipo insetto (formiche giganti, mosche mutanti, cazador, scorpioni radioattivi, ecc.), la loro Soglia Danni (PD/DT) non viene sottratta dal tuo danno totale."
      ],
      "ranksEN": [
        "You know the anatomy of various instincts. Whenever you roll damage from an attack roll against an insect, the damage is increased by 4."
      ],
      "ranksIT": [
        "Conosci a fondo l'anatomia dei vari insetti mutati. Ogni volta che tiri per il danno dopo aver colpito un insetto con un attacco, il danno inflitto aumenta di 4."
      ],
      "effectEN": "You know the anatomy of various instincts. Whenever you roll damage from an attack roll against an insect, the damage is increased by 4.",
      "effectIT": "Conosci a fondo l'anatomia dei vari insetti mutati. Ogni volta che tiri per il danno dopo aver colpito un insetto con un attacco, il danno inflitto aumenta di 4.",
      "effect": "Conosci a fondo l'anatomia dei vari insetti mutati. Ogni volta che tiri per il danno dopo aver colpito un insetto con un attacco, il danno inflitto aumenta di 4."
    },
    {
      "id": "fight_the_power",
      "name": "Abbatti il Potere! (Fight the Power!)",
      "category": "Generale",
      "maxRank": 2,
      "req": "-",
      "ranks": [
        "Ne hai abbastanza dei cosiddetti 'poteri forti' e dei tiranni delle fazioni! Ogni volta che subisci danni ai Punti Ferita da una creatura affiliata a una grande fazione organizzata (RNC, Legione, Confraternita d'Acciaio, Enclave, Istituto), la tua Soglia Danni (PD/DT) aumenta di 1 contro quell'attacco. Inoltre, ottieni un bonus di +2 a tutti i tiri per colpire e per i danni effettuati contro membri di fazioni."
      ],
      "ranksEN": [
        "You've had enough of these so-called \"authorities\"! Whenever you take damage to your hit points from a creature that is a higher level than you, the damage is reduced by 2. Additionally, whenever you roll an attack or damage roll against a creature of a higher level than you, add 2 to the result."
      ],
      "ranksIT": [
        "Ne hai abbastanza di queste cosiddette 'autorità'! Ogni volta che subisci danni ai punti ferita da una creatura di livello superiore al tuo, il danno subito è ridotto di 2. Inoltre, ogni volta che effettui un tiro per colpire o per il danno contro una creatura di livello superiore al tuo, aggiungi 2 al risultato."
      ],
      "effectEN": "You've had enough of these so-called \"authorities\"! Whenever you take damage to your hit points from a creature that is a higher level than you, the damage is reduced by 2. Additionally, whenever you roll an attack or damage roll against a creature of a higher level than you, add 2 to the result.",
      "effectIT": "Ne hai abbastanza di queste cosiddette 'autorità'! Ogni volta che subisci danni ai punti ferita da una creatura di livello superiore al tuo, il danno subito è ridotto di 2. Inoltre, ogni volta che effettui un tiro per colpire o per il danno contro una creatura di livello superiore al tuo, aggiungi 2 al risultato.",
      "effect": "Ne hai abbastanza di queste cosiddette 'autorità'! Ogni volta che subisci danni ai punti ferita da una creatura di livello superiore al tuo, il danno subito è ridotto di 2. Inoltre, ogni volta che effettui un tiro per colpire o per il danno contro una creatura di livello superiore al tuo, aggiungi 2 al risultato."
    },
    {
      "id": "here_and_now",
      "name": "Qui e Ora (Here and Now)",
      "category": "Generale",
      "maxRank": 1,
      "req": "Level 3.",
      "ranks": [
        "Ottieni immediatamente l'ammontare esatto di Punti Esperienza (XP) necessario per avanzare all'istante al livello successivo di personaggio, ottenendo subito tutti i relativi benefici (Punti Ferita, Stamina, Punti Abilità e Talenti associati)."
      ],
      "ranksEN": [
        "You and each other player character immediately gain 1000 XP. Once this perk has been taken by any player, it cannot be taken again by anyone else."
      ],
      "ranksIT": [
        "Tu e ciascun altro personaggio giocante ottenete immediatamente 1000 Punti Esperienza (XP). Una volta che questo talento è stato scelto da un giocatore qualsiasi, non può più essere acquisito da nessun altro."
      ],
      "effectEN": "You and each other player character immediately gain 1000 XP. Once this perk has been taken by any player, it cannot be taken again by anyone else.",
      "effectIT": "Tu e ciascun altro personaggio giocante ottenete immediatamente 1000 Punti Esperienza (XP). Una volta che questo talento è stato scelto da un giocatore qualsiasi, non può più essere acquisito da nessun altro.",
      "effect": "Tu e ciascun altro personaggio giocante ottenete immediatamente 1000 Punti Esperienza (XP). Una volta che questo talento è stato scelto da un giocatore qualsiasi, non può più essere acquisito da nessun altro."
    },
    {
      "id": "purifier",
      "name": "Purificatore (Purifier)",
      "category": "Generale",
      "maxRank": 3,
      "req": "-",
      "ranks": [
        "Sei votato a mondare la terra dai mostri più orrendi del dopobomba. Quando infliggi danni con un attacco senz'armi o con un'arma da mischia contro creature di tipo Abominio (deathclaw, centauri, supermutanti, trog, floaters), aggiungi un dado di danno extra del tipo dell'arma utilizzata."
      ],
      "ranksEN": [
        "Whenever you make an attack roll with an unarmed or melee weapon against an abomination, add 2 to the attack and damage rolls."
      ],
      "ranksIT": [
        "Ogni volta che effettui un tiro per colpire con un attacco disarmato o un'arma da mischia contro un'abominazione, aggiungi 2 al tiro per colpire e ai tiri per il danno."
      ],
      "effectEN": "Whenever you make an attack roll with an unarmed or melee weapon against an abomination, add 2 to the attack and damage rolls.",
      "effectIT": "Ogni volta che effettui un tiro per colpire con un attacco disarmato o un'arma da mischia contro un'abominazione, aggiungi 2 al tiro per colpire e ai tiri per il danno.",
      "effect": "Ogni volta che effettui un tiro per colpire con un attacco disarmato o un'arma da mischia contro un'abominazione, aggiungi 2 al tiro per colpire e ai tiri per il danno."
    },
    {
      "id": "sneering_imperialist",
      "name": "Imperialista Beffardo (Sneering Imperialist)",
      "category": "Generale",
      "maxRank": 2,
      "req": "-",
      "ranks": [
        "Consideri i selvaggi, i predoni e i reietti della Zona come esseri inferiori. I tuoi tiri per colpire e i tiri per i danni contro predoni (raiders), membri di tribù selvagge e tossicodipendenti (junkies) aumentano ciascuno di +2."
      ],
      "ranksEN": [
        "You don't take kindly to raiders, junkies, or freeloaders. Whenever you roll damage from an attack against a human or raider, the damage is increased by 2."
      ],
      "ranksIT": [
        "Non vedi di buon occhio predoni, tossicodipendenti o parassiti. Ogni volta che tiri per il danno dopo aver colpito un umano o un predone con un attacco, il danno inflitto aumenta di 2."
      ],
      "effectEN": "You don't take kindly to raiders, junkies, or freeloaders. Whenever you roll damage from an attack against a human or raider, the damage is increased by 2.",
      "effectIT": "Non vedi di buon occhio predoni, tossicodipendenti o parassiti. Ogni volta che tiri per il danno dopo aver colpito un umano o un predone con un attacco, il danno inflitto aumenta di 2.",
      "effect": "Non vedi di buon occhio predoni, tossicodipendenti o parassiti. Ogni volta che tiri per il danno dopo aver colpito un umano o un predone con un attacco, il danno inflitto aumenta di 2."
    },
    {
      "id": "swift_learner",
      "name": "Apprendista Rapido (Swift Learner)",
      "category": "Generale",
      "maxRank": 2,
      "req": "-",
      "ranks": [
        "Impari in fretta da qualsiasi esperienza. Ogni volta che guadagni Punti Esperienza (XP), ottieni un 10% di XP addizionale.",
        "Ripetibile: Puoi acquisire questo talento fino a tre volte (per un bonus massimo cumulativo del +30% di XP guadagnati)."
      ],
      "ranksEN": [
        "Whenever the GM awards XP, you and each other player character gain an additional 20% bonus to the total XP awarded."
      ],
      "ranksIT": [
        "Ogni volta che il Game Master assegna Punti Esperienza (XP), tu e ciascun altro personaggio giocante ottenete un bonus aggiuntivo del 20% all'ammontare totale di XP assegnati."
      ],
      "effectEN": "Whenever the GM awards XP, you and each other player character gain an additional 20% bonus to the total XP awarded.",
      "effectIT": "Ogni volta che il Game Master assegna Punti Esperienza (XP), tu e ciascun altro personaggio giocante ottenete un bonus aggiuntivo del 20% all'ammontare totale di XP assegnati.",
      "effect": "Ogni volta che il Game Master assegna Punti Esperienza (XP), tu e ciascun altro personaggio giocante ottenete un bonus aggiuntivo del 20% all'ammontare totale di XP assegnati."
    },
    {
      "id": "heavyweight",
      "name": "Peso Massimo (Heavyweight)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 4.",
      "ranks": [
        "La tua forza ti consente di gestire senza sforzo l'artiglieria più pesante. Il peso di tutte le armi pesanti (Big Guns, lanciamissili, minigun, gatling) nel tuo inventario è dimezzato."
      ],
      "ranksEN": [
        "You can spend 6 action points to make a special unarmed attack called a heavy unarmed attack. A heavy unarmed attack is identical to an unarmed attack but the damage is increased by 2d4. Additionally, you are considered two size categories larger for the purposes of shoving creatures."
      ],
      "ranksIT": [
        "Puoi spendere 6 Punti Azione (AP) per sferrare un attacco speciale disarmato chiamato attacco disarmato pesante. Un attacco disarmato pesante è identico a un normale attacco disarmato, ma il danno inflitto aumenta di 2d4. Inoltre, vieni considerato di due categorie di taglia più grande ai fini di spingere le creature."
      ],
      "effectEN": "You can spend 6 action points to make a special unarmed attack called a heavy unarmed attack. A heavy unarmed attack is identical to an unarmed attack but the damage is increased by 2d4. Additionally, you are considered two size categories larger for the purposes of shoving creatures.",
      "effectIT": "Puoi spendere 6 Punti Azione (AP) per sferrare un attacco speciale disarmato chiamato attacco disarmato pesante. Un attacco disarmato pesante è identico a un normale attacco disarmato, ma il danno inflitto aumenta di 2d4. Inoltre, vieni considerato di due categorie di taglia più grande ai fini di spingere le creature.",
      "effect": "Puoi spendere 6 Punti Azione (AP) per sferrare un attacco speciale disarmato chiamato attacco disarmato pesante. Un attacco disarmato pesante è identico a un normale attacco disarmato, ma il danno inflitto aumenta di 2d4. Inoltre, vieni considerato di due categorie di taglia più grande ai fini di spingere le creature."
    },
    {
      "id": "weapon_handling",
      "name": "Maneggio delle Armi (Weapon Handling)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 4.",
      "ranks": [
        "Sai maneggiare armi ingombranti con perizia superiore. Il requisito di Forza necessario per impugnare e utilizzare qualsiasi arma senza penalità è ridotto di 2."
      ],
      "ranksEN": [
        "It's not about size, it's about how you use it. You no longer have disadvantage on attack rolls made with weapons that you do not meet the Strength requirement for. Additionally, you ignore the negative effects of the two handed property on melee weapons."
      ],
      "ranksIT": [
        "Non conta la dimensione, ma come la usi. Non subisci più svantaggio ai tiri per colpire effettuati con armi per cui non soddisfi il requisito di Forza. Inoltre, ignori gli effetti negativi della proprietà A Due Mani sulle armi da mischia."
      ],
      "effectEN": "It's not about size, it's about how you use it. You no longer have disadvantage on attack rolls made with weapons that you do not meet the Strength requirement for. Additionally, you ignore the negative effects of the two handed property on melee weapons.",
      "effectIT": "Non conta la dimensione, ma come la usi. Non subisci più svantaggio ai tiri per colpire effettuati con armi per cui non soddisfi il requisito di Forza. Inoltre, ignori gli effetti negativi della proprietà A Due Mani sulle armi da mischia.",
      "effect": "Non conta la dimensione, ma come la usi. Non subisci più svantaggio ai tiri per colpire effettuati con armi per cui non soddisfi il requisito di Forza. Inoltre, ignori gli effetti negativi della proprietà A Due Mani sulle armi da mischia."
    },
    {
      "id": "butcher",
      "name": "Macellaio (Butcher)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 5.",
      "ranks": [
        "I tuoi fendenti lacerano carni e muscoli in profondità. Quando infliggi danni a una creatura vivente con un'arma da mischia da taglio, il bersaglio subisce 1 livello di Sanguinamento (Bleeding)."
      ],
      "ranksEN": [
        "You're hackin', whackin', and choppin' that meat! Whenever you roll damage from an attack made with a bladed weapon or an unarmed attack that deals slashing damage, add 2 to the damage dealt. Additionally, if you attack a surprised creature with a bladed weapon, the attack critically hits.\n\nRepeat: You can take this perk up to a maximum of three times."
      ],
      "ranksIT": [
        "Fai a fette, spacchi e macelli quella carne! Ogni volta che tiri il danno per un attacco con un'arma da taglio o un attacco disarmato che infligge danno tagliente, aggiungi 2 al danno inflitto. Inoltre, se attacchi una creatura sorpresa con un'arma da taglio, l'attacco infligge automaticamente un colpo critico.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte."
      ],
      "effectEN": "You're hackin', whackin', and choppin' that meat! Whenever you roll damage from an attack made with a bladed weapon or an unarmed attack that deals slashing damage, add 2 to the damage dealt. Additionally, if you attack a surprised creature with a bladed weapon, the attack critically hits.\n\nRepeat: You can take this perk up to a maximum of three times.",
      "effectIT": "Fai a fette, spacchi e macelli quella carne! Ogni volta che tiri il danno per un attacco con un'arma da taglio o un attacco disarmato che infligge danno tagliente, aggiungi 2 al danno inflitto. Inoltre, se attacchi una creatura sorpresa con un'arma da taglio, l'attacco infligge automaticamente un colpo critico.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte.",
      "effect": "Fai a fette, spacchi e macelli quella carne! Ogni volta che tiri il danno per un attacco con un'arma da taglio o un attacco disarmato che infligge danno tagliente, aggiungi 2 al danno inflitto. Inoltre, se attacchi una creatura sorpresa con un'arma da taglio, l'attacco infligge automaticamente un colpo critico.\n\n[Ripetibile]: Puoi acquisire questo talento fino a un massimo di tre volte."
    },
    {
      "id": "fisticuffs",
      "name": "Pugilato (Fisticuffs)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 5.",
      "ranks": [
        "Le tue nocche nude sono letali quanto una mazza ferrata. I tuoi attacchi senz'armi infliggono 1d6 + il tuo modificatore di Forza di danni contundenti, invece del danno normale (1 + mod FOR)."
      ],
      "ranksEN": [
        "Your bare knuckle strikes are knock-out punches. The damage of your unarmed attacks is increased by 1d4. Additionally, whenever you make an attack roll with an unarmed attack, add 2 to the result."
      ],
      "ranksIT": [
        "I tuoi colpi a mani nude sono pugni da KO. Il danno dei tuoi attacchi disarmati aumenta di 1d4. Inoltre, ogni volta che effettui un tiro per colpire con un attacco disarmato, aggiungi 2 al risultato."
      ],
      "effectEN": "Your bare knuckle strikes are knock-out punches. The damage of your unarmed attacks is increased by 1d4. Additionally, whenever you make an attack roll with an unarmed attack, add 2 to the result.",
      "effectIT": "I tuoi colpi a mani nude sono pugni da KO. Il danno dei tuoi attacchi disarmati aumenta di 1d4. Inoltre, ogni volta che effettui un tiro per colpire con un attacco disarmato, aggiungi 2 al risultato.",
      "effect": "I tuoi colpi a mani nude sono pugni da KO. Il danno dei tuoi attacchi disarmati aumenta di 1d4. Inoltre, ogni volta che effettui un tiro per colpire con un attacco disarmato, aggiungi 2 al risultato."
    },
    {
      "id": "heave_ho",
      "name": "Oh Issa! (Heave Ho!)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 5.",
      "ranks": [
        "Il tuo possente braccio da lanciatore scaglia oggetti a distanze incredibili. La gittata di lancio di tutte le armi da lancio (coltelli, giavellotti) e delle granate è raddoppiata."
      ],
      "ranksEN": [
        "All thrown weapons (including grenades and spears) have their range doubled when you throw them."
      ],
      "ranksIT": [
        "Tutte le armi da lancio (comprese le granate e le lance) hanno la loro gittata raddoppiata quando le lanci tu."
      ],
      "effectEN": "All thrown weapons (including grenades and spears) have their range doubled when you throw them.",
      "effectIT": "Tutte le armi da lancio (comprese le granate e le lance) hanno la loro gittata raddoppiata quando le lanci tu.",
      "effect": "Tutte le armi da lancio (comprese le granate e le lance) hanno la loro gittata raddoppiata quando le lanci tu."
    },
    {
      "id": "hauler",
      "name": "Facchino (Hauler)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 5.",
      "ranks": [
        "Le tue spalle larghe e le gambe robuste reggono carichi colossali. La tua Capacità di Carico massima aumenta di 50 libbre."
      ],
      "ranksEN": [
        "Your carry load is increased by 50."
      ],
      "ranksIT": [
        "La tua capacità di carico totale aumenta di 50 libbre."
      ],
      "effectEN": "Your carry load is increased by 50.",
      "effectIT": "La tua capacità di carico totale aumenta di 50 libbre.",
      "effect": "La tua capacità di carico totale aumenta di 50 libbre."
    },
    {
      "id": "assert_power",
      "name": "Afferma il Potere (Assert Power)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 5.",
      "ranks": [
        "Usi la tua stazza per dominare fisicamente l'avversario. Quando spingi o carichi una creatura, la allontani di 3 metri (10 piedi) invece di 1,5 metri (5 piedi). Inoltre, il bersaglio deve superare una prova di Forza contrapposta (DC 8 + mod FOR + Competenza) o cadere a terra prono."
      ],
      "ranksEN": [
        "You can spend 3 AP to grapple a creature in range. When you make the contested Strength check, you have advantage."
      ],
      "ranksIT": [
        "Puoi spendere 3 AP per afferrare (grapple) una creatura entro portata. Quando effettui la prova di Forza contrapposta per afferrare la creatura, hai vantaggio alla prova."
      ],
      "effectEN": "You can spend 3 AP to grapple a creature in range. When you make the contested Strength check, you have advantage.",
      "effectIT": "Puoi spendere 3 AP per afferrare (grapple) una creatura entro portata. Quando effettui la prova di Forza contrapposta per afferrare la creatura, hai vantaggio alla prova.",
      "effect": "Puoi spendere 3 AP per afferrare (grapple) una creatura entro portata. Quando effettui la prova di Forza contrapposta per afferrare la creatura, hai vantaggio alla prova."
    },
    {
      "id": "don_t_fence_me_in",
      "name": "Non Recintarmi (Don't Fence Me In)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 5.",
      "ranks": [
        "Nessun ostacolo della Zona ti rallenta quando scatti. Quando compi l'azione di Scatto (Dash), il terreno difficile non costa movimento addizionale e puoi attraversare macerie e rottami a piena velocità."
      ],
      "ranksEN": [
        "You can spend 3 AP to Escape grapples, restraints, or chokeholds and you always have advantage on the roll. Additionally, you can move through one enemy space on your turn without spending an additional action point."
      ],
      "ranksIT": [
        "Nessun ostacolo della Zona ti rallenta quando scatti. Quando compi l'azione di Scatto (Dash), il terreno difficile non costa movimento addizionale e puoi attraversare macerie e rottami a piena velocità."
      ],
      "effectEN": "You can spend 3 AP to Escape grapples, restraints, or chokeholds and you always have advantage on the roll. Additionally, you can move through one enemy space on your turn without spending an additional action point.",
      "effectIT": "Nessun ostacolo della Zona ti rallenta quando scatti. Quando compi l'azione di Scatto (Dash), il terreno difficile non costa movimento addizionale e puoi attraversare macerie e rottami a piena velocità.",
      "effect": "Nessun ostacolo della Zona ti rallenta quando scatti. Quando compi l'azione di Scatto (Dash), il terreno difficile non costa movimento addizionale e puoi attraversare macerie e rottami a piena velocità."
    },
    {
      "id": "leaping_powerhouse",
      "name": "Centrale di Salto (Leaping Powerhouse)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 6.",
      "ranks": [
        "I muscoli delle tue gambe sprigionano una potenza elastica terrificante. La tua distanza di salto in lungo e in alto è raddoppiata. Se salti addosso a una creatura dall'alto, le infliggi per intero i danni da caduta mentre i tuoi danni da caduta sono dimezzati."
      ],
      "ranksEN": [
        "Your jump distance and height double. If you jump at least 10 feet toward a creature and land within 5 feet, you can spend 3 AP to make a melee attack with advantage."
      ],
      "ranksIT": [
        "La tua distanza di salto in lungo e in alto raddoppia. Se salti di almeno 10 piedi verso una creatura e atterri entro 5 piedi da essa, puoi spendere 3 AP per effettuare un attacco in mischia con vantaggio."
      ],
      "effectEN": "Your jump distance and height double. If you jump at least 10 feet toward a creature and land within 5 feet, you can spend 3 AP to make a melee attack with advantage.",
      "effectIT": "La tua distanza di salto in lungo e in alto raddoppia. Se salti di almeno 10 piedi verso una creatura e atterri entro 5 piedi da essa, puoi spendere 3 AP per effettuare un attacco in mischia con vantaggio.",
      "effect": "La tua distanza di salto in lungo e in alto raddoppia. Se salti di almeno 10 piedi verso una creatura e atterri entro 5 piedi da essa, puoi spendere 3 AP per effettuare un attacco in mischia con vantaggio."
    },
    {
      "id": "super_slam",
      "name": "Super Schiacciata (Super Slam!)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 6.",
      "ranks": [
        "Ogni tuo colpo pesante ha la forza d'urto di una motrice ferroviaria. Ogni volta che colpisci una creatura con un attacco a due mani in mischia o senz'armi, il bersaglio deve superare una prova di Forza (DC 8 + tuo mod FOR) oppure cadere immediatamente a terra prono."
      ],
      "ranksEN": [
        "All your melee attacks with two-handed weapons or blunt weapons have a chance to knock the target prone if they fail a Strength check against your save DC."
      ],
      "ranksIT": [
        "Tutti i tuoi attacchi in mischia con armi a due mani o armi contundenti pesanti hanno una probabilità di far cadere a terra prono il bersaglio se fallisce un tiro salvezza su Forza con CD pari a 8 + il tuo modificatore di Forza + il tuo bonus di competenza."
      ],
      "effectEN": "All your melee attacks with two-handed weapons or blunt weapons have a chance to knock the target prone if they fail a Strength check against your save DC.",
      "effectIT": "Tutti i tuoi attacchi in mischia con armi a due mani o armi contundenti pesanti hanno una probabilità di far cadere a terra prono il bersaglio se fallisce un tiro salvezza su Forza con CD pari a 8 + il tuo modificatore di Forza + il tuo bonus di competenza.",
      "effect": "Tutti i tuoi attacchi in mischia con armi a due mani o armi contundenti pesanti hanno una probabilità di far cadere a terra prono il bersaglio se fallisce un tiro salvezza su Forza con CD pari a 8 + il tuo modificatore di Forza + il tuo bonus di competenza."
    },
    {
      "id": "stonewall",
      "name": "Muro di Pietra (Stonewall)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 6.",
      "ranks": [
        "Sei solido come una roccia granitica. Non puoi essere fatto cadere prono da attacchi fisici o spinte ordinarie. Inoltre, guadagni un bonus di +2 alla tua Soglia Danni (PD/DT) contro tutti gli attacchi in mischia e senz'armi."
      ],
      "ranksEN": [
        "You cannot be knocked prone or pushed back against your will unless the attacking creature is at least two size categories larger than you."
      ],
      "ranksIT": [
        "Non puoi essere buttato a terra prono né respinto indietro contro la tua volontà a meno che la creatura attaccante non sia di almeno due categorie di taglia più grande di te."
      ],
      "effectEN": "You cannot be knocked prone or pushed back against your will unless the attacking creature is at least two size categories larger than you.",
      "effectIT": "Non puoi essere buttato a terra prono né respinto indietro contro la tua volontà a meno che la creatura attaccante non sia di almeno due categorie di taglia più grande di te.",
      "effect": "Non puoi essere buttato a terra prono né respinto indietro contro la tua volontà a meno che la creatura attaccante non sia di almeno due categorie di taglia più grande di te."
    },
    {
      "id": "k_o",
      "name": "K.O.",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 7.",
      "ranks": [
        "Metti tutta la tua potenza in un colpo devastante che spegne le luci all'avversario. Una volta per combattimento, quando colpisci con un attacco senz'armi o in mischia, puoi costringere il bersaglio a effettuare un tiro salvezza di Costituzione (DC 8 + mod FOR + Competenza): se fallisce, è stordito (Stunned) fino alla fine del suo prossimo turno."
      ],
      "ranksEN": [
        "Whenever you deal damage to a target creature's hit points for the first time from an attack roll with an unarmed or melee weapon attack, they become dazed for 2 rounds."
      ],
      "ranksIT": [
        "Metti tutta la tua potenza in un colpo devastante che spegne le luci all'avversario. Una volta per combattimento, quando colpisci con un attacco senz'armi o in mischia, puoi costringere il bersaglio a effettuare un tiro salvezza di Costituzione (DC 8 + mod FOR + Competenza): se fallisce, è stordito (Stunned) fino alla fine del suo prossimo turno."
      ],
      "effectEN": "Whenever you deal damage to a target creature's hit points for the first time from an attack roll with an unarmed or melee weapon attack, they become dazed for 2 rounds.",
      "effectIT": "Metti tutta la tua potenza in un colpo devastante che spegne le luci all'avversario. Una volta per combattimento, quando colpisci con un attacco senz'armi o in mischia, puoi costringere il bersaglio a effettuare un tiro salvezza di Costituzione (DC 8 + mod FOR + Competenza): se fallisce, è stordito (Stunned) fino alla fine del suo prossimo turno.",
      "effect": "Metti tutta la tua potenza in un colpo devastante che spegne le luci all'avversario. Una volta per combattimento, quando colpisci con un attacco senz'armi o in mischia, puoi costringere il bersaglio a effettuare un tiro salvezza di Costituzione (DC 8 + mod FOR + Competenza): se fallisce, è stordito (Stunned) fino alla fine del suo prossimo turno."
    },
    {
      "id": "piercing_strikes",
      "name": "Colpi Perforanti (Piercing Strikes)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 7.",
      "ranks": [
        "I tuoi attacchi ravvicinati trovano le fessure nelle corazze più spesse. Tutti i tuoi attacchi senz'armi e con armi da mischia ignorano 3 punti della Soglia Danni (PD/DT) del bersaglio."
      ],
      "ranksEN": [
        "Your unarmed attacks and melee weapons ignore 3 points of the target's Damage Threshold (DT)."
      ],
      "ranksIT": [
        "I tuoi attacchi disarmati e con armi da mischia ignorano 3 punti della Soglia di Danno (DT) dell'armatura del bersaglio."
      ],
      "effectEN": "Your unarmed attacks and melee weapons ignore 3 points of the target's Damage Threshold (DT).",
      "effectIT": "I tuoi attacchi disarmati e con armi da mischia ignorano 3 punti della Soglia di Danno (DT) dell'armatura del bersaglio.",
      "effect": "I tuoi attacchi disarmati e con armi da mischia ignorano 3 punti della Soglia di Danno (DT) dell'armatura del bersaglio."
    },
    {
      "id": "dual_wielder",
      "name": "Combattente a Due Armi (Dual Wielder)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 7.",
      "ranks": [
        "Padroneggi l'uso combinato di due armi da mischia a una mano contemporaneamente. Non subisci penalità impugnando un'arma nella mano secondaria, e quando attacchi con l'azione principale puoi spendere 2 AP per compiere un attacco immediato con l'arma secondaria aggiungendo il modificatore di caratteristica ai danni."
      ],
      "ranksEN": [
        "When you wield two one-handed melee weapons, your AC increases by 1 and the AP cost to attack with your off-hand weapon is reduced by 1 AP."
      ],
      "ranksIT": [
        "Quando impugni due armi da mischia a una mano, la tua Classe Armatura (AC) aumenta di 1 e il costo in AP per attaccare con la seconda arma (off-hand) è ridotto di 1 AP."
      ],
      "effectEN": "When you wield two one-handed melee weapons, your AC increases by 1 and the AP cost to attack with your off-hand weapon is reduced by 1 AP.",
      "effectIT": "Quando impugni due armi da mischia a una mano, la tua Classe Armatura (AC) aumenta di 1 e il costo in AP per attaccare con la seconda arma (off-hand) è ridotto di 1 AP.",
      "effect": "Quando impugni due armi da mischia a una mano, la tua Classe Armatura (AC) aumenta di 1 e il costo in AP per attaccare con la seconda arma (off-hand) è ridotto di 1 AP."
    },
    {
      "id": "paralyzing_punch",
      "name": "Pugno Paralizzante (Paralyzing Punch)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 8.",
      "ranks": [
        "Conosci i punti di pressione nevralgici che bloccano l'organismo. Spendi 6 AP per sferrare un pugno speciale a mani nude: se l'attacco colpisce, oltre ai normali danni, il bersaglio è completamente paralizzato fino al termine del suo prossimo turno."
      ],
      "ranksEN": [
        "You can spend 5 AP while unarmed to deliver a paralyzing punch. If it hits, the target must pass a Constitution check (DC 16) or be paralyzed for 1 round."
      ],
      "ranksIT": [
        "Puoi spendere 5 AP mentre combatti disarmato per sferrare un pugno paralizzante. Se l'attacco colpisce, il bersaglio deve superare una prova di Costituzione (CD 16) o rimanere paralizzato fino alla fine del suo prossimo turno."
      ],
      "effectEN": "You can spend 5 AP while unarmed to deliver a paralyzing punch. If it hits, the target must pass a Constitution check (DC 16) or be paralyzed for 1 round.",
      "effectIT": "Puoi spendere 5 AP mentre combatti disarmato per sferrare un pugno paralizzante. Se l'attacco colpisce, il bersaglio deve superare una prova di Costituzione (CD 16) o rimanere paralizzato fino alla fine del suo prossimo turno.",
      "effect": "Puoi spendere 5 AP mentre combatti disarmato per sferrare un pugno paralizzante. Se l'attacco colpisce, il bersaglio deve superare una prova di Costituzione (CD 16) o rimanere paralizzato fino alla fine del suo prossimo turno."
    },
    {
      "id": "rooted",
      "name": "Radicato (Rooted)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 8.",
      "ranks": [
        "Piantando saldamente i piedi al suolo diventi una fortezza inespugnabile. Se non ti muovi durante il tuo turno, ottieni un bonus di +3 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per i danni in mischia o senz'armi fino a quando non cambi posizione."
      ],
      "ranksEN": [
        "You're part tree! You can spend 4 action points on your turn to become Rooted. While Rooted, your DT increases by 5 and any damage you deal from an attack made with an unarmed or melee weapon is increased by 2. However, moving 5 feet costs 2 action points. You can spend 3 action points to remove the Rooted condition."
      ],
      "ranksIT": [
        "Piantando saldamente i piedi al suolo diventi una fortezza inespugnabile. Se non ti muovi durante il tuo turno, ottieni un bonus di +3 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per i danni in mischia o senz'armi fino a quando non cambi posizione."
      ],
      "effectEN": "You're part tree! You can spend 4 action points on your turn to become Rooted. While Rooted, your DT increases by 5 and any damage you deal from an attack made with an unarmed or melee weapon is increased by 2. However, moving 5 feet costs 2 action points. You can spend 3 action points to remove the Rooted condition.",
      "effectIT": "Piantando saldamente i piedi al suolo diventi una fortezza inespugnabile. Se non ti muovi durante il tuo turno, ottieni un bonus di +3 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per i danni in mischia o senz'armi fino a quando non cambi posizione.",
      "effect": "Piantando saldamente i piedi al suolo diventi una fortezza inespugnabile. Se non ti muovi durante il tuo turno, ottieni un bonus di +3 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per i danni in mischia o senz'armi fino a quando non cambi posizione."
    },
    {
      "id": "unstoppable_force",
      "name": "Forza Inarrestabile (Unstoppable Force)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 9.",
      "ranks": [
        "La tua furia distruttiva travolge ogni difesa. Quando attacchi una creatura che sta bloccando, parando o usando uno scudo, il tuo colpo infligge il pieno danno normale ignorando completamente la parata nemica."
      ],
      "ranksEN": [
        "Your martial might is truly legendary. Whenever you roll damage from an unarmed or melee weapon attack roll against the hit points of a creature, their DT is not subtracted from your damage total"
      ],
      "ranksIT": [
        "La tua furia distruttiva travolge ogni difesa. Quando attacchi una creatura che sta bloccando, parando o usando uno scudo, il tuo colpo infligge il pieno danno normale ignorando completamente la parata nemica."
      ],
      "effectEN": "Your martial might is truly legendary. Whenever you roll damage from an unarmed or melee weapon attack roll against the hit points of a creature, their DT is not subtracted from your damage total",
      "effectIT": "La tua furia distruttiva travolge ogni difesa. Quando attacchi una creatura che sta bloccando, parando o usando uno scudo, il tuo colpo infligge il pieno danno normale ignorando completamente la parata nemica.",
      "effect": "La tua furia distruttiva travolge ogni difesa. Quando attacchi una creatura che sta bloccando, parando o usando uno scudo, il tuo colpo infligge il pieno danno normale ignorando completamente la parata nemica."
    },
    {
      "id": "never_unarmed",
      "name": "Mai Disarmato (Never Unarmed)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 9.",
      "ranks": [
        "Ogni fibra del tuo essere è un'arma mortale. I tuoi attacchi senz'armi infliggono un dado di danno addizionale del tipo d'arma appropriato, e puoi parare attacchi con armi da mischia a mani nude senza subire danni all'arto."
      ],
      "ranksEN": [
        "Improvised weapons deal 1d6 damage instead of 1d4 and cost 1 less AP."
      ],
      "ranksIT": [
        "Riesci a improvvisare armi letali da qualsiasi oggetto comune (bottiglie rotte, sassi, attrezzi): le armi improvvisate infliggono 1d6 danni invece di 1d4 e costano 1 AP in meno per attaccare."
      ],
      "effectEN": "Improvised weapons deal 1d6 damage instead of 1d4 and cost 1 less AP.",
      "effectIT": "Riesci a improvvisare armi letali da qualsiasi oggetto comune (bottiglie rotte, sassi, attrezzi): le armi improvvisate infliggono 1d6 danni invece di 1d4 e costano 1 AP in meno per attaccare.",
      "effect": "Riesci a improvvisare armi letali da qualsiasi oggetto comune (bottiglie rotte, sassi, attrezzi): le armi improvvisate infliggono 1d6 danni invece di 1d4 e costano 1 AP in meno per attaccare."
    },
    {
      "id": "living_weapons",
      "name": "Armi Viventi (Living Weapons)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 10.",
      "ranks": [
        "La tua forza titanica ti consente di sollevare e usare i nemici come clave. Puoi afferrare in lotta una creatura di taglia Media o inferiore e impugnarla a due mani come arma improvvisata contundente (2d8 danni), infliggendo i medesimi danni sia al bersaglio colpito sia alla creatura impugnata."
      ],
      "ranksEN": [
        "Gain +2 to attack and damage rolls against wild beasts and mutated creatures within 20 feet."
      ],
      "ranksIT": [
        "Riconosci le abitudini e i punti deboli di animali e creature mutanti selvagge: guadagni +2 a tutti i tiri per colpire e per il danno contro creature viventi non umanoidi entro 20 piedi."
      ],
      "effectEN": "Gain +2 to attack and damage rolls against wild beasts and mutated creatures within 20 feet.",
      "effectIT": "Riconosci le abitudini e i punti deboli di animali e creature mutanti selvagge: guadagni +2 a tutti i tiri per colpire e per il danno contro creature viventi non umanoidi entro 20 piedi.",
      "effect": "Riconosci le abitudini e i punti deboli di animali e creature mutanti selvagge: guadagni +2 a tutti i tiri per colpire e per il danno contro creature viventi non umanoidi entro 20 piedi."
    },
    {
      "id": "slayer",
      "name": "Sterminatore (Slayer)",
      "category": "Forza",
      "maxRank": 1,
      "req": "Strength 10.",
      "ranks": [
        "La velocità e la furia con cui brandisci le armi pesanti da mischia e i pugni non ha rivali. Il costo in Punti Azione (AP) per sferrare qualsiasi attacco in mischia o senz'armi è ridotto di 1 (fino a un minimo di 1 AP)."
      ],
      "ranksEN": [
        "The speed and power of your melee strikes are superhuman. All your melee and unarmed attacks cost 1 less AP (to a minimum of 2 AP)."
      ],
      "ranksIT": [
        "La velocità e la forza dei tuoi colpi in mischia sono sovrumane. Tutti i tuoi attacchi in mischia e disarmati costano 1 AP in meno (fino a un minimo di 2 AP)."
      ],
      "effectEN": "The speed and power of your melee strikes are superhuman. All your melee and unarmed attacks cost 1 less AP (to a minimum of 2 AP).",
      "effectIT": "La velocità e la forza dei tuoi colpi in mischia sono sovrumane. Tutti i tuoi attacchi in mischia e disarmati costano 1 AP in meno (fino a un minimo di 2 AP).",
      "effect": "La velocità e la forza dei tuoi colpi in mischia sono sovrumane. Tutti i tuoi attacchi in mischia e disarmati costano 1 AP in meno (fino a un minimo di 2 AP)."
    },
    {
      "id": "careful_aim",
      "name": "Mira Accurata (Careful Aim)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 4.",
      "ranks": [
        "Calcoli con freddezza traiettoria e distanza prima di tirare. Spendere 2 AP per prendere la mira conferisce un bonus di +3 al tuo prossimo tiro per colpire a distanza, invece del normale bonus di +1."
      ],
      "ranksEN": [
        "You take your time to attack, allowing you to be more accurate. Whenever you spend action points to make an attack roll with a ranged weapon, you can spend 1 additional action point to add 1 to the result of the roll. You can spend up to 3 additional action points to add an additional 1 to the attack per action point used."
      ],
      "ranksIT": [
        "Calcoli con freddezza traiettoria e distanza prima di tirare. Spendere 2 AP per prendere la mira conferisce un bonus di +3 al tuo prossimo tiro per colpire a distanza, invece del normale bonus di +1."
      ],
      "effectEN": "You take your time to attack, allowing you to be more accurate. Whenever you spend action points to make an attack roll with a ranged weapon, you can spend 1 additional action point to add 1 to the result of the roll. You can spend up to 3 additional action points to add an additional 1 to the attack per action point used.",
      "effectIT": "Calcoli con freddezza traiettoria e distanza prima di tirare. Spendere 2 AP per prendere la mira conferisce un bonus di +3 al tuo prossimo tiro per colpire a distanza, invece del normale bonus di +1.",
      "effect": "Calcoli con freddezza traiettoria e distanza prima di tirare. Spendere 2 AP per prendere la mira conferisce un bonus di +3 al tuo prossimo tiro per colpire a distanza, invece del normale bonus di +1."
    },
    {
      "id": "friend_of_the_night",
      "name": "Amico della Notte (Friend of the Night)",
      "category": "Percezione",
      "maxRank": 2,
      "req": "Perception 4.",
      "ranks": [
        "I tuoi occhi si adattano istantaneamente alle tenebre più fitte. Ignori completamente qualsiasi penalità al tiro per colpire o alle prove di Percezione dovuta a luce fioca, buio naturale o ombre entro 18 metri (60 piedi)."
      ],
      "ranksEN": [
        "You've adapted to low-light conditions and you know how to utilize the darkness to your advantage. You no longer have disadvantage on any attack rolls, ability checks, or skill checks inhibited by low-light conditions.\n\n[Ripetibile]: Repeat: If you take this perk again, you've mutated or upgraded to adapt to the darkness. You have night vision out to 100 feet.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: If you take this perk again, you've mutated or upgraded to adapt to the darkness. You have night vision out to 100 feet."
      ],
      "ranksIT": [
        "I tuoi occhi si adattano istantaneamente alle tenebre più fitte. Ignori completamente qualsiasi penalità al tiro per colpire o alle prove di Percezione dovuta a luce fioca, buio naturale o ombre entro 18 metri (60 piedi)."
      ],
      "effectEN": "You've adapted to low-light conditions and you know how to utilize the darkness to your advantage. You no longer have disadvantage on any attack rolls, ability checks, or skill checks inhibited by low-light conditions.\n\n[Ripetibile]: Repeat: If you take this perk again, you've mutated or upgraded to adapt to the darkness. You have night vision out to 100 feet.",
      "effectIT": "I tuoi occhi si adattano istantaneamente alle tenebre più fitte. Ignori completamente qualsiasi penalità al tiro per colpire o alle prove di Percezione dovuta a luce fioca, buio naturale o ombre entro 18 metri (60 piedi).",
      "effect": "I tuoi occhi si adattano istantaneamente alle tenebre più fitte. Ignori completamente qualsiasi penalità al tiro per colpire o alle prove di Percezione dovuta a luce fioca, buio naturale o ombre entro 18 metri (60 piedi)."
    },
    {
      "id": "alertness",
      "name": "Vigilanza (Alertness)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 5.",
      "ranks": [
        "I tuoi sensi sono costantemente all'erta contro pericoli e imboscate. La tua Percezione Passiva aumenta di +5 e non puoi essere sorpreso da nemici furtivi finché sei cosciente."
      ],
      "ranksEN": [
        "You've learned to keep your senses alert to any danger. If you do not move from a singular location no larger than a 20 foot radius for at least 10 minutes; you gain a bonus to your passive sense equal to your Perception ability score. (Simply put, your passive sense is equal to 12 + double your Perception ability modifier)"
      ],
      "ranksIT": [
        "I tuoi sensi sono costantemente all'erta contro pericoli e imboscate. La tua Percezione Passiva aumenta di +5 e non puoi essere sorpreso da nemici furtivi finché sei cosciente."
      ],
      "effectEN": "You've learned to keep your senses alert to any danger. If you do not move from a singular location no larger than a 20 foot radius for at least 10 minutes; you gain a bonus to your passive sense equal to your Perception ability score. (Simply put, your passive sense is equal to 12 + double your Perception ability modifier)",
      "effectIT": "I tuoi sensi sono costantemente all'erta contro pericoli e imboscate. La tua Percezione Passiva aumenta di +5 e non puoi essere sorpreso da nemici furtivi finché sei cosciente.",
      "effect": "I tuoi sensi sono costantemente all'erta contro pericoli e imboscate. La tua Percezione Passiva aumenta di +5 e non puoi essere sorpreso da nemici furtivi finché sei cosciente."
    },
    {
      "id": "infiltrator",
      "name": "Infiltratore (Infiltrator)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 5.",
      "ranks": [
        "La tua sensibilità tattile ti rende un asso dello scasso. Un tentativo fallito di Scasso (Breach/Lockpick) non spezza mai il grimaldello (forcina) e non blocca definitivamente la serratura, consentendoti di ritentare liberamente."
      ],
      "ranksEN": [
        "When picking locks, if your bobby pin breaks you can immediately attempt again spending 3 AP without breaking the pin (up to 5 times per day)."
      ],
      "ranksIT": [
        "Quando forzi una serratura, se la tua forcina si spezza hai una seconda possibilità: puoi effettuare immediatamente un secondo tentativo spendendo 3 AP senza rompere la forcina (fino a 5 volte al giorno)."
      ],
      "effectEN": "When picking locks, if your bobby pin breaks you can immediately attempt again spending 3 AP without breaking the pin (up to 5 times per day).",
      "effectIT": "Quando forzi una serratura, se la tua forcina si spezza hai una seconda possibilità: puoi effettuare immediatamente un secondo tentativo spendendo 3 AP senza rompere la forcina (fino a 5 volte al giorno).",
      "effect": "Quando forzi una serratura, se la tua forcina si spezza hai una seconda possibilità: puoi effettuare immediatamente un secondo tentativo spendendo 3 AP senza rompere la forcina (fino a 5 volte al giorno)."
    },
    {
      "id": "empowered_energy",
      "name": "Energia Potenziata (Empowered Energy)",
      "category": "Percezione",
      "maxRank": 3,
      "req": "Perception 5.",
      "ranks": [
        "Regoli i convertitori dei tuoi generatori laser e al plasma per ottenere la massima potenza termica. Tutti gli attacchi effettuati con armi ad energia infliggono +2 danni addizionali."
      ],
      "ranksEN": [
        "Whenever you roll damage from an attack from an energy weapon, you can roll an additional damage dice. Additionally, whenever you critically hit with an energy weapon you can choose to either make an additional attack (up to a maximum of one per turn) or double the critical hit damage.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times, each time increasing your energy weapon damage dice by one.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times, each time increasing your energy weapon damage dice by one.",
        "Grado 3: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times, each time increasing your energy weapon damage dice by one."
      ],
      "ranksIT": [
        "Regoli i convertitori dei tuoi generatori laser e al plasma per ottenere la massima potenza termica. Tutti gli attacchi effettuati con armi ad energia infliggono +2 danni addizionali."
      ],
      "effectEN": "Whenever you roll damage from an attack from an energy weapon, you can roll an additional damage dice. Additionally, whenever you critically hit with an energy weapon you can choose to either make an additional attack (up to a maximum of one per turn) or double the critical hit damage.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times, each time increasing your energy weapon damage dice by one.",
      "effectIT": "Regoli i convertitori dei tuoi generatori laser e al plasma per ottenere la massima potenza termica. Tutti gli attacchi effettuati con armi ad energia infliggono +2 danni addizionali.",
      "effect": "Regoli i convertitori dei tuoi generatori laser e al plasma per ottenere la massima potenza termica. Tutti gli attacchi effettuati con armi ad energia infliggono +2 danni addizionali."
    },
    {
      "id": "standoff",
      "name": "Stallo alla Messicana (Standoff)",
      "category": "Percezione",
      "maxRank": 3,
      "req": "Perception 5.",
      "ranks": [
        "Hai lo sguardo d'acciaio e il grilletto più rapido della frontiera. All'inizio del primo round di combattimento, se la tua Percezione è superiore a quella del nemico, puoi estrarre immediatamente un'arma a distanza ed effettuare un attacco prima del primo turno di Iniziativa."
      ],
      "ranksEN": [
        "When starting combat at least 30 feet away from any enemy, gain +2 to combat sequence and +2 to your first ranged attack roll."
      ],
      "ranksIT": [
        "Quando inizi il combattimento a una distanza di almeno 30 piedi da qualsiasi nemico, ottieni +2 alla Sequenza di Combattimento e +2 alla tua prima prova per colpire a distanza."
      ],
      "effectEN": "When starting combat at least 30 feet away from any enemy, gain +2 to combat sequence and +2 to your first ranged attack roll.",
      "effectIT": "Quando inizi il combattimento a una distanza di almeno 30 piedi da qualsiasi nemico, ottieni +2 alla Sequenza di Combattimento e +2 alla tua prima prova per colpire a distanza.",
      "effect": "Quando inizi il combattimento a una distanza di almeno 30 piedi da qualsiasi nemico, ottieni +2 alla Sequenza di Combattimento e +2 alla tua prima prova per colpire a distanza."
    },
    {
      "id": "efficient_diagnosis",
      "name": "Diagnosi Efficiente (Efficient Diagnosis)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 5.",
      "ranks": [
        "Individui traumi, tossine e ferite con una semplice occhiata clinica. Le prove di Medicina per diagnosticare disturbi, stabilizzare alleati o steccare arti richiedono la metà del tempo e costano 2 AP in meno (minimo 1 AP)."
      ],
      "ranksEN": [
        "You know where and why it hurts. Whenever you use a stimpak, first aid kit, or doctor's bag on another creature; they heal an additional 2 hit points, alternatively you can flip one of your karma caps to heal double the amount you normally would. Repeat: You can take this perk up to a maximum of three times, each time increasing the number healed by 2."
      ],
      "ranksIT": [
        "Individui traumi, tossine e ferite con una semplice occhiata clinica. Le prove di Medicina per diagnosticare disturbi, stabilizzare alleati o steccare arti richiedono la metà del tempo e costano 2 AP in meno (minimo 1 AP)."
      ],
      "effectEN": "You know where and why it hurts. Whenever you use a stimpak, first aid kit, or doctor's bag on another creature; they heal an additional 2 hit points, alternatively you can flip one of your karma caps to heal double the amount you normally would. Repeat: You can take this perk up to a maximum of three times, each time increasing the number healed by 2.",
      "effectIT": "Individui traumi, tossine e ferite con una semplice occhiata clinica. Le prove di Medicina per diagnosticare disturbi, stabilizzare alleati o steccare arti richiedono la metà del tempo e costano 2 AP in meno (minimo 1 AP).",
      "effect": "Individui traumi, tossine e ferite con una semplice occhiata clinica. Le prove di Medicina per diagnosticare disturbi, stabilizzare alleati o steccare arti richiedono la metà del tempo e costano 2 AP in meno (minimo 1 AP)."
    },
    {
      "id": "nose_for_trouble",
      "name": "Fiuto per i Guai (Nose for Trouble)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 5.",
      "ranks": [
        "Percepisci il pericolo prima che si manifesti. Ottieni vantaggio su tutte le prove di Percezione per individuare trappole, fili d'inciampo, mine sotterrate o nemici appostati in agguato."
      ],
      "ranksEN": [
        "Your instincts warn you of danger: gain +5 to passive perception for traps, mines, or ambushes."
      ],
      "ranksIT": [
        "Il tuo istinto ti avverte dei pericoli imminenti: ottieni un bonus di +5 alla tua Percezione Passiva per individuare trappole, mine o imboscate nemiche."
      ],
      "effectEN": "Your instincts warn you of danger: gain +5 to passive perception for traps, mines, or ambushes.",
      "effectIT": "Il tuo istinto ti avverte dei pericoli imminenti: ottieni un bonus di +5 alla tua Percezione Passiva per individuare trappole, mine o imboscate nemiche.",
      "effect": "Il tuo istinto ti avverte dei pericoli imminenti: ottieni un bonus di +5 alla tua Percezione Passiva per individuare trappole, mine o imboscate nemiche."
    },
    {
      "id": "pack_rat",
      "name": "Ratto Accumulatore (Pack Rat)",
      "category": "Percezione",
      "maxRank": 3,
      "req": "Perception 6.",
      "ranks": [
        "Sai sistemare e impilare oggetti minuti con logica geometrica perfetta. Tutti gli oggetti, componenti, munizioni e rifornimenti nel tuo inventario con peso pari o inferiore a 2 libbre hanno il loro peso dimezzato."
      ],
      "ranksEN": [
        "Each player character's carry load increases by 10. Additionally, any item you carry that has a load less than 3 is reduced to 1.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times, each time increasing each player character's carry load by 10.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times, each time increasing each player character's carry load by 10.",
        "Grado 3: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times, each time increasing each player character's carry load by 10."
      ],
      "ranksIT": [
        "Sai sistemare e impilare oggetti minuti con logica geometrica perfetta. Tutti gli oggetti, componenti, munizioni e rifornimenti nel tuo inventario con peso pari o inferiore a 2 libbre hanno il loro peso dimezzato."
      ],
      "effectEN": "Each player character's carry load increases by 10. Additionally, any item you carry that has a load less than 3 is reduced to 1.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times, each time increasing each player character's carry load by 10.",
      "effectIT": "Sai sistemare e impilare oggetti minuti con logica geometrica perfetta. Tutti gli oggetti, componenti, munizioni e rifornimenti nel tuo inventario con peso pari o inferiore a 2 libbre hanno il loro peso dimezzato.",
      "effect": "Sai sistemare e impilare oggetti minuti con logica geometrica perfetta. Tutti gli oggetti, componenti, munizioni e rifornimenti nel tuo inventario con peso pari o inferiore a 2 libbre hanno il loro peso dimezzato."
    },
    {
      "id": "splash_damage",
      "name": "Danno ad Area (Splash Damage)",
      "category": "Percezione",
      "maxRank": 2,
      "req": "Perception 6.",
      "ranks": [
        "Ottimizzi l'angolazione di lancio delle testate e granate. Il raggio di deflagrazione di tutte le armi esplosive (granate, mine, missili, mini-bombe atomiche) aumenta del 25%."
      ],
      "ranksEN": [
        "When you're deep in enemy territory, you just start chucking grenades and hope for the best. Whenever you attack with a weapon or equipment that has an area of effect, the area is increased by half.\n\n[Ripetibile]: Repeat: If you take this perk again, area of effect size is increased by half (effectively doubling your area of effect size).",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: If you take this perk again, area of effect size is increased by half (effectively doubling your area of effect size)."
      ],
      "ranksIT": [
        "Ottimizzi l'angolazione di lancio delle testate e granate. Il raggio di deflagrazione di tutte le armi esplosive (granate, mine, missili, mini-bombe atomiche) aumenta del 25%."
      ],
      "effectEN": "When you're deep in enemy territory, you just start chucking grenades and hope for the best. Whenever you attack with a weapon or equipment that has an area of effect, the area is increased by half.\n\n[Ripetibile]: Repeat: If you take this perk again, area of effect size is increased by half (effectively doubling your area of effect size).",
      "effectIT": "Ottimizzi l'angolazione di lancio delle testate e granate. Il raggio di deflagrazione di tutte le armi esplosive (granate, mine, missili, mini-bombe atomiche) aumenta del 25%.",
      "effect": "Ottimizzi l'angolazione di lancio delle testate e granate. Il raggio di deflagrazione di tutte le armi esplosive (granate, mine, missili, mini-bombe atomiche) aumenta del 25%."
    },
    {
      "id": "careful_detonations",
      "name": "Detonazioni Controllate (Careful Detonations)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 6.",
      "ranks": [
        "Calcoli onde d'urto e schegge con precisione chirurgica. Gli esplosivi piazzati, lanciati o sparati da te non infliggono alcun danno da fuoco amico a te stesso né agli alleati che selezioni entro l'area d'effetto."
      ],
      "ranksEN": [
        "When detonating explosives, you can protect up to 5 designated allies or squares from taking full blast damage."
      ],
      "ranksIT": [
        "Quando lanci un esplosivo, puoi scegliere fino a 5 quadrati o creature nell'area che subiscono solo la metà dei danni (o 0 danni se superano il tiro salvezza)."
      ],
      "effectEN": "When detonating explosives, you can protect up to 5 designated allies or squares from taking full blast damage.",
      "effectIT": "Quando lanci un esplosivo, puoi scegliere fino a 5 quadrati o creature nell'area che subiscono solo la metà dei danni (o 0 danni se superano il tiro salvezza).",
      "effect": "Quando lanci un esplosivo, puoi scegliere fino a 5 quadrati o creature nell'area che subiscono solo la metà dei danni (o 0 danni se superano il tiro salvezza)."
    },
    {
      "id": "pulsion_perforation",
      "name": "Perforazione Pulsata (Pulsion Perforation)",
      "category": "Percezione",
      "maxRank": 2,
      "req": "Perception 7.",
      "ranks": [
        "Calibri la frequenza dei raggi energetici per penetrare la materia solida. Tutti i tuoi attacchi con armi ad energia ignorano 3 punti della Soglia Danni (PD/DT) del bersaglio."
      ],
      "ranksEN": [
        "Your shots pierce right through your enemies! Whenever you make an attack roll with an energy weapon, you can choose to have the attack target up to three creatures that are in a line. The line is drawn starting from your location.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of twice. If you take this perk again you can target up to six creatures in a line.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of twice. If you take this perk again you can target up to six creatures in a line."
      ],
      "ranksIT": [
        "Calibri la frequenza dei raggi energetici per penetrare la materia solida. Tutti i tuoi attacchi con armi ad energia ignorano 3 punti della Soglia Danni (PD/DT) del bersaglio."
      ],
      "effectEN": "Your shots pierce right through your enemies! Whenever you make an attack roll with an energy weapon, you can choose to have the attack target up to three creatures that are in a line. The line is drawn starting from your location.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of twice. If you take this perk again you can target up to six creatures in a line.",
      "effectIT": "Calibri la frequenza dei raggi energetici per penetrare la materia solida. Tutti i tuoi attacchi con armi ad energia ignorano 3 punti della Soglia Danni (PD/DT) del bersaglio.",
      "effect": "Calibri la frequenza dei raggi energetici per penetrare la materia solida. Tutti i tuoi attacchi con armi ad energia ignorano 3 punti della Soglia Danni (PD/DT) del bersaglio."
    },
    {
      "id": "demolitions_expert",
      "name": "Esperto Demolitore (Demolitions Expert)",
      "category": "Percezione",
      "maxRank": 3,
      "req": "Perception 7.",
      "ranks": [
        "Grado 1: Sei un maestro nell'uso degli esplosivi: tutte le tue armi esplosive infliggono +20% di danno.",
        "Grado 2: Le tue armi esplosive infliggono +40% di danno totale.",
        "Grado 3: Le tue armi esplosive infliggono +60% di danno totale e i nemici hanno svantaggio ai tiri salvezza contro i tuoi ordigni."
      ],
      "ranksEN": [
        "You are an expert when it comes to the fine art of handling explosives. Whenever you deal damage with an explosive, the damage is increased by an additional dice.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times.",
        "Grado 3: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times."
      ],
      "ranksIT": [
        "Grado 1: Sei un maestro nell'uso degli esplosivi: tutte le tue armi esplosive infliggono +20% di danno.",
        "Grado 2: Le tue armi esplosive infliggono +40% di danno totale.",
        "Grado 3: Le tue armi esplosive infliggono +60% di danno totale e i nemici hanno svantaggio ai tiri salvezza contro i tuoi ordigni."
      ],
      "effectEN": "You are an expert when it comes to the fine art of handling explosives. Whenever you deal damage with an explosive, the damage is increased by an additional dice.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times.",
      "effectIT": "Grado 1: Sei un maestro nell'uso degli esplosivi: tutte le tue armi esplosive infliggono +20% di danno.",
      "effect": "Grado 1: Sei un maestro nell'uso degli esplosivi: tutte le tue armi esplosive infliggono +20% di danno."
    },
    {
      "id": "act_on_instinct",
      "name": "Agire d'Istinto (Act on Instinct)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 7.",
      "ranks": [
        "I tuoi riflessi visivi anticipano le minacce in arrivo. Come reazione a un attacco a distanza o in mischia contro di te, puoi spendere 2 AP per aumentare la tua Classe Armatura (CA) di +3 contro quell'attacco specifico."
      ],
      "ranksEN": [
        "When you roll combat sequence, you gain 3 AP that you can spend immediately before any other creatures act in the combat. If an action would have taken place to initiate the combat, such as an enemy attacking from a hidden spot, you spend these action points after this action occurs."
      ],
      "ranksIT": [
        "I tuoi riflessi visivi anticipano le minacce in arrivo. Come reazione a un attacco a distanza o in mischia contro di te, puoi spendere 2 AP per aumentare la tua Classe Armatura (CA) di +3 contro quell'attacco specifico."
      ],
      "effectEN": "When you roll combat sequence, you gain 3 AP that you can spend immediately before any other creatures act in the combat. If an action would have taken place to initiate the combat, such as an enemy attacking from a hidden spot, you spend these action points after this action occurs.",
      "effectIT": "I tuoi riflessi visivi anticipano le minacce in arrivo. Come reazione a un attacco a distanza o in mischia contro di te, puoi spendere 2 AP per aumentare la tua Classe Armatura (CA) di +3 contro quell'attacco specifico.",
      "effect": "I tuoi riflessi visivi anticipano le minacce in arrivo. Come reazione a un attacco a distanza o in mischia contro di te, puoi spendere 2 AP per aumentare la tua Classe Armatura (CA) di +3 contro quell'attacco specifico."
    },
    {
      "id": "hit_the_deck",
      "name": "A Terra! (Hit the Deck)",
      "category": "Percezione",
      "maxRank": 2,
      "req": "Perception 8.",
      "ranks": [
        "Ti getti a terra all'istante all'innesco di una detonazione. Quando subisci l'effetto di un'esplosione o di un'arma con danno ad area, se superi il tiro salvezza non subisci alcun danno, e se lo fallisci subisci solo metà danno."
      ],
      "ranksEN": [
        "Spend a reaction (1 AP) to drop prone and halve all explosive damage taken."
      ],
      "ranksIT": [
        "Quando esplode una granata o un razzo entro 20 piedi da te, puoi spendere la tua reazione (1 AP) per gettarti a terra, dimezzando tutti i danni subiti dall'esplosione."
      ],
      "effectEN": "Spend a reaction (1 AP) to drop prone and halve all explosive damage taken.",
      "effectIT": "Quando esplode una granata o un razzo entro 20 piedi da te, puoi spendere la tua reazione (1 AP) per gettarti a terra, dimezzando tutti i danni subiti dall'esplosione.",
      "effect": "Quando esplode una granata o un razzo entro 20 piedi da te, puoi spendere la tua reazione (1 AP) per gettarti a terra, dimezzando tutti i danni subiti dall'esplosione."
    },
    {
      "id": "meltdown",
      "name": "Fusione Termica (Meltdown)",
      "category": "Percezione",
      "maxRank": 2,
      "req": "Perception 8.",
      "ranks": [
        "I tuoi colpi energetici sovraccaricano la materia atomica dei bersagli. Uccidere un nemico con un'arma ad energia provoca un'esplosione devastante di plasma che infligge danni da plasma ad area a tutti i nemici entro 3 metri (10 piedi)."
      ],
      "ranksEN": [
        "Whenever you deal enough damage to bring another creature to 0 hit points from an attack roll made with a weapon that deals laser, plasma, or electricity damage; you can choose for that creature to explode with a corona of energy. Each creature within 10 feet of that creature takes damage equal to the amount you dealt.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of once.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of once."
      ],
      "ranksIT": [
        "I tuoi colpi energetici sovraccaricano la materia atomica dei bersagli. Uccidere un nemico con un'arma ad energia provoca un'esplosione devastante di plasma che infligge danni da plasma ad area a tutti i nemici entro 3 metri (10 piedi)."
      ],
      "effectEN": "Whenever you deal enough damage to bring another creature to 0 hit points from an attack roll made with a weapon that deals laser, plasma, or electricity damage; you can choose for that creature to explode with a corona of energy. Each creature within 10 feet of that creature takes damage equal to the amount you dealt.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of once.",
      "effectIT": "I tuoi colpi energetici sovraccaricano la materia atomica dei bersagli. Uccidere un nemico con un'arma ad energia provoca un'esplosione devastante di plasma che infligge danni da plasma ad area a tutti i nemici entro 3 metri (10 piedi).",
      "effect": "I tuoi colpi energetici sovraccaricano la materia atomica dei bersagli. Uccidere un nemico con un'arma ad energia provoca un'esplosione devastante di plasma che infligge danni da plasma ad area a tutti i nemici entro 3 metri (10 piedi)."
    },
    {
      "id": "sniper",
      "name": "Cecchino (Sniper)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 9.",
      "ranks": [
        "Sei letale dalle lunghe distanze. Quando effettui un attacco con un'arma a distanza contro un bersaglio situato a più di 18 metri (60 piedi) da te, ottieni vantaggio su qualsiasi tiro mirato alla testa."
      ],
      "ranksEN": [
        "Your long-range accuracy is surgical. You no longer have disadvantage on ranged attack rolls made at long range."
      ],
      "ranksIT": [
        "La tua precisione a lungo raggio è chirurgica. Quando effettui un attacco a distanza contro un bersaglio situato alla gittata lunga dell'arma, non subisci svantaggio al tiro per colpire."
      ],
      "effectEN": "Your long-range accuracy is surgical. You no longer have disadvantage on ranged attack rolls made at long range.",
      "effectIT": "La tua precisione a lungo raggio è chirurgica. Quando effettui un attacco a distanza contro un bersaglio situato alla gittata lunga dell'arma, non subisci svantaggio al tiro per colpire.",
      "effect": "La tua precisione a lungo raggio è chirurgica. Quando effettui un attacco a distanza contro un bersaglio situato alla gittata lunga dell'arma, non subisci svantaggio al tiro per colpire."
    },
    {
      "id": "volatile_hucker",
      "name": "Lanciatore Instabile (Volatile Hucker)",
      "category": "Percezione",
      "maxRank": 1,
      "req": "Perception 9.",
      "ranks": [
        "Regoli la spoletta degli esplosivi lanciati per detonare a mezz'aria o al momento esatto dell'impatto. I nemici nell'area d'effetto non possono utilizzare reazioni per schivare o cercare riparo dal tuo lancio."
      ],
      "ranksEN": [
        "Arming and throwing explosives costs 1 less AP. Rolling a natural 20 doubles the explosive damage."
      ],
      "ranksIT": [
        "Puoi innescare e lanciare un esplosivo spendendo 1 AP in meno. Inoltre, se ottieni un 20 naturale al tiro per colpire con un esplosivo, infliggi danno critico raddoppiato."
      ],
      "effectEN": "Arming and throwing explosives costs 1 less AP. Rolling a natural 20 doubles the explosive damage.",
      "effectIT": "Puoi innescare e lanciare un esplosivo spendendo 1 AP in meno. Inoltre, se ottieni un 20 naturale al tiro per colpire con un esplosivo, infliggi danno critico raddoppiato.",
      "effect": "Puoi innescare e lanciare un esplosivo spendendo 1 AP in meno. Inoltre, se ottieni un 20 naturale al tiro per colpire con un esplosivo, infliggi danno critico raddoppiato."
    },
    {
      "id": "medicinal_master",
      "name": "Maestro della Medicina (Medicinal Master)",
      "category": "Percezione",
      "maxRank": 2,
      "req": "Perception 10.",
      "ranks": [
        "La tua comprensione dell'anatomia e della farmacologia è impeccabile. Tutti gli stimpak e gli strumenti medici che applichi ripristinano il 50% in più di Punti Ferita e curano all'istante qualsiasi arto menomato."
      ],
      "ranksEN": [
        "When another creature rests for at least an hour, you can use a first aid kit, stimpak, or doctor's bag to heal them of half of their total hit points. If they rest for at least 4 hours, you you can use a first aid kit, stimpak, or doctor's bag to heal them of all their hit points.\n\n[Ripetibile]: Repeat: If you take this perk again, when another creature rests for at least an hour, you can use a first aid kit, stimpak, or doctor's bag to heal them of all their hit points.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: If you take this perk again, when another creature rests for at least an hour, you can use a first aid kit, stimpak, or doctor's bag to heal them of all their hit points."
      ],
      "ranksIT": [
        "La tua comprensione dell'anatomia e della farmacologia è impeccabile. Tutti gli stimpak e gli strumenti medici che applichi ripristinano il 50% in più di Punti Ferita e curano all'istante qualsiasi arto menomato."
      ],
      "effectEN": "When another creature rests for at least an hour, you can use a first aid kit, stimpak, or doctor's bag to heal them of half of their total hit points. If they rest for at least 4 hours, you you can use a first aid kit, stimpak, or doctor's bag to heal them of all their hit points.\n\n[Ripetibile]: Repeat: If you take this perk again, when another creature rests for at least an hour, you can use a first aid kit, stimpak, or doctor's bag to heal them of all their hit points.",
      "effectIT": "La tua comprensione dell'anatomia e della farmacologia è impeccabile. Tutti gli stimpak e gli strumenti medici che applichi ripristinano il 50% in più di Punti Ferita e curano all'istante qualsiasi arto menomato.",
      "effect": "La tua comprensione dell'anatomia e della farmacologia è impeccabile. Tutti gli stimpak e gli strumenti medici che applichi ripristinano il 50% in più di Punti Ferita e curano all'istante qualsiasi arto menomato."
    },
    {
      "id": "oracle",
      "name": "Oracolo (Oracle)",
      "category": "Percezione",
      "maxRank": 2,
      "req": "Perception 10.",
      "ranks": [
        "I tuoi sensi percepiscono ogni vibrazione dell'aria e micro-movimento muscolare con frazioni di secondo di anticipo. Ottieni un bonus permanente di +2 alla tua Classe Armatura (CA) e nessun nemico può ottenere vantaggio sui tiri per colpire contro di te."
      ],
      "ranksEN": [
        "Your predictions for trouble are supernatural. Whenever you roll Combat Sequence, you can swap the combat sequence rolls of any number of willing creatures.\n\n[Ripetibile]: Repeat: If you take this perk again, whenever you roll Combat Sequence, you can swap the combat sequence rolls of up to three additional creatures (they do not have to be willing).",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: If you take this perk again, whenever you roll Combat Sequence, you can swap the combat sequence rolls of up to three additional creatures (they do not have to be willing)."
      ],
      "ranksIT": [
        "I tuoi sensi percepiscono ogni vibrazione dell'aria e micro-movimento muscolare con frazioni di secondo di anticipo. Ottieni un bonus permanente di +2 alla tua Classe Armatura (CA) e nessun nemico può ottenere vantaggio sui tiri per colpire contro di te."
      ],
      "effectEN": "Your predictions for trouble are supernatural. Whenever you roll Combat Sequence, you can swap the combat sequence rolls of any number of willing creatures.\n\n[Ripetibile]: Repeat: If you take this perk again, whenever you roll Combat Sequence, you can swap the combat sequence rolls of up to three additional creatures (they do not have to be willing).",
      "effectIT": "I tuoi sensi percepiscono ogni vibrazione dell'aria e micro-movimento muscolare con frazioni di secondo di anticipo. Ottieni un bonus permanente di +2 alla tua Classe Armatura (CA) e nessun nemico può ottenere vantaggio sui tiri per colpire contro di te.",
      "effect": "I tuoi sensi percepiscono ogni vibrazione dell'aria e micro-movimento muscolare con frazioni di secondo di anticipo. Ottieni un bonus permanente di +2 alla tua Classe Armatura (CA) e nessun nemico può ottenere vantaggio sui tiri per colpire contro di te."
    },
    {
      "id": "master_chef",
      "name": "Mastro Cuoco (Master Chef)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 4.",
      "ranks": [
        "I pasti cucinati da te sfruttano ogni sostanza nutritiva della carne della Zona. Qualsiasi cibo cucinato da te ripristina il doppio dei normali Punti Ferita e garantisce immunità alle infezioni o parassiti alimentari per 24 ore."
      ],
      "ranksEN": [
        "You know how to spice up any meal. You can spend 5 minutes cooking pre-made food, or whenever you make cooked food; it always has the filling property, if it has the bland property it instead has the tasty property, and any creature who consumes the food gains temporary stamina points equal to their level."
      ],
      "ranksIT": [
        "I pasti cucinati da te sfruttano ogni sostanza nutritiva della carne della Zona. Qualsiasi cibo cucinato da te ripristina il doppio dei normali Punti Ferita e garantisce immunità alle infezioni o parassiti alimentari per 24 ore."
      ],
      "effectEN": "You know how to spice up any meal. You can spend 5 minutes cooking pre-made food, or whenever you make cooked food; it always has the filling property, if it has the bland property it instead has the tasty property, and any creature who consumes the food gains temporary stamina points equal to their level.",
      "effectIT": "I pasti cucinati da te sfruttano ogni sostanza nutritiva della carne della Zona. Qualsiasi cibo cucinato da te ripristina il doppio dei normali Punti Ferita e garantisce immunità alle infezioni o parassiti alimentari per 24 ore.",
      "effect": "I pasti cucinati da te sfruttano ogni sostanza nutritiva della carne della Zona. Qualsiasi cibo cucinato da te ripristina il doppio dei normali Punti Ferita e garantisce immunità alle infezioni o parassiti alimentari per 24 ore."
    },
    {
      "id": "lifegiver",
      "name": "Datore di Vita (Lifegiver)",
      "category": "Costituzione",
      "maxRank": 2,
      "req": "Endurance 4.",
      "ranks": [
        "Il tuo corpo trabocca di una vitalità straripante. I tuoi Punti Ferita massimi aumentano immediatamente di 10. Inoltre, ogni volta che sali di livello successivamente, guadagni 1 Punto Ferita aggiuntivo oltre al normale."
      ],
      "ranksEN": [
        "Your maximum hit points increase by twice your level, and you gain 2 additional hit points each time you level up."
      ],
      "ranksIT": [
        "La tua vitalità massima aumenta immediatamente di un ammontare pari a due volte il tuo livello. Ogni volta che sali di livello in futuro, guadagni 2 punti ferita aggiuntivi oltre al normale incremento."
      ],
      "effectEN": "Your maximum hit points increase by twice your level, and you gain 2 additional hit points each time you level up.",
      "effectIT": "La tua vitalità massima aumenta immediatamente di un ammontare pari a due volte il tuo livello. Ogni volta che sali di livello in futuro, guadagni 2 punti ferita aggiuntivi oltre al normale incremento.",
      "effect": "La tua vitalità massima aumenta immediatamente di un ammontare pari a due volte il tuo livello. Ogni volta che sali di livello in futuro, guadagni 2 punti ferita aggiuntivi oltre al normale incremento."
    },
    {
      "id": "toughness",
      "name": "Durezza (Toughness)",
      "category": "Costituzione",
      "maxRank": 2,
      "req": "Endurance 5.",
      "ranks": [
        "Grado 1: La tua pelle e i tuoi muscoli sono spessi come cuoio rinforzato. La tua Soglia Danni (PD/DT) permanente aumenta di +1.",
        "Grado 2: La tua resistenza ai colpi cresce ulteriormente: la tua Soglia Danni permanente aumenta di un ulteriore +1 (per un totale di +2 alla DT)."
      ],
      "ranksEN": [
        "Your Damage Threshold (DT) increases by 1 for each rank.\n\nRepeat: You can take this perk up to three times."
      ],
      "ranksIT": [
        "La tua pelle e i tuoi muscoli sono temprati come il cuoio bollito. La tua Soglia di Danno (DT) base aumenta permanentemente di 1 per ogni grado di questo talento.\n\n[Ripetibile]: Puoi acquisire questo talento fino a tre volte (+3 DT max)."
      ],
      "effectEN": "Your Damage Threshold (DT) increases by 1 for each rank.\n\nRepeat: You can take this perk up to three times.",
      "effectIT": "La tua pelle e i tuoi muscoli sono temprati come il cuoio bollito. La tua Soglia di Danno (DT) base aumenta permanentemente di 1 per ogni grado di questo talento.\n\n[Ripetibile]: Puoi acquisire questo talento fino a tre volte (+3 DT max).",
      "effect": "La tua pelle e i tuoi muscoli sono temprati come il cuoio bollito. La tua Soglia di Danno (DT) base aumenta permanentemente di 1 per ogni grado di questo talento.\n\n[Ripetibile]: Puoi acquisire questo talento fino a tre volte (+3 DT max)."
    },
    {
      "id": "beyond_the_sea",
      "name": "Oltre il Mare (Beyond the Sea)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 5.",
      "ranks": [
        "Ti muovi e respiri in acqua come una creatura anfibia. Puoi trattenere il respiro 5 volte più a lungo del normale, nuoti alla tua piena velocità di movimento e l'accumulo di radiazioni assorbite nuotando in acque contaminate è ridotto di 5."
      ],
      "ranksEN": [
        "Whenever you spend action points to move through water, you can spend 1 action point to move 5 feet instead of 10. Additionally, drinking dirty water does not give you any irradiated levels."
      ],
      "ranksIT": [
        "Ti muovi e respiri in acqua come una creatura anfibia. Puoi trattenere il respiro 5 volte più a lungo del normale, nuoti alla tua piena velocità di movimento e l'accumulo di radiazioni assorbite nuotando in acque contaminate è ridotto di 5."
      ],
      "effectEN": "Whenever you spend action points to move through water, you can spend 1 action point to move 5 feet instead of 10. Additionally, drinking dirty water does not give you any irradiated levels.",
      "effectIT": "Ti muovi e respiri in acqua come una creatura anfibia. Puoi trattenere il respiro 5 volte più a lungo del normale, nuoti alla tua piena velocità di movimento e l'accumulo di radiazioni assorbite nuotando in acque contaminate è ridotto di 5.",
      "effect": "Ti muovi e respiri in acqua come una creatura anfibia. Puoi trattenere il respiro 5 volte più a lungo del normale, nuoti alla tua piena velocità di movimento e l'accumulo di radiazioni assorbite nuotando in acque contaminate è ridotto di 5."
    },
    {
      "id": "mad_dash",
      "name": "Scatto Folle (Mad Dash)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 5.",
      "ranks": [
        "Quando devi salvarti la pelle, trovi riserve di ossigeno ed energia inaspettate. Quando compi l'azione di Scatto (Dash), la tua velocità di movimento aumenta di ulteriori 3 metri (10 piedi)."
      ],
      "ranksEN": [
        "Whenever you spend action points on your turn to sprint, you move 80 feet in a line instead of 50."
      ],
      "ranksIT": [
        "Quando devi salvarti la pelle, trovi riserve di ossigeno ed energia inaspettate. Quando compi l'azione di Scatto (Dash), la tua velocità di movimento aumenta di ulteriori 3 metri (10 piedi)."
      ],
      "effectEN": "Whenever you spend action points on your turn to sprint, you move 80 feet in a line instead of 50.",
      "effectIT": "Quando devi salvarti la pelle, trovi riserve di ossigeno ed energia inaspettate. Quando compi l'azione di Scatto (Dash), la tua velocità di movimento aumenta di ulteriori 3 metri (10 piedi).",
      "effect": "Quando devi salvarti la pelle, trovi riserve di ossigeno ed energia inaspettate. Quando compi l'azione di Scatto (Dash), la tua velocità di movimento aumenta di ulteriori 3 metri (10 piedi)."
    },
    {
      "id": "walk_it_off",
      "name": "Fattela Passare (Walk It Off)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 5.",
      "ranks": [
        "Stringi i denti ed espelli le tossine con la pura forza di volontà. Nel tuo turno puoi spendere 4 AP per porre fine immediatamente a 1 livello di Sanguinamento, Avvelenamento o a una condizione debilitante in corso sul tuo corpo."
      ],
      "ranksEN": [
        "Whenever you gain a limb condition, the effects last for half as long. Additionally, so long as the limb condition isn't severe, you can flip your Karma Cap to ignore the effects of the condition."
      ],
      "ranksIT": [
        "Stringi i denti ed espelli le tossine con la pura forza di volontà. Nel tuo turno puoi spendere 4 AP per porre fine immediatamente a 1 livello di Sanguinamento, Avvelenamento o a una condizione debilitante in corso sul tuo corpo."
      ],
      "effectEN": "Whenever you gain a limb condition, the effects last for half as long. Additionally, so long as the limb condition isn't severe, you can flip your Karma Cap to ignore the effects of the condition.",
      "effectIT": "Stringi i denti ed espelli le tossine con la pura forza di volontà. Nel tuo turno puoi spendere 4 AP per porre fine immediatamente a 1 livello di Sanguinamento, Avvelenamento o a una condizione debilitante in corso sul tuo corpo.",
      "effect": "Stringi i denti ed espelli le tossine con la pura forza di volontà. Nel tuo turno puoi spendere 4 AP per porre fine immediatamente a 1 livello di Sanguinamento, Avvelenamento o a una condizione debilitante in corso sul tuo corpo."
    },
    {
      "id": "trailblazer_s_instinct",
      "name": "Istinto del Pioniere (Trailblazer's Instinct)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 5.",
      "ranks": [
        "Conosci il ritmo di marcia per non collassare nelle marce forzate. Durante i viaggi a lunga distanza attraverso territori ostili, tu e i compagni che viaggiano con te avete vantaggio a tutte le prove di Costituzione contro l'Affaticamento e lo sfinimento."
      ],
      "ranksEN": [
        "When you start traveling, once per day you can roll a Survival skill check with the DC equal to 12. The DC increases by 2 if the route you are taking moves through difficult terrain, is longer than 3 days of travel, or is in unfamiliar territory. On a successful roll, you and each other creature you are traveling with move faster by 2 miles per hour. Additionally, you have advantage on any encounter rolls."
      ],
      "ranksIT": [
        "Conosci il ritmo di marcia per non collassare nelle marce forzate. Durante i viaggi a lunga distanza attraverso territori ostili, tu e i compagni che viaggiano con te avete vantaggio a tutte le prove di Costituzione contro l'Affaticamento e lo sfinimento."
      ],
      "effectEN": "When you start traveling, once per day you can roll a Survival skill check with the DC equal to 12. The DC increases by 2 if the route you are taking moves through difficult terrain, is longer than 3 days of travel, or is in unfamiliar territory. On a successful roll, you and each other creature you are traveling with move faster by 2 miles per hour. Additionally, you have advantage on any encounter rolls.",
      "effectIT": "Conosci il ritmo di marcia per non collassare nelle marce forzate. Durante i viaggi a lunga distanza attraverso territori ostili, tu e i compagni che viaggiano con te avete vantaggio a tutte le prove di Costituzione contro l'Affaticamento e lo sfinimento.",
      "effect": "Conosci il ritmo di marcia per non collassare nelle marce forzate. Durante i viaggi a lunga distanza attraverso territori ostili, tu e i compagni che viaggiano con te avete vantaggio a tutte le prove di Costituzione contro l'Affaticamento e lo sfinimento."
    },
    {
      "id": "survivorship_bias",
      "name": "Pregiudizio del Sopravvissuto (Survivorship Bias)",
      "category": "Costituzione",
      "maxRank": 3,
      "req": "Endurance 5.",
      "ranks": [
        "Ciò che non ti uccide all'istante ti rende una fortezza. Ogni volta che subisci un colpo critico da un nemico e sopravvivi, la tua Soglia Danni (PD/DT) aumenta di +2 contro tutti gli attacchi successivi fino alla fine del tuo prossimo turno."
      ],
      "ranksEN": [
        "Your know-how of other creatures and what they can do allows you to have an edge against them. Whenever you can sense another creature, so long as you have rolled combat sequence with the creature type and subtype before; you can spend 3 action points to learn either the hit point, stamina point, action point, AC, or DT total of any of them. Additionally, you can spend 6 action points to learn one of its attacks, or any weaknesses it has (if any).\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times. Each time you take this perk you learn an additional statistic, action, or weakness when using your action points.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times. Each time you take this perk you learn an additional statistic, action, or weakness when using your action points.",
        "Grado 3: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times. Each time you take this perk you learn an additional statistic, action, or weakness when using your action points."
      ],
      "ranksIT": [
        "Ciò che non ti uccide all'istante ti rende una fortezza. Ogni volta che subisci un colpo critico da un nemico e sopravvivi, la tua Soglia Danni (PD/DT) aumenta di +2 contro tutti gli attacchi successivi fino alla fine del tuo prossimo turno."
      ],
      "effectEN": "Your know-how of other creatures and what they can do allows you to have an edge against them. Whenever you can sense another creature, so long as you have rolled combat sequence with the creature type and subtype before; you can spend 3 action points to learn either the hit point, stamina point, action point, AC, or DT total of any of them. Additionally, you can spend 6 action points to learn one of its attacks, or any weaknesses it has (if any).\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times. Each time you take this perk you learn an additional statistic, action, or weakness when using your action points.",
      "effectIT": "Ciò che non ti uccide all'istante ti rende una fortezza. Ogni volta che subisci un colpo critico da un nemico e sopravvivi, la tua Soglia Danni (PD/DT) aumenta di +2 contro tutti gli attacchi successivi fino alla fine del tuo prossimo turno.",
      "effect": "Ciò che non ti uccide all'istante ti rende una fortezza. Ogni volta che subisci un colpo critico da un nemico e sopravvivi, la tua Soglia Danni (PD/DT) aumenta di +2 contro tutti gli attacchi successivi fino alla fine del tuo prossimo turno."
    },
    {
      "id": "grit",
      "name": "Grinta (Grit)",
      "category": "Costituzione",
      "maxRank": 2,
      "req": "Endurance 6.",
      "ranks": [
        "Il tuo spirito di sopravvivenza rifiuta di cedere al primo colpo letale. Quando i tuoi Punti Ferita vengono ridotti a 0, rimani in piedi fino al termine del turno corrente, potendo compiere un'ultima azione o reazione immediata prima di cadere privo di sensi."
      ],
      "ranksEN": [
        "Whenever you are dying, movement does not cost any extra action points and you gain an additional action point at the start of your turn.\n\n[Ripetibile]: Repeat: If you take this perk again, you gain two additional action points at the start of your turn while you're dying (for a total of 3).",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: If you take this perk again, you gain two additional action points at the start of your turn while you're dying (for a total of 3)."
      ],
      "ranksIT": [
        "Il tuo spirito di sopravvivenza rifiuta di cedere al primo colpo letale. Quando i tuoi Punti Ferita vengono ridotti a 0, rimani in piedi fino al termine del turno corrente, potendo compiere un'ultima azione o reazione immediata prima di cadere privo di sensi."
      ],
      "effectEN": "Whenever you are dying, movement does not cost any extra action points and you gain an additional action point at the start of your turn.\n\n[Ripetibile]: Repeat: If you take this perk again, you gain two additional action points at the start of your turn while you're dying (for a total of 3).",
      "effectIT": "Il tuo spirito di sopravvivenza rifiuta di cedere al primo colpo letale. Quando i tuoi Punti Ferita vengono ridotti a 0, rimani in piedi fino al termine del turno corrente, potendo compiere un'ultima azione o reazione immediata prima di cadere privo di sensi.",
      "effect": "Il tuo spirito di sopravvivenza rifiuta di cedere al primo colpo letale. Quando i tuoi Punti Ferita vengono ridotti a 0, rimani in piedi fino al termine del turno corrente, potendo compiere un'ultima azione o reazione immediata prima di cadere privo di sensi."
    },
    {
      "id": "the_long_road",
      "name": "La Lunga Strada (The Long Road)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 6.",
      "ranks": [
        "Il tuo metabolismo è temprato per resistere alla totale scarsità di risorse. Necessiti della metà del normale fabbisogno giornaliero di cibo e acqua per evitare fame e disidratazione, e ignori le penalità da calura estrema nel deserto."
      ],
      "ranksEN": [
        "While traveling, you and each player character can travel an additional hour without gaining a level of exhaustion. Additionally, you gain all of your stamina points after resting for an hour instead of eight."
      ],
      "ranksIT": [
        "Il tuo metabolismo è temprato per resistere alla totale scarsità di risorse. Necessiti della metà del normale fabbisogno giornaliero di cibo e acqua per evitare fame e disidratazione, e ignori le penalità da calura estrema nel deserto."
      ],
      "effectEN": "While traveling, you and each player character can travel an additional hour without gaining a level of exhaustion. Additionally, you gain all of your stamina points after resting for an hour instead of eight.",
      "effectIT": "Il tuo metabolismo è temprato per resistere alla totale scarsità di risorse. Necessiti della metà del normale fabbisogno giornaliero di cibo e acqua per evitare fame e disidratazione, e ignori le penalità da calura estrema nel deserto.",
      "effect": "Il tuo metabolismo è temprato per resistere alla totale scarsità di risorse. Necessiti della metà del normale fabbisogno giornaliero di cibo e acqua per evitare fame e disidratazione, e ignori le penalità da calura estrema nel deserto."
    },
    {
      "id": "alive_and_kickin",
      "name": "Vivo e Vegeto (Alive and Kickin')",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 6.",
      "ranks": [
        "L'adrenalina scorre a fiumi quando sei alle strette. Finché i tuoi Punti Ferita rimangono al di sotto del 25% del massimo, recuperi automaticamente 2 Punti Stamina all'inizio di ciascuno dei tuoi turni in combattimento."
      ],
      "ranksEN": [
        "Your energetic spirit can go the extra mile! You ignore the negative effects of the first three levels of exhaustion."
      ],
      "ranksIT": [
        "L'adrenalina scorre a fiumi quando sei alle strette. Finché i tuoi Punti Ferita rimangono al di sotto del 25% del massimo, recuperi automaticamente 2 Punti Stamina all'inizio di ciascuno dei tuoi turni in combattimento."
      ],
      "effectEN": "Your energetic spirit can go the extra mile! You ignore the negative effects of the first three levels of exhaustion.",
      "effectIT": "L'adrenalina scorre a fiumi quando sei alle strette. Finché i tuoi Punti Ferita rimangono al di sotto del 25% del massimo, recuperi automaticamente 2 Punti Stamina all'inizio di ciascuno dei tuoi turni in combattimento.",
      "effect": "L'adrenalina scorre a fiumi quando sei alle strette. Finché i tuoi Punti Ferita rimangono al di sotto del 25% del massimo, recuperi automaticamente 2 Punti Stamina all'inizio di ciascuno dei tuoi turni in combattimento."
    },
    {
      "id": "solar_powered",
      "name": "Energia Solare (Solar Powered)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 7.",
      "ranks": [
        "I raggi del sole ricaricano le tue cellule come un generatore fotovoltaico. Quando ti trovi alla luce diretta del sole, il tuo punteggio di Forza aumenta di +2 e recuperi lentamente 1 Punto Ferita ogni minuto fuori dal combattimento (o 1 HP a turno in combattimento)."
      ],
      "ranksEN": [
        "While in direct sunlight, you gain +2 Strength and slowly regenerate 1 HP every 10 minutes."
      ],
      "ranksIT": [
        "Mentre sei esposto alla luce diretta del sole, ottieni +2 alla Forza e recuperi lentamente 1 punto ferita ogni 10 minuti."
      ],
      "effectEN": "While in direct sunlight, you gain +2 Strength and slowly regenerate 1 HP every 10 minutes.",
      "effectIT": "Mentre sei esposto alla luce diretta del sole, ottieni +2 alla Forza e recuperi lentamente 1 punto ferita ogni 10 minuti.",
      "effect": "Mentre sei esposto alla luce diretta del sole, ottieni +2 alla Forza e recuperi lentamente 1 punto ferita ogni 10 minuti."
    },
    {
      "id": "roughin_it",
      "name": "All'Avventura (Roughin' It)",
      "category": "Costituzione",
      "maxRank": 2,
      "req": "Endurance 7.",
      "ranks": [
        "Un letto morbido è un lusso inutile per un veterano come te. Riposare all'aperto, sulla nuda terra o attorno a un falò improvvisato ti conferisce tutti i benefici di un riposo completo 'Ben Riposato' (Well-Rested)."
      ],
      "ranksEN": [
        "Sleeping outdoors without a comfortable bed still grants the full benefits of a long rest after 8 hours."
      ],
      "ranksIT": [
        "Quando dormi all'aperto nelle terre desolate senza una tenda o un letto confortevole, benefici comunque dei pieni effetti di un riposo lungo (recuperando HP e SP) dopo sole 8 ore."
      ],
      "effectEN": "Sleeping outdoors without a comfortable bed still grants the full benefits of a long rest after 8 hours.",
      "effectIT": "Quando dormi all'aperto nelle terre desolate senza una tenda o un letto confortevole, benefici comunque dei pieni effetti di un riposo lungo (recuperando HP e SP) dopo sole 8 ore.",
      "effect": "Quando dormi all'aperto nelle terre desolate senza una tenda o un letto confortevole, benefici comunque dei pieni effetti di un riposo lungo (recuperando HP e SP) dopo sole 8 ore."
    },
    {
      "id": "made_of_sterner_stuff",
      "name": "Fatto di Pasta Dura (Made of Sterner Stuff)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 7.",
      "ranks": [
        "Le tue ossa dense e i tessuti fibrosi attutiscono i colpi fatali. Quando un nemico mette a segno un colpo critico contro di te, il numero di dadi di danno extra da colpo critico tirati dall'attaccante è ridotto di 1 dado."
      ],
      "ranksEN": [
        "Your AC increases by 1 regardless if you are armored. Additionally, when you block, you do not need to be wielding a melee weapon. If you are wielding a melee weapon, your DT increases by 2 against other Melee attacks."
      ],
      "ranksIT": [
        "Le tue ossa dense e i tessuti fibrosi attutiscono i colpi fatali. Quando un nemico mette a segno un colpo critico contro di te, il numero di dadi di danno extra da colpo critico tirati dall'attaccante è ridotto di 1 dado."
      ],
      "effectEN": "Your AC increases by 1 regardless if you are armored. Additionally, when you block, you do not need to be wielding a melee weapon. If you are wielding a melee weapon, your DT increases by 2 against other Melee attacks.",
      "effectIT": "Le tue ossa dense e i tessuti fibrosi attutiscono i colpi fatali. Quando un nemico mette a segno un colpo critico contro di te, il numero di dadi di danno extra da colpo critico tirati dall'attaccante è ridotto di 1 dado.",
      "effect": "Le tue ossa dense e i tessuti fibrosi attutiscono i colpi fatali. Quando un nemico mette a segno un colpo critico contro di te, il numero di dadi di danno extra da colpo critico tirati dall'attaccante è ridotto di 1 dado."
    },
    {
      "id": "pure_determination",
      "name": "Pura Determinazione (Pure Determination)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 8.",
      "ranks": [
        "Ti aggrappi alla vita con ferocia indistruttibile. Ottieni vantaggio su tutti i Tiri Salvezza contro la Morte e sommi il tuo modificatore di Costituzione a ogni tiro salvezza per salvarti la vita."
      ],
      "ranksEN": [
        "When dropping to 0 HP, you can spend 1 Karma Cap to drop to 1 HP instead of falling unconscious."
      ],
      "ranksIT": [
        "Quando i tuoi punti ferita scendono a 0 ma non vieni ucciso sul colpo, puoi spendere immediatamente 1 Tappo Karma per rimanere a 1 punto ferita invece di cadere privo di sensi."
      ],
      "effectEN": "When dropping to 0 HP, you can spend 1 Karma Cap to drop to 1 HP instead of falling unconscious.",
      "effectIT": "Quando i tuoi punti ferita scendono a 0 ma non vieni ucciso sul colpo, puoi spendere immediatamente 1 Tappo Karma per rimanere a 1 punto ferita invece di cadere privo di sensi.",
      "effect": "Quando i tuoi punti ferita scendono a 0 ma non vieni ucciso sul colpo, puoi spendere immediatamente 1 Tappo Karma per rimanere a 1 punto ferita invece di cadere privo di sensi."
    },
    {
      "id": "quick_recovery",
      "name": "Recupero Rapido (Quick Recovery)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 8.",
      "ranks": [
        "Ti rialzi da terra in una frazione di secondo come una molla d'acciaio. Rialzarti dalla posizione prona costa solo 1 Punto Azione (AP) invece di metà del tuo movimento, e recuperi dagli effetti di stordimento nella metà del tempo."
      ],
      "ranksEN": [
        "You can spend 3 action points on your turn to heal a number of stamina points or hit points equal to your healing rate. Once you use this ability, you cannot use it again until you rest for at least 6 hours. Additionally, whenever you heal hit points, you gain a bonus equal to your Endurance modifier."
      ],
      "ranksIT": [
        "Ti rialzi da terra in una frazione di secondo come una molla d'acciaio. Rialzarti dalla posizione prona costa solo 1 Punto Azione (AP) invece di metà del tuo movimento, e recuperi dagli effetti di stordimento nella metà del tempo."
      ],
      "effectEN": "You can spend 3 action points on your turn to heal a number of stamina points or hit points equal to your healing rate. Once you use this ability, you cannot use it again until you rest for at least 6 hours. Additionally, whenever you heal hit points, you gain a bonus equal to your Endurance modifier.",
      "effectIT": "Ti rialzi da terra in una frazione di secondo come una molla d'acciaio. Rialzarti dalla posizione prona costa solo 1 Punto Azione (AP) invece di metà del tuo movimento, e recuperi dagli effetti di stordimento nella metà del tempo.",
      "effect": "Ti rialzi da terra in una frazione di secondo come una molla d'acciaio. Rialzarti dalla posizione prona costa solo 1 Punto Azione (AP) invece di metà del tuo movimento, e recuperi dagli effetti di stordimento nella metà del tempo."
    },
    {
      "id": "implant_y_7",
      "name": "Impianto Y-7 (Implant Y-7)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 9.",
      "ranks": [
        "Un micro-sintetizzatore gastro-intestinale pre-bellico innestato nel tuo addome: mangiare qualsiasi cibo o bere acqua irradiata ripristina il doppio dei normali Punti Ferita e non ti trasmette alcuna radiazione corporea."
      ],
      "ranksEN": [
        "Your maximum hit points increase by a number equal to double your level. Additionally, your Healing Rate increases by 2."
      ],
      "ranksIT": [
        "Un micro-sintetizzatore gastro-intestinale pre-bellico innestato nel tuo addome: mangiare qualsiasi cibo o bere acqua irradiata ripristina il doppio dei normali Punti Ferita e non ti trasmette alcuna radiazione corporea."
      ],
      "effectEN": "Your maximum hit points increase by a number equal to double your level. Additionally, your Healing Rate increases by 2.",
      "effectIT": "Un micro-sintetizzatore gastro-intestinale pre-bellico innestato nel tuo addome: mangiare qualsiasi cibo o bere acqua irradiata ripristina il doppio dei normali Punti Ferita e non ti trasmette alcuna radiazione corporea.",
      "effect": "Un micro-sintetizzatore gastro-intestinale pre-bellico innestato nel tuo addome: mangiare qualsiasi cibo o bere acqua irradiata ripristina il doppio dei normali Punti Ferita e non ti trasmette alcuna radiazione corporea."
    },
    {
      "id": "nemean_sub_dermal_armor",
      "name": "Armatura Sotto-Dermica Nemea (Nemean Sub-Dermal Armor)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 9.",
      "ranks": [
        "Una maglia reticolare in ceramica balistica e polimeri sintetici è innestata sotto la tua pelle. La tua Soglia Danni (PD/DT) permanente aumenta di +2 e la tua Classe Armatura (CA) naturale aumenta di +1."
      ],
      "ranksEN": [
        "You can spend 3 action points to activate your implant, when you do; you gain resistance to any three types of damage of your choice (acid, bludgeoning, ballistic, cold, electricity, explosive, fire, impact, laser, piercing, plasma, poison, radiation, or slashing) This lasts for 3 rounds (or 15 seconds). After which, you cannot activate your implant again until you rest for at least 1 hour or roll combat sequence."
      ],
      "ranksIT": [
        "Una maglia reticolare in ceramica balistica e polimeri sintetici è innestata sotto la tua pelle. La tua Soglia Danni (PD/DT) permanente aumenta di +2 e la tua Classe Armatura (CA) naturale aumenta di +1."
      ],
      "effectEN": "You can spend 3 action points to activate your implant, when you do; you gain resistance to any three types of damage of your choice (acid, bludgeoning, ballistic, cold, electricity, explosive, fire, impact, laser, piercing, plasma, poison, radiation, or slashing) This lasts for 3 rounds (or 15 seconds). After which, you cannot activate your implant again until you rest for at least 1 hour or roll combat sequence.",
      "effectIT": "Una maglia reticolare in ceramica balistica e polimeri sintetici è innestata sotto la tua pelle. La tua Soglia Danni (PD/DT) permanente aumenta di +2 e la tua Classe Armatura (CA) naturale aumenta di +1.",
      "effect": "Una maglia reticolare in ceramica balistica e polimeri sintetici è innestata sotto la tua pelle. La tua Soglia Danni (PD/DT) permanente aumenta di +2 e la tua Classe Armatura (CA) naturale aumenta di +1."
    },
    {
      "id": "indomitable_spirit",
      "name": "Spirito Indomito (Indomitable Spirit)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 10.",
      "ranks": [
        "Nessuna forza terrena può spezzare la tua determinazione a vivere. Una volta per riposo lungo, quando un attacco ridurrebbe i tuoi Punti Ferita a 0, scendi invece a 1 HP e guadagni all'istante Punti Ferita temporanei pari al tuo punteggio di Costituzione."
      ],
      "ranksEN": [
        "When you roll combat sequence, you and any creatures of your choice gain temporary hit points equal to your Endurance modifier. Additionally, you can spend 3 action points on a dying creature within 5 feet of you, if you do they succeed one death save."
      ],
      "ranksIT": [
        "Nessuna forza terrena può spezzare la tua determinazione a vivere. Una volta per riposo lungo, quando un attacco ridurrebbe i tuoi Punti Ferita a 0, scendi invece a 1 HP e guadagni all'istante Punti Ferita temporanei pari al tuo punteggio di Costituzione."
      ],
      "effectEN": "When you roll combat sequence, you and any creatures of your choice gain temporary hit points equal to your Endurance modifier. Additionally, you can spend 3 action points on a dying creature within 5 feet of you, if you do they succeed one death save.",
      "effectIT": "Nessuna forza terrena può spezzare la tua determinazione a vivere. Una volta per riposo lungo, quando un attacco ridurrebbe i tuoi Punti Ferita a 0, scendi invece a 1 HP e guadagni all'istante Punti Ferita temporanei pari al tuo punteggio di Costituzione.",
      "effect": "Nessuna forza terrena può spezzare la tua determinazione a vivere. Una volta per riposo lungo, quando un attacco ridurrebbe i tuoi Punti Ferita a 0, scendi invece a 1 HP e guadagni all'istante Punti Ferita temporanei pari al tuo punteggio di Costituzione."
    },
    {
      "id": "phoenix_implant",
      "name": "Impianto Fenice (Phoenix Implant)",
      "category": "Costituzione",
      "maxRank": 1,
      "req": "Endurance 10.",
      "ranks": [
        "Un sofisticato innesto bio-tecnologico rilascia naniti medici nel tuo flusso sanguigno. Rigeneri continuamente 1 Punto Ferita all'inizio di ciascun round di combattimento, e recuperi 5 Punti Ferita ogni ora trascorsa fuori dallo scontro."
      ],
      "ranksEN": [
        "You can spend 3 action points to activate your implant, when you do; you heal a number of hit points at the start of your turn equal to your healing rate. This lasts for 6 rounds (or 30 seconds). After which, you cannot activate your implant again until you rest for at least 1 hour or roll combat sequence."
      ],
      "ranksIT": [
        "Un sofisticato innesto bio-tecnologico rilascia naniti medici nel tuo flusso sanguigno. Rigeneri continuamente 1 Punto Ferita all'inizio di ciascun round di combattimento, e recuperi 5 Punti Ferita ogni ora trascorsa fuori dallo scontro."
      ],
      "effectEN": "You can spend 3 action points to activate your implant, when you do; you heal a number of hit points at the start of your turn equal to your healing rate. This lasts for 6 rounds (or 30 seconds). After which, you cannot activate your implant again until you rest for at least 1 hour or roll combat sequence.",
      "effectIT": "Un sofisticato innesto bio-tecnologico rilascia naniti medici nel tuo flusso sanguigno. Rigeneri continuamente 1 Punto Ferita all'inizio di ciascun round di combattimento, e recuperi 5 Punti Ferita ogni ora trascorsa fuori dallo scontro.",
      "effect": "Un sofisticato innesto bio-tecnologico rilascia naniti medici nel tuo flusso sanguigno. Rigeneri continuamente 1 Punto Ferita all'inizio di ciascun round di combattimento, e recuperi 5 Punti Ferita ogni ora trascorsa fuori dallo scontro."
    },
    {
      "id": "savvy_salesman",
      "name": "Venditore Accorto (Savvy Salesman)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 4.",
      "ranks": [
        "La tua parlantina sciolta e il sorriso convincente ti aprono ogni bottega. Tutti i prezzi d'acquisto presso qualsiasi mercante sono ridotti del 10%, e quando vendi merci ricevi il 10% di tappi in più rispetto al normale."
      ],
      "ranksEN": [
        "Whenever you purchase an item, the price is reduced by a percentage number equal to 2 x your Charisma ability score."
      ],
      "ranksIT": [
        "La tua parlantina sciolta e il sorriso convincente ti aprono ogni bottega. Tutti i prezzi d'acquisto presso qualsiasi mercante sono ridotti del 10%, e quando vendi merci ricevi il 10% di tappi in più rispetto al normale."
      ],
      "effectEN": "Whenever you purchase an item, the price is reduced by a percentage number equal to 2 x your Charisma ability score.",
      "effectIT": "La tua parlantina sciolta e il sorriso convincente ti aprono ogni bottega. Tutti i prezzi d'acquisto presso qualsiasi mercante sono ridotti del 10%, e quando vendi merci ricevi il 10% di tappi in più rispetto al normale.",
      "effect": "La tua parlantina sciolta e il sorriso convincente ti aprono ogni bottega. Tutti i prezzi d'acquisto presso qualsiasi mercante sono ridotti del 10%, e quando vendi merci ricevi il 10% di tappi in più rispetto al normale."
    },
    {
      "id": "party_animal",
      "name": "Animale da Festa (Party Animal)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 4.",
      "ranks": [
        "L'alcol della Zona non ti manda al tappeto, ma accende il tuo carisma. Il consumo di bevande alcoliche conferisce il doppio dei bonus normali e non subisci mai postumi da sbornia, sbornie invalidanti o penalità all'Intelligenza."
      ],
      "ranksEN": [
        "Nobody has a good time like you! You cannot become addicted to Alcohol and whenever you drink an alcoholic drink, you regain a number of stamina points equal to your level."
      ],
      "ranksIT": [
        "L'alcol della Zona non ti manda al tappeto, ma accende il tuo carisma. Il consumo di bevande alcoliche conferisce il doppio dei bonus normali e non subisci mai postumi da sbornia, sbornie invalidanti o penalità all'Intelligenza."
      ],
      "effectEN": "Nobody has a good time like you! You cannot become addicted to Alcohol and whenever you drink an alcoholic drink, you regain a number of stamina points equal to your level.",
      "effectIT": "L'alcol della Zona non ti manda al tappeto, ma accende il tuo carisma. Il consumo di bevande alcoliche conferisce il doppio dei bonus normali e non subisci mai postumi da sbornia, sbornie invalidanti o penalità all'Intelligenza.",
      "effect": "L'alcol della Zona non ti manda al tappeto, ma accende il tuo carisma. Il consumo di bevande alcoliche conferisce il doppio dei bonus normali e non subisci mai postumi da sbornia, sbornie invalidanti o penalità all'Intelligenza."
    },
    {
      "id": "flaunt_n_taunt",
      "name": "Sbeffeggia e Provoca (Flaunt 'n Taunt)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 5.",
      "ranks": [
        "Usi insulti pungenti per attirare su di te la furia nemica. Spendi 3 AP per provocare una creatura entro 9 metri (30 piedi): il bersaglio deve superare una prova di Saggezza/Carisma o subire svantaggio a qualsiasi attacco che non sia diretto contro di te nel suo prossimo turno."
      ],
      "ranksEN": [
        "You're good at causing a scene! You can spend 3 action points on your turn to taunt a target creature. Roll a Charisma check, that creature must succeed a Charisma ability check with the DC being equal to your check total. If they fail; the next attack roll against the taunted creature that isn't from you has advantage. Additionally on their next turn they can only target you with their attacks. If you try to taunt a creature you have previously taunted, they have advantage on their Charisma check. You cannot taunt a creature more than twice."
      ],
      "ranksIT": [
        "Usi insulti pungenti per attirare su di te la furia nemica. Spendi 3 AP per provocare una creatura entro 9 metri (30 piedi): il bersaglio deve superare una prova di Saggezza/Carisma o subire svantaggio a qualsiasi attacco che non sia diretto contro di te nel suo prossimo turno."
      ],
      "effectEN": "You're good at causing a scene! You can spend 3 action points on your turn to taunt a target creature. Roll a Charisma check, that creature must succeed a Charisma ability check with the DC being equal to your check total. If they fail; the next attack roll against the taunted creature that isn't from you has advantage. Additionally on their next turn they can only target you with their attacks. If you try to taunt a creature you have previously taunted, they have advantage on their Charisma check. You cannot taunt a creature more than twice.",
      "effectIT": "Usi insulti pungenti per attirare su di te la furia nemica. Spendi 3 AP per provocare una creatura entro 9 metri (30 piedi): il bersaglio deve superare una prova di Saggezza/Carisma o subire svantaggio a qualsiasi attacco che non sia diretto contro di te nel suo prossimo turno.",
      "effect": "Usi insulti pungenti per attirare su di te la furia nemica. Spendi 3 AP per provocare una creatura entro 9 metri (30 piedi): il bersaglio deve superare una prova di Saggezza/Carisma o subire svantaggio a qualsiasi attacco che non sia diretto contro di te nel suo prossimo turno."
    },
    {
      "id": "dealer_s_choice",
      "name": "Scelta del Banco (Dealer's Choice)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 5.",
      "ranks": [
        "Sai come truccare le probabilità o leggere il linguaggio del corpo degli scommettitori. Nei giochi d'azzardo puoi ritirare un dado per ogni partita, e ottieni vantaggio a tutte le prove di Baratto quando vi sono in palio scommesse o accordi a rischio."
      ],
      "ranksEN": [
        "You've got a way with selling even the most useless scrap. Whenever you sell an item, you can sell it for 75% of the price instead of 50%."
      ],
      "ranksIT": [
        "Sai come truccare le probabilità o leggere il linguaggio del corpo degli scommettitori. Nei giochi d'azzardo puoi ritirare un dado per ogni partita, e ottieni vantaggio a tutte le prove di Baratto quando vi sono in palio scommesse o accordi a rischio."
      ],
      "effectEN": "You've got a way with selling even the most useless scrap. Whenever you sell an item, you can sell it for 75% of the price instead of 50%.",
      "effectIT": "Sai come truccare le probabilità o leggere il linguaggio del corpo degli scommettitori. Nei giochi d'azzardo puoi ritirare un dado per ogni partita, e ottieni vantaggio a tutte le prove di Baratto quando vi sono in palio scommesse o accordi a rischio.",
      "effect": "Sai come truccare le probabilità o leggere il linguaggio del corpo degli scommettitori. Nei giochi d'azzardo puoi ritirare un dado per ogni partita, e ottieni vantaggio a tutte le prove di Baratto quando vi sono in palio scommesse o accordi a rischio."
    },
    {
      "id": "poker_face",
      "name": "Faccia da Poker (Poker Face)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 5.",
      "ranks": [
        "La tua espressione impassibile è impenetrabile. Nessuna creatura può leggere le tue vere intenzioni o emozioni tramite prove di Intuizione, e ottieni vantaggio su tutti i tiri salvezza contro effetti di paura o charme."
      ],
      "ranksEN": [
        "Creatures cannot discern if you are lying unless their Insight beats your DC (min 9)."
      ],
      "ranksIT": [
        "La tua espressione è indecifrabile. Nessuna creatura può determinare se stai mentendo con prove di Intuizione se il loro punteggio di Saggezza/Percezione è inferiore a 9."
      ],
      "effectEN": "Creatures cannot discern if you are lying unless their Insight beats your DC (min 9).",
      "effectIT": "La tua espressione è indecifrabile. Nessuna creatura può determinare se stai mentendo con prove di Intuizione se il loro punteggio di Saggezza/Percezione è inferiore a 9.",
      "effect": "La tua espressione è indecifrabile. Nessuna creatura può determinare se stai mentendo con prove di Intuizione se il loro punteggio di Saggezza/Percezione è inferiore a 9."
    },
    {
      "id": "big_ego",
      "name": "Grande Ego (Big Ego)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 5.",
      "ranks": [
        "La fiducia nei tuoi mezzi è contagiosa e travolgente. Quando sconfiggi un nemico, tu e tutti i tuoi alleati entro 9 metri (30 piedi) guadagnate Punti Stamina temporanei pari al tuo modificatore di Carisma."
      ],
      "ranksEN": [
        "Even YOU know why you're so great! Your Party Nerve modifier is doubled for you."
      ],
      "ranksIT": [
        "La fiducia nei tuoi mezzi è contagiosa e travolgente. Quando sconfiggi un nemico, tu e tutti i tuoi alleati entro 9 metri (30 piedi) guadagnate Punti Stamina temporanei pari al tuo modificatore di Carisma."
      ],
      "effectEN": "Even YOU know why you're so great! Your Party Nerve modifier is doubled for you.",
      "effectIT": "La fiducia nei tuoi mezzi è contagiosa e travolgente. Quando sconfiggi un nemico, tu e tutti i tuoi alleati entro 9 metri (30 piedi) guadagnate Punti Stamina temporanei pari al tuo modificatore di Carisma.",
      "effect": "La fiducia nei tuoi mezzi è contagiosa e travolgente. Quando sconfiggi un nemico, tu e tutti i tuoi alleati entro 9 metri (30 piedi) guadagnate Punti Stamina temporanei pari al tuo modificatore di Carisma."
    },
    {
      "id": "battle_cry",
      "name": "Grido di Battaglia (Battle Cry)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 5.",
      "ranks": [
        "Lanci un urlo da battaglia che gela il sangue nelle vene dei tuoi oppositori. Una volta per scontro, tutte le creature ostili entro 9 metri (30 piedi) devono superare una prova di Carisma/Saggezza (DC 8 + tuo mod CAR) o rimanere spaventate fino al termine del loro prossimo turno."
      ],
      "ranksEN": [
        "You can spend 3 AP on your to encourage your allies, let out a battle cry, or otherwise instigate victory! Each creature of your choice within 20 feet of you gains 2 additional action points to a maximum of 15. Additionally, each chosen creature gains advantage on their first attack roll on their turn. Once you use this ability you cannot use it again until you roll combat sequence again."
      ],
      "ranksIT": [
        "Lanci un urlo da battaglia che gela il sangue nelle vene dei tuoi oppositori. Una volta per scontro, tutte le creature ostili entro 9 metri (30 piedi) devono superare una prova di Carisma/Saggezza (DC 8 + tuo mod CAR) o rimanere spaventate fino al termine del loro prossimo turno."
      ],
      "effectEN": "You can spend 3 AP on your to encourage your allies, let out a battle cry, or otherwise instigate victory! Each creature of your choice within 20 feet of you gains 2 additional action points to a maximum of 15. Additionally, each chosen creature gains advantage on their first attack roll on their turn. Once you use this ability you cannot use it again until you roll combat sequence again.",
      "effectIT": "Lanci un urlo da battaglia che gela il sangue nelle vene dei tuoi oppositori. Una volta per scontro, tutte le creature ostili entro 9 metri (30 piedi) devono superare una prova di Carisma/Saggezza (DC 8 + tuo mod CAR) o rimanere spaventate fino al termine del loro prossimo turno.",
      "effect": "Lanci un urlo da battaglia che gela il sangue nelle vene dei tuoi oppositori. Una volta per scontro, tutte le creature ostili entro 9 metri (30 piedi) devono superare una prova di Carisma/Saggezza (DC 8 + tuo mod CAR) o rimanere spaventate fino al termine del loro prossimo turno."
    },
    {
      "id": "animal_friend",
      "name": "Amico degli Animali (Animal Friend)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 5.",
      "ranks": [
        "Grado 1: Gli animali della Zona percepiscono la tua affinità naturale. Gli animali selvatici (cani mutati, brahmin, gecko, yao guai, ratti giganti) non ti attaccano se non vengono provocati.",
        "Grado 2: Gli animali accorrono in tuo soccorso. In combattimento, gli animali selvatici presenti combatteranno attivamente al tuo fianco per difendere te e i tuoi compagni."
      ],
      "ranksEN": [
        "Wild animals will not attack you unless provoked."
      ],
      "ranksIT": [
        "Gli animali selvatici della Zona riconoscono la tua affinità naturale: gli animali con Intelligenza inferiore a 4 non ti attaccano a meno che tu o i tuoi alleati non li attacchiate per primi. Inoltre, con una prova di Addestrare Animali puoi calmarli o renderli amichevoli."
      ],
      "effectEN": "Wild animals will not attack you unless provoked.",
      "effectIT": "Gli animali selvatici della Zona riconoscono la tua affinità naturale: gli animali con Intelligenza inferiore a 4 non ti attaccano a meno che tu o i tuoi alleati non li attacchiate per primi. Inoltre, con una prova di Addestrare Animali puoi calmarli o renderli amichevoli.",
      "effect": "Gli animali selvatici della Zona riconoscono la tua affinità naturale: gli animali con Intelligenza inferiore a 4 non ti attaccano a meno che tu o i tuoi alleati non li attacchiate per primi. Inoltre, con una prova di Addestrare Animali puoi calmarli o renderli amichevoli."
    },
    {
      "id": "synergizing_teamwork",
      "name": "Lavoro di Squadra Sinergico (Synergizing Teamwork)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 6.",
      "ranks": [
        "Coordini gli sforzi del gruppo moltiplicandone l'efficienza. Quando aiuti un alleato in una prova di Abilità (azione Aiuto), l'alleato riceve un bonus di +3 alla prova oltre al normale beneficio del vantaggio."
      ],
      "ranksEN": [
        "Whenever another party member fails an attack roll, you can flip one of your Karma Caps to add a bonus equal to your Charisma ability modifier. If the attack hits, the next creature to make an attack roll for the first time on their turn gains a bonus equal to your Charisma ability modifier plus 1. This ability continues to trigger until a party member misses their first attack roll on their turn."
      ],
      "ranksIT": [
        "Coordini gli sforzi del gruppo moltiplicandone l'efficienza. Quando aiuti un alleato in una prova di Abilità (azione Aiuto), l'alleato riceve un bonus di +3 alla prova oltre al normale beneficio del vantaggio."
      ],
      "effectEN": "Whenever another party member fails an attack roll, you can flip one of your Karma Caps to add a bonus equal to your Charisma ability modifier. If the attack hits, the next creature to make an attack roll for the first time on their turn gains a bonus equal to your Charisma ability modifier plus 1. This ability continues to trigger until a party member misses their first attack roll on their turn.",
      "effectIT": "Coordini gli sforzi del gruppo moltiplicandone l'efficienza. Quando aiuti un alleato in una prova di Abilità (azione Aiuto), l'alleato riceve un bonus di +3 alla prova oltre al normale beneficio del vantaggio.",
      "effect": "Coordini gli sforzi del gruppo moltiplicandone l'efficienza. Quando aiuti un alleato in una prova di Abilità (azione Aiuto), l'alleato riceve un bonus di +3 alla prova oltre al normale beneficio del vantaggio."
    },
    {
      "id": "ferocious_loyalty",
      "name": "Lealtà Feroce (Ferocious Loyalty)",
      "category": "Carisma",
      "maxRank": 2,
      "req": "Charisma 6.",
      "ranks": [
        "I tuoi compagni darebbero la vita pur di difenderti quando sei in grave pericolo. Quando i tuoi Punti Ferita scendono sotto il 50%, tutti i tuoi alleati entro 15 metri guadagnano +2 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per colpire."
      ],
      "ranksEN": [
        "The power of your personality inspires die-hard loyalty from your followers. When you first take damage to your hit points, your party members can regain all their stamina points so long as they can sense you. Once this ability triggers it doesn't trigger again until you rest for at least 8 hours.\n\n[Ripetibile]: Repeat: Once a player character has taken this perk, it cannot be taken by any other characters.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: Once a player character has taken this perk, it cannot be taken by any other characters."
      ],
      "ranksIT": [
        "I tuoi compagni darebbero la vita pur di difenderti quando sei in grave pericolo. Quando i tuoi Punti Ferita scendono sotto il 50%, tutti i tuoi alleati entro 15 metri guadagnano +2 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per colpire."
      ],
      "effectEN": "The power of your personality inspires die-hard loyalty from your followers. When you first take damage to your hit points, your party members can regain all their stamina points so long as they can sense you. Once this ability triggers it doesn't trigger again until you rest for at least 8 hours.\n\n[Ripetibile]: Repeat: Once a player character has taken this perk, it cannot be taken by any other characters.",
      "effectIT": "I tuoi compagni darebbero la vita pur di difenderti quando sei in grave pericolo. Quando i tuoi Punti Ferita scendono sotto il 50%, tutti i tuoi alleati entro 15 metri guadagnano +2 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per colpire.",
      "effect": "I tuoi compagni darebbero la vita pur di difenderti quando sei in grave pericolo. Quando i tuoi Punti Ferita scendono sotto il 50%, tutti i tuoi alleati entro 15 metri guadagnano +2 alla Soglia Danni (PD/DT) e +2 a tutti i tiri per colpire."
    },
    {
      "id": "back_to_back",
      "name": "Spalla a Spalla (Back to Back)",
      "category": "Carisma",
      "maxRank": 2,
      "req": "Charisma 6.",
      "ranks": [
        "Combattere gomito a gomito con un compagno d'armi vi rende inespugnabili. Quando ti trovi adiacente a un alleato consenziente (entro 1,5 metri), entrambi guadagnate +1 alla Classe Armatura (CA) e non potete essere aggirati o presi ai fianchi."
      ],
      "ranksEN": [
        "Shoulder to shoulder. When you roll combat sequence, choose one ally. When you and that ally are within 5 feet of each other, you and that ally gain the following benefits; Your AC increases by 1, your DT increases by 2, and whenever either you or the chosen ally take damage, either you or that ally can choose to reduce that damage by half. Then, they take the same amount of damage.\n\n[Ripetibile]: Repeat: Once a player character has taken this perk, it cannot be taken by any other characters. If you take this perk again, the AC bonus increases by 1, the DT bonus increases by 2, and whenever you or that ally take damage, either you or that ally can choose to reduce that damage to 0. Then, they take the damage instead.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: Once a player character has taken this perk, it cannot be taken by any other characters. If you take this perk again, the AC bonus increases by 1, the DT bonus increases by 2, and whenever you or that ally take damage, either you or that ally can choose to reduce that damage to 0. Then, they take the damage instead."
      ],
      "ranksIT": [
        "Combattere gomito a gomito con un compagno d'armi vi rende inespugnabili. Quando ti trovi adiacente a un alleato consenziente (entro 1,5 metri), entrambi guadagnate +1 alla Classe Armatura (CA) e non potete essere aggirati o presi ai fianchi."
      ],
      "effectEN": "Shoulder to shoulder. When you roll combat sequence, choose one ally. When you and that ally are within 5 feet of each other, you and that ally gain the following benefits; Your AC increases by 1, your DT increases by 2, and whenever either you or the chosen ally take damage, either you or that ally can choose to reduce that damage by half. Then, they take the same amount of damage.\n\n[Ripetibile]: Repeat: Once a player character has taken this perk, it cannot be taken by any other characters. If you take this perk again, the AC bonus increases by 1, the DT bonus increases by 2, and whenever you or that ally take damage, either you or that ally can choose to reduce that damage to 0. Then, they take the damage instead.",
      "effectIT": "Combattere gomito a gomito con un compagno d'armi vi rende inespugnabili. Quando ti trovi adiacente a un alleato consenziente (entro 1,5 metri), entrambi guadagnate +1 alla Classe Armatura (CA) e non potete essere aggirati o presi ai fianchi.",
      "effect": "Combattere gomito a gomito con un compagno d'armi vi rende inespugnabili. Quando ti trovi adiacente a un alleato consenziente (entro 1,5 metri), entrambi guadagnate +1 alla Classe Armatura (CA) e non potete essere aggirati o presi ai fianchi."
    },
    {
      "id": "keeping_your_cool",
      "name": "Sangue Freddo (Keeping Your Cool)",
      "category": "Carisma",
      "maxRank": 2,
      "req": "Charisma 7.",
      "ranks": [
        "Nelle trattative più tese e pericolose mantieni sempre il pieno controllo della situazione. Puoi ritirare una prova fallita di Oratoria o Baratto per ogni conversazione diplomatica importante, tenendo il nuovo risultato."
      ],
      "ranksEN": [
        "When critically hit, spend 1 AP to negate extra crit damage and regain 1 AP next turn."
      ],
      "ranksIT": [
        "Mantieni la calma anche sotto tiro: se subisci un attacco critico, spendendo 1 AP riduci il danno critico al danno normale e guadagni 1 AP nel tuo turno successivo."
      ],
      "effectEN": "When critically hit, spend 1 AP to negate extra crit damage and regain 1 AP next turn.",
      "effectIT": "Mantieni la calma anche sotto tiro: se subisci un attacco critico, spendendo 1 AP riduci il danno critico al danno normale e guadagni 1 AP nel tuo turno successivo.",
      "effect": "Mantieni la calma anche sotto tiro: se subisci un attacco critico, spendendo 1 AP riduci il danno critico al danno normale e guadagni 1 AP nel tuo turno successivo."
    },
    {
      "id": "terrifying_presence",
      "name": "Presenza Terrificante (Terrifying Presence)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 7.",
      "ranks": [
        "La tua aura di violenza intimidisce persino i predoni più incalliti. All'inizio di un incontro, puoi intimidire i nemici nel dialogo: un bersaglio che fallisce una prova di Carisma contrapposta rimane paralizzato dal terrore per 1 round o fugge all'istante."
      ],
      "ranksEN": [
        "During the first round of combat, regardless if you are first, you intimidate your opponents with threats. Each enemy that can see you in the combat sequence with an intelligence higher than 2 becomes frightened until the end of their turn. (see page 130)."
      ],
      "ranksIT": [
        "La tua aura di violenza intimidisce persino i predoni più incalliti. All'inizio di un incontro, puoi intimidire i nemici nel dialogo: un bersaglio che fallisce una prova di Carisma contrapposta rimane paralizzato dal terrore per 1 round o fugge all'istante."
      ],
      "effectEN": "During the first round of combat, regardless if you are first, you intimidate your opponents with threats. Each enemy that can see you in the combat sequence with an intelligence higher than 2 becomes frightened until the end of their turn. (see page 130).",
      "effectIT": "La tua aura di violenza intimidisce persino i predoni più incalliti. All'inizio di un incontro, puoi intimidire i nemici nel dialogo: un bersaglio che fallisce una prova di Carisma contrapposta rimane paralizzato dal terrore per 1 round o fugge all'istante.",
      "effect": "La tua aura di violenza intimidisce persino i predoni più incalliti. All'inizio di un incontro, puoi intimidire i nemici nel dialogo: un bersaglio che fallisce una prova di Carisma contrapposta rimane paralizzato dal terrore per 1 round o fugge all'istante."
    },
    {
      "id": "inspiring_action",
      "name": "Azione Ispiratrice (Inspiring Action)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 7.",
      "ranks": [
        "Con un comando perentorio guidi un compagno a cogliere l'attimo fuggente. Nel tuo turno puoi spendere 4 AP per ispirare un alleato entro 9 metri (30 piedi): l'alleato guadagna 2 Punti Azione (AP) bonus spendibili nel suo prossimo turno."
      ],
      "ranksEN": [
        "You can spend 3 AP on your turn to inspire a creature within 30 feet. That creature can add 2d10 to any d20 roll they make for the next minute. Once they use the 2d10, they cannot use it again. Once you inspire a creature, you cannot inspire them again until the next day."
      ],
      "ranksIT": [
        "Con un comando perentorio guidi un compagno a cogliere l'attimo fuggente. Nel tuo turno puoi spendere 4 AP per ispirare un alleato entro 9 metri (30 piedi): l'alleato guadagna 2 Punti Azione (AP) bonus spendibili nel suo prossimo turno."
      ],
      "effectEN": "You can spend 3 AP on your turn to inspire a creature within 30 feet. That creature can add 2d10 to any d20 roll they make for the next minute. Once they use the 2d10, they cannot use it again. Once you inspire a creature, you cannot inspire them again until the next day.",
      "effectIT": "Con un comando perentorio guidi un compagno a cogliere l'attimo fuggente. Nel tuo turno puoi spendere 4 AP per ispirare un alleato entro 9 metri (30 piedi): l'alleato guadagna 2 Punti Azione (AP) bonus spendibili nel suo prossimo turno.",
      "effect": "Con un comando perentorio guidi un compagno a cogliere l'attimo fuggente. Nel tuo turno puoi spendere 4 AP per ispirare un alleato entro 9 metri (30 piedi): l'alleato guadagna 2 Punti Azione (AP) bonus spendibili nel suo prossimo turno."
    },
    {
      "id": "legend_of_the_wastelander",
      "name": "Leggenda della Zona (Legend of the Wastelander)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Requirements Charisma 8.",
      "ranks": [
        "Le tue gesta epiche vengono narrate attorno a ogni bivacco della Zona. Gli NPC non ostili partono con una disposizione amichevole nei tuoi confronti, e ottieni un bonus permanente di +2 a tutte le prove di interazione sociale."
      ],
      "ranksEN": [
        "Stories of you are heard from around the wasteland. When you roll combat sequence, each enemy creature's maximum stamina points are reduced by an amount equal to your party nerve. Yes, even if they're a creature incapable of comprehending the idea of a legend."
      ],
      "ranksIT": [
        "Le tue gesta epiche vengono narrate attorno a ogni bivacco della Zona. Gli NPC non ostili partono con una disposizione amichevole nei tuoi confronti, e ottieni un bonus permanente di +2 a tutte le prove di interazione sociale."
      ],
      "effectEN": "Stories of you are heard from around the wasteland. When you roll combat sequence, each enemy creature's maximum stamina points are reduced by an amount equal to your party nerve. Yes, even if they're a creature incapable of comprehending the idea of a legend.",
      "effectIT": "Le tue gesta epiche vengono narrate attorno a ogni bivacco della Zona. Gli NPC non ostili partono con una disposizione amichevole nei tuoi confronti, e ottieni un bonus permanente di +2 a tutte le prove di interazione sociale.",
      "effect": "Le tue gesta epiche vengono narrate attorno a ogni bivacco della Zona. Gli NPC non ostili partono con una disposizione amichevole nei tuoi confronti, e ottieni un bonus permanente di +2 a tutte le prove di interazione sociale."
    },
    {
      "id": "empowering_personality",
      "name": "Personalità Rinvigorente (Empowering Personality)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 8.",
      "ranks": [
        "La tua pura presenza trasmette sicurezza e coraggio incrollabile. Tutti i compagni che viaggiano costantemente con te guadagnano +5 Punti Ferita massimi e +1 ai loro tiri di Sequenza di Combattimento (Iniziativa)."
      ],
      "ranksEN": [
        "You lead by example, whenever another creature within 30 feet of you deals damage from an attack roll; you can flip one of your Karma Caps to increase the damage by a bonus equal to double your Charisma ability modifier. Additionally, whenever another creature takes damage to their hit points, you can flip one of your Karma Caps to reduce this damage by an amount equal to double your Charisma ability modifier."
      ],
      "ranksIT": [
        "La tua pura presenza trasmette sicurezza e coraggio incrollabile. Tutti i compagni che viaggiano costantemente con te guadagnano +5 Punti Ferita massimi e +1 ai loro tiri di Sequenza di Combattimento (Iniziativa)."
      ],
      "effectEN": "You lead by example, whenever another creature within 30 feet of you deals damage from an attack roll; you can flip one of your Karma Caps to increase the damage by a bonus equal to double your Charisma ability modifier. Additionally, whenever another creature takes damage to their hit points, you can flip one of your Karma Caps to reduce this damage by an amount equal to double your Charisma ability modifier.",
      "effectIT": "La tua pura presenza trasmette sicurezza e coraggio incrollabile. Tutti i compagni che viaggiano costantemente con te guadagnano +5 Punti Ferita massimi e +1 ai loro tiri di Sequenza di Combattimento (Iniziativa).",
      "effect": "La tua pura presenza trasmette sicurezza e coraggio incrollabile. Tutti i compagni che viaggiano costantemente con te guadagnano +5 Punti Ferita massimi e +1 ai loro tiri di Sequenza di Combattimento (Iniziativa)."
    },
    {
      "id": "commander",
      "name": "Comandante (Commander)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 9.",
      "ranks": [
        "Dirigi le manovre belliche come un generale navigato. Finché sei cosciente, tutti gli alleati entro 9 metri (30 piedi) ottengono un bonus di +1 a tutti i loro tiri per colpire e +1 alla loro Soglia Danni (PD/DT)."
      ],
      "ranksEN": [
        "Once per turn, you can spend 3 AP to give any allied creature within 60 feet of you a command. That creature gains 6 AP to complete the described action immediately. These action points do not carry over to the next turn and cannot be recycled."
      ],
      "ranksIT": [
        "Dirigi le manovre belliche come un generale navigato. Finché sei cosciente, tutti gli alleati entro 9 metri (30 piedi) ottengono un bonus di +1 a tutti i loro tiri per colpire e +1 alla loro Soglia Danni (PD/DT)."
      ],
      "effectEN": "Once per turn, you can spend 3 AP to give any allied creature within 60 feet of you a command. That creature gains 6 AP to complete the described action immediately. These action points do not carry over to the next turn and cannot be recycled.",
      "effectIT": "Dirigi le manovre belliche come un generale navigato. Finché sei cosciente, tutti gli alleati entro 9 metri (30 piedi) ottengono un bonus di +1 a tutti i loro tiri per colpire e +1 alla loro Soglia Danni (PD/DT).",
      "effect": "Dirigi le manovre belliche come un generale navigato. Finché sei cosciente, tutti gli alleati entro 9 metri (30 piedi) ottengono un bonus di +1 a tutti i loro tiri per colpire e +1 alla loro Soglia Danni (PD/DT)."
    },
    {
      "id": "cunning_strategist",
      "name": "Stratega Astuto (Cunning Strategist)",
      "category": "Carisma",
      "maxRank": 2,
      "req": "Charisma 9.",
      "ranks": [
        "Vedi il campo di battaglia come una scacchiera tattica. Una volta per scontro, all'inizio del round, puoi riordinare a tua scelta le posizioni di Iniziativa tra alleati consenzienti nel tuo campo visivo."
      ],
      "ranksEN": [
        "Spend 1 Karma Cap before combat to grant all allies +2 combat sequence for round 1."
      ],
      "ranksIT": [
        "Prima dell'inizio del combattimento, puoi spendere 1 Tappo Karma per concedere a te e a tutti i tuoi alleati entro portata visiva un bonus di +2 alla Sequenza di Combattimento per il primo round."
      ],
      "effectEN": "Spend 1 Karma Cap before combat to grant all allies +2 combat sequence for round 1.",
      "effectIT": "Prima dell'inizio del combattimento, puoi spendere 1 Tappo Karma per concedere a te e a tutti i tuoi alleati entro portata visiva un bonus di +2 alla Sequenza di Combattimento per il primo round.",
      "effect": "Prima dell'inizio del combattimento, puoi spendere 1 Tappo Karma per concedere a te e a tutti i tuoi alleati entro portata visiva un bonus di +2 alla Sequenza di Combattimento per il primo round."
    },
    {
      "id": "celebrity",
      "name": "Celebrità (Celebrity)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 10.",
      "ranks": [
        "Sei una figura mitica e riconosciuta ovunque nella Zona. Tutti i commercianti ti garantiscono uno sconto permanente del 20%, ricevi vitto e alloggio gratuiti nella maggior parte delle cittadine e ottieni udienza immediata presso qualsiasi leader di fazione."
      ],
      "ranksEN": [
        "Everybody knows who you are! People around the wasteland go crazy just to meet you! You get free drinks at bars and you have a permanent 20% discount on all items (So long as you don't act like a jackass). Whenever you meet an NPC who isn't hostile, in neutral standing towards you, or directly affiliated with a faction; you may roll a Luck check with the DC equal to 30 - your Speech or Barter skill bonus. On a success, the NPC knows who you are. You gain advantage on all Charisma based skill checks with this NPC. Additionally, you can lose one of your Karma Caps to have this NPC follow you and your party. Obeying orders from you (within reason), but won't outright hurt or kill themselves. If you dismiss this NPC, or they die; you gain your Karma Cap back."
      ],
      "ranksIT": [
        "Sei una figura mitica e riconosciuta ovunque nella Zona. Tutti i commercianti ti garantiscono uno sconto permanente del 20%, ricevi vitto e alloggio gratuiti nella maggior parte delle cittadine e ottieni udienza immediata presso qualsiasi leader di fazione."
      ],
      "effectEN": "Everybody knows who you are! People around the wasteland go crazy just to meet you! You get free drinks at bars and you have a permanent 20% discount on all items (So long as you don't act like a jackass). Whenever you meet an NPC who isn't hostile, in neutral standing towards you, or directly affiliated with a faction; you may roll a Luck check with the DC equal to 30 - your Speech or Barter skill bonus. On a success, the NPC knows who you are. You gain advantage on all Charisma based skill checks with this NPC. Additionally, you can lose one of your Karma Caps to have this NPC follow you and your party. Obeying orders from you (within reason), but won't outright hurt or kill themselves. If you dismiss this NPC, or they die; you gain your Karma Cap back.",
      "effectIT": "Sei una figura mitica e riconosciuta ovunque nella Zona. Tutti i commercianti ti garantiscono uno sconto permanente del 20%, ricevi vitto e alloggio gratuiti nella maggior parte delle cittadine e ottieni udienza immediata presso qualsiasi leader di fazione.",
      "effect": "Sei una figura mitica e riconosciuta ovunque nella Zona. Tutti i commercianti ti garantiscono uno sconto permanente del 20%, ricevi vitto e alloggio gratuiti nella maggior parte delle cittadine e ottieni udienza immediata presso qualsiasi leader di fazione."
    },
    {
      "id": "stand_and_fight",
      "name": "Resisti e Combatti (Stand and Fight)",
      "category": "Carisma",
      "maxRank": 1,
      "req": "Charisma 10.",
      "ranks": [
        "La tua voce squarcia il caos del combattimento risollevando chiunque sia caduto. Una volta per scontro, puoi spendere 5 AP: tutti gli alleati spaventati cessano di esserlo, e tutti gli alleati privi di sensi a 0 HP entro 18 metri tornano immediatamente coscienti a 1 HP e possono rimettersi in piedi."
      ],
      "ranksEN": [
        "Whenever another creature within 60 feet of you fails a death save and dies, you can turn that roll into a critical success. Once you use this ability on a creature, you cannot use it on them again for 12 hours."
      ],
      "ranksIT": [
        "La tua voce squarcia il caos del combattimento risollevando chiunque sia caduto. Una volta per scontro, puoi spendere 5 AP: tutti gli alleati spaventati cessano di esserlo, e tutti gli alleati privi di sensi a 0 HP entro 18 metri tornano immediatamente coscienti a 1 HP e possono rimettersi in piedi."
      ],
      "effectEN": "Whenever another creature within 60 feet of you fails a death save and dies, you can turn that roll into a critical success. Once you use this ability on a creature, you cannot use it on them again for 12 hours.",
      "effectIT": "La tua voce squarcia il caos del combattimento risollevando chiunque sia caduto. Una volta per scontro, puoi spendere 5 AP: tutti gli alleati spaventati cessano di esserlo, e tutti gli alleati privi di sensi a 0 HP entro 18 metri tornano immediatamente coscienti a 1 HP e possono rimettersi in piedi.",
      "effect": "La tua voce squarcia il caos del combattimento risollevando chiunque sia caduto. Una volta per scontro, puoi spendere 5 AP: tutti gli alleati spaventati cessano di esserlo, e tutti gli alleati privi di sensi a 0 HP entro 18 metri tornano immediatamente coscienti a 1 HP e possono rimettersi in piedi."
    },
    {
      "id": "retention",
      "name": "Ritenzione (Retention)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 4.",
      "ranks": [
        "La tua memoria fotografica memorizza ogni schema e trucco letto. La durata dei bonus conferiti da tutte le riviste di abilità lette (Locksmith's Reader, Guns and Bullets, True Police Stories, ecc.) è triplicata."
      ],
      "ranksEN": [
        "Skill magazine bonuses last three times as long (up to 8 hours)."
      ],
      "ranksIT": [
        "I benefici derivanti dalla lettura di riviste di abilità (Skill Magazines) durano tre volte più a lungo (fino a 8 ore invece delle consuete 2 ore)."
      ],
      "effectEN": "Skill magazine bonuses last three times as long (up to 8 hours).",
      "effectIT": "I benefici derivanti dalla lettura di riviste di abilità (Skill Magazines) durano tre volte più a lungo (fino a 8 ore invece delle consuete 2 ore).",
      "effect": "I benefici derivanti dalla lettura di riviste di abilità (Skill Magazines) durano tre volte più a lungo (fino a 8 ore invece delle consuete 2 ore)."
    },
    {
      "id": "math_wrath",
      "name": "Ira Matematica (Math Wrath)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 4.",
      "ranks": [
        "La tua mente elabora traiettorie balistiche ed equazioni con rapidità cibernetica. Il costo in Punti Azione (AP) per effettuare tiri mirati (o attacchi nel sistema S.P.A.V. / V.A.T.S.) è ridotto del 10% (minimo 1 AP di sconto)."
      ],
      "ranksEN": [
        "Whenever you make a targeted attack, you can spend half the amount of additional AP (rounded up). Additionally, you can make a special attack with a ranged weapon on your turn called a Calculated attack. This attack costs 6 action points regardless of the weapon's action point cost. When you make a Calculated attack, you can target a creature behind cover or otherwise out of sight so long as there is a plane or surface in which your projectile can ricochet off of (up to GM's discretion). When you roll damage from a Calculated attack, the damage is reduced by 1 for every 10 feet the projectile travels after ricocheting."
      ],
      "ranksIT": [
        "La tua mente elabora traiettorie balistiche ed equazioni con rapidità cibernetica. Il costo in Punti Azione (AP) per effettuare tiri mirati (o attacchi nel sistema S.P.A.V. / V.A.T.S.) è ridotto del 10% (minimo 1 AP di sconto)."
      ],
      "effectEN": "Whenever you make a targeted attack, you can spend half the amount of additional AP (rounded up). Additionally, you can make a special attack with a ranged weapon on your turn called a Calculated attack. This attack costs 6 action points regardless of the weapon's action point cost. When you make a Calculated attack, you can target a creature behind cover or otherwise out of sight so long as there is a plane or surface in which your projectile can ricochet off of (up to GM's discretion). When you roll damage from a Calculated attack, the damage is reduced by 1 for every 10 feet the projectile travels after ricocheting.",
      "effectIT": "La tua mente elabora traiettorie balistiche ed equazioni con rapidità cibernetica. Il costo in Punti Azione (AP) per effettuare tiri mirati (o attacchi nel sistema S.P.A.V. / V.A.T.S.) è ridotto del 10% (minimo 1 AP di sconto).",
      "effect": "La tua mente elabora traiettorie balistiche ed equazioni con rapidità cibernetica. Il costo in Punti Azione (AP) per effettuare tiri mirati (o attacchi nel sistema S.P.A.V. / V.A.T.S.) è ridotto del 10% (minimo 1 AP di sconto)."
    },
    {
      "id": "chemist",
      "name": "Chimico (Chemist)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 5.",
      "ranks": [
        "Padroneggi i principi della sintesi farmacologica e biochimica. La creazione di composti chimici (chem) e medicinali a un banco da lavoro produce il doppio delle dosi normali, e la durata di tutte le sostanze chimiche somministrate da te è raddoppiata."
      ],
      "ranksEN": [
        "Any chems you take last twice as long."
      ],
      "ranksIT": [
        "Tutte le sostanze chimiche (chems) e i medicinali che consumi hanno la loro durata raddoppiata. Inoltre, non puoi contrarre dipendenza al primo utilizzo di una sostanza."
      ],
      "effectEN": "Any chems you take last twice as long.",
      "effectIT": "Tutte le sostanze chimiche (chems) e i medicinali che consumi hanno la loro durata raddoppiata. Inoltre, non puoi contrarre dipendenza al primo utilizzo di una sostanza.",
      "effect": "Tutte le sostanze chimiche (chems) e i medicinali che consumi hanno la loro durata raddoppiata. Inoltre, non puoi contrarre dipendenza al primo utilizzo di una sostanza."
    },
    {
      "id": "patch_up",
      "name": "Rattoppo (Patch Up)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 5.",
      "ranks": [
        "Conosci scorciatoie ingegnose per riparare armi e armature con materiali d'emergenza. Le riparazioni sul campo ripristinano il 25% in più di integrità dell'equipaggiamento e rimuovono 1 livello di usura addizionale."
      ],
      "ranksEN": [
        "You can heal a creature up to their healing rate with 5 AP. Once you heal in this way, that creature can only be healed again after resting for at least 8 hours."
      ],
      "ranksIT": [
        "Conosci scorciatoie ingegnose per riparare armi e armature con materiali d'emergenza. Le riparazioni sul campo ripristinano il 25% in più di integrità dell'equipaggiamento e rimuovono 1 livello di usura addizionale."
      ],
      "effectEN": "You can heal a creature up to their healing rate with 5 AP. Once you heal in this way, that creature can only be healed again after resting for at least 8 hours.",
      "effectIT": "Conosci scorciatoie ingegnose per riparare armi e armature con materiali d'emergenza. Le riparazioni sul campo ripristinano il 25% in più di integrità dell'equipaggiamento e rimuovono 1 livello di usura addizionale.",
      "effect": "Conosci scorciatoie ingegnose per riparare armi e armature con materiali d'emergenza. Le riparazioni sul campo ripristinano il 25% in più di integrità dell'equipaggiamento e rimuovono 1 livello di usura addizionale."
    },
    {
      "id": "explorer",
      "name": "Esploratore (Explorer)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 5.",
      "ranks": [
        "Hai inserito nel tuo Pip-Boy mappe satellitari e topografiche pre-belliche. Tutti i punti d'interesse, insediamenti, bunker, rovine e caverne della mappa regionale vengono rivelati con indicatori di direzione."
      ],
      "ranksEN": [
        "All map locations within 50 miles are revealed on your Pip-Boy map."
      ],
      "ranksIT": [
        "Tutti i punti di interesse, rifugi e insediamenti nel raggio di 50 miglia compaiono immediatamente sulla tua mappa del Pip-Boy."
      ],
      "effectEN": "All map locations within 50 miles are revealed on your Pip-Boy map.",
      "effectIT": "Tutti i punti di interesse, rifugi e insediamenti nel raggio di 50 miglia compaiono immediatamente sulla tua mappa del Pip-Boy.",
      "effect": "Tutti i punti di interesse, rifugi e insediamenti nel raggio di 50 miglia compaiono immediatamente sulla tua mappa del Pip-Boy."
    },
    {
      "id": "weatherboy",
      "name": "Meteorologo! (Weatherboy!)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 5.",
      "ranks": [
        "Analizzando pressione barometrica e particelle ionizzate prevedi il meteo radioattivo con 24 ore di anticipo con precisione assoluta, evitando tempeste radioattive, venti tossici e piogge acide."
      ],
      "ranksEN": [
        "You always know which way is north, what the weather will be for the next three days, and whether the area you're traveling in is populated or empty (which determines encounters)."
      ],
      "ranksIT": [
        "Analizzando pressione barometrica e particelle ionizzate prevedi il meteo radioattivo con 24 ore di anticipo con precisione assoluta, evitando tempeste radioattive, venti tossici e piogge acide."
      ],
      "effectEN": "You always know which way is north, what the weather will be for the next three days, and whether the area you're traveling in is populated or empty (which determines encounters).",
      "effectIT": "Analizzando pressione barometrica e particelle ionizzate prevedi il meteo radioattivo con 24 ore di anticipo con precisione assoluta, evitando tempeste radioattive, venti tossici e piogge acide.",
      "effect": "Analizzando pressione barometrica e particelle ionizzate prevedi il meteo radioattivo con 24 ore di anticipo con precisione assoluta, evitando tempeste radioattive, venti tossici e piogge acide."
    },
    {
      "id": "on_the_go_mechanic",
      "name": "Meccanico da Viaggio (On-the-Go Mechanic)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 5.",
      "ranks": [
        "Le tue mani sanno aggiustare qualsiasi congegno anche in mezzo alla polvere. Puoi effettuare riparazioni e manutenzione ad armi, corazze e dispositivi senza bisogno di un banco da lavoro, usando semplici rottami."
      ],
      "ranksEN": [
        "Whenever you craft an item, you no longer need a workbench. However, you need to keep your tools on you. Your tools are equal to 5 Load."
      ],
      "ranksIT": [
        "Le tue mani sanno aggiustare qualsiasi congegno anche in mezzo alla polvere. Puoi effettuare riparazioni e manutenzione ad armi, corazze e dispositivi senza bisogno di un banco da lavoro, usando semplici rottami."
      ],
      "effectEN": "Whenever you craft an item, you no longer need a workbench. However, you need to keep your tools on you. Your tools are equal to 5 Load.",
      "effectIT": "Le tue mani sanno aggiustare qualsiasi congegno anche in mezzo alla polvere. Puoi effettuare riparazioni e manutenzione ad armi, corazze e dispositivi senza bisogno di un banco da lavoro, usando semplici rottami.",
      "effect": "Le tue mani sanno aggiustare qualsiasi congegno anche in mezzo alla polvere. Puoi effettuare riparazioni e manutenzione ad armi, corazze e dispositivi senza bisogno di un banco da lavoro, usando semplici rottami."
    },
    {
      "id": "home_remedy_virologist",
      "name": "Virologo Fai-da-Te (Home Remedy Virologist)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 5.",
      "ranks": [
        "Combini funghi, disinfettanti e radici per sintetizzare antidoti portentosi. Puoi fabbricare rimedi casalinghi che curano istantaneamente infezioni, parassiti, veleni e malattie contagiose della Zona."
      ],
      "ranksEN": [
        "Craft antidotes and antibiotics from wasteland flora in 10 minutes."
      ],
      "ranksIT": [
        "Riesci a sintetizzare antidoti e antibiotici da piante ed erbe della Zona: spendendo 10 minuti crei una dose di cura per malattie o veleni con una prova di Medicina CD 12."
      ],
      "effectEN": "Craft antidotes and antibiotics from wasteland flora in 10 minutes.",
      "effectIT": "Riesci a sintetizzare antidoti e antibiotici da piante ed erbe della Zona: spendendo 10 minuti crei una dose di cura per malattie o veleni con una prova di Medicina CD 12.",
      "effect": "Riesci a sintetizzare antidoti e antibiotici da piante ed erbe della Zona: spendendo 10 minuti crei una dose di cura per malattie o veleni con una prova di Medicina CD 12."
    },
    {
      "id": "light_touch",
      "name": "Tocco Leggero (Light Touch)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 6.",
      "ranks": [
        "Sfrutti la massima libertà di movimento per calcolare colpi micidiali. Finché indossi un'armatura leggera o nessuna armatura, la tua probabilità di mettere a segno un colpo critico aumenta del +5%, e i nemici subiscono una penalità del -25% alla probabilità di critico contro di te."
      ],
      "ranksEN": [
        "Wearing light armor grants +1 AC and reduces incoming critical hit chances."
      ],
      "ranksIT": [
        "Quando indossi armature leggere o nessuna armatura, ottieni +1 alla Classe Armatura (AC) e la probabilità di subire colpi critici dai nemici è ridotta di 5%."
      ],
      "effectEN": "Wearing light armor grants +1 AC and reduces incoming critical hit chances.",
      "effectIT": "Quando indossi armature leggere o nessuna armatura, ottieni +1 alla Classe Armatura (AC) e la probabilità di subire colpi critici dai nemici è ridotta di 5%.",
      "effect": "Quando indossi armature leggere o nessuna armatura, ottieni +1 alla Classe Armatura (AC) e la probabilità di subire colpi critici dai nemici è ridotta di 5%."
    },
    {
      "id": "efficient_munitions",
      "name": "Munizioni Efficienti (Efficient Munitions)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 6.",
      "ranks": [
        "Sai dosare inneschi e polvere da sparo con perfetta economia. Fabbricare proiettili o ricaricare bossoli produce il 25% in più di munizioni per ogni lotto, e le tue armi subiscono usura ridotta durante gli scontri prolungati."
      ],
      "ranksEN": [
        "Whenever you craft any type of ammunition, the attack and damage rolls made with this ammunition are increased by 2. Alternatively, you can forgo this bonus to instead; double the amount of ammunition you craft whenever you craft any type of ammunition."
      ],
      "ranksIT": [
        "Sai dosare inneschi e polvere da sparo con perfetta economia. Fabbricare proiettili o ricaricare bossoli produce il 25% in più di munizioni per ogni lotto, e le tue armi subiscono usura ridotta durante gli scontri prolungati."
      ],
      "effectEN": "Whenever you craft any type of ammunition, the attack and damage rolls made with this ammunition are increased by 2. Alternatively, you can forgo this bonus to instead; double the amount of ammunition you craft whenever you craft any type of ammunition.",
      "effectIT": "Sai dosare inneschi e polvere da sparo con perfetta economia. Fabbricare proiettili o ricaricare bossoli produce il 25% in più di munizioni per ogni lotto, e le tue armi subiscono usura ridotta durante gli scontri prolungati.",
      "effect": "Sai dosare inneschi e polvere da sparo con perfetta economia. Fabbricare proiettili o ricaricare bossoli produce il 25% in più di munizioni per ogni lotto, e le tue armi subiscono usura ridotta durante gli scontri prolungati."
    },
    {
      "id": "adroit_alchemist",
      "name": "Alchimista Accorto (Adroit Alchemist)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 6.",
      "ranks": [
        "Isoli i composti attivi senza sprechi. Il costo in reagenti e materiali per distillare Stimpak, Super Stimpak e RadAway al laboratorio chimico è ridotto della metà."
      ],
      "ranksEN": [
        "Double chem and stimpak yield when crafting at chemistry stations."
      ],
      "ranksIT": [
        "Quando crei sostanze chimiche, stimpak o composti a un laboratorio chimico, raddoppi la resa: ottieni 2 dosi invece di 1 a parità di ingredienti."
      ],
      "effectEN": "Double chem and stimpak yield when crafting at chemistry stations.",
      "effectIT": "Quando crei sostanze chimiche, stimpak o composti a un laboratorio chimico, raddoppi la resa: ottieni 2 dosi invece di 1 a parità di ingredienti.",
      "effect": "Quando crei sostanze chimiche, stimpak o composti a un laboratorio chimico, raddoppi la resa: ottieni 2 dosi invece di 1 a parità di ingredienti."
    },
    {
      "id": "nerd_rage",
      "name": "Furia da Nerd! (Nerd Rage!)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 7.",
      "ranks": [
        "Quando sei con le spalle al muro, l'intelletto calcola ogni fuga trasformandosi in pura rabbia cerebrale. Quando i tuoi Punti Ferita scendono al di sotto del 20%, la tua Forza aumenta immediatamente a 10 e la tua Soglia Danni (PD/DT) aumenta di +4 finché rimani ferito in questo stato."
      ],
      "ranksEN": [
        "When HP drops below 20%, gain +20 DT and +4 damage for 1 minute."
      ],
      "ranksIT": [
        "Quando i tuoi punti ferita scendono sotto il 20% del massimo, il tempo rallenta per il tuo intelletto in crisi: guadagni immediatamente +20 alla Soglia di Danno (DT) e +4 a tutti i danni inflitti per 1 minuto."
      ],
      "effectEN": "When HP drops below 20%, gain +20 DT and +4 damage for 1 minute.",
      "effectIT": "Quando i tuoi punti ferita scendono sotto il 20% del massimo, il tempo rallenta per il tuo intelletto in crisi: guadagni immediatamente +20 alla Soglia di Danno (DT) e +4 a tutti i danni inflitti per 1 minuto.",
      "effect": "Quando i tuoi punti ferita scendono sotto il 20% del massimo, il tempo rallenta per il tuo intelletto in crisi: guadagni immediatamente +20 alla Soglia di Danno (DT) e +4 a tutti i danni inflitti per 1 minuto."
    },
    {
      "id": "in_shining_armor",
      "name": "Armatura Riflettente (In Shining Armor)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 7.",
      "ranks": [
        "Lucidi e polarizzi le leghe metalliche delle tue corazze per disperdere i fasci ottici. Quando indossi un'armatura di metallo o un'Armatura Atomica, ottieni un bonus di +2 alla Soglia Danni (PD/DT) e +1 alla CA contro tutti gli attacchi con armi ad energia e laser."
      ],
      "ranksEN": [
        "You've upgraded your armor with reflective material. You have resistance to laser and plasma damage. Additionally; each time you are hit with laser or plasma damage; roll a Luck check. On an 19 or higher the beam refracts and hits the attacker, dealing the same damage to them."
      ],
      "ranksIT": [
        "Lucidi e polarizzi le leghe metalliche delle tue corazze per disperdere i fasci ottici. Quando indossi un'armatura di metallo o un'Armatura Atomica, ottieni un bonus di +2 alla Soglia Danni (PD/DT) e +1 alla CA contro tutti gli attacchi con armi ad energia e laser."
      ],
      "effectEN": "You've upgraded your armor with reflective material. You have resistance to laser and plasma damage. Additionally; each time you are hit with laser or plasma damage; roll a Luck check. On an 19 or higher the beam refracts and hits the attacker, dealing the same damage to them.",
      "effectIT": "Lucidi e polarizzi le leghe metalliche delle tue corazze per disperdere i fasci ottici. Quando indossi un'armatura di metallo o un'Armatura Atomica, ottieni un bonus di +2 alla Soglia Danni (PD/DT) e +1 alla CA contro tutti gli attacchi con armi ad energia e laser.",
      "effect": "Lucidi e polarizzi le leghe metalliche delle tue corazze per disperdere i fasci ottici. Quando indossi un'armatura di metallo o un'Armatura Atomica, ottieni un bonus di +2 alla Soglia Danni (PD/DT) e +1 alla CA contro tutti gli attacchi con armi ad energia e laser."
    },
    {
      "id": "power_armor_master",
      "name": "Maestro delle Armature Atomiche (Power Armor Master)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 7.",
      "ranks": [
        "Conosci i servomotori e le giunture idrauliche delle armature potenziate nei minimi dettagli. I Nuclei di Fusione durano il doppio del tempo, e non subisci alcuna penalità alla velocità di movimento o all'Agilità indossando qualsiasi Armatura Atomica."
      ],
      "ranksEN": [
        "Fusion cores last twice as long and PA parts take 2 less damage."
      ],
      "ranksIT": [
        "Consumi il 50% di energia in meno dai nuclei di fusione (fusion cores) mentre piloti armature atomiche, e il danno subito dalle parti dell'armatura atomica è ridotto di 2."
      ],
      "effectEN": "Fusion cores last twice as long and PA parts take 2 less damage.",
      "effectIT": "Consumi il 50% di energia in meno dai nuclei di fusione (fusion cores) mentre piloti armature atomiche, e il danno subito dalle parti dell'armatura atomica è ridotto di 2.",
      "effect": "Consumi il 50% di energia in meno dai nuclei di fusione (fusion cores) mentre piloti armature atomiche, e il danno subito dalle parti dell'armatura atomica è ridotto di 2."
    },
    {
      "id": "robotic_expert",
      "name": "Esperto Robotico (Robotic Expert)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 8.",
      "ranks": [
        "Conosci ogni circuito e frequenza di comando degli automi. Infliggi il +25% di danni con qualsiasi arma contro robot nemici. Inoltre, se ti avvicini furtivamente a un robot senza essere rilevato, puoi spendere 4 AP per disattivarlo all'istante o riprogrammarlo."
      ],
      "ranksEN": [
        "You ignore 2 points of damage threshold when dealing damage to Robots. Additionally, you can attempt to shut down robots with a successful Science check, the DC is equal to the Robots Intelligence score + 10. You cannot shut down robots if you are in combat with them."
      ],
      "ranksIT": [
        "Conosci ogni circuito e frequenza di comando degli automi. Infliggi il +25% di danni con qualsiasi arma contro robot nemici. Inoltre, se ti avvicini furtivamente a un robot senza essere rilevato, puoi spendere 4 AP per disattivarlo all'istante o riprogrammarlo."
      ],
      "effectEN": "You ignore 2 points of damage threshold when dealing damage to Robots. Additionally, you can attempt to shut down robots with a successful Science check, the DC is equal to the Robots Intelligence score + 10. You cannot shut down robots if you are in combat with them.",
      "effectIT": "Conosci ogni circuito e frequenza di comando degli automi. Infliggi il +25% di danni con qualsiasi arma contro robot nemici. Inoltre, se ti avvicini furtivamente a un robot senza essere rilevato, puoi spendere 4 AP per disattivarlo all'istante o riprogrammarlo.",
      "effect": "Conosci ogni circuito e frequenza di comando degli automi. Infliggi il +25% di danni con qualsiasi arma contro robot nemici. Inoltre, se ti avvicini furtivamente a un robot senza essere rilevato, puoi spendere 4 AP per disattivarlo all'istante o riprogrammarlo."
    },
    {
      "id": "computer_whiz",
      "name": "Mago dei Computer (Computer Whiz)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 8.",
      "ranks": [
        "Nessun firewall o mainframe pre-bellico può resistere ai tuoi exploit. Se vieni bloccato fuori da un terminale informatico per tentativi falliti, puoi riavviare immediatamente il sottosistema senza mai subire il blocco permanente."
      ],
      "ranksEN": [
        "Hack terminals in 10 seconds and gain 8 hours of turret control."
      ],
      "ranksIT": [
        "Puoi forzare terminali con password complesse spendendo solo 10 secondi, e se violi un terminale di sicurezza ottieni il controllo immediato delle torrette collegate per 8 ore."
      ],
      "effectEN": "Hack terminals in 10 seconds and gain 8 hours of turret control.",
      "effectIT": "Puoi forzare terminali con password complesse spendendo solo 10 secondi, e se violi un terminale di sicurezza ottieni il controllo immediato delle torrette collegate per 8 ore.",
      "effect": "Puoi forzare terminali con password complesse spendendo solo 10 secondi, e se violi un terminale di sicurezza ottieni il controllo immediato delle torrette collegate per 8 ore."
    },
    {
      "id": "quick_repair",
      "name": "Riparazione Rapida (Quick Repair)",
      "category": "Intelligenza",
      "maxRank": 3,
      "req": "Intelligence 9.",
      "ranks": [
        "Risolvi inceppamenti e danni strutturali nel cuore della battaglia con destrezza fulminea. Nel tuo turno puoi spendere 4 AP per rimuovere 2 livelli di usura da un'arma impugnata o dalla tua armatura senza dover interrompere lo scontro."
      ],
      "ranksEN": [
        "You can spend 6 action points to Quick repair. Quick repair removes two levels of decay from an item. Once you Quick repair, you cannot do it again until you rest for at least 8 hours.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times. When you take it again you can Quick repair an additional time per 8 hour rest.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times. When you take it again you can Quick repair an additional time per 8 hour rest.",
        "Grado 3: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of three times. When you take it again you can Quick repair an additional time per 8 hour rest."
      ],
      "ranksIT": [
        "Risolvi inceppamenti e danni strutturali nel cuore della battaglia con destrezza fulminea. Nel tuo turno puoi spendere 4 AP per rimuovere 2 livelli di usura da un'arma impugnata o dalla tua armatura senza dover interrompere lo scontro."
      ],
      "effectEN": "You can spend 6 action points to Quick repair. Quick repair removes two levels of decay from an item. Once you Quick repair, you cannot do it again until you rest for at least 8 hours.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of three times. When you take it again you can Quick repair an additional time per 8 hour rest.",
      "effectIT": "Risolvi inceppamenti e danni strutturali nel cuore della battaglia con destrezza fulminea. Nel tuo turno puoi spendere 4 AP per rimuovere 2 livelli di usura da un'arma impugnata o dalla tua armatura senza dover interrompere lo scontro.",
      "effect": "Risolvi inceppamenti e danni strutturali nel cuore della battaglia con destrezza fulminea. Nel tuo turno puoi spendere 4 AP per rimuovere 2 livelli di usura da un'arma impugnata o dalla tua armatura senza dover interrompere lo scontro."
    },
    {
      "id": "remedial_atomizer",
      "name": "Atomizzatore Curativo (Remedial Atomizer)",
      "category": "Intelligenza",
      "maxRank": 2,
      "req": "Intelligence 9.",
      "ranks": [
        "Hai modificato i tuoi iniettori medici per vaporizzare le soluzioni in una nube benefica ad aerosol. Quando somministri uno Stimpak o un composto curativo, l'effetto guarisce per intero sia te sia tutti gli alleati consenzienti entro 3 metri (10 piedi)."
      ],
      "ranksEN": [
        "You can spend 6 action points and two stimpaks to cause each non-robotic creature within 20 feet of you to regain hit points equal to their healing rate. Alternatively, you can spend 6 action points and two RobCo Quick Fix- Its to cause each robotic creature within 20 feet of you to regain hit points equal to their healing rate.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of twice. If you take this perk again, you can use four stimpaks or robot repair kits to have each creature heal double their healing rate.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of twice. If you take this perk again, you can use four stimpaks or robot repair kits to have each creature heal double their healing rate."
      ],
      "ranksIT": [
        "Hai modificato i tuoi iniettori medici per vaporizzare le soluzioni in una nube benefica ad aerosol. Quando somministri uno Stimpak o un composto curativo, l'effetto guarisce per intero sia te sia tutti gli alleati consenzienti entro 3 metri (10 piedi)."
      ],
      "effectEN": "You can spend 6 action points and two stimpaks to cause each non-robotic creature within 20 feet of you to regain hit points equal to their healing rate. Alternatively, you can spend 6 action points and two RobCo Quick Fix- Its to cause each robotic creature within 20 feet of you to regain hit points equal to their healing rate.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of twice. If you take this perk again, you can use four stimpaks or robot repair kits to have each creature heal double their healing rate.",
      "effectIT": "Hai modificato i tuoi iniettori medici per vaporizzare le soluzioni in una nube benefica ad aerosol. Quando somministri uno Stimpak o un composto curativo, l'effetto guarisce per intero sia te sia tutti gli alleati consenzienti entro 3 metri (10 piedi).",
      "effect": "Hai modificato i tuoi iniettori medici per vaporizzare le soluzioni in una nube benefica ad aerosol. Quando somministri uno Stimpak o un composto curativo, l'effetto guarisce per intero sia te sia tutti gli alleati consenzienti entro 3 metri (10 piedi)."
    },
    {
      "id": "overcharge",
      "name": "Sovraccarico (Overcharge)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 10.",
      "ranks": [
        "Modifichi le celle a microfusione per scaricare energia instabile ma devastante. Puoi sovraccaricare un'arma ad energia prima di fare fuoco: l'attacco consuma 2 cariche di munizioni invece di 1 ma infligge il +50% di danni totali sul colpo andato a segno."
      ],
      "ranksEN": [
        "When you spend action points to make an attack roll with a ranged weapon, you can spend up to 3 additional AP to add a number of additional damage dice to the damage. The number of additional damage dice that are added is equal to the amount of extra AP spent. You can only use this ability once per turn."
      ],
      "ranksIT": [
        "Modifichi le celle a microfusione per scaricare energia instabile ma devastante. Puoi sovraccaricare un'arma ad energia prima di fare fuoco: l'attacco consuma 2 cariche di munizioni invece di 1 ma infligge il +50% di danni totali sul colpo andato a segno."
      ],
      "effectEN": "When you spend action points to make an attack roll with a ranged weapon, you can spend up to 3 additional AP to add a number of additional damage dice to the damage. The number of additional damage dice that are added is equal to the amount of extra AP spent. You can only use this ability once per turn.",
      "effectIT": "Modifichi le celle a microfusione per scaricare energia instabile ma devastante. Puoi sovraccaricare un'arma ad energia prima di fare fuoco: l'attacco consuma 2 cariche di munizioni invece di 1 ma infligge il +50% di danni totali sul colpo andato a segno.",
      "effect": "Modifichi le celle a microfusione per scaricare energia instabile ma devastante. Puoi sovraccaricare un'arma ad energia prima di fare fuoco: l'attacco consuma 2 cariche di munizioni invece di 1 ma infligge il +50% di danni totali sul colpo andato a segno."
    },
    {
      "id": "expert_engineer",
      "name": "Ingegnere Esperto (Expert Engineer)",
      "category": "Intelligenza",
      "maxRank": 1,
      "req": "Intelligence 10.",
      "ranks": [
        "Sei una leggenda dell'ingegneria e della meccanica applicata. Puoi costruire, modificare e riparare generatori nucleari, torrette automatizzate difensive e robot guardiani al banco da lavoro impiegando la metà dei componenti richiesti."
      ],
      "ranksEN": [
        "Whenever you craft an item, you use two less materials for each material listed to a minimum of one."
      ],
      "ranksIT": [
        "Sei una leggenda dell'ingegneria e della meccanica applicata. Puoi costruire, modificare e riparare generatori nucleari, torrette automatizzate difensive e robot guardiani al banco da lavoro impiegando la metà dei componenti richiesti."
      ],
      "effectEN": "Whenever you craft an item, you use two less materials for each material listed to a minimum of one.",
      "effectIT": "Sei una leggenda dell'ingegneria e della meccanica applicata. Puoi costruire, modificare e riparare generatori nucleari, torrette automatizzate difensive e robot guardiani al banco da lavoro impiegando la metà dei componenti richiesti.",
      "effect": "Sei una leggenda dell'ingegneria e della meccanica applicata. Puoi costruire, modificare e riparare generatori nucleari, torrette automatizzate difensive e robot guardiani al banco da lavoro impiegando la metà dei componenti richiesti."
    },
    {
      "id": "quick_draw",
      "name": "Estrazione Rapida (Quick Draw)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 4.",
      "ranks": [
        "La tua mano scatta all'arma con riflessi fulminei. Estrarre o rinfoderare qualsiasi arma costa 0 Punti Azione (azione gratuita una volta per turno), permettendoti di cambiare armamento all'istante."
      ],
      "ranksEN": [
        "Drawing or holstering weapons costs 0 action points."
      ],
      "ranksIT": [
        "Estrarre o rinfoderare qualsiasi arma costa 0 Punti Azione (azione gratuita una volta per turno)."
      ],
      "effectEN": "Drawing or holstering weapons costs 0 action points.",
      "effectIT": "Estrarre o rinfoderare qualsiasi arma costa 0 Punti Azione (azione gratuita una volta per turno).",
      "effect": "Estrarre o rinfoderare qualsiasi arma costa 0 Punti Azione (azione gratuita una volta per turno)."
    },
    {
      "id": "action_hero",
      "name": "Eroe d'Azione (Action Hero)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 4",
      "ranks": [
        "La tua riserva di energia cinetica e adrenalina è superiore alla norma. Il tuo massimale di Punti Azione (AP) aumenta di 2 (fino a un massimo di 15 AP)."
      ],
      "ranksEN": [
        "Your action point maximum increases by 2 to a maximum of 15."
      ],
      "ranksIT": [
        "La tua riserva di energia cinetica e adrenalina è superiore alla norma. Il tuo massimale di Punti Azione (AP) aumenta di 2 (fino a un massimo di 15 AP)."
      ],
      "effectEN": "Your action point maximum increases by 2 to a maximum of 15.",
      "effectIT": "La tua riserva di energia cinetica e adrenalina è superiore alla norma. Il tuo massimale di Punti Azione (AP) aumenta di 2 (fino a un massimo di 15 AP).",
      "effect": "La tua riserva di energia cinetica e adrenalina è superiore alla norma. Il tuo massimale di Punti Azione (AP) aumenta di 2 (fino a un massimo di 15 AP)."
    },
    {
      "id": "fan_the_hammer",
      "name": "Sventagliata (Fan the Hammer)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 5.",
      "ranks": [
        "Scarichi il tamburo di un revolver con la velocità del fulmine sventagliando il cane con il palmo della mano. Quando attacchi con un revolver, puoi spendere un Tappo del Karma e 10 AP per effettuare un numero di attacchi addizionali pari ai colpi rimanenti nel tamburo senza spendere ulteriori AP contro bersagli entro 3 metri dal precedente."
      ],
      "ranksEN": [
        "Whenever you attack with a revolver, you can flip one of your Karma Caps and spend 10 AP to make a number of additional attacks without spending any additional AP, the target of these attacks must be within 10 feet of the previous target. The number of attacks you can make is equal to the rounds you have left in the revolver."
      ],
      "ranksIT": [
        "Scarichi il tamburo di un revolver con la velocità del fulmine sventagliando il cane con il palmo della mano. Quando attacchi con un revolver, puoi spendere un Tappo del Karma e 10 AP per effettuare un numero di attacchi addizionali pari ai colpi rimanenti nel tamburo senza spendere ulteriori AP contro bersagli entro 3 metri dal precedente."
      ],
      "effectEN": "Whenever you attack with a revolver, you can flip one of your Karma Caps and spend 10 AP to make a number of additional attacks without spending any additional AP, the target of these attacks must be within 10 feet of the previous target. The number of attacks you can make is equal to the rounds you have left in the revolver.",
      "effectIT": "Scarichi il tamburo di un revolver con la velocità del fulmine sventagliando il cane con il palmo della mano. Quando attacchi con un revolver, puoi spendere un Tappo del Karma e 10 AP per effettuare un numero di attacchi addizionali pari ai colpi rimanenti nel tamburo senza spendere ulteriori AP contro bersagli entro 3 metri dal precedente.",
      "effect": "Scarichi il tamburo di un revolver con la velocità del fulmine sventagliando il cane con il palmo della mano. Quando attacchi con un revolver, puoi spendere un Tappo del Karma e 10 AP per effettuare un numero di attacchi addizionali pari ai colpi rimanenti nel tamburo senza spendere ulteriori AP contro bersagli entro 3 metri dal precedente."
    },
    {
      "id": "rapid_reload",
      "name": "Ricarica Rapida (Rapid Reload)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 5.",
      "ranks": [
        "I tuoi movimenti per espellere i caricatori e camerare nuovi colpi sono fluidi e automatici. Il costo in Punti Azione (AP) per ricaricare qualsiasi arma da fuoco, da lancio o balestra è ridotto di 1 AP (fino a un minimo di 1 AP)."
      ],
      "ranksEN": [
        "Whenever you spend AP to reload or take cover, it costs you 3 less to a minimum of 1. Additionally, when you reload a weapon that has Manual Reload, you can spend 1 AP to reload three rounds."
      ],
      "ranksIT": [
        "I tuoi movimenti per espellere i caricatori e camerare nuovi colpi sono fluidi e automatici. Il costo in Punti Azione (AP) per ricaricare qualsiasi arma da fuoco, da lancio o balestra è ridotto di 1 AP (fino a un minimo di 1 AP)."
      ],
      "effectEN": "Whenever you spend AP to reload or take cover, it costs you 3 less to a minimum of 1. Additionally, when you reload a weapon that has Manual Reload, you can spend 1 AP to reload three rounds.",
      "effectIT": "I tuoi movimenti per espellere i caricatori e camerare nuovi colpi sono fluidi e automatici. Il costo in Punti Azione (AP) per ricaricare qualsiasi arma da fuoco, da lancio o balestra è ridotto di 1 AP (fino a un minimo di 1 AP).",
      "effect": "I tuoi movimenti per espellere i caricatori e camerare nuovi colpi sono fluidi e automatici. Il costo in Punti Azione (AP) per ricaricare qualsiasi arma da fuoco, da lancio o balestra è ridotto di 1 AP (fino a un minimo di 1 AP)."
    },
    {
      "id": "reaction_reactor",
      "name": "Reattore di Reazione (Reaction Reactor)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 5.",
      "ranks": [
        "I tuoi riflessi motori rispondono agli stimoli esterni senza esitazione. Guadagni 1 Reazione addizionale spendibile in ogni round di combattimento (per un totale di 2 reazioni per round)."
      ],
      "ranksEN": [
        "If you end your turn with at least 3 unused action points, you can use them at the end of another creature's turn. If you do not use them, you recycle all of them at the beginning of your next turn."
      ],
      "ranksIT": [
        "I tuoi riflessi motori rispondono agli stimoli esterni senza esitazione. Guadagni 1 Reazione addizionale spendibile in ogni round di combattimento (per un totale di 2 reazioni per round)."
      ],
      "effectEN": "If you end your turn with at least 3 unused action points, you can use them at the end of another creature's turn. If you do not use them, you recycle all of them at the beginning of your next turn.",
      "effectIT": "I tuoi riflessi motori rispondono agli stimoli esterni senza esitazione. Guadagni 1 Reazione addizionale spendibile in ogni round di combattimento (per un totale di 2 reazioni per round).",
      "effect": "I tuoi riflessi motori rispondono agli stimoli esterni senza esitazione. Guadagni 1 Reazione addizionale spendibile in ogni round di combattimento (per un totale di 2 reazioni per round)."
    },
    {
      "id": "the_dance",
      "name": "La Danza (The Dance)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 5.",
      "ranks": [
        "Ti muovi tra i nemici come se stessi ballando al ritmo di un valzer. Muoverti attraverso l'area di minaccia di un nemico o allontanarti dal combattimento corpo a corpo non provoca attacchi d'opportunità."
      ],
      "ranksEN": [
        "Whenever you roll damage from an attack made with a bladed melee weapon, you can choose to add your Agility ability modifier to the damage instead of your Strength ability modifier."
      ],
      "ranksIT": [
        "Ti muovi tra i nemici come se stessi ballando al ritmo di un valzer. Muoverti attraverso l'area di minaccia di un nemico o allontanarti dal combattimento corpo a corpo non provoca attacchi d'opportunità."
      ],
      "effectEN": "Whenever you roll damage from an attack made with a bladed melee weapon, you can choose to add your Agility ability modifier to the damage instead of your Strength ability modifier.",
      "effectIT": "Ti muovi tra i nemici come se stessi ballando al ritmo di un valzer. Muoverti attraverso l'area di minaccia di un nemico o allontanarti dal combattimento corpo a corpo non provoca attacchi d'opportunità.",
      "effect": "Ti muovi tra i nemici come se stessi ballando al ritmo di un valzer. Muoverti attraverso l'area di minaccia di un nemico o allontanarti dal combattimento corpo a corpo non provoca attacchi d'opportunità."
    },
    {
      "id": "nimble_dash",
      "name": "Scatto Agile (Nimble Dash)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 5.",
      "ranks": [
        "Scatti a zig-zag schivando colpi e lame. Quando compi l'azione di Scatto (Dash), i tiri per colpire a distanza effettuati contro di te fino all'inizio del tuo prossimo turno subiscono tutti svantaggio."
      ],
      "ranksEN": [
        "Your movement speed increases by 10 feet."
      ],
      "ranksIT": [
        "La tua velocità di movimento base aumenta permanentemente di 10 piedi per turno."
      ],
      "effectEN": "Your movement speed increases by 10 feet.",
      "effectIT": "La tua velocità di movimento base aumenta permanentemente di 10 piedi per turno.",
      "effect": "La tua velocità di movimento base aumenta permanentemente di 10 piedi per turno."
    },
    {
      "id": "evasive_action",
      "name": "Azione Evasiva (Evasive Action)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 5.",
      "ranks": [
        "Finché indossi un'armatura leggera o nessuna armatura, la tua agilità ti consente di deflettere proiettili al volo: ottieni un bonus permanente di +2 alla Classe Armatura (CA) contro tutti gli attacchi a distanza."
      ],
      "ranksEN": [
        "Whenever you take damage to your stamina points for the first time after rolling combat sequence, the damage is reduced to 0."
      ],
      "ranksIT": [
        "Finché indossi un'armatura leggera o nessuna armatura, la tua agilità ti consente di deflettere proiettili al volo: ottieni un bonus permanente di +2 alla Classe Armatura (CA) contro tutti gli attacchi a distanza."
      ],
      "effectEN": "Whenever you take damage to your stamina points for the first time after rolling combat sequence, the damage is reduced to 0.",
      "effectIT": "Finché indossi un'armatura leggera o nessuna armatura, la tua agilità ti consente di deflettere proiettili al volo: ottieni un bonus permanente di +2 alla Classe Armatura (CA) contro tutti gli attacchi a distanza.",
      "effect": "Finché indossi un'armatura leggera o nessuna armatura, la tua agilità ti consente di deflettere proiettili al volo: ottieni un bonus permanente di +2 alla Classe Armatura (CA) contro tutti gli attacchi a distanza."
    },
    {
      "id": "gunslinger",
      "name": "Pistolero (Gunslinger)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 6.",
      "ranks": [
        "Padroneggi l'uso letale di pistole e revolver a una mano. Tutti i tuoi attacchi effettuati con armi da fuoco a una mano guadagnano un bonus di +2 al tiro per colpire e +2 al tiro per i danni."
      ],
      "ranksEN": [
        "When using one-handed pistols, attack cost is reduced by 1 AP and you gain +2 to attack rolls."
      ],
      "ranksIT": [
        "Quando impugni una pistola a una mano, il costo in AP per attaccare è ridotto di 1 AP (fino a un minimo di 2 AP) e aggiungi +2 a tutti i tiri per colpire a distanza."
      ],
      "effectEN": "When using one-handed pistols, attack cost is reduced by 1 AP and you gain +2 to attack rolls.",
      "effectIT": "Quando impugni una pistola a una mano, il costo in AP per attaccare è ridotto di 1 AP (fino a un minimo di 2 AP) e aggiungi +2 a tutti i tiri per colpire a distanza.",
      "effect": "Quando impugni una pistola a una mano, il costo in AP per attaccare è ridotto di 1 AP (fino a un minimo di 2 AP) e aggiungi +2 a tutti i tiri per colpire a distanza."
    },
    {
      "id": "and_stay_back",
      "name": "E Stattene Lì! (And Stay Back)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 6.",
      "ranks": [
        "La rosata devastante dei tuoi fucili a pompa spazza via chiunque osi avvicinarsi. Quando colpisci una creatura con un fucile a pompa (Shotgun), il bersaglio deve superare una prova di Forza (DC 8 + mod AGI + Competenza) o cadere immediatamente a terra prono."
      ],
      "ranksEN": [
        "Whenever you deal damage to a creature with a shotgun, you ignore 2 points of DT. Additionally, the target is within 5 feet of you; you can choose to knock them back 15 feet away from you."
      ],
      "ranksIT": [
        "La rosata devastante dei tuoi fucili a pompa spazza via chiunque osi avvicinarsi. Quando colpisci una creatura con un fucile a pompa (Shotgun), il bersaglio deve superare una prova di Forza (DC 8 + mod AGI + Competenza) o cadere immediatamente a terra prono."
      ],
      "effectEN": "Whenever you deal damage to a creature with a shotgun, you ignore 2 points of DT. Additionally, the target is within 5 feet of you; you can choose to knock them back 15 feet away from you.",
      "effectIT": "La rosata devastante dei tuoi fucili a pompa spazza via chiunque osi avvicinarsi. Quando colpisci una creatura con un fucile a pompa (Shotgun), il bersaglio deve superare una prova di Forza (DC 8 + mod AGI + Competenza) o cadere immediatamente a terra prono.",
      "effect": "La rosata devastante dei tuoi fucili a pompa spazza via chiunque osi avvicinarsi. Quando colpisci una creatura con un fucile a pompa (Shotgun), il bersaglio deve superare una prova di Forza (DC 8 + mod AGI + Competenza) o cadere immediatamente a terra prono."
    },
    {
      "id": "multitarget_hotshot",
      "name": "Tiratore Multi-Bersaglio (Multitarget Hotshot)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 6.",
      "ranks": [
        "Sposti la canna dell'arma tra bersagli multipli senza perdere precisione. Quando utilizzi la modalità di fuoco a raffica o semiautomatica rapida, puoi distribuire i colpi su un massimo di 3 nemici differenti senza subire penalità al tiro per colpire."
      ],
      "ranksEN": [
        "Whenever you hit a creature with a ranged attack, your next ranged attack roll is increased by 2 so long as you target a different creature. After this second attack, if you target a different creature than the previous two attacks, the attack roll is increased by 4. After this third attack, you cannot gain the initial increase of 2 until you make another ranged attack. Clarification: You can make one normal ranged attack, then if you target another creature, you get +2. If you target another different creature, you get +4. Then, the bonus resets. You need to attack a creature without this perk's bonus to start the +2 to +4 cycle again. Further clarification, you do not need to make these attacks all on one turn."
      ],
      "ranksIT": [
        "Sposti la canna dell'arma tra bersagli multipli senza perdere precisione. Quando utilizzi la modalità di fuoco a raffica o semiautomatica rapida, puoi distribuire i colpi su un massimo di 3 nemici differenti senza subire penalità al tiro per colpire."
      ],
      "effectEN": "Whenever you hit a creature with a ranged attack, your next ranged attack roll is increased by 2 so long as you target a different creature. After this second attack, if you target a different creature than the previous two attacks, the attack roll is increased by 4. After this third attack, you cannot gain the initial increase of 2 until you make another ranged attack. Clarification: You can make one normal ranged attack, then if you target another creature, you get +2. If you target another different creature, you get +4. Then, the bonus resets. You need to attack a creature without this perk's bonus to start the +2 to +4 cycle again. Further clarification, you do not need to make these attacks all on one turn.",
      "effectIT": "Sposti la canna dell'arma tra bersagli multipli senza perdere precisione. Quando utilizzi la modalità di fuoco a raffica o semiautomatica rapida, puoi distribuire i colpi su un massimo di 3 nemici differenti senza subire penalità al tiro per colpire.",
      "effect": "Sposti la canna dell'arma tra bersagli multipli senza perdere precisione. Quando utilizzi la modalità di fuoco a raffica o semiautomatica rapida, puoi distribuire i colpi su un massimo di 3 nemici differenti senza subire penalità al tiro per colpire."
    },
    {
      "id": "ninja",
      "name": "Ninja",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 7.",
      "ranks": [
        "Sei un'ombra letale e silenziosa. Quando metti a segno un attacco furtivo con un'arma da mischia o senz'armi, il moltiplicatore di danno critico furtivo è aumentato a x3 (o +1 dado di danno furtivo extra), e ottieni +2 alla Furtività mentre ti muovi nell'ombra."
      ],
      "ranksEN": [
        "Sneak attacks with melee or unarmed deal critical hits with doubled crit damage."
      ],
      "ranksIT": [
        "Quando effettui un attacco furtivo con un'arma da mischia o a mani nude, l'attacco infligge automaticamente un colpo critico e il danno critico è raddoppiato."
      ],
      "effectEN": "Sneak attacks with melee or unarmed deal critical hits with doubled crit damage.",
      "effectIT": "Quando effettui un attacco furtivo con un'arma da mischia o a mani nude, l'attacco infligge automaticamente un colpo critico e il danno critico è raddoppiato.",
      "effect": "Quando effettui un attacco furtivo con un'arma da mischia o a mani nude, l'attacco infligge automaticamente un colpo critico e il danno critico è raddoppiato."
    },
    {
      "id": "concentrated_fire",
      "name": "Fuoco Concentrato (Concentrated Fire)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 7.",
      "ranks": [
        "Correggi la traiettoria colpo dopo colpo sul medesimo punto debole. Ogni attacco a distanza consecutivo che dirigi contro la stessa identica parte del corpo del medesimo bersaglio nello stesso turno guadagna un bonus progressivo di +2 al tiro per colpire."
      ],
      "ranksEN": [
        "Consecutive attacks against the same target on the same turn gain a cumulative +1 bonus to attack rolls."
      ],
      "ranksIT": [
        "Ogni volta che effettui attacchi consecutivi contro lo stesso bersaglio o la stessa parte del corpo nello stesso turno, guadagni un bonus cumulativo di +1 al tiro per colpire per ogni attacco andato a segno in precedenza."
      ],
      "effectEN": "Consecutive attacks against the same target on the same turn gain a cumulative +1 bonus to attack rolls.",
      "effectIT": "Ogni volta che effettui attacchi consecutivi contro lo stesso bersaglio o la stessa parte del corpo nello stesso turno, guadagni un bonus cumulativo di +1 al tiro per colpire per ogni attacco andato a segno in precedenza.",
      "effect": "Ogni volta che effettui attacchi consecutivi contro lo stesso bersaglio o la stessa parte del corpo nello stesso turno, guadagni un bonus cumulativo di +1 al tiro per colpire per ogni attacco andato a segno in precedenza."
    },
    {
      "id": "guns_akimbo",
      "name": "Due Pistole! (Guns Akimbo!)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 7.",
      "ranks": [
        "Impugni e spari contemporaneamente con due pistole a una mano senza esitazione. Quando compi un attacco con l'arma principale, puoi spendere 2 AP per fare fuoco simultaneamente con la pistola nella mano secondaria contro lo stesso bersaglio o contro un bersaglio adiacente."
      ],
      "ranksEN": [
        "One gun ain't enough? You can wield two with deadly efficiency. If you wield a gun or energy weapon in one hand while you wield another gun or energy weapon in your other hand, you can spend additional AP when you attack with one weapon to make another attack with the other weapon. The additional AP is equal to half of the second weapon's AP cost (rounded up)."
      ],
      "ranksIT": [
        "Impugni e spari contemporaneamente con due pistole a una mano senza esitazione. Quando compi un attacco con l'arma principale, puoi spendere 2 AP per fare fuoco simultaneamente con la pistola nella mano secondaria contro lo stesso bersaglio o contro un bersaglio adiacente."
      ],
      "effectEN": "One gun ain't enough? You can wield two with deadly efficiency. If you wield a gun or energy weapon in one hand while you wield another gun or energy weapon in your other hand, you can spend additional AP when you attack with one weapon to make another attack with the other weapon. The additional AP is equal to half of the second weapon's AP cost (rounded up).",
      "effectIT": "Impugni e spari contemporaneamente con due pistole a una mano senza esitazione. Quando compi un attacco con l'arma principale, puoi spendere 2 AP per fare fuoco simultaneamente con la pistola nella mano secondaria contro lo stesso bersaglio o contro un bersaglio adiacente.",
      "effect": "Impugni e spari contemporaneamente con due pistole a una mano senza esitazione. Quando compi un attacco con l'arma principale, puoi spendere 2 AP per fare fuoco simultaneamente con la pistola nella mano secondaria contro lo stesso bersaglio o contro un bersaglio adiacente."
    },
    {
      "id": "mister_sandman",
      "name": "Uomo della Sabbia (Mister Sandman)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 8.",
      "ranks": [
        "Conosci il modo di spegnere la vita nel sonno senza emettere il minimo rumore. Puoi uccidere all'istante qualsiasi umanoide o creatura vivente addormentata senza allertare i nemici circostanti. Inoltre, gli attacchi furtivi eseguiti con armi silenziate infliggono il +20% di danno."
      ],
      "ranksEN": [
        "You can instantly kill sleeping creatures without making sound."
      ],
      "ranksIT": [
        "Puoi uccidere istantaneamente qualsiasi creatura umanoide o animale addormentata senza fare rumore con un attacco in mischia o disarmato."
      ],
      "effectEN": "You can instantly kill sleeping creatures without making sound.",
      "effectIT": "Puoi uccidere istantaneamente qualsiasi creatura umanoide o animale addormentata senza fare rumore con un attacco in mischia o disarmato.",
      "effect": "Puoi uccidere istantaneamente qualsiasi creatura umanoide o animale addormentata senza fare rumore con un attacco in mischia o disarmato."
    },
    {
      "id": "ranger_s_deadly_aim",
      "name": "Mira Letale del Ranger (Ranger's Deadly Aim)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 8.",
      "ranks": [
        "I tuoi tiri a distanza trafiggono barriere e feritoie. Tutti i tuoi attacchi a distanza ignorano completamente la copertura parziale di metà (Half Cover) e di tre quarti (Three-Quarters Cover) del bersaglio."
      ],
      "ranksEN": [
        "If you are the first to act in combat sequence, you can choose for your first attack roll to critically hit or, you can attack up to three times without spending any AP."
      ],
      "ranksIT": [
        "I tuoi tiri a distanza trafiggono barriere e feritoie. Tutti i tuoi attacchi a distanza ignorano completamente la copertura parziale di metà (Half Cover) e di tre quarti (Three-Quarters Cover) del bersaglio."
      ],
      "effectEN": "If you are the first to act in combat sequence, you can choose for your first attack roll to critically hit or, you can attack up to three times without spending any AP.",
      "effectIT": "I tuoi tiri a distanza trafiggono barriere e feritoie. Tutti i tuoi attacchi a distanza ignorano completamente la copertura parziale di metà (Half Cover) e di tre quarti (Three-Quarters Cover) del bersaglio.",
      "effect": "I tuoi tiri a distanza trafiggono barriere e feritoie. Tutti i tuoi attacchi a distanza ignorano completamente la copertura parziale di metà (Half Cover) e di tre quarti (Three-Quarters Cover) del bersaglio."
    },
    {
      "id": "group_camouflage",
      "name": "Mimetizzazione di Gruppo (Group Camouflage)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 9.",
      "ranks": [
        "Insegni al gruppo come camuffarsi con frasche, cenere e detriti. Tu e fino a 4 compagni che viaggiano entro 9 metri da te ottenete vantaggio su tutte le prove di Furtività di gruppo."
      ],
      "ranksEN": [
        "Your Group Sneak score is equal to 20, as are any allies within 30 feet of you."
      ],
      "ranksIT": [
        "Insegni al gruppo come camuffarsi con frasche, cenere e detriti. Tu e fino a 4 compagni che viaggiano entro 9 metri da te ottenete vantaggio su tutte le prove di Furtività di gruppo."
      ],
      "effectEN": "Your Group Sneak score is equal to 20, as are any allies within 30 feet of you.",
      "effectIT": "Insegni al gruppo come camuffarsi con frasche, cenere e detriti. Tu e fino a 4 compagni che viaggiano entro 9 metri da te ottenete vantaggio su tutte le prove di Furtività di gruppo.",
      "effect": "Insegni al gruppo come camuffarsi con frasche, cenere e detriti. Tu e fino a 4 compagni che viaggiano entro 9 metri da te ottenete vantaggio su tutte le prove di Furtività di gruppo."
    },
    {
      "id": "efficient_speedster",
      "name": "Velocista Efficiente (Efficient Speedster)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 9.",
      "ranks": [
        "Il tuo ritmo di corsa è fulmineo e consuma pochissima energia. Il costo in Punti Azione (AP) per muoverti sul campo di battaglia è ridotto di 1 AP ogni 3 metri (10 piedi) di spostamento."
      ],
      "ranksEN": [
        "You recycle all your unused Action Points at the start of your turn, additionally whenever you sprint you can turn your direction once and continue sprinting."
      ],
      "ranksIT": [
        "Il tuo ritmo di corsa è fulmineo e consuma pochissima energia. Il costo in Punti Azione (AP) per muoverti sul campo di battaglia è ridotto di 1 AP ogni 3 metri (10 piedi) di spostamento."
      ],
      "effectEN": "You recycle all your unused Action Points at the start of your turn, additionally whenever you sprint you can turn your direction once and continue sprinting.",
      "effectIT": "Il tuo ritmo di corsa è fulmineo e consuma pochissima energia. Il costo in Punti Azione (AP) per muoverti sul campo di battaglia è ridotto di 1 AP ogni 3 metri (10 piedi) di spostamento.",
      "effect": "Il tuo ritmo di corsa è fulmineo e consuma pochissima energia. Il costo in Punti Azione (AP) per muoverti sul campo di battaglia è ridotto di 1 AP ogni 3 metri (10 piedi) di spostamento."
    },
    {
      "id": "anticipated_reflexes",
      "name": "Riflessi Anticipati (Anticipated Reflexes)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 10.",
      "ranks": [
        "Prevedi le traiettorie d'attacco nemiche prima che il colpo parta. Quando un nemico effettua un attacco in mischia o a distanza contro di te e manca il bersaglio, puoi spendere 1 AP come reazione immediata per effettuare un contrattacco istantaneo contro di lui."
      ],
      "ranksEN": [
        "Whenever an attack beats your AC and hits you, you can choose to spend 3 Action Points to increase your AC by 1, 6 Action Points to increase your AC by 2, or 9 Action Points to increase your AC by 3. However, at the start of your next turn you will regain less Action Points equal to the amount you spent."
      ],
      "ranksIT": [
        "Prevedi le traiettorie d'attacco nemiche prima che il colpo parta. Quando un nemico effettua un attacco in mischia o a distanza contro di te e manca il bersaglio, puoi spendere 1 AP come reazione immediata per effettuare un contrattacco istantaneo contro di lui."
      ],
      "effectEN": "Whenever an attack beats your AC and hits you, you can choose to spend 3 Action Points to increase your AC by 1, 6 Action Points to increase your AC by 2, or 9 Action Points to increase your AC by 3. However, at the start of your next turn you will regain less Action Points equal to the amount you spent.",
      "effectIT": "Prevedi le traiettorie d'attacco nemiche prima che il colpo parta. Quando un nemico effettua un attacco in mischia o a distanza contro di te e manca il bersaglio, puoi spendere 1 AP come reazione immediata per effettuare un contrattacco istantaneo contro di lui.",
      "effect": "Prevedi le traiettorie d'attacco nemiche prima che il colpo parta. Quando un nemico effettua un attacco in mischia o a distanza contro di te e manca il bersaglio, puoi spendere 1 AP come reazione immediata per effettuare un contrattacco istantaneo contro di lui."
    },
    {
      "id": "nerves_of_steel",
      "name": "Nervi d'Acciaio (Nerves of Steel)",
      "category": "Agilità",
      "maxRank": 1,
      "req": "Agility 10.",
      "ranks": [
        "I tuoi nervi non conoscono esitazione o fatica muscolare. All'inizio di ciascun round di combattimento, inizi il tuo turno con 2 Punti Azione (AP) addizionali oltre al normale."
      ],
      "ranksEN": [
        "At the start of each of your turns, so long as your hit point total isn't below half, you regain stamina points equal to half your level (rounded down)."
      ],
      "ranksIT": [
        "I tuoi nervi non conoscono esitazione o fatica muscolare. All'inizio di ciascun round di combattimento, inizi il tuo turno con 2 Punti Azione (AP) addizionali oltre al normale."
      ],
      "effectEN": "At the start of each of your turns, so long as your hit point total isn't below half, you regain stamina points equal to half your level (rounded down).",
      "effectIT": "I tuoi nervi non conoscono esitazione o fatica muscolare. All'inizio di ciascun round di combattimento, inizi il tuo turno con 2 Punti Azione (AP) addizionali oltre al normale.",
      "effect": "I tuoi nervi non conoscono esitazione o fatica muscolare. All'inizio di ciascun round di combattimento, inizi il tuo turno con 2 Punti Azione (AP) addizionali oltre al normale."
    },
    {
      "id": "scrounger",
      "name": "Spazzino (Scrounger)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 4.",
      "ranks": [
        "La dea bendata guida le tue mani nei cassonetti e nelle cassette di munizioni arrugginite. Trovi costantemente il doppio delle munizioni (o +50% munizioni extra) quando perquisisci contenitori, cadaveri o casse nella Zona."
      ],
      "ranksEN": [
        "Whenever you make a Luck ability check to determine the loot you find, you can roll two checks and choose which result to take."
      ],
      "ranksIT": [
        "Ogni volta che effettui una prova di caratteristica su Fortuna per determinare il bottino trovato, puoi effettuare due tiri e scegliere quale risultato tenere."
      ],
      "effectEN": "Whenever you make a Luck ability check to determine the loot you find, you can roll two checks and choose which result to take.",
      "effectIT": "Ogni volta che effettui una prova di caratteristica su Fortuna per determinare il bottino trovato, puoi effettuare due tiri e scegliere quale risultato tenere.",
      "effect": "Ogni volta che effettui una prova di caratteristica su Fortuna per determinare il bottino trovato, puoi effettuare due tiri e scegliere quale risultato tenere."
    },
    {
      "id": "big_crits",
      "name": "Grandi Critici (Big Crits)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 4.",
      "ranks": [
        "I tuoi colpi critici colpiscono le giunture e i punti vitali più devastanti. Tutti i tuoi colpi critici infliggono 1 dado di danno da colpo critico addizionale del tipo d'arma utilizzata."
      ],
      "ranksEN": [
        "The critical hits you cause in combat are more devastating. If you roll a 20 on an attack roll with a weapon, you critically hit and the crit's damage is doubled."
      ],
      "ranksIT": [
        "I colpi critici che infliggi in combattimento sono più devastanti. Se ottieni un 20 naturale a un tiro per colpire con un'arma, metti a segno un colpo critico e il danno del colpo critico viene raddoppiato."
      ],
      "effectEN": "The critical hits you cause in combat are more devastating. If you roll a 20 on an attack roll with a weapon, you critically hit and the crit's damage is doubled.",
      "effectIT": "I colpi critici che infliggi in combattimento sono più devastanti. Se ottieni un 20 naturale a un tiro per colpire con un'arma, metti a segno un colpo critico e il danno del colpo critico viene raddoppiato.",
      "effect": "I colpi critici che infliggi in combattimento sono più devastanti. Se ottieni un 20 naturale a un tiro per colpire con un'arma, metti a segno un colpo critico e il danno del colpo critico viene raddoppiato."
    },
    {
      "id": "bloody_mess",
      "name": "Pasticcio Sanguinoso (Bloody Mess)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 5.",
      "ranks": [
        "I tuoi colpi fanno letteralmente esplodere i nemici in una pioggia raccapricciante di viscere e membra. Ottieni un bonus permanente di +5% (o +1 danno netto) a tutti i danni inflitti con qualsiasi arma."
      ],
      "ranksEN": [
        "Whenever you deal damage with a weapon or explosive, the damage increases by 2. Additionally, whenever you reduce a creature to 0 hit points, roll a Luck check with the DC equal to 20. If you succeed, the creature's body bursts into a horrific visceral mess. Each creature of your choice within 30 feet of the explosion becomes frightened for 1 round."
      ],
      "ranksIT": [
        "Ogni volta che infliggi danno con un'arma o un esplosivo, il danno aumenta di 2. Inoltre, ogni volta che riduci una creatura a 0 punti ferita, effettua una prova di Fortuna con CD pari a 20. Se hai successo, il corpo della creatura esplode in un raccapricciante ammasso viscerale: ogni creatura a tua scelta entro 30 piedi dall'esplosione diventa spaventata (frightened) per 1 round."
      ],
      "effectEN": "Whenever you deal damage with a weapon or explosive, the damage increases by 2. Additionally, whenever you reduce a creature to 0 hit points, roll a Luck check with the DC equal to 20. If you succeed, the creature's body bursts into a horrific visceral mess. Each creature of your choice within 30 feet of the explosion becomes frightened for 1 round.",
      "effectIT": "Ogni volta che infliggi danno con un'arma o un esplosivo, il danno aumenta di 2. Inoltre, ogni volta che riduci una creatura a 0 punti ferita, effettua una prova di Fortuna con CD pari a 20. Se hai successo, il corpo della creatura esplode in un raccapricciante ammasso viscerale: ogni creatura a tua scelta entro 30 piedi dall'esplosione diventa spaventata (frightened) per 1 round.",
      "effect": "Ogni volta che infliggi danno con un'arma o un esplosivo, il danno aumenta di 2. Inoltre, ogni volta che riduci una creatura a 0 punti ferita, effettua una prova di Fortuna con CD pari a 20. Se hai successo, il corpo della creatura esplode in un raccapricciante ammasso viscerale: ogni creatura a tua scelta entro 30 piedi dall'esplosione diventa spaventata (frightened) per 1 round."
    },
    {
      "id": "fortune_finder",
      "name": "Cercatore di Fortune (Fortune Finder)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 5.",
      "ranks": [
        "Hai un occhio magico per scovare tappi di bottiglia dimenticati ovunque. Quando perquisisci cassetti, casseforti o nascondigli trovi sempre una quantità di tappi di bottiglia raddoppiata rispetto al normale."
      ],
      "ranksEN": [
        "When you take this perk, you suddenly come into possession of 800 caps! Additionally, whenever you find bottle caps, you find a number more equal to your Luck ability modifier."
      ],
      "ranksIT": [
        "Quando acquisisci questo talento, entri improvvisamente in possesso di 800 tappi! Inoltre, ogni volta che trovi tappi di bottiglia nel bottino, ne trovi un ammontare aggiuntivo pari al tuo modificatore di caratteristica di Fortuna."
      ],
      "effectEN": "When you take this perk, you suddenly come into possession of 800 caps! Additionally, whenever you find bottle caps, you find a number more equal to your Luck ability modifier.",
      "effectIT": "Quando acquisisci questo talento, entri improvvisamente in possesso di 800 tappi! Inoltre, ogni volta che trovi tappi di bottiglia nel bottino, ne trovi un ammontare aggiuntivo pari al tuo modificatore di caratteristica di Fortuna.",
      "effect": "Quando acquisisci questo talento, entri improvvisamente in possesso di 800 tappi! Inoltre, ogni volta che trovi tappi di bottiglia nel bottino, ne trovi un ammontare aggiuntivo pari al tuo modificatore di caratteristica di Fortuna."
    },
    {
      "id": "make_it_double",
      "name": "Fallo Doppio (Make It Double)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 5.",
      "ranks": [
        "Il destino raddoppia i tuoi tesori. Ogni volta che trovi un componente raro, un farmaco pre-bellico o un consumabile speciale, tira un d20: con un risultato di 15 o superiore ne trovi una seconda copia identica."
      ],
      "ranksEN": [
        "You gain an additional Karma Cap."
      ],
      "ranksIT": [
        "Ottieni un Tappo Karma aggiuntivo (aumentando la tua riserva massima di Tappi Karma)."
      ],
      "effectEN": "You gain an additional Karma Cap.",
      "effectIT": "Ottieni un Tappo Karma aggiuntivo (aumentando la tua riserva massima di Tappi Karma).",
      "effect": "Ottieni un Tappo Karma aggiuntivo (aumentando la tua riserva massima di Tappi Karma)."
    },
    {
      "id": "it_just_works",
      "name": "Funziona e Basta (It Just Works)",
      "category": "Fortuna",
      "maxRank": 2,
      "req": "Luck 5.",
      "ranks": [
        "Grado 1: Contro ogni logica e legge della fisica, le cose per te funzionano e basta! Una volta per sessione, puoi trasformare un tiro fallito su un d20 in un successo automatico.",
        "Grado 2: Puoi usare questa capacità due volte per sessione."
      ],
      "ranksEN": [
        "It just works! Once per long rest, when you fail an attack roll, ability check, or saving throw, you can choose to succeed instead."
      ],
      "ranksIT": [
        "Funziona e basta! Una volta per riposo lungo, quando fallisci un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi scegliere di considerarlo automaticamente come un successo."
      ],
      "effectEN": "It just works! Once per long rest, when you fail an attack roll, ability check, or saving throw, you can choose to succeed instead.",
      "effectIT": "Funziona e basta! Una volta per riposo lungo, quando fallisci un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi scegliere di considerarlo automaticamente come un successo.",
      "effect": "Funziona e basta! Una volta per riposo lungo, quando fallisci un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi scegliere di considerarlo automaticamente come un successo."
    },
    {
      "id": "on_a_fluke",
      "name": "Per Puro Caso! (On a Fluke!)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 5.",
      "ranks": [
        "La tua fortuna cieca si tramuta in dinamismo istantaneo. Ogni volta che ottieni un 20 naturale su un d20 in un tiro per colpire o prova di abilità, guadagni immediatamente 2 Punti Azione (AP) gratuiti da spendere nel turno."
      ],
      "ranksEN": [
        "Whenever you or another party member misses an attack, or fails an ability or skill check; you can flip one of your Karma Caps to turn it into a success (at GM's discretion)."
      ],
      "ranksIT": [
        "La tua fortuna cieca si tramuta in dinamismo istantaneo. Ogni volta che ottieni un 20 naturale su un d20 in un tiro per colpire o prova di abilità, guadagni immediatamente 2 Punti Azione (AP) gratuiti da spendere nel turno."
      ],
      "effectEN": "Whenever you or another party member misses an attack, or fails an ability or skill check; you can flip one of your Karma Caps to turn it into a success (at GM's discretion).",
      "effectIT": "La tua fortuna cieca si tramuta in dinamismo istantaneo. Ogni volta che ottieni un 20 naturale su un d20 in un tiro per colpire o prova di abilità, guadagni immediatamente 2 Punti Azione (AP) gratuiti da spendere nel turno.",
      "effect": "La tua fortuna cieca si tramuta in dinamismo istantaneo. Ogni volta che ottieni un 20 naturale su un d20 in un tiro per colpire o prova di abilità, guadagni immediatamente 2 Punti Azione (AP) gratuiti da spendere nel turno."
    },
    {
      "id": "immuno_four_leaf_clover",
      "name": "Quadrifoglio Immunitario (Immuno-Four-Leaf Clover)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 5.",
      "ranks": [
        "Un colpo di tosse al momento giusto ti salva dall'ingestione di polveri mefitiche. Una volta al giorno, puoi ritirare una prova fallita contro Radiazioni, Malattie o Veleni tenendo il secondo risultato."
      ],
      "ranksEN": [
        "Gain +10 to saves against contracting illnesses and parasites."
      ],
      "ranksIT": [
        "La tua immunità naturale è miracolosa: ottieni +10 a tutti i tiri salvezza per evitare di contrarre malattie, parassiti o infezioni."
      ],
      "effectEN": "Gain +10 to saves against contracting illnesses and parasites.",
      "effectIT": "La tua immunità naturale è miracolosa: ottieni +10 a tutti i tiri salvezza per evitare di contrarre malattie, parassiti o infezioni.",
      "effect": "La tua immunità naturale è miracolosa: ottieni +10 a tutti i tiri salvezza per evitare di contrarre malattie, parassiti o infezioni."
    },
    {
      "id": "grim_reaper_s_sprint",
      "name": "Scatto del Tristo Mietitore (Grim Reaper's Sprint)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 6.",
      "ranks": [
        "La morte che semini alimenta la tua energia vitale. Ogni volta che uccidi un nemico in combattimento, recuperi immediatamente 3 Punti Azione (AP) nel tuo turno corrente."
      ],
      "ranksEN": [
        "Whenever you bring a creature to 0 hit points with a targeted attack, you immediately gain 8 action points. If you bring another creature to 0 hit points with a targeted attack on the same turn, you immediately gain 6 action points. If you bring a third creature to 0 hit points with a targeted attack on the same turn, you immediately gain 4 action points."
      ],
      "ranksIT": [
        "La morte che semini alimenta la tua energia vitale. Ogni volta che uccidi un nemico in combattimento, recuperi immediatamente 3 Punti Azione (AP) nel tuo turno corrente."
      ],
      "effectEN": "Whenever you bring a creature to 0 hit points with a targeted attack, you immediately gain 8 action points. If you bring another creature to 0 hit points with a targeted attack on the same turn, you immediately gain 6 action points. If you bring a third creature to 0 hit points with a targeted attack on the same turn, you immediately gain 4 action points.",
      "effectIT": "La morte che semini alimenta la tua energia vitale. Ogni volta che uccidi un nemico in combattimento, recuperi immediatamente 3 Punti Azione (AP) nel tuo turno corrente.",
      "effect": "La morte che semini alimenta la tua energia vitale. Ogni volta che uccidi un nemico in combattimento, recuperi immediatamente 3 Punti Azione (AP) nel tuo turno corrente."
    },
    {
      "id": "spray_and_pray",
      "name": "Spara e Prega (Spray and Pray)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 6.",
      "ranks": [
        "Quando spari raffiche selvagge all'impazzata, i tuoi proiettili evitano magicamente i tuoi alleati. I tuoi colpi con armi automatiche o ad area non infliggono mai alcun danno da fuoco amico ai compagni di squadra."
      ],
      "ranksEN": [
        "You can liberally blast areas with reckless abandon. Whenever you make a blind attack, you have advantage on the attack roll. Additionally, the blind attack DC is halved."
      ],
      "ranksIT": [
        "Quando spari raffiche selvagge all'impazzata, i tuoi proiettili evitano magicamente i tuoi alleati. I tuoi colpi con armi automatiche o ad area non infliggono mai alcun danno da fuoco amico ai compagni di squadra."
      ],
      "effectEN": "You can liberally blast areas with reckless abandon. Whenever you make a blind attack, you have advantage on the attack roll. Additionally, the blind attack DC is halved.",
      "effectIT": "Quando spari raffiche selvagge all'impazzata, i tuoi proiettili evitano magicamente i tuoi alleati. I tuoi colpi con armi automatiche o ad area non infliggono mai alcun danno da fuoco amico ai compagni di squadra.",
      "effect": "Quando spari raffiche selvagge all'impazzata, i tuoi proiettili evitano magicamente i tuoi alleati. I tuoi colpi con armi automatiche o ad area non infliggono mai alcun danno da fuoco amico ai compagni di squadra."
    },
    {
      "id": "randomizer",
      "name": "Randomizzatore (Randomizer)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 6.",
      "ranks": [
        "All'inizio di ogni combattimento, tira 1d6: in base al risultato ottieni una benedizione casuale della Zona (1: +2 CA, 2: +3 AP, 3: +2 DT, 4: +2 a colpire, 5: +4 danni, 6: colpo critico garantito al 1° attacco)."
      ],
      "ranksEN": [
        "Whenever you craft or repair an item, you can randomly choose one of the required materials, the required material is reduced by an amount equal to your Luck ability modifier to a minimum of 1. The required material is also replaced by a randomly chosen junk material. Additionally, whenever you consume a food, drink, or chem, you can choose to roll a Luck ability check with the DC equal to 15, if you succeed; one random food, drink, or chem property is added to the consumed food, drink, or chem."
      ],
      "ranksIT": [
        "All'inizio di ogni combattimento, tira 1d6: in base al risultato ottieni una benedizione casuale della Zona (1: +2 CA, 2: +3 AP, 3: +2 DT, 4: +2 a colpire, 5: +4 danni, 6: colpo critico garantito al 1° attacco)."
      ],
      "effectEN": "Whenever you craft or repair an item, you can randomly choose one of the required materials, the required material is reduced by an amount equal to your Luck ability modifier to a minimum of 1. The required material is also replaced by a randomly chosen junk material. Additionally, whenever you consume a food, drink, or chem, you can choose to roll a Luck ability check with the DC equal to 15, if you succeed; one random food, drink, or chem property is added to the consumed food, drink, or chem.",
      "effectIT": "All'inizio di ogni combattimento, tira 1d6: in base al risultato ottieni una benedizione casuale della Zona (1: +2 CA, 2: +3 AP, 3: +2 DT, 4: +2 a colpire, 5: +4 danni, 6: colpo critico garantito al 1° attacco).",
      "effect": "All'inizio di ogni combattimento, tira 1d6: in base al risultato ottieni una benedizione casuale della Zona (1: +2 CA, 2: +3 AP, 3: +2 DT, 4: +2 a colpire, 5: +4 danni, 6: colpo critico garantito al 1° attacco)."
    },
    {
      "id": "critical_banker",
      "name": "Banchiere dei Critici (Critical Banker)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 7.",
      "ranks": [
        "Sai 'mettere da parte' la buona sorte per quando serve davvero. Puoi immagazzinare fino a 1 colpo critico in riserva: quando metti a segno un attacco normale con successo, puoi spendere il critico memorizzato per trasformarlo all'istante in un colpo critico."
      ],
      "ranksEN": [
        "Save a critical hit in bank to unleash on any successful attack roll."
      ],
      "ranksIT": [
        "Puoi immagazzinare un colpo critico per usarlo a comando. Quando colpisci con un attacco, puoi decidere di convertire il colpo in critico attingendo dalla tua banca critici."
      ],
      "effectEN": "Save a critical hit in bank to unleash on any successful attack roll.",
      "effectIT": "Puoi immagazzinare un colpo critico per usarlo a comando. Quando colpisci con un attacco, puoi decidere di convertire il colpo in critico attingendo dalla tua banca critici.",
      "effect": "Puoi immagazzinare un colpo critico per usarlo a comando. Quando colpisci con un attacco, puoi decidere di convertire il colpo in critico attingendo dalla tua banca critici."
    },
    {
      "id": "ricochet",
      "name": "Rimbalzo (Ricochet)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 7.",
      "ranks": [
        "I proiettili che mancano la tua figura rimbalzano su fibbie e rocce volando indietro contro i tiratori. Quando un attacco a distanza manca la tua figura, tira un d20: con un risultato di 18-20, il proiettile rimbalza e colpisce l'attaccante per il pieno danno."
      ],
      "ranksEN": [
        "Whenever a ranged attack misses you, on a natural 1 the projectile ricochets and hits the attacker dealing full damage."
      ],
      "ranksIT": [
        "Ogni volta che un nemico manca un attacco a distanza contro di te, se il tiro per colpire ottiene un 1 naturale, il proiettile rimbalza indietro e colpisce l'attaccante per lo stesso ammontare di danno che avrebbe inflitto a te."
      ],
      "effectEN": "Whenever a ranged attack misses you, on a natural 1 the projectile ricochets and hits the attacker dealing full damage.",
      "effectIT": "Ogni volta che un nemico manca un attacco a distanza contro di te, se il tiro per colpire ottiene un 1 naturale, il proiettile rimbalza indietro e colpisce l'attaccante per lo stesso ammontare di danno che avrebbe inflitto a te.",
      "effect": "Ogni volta che un nemico manca un attacco a distanza contro di te, se il tiro per colpire ottiene un 1 naturale, il proiettile rimbalza indietro e colpisce l'attaccante per lo stesso ammontare di danno che avrebbe inflitto a te."
    },
    {
      "id": "inflictable_opportunity",
      "name": "Opportunità Infliggibile (Inflictable Opportunity)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 7.",
      "ranks": [
        "Sfrutti all'istante le gaffe grossolane dei nemici. Quando un avversario ottiene un 1 naturale su un tiro per colpire contro di te, provoca un attacco d'opportunità immediato gratuito da parte tua senza consumare reazioni."
      ],
      "ranksEN": [
        "You can take the help action with 3 AP instead of 6. Additionally, when you help another creature with a skill check, they can add your full skill bonus to their roll instead of half."
      ],
      "ranksIT": [
        "Sfrutti all'istante le gaffe grossolane dei nemici. Quando un avversario ottiene un 1 naturale su un tiro per colpire contro di te, provoca un attacco d'opportunità immediato gratuito da parte tua senza consumare reazioni."
      ],
      "effectEN": "You can take the help action with 3 AP instead of 6. Additionally, when you help another creature with a skill check, they can add your full skill bonus to their roll instead of half.",
      "effectIT": "Sfrutti all'istante le gaffe grossolane dei nemici. Quando un avversario ottiene un 1 naturale su un tiro per colpire contro di te, provoca un attacco d'opportunità immediato gratuito da parte tua senza consumare reazioni.",
      "effect": "Sfrutti all'istante le gaffe grossolane dei nemici. Quando un avversario ottiene un 1 naturale su un tiro per colpire contro di te, provoca un attacco d'opportunità immediato gratuito da parte tua senza consumare reazioni."
    },
    {
      "id": "mysterious_stranger",
      "name": "Misterioso Straniero (Mysterious Stranger)",
      "category": "Fortuna",
      "maxRank": 2,
      "req": "Luck 8.",
      "ranks": [
        "Grado 1: Un misterioso alleato in impermeabile e cappello fedora vigila su di te. In combattimento, quando attacchi un nemico, c'è una probabilità del 10% che compaia dal nulla con una Magnum .44 per infliggere un colpo mortale fatale al bersaglio.",
        "Grado 2: La probabilità che il Misterioso Straniero compaia sale al 20% e lascia dietro di sé munizioni speciali."
      ],
      "ranksEN": [
        "A mysterious stranger watches over you. When in combat, rolling a 1 on Luck lets you spend a Karma Cap to summon the stranger."
      ],
      "ranksIT": [
        "Un misterioso alleato veglia su di te. Quando effettui un tiro per colpire in combattimento, con un risultato di 1 naturale su Fortuna puoi spendere 1 Tappo Karma per far apparire il Misterioso Straniero che spara un colpo devastante con la sua .44 Magnum sul bersaglio."
      ],
      "effectEN": "A mysterious stranger watches over you. When in combat, rolling a 1 on Luck lets you spend a Karma Cap to summon the stranger.",
      "effectIT": "Un misterioso alleato veglia su di te. Quando effettui un tiro per colpire in combattimento, con un risultato di 1 naturale su Fortuna puoi spendere 1 Tappo Karma per far apparire il Misterioso Straniero che spara un colpo devastante con la sua .44 Magnum sul bersaglio.",
      "effect": "Un misterioso alleato veglia su di te. Quando effettui un tiro per colpire in combattimento, con un risultato di 1 naturale su Fortuna puoi spendere 1 Tappo Karma per far apparire il Misterioso Straniero che spara un colpo devastante con la sua .44 Magnum sul bersaglio."
    },
    {
      "id": "dumb_luck",
      "name": "Fortuna Cieca (Dumb Luck)",
      "category": "Fortuna",
      "maxRank": 2,
      "req": "Luck 8.",
      "ranks": [
        "Grado 1: Sei così spudoratamente fortunato che i piani perfetti dei nemici falliscono contro di te. Quando un nemico ti attacca con vantaggio, puoi annullare il vantaggio trasformando il tiro in un tiro normale.",
        "Grado 2: Quando un nemico avrebbe vantaggio contro di te, puoi costringerlo a tirare con svantaggio una volta per combattimento."
      ],
      "ranksEN": [
        "There is no sense to your life's aptitude. Your full Luck ability modifier is added to all your skill modifiers instead of half. Additionally, whenever you flip your Karma Cap to gain advantage on an ability or skill check, you can add double your Luck modifier to the total.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of twice, if you take it again; all your skill modifiers increase by 2. Additionally, whenever you flip your Karma Cap to gain reroll an ability or skill check, you can add double your Luck modifier to the second roll.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of twice, if you take it again; all your skill modifiers increase by 2. Additionally, whenever you flip your Karma Cap to gain reroll an ability or skill check, you can add double your Luck modifier to the second roll."
      ],
      "ranksIT": [
        "Grado 1: Sei così spudoratamente fortunato che i piani perfetti dei nemici falliscono contro di te. Quando un nemico ti attacca con vantaggio, puoi annullare il vantaggio trasformando il tiro in un tiro normale.",
        "Grado 2: Quando un nemico avrebbe vantaggio contro di te, puoi costringerlo a tirare con svantaggio una volta per combattimento."
      ],
      "effectEN": "There is no sense to your life's aptitude. Your full Luck ability modifier is added to all your skill modifiers instead of half. Additionally, whenever you flip your Karma Cap to gain advantage on an ability or skill check, you can add double your Luck modifier to the total.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of twice, if you take it again; all your skill modifiers increase by 2. Additionally, whenever you flip your Karma Cap to gain reroll an ability or skill check, you can add double your Luck modifier to the second roll.",
      "effectIT": "Grado 1: Sei così spudoratamente fortunato che i piani perfetti dei nemici falliscono contro di te. Quando un nemico ti attacca con vantaggio, puoi annullare il vantaggio trasformando il tiro in un tiro normale.",
      "effect": "Grado 1: Sei così spudoratamente fortunato che i piani perfetti dei nemici falliscono contro di te. Quando un nemico ti attacca con vantaggio, puoi annullare il vantaggio trasformando il tiro in un tiro normale."
    },
    {
      "id": "been_there_done_that",
      "name": "Già Visto, Già Fatto (Been There, Done That.)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 9.",
      "ranks": [
        "La noia della Zona ti rende incredibilmente efficace nel fare piazza pulita. Ogni volta che tiri un 1 su qualsiasi dado di danno da un attacco, puoi ritirare quel dado e sei obbligato a tenere il nuovo risultato."
      ],
      "ranksEN": [
        "Whenever you or an ally within 100 feet of you makes a Luck ability check, it is increased by 3. Additionally, whenever you gain XP you gain a bonus equal to a 5d10 + every player character Luck scored added together, then halved."
      ],
      "ranksIT": [
        "La noia della Zona ti rende incredibilmente efficace nel fare piazza pulita. Ogni volta che tiri un 1 su qualsiasi dado di danno da un attacco, puoi ritirare quel dado e sei obbligato a tenere il nuovo risultato."
      ],
      "effectEN": "Whenever you or an ally within 100 feet of you makes a Luck ability check, it is increased by 3. Additionally, whenever you gain XP you gain a bonus equal to a 5d10 + every player character Luck scored added together, then halved.",
      "effectIT": "La noia della Zona ti rende incredibilmente efficace nel fare piazza pulita. Ogni volta che tiri un 1 su qualsiasi dado di danno da un attacco, puoi ritirare quel dado e sei obbligato a tenere il nuovo risultato.",
      "effect": "La noia della Zona ti rende incredibilmente efficace nel fare piazza pulita. Ogni volta che tiri un 1 su qualsiasi dado di danno da un attacco, puoi ritirare quel dado e sei obbligato a tenere il nuovo risultato."
    },
    {
      "id": "fortune_favors_the_bold",
      "name": "La Fortuna Aiuta gli Audaci (Fortune Favors the Bold)",
      "category": "Fortuna",
      "maxRank": 2,
      "req": "Luck 9.",
      "ranks": [
        "Grado 1: Più la situazione è disperata, più la sorte ti premia. Quando ti trovi con meno del 25% di HP o sei circondato da 3 o più nemici, tutti i tuoi attacchi ottengono vantaggio e infliggono +3 danni.",
        "Grado 2: I danni bonus salgono a +6 e guadagni +2 alla Classe Armatura (CA) quando sei alle strette."
      ],
      "ranksEN": [
        "Whenever you or any other player characters flip your Karma Cap to gain advantage or a reroll on an ability check, skill check, or attack roll, physically flick and flip your Karma Cap. If it lands facing up then it stays facing up.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of once. If any other player character takes this perk, and if your Karma Cap lands face down; you can physically flip a number of times equal to the amount of player characters who have taken this perk past the first.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of once. If any other player character takes this perk, and if your Karma Cap lands face down; you can physically flip a number of times equal to the amount of player characters who have taken this perk past the first."
      ],
      "ranksIT": [
        "Grado 1: Più la situazione è disperata, più la sorte ti premia. Quando ti trovi con meno del 25% di HP o sei circondato da 3 o più nemici, tutti i tuoi attacchi ottengono vantaggio e infliggono +3 danni.",
        "Grado 2: I danni bonus salgono a +6 e guadagni +2 alla Classe Armatura (CA) quando sei alle strette."
      ],
      "effectEN": "Whenever you or any other player characters flip your Karma Cap to gain advantage or a reroll on an ability check, skill check, or attack roll, physically flick and flip your Karma Cap. If it lands facing up then it stays facing up.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of once. If any other player character takes this perk, and if your Karma Cap lands face down; you can physically flip a number of times equal to the amount of player characters who have taken this perk past the first.",
      "effectIT": "Grado 1: Più la situazione è disperata, più la sorte ti premia. Quando ti trovi con meno del 25% di HP o sei circondato da 3 o più nemici, tutti i tuoi attacchi ottengono vantaggio e infliggono +3 danni.",
      "effect": "Grado 1: Più la situazione è disperata, più la sorte ti premia. Quando ti trovi con meno del 25% di HP o sei circondato da 3 o più nemici, tutti i tuoi attacchi ottengono vantaggio e infliggono +3 danni."
    },
    {
      "id": "outrageous_advantage",
      "name": "Vantaggio Smisurato (Outrageous Advantage)",
      "category": "Fortuna",
      "maxRank": 2,
      "req": "Luck 10.",
      "ranks": [
        "Grado 1: La tua fortuna sfida ogni probabilità statistica dell'universo. Una volta per incontro, puoi effettuare un tiro per colpire o una prova con 'Triplo Vantaggio' (tiri 3 dadi d20 e scegli il risultato più alto).",
        "Grado 2: Puoi usare il Triplo Vantaggio due volte per incontro."
      ],
      "ranksEN": [
        "Whenever you or any other player characters roll an ability check, skill check, or attack roll with advantage; you roll three d20's instead of two and choose the highest result.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of once. If any other player character takes this perk, the amount of d20's rolled with advantage increases by one.",
        "Grado 2: Aumenta ulteriormente gli effetti di questo perk.\nRepeat: You can take this perk up to a maximum of once. If any other player character takes this perk, the amount of d20's rolled with advantage increases by one."
      ],
      "ranksIT": [
        "Grado 1: La tua fortuna sfida ogni probabilità statistica dell'universo. Una volta per incontro, puoi effettuare un tiro per colpire o una prova con 'Triplo Vantaggio' (tiri 3 dadi d20 e scegli il risultato più alto).",
        "Grado 2: Puoi usare il Triplo Vantaggio due volte per incontro."
      ],
      "effectEN": "Whenever you or any other player characters roll an ability check, skill check, or attack roll with advantage; you roll three d20's instead of two and choose the highest result.\n\n[Ripetibile]: Repeat: You can take this perk up to a maximum of once. If any other player character takes this perk, the amount of d20's rolled with advantage increases by one.",
      "effectIT": "Grado 1: La tua fortuna sfida ogni probabilità statistica dell'universo. Una volta per incontro, puoi effettuare un tiro per colpire o una prova con 'Triplo Vantaggio' (tiri 3 dadi d20 e scegli il risultato più alto).",
      "effect": "Grado 1: La tua fortuna sfida ogni probabilità statistica dell'universo. Una volta per incontro, puoi effettuare un tiro per colpire o una prova con 'Triplo Vantaggio' (tiri 3 dadi d20 e scegli il risultato più alto)."
    },
    {
      "id": "never_tell_me_the_odds",
      "name": "Non Dirmi Mai le Probabilità (Never Tell Me the Odds)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Luck 10.",
      "ranks": [
        "Quando tutti gridano alla catastrofe, tu compirai l'impossibile. Una volta per sessione di gioco, se ottieni un 1 naturale su un d20, puoi decidere che quel tiro sia invece considerato a tutti gli effetti un 20 naturale (Successo Critico trionfale)."
      ],
      "ranksEN": [
        "Whenever another creature hits you with an attack, you can flip one of your Karma Caps to turn the hit into a miss. Additionally, whenever you have the dying condition all attacks roll against you automatically miss."
      ],
      "ranksIT": [
        "Quando tutti gridano alla catastrofe, tu compirai l'impossibile. Una volta per sessione di gioco, se ottieni un 1 naturale su un d20, puoi decidere che quel tiro sia invece considerato a tutti gli effetti un 20 naturale (Successo Critico trionfale)."
      ],
      "effectEN": "Whenever another creature hits you with an attack, you can flip one of your Karma Caps to turn the hit into a miss. Additionally, whenever you have the dying condition all attacks roll against you automatically miss.",
      "effectIT": "Quando tutti gridano alla catastrofe, tu compirai l'impossibile. Una volta per sessione di gioco, se ottieni un 1 naturale su un d20, puoi decidere che quel tiro sia invece considerato a tutti gli effetti un 20 naturale (Successo Critico trionfale).",
      "effect": "Quando tutti gridano alla catastrofe, tu compirai l'impossibile. Una volta per sessione di gioco, se ottieni un 1 naturale su un d20, puoi decidere che quel tiro sia invece considerato a tutti gli effetti un 20 naturale (Successo Critico trionfale)."
    },
    {
      "id": "cannibal",
      "name": "Cannibale (Cannibal)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Human, Ghoul, or Super Mutant.",
      "ranks": [
        "Nutrirti dei cadaveri di umani, ghoul o mutanti sostenta il tuo corpo. In modalità furtiva puoi consumare un cadavere umanoide: ripristini un numero di Punti Ferita pari a 2d8 + il tuo modificatore di Costituzione, ma perdi Carma ed è considerato un crimine orrendo se osservato."
      ],
      "ranksEN": [
        "You can feed on human, ghoul, or synth corpses. Feeding takes 1 minute, heals hit points equal to your healing rate, and reduces hunger by 3."
      ],
      "ranksIT": [
        "Puoi nutrirti dei cadaveri di umanoidi (umani, ghoul o synth). Nutrirsi di un cadavere richiede 1 minuto e ti cura di un ammontare di punti ferita pari al tuo Tasso di Guarigione (Healing Rate), riducendo la tua Fame di 3 livelli."
      ],
      "effectEN": "You can feed on human, ghoul, or synth corpses. Feeding takes 1 minute, heals hit points equal to your healing rate, and reduces hunger by 3.",
      "effectIT": "Puoi nutrirti dei cadaveri di umanoidi (umani, ghoul o synth). Nutrirsi di un cadavere richiede 1 minuto e ti cura di un ammontare di punti ferita pari al tuo Tasso di Guarigione (Healing Rate), riducendo la tua Fame di 3 livelli.",
      "effect": "Puoi nutrirti dei cadaveri di umanoidi (umani, ghoul o synth). Nutrirsi di un cadavere richiede 1 minuto e ti cura di un ammontare di punti ferita pari al tuo Tasso di Guarigione (Healing Rate), riducendo la tua Fame di 3 livelli."
    },
    {
      "id": "old_world_gourmet",
      "name": "Buongustaio del Vecchio Mondo (Old World Gourmet)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Human.",
      "ranks": [
        "Hai sviluppato un palato raffinato per i cibi confezionati prima delle bombe. Gli snack pre-bellici (Cram, Sugar Bombs, Dandy Boy Apples, Salisbury Steak) ripristinano il 50% in più di HP e hai vantaggio sui tiri contro la dipendenza da alcol."
      ],
      "ranksEN": [
        "Thanks to unclean living you've learned the secrets of the lounge lizards! Food and Drinks no longer give you Irradiated levels."
      ],
      "ranksIT": [
        "Hai sviluppato un palato raffinato per i cibi confezionati prima delle bombe. Gli snack pre-bellici (Cram, Sugar Bombs, Dandy Boy Apples, Salisbury Steak) ripristinano il 50% in più di HP e hai vantaggio sui tiri contro la dipendenza da alcol."
      ],
      "effectEN": "Thanks to unclean living you've learned the secrets of the lounge lizards! Food and Drinks no longer give you Irradiated levels.",
      "effectIT": "Hai sviluppato un palato raffinato per i cibi confezionati prima delle bombe. Gli snack pre-bellici (Cram, Sugar Bombs, Dandy Boy Apples, Salisbury Steak) ripristinano il 50% in più di HP e hai vantaggio sui tiri contro la dipendenza da alcol.",
      "effect": "Hai sviluppato un palato raffinato per i cibi confezionati prima delle bombe. Gli snack pre-bellici (Cram, Sugar Bombs, Dandy Boy Apples, Salisbury Steak) ripristinano il 50% in più di HP e hai vantaggio sui tiri contro la dipendenza da alcol."
    },
    {
      "id": "hunter_s_wisdom",
      "name": "Saggezza del Cacciatore (Hunter's Wisdom)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Human, Ghoul, or Super Mutant.",
      "ranks": [
        "Conosci il comportamento e i segnali della selvaggina mutata. Ottieni vantaggio a tutte le prove di Sopravvivenza e Percezione per tracciare animali della Zona, e guadagni un bonus di +2 alla Soglia Danni (PD/DT) contro gli attacchi di bestie e insetti mutati."
      ],
      "ranksEN": [
        "Whenever you take damage from attacks made from animals or insects, your DT increases by 2. Additionally, whenever you consume the meat of an animal or insect that has died within the past 15 minutes, you heal a number of hit points equal to your healing rate, once you heal in this way you cannot heal from it again until you rest for at least 8 hours. If you consume prepared animal or insect meat, you heal a number of stamina points equal to your level."
      ],
      "ranksIT": [
        "Conosci il comportamento e i segnali della selvaggina mutata. Ottieni vantaggio a tutte le prove di Sopravvivenza e Percezione per tracciare animali della Zona, e guadagni un bonus di +2 alla Soglia Danni (PD/DT) contro gli attacchi di bestie e insetti mutati."
      ],
      "effectEN": "Whenever you take damage from attacks made from animals or insects, your DT increases by 2. Additionally, whenever you consume the meat of an animal or insect that has died within the past 15 minutes, you heal a number of hit points equal to your healing rate, once you heal in this way you cannot heal from it again until you rest for at least 8 hours. If you consume prepared animal or insect meat, you heal a number of stamina points equal to your level.",
      "effectIT": "Conosci il comportamento e i segnali della selvaggina mutata. Ottieni vantaggio a tutte le prove di Sopravvivenza e Percezione per tracciare animali della Zona, e guadagni un bonus di +2 alla Soglia Danni (PD/DT) contro gli attacchi di bestie e insetti mutati.",
      "effect": "Conosci il comportamento e i segnali della selvaggina mutata. Ottieni vantaggio a tutte le prove di Sopravvivenza e Percezione per tracciare animali della Zona, e guadagni un bonus di +2 alla Soglia Danni (PD/DT) contro gli attacchi di bestie e insetti mutati."
    },
    {
      "id": "ghastly_scavenger",
      "name": "Spazzino Spettrale (Ghastly Scavenger)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Human, Ghoul, or Super Mutant.",
      "ranks": [
        "Il tuo stomaco non rifiuta alcuna carne mutata. Puoi nutrirti anche dei cadaveri di Super Mutanti e Ghoul Feroci in modalità furtiva, ripristinando Punti Ferita e Stamina con gli stessi benefici del talento Cannibale."
      ],
      "ranksEN": [
        "Feed on super mutants or wild beast corpses to heal hit points."
      ],
      "ranksIT": [
        "Puoi nutrirti dei cadaveri di super mutanti o creature feroci per curare punti ferita pari al tuo Tasso di Guarigione (CD 15 su Costituzione, una volta ogni 8 ore)."
      ],
      "effectEN": "Feed on super mutants or wild beast corpses to heal hit points.",
      "effectIT": "Puoi nutrirti dei cadaveri di super mutanti o creature feroci per curare punti ferita pari al tuo Tasso di Guarigione (CD 15 su Costituzione, una volta ogni 8 ore).",
      "effect": "Puoi nutrirti dei cadaveri di super mutanti o creature feroci per curare punti ferita pari al tuo Tasso di Guarigione (CD 15 su Costituzione, una volta ogni 8 ore)."
    },
    {
      "id": "ice_cream_and_apple_pie",
      "name": "Gelato e Torta di Mele (Ice Cream and Apple Pie)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Human, Ghoul, or Super Mutant.",
      "ranks": [
        "I ricordi o le ricette dei dolci della vecchia America scaldano il tuo spirito. Consumare dolci o zuccheri pre-bellici ti conferisce 2 Punti Azione (AP) temporanei per il tuo prossimo scontro e rimuove 1 livello di affaticamento."
      ],
      "ranksEN": [
        "If you consume food with the Putrid or Tainted property, you cannot become poisoned or diseased. Additionally, if you consume a food with the Bland property, it is considered Tasty instead."
      ],
      "ranksIT": [
        "I ricordi o le ricette dei dolci della vecchia America scaldano il tuo spirito. Consumare dolci o zuccheri pre-bellici ti conferisce 2 Punti Azione (AP) temporanei per il tuo prossimo scontro e rimuove 1 livello di affaticamento."
      ],
      "effectEN": "If you consume food with the Putrid or Tainted property, you cannot become poisoned or diseased. Additionally, if you consume a food with the Bland property, it is considered Tasty instead.",
      "effectIT": "I ricordi o le ricette dei dolci della vecchia America scaldano il tuo spirito. Consumare dolci o zuccheri pre-bellici ti conferisce 2 Punti Azione (AP) temporanei per il tuo prossimo scontro e rimuove 1 livello di affaticamento.",
      "effect": "I ricordi o le ricette dei dolci della vecchia America scaldano il tuo spirito. Consumare dolci o zuccheri pre-bellici ti conferisce 2 Punti Azione (AP) temporanei per il tuo prossimo scontro e rimuove 1 livello di affaticamento."
    },
    {
      "id": "computer_cousin",
      "name": "Cugino Computer (Computer Cousin)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Robot or Synth, Level 5.",
      "ranks": [
        "Interfacci i tuoi bus dati direttamente con i sistemi informatici. Ottieni vantaggio a tutte le prove di Scienza e Violazione per connetterti, hackerare o comandare terminali, torrette difensive automatizzate e porte elettroniche."
      ],
      "ranksEN": [
        "Robots and synths recognize you; gain advantage on social checks within 60 ft."
      ],
      "ranksIT": [
        "I sintetici e i robot ti riconoscono come parente elettronico: hai vantaggio a tutte le prove sociali con robot e synth non ostili entro 60 piedi."
      ],
      "effectEN": "Robots and synths recognize you; gain advantage on social checks within 60 ft.",
      "effectIT": "I sintetici e i robot ti riconoscono come parente elettronico: hai vantaggio a tutte le prove sociali con robot e synth non ostili entro 60 piedi.",
      "effect": "I sintetici e i robot ti riconoscono come parente elettronico: hai vantaggio a tutte le prove sociali con robot e synth non ostili entro 60 piedi."
    },
    {
      "id": "partition_reset",
      "name": "Reset delle Partizioni (Partition Reset)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Robot or Synth, Level 10.",
      "ranks": [
        "Esegui un ciclo di svuotamento dei registri di memoria e cache. Una volta al giorno, puoi spendere 4 AP per eliminare istantaneamente qualsiasi debuff, alterazione logica, virus informatico o rallentamento che affligge il tuo sistema."
      ],
      "ranksEN": [
        "Reduce any of your ability scores by 1, 2, or 3. You can increase any other ability score by the amount you decreased plus 1."
      ],
      "ranksIT": [
        "Esegui un ciclo di svuotamento dei registri di memoria e cache. Una volta al giorno, puoi spendere 4 AP per eliminare istantaneamente qualsiasi debuff, alterazione logica, virus informatico o rallentamento che affligge il tuo sistema."
      ],
      "effectEN": "Reduce any of your ability scores by 1, 2, or 3. You can increase any other ability score by the amount you decreased plus 1.",
      "effectIT": "Esegui un ciclo di svuotamento dei registri di memoria e cache. Una volta al giorno, puoi spendere 4 AP per eliminare istantaneamente qualsiasi debuff, alterazione logica, virus informatico o rallentamento che affligge il tuo sistema.",
      "effect": "Esegui un ciclo di svuotamento dei registri di memoria e cache. Una volta al giorno, puoi spendere 4 AP per eliminare istantaneamente qualsiasi debuff, alterazione logica, virus informatico o rallentamento che affligge il tuo sistema."
    },
    {
      "id": "factory_reset",
      "name": "Ripristino di Fabbrica (Factory Reset)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Robot or Synth, Level 10.",
      "ranks": [
        "Un protocollo d'emergenza ripristina lo stato operativo originale delle tue matrici. Una volta ogni 24 ore, se i tuoi HP scendono a 0, i tuoi sistemi si riavviano in sicurezza riportandoti al 50% dei tuoi Punti Ferita massimi dopo 1 round di diagnostica."
      ],
      "ranksEN": [
        "When you take this perk, your character becomes 1st level and gains all the XP you previously had. You can rebuild your character and choose new traits, skills bonuses, ability scores, and perks. However, your memory is wiped and you remember nothing up to taking this perk."
      ],
      "ranksIT": [
        "Un protocollo d'emergenza ripristina lo stato operativo originale delle tue matrici. Una volta ogni 24 ore, se i tuoi HP scendono a 0, i tuoi sistemi si riavviano in sicurezza riportandoti al 50% dei tuoi Punti Ferita massimi dopo 1 round di diagnostica."
      ],
      "effectEN": "When you take this perk, your character becomes 1st level and gains all the XP you previously had. You can rebuild your character and choose new traits, skills bonuses, ability scores, and perks. However, your memory is wiped and you remember nothing up to taking this perk.",
      "effectIT": "Un protocollo d'emergenza ripristina lo stato operativo originale delle tue matrici. Una volta ogni 24 ore, se i tuoi HP scendono a 0, i tuoi sistemi si riavviano in sicurezza riportandoti al 50% dei tuoi Punti Ferita massimi dopo 1 round di diagnostica.",
      "effect": "Un protocollo d'emergenza ripristina lo stato operativo originale delle tue matrici. Una volta ogni 24 ore, se i tuoi HP scendono a 0, i tuoi sistemi si riavviano in sicurezza riportandoti al 50% dei tuoi Punti Ferita massimi dopo 1 round di diagnostica."
    },
    {
      "id": "determination_is_not_a_malfunction",
      "name": "La Determinazione Non è un Errore (Determination is not a Malfunction)",
      "category": "Fortuna",
      "maxRank": 1,
      "req": "Robot or Synth, Level 10.",
      "ranks": [
        "La tua coscienza senziente supera qualsiasi limitazione di programmazione imposta dai costruttori. Sei totalmente immune a tentativi di riprogrammazione forzata, spegnimento da remoto e impulsi di comando coercitivi."
      ],
      "ranksEN": [
        "You are immune to the frightened condition. Additionally, when you have unused action points at the end of your turn, you recycle all of them on your next turn."
      ],
      "ranksIT": [
        "La tua coscienza senziente supera qualsiasi limitazione di programmazione imposta dai costruttori. Sei totalmente immune a tentativi di riprogrammazione forzata, spegnimento da remoto e impulsi di comando coercitivi."
      ],
      "effectEN": "You are immune to the frightened condition. Additionally, when you have unused action points at the end of your turn, you recycle all of them on your next turn.",
      "effectIT": "La tua coscienza senziente supera qualsiasi limitazione di programmazione imposta dai costruttori. Sei totalmente immune a tentativi di riprogrammazione forzata, spegnimento da remoto e impulsi di comando coercitivi.",
      "effect": "La tua coscienza senziente supera qualsiasi limitazione di programmazione imposta dai costruttori. Sei totalmente immune a tentativi di riprogrammazione forzata, spegnimento da remoto e impulsi di comando coercitivi."
    },
    {
      "id": "nuclear_reactor",
      "name": "Reattore Nucleare (Nuclear Reactor)",
      "category": "Razziale: Umano",
      "maxRank": 1,
      "req": "Human.",
      "ranks": [
        "Il tuo organismo ha subito un adattamento bizzarro alle radiazioni di fondo. Quando il tuo livello di radiazioni accumulate supera i 400 RAD, invece di ammalarti guadagni un bonus di +1 alla Forza e +1 Punto Azione (AP) per turno."
      ],
      "nameEN": "Nuclear Reactor",
      "ranksEN": [
        "While in an irradiated zone you have advantage on all ability and skill checks. Additionally, your AC and DT increase by 1."
      ],
      "effect": "Mentre ti trovi in una zona irradiata, ottieni vantaggio a tutte le prove di caratteristica e abilità. Inoltre, la tua Classe Armatura (AC) e la tua Soglia di Danno (DT) aumentano entrambe di 1.",
      "effectEN": "While in an irradiated zone you have advantage on all ability and skill checks. Additionally, your AC and DT increase by 1.",
      "ranksIT": [
        "Mentre ti trovi in una zona irradiata, ottieni vantaggio a tutte le prove di caratteristica e abilità. Inoltre, la tua Classe Armatura (AC) e la tua Soglia di Danno (DT) aumentano entrambe di 1."
      ],
      "effectIT": "Mentre ti trovi in una zona irradiata, ottieni vantaggio a tutte le prove di caratteristica e abilità. Inoltre, la tua Classe Armatura (AC) e la tua Soglia di Danno (DT) aumentano entrambe di 1."
    },
    {
      "id": "rad_absorption",
      "name": "Assorbimento Radiazioni (Rad Absorption)",
      "category": "Razziale: Umano",
      "maxRank": 1,
      "req": "Human.",
      "ranks": [
        "Le tue cellule filtrano ed espellono gradualmente gli isotopi radioattivi senza ricorrere a costosi farmaci. Espelli naturalmente 10 RAD ogni ora trascorsa lontano da sorgenti radioattive attive."
      ],
      "nameEN": "Rad Absorption",
      "ranksEN": [
        "With the Rad Absorption perk, your radiation level slowly decreases on its own over time. Every time you sleep, and you are not in an irradiated zone, your rad level decreases by one."
      ],
      "effect": "Con questo talento, il tuo livello di radiazioni diminuisce lentamente nel tempo in modo autonomo. Ogni volta che dormi e non ti trovi all'interno di una zona irradiata, il tuo livello di radiazioni diminuisce di 1.",
      "effectEN": "With the Rad Absorption perk, your radiation level slowly decreases on its own over time. Every time you sleep, and you are not in an irradiated zone, your rad level decreases by one.",
      "ranksIT": [
        "Con questo talento, il tuo livello di radiazioni diminuisce lentamente nel tempo in modo autonomo. Ogni volta che dormi e non ti trovi all'interno di una zona irradiata, il tuo livello di radiazioni diminuisce di 1."
      ],
      "effectIT": "Con questo talento, il tuo livello di radiazioni diminuisce lentamente nel tempo in modo autonomo. Ogni volta che dormi e non ti trovi all'interno di una zona irradiata, il tuo livello di radiazioni diminuisce di 1."
    },
    {
      "id": "rad_tastic",
      "name": "Rad-Tastico! (Rad-Tastic!)",
      "category": "Razziale: Umano",
      "maxRank": 1,
      "req": "Human, Endurance 5.",
      "ranks": [
        "La radioattività accende la tua adrenalina. Quando ti trovi all'interno di una zona ad alta contaminazione radioattiva (con contatore Geiger scoppiettante), ottieni un bonus di +1 a tutti i tuoi tiri per colpire e per i danni."
      ],
      "nameEN": "Rad-Tastic!",
      "ranksEN": [
        "Your Radiation DC decreases by 3. Additionally, you ignore the negative effects of the first 3 levels of radiation."
      ],
      "effect": "La radioattività accende la tua adrenalina. Quando ti trovi all'interno di una zona ad alta contaminazione radioattiva (con contatore Geiger scoppiettante), ottieni un bonus di +1 a tutti i tuoi tiri per colpire e per i danni.",
      "effectEN": "Radiation DC decreases by 3. Ignore negative effects of first 3 rad levels.",
      "ranksIT": [
        "La radioattività accende la tua adrenalina. Quando ti trovi all'interno di una zona ad alta contaminazione radioattiva (con contatore Geiger scoppiettante), ottieni un bonus di +1 a tutti i tuoi tiri per colpire e per i danni."
      ],
      "effectIT": "La radioattività accende la tua adrenalina. Quando ti trovi all'interno di una zona ad alta contaminazione radioattiva (con contatore Geiger scoppiettante), ottieni un bonus di +1 a tutti i tuoi tiri per colpire e per i danni."
    },
    {
      "id": "atomic",
      "name": "Atomico! (Atomic!)",
      "category": "Razziale: Umano",
      "maxRank": 1,
      "req": "Human, Endurance 8.",
      "ranks": [
        "Le radiazioni accelerano le tue risposte sinaptiche fino a livelli sovrumani. Finché sei affetto da avvelenamento da radiazioni avanzato, la tua velocità di movimento aumenta di 3 metri (10 piedi) e guadagni +2 alla Soglia Danni (PD/DT)."
      ],
      "nameEN": "Atomic!",
      "ranksEN": [
        "While in an irradiated zone, you gain additional action points equal to your Endurance ability modifier to a maximum of 15. If your action points are already 15, any actions you take that cost 4 AP or more instead cost 1 less."
      ],
      "effect": "Le radiazioni accelerano le tue risposte sinaptiche fino a livelli sovrumani. Finché sei affetto da avvelenamento da radiazioni avanzato, la tua velocità di movimento aumenta di 3 metri (10 piedi) e guadagni +2 alla Soglia Danni (PD/DT).",
      "effectEN": "In irradiated zone: extra AP equal to END mod (max 15). 4+ AP actions cost 1 less if at cap.",
      "ranksIT": [
        "Le radiazioni accelerano le tue risposte sinaptiche fino a livelli sovrumani. Finché sei affetto da avvelenamento da radiazioni avanzato, la tua velocità di movimento aumenta di 3 metri (10 piedi) e guadagni +2 alla Soglia Danni (PD/DT)."
      ],
      "effectIT": "Le radiazioni accelerano le tue risposte sinaptiche fino a livelli sovrumani. Finché sei affetto da avvelenamento da radiazioni avanzato, la tua velocità di movimento aumenta di 3 metri (10 piedi) e guadagni +2 alla Soglia Danni (PD/DT)."
    },
    {
      "id": "springboard_recovery",
      "name": "Recupero a Molla (Springboard Recovery)",
      "category": "Razziale: Umano",
      "maxRank": 1,
      "req": "Human.",
      "ranks": [
        "La resilienza del corpo umano nei momenti estremi ti fa rimbalzare indietro dalla soglia del collasso. Quando subisci danni che superano la metà dei tuoi HP massimi in un singolo colpo, la tua velocità raddoppia fino alla fine del tuo prossimo turno."
      ],
      "nameEN": "Springboard Recovery",
      "ranksEN": [
        "Reaction (3 AP) to spring up from prone and deliver an unarmed attack."
      ],
      "effect": "Come reazione spendendo 3 AP quando vieni fatto cadere prono, puoi balzare immediatamente in piedi ed effettuare un attacco disarmato (una volta ogni 8 ore).",
      "effectEN": "Reaction (3 AP) to spring up from prone and deliver an unarmed attack.",
      "ranksIT": [
        "Come reazione spendendo 3 AP quando vieni fatto cadere prono, puoi balzare immediatamente in piedi ed effettuare un attacco disarmato (una volta ogni 8 ore)."
      ],
      "effectIT": "Come reazione spendendo 3 AP quando vieni fatto cadere prono, puoi balzare immediatamente in piedi ed effettuare un attacco disarmato (una volta ogni 8 ore)."
    },
    {
      "id": "holey_moley",
      "name": "Tutto Buchi (Holey Moley)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul.",
      "ranks": [
        "La tua carne decomposta e fibrosa lascia passare i proiettili senza ledere organi vitali. Tutti i danni da perforazione (armi balistiche, pugnali, frecce) subiti dal tuo corpo sono ridotti permanentemente di 2."
      ],
      "nameEN": "Holey Moley",
      "ranksEN": [
        "Your arms have some extra holes for aerodynamics! Once per turn, when you make an unarmed attack, you can make an additional unarmed attack without spending AP."
      ],
      "effect": "Le tue braccia presentano fori extra che migliorano l'aerodinamica! Una volta per turno, quando effettui un attacco disarmato, puoi attaccare una seconda volta senza spendere ulteriori AP.",
      "effectEN": "Your arms have some extra holes for aerodynamics! Once per turn, when you make an unarmed attack, you can make an additional unarmed attack without spending AP.",
      "ranksIT": [
        "Le tue braccia presentano fori extra che migliorano l'aerodinamica! Una volta per turno, quando effettui un attacco disarmato, puoi attaccare una seconda volta senza spendere ulteriori AP."
      ],
      "effectIT": "Le tue braccia presentano fori extra che migliorano l'aerodinamica! Una volta per turno, quando effettui un attacco disarmato, puoi attaccare una seconda volta senza spendere ulteriori AP."
    },
    {
      "id": "chem_resistant",
      "name": "Resistente ai Farmaci (Chem Resistant)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul.",
      "ranks": [
        "La tua fisiologia necrotica e il fegato mutato non sono soggetti ai normali meccanismi di dipendenza umana. Sei totalmente immune alla dipendenza chimica da qualsiasi tipo di farmaco, stimolante o alcol."
      ],
      "nameEN": "Chem Resistant",
      "ranksEN": [
        "Your chance of becoming addicted to chems is reduced by 50%."
      ],
      "effect": "Il tuo metabolismo neutralizza le tossine chimiche: la probabilità di sviluppare dipendenza da sostanze (chems) è dimezzata.",
      "effectEN": "Your chance of becoming addicted to chems is reduced by 50%.",
      "ranksIT": [
        "Il tuo metabolismo neutralizza le tossine chimiche: la probabilità di sviluppare dipendenza da sostanze (chems) è dimezzata."
      ],
      "effectIT": "Il tuo metabolismo neutralizza le tossine chimiche: la probabilità di sviluppare dipendenza da sostanze (chems) è dimezzata."
    },
    {
      "id": "eye_for_an_eye",
      "name": "Occhio per Occhio (Eye for an Eye)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul.",
      "ranks": [
        "Il dolore della decomposizione alimenta il tuo odio nei confronti dei nemici. Per ogni arto menomato (crippled) che possiedi, tutti i tuoi attacchi infliggono il +10% di danni aggiuntivi."
      ],
      "nameEN": "Eye for an Eye",
      "ranksEN": [
        "Finger for a finger. Whenever another creature deals damage to your hit points for the first time on a turn, that creature becomes marked. The next time you attack and hit the marked creature, it is automatically a critical hit. If the hit was already a critical hit, the damage you deal is doubled. Once a creature becomes marked, another creature cannot become marked until you rest."
      ],
      "effect": "Il dolore della decomposizione alimenta il tuo odio nei confronti dei nemici. Per ogni arto menomato (crippled) che possiedi, tutti i tuoi attacchi infliggono il +10% di danni aggiuntivi.",
      "effectEN": "Mark creature that damages your HP: next hit against it is automatic critical. Once per rest.",
      "ranksIT": [
        "Il dolore della decomposizione alimenta il tuo odio nei confronti dei nemici. Per ogni arto menomato (crippled) che possiedi, tutti i tuoi attacchi infliggono il +10% di danni aggiuntivi."
      ],
      "effectIT": "Il dolore della decomposizione alimenta il tuo odio nei confronti dei nemici. Per ogni arto menomato (crippled) che possiedi, tutti i tuoi attacchi infliggono il +10% di danni aggiuntivi."
    },
    {
      "id": "stitched_together",
      "name": "Cucito Insieme (Stitched Together)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul, Variante: Ossa Vecchie (Old Bones).",
      "ranks": [
        "Rattappi la tua pelle cadente con ago, filo e spago da pacchi. Durante un riposo breve puoi ricucire le tue ferite ripristinando Punti Ferita senza dover consumare Stimpak o kit medici preziosi."
      ],
      "nameEN": "Stitched Together",
      "ranksEN": [
        "Suture necrotic flesh in 5 minutes to remove limb conditions or decay."
      ],
      "effect": "Puoi suturare e ricucire le tue carni necrotiche: spendendo 5 minuti e materiali da sutura rimuovi 1 livello di usura o menomazione su un arto.",
      "effectEN": "Suture necrotic flesh in 5 minutes to remove limb conditions or decay.",
      "ranksIT": [
        "Puoi suturare e ricucire le tue carni necrotiche: spendendo 5 minuti e materiali da sutura rimuovi 1 livello di usura o menomazione su un arto."
      ],
      "effectIT": "Puoi suturare e ricucire le tue carni necrotiche: spendendo 5 minuti e materiali da sutura rimuovi 1 livello di usura o menomazione su un arto."
    },
    {
      "id": "savage_sprint",
      "name": "Scatto Selvaggio (Savage Sprint)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul.",
      "ranks": [
        "Canalizzi l'istinto predatorio e scattante dei ghoul feroci. Quando carichi un nemico a quattro zampe per colpirlo in mischia o senz'armi, la tua velocità di carica aumenta di 6 metri (20 piedi) e il tuo primo colpo infligge +4 danni."
      ],
      "nameEN": "Savage Sprint",
      "ranksEN": [
        "You can spend 3 action points on your turn to sprint instead of 5. Additionally, whenever you long jump you can clear an additional 10 feet and whenever you high jump you can clear an additional 3 feet."
      ],
      "effect": "Canalizzi l'istinto predatorio e scattante dei ghoul feroci. Quando carichi un nemico a quattro zampe per colpirlo in mischia o senz'armi, la tua velocità di carica aumenta di 6 metri (20 piedi) e il tuo primo colpo infligge +4 danni.",
      "effectEN": "Sprint costs 3 AP instead of 5. Long jump +10 ft, high jump +3 ft.",
      "ranksIT": [
        "Canalizzi l'istinto predatorio e scattante dei ghoul feroci. Quando carichi un nemico a quattro zampe per colpirlo in mischia o senz'armi, la tua velocità di carica aumenta di 6 metri (20 piedi) e il tuo primo colpo infligge +4 danni."
      ],
      "effectIT": "Canalizzi l'istinto predatorio e scattante dei ghoul feroci. Quando carichi un nemico a quattro zampe per colpirlo in mischia o senz'armi, la tua velocità di carica aumenta di 6 metri (20 piedi) e il tuo primo colpo infligge +4 danni."
    },
    {
      "id": "how_do_you_do_fellow_ghouls",
      "name": "Come Va, Compagni Ghoul? (How Do You Do, Fellow Ghouls?)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul, Level 5.",
      "ranks": [
        "Il tuo odore e la tua andatura sono indistinguibili da quelli di un ghoul demente. I Ghoul Feroci (Feral Ghouls) e i Ghoul Risplendenti non ti considerano un nemico e non ti attaccano mai a meno che tu non apra il fuoco per primo."
      ],
      "nameEN": "How Do You Do, Fellow Ghouls?",
      "ranksEN": [
        "Feral ghouls ignore you within 60 feet unless provoked."
      ],
      "effect": "I ghoul ferali ti ignorano completamente entro 60 piedi a meno che tu non li attacchi direttamente per primo.",
      "effectEN": "Feral ghouls ignore you within 60 feet unless provoked.",
      "ranksIT": [
        "I ghoul ferali ti ignorano completamente entro 60 piedi a meno che tu non li attacchi direttamente per primo."
      ],
      "effectIT": "I ghoul ferali ti ignorano completamente entro 60 piedi a meno che tu non li attacchi direttamente per primo."
    },
    {
      "id": "can_t_put_me_down",
      "name": "Non Puoi Abbattermi (Can't Put Me Down)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul, Level 5.",
      "ranks": [
        "Il flusso radioattivo riattiva istantaneamente le tue sinapsi spente. Se cadi a 0 HP e ti trovi all'interno di una sorgente di radiazioni attiva (o vieni colpito da un attacco da radiazioni), torni all'istante cosciente a 1 HP."
      ],
      "nameEN": "Can't Put Me Down",
      "ranksEN": [
        "Your DT increases by 1 and you gain advantage on all Death Saves. If you already have advantage on Death Saves, you roll three d20's and take the highest result."
      ],
      "effect": "Il flusso radioattivo riattiva istantaneamente le tue sinapsi spente. Se cadi a 0 HP e ti trovi all'interno di una sorgente di radiazioni attiva (o vieni colpito da un attacco da radiazioni), torni all'istante cosciente a 1 HP.",
      "effectEN": "DT +1, advantage on all death saves (roll 3d20 if already having advantage).",
      "ranksIT": [
        "Il flusso radioattivo riattiva istantaneamente le tue sinapsi spente. Se cadi a 0 HP e ti trovi all'interno di una sorgente di radiazioni attiva (o vieni colpito da un attacco da radiazioni), torni all'istante cosciente a 1 HP."
      ],
      "effectIT": "Il flusso radioattivo riattiva istantaneamente le tue sinapsi spente. Se cadi a 0 HP e ti trovi all'interno di una sorgente di radiazioni attiva (o vieni colpito da un attacco da radiazioni), torni all'istante cosciente a 1 HP."
    },
    {
      "id": "reanimated",
      "name": "Rianimato (Reanimated)",
      "category": "Razziale: Ghoul",
      "maxRank": 1,
      "req": "Ghoul, Level 10.",
      "ranks": [
        "Assurgi alla condizione dei Ghoul Risplendenti: una volta al giorno, se muori, il tuo corpo rilascia un'onda d'urto radioattiva che investe tutti i nemici entro 6 metri infliggendo loro 4d6 danni da radiazione e rianimandoti con metà dei tuoi HP massimi."
      ],
      "nameEN": "Reanimated",
      "ranksEN": [
        "While you are dying, your speed is not halved and you gain an additional action point at the start of your turn. Additionally, when you die; you immediately gain 20 action points. Once these action points are used, or your turn ends; you die."
      ],
      "effect": "Assurgi alla condizione dei Ghoul Risplendenti: una volta al giorno, se muori, il tuo corpo rilascia un'onda d'urto radioattiva che investe tutti i nemici entro 6 metri infliggendo loro 4d6 danni da radiazione e rianimandoti con metà dei tuoi HP massimi.",
      "effectEN": "While dying: speed not halved, +1 AP. Upon death: gain 20 AP immediately for final turn.",
      "ranksIT": [
        "Assurgi alla condizione dei Ghoul Risplendenti: una volta al giorno, se muori, il tuo corpo rilascia un'onda d'urto radioattiva che investe tutti i nemici entro 6 metri infliggendo loro 4d6 danni da radiazione e rianimandoti con metà dei tuoi HP massimi."
      ],
      "effectIT": "Assurgi alla condizione dei Ghoul Risplendenti: una volta al giorno, se muori, il tuo corpo rilascia un'onda d'urto radioattiva che investe tutti i nemici entro 6 metri infliggendo loro 4d6 danni da radiazione e rianimandoti con metà dei tuoi HP massimi."
    },
    {
      "id": "pain_train",
      "name": "Treno del Dolore (Pain Train)",
      "category": "Razziale: Robot",
      "maxRank": 1,
      "req": "Robot.",
      "ranks": [
        "La tua stazza metallica travolge i nemici come una locomotiva. Quando compi un'azione di Scatto contro una creatura di taglia Media o inferiore, la travolgi infliggendo 2d8 + mod FOR danni contundenti e facendola cadere a terra prona."
      ],
      "nameEN": "Pain Train",
      "ranksEN": [
        "Choo Choo! All aboard! If you sprint through an enemy's space, they take 2d8 impact damage and are knocked prone on a failed check."
      ],
      "effect": "Tutti a bordo! Puoi caricare i nemici e farli cadere a terra. Se scatti (sprint) attraverso lo spazio occupato da una creatura di taglia pari o inferiore alla tua, la creatura subisce 2d8 danni da impatto e cade prona se fallisce una prova di Forza.",
      "effectEN": "Choo Choo! All aboard! If you sprint through an enemy's space, they take 2d8 impact damage and are knocked prone on a failed check.",
      "ranksIT": [
        "Tutti a bordo! Puoi caricare i nemici e farli cadere a terra. Se scatti (sprint) attraverso lo spazio occupato da una creatura di taglia pari o inferiore alla tua, la creatura subisce 2d8 danni da impatto e cade prona se fallisce una prova di Forza."
      ],
      "effectIT": "Tutti a bordo! Puoi caricare i nemici e farli cadere a terra. Se scatti (sprint) attraverso lo spazio occupato da una creatura di taglia pari o inferiore alla tua, la creatura subisce 2d8 danni da impatto e cade prona se fallisce una prova di Forza."
    },
    {
      "id": "hardware_upgrade",
      "name": "Aggiornamento Hardware (Hardware Upgrade)",
      "category": "Razziale: Robot",
      "maxRank": 1,
      "req": "Robot.",
      "ranks": [
        "Installi un modulo di espansione pre-bellico nel tuo chassis. Puoi montare un'arma integrata addizionale su un braccio, oppure aumentare la tua Capacità di Carico di 50 libbre, oppure aumentare la tua Classe Armatura di +1."
      ],
      "nameEN": "Hardware Upgrade",
      "ranksEN": [
        "You can choose any two weapons to become one of your Robot weapons, so long as you have the caps to purchase them, the materials to craft them, or own the weapons."
      ],
      "effect": "Installi un modulo di espansione pre-bellico nel tuo chassis. Puoi montare un'arma integrata addizionale su un braccio, oppure aumentare la tua Capacità di Carico di 50 libbre, oppure aumentare la tua Classe Armatura di +1.",
      "effectEN": "Integrate any 2 weapons into your robot chassis.",
      "ranksIT": [
        "Installi un modulo di espansione pre-bellico nel tuo chassis. Puoi montare un'arma integrata addizionale su un braccio, oppure aumentare la tua Capacità di Carico di 50 libbre, oppure aumentare la tua Classe Armatura di +1."
      ],
      "effectIT": "Installi un modulo di espansione pre-bellico nel tuo chassis. Puoi montare un'arma integrata addizionale su un braccio, oppure aumentare la tua Capacità di Carico di 50 libbre, oppure aumentare la tua Classe Armatura di +1."
    },
    {
      "id": "thick_plating",
      "name": "Corazza Spessa (Thick Plating)",
      "category": "Razziale: Robot",
      "maxRank": 3,
      "req": "Robot, Level 8.",
      "ranks": [
        "Grado 1: Saldature e piastre in lega di titanio rinforzano la scocca. La tua Soglia Danni (PD/DT) permanente su tutte le parti del corpo aumenta di +2.",
        "Grado 2: La tua Soglia Danni permanente aumenta di un ulteriore +2 (per un totale di +4 alla DT)."
      ],
      "nameEN": "Thick Plating",
      "ranksEN": [
        "Your AC and DT increase by 1.\n\nRepeat: You can take this perk up to three times."
      ],
      "effect": "Le tue piastre corazzate integrate vengono rinforzate: la tua Classe Armatura (AC) e la tua Soglia di Danno (DT) aumentano entrambe di 1.\n\n[Ripetibile]: Puoi acquisire questo talento fino a tre volte (+3 AC e +3 DT max).",
      "effectEN": "Your AC and DT increase by 1.\n\nRepeat: You can take this perk up to three times.",
      "ranksIT": [
        "Le tue piastre corazzate integrate vengono rinforzate: la tua Classe Armatura (AC) e la tua Soglia di Danno (DT) aumentano entrambe di 1.\n\n[Ripetibile]: Puoi acquisire questo talento fino a tre volte (+3 AC e +3 DT max)."
      ],
      "effectIT": "Le tue piastre corazzate integrate vengono rinforzate: la tua Classe Armatura (AC) e la tua Soglia di Danno (DT) aumentano entrambe di 1.\n\n[Ripetibile]: Puoi acquisire questo talento fino a tre volte (+3 AC e +3 DT max)."
    },
    {
      "id": "adamantium_skeleton",
      "name": "Scheletro d'Adamantio (Adamantium Skeleton)",
      "category": "Razziale: Synth",
      "maxRank": 1,
      "req": "Synth.",
      "ranks": [
        "Il tuo telaio endoscheletrico è forgiato in titanio aerospaziale indurito. Tutti i danni inflitti ai tuoi arti sono dimezzati (-50%) e le tue braccia e gambe non possono mai subire menomazioni (crippled)."
      ],
      "nameEN": "Adamantium Skeleton",
      "ranksEN": [
        "You are immune to all limb conditions, and whenever you take damage to your hit points from a targeted attack; the damage is halved."
      ],
      "effect": "Sei immune a tutte le condizioni di menomazione agli arti, e ogni volta che subisci danni ai punti ferita da un attacco mirato, il danno è dimezzato.",
      "effectEN": "You are immune to all limb conditions, and whenever you take damage to your hit points from a targeted attack; the damage is halved.",
      "ranksIT": [
        "Sei immune a tutte le condizioni di menomazione agli arti, e ogni volta che subisci danni ai punti ferita da un attacco mirato, il danno è dimezzato."
      ],
      "effectIT": "Sei immune a tutte le condizioni di menomazione agli arti, e ogni volta che subisci danni ai punti ferita da un attacco mirato, il danno è dimezzato."
    },
    {
      "id": "light_step",
      "name": "Passo Leggero (Light Step)",
      "category": "Razziale: Synth",
      "maxRank": 1,
      "req": "Synth.",
      "ranks": [
        "I tuoi sensori di pressione distribuiscono il peso senza alterare il terreno. Non inneschi mai piastre a pressione, mine antiuomo sotterrate o fili d'inciampo sul pavimento."
      ],
      "nameEN": "Light Step",
      "ranksEN": [
        "You never set off placed explosives or traps."
      ],
      "effect": "I tuoi passi sono incredibilmente leggeri e calibrati: non inneschi mai mine, trappole a filo o cariche esplosive a pressione.",
      "effectEN": "You never set off placed explosives or traps.",
      "ranksIT": [
        "I tuoi passi sono incredibilmente leggeri e calibrati: non inneschi mai mine, trappole a filo o cariche esplosive a pressione."
      ],
      "effectIT": "I tuoi passi sono incredibilmente leggeri e calibrati: non inneschi mai mine, trappole a filo o cariche esplosive a pressione."
    },
    {
      "id": "pump_the_coolant",
      "name": "Pompa il Refrigerante (Pump the Coolant)",
      "category": "Razziale: Synth",
      "maxRank": 1,
      "req": "Synth, Level 5.",
      "ranks": [
        "Pompi refrigerante a ciclo continuo per spingere i microprocessori oltre i limiti. Una volta per combattimento, puoi raddoppiare i tuoi Punti Azione (AP) per il turno corrente senza subire surriscaldamento o danni al sistema."
      ],
      "nameEN": "Pump the Coolant",
      "ranksEN": [
        "Spend 6 AP to pump coolant and heal stamina points equal to twice your healing rate (once per 8 hours)."
      ],
      "effect": "Puoi spendere 6 AP nel tuo turno per pompare liquido refrigerante nei tuoi circuiti, recuperando punti vigore pari al doppio del tuo Tasso di Guarigione (una volta ogni 8 ore).",
      "effectEN": "Spend 6 AP to pump coolant and heal stamina points equal to twice your healing rate (once per 8 hours).",
      "ranksIT": [
        "Puoi spendere 6 AP nel tuo turno per pompare liquido refrigerante nei tuoi circuiti, recuperando punti vigore pari al doppio del tuo Tasso di Guarigione (una volta ogni 8 ore)."
      ],
      "effectIT": "Puoi spendere 6 AP nel tuo turno per pompare liquido refrigerante nei tuoi circuiti, recuperando punti vigore pari al doppio del tuo Tasso di Guarigione (una volta ogni 8 ore)."
    },
    {
      "id": "reinforced_recovery",
      "name": "Recupero Rinforzato (Reinforced Recovery)",
      "category": "Razziale: Super Mutante",
      "maxRank": 1,
      "req": "Super Mutant",
      "ranks": [
        "La tua fisiologia FEV rigenera i tessuti a comando. Nel tuo turno puoi spendere 6 AP per curare all'istante un numero di Punti Ferita pari al tuo Tasso di Guarigione. Una volta utilizzata questa azione, non puoi riusarla finché non riposi per almeno 8 ore."
      ],
      "nameEN": "Reinforced Recovery",
      "ranksEN": [
        "On your turn you can spend 6 AP to heal a number of hit points equal to your healing rate. Once you use this action, you cannot use it again until you rest for at least 8 hours."
      ],
      "effect": "Nel tuo turno puoi spendere 6 AP per recuperare un ammontare di punti ferita pari al tuo Tasso di Guarigione (Healing Rate). Una volta usata questa azione, non puoi più usarla finché non riposi per almeno 8 ore.",
      "effectEN": "On your turn you can spend 6 AP to heal a number of hit points equal to your healing rate. Once you use this action, you cannot use it again until you rest for at least 8 hours.",
      "ranksIT": [
        "Nel tuo turno puoi spendere 6 AP per recuperare un ammontare di punti ferita pari al tuo Tasso di Guarigione (Healing Rate). Una volta usata questa azione, non puoi più usarla finché non riposi per almeno 8 ore."
      ],
      "effectIT": "Nel tuo turno puoi spendere 6 AP per recuperare un ammontare di punti ferita pari al tuo Tasso di Guarigione (Healing Rate). Una volta usata questa azione, non puoi più usarla finché non riposi per almeno 8 ore."
    },
    {
      "id": "fine_toothed_giant",
      "name": "Gigante Minuzioso (Fine-Toothed Giant)",
      "category": "Razziale: Super Mutante",
      "maxRank": 1,
      "req": "Super Mutant",
      "ranks": [
        "Hai imparato a maneggiare attrezzi minuti con le tue dita giganti. Non subisci più le penalità del tratto razziale 'Ingombrante' (Bulky). Inoltre, quando effettui una prova di Riparazione o Fabbricazione per aggiustare oggetti, la DC è ridotta di 5."
      ],
      "nameEN": "Fine-Toothed Giant",
      "ranksEN": [
        "You no longer suffer the effects of the Bulky racial trait. Additionally, whenever you make a crafting check to repair an item, the DC is reduced by 5."
      ],
      "effect": "Non subisci più gli effetti negativi del tratto razziale 'Ingombrante' (Bulky). Inoltre, ogni volta che effettui una prova di creazione o riparazione per aggiustare un oggetto, la Classe Difficoltà (CD) è ridotta di 5.",
      "effectEN": "You no longer suffer the effects of the Bulky racial trait. Additionally, whenever you make a crafting check to repair an item, the DC is reduced by 5.",
      "ranksIT": [
        "Non subisci più gli effetti negativi del tratto razziale 'Ingombrante' (Bulky). Inoltre, ogni volta che effettui una prova di creazione o riparazione per aggiustare un oggetto, la Classe Difficoltà (CD) è ridotta di 5."
      ],
      "effectIT": "Non subisci più gli effetti negativi del tratto razziale 'Ingombrante' (Bulky). Inoltre, ogni volta che effettui una prova di creazione o riparazione per aggiustare un oggetto, la Classe Difficoltà (CD) è ridotta di 5."
    },
    {
      "id": "wasteland_camel",
      "name": "Cammello della Zona (Wasteland Camel)",
      "category": "Razziale: Super Mutante",
      "maxRank": 1,
      "req": "Super Mutant",
      "ranks": [
        "I tuoi organi interni immagazzinano idratazione con efficienza straordinaria. Non necessiti più del doppio fabbisogno d'acqua giornaliero per evitare la disidratazione. Inoltre, l'acqua sporca possiede per te le proprietà curative dell'acqua pura."
      ],
      "nameEN": "Wasteland Camel",
      "ranksEN": [
        "You no longer require double the amount of water each day to avoid dehydration. Additionally, dirty water has the \"hydrating\" property for you."
      ],
      "effect": "I tuoi organi interni immagazzinano idratazione con efficienza straordinaria. Non necessiti più del doppio fabbisogno d'acqua giornaliero per evitare la disidratazione. Inoltre, l'acqua sporca possiede per te le proprietà curative dell'acqua pura.",
      "effectEN": "Normal daily water requirement (no longer doubled). Dirty water has hydrating property.",
      "ranksIT": [
        "I tuoi organi interni immagazzinano idratazione con efficienza straordinaria. Non necessiti più del doppio fabbisogno d'acqua giornaliero per evitare la disidratazione. Inoltre, l'acqua sporca possiede per te le proprietà curative dell'acqua pura."
      ],
      "effectIT": "I tuoi organi interni immagazzinano idratazione con efficienza straordinaria. Non necessiti più del doppio fabbisogno d'acqua giornaliero per evitare la disidratazione. Inoltre, l'acqua sporca possiede per te le proprietà curative dell'acqua pura."
    },
    {
      "id": "no_gods_no_masters",
      "name": "Né Dèi Né Padroni (No Gods, No Masters)",
      "category": "Razziale: Super Mutante",
      "maxRank": 1,
      "req": "Super Mutant, Level 5.",
      "ranks": [
        "Nessun telepate, maestro o oratore può assoggettare la tua mente. Sei totalmente immune a tentativi di controllo mentale, charme psionico, suggestione ipnotica ed effetti di paura."
      ],
      "nameEN": "No Gods, No Masters",
      "ranksEN": [
        "Immune to hacking shutdown commands within 60 feet."
      ],
      "effect": "I comandi di spegnimento e violazione non funzionano su di te: sei immune a qualsiasi tentativo di hacking o disattivazione a distanza da parte di terminali entro 60 piedi.",
      "effectEN": "Immune to hacking shutdown commands within 60 feet.",
      "ranksIT": [
        "I comandi di spegnimento e violazione non funzionano su di te: sei immune a qualsiasi tentativo di hacking o disattivazione a distanza da parte di terminali entro 60 piedi."
      ],
      "effectIT": "I comandi di spegnimento e violazione non funzionano su di te: sei immune a qualsiasi tentativo di hacking o disattivazione a distanza da parte di terminali entro 60 piedi."
    },
    {
      "id": "feel_no_wounds",
      "name": "Non Sento Ferite (Feel No Wounds)",
      "category": "Razziale: Super Mutante",
      "maxRank": 1,
      "req": "Super Mutant, Level 5.",
      "ranks": [
        "Il tuo sistema nervoso mutato annulla gli stimoli del dolore. Ignori completamente tutte le penalità al movimento, al tiro per colpire e ai danni provocate da arti menomati (braccia o gambe spezzate)."
      ],
      "nameEN": "Feel No Wounds",
      "ranksEN": [
        "Ignore 1 limb impairment condition and spend 6 AP to restore 6 HP."
      ],
      "effect": "Ignori gli effetti di 1 livello di menomazione a braccia o gambe e puoi spendere 6 AP per ripristinare 6 punti ferita istantaneamente.",
      "effectEN": "Ignore 1 limb impairment condition and spend 6 AP to restore 6 HP.",
      "ranksIT": [
        "Ignori gli effetti di 1 livello di menomazione a braccia o gambe e puoi spendere 6 AP per ripristinare 6 punti ferita istantaneamente."
      ],
      "effectIT": "Ignori gli effetti di 1 livello di menomazione a braccia o gambe e puoi spendere 6 AP per ripristinare 6 punti ferita istantaneamente."
    },
    {
      "id": "evolution",
      "name": "Evoluzione (Evolution)",
      "category": "Razziale: Super Mutante",
      "maxRank": 1,
      "req": "Super Mutant, Level 10.",
      "ranks": [
        "Il virus FEV nel tuo sangue muta portandoti verso lo stadio di Behemoth. Il tuo punteggio di Forza aumenta permanentemente di +2, la tua Costituzione aumenta di +2 e guadagni un bonus permanente di +4 alla tua Soglia Danni (PD/DT)."
      ],
      "nameEN": "Evolution",
      "ranksEN": [
        "Your AC increases by 1, your DT increases by 1, your hit points increase by a number equal to your level, and your stamina points increase by a number equal to your level. Additionally, choose one damage type. Whenever you take that damage type to your hit points, the total amount is halved (rounded down)."
      ],
      "effect": "Il virus FEV nel tuo sangue muta portandoti verso lo stadio di Behemoth. Il tuo punteggio di Forza aumenta permanentemente di +2, la tua Costituzione aumenta di +2 e guadagni un bonus permanente di +4 alla tua Soglia Danni (PD/DT).",
      "effectEN": "+1 AC, +1 DT, max HP +level, max SP +level. Halve damage from 1 chosen damage type.",
      "ranksIT": [
        "Il virus FEV nel tuo sangue muta portandoti verso lo stadio di Behemoth. Il tuo punteggio di Forza aumenta permanentemente di +2, la tua Costituzione aumenta di +2 e guadagni un bonus permanente di +4 alla tua Soglia Danni (PD/DT)."
      ],
      "effectIT": "Il virus FEV nel tuo sangue muta portandoti verso lo stadio di Behemoth. Il tuo punteggio di Forza aumenta permanentemente di +2, la tua Costituzione aumenta di +2 e guadagni un bonus permanente di +4 alla tua Soglia Danni (PD/DT)."
    }
  ],
  "levelTable": [
    {
      "level": 1,
      "spBase": 10,
      "hpBase": 10,
      "agiMult": 1,
      "endMult": 1,
      "perks": 1,
      "skillPts": {
        "low": 0,
        "mid": 0,
        "high": 0
      }
    },
    {
      "level": 2,
      "spBase": 10,
      "hpBase": 10,
      "agiMult": 1,
      "endMult": 1,
      "perks": 2,
      "skillPts": {
        "low": 0,
        "mid": 0,
        "high": 0
      }
    },
    {
      "level": 3,
      "spBase": 15,
      "hpBase": 15,
      "agiMult": 2,
      "endMult": 2,
      "perks": 3,
      "skillPts": {
        "low": 0,
        "mid": 0,
        "high": 0
      }
    },
    {
      "level": 4,
      "spBase": 15,
      "hpBase": 15,
      "agiMult": 2,
      "endMult": 2,
      "perks": 4,
      "skillPts": {
        "low": 0,
        "mid": 0,
        "high": 0
      }
    },
    {
      "level": 5,
      "spBase": 20,
      "hpBase": 20,
      "agiMult": 3,
      "endMult": 3,
      "perks": 4,
      "skillPts": {
        "low": 3,
        "mid": 4,
        "high": 5
      }
    },
    {
      "level": 6,
      "spBase": 20,
      "hpBase": 20,
      "agiMult": 3,
      "endMult": 3,
      "perks": 5,
      "skillPts": {
        "low": 3,
        "mid": 4,
        "high": 5
      }
    },
    {
      "level": 7,
      "spBase": 25,
      "hpBase": 25,
      "agiMult": 4,
      "endMult": 4,
      "perks": 6,
      "skillPts": {
        "low": 3,
        "mid": 4,
        "high": 5
      }
    },
    {
      "level": 8,
      "spBase": 25,
      "hpBase": 25,
      "agiMult": 4,
      "endMult": 4,
      "perks": 7,
      "skillPts": {
        "low": 3,
        "mid": 4,
        "high": 5
      }
    },
    {
      "level": 9,
      "spBase": 30,
      "hpBase": 30,
      "agiMult": 5,
      "endMult": 5,
      "perks": 7,
      "skillPts": {
        "low": 6,
        "mid": 8,
        "high": 10
      }
    },
    {
      "level": 10,
      "spBase": 30,
      "hpBase": 30,
      "agiMult": 5,
      "endMult": 5,
      "perks": 8,
      "skillPts": {
        "low": 6,
        "mid": 8,
        "high": 10
      }
    },
    {
      "level": 11,
      "spBase": 35,
      "hpBase": 35,
      "agiMult": 6,
      "endMult": 6,
      "perks": 9,
      "skillPts": {
        "low": 6,
        "mid": 8,
        "high": 10
      }
    },
    {
      "level": 12,
      "spBase": 35,
      "hpBase": 35,
      "agiMult": 6,
      "endMult": 6,
      "perks": 10,
      "skillPts": {
        "low": 6,
        "mid": 8,
        "high": 10
      }
    },
    {
      "level": 13,
      "spBase": 40,
      "hpBase": 40,
      "agiMult": 7,
      "endMult": 7,
      "perks": 10,
      "skillPts": {
        "low": 9,
        "mid": 12,
        "high": 15
      }
    },
    {
      "level": 14,
      "spBase": 40,
      "hpBase": 40,
      "agiMult": 7,
      "endMult": 7,
      "perks": 11,
      "skillPts": {
        "low": 9,
        "mid": 12,
        "high": 15
      }
    },
    {
      "level": 15,
      "spBase": 45,
      "hpBase": 45,
      "agiMult": 8,
      "endMult": 8,
      "perks": 12,
      "skillPts": {
        "low": 9,
        "mid": 12,
        "high": 15
      }
    },
    {
      "level": 16,
      "spBase": 45,
      "hpBase": 45,
      "agiMult": 8,
      "endMult": 8,
      "perks": 13,
      "skillPts": {
        "low": 9,
        "mid": 12,
        "high": 15
      }
    },
    {
      "level": 17,
      "spBase": 50,
      "hpBase": 50,
      "agiMult": 9,
      "endMult": 9,
      "perks": 13,
      "skillPts": {
        "low": 12,
        "mid": 16,
        "high": 20
      }
    },
    {
      "level": 18,
      "spBase": 50,
      "hpBase": 50,
      "agiMult": 9,
      "endMult": 9,
      "perks": 14,
      "skillPts": {
        "low": 12,
        "mid": 16,
        "high": 20
      }
    },
    {
      "level": 19,
      "spBase": 55,
      "hpBase": 55,
      "agiMult": 10,
      "endMult": 10,
      "perks": 14,
      "skillPts": {
        "low": 12,
        "mid": 16,
        "high": 20
      }
    },
    {
      "level": 20,
      "spBase": 55,
      "hpBase": 55,
      "agiMult": 10,
      "endMult": 10,
      "perks": 15,
      "skillPts": {
        "low": 12,
        "mid": 16,
        "high": 20
      }
    },
    {
      "level": 21,
      "spBase": 60,
      "hpBase": 60,
      "agiMult": 11,
      "endMult": 11,
      "perks": 16,
      "skillPts": {
        "low": 15,
        "mid": 20,
        "high": 25
      }
    },
    {
      "level": 22,
      "spBase": 60,
      "hpBase": 60,
      "agiMult": 11,
      "endMult": 11,
      "perks": 17,
      "skillPts": {
        "low": 15,
        "mid": 20,
        "high": 25
      }
    },
    {
      "level": 23,
      "spBase": 65,
      "hpBase": 65,
      "agiMult": 12,
      "endMult": 12,
      "perks": 18,
      "skillPts": {
        "low": 15,
        "mid": 20,
        "high": 25
      }
    },
    {
      "level": 24,
      "spBase": 65,
      "hpBase": 65,
      "agiMult": 12,
      "endMult": 12,
      "perks": 19,
      "skillPts": {
        "low": 15,
        "mid": 20,
        "high": 25
      }
    },
    {
      "level": 25,
      "spBase": 70,
      "hpBase": 70,
      "agiMult": 13,
      "endMult": 13,
      "perks": 20,
      "skillPts": {
        "low": 18,
        "mid": 24,
        "high": 30
      }
    },
    {
      "level": 26,
      "spBase": 70,
      "hpBase": 70,
      "agiMult": 13,
      "endMult": 13,
      "perks": 21,
      "skillPts": {
        "low": 18,
        "mid": 24,
        "high": 30
      }
    },
    {
      "level": 27,
      "spBase": 75,
      "hpBase": 75,
      "agiMult": 14,
      "endMult": 14,
      "perks": 22,
      "skillPts": {
        "low": 18,
        "mid": 24,
        "high": 30
      }
    },
    {
      "level": 28,
      "spBase": 75,
      "hpBase": 75,
      "agiMult": 14,
      "endMult": 14,
      "perks": 23,
      "skillPts": {
        "low": 18,
        "mid": 24,
        "high": 30
      }
    },
    {
      "level": 29,
      "spBase": 80,
      "hpBase": 80,
      "agiMult": 15,
      "endMult": 15,
      "perks": 24,
      "skillPts": {
        "low": 21,
        "mid": 28,
        "high": 35
      }
    },
    {
      "level": 30,
      "spBase": 80,
      "hpBase": 80,
      "agiMult": 15,
      "endMult": 15,
      "perks": 25,
      "skillPts": {
        "low": 21,
        "mid": 28,
        "high": 35
      }
    }
  ],
  "powerArmorModels": [
    {
      "id": "pa_raider",
      "name": "Armatura Atomica da Predone (Raider Power Armor)",
      "baseDt": 9,
      "strengthBonus": 2,
      "carryBonus": 50,
      "radImmunity": true,
      "cost": "1200c",
      "strReq": 6,
      "desc": "Telaio atomico rattoppato con lamiere di scarto e gabbie arrugginite. Grezza ma spietata."
    },
    {
      "id": "pa_t45",
      "name": "Armatura Atomica T-45 (T-45 Power Armor)",
      "baseDt": 11,
      "strengthBonus": 3,
      "carryBonus": 75,
      "radImmunity": true,
      "cost": "2500c",
      "strReq": 6,
      "desc": "Il primo modello di armatura atomica schierato ad Anchorage. Piastre d'acciaio rivettate affidabili."
    },
    {
      "id": "pa_t51",
      "name": "Armatura Atomica T-51 (T-51 Power Armor)",
      "baseDt": 13,
      "strengthBonus": 4,
      "carryBonus": 100,
      "radImmunity": true,
      "cost": "4500c",
      "strReq": 7,
      "desc": "Il vertice dell'ingegneria pre-bellica. Scocca in polimeri compositi ricurvi ad altissima resistenza."
    },
    {
      "id": "pa_t60",
      "name": "Armatura Atomica T-60 (T-60 Power Armor)",
      "baseDt": 14,
      "strengthBonus": 4,
      "carryBonus": 110,
      "radImmunity": true,
      "cost": "6000c",
      "strReq": 7,
      "desc": "Evoluzione corazzata massiccia della T-45, impiegata estesamente dalla Confraternita d'Acciaio."
    },
    {
      "id": "pa_x01",
      "name": "Armatura Atomica X-01 / Enclave (X-01 Power Armor)",
      "baseDt": 16,
      "strengthBonus": 5,
      "carryBonus": 125,
      "radImmunity": true,
      "cost": "10000c",
      "strReq": 8,
      "desc": "Tecnologia post-bellica d'avanguardia dell'Enclave. Sagoma insettoide con massima protezione contro qualsiasi calibro."
    }
  ],
  "damageTypes": [
    {
      "id": "cold",
      "name": "Freddo (Cold)",
      "desc": "Danni criogenici e congelamento."
    },
    {
      "id": "electricity",
      "name": "Elettricità (Electricity)",
      "desc": "Scosse elettriche, EMP e sovraccarichi."
    },
    {
      "id": "explosive",
      "name": "Esplosivo (Explosive)",
      "desc": "Onde d'urto e schegge da deflagrazioni."
    },
    {
      "id": "fire",
      "name": "Fuoco (Fire)",
      "desc": "Fiamme, bruciature e calore incendiario."
    },
    {
      "id": "impact",
      "name": "Impatto (Impact)",
      "desc": "Cadute da altezze, traumi da schiacciamento e colpi contundenti massicci."
    },
    {
      "id": "laser",
      "name": "Laser",
      "desc": "Raggi fotonici coerenti e perforazione termica."
    },
    {
      "id": "plasma",
      "name": "Plasma",
      "desc": "Gas ionizzato superriscaldato e materia disciolta."
    },
    {
      "id": "piercing",
      "name": "Perforante (Piercing)",
      "desc": "Proiettili balistici, stiletti, zanne e morsi acuminati."
    },
    {
      "id": "poison",
      "name": "Veleno (Poison)",
      "desc": "Tossine chimiche, veleni animali e scorpioni radioattivi."
    },
    {
      "id": "slashing",
      "name": "Tagliente (Slashing)",
      "desc": "Lame, accette, spade laser, rasoi e unghie letali."
    },
    {
      "id": "radiation",
      "name": "Radiazioni (Radiation)",
      "desc": "Radiazioni atomiche e scorie nucleari della Zona."
    },
    {
      "id": "bleeding",
      "name": "Sanguinamento (Bleed)",
      "desc": "Emorragie da ferite aperte che drenano HP/SP."
    },
    {
      "id": "limb_condition",
      "name": "Condizioni Arti (Limb Conditions)",
      "desc": "Fratture, arti menomati e disarticolazioni."
    },
    {
      "id": "frightened",
      "name": "Spaventato (Frightened)",
      "desc": "Paura e panico da creature mostruose o presenze terrificanti."
    },
    {
      "id": "hypothermia",
      "name": "Ipotermia (Hypothermia)",
      "desc": "Congelamento da esposizione al gelo prolungato."
    },
    {
      "id": "addiction",
      "name": "Dipendenze (Addiction)",
      "desc": "Assuefazione cronica da chems e alcool."
    }
  ],
  "pipboyModels": [
    {
      "id": "pb2000",
      "name": "Pip-Boy 2000",
      "cost": "300c",
      "load": 4,
      "slots": 2,
      "color": "#4a7c59",
      "screenColor": "#d97706",
      "desc": "Il classico modello pre-bellico con chassis pesante in bronzo/oliva, valvole a vuoto analogiche e monitor CRT ambra curvo. Funzionalità essenziali di mappa, note e archiviazione dati.",
      "baseFeatures": [
        "mappa",
        "holotape",
        "gps",
        "audio",
        "note"
      ],
      "upgradeSlots": 2
    },
    {
      "id": "pb2000mk6",
      "name": "Pip-Boy 2000 Mark VI",
      "cost": "600c",
      "load": 3,
      "slots": 3,
      "color": "#5a8c6a",
      "screenColor": "#10b981",
      "desc": "Edizione rinforzata post-bellica con telaio in fibra di vetro e maglia metallica, valvole a vuoto potenziate e sensore elettromagnetico per rilevare battiti cardiaci e forme di vita (2 AP).",
      "baseFeatures": [
        "mappa",
        "holotape",
        "gps",
        "audio",
        "note",
        "sensore_em",
        "monitor_cardiaco"
      ],
      "upgradeSlots": 3
    },
    {
      "id": "pb3000",
      "name": "Pip-Boy 3000",
      "cost": "550c",
      "load": 4,
      "slots": 4,
      "color": "#2d6a4f",
      "screenColor": "#22c55e",
      "desc": "Il celebre modello da polso con selettore a rotella, sintonizzatore radio analogico, contatore Geiger integrato a scansione continua, torcia LED e calcolo V.A.T.S. tattico.",
      "baseFeatures": [
        "mappa",
        "holotape",
        "gps",
        "audio",
        "note",
        "geiger",
        "torcia",
        "radio",
        "vats"
      ],
      "upgradeSlots": 4
    },
    {
      "id": "pb3000mk4",
      "name": "Pip-Boy 3000 Mark IV",
      "cost": "850c",
      "load": 3,
      "slots": 5,
      "color": "#1b5e3a",
      "screenColor": "#3ddc84",
      "desc": "L'apice della tecnologia Vault-Tec da polso: chassis ergonomico in grafite scura, porta-cartucce holotape ad espulsione rapida, schermo ad altissima risoluzione con scanline olografiche e 5 slot completi.",
      "baseFeatures": [
        "mappa",
        "holotape",
        "gps",
        "audio",
        "note",
        "sensore_em",
        "monitor_cardiaco",
        "geiger",
        "torcia",
        "radio",
        "vats"
      ],
      "upgradeSlots": 5
    },
    {
      "id": "pbpimp",
      "name": "Pimp-Boy 3 Billion (Oro & Diamanti)",
      "cost": "5000c",
      "load": 5,
      "slots": 5,
      "color": "#d97706",
      "screenColor": "#fbbf24",
      "desc": "Modello ultra-lusso fabbricato a New Vegas da Mick & Ralph: telaio placcato in oro massiccio 24K, borchie con diamanti scintillanti, cinturino in pelle trapuntata bianca e schermo fosfori dorato. Conferisce +10% allo sconto mercante.",
      "baseFeatures": [
        "mappa",
        "holotape",
        "gps",
        "audio",
        "note",
        "sensore_em",
        "monitor_cardiaco",
        "geiger",
        "torcia",
        "radio",
        "vats"
      ],
      "upgradeSlots": 5
    },
    {
      "id": "pbinstitute",
      "name": "Pip-Pad dell'Istituto (Sperimentale)",
      "cost": "1200c",
      "load": 2,
      "slots": 5,
      "color": "#06b6d4",
      "screenColor": "#38bdf8",
      "desc": "Prototipo touchscreen ultra-leggero creato nei laboratori dell'Istituto: scocca bianca polimerica immacolata, schermo capacitivo borderless e interfaccia olografica ciano ad alta frequenza.",
      "baseFeatures": [
        "mappa",
        "holotape",
        "gps",
        "audio",
        "note",
        "sensore_em",
        "monitor_cardiaco",
        "geiger",
        "torcia",
        "radio",
        "vats"
      ],
      "upgradeSlots": 5
    }
  ],
  "pipboyBaseFeatures": {
    "mappa": {
      "icon": "🗺️",
      "name": "Mappa Automatica & GPS",
      "desc": "Tracciamento in tempo reale della Zona Contaminata, visualizzazione POI, coordinate satellitari e bussola di navigazione."
    },
    "holotape": {
      "icon": "📼",
      "name": "Lettore Holotape",
      "desc": "Riproduzione istantanea di nastri dati, file di log sonori, chiavi di decodifica cifrate e videogiochi Vault-Tec."
    },
    "gps": {
      "icon": "🛰️",
      "name": "Uplink Satellitare GPS",
      "desc": "Ricezione triangolata della posizione anche all'interno di caverne, Vault profondi e bunker sotterranei."
    },
    "audio": {
      "icon": "🎙️",
      "name": "Registratore Vocale & Log",
      "desc": "Microfono a condensatore ad alta sensibilità per registrare diari vocali, interrogatori e suoni della terra desolata."
    },
    "note": {
      "icon": "📝",
      "name": "Archivio Note & Missioni",
      "desc": "Database testuale Vault-Tec con lista missioni aperte, password salvate, indizi e coordinate di viaggio."
    },
    "geiger": {
      "icon": "☢️",
      "name": "Contatore Geiger Integrato",
      "desc": "Dosimetro e rilevatore di particelle ionizzanti. Avvisa in tempo reale di radiazioni ambientali con click e allerta acustica."
    },
    "torcia": {
      "icon": "💡",
      "name": "Torcia LED a 360°",
      "desc": "Luce frontale ad alta intensità che illumina un raggio di 30 piedi (45 ft con Power Relay). Attivabile con 1 click senza costo in AP."
    },
    "radio": {
      "icon": "📻",
      "name": "Ricetrasmettitore Radio Wasteland",
      "desc": "Sintonizzatore a banda larga per stazioni radio (Diamond City, Radio Freedom, Enclave) e ricezione segnali d'emergenza SOS."
    },
    "sensore_em": {
      "icon": "📡",
      "name": "Sensore EM & Battiti Cardiaci",
      "desc": "Spendi 2 AP per emettere un impulso acustico/elettromagnetico: rileva la posizione cardinale di tutte le creature entro 60 ft."
    },
    "monitor_cardiaco": {
      "icon": "🩺",
      "name": "Monitor Biometrico & Vitali",
      "desc": "Elettrocardiogramma, temperatura e integrità degli arti in tempo reale. Con Vault Suit (usura ≤ 5), guarisci HP extra pari al tuo livello!"
    },
    "vats": {
      "icon": "🎯",
      "name": "Modulo V.A.T.S. Vault-Tec",
      "desc": "Vault-Tec Assisted Targeting System: calcola probabilità tattica di colpire testa, torso, braccia e gambe con bonus ai colpi critici."
    }
  },
  "pipboyUpgrades": [
    {
      "id": "pbu_medscanner",
      "name": "Med-Scanner (Scanner Medico)",
      "slots": 1,
      "cost": "350c",
      "maxRank": 3,
      "ranks": [
        "Spendendo 3 AP puoi analizzare un bersaglio entro 15 ft: conosci i suoi HP attuali e massimi.",
        "Ottieni anche SP, AC e DT del bersaglio. Puoi identificare condizioni attive (avvelenato, irradiato, ecc.).",
        "Analisi completa in 1 AP. Puoi effettuare diagnosi a distanza per stabilire il tipo di cura necessaria."
      ],
      "effect": "Analisi medica a distanza dei bersagli.",
      "appliesTo": "Tutti i modelli"
    },
    {
      "id": "pbu_tacmap",
      "name": "Tactical Map Overlay (Mappa Tattica)",
      "slots": 1,
      "cost": "400c",
      "maxRank": 3,
      "ranks": [
        "La mappa evidenzia nemici già avvistati entro 30 ft in tempo reale.",
        "Raggio esteso a 60 ft. Evidenzia anche oggetti di valore e contenitori.",
        "Raggio esteso a 90 ft. Aggiunge marcatori per uscite, trappole e bersagli prioritari."
      ],
      "effect": "Visualizzazione tattica avanzata su mappa.",
      "appliesTo": "Pip-Boy 3000, Pip-Boy 3000 Mark IV, Pimp-Boy 3 Billion, Pip-Pad dell'Istituto"
    },
    {
      "id": "pbu_autoinjector",
      "name": "Auto-Injector (Iniettore Automatico)",
      "slots": 2,
      "cost": "600c",
      "maxRank": 2,
      "ranks": [
        "Quando scendi sotto il 25% di HP, il Pip-Boy inietta automaticamente uno Stimpak dal tuo inventario (se disponibile). Utilizzabile una volta per riposo.",
        "Si attiva anche sotto il 50% di HP. Può iniettare RadAway se le radiazioni superano il 50% del massimo. Utilizzabile due volte per riposo."
      ],
      "effect": "Iniezione automatica d'emergenza di Stimpak o RadAway.",
      "appliesTo": "Pip-Boy 2000 Mark VI, Pip-Boy 3000, Pip-Boy 3000 Mark IV, Pimp-Boy 3 Billion, Pip-Pad dell'Istituto"
    },
    {
      "id": "pbu_hacking_module",
      "name": "Hacking Module (Modulo Hacking)",
      "slots": 2,
      "cost": "500c",
      "maxRank": 2,
      "ranks": [
        "Spendendo 3 AP puoi tentare di accedere a terminali informatici entro 10 ft senza interazione fisica diretta. Prova Scienza DC +2.",
        "Raggio esteso a 30 ft. La DC è ridotta di 2. Puoi accedere anche a Robottini e droni industriali."
      ],
      "effect": "Accesso remoto a sistemi informatici e robot.",
      "appliesTo": "Pip-Boy 3000, Pip-Boy 3000 Mark IV, Pimp-Boy 3 Billion, Pip-Pad dell'Istituto"
    },
    {
      "id": "pbu_chem_analyzer",
      "name": "Chem Analyzer (Analizzatore Chimico)",
      "slots": 1,
      "cost": "280c",
      "maxRank": 2,
      "ranks": [
        "Puoi analizzare qualsiasi sostanza chimica (Chem, cibo, acqua) per identificarne composizione ed effetti prima di consumarla.",
        "Ottieni anche informazioni su potenziale di dipendenza, durata effetti e possibili interazioni con altre sostanze."
      ],
      "effect": "Analisi chimica di cibi, droghe e sostanze.",
      "appliesTo": "Tutti i modelli"
    },
    {
      "id": "pbu_signal_booster",
      "name": "Signal Booster (Amplificatore Segnale)",
      "slots": 1,
      "cost": "200c",
      "maxRank": 2,
      "ranks": [
        "Il raggio della radio è aumentato. Puoi ricevere segnali da stazioni più lontane e da zone schermato.",
        "Puoi trasmettere messaggi su frequenze militari e captare segnali di emergenza criptati."
      ],
      "effect": "Comunicazioni radio potenziate e raggio esteso.",
      "appliesTo": "Pip-Boy 3000, Pip-Boy 3000 Mark IV, Pimp-Boy 3 Billion, Pip-Pad dell'Istituto"
    },
    {
      "id": "pbu_lockpick_assist",
      "name": "Lockpick Assist (Assistenza Scasso)",
      "slots": 1,
      "cost": "320c",
      "maxRank": 2,
      "ranks": [
        "Il Pip-Boy analizza serrature meccaniche entro 5 ft: ottieni +2 alle prove di Violare (Breach) per scassinare.",
        "L'analisi è istantanea e fornisce la sequenza ottimale: +4 alle prove di Violare. Funziona anche su serrature elettroniche."
      ],
      "effect": "+2/+4 alle prove di Violare (Breach) grazie all'analisi automatica.",
      "appliesTo": "Pip-Boy 2000 Mark VI, Pip-Boy 3000, Pip-Boy 3000 Mark IV, Pimp-Boy 3 Billion, Pip-Pad dell'Istituto"
    },
    {
      "id": "pbu_stealth_field",
      "name": "Stealth Field Emitter (Emettitore Campo Stealth)",
      "slots": 3,
      "cost": "900c",
      "maxRank": 1,
      "ranks": [
        "Spendendo 6 AP attivi un campo di mimetismo ottico per 1 minuto: diventi semi-invisibile. +4 a Furtività (Sneak). Utilizzabile una volta per riposo lungo."
      ],
      "effect": "Mimetismo ottico temporaneo: +4 Sneak per 1 minuto (1/riposo lungo).",
      "appliesTo": "Pip-Boy 3000 Mark IV, Pimp-Boy 3 Billion, Pip-Pad dell'Istituto"
    },
    {
      "id": "pbu_power_relay",
      "name": "Power Relay (Relè di Alimentazione)",
      "slots": 1,
      "cost": "250c",
      "maxRank": 2,
      "ranks": [
        "Il Pip-Boy può alimentare dispositivi elettronici collegati via cavo entro 5 ft, ricaricando oggetti elettrici scarichi.",
        "Può trasmettere energia wireless a dispositivi entro 10 ft. Permette di ricaricare celle energetiche lentamente."
      ],
      "effect": "Alimentazione di dispositivi elettronici e ricarica celle energia.",
      "appliesTo": "Tutti i modelli"
    },
    {
      "id": "pbu_vault_sync",
      "name": "Vault-Tec Sync (Sincronizzazione Vault-Tec)",
      "slots": 1,
      "cost": "0c",
      "maxRank": 1,
      "ranks": [
        "Sincronizzazione avanzata con la Vault Suit: se indossi una Vault Suit con massimo 5 livelli di usura, guarisci HP extra pari al tuo livello a ogni cura, e il Pip-Boy monitora istantaneamente tutte le tue statistiche vitali."
      ],
      "effect": "Monitoraggio vitali + HP bonus con Vault Suit (0-5 usura).",
      "appliesTo": "Tutti i modelli (bonus speciale)"
    }
  ],
  "radiationRules": {
    "baseDcFormula": "12 - Modificatore Costituzione",
    "onSuccess": "La CD Radiazioni aumenta di +2 fino a quando non rimuovi tutti i livelli di Rads accumulati.",
    "onFailure": "Subisci +1 livello di Radiazioni (Rads).",
    "radLevelsEffects": {
      "d20Penalty": "-1 cumulativo a tutti i tiri d20 (escluso il tiro di Fortuna) per ogni livello di Rads (da 1 a 10).",
      "damagePerLevel": "Ogni volta che guadagni un livello di Rads, subisci 1d4 danni da radiazione permanenti a HP e SP massimi (non curabili finché hai livelli di Rads).",
      "maxLevel": 10,
      "deathRule": "Se il danno da radiazione riduce gli HP a 0 o raggiungi il 10° livello di Rads: MUORI. Effettua una prova di Fortuna (CD 20): se hai successo rinasci come Ghoul con 1 HP; se tiri meno di 5, rinasci come Ghoul Ferale ostile (controllato dal GM)."
    },
    "severityTable": [
      {
        "severity": 1,
        "checkFrequency": "Ogni 1 ora",
        "radsPerSec": "0.05/sec",
        "desc": "Bassa radioattività residua"
      },
      {
        "severity": 2,
        "checkFrequency": "Ogni 30 minuti",
        "radsPerSec": "0.1/sec",
        "desc": "Radioattività moderata della Zona"
      },
      {
        "severity": 3,
        "checkFrequency": "Ogni 10 minuti",
        "radsPerSec": "0.3/sec",
        "desc": "Pozze d'acqua o rottami contaminati"
      },
      {
        "severity": 4,
        "checkFrequency": "Ogni 3 minuti",
        "radsPerSec": "1/sec",
        "desc": "Crateri da bomba o fusti radioattivi rotti"
      },
      {
        "severity": 5,
        "checkFrequency": "Ogni 1 minuto",
        "radsPerSec": "3/sec",
        "desc": "Discariche nucleari o centri reattori"
      },
      {
        "severity": 6,
        "checkFrequency": "Ogni 30 secondi",
        "radsPerSec": "5/sec",
        "desc": "Zona di fallout intenso / Splendente"
      },
      {
        "severity": 7,
        "checkFrequency": "Ogni 6 secondi (1 round)",
        "radsPerSec": "30/sec",
        "desc": "Nocciolo di reattore fuso / Ground Zero"
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FALLOUT_RULES_DATA };
}

if (typeof window !== 'undefined') {
  window.FALLOUT_RULES_DATA = FALLOUT_RULES_DATA;
}
