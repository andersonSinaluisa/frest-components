/** @type { import('@storybook/react').Preview } */


import '../public/assets/vendor/fonts/boxicons.css';
import '../public/assets/vendor/fonts/fontawesome.css';
import '../public/assets/vendor/fonts/flag-icons.css';
import '../public/assets/vendor/css/rtl/core.css';
import '../public/assets/vendor/css/rtl/theme-default.css';
import '../public/assets/css/demo.css';
import '../public/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '../public/assets/vendor/libs/typeahead-js/typeahead.css';


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
