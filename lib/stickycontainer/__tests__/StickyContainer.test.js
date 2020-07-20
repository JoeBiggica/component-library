import React from 'react';
import { render } from '@testing-library/react';
import StickyContainer from "../StickyContainer";
describe('<StickyContainer />', function () {
  var intersectionObserver = jest.fn();
  var intersectionDisconnecter = jest.fn();
  var resizeObserver = jest.fn().mockReturnValue([{
    target: {
      clientHeight: 500
    }
  }]);
  var resizeObserverDisconnectMethod = jest.fn();
  window.IntersectionObserver = jest.fn(function () {
    return {
      observe: intersectionObserver,
      disconnect: intersectionDisconnecter
    };
  });
  window.ResizeObserver = jest.fn(function () {
    return {
      observe: resizeObserver,
      disconnect: resizeObserverDisconnectMethod
    };
  });
  afterEach(function () {
    jest.clearAllMocks();
  });
  it('should render StickContainer correctly', function () {
    var _render = render( /*#__PURE__*/React.createElement(StickyContainer, null)),
        container = _render.container;

    expect(container).toMatchSnapshot();
  });
  it('should call observer methods on render StickyContainer', function () {
    render( /*#__PURE__*/React.createElement(StickyContainer, null));
    expect(intersectionObserver).toHaveBeenCalled();
    expect(intersectionDisconnecter).toHaveBeenCalled();
  });
  it('should call disconnect methods on unmount StickyContainer', function () {
    var _render2 = render( /*#__PURE__*/React.createElement(StickyContainer, null)),
        unmount = _render2.unmount;

    unmount();
    expect(intersectionObserver).toHaveBeenCalled();
    expect(resizeObserverDisconnectMethod).toHaveBeenCalled();
  });
});
//# sourceMappingURL=StickyContainer.test.js.map