import { github } from "@code-surfer/themes";

export default (() => {
  let theme = JSON.stringify({
    ...github,
    ...{
      colors: {
        ...github.colors,
        background: "tansparent",
      },
    },
  });

  theme = theme.replace(
    /backgroundColor":"#f6f8fa/g,
    'backgroundColor":"transparent'
  );

  return JSON.parse(theme);
})();
