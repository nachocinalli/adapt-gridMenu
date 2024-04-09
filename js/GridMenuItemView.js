import MenuItemView from 'core/js/views/menuItemView';
import router from 'core/js/router';
class GridMenuItemView extends MenuItemView {
  className() {
    return `${super.className()} gridmenu-item`;
  }

  events() {
    return {
      'click .js-item-btn-click': 'onClickMenuItemButton'
    };
  }

  onClickMenuItemButton(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (this.model.get('_isLocked')) return;
    router.navigateToElement(this.model.get('_id'));
  }
}

GridMenuItemView.template = 'gridMenuItem.jsx';
export default GridMenuItemView;
