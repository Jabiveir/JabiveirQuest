parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"w9XJ":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function t(){e(this,t),this.B=[]}return r(t,[{key:"NewButton",value:function(e,t,r,n,o,a,i,u,f,l){var c={X:e,Y:t,W:r,H:n,ShowVar:o,GoalVar:a,Vis:i,Text:u,TextSize:f,Type:l};this.B.push(c)}}]),t}();exports.default=n;
},{}],"HPsM":[function(require,module,exports) {
"use strict";function _defineProperties(a,e){for(var t=0;t<e.length;t++){var m=e[t];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(a,m.key,m)}}function _createClass(a,e,t){return e&&_defineProperties(a.prototype,e),t&&_defineProperties(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var Game=_createClass(function Game(Ctx,GameData,Menu,Buttons,Images){_classCallCheck(this,Game),GameData.Playing=!0;var limitLoop=function(a){var e=(new Date).getTime();return function a(t){requestAnimationFrame(a);var m=(new Date).getTime(),i=m-e;i>1e3/60&&(e=m-i%(1e3/60),GameData.Playing&&GameLoop())}()};function GameLoop(){if(Ctx.clearRect(0,0,640,480),Ctx.fillStyle="#000",Ctx.fillRect(0,0,640,480),GameData.Time+=1,GameData.Time>=21600/GameData.FastNights&&!GameData.Endless&&(GameData.Waiting=!0,GameData.Time=0,GameData.Night+=1),GameData.Waiting)if(Ctx.fillStyle="#000",Ctx.fillRect(0,0,640,480),Ctx.fillStyle="#fff",Ctx.font="100px sans-serif ",GameData.Time<300)Ctx.fillText("6 AM",320,250);else if(GameData.Time<420)7!==GameData.Night||GameData.CustomNight?Ctx.fillText("Night "+GameData.Night,320,250):(GameData.Time=305,Ctx.font="60px sans-serif",Ctx.fillText("You beat the game!",320,180),Ctx.font="30px sans-serif",Ctx.fillText("You unlocked a star in the menu!",320,260),Ctx.fillText("(You need cookies, sorry if you disabled them)",320,300));else{GameData.Time=0,GameData.Waiting=!1;var d=new Date;d.setTime(d.getTime()+31536e6),GameData.Night<7&&(document.cookie="Night="+GameData.Night+";expires="+d.toUTCString()+";path=/"),GameData.JabiTimer={Door:-1,Closet:-1,Window:-1},GameData.Sprites={Door:"Room",Closet:"Room",Window:"Room"},GameData.FlashesLeft=90/GameData.FastNights,GameData.Fear=0,GameData.Status="AliveRoom",GameData.Night<7&&(GameData.FearFactor=2*GameData.Night,GameData.JabiDiff=2.5*GameData.Night,GameData.VirusDiff=2*GameData.Night)}else{if(3===GameData.MenuVar&&(GameData.MenuVar=4),"AliveRoom"===GameData.Status)GameData.Time-GameData.JabiTimer.Door>=GameData.AnimationTime&&("RoomJabi1"===GameData.Sprites.Door?(GameData.Sprites.Door="RoomJabi2",GameData.JabiTimer.Door=GameData.Time):"RoomJabi2"===GameData.Sprites.Door&&(GameData.Sprites.Door="RoomFlash",GameData.JabiTimer.Door=-1)),GameData.Time-GameData.JabiTimer.Closet>=GameData.AnimationTime&&("RoomJabi1"===GameData.Sprites.Closet?(GameData.Sprites.Closet="RoomJabi2",GameData.JabiTimer.Closet=GameData.Time):"RoomJabi2"===GameData.Sprites.Closet&&(GameData.Sprites.Closet="RoomFlash",GameData.JabiTimer.Closet=-1)),GameData.Time-GameData.JabiTimer.Window>=GameData.AnimationTime&&("RoomJabi1"===GameData.Sprites.Window?(GameData.Sprites.Window="RoomJabi2",GameData.JabiTimer.Window=GameData.Time):"RoomJabi2"===GameData.Sprites.Window&&(GameData.Sprites.Window="RoomFlash",GameData.JabiTimer.Window=-1)),GameData.Blind||(Ctx.drawImage(eval("Images."+GameData.Sprites.Door),0,0,168,480,0,0,168,480),Ctx.drawImage(eval("Images."+GameData.Sprites.Closet),168,0,332,480,168,0,332,480),Ctx.drawImage(eval("Images."+GameData.Sprites.Window),500,0,140,480,500,0,140,480));else if("AliveComputer"===GameData.Status)GameData.Blind||(Ctx.drawImage(Images.Computer,0,0),Ctx.drawImage(Images.CompAnims[GameData.CompAnim][GameData.Time/GameData.AnimationTime/2%4-GameData.Time/GameData.AnimationTime/2%1],64,96)),8===GameData.MenuVar&&Menu.UpdateMenu(Ctx,Buttons,GameData,Images,!0,0),GameData.Fear-=GameData.Fear%1,GameData.Fear>0&&(GameData.Fear-=2/3);else if("Dying1"===GameData.Status)Ctx.drawImage(Images.RoomDeath1,0,0),GameData.Time>GameData.AnimationTime&&(GameData.Time=0,GameData.Status="Dying2");else if("Dying2"===GameData.Status)Ctx.drawImage(Images.RoomDeath2,0,0),GameData.Time>GameData.AnimationTime&&(GameData.Time=0,GameData.Status="Dying3");else if("Dying3"===GameData.Status)Ctx.drawImage(Images.RoomDeath3,0,0),GameData.Time>GameData.AnimationTime&&(GameData.Time=256,GameData.MenuVar=6,GameData.Status="Dead");else if("Dead"===GameData.Status){GameData.Time-=1,GameData.Time>0&&(GameData.Time-=1),Ctx.fillStyle="#0f0",Ctx.fillRect(0,0,640,480);var Color=GameData.Time.toString(16);1===Color.length&&(Color="0"+Color),Ctx.fillStyle="#00"+Color+"00",Ctx.textAlign="center",Ctx.font="60px sans-serif",Ctx.fillText("You died!",320,150),Ctx.font="30px sans-serif","Eyes"===GameData.DeathReason&&(Ctx.fillText("If you see eyes, flash your light at them!",320,200),Ctx.fillText("If they're unusually bright, they may",320,240),Ctx.fillText("just be hallucinations.",320,280)),"Fear"===GameData.DeathReason&&(Ctx.fillText("Jabiveir can smell fear, so if your",320,200),Ctx.fillText("fear meter reaches max, you'll die.",320,240),Ctx.fillText("Look on your computer to calm down.",320,280)),GameData.Endless&&Ctx.fillText(Math.floor(GameData.EndTime/60)+":"+GameData.EndTime%60+" on "+GameData.FearFactor+"/"+GameData.JabiDiff+"/"+GameData.VirusDiff+" mode.",320,340),Ctx.fillText("Refresh to continue",320,400)}if("AliveRoom"===GameData.Status||"AliveComputer"===GameData.Status){GameData.Fear<100?GameData.NoFrontalLobe||(GameData.Fear+=GameData.FearFactor/60):(GameData.Status="Dying1",GameData.EndTime=Math.floor(GameData.Time/60),GameData.Time=0,GameData.DeathReason="Fear",GameData.MenuVar=7),Ctx.fillStyle="#fff",Ctx.font="40px sans-serif ";var Hour=(GameData.Time-GameData.Time%(3600/GameData.FastNights))/(3600/GameData.FastNights);0===Hour&&(Hour=12),Ctx.textAlign="left",Ctx.fillText(Hour,544.5-Ctx.measureText(Hour).width,50),Ctx.fillText("AM",555,50),Ctx.font="20px sans-serif ",Ctx.fillText("Power",32,470),Ctx.fillRect(100,410,7,30),Ctx.fillRect(20,400,80,50),Ctx.fillStyle="#000",Ctx.fillRect(25,405,70,40),Ctx.fillStyle="#fff",GameData.Blind||("AliveRoom"===GameData.Status?Ctx.drawImage(Images.Room,25,405,70,40,25,405,70,40):"AliveComputer"===GameData.Status&&Ctx.drawImage(Images.Computer,25,405,70,40,25,405,70,40)),Ctx.fillRect(30,410,2*GameData.FlashesLeft/3*GameData.FastNights,30),Ctx.font="20px sans-serif ",Ctx.fillText("Fear",540,470),Ctx.fillRect(500,400,120,50),Ctx.textAlign="center",Ctx.fillStyle="#000",Ctx.fillRect(505,405,110,40),Ctx.fillStyle="#fff",GameData.Blind||("AliveRoom"===GameData.Status?Ctx.drawImage(Images.Room,505,405,110,40,505,405,110,40):"AliveComputer"===GameData.Status&&Ctx.drawImage(Images.Computer,505,405,110,40,505,405,110,40));var Red=(GameData.Fear/(100/255)-GameData.Fear/(100/255)%1).toString(16);1===Red.length&&(Red="0"+Red);var Green=(255-(GameData.Fear/(100/255)-GameData.Fear/(100/255)%1)).toString(16);if(1===Green.length&&(Green="0"+Green),Ctx.fillStyle="#"+Red+Green+"00",Ctx.fillRect(510,410,GameData.Fear,30),GameData.Time%180==0&&0!==GameData.Time&&GameData.Fear/100>Math.random()){var Spot=Math.floor(3*Math.random())+1;1===Spot?(GameData.Sprites.Door="RoomHallucinations",GameData.JabiTimer.Door=GameData.Time):2===Spot?(GameData.Sprites.Closet="RoomHallucinations",GameData.JabiTimer.Closet=GameData.Time):3===Spot&&(GameData.Sprites.Window="RoomHallucinations",GameData.JabiTimer.Window=GameData.Time)}if(GameData.Time%(360/GameData.DoubleJabi)==0&&0!==GameData.Time&&GameData.JabiDiff/20>Math.random()){var Spot=Math.floor(3*Math.random())+1;1===Spot?(GameData.Sprites.Door="RoomEyes",GameData.JabiTimer.Door=GameData.Time):2===Spot?(GameData.Sprites.Closet="RoomEyes",GameData.JabiTimer.Closet=GameData.Time):3===Spot&&(GameData.Sprites.Window="RoomEyes",GameData.JabiTimer.Window=GameData.Time)}(GameData.Time>GameData.JabiTimer.Door+360/GameData.DoubleJabi&&"RoomEyes"===GameData.Sprites.Door||GameData.Time>GameData.JabiTimer.Closet+360/GameData.DoubleJabi&&"RoomEyes"===GameData.Sprites.Closet||GameData.Time>GameData.JabiTimer.Window+360/GameData.DoubleJabi&&"RoomEyes"===GameData.Sprites.Window)&&(GameData.Status="Dying1",GameData.EndTime=Math.floor(GameData.Time/60),GameData.Time=0,GameData.DeathReason="Eyes",GameData.MenuVar=7),GameData.Time>GameData.JabiTimer.Door+360&&"RoomHallucinations"===GameData.Sprites.Door&&(GameData.Sprites.Door="Room",GameData.JabiTimer.Door=-1),GameData.Time>GameData.JabiTimer.Closet+360&&"RoomHallucinations"===GameData.Sprites.Closet&&(GameData.Sprites.Closet="Room",GameData.JabiTimer.Closet=-1),GameData.Time>GameData.JabiTimer.Window+360&&"RoomHallucinations"===GameData.Sprites.Window&&(GameData.Sprites.Window="Room",GameData.JabiTimer.Window=-1)}}}limitLoop(GameLoop)});exports.default=Game;
},{}],"STHs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _game=_interopRequireDefault(require("./game"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}var Menu=function(){function Menu(){_classCallCheck(this,Menu)}return _createClass(Menu,[{key:"UpdateMenu",value:function UpdateMenu(Ctx,Buttons,GameData,Images,DontClear,ButtonClicked){if(!0!==DontClear&&(Ctx.clearRect(0,0,640,480),Ctx.textAlign="center",GameData.MenuVar>1&&(Ctx.fillStyle="#000",Ctx.fillRect(0,0,640,480))),0===GameData.MenuVar&&(Ctx.font="30px sans-serif ",Ctx.fillText("Save wiped",320,347,200),Ctx.fillText("Refresh to undo",320,377,200),GameData.MenuVar=1,GameData.Night=1,Buttons.B[0].Text="Night 1"),-2===GameData.MenuVar){"<"===Buttons.B[ButtonClicked].Text?GameData.Volume>0&&(GameData.Volume-=5):">"===Buttons.B[ButtonClicked].Text?GameData.Volume<100&&(GameData.Volume+=5):"Menu"===Buttons.B[ButtonClicked].Vis&&"Settings"!==Buttons.B[ButtonClicked].Text?(Buttons.B[ButtonClicked].Vis="Active","NoFrontalLobe"===Buttons.B[ButtonClicked].Type&&(GameData.NoFrontalLobe=!0),"BackupGenerator"===Buttons.B[ButtonClicked].Type&&(GameData.BackupGenerator=!0),"FastNights"===Buttons.B[ButtonClicked].Type&&(GameData.FastNights=2),"Blind"===Buttons.B[ButtonClicked].Type&&(GameData.Blind=!0),"DoubleJabi"===Buttons.B[ButtonClicked].Type&&(GameData.DoubleJabi=2),"DoubleVirus"===Buttons.B[ButtonClicked].Type&&(GameData.DoubleVirus=1)):"Active"===Buttons.B[ButtonClicked].Vis&&(Buttons.B[ButtonClicked].Vis="Menu","NoFrontalLobe"===Buttons.B[ButtonClicked].Type&&(GameData.NoFrontalLobe=!1),"BackupGenerator"===Buttons.B[ButtonClicked].Type&&(GameData.BackupGenerator=!1),"FastNights"===Buttons.B[ButtonClicked].Type&&(GameData.FastNights=1),"Blind"===Buttons.B[ButtonClicked].Type&&(GameData.Blind=!1),"DoubleJabi"===Buttons.B[ButtonClicked].Type&&(GameData.DoubleJabi=1),"DoubleVirus"===Buttons.B[ButtonClicked].Type&&(GameData.DoubleVirus=2));for(var BinVol=GameData.Volume.toString(2);BinVol.length<7;)BinVol="0"+BinVol;var d=new Date;d.setTime(d.getTime()+31536e6),document.cookie="Settings="+BinVol+ +GameData.NoFrontalLobe+ +GameData.BackupGenerator+(GameData.FastNights-1)+ +GameData.Blind+(GameData.DoubleJabi-1)+(2-GameData.DoubleVirus)+";expires="+d.toUTCString()+";path=/",Ctx.fillStyle="#000",Ctx.font="60px sans-serif ",Ctx.fillText("Settings",320,55),Ctx.fillRect(0,70,640,5),Ctx.fillRect(318,70,4,410),Ctx.fillText("Cheats",160,125),Ctx.fillText("Challenges",480,125),Ctx.font="40px sans-serif ",Ctx.textAlign="left",Ctx.fillText("Courageous",50,190,260),Ctx.fillText("Backup Generator",50,280,260),Ctx.fillText("Fast Nights",50,370,260),Ctx.fillText("Blindness",372,190,260),Ctx.fillText("Double Jabiveir",372,280,260),Ctx.fillText("Double JabiVirus",372,370,260),Ctx.font="20px sans-serif ",Ctx.textAlign="center",Ctx.fillText("Prevents fear from increasing",160,215,300),Ctx.fillText("Prevents power from decreasing",160,305,300),Ctx.fillText("Makes nights last half as long",160,395,300),Ctx.fillText("(Halves total available power)",160,415,300),Ctx.fillText("Only displays the HUD",480,215,300),Ctx.fillText("(Disables getting JabiVirus)",480,235,300),Ctx.fillText("Doubles how often eyes appear",480,305,300),Ctx.fillText("(Halves flashlight power usage)",480,325,300),Ctx.fillText("Doubles amount of buttons to press",480,395,300)}-3===GameData.MenuVar&&("Endless"===Buttons.B[ButtonClicked].Type?"Menu"===Buttons.B[ButtonClicked].Vis?(Buttons.B[ButtonClicked].Vis="Active",GameData.Endless=!0):(Buttons.B[ButtonClicked].Vis="Menu",GameData.Endless=!1):">"===Buttons.B[ButtonClicked].Text?eval("GameData."+Buttons.B[ButtonClicked].Type)<20&&eval("GameData."+Buttons.B[ButtonClicked].Type+" += 1"):"<"===Buttons.B[ButtonClicked].Text&&(eval("GameData."+Buttons.B[ButtonClicked].Type)>0&&eval("GameData."+Buttons.B[ButtonClicked].Type+" -= 1"),GameData.FearFactor<1&&(GameData.FearFactor=1)),Ctx.fillStyle="#000",Ctx.font="60px sans-serif ",Ctx.fillText("Custom Night",320,55),Ctx.fillRect(0,70,640,5),Ctx.fillText(GameData.FearFactor,100,128),Ctx.fillText(GameData.JabiDiff,100,208),Ctx.fillText(GameData.VirusDiff,100,288),Ctx.textAlign="left",Ctx.fillText("Fear Factor",200,128),Ctx.fillText("Jabiveir",200,208),Ctx.fillText("JabiVirus",200,288),Ctx.fillRect(0,300,640,5),Ctx.fillText("Endless Mode",70,363),Ctx.fillRect(0,380,640,5),Ctx.textAlign="center");for(var i=0;i<Buttons.B.length;i++)GameData.MenuVar===Buttons.B[i].ShowVar&&("Menu"===Buttons.B[i].Vis?(Ctx.fillStyle="#000",Ctx.fillRect(Buttons.B[i].X,Buttons.B[i].Y,Buttons.B[i].W,Buttons.B[i].H),Ctx.fillStyle="#fff",Ctx.fillRect(Buttons.B[i].X+2,Buttons.B[i].Y+2,Buttons.B[i].W-4,Buttons.B[i].H-4),Ctx.fillStyle="#000",Ctx.font=Buttons.B[i].TextSize+"px sans-serif ",Ctx.fillText(Buttons.B[i].Text,Buttons.B[i].X+Buttons.B[i].W/2,Buttons.B[i].Y+Buttons.B[i].H/2+Buttons.B[i].TextSize/2.5,Buttons.B[i].W)):"Active"===Buttons.B[i].Vis&&(Ctx.fillStyle="#000",Ctx.fillRect(Buttons.B[i].X,Buttons.B[i].Y,Buttons.B[i].W,Buttons.B[i].H),Ctx.fillStyle="#fff",Ctx.fillRect(Buttons.B[i].X+2,Buttons.B[i].Y+2,Buttons.B[i].W-4,Buttons.B[i].H-4),Ctx.fillStyle="#000",Ctx.fillRect(Buttons.B[i].X+6,Buttons.B[i].Y+6,Buttons.B[i].W-12,Buttons.B[i].H-12)));if(1===GameData.MenuVar&&(Ctx.fillStyle="#000",Ctx.font="50px sans-serif ",Ctx.fillText("Five Nights at Jabiveir's",320,130),Ctx.font="20px sans-serif",Ctx.textAlign="left",Ctx.fillText("Version 1.0",5,475),Ctx.textAlign="center"),2===GameData.MenuVar&&("CN"===Buttons.B[ButtonClicked].Type&&(GameData.CustomNight=!0,GameData.Night=7),new _game.default(Ctx,GameData,this,Buttons,Images),GameData.MenuVar=3),4===GameData.MenuVar)if(GameData.BackupGenerator||(GameData.FlashesLeft-=1/GameData.DoubleJabi),"Computer"===GameData.PressedType)GameData.Status="AliveRoom",GameData.BackupGenerator||(GameData.FlashesLeft+=1/GameData.DoubleJabi),GameData.VirusSolved=!1;else{var Temp="";("Room"===eval("GameData.Sprites."+GameData.PressedType)||"RoomHallucinations"===eval("GameData.Sprites."+GameData.PressedType))&&GameData.FlashesLeft>=0?Temp="RoomFlash":"RoomEyes"===eval("GameData.Sprites."+GameData.PressedType)&&GameData.FlashesLeft>=0?(Temp="RoomJabi1",eval("GameData.JabiTimer."+GameData.PressedType+" = GameData.Time")):GameData.BackupGenerator||(GameData.FlashesLeft+=1/GameData.DoubleJabi),"RoomFlash"!==GameData.Sprites.Door&&"RoomJabi1"!==GameData.Sprites.Door&&"RoomJabi2"!==GameData.Sprites.Door||(GameData.Sprites.Door="Room",GameData.JabiTimer.Door=-1),"RoomFlash"!==GameData.Sprites.Closet&&"RoomJabi1"!==GameData.Sprites.Closet&&"RoomJabi2"!==GameData.Sprites.Closet||(GameData.Sprites.Closet="Room",GameData.JabiTimer.Closet=-1),"RoomFlash"!==GameData.Sprites.Window&&"RoomJabi1"!==GameData.Sprites.Window&&"RoomJabi2"!==GameData.Sprites.Window||(GameData.Sprites.Window="Room",GameData.JabiTimer.Window=-1),""!==Temp&&eval("GameData.Sprites."+GameData.PressedType+" = Temp")}if(5===GameData.MenuVar)if(GameData.FlashesLeft>0){if("RoomFlash"!==GameData.Sprites.Door&&"RoomJabi1"!==GameData.Sprites.Door&&"RoomJabi2"!==GameData.Sprites.Door||(GameData.Sprites.Door="Room",GameData.JabiTimer.Door=-1),"RoomFlash"!==GameData.Sprites.Closet&&"RoomJabi1"!==GameData.Sprites.Closet&&"RoomJabi2"!==GameData.Sprites.Closet||(GameData.Sprites.Closet="Room",GameData.JabiTimer.Closet=-1),"RoomFlash"!==GameData.Sprites.Window&&"RoomJabi1"!==GameData.Sprites.Window&&"RoomJabi2"!==GameData.Sprites.Window||(GameData.Sprites.Window="Room",GameData.JabiTimer.Window=-1),GameData.Status="AliveComputer",GameData.CompAnim=Math.floor(4*Math.random()),GameData.BackupGenerator||(GameData.FlashesLeft-=1),GameData.VirusDiff/20>Math.random()&&!GameData.VirusSolved&&!GameData.Blind){for(var _i=1;_i<=GameData.VirusDiff/GameData.DoubleVirus;_i++){for(var Colliding=!0;Colliding;)if(Buttons.B[_i+6].X=Math.floor(462*Math.random())+64,Buttons.B[_i+6].Y=Math.floor(238*Math.random())+96,!(Buttons.B[_i+6].X+50>233.11&&Buttons.B[_i+6].X<406.89&&Buttons.B[_i+6].Y<162)){Colliding=!1;for(var j=1;j<_i;j++)Buttons.B[_i+6].X+50>Buttons.B[j+6].X&&Buttons.B[_i+6].X<Buttons.B[j+6].X+50&&Buttons.B[_i+6].Y+50>Buttons.B[j+6].Y&&Buttons.B[_i+6].Y<Buttons.B[j+6].Y+50&&(Colliding=!0)}Buttons.B[_i+6].ShowVar=8,Buttons.B[_i+6].Vis="Menu"}GameData.ButtonsClicked=0,GameData.MenuVar=8}}else GameData.MenuVar=4;if(8===GameData.MenuVar&&(Ctx.font="40px sans-serif",Ctx.fillStyle="#000",Ctx.fillRect(233.11,96,173.78,66),Ctx.fillStyle="#fff",Ctx.fillRect(235.11,98,169.78,62),Ctx.fillStyle="#000",Ctx.fillText("JabiVirus",320,133),Ctx.font="20px sans-serif",Ctx.fillText("Click buttons in order",320,155,167.78),0!==ButtonClicked)){if(Buttons.B[ButtonClicked].Text===GameData.ButtonsClicked+1)Buttons.B[ButtonClicked].Vis="Clicked",GameData.ButtonsClicked+=1;else{for(var _i2=1;_i2<=GameData.ButtonsClicked;_i2++)Buttons.B[_i2+6].Vis="Menu";GameData.ButtonsClicked=0}GameData.ButtonsClicked>=Math.floor(GameData.VirusDiff/GameData.DoubleVirus)&&(GameData.MenuVar=5,GameData.VirusSolved=!0)}-1===GameData.MenuVar&&(Ctx.fillStyle="#000",Ctx.font="60px sans-serif ",Ctx.fillText("Tutorial",320,55),Ctx.fillRect(0,70,640,5),Ctx.font="30px sans-serif ",Ctx.fillText("When eyes appear in your room, flash your",320,110),Ctx.fillText("light to make them go away, otherwise Jabiveir",320,140),Ctx.fillText("will kill you, but if you're very scared, eyes",320,170),Ctx.fillText("may just be hallucinations. Jabiveir can also",320,200),Ctx.fillText("smell fear, so if your fear reaches maximum,",320,230),Ctx.fillText("Jabiveir will kill you. Going on your computer",320,260),Ctx.fillText("helps calm you down, but if you get malware,",320,290),Ctx.fillText("you will need to press buttons in numerical",320,320),Ctx.fillText("order to remove the virus. Flashing your light",320,350),Ctx.fillText("and going on your computer uses power, so",320,380),Ctx.fillText("you will be unable to use them if you run out.",320,410),Ctx.fillText("Survive until 6 AM to beat the night.",320,440))}}]),Menu}();exports.default=Menu;
},{"./game":"HPsM"}],"gFLk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./menu"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(function t(r,n,o,u){a(this,t);var f=new e.default;f.UpdateMenu(r,n,o,u),document.getElementById("GameScreen").addEventListener("click",function(e){for(var t=0;t<n.B.length;t++)if(o.MenuVar===n.B[t].ShowVar&&e.offsetX>n.B[t].X&&e.offsetX<n.B[t].X+n.B[t].W&&e.offsetY>n.B[t].Y&&e.offsetY<n.B[t].Y+n.B[t].H){o.MenuVar=n.B[t].GoalVar,"Menu"!==n.B[t].Vis&&(o.PressedType=n.B[t].Vis),f.UpdateMenu(r,n,o,u,!1,t);break}})});exports.default=o;
},{"./menu":"STHs"}],"H99C":[function(require,module,exports) {
"use strict";var e=n(require("./button")),t=n(require("./input"));function n(e){return e&&e.__esModule?e:{default:e}}var r=new e.default,o=document.getElementById("GameScreen"),m=o.getContext("2d"),a=document.createElement("img");a.src="src/images/Computer.png";var u=document.createElement("img");u.src="src/images/Room.png";var s=document.createElement("img");s.src="src/images/RoomEyes.png";var i=document.createElement("img");i.src="src/images/RoomFlash.png";var c=document.createElement("img");c.src="src/images/RoomHallucinations.png";var g=document.createElement("img");g.src="src/images/RoomJabi1.png";var l=document.createElement("img");l.src="src/images/RoomJabi2.png";var p=document.createElement("img");p.src="src/images/RoomDeath1.png";var d=document.createElement("img");d.src="src/images/RoomDeath2.png";var N=document.createElement("img");N.src="src/images/RoomDeath3.png";var B=document.createElement("img");B.src="src/images/computer/Brown1.png";var w=document.createElement("img");w.src="src/images/computer/Brown2.png";var v=document.createElement("img");v.src="src/images/computer/Brown3.png";var b=document.createElement("img");b.src="src/images/computer/Brown4.png";var h=document.createElement("img");h.src="src/images/computer/Grey1.png";var E=document.createElement("img");E.src="src/images/computer/Grey2.png";var D=document.createElement("img");D.src="src/images/computer/Grey3.png";var R=document.createElement("img");R.src="src/images/computer/Grey4.png";var M=document.createElement("img");M.src="src/images/computer/Orange1.png";var f=document.createElement("img");f.src="src/images/computer/Orange2.png";var F=document.createElement("img");F.src="src/images/computer/Orange3.png";var C=document.createElement("img");C.src="src/images/computer/Orange4.png";var J=document.createElement("img");J.src="src/images/computer/White1.png";var V=document.createElement("img");V.src="src/images/computer/White2.png";var A=document.createElement("img");A.src="src/images/computer/White3.png";var I=document.createElement("img");I.src="src/images/computer/White4.png";for(var y={Computer:a,Room:u,RoomEyes:s,RoomFlash:i,RoomHallucinations:c,RoomJabi1:g,RoomJabi2:l,RoomDeath1:p,RoomDeath2:d,RoomDeath3:N,CompAnims:[[B,w,v,b],[h,E,D,R],[M,f,F,C],[J,V,A,I]]},G={Playing:!1,MenuVar:1,Night:1,Time:300,Waiting:!0,Status:"AliveRoom",PressedType:"",Sprites:{Door:"Room",Closet:"Room",Window:"Room"},JabiTimer:{Door:-1,Closet:-1,Window:-1},AnimationTime:5,CompAnim:0,FlashesLeft:90,Fear:0,FearFactor:1,JabiDiff:0,VirusDiff:0,ButtonsClicked:0,VirusSolved:!1,DeathReason:"",Volume:50,Blind:!1,DoubleJabi:1,DoubleVirus:2,NoFrontalLobe:!1,BackupGenerator:!1,FastNights:1,Endless:!1,CustomNight:!1,EndTime:0},W="Night=",k=decodeURIComponent(document.cookie),S=k.split(";"),L=0;L<S.length;L++){for(var O=S[L];" "===O.charAt(0);)O=O.substring(1);0===O.indexOf(W)&&(G.Night=parseInt(O.substring(W.length,O.length),10))}W="Settings=",S=(k=decodeURIComponent(document.cookie)).split(";");for(var T=0;T<S.length;T++){for(var x=S[T];" "===x.charAt(0);)x=x.substring(1);0===x.indexOf(W)&&(x=x.substring(W.length),G.Volume=parseInt(x.substring(0,7),2),G.NoFrontalLobe=!!parseInt(x.substring(7,8),2),G.BackupGenerator=!!parseInt(x.substring(8,9),2),G.FastNights=parseInt(x.substring(9,10),2)+1,G.Blind=!!parseInt(x.substring(10,11),2),G.DoubleJabi=parseInt(x.substring(11,12),2)+1,G.DoubleVirus=2-parseInt(x.substring(12,13),2))}r.NewButton(220,150,200,75,1,2,"Menu","Night "+G.Night,50),r.NewButton(480,360,150,50,1,0,"Menu","Wipe Save",30),r.NewButton(10,30,125,400,4,4,"Door"),r.NewButton(268,50,212,210,4,4,"Closet"),r.NewButton(540,90,80,180,4,4,"Window"),r.NewButton(235,265,170,105,4,5,"Computer"),r.NewButton(0,0,640,480,5,4,"Computer");for(var H=1;H<=20;H++)r.NewButton(0,0,50,50,0,8,"Menu",H,40);r.NewButton(0,0,640,480,8,8,"VirusCountReset",""),r.NewButton(455,420,175,50,1,-1,"Menu","How To Play",30),r.NewButton(505,300,125,50,1,-2,"Menu","Settings",30),r.NewButton(200,240,240,75,1,-3,"Menu","Custom Night",38),r.NewButton(10,10,35,35,-1,1,"Menu","X",30),r.NewButton(10,10,35,35,-2,1,"Menu","X",30),r.NewButton(10,10,35,35,-3,1,"Menu","X",30),G.NoFrontalLobe?r.NewButton(10,160,30,30,-2,-2,"Active","",30,"NoFrontalLobe"):r.NewButton(10,160,30,30,-2,-2,"Menu","",30,"NoFrontalLobe"),G.BackupGenerator?r.NewButton(10,250,30,30,-2,-2,"Active","",30,"BackupGenerator"):r.NewButton(10,250,30,30,-2,-2,"Menu","",30,"BackupGenerator"),1===G.FastNights?r.NewButton(10,340,30,30,-2,-2,"Menu","",30,"FastNights"):r.NewButton(10,340,30,30,-2,-2,"Active","",30,"FastNights"),G.Blind?r.NewButton(332,160,30,30,-2,-2,"Active","",30,"Blind"):r.NewButton(332,160,30,30,-2,-2,"Menu","",30,"Blind"),1===G.DoubleJabi?r.NewButton(332,250,30,30,-2,-2,"Menu","",30,"DoubleJabi"):r.NewButton(332,250,30,30,-2,-2,"Active","",30,"DoubleJabi"),2===G.DoubleVirus?r.NewButton(332,340,30,30,-2,-2,"Menu","",30,"DoubleVirus"):r.NewButton(332,340,30,30,-2,-2,"Active","",30,"DoubleVirus"),r.NewButton(430,395,200,75,-3,2,"Menu","Night 7",50,"CN"),r.NewButton(10,82,50,50,-3,-3,"Menu","<",50,"FearFactor"),r.NewButton(140,82,50,50,-3,-3,"Menu",">",50,"FearFactor"),r.NewButton(10,162,50,50,-3,-3,"Menu","<",50,"JabiDiff"),r.NewButton(140,162,50,50,-3,-3,"Menu",">",50,"JabiDiff"),r.NewButton(10,242,50,50,-3,-3,"Menu","<",50,"VirusDiff"),r.NewButton(140,242,50,50,-3,-3,"Menu",">",50,"VirusDiff"),r.NewButton(10,317,50,50,-3,-3,"Menu","",30,"Endless"),new t.default(m,r,G,y);
},{"./button":"w9XJ","./input":"gFLk"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-7qdoje/src.9ba74931.js.map