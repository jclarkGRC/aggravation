(this.webpackJsonpaggravation=this.webpackJsonpaggravation||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),p=a(7),r=a.n(p),o=(a(14),a(1)),i=a(2),c=a(4),n=a(3),y=a(5),m=(a(15),[{id:1,top:"263px",left:"15px",class:"greenHome",empty:!0},{id:2,top:"263px",left:"77px",class:"spaces",empty:!0},{id:3,top:"263px",left:"139px",class:"spaces",empty:!0},{id:4,top:"263px",left:"201px",class:"spaces",empty:!0},{id:5,top:"263px",left:"263px",class:"spaces",empty:!0},{id:6,top:"201px",left:"263px",class:"spaces",empty:!0},{id:7,top:"139px",left:"263px",class:"spaces",empty:!0},{id:8,top:"77px",left:"263px",class:"spaces",empty:!0},{id:9,top:"15px",left:"263px",class:"spaces",empty:!0},{id:10,top:"15px",left:"325px",class:"spaces",empty:!0},{id:11,top:"15px",left:"387px",class:"spaces",empty:!0},{id:12,top:"15px",left:"449px",class:"spaces",empty:!0},{id:13,top:"15px",left:"511px",class:"blueHome",empty:!0},{id:14,top:"77px",left:"511px",class:"spaces",empty:!0},{id:15,top:"139px",left:"511px",class:"spaces",empty:!0},{id:16,top:"201px",left:"511px",class:"spaces",empty:!0},{id:17,top:"263px",left:"511px",class:"spaces",empty:!0},{id:18,top:"263px",left:"573px",class:"spaces",empty:!0},{id:19,top:"263px",left:"635px",class:"spaces",empty:!0},{id:20,top:"263px",left:"697px",class:"spaces",empty:!0},{id:21,top:"263px",left:"759px",class:"spaces",empty:!0},{id:22,top:"325px",left:"759px",class:"spaces",empty:!0},{id:23,top:"387px",left:"759px",class:"spaces",empty:!0},{id:24,top:"449px",left:"759px",class:"spaces",empty:!0},{id:25,top:"511px",left:"759px",class:"yellowHome",empty:!0},{id:26,top:"511px",left:"697px",class:"spaces",empty:!0},{id:27,top:"511px",left:"635px",class:"spaces",empty:!0},{id:28,top:"511px",left:"573px",class:"spaces",empty:!0},{id:29,top:"511px",left:"511px",class:"spaces",empty:!0},{id:30,top:"573px",left:"511px",class:"spaces",empty:!0},{id:31,top:"635px",left:"511px",class:"spaces",empty:!0},{id:32,top:"697px",left:"511px",class:"spaces",empty:!0},{id:33,top:"759px",left:"511px",class:"spaces",empty:!0},{id:34,top:"759px",left:"449px",class:"spaces",empty:!0},{id:35,top:"759px",left:"387px",class:"spaces",empty:!0},{id:36,top:"759px",left:"325px",class:"spaces",empty:!0},{id:37,top:"759px",left:"263px",class:"redHome",empty:!0},{id:38,top:"697px",left:"263px",class:"spaces",empty:!0},{id:39,top:"635px",left:"263px",class:"spaces",empty:!0},{id:40,top:"573px",left:"263px",class:"spaces",empty:!0},{id:41,top:"511px",left:"263px",class:"spaces",empty:!0},{id:42,top:"511px",left:"201px",class:"spaces",empty:!0},{id:43,top:"511px",left:"139px",class:"spaces",empty:!0},{id:44,top:"511px",left:"77px",class:"spaces",empty:!0},{id:45,top:"511px",left:"15px",class:"spaces",empty:!0},{id:46,top:"449px",left:"15px",class:"spaces",empty:!0},{id:47,top:"387px",left:"15px",class:"spaces",empty:!0},{id:48,top:"325px",left:"15px",class:"spaces",empty:!0},{id:"g1",top:"387px",left:"77px",class:"greenHome",empty:!0},{id:"g2",top:"387px",left:"139px",class:"greenHome",empty:!0},{id:"g3",top:"387px",left:"201px",class:"greenHome",empty:!0},{id:"g4",top:"387px",left:"263px",class:"greenHome",empty:!0},{id:"b1",top:"77px",left:"387px",class:"blueHome",empty:!0},{id:"b2",top:"139px",left:"387px",class:"blueHome",empty:!0},{id:"b3",top:"201px",left:"387px",class:"blueHome",empty:!0},{id:"b4",top:"263px",left:"387px",class:"blueHome",empty:!0},{id:"r1",top:"697px",left:"387px",class:"redHome",empty:!0},{id:"r2",top:"635px",left:"387px",class:"redHome",empty:!0},{id:"r3",top:"573px",left:"387px",class:"redHome",empty:!0},{id:"r4",top:"511px",left:"387px",class:"redHome",empty:!0},{id:"y1",top:"387px",left:"697px",class:"yellowHome",empty:!0},{id:"y2",top:"387px",left:"635px",class:"yellowHome",empty:!0},{id:"y3",top:"387px",left:"573px",class:"yellowHome",empty:!0},{id:"y4",top:"387px",left:"511px",class:"yellowHome",empty:!0}]),d=a(8),u=a.n(d),v=(a(16),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(n.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u.a,{id:this.props.id,numDice:1,rollDone:this.props.rollDoneCallback,ref:function(t){return e.reactDice=t},faceColor:this.props.color}))}},{key:"rollAll",value:function(){this.reactDice.rollAll()}}]),t}(s.a.Component)),x=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(c.a)(this,Object(n.a)(t).call(this,e))).rollDice=function(e){a.setState({playerRoll:e})},a.playerStart=function(e){var t=e.target;6===a.state.playerRoll||1===a.state.playerRoll?(t.classList.contains("playerOneBallStart")&&a.setState({playerOneFirstMove:!0}),t.classList.contains("playerTwoBallStart")&&a.setState({playerTwoFirstMove:!0}),t.classList.contains("playerThreeBallStart")&&a.setState({playerThreeFirstMove:!0}),t.classList.contains("playerFourBallStart")&&a.setState({playerFourFirstMove:!0}),0===a.state.count?(t.classList.add("highlightBall"),a.setState({previousBall:t}),a.setState({count:1})):(a.setState({count:1}),alert("You cannot move here"))):1===a.state.count?alert("You cannot move here"):alert("You must roll a 6 or a 1 to start playing!")},a.moveAroundBoard=function(e){var t=e.target;if(null==a.state.previousBall)alert("Roll a dice to begin playing");else{if((a.state.previousBall.classList.contains("playerOneBallStart")||a.state.previousBall.classList.contains("playerOneBall")||t.classList.contains("playerOneBall"))&&(0===a.state.count&&(t.classList.add("highlightBall"),a.setState({playerOneFirstMove:!1}),a.setState({previousBall:t}),a.setState({count:1})),1===a.state.count)){var l=window.confirm("Would you like to make this move?");l&&a.state.playerOneFirstMove&&t.classList.contains("greenHome")?(a.state.previousBall.classList.remove("playerOneBallStart"),a.state.previousBall.classList.remove("highlightBall"),a.state.previousBall.classList.add("greenHome"),t.classList.add("playerOneBall"),a.setState({count:0,playerOneFirstMove:!1})):l&&!a.state.playerOneFirstMove?(a.state.previousBall.classList.remove("playerOneBall"),a.state.previousBall.classList.remove("highlightBall"),t.classList.add("playerOneBall"),a.setState({count:0})):alert("You cant move here")}if((a.state.previousBall.classList.contains("playerTwoBallStart")||a.state.previousBall.classList.contains("playerTwoBall")||t.classList.contains("playerTwoBall"))&&(0===a.state.count&&(t.classList.add("highlightBall"),a.setState({playerTwoFirstMove:!1}),a.setState({previousBall:t}),a.setState({count:1})),1===a.state.count)){var s=window.confirm("Would you like to make this move?");s&&a.state.playerTwoFirstMove&&t.classList.contains("blueHome")?(a.state.previousBall.classList.remove("playerTwoBallStart"),a.state.previousBall.classList.remove("highlightBall"),a.state.previousBall.classList.add("blueHome"),t.classList.add("playerTwoBall"),a.setState({count:0,playerTwoFirstMove:!1})):s&&!a.state.playerTwoFirstMove?(a.state.previousBall.classList.remove("playerTwoBall"),a.state.previousBall.classList.remove("highlightBall"),t.classList.add("playerTwoBall"),a.setState({count:0})):alert("You cant move here")}if((a.state.previousBall.classList.contains("playerThreeBallStart")||a.state.previousBall.classList.contains("playerThreeBall")||t.classList.contains("playerThreeBall"))&&(0===a.state.count&&(t.classList.add("highlightBall"),a.setState({playerThreeFirstMove:!1}),a.setState({previousBall:t}),a.setState({count:1})),1===a.state.count)){var p=window.confirm("Would you like to make this move?");p&&a.state.playerThreeFirstMove&&t.classList.contains("redHome")?(a.state.previousBall.classList.remove("playerThreeBallStart"),a.state.previousBall.classList.remove("highlightBall"),a.state.previousBall.classList.add("redHome"),t.classList.add("playerThreeBall"),a.setState({count:0,playerOneFirstMove:!1})):p&&!a.state.playerThreeFirstMove?(a.state.previousBall.classList.remove("playerThreeBall"),a.state.previousBall.classList.remove("highlightBall"),t.classList.add("playerThreeBall"),a.setState({count:0})):alert("You cant move here")}if((a.state.previousBall.classList.contains("playerFourBallStart")||a.state.previousBall.classList.contains("playerFourBall")||t.classList.contains("playerFourBall"))&&(0===a.state.count&&(t.classList.add("highlightBall"),a.setState({playerFourFirstMove:!1}),a.setState({previousBall:t}),a.setState({count:1})),1===a.state.count)){var r=window.confirm("Would you like to make this move?");r&&a.state.playerFourFirstMove&&t.classList.contains("yellowHome")?(a.state.previousBall.classList.remove("playerFourBallStart"),a.state.previousBall.classList.remove("highlightBall"),a.state.previousBall.classList.add("yellowHome"),t.classList.add("playerFourBall"),a.setState({count:0,playerFourFirstMove:!1})):r&&!a.state.playerFourFirstMove?(a.state.previousBall.classList.remove("playerFourBall"),a.state.previousBall.classList.remove("highlightBall"),t.classList.add("playerFourBall"),a.setState({count:0})):alert("You cant move here")}}};var l=m.map((function(e){return s.a.createElement("div",{key:e.id,className:e.class,style:{position:"absolute",marginTop:e.top,marginLeft:e.left},onClick:a.moveAroundBoard})}));return a.state={spaces:l,playerRoll:null,playerOneFirstMove:!0,playerTwoFirstMove:!0,playerThreeFirstMove:!0,playerFourFirstMove:!0,previousBall:null,currentBall:null,count:0},a}return Object(y.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Table"},s.a.createElement("div",{className:"GameBoard"},s.a.createElement("div",{id:"playerOneStart"},s.a.createElement("div",{id:"greenDice"},s.a.createElement(v,{id:"greenDice",color:"green",rollDoneCallback:this.rollDice})),s.a.createElement("div",{id:"playerOneBallOne",className:"playerOneBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerOneBallTwo",className:"playerOneBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerOneBallThree",className:"playerOneBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerOneBallFour",className:"playerOneBallStart",onClick:this.playerStart})),s.a.createElement("div",{id:"playerTwoStart"},s.a.createElement("div",{id:"blueDice"},s.a.createElement(v,{id:"blueDice",color:"blue",rollDoneCallback:this.rollDice})),s.a.createElement("div",{id:"playerTwoBallOne",className:"playerTwoBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerTwoBallTwo",className:"playerTwoBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerTwoBallThree",className:"playerTwoBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerTwoBallFour",className:"playerTwoBallStart",onClick:this.playerStart})),s.a.createElement("div",{id:"playerThreeStart"},s.a.createElement("div",{id:"redDice"},s.a.createElement(v,{id:"redDice",color:"red",rollDoneCallback:this.rollDice})),s.a.createElement("div",{id:"playerThreeBallOne",className:"playerThreeBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerThreeBallTwo",className:"playerThreeBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerThreeBallThree",className:"playerThreeBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerThreeBallFour",className:"playerThreeBallStart",onClick:this.playerStart})),s.a.createElement("div",{id:"playerFourStart"},s.a.createElement("div",{id:"yellowDice"},s.a.createElement(v,{id:"yellowDice",color:"yellow",rollDoneCallback:this.rollDice})),s.a.createElement("div",{id:"playerFourBallOne",className:"playerFourBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerFourBallTwo",className:"playerFourBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerFourBallThree",className:"playerFourBallStart",onClick:this.playerStart}),s.a.createElement("div",{id:"playerFourBallFour",className:"playerFourBallStart",onClick:this.playerStart})),s.a.createElement("div",{id:"middlePostion",className:"spaces",onClick:this.moveAroundBoard}),this.state.spaces))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0d1a15d6.chunk.js.map