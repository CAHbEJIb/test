const CONTAINER_CLASS = 'itemSearch';
const ITEM_CLASS = 'item__nonActive';
const ACTIVE_CLASS = 'item__active';

const container = document.querySelector(`.${CONTAINER_CLASS}`);

const changeClass = ({ classList }, action, className) => classList[action](className);

const handleClick = ({ target }) => {
    const isBlock = target.classList.contains(ITEM_CLASS);

    if (isBlock) {
        const elWithActive = document.querySelector(`.${CONTAINER_CLASS} .${ACTIVE_CLASS}`);

        if (elWithActive) {
            changeClass(elWithActive, 'remove', ACTIVE_CLASS);
        }

        changeClass(target, 'add', ACTIVE_CLASS);
    }
}

container.addEventListener('click', handleClick);

