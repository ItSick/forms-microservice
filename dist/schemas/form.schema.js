"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormSchema = exports.Form = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Form = class Form {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Form.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Form.prototype, "version", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Form.prototype, "steps", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Form.prototype, "variant", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Form.prototype, "hostingApps", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Form.prototype, "createdBy", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Form.prototype, "updateBy", void 0);
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Date)
], Form.prototype, "createDate", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Form.prototype, "elements", void 0);
Form = __decorate([
    mongoose_1.Schema()
], Form);
exports.Form = Form;
exports.FormSchema = mongoose_1.SchemaFactory.createForClass(Form);
//# sourceMappingURL=form.schema.js.map