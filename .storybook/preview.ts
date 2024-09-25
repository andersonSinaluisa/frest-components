/** @type { import('@storybook/react').Preview } */
/*<link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet" />*/

/*  <link rel="stylesheet" href="../../assets/vendor/fonts/boxicons.css" />
    <link rel="stylesheet" href="../../assets/vendor/fonts/fontawesome.css" />
    <link rel="stylesheet" href="../../assets/vendor/fonts/flag-icons.css" />

    <!-- Core CSS -->
    <link rel="stylesheet" href="../../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
    <link rel="stylesheet" href="../../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />
    <link rel="stylesheet" href="../../assets/css/demo.css" />

    <!-- Vendors CSS -->
    <link rel="stylesheet" href="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
    <link rel="stylesheet" href="../../assets/vendor/libs/typeahead-js/typeahead.css" />*/


import '../public/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '../public/assets/vendor/libs/typeahead-js/typeahead.css';
import '../public/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css';
import '../public/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css';
import '../public/assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css';
import '../public/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.css';
import '../public/assets/vendor/fonts/boxicons.css';
import '../public/assets/vendor/fonts/fontawesome.css';
import '../public/assets/vendor/fonts/flag-icons.css';
import '../public/assets/vendor/css/rtl/core.css';
import '../public/assets/vendor/css/rtl/theme-default.css';
import '../public/assets/css/demo.css';
//https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap

const preview = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
