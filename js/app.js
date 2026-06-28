/* ============================================================
   ENG 1005 · Grammar & Mechanics Exam — application logic
   Builds the exam from the question bank (questions.js), tracks
   progress, grades on submit, animates the result, supports an
   answer-review mode, and enforces a single attempt per browser
   using localStorage.
   ============================================================ */
const STORAGE_KEY="eng1005_grammar_exam_result_v2";
const LETTERS=["A","B","C","D","E"];
const $=id=>document.getElementById(id);
const esc=t=>(t==null?"":String(t)).replace(/&amp;/g,"&").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

const qMeta=[]; // {name, answer, secIdx}
let total=0;

// ---------- Build the exam form ----------
const form=$("examForm");
let qi=0;
EXAM.forEach((sec,si)=>{
  const wrap=document.createElement("section");wrap.className="qsec";
  wrap.innerHTML='<div class="sec-head"><span class="sec-badge">'+sec.letter+'</span><h3>Section '+sec.letter+' — '+sec.title+'</h3></div>';
  if(sec.dir){const d=document.createElement("div");d.className="sec-dir-card";d.innerHTML=sec.dir;wrap.appendChild(d);}
  if(sec.passage){const p=document.createElement("blockquote");p.className="passage";p.textContent=sec.passage;wrap.appendChild(p);}
  sec.q.forEach((q,i)=>{
    const name="q"+qi;qMeta.push({name:name,answer:q.a,secIdx:si});
    const card=document.createElement("div");card.className="q";card.id="block_"+name;
    let html='<div class="stem"><span class="num">'+(i+1)+'</span><span>'+(q.s?esc(q.s):'<em style="color:#5b7290">Choose the correct sentence.</em>')+'</span></div><div class="opts">';
    q.o.forEach((opt,oi)=>{
      html+='<label class="opt" data-idx="'+oi+'"><input type="radio" name="'+name+'" value="'+oi+'">'
           +'<span class="marker">'+LETTERS[oi]+'</span><span class="txt">'+esc(opt)+'</span></label>';
    });
    html+='</div>';
    card.innerHTML=html;
    wrap.appendChild(card);
    qi++;
  });
  form.appendChild(wrap);
});
total=qMeta.length;
$("barCount").textContent="0 / "+total;

// selection styling + progress
form.addEventListener("change",e=>{
  if(e.target.name && e.target.name.startsWith("q")){
    const block=$("block_"+e.target.name);
    block.querySelectorAll(".opt").forEach(o=>o.classList.remove("sel"));
    e.target.closest(".opt").classList.add("sel");
    block.classList.add("answered");
    updateProgress();
    $("warn").textContent="";
  }
});
function answeredCount(){let n=0;qMeta.forEach(m=>{if(form.querySelector('input[name="'+m.name+'"]:checked'))n++;});return n;}
function updateProgress(){
  const n=answeredCount();
  $("trackFill").style.width=(n/total*100)+"%";
  $("barCount").textContent=n+" / "+total;
}

// ---------- Start flow ----------
$("beginBtn").addEventListener("click",()=>{
  const who=$("studentName").value.trim();
  $("barWho").textContent= who? who : "Exam in progress";
  $("screen-start").classList.add("hidden");
  $("screen-exam").classList.remove("hidden");
  $("screen-exam").classList.add("fade-in");
  window.scrollTo({top:0,behavior:"instant"in window?"instant":"auto"});
});

// ---------- Submit ----------
$("submitBtn").addEventListener("click",()=>{
  const remaining=total-answeredCount();
  if(remaining>0){
    $("warn").textContent="Please answer all questions before submitting — "+remaining+" remaining.";
    const first=qMeta.find(m=>!form.querySelector('input[name="'+m.name+'"]:checked'));
    if(first) $("block_"+first.name).scrollIntoView({behavior:"smooth",block:"center"});
    return;
  }
  if(!confirm("Submit your exam? You can take it only once, and answers can't be changed afterward.")) return;
  grade();
});

function grade(){
  const answers={};let correct=0;
  const perSec=EXAM.map(s=>({correct:0,total:0,title:s.title,letter:s.letter}));
  qMeta.forEach(m=>{
    const sel=form.querySelector('input[name="'+m.name+'"]:checked');
    const val=sel?parseInt(sel.value,10):null;
    answers[m.name]=val;
    perSec[m.secIdx].total++;
    if(val===m.answer){correct++;perSec[m.secIdx].correct++;}
  });
  const percent=Math.round(correct/total*100);
  const rec={
    name:$("studentName").value.trim(),date:$("examDate").value.trim(),
    correct:correct,total:total,percent:percent,answers:answers,
    perSec:perSec,submittedAt:new Date().toISOString()
  };
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(rec));}catch(e){}
  showResult(rec);
}

