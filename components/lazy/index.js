import React from 'react';
import Image from 'components/image';
import WithLazy from './WithLazy';

// Lazy image
const ImageWithRef = React.forwardRef((props, ref) => (
	<Image {...props} forwarded_ref={ref} />
));

const LazyImage = WithLazy(['src'])(ImageWithRef);


export {
	LazyImage
};
