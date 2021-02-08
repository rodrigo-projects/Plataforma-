// #include <Arduino.h>
// // Motor 1
// // ena trava motor ou habilita
// #define enaM1 2
// // dir define direção
// #define dirM1 3
// //passo populso
// #define pulM1 4

// // Motor 2
// // ena trava motor ou habilita
// #define enaM2 5
// // dir define direção
// #define dirM2 6
// //passo populso
// #define pulM2 7

// #define redu 4

// // Variáveis de controle

// /////Serial
// float i = 0;
// float j = 0;
// String k="";


// void setup() {

//   pinMode(enaM1, OUTPUT);
//   digitalWrite(enaM1, LOW);

//   pinMode(dirM1, OUTPUT);
//   digitalWrite(dirM1, LOW);

//   pinMode(pulM1, OUTPUT);
//   digitalWrite(pulM1, LOW);

//   pinMode(enaM2, OUTPUT);
//   digitalWrite(enaM2, LOW);

//   pinMode(dirM2, OUTPUT);
//   digitalWrite(dirM2, HIGH);

//   pinMode(pulM2, OUTPUT);
//   digitalWrite(pulM2, LOW);

//   Serial.begin(9600);
//   Serial.setTimeout(100);

// }

// void loop() {
//   while (!Serial.available()); //verifica se tem dados diponível para leitura
//   // lê o dado recebido:
//   i = Serial.parseFloat();
//   j = Serial.parseFloat();

//   Serial.println(i+j);
//   //Serial.println(j);
//  // k=Serial.read();


//   StepServer2(i, j);

//  /* delay(2000);
//   StepServer2(360, 720);*/

// }

// void  StepServer( float valor1, float valor2 ) {

//   int a = 0;
//   float puls1 = 200 * redu * valor1 / 360;
//   float puls2 = 200 * redu * valor2 / 360;

//   while (puls1 > a) {
//     digitalWrite(pulM1, HIGH);
//     delayMicroseconds(1000);
//     digitalWrite(pulM1, LOW);
//     delayMicroseconds(1000);
//     a = a + 1;
//   }
//   a = 0;
//   while (puls2 > a) {
//     digitalWrite(pulM2, HIGH);
//     delayMicroseconds(1000);
//     digitalWrite(pulM2, LOW);
//     delayMicroseconds(1000);
//     a = a + 1;
//   }
// }


// void  StepServer2( float valor1, float valor2 ) {

//   int a = 0;
//   float puls1 = 200 * redu * valor1 / 360;
//   float puls2 = 200 * redu * valor2 / 360;

//   while (puls1 > 0 && puls2 > 0 ) {

//     digitalWrite(pulM1, HIGH);
//     digitalWrite(pulM2, HIGH);

//     delayMicroseconds(1000);
//     digitalWrite(pulM1, LOW);
//     digitalWrite(pulM2, LOW);

//     delayMicroseconds(1000);
//     puls1 = puls1 - 1;
//     puls2 = puls2 - 1;
//   }
//   while (puls1 > a) {
//     digitalWrite(pulM1, HIGH);
//     delayMicroseconds(1000);
//     digitalWrite(pulM1, LOW);
//     delayMicroseconds(1000);
//     a = a + 1;
//   }
//   a = 0;
//   while (puls2 > a) {
//     digitalWrite(pulM2, HIGH);
//     delayMicroseconds(1000);
//     digitalWrite(pulM2, LOW);
//     delayMicroseconds(1000);
//     a = a + 1;
//   }
// }