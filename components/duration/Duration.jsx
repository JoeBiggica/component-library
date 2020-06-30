import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/omit';
import TextLabel from 'components/textlabel';

function formatTime(time, show_hours) {
	let sec = parseInt(time, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
    	hours = '0' + hours;
    }

    if (minutes < 10) {
    	minutes = '0' + minutes;
    }

    if (seconds < 10) {
    	seconds = '0' + seconds;
    }

    if (show_hours) {
    	return [hours, minutes, seconds].join(':');
    }

    return [minutes, seconds].join(':');
}

function Duration(props) {
	const seconds = props.seconds;
	const show_hours = seconds / 3600 >= 1;
	const formatted_duration = formatTime(seconds, show_hours);

	const text_label_props = omit(props, ['seconds']);

	return (
		<TextLabel
			{...text_label_props}
			text={formatted_duration}
		/>
	);
}

Duration.propTypes = {
	...TextLabel.propTypes,
	seconds: PropTypes.number,
};

Duration.defaultProps = {
	seconds: 0,
};

Duration.Font = TextLabel.Font;

Duration.Color = TextLabel.Color;

export default Duration;
