import React from 'react';
import { render } from '@testing-library/react';

import StickyContainer from '../StickyContainer';

describe('<StickyContainer />', () => {
	const intersectionObserver = jest.fn();
	const intersectionDisconnecter = jest.fn();
	const resizeObserver = jest
		.fn()
		.mockReturnValue([{ target: { clientHeight: 500 } }]);
	const resizeObserverDisconnectMethod = jest.fn();

	window.IntersectionObserver = jest.fn(() => ({
		observe: intersectionObserver,
		disconnect: intersectionDisconnecter,
	}));
	window.ResizeObserver = jest.fn(() => ({
		observe: resizeObserver,
		disconnect: resizeObserverDisconnectMethod,
	}));

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render StickContainer correctly', () => {
		const { container } = render(<StickyContainer />);

		expect(container).toMatchSnapshot();
	});

	it('should call observer methods on render StickyContainer', () => {
		render(<StickyContainer />);

		expect(intersectionObserver).toHaveBeenCalled();
		expect(intersectionDisconnecter).toHaveBeenCalled();
	});

	it('should call disconnect methods on unmount StickyContainer', () => {
		const { unmount } = render(<StickyContainer />);

		unmount();

		expect(intersectionObserver).toHaveBeenCalled();
		expect(resizeObserverDisconnectMethod).toHaveBeenCalled();
	});
});
