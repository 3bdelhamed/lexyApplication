"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_service_1 = __importDefault(require("./auth.service"));
const validation_middelware_1 = require("../../middelwares/validation.middelware");
const auth_validation_1 = require("./auth.validation");
const router = (0, express_1.Router)();
router.post('/signup', (0, validation_middelware_1.Validation)(auth_validation_1.SignUpSchema), auth_service_1.default.signup);
exports.default = router;
