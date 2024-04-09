import MenuItemView from 'core/js/views/menuItemView';
import GridMenuItemView from './GridMenuItemView';
class GridMenuGroupView extends MenuItemView {
  className() {
    return `${super.className()} gridmenu-group`;
  }
  postRender() {
    _.defer(this.addChildren.bind(this));
    this.$el.imageready(this.setReadyStatus.bind(this));
    this.$el.parents('.gridmenu__items-container').addClass('has-groups');
    this.updateItemCount();
  }

  updateItemCount() {
    const models = this.model.getChildren().where({
      _isHidden: false
    });
    const totalChildren = models.length;
    models.forEach((model) => model.set('_totalChild', totalChildren));
  }
}

GridMenuGroupView.childContainer = '.js-group-children';
GridMenuGroupView.childView = GridMenuItemView;
GridMenuGroupView.template = 'gridMenuGroup.jsx';
export default GridMenuGroupView;
