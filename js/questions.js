/* ============================================================
   ENG 1005 · Writing About Mystery and Thriller
   Exam question bank — original course material

   The correct answer for each question is NOT stored in readable
   form. Instead, 'h' holds a SHA-256 fingerprint of the correct
   option (salted). The page grades by hashing the student's choice
   and comparing fingerprints, so the answers cannot be read from
   this file. (For fully tamper-proof grading, use a server-backed
   quiz such as a Google Form.)

   Data shape for each question:
     s : the question stem / prompt (may be empty)
     o : array of answer options (2-4 choices)
     h : salted SHA-256 hash of the correct option
   ============================================================ */
const EXAM = [
 {title:"Sentence Grammar",letter:"A",
  dir:"Choose whether each word group is an independent clause (IC) — a complete thought that can stand alone — or a subordinate clause (SC) — a dependent thought that cannot.",
  q:[
   {s:"When the detective examined the muddy footprints",o:["Independent clause (IC)","Subordinate clause (SC)"],h:"5c16032d7a981a47d3f51ecd7c82a94a546449488805262770d7171b2f0293e1"},
   {s:"The butler had vanished before midnight",o:["Independent clause (IC)","Subordinate clause (SC)"],h:"04661c8543398d985f025d9f699cd700e2ee3e122ee23d5439fb303a22e435e1"},
   {s:"Because the will named an unexpected heir",o:["Independent clause (IC)","Subordinate clause (SC)"],h:"5c16032d7a981a47d3f51ecd7c82a94a546449488805262770d7171b2f0293e1"},
   {s:"Three guests refused to leave the locked study",o:["Independent clause (IC)","Subordinate clause (SC)"],h:"04661c8543398d985f025d9f699cd700e2ee3e122ee23d5439fb303a22e435e1"},
   {s:"Although the alibi seemed airtight",o:["Independent clause (IC)","Subordinate clause (SC)"],h:"5c16032d7a981a47d3f51ecd7c82a94a546449488805262770d7171b2f0293e1"},
  ]},
 {title:"Sentence Fragments",letter:"B",
  dir:"Choose the answer that correctly labels the item and, if it is a fragment, gives the best complete sentence.",
  q:[
   {s:"Hiding in the shadows near the conservatory.",o:["Complete sentence; no change needed.","Fragment → The killer was hiding in the shadows near the conservatory.","Fragment → Hiding in the shadows. Near the conservatory.","Fragment → Hiding in the shadows near the conservatory, quietly."],h:"9d3b3f7e8bba2bd34c534c5a761beec6893b036a3a5afa77e637928140625862"},
   {s:"The inspector questioned every suspect twice.",o:["Complete sentence; no change needed.","Fragment → Because the inspector questioned every suspect twice.","Fragment → The inspector questioning every suspect twice.","Fragment → Questioned every suspect twice."],h:"a842f7ec38a79312f7e2d293cd18066e957e1b1ddab39fdfb3529e382302249d"},
   {s:"Which explained the missing key.",o:["Complete sentence; no change needed.","Fragment → Which explained the missing key, finally.","Fragment → The hidden compartment explained the missing key.","Fragment → Which, of course, explained the missing key."],h:"810f9a05ecb2e37014493cd7e0a5ae3f27a470f97854b8785df40501862b43c4"},
   {s:"Because no one had heard the gunshot.",o:["Complete sentence; no change needed.","Fragment → Because no one had heard the gunshot, the body lay undiscovered for hours.","Fragment → Because no one had heard the gunshot at all.","Fragment → No one. Because they had not heard the gunshot."],h:"709d2edcb0807fc3d23eb9b8464e8aac88fb601ef9fa1aeaeb89bff8e7ed7cab"},
   {s:"A single clue remained on the desk.",o:["Complete sentence; no change needed.","Fragment → A single clue. Remaining on the desk.","Fragment → Although a single clue remained on the desk.","Fragment → A single clue remaining on the desk."],h:"a842f7ec38a79312f7e2d293cd18066e957e1b1ddab39fdfb3529e382302249d"},
  ]},
 {title:"Comma Splices &amp; Fused Sentences",letter:"C",
  dir:"Choose the answer that correctly labels the error — comma splice (CS) or fused/run-on (FS) — and gives a correct revision.",
  q:[
   {s:"The lights went out, no one screamed.",o:["Comma splice → The lights went out, but no one screamed.","Fused sentence → The lights went out no one screamed.","Comma splice → The lights went out, no one, screamed.","Correct as written."],h:"56ac549aab494f1b335f338b98e39a1d827a3b0ed072ad0c9f99674e1059ed3a"},
   {s:"The clock struck twelve the body was discovered.",o:["Comma splice → The clock struck twelve, the body was discovered.","Fused sentence → When the clock struck twelve, the body was discovered.","Fused sentence → The clock struck twelve the body, was discovered.","Correct as written."],h:"45b7a8bcd7f3ccb0060cab3b98664f0a6e956438581cad8c2f8ed7673b39cd94"},
   {s:"She suspected the gardener he had motive and opportunity.",o:["Comma splice → She suspected the gardener, he had motive and opportunity.","Fused sentence → She suspected the gardener; he had motive and opportunity.","Fused sentence → She suspected the gardener he had, motive and opportunity.","Correct as written."],h:"5910c8258830676977e9ec5ed847cba52d2aa14f82e445e35793a83265be1995"},
   {s:"The note was unsigned, it pointed to an inside job.",o:["Comma splice → The note was unsigned, but it pointed to an inside job.","Fused sentence → The note was unsigned it pointed to an inside job.","Comma splice → The note was unsigned it, pointed to an inside job.","Correct as written."],h:"d14af5da23e358e9c2e5fe63b97cf7eeb5607ebfc01a1be0726c5ab0df0cdc7e"},
   {s:"Detective Stone reread the letter then she called the station.",o:["Comma splice → Detective Stone reread the letter, then she called the station.","Fused sentence → Detective Stone reread the letter; then she called the station.","Fused sentence → Detective Stone reread the letter then, she called the station.","Correct as written."],h:"ed728a70503d1b7427d8ad6843d9647d6b83eaae125fbc4b38c48fb65fd16ab2"},
  ]},
 {title:"Commas",letter:"D",
  dir:"Choose the sentence with commas placed correctly.",
  q:[
   {s:"",o:["After the storm passed, the investigators returned to the cliff house.","After the storm, passed the investigators returned to the cliff house.","After the storm passed the investigators, returned to the cliff house.","After, the storm passed the investigators returned to the cliff house."],h:"6729cef8ef95aa568687cac7199bf05c32119ef83b80a03da344fdef820ef75c"},
   {s:"",o:["The suspect, tall pale and nervous avoided eye contact.","The suspect, tall, pale, and nervous, avoided eye contact.","The suspect tall, pale, and nervous avoided eye contact.","The suspect, tall, pale and nervous avoided, eye contact."],h:"5c5b9dddf750a7f0fd4ff28acacc81ad77b1de7bfd1fa48ce4507a889879d292"},
   {s:"",o:["Yes the safe, had been opened from the inside.","Yes, the safe had been opened from the inside.","Yes the safe had been opened, from the inside.","Yes, the safe had been opened, from the inside."],h:"d02fec11ae94d9cb330d4020dbe5f9c02f9e126004105a829ad2b8e92f2fa5c9"},
   {s:"",o:["Agatha Christie who wrote And Then There Were None, mastered the locked-room puzzle.","Agatha Christie, who wrote And Then There Were None, mastered the locked-room puzzle.","Agatha Christie, who wrote And Then There Were None mastered the locked-room puzzle.","Agatha Christie who wrote, And Then There Were None, mastered the locked-room puzzle."],h:"8b70ed76f7bb4483280a159adba40bc8ad2783bea6c0fa5a8059911b2e9eb462"},
   {s:"",o:["The maid found a torn ticket, a broken watch, and a bloody glove.","The maid found a torn ticket a broken watch, and a bloody glove.","The maid found, a torn ticket, a broken watch, and a bloody glove.","The maid found a torn ticket, a broken watch and, a bloody glove."],h:"349ca0cf749b23f127b7f888e85976a6cfcedd6bd490392e7c8e9f06b8f40ca8"},
  ]},
 {title:"Semicolons &amp; Colons",letter:"E",
  dir:"Choose the correctly punctuated version of each sentence.",
  q:[
   {s:"",o:["The evidence was overwhelming, the jury deliberated for only an hour.","The evidence was overwhelming; the jury deliberated for only an hour.","The evidence was overwhelming: the jury deliberated for only an hour.","The evidence was overwhelming the jury; deliberated for only an hour."],h:"fdad5eff564ffc5ae49b068fe0b00b976295a7a09c6676f456542f5328196e4f"},
   {s:"",o:["Only three suspects remained; the cook, the chauffeur, and the niece.","Only three suspects remained: the cook, the chauffeur, and the niece.","Only three suspects remained, the cook, the chauffeur, and the niece.","Only three suspects: remained the cook, the chauffeur, and the niece."],h:"84f5204bedc780e41fb2e3fd6b24a4401ba029b14ce376ffdeebffe44b50da6c"},
   {s:"",o:["The detective had one rule; never trust a calm witness.","The detective had one rule: never trust a calm witness.","The detective had one rule, never trust a calm witness.","The detective had: one rule never trust a calm witness."],h:"60c3aff4352eea7f8102d05f0200a525a03f0c9a6023e102653fd5c32985a849"},
   {s:"",o:["The first clue was subtle; however, no one noticed it.","The first clue was subtle, however no one noticed it.","The first clue was subtle: however, no one noticed it.","The first clue was subtle however; no one noticed it."],h:"cd3c4b6ec30efdb5362a5db5ba43a943e00f802c84591e73a41782d9b5c10eb2"},
   {s:"",o:["She packed her kit; a magnifying glass, gloves, and a worn notebook.","She packed her kit: a magnifying glass, gloves, and a worn notebook.","She packed her kit, a magnifying glass, gloves, and a worn notebook.","She packed: her kit a magnifying glass, gloves, and a worn notebook."],h:"a035f6747165993339272b40c9ead5ee191b1068a10eaddec4c64b26d861b50a"},
  ]},
 {title:"Coordination &amp; Subordination",letter:"F",
  dir:"Choose the answer that combines the two sentences into ONE smooth, correctly punctuated sentence.",
  q:[
   {s:"The window was locked. The intruder still got in.",o:["Although the window was locked, the intruder still got in.","The window was locked the intruder still got in.","The window was locked, the intruder still got in.","The window was locked, so the intruder still got in."],h:"d38b699eed5514fbf220edf27417048fb451929da8316e954d1044ec04f26618"},
   {s:"The alarm failed. The night guard had fallen asleep.",o:["The alarm failed, the night guard had fallen asleep.","The alarm failed because the night guard had fallen asleep.","The alarm failed the night guard had fallen asleep.","The alarm failed, although the night guard had fallen asleep, too."],h:"a83441dd6c0099dc621a1ab12b03953c391ce57a45fd769a5341443c96c8a769"},
   {s:"The letter arrived on Monday. It changed the entire case.",o:["The letter arrived on Monday it changed the entire case.","The letter arrived on Monday, it changed the entire case.","The letter, which arrived on Monday, changed the entire case.","The letter arrived on Monday, so changing the entire case."],h:"a32bfd9d11bba6dc25f78807ff9378b37cf6643a0b751d623ec268adc2990c51"},
  ]},
 {title:"Parallelism",letter:"G",
  dir:"Choose the sentence with correct parallel structure.",
  q:[
   {s:"",o:["The detective was clever, observant, and acted with caution.","The detective was clever, observant, and cautious.","The detective was clever, observing, and acted with caution.","The detective was a clever, observant, and acted cautiously."],h:"36d462d96a93806af698f2f0eb441bb7540772e75a0f90011c94797ae4f781e7"},
   {s:"",o:["She liked solving puzzles, to question suspects, and the thrill of the chase.","She liked solving puzzles, questioning suspects, and chasing leads.","She liked solving puzzles, to question suspects, and chasing the thrill.","She liked to solve puzzles, questioning suspects, and the chase."],h:"6c5698852ccf147372a12c3d12c19f653dbd0b732afe91f5d914c6097c2088d2"},
   {s:"",o:["The plan required patience, courage, and being lucky.","The plan required patience, courage, and luck.","The plan required patience, to be brave, and luck.","The plan required being patient, courage, and luck."],h:"11e1e0917a02c411dfd2582345c155be4147e214c9b807725617d8f86c8c2324"},
   {s:"",o:["He not only forged the will but also was hiding the body.","He not only forged the will but also hid the body.","He not only forging the will but also hid the body.","He not only forged the will but also the body was hidden."],h:"579144e65b4ada07ba1dce0349ac875cc245b05182b1a998845cf0e9a3421a4f"},
  ]},
 {title:"Misplaced &amp; Dangling Modifiers",letter:"H",
  dir:"Choose the sentence in which the modifier is placed correctly and the meaning is clear.",
  q:[
   {s:"",o:["Covered in dust, the detective found the old diary.","The detective found the old diary, which was covered in dust.","Covered in dust, the old diary was found by the detective who was clean.","The detective found, covered in dust, the old diary by herself."],h:"ed17ec00c98b79b612a513e2e98b5fdc9da082fd0ad7acb7eb69782021655325"},
   {s:"",o:["The witness described the suspect who fled in a trembling voice.","In a trembling voice, the witness described the suspect who fled.","The witness described, in a trembling voice the suspect who fled.","The witness, who fled, described the suspect in a trembling voice."],h:"f266e9641ffc63a29300f78368b812e1949365e3c8b7886520412943e23acebf"},
   {s:"",o:["Running down the corridor, the lights suddenly went out.","As she ran down the corridor, the lights suddenly went out.","Running down the corridor, suddenly the lights went out.","The lights, running down the corridor, suddenly went out."],h:"8b0184adac53388cce1a3b042b19a8ea517db2fdd7c59d047dc03bd3d5355aa0"},
   {s:"",o:["We almost solved every clue in the file.","We solved almost every clue in the file.","We almost solved every clue in the file almost.","Almost we solved every clue in the file."],h:"2384f09bfb624b0bde56afa0395f9d701449ad08f96f759d5819bac0a8032a6f"},
  ]},
 {title:"Agreement &amp; Pronoun Case",letter:"I",
  dir:"Choose the correct word to complete each sentence.",
  q:[
   {s:"Each of the suspects ______ an alibi.",o:["has","have"],h:"02d8d1c7d706121fbc73a1746bb38d9820d4ed606fb85463573d5286b5a19b2f"},
   {s:"Neither the maid nor the twins ______ in the room.",o:["was","were"],h:"2d96d023258ed56dd24a5cbdc46f7e6e2daa9571e93d002857bc5da505508995"},
   {s:"The jury reached ______ verdict.",o:["its","their"],h:"5f3b4e9a834d215d4193119f7c7a8c4d0defe224c7f0cca34fbe803bffe9c022"},
   {s:"Between you and ______, the butler is lying.",o:["I","me"],h:"e16a46405a4a8ddaa1806cde0e7eba2c45e9ab6237721d6db3e88fae6d3b2994"},
   {s:"The detective handed the file to Watson and ______.",o:["I","me"],h:"e16a46405a4a8ddaa1806cde0e7eba2c45e9ab6237721d6db3e88fae6d3b2994"},
   {s:"Everyone must account for ______ whereabouts.",o:["his or her","their"],h:"949ea259b96290f4c8cfa6f5248cbb4b0cb136f76e271ad56e25a84315028a27"},
  ]},
 {title:"Editing Passage",letter:"J",
  dir:"Read the original paragraph, then answer the questions about how to correct it.",
  passage:"The storm had knocked out the power, the guests gathered in the candlelit parlor. Each of them were nervous. Sitting in the corner the detective watched everyone carefully. She noticed a torn glove a muddy boot and footprints leading to the library. Which seemed important. The host insisted that no one leave however the front door stood wide open.",
  q:[
   {s:"“The storm had knocked out the power, the guests gathered in the candlelit parlor.” This sentence is a:",o:["Correctly punctuated sentence","Comma splice","Fragment","Dangling modifier"],h:"8d7798663afa62ed0a159749a565c899b5e574839846cee94ff988f0c02c9e12"},
   {s:"What is the best correction for the sentence in question 1?",o:["The storm had knocked out the power the guests gathered in the candlelit parlor.","When the storm knocked out the power, the guests gathered in the candlelit parlor.","The storm had knocked out the power, the guests, gathered in the candlelit parlor.","The storm had knocked out the power; gathering the guests in the candlelit parlor."],h:"fdcc3952da55e408b60631815a76c872244d069d8e5e794741edfb0b3e8b0834"},
   {s:"“Each of them were nervous.” The correct version is:",o:["Each of them were nervous.","Each of them was nervous.","Each of them are nervous.","Each of them being nervous."],h:"cedd0722f9ee0082b429e54c63761b08c998617047b0d0d3f9a650e980e74052"},
   {s:"“Sitting in the corner the detective watched everyone carefully.” The best correction is:",o:["Sitting in the corner, the detective watched everyone carefully.","Sitting in the corner the detective, watched everyone carefully.","Sitting in the corner the detective watched, everyone carefully.","The detective watched everyone carefully sitting in the corner."],h:"7a110d46b0bdf113f1bbc0351d581e6c01b1afae0877388bfc63228d80d2bbd1"},
   {s:"“She noticed a torn glove a muddy boot and footprints leading to the library.” The correctly punctuated version is:",o:["She noticed a torn glove a muddy boot, and footprints leading to the library.","She noticed a torn glove, a muddy boot, and footprints leading to the library.","She noticed, a torn glove, a muddy boot, and footprints leading to the library.","She noticed a torn glove, a muddy boot and, footprints leading to the library."],h:"1f26b067fdee52ae6622ef1211dd67f51e85649fc1bb7a536e72ad41b309d869"},
   {s:"“Which seemed important.” This word group is a fragment. The best fix is to:",o:["Leave it as its own sentence; it is fine.","Join it to the previous sentence: “...footprints leading to the library, which seemed important.”","Capitalize it: “Which Seemed Important.”","Add a comma: “Which, seemed important.”"],h:"14c5fa79b1c89cdadcb550fabcfbce5317dc271b6c9ff5e21d9e71135c383bee"},
   {s:"“The host insisted that no one leave however the front door stood wide open.” The best correction is:",o:["The host insisted that no one leave, however the front door stood wide open.","The host insisted that no one leave; however, the front door stood wide open.","The host insisted that no one leave however, the front door stood wide open.","The host insisted that no one leave however the front door, stood wide open."],h:"50173449b938ddbdc6f9282a53f721224ac4f045157ff3d97517d2b2689245b3"},
  ]}
];
