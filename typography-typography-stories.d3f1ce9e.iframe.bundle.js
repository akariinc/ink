"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[202],{"./.src/storybook/storybook_admin/lib/storybook/shared/sample-data-sets.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>SampleDataSets});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let SampleDataSets=class SampleDataSets{constructor(){this.datepipe=new _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe("en-US"),this.DATES=[this.datepipe.transform(new Date,"short"),moment__WEBPACK_IMPORTED_MODULE_0__().format("MM Do YY"),moment__WEBPACK_IMPORTED_MODULE_0__().startOf("day").fromNow(),moment__WEBPACK_IMPORTED_MODULE_0__().endOf("day").fromNow(),moment__WEBPACK_IMPORTED_MODULE_0__().startOf("hour").fromNow(),moment__WEBPACK_IMPORTED_MODULE_0__().subtract(3,"days").calendar(),moment__WEBPACK_IMPORTED_MODULE_0__().calendar(),moment__WEBPACK_IMPORTED_MODULE_0__().add(20,"days").calendar(),moment__WEBPACK_IMPORTED_MODULE_0__().format("LT"),moment__WEBPACK_IMPORTED_MODULE_0__().format("LTS"),moment__WEBPACK_IMPORTED_MODULE_0__().locale("ja").format("LL")],this.POSTER_IMAGES=["akira.webp","all-quiet-on-the-western-front.webp","breaking-bad.webp","gone-girl.webp","once-upon-a-time-in-hollywood.webp","paprika.webp","pulp-fiction.webp"].map((item=>`/assets/core/img/sample-poster/${item}`)),this.STROKE_ICONS=["caret-down-small","close","close-small","power","checked","plus","caret-down","ellipsis-v","ellipsis-h","arrow-left","search","delivery-box","cloud","fullscreen-on","fullscreen-off","ear","waveform","mic","subtitle","comment","ticket","location","download","upload","2k","4k"],this.PAINT_ICONS=["ellipsis-v","ellipsis-h"],this.ICON_SIZES=["xs","s","m","l","xl"],this.ICON_SHAPES=["","circle","rect"],this.PICTURE_ICONS=["bbc-news.webp","bff.webp","chemical-brothers.webp","criterion.webp","kubrick.webp","mubi.webp","nytimes.webp"].map((item=>`/assets/core/img/sample-logo/${item}`)),this.COMBINATIONS=[["purchased","5 days ago"],["produced by","Adam Mckay"],["duration","2h56m"],["audio","5.1ch"],["France","Paris"],["at","Barbican Centre"],["Available from","3/2/2024"],["Apply to","Sandance Film Festival"],["Single Ticket","22.40 $"]],this.BIG_FILM_FESTIVALS=[{title:"Festival de Cannes",country:"France",description:"L'un des festivals de cinéma les plus connus et prestigieux au monde, se tenant annuellement à Cannes."},{title:"Berliner Filmfestspiele",country:"Germany",description:"Auch bekannt als die Internationale Filmfestspiele Berlin oder Berlinale, gehört sie zu den größten Filmfestivals weltweit."},{title:"Festival Internacional de Cine de Venecia",country:"Italy",description:"Il Festival del Cinema di Venezia è il più antico festival cinematografico del mondo ed è celebre per la sua storia e il contributo all'industria cinematografica."},{title:"東京国際映画祭",country:"日本",description:"アジアで際立っている映画祭で、日本と国際的な映画を展示しています。"},{title:"مهرجان القاهرة السينمائي الدولي",country:"Egypt",description:"هو حدث رئيسي لصناعة السينما المصرية والعربية."},{title:"Фестиваль кино и театра",country:"Russia",description:"Кинотавр, открытый российский кинофестиваль, является одним из самых значимых кинофестивалей в России."},{title:"Festival Internacional de Cine de Mar del Plata",country:"Argentina",description:"El Festival Internacional de Cine de Mar del Plata es el único festival de cine acreditado por la FIAPF en América Latina."},{title:"국제영화제",country:"South Korea",description:"부산국제영화제는 아시아에서 가장 중요한 영화제 중 하나로, 특히 아시아 국가들의 새로운 영화와 첫 번째 감독들을 소개하는 데 중점을 둡니다."},{title:"Jio MAMI Mumbai Film Festival with Star",country:"India",description:"मुंबई एकेडमी ऑफ द मूविंग इमेज (MAMI) मुंबई में एक अंतरराष्ट्रीय फिल्म महोत्सव की मेजबानी करता है, जो भारत और दुनिया भर से नई सिनेमा का प्रदर्शन करता है।"},{title:"Festival Internacional de Cinema do Rio de Janeiro",country:"Brazil",description:"O Festival Internacional de Cinema do Rio de Janeiro apresenta filmes internacionais e brasileiros e é um grande evento no calendário cinematográfico da América do Sul."}],this.LOCAL_FILM_FESTIVALS=[{title:"Фантастический кинофестиваль",country:"Russia",description:"A festival dedicated to fantasy and science fiction films."},{title:"Festival de Cine Bizarro de La Plata",country:"Argentina",description:"Celebrating unconventional and bizarre films, this festival is a haven for the unique and strange in cinema."},{title:"幻想映画祭",country:"Japan",description:"A fantasy film festival that showcases fantasy films from around the globe, with a focus on Japanese contributions."},{title:"Festival Internacional de Cine de Terror de Valdivia",country:"Chile",description:"This festival specializes in horror films, attracting enthusiasts of the genre from all over."},{title:"Sitges - Festival Internacional de Cinema Fantàstic de Catalunya",country:"Spain",description:"One of the most recognized festivals for fantasy and horror films in the world."},{title:"부천국제판타스틱영화제",country:"South Korea",description:"Focuses on South Korean and international horror, thriller, mystery, and fantasy films."},{title:"Festival du Film Merveilleux & Imaginaire",country:"France",description:"Dedicated to films that explore the wonderful, magical, and imaginary."},{title:"Freak Show Horror Film Festival",country:"United States",description:"An annual event in Orlando that celebrates independent horror cinema."},{title:"Fantaspoa - Festival Internacional de Cinema Fantástico de Porto Alegre",country:"Brazil",description:"Latin America's largest genre film festival, focusing on fantasy, horror, and science fiction movies."},{title:"Midnight Sun Film Festival",country:"Finland",description:"A unique festival held in Lapland during the time of the midnight sun, showcasing a mix of classic films and contemporary cinema without differentiating by genre, but known for its unique atmosphere and celebration of cinematic art."}],this.VENUES=[],this.FILMS=[{title:"Beyond Borders",subtitle:"Stories of Migration and Identity",director:"Alejandro Velázquez",country:"Mexico",language:"Spanish",length:92,year:2021,description:"A deeply human exploration of migration, following individuals who have crossed borders in search of safety, opportunity, and belonging. Each episode uncovers personal struggles, cultural clashes, and triumphs that redefine home.",synopsis:"In a world where migration is often reduced to statistics and political debates, Beyond Borders takes a deeply personal approach, following the lives of individuals who have crossed geographical, cultural, and emotional boundaries in search of a better future. The documentary weaves together stories of resilience, hope, and the harsh realities faced by migrants, shedding light on the deeply human experience of leaving home in pursuit of safety and opportunity.\n\nEach episode focuses on a different region, beginning in Central America, where families fleeing violence and poverty embark on treacherous journeys toward the U.S. border. The documentary captures the harrowing experiences of individuals navigating the infamous “La Bestia” freight train, the fear of cartel-controlled territories, and the emotional toll of separation from loved ones. Through firsthand accounts, we witness the heartbreaking dilemmas faced by those who leave their countries with little more than a dream of a safer life.\n\nMoving across the Atlantic, Beyond Borders explores the migration crisis in the Mediterranean, where thousands risk their lives in overcrowded boats to escape war and persecution in Africa and the Middle East. With exclusive access to rescue missions and refugee camps, the film paints a raw and unfiltered picture of the desperation that drives people to take unimaginable risks.\n\nBut not all migration stories are shaped by crisis. In another episode, we delve into the lives of skilled professionals, artists, and entrepreneurs who have relocated to new countries in search of creative and economic freedom. From a Syrian chef who introduces his country’s culinary traditions to Berlin, to a Nigerian engineer revolutionizing sustainable housing in Europe, Beyond Borders highlights the positive cultural and economic contributions of migrants.\n\nThrough intimate interviews, breathtaking cinematography, and powerful storytelling, Beyond Borders challenges stereotypes and misconceptions about migration. It reminds us that behind every statistic is a person with a story—one that deserves to be heard."},{title:"Code of Tomorrow",subtitle:"AI, Ethics, and the Future of Humanity",director:"Ananya Gupta",country:"United States",language:"English",length:117,year:2022,description:"A thought-provoking look at the rise of artificial intelligence, its ethical implications, and how it is shaping societies. Featuring insights from AI pioneers and ethicists across the world, the series questions where the line should be drawn between human and machine intelligence.",synopsis:"The rapid advancement of artificial intelligence is transforming every aspect of our lives, from the way we work and communicate to how we make decisions. But as AI becomes more sophisticated, the ethical questions surrounding its use grow increasingly complex. Code of Tomorrow explores these dilemmas, delving into the moral, social, and philosophical debates shaping our future relationship with machines.\n\nThe documentary begins by tracing the evolution of AI, from its origins in early computing to the present day, where machine learning algorithms drive everything from online recommendations to autonomous vehicles. Through interviews with AI pioneers, ethicists, and policymakers, the series investigates the motivations behind AI development and the potential consequences of an AI-driven society.\n\nOne episode focuses on the rise of AI in the workplace, examining how automation is reshaping entire industries and displacing human workers. Will AI create new opportunities, or will it lead to an economic divide where only the technologically skilled thrive? The documentary presents real-life stories of workers adapting to a world where algorithms increasingly determine hiring, productivity, and performance evaluation.\n\nAnother crucial issue explored in Code of Tomorrow is the role of AI in decision-making. From predictive policing to credit scoring and healthcare diagnostics, AI systems are making choices that profoundly impact human lives. But can machines truly be impartial? Through compelling case studies, the series reveals how biases embedded in training data can lead to unfair and even harmful outcomes, sparking urgent discussions on accountability and transparency.\n\nFinally, the documentary addresses the existential question: Can AI develop consciousness? Philosophers, neuroscientists, and AI researchers weigh in on whether machines can ever replicate human creativity, emotions, and ethical reasoning—or if they remain nothing more than complex tools.\n\nAs AI continues to evolve, Code of Tomorrow invites viewers to reflect on the kind of future we want to build—one where technology serves humanity, rather than the other way around.\n\n"},{title:"Silent Earth",subtitle:"The Fight Against Mass Extinction",director:"Léon Gautier",country:"France",language:"French",length:105,year:2023,description:"From the Amazon rainforest to the African savannah, this series investigates the rapid decline of global biodiversity. Through stunning cinematography and interviews with scientists and conservationists, it reveals the urgent efforts to prevent the sixth mass extinction.",synopsis:'The Earth is undergoing its sixth mass extinction, a crisis driven by human activity, habitat destruction, and climate change. Species that have existed for millions of years are vanishing at an unprecedented rate, with devastating consequences for global ecosystems. Silent Earth takes audiences on a powerful and urgent journey to the frontlines of this environmental catastrophe, meeting the scientists, activists, and conservationists fighting to protect life on our planet.\n\nThe documentary begins in the Amazon rainforest, often called the "lungs of the Earth," where illegal deforestation and wildfires threaten biodiversity. With exclusive footage from deep within the jungle, Silent Earth captures the disappearance of critical species and the efforts of indigenous communities to resist environmental destruction.\n\nNext, we travel to the oceans, where overfishing, plastic pollution, and rising temperatures are pushing marine life to the brink. Through groundbreaking underwater cinematography, the film exposes the coral bleaching crisis and the impact of microplastics on marine ecosystems. Leading marine biologists explain why saving the ocean is crucial—not just for wildlife, but for humanity itself.\n\nOne of the most heartbreaking segments focuses on the disappearance of pollinators like bees and butterflies, which are essential for global food production. Scientists detail the impact of pesticides, habitat loss, and climate change on these vital creatures, urging immediate action to prevent agricultural collapse.\n\nYet, Silent Earth is not just a film about destruction—it is a story of hope. Across the world, conservationists are pioneering innovative solutions to restore balance to nature. From wildlife corridors in Africa to reforestation projects in Europe, the film highlights the inspiring individuals dedicating their lives to preserving Earth’s biodiversity.\n\nAs the documentary concludes, it leaves audiences with a powerful message: while the damage is extensive, it is not irreversible. The future of life on Earth is still in our hands—but only if we act now.'}],this.AUTHORS=[],this.PRICES=[],this.USERNAMES=[],this.NAMES=[],this.STATS=[{value:1099,unit:"%"}],this.DATE_FORMATS=[]}static{this.ctorParameters=()=>[]}};SampleDataSets=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({providedIn:"root"}),(0,tslib__WEBPACK_IMPORTED_MODULE_2__.Sn)("design:paramtypes",[])],SampleDataSets)},"./.src/storybook/storybook_admin/lib/storybook/shared/ui/typography/typography.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>typography_stories,doc:()=>doc,journal:()=>journal});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),sample_data_sets=__webpack_require__("./.src/storybook/storybook_admin/lib/storybook/shared/sample-data-sets.ts");let DocComponent=class DocComponent{constructor(samples,baseHref){this.samples=samples,this.baseHref=baseHref}getArrayForPercentageDivided(percent){return Array.from({length:Math.floor(100/percent)}).fill(0).map(((_,i)=>i))}getArrayWithLength(n){return Array.from({length:n}).fill(0).map(((_,i)=>i))}imageUrl(path){return`${this.baseHref.replace(/\/$/,"")}${path}`}randomImage(){const len=this.samples.PICTURE_ICONS.length,index=Math.floor(Math.random()*len),path=this.samples.PICTURE_ICONS[index];return console.log(len,index,path),this.imageUrl(path)}concat(a,b){return{...a,...b}}ngOnInit(){}getTooltip(...classes){return`<div class="bg-dark chip-s fixed-container h-gap-s h-layout">\n            <div class="fg-dark mono-small single-line">${classes.join("<br>")}</div>\n        </div>`}static{this.ctorParameters=()=>[{type:sample_data_sets.e},{type:String,decorators:[{type:core.Inject,args:[common.APP_BASE_HREF]}]}]}};DocComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[doc-component]",changeDetection:core.ChangeDetectionStrategy.OnPush,template:'\n\n\n<div class="mb40">\n    <h3 class="single-line mono-large-bold mb10">Code of Tomorrow</h3>\n    <p class="sans-medium">AI, Ethics, and the Future of Humanity</p>\n</div>\n<div class="flex-container v-layout v-gap-xl mb50">\n    <div class="quote">\n        <p class="sans-large-bold mb20">A thought-provoking look at the rise of artificial intelligence, its ethical implications, and how it is shaping societies. Featuring insights from AI pioneers and ethicists across the world, the series questions where the line should be drawn between human and machine intelligence.</p>\n        <p class="sans-small-bold">Dr. Marcus Ellington</p>\n        <p class="sans-small"><a href="#">The Global Migration Crisis: Causes, Consequences, and Solutions (The Migration Review)</a></p>\n    </div>\n\n    <p class="sans-medium">The rapid advancement of artificial intelligence is transforming every aspect of our lives, from the way we work and communicate to how we make decisions. But as AI becomes more sophisticated, the ethical questions surrounding its use grow increasingly complex. Code of Tomorrow explores these dilemmas, delving into the moral, social, and philosophical debates shaping our future relationship with machines.</p>\n\n    <p class="sans-medium">The documentary begins by tracing the evolution of AI, from its origins in early computing to the present day, where machine learning algorithms drive everything from online recommendations to autonomous vehicles. Through interviews with AI pioneers, ethicists, and policymakers, the series investigates the motivations behind AI development and the potential consequences of an AI-driven society.</p>\n\n</div>\n\n<div class="flex-container v-layout v-gap-xl mb50">\n    <h4 class="single-line mono-medium mt20">The Mediterranean Crisis</h4>\n    <div class="quote">\n        <p class="sans-medium-bold italic mb20">Moving across the Atlantic, Beyond Borders explores the migration crisis in the Mediterranean, where thousands risk their lives in overcrowded boats to escape war and persecution in Africa and the Middle East. With exclusive access to rescue missions and refugee camps, the film paints a raw and unfiltered picture of the desperation that drives people to take unimaginable risks.</p>\n        <p class="mono-small"><a href="#">The Global Migration Crisis: Causes, Consequences, and Solutions (The Migration Review)</a></p>\n        <p class="sans-small-bold">Dr. Marcus Ellington</p>\n    </div>\n\n    <p class="sans-medium">But not all migration stories are shaped by crisis. In another episode, we delve into the lives of skilled professionals, artists, and entrepreneurs who have relocated to new countries in search of creative and economic freedom. From a Syrian chef who introduces his country’s culinary traditions to Berlin, to a Nigerian engineer revolutionizing sustainable housing in Europe, Beyond Borders highlights the positive cultural and economic contributions of migrants.</p>\n</div>\n\n<div class="flex-container h-layout h-gap-m">\n    <div class="between-container background w50p bg-a r10 padding-l v-layout align-start v-gap-xl">\n        <p class="single-line mono-medium-bold">A Personal Journey</p>\n        <p class="mono-medium">Through intimate interviews, breathtaking cinematography, and <b class="bold">powerful storytelling</b>, Beyond Borders challenges stereotypes and misconceptions about migration. It reminds us that behind every statistic is a person with a story—one that deserves to be heard.</p>\n        <p class="mono-small-bold">Read more</p>\n    </div>\n    <div class="between-container background w50p bg-a r10 padding-l v-layout align-start v-gap-l">\n        <p class="single-line sans-medium-bold">A Personal Journey</p>\n        <p class="sans-medium">Through intimate interviews, breathtaking cinematography, and <b class="bold">powerful storytelling</b>, Beyond Borders challenges stereotypes and misconceptions about migration. It reminds us that behind every statistic is a person with a story—one that deserves to be heard.</p>\n        <p class="sans-small-bold">Read more</p>\n    </div>\n    <div class="between-container background w50p bg-a r10 padding-l v-layout align-start v-gap-l">\n        <p class="single-line serif-medium-bold">A Personal Journey</p>\n        <p class="serif-medium">Through intimate interviews, breathtaking cinematography, and <b class="bold">powerful storytelling</b>, Beyond Borders challenges stereotypes and misconceptions about migration. It reminds us that behind every statistic is a person with a story—one that deserves to be heard.</p>\n        <p class="serif-small-bold">Read more</p>\n    </div>\n</div>'}),(0,tslib_es6.Sn)("design:paramtypes",[sample_data_sets.e,String])],DocComponent);var http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs");let JournalComponent=class JournalComponent{constructor(samples,baseHref){this.samples=samples,this.baseHref=baseHref}getArrayForPercentageDivided(percent){return Array.from({length:Math.floor(100/percent)}).fill(0).map(((_,i)=>i))}getArrayWithLength(n){return Array.from({length:n}).fill(0).map(((_,i)=>i))}imageUrl(path){return`${this.baseHref.replace(/\/$/,"")}${path}`}randomImage(){const len=this.samples.PICTURE_ICONS.length,index=Math.floor(Math.random()*len),path=this.samples.PICTURE_ICONS[index];return console.log(len,index,path),this.imageUrl(path)}concat(a,b){return{...a,...b}}ngOnInit(){}getTooltip(...classes){return`<div class="bg-dark chip-s fixed-container h-gap-s h-layout">\n            <div class="fg-dark mono-small single-line">${classes.join("<br>")}</div>\n        </div>`}static{this.ctorParameters=()=>[{type:sample_data_sets.e},{type:String,decorators:[{type:core.Inject,args:[common.APP_BASE_HREF]}]}]}};JournalComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[journal-component]",changeDetection:core.ChangeDetectionStrategy.OnPush,template:'\n\n\n<div class="mb40">\n    <h3 class="single-line serif-large-bold mb10">Beyond Borders</h3>\n    <p class="sans-medium">Stories of Migration and Identity</p>\n</div>\n<div class="flex-container v-layout v-gap-xl mb50">\n    <div class="quote">\n        <p class="serif-large italic mb20">A deeply human exploration of migration, following individuals who have crossed borders in search of safety, opportunity, and belonging. Each episode uncovers personal struggles, cultural clashes, and triumphs that redefine home.</p>\n        <p class="sans-small-bold">Dr. Marcus Ellington</p>\n        <p class="sans-small"><a href="#">The Global Migration Crisis: Causes, Consequences, and Solutions (The Migration Review)</a></p>\n    </div>\n\n    <p class="serif-medium">In a world where migration is often reduced to statistics and political debates, Beyond Borders takes a deeply personal approach, following the lives of individuals who have crossed geographical, cultural, and emotional boundaries in search of a better future. The documentary weaves together stories of resilience, hope, and the harsh realities faced by migrants, shedding light on the deeply human experience of leaving home in pursuit of safety and opportunity.</p>\n\n    <p class="serif-medium">Each episode focuses on a different region, beginning in Central America, where families fleeing violence and poverty embark on treacherous journeys toward the U.S. border. The documentary captures the harrowing experiences of individuals navigating the infamous “La Bestia” freight train, the fear of cartel-controlled territories, and the emotional toll of separation from loved ones. Through firsthand accounts, we witness the heartbreaking dilemmas faced by those who leave their countries with little more than a dream of a safer life.</p>\n\n</div>\n\n<div class="flex-container v-layout v-gap-xl mb50">\n    <h4 class="single-line serif-medium mt20">The Mediterranean Crisis</h4>\n    <div class="quote">\n        <p class="sans-medium italic mb20">Moving across the Atlantic, Beyond Borders explores the migration crisis in the Mediterranean, where thousands risk their lives in overcrowded boats to escape war and persecution in Africa and the Middle East. With exclusive access to rescue missions and refugee camps, the film paints a raw and unfiltered picture of the desperation that drives people to take unimaginable risks.</p>\n        <p class="sans-small-bold">Dr. Marcus Ellington</p>\n        <p class="sans-small"><a href="#">The Global Migration Crisis: Causes, Consequences, and Solutions (The Migration Review)</a></p>\n    </div>\n\n    <p class="serif-medium">But not all migration stories are shaped by crisis. In another episode, we delve into the lives of skilled professionals, artists, and entrepreneurs who have relocated to new countries in search of creative and economic freedom. From a Syrian chef who introduces his country’s culinary traditions to Berlin, to a Nigerian engineer revolutionizing sustainable housing in Europe, Beyond Borders highlights the positive cultural and economic contributions of migrants.</p>\n</div>\n\n<div class="flex-container h-layout h-gap-m">\n    <div class="between-container background w50p bg-a r10 padding-l v-layout align-start v-gap-xl">\n        <p class="single-line mono-medium-bold">A Personal Journey</p>\n        <p class="mono-medium">Through intimate interviews, breathtaking cinematography, and <b class="bold">powerful storytelling</b>, Beyond Borders challenges stereotypes and misconceptions about migration. It reminds us that behind every statistic is a person with a story—one that deserves to be heard.</p>\n        <p class="mono-small-bold">Read more</p>\n    </div>\n    <div class="between-container background w50p bg-a r10 padding-l v-layout align-start v-gap-l">\n        <p class="single-line sans-medium-bold">A Personal Journey</p>\n        <p class="sans-medium">Through intimate interviews, breathtaking cinematography, and <b class="bold">powerful storytelling</b>, Beyond Borders challenges stereotypes and misconceptions about migration. It reminds us that behind every statistic is a person with a story—one that deserves to be heard.</p>\n        <p class="sans-small-bold">Read more</p>\n    </div>\n    <div class="between-container background w50p bg-a r10 padding-l v-layout align-start v-gap-l">\n        <p class="single-line serif-medium-bold">A Personal Journey</p>\n        <p class="serif-medium">Through intimate interviews, breathtaking cinematography, and <b class="bold">powerful storytelling</b>, Beyond Borders challenges stereotypes and misconceptions about migration. It reminds us that behind every statistic is a person with a story—one that deserves to be heard.</p>\n        <p class="serif-small-bold">Read more</p>\n    </div>\n</div>'}),(0,tslib_es6.Sn)("design:paramtypes",[sample_data_sets.e,String])],JournalComponent);var storybook_shared_module=__webpack_require__("./.src/storybook/storybook_admin/lib/storybook/shared/storybook-shared.module.ts");let TypographyComponent=class TypographyComponent{constructor(){this.view="journal"}static{this.ctorParameters=()=>[]}static{this.propDecorators={view:[{type:core.Input}]}}};TypographyComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"[typography-component]",changeDetection:core.ChangeDetectionStrategy.OnPush,template:'\n<div class="layout typography-page">\n    \x3c!-- <h1 class="single-line sans-large-bold h50 mb50">Typography</h1> --\x3e\n\n    <ng-container *ngIf="view === \'journal\'">\n        <div journal-component class="v-layout m20"></div>\n    </ng-container>\n\n    <ng-container *ngIf="view === \'doc\'">\n        <div doc-component class="v-layout m20"></div>\n    </ng-container>\n\n</div>'}),(0,tslib_es6.Sn)("design:paramtypes",[])],TypographyComponent);var ui=__webpack_require__("./.src/storybook/storybook_admin/lib/modules/ui/index.ts");const typography_stories={title:"UI/Typography",component:TypographyComponent,argTypes:{},decorators:[(0,dist.moduleMetadata)({imports:[ui.rE,storybook_shared_module.c],declarations:[TypographyComponent,JournalComponent,DocComponent]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(ui.rE),(0,core.importProvidersFrom)(storybook_shared_module.c),(0,core.importProvidersFrom)(http.q1)]})]},journal={args:{view:"journal"}},doc={args:{view:"doc"}};journal.parameters={...journal.parameters,docs:{...journal.parameters?.docs,source:{originalSource:"{\n  args: {\n    view: 'journal'\n  }\n}",...journal.parameters?.docs?.source}}},doc.parameters={...doc.parameters,docs:{...doc.parameters?.docs,source:{originalSource:"{\n  args: {\n    view: 'doc'\n  }\n}",...doc.parameters?.docs?.source}}};const __namedExportsOrder=["journal","doc"]}}]);