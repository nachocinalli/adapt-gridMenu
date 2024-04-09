# adapt-gridMenu
**gridMenu** is a menu for the Adapt Framework based on the boxmenu.
You can see it [here](https://adaptlearning-no-core.web.app/menugrid/)
## Theme less/css
```
@max-menu-width: 75rem;
@cubic-bezier: cubic-bezier(0.006, 0.831, 0.24, 0.977);
.gridmenu {
  .l-container-responsive(@max-menu-width);
  padding: 0.5rem;
  .gridmenu__header-inner {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
  }
  .gridmenu__title {
    .menu-title;
    font-weight: 900;
  }
  .gridmenu__instruction {
    .menu-instruction;
    font-weight: 300;
    color: @blue;
  }
  .gridmenu__body {
    display: none;
  }
  .gridmenu__items-container.js-children {
    flex-direction: column;
    display: flex;

    @media (min-width: @device-width-medium) {
      display: grid;
      grid-column-gap: 1.5rem;
      grid-template-rows: auto auto;
      grid-auto-columns: 1fr;
      grid-row-gap: 1.5rem;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: @device-width-large) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

.gridmenu-item__button.btn-text {
  border-radius: 1rem;
  color: @white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .no-touch &:not(.is-disabled):not(.is-locked):hover {
    color: @white;
    .gridmenu-item__image-container .gridmenu-item__image {
      filter: brightness(110%) saturate(120%) hue-rotate(5deg);
      transform: translateY(-8px) scale(1.1) perspective(750px) rotate(2deg);
    }
    .gridmenu-item__title {
      transform: translateY(-8px);
    }
  }
}
.gridmenu-item {
  width: 100%;
  min-height: 17.5rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
  &.co-01 {
    grid-area: span 2 / span 2 / span 2 / span 2;
  }
  @media screen and (max-width: @device-width-medium) {
    aspect-ratio: 1/1;
  }
  @media screen and (max-width: @device-width-small) {
    min-height: 15rem;
    aspect-ratio: 3/2;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.gridmenu-item__image-container {
  width: 100%;
  height: 100%;
  pointer-events: auto;
  object-fit: cover;
  transition: all 1s @cubic-bezier;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  img {
    width: 100%;
    height: 100%;
    pointer-events: auto;
    filter: brightness(0.5);
    object-fit: cover;
    transition: all 1s @cubic-bezier;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
}
.gridmenu-item__content {
  z-index: 1;
  pointer-events: none;
  position: relative;
}
.gridmenu-item__title {
  .menu-item-title;
  text-align: left;
  pointer-events: none;
  transition: all 1s @cubic-bezier;
}
.gridmenu-item__body {
  display: none;
}
```