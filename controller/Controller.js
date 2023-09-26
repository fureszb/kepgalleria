import Model from "../model/Model.js";
import KisKepView from "../view/KisKepView.js";
import NagyKep from "../view/NagyKepView.js";
class Controller {
  constructor() {
    const MODEL = new Model();
    const nagykepVIEW = new NagyKep(MODEL.getAktkep(), $(".nagykep"));

    for (let index = 0; index < MODEL.getList().length; index++) {
        new KisKepView(MODEL.getKisKepek(index), $(".kiskep"));
    }

    $(window).on("KicsiNagy", (event) => {
     // console.log(event.detail)
      nagykepVIEW.nagyKepCsere(MODEL.getKisKepek(event.detail));
    });
    $(window).on("jobb", () => {
      MODEL.jobb();
      nagykepVIEW.nagyKepCsere(MODEL.getAktkep());
    });

    $(window).on("bal", () => {
      MODEL.bal();
      nagykepVIEW.nagyKepCsere(MODEL.getAktkep());
    });
  }
}
export default Controller;
