import components from 'core/js/components';
import MenuModel from 'core/js/models/menuModel';
import GridMenuView from './GridMenuView';

components.register('course menu', {
  view: GridMenuView
});

components.register('gridMenu', {
  view: GridMenuView,
  model: MenuModel.extend({})
});