// ---------- Results ----------
function gradeWord(p){
  if(p>=97)return"A+";if(p>=93)return"A";if(p>=90)return"A−";
  if(p>=87)return"B+";if(p>=83)return"B";if(p>=80)return"B−";
  if(p>=77)return"C+";if(p>=73)return"C";if(p>=70)return"C−";
  if(p>=67)return"D+";if(p>=60)return"D";return"F";
}
function showResult(rec){
  $("screen-start").classList.add("hidden");
  $("screen-exam").classList.add("hidden");
  const r=$("screen-result");r.classList.remove("hidden");r.classList.add("fade-in");
  $("resWho").textContent=rec.name||"Exam complete";
  $("resMeta").textContent=rec.correct+" of "+rec.total+" correct"+(rec.date?(" · "+rec.date):"");
  $("resGrade").textContent="Letter grade: "+gradeWord(rec.percent);
  // ring
  const R=74,C=2*Math.PI*R,fg=$("ringFg");
  fg.style.strokeDasharray=C;fg.style.strokeDashoffset=C;
  // breakdown
  const bd=$("breakdown");bd.innerHTML="";
  (rec.perSec||[]).forEach(s=>{
    const p=s.total?Math.round(s.correct/s.total*100):0;
    const row=document.createElement("div");row.className="brow";
    row.innerHTML='<span class="bname">'+s.letter+' · '+s.title+'</span>'
      +'<span class="bbar"><span style="width:'+p+'%"></span></span>'
      +'<span class="bscore">'+s.correct+'/'+s.total+'</span>';
    bd.appendChild(row);
  });
  // animate number + ring
  window.scrollTo({top:0,behavior:"auto"});
  setTimeout(()=>{fg.style.strokeDashoffset=C*(1-rec.percent/100);},120);
  let cur=0;const pctEl=$("resPct");const step=Math.max(1,Math.round(rec.percent/40));
  const iv=setInterval(()=>{cur+=step;if(cur>=rec.percent){cur=rec.percent;clearInterval(iv);}pctEl.innerHTML=cur+'<small>%</small>';},22);
  // wire review
  $("reviewBtn").onclick=()=>revealAnswers(rec);
}

function revealAnswers(rec){
  qMeta.forEach(m=>{
    const block=$("block_"+m.name);
    const chosen=rec.answers[m.name];
    block.querySelectorAll(".opt").forEach(lbl=>{
      const idx=parseInt(lbl.dataset.idx,10);
      const input=lbl.querySelector("input");input.disabled=true;
      lbl.classList.add("locked");lbl.classList.remove("sel");
      if(idx===m.answer){lbl.classList.add("correct");addTag(lbl,"Correct");}
      if(chosen!=null&&idx===chosen){input.checked=true;if(chosen!==m.answer){lbl.classList.add("wrong");addTag(lbl,"Your answer");}}
    });
  });
  $("submitBtn").parentElement.classList.add("hidden");
  $("warn").classList.add("hidden");
  $("barWho").textContent=(rec.name||"Review")+" — answers";
  $("trackFill").style.width="100%";
  $("barCount").textContent=rec.percent+"%";
  $("screen-result").classList.add("hidden");
  $("screen-exam").classList.remove("hidden");
  window.scrollTo({top:0,behavior:"auto"});
}
function addTag(lbl,text){
  if(lbl.querySelector(".tag"))return;
  const t=document.createElement("span");t.className="tag";t.textContent=text;lbl.appendChild(t);
}

// ---------- Lock on load (already completed) ----------
(function init(){
  let saved=null;try{saved=JSON.parse(localStorage.getItem(STORAGE_KEY));}catch(e){}
  if(saved&&typeof saved.percent==="number"){
    if(saved.name)$("studentName").value=saved.name;
    if(saved.date)$("examDate").value=saved.date;
    $("studentName").disabled=true;$("examDate").disabled=true;
    $("beginBtn").disabled=true;$("beginBtn").textContent="Exam already completed";
    $("lock-on-start").innerHTML='<div class="lock-banner"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg><span>This exam has already been completed'+(saved.name?(' by <strong>'+esc(saved.name)+'</strong>'):'')+'. Recorded score: <strong>'+saved.percent+'%</strong>. It cannot be retaken.</span></div>';
    showResult(saved);
  }
})();
