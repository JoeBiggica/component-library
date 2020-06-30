import React from 'react';
import { render } from '@testing-library/react';

import Image from '../Image';

const commonProps = {
	is_amp: false,
	src: 'source_path',
	alt: 'alt',
	fill_mode: 'fit',
	placeholder: 'logo-light',
};

describe('<Image />', () => {
	it('should render Image component correctly', () => {
		const { container } = render(<Image {...commonProps} />);

		expect(container).toMatchSnapshot();
	});
	it('should render Image component with amp tag', () => {
		const { container } = render(<Image {...commonProps} is_amp />);

		expect(container).toMatchSnapshot();
	});

	it('should render Image component with aspect_ratio', () => {
		const { container } = render(
			<Image {...commonProps} aspect_ratio={380 / 249} />
		);

		expect(container).toMatchSnapshot();
	});
});
