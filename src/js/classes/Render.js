export default class Render {

    constructor(component) {
        this.component = component;
    }

    init() {
        this[this.component]();
        return this;
    }

    app() {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.prepend(root);
        this.app = document.querySelector('#root');
        return this;
    }

    feedbackRender(){
        const iconWrap = document.createElement('div');
        const icon = document.createElement('i');
        icon.className = 'far fa-comment-dots fa-2x';
        iconWrap.className = 'feedback-icon';
        iconWrap.appendChild(icon);
        this.app.appendChild(iconWrap);
        return this;
    }

    loaderRender() {
        const container = document.createElement('div');
        container.className = 'container';
        let num = 1;
        do {
            const circle = document.createElement('div');
            circle.classList.add('circle', 'circle-' + num);
            container.appendChild(circle);
            num++;
            container.appendChild(circle);
        } while (num <= 5)
        this.app.appendChild(container);
        this.loader = this.app.querySelector('.container');
        return this;
    }

    listRender() {
        const wrap = document.createElement('div');
        const wrapTitle = document.createElement('div');
        const divider = document.createElement('hr');
        divider.style.width = '100%';
        wrapTitle.innerHTML = `Изучайте <span style="color: #333bf6">актуальные темы</span>`
        wrap.classList.add('list-wrap');
        wrapTitle.classList.add('list-wrap-title');
        wrap.appendChild(wrapTitle);
        wrap.appendChild(divider);
        this.app.appendChild(wrap);
        this.listWrap = this.app.querySelector('.list-wrap');
        return this
    }

    _listItem(item) {
        const itemWrap = document.createElement('div');
        const itemTitle = document.createElement('div');
        const itemDescription = document.createElement('div');
        const itemBadge = document.createElement('span');
        const divider = document.createElement('hr');
        let coursesNum = item.groups.length, endCoursesString;

        itemWrap.classList.add('list-wrap-item');
        itemTitle.classList.add('list-wrap-item-title');
        itemDescription.classList.add('list-wrap-item-description');
        itemBadge.classList.add('list-wrap-item-badge');
        itemTitle.innerHTML = item.direction.title;
        if (+coursesNum === 1) {
            endCoursesString = 'курс';
        } else if (+coursesNum >= 5) {
            endCoursesString = 'курсов';
        } else if (+coursesNum === 0) {
            coursesNum = 'Нет';
            endCoursesString = 'курсов';
        } else {
            endCoursesString = 'курса';
        }
        itemDescription.innerHTML = `${coursesNum} ${endCoursesString}`;
        itemBadge.style.backgroundColor = item.direction.badge.bgColor;
        divider.style.width = '100%';
        itemWrap.prepend(itemTitle);
        itemWrap.append(itemDescription);
        itemWrap.appendChild(itemBadge);
        itemWrap.appendChild(divider);
        this.listWrap.appendChild(itemWrap);
        return this;
    }

    resultRender(result) {
        if (result.data.length !== 0) result.data.forEach(item => this._listItem(item));
        return this;
    }


    loaderRemove() {
        this.loader.remove();
        return this;
    }
}