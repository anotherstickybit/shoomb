(this.webpackJsonpshoom=this.webpackJsonpshoom||[]).push([[0],{250:function(t,e,n){},251:function(t,e,n){},392:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),i=n.n(r),c=n(15),s=n.n(c),o=(n(250),n(20)),l=n(21),u=n(23),j=n(22),d=(n(251),n(444)),b=n(9),p=n(78),h=n(426),m=n(132),O=n(421),x=n(427),f=n(447),y=n(446),g=n(160),v=n.n(g),k=n(89),N=n.n(k),w=n(445),P=n(19),T=n(423),A=n(227),C=n.n(A),L=n(31),B=n(26),I=n(218).create({baseURL:"http://localhost:8080"}),S=function(){return I.get("playlists").then((function(t){return t.data}))},R=function(t){return I.delete("playlists/removepl/".concat(t))},_=function(t){return I.post("playlists",{id:0,name:t})},E=function(t,e){return I.post("playlists",{id:e,name:t})},M=function(t){return I.get("playlists/".concat(t)).then((function(t){return t}))},G=function(t){return I.delete("playlists/remove/".concat(t))},U=function(t,e){return I.post("playlists/add/".concat(t,"?trackId=").concat(e)).then((function(t){return t}))},z=function(){return I.get("artists").then((function(t){return t}))},D=function(t){return I.get("artists/".concat(t)).then((function(t){return t}))},H=function(t){return I.get("albums/artist/".concat(t)).then((function(t){return t}))},q=function(t){return I.get("artists/search/".concat(t)).then((function(t){return t}))},F=function(t){return I.get("albums/".concat(t)).then((function(t){return t}))},W=function(t){return I.get("tracks/search/".concat(t)).then((function(t){return t}))},Y="SEARCH_ARTISTS",J="SEARCH_TRACKS",K={artists:[],tracks:[],load:!1},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Y:return Object(b.a)(Object(b.a)({},t),{},{artists:e.artists});case J:return Object(b.a)(Object(b.a)({},t),{},{tracks:e.tracks});default:return t}},Q=n(16),X=n(222),Z=n.n(X),$=n(224),tt=n.n($),et=n(225),nt=n.n(et),at=n(223),rt=n.n(at),it=Object(O.a)((function(t){return{container:{padding:"0",margin:"0"},controls:{display:"inline-block",float:"left",marginTop:"3px"},description:{display:"inline-block",float:"right",marginTop:"5px",marginLeft:"15px"},playIcon:{height:35,width:35},nextPrevIcons:{height:25,width:25},trackName:{fontSize:"20px",color:"black"},artistName:{fontSize:"15px",color:"black"}}})),ct=function(t){var e=it();return Object(a.jsxs)("div",{className:e.container,children:[Object(a.jsxs)("div",{className:e.description,children:[Object(a.jsx)(m.a,{className:e.trackName,children:"trackName"}),Object(a.jsx)(m.a,{className:e.artistName,children:"artistName"})]}),Object(a.jsxs)("div",{className:e.controls,children:[Object(a.jsx)(T.a,{"aria-label":"previous",children:Object(a.jsx)(Z.a,{className:e.nextPrevIcons,color:"secondary"})}),t.isPlaying&&Object(a.jsx)(T.a,{"aria-label":"pause",onClick:t.pause,children:Object(a.jsx)(rt.a,{className:e.playIcon,color:"secondary"})}),!t.isPlaying&&Object(a.jsx)(T.a,{"aria-label":"play",onClick:function(){return t.play([])},children:Object(a.jsx)(tt.a,{className:e.playIcon,color:"secondary"})}),Object(a.jsx)(T.a,{"aria-label":"next",children:Object(a.jsx)(nt.a,{className:e.nextPrevIcons,color:"secondary"})})]})]})},st=function(t){return t.nowPlaying.isPlaying},ot="PLAY",lt="PAUSE",ut={playingList:[],isPlaying:!1},jt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ot:return Object(b.a)(Object(b.a)({},t),{},{playingList:e.tracks,isPlaying:!0});case lt:return Object(b.a)(Object(b.a)({},t),{},{isPlaying:!1});default:return t}},dt=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(ct,{isPlaying:this.props.isPlaying,play:this.props.play,pause:this.props.pause})}}]),n}(i.a.Component),bt=(Object(P.b)((function(t){return{isPlaying:st(t)}}),{play:function(t){return function(e){e({type:ot,tracks:t})}},pause:function(){return function(t){t({type:lt})}}})(dt),Object(O.a)((function(t){return{header:{height:"70px",background:"#e8e8e8"},h:{paddingLeft:"90px",paddingTop:"15px",color:"#f50057"},textField:{marginLeft:"270px",marginTop:"-40px",width:"450px"},searchButton:{marginLeft:"-35px",marginTop:"-65px"},playingControls:{position:"absolute",right:"0",marginRight:"150px"}}}))),pt=function(t){var e=t.className,n=t.label,r=t.input,i=t.placeholder,c=t.meta,s=c.touched,o=c.invalid,l=c.error,u=Object(p.a)(t,["className","label","input","placeholder","meta"]);return Object(a.jsx)(w.a,Object(b.a)(Object(b.a)(Object(b.a)({className:e,label:n,placeholder:i,error:s&&o,helperText:s&&l},r),u),{},{InputLabelProps:{shrink:!0},variant:"outlined",size:"small",color:"secondary"}))},ht=function(t){return t?void 0:" "},mt=Object(y.a)({form:"search"})((function(t){var e=v()({palette:{primary:N.a}}),n=bt();return Object(a.jsxs)(h.a,{id:"header",position:"static",className:n.header,elevation:0,children:[Object(a.jsx)(L.b,{style:{textDecoration:"none"},to:"/home",children:Object(a.jsx)(m.a,{className:n.h,variant:"h4",children:"Shoom \u266c"})}),Object(a.jsx)("form",{onSubmit:t.handleSubmit,children:Object(a.jsxs)(x.a,{theme:e,children:[Object(a.jsx)(f.a,{name:"searchInput",component:pt,label:"\u041f\u043e\u0438\u0441\u043a",validate:ht,className:n.textField,placeholder:"\u0423\u043a\u0430\u0436\u0438 \u0438\u043c\u044f \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0435\u043a\u0430"}),Object(a.jsx)(T.a,{className:n.searchButton,size:"small",type:"submit",color:"secondary",children:Object(a.jsx)(C.a,{color:"action"})})]})}),Object(a.jsx)("div",{className:n.playingControls})]})})),Ot=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"onSubmit",value:function(t){this.props.search(t.searchInput),this.props.history.push("/search")}},{key:"render",value:function(){return Object(a.jsx)(mt,{onSubmit:this.onSubmit.bind(this)})}}]),n}(i.a.Component),xt=Object(Q.d)(Object(P.b)((function(t){return{}}),{search:function(t){return function(e){q(t).then((function(t){var n;200===t.status&&e((n=t.data,{type:Y,artists:n}))})),W(t).then((function(t){var n;200===t.status&&e((n=t.data,{type:J,tracks:n}))}))}}}),B.f)(Ot),ft=n(62),yt=n(448),gt=n(443),vt=n(451),kt=n(233),Nt=n(442),wt=n(441),Pt="GET_ALL_ARTISTS",Tt="GET_CURRENT_ARTIST",At="GET_CURRENT_ARTIST_ALBUM_PREVIEWS",Ct={artists:[],currentArtist:{},currentArtistAlbumPreviews:[]},Lt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Pt:return Object(b.a)(Object(b.a)({},t),{},{artists:e.artists});case Tt:return Object(b.a)(Object(b.a)({},t),{},{currentArtist:e.artist});case At:return Object(b.a)(Object(b.a)({},t),{},{currentArtistAlbumPreviews:e.albumPreviews});default:return t}},Bt=n(40),It=n.n(Bt),St=n(430),Rt=n(432),_t=n(435),Et=n(431),Mt=n(433),Gt=n(434),Ut=It()((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper},typography:{display:"inline-block",marginLeft:"40px",marginTop:"20px"},content:{backgroundColor:"#e8e8e8"},toolBar:{minHeight:36,width:"100%"},table:{},tableContainer:{marginTop:"20px",width:650,marginLeft:"20px"}}})),zt=function(t){var e=Ut();return Object(a.jsx)(St.a,{className:e.tableContainer,component:kt.a,children:Object(a.jsxs)(Et.a,{className:e.table,size:"small",children:[Object(a.jsx)(Rt.a,{children:Object(a.jsx)(Mt.a,{children:Object(a.jsx)(Gt.a,{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"})})}),Object(a.jsx)(_t.a,{children:t.artistsList.map((function(t){return Object(a.jsx)(Mt.a,{children:Object(a.jsx)(L.b,{to:"/artist/"+t.id,children:Object(a.jsx)(Gt.a,{component:"th",scope:"row",children:t.name})})},t.id)}))})]})})},Dt=function(t){var e=Ut();return Object(a.jsx)("div",{className:e.root,children:t.artistsList.length>0&&Object(a.jsxs)("div",{className:e.content,children:[Object(a.jsx)(m.a,{className:e.typography,variant:"h6",gutterBottom:!0,children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0438:"}),Object(a.jsx)("div",{children:Object(a.jsx)(zt,{artistsList:t.artistsList})})]})})},Ht=function(t){return t.artists.artists},qt=function(t){return t.artists.currentArtist},Ft=function(t){return t.artists.currentArtistAlbumPreviews},Wt=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.requestArtists()}},{key:"render",value:function(){return Object(a.jsx)(Dt,{artistsList:this.props.artistsList})}}]),n}(i.a.Component),Yt=Object(Q.d)(Object(P.b)((function(t){return{artistsList:Ht(t)}}),{requestArtists:function(){return function(t){z().then((function(e){var n;200===e.status&&t((n=e.data,{type:Pt,artists:n}))}))}}}),B.f)(Wt),Jt=n(438),Kt=n(437),Vt=n(440),Qt=n(439),Xt=n(129),Zt=n.n(Xt),$t=n(230),te=n(436),ee=n(449),ne="GET_ALL",ae="GET_BY_ID",re="REMOVE_BY_ID",ie="ADD_TRACK",ce={playlistPreviews:[],errorOnRemoving:!1,img_URL:"https://images.macrumors.com/t/LGuWSa3kB8rIGbhA7CJm-zusWmg=/1200x1200/smart/article-new/2018/05/apple-music-note.jpg",currentPlaylist:{},trackAdded:!1},se=function(){return function(t){S().then((function(e){t({type:ne,playlistPreviews:e})}))}},oe=function(t){return function(e){M(t).then((function(t){var n;200===t.status&&e((n=t.data,{type:ae,currentPlaylist:n}))}))}},le=function(t,e){return function(n){U(t,e).then((function(t){200===t.status&&n({type:ie,trackAdded:!0})}))}},ue=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ne:return Object(b.a)(Object(b.a)({},t),{},{playlistPreviews:e.playlistPreviews});case re:return{state:t};case ae:return Object(b.a)(Object(b.a)({},t),{},{currentPlaylist:e.currentPlaylist});case ie:return Object(b.a)(Object(b.a)({},t),{},{trackAdded:e.trackAdded});default:return t}},je=Object(O.a)((function(t){return{typography:{padding:t.spacing(2)},openPopupButton:{marginTop:"20px",color:"white"},textField:{margin:4},addButton:{marginTop:"10px",marginLeft:"4px",color:"white",backgroundColor:"#2E3B55","&:hover":{backgroundColor:"#475c85"}},popover:{marginTop:5}}})),de=function(t){var e=t.label,n=t.input,r=t.meta,i=r.touched,c=r.invalid,s=r.error,o=Object(p.a)(t,["label","input","meta"]);return Object(a.jsx)(w.a,Object(b.a)(Object(b.a)(Object(b.a)({label:e,placeholder:e,error:i&&c,helperText:i&&s},n),o),{},{variant:"outlined",size:"small",color:"secondary"}))},be=function(t){return t?void 0:" "},pe=Object(y.a)({form:"addPlaylist"})((function(t){var e=Object($t.a)({palette:{primary:N.a}}),n=je(),r=i.a.useState(null),c=Object(ft.a)(r,2),s=c[0],o=c[1],l=function(){o(null)},u=Boolean(s),j=u?"simple-popover":void 0;return Object(a.jsxs)("div",{children:[Object(a.jsx)(te.a,{className:n.openPopupButton,color:"secondary","aria-describedby":j,variant:"contained",onClick:function(t){o(t.currentTarget)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(a.jsx)(ee.a,{id:j,open:u,className:n.popover,anchorEl:s,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(a.jsx)(m.a,{className:n.typography,children:Object(a.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{theme:e,children:Object(a.jsx)(f.a,{name:"playlistName",component:de,label:"\u0418\u043c\u044f \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0430",validate:be,className:n.textField})})}),Object(a.jsx)("div",{children:Object(a.jsx)(te.a,{className:n.addButton,"aria-describedby":j,variant:"contained",type:"submit",onClick:l,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})})})]})})),he=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"onSubmit",value:function(t){this.props.addNewPlaylist(t.playlistName)}},{key:"render",value:function(){return Object(a.jsx)(pe,{onSubmit:this.onSubmit.bind(this)})}}]),n}(i.a.Component),me=Object(P.b)(null,{addNewPlaylist:function(t){return function(e){_(t).then((function(t){200===t.status&&e(se())}))}}})(he),Oe=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={editMode:!1,playlistName:t.props.playlistName},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.props.renamePlaylist(t.state.playlistName,t.props.id)},t.onStatusChange=function(e){t.setState({playlistName:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e,n){t.playlistName!==this.props.playlistName&&this.setState({playlistName:this.props.playlistName})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[!this.state.editMode&&Object(a.jsx)(m.a,{onDoubleClick:this.activateEditMode,gutterBottom:!0,variant:"h5",component:"h2",children:this.props.playlistName}),this.state.editMode&&Object(a.jsx)(w.a,{onChange:this.onStatusChange,onBlur:this.deactivateEditMode,color:"secondary",value:this.state.playlistName,inputProps:{maxLength:15}})]})}}]),n}(i.a.Component),xe=It()((function(t){return{typography:{display:"inline-block",marginLeft:"40px",marginTop:"20px"},cardsArea:{marginTop:"25px"},card:{marginLeft:"20px",width:"300px",height:"350"},media:{height:"250px"},typographyCard:{marginTop:"-70px",marginLeft:"10px"}}})),fe=function(t){var e=xe();return Object(a.jsxs)(Kt.a,{className:e.card,children:[Object(a.jsx)(Jt.a,{action:Object(a.jsx)(T.a,{"aria-label":"settings",onClick:function(){t.removeById(t.id)},children:Object(a.jsx)(Zt.a,{})})}),Object(a.jsx)(Qt.a,{children:Object(a.jsx)("div",{className:e.typographyCard,children:Object(a.jsx)(Oe,{playlistName:t.title,id:t.id,renamePlaylist:t.renamePlaylist})})}),Object(a.jsx)(L.b,{to:"/playlist/"+t.id,children:Object(a.jsx)(Vt.a,{className:e.media,image:t.img_URL,title:t.title})})]})},ye=function(t){var e=xe();return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsxs)(wt.a,{justify:"space-between",container:!0,spacing:24,children:[Object(a.jsx)(wt.a,{item:!0,xs:2,children:Object(a.jsx)(m.a,{className:e.typography,variant:"h6",gutterBottom:!0,children:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b \u0434\u043b\u044f \u0412\u0430\u0441"})}),Object(a.jsx)(wt.a,{item:!0,xs:10,children:Object(a.jsx)(me,{})})]})}),Object(a.jsx)("div",{className:e.cardsArea,children:Object(a.jsx)(wt.a,{container:!0,spacing:2,children:t.albumPreviews.map((function(e){return Object(a.jsx)(wt.a,{item:!0,children:Object(a.jsx)(fe,{title:e.name,id:e.id,removeById:t.removePlaylistById,img_URL:t.img_URL,renamePlaylist:t.renamePlaylist})})}))})})]})},ge=function(t){return t.playlistPreviews.playlistPreviews},ve=function(t){return t.playlistPreviews.img_URL},ke=function(t){return t.playlistPreviews.currentPlaylist},Ne=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.requestPlaylistPreviews()}},{key:"render",value:function(){return Object(a.jsx)(ye,Object(b.a)(Object(b.a)({},this.props),{},{albumPreviews:this.props.playlistPreviews,removePlaylistById:this.props.removePlaylistById,img_URL:this.props.img_URL,renamePlaylist:this.props.renamePlaylist}))}}]),n}(i.a.Component),we=Object(P.b)((function(t){return{playlistPreviews:ge(t),img_URL:ve(t)}}),{removePlaylistById:function(t){return function(e){R(t).then((function(t){200===t.status&&e(se())}))}},requestPlaylistPreviews:se,renamePlaylist:function(t,e){return function(n){E(t,e).then((function(t){200===t.status&&n(se())}))}}})(Ne);function Pe(t){var e=t.children,n=t.value,r=t.index,i=Object(p.a)(t,["children","value","index"]);return Object(a.jsx)(m.a,Object(b.a)(Object(b.a)({component:"div",role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:n===r&&Object(a.jsx)(vt.a,{p:3,children:e})}))}function Te(t){return{id:"simple-tab-".concat(t),"aria-controls":"simple-tabpanel-".concat(t)}}var Ae=Object(O.a)((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper},appBar:{backgroundColor:"#FE2E64"},get_button:{display:"inline",width:70},paper:{width:"inherit",minHeight:"82vh",height:"100%",marginLeft:"-22px",marginRight:"-22px",backgroundColor:"#e8e8e8"},toolBar:{minHeight:36,width:"100%"}}})),Ce={flexGrow:1,background:"#30475e"};function Le(){var t=Ae(),e=i.a.useState(0),n=Object(ft.a)(e,2),r=n[0],c=n[1];return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(h.a,{style:Ce,position:"static",elevation:3,children:Object(a.jsx)(Nt.a,{className:t.toolBar,children:Object(a.jsxs)(wt.a,{justify:"space-between",container:!0,spacing:24,children:[Object(a.jsx)(wt.a,{item:!0,children:Object(a.jsxs)(yt.a,{value:r,onChange:function(t,e){c(e)},"aria-label":"simple tabs example",children:[Object(a.jsx)(gt.a,Object(b.a)({label:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435"},Te(0))),Object(a.jsx)(gt.a,Object(b.a)({label:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u0438"},Te(1)))]})}),Object(a.jsx)(wt.a,{item:!0})]})})}),Object(a.jsx)(Pe,{value:r,index:0,children:Object(a.jsx)(kt.a,{elevation:3,className:t.paper,children:Object(a.jsx)(we,{})})}),Object(a.jsx)(Pe,{value:r,index:1,children:Object(a.jsx)(kt.a,{elevation:3,className:t.paper,children:Object(a.jsx)(Yt,{})})})]})}var Be=n(452),Ie=It()((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper},typography:{display:"inline-block",marginLeft:"40px",marginTop:"20px"},paper:{width:"inherit",minHeight:"82vh",height:"100%",marginTop:"25px",marginLeft:"2px",marginRight:"2px",backgroundColor:"#e8e8e8"},toolBar:{minHeight:36,width:"100%"},table:{},tableContainer:{marginTop:"20px",width:650,marginLeft:"20px"}}})),Se={flexGrow:1,background:"#30475e"},Re=function(t){var e=Ie();return Object(a.jsx)(St.a,{className:e.tableContainer,component:kt.a,children:Object(a.jsxs)(Et.a,{className:e.table,size:"small",children:[Object(a.jsx)(Rt.a,{children:Object(a.jsxs)(Mt.a,{children:[Object(a.jsx)(Gt.a,{children:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f"}),Object(a.jsx)(Gt.a,{align:"right",children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"})]})}),Object(a.jsx)(_t.a,{children:t.songList.map((function(e){return Object(a.jsxs)(Mt.a,{children:[Object(a.jsx)(Gt.a,{component:"th",scope:"row",children:e.track.name}),Object(a.jsx)(Gt.a,{align:"right",children:e.track.artistName}),Object(a.jsx)(Gt.a,{align:"right",children:Object(a.jsx)(Be.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",children:Object(a.jsx)(T.a,{size:"small","aria-label":"settings",onClick:function(){t.removeTrackById(e.id,t.playlistId)},children:Object(a.jsx)(Zt.a,{})})})})]},e.id)}))})]})})},_e=function(t){var e=Ie();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(h.a,{style:Se,position:"static",children:Object(a.jsx)(Nt.a,{className:e.toolBar})}),Object(a.jsx)(kt.a,{elevation:3,className:e.paper,children:t.currentPlaylist.name&&Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{className:e.typography,variant:"h6",gutterBottom:!0,children:t.currentPlaylist.name}),Object(a.jsx)(Re,{songList:t.currentPlaylist.trackList,playlistId:t.currentPlaylist.id,removeTrackById:t.removeTrackById})]})})]})},Ee=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.props.getPlaylistById(t)}},{key:"render",value:function(){return Object(a.jsx)(_e,Object(b.a)(Object(b.a)({},this.props),{},{currentPlaylist:this.props.currentPlaylist,removeTrackById:this.props.removeTrackById}))}}]),n}(i.a.Component),Me=Object(Q.d)(Object(P.b)((function(t){return{currentPlaylist:ke(t)}}),{getPlaylistById:oe,removeTrackById:function(t,e){return function(n){G(t).then((function(t){200===t.status&&n(oe(e))}))}}}),B.f)(Ee),Ge=It()((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper},typography:{display:"inline-block",marginLeft:"40px",marginTop:"20px"},paper:{width:"inherit",minHeight:"82vh",height:"100%",marginTop:"25px",marginLeft:"2px",marginRight:"2px",backgroundColor:"#e8e8e8"},toolBar:{minHeight:36,width:"100%"},card:{marginLeft:"20px",width:"300px",height:"350px"},media:{height:"270px"},cardsArea:{marginLeft:"20px",marginTop:"20px"}}})),Ue={flexGrow:1,background:"#30475e"},ze=function(t){var e=Ge();return Object(a.jsxs)(Kt.a,{className:e.card,children:[Object(a.jsx)(Jt.a,{title:t.album,subheader:t.name}),Object(a.jsx)(L.b,{to:"/album/"+t.albumId,children:Object(a.jsx)(Vt.a,{className:e.media,image:t.img,title:t.name})})]})},De=function(t){var e=Ge();return Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(h.a,{style:Ue,position:"static",children:Object(a.jsx)(Nt.a,{className:e.toolBar})}),Object(a.jsx)(kt.a,{elevation:3,className:e.paper,children:t.currentArtist.id&&Object(a.jsxs)("div",{children:[Object(a.jsxs)(m.a,{className:e.typography,variant:"h6",gutterBottom:!0,children:[t.currentArtist.name,Object(a.jsx)("br",{}),"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0430\u043b\u044c\u0431\u043e\u043c\u044b:"]}),Object(a.jsx)("div",{className:e.cardsArea,children:Object(a.jsx)(wt.a,{container:!0,spacing:2,children:t.currentArtistAlbums.map((function(e){return Object(a.jsx)(ze,{name:t.currentArtist.name,img:e.imgURL,album:e.name,albumId:e.id})}))})})]})})]})},He=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.props.requestCurrentArtist(t),this.props.requestCurrentArtistAlbumPreviews(t)}},{key:"render",value:function(){return Object(a.jsx)(De,{currentArtist:this.props.currentArtist,currentArtistAlbums:this.props.currentArtistAlbums})}}]),n}(i.a.Component),qe=Object(Q.d)(Object(P.b)((function(t){return{currentArtist:qt(t),currentArtistAlbums:Ft(t)}}),{requestCurrentArtist:function(t){return function(e){D(t).then((function(t){var n;200===t.status&&e((n=t.data,{type:Tt,artist:n}))}))}},requestCurrentArtistAlbumPreviews:function(t){return function(e){H(t).then((function(t){var n;200===t.status&&e((n=t.data,{type:At,albumPreviews:n}))}))}}}),B.f)(He),Fe=Object(O.a)((function(t){return{root:{marginLeft:"10px",marginTop:"20px",display:"flex",width:"510px",height:"250px"},details:{display:"grid"},content:{marginTop:"70px"},cover:{marginLeft:"auto",width:"250px",height:"250px"}}}));function We(t){var e=Fe();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(Kt.a,{className:e.root,children:[Object(a.jsx)("div",{className:e.details,children:Object(a.jsxs)(Qt.a,{className:e.content,children:[Object(a.jsx)(m.a,{component:"h5",variant:"h5",children:t.albumName}),Object(a.jsx)(m.a,{variant:"subtitle1",color:"textSecondary",children:t.artistName})]})}),Object(a.jsx)(Vt.a,{className:e.cover,image:t.imgURL})]})})}var Ye=n(130),Je=n.n(Ye),Ke=n(231),Ve=n(453),Qe=n(81),Xe=It()((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper},typography:{display:"inline-block",marginLeft:"40px",marginTop:"20px"},paper:{width:"inherit",minHeight:"82vh",height:"100%",marginLeft:"2px",marginRight:"2px",backgroundColor:"#e8e8e8"},toolBar:{minHeight:36,width:"100%"},table:{},tableContainer:{display:"inline-block",marginTop:"50px",marginBottom:"20px",width:650,marginLeft:"20px"},menu:{}}})),Ze={flexGrow:1,background:"#30475e"},$e=function(t){var e=Object(Qe.b)().enqueueSnackbar,n=i.a.useState(null),r=Object(ft.a)(n,2),c=r[0],s=r[1],o=function(){s(null)},l=Xe();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T.a,{size:"small","aria-label":"settings",onClick:function(t){s(t.currentTarget)},children:Object(a.jsx)(Je.a,{})}),Object(a.jsx)(Ke.a,{className:l.menu,id:"long-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:o,children:t.playlists.map((function(n){return Object(a.jsx)(Ve.a,{onClick:function(){return a=n.id,r=t.rowId,i=n.name,c="success",t.addTrackById(a,r),e("\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442 "+i,{variant:c}),void o();var a,r,i,c},children:n.name})}))})]})},tn=function(t){var e=Xe();return Object(a.jsx)("div",{children:Object(a.jsx)(St.a,{className:e.tableContainer,component:kt.a,children:Object(a.jsxs)(Et.a,{className:e.table,size:"small",children:[Object(a.jsx)(Rt.a,{children:Object(a.jsx)(Mt.a,{children:Object(a.jsx)(Gt.a,{children:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f"})})}),Object(a.jsx)(_t.a,{children:t.songList.map((function(e){return Object(a.jsxs)(Mt.a,{children:[Object(a.jsx)(Gt.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(Gt.a,{align:"right",children:Object(a.jsx)($e,{playlists:t.playlists,rowId:e.id,addTrackById:t.addTrackById})})]},e.id)}))})]})})})},en=function(t){var e=Xe();return Object(a.jsx)(Qe.a,{maxSnack:3,children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(h.a,{style:Ze,position:"static",children:Object(a.jsx)(Nt.a,{className:e.toolBar})}),Object(a.jsx)(kt.a,{elevation:3,className:e.paper,children:t.currentAlbum.id&&Object(a.jsxs)("div",{children:[Object(a.jsx)(We,{albumId:t.currentAlbum.id,artistName:t.currentAlbum.artist.name,imgURL:t.currentAlbum.imgURL,albumName:t.currentAlbum.name}),Object(a.jsx)(tn,{songList:t.currentAlbum.trackList,playlists:t.playlists,addTrackById:t.addTrackById})]})})]})})},nn=function(t){return t.album.currentAlbum},an="GET_ALBUM_BY_ID",rn={currentAlbum:{}},cn=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case an:return Object(b.a)(Object(b.a)({},t),{},{currentAlbum:e.currentAlbum});default:return t}},sn=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.props.requestAlbumById(t)}},{key:"render",value:function(){return Object(a.jsx)(en,{currentAlbum:this.props.currentAlbum,playlists:this.props.playlists,addTrackById:this.props.addTrackById})}}]),n}(i.a.Component),on=Object(Q.d)(Object(P.b)((function(t){return{currentAlbum:nn(t),playlists:ge(t)}}),{requestAlbumById:function(t){return function(e){F(t).then((function(t){var n;200===t.status&&e((n=t.data,{type:an,currentAlbum:n}))}))}},addTrackById:le}),B.f)(sn),ln=It()((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper},typography:{display:"inline-block",marginLeft:"40px",marginTop:"20px"},paper:{width:"inherit",minHeight:"82vh",height:"100%",marginTop:"25px",marginLeft:"2px",marginRight:"2px",backgroundColor:"#e8e8e8"},toolBar:{minHeight:36,width:"100%"},table:{},tableContainer:{marginTop:"20px",width:650,marginLeft:"20px"}}})),un={flexGrow:1,background:"#30475e"},jn=function(t){var e=i.a.useState(null),n=Object(ft.a)(e,2),r=n[0],c=n[1],s=Object(Qe.b)().enqueueSnackbar,o=function(){c(null)},l=ln();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(T.a,{size:"small","aria-label":"settings",onClick:function(t){c(t.currentTarget)},children:Object(a.jsx)(Je.a,{})}),Object(a.jsx)(Ke.a,{className:l.menu,id:"long-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:o,children:t.playlists.map((function(e){return Object(a.jsx)(Ve.a,{onClick:function(){return n=e.id,a=t.rowId,r=e.name,i="success",t.addTrackById(n,a),s("\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442 "+r,{variant:i}),void o();var n,a,r,i},children:e.name})}))})]})},dn=function(t){var e=ln();return Object(a.jsx)("div",{children:Object(a.jsx)(St.a,{className:e.tableContainer,component:kt.a,children:Object(a.jsxs)(Et.a,{className:e.table,size:"small",children:[Object(a.jsx)(Rt.a,{children:Object(a.jsxs)(Mt.a,{children:[Object(a.jsx)(Gt.a,{children:"\u041a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f"}),Object(a.jsx)(Gt.a,{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"})]})}),Object(a.jsx)(_t.a,{children:t.songList.map((function(e){return Object(a.jsxs)(Mt.a,{children:[Object(a.jsx)(Gt.a,{component:"th",scope:"row",children:e.name}),Object(a.jsx)(Gt.a,{children:e.artistName}),Object(a.jsx)(Gt.a,{align:"right",children:Object(a.jsx)(jn,{playlists:t.playlists,rowId:e.id,addTrackById:t.addTrackById})})]},e.id)}))})]})})})},bn=function(t){var e=ln();return Object(a.jsx)(St.a,{className:e.tableContainer,component:kt.a,children:Object(a.jsxs)(Et.a,{className:e.table,size:"small",children:[Object(a.jsx)(Rt.a,{children:Object(a.jsx)(Mt.a,{children:Object(a.jsx)(Gt.a,{children:"\u0418\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c"})})}),Object(a.jsx)(_t.a,{children:t.artistsList.map((function(t){return Object(a.jsx)(Mt.a,{children:Object(a.jsx)(L.b,{to:"/artist/"+t.id,children:Object(a.jsx)(Gt.a,{component:"th",scope:"row",children:t.name})})},t.id)}))})]})})},pn=function(t){var e=ln();return Object(a.jsx)(Qe.a,{maxSnack:3,children:Object(a.jsxs)("div",{className:e.root,children:[Object(a.jsx)(h.a,{style:un,position:"static",children:Object(a.jsx)(Nt.a,{className:e.toolBar})}),Object(a.jsx)(kt.a,{elevation:3,className:e.paper,children:Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{className:e.typography,variant:"h6",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430:"}),t.artists.length>0&&Object(a.jsx)(bn,{artistsList:t.artists}),t.tracks.length>0&&Object(a.jsx)(dn,{songList:t.tracks,playlists:t.playlists,addTrackById:t.addTrackById})]})})]})})},hn=n(167),mn=function(t){return t.searchResult.artists},On=function(t){return t.searchResult.tracks},xn=(Object(hn.a)(mn,(function(t){return t.filter((function(t){return!0}))})),Object(hn.a)(On,(function(t){return t.filter((function(t){return!0}))})),function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(a.jsx)(pn,{artists:this.props.artists,tracks:this.props.tracks,addTrackById:this.props.addTrackById,playlists:this.props.playlists})}}]),n}(i.a.Component)),fn=Object(P.b)((function(t){return{artists:mn(t),tracks:On(t),playlists:ge(t)}}),{addTrackById:le})(xn),yn=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.title="Shoom Music"}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(d.a,{maxWidth:!1,children:[Object(a.jsx)(B.a,{to:"/home"}),Object(a.jsx)(xt,{}),Object(a.jsx)(B.b,{path:"/home",render:function(){return Object(a.jsx)(Le,{})}}),Object(a.jsx)(B.b,{path:"/playlist/:id",render:function(){return Object(a.jsx)(Me,{})}}),Object(a.jsx)(B.b,{path:"/artist/:id",render:function(){return Object(a.jsx)(qe,{})}}),Object(a.jsx)(B.b,{path:"/album/:id",render:function(){return Object(a.jsx)(on,{})}}),Object(a.jsx)(B.b,{path:"/search/",render:function(){return Object(a.jsx)(fn,{})}})]})})}}]),n}(i.a.Component),gn=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,454)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))},vn=n(229),kn=n(450),Nn=Object(Q.c)({form:kn.a,playlistPreviews:ue,artists:Lt,album:cn,searchResult:V,nowPlaying:jt}),wn=Object(Q.e)(Nn,Object(Q.a)(vn.a)),Pn=wn;window.store=wn;n(391);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(L.a,{children:Object(a.jsx)(P.a,{store:Pn,children:Object(a.jsx)(yn,{})})})}),document.getElementById("root")),gn()}},[[392,1,2]]]);
//# sourceMappingURL=main.4962e5cb.chunk.js.map