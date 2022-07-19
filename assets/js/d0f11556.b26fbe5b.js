"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},70525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},o="Matter Debugger",i={unversionedId:"Guides/MatterDebugger",id:"Guides/MatterDebugger",title:"Matter Debugger",description:"The Matter debugger allows you to view your systems and create debug UI elements right inside your systems.",source:"@site/docs/Guides/MatterDebugger.md",sourceDirName:"Guides",slug:"/Guides/MatterDebugger",permalink:"/matter/docs/Guides/MatterDebugger",draft:!1,editUrl:"https://github.com/evaera/matter/edit/main/docs/Guides/MatterDebugger.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Hot reloading",permalink:"/matter/docs/Guides/HotReloading"},next:{title:"Replication",permalink:"/matter/docs/Guides/Replication"}},s={},u=[{value:"Adding the Matter debugger to your game",id:"adding-the-matter-debugger-to-your-game",level:2},{value:"Installing Plasma",id:"installing-plasma",level:3},{value:"Create the debugger",id:"create-the-debugger",level:3},{value:"Authorization",id:"authorization",level:3},{value:"Entity Highlight",id:"entity-highlight",level:2},{value:"Highlight selected entity",id:"highlight-selected-entity",level:3},{value:"Hover selection",id:"hover-selection",level:3},{value:"Available widgets",id:"available-widgets",level:2},{value:"Demo videos",id:"demo-videos",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"matter-debugger"},"Matter Debugger"),(0,r.kt)("p",null,"The Matter debugger allows you to view your systems and create debug UI elements right inside your systems."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.eryn.io/2228/89tcYlOq.png",alt:"Debugger screenshot"})),(0,r.kt)("p",null,"Inside your system code, you can create UI elements and check user input inline. Here's the code for the above screenshot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local function spinSpinners(world, _, ui)\n    if ui.checkbox("Disable Spinning"):checked() then\n        return\n    end\n\n    local transparency = ui.slider(1)\n\n    local randomize = ui.button("Randomize colors!"):clicked()\n\n    for id, model in world:query(Components.Model, Components.Spinner) do\n        model.model.PrimaryPart.Transparency = transparency\n\n        if randomize then\n            model.model.PrimaryPart.BrickColor = BrickColor.random()\n        end\n    end\nend\n')),(0,r.kt)("p",null,"This is accomplished using ",(0,r.kt)("a",{parentName:"p",href:"https://eryn.io/plasma/"},"Plasma"),", an immediate-mode widget library. The widgets are only created while the debugger is active. Leaving the widget calls in your systems all the time is fine, because calling a widget function when the debugger is not open is a no-op."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/matter/blob/main/example/shared/start.lua"},"Matter example game")," comes with the debugger set up already. If you want to see an example of the debugger already set up in a game, check out that page."),(0,r.kt)("h2",{id:"adding-the-matter-debugger-to-your-game"},"Adding the Matter debugger to your game"),(0,r.kt)("h3",{id:"installing-plasma"},"Installing Plasma"),(0,r.kt)("p",null,"You need to install ",(0,r.kt)("a",{parentName:"p",href:"https://eryn.io/plasma/"},"Plasma")," as a dependency to your project. We recommend you do this with ",(0,r.kt)("a",{parentName:"p",href:"https://wally.run"},"Wally"),", the Roblox open source package manager."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="wally.toml"',title:'"wally.toml"'},'[dependencies]\nplasma = "evaera/plasma@0.4.2"\n')),(0,r.kt)("h3",{id:"create-the-debugger"},"Create the debugger"),(0,r.kt)("p",null,"Create the debugger where you create your ",(0,r.kt)("inlineCode",{parentName:"p"},"Loop")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"World"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local ReplicatedStorage = game:GetService("ReplicatedStorage")\nlocal Packages = ReplicatedStorage.Packages\nlocal Matter = require(Packages.matter)\nlocal Plasma = require(Packages.plasma)\n\nlocal debugger = Matter.Debugger.new(Plasma) -- Pass Plasma into the debugger!\nlocal widgets = debugger:getWidgets()\n\nlocal loop = Matter.Loop.new(world, state, widgets) -- Pass the widgets to all your systems!\n')),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"debugger:autoInitialize(loop)")," to automatically set up the Loop middleware necessary to invoke the debugger every frame:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"debugger:autoInitialize(loop)\n")),(0,r.kt)("p",null,"Finally, we need a way to open the debugger You might want to only allow certain players to open the debugger, but that's up to you!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"UserInputService.InputBegan:Connect(function(input)\n    if input.KeyCode == Enum.KeyCode.F4 then\n        debugger:toggle()\n    end\nend)\n")),(0,r.kt)("h3",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"By default, the server-side debugger only works in Studio. To allow players to connect to the server-side debugger in live games, you need to specify an ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"debugger.authorize = function(player)\n    if player:GetRankInGroup(372) > 250 then -- example\n        return true\n    end\nend\n")),(0,r.kt)("h2",{id:"entity-highlight"},"Entity Highlight"),(0,r.kt)("h3",{id:"highlight-selected-entity"},"Highlight selected entity"),(0,r.kt)("p",null,"To highlight the selected entity in the World inspector, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"findInstanceFromEntity")," function in the debugger."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"debugger.findInstanceFromEntity = function(id)\n    if not world:contains(id) then\n        return\n    end\n\n    local model = world:get(id, components.Model)\n\n    return model and model.model or nil\nend\n")),(0,r.kt)("p",null,"Change the above function so that it works with your game's component structure."),(0,r.kt)("h3",{id:"hover-selection"},"Hover selection"),(0,r.kt)("p",null,"Create attributes ",(0,r.kt)("inlineCode",{parentName:"p"},"clientEntityId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"serverEntityId")," on instances to enable in-world hover selection when you hold the ",(0,r.kt)("kbd",null,"ALT")," key. Click to select the entity."),(0,r.kt)("video",{controls:!0,width:"600"},(0,r.kt)("source",{src:"https://i.eryn.io/2228/JzUKh1xj.mp4",type:"video/mp4"})),(0,r.kt)("p",null,"This can be done by creating a system like this on both the client and the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'local name = RunService:IsServer() and "serverEntityId" or "clientEntityId"\n\nlocal function updateModelAttribute(world)\n    for id, record in world:queryChanged(Components.Model) do\n        if record.new then\n            record.new.model:SetAttribute(name, id)\n        end\n    end\nend\n')),(0,r.kt)("p",null,"Change the above function so that it works with your game's component structure."),(0,r.kt)("h2",{id:"available-widgets"},"Available widgets"),(0,r.kt)("p",null,"The following Plasma widgets are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"arrow (3D Arrow gizmo for debugging Vector math)"),(0,r.kt)("li",{parentName:"ul"},"blur (blurs the camera background)"),(0,r.kt)("li",{parentName:"ul"},"button"),(0,r.kt)("li",{parentName:"ul"},"checkbox"),(0,r.kt)("li",{parentName:"ul"},"heading"),(0,r.kt)("li",{parentName:"ul"},"label"),(0,r.kt)("li",{parentName:"ul"},"portal (Insert instances into somewhere other than the provided frame)"),(0,r.kt)("li",{parentName:"ul"},"row (lay elements out horizontally)"),(0,r.kt)("li",{parentName:"ul"},"slider"),(0,r.kt)("li",{parentName:"ul"},"space (empty space)"),(0,r.kt)("li",{parentName:"ul"},"spinner (loading spinner)"),(0,r.kt)("li",{parentName:"ul"},"table"),(0,r.kt)("li",{parentName:"ul"},"window")),(0,r.kt)("p",null,"For details on these widgets, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://eryn.io/plasma/api/Plasma"},"Plasma docs")),(0,r.kt)("h2",{id:"demo-videos"},"Demo videos"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Demo of hot reloading and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Guides/MatterDebugger"},"Matter debugger")),(0,r.kt)("video",{controls:!0,width:"800"},(0,r.kt)("source",{src:"https://i.eryn.io/2227/9BmdqOYM.mp4",type:"video/mp4"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Demo of the server-side debugger"),(0,r.kt)("video",{controls:!0,width:"800"},(0,r.kt)("source",{src:"https://i.eryn.io/2227/AHAItqM1.mp4",type:"video/mp4"}))),(0,r.kt)("p",null,"Note: When multiple players connect to the server-side debugger, their views are linked. There is only one instance of the server debugger (because creating UI elements within the server systems means the UI is owned by the server). Multiple players can connect to and share the server debugger."))}c.isMDXComponent=!0}}]);