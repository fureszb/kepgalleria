import Model from "../model/Model.js";
import NagyKep from "../view/nagyKep.js";
class Controller {
  constructor() {
    const MODEL = new Model();
    const nagykepVIEW = new NagyKep(MODEL.getAktkep(), $(".nagykep"));
   
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
