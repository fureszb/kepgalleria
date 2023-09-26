class KisKepView {
  #kep;
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.#htmlEgyKep();

    this.kicsikep = $(".Pimg:last-child");
    this.kicsikep.on("click", () => {
      this.eleres = this.kicsikep.children('img').attr('src');
      this.#sajatEsemenyKezelo("KicsiNagy")
  
    });

  }
  #sajatEsemenyKezelo(esemenyNev) {

    const esemenyem = new CustomEvent(esemenyNev, {detail:this.eleres});
    window.dispatchEvent(esemenyem);


  }
  #htmlEgyKep() {
    let txt = "";
    txt += `
          <div class="Pimg card-body text-center">
          <img src="${this.#kep
      }" class="img-thumbnail" alt="Cinque Terre">
          </div>
        `;
    this.szuloElem.append(txt);
  }
}
export default KisKepView;
