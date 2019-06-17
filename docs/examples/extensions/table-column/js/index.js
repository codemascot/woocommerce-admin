/** @format */
/**
 * External dependencies
 */

import { addFilter } from '@wordpress/hooks';
import { Rating } from '@woocommerce/components';

// Add the column headers.
addFilter( 'woocommerce_admin_products_table_column_header', 'plugin-domain', headers => {
	return [
		...headers,
		{
			label: 'ID',
			key: 'product_id',
		},
		{
			label: 'Rating',
			key: 'product_rating',
		},
	];
} );

 // Add values for the new columns to the row data.
addFilter( 'woocommerce_admin_products_table_row_content', 'plugin-domain', ( rowData, productData ) => {
	return [
		...rowData,
		// product_id is already returned in the response for productData.
		{
			display: productData.product_id,
			value: productData.product_id,
		},
		// average_rating can be found on extended_info on productData.
		{
			display: <Rating rating={ Number( productData.extended_info.average_rating ) } totalStars={ 5 } />,
			value: productData.extended_info.average_rating,
		},
	];
} );
