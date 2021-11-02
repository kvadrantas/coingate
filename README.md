# CoinGate Junior Frontend Developer evaluation task

You can view live project [here](http://rolandasseputis.lt:2548/).

## Task description

Convert the attached Figma file into a working web page. [(Figma file)](https://www.figma.com/file/qiJAnL7XAVIjhuBD88T26w/Buy%26sell-copy?node-id=0%3A1)

### Explanation:

- [x] Take trader rates and currencies from https://api.coingate.com/v2/rates.
- [x] Use rates to convert amounts and update them in text fields when the user is changing their input.
- [x] Allow user to change currencies using a dropdown (should automatically recalculate amounts), EUR should be preselected as a pay currency and BTC as a buy currency.
- [x] Hardcode an array of payment methods (3 are enough). The first one on the list should be preselected.
- [x] Take icons from wherever you feel is comfortable for you. If the icon is missing you should have a fallback to any icon of your choice. We suggest using libraries or API service, so it would all be in one place and you would save time searching for it (e.g.: https://cryptoicons.org/).
- [x] The "Buy BTC" button should contain the selected buy currency in the label. After clicking it user should be redirected to any other page.
- [x] The "Start now" link should redirect to any other page.
<br /><br /><br /><br />
---

### Requirements:

- [x] Use React JS.
- [x] Browser support: supported by the modern browsers Google Chrome, Safari, Mozilla Firefox).
<br /><br /><br /><br />
---

### Extra points:

- [ ] Use of Typescript.
- [x] Use of Material UI.
- [x] Use of Formik and validating the form values (not allowing to submit if at least one field is empty).
- [x] Use of React hooks.
- [ ] Use of Next.js.
- [x] Implementation of responsive design that is included in the Figma file.
- [x] Implementing navigation bar (can be empty, just fixed to the top and have our logo in it).
