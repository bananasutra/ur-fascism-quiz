// Ur-Fascism Quiz — Full Trait Data
// Source: Umberto Eco "Ur-Fascism" (1995), Trump Action Tracker (Pagel, 2025),
// AI comparative analysis matrix (GPT/Gemini/Claude, March 2026)
// Ready for direct use in React, vanilla JS, or Streamlit (via JSON export)

const TRAITS = [
  {
    id: 1,
    name: "Cult of tradition",
    definition: "History is simplified into a mythologized gilded age to be restored. New knowledge is suspect, rational questions are offensive; only the 'correct' interpretation of ancestral wisdom matters.",
    scores: { gptSept2025: 1, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Religious nationalism and founding-myth rhetoric exist, but pluralism still dominates institutions.",
    gptMar2026Reason: "Unchanged — no new evidence cited despite new federal enactments.",
    geminiClaudeReason: "Smithsonian erasure orders, DoD renamed 'Department of War,' Confederate base renamings are enacted federal policy—not rhetoric.",
    driftNote: "GPT held at 1 despite new policy enactments. Gemini and Claude both independently scored 2 citing documented federal orders.",
    evidence: [
      "Mar 2025 — Executive order directs Smithsonian to remove exhibits on slavery and Indigenous history that 'disparage' Americans. Signage at 50+ national parks removed.",
      "Feb 2025 — Department of Defense renamed 'Department of War' in internal communications, invoking WWII-era framing.",
      "Jan 2025 — Order reverses 2023 renaming of Army bases, restoring names of Confederate generals.",
      "Ongoing — '1776 Commission' framing used to mandate patriotic education curricula, explicitly rejecting 1619 Project historical analysis."
    ],
    ecoQuote: "\"The Ur-Fascist must recycle his heritage, searching for the authentic form of a national identity… The followers must be convinced that they are fighting to restore a past golden age.\" — Eco, 1995"
  },
  {
    id: 2,
    name: "Rejection of modernism",
    definition: "Science, expertise, and intellectual inquiry are treated as suspicious ideological bias. Bullyish instincts and puerile emotions outrank evidence.",
    scores: { gptSept2025: 1, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Anti-science rhetoric appears in some political movements, but scientific institutions remain influential.",
    gptMar2026Reason: "Unchanged — scientific institutions characterized as still largely functional.",
    geminiClaudeReason: "Firing 1,155 EPA scientists, taking National Climate Assessments offline, and federal agencies promoting vaccine disinformation is systemic state-directed rejection of science.",
    driftNote: "GPT's 'institutions remain influential' framing is contradicted by those institutions being actively dismantled.",
    evidence: [
      "Early 2025 — 1,155 scientists fired at the EPA. All U.S. National Climate Assessments taken offline.",
      "2025 — Department of Energy instructed to stop using terms 'climate change' and 'emissions' in official communications.",
      "Ongoing — HHS and CDC, led by RFK Jr., actively promoted disinformation linking autism to vaccines and Tylenol, contradicting all scientific consensus.",
      "2025 — USDA ordered to remove scientific studies from public databases if they reference climate or DEI."
    ],
    ecoQuote: "\"Ur-Fascism can come back under the most innocent of disguises. Our duty is to uncover it and to point our finger at any of its new instances.\" — Eco, 1995"
  },
  {
    id: 3,
    name: "Action over reflection",
    definition: "Thinking is weakness. Empathy is dangerous (sic). Intellectuals are suspect. Action for its own sake (impulsive, undeliberated, decisive) is glorified.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Populist slogans and performative politics exist. Score: 2.",
    gptMar2026Reason: "Policy processes still require deliberation in many arenas. Score dropped to 1.",
    geminiClaudeReason: "More executive orders than Trump's entire first term, plus unprovoked military strikes killing 115+ people without congressional approval.",
    driftNote: "GPT dropped this from 2 to 1 despite a documented increase in unilateral executive action and extrajudicial military strikes—a directly opposite trend.",
    evidence: [
      "2025 — Trump signed more executive orders in his first 100 days than in his entire first term, bypassing Congress across dozens of policy areas.",
      "2025 — Administration launched unprovoked lethal military strikes on boats in the Caribbean and Pacific without congressional approval, killing 115+ people.",
      "Ongoing — Universities, law firms, and cultural institutions targeted with federal action for perceived ideological opposition.",
      "2025 — National Endowment for the Arts and Humanities gutted; humanities framed as ideologically suspect."
    ],
    ecoQuote: "\"For Ur-Fascism, disagreement is treason… the critical spirit makes distinctions, and to distinguish is a sign of modernism.\" — Eco, 1995"
  },
  {
    id: 4,
    name: "Disagreement is treason",
    definition: "Critics are not wrong; they are outright enemies. Internal dissent is reframed as sabotage, betrayal, or foreign contamination. Retaliation is systematic, disproportionate, and discriminatory.",
    scores: { gptSept2025: 1, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Political rhetoric sometimes frames opponents as enemies, but dissent remains legal and widespread.",
    gptMar2026Reason: "Unchanged — dissent described as still legal.",
    geminiClaudeReason: "The AG formally declaring leaks constitute 'treason,' DOJ indictments of political opponents, and bills to strip citizens of passports over speech are legal instruments, not rhetoric.",
    driftNote: "GPT's 'dissent remains legal' framing ignores that these actions are designed structurally to make it less so.",
    evidence: [
      "2025 — Attorney General declared that federal employees who leak information are 'engaging in treason.'",
      "2025 — DOJ indicted and threatened former officials including John Bolton, James Comey, and Letitia James.",
      "2025 — Administration drafted bills to strip U.S. citizens of passports over political speech.",
      "2025 — Insurrection Act threatened against local protesters exercising First Amendment rights."
    ],
    ecoQuote: "\"The critical spirit makes distinctions, and to distinguish is a sign of modernism. In modern culture the scientific community praises disagreement as a way to improve knowledge.\" — Eco, 1995"
  },
  {
    id: 5,
    name: "Fear of difference",
    definition: "Ur-Fascism is, Eco wrote, racist (and sexist) by definition. The outsider (immigrant, minority, the Other) is a necessary threat.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Immigration rhetoric and identity politics invoke this dynamic. Score: 2.",
    gptMar2026Reason: "Countervailing norms and laws remain strong. Score dropped to 1.",
    geminiClaudeReason: "Warrantless mass raids, white supremacist imagery in official DHS videos, 75-country visa suspensions targeting non-white nations while fast-tracking white South Africans—state policy.",
    driftNote: "GPT dropped this from 2 to 1 as ICE established 3,000-arrest daily quotas and DHS used white supremacist memes in official recruitment.",
    evidence: [
      "2025 — ICE engaged in sweeping masked military-style raids in major cities, frequently detaining U.S. citizens without warrants.",
      "2025 — DHS used white supremacist memes ('Mac Tonight') in official recruitment videos.",
      "2025 — ICE established a quota of 3,000 arrests daily regardless of criminal record.",
      "2025 — Visas suspended for citizens of 75 predominantly non-white countries; white South Africans fast-tracked for refugee status."
    ],
    ecoQuote: "\"The followers must feel besieged. The easiest way to do that is the appeal to xenophobia.\" — Eco, 1995"
  },
  {
    id: 6,
    name: "Appeal to a frustrated middle class",
    definition: "Economic anxiety is weaponized and redirected at vulnerable groups. Resentment replaces analysis.",
    scores: { gptSept2025: 2, gptMar2026: 2, geminiClaude: 2 },
    gptSept2025Reason: "Populist politics across parties heavily target economic resentment and perceived status loss. Score: 2.",
    gptMar2026Reason: "Unchanged. Score: 2. NOTE: This is the ONLY trait GPT rated as systemic in March 2026.",
    geminiClaudeReason: "Administration repeatedly tied economic frustration to immigration. DOJ targeted DEI initiatives, blaming them for discrimination against the white middle class.",
    driftNote: "All three analyses agree on 2. No meaningful dispute. Notably the only trait GPT did not downgrade in March 2026.",
    evidence: [
      "2025 — Economic frustration repeatedly tied to immigration in official messaging: 'They're taking your jobs.'",
      "2025 — DOJ and agencies targeted corporations and universities over DEI, framing these programs as discrimination against the white middle class.",
      "2025 — Tariffs marketed as protection of American workers while economic analysis showed they primarily hurt working-class consumers.",
      "Ongoing — Federal budget cuts framed as protecting 'real Americans' from welfare abuse by immigrants and minorities."
    ],
    ecoQuote: "\"Fascism was able to play on not only the fear of proletarians but also the distress of a middle class that was suffering from the economic crisis of 1929.\" — Eco, 1995"
  },
  {
    id: 7,
    name: "Obsession with a plot",
    definition: "There is always a conspiracy. The enemy is everywhere, coordinated, powerful, and hidden. Yet, also beatable by the heroic nation.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Strong partisan narratives about internal enemies exist, but not yet universal or state-directed. Score: 2.",
    gptMar2026Reason: "Partisan narratives remain strong but not state-directed. Score dropped to 1.",
    geminiClaudeReason: "A formal DOJ task force investigating a debunked Obama conspiracy theory is not a 'narrative'—it is state apparatus deployed against perceived enemies.",
    driftNote: "GPT dropped this score while a DOJ task force was literally formed to investigate a debunked Obama conspiracy theory. 'Not state-directed' is factually wrong by definition.",
    evidence: [
      "2025 — DOJ formed a task force specifically to investigate unsubstantiated claims that Barack Obama orchestrated a plot against Trump in 2016.",
      "Ongoing — Trump spread debunked conspiracy theories that Venezuela and Iran rigged U.S. voting machines in 2020 and 2024.",
      "2025 — 'Deep State' framing used to justify mass firings of career civil servants across agencies.",
      "2025 — Intelligence community officials accused of running a 'shadow government' in official White House communications."
    ],
    ecoQuote: "\"The followers must feel besieged. The conspiratorial plot is the key to fascist psychology.\" — Eco, 1995"
  },
  {
    id: 8,
    name: "Enemies both strong and weak",
    definition: "The enemy is simultaneously an existential threat and a contemptible weakling. This contradiction is never (meant to be) resolved; it keeps the distraction and mobilization permanent.",
    scores: { gptSept2025: 1, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "This rhetorical pattern appears in some political messaging. Score: 1.",
    gptMar2026Reason: "Unchanged. Score: 1.",
    geminiClaudeReason: "Official White House designation of Democrats as a 'domestic extremist organization' combined with AI-generated mockery videos is textbook application of this trait.",
    driftNote: "GPT's 'appears in some messaging' understates what is documented official White House language. Calling Democrats a 'domestic extremist organization' is a state designation, not campaign rhetoric.",
    evidence: [
      "2025 — White House officials called the Democratic party a 'domestic extremist organization' devoted to defending killers.",
      "Ongoing — Trump simultaneously mocked Democratic leaders with degrading AI-generated videos while calling them existential threats.",
      "2025 — Iran described as both a mortal threat to civilization and a country that would 'crumble immediately' under pressure.",
      "Ongoing — Immigrants framed as both an invasion force and as weak criminals easily deported—simultaneously threatening and contemptible."
    ],
    ecoQuote: "\"By a continuous shifting of rhetorical focus, the enemies are at the same time too strong and too weak.\" — Eco, 1995"
  },
  {
    id: 9,
    name: "Life as permanent warfare",
    definition: "Pacifism is treason. There must always be a front, a fight, an emergency. If no enemy exists, one shall be found, or made.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "'Culture war' framing is common but not the organizing principle of the state. Score: 2.",
    gptMar2026Reason: "Culture war framing common but not the organizing principle. Score dropped to 1.",
    geminiClaudeReason: "Withdrawing from WHO, UNESCO, and UN Climate Framework while threatening military annexation of Greenland and deploying forces to Venezuela is a state organized around perpetual conflict.",
    driftNote: "GPT's 'culture war framing' characterization ignores literal military deployments and annexation threats. The actual military and diplomatic record directly contradicts the score.",
    evidence: [
      "2025 — U.S. formally withdrew from the UN Framework on Climate Change, UNESCO, and the WHO.",
      "2025 — Trump threatened military force to annex Greenland from Denmark, a NATO ally.",
      "2025 — U.S. military forces deployed to 'run' Venezuela; 'unconditional surrender' demanded from Iran.",
      "2025 — Administration launched unprovoked strikes in Caribbean and Pacific, framing permanent military posture as anti-narco operations."
    ],
    ecoQuote: "\"Since enemies must be defeated, there must always be a new enemy at the border.\" — Eco, 1995"
  },
  {
    id: 10,
    name: "Contempt for the weak",
    definition: "Failure is moral. Criminals are born (not made) and mostly brown. The vulnerable deserve their fate. Compassion is nonsense for losers, and a form of complicity.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Harsh rhetoric exists, but large welfare and civil-rights systems remain intact. Score: 2.",
    gptMar2026Reason: "Welfare systems remain largely intact. Score dropped to 1.",
    geminiClaudeReason: "'Alligator Alcatraz,' SNAP cuts targeted at Democratic states, and jailing homeless people are documented enacted policies—not rhetoric.",
    driftNote: "GPT's 'welfare systems remain largely intact' ignores that they are being actively dismantled. Treating absence of complete destruction as evidence of health is a methodological error.",
    evidence: [
      "2025 — Executive order to remove homeless people from streets, offering jail or full shelters as the only options.",
      "2025 — Billions cut in disaster relief and SNAP food assistance specifically targeting Democratic states.",
      "2025 — Immigrants detained in inhumane overcrowded conditions at 'Alligator Alcatraz' facility in Florida.",
      "2025 — Medicaid and disability benefit cuts framed as eliminating 'dependency' and rewarding 'self-sufficiency.'"
    ],
    ecoQuote: "\"In Ur-Fascist ideology, the plebes are those who have failed to rise. The masses must be despised and celebrated simultaneously.\" — Eco, 1995"
  },
  {
    id: 11,
    name: "Cult of heroism and death",
    definition: "Sacrifice is glorious. Political violence is reframed as benevolent martyrdom. The warrior ethos is the state's highest value.",
    scores: { gptSept2025: 1, gptMar2026: 0, geminiClaude: 2 },
    gptSept2025Reason: "Patriotism and military reverence exist but are not a central civic ideology. Score: 1.",
    gptMar2026Reason: "Not a central civic ideology. Score dropped to 0—LOWER than Sept 2025 despite new enactments.",
    geminiClaudeReason: "Military honors granted to a January 6 rioter and the Defense Secretary's 'FAFO' directives are institutional glorifications of political violence.",
    driftNote: "GPT's score of 0 is the single most indefensible in the entire matrix. It dropped BELOW its Sept 2025 score during the period in which a J6 rioter received full military honors. There is no analytical path to this score.",
    evidence: [
      "2025 — Air Force granted full military honors to a rioter killed during the January 6 attack.",
      "2025 — Defense Secretary Hegseth issued directives to re-establish 'warrior culture' and told adversaries to 'FAFO.'",
      "2025 — Trump told military personnel dealing with protests to 'do whatever the hell they want' when hit with objects.",
      "Ongoing — January 6 participants described as 'hostages' and 'patriots'; their violence reframed as heroic sacrifice."
    ],
    ecoQuote: "\"The Ur-Fascist hero is impatient to die. In his impatience, he more often sends other people to death.\" — Eco, 1995"
  },
  {
    id: 12,
    name: "Machismo and sexism",
    definition: "Gender nonconformity and sexual diversity are threats to the national body. Domination is a virtue; tenderness is a weakness.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Gender politics are highly contested; some policy moves reflect this trait but society remains pluralistic. Score: 2.",
    gptMar2026Reason: "Society remains pluralistic on gender. Score dropped to 1.",
    geminiClaudeReason: "Medicare threats to hospitals, VA abortion ban including rape victims, DoD dismantling Women Peace and Security, and a Defense Secretary stating women shouldn't vote are systemic state actions.",
    driftNote: "GPT dropped this from 2 to 1 despite an expansion of these policies. 'Society remains pluralistic' ignores that the state is actively working to end that pluralism.",
    evidence: [
      "2025 — VA banned from providing abortions to veterans, even in cases of rape or incest.",
      "2025 — Medicare funding threatened for hospitals providing gender-affirming care.",
      "2025 — DoD dismantled the Women, Peace, and Security program.",
      "2025 — Defense Secretary Pete Hegseth publicly shared views that women should not have the right to vote."
    ],
    ecoQuote: "\"Machismo implies both disdain for women and intolerance and condemnation of nonstandard sexual habits.\" — Eco, 1995"
  },
  {
    id: 13,
    name: "Selective populism",
    definition: "The Leader alone speaks for everyone, i.e. us, 'the People.' Institutions, courts, and elections are legitimate only when they confirm what 'the Leader' wants and declared.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Competing definitions of 'the real people' appear in political messaging. Score: 2.",
    gptMar2026Reason: "Competing definitions exist but within normal political contest. Score dropped to 1.",
    geminiClaudeReason: "Withholding congressionally appropriated funds from opponents, pressuring illegal gerrymandering, and demanding elimination of mail-in voting are structural attacks on democratic representation.",
    driftNote: "These are not 'competing definitions'—they are attempts to structurally eliminate opposing voters. The framing treats direct attacks on electoral mechanics as ordinary political disagreement.",
    evidence: [
      "2025 — Trump aggressively withheld congressionally appropriated funds from 'Democrat-run cities' to punish political rivals.",
      "2025 — Demanded elimination of mail-in ballots to disenfranchise voters in Democratic-leaning demographics.",
      "2025 — Openly pressured Republican governors to illegally gerrymander congressional maps for a permanent Republican majority.",
      "Ongoing — 'The people have spoken' used exclusively to validate Trump's preferred outcomes; congressional votes described as illegitimate when they oppose him."
    ],
    ecoQuote: "\"There is in our future a TV or internet populism in which the emotional response of a selected group of citizens can be presented and accepted as the Voice of the People.\" — Eco, 1995"
  },
  {
    id: 14,
    name: "Newspeak",
    definition: "Language is systematically impoverished to prevent complex thought. Precision is replaced with slogans. Nuance becomes treason.",
    scores: { gptSept2025: 2, gptMar2026: 1, geminiClaude: 2 },
    gptSept2025Reason: "Political messaging and spin exist, but media pluralism remains strong. Score: 2.",
    gptMar2026Reason: "Media pluralism remains strong. Score dropped to 1.",
    geminiClaudeReason: "Revoking AP/Reuters/Bloomberg White House access, launching an official website to attack media, and using the Social Security Administration to send propaganda are state media control mechanisms.",
    driftNote: "GPT's 'media pluralism remains strong' ignores that the government is actively working to end it through legal threats, access revocation, and state propaganda infrastructure.",
    evidence: [
      "2025 — White House access revoked for AP, Reuters, and Bloomberg wire services.",
      "2025 — White House launched an official website to publicly attack 'media offenders.'",
      "2025 — Social Security Administration forced to email citizens misleading claims about Trump's tax bills—state propaganda through a trusted public institution.",
      "2025 — Pentagon restricted journalist access; reporters embedded with military units removed for coverage deemed unfavorable."
    ],
    ecoQuote: "\"Ur-Fascism tends to use an impoverished vocabulary… But we must be ready to identify other kinds of Newspeak, even if they take the apparently innocent form of a popular talk show.\" — Eco, 1995"
  }
];

// Score totals for summary screen
const SCORE_TOTALS = {
  gptSept2025: 23,
  gptMar2026: 14,
  geminiClaude: 28
};

// Traits with largest GPT drift (for summary bar chart)
const GPT_DRIFT = [
  { trait: "Cult of heroism", from: 1, to: 0 },
  { trait: "Action over reflection", from: 2, to: 1 },
  { trait: "Fear of difference", from: 2, to: 1 },
  { trait: "Obsession with a plot", from: 2, to: 1 },
  { trait: "Life as permanent warfare", from: 2, to: 1 },
  { trait: "Contempt for the weak", from: 2, to: 1 },
  { trait: "Machismo and sexism", from: 2, to: 1 },
  { trait: "Selective populism", from: 2, to: 1 },
  { trait: "Newspeak", from: 2, to: 1 }
];

if (typeof module !== 'undefined') module.exports = { TRAITS, SCORE_TOTALS, GPT_DRIFT };
