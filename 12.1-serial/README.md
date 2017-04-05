## Serial to P5 

This demo uses an Arduino with a potentiometer to control a p5 sketch. It reads a single analog sensor value and visualizes it in the browser. 

*To run this demo:*

Build a circuit with a potentiometer connected to A0 on the microcontroller. Upload analogRead.ino to your board and confirm that you are getting accurate sensor readings using the Serial Monitor in Arduino. Close Arduino.

Install node dependencies - socket.io and serialport

Run the server.js file locally