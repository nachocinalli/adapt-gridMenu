import React from 'react';
import Adapt from 'core/js/adapt';
import { classes, compile, templates } from 'core/js/reactHelpers';
export default function GridMenuItem(props) {
  const globals = Adapt.course.get('_globals');

  const { title, displayTitle, body, duration, linkText, _graphic, _isComplete, _isVisited, _isLocked } = props;

  const durationLabel = duration
    ? globals._menu._gridMenu?.durationLabel
      ? `${globals._menu._gridMenu?.durationLabel.trim()} ${duration}`
      : duration
    : '';

  return (
    <>
      <button
        className={classes(['btn-text', 'gridmenu-item__button', 'js-item-btn-click', _isVisited && 'is-visited', _isLocked && 'is-locked'])}
        role='link'
        aria-label={[
          _isComplete && `${globals._accessibility._ariaLabels.complete}.`,
          _isVisited && `${globals._accessibility._ariaLabels.visited}.`,
          linkText,
          `${title}.`,
          durationLabel
        ]
          .filter(Boolean)
          .join(' ')}
        aria-disabled={_isLocked ? true : undefined}
      >
        <templates.image {..._graphic} classNamePrefixes={['gridmenu-item']} attributionClassNamePrefixes={['gridmenu']} />
        <div className='gridmenu-item__content'>
          {displayTitle && (
            <div className='gridmenu-item__title'>
              <div className='gridmenu-item__title-inner js-heading' data-a11y-heading-type='menuItem'></div>
            </div>
          )}

          {body && <div className='gridmenu-item__body' dangerouslySetInnerHTML={{ __html: compile(body, props) }}></div>}
          {duration && <div className='gridmenu-item__duration' dangerouslySetInnerHTML={{ __html: compile(durationLabel, props) }}></div>}
        </div>
        <span className='menu-item__status gridmenu-item__status'>
          <span className='icon' aria-hidden='true'></span>
        </span>
      </button>
      <div className='js-menu-item-progress'></div>
    </>
  );
}
