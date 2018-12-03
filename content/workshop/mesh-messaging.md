---
title: Messaging in the mesh
---

# How to Mesh

<SessionHeader
:goal="'Publish and receive messages to/from the mesh.'"
:time="20"
:tools="[
  'Argon',
  'Grove starter kits for Particle mesh',
  'A partner, also with an Argon + Grove kit'
  ]"
/>

In this session, we'll leverage a local mesh network to quickly send messages between devices. We'll get a LED to turn on/off when the button on a differetn device is pushed. If you get stuck at any point in the process, you can see the code for the completed lab [here](http://about:blank).

### Partner up with your neighbour
From now on and the rest of the workshop, it is necessary to cooperate in groups of at least two participants.

The code you'll write in this lab will live on your Argon. Each group-members should do their own code for their own device, even though it is the same code for all devices at this point.


::: tip Do yo come prepared?
It is assumed that you come to this session with an Argon that you are able to program.
:::

## Setting up the mesh network

>TODO

## Sending & Receiving messages

Let us take a look at two of the newest functions provided by Particle: `Mesh.publish()` and `Mesh.subscribe()`. These primitives allow you to send and receive messages within a Particle Mesh network. These messages will not reach the cloud. Each device can publish messages to ther rest of the mesh, and each device can subscribe to messages from other devices – this is called a [pub/sub architecture](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern).


The same code will be used for all devices in the network, so start by creating a new app in the [Particle Web IDE](https://build.particle.io/build/new), name it *MeshPubSubTest.ino* or come up with a more creative name.

### Sending messages
First, let's send out a message when the `MODE` button on the Argon is pushed.

1. In the `setup` function, tell the device to call the `button_handler` function, whenever the `button_status` changes (pressed or released).

```cpp
System.on(button_status, button_handler);
```

2. Now write the `button_handler` function before the `setup` function.
``` cpp
void button_handler(system_event_t event, int duration, void* ) {
  // Empty
}
```

3. Since this function gets called on both press *and* release of the `MODE` button, we can use the `duration` to check which it is. Replace the line the the *Empty* comment with the following.

```cpp
if (!duration) {
  // Just pressed.
}
```

4. Now, since we now that the button has been pressed, we should tell the whole mesh network to toggle their LEDs. We use the `Mesh.publish()` for that, which takes one or two striings as arguments. The first argument is a topic and the second is data. We will only use the topic, and we should choose a topic that will make sense for the purpose. Later other devices will be able to subscribe to this topic and will get notified whenever we publish to this topic. Replace the *Just pressed* comment line with this line, to finish the code.

```cpp
Mesh.publish("toggle-led");
```

5. You have now completed the sending part of the code. To see that everything works, first add the following line to the `setup`.
```cpp
Serial.begin(9600);
```

6. Then add a print statement like this inside the if-loop, just under the `mesh.publish` line.

```cpp
Serial.println("Button push published!");
 ```

7. Flash your device with the code, and see that it behaves as expected.

### Receiving messages
We now want to subsribe to any messages on the `toggle-led` topic (or whatever you have decided to call it).

1. First off, we need to define two variables that we will use to control the onboard LED. In the very top of the code, insert the following lines of code.
```cpp
// Define the pin connected to the onboard LED (not the big RGB one, but the smaller one just right of the USB).
int ledPin = D7;

// Set the initial state to ON (true).
bool ledStatus = true;
```

2. Then initialize the LED by making its pin writable and write its inital status. This code is inserted in the `setup` function.
```cpp
pinMode(ledPin, OUTPUT);
digitalWrite(ledPin, ledStatus);  // Update the physical LED
```

3. In the `setup` function, subscribe to the `toggle-led` topic (first argument), and tell the device which function to call (second argument) when another device broadcasts a message to the topic.
```cpp
Mesh.subscribe("toggle-led", toggleLed);
```

4. Write the function that handles incoming messages to the `toggle-led`topic. Insert the function before the `setup` function.

``` cpp
void toggleLed(const char *event, const char *data) {
  // Empty line
}
```

5. Put logic in the function that switches the status of the LED, and then update the physical LED to the new status. The following code replaces the *Empty line* comment line in the `toggleLed`function.

``` cpp
// Toggle the status of the LED.
ledStatus = !ledStatus;

// Update the state of the physical LED by writing the value to the pin
digitalWrite(ledPin, ledStatus);
```

6. To see that everything works add the two print statements like these at the bottom of the `toggleLed` function.

```cpp
Serial.print("LED status toggled. Status: ");
Serial.print(ledStatus);
```

7. Flash the code containg both receiving and sending code to your device. You have now completed the receiving part of the code. Since all devices  Try and push the `MODE` button on one of the devices in the mesh network, then see if the LEDs on the other devices are toggled.

:tada: Congratulations, you are now able to send/receive messages to/from the mesh network. Easy, right?


::: tip Got stuck in the code?
The final code for this lab is [available here](https://go.particle.io/shared_apps/5bf709ee4a72e15412000614).
:::

