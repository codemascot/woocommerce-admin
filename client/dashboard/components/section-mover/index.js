/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './style.scss';
import { IconButton } from '@wordpress/components';

const SectionMover = () => {
	return (
		<div className="woocommerce-section-mover">
			<IconButton
				className="editor-block-mover__control block-editor-block-mover__control"
				icon={ 'arrow-up-alt2' }
				label={ __( 'Move up' ) }
			/>
			<IconButton
				className="editor-block-mover__control block-editor-block-mover__control"
				icon={ 'arrow-down-alt2' }
				label={ __( 'Move down' ) }
			/>
		</div>
	);
};

export default SectionMover;