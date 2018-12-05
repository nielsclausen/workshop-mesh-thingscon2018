(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("SessionHeader",{attrs:{goal:"Publish and receive messages to/from the mesh.",time:20,tools:["Argon","Xenon","2 Grove starter kits for Particle mesh"]}}),t._v(" "),s("p",[t._v("In this session, we'll leverage a local mesh network to quickly send messages between devices. We'll get a LED to turn on/off when the button on a different device is pushed.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("From now on and the rest of the workshop, it is necessary to cooperate in groups of 2-3 participants. Each group will get a Xenon, and from this point on in the workshop, the group will now work with one Argon and one Xenon.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("This video walks you through it. You may follow along the 12 steps hereunder along with it, as the video has no sound.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("You now have a functioning")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("Let us take a look at two of the newest functions provided by Particle: "),s("code",[t._v("Mesh.publish()")]),t._v(" and "),s("code",[t._v("Mesh.subscribe()")]),t._v(". These primitives allow you to send and receive messages within a Particle Mesh network. These messages will not reach the cloud. Each device can publish messages to ther rest of the mesh, and each device can subscribe to messages from other devices – this is called a "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("pub/sub architecture"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The same code will be used for all devices in the network, so start by creating a new app in the "),s("a",{attrs:{href:"https://build.particle.io/build/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Particle Web IDE"),s("OutboundLink")],1),t._v(", name it "),s("em",[t._v("MeshPubSubTest.ino")]),t._v(" or come up with a more creative name.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),s("p",[t._v("🎉 Congratulations, you are now able to send/receive messages to/from the mesh network. Easy, right?")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("Got stuck in the code?")]),t._v(" "),s("p",[t._v("The final code for this lab is "),s("a",{attrs:{href:"https://go.particle.io/shared_apps/5bf709ee4a72e15412000614",target:"_blank",rel:"noopener noreferrer"}},[t._v("available here"),s("OutboundLink")],1),t._v(".")])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"how-to-mesh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-mesh","aria-hidden":"true"}},[this._v("#")]),this._v(" How to Mesh")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"work-in-groups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#work-in-groups","aria-hidden":"true"}},[this._v("#")]),this._v(" Work in groups")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Do yo come prepared?")]),this._v(" "),e("p",[this._v("It is assumed that you come to this session with an Argon that you are able to program.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setting-up-the-mesh-network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-mesh-network","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up the mesh network")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to set up a mesh network, you need one device with internet connection, acting as a gateway. This device will create a mesh network, other devices (currently only Xenons) can join. These devices will be the "),e("em",[this._v("nodes")]),this._v(" of the mesh network. This part will guide you trhough setting up an Argon as a gateway, and a Xenon as a node.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{align:"center"}},[e("iframe",{attrs:{width:"250",height:"400",src:"https://www.youtube.com/embed/MJ3aon2953I",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("p",[t._v("From the Particle app, add the Argon as a new device, even if it has already been added. This will not override your code on the device. Follow the steps from the previous lab, but select the option to use the Argon in a mesh network.")])]),t._v(" "),s("li",[s("p",[t._v("Follow the guide to add WiFi to your Argon.")])]),t._v(" "),s("li",[s("p",[t._v("After the Argon has connected to the Device Cloud, name your Argon.")])]),t._v(" "),s("li",[s("p",[t._v("Give your new mesh network a name (max 16 characters) and a password.")])]),t._v(" "),s("li",[s("p",[t._v("After the mesh network is successfully created, you may exit the setup guide, and set up the Xenon.")])]),t._v(" "),s("li",[s("p",[t._v('Add the Xenon in much the same fashion you added the Argon: Start from the "Your devices" and click on the "+" sign.')])]),t._v(" "),s("li",[s("p",[t._v("Hold the "),s("code",[t._v("Mode")]),t._v(" button for 3 seconds to put the Xenon into listening mode.")])]),t._v(" "),s("li",[s("p",[t._v("Scan the sticker. The Xenon will now pair with your phone.")])]),t._v(" "),s("li",[s("p",[t._v("After successful pairing, the Xenon will scan for local mesh-networks. Chose the network you set up with the Argon before.")])]),t._v(" "),s("li",[s("p",[t._v("To connect a new device to the mesh network, you physical access to a device already on the mesh network. This device will act as a commisioner, allowing your new device to join. Put the Argon (already on the mesh network) in listening mode (blinking blue) by holding the "),s("code",[t._v("MODE")]),t._v(" button down for 3 seconds. Then scan its sticker.")])]),t._v(" "),s("li",[s("p",[t._v("Once you have successfully paired with the Argon, enter the mesh network password you created earlier.")])]),t._v(" "),s("li",[s("p",[t._v("After your Xenon have successfully joined the mesh network, you may give it a name, and exit the setup guide.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sending-receiving-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-receiving-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Sending & Receiving messages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"sending-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sending-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Sending messages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("First, let's send out a message when the "),e("code",[this._v("MODE")]),this._v(" button on the Argon is pushed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("In the "),e("code",[this._v("setup")]),this._v(" function, tell the device to call the "),e("code",[this._v("button_handler")]),this._v(" function, whenever the "),e("code",[this._v("button_status")]),this._v(" changes (pressed or released).")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("System"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("on")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("button_status"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" button_handler"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Now write the "),e("code",[this._v("button_handler")]),this._v(" function before the "),e("code",[this._v("setup")]),this._v(" function.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("button_handler")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("system_event_t event"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" duration"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// Empty")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{attrs:{start:"3"}},[s("li",[t._v("Since this function gets called on both press "),s("em",[t._v("and")]),t._v(" release of the "),s("code",[t._v("MODE")]),t._v(" button, we can use the "),s("code",[t._v("duration")]),t._v(" to check which it is. Replace the line the the "),s("em",[t._v("Empty")]),t._v(" comment with the following.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("duration"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// Just pressed.")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("Now, since we now that the button has been pressed, we should tell the whole mesh network to toggle their LEDs. We use the "),e("code",[this._v("Mesh.publish()")]),this._v(" for that, which takes one or two striings as arguments. The first argument is a topic and the second is data. We will only use the topic, and we should choose a topic that will make sense for the purpose. Later other devices will be able to subscribe to this topic and will get notified whenever we publish to this topic. Replace the "),e("em",[this._v("Just pressed")]),this._v(" comment line with this line, to finish the code.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Mesh"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("publish")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"toggle-led"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("You have now completed the sending part of the code. To see that everything works, first add the following line to the "),e("code",[this._v("setup")]),this._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Serial"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("begin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("9600")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("Then add a print statement like this inside the if-loop, just under the "),e("code",[this._v("mesh.publish")]),this._v(" line.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Serial"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("println")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"Button push published!"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"7"}},[e("li",[this._v("Flash your device with the code, and see that it behaves as expected.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"receiving-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#receiving-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Receiving messages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("We now want to subsribe to any messages on the "),e("code",[this._v("toggle-led")]),this._v(" topic (or whatever you have decided to call it).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("First off, we need to define two variables that we will use to control the onboard LED. In the very top of the code, insert the following lines of code.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// Define the pin connected to the onboard LED (not the big RGB one, but the smaller one just right of the USB).")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ledPin "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" D7"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Set the initial state to ON (true).")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" ledStatus "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Then initialize the LED by making its pin writable and write its inital status. This code is inserted in the "),e("code",[this._v("setup")]),this._v(" function.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("pinMode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ledPin"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OUTPUT"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("digitalWrite")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ledPin"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ledStatus"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// Update the physical LED")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("In the "),e("code",[this._v("setup")]),this._v(" function, subscribe to the "),e("code",[this._v("toggle-led")]),this._v(" topic (first argument), and tell the device which function to call (second argument) when another device broadcasts a message to the topic.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Mesh"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("subscribe")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"toggle-led"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toggleLed"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("Write the function that handles incoming messages to the "),e("code",[this._v("toggle-led")]),this._v("topic. Insert the function before the "),e("code",[this._v("setup")]),this._v(" function.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("toggleLed")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("event"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// Empty line")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("Put logic in the function that switches the status of the LED, and then update the physical LED to the new status. The following code replaces the "),e("em",[this._v("Empty line")]),this._v(" comment line in the "),e("code",[this._v("toggleLed")]),this._v("function.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// Toggle the status of the LED.")]),t._v("\nledStatus "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("ledStatus"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Update the state of the physical LED by writing the value to the pin")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("digitalWrite")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ledPin"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ledStatus"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"6"}},[e("li",[this._v("To see that everything works add the two print statements like these at the bottom of the "),e("code",[this._v("toggleLed")]),this._v(" function.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Serial"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("print")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"LED status toggled. Status: "')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nSerial"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("print")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ledStatus"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"7"}},[e("li",[this._v("Flash the code containg both receiving and sending code to your device. You have now completed the receiving part of the code. Since all devices  Try and push the "),e("code",[this._v("MODE")]),this._v(" button on one of the devices in the mesh network, then see if the LEDs on the other devices are toggled.")])])}],!1,null,null,null);a.options.__file="mesh-messaging.md";e.default=a.exports}}]);