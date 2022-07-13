const routesToMenus = (routes) => {
    const menus = (function recursive(e) {
        let temp = [];
        temp = e.map((ite) => {
            const copy = {
                key: ite.name,
                title: ite.meta.title,
            };
            if (ite.meta?.menu) {
                copy.icon = `${ite.meta.menu.icon.type} ${ite.meta.menu.icon.iconfont}`;
            }
            if (ite.meta.menu?.children) {
                copy.children = recursive(ite.meta.menu.children);
            }
            return copy;
        });
        return temp;
    })(routes);
    return menus;
};

export {routesToMenus};