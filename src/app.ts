/*
* File: style.css
* Author: Bencsiik Boglár Bianka
* Copyright: 2021, Bencsik Boglár Bianka 
* Group: Szoft V
* Date: 2024-05-30
* Github: https://github.com/BencsikBoglarBianka/Dolgozat_05.30
* Licenc: GNU GPL
*/

class Ell {

    a?: HTMLInputElement | null;
    b?: HTMLInputElement | null;
    c?: HTMLInputElement | null;

    volume?: HTMLInputElement | null;

    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.kezel();
    }

    bindHtml() {
        this.a = document.querySelector("#a");
        this.b = document.querySelector("#b");
        this.c = document.querySelector("#c");
        this.volume = document.querySelector("#volume");
        this.calcButton = document.querySelector("#calcButton");
    }

    kezel() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const a = Number(this.a?.value);
        const b = Number(this.b?.value);
        const c = Number(this.c?.value);
        const volume = this.szamol(a, b, c);

        this.eredmeny(volume);
    }
    szamol(a: number, b: number, c: number): number {
        return 4/3 * Math.PI * a * b * c
    }

    eredmeny(volume: number) {
        if(this.volume) {
            this.volume.value = String(volume);
        }     
    }
}

new Ell();