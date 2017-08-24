webpackJsonp([1],[,,,function(e,t,i){function a(e){i(9)}var n=i(1)(i(6),i(13),a,null,null);e.exports=n.exports},,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(4),n=i(3),s=i.n(n);a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:s.a}})},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(11),n=i.n(a),s=i(10),r=i.n(s),o=i(0),c=i.n(o),d=r.a.urlToKey("https://docs.google.com/spreadsheets/d/1Ew_tsLL-TxHdKuFHkeq807o9gEOekfPvKjFiecznDqc/edit#gid=0");t.default={name:"app",components:{Card:n.a},data:function(){return{pageInfo:[],imageInfo:[],randomThree:[],currentImage:{},identifiedCount:0,pageInfoLoaded:!1,imageInfoLoaded:!1,allIdentified:!1,cardSwitch:!0}},methods:{getRandomThreeSetImg:function(){var e=this;if(c.a.every(this.imageInfo,["identified",!0]))return void(this.allIdentified=!0);this.currentImage=c.a.sample(c.a.filter(this.imageInfo,function(e){return!e.identified})),this.randomThree=c.a.sampleSize(c.a.filter(this.imageInfo,function(t){return t!==e.currentImage}),2),this.randomThree.push(this.currentImage)},setIdentified:function(){this.currentImage.identified=!0,this.identifiedCount=c.a.filter(this.imageInfo,function(e){return e.identified}).length},newCard:function(){this.cardSwitch=!this.cardSwitch}},beforeMount:function(){var e=this;r.a.getWorkbook(d).then(function(t){var i=t.sheets[0].id,a=t.sheets[1].id;r.a.getSheet(d,a).then(function(t){e.pageInfo=t.rows[0],console.log(e.pageInfo),e.pageInfoLoaded=!0,r.a.getSheet(d,i).then(function(t){t.rows.forEach(function(e){e.identified=!1}),e.imageInfo=t.rows,e.imageInfoLoaded=!0,e.getRandomThreeSetImg()})})})}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),n=i.n(a);t.default={name:"card",props:["entities","correctImage"],data:function(){return{isFlipped:!1,isCorrect:!1,randomThree:[],currentImage:{}}},methods:{setCurrentImage:function(){this.currentImage=n.a.find(this.entities,function(e){return!e.identified})},checkAnswer:function(e){this.correctImage.name===e?(this.correctImage.identified=!0,this.isCorrect=!0,this.$emit("identified")):this.isCorrect=!1},flipped:function(){this.isFlipped=!this.isFlipped}},computed:{imageSource:function(){if(void 0!==this.correctImage.name)var e=this.correctImage.name.split(" ").join("_"),t="./static/images/"+e+".jpg";return t}}}},function(e,t){},function(e,t){},,function(e,t,i){function a(e){i(8)}var n=i(1)(i(7),i(12),a,"data-v-7301273a",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-front will-flip",class:{flippedToFront:e.isFlipped}},[i("div",{staticClass:"img-holder"},[i("img",{staticClass:"img-responsive",attrs:{src:e.imageSource,alt:"Can you tell what is in this image?"}})]),e._v(" "),i("h4",{staticClass:"card-header question"},[e._v("What is this?")]),e._v(" "),i("div",{staticClass:"buttons"},e._l(e.entities,function(t){return i("button",{staticClass:"card-button button-front",on:{click:function(i){e.checkAnswer(t.name),e.flipped()}}},[e._v("\n        "+e._s(t.name)+"\n      ")])}))]),e._v(" "),i("div",{staticClass:"card-back will-flip",class:{flippedToBack:!e.isFlipped}},[i("div",{staticClass:"img-holder"},[i("img",{staticClass:"img-responsive",attrs:{src:e.imageSource,alt:"Can you tell what is in this image?"}})]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isCorrect,expression:"isCorrect"}],staticClass:"correct-answer"},[i("h2",{staticClass:"card-header"},[e._v("You are correct!")]),e._v(" "),i("h2",{staticClass:"card-header"},[e._v(e._s(e.correctImage.name))]),e._v(" "),i("h2",{staticClass:"card-header"},[e._v(e._s(e.correctImage.info))])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isCorrect,expression:"!isCorrect"}],staticClass:"incorrect-answer"},[i("h2",{staticClass:"card-header"},[e._v("Sorry, that's incorrect.")])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"slide-down"}},[e.pageInfoLoaded?i("nav",[i("img",{staticClass:"logo-img",attrs:{src:"https://via.placeholder.com/150x150",alt:""}}),e._v(" "),i("h2",{staticClass:"app-title"},[e._v(e._s(e.pageInfo.appname))]),e._v(" "),i("h3",{staticClass:"group-name"},[e._v("Digital Library Initiatives")])]):e._e()]),e._v(" "),i("transition",{attrs:{name:"slide-left"}},[e.imageInfoLoaded?i("div",{staticClass:"app-containers card-container"},[i("transition",{attrs:{name:"switch-card"}},[e.cardSwitch?i("card",{key:"card-1",attrs:{entities:e.randomThree,correctImage:e.currentImage},on:{identified:e.setIdentified}}):i("card",{key:"card-2",attrs:{entities:e.randomThree,correctImage:e.currentImage},on:{identified:e.setIdentified}})],1)],1):e._e()]),e._v(" "),i("transition",{attrs:{name:"slide-right"}},[e.imageInfoLoaded?i("div",{staticClass:"app-containers score-container"},[i("h2",{staticClass:"score"},[e._v(e._s(e.identifiedCount)+" / "+e._s(e.imageInfo.length))])]):e._e()]),e._v(" "),i("transition",{attrs:{name:"slide-up"}},[e.imageInfoLoaded?i("div",{staticClass:"app-container main-controls"},[i("button",{on:{click:function(t){e.getRandomThreeSetImg(),e.newCard()}}},[e._v("Next Card")])]):e._e()]),e._v(" "),e.imageInfoLoaded?e._e():i("div",{staticClass:"loading-icon"})],1)},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.54e0ef2956ea67e4e6e8.js.map