/* ============================================================
   ENG 1005 · Writing About Mystery and Thriller
   Exam question bank — original course material

   This is the instructor's own content: a sentence-structure,
   grammar, and mechanics exam themed around the mystery &
   thriller genre studied in ENG 1005. Each question is grounded
   in the genre (detectives, locked rooms, alibis, clues) rather
   than generic placeholder text.

   Data shape for each question:
     s : the question stem / prompt (may be empty for "pick the
         correctly written sentence" items)
     o : array of answer options (2–4 choices)
     a : index of the correct option (0 = A, 1 = B, ...)
   ============================================================ */
const EXAM = [
 {title:"Sentence Grammar",letter:"A",
  dir:"Choose whether each word group is an independent clause (IC) — a complete thought that can stand alone — or a subordinate clause (SC) — a dependent thought that cannot.",
  q:[
   {s:"When the detective examined the muddy footprints",o:["Independent clause (IC)","Subordinate clause (SC)"],a:1},
   {s:"The butler had vanished before midnight",o:["Independent clause (IC)","Subordinate clause (SC)"],a:0},
   {s:"Because the will named an unexpected heir",o:["Independent clause (IC)","Subordinate clause (SC)"],a:1},
   {s:"Three guests refused to leave the locked study",o:["Independent clause (IC)","Subordinate clause (SC)"],a:0},
   {s:"Although the alibi seemed airtight",o:["Independent clause (IC)","Subordinate clause (SC)"],a:1}
 ]},
 {title:"Sentence Fragments",letter:"B",
  dir:"Choose the answer that correctly labels the item and, if it is a fragment, gives the best complete sentence.",
  q:[
   {s:"Hiding in the shadows near the conservatory.",o:["Complete sentence; no change needed.","Fragment → The killer was hiding in the shadows near the conservatory.","Fragment → Hiding in the shadows. Near the conservatory.","Fragment → Hiding in the shadows near the conservatory, quietly."],a:1},
   {s:"The inspector questioned every suspect twice.",o:["Complete sentence; no change needed.","Fragment → Because the inspector questioned every suspect twice.","Fragment → The inspector questioning every suspect twice.","Fragment → Questioned every suspect twice."],a:0},
   {s:"Which explained the missing key.",o:["Complete sentence; no change needed.","Fragment → Which explained the missing key, finally.","Fragment → The hidden compartment explained the missing key.","Fragment → Which, of course, explained the missing key."],a:2},
   {s:"Because no one had heard the gunshot.",o:["Complete sentence; no change needed.","Fragment → Because no one had heard the gunshot, the body lay undiscovered for hours.","Fragment → Because no one had heard the gunshot at all.","Fragment → No one. Because they had not heard the gunshot."],a:1},
   {s:"A single clue remained on the desk.",o:["Complete sentence; no change needed.","Fragment → A single clue. Remaining on the desk.","Fragment → Although a single clue remained on the desk.","Fragment → A single clue remaining on the desk."],a:0}
 ]},
 {title:"Comma Splices &amp; Fused Sentences",letter:"C",
  dir:"Choose the answer that correctly labels the error — comma splice (CS) or fused/run-on (FS) — and gives a correct revision.",
  q:[
   {s:"The lights went out, no one screamed.",o:["Comma splice → The lights went out, but no one screamed.","Fused sentence → The lights went out no one screamed.","Comma splice → The lights went out, no one, screamed.","Correct as written."],a:0},
   {s:"The clock struck twelve the body was discovered.",o:["Comma splice → The clock struck twelve, the body was discovered.","Fused sentence → When the clock struck twelve, the body was discovered.","Fused sentence → The clock struck twelve the body, was discovered.","Correct as written."],a:1},
   {s:"She suspected the gardener he had motive and opportunity.",o:["Comma splice → She suspected the gardener, he had motive and opportunity.","Fused sentence → She suspected the gardener; he had motive and opportunity.","Fused sentence → She suspected the gardener he had, motive and opportunity.","Correct as written."],a:1},
   {s:"The note was unsigned, it pointed to an inside job.",o:["Comma splice → The note was unsigned, but it pointed to an inside job.","Fused sentence → The note was unsigned it pointed to an inside job.","Comma splice → The note was unsigned it, pointed to an inside job.","Correct as written."],a:0},
   {s:"Detective Stone reread the letter then she called the station.",o:["Comma splice → Detective Stone reread the letter, then she called the station.","Fused sentence → Detective Stone reread the letter; then she called the station.","Fused sentence → Detective Stone reread the letter then, she called the station.","Correct as written."],a:1}
 ]},
 {title:"Commas",letter:"D",
  dir:"Choose the sentence with commas placed correctly.",
  q:[
   {s:"",o:["After the storm passed, the investigators returned to the cliff house.","After the storm, passed the investigators returned to the cliff house.","After the storm passed the investigators, returned to the cliff house.","After, the storm passed the investigators returned to the cliff house."],a:0},
   {s:"",o:["The suspect, tall pale and nervous avoided eye contact.","The suspect, tall, pale, and nervous, avoided eye contact.","The suspect tall, pale, and nervous avoided eye contact.","The suspect, tall, pale and nervous avoided, eye contact."],a:1},
   {s:"",o:["Yes the safe, had been opened from the inside.","Yes, the safe had been opened from the inside.","Yes the safe had been opened, from the inside.","Yes, the safe had been opened, from the inside."],a:1},
   {s:"",o:["Agatha Christie who wrote And Then There Were None, mastered the locked-room puzzle.","Agatha Christie, who wrote And Then There Were None, mastered the locked-room puzzle.","Agatha Christie, who wrote And Then There Were None mastered the locked-room puzzle.","Agatha Christie who wrote, And Then There Were None, mastered the locked-room puzzle."],a:1},
   {s:"",o:["The maid found a torn ticket, a broken watch, and a bloody glove.","The maid found a torn ticket a broken watch, and a bloody glove.","The maid found, a torn ticket, a broken watch, and a bloody glove.","The maid found a torn ticket, a broken watch and, a bloody glove."],a:0}
 ]},
 {title:"Semicolons &amp; Colons",letter:"E",
  dir:"Choose the correctly punctuated version of each sentence.",
  q:[
   {s:"",o:["The evidence was overwhelming, the jury deliberated for only an hour.","The evidence was overwhelming; the jury deliberated for only an hour.","The evidence was overwhelming: the jury deliberated for only an hour.","The evidence was overwhelming the jury; deliberated for only an hour."],a:1},
   {s:"",o:["Only three suspects remained; the cook, the chauffeur, and the niece.","Only three suspects remained: the cook, the chauffeur, and the niece.","Only three suspects remained, the cook, the chauffeur, and the niece.","Only three suspects: remained the cook, the chauffeur, and the niece."],a:1},
   {s:"",o:["The detective had one rule; never trust a calm witness.","The detective had one rule: never trust a calm witness.","The detective had one rule, never trust a calm witness.","The detective had: one rule never trust a calm witness."],a:1},
   {s:"",o:["The first clue was subtle; however, no one noticed it.","The first clue was subtle, however no one noticed it.","The first clue was subtle: however, no one noticed it.","The first clue was subtle however; no one noticed it."],a:0},
   {s:"",o:["She packed her kit; a magnifying glass, gloves, and a worn notebook.","She packed her kit: a magnifying glass, gloves, and a worn notebook.","She packed her kit, a magnifying glass, gloves, and a worn notebook.","She packed: her kit a magnifying glass, gloves, and a worn notebook."],a:1}
 ]},
 {title:"Coordination &amp; Subordination",letter:"F",
  dir:"Choose the answer that combines the two sentences into ONE smooth, correctly punctuated sentence.",
  q:[
   {s:"The window was locked. The intruder still got in.",o:["Although the window was locked, the intruder still got in.","The window was locked the intruder still got in.","The window was locked, the intruder still got in.","The window was locked, so the intruder still got in."],a:0},
   {s:"The alarm failed. The night guard had fallen asleep.",o:["The alarm failed, the night guard had fallen asleep.","The alarm failed because the night guard had fallen asleep.","The alarm failed the night guard had fallen asleep.","The alarm failed, although the night guard had fallen asleep, too."],a:1},
   {s:"The letter arrived on Monday. It changed the entire case.",o:["The letter arrived on Monday it changed the entire case.","The letter arrived on Monday, it changed the entire case.","The letter, which arrived on Monday, changed the entire case.","The letter arrived on Monday, so changing the entire case."],a:2}
 ]},
 {title:"Parallelism",letter:"G",
  dir:"Choose the sentence with correct parallel structure.",
  q:[
   {s:"",o:["The detective was clever, observant, and acted with caution.","The detective was clever, observant, and cautious.","The detective was clever, observing, and acted with caution.","The detective was a clever, observant, and acted cautiously."],a:1},
   {s:"",o:["She liked solving puzzles, to question suspects, and the thrill of the chase.","She liked solving puzzles, questioning suspects, and chasing leads.","She liked solving puzzles, to question suspects, and chasing the thrill.","She liked to solve puzzles, questioning suspects, and the chase."],a:1},
   {s:"",o:["The plan required patience, courage, and being lucky.","The plan required patience, courage, and luck.","The plan required patience, to be brave, and luck.","The plan required being patient, courage, and luck."],a:1},
   {s:"",o:["He not only forged the will but also was hiding the body.","He not only forged the will but also hid the body.","He not only forging the will but also hid the body.","He not only forged the will but also the body was hidden."],a:1}
 ]},
 {title:"Misplaced &amp; Dangling Modifiers",letter:"H",
  dir:"Choose the sentence in which the modifier is placed correctly and the meaning is clear.",
  q:[
   {s:"",o:["Covered in dust, the detective found the old diary.","The detective found the old diary, which was covered in dust.","Covered in dust, the old diary was found by the detective who was clean.","The detective found, covered in dust, the old diary by herself."],a:1},
   {s:"",o:["The witness described the suspect who fled in a trembling voice.","In a trembling voice, the witness described the suspect who fled.","The witness described, in a trembling voice the suspect who fled.","The witness, who fled, described the suspect in a trembling voice."],a:1},
   {s:"",o:["Running down the corridor, the lights suddenly went out.","As she ran down the corridor, the lights suddenly went out.","Running down the corridor, suddenly the lights went out.","The lights, running down the corridor, suddenly went out."],a:1},
   {s:"",o:["We almost solved every clue in the file.","We solved almost every clue in the file.","We almost solved every clue in the file almost.","Almost we solved every clue in the file."],a:1}
 ]},
 {title:"Agreement &amp; Pronoun Case",letter:"I",
  dir:"Choose the correct word to complete each sentence.",
  q:[
   {s:"Each of the suspects ______ an alibi.",o:["has","have"],a:0},
   {s:"Neither the maid nor the twins ______ in the room.",o:["was","were"],a:1},
   {s:"The jury reached ______ verdict.",o:["its","their"],a:0},
   {s:"Between you and ______, the butler is lying.",o:["I","me"],a:1},
   {s:"The detective handed the file to Watson and ______.",o:["I","me"],a:1},
   {s:"Everyone must account for ______ whereabouts.",o:["his or her","their"],a:0}
 ]},
 {title:"Editing Passage",letter:"J",
  dir:"Read the original paragraph, then answer the questions about how to correct it.",
  passage:"The storm had knocked out the power, the guests gathered in the candlelit parlor. Each of them were nervous. Sitting in the corner the detective watched everyone carefully. She noticed a torn glove a muddy boot and footprints leading to the library. Which seemed important. The host insisted that no one leave however the front door stood wide open.",
  q:[
   {s:"“The storm had knocked out the power, the guests gathered in the candlelit parlor.” This sentence is a:",o:["Correctly punctuated sentence","Comma splice","Fragment","Dangling modifier"],a:1},
   {s:"What is the best correction for the sentence in question 1?",o:["The storm had knocked out the power the guests gathered in the candlelit parlor.","When the storm knocked out the power, the guests gathered in the candlelit parlor.","The storm had knocked out the power, the guests, gathered in the candlelit parlor.","The storm had knocked out the power; gathering the guests in the candlelit parlor."],a:1},
   {s:"“Each of them were nervous.” The correct version is:",o:["Each of them were nervous.","Each of them was nervous.","Each of them are nervous.","Each of them being nervous."],a:1},
   {s:"“Sitting in the corner the detective watched everyone carefully.” The best correction is:",o:["Sitting in the corner, the detective watched everyone carefully.","Sitting in the corner the detective, watched everyone carefully.","Sitting in the corner the detective watched, everyone carefully.","The detective watched everyone carefully sitting in the corner."],a:0},
   {s:"“She noticed a torn glove a muddy boot and footprints leading to the library.” The correctly punctuated version is:",o:["She noticed a torn glove a muddy boot, and footprints leading to the library.","She noticed a torn glove, a muddy boot, and footprints leading to the library.","She noticed, a torn glove, a muddy boot, and footprints leading to the library.","She noticed a torn glove, a muddy boot and, footprints leading to the library."],a:1},
   {s:"“Which seemed important.” This word group is a fragment. The best fix is to:",o:["Leave it as its own sentence; it is fine.","Join it to the previous sentence: “...footprints leading to the library, which seemed important.”","Capitalize it: “Which Seemed Important.”","Add a comma: “Which, seemed important.”"],a:1},
   {s:"“The host insisted that no one leave however the front door stood wide open.” The best correction is:",o:["The host insisted that no one leave, however the front door stood wide open.","The host insisted that no one leave; however, the front door stood wide open.","The host insisted that no one leave however, the front door stood wide open.","The host insisted that no one leave however the front door, stood wide open."],a:1}
 ]}
];
