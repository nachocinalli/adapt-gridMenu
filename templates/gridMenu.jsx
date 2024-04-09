import React from 'react';
import { templates } from 'core/js/reactHelpers';
export default function GridMenu(props) {
  return (
    <>
      <templates.header {...props} classNamePrefixes={['menu', 'gridmenu']} />
      {props._gridMenu?._graphic && (
        <templates.image {...props._gridMenu._graphic} classNamePrefixes={['gridmenu']} attributionClassNamePrefixes={['gridmenu']} />
      )}
      <div className='gridmenu__items-container js-children' role='list'></div>
    </>
  );
}
