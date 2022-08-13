export const injectParamForHtml = (html, params) => {
  // textの置き換え
  Object.keys(params).forEach((key) => {
    let value = params[key];

    // classとかで使える、配列でclass名一覧とかを渡す機能
    if (Array.isArray(value)) {
      value = value.join(" ");
    }

    html = html.replace(`\$\{${key}\}`, value);
  });

  return html;
};
