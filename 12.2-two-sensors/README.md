## Serial to P5 

This demo uses an Arduino to read two analog sensor values and sends those values through a node server to the browser. A p5 sketch visualizes the data.

*To run this demo:*

Build a circuit with one analog sensor connected to A0 and another analog sensor connected to A1 on the microcontroller. Upload two-sensors.ino to your board and confirm that you are getting accurate sensor readings using the Serial Monitor in Arduino. Close Arduino.

Install node dependencies - socket.io and serialport

In the server.js file, confirm that you are reading on the correct port.

Run the server.js file locally