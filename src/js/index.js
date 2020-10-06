import '../sass/index.scss';
import getData from "./modules/get-data";
import Render from "./classes/Render";

document.addEventListener('DOMContentLoaded', () => {
    const app = new Render('app');
    app.init();
    app.loaderRender();
    app.feedbackRender();
    getData()
        .then(result => {
            app.loaderRemove();
            app.listRender();
            app.resultRender(result);
        });
})
