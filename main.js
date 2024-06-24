/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.*/

//richiamare l'API di Vue CreateApp

const { createApp } = Vue;

//creare un messaggio da stampre in DOM
createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}).mount('#text')