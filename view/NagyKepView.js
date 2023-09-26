class NagyKep {
  #kep;
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.#htmlOsszerak();
    this.jobbGomb = $("#jobb");
    this.balGomb = $("#bal");
    this.negyKepHely = $("#nagyKepHelye");

    this.jobbGomb.on("click", () => {
      this.#sajatEsemenyKezelo("jobb");
    });
    this.balGomb.on("click", () => {
      this.#sajatEsemenyKezelo("bal");
    });
  }
  #sajatEsemenyKezelo(esemenyNev) {
    console.log(esemenyNev);
    const esemenyem = new CustomEvent(esemenyNev);
    window.dispatchEvent(esemenyem);
  }
  nagyKepCsere(kep) {
    this.negyKepHely.attr("src", kep);
  }
  #htmlOsszerak() {
    let txt = "";
    txt += `<div class="card">
        <div class="card-header">Főkép</div>
        <div class="card-body text-center">
        <button type="button" class="btn btn-primary" id="bal">Bal</button>
        <img id="nagyKepHelye"src="${
          this.#kep
        }" class="img-thumbnail" alt="Cinque Terre">
        <button type="button" class="btn btn-primary" id="jobb">Jobb</button>
        </div>
        <div class="card-footer">Leírás</div>
      </div>`;
    this.szuloElem.html(txt);
  }
}
export default NagyKep;
