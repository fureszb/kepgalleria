class KisKepView {
    #kep;
    constructor(kep, szuloElem) {
      this.#kep = kep;
      this.szuloElem = szuloElem;
      this.#htmlEgyKep();
      this.kicsikep = $("#kiskep:last-child");
      this.kicsikep.on("click", ()=>{
        console.log(this.kicsikep.attr('src'))
        this.#sajatEsemenyKezelo("KicsiNagy");
      });
      
    }
    #sajatEsemenyKezelo(esemenyNev) {
    
      const esemenyem = new CustomEvent(esemenyNev);
      window.dispatchEvent(esemenyem);


    }
   
    #htmlEgyKep() {
      let txt = "";
      txt += `
          <div class="kiskepek card-body text-center">
          <img id="kiskep"src="${
            this.#kep
          }" class="img-thumbnail" alt="Cinque Terre">
          </div>
        `;
      this.szuloElem.append(txt);
    }
  }
  export default KisKepView;
  