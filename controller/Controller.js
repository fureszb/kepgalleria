import Model from "../model/Model.js";
import KisKepView from "../view/KisKepView.js";
import NagyKep from "../view/NagyKepView.js";
class Controller {
  constructor() {
    const MODEL = new Model();
    const nagykepVIEW = new NagyKep(MODEL.getAktkep().eleres, $(".nagykep"));

    nagykepVIEW.feliratCsere(MODEL.getAktkep().leiras);
    nagykepVIEW.cimCsere(MODEL.getAktkep().cim);

    for (let index = 0; index < MODEL.getList().length; index++) {
      new KisKepView(MODEL.getKisKepek(index), $(".kiskep"), index);
    }

    $(window).on("KicsiNagyCsere", (event) => {
      /*console.log(event.detail)
      console.log(MODEL.getAktkep())
      console.log(MODEL.getList()[event.detail.index])

      MODEL.getAktkep().eleres = MODEL.getList()[event.detail.index].eleres;
      nagykepVIEW.nagyKepCsere(MODEL.getAktkep().eleres);
      nagykepVIEW.feliratCsere(MODEL.getList()[event.detail.index].leiras);*/

      nagykepVIEW.nagyKepCsere(MODEL.getList()[event.detail.index].eleres);
      nagykepVIEW.feliratCsere(MODEL.getList()[event.detail.index].leiras);
      nagykepVIEW.cimCsere(MODEL.getList()[event.detail.index].cim);
    });

    $(window).on("jobb", () => {
      MODEL.jobb();
      nagykepVIEW.nagyKepCsere(MODEL.getAktkep().eleres);
      nagykepVIEW.feliratCsere(MODEL.getAktkep().leiras);
      nagykepVIEW.cimCsere(MODEL.getAktkep().cim);
    });

    $(window).on("bal", () => {
      MODEL.bal();
      nagykepVIEW.nagyKepCsere(MODEL.getAktkep().eleres);
      nagykepVIEW.feliratCsere(MODEL.getAktkep().leiras);
      nagykepVIEW.cimCsere(MODEL.getAktkep().cim);
    });
  }
}
export default Controller;
