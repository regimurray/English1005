/* ============================================================
   ENG 1005 · Practice question bank (auto-graded practice quiz)
   Answers are stored as salted SHA-256 hashes (field 'h'), the
   same way as the exam, so they are not readable in the code.
   ============================================================ */
const PRACTICE = [
 {title:"Clauses (Independent vs. Subordinate)",letter:"A",
  dir:"Is each word group an independent clause (IC) or a subordinate clause (SC)?",
  q:[
   {s:"While the storm raged outside",o:["Independent clause (IC)","Subordinate clause (SC)"],h:"5c16032d7a981a47d3f51ecd7c82a94a546449488805262770d7171b2f0293e1"},
   {s:"The inspector dusted the doorknob for prints",o:["Independent clause (IC)","Subordinate clause (SC)"],h:"04661c8543398d985f025d9f699cd700e2ee3e122ee23d5439fb303a22e435e1"},
  ]},
 {title:"Sentence Fragments",letter:"B",
  dir:"Label the item and, if it is a fragment, choose the best complete sentence.",
  q:[
   {s:"Creeping silently toward the cellar door.",o:["Complete sentence; no change needed.","Fragment → The thief was creeping silently toward the cellar door.","Fragment → Creeping silently. Toward the cellar door.","Fragment → Creeping silently toward the cellar door, slowly."],h:"00758246c42800e2524806f4f86573830051ab62d4bf259db5139465cb2143b0"},
   {s:"The coroner examined the body twice.",o:["Complete sentence; no change needed.","Fragment → Because the coroner examined the body twice.","Fragment → The coroner examining the body twice.","Fragment → Examined the body twice."],h:"a842f7ec38a79312f7e2d293cd18066e957e1b1ddab39fdfb3529e382302249d"},
  ]},
 {title:"Comma Splices & Run-ons",letter:"C",
  dir:"Identify the error and choose the correct revision.",
  q:[
   {s:"The phone rang twice, then it went dead.",o:["Comma splice → The phone rang twice; then it went dead.","Correct as written.","Fragment → The phone rang twice. Then."],h:"2b13c3a37b94f2a4c8f41e5e715aa2decb00cd22e0f592e46b3baefad1a838cf"},
   {s:"Footsteps echoed in the hall someone was awake.",o:["Fused sentence → Footsteps echoed in the hall; someone was awake.","Comma splice → Footsteps echoed in the hall someone, was awake.","Correct as written."],h:"1bcad9d798804ad01dc8357c2f6fa1d79d101c28e9165119ae0b5cd15d66282b"},
  ]},
 {title:"Commas",letter:"D",
  dir:"Choose the sentence punctuated correctly.",
  q:[
   {s:"",o:["Before dawn, the detectives searched the garden.","Before dawn the detectives, searched the garden.","Before, dawn the detectives searched the garden."],h:"6ec914c07d6fc0ea1a54c40cd14cb61a5aaca75b175c97dad2cc2d04a883cf76"},
   {s:"",o:["The clue, a single feather pointed to the aviary.","The clue, a single feather, pointed to the aviary.","The clue a single feather, pointed to the aviary."],h:"05d1567d40a655fd918b9d88e90c6074446bc13cfe4862e8d937a9584cc23e3b"},
  ]},
 {title:"Semicolons & Colons",letter:"E",
  dir:"Choose the sentence punctuated correctly.",
  q:[
   {s:"",o:["The motive was clear: revenge.","The motive was clear; revenge.","The motive was clear revenge."],h:"2fdfbe133a5e4c881e8cf7db93f8e20ef592a77766a7bc146456f0d1aec14fd2"},
   {s:"",o:["The storm cut the phone lines, the guests were trapped.","The storm cut the phone lines; the guests were trapped.","The storm cut the phone lines the guests were trapped."],h:"2d0b6fdc48da2a2b8239f81b20f94686107952ae7234730c3e901f95618bfadb"},
  ]},
 {title:"Coordination & Subordination",letter:"F",
  dir:"Combine the two sentences into one smooth, correct sentence.",
  q:[
   {s:"The safe was empty. The thief had been there first.",o:["The safe was empty because the thief had been there first.","The safe was empty, the thief had been there first.","The safe was empty the thief had been there first."],h:"022f419b08f4cfd5cd9a2ad67c7e1b8016466d2e8901fedb15669ec8cbbb0656"},
   {s:"She knew the truth. She said nothing.",o:["Although she knew the truth, she said nothing.","She knew the truth she said nothing.","She knew the truth, she said nothing."],h:"dff6e502c7b92d87666460381f86c9b3efd2f07430425f9acad33571cf880230"},
  ]},
 {title:"Parallelism",letter:"G",
  dir:"Choose the sentence with parallel structure.",
  q:[
   {s:"",o:["The suspect was nervous, evasive, and lied often.","The suspect was nervous, evasive, and dishonest.","The suspect was nervous, evasive, and a liar too."],h:"780591f6ac8a0a548c0cd833984b0cd84c5a9de27492fd658f31a892aa20de73"},
   {s:"",o:["The detective enjoyed reading files, to interview witnesses, and stakeouts.","The detective enjoyed reading files, interviewing witnesses, and running stakeouts.","The detective enjoyed to read files, interviewing witnesses, and stakeouts."],h:"9fb21ed6d01cc5c34280ce6f834947a16a8f2bdd91b74039a3026ebdafec11a8"},
  ]},
 {title:"Misplaced & Dangling Modifiers",letter:"H",
  dir:"Choose the clear, correct sentence.",
  q:[
   {s:"",o:["Locked from the inside, the detective studied the door.","The detective studied the door, which was locked from the inside.","The detective studied, locked from the inside, the door."],h:"8dcbabcbc698405d469d07aac1927a527840e75704aa82c53ddd3664acb9a91b"},
   {s:"",o:["She nearly questioned all of the guests.","She questioned nearly all of the guests.","She questioned all of the guests nearly."],h:"3994ae231c49aad907b08e2f7f9990c8744e5ad59ed7a836ccae449fda908690"},
  ]},
 {title:"Agreement & Pronoun Case",letter:"I",
  dir:"Choose the correct word.",
  q:[
   {s:"Neither the witness nor the suspects ______ telling the truth.",o:["was","were"],h:"2d96d023258ed56dd24a5cbdc46f7e6e2daa9571e93d002857bc5da505508995"},
   {s:"The committee announced ______ decision.",o:["its","their"],h:"5f3b4e9a834d215d4193119f7c7a8c4d0defe224c7f0cca34fbe803bffe9c022"},
   {s:"The reward was split between her and ______.",o:["I","me"],h:"e16a46405a4a8ddaa1806cde0e7eba2c45e9ab6237721d6db3e88fae6d3b2994"},
   {s:"Each of the clues ______ a story.",o:["tells","tell"],h:"75e94b6afc3dc17e2eab5c59889a7722a976a26ed0d4a379b3ed5b918ac14aa4"},
  ]}
];
