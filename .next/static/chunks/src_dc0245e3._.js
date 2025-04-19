(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/database/init.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "client": (()=>client)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Client"]();
client.setEndpoint('https://fra.cloud.appwrite.io/v1').setProject('aura') // .setKey(process.env.APPWRITE_API_KEY);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/database/users.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getLoggedUser": (()=>getLoggedUser),
    "login": (()=>login),
    "logout": (()=>logout),
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/init.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-client] (ecmascript)");
;
;
const getLoggedUser = async ()=>{
    try {
        const account = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Account"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]);
        return account.get();
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
const logout = async ()=>{
    try {
        const account = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Account"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]);
        return account.deleteSession('current');
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
const login = async (email, password)=>{
    try {
        const account = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Account"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]);
        return account.createEmailPasswordSession(email, password);
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
const register = async (email, password)=>{
    try {
        const account = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Account"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$init$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"]);
        return account.create('unique()', email, password);
    } catch (error) {
        const appwriteError = error;
        throw new Error(appwriteError.message);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/regex.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/responsive_helper.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useResponsive": (()=>useResponsive)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const mHeight = 1024;
const mWidth = 1440;
function useWindowSize() {
    _s();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : ("TURBOPACK unreachable", undefined),
        height: ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : ("TURBOPACK unreachable", undefined)
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowSize.useEffect": ()=>{
            const handleResize = {
                "useWindowSize.useEffect.handleResize": ()=>{
                    setSize({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["useWindowSize.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "useWindowSize.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["useWindowSize.useEffect"];
        }
    }["useWindowSize.useEffect"], []);
    return size;
}
_s(useWindowSize, "h9RiiMDrxFC1dkL4cYRxt74Qu3M=");
function useResponsive() {
    _s1();
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
_s1(useResponsive, "KjNohv3DNp89qhMgc5AAk+GTEgA=", false, function() {
    return [
        useWindowSize
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/styles/commont_text.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/auth/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Auth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/database/users.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/regex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/responsive_helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/commont_text.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Auth() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidEmail"])(formData.email)) alert("Please enter a valid email address");
            else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidPassword"])(formData.password)) alert("Please enter a valid password");
            else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$database$2f$users$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])(formData.email, formData.password).then((res)=>{
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
    const { w, h, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"])(), styles = {
        container: {
            width: "100%",
            height: "100vh",
            // padding: "40px",
            border: "1px solid red"
        },
        card: {
            // margin: "auto",
            width: `${w(480)}px`,
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonText"].header4Bold,
            color: "var(--dark-500)",
            marginBottom: "8px"
        },
        subtitle: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonText"].body2Regular,
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
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$commont_text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommonText"].body2Regular,
            color: "#555555"
        },
        footerLink: {
            color: "#007bff",
            textDecoration: "none",
            fontWeight: 500
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Hey"
    }, void 0, false, {
        fileName: "[project]/src/app/auth/page.tsx",
        lineNumber: 117,
        columnNumber: 7
    }, this);
}
_s(Auth, "OeOwRKf5Ei87xiYuyZmkUJJCo+M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$responsive_helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsive"]
    ];
});
_c = Auth;
var _c;
__turbopack_context__.k.register(_c, "Auth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_dc0245e3._.js.map