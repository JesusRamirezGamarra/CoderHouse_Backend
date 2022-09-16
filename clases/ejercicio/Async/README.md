# https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise#constructor

Descripción
Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa. Le permite asociar controladores con el valor eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite que los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve la promesa de proporcionar el valor en algún momento en el futuro.

Un Promise está en uno de estos estados:

pending (pendiente): estado inicial, ni cumplido ni rechazado.
fulfilled (cumplida): lo que significa que la operación se completó con éxito.
rejected (rechazada): lo que significa que la operación falló.