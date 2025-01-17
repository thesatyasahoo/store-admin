if (!self.define) {
  let s,
    e = {};
  const l = (l, i) => (
    (l = new URL(l + ".js", i).href),
    e[l] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          (s.src = l), (s.onload = e), document.head.appendChild(s);
        } else (s = l), importScripts(l), e();
      }).then(() => {
        let s = e[l];
        if (!s) throw new Error(`Module ${l} didn’t register its module`);
        return s;
      })
  );
  self.define = (i, r) => {
    const n =
      s ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (e[n]) return;
    let u = {};
    const o = (s) => l(s, n),
      t = { module: { uri: n }, exports: u, require: o };
    e[n] = Promise.all(i.map((s) => t[s] || o(s))).then((s) => (r(...s), u));
  };
}
define(["./workbox-fa446783"], function (s) {
  "use strict";
  self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: "@/assets/404-DLuagjTq.js", revision: null },
        { url: "@/assets/404-DUm08_0T.svg", revision: null },
        { url: "@/assets/AdminServices-BU4h-lhV.js", revision: null },
        { url: "@/assets/AnimatedContent-Dc8cOff9.js", revision: null },
        { url: "@/assets/Attributes-Dfg7RbrD.js", revision: null },
        { url: "@/assets/browser-BVlrnu6m.js", revision: null },
        { url: "@/assets/BulkActionDrawer-BNx-sAUD.js", revision: null },
        { url: "@/assets/Category-V7Y1FM05.js", revision: null },
        { url: "@/assets/CategoryTable-BKVQwlOA.js", revision: null },
        { url: "@/assets/ChildAttributes-DmXlEnkn.js", revision: null },
        { url: "@/assets/ChildCategory-BhmaDm_5.js", revision: null },
        { url: "@/assets/ComingSoon-yAUzw1ai.js", revision: null },
        { url: "@/assets/Coupons-5J33Jbri.js", revision: null },
        { url: "@/assets/Currencies-DemTZxRX.js", revision: null },
        { url: "@/assets/CurrencyServices-BDmFbRo0.js", revision: null },
        { url: "@/assets/CustomerOrder-hpJFcUzm.js", revision: null },
        { url: "@/assets/Customers-DGOUYyia.js", revision: null },
        { url: "@/assets/Dashboard-HNHiuIjl.js", revision: null },
        { url: "@/assets/DrawerButton-DLbzv2UI.js", revision: null },
        { url: "@/assets/EditDeleteButton-Bkcu-SmC.js", revision: null },
        { url: "@/assets/EditProfile-NGU_VyN1.js", revision: null },
        { url: "@/assets/exportFromJSON-fDIoOtpr.js", revision: null },
        {
          url: "@/assets/forgot-password-office-dark-CQOqfqw9.js",
          revision: null,
        },
        { url: "@/assets/ForgotPassword-DBQixDDE.js", revision: null },
        { url: "@/assets/httpService-uWXOLvWw.js", revision: null },
        { url: "@/assets/iconBase-DQ0qnhW7.js", revision: null },
        { url: "@/assets/index-B0Vm_WAs.js", revision: null },
        { url: "@/assets/index-BUQt_S_c.js", revision: null },
        { url: "@/assets/index-CLw-hnEc.js", revision: null },
        { url: "@/assets/index-DFn5PJ-I.js", revision: null },
        { url: "@/assets/index-DGmkQahL.js", revision: null },
        { url: "@/assets/index.esm-CI3piNMx.js", revision: null },
        { url: "@/assets/index.esm-OMRnTKYx.js", revision: null },
        { url: "@/assets/index.prod-BEjSpvbU.js", revision: null },
        { url: "@/assets/InputArea-D1sXnVGR.js", revision: null },
        { url: "@/assets/InputAreaTwo-D_asbZzU.js", revision: null },
        { url: "@/assets/InputValue-CNpxr4IH.js", revision: null },
        { url: "@/assets/LabelArea-CcrHcR7F.js", revision: null },
        { url: "@/assets/Languages-MgSlpXBQ.js", revision: null },
        { url: "@/assets/Layout-BiELlH3O.js", revision: null },
        { url: "@/assets/Loading-zyTonIkZ.js", revision: null },
        { url: "@/assets/Login-CFtEEvRU.js", revision: null },
        { url: "@/assets/logo-dark-DQAnbrT0.png", revision: null },
        { url: "@/assets/no-result-P2YfVoix.svg", revision: null },
        { url: "@/assets/NotFound-PWSgWEY9.js", revision: null },
        { url: "@/assets/Notifications-DYZUmeji.js", revision: null },
        { url: "@/assets/OrderInvoice-CJyxdP7E.js", revision: null },
        { url: "@/assets/Orders-Gkc0Kp9N.js", revision: null },
        { url: "@/assets/OrderServices-CCgceMGo.js", revision: null },
        { url: "@/assets/OrderTable-CqMITXS_.js", revision: null },
        { url: "@/assets/PageTitle-DUz67W-r.js", revision: null },
        { url: "@/assets/ParentCategory-BeUclyOp.js", revision: null },
        { url: "@/assets/ProductDetails-CgxyhcTF.js", revision: null },
        { url: "@/assets/ProductDrawer-DR89f-q8.js", revision: null },
        { url: "@/assets/Products-29uG-c__.js", revision: null },
        { url: "@/assets/ProductServices-CdtPkdki.js", revision: null },
        { url: "@/assets/progress-Dm-zmprq.svg", revision: null },
        { url: "@/assets/ResetPassword-BKfVdW2Y.js", revision: null },
        { url: "@/assets/SelectLanguageTwo-D8KQQ7nM.js", revision: null },
        { url: "@/assets/SelectRole-CGpGycnY.js", revision: null },
        { url: "@/assets/SelectStatus-DZLfh49c.js", revision: null },
        { url: "@/assets/Setting-BCi52YtV.js", revision: null },
        { url: "@/assets/SignUp-bma5ZT1U.js", revision: null },
        { url: "@/assets/spinner-CkndCogW.js", revision: null },
        { url: "@/assets/Staff-D2y9GfCp.js", revision: null },
        { url: "@/assets/Status-CDuz2kK9.js", revision: null },
        { url: "@/assets/StoreHome-Bds2aauB.js", revision: null },
        { url: "@/assets/StoreSetting-BDd921Ua.js", revision: null },
        { url: "@/assets/SwitchToggle-BRpQr13G.js", revision: null },
        { url: "@/assets/TableLoading-CzWv2pmu.js", revision: null },
        { url: "@/assets/toast-B24hAPOx.js", revision: null },
        { url: "@/assets/Tooltip-B89Rfivm.js", revision: null },
        { url: "@/assets/tslib.es6-BgFQhbLt.js", revision: null },
        { url: "@/assets/Uploader-DNZNmAOZ.js", revision: null },
        { url: "@/assets/UploadMany-NCGv_v8V.js", revision: null },
        { url: "@/assets/us-B6R3X7cJ.svg", revision: null },
        { url: "@/assets/useAsync-uOlh5qiN.js", revision: null },
        { url: "@/assets/useAttributeSubmit-Dryx7HC6.js", revision: null },
        { url: "@/assets/useDispatch-CJ_6CYmp.js", revision: null },
        { url: "@/assets/useFilter-Bom67vs-.js", revision: null },
        { url: "@/assets/useLoginSubmit-DiO1iuih.js", revision: null },
        { url: "@/assets/useStaffSubmit-GDMYKlyQ.js", revision: null },
        { url: "@/assets/vendor-BzEnyBH3.js", revision: null },
        { url: "@/assets/workbox-window.prod.es5-B_6ZJHoI.js", revision: null },
        {
          url: "dashtar-admin.png",
          revision: "bb31262c53ca8c0bda2595391cf117a2",
        },
        { url: "favicon.ico", revision: "c92b85a5b907c70211f4ec25e29a8c4a" },
        { url: "favicon.png", revision: "0033e08ea1185a9ef4ddea787f470df5" },
        {
          url: "icon-192x192.png",
          revision: "47e2812c3e78f1903ccd46f0545f5d48",
        },
        {
          url: "icon-256x256.png",
          revision: "5cfadd2f4679b3d86f1d994297809226",
        },
        {
          url: "icon-384x384.png",
          revision: "e793bffd9497800be7d461caa873b96b",
        },
        {
          url: "icon-512x512.png",
          revision: "b9df59369ad910b5d3e338e9076fd944",
        },
        { url: "index.html", revision: "2e59225b0fc81f6e69cb08c66953c9e5" },
        { url: "logo-dark.png", revision: "6d56d5e9299f4a31803292ce79f4ff6b" },
        { url: "logo-light.svg", revision: "46c5c929a9c91b74433bd947534fd2a8" },
        { url: "logo192.png", revision: "33dbdd0177549353eeeb785d02c294af" },
        { url: "logo512.png", revision: "917515db74ea8d1aee6a246cfbcc0b45" },
        { url: "offline.html", revision: "ee62f74acb570969fe35b0a51242fffc" },
        { url: "favicon.ico", revision: "c92b85a5b907c70211f4ec25e29a8c4a" },
        {
          url: "icon-192x192.png",
          revision: "47e2812c3e78f1903ccd46f0545f5d48",
        },
        {
          url: "icon-256x256.png",
          revision: "5cfadd2f4679b3d86f1d994297809226",
        },
        {
          url: "icon-384x384.png",
          revision: "e793bffd9497800be7d461caa873b96b",
        },
        {
          url: "icon-512x512.png",
          revision: "b9df59369ad910b5d3e338e9076fd944",
        },
        {
          url: "manifest.webmanifest",
          revision: "3e24b71b4e93686beaa2eaa40d1940f7",
        },
      ],
      {}
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))
    );
});
