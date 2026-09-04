(()=>{
  'use strict';

  const caseHeaders={
    1:{zh:'第 1 案 · 窗边消失的植物 · 难度 ★☆☆☆☆',en:'Case 1 · The Missing Window Plant · Difficulty ★☆☆☆☆'},
    2:{zh:'第 2 案 · 凌晨亮起的裁缝店 · 难度 ★★☆☆☆',en:'Case 2 · The Tailor Shop Lit at Midnight · Difficulty ★★☆☆☆'},
    3:{zh:'第 3 案 · 没有寄出的信 · 难度 ★★☆☆☆',en:'Case 3 · The Unsent Letter · Difficulty ★★☆☆☆'},
    4:{zh:'第 4 案 · 提前响起的钟 · 难度 ★★★☆☆',en:'Case 4 · The Early Chime · Difficulty ★★★☆☆'},
    5:{zh:'第 5 案 · 面包房的空架 · 难度 ★★★☆☆',en:'Case 5 · The Empty Bakery Rack · Difficulty ★★★☆☆'},
    6:{zh:'第 6 案 · 河边熄灭的灯 · 难度 ★★★★☆',en:'Case 6 · The Light That Went Out by the River · Difficulty ★★★★☆'}
  };

  const nextCases={
    2:{zh:'CASE 02 · 凌晨亮起的裁缝店',en:'CASE 02 · The Tailor Shop Lit at Midnight'},
    3:{zh:'CASE 03 · 没有寄出的信',en:'CASE 03 · The Unsent Letter'},
    4:{zh:'CASE 04 · 提前响起的钟',en:'CASE 04 · The Early Chime'},
    5:{zh:'CASE 05 · 面包房的空架',en:'CASE 05 · The Empty Bakery Rack'},
    6:{zh:'CASE 06 · 河边熄灭的灯',en:'CASE 06 · The Light That Went Out by the River'}
  };

  const translations=[
    ['土','Soil'],
    ['移动鼠标寻找可调查区域；已调查位置会显示 ✓','Move the pointer to find areas to investigate; discovered locations show a ✓.'],
    ['窗边展示的银叶草不见了。请查明植物去了哪里，以及为什么被移动。','The silverleaf displayed by the window is missing. Determine where it went and why it was moved.'],
    ['移动记录与柜中的植物说明了完整去向。','The movement record and the plant in the cabinet establish its final location.'],
    ['窗框正下方有一条细长水迹，附近叶片上也留有水珠。','A narrow water trail lies below the window frame, and nearby leaves still hold droplets.'],
    ['环境痕迹','Environmental Trace'],
    ['浅色圆痕与银叶草花盆大小相符。花盆应该是被平稳拿走的。','The pale circular mark matches the silverleaf pot, suggesting it was lifted away carefully.'],
    ['位置痕迹','Positional Trace'],
    ['误导线索','Distractor'],
    ['关门检查表','Closing Checklist'],
    ['强降雨提醒','Heavy Rain Alert'],
    ['自动天气提醒显示：昨晚 20:30 至 22:00 有强降雨。','The automated weather alert shows heavy rain from 20:30 to 22:00 last night.'],
    ['辅助线索','Supporting Clue'],
    ['抹布仍是湿的，水痕从窗边延伸到水槽，而不是从水壶延伸到窗边。','The cloth is still wet, and the water trail runs from the window to the sink, not from the watering can to the window.'],
    ['位置证据','Location Evidence'],
    ['后门锁好，门边没有泥土、鞋印或强行进入的痕迹。','The back door is locked, with no mud, footprints, or signs of forced entry.'],
    ['营养土旁的泥粒','Soil Granules by the Potting Mix'],
    ['泥粒来自一袋刚打开的营养土，包装边缘也有相同泥土。','The granules came from a newly opened bag of potting mix, whose edge has the same soil.'],
    ['如何调查','How to Investigate'],
    ['先阅读右侧的案件问题，再自由调查并选择证据。发现至少三条线索后即可提交结论；如果证据链不完整，系统会指出还缺少哪一类证据。','Read the case question on the right, then investigate freely and select evidence. You may submit after finding at least three clues; if the evidence chain is incomplete, the game will identify what is missing.'],
    ['明白了','Got It'],
    ['提交推理','Submit Reasoning'],
    ['银叶草没有失窃。昨晚强降雨造成窗边渗水，关店人员把植物移到储物柜下层，并在花盆底部垫上干毛巾。','The silverleaf was not stolen. Heavy rain caused water to enter by the window, so the closing staff moved the plant to the lower cabinet and placed a dry towel beneath the pot.'],
    ['强降雨开始，临街窗户出现渗水。','Heavy rain began, and water entered through the street-facing window.'],
    ['关店人员检查窗户，发现展示台开始积水。','The closing staff checked the window and found water collecting on the display table.'],
    ['银叶草被移到储物柜下层，花盆下方垫上干毛巾。','The silverleaf was moved to the lower cabinet with a dry towel beneath the pot.'],
    ['次日','Next Day'],
    ['店主看到空展示台，却没有注意检查表最后一行。','The owner saw the empty display table but missed the final line of the checklist.'],
    ['真相不藏在单一线索中，而藏在水迹、记录与物品位置之间的联系中。','The truth lies not in a single clue, but in the connection between the water marks, the record, and the object’s location.'],
    ['凌晨 2:10，裁缝店工作灯自行亮了二十分钟。请查明原因，以及为什么只有工作区设备启动。','At 2:10 a.m., the tailor shop work light turned on by itself for twenty minutes. Determine why, and why only the work-area equipment started.'],
    ['工作灯与熨斗可被同一装置控制。','The work light and iron can be controlled by the same device.'],
    ['新关联：设备共用回路','New connection: Shared Equipment Circuit'],
    ['门锁和封条均保持完整。','The door lock and seal remain intact.'],
    ['时间与排除','Timeline and Elimination'],
    ['缺失记录','Missing Record'],
    ['独立工作灯','Independent Work Light'],
    ['不属于总照明，电源线通向熨衣板下方。','It is separate from the main lighting, and its cable runs beneath the ironing board.'],
    ['设备连接','Device Connection'],
    ['未通电的缝纫机','Unpowered Sewing Machine'],
    ['主开关关闭，针头位置没有变化。','The main switch is off, and the needle position has not changed.'],
    ['排除行为','Behavioral Elimination'],
    ['未完成的童装','Unfinished Child’s Garment'],
    ['没有新增针脚，凌晨没有人在缝制。','There are no new stitches; nobody was sewing overnight.'],
    ['行为痕迹','Activity Trace'],
    ['九点交付订单','9:00 Delivery Order'],
    ['备注写着“先预热熨斗，灯留二十分钟”。','The note says, “Preheat the iron first; leave the light on for twenty minutes.”'],
    ['有余温的熨斗','Still-Warm Iron'],
    ['电源线与工作灯汇入同一插座。','Its power cable and the work light lead to the same outlet.'],
    ['时间异常的定时插座','Misconfigured Timer Outlet'],
    ['时钟慢 3 小时 35 分，记录显示 2:10 开启、2:30 关闭。','Its clock is 3 hours 35 minutes slow; the log shows it switched on at 2:10 and off at 2:30.'],
    ['关键设备','Key Device'],
    ['布料碎片','Fabric Scrap'],
    ['边缘已有灰尘，不是凌晨留下的。','Dust has collected along its edge, so it was not left overnight.'],
    ['先阅读案件问题，再自由调查并选择证据。发现至少四条线索后即可提交结论；如果证据链不完整，系统会指出还缺少哪一类证据。','Read the case question, then investigate freely and select evidence. You may submit after finding at least four clues; if the evidence chain is incomplete, the game will identify what is missing.'],
    ['没有人进入裁缝店。短暂停电扰乱了定时插座的时钟，恢复供电后，插座在错误时间执行了尚未清除的二十分钟照明和预热程序。','Nobody entered the tailor shop. A brief outage disrupted the timer outlet’s clock; when power returned, it ran an uncleared twenty-minute lighting and preheating program at the wrong time.'],
    ['工作灯和熨斗接入定时回路。','The work light and iron were connected to the timed circuit.'],
    ['短暂停电后恢复供电。','Power returned after a brief outage.'],
    ['时间错乱的插座执行旧程序。','The misconfigured outlet ran the old program.'],
    ['程序结束，工作灯自动熄灭。','The program ended, and the work light switched off automatically.'],
    ['地址待确认','Address Pending Confirmation'],
    ['未签名','Unsigned'],
    ['九点钟声','Nine O’Clock Chime'],
    ['活动时间表','Event Schedule'],
    ['20:40  九点钟声','20:40  Nine O’Clock Chime'],
    ['更换电池','Battery Replaced'],
    ['烘焙批次','Baking Batch'],
    ['出炉 48','Baked 48'],
    ['入库 24','Stocked 24'],
    ['销售 0','Sold 0'],
    ['员工钥匙','Employee Key'],
    ['旧渡口 · 24个','Old Landing · 24'],
    ['夜间装卸','Night Loading'],
    ['水位','Water Level'],
    ['“看到人影”','“Saw a Figure”'],
    ['系统日志','System Log'],
    ['R-07 恢复测试','R-07 Restoration Test'],
    ['手动输入','Manual Entry']
  ];

  const englishAliases=new Map([
    ['窗框正下方有一 clues细长水迹，附近叶片上也留有水珠。','A narrow water trail lies below the window frame, and nearby leaves still hold droplets.'],
    ['Automated Weather Alert显示：昨晚 20:30 至 22:00 有强降雨。','The automated weather alert shows heavy rain from 20:30 to 22:00 last night.'],
    ['先阅读右侧的Case Question，再自由调查并选择证据。发现至少三 clues线索后即可Submit Conclusion；如果The evidence chain is incomplete，系统会指出还缺少哪一类证据。','Read the case question on the right, then investigate freely and select evidence. You may submit after finding at least three clues; if the evidence chain is incomplete, the game will identify what is missing.'],
    ['New connection: 设备共用回路','New connection: Shared Equipment Circuit'],
    ['门锁和封 clues均保持完整。','The door lock and seal remain intact.'],
    ['时间异常的Timer Outlet','Misconfigured Timer Outlet'],
    ['先阅读Case Question，再自由调查并选择证据。发现至少四 clues线索后即可Submit Conclusion；如果The evidence chain is incomplete，系统会指出还缺少哪一类证据。','Read the case question, then investigate freely and select evidence. You may submit after finding at least four clues; if the evidence chain is incomplete, the game will identify what is missing.'],
    ['没有人进入裁缝店。短暂停电扰乱了Timer Outlet的时钟，恢复供电后，插座在错误时间执行了尚未清除的二十分钟照明和预热程序。','Nobody entered the tailor shop. A brief outage disrupted the timer outlet’s clock; when power returned, it ran an uncleared twenty-minute lighting and preheating program at the wrong time.']
  ]);

  const toEnglish=new Map(translations);
  for(const [source,target] of englishAliases) toEnglish.set(source,target);
  const toChinese=new Map(translations.map(([source,target])=>[target,source]));
  const match=location.pathname.match(/case_0([1-6])\.html$/);
  const caseId=match?Number(match[1]):null;
  if(!caseId) return;

  let activeLang=localStorage.getItem('quietTownLang')||'zh';
  let analyticsAttemptCount=0;
  let analyticsCompleteSent=false;
  window.quietTownAnalytics={
    capture(eventName,properties={}){
      if(parent===window) return;
      parent.postMessage({
        type:'analytics',
        eventName,
        properties:{game_id:'quiet-town',case_id:caseId,language:activeLang,...properties}
      },location.origin);
    }
  };
  let caseContext={caseId,canPrevious:false,canNext:false};
  let completionContext={newlyUnlockedCaseId:null};

  const sharedStyles=document.createElement('style');
  sharedStyles.id='case-ui-shared-styles';
  sharedStyles.textContent=`
    .top{position:relative;min-height:58px;padding:0 4px;align-items:center;gap:14px}
    .brand{min-width:0;flex:1 1 auto}
    .brand h1{margin:0;font-size:28px;line-height:1.08;letter-spacing:-.04em}
    .brand p{display:block;margin:4px 0 0;color:var(--muted);font-size:12px;line-height:1.3}
    .top-actions{display:flex;align-items:center;gap:7px;flex:0 0 auto}
    .case-menu-panel{display:flex;align-items:center;gap:7px}
    .top-actions .soft{min-height:38px;border:1px solid #fff;background:#fff9edcc;border-radius:12px;padding:8px 11px;color:var(--ink);font-size:14px;font-weight:800;white-space:nowrap}
    .top-actions .soft:hover:not(:disabled){background:#fffdf7}
    .top-actions .soft:disabled{opacity:.42;cursor:not-allowed}
    .case-more{display:none;font-size:18px;line-height:1;min-width:38px;padding-inline:8px!important}
    .case-home-short{display:none}
    .case-complete{max-height:calc(100dvh - 24px);overflow:auto}
    .case-complete .success-intro{margin:0 auto 14px;padding:12px 16px;border:1px solid #b8ccb9;border-radius:15px;background:#e6f0e3;color:#365845}
    .case-complete .success-intro h2{margin:0;font-size:clamp(25px,4vw,36px)}
    .case-complete .success-intro p{margin:5px 0 0;color:#4e6658;font-weight:650}
    .case-complete .case-solved-title{font-size:clamp(27px,4vw,38px);margin:8px 0}
    .case-complete .seal{transform:rotate(-7deg);transform-origin:center}
    dialog[open] .case-complete .seal{animation:quiet-stamp .42s cubic-bezier(.2,.8,.25,1) both}
    @keyframes quiet-stamp{0%{opacity:0;transform:rotate(-10deg) scale(1.15)}100%{opacity:1;transform:rotate(-7deg) scale(1)}}
    .case-complete .chapter-clue,.case-complete .archive-card,.case-complete .unlock-card{position:relative;margin:14px 0 0;padding:12px 14px;border:1px solid #c7d5c7;border-radius:14px;background:#e8efe3;text-align:left;color:#52655a;line-height:1.5}
    .case-complete .reward-heading{display:block;margin-bottom:3px;color:#3e614c}
    .case-complete .reward-plus{position:absolute;right:12px;top:10px;padding:2px 7px;border-radius:999px;background:#607f6b;color:#fff;font-size:11px;font-weight:900}
    .case-complete .unlock-card{background:#f3ead8;border-color:#dacba9}
    .case-complete .unlock-card[hidden]{display:none}
    @media(max-width:850px){.brand p{display:block}}
    @media(max-width:600px){
      .app{padding:7px;gap:7px}
      .top{display:grid;grid-template-columns:minmax(0,1fr) auto;min-height:58px;padding:0 1px;gap:7px}
      .brand h1{font-size:19px;white-space:nowrap}
      .brand p{font-size:10.5px;line-height:1.2;white-space:normal}
      .top-actions{gap:5px}
      .top-actions .soft{min-height:32px;border-radius:9px;padding:5px 8px;font-size:12px}
      .case-more{display:inline-flex;align-items:center;justify-content:center}
      .case-home-full{display:none}
      .case-home-short{display:inline}
      .case-menu-panel{display:none;position:absolute;z-index:60;right:0;top:calc(100% + 5px);width:min(230px,calc(100vw - 16px));padding:7px;border:1px solid #d8d1c2;border-radius:13px;background:#fffaf0;box-shadow:0 12px 30px #263e3833}
      .top-actions.menu-open .case-menu-panel{display:grid;grid-template-columns:1fr 1fr;gap:6px}
      .case-menu-panel .soft{width:100%;min-height:38px}
      .case-complete{padding:16px}
      .case-complete .success-intro{margin-bottom:10px;padding:10px 12px}
      .case-complete .dialog-actions{position:sticky;bottom:-16px;margin-inline:-16px;padding:10px 16px;background:linear-gradient(transparent,#fffaf0 28%)}
    }
    @media(prefers-reduced-motion:reduce){dialog[open] .case-complete .seal{animation:none}}
  `;
  document.head.append(sharedStyles);

  function makeButton(id,className,label){
    const button=document.createElement('button');
    button.type='button';
    button.id=id;
    button.className=`soft ${className}`;
    button.textContent=label;
    return button;
  }

  const topActions=document.querySelector('.top-actions');
  const helpButton=document.getElementById('helpBtn');
  const resetButton=document.getElementById('resetBtn');
  const originalResetHandler=resetButton.onclick;
  if(originalResetHandler){
    resetButton.onclick=function(event){
      let confirmed=false;
      const originalConfirm=window.confirm;
      window.confirm=(...args)=>{
        const result=originalConfirm(...args);
        if(result) confirmed=true;
        return result;
      };
      try{originalResetHandler.call(this,event)}
      finally{window.confirm=originalConfirm}
      if(confirmed) window.quietTownAnalytics.capture('game_restart');
    };
  }
  const menuPanel=document.createElement('div');
  menuPanel.className='case-menu-panel';
  menuPanel.id='caseMenuPanel';
  const previousButton=makeButton('casePrevious','case-nav-button','上一案');
  const nextButton=makeButton('caseNext','case-nav-button','下一案');
  menuPanel.append(previousButton,nextButton,helpButton,resetButton);
  const languageButton=makeButton('caseLanguage','case-primary-button','EN');
  const homeButton=makeButton('caseHome','case-primary-button','');
  homeButton.innerHTML='<span class="case-home-full">返回案件列表</span><span class="case-home-short">返回</span>';
  const moreButton=makeButton('caseMore','case-more','•••');
  moreButton.setAttribute('aria-controls','caseMenuPanel');
  moreButton.setAttribute('aria-expanded','false');
  topActions.replaceChildren(menuPanel,homeButton,languageButton,moreButton);

  function sendParent(type){
    if(parent===window){
      if(type==='returnLibrary') location.href='index.html';
      return;
    }
    parent.postMessage({type},'*');
  }

  previousButton.addEventListener('click',()=>sendParent('previousCase'));
  nextButton.addEventListener('click',()=>sendParent('nextCase'));
  homeButton.addEventListener('click',()=>sendParent('returnLibrary'));
  languageButton.addEventListener('click',()=>{
    const lang=activeLang==='zh'?'en':'zh';
    localStorage.setItem('quietTownLang',lang);
    window.postMessage({type:'setLanguage',lang},'*');
    if(parent!==window) parent.postMessage({type:'setLanguage',lang},'*');
  });
  moreButton.addEventListener('click',event=>{
    event.stopPropagation();
    const open=topActions.classList.toggle('menu-open');
    moreButton.setAttribute('aria-expanded',String(open));
  });
  menuPanel.addEventListener('click',()=>{
    topActions.classList.remove('menu-open');
    moreButton.setAttribute('aria-expanded','false');
  });
  document.addEventListener('click',event=>{
    if(!topActions.contains(event.target)){
      topActions.classList.remove('menu-open');
      moreButton.setAttribute('aria-expanded','false');
    }
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){
      topActions.classList.remove('menu-open');
      moreButton.setAttribute('aria-expanded','false');
    }
  });

  document.addEventListener('click',event=>{
    if(!event.target.closest('[data-evidence]')) return;
    const selectedCount=document.querySelectorAll('.clue.selected').length;
    window.quietTownAnalytics.capture('evidence_select',{selected_count:selectedCount});
  });
  document.addEventListener('submit',event=>{
    if(!event.target.closest('.investigation')) return;
    analyticsAttemptCount+=1;
    const isCorrect=Boolean(document.querySelector('.case-complete')?.closest('dialog')?.open);
    window.quietTownAnalytics.capture('conclusion_submit',{
      is_correct:isCorrect,
      attempt_number:analyticsAttemptCount
    });
    if(isCorrect&&!analyticsCompleteSent){
      analyticsCompleteSent=true;
      window.quietTownAnalytics.capture('case_complete',{attempt_count:analyticsAttemptCount});
    }
  });

  const completeBody=document.querySelector('.case-complete');
  if(completeBody){
    const intro=document.createElement('div');
    intro.className='success-intro';
    intro.innerHTML='<h2></h2><p></p>';
    const seal=completeBody.querySelector('.seal');
    completeBody.insertBefore(intro,seal);
    const solvedTitle=seal?.nextElementSibling;
    if(solvedTitle?.tagName==='H2') solvedTitle.classList.add('case-solved-title');

    let reward=completeBody.querySelector('.chapter-clue');
    if(reward){
      reward.querySelector('b')?.classList.add('reward-heading');
      const plus=document.createElement('span');
      plus.className='reward-plus';
      plus.textContent='+1';
      reward.append(plus);
    }else{
      reward=document.createElement('div');
      reward.className='archive-card';
      const actions=completeBody.querySelector('.dialog-actions');
      completeBody.insertBefore(reward,actions);
    }

    const unlockCard=document.createElement('div');
    unlockCard.className='unlock-card';
    unlockCard.hidden=true;
    const actions=completeBody.querySelector('.dialog-actions');
    completeBody.insertBefore(unlockCard,actions);
  }

  function replaceMappedText(map){
    const nodes=[];
    for(const element of document.body.querySelectorAll('*')){
      if(['SCRIPT','STYLE'].includes(element.tagName)) continue;
      for(const node of element.childNodes) if(node.nodeType===Node.TEXT_NODE) nodes.push(node);
    }
    for(const node of nodes){
      const source=node.nodeValue;
      const trimmed=source.trim();
      const replacement=map.get(trimmed);
      if(!replacement||replacement===trimmed) continue;
      const leading=source.match(/^\s*/)[0];
      const trailing=source.match(/\s*$/)[0];
      node.replaceWith(document.createTextNode(leading+replacement+trailing));
    }
  }

  function syncCaseUI(nextLang){
    activeLang=nextLang||(localStorage.getItem('quietTownLang')||'zh');
    const isEnglish=activeLang==='en';
    document.querySelector('.brand h1').textContent=isEnglish?'Quiet Town Archives':'静谧小镇档案';
    document.querySelector('.brand p').textContent=caseHeaders[caseId][isEnglish?'en':'zh'];
    document.documentElement.lang=isEnglish?'en':'zh-CN';
    document.title=isEnglish?'Quiet Town Archives':'静谧小镇档案';
    replaceMappedText(isEnglish?toEnglish:toChinese);
    previousButton.textContent=isEnglish?'Previous Case':'上一案';
    nextButton.textContent=isEnglish?'Next Case':'下一案';
    helpButton.textContent=isEnglish?'How to Investigate':'调查说明';
    resetButton.textContent=isEnglish?'Restart':'重新开始';
    languageButton.textContent=isEnglish?'中文':'EN';
    homeButton.innerHTML=isEnglish
      ?'<span class="case-home-full">Back to Case List</span><span class="case-home-short">Back</span>'
      :'<span class="case-home-full">返回案件列表</span><span class="case-home-short">返回</span>';
    moreButton.setAttribute('aria-label',isEnglish?'More case controls':'更多案件操作');
    menuPanel.setAttribute('aria-label',isEnglish?'Case controls':'案件操作');
    previousButton.setAttribute('aria-label',isEnglish?'Previous Case':'上一案');
    nextButton.setAttribute('aria-label',isEnglish?'Next Case':'下一案');

    previousButton.disabled=!caseContext.canPrevious;
    nextButton.disabled=!caseContext.canNext;

    if(completeBody){
      const intro=completeBody.querySelector('.success-intro');
      intro.querySelector('h2').textContent=isEnglish?'✓ Correct Deduction!':'✓ 推理正确！';
      intro.querySelector('p').textContent=isEnglish?'Congratulations — you solved the case.':'恭喜，你成功破解了这个案件。';
      const solvedTitle=completeBody.querySelector('.case-solved-title');
      if(solvedTitle) solvedTitle.textContent=isEnglish?'Case Solved':'案件已解决';
      const chapterReward=completeBody.querySelector('.chapter-clue');
      if(chapterReward?.querySelector('.reward-heading')) chapterReward.querySelector('.reward-heading').textContent=isEnglish?'Chapter Clue Recorded':'章节线索已记录';
      const archiveReward=completeBody.querySelector('.archive-card');
      if(archiveReward) archiveReward.innerHTML=`<strong class="reward-heading">${isEnglish?'Case File Archived':'案件记录已归档'}</strong>`;
      const unlockCard=completeBody.querySelector('.unlock-card');
      const unlockedId=completionContext.newlyUnlockedCaseId;
      unlockCard.hidden=!unlockedId;
      if(unlockedId){
        const nextCase=nextCases[unlockedId];
        unlockCard.innerHTML=`<strong class="reward-heading">${isEnglish?'New Case Unlocked':'新案件已解锁'}</strong>${nextCase[isEnglish?'en':'zh']}`;
      }
    }
  }

  addEventListener('message',event=>{
    if(event.data?.type==='setLanguage') queueMicrotask(()=>syncCaseUI(event.data.lang));
    if(event.data?.type==='caseContext'){
      caseContext={...caseContext,...event.data};
      if(event.data.lang&&event.data.lang!==activeLang){
        localStorage.setItem('quietTownLang',event.data.lang);
        window.postMessage({type:'setLanguage',lang:event.data.lang},'*');
      }
      queueMicrotask(()=>syncCaseUI(event.data.lang));
    }
    if(event.data?.type==='caseCompletionContext'){
      completionContext={...completionContext,...event.data};
      queueMicrotask(()=>syncCaseUI());
    }
  });
  document.body.addEventListener('click',()=>setTimeout(()=>syncCaseUI(),0));
  syncCaseUI();
})();
