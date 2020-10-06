import '../sass/index.scss';
import getData from "./modules/get-data";
import Render from "./classes/Render";

document.addEventListener('DOMContentLoaded', () => {
    const app = new Render('app');
    app
        .init()
        .loaderRender()
        .feedbackRender();
    getData()
        .then(result => {
            app
                .loaderRemove()
                .listRender()
                .resultRender(result);
        });
})
