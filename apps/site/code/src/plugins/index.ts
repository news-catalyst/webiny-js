import pageBuilderPlugins from "@webiny/app-page-builder/site/plugins";
import pageBuilderUseSsrCacheTagsPlugins from "@webiny/app-page-builder/site/plugins/useSsrCacheTags";
import { fileUploadPlugin, imagePlugin } from "@webiny/app/plugins";
import cookiePolicyPlugins from "@webiny/app-cookie-policy/render";
import typeformPlugins from "@webiny/app-typeform/render";
import mailchimpPlugins from "@webiny/app-mailchimp/render";
import gtmPlugins from "@webiny/app-google-tag-manager/render";
import i18nPlugins from "@webiny/app-i18n/site/plugins";
import formsSitePlugins from "@webiny/app-form-builder/site/plugins";
import formsPbPlugins from "@webiny/app-form-builder/page-builder/site/plugins";
import theme from "theme";

export default [
    fileUploadPlugin(),
    imagePlugin(),
    pageBuilderPlugins(),
    pageBuilderUseSsrCacheTagsPlugins(),
    cookiePolicyPlugins(),
    typeformPlugins(),
    mailchimpPlugins(),
    gtmPlugins(),
    i18nPlugins(),
    formsSitePlugins(),
    formsPbPlugins(),
    theme()
];