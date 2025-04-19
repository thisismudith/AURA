module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/utils/responsive_helper.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useResponsive": (()=>useResponsive)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const mHeight = 1024;
const mWidth = 1440;
function useWindowSize() {
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : mWidth,
        height: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : mHeight
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    return size;
}
function useResponsive() {
    const { width, height } = useWindowSize();
    const h = (value)=>{
        const divide = mHeight / value;
        return height / divide;
    };
    const w = (value)=>{
        const divide = mWidth / value;
        return width / divide;
    };
    const t = (value)=>{
        return (h(value) + w(value)) / 2;
    };
    return {
        h,
        w,
        t
    };
}
}}),
"[project]/src/compenents/common_button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CommonButton": (()=>CommonButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/responsive_helper.ts [app-ssr] (ecmascript)");
'use client';
;
;
function CommonButton(props) {
    const { w, h, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResponsive"])();
    const { textColor = "var(--white-500)", fontSize = t(16), width = w(445), height = h(56), text = "Click Me", backgroundColor = "var(--primary-500)", borderRadius = 8, onClick } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        style: {
            color: textColor,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            border: "none",
            fontSize: `${fontSize}px`,
            cursor: "pointer"
        },
        onClick: onClick,
        children: text
    }, void 0, false, {
        fileName: "[project]/src/compenents/common_button.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/database/init.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "client": (()=>client)
});
(()=>{
    const e = new Error("Cannot find module 'appwrite'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const client = new Client();
client.setEndpoint('https://fra.cloud.appwrite.io/v1').setProject('aura') // .setKey(process.env.APPWRITE_API_KEY);
;
}}),
"[project]/src/database/users.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLoggedUser": (()=>getLoggedUser),
    "login": (()=>login),
    "logout": (()=>logout),
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/init.ts [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'appwrite'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const getLoggedUser = async ()=>{
    try {
        const account = new Account(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"]);
        return account.get();
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
const logout = async ()=>{
    try {
        const account = new Account(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"]);
        return account.deleteSession('current');
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
const login = async (email, password)=>{
    try {
        const account = new Account(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"]);
        return account.createEmailPasswordSession(email, password);
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
const register = async (email, password)=>{
    try {
        const account = new Account(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"]);
        return account.create('unique()', email, password);
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
}}),
"[project]/src/compenents/common_textfield.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CommonTextField": (()=>CommonTextField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/responsive_helper.ts [app-ssr] (ecmascript)");
'use client';
;
;
function CommonTextField(props) {
    const { w, h, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResponsive"])();
    const { textColor = "var(--dark-500)", fontSize = t(16), width = w(445), height = h(55), placeholder = "Search", type = "text", backgroundColor = "var(--white-500)", borderRadius = 10, value = "", onChange = ()=>{} } = props;
    const paddingHorizontal = w(16);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor,
            borderRadius,
            border: "solid var(--primary-500) 1px",
            padding: `0 ${paddingHorizontal}px`,
            display: "flex",
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: value,
                onChange: (e)=>onChange(e.target.value),
                type: type,
                style: {
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    fontSize: `${fontSize}px`,
                    backgroundColor: "transparent",
                    color: textColor,
                    paddingTop: h(10)
                }
            }, void 0, false, {
                fileName: "[project]/src/compenents/common_textfield.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    position: "absolute",
                    left: `${paddingHorizontal}px`,
                    top: value ? `${h(4)}px` : `${height / 2 - fontSize / 2}px`,
                    fontSize: value ? `${t(10)}px` : `${fontSize}px`,
                    color: "var(--primary-500)",
                    pointerEvents: "none",
                    transition: "all 0.2s ease"
                },
                children: placeholder
            }, void 0, false, {
                fileName: "[project]/src/compenents/common_textfield.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/compenents/common_textfield.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/utils/regex.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isValidEmail": (()=>isValidEmail),
    "isValidPassword": (()=>isValidPassword)
});
"use client";
const isValidEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const isValidPassword = (password)=>{
    const phoneRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{8,}$/;
    return phoneRegex.test(password);
};
}}),
"[project]/src/styles/commont_text.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CommonText": (()=>CommonText)
});
class CommonText {
    fontSize;
    fontWeight;
    lineHeight;
    letterSpacing;
    color;
    constructor(fontSize, fontWeight, lineHeight, letterSpacing, color){
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.lineHeight = lineHeight;
        this.letterSpacing = letterSpacing;
        this.color = color;
    }
    static header1Bold = {
        fontSize: 80,
        fontWeight: "Semi-Bold"
    };
    static header1Regular = {
        fontSize: 80,
        fontWeight: "light"
    };
    static header2Bold = {
        fontSize: 60,
        fontWeight: "Semi-Bold"
    };
    static header2Regular = {
        fontSize: 60,
        fontWeight: "light"
    };
    static header3Bold = {
        fontSize: 40,
        fontWeight: "Semi-Bold"
    };
    static header3Regular = {
        fontSize: 40,
        fontWeight: "light"
    };
    static header4Bold = {
        fontSize: 30,
        fontWeight: "Semi-Bold"
    };
    static header4Regular = {
        fontSize: 30,
        fontWeight: "light"
    };
    static header5Bold = {
        fontSize: 24,
        fontWeight: "Semi-Bold"
    };
    static header5Regular = {
        fontSize: 24,
        fontWeight: "light"
    };
    static header6Bold = {
        fontSize: 20,
        fontWeight: "Semi-Bold"
    };
    static header6Regular = {
        fontSize: 20,
        fontWeight: "light"
    };
    static header7Bold = {
        fontSize: 18,
        fontWeight: "Semi-Bold"
    };
    static header7Regular = {
        fontSize: 18,
        fontWeight: "light"
    };
    static body1Bold = {
        fontSize: 16,
        fontWeight: "Semi-Bold"
    };
    static body1Regular = {
        fontSize: 16,
        fontWeight: "light"
    };
    static body2Bold = {
        fontSize: 14,
        fontWeight: "Semi-Bold"
    };
    static body2Regular = {
        fontSize: 14,
        fontWeight: "light"
    };
    static captionBold = {
        fontSize: 12,
        fontWeight: "Semi-Bold"
    };
    static captionRegular = {
        fontSize: 12,
        fontWeight: "light"
    };
    static labelBold = {
        fontSize: 11,
        fontWeight: "Semi-Bold"
    };
    static labelRegular = {
        fontSize: 11,
        fontWeight: "light"
    };
}
}}),
"[project]/src/app/auth/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Auth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$compenents$2f$common_button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/compenents/common_button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$compenents$2f$common_textfield$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/compenents/common_textfield.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/regex.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/responsive_helper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/commont_text.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Auth() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        password: "",
        type: ""
    });
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSubmit = (is_logging_in = true)=>{
        // User Login 
        if (is_logging_in) {
            if (formData.email === "" || formData.password === "") {
                alert("Please fill in all fields");
                return;
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidEmail"])(formData.email)) alert("Please enter a valid email address");
            else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regex$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidPassword"])(formData.password)) alert("Please enter a valid password");
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["login"])(formData.email, formData.password).then((res)=>{
                    if (res) {
                        alert("Login successful");
                    } else {
                        alert("Login failed");
                    }
                }).catch((err)=>{
                    if (err.code == 409) {
                        alert("A user with this email already exists. Login instead.");
                        return;
                    }
                    if (err.code == 401) {
                        alert("Invalid credentials");
                        return;
                    }
                });
            }
        } else {}
    };
    const { w, h, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResponsive"])();
    const styles = {
        container: {
            width: "100%",
            height: "100vh",
            padding: "40px",
            backgroundColor: "var(--dark-500)",
            border: "1px solid red"
        },
        card: {
            margin: "auto",
            width: `${w(440)}px`,
            height: `${h(480)}px`,
            backgroundColor: "var(--white-500)",
            borderRadius: "20px",
            boxShadow: "0px 54.999996185302734px 109.99999237060547px rgba(0, 0, 0, 0.4), 0px 54.999996185302734px 109.99999237060547px rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center"
        },
        title: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonText"].header4Bold,
            color: "var(--dark-500)",
            marginBottom: "8px"
        },
        subtitle: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonText"].body2Regular,
            color: "var(--gray-500)",
            marginBottom: "24px"
        },
        inputGroup: {
            marginBottom: "16px"
        },
        buttonGroup: {
            marginTop: "8px"
        },
        footer: {
            marginTop: "24px",
            textAlign: "center"
        },
        footerText: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonText"].body2Regular,
            color: "#555555"
        },
        footerLink: {
            color: "#007bff",
            textDecoration: "none",
            fontWeight: 500
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.card,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: styles.title,
                    children: "Login with Email"
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/page.tsx",
                    lineNumber: 118,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: styles.subtitle,
                    children: "Please enter your credentials to continue."
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/page.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.inputGroup,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$compenents$2f$common_textfield$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonTextField"], {
                        placeholder: "Email",
                        type: "email",
                        value: formData.email,
                        onChange: (val)=>handleChange("email", val)
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/page.tsx",
                        lineNumber: 122,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/page.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.inputGroup,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$compenents$2f$common_textfield$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonTextField"], {
                        placeholder: "Password",
                        type: "password",
                        value: formData.password,
                        onChange: (val)=>handleChange("password", val)
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/page.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/page.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.buttonGroup,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$compenents$2f$common_button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonButton"], {
                        text: "Login",
                        onClick: ()=>handleSubmit(true)
                    }, void 0, false, {
                        fileName: "[project]/src/app/auth/page.tsx",
                        lineNumber: 129,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/page.tsx",
                    lineNumber: 128,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.footer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: styles.footerText,
                        children: [
                            "Don't have an account?",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                style: styles.footerLink,
                                children: "Sign up"
                            }, void 0, false, {
                                fileName: "[project]/src/app/auth/page.tsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/auth/page.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/auth/page.tsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/auth/page.tsx",
            lineNumber: 117,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/auth/page.tsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d239c8f5._.js.map