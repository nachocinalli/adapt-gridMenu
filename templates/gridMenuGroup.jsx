import React from 'react';
import { templates } from 'core/js/reactHelpers';
export default function GridMenuItem(props) {
  return (
    <>
      <templates.header {...props} classNamePrefixes={['menu', 'gridmenu-group']} />
      <div className='gridmenu-group__items-container js-group-children'></div>
    </>
  );
}
