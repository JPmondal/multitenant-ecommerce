"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var payload_1 = require("payload");
var _payload_config_1 = require("@payload-config");
var categories = [
    {
        name: "All",
        slug: "all",
    },
    {
        name: "Business & Money",
        color: "#FFB347",
        slug: "business-money",
        subcategories: [
            { name: "Accounting", slug: "accounting" },
            {
                name: "Entrepreneurship",
                slug: "entrepreneurship",
            },
            { name: "Gigs & Side Projects", slug: "gigs-side-projects" },
            { name: "Investing", slug: "investing" },
            { name: "Management & Leadership", slug: "management-leadership" },
            {
                name: "Marketing & Sales",
                slug: "marketing-sales",
            },
            { name: "Networking, Careers & Jobs", slug: "networking-careers-jobs" },
            { name: "Personal Finance", slug: "personal-finance" },
            { name: "Real Estate", slug: "real-estate" },
        ],
    },
    {
        name: "Software Development",
        color: "#7EC8E3",
        slug: "software-development",
        subcategories: [
            { name: "Web Development", slug: "web-development" },
            { name: "Mobile Development", slug: "mobile-development" },
            { name: "Game Development", slug: "game-development" },
            { name: "Programming Languages", slug: "programming-languages" },
            { name: "DevOps", slug: "devops" },
        ],
    },
    {
        name: "Writing & Publishing",
        color: "#D8B5FF",
        slug: "writing-publishing",
        subcategories: [
            { name: "Fiction", slug: "fiction" },
            { name: "Non-Fiction", slug: "non-fiction" },
            { name: "Blogging", slug: "blogging" },
            { name: "Copywriting", slug: "copywriting" },
            { name: "Self-Publishing", slug: "self-publishing" },
        ],
    },
    {
        name: "Other",
        slug: "other",
    },
    {
        name: "Education",
        color: "#FFE066",
        slug: "education",
        subcategories: [
            { name: "Online Courses", slug: "online-courses" },
            { name: "Tutoring", slug: "tutoring" },
            { name: "Test Preparation", slug: "test-preparation" },
            { name: "Language Learning", slug: "language-learning" },
        ],
    },
    {
        name: "Self Improvement",
        color: "#96E6B3",
        slug: "self-improvement",
        subcategories: [
            { name: "Productivity", slug: "productivity" },
            { name: "Personal Development", slug: "personal-development" },
            { name: "Mindfulness", slug: "mindfulness" },
            { name: "Career Growth", slug: "career-growth" },
        ],
    },
    {
        name: "Fitness & Health",
        color: "#FF9AA2",
        slug: "fitness-health",
        subcategories: [
            { name: "Workout Plans", slug: "workout-plans" },
            { name: "Nutrition", slug: "nutrition" },
            { name: "Mental Health", slug: "mental-health" },
            { name: "Yoga", slug: "yoga" },
        ],
    },
    {
        name: "Design",
        color: "#B5B9FF",
        slug: "design",
        subcategories: [
            { name: "UI/UX", slug: "ui-ux" },
            { name: "Graphic Design", slug: "graphic-design" },
            { name: "3D Modeling", slug: "3d-modeling" },
            { name: "Typography", slug: "typography" },
        ],
    },
    {
        name: "Drawing & Painting",
        color: "#FFCAB0",
        slug: "drawing-painting",
        subcategories: [
            { name: "Watercolor", slug: "watercolor" },
            { name: "Acrylic", slug: "acrylic" },
            { name: "Oil", slug: "oil" },
            { name: "Pastel", slug: "pastel" },
            { name: "Charcoal", slug: "charcoal" },
        ],
    },
    {
        name: "Music",
        color: "#FFD700",
        slug: "music",
        subcategories: [
            { name: "Songwriting", slug: "songwriting" },
            { name: "Music Production", slug: "music-production" },
            { name: "Music Theory", slug: "music-theory" },
            { name: "Music History", slug: "music-history" },
        ],
    },
    {
        name: "Photography",
        color: "#FF6B6B",
        slug: "photography",
        subcategories: [
            { name: "Portrait", slug: "portrait" },
            { name: "Landscape", slug: "landscape" },
            { name: "Street Photography", slug: "street-photography" },
            { name: "Nature", slug: "nature" },
            { name: "Macro", slug: "macro" },
        ],
    },
];
var seed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var payload, _i, categories_1, category, parentCategory, _a, _b, subCategory;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, payload_1.getPayload)({ config: _payload_config_1.default })];
            case 1:
                payload = _c.sent();
                _i = 0, categories_1 = categories;
                _c.label = 2;
            case 2:
                if (!(_i < categories_1.length)) return [3 /*break*/, 8];
                category = categories_1[_i];
                return [4 /*yield*/, payload.create({
                        collection: "categories",
                        data: {
                            name: category.name,
                            slug: category.slug,
                            color: category.color,
                            parent: null
                        }
                    })];
            case 3:
                parentCategory = _c.sent();
                _a = 0, _b = category.subcategories || [];
                _c.label = 4;
            case 4:
                if (!(_a < _b.length)) return [3 /*break*/, 7];
                subCategory = _b[_a];
                return [4 /*yield*/, payload.create({
                        collection: "categories",
                        data: {
                            name: subCategory.name,
                            slug: subCategory.slug,
                            parent: parentCategory.id
                        }
                    })];
            case 5:
                _c.sent();
                _c.label = 6;
            case 6:
                _a++;
                return [3 /*break*/, 4];
            case 7:
                _i++;
                return [3 /*break*/, 2];
            case 8: return [2 /*return*/];
        }
    });
}); };
await seed();
process.exit(0);
