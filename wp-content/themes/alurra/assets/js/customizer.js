/**
 * File customizer.js.
 * Theme Customizer enhancements for a better user experience.
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	
$head = $('head');
	
	"use strict";

	let root = document.documentElement;
	
		
	// functions for our customer show or hide settings
	function hideElement( element ) {
		$( element ).css({
			clip: 'rect(1px, 1px, 1px, 1px)',
			position: 'absolute',
			width: '1px',
			height: '1px',
			overflow: 'hidden'
		});
	}

	function showElement( element ) {
		$( element ).css({
			clip: 'auto',
			position: 'relative',
			width: 'auto',
			height: 'auto',
			overflow: 'visible'
		});
	}
	
	// To show absolute positioned elements
	function showAbElement( element ) {
		$( element ).css({
			clip: 'auto',
			position: 'absolute',
			width: 'auto',
			height: 'auto',
			overflow: 'visible'
		});
	}
	

/* FONT PREVIEWS
 ======================= */

	// Site title font
	wp.customize( 'site_title_font', function( value ) {
		value.bind( function( to ) {
			var style = $('#site-title-font-css');
			style.remove();
			style = $( '<style type="text/css" id="site-title-font-css"> #site-title { --rp-font-secondary:' + to + ' } </style>' ).appendTo( $head );
		} );
	} );

	// Site title size
	wp.customize( 'site_title_font_size', function( value ) {
		value.bind( function( to ) {
			var style = $('#site-title-size-css');
			style.remove();
			style = $( '<style type="text/css" id="site-title-size-css"> #site-title { font-size: calc(1rem + ' + to + 'vw) } </style>' ).appendTo( $head );
		} );
	} );

/* TEXT PREVIEWS
 ======================= */
 	// Site title.	
	wp.customize( 'blogname', function( value ) {
	  value.bind( function( newval ) {
		$( '#site-title' ).html( newval );
	  } );
	} );
	
	// Site description.	
	wp.customize( 'blogdescription', function( value ) {
	  value.bind( function( newval ) {
		$( '#site-description' ).html( newval );
	  } );
	} );
		
	// Copyright
	wp.customize( 'alurra_copyright', function( value ) {
	  value.bind( function( newval ) {
		$( '#copyright-name' ).html( newval );
	  } );
	} );

/* SHOW or HIDE
======================= */
	
	// Hide site title
	wp.customize( 'alurra_show_site_title', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				hideElement( '#site-title' );
			} else {
				showElement( '#site-title' );
			}
		} );
	} );
	
	// Hide site tagline
	wp.customize( 'alurra_show_site_desc', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				hideElement( '#site-description' );
			} else {
				showElement( '#site-description' );
			}
		} );
	} );	

	// Hide header search icon
	wp.customize( 'alurra_hide_header_search', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				showAbElement( '#search-toggle' );
			} else {
				hideElement( '#search-toggle' );
			}
		} );
	} );
	
	// Hide edit link
	wp.customize( 'alurra_hide_edit', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				showElement( '.edit-link' );
			} else {
				hideElement( '.edit-link' );
			}
		} );
	} );
	
	// Hide archiver prefix
	wp.customize( 'alurra_hide_prefix_archive', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				showElement( '.archive-prefix' );
			} else {
				hideElement( '.archive-prefix' );
			}
		} );
	} );	
	
	// Hide post footer
	wp.customize( 'alurra_hide_post_footer', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				showElement( '.single .entry-footer' );
			} else {
				hideElement( '.single .entry-footer' );
			}
		} );
	} );		
	
	// Hide author bio
	wp.customize( 'alurra_hide_author_bio', function( value ) {
		value.bind( function( newval ) {
			if ( false === newval ) {
				showElement( '.author-info' );
			} else {
				hideElement( '.author-info' );
			}
		} );
	} );	
	
/* COLOURS
======================= */

	// Site title colour
	wp.customize( 'alurra_header_title_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-header-title-colour', to );
		} );
	} );
	
	// Site description (tagline) colour
	wp.customize( 'alurra_header_tagline_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-header-tagline-colour', to );
		} );
	} );	
	
	// Body bg
	wp.customize( 'alurra_body_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-body-bg-colour', to );
		} );
	} );	

	// Top social bg
	wp.customize( 'alurra_top_social_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-top-social-row-bg-colour', to );
		} );
	} );

	// Header bg
	wp.customize( 'alurra_page_excerpt_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-page-excerpt-colour', to );
		} );
	} );
 
	// Header bg
	wp.customize( 'alurra_header_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-header-bg-colour', to );
		} );
	} );

	// Bottom sidebar bg
	wp.customize( 'alurra_bottom_sidebar_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-bottom-sidebar-bg-colour', to );
		} );
	} );
	
	// Footer bg
	wp.customize( 'alurra_footer_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-footer-bg-colour', to );
		} );
	} );
	
	
	// Primary nav bg
	wp.customize( 'alurra_primary_nav_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-primary-nav-bg-colour', to );
		} );
	} );	
	
	// Primary nav link
	wp.customize( 'alurra_primary_nav_link_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-primary-nav-link-colour', to );
		} );
	} );		
	
	// Primary nav hover link
	wp.customize( 'alurra_primary_nav_link_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-primary-nav-link-hover-colour', to );
		} );
	} );	
	
	// Primary submenu bg
	wp.customize( 'alurra_primary_submenu_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-primary-submenu-bg-colour', to );
		} );
	} );	
	
	// Primary submenu links
	wp.customize( 'alurra_primary_submenu_link_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-primary-submenu-link-colour', to );
		} );
	} );		
	
	// Primary submenu hover links
	wp.customize( 'alurra_primary_submenu_link_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-primary-submenu-link-hover-colour', to );
		} );
	} );		
	
	// Mobile menu lines
	wp.customize( 'alurra_mobile_nav_lines_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-mobile-nav-lines-colour', to );
		} );
	} );		
	
	// Post nav bg
	wp.customize( 'alurra_post_nav_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-post-nav-bg-colour', to );
		} );
	} );		
	
	// Post nav link line
	wp.customize( 'alurra_post_nav_line_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-post-nav-link-line-colour', to );
		} );
	} );		
	
	// Post nav link
	wp.customize( 'alurra_post_nav_link_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-post-nav-link-colour', to );
		} );
	} );		
	
	// Top social border
	wp.customize( 'alurra_top_social_border_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-top-social-border-colour', to );
		} );
	} );		
	
	// Top social icon
	wp.customize( 'alurra_top_social_icon_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-top-social-icon-colour', to );
		} );
	} );		
	
	// Footer social bg
	wp.customize( 'alurra_footer_social_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-footer-social-bg-colour', to );
		} );
	} );	

	// Footer social icon
	wp.customize( 'alurra_footer_social_icon_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-footer-social-icon-colour', to );
		} );
	} );	

	// Footer social hover bg
	wp.customize( 'alurra_footer_social_bg_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-footer-social-bg-hover-colour', to );
		} );
	} );

	// Footer social hover icon
	wp.customize( 'alurra_footer_social_icon_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-footer-social-icon-hover-colour', to );
		} );
	} );

	// Button bg
	wp.customize( 'alurra_button_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-button-bg-colour', to );
		} );
	} );

	// Button text
	wp.customize( 'alurra_button_text_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-button-text-colour', to );
		} );
	} );

	// Button hover bg
	wp.customize( 'alurra_button_bg_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-button-hover-bg-colour', to );
		} );
	} );

	// Button hover text
	wp.customize( 'alurra_button_text_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-button-text-hover-colour', to );
		} );
	} );

	// Form placeholder text
	wp.customize( 'alurra_form_placeholder_text_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-form-placeholder-text-colour', to );
		} );
	} );

	// Image placeholder bg
	wp.customize( 'alurra_image_placeholder_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-image-placeholder-bg-colour', to );
		} );
	} );

	// Image placeholder icon
	wp.customize( 'alurra_image_placeholder_icon_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-image-placeholder-icon-colour', to );
		} );
	} );

	// Primary text colour
	wp.customize( 'alurra_primary_text_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-primary-text-colour', to );
		} );
	} );
	
	// Secondary text colour
	wp.customize( 'alurra_secondary_text_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-secondary-text-colour', to );
		} );
	} );

	// Secondary text hover colour
	wp.customize( 'alurra_secondary_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-secondary-hover-colour', to );
		} );
	} );

	// Footer text colour
	wp.customize( 'alurra_footer_text_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-footer-text-colour', to );
		} );
	} );

	// Content line colour
	wp.customize( 'alurra_content_line_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-content-line-colour', to );
		} );
	} );

	// Heading and titles
	wp.customize( 'alurra_heading_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-heading-colour', to );
		} );
	} );

	// Link colour
	wp.customize( 'alurra_link_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-link-colour', to );
		} );
	} );

	// Link hover colour
	wp.customize( 'alurra_link_hover_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-link-hover-colour', to );
		} );
	} );

	// Select text bg
	wp.customize( 'alurra_select_text_bg_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-select-text-bg-colour', to );
		} );
	} );

	// Select text
	wp.customize( 'alurra_select_text_colour', function( value ) {
		value.bind( function( to ) {
			root.style.setProperty('--rp-select-text-colour', to );
		} );
	} );


	
} )( jQuery );
