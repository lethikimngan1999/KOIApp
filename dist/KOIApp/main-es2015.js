(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-layout>\r\n    <main class=\"setHeight\">\r\n\r\n        <router-outlet></router-outlet>\r\n    </main>\r\n</app-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-dialog/user-dialog.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-dialog/user-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item *ngIf=\"isAdd; else employeeEdit\">\n                <nz-form-label nzRequired>Chọn nhân viên</nz-form-label>\n                <nz-form-control>\n                    <nz-select nzPlaceHolder=\"Danh sách nhân viên chưa có tài khoản\" nzShowSearch formControlName=\"_selectBox_Employee\" [(ngModel)]=\"userDto.MaNhanVien\">\n                        <ng-container *ngFor=\"let item of listEmployeeNotAccount\">\n                            <nz-option nzLabel=\"{{item.CMND}} - {{item.HoLot}} {{item.TenNhanVien}}\" nzValue=\"{{item.MaNhanVien}}\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                </nz-form-control>\n            </nz-form-item>\n            <ng-template #employeeEdit>\n                <nz-form-item>\n                    <nz-form-label>Nhân viên</nz-form-label>\n                    <nz-form-control>\n                        <nz-select nzShowSearch formControlName=\"_selectBox_Employee\" [(ngModel)]=\"userDto.MaNhanVien\" nzDisabled=\"!isAdd\">\n                            <nz-option nzLabel=\"{{userDto.Nhanvien.CMND}} - {{userDto.Nhanvien.HoLot}} {{userDto.Nhanvien.TenNhanVien}}\" nzValue=\"{{userDto.MaNhanVien}}\"></nz-option>\n                        </nz-select>\n                    </nz-form-control>\n                </nz-form-item>\n            </ng-template>\n\n        </div>\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên đăng nhập</nz-form-label>\n                <nz-form-control nzHasFeedback [nzErrorTip]=\"userNameErrorTpl\" nzValidatingTip=\"Đang kiểm tra...\">\n                    <input nz-input placeholder=\"Tên đăng nhập\" [(ngModel)]=\"userDto.UserName\" type=\"text\" formControlName=\"_ipText_userName\" />\n                    <ng-template #userNameErrorTpl let-control>\n                        <ng-container *ngIf=\"control.hasError('required')\">\n                            Tên đăng nhập không được trống!\n                        </ng-container>\n                        <ng-container *ngIf=\"control.hasError('duplicated')\">\n                            Tên đăng nhập đã tồn tại!\n                        </ng-container>\n                    </ng-template>\n                </nz-form-control>\n\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"12\" *ngIf=\"isAdd\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Thiết lập vai trò</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"3\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"userDto.RoleIds\" formControlName=\"_selectBox_role\" nzHasFeedback nzErrorTip=\"Vui lòng chọn vai trò cho tài khoản!\">\n                        <ng-container *ngFor=\"let option of modelRoleModal\">\n                            <nz-option [nzLabel]=\"option.name\" [nzValue]=\"option.id\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-list/user-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-list/user-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle | uppercase}}</nz-page-header-title>\n    <nz-page-header-extra>\n        <!-- button create -->\n        <button class=\"btn-create\" nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"createUser()\">\n      <i nz-icon nzType=\"plus\"></i>Thêm Tài Khoản Nhân viên\n    </button>\n        <button class=\"btn-create\" nz-button nzType=\"default\" nzShape=\"round\" (click)=\"refreshData()\">\n        <i nz-icon nzType=\"reload\"></i>Tải lại dữ liệu\n      </button>\n    </nz-page-header-extra>\n    <!--content-->\n    <nz-page-header-content>\n        <!-- data table -->\n        <nz-table #userTable nzBordered [nzData]=\"listUser\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th>Tên đăng nhập</th>\n                    <th nzWidth=\"180px\">Họ và tên</th>\n\n                    <th>Email</th>\n                    <th nzWidth=\"100px\">Vai trò</th>\n                    <th nzWidth=\"180px\">Status</th>\n                    <th> </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of userTable.data; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.UserName}}</td>\n                    <td>{{data.Nhanvien.HoLot}} {{data.Nhanvien.TenNhanVien}}</td>\n\n                    <td>{{data.Nhanvien.Email}}</td>\n                    <td>\n                        <ul>\n                            <ng-container *ngFor=\"let item of data.ListRoles\">\n                                <li>{{item.Name}} </li>\n                            </ng-container>\n                        </ul>\n                    </td>\n                    <td>\n                        <ng-container *ngIf=\"data.Status == 'Active'\">\n                            <span class=\"active\"><i nz-icon nzType=\"check-circle\" nzTheme=\"outline\"></i>Đang hoạt động</span>\n                        </ng-container>\n                        <ng-container *ngIf=\"data.Status == 'Locked'\">\n                            <span class=\"locked\"><i nz-icon nzType=\"lock\" nzTheme=\"outline\"></i>Đã khóa</span>\n                        </ng-container>\n                    </td>\n                    <td>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"editUser(data)\">\n              <i nz-icon nzType=\"edit\" ></i>Sửa\n            </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"showModalRole(data)\">\n              <i nz-icon nzType=\"setting\" ></i>Vai trò\n            </button>\n                        <button nz-button nzType=\"warning\" nzShape=\"round\" (click)=\"resetPassword(data)\">\n                <i nz-icon nzType=\"key\"></i>Đặt lại mật khẩu\n              </button>\n                        <button nz-button nzType=\"danger\" nzShape=\"round\" (click)=\" lockAccount(data)\">\n                <i nz-icon nzType=\"lock\"></i>Khóa\n              </button>\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>\n\n<nz-page-header>\n    <nz-page-header-title>{{headerListUserLocked | uppercase}}</nz-page-header-title>\n    <!--content-->\n    <nz-page-header-content>\n        <!-- data table -->\n        <nz-table #userLockedTable nzBordered [nzData]=\"listUserAccountLocked\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th>Tên đăng nhập</th>\n                    <th>Họ và tên</th>\n                    <th>Email</th>\n                    <th>Vai trò</th>\n                    <th>Status</th>\n                    <th> </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of userLockedTable.data; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.UserName}}</td>\n                    <td>{{data.Nhanvien.HoLot}} {{data.Nhanvien.TenNhanVien}}</td>\n\n                    <td>{{data.Nhanvien.Email}}</td>\n                    <td>\n                        <ul>\n                            <ng-container *ngFor=\"let item of data.ListRoles\">\n                                <li>{{item.Name}} </li>\n                            </ng-container>\n                        </ul>\n                    </td>\n                    <td>\n                        <ng-container *ngIf=\"data.Status == 'Active'\">\n                            <span class=\"active\"><i nz-icon nzType=\"check-circle\" nzTheme=\"outline\"></i>Đang hoạt động</span>\n                        </ng-container>\n                        <ng-container *ngIf=\"data.Status == 'Locked'\">\n                            <span class=\"locked\"><i nz-icon nzType=\"lock\" nzTheme=\"outline\"></i>Đã khóa</span>\n                        </ng-container>\n                    </td>\n                    <td>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"unLockAccount(data)\">\n              <i nz-icon nzType=\"unlock\" ></i>Mở khóa tài khoản\n            </button>\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label>Tên đăng nhập</nz-form-label>\n                <nz-form-control>\n                    <input nz-input formControlName=\"_ipText_userName\" placeholder=\"Tên đăng nhập\" [(ngModel)]=\"userDto.UserName\" [disabled]=\"true\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Mật khẩu hiện tại</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập mật khẩu hiện tại\" placeholder=\"Nhập mật khẩu hiện tại\">\n                    <input nz-input type=\"password\" formControlName=\"_ipText_OldPass\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Mật khẩu mới</nz-form-label>\n                <nz-form-control nzHasFeedback [nzErrorTip]=\"passwordErrorTpl\">\n                    <input nz-input type=\"password\" formControlName=\"_ipText_NewPass\" (ngModelChange)=\"validateConfirmPassword()\" placeholder=\"Nhập mật khẩu mới\" />\n                    <ng-template #passwordErrorTpl let-control>\n                        <ng-container *ngIf=\"control.hasError('required')\">\n                            Vui lòng nhập vào mật khẩu mới!\n                        </ng-container>\n                        <ng-container *ngIf=\"control.hasError('minlength')\">\n                            Mật khẩu ít nhất 6 kí tự!\n                        </ng-container>\n                    </ng-template>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Xác nhận mật khẩu mới</nz-form-label>\n                <nz-form-control nzHasFeedback [nzErrorTip]=\"confirmPasswordErrorTpl\">\n                    <input nz-input type=\"password\" formControlName=\"_ipText_ConfirmNewPass\" placeholder=\"Nhập mật khẩu mới để xác nhận\" />\n                    <ng-template #confirmPasswordErrorTpl let-control>\n                        <ng-container *ngIf=\"control.hasError('required')\">\n                            Vui lòng nhập vào mật khẩu mới một lần nữa để xác nhận!\n                        </ng-container>\n                        <ng-container *ngIf=\"control.hasError('confirm')\">\n                            Mật khẩu xác nhận không khớp với mật khẩu mới vừa nhập ở trên!\n                        </ng-container>\n                    </ng-template>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div *nzModalFooter>\n        <button nz-button (click)=\"resetForm()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên vai trò</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"3\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"roleIds\" formControlName=\"_selectBox_role\" Vui lòng chọn vai trò cho tài khoản>\n                        <ng-container *ngFor=\"let option of modelRoleModal\">\n                            <nz-option [nzLabel]=\"option.name\" [nzValue]=\"option.id\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div *nzModalFooter>\n        <button nz-button [nzType]=\"'primary'\" (click)=\"addRole()\" [disabled]=\"!validateForm.valid\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle}}</nz-page-header-title>\n    <nz-page-header-extra>\n\n\n        <button nz-button nzType=\"default\" nzShape=\"round\" [routerLink]=\"'/admin/cac-loai-benh'\">\n        <i nz-icon nzType=\"arrow-left\"></i>Quay lại danh sách\n      </button>\n        <button nz-button nzType=\"primary\" nzShape=\"round\" *ngIf=\"hasBenh\" (click)=\"edit(selected)\">\n        <i nz-icon nzType=\"edit\"></i>Sửa\n      </button>\n    </nz-page-header-extra>\n    <!--content-->\n    <nz-page-header-content *ngIf=\"hasBenh\">\n        <nz-tabset>\n            <nz-tab nzTitle=\"Chi tiết\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <div nz-row>\n                            <div nz-col [nzSpan]=\"18\" [nzPush]=\"6\">\n                                <h5>{{selected.TenBenh}}</h5>\n                                <h6>Các điều trị:\n                                    <p [innerHtml]='selected.CachDieuTri'></p>\n                                </h6>\n                                <h6>Mô tả:\n                                    <p [innerHtml]='selected.MoTa'></p>\n                                </h6>\n\n                            </div>\n                            <div nz-col [nzSpan]=\"6\" [nzPull]=\"18\">\n                                <img [src]=\"selected.HinhAnh\" style=\"width: 200px\" />\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </nz-tab>\n            <nz-tab nzTitle=\"Nguyên nhân\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <div nz-row>\n                            <div [innerHtml]='selected.NguyenNhan'></div>\n                        </div>\n                    </div>\n                </div>\n            </nz-tab>\n            <nz-tab nzTitle=\"Triệu chứng\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"createTrieuChung()\">\n                            <i nz-icon nzType=\"plus\"></i>Thêm triệu chứng mới\n                          </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"create(selected)\">\n                            <i nz-icon nzType=\"plus\"></i>Cập nhật triệu chứng\n                          </button>\n                        <div nz-row>\n                            <ng-container *ngFor=\"let item of selected.ListTrieuChungs\">\n\n                                <li> <i nz-icon [nzType]=\"'check-circle'\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#52c41a'\"></i> {{item.TenTrieuChung}} </li>\n\n                            </ng-container>\n                        </div>\n                    </div>\n                </div>\n\n            </nz-tab>\n            <nz-tab nzTitle=\"Liệu trình\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <div nz-row>\n                            <div nz-col [nzSpan]=\"18\" [nzPush]=\"6\">\n\n                                <div class=\"timeline\">\n                                    <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\" *ngFor=\"let item of selectedThuoc?.ListLieuTrinhs\">\n                                        <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n\n\n                                            <h3 class=\" text-light\">{{item.TenLieuTrinh}}</h3>\n                                            <p [innerHtml]='item.MoTaLieuTrinh'></p>\n                                        </div>\n                                        <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n                                            <img src=\"../../../../../assets/img/bg-img/download.png\" class=\"img-fluid\" alt=\"img\">\n                                        </div>\n                                        <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n                                            <time>2018-02-23</time>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div nz-col [nzSpan]=\"6\" [nzPull]=\"18\">\n                                <ng-container *ngFor=\"let item of selected.ListThuocs\">\n                                    <a (click)=\"viewLT(item.MaThuoc)\">\n                                        <li> <i nz-icon [nzType]=\"'check-circle'\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#52c41a'\"></i> {{item.TenThuoc}} </li>\n                                    </a>\n                                </ng-container>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </nz-tab>\n        </nz-tabset>\n    </nz-page-header-content>\n\n    <!-- <nz-page-header-content *ngIf=\"hasBenh\">\n        <div class=\"wrap\">\n            <div class=\"content\">\n                <div class=\"content\" style=\"margin-left: -680px;\">\n                    <nz-timeline nzMode=\"alternate\">\n                        <nz-timeline-item nzColor=\"red\" nzPosition=\"right\">{{selected.TenBenh}}</nz-timeline-item>\n                        <nz-timeline-item nzColor=\"red\" nzPosition=\"right\">Nguyên nhân</nz-timeline-item>\n                        <nz-timeline-item nzColor=\"red\" nzPosition=\"left\">\n                            <div [innerHtml]='selected.NguyenNhan'></div> -->\n    <!-- {{selected.NguyenNhan}}-->\n    <!-- </nz-timeline-item>\n                        <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Triệu chứng</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <div *ngFor=\"let item1 of selected?.ListTrieuChungs\">\n                                <li [innerHtml]='item1.MoTaTrieuChung'></li>\n\n                                <ul>\n                                    <li style=\"display: inline-block; width: 30px;\">\n                                        <a (click)=\"editTrieuChung(item1)\" style=\"color: #1890ff;\">\n                                            <i nz-icon [nzType]=\"'edit'\" [nzTheme]=\"'twotone'\"></i>\n                                        </a>\n                                    </li>\n                                    <li style=\"display: inline-block; \">\n                                        <a (click)=\"confirmDeleteTrieuChung(item1)\" style=\"color: red;\">\n                                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                                        </a>\n                                    </li>\n\n                                </ul>\n\n                            </div>\n                        </nz-timeline-item>\n                        <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Thuốc điều trị bệnh</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <p *ngFor=\"let item of selected?.ListThuocs\">{{item.TenThuoc}}</p>\n                        </nz-timeline-item>\n                        <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Cách điều trị</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <div [innerHtml]='selected.CachDieuTri'></div> -->\n    <!-- {{selected.CachDieuTri}} -->\n    <!-- </nz-timeline-item> -->\n    <!-- <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Mô tả</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">{{selected.MoTa}}</nz-timeline-item> -->\n    <!-- <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Liệu trình điều trị</nz-timeline-item> -->\n    <!-- <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <div *ngFor=\"let item of selected?.ListLieuTrinhs\">\n                                <li [innerHtml]='item.MoTaLieuTrinh'></li>\n                                <ul>\n                                    <li style=\"display: inline-block; width: 30px;\">\n                                        <a (click)=\"editLieuTrinh(item)\" style=\"color: #1890ff;\">\n                                            <i nz-icon [nzType]=\"'edit'\" [nzTheme]=\"'twotone'\"></i>\n                                        </a>\n                                    </li>\n                                    <li style=\"display: inline-block; \">\n                                        <a (click)=\"confirmDeleteLieuTrinh(item)\" style=\"color: red;\">\n                                            <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                                        </a>\n                                    </li>\n\n                                </ul>\n\n\n                            </div>\n                        </nz-timeline-item> -->\n    <!-- <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Hình ảnh minh họa</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <div [innerHtml]='selected.MoTa'></div> -->\n    <!-- {{selected.CachDieuTri}} -->\n    <!-- </nz-timeline-item>\n\n                    </nz-timeline>\n\n                    <ng-template #dotTemplate>\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\n                    </ng-template>\n                </div>\n            </div>\n        </div> -->\n\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên bệnh</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên bệnh!\">\n                    <input nz-input placeholder=\"Tên bệnh\" [(ngModel)]=\"benhDto.TenBenh\" type=\"text\" formControlName=\"_ipText_TenBenh\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"12\" *ngIf=\"isAdd\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Thuốc điều trị</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"3\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"benhDto.MaThuocs\" formControlName=\"_selectBox_thuoc\" nzHasFeedback nzErrorTip=\"Vui lòng chọn vai trò cho tài khoản!\">\n                        <ng-container *ngFor=\"let option of modelThuocModal\">\n                            <nz-option [nzLabel]=\"option.TenThuoc\" [nzValue]=\"option.MaThuoc\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label>Hình ảnh</nz-form-label>\n                <nz-form-control>\n                    <nz-upload class=\"avatar-uploader\" nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\" nzName=\"_ipUpload_image\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\" [nzBeforeUpload]=\"beforeUpload\" (nzChange)=\"handleChange($event)\">\n                        <ng-container *ngIf=\"!avatarUrl\">\n                            <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n                            <div class=\"ant-upload-text\">Upload</div>\n                        </ng-container>\n                        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" style=\"width: 100%\" />\n                    </nz-upload>\n                </nz-form-control>\n\n                <!-- <img [src]=\"avatarUrl\" style=\"width: 100%\" />\n                <input type=\"file\" (change)=\"seletedFile($event)\" /> -->\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"12\" *ngIf=\"isAdd\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Triệu chứng</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"3\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"benhDto.MaTrieuChungs\" formControlName=\"_selectBox_trieuchung\" nzHasFeedback nzErrorTip=\"Vui lòng chọn triệu chứng!\">\n                        <ng-container *ngFor=\"let option of modelTrieuChungModal\">\n                            <nz-option [nzLabel]=\"option.TenTrieuChung\" [nzValue]=\"option.MaTrieuChung\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Nguyên nhân</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_NguyenNhan\" [(ngModel)]=\"benhDto.NguyenNhan\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Cách điều trị</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_CachDieuTri\" [(ngModel)]=\"benhDto.CachDieuTri\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Mô tả </nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_MoTa\" [(ngModel)]=\"benhDto.MoTa\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Nội dung hiển thị</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_NoiDungHienThi\" [(ngModel)]=\"benhDto.NoiDungHienThi\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <!-- <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label>Liệu trình</nz-form-label>\n                <nz-form-control>\n                    <ng-container *ngFor=\"let option1 of modelRoleModal1\">\n                        <ckeditor [(ngModel)]=\"\" formControlName=\"_ipTextarea_MaLieuTrinh\"></ckeditor>\n                        <nz-option [nzLabel]=\"option1.TenLieuTrinh\" [nzValue]=\"option.MaLieuTrinh\"></nz-option>\n                    </ng-container>\n                   \n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div> -->\n    <!-- \n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label>Liệu trình</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor [(ngModel)]=\"benhDto.ListLieuTrinhs.MoTaLieuTrinh\" formControlName=\"_ipTextarea_MoTaLieuTrinh\"></ckeditor>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div> -->\n\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-list/benh-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-list/benh-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle | uppercase}}</nz-page-header-title>\n    <nz-page-header-extra>\n        <input nz-input placeholder=\"Tìm theo tên hoặc nguyên nhân\" [(ngModel)]=\"sName\" type=\"text\" />\n        <!-- button create -->\n        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"create()\">\n  <i nz-icon nzType=\"plus\"></i>Thêm bệnh\n</button>\n\n    </nz-page-header-extra>\n\n    <nz-page-header-content>\n\n        <!-- data table -->\n        <nz-table #Table nzBordered [nzData]=\"dataSource\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th>Tên bệnh</th>\n                    <th>Triệu chứng</th>\n                    <th>Thuốc điều trị</th>\n\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of Table.data | filterBenh: sName ; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.TenBenh}}</td>\n                    <td>\n                        <ul>\n                            <ng-container *ngFor=\"let item of data.ListTrieuChungs\">\n\n                                <li>{{item.TenTrieuChung}} </li>\n\n                            </ng-container>\n                        </ul>\n                    </td>\n                    <td>\n                        <ul>\n                            <ng-container *ngFor=\"let item of data.ListThuocs\">\n                                <a (click)=\"viewThuoc(item.MaThuoc)\">\n                                    <li>{{item.TenThuoc}} </li>\n                                </a>\n                            </ng-container>\n                        </ul>\n                    </td>\n                    <td>\n                        <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"view(data.MaBenh)\">\n                <i nz-icon nzType=\"eye\"></i>Xem\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"showModal(data)\">\n                <i nz-icon nzType=\"setting\" ></i>Thêm thuốc\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"edit(data)\">\n                <i nz-icon nzType=\"edit\"></i>Sửa\n              </button>\n                        <button nz-button nzType=\"danger\" nzShape=\"round\" (click)=\"confirmDelete(data)\">\n                <i nz-icon nzType=\"delete\"></i>Xóa\n              </button>\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên triệu chứng</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên triệu chứng!\">\n                    <input nz-input placeholder=\"Tên triệu chứng\" [(ngModel)]=\"trieuchungDto.TenTrieuChung\" type=\"text\" formControlName=\"_ipText_Tentrieuchung\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n    </div>\n\n\n    <!-- <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Triệu chứng </nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_MoTa\" [(ngModel)]=\"trieuchungDto.MoTaTrieuChung\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div> -->\n\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên thuốc</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"4\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"maThuocs\" formControlName=\"_selectBox_thuoc\" Vui lòng chọn thuốc điều trị bệnh>\n                        <ng-container *ngFor=\"let option of modelRoleModal\">\n                            <nz-option [nzLabel]=\"option.TenThuoc\" [nzValue]=\"option.MaThuoc\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div *nzModalFooter>\n        <button nz-button [nzType]=\"'primary'\" (click)=\"add()\" [disabled]=\"!validateForm.valid\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên triệu chứng</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"4\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"maTrieuchungs\" formControlName=\"_selectBox_trieuchung\" Vui lòng chọn triệu chứng>\n                        <ng-container *ngFor=\"let option of modelModal\">\n                            <nz-option [nzLabel]=\"option.TenTrieuChung\" [nzValue]=\"option.MaTrieuChung\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div *nzModalFooter>\n        <button nz-button [nzType]=\"'primary'\" (click)=\"add()\" [disabled]=\"!validateForm.valid\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên bệnh</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"4\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"maBenhs\" formControlName=\"_selectBox_benh\" Vui lòng chọn thuốc điều trị bệnh>\n                        <ng-container *ngFor=\"let option of modelRoleModal\">\n                            <nz-option [nzLabel]=\"option.TenBenh\" [nzValue]=\"option.MaBenh\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div *nzModalFooter>\n        <button nz-button [nzType]=\"'primary'\" (click)=\"add()\" [disabled]=\"!validateForm.valid\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên liệu trình</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên liệu trình!\">\n                    <input nz-input placeholder=\"Tên liệu trình\" [(ngModel)]=\"lieutrinhDto.TenLieuTrinh\" type=\"text\" formControlName=\"_ipText_Tenlieutrinh\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Liệu trình</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_MoTa\" [(ngModel)]=\"lieutrinhDto.MoTaLieuTrinh\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle}}</nz-page-header-title>\n    <nz-page-header-extra>\n        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"createLieuTrinh(selected)\">\n            <i nz-icon nzType=\"plus\"></i>Thêm liệu trình\n          </button>\n        <button nz-button nzType=\"default\" nzShape=\"round\" [routerLink]=\"'/admin/cac-loai-thuoc'\">\n        <i nz-icon nzType=\"arrow-left\"></i>Quay lại danh sách\n      </button>\n        <button nz-button nzType=\"primary\" nzShape=\"round\" *ngIf=\"hasThuoc\" (click)=\"edit(selected)\">\n        <i nz-icon nzType=\"edit\"></i>Sửa\n      </button>\n    </nz-page-header-extra>\n    <!--content-->\n    <nz-page-header-content *ngIf=\"hasThuoc\">\n        <nz-tabset>\n            <nz-tab nzTitle=\"Chi tiết\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <div nz-row>\n                            <div nz-col [nzSpan]=\"18\" [nzPush]=\"6\">\n                                <h5>{{selected.TenThuoc}}</h5>\n                                <h6>Công dụng:\n                                    <p [innerHtml]='selected.CongDung'></p>\n                                </h6>\n\n                                <h6>Cách dùng:\n                                    <p [innerHtml]='selected.CachDung'></p>\n                                </h6>\n                                <h6>Lưu ý:\n                                    <p [innerHtml]='selected.LuuY'></p>\n                                </h6>\n                            </div>\n                            <div nz-col [nzSpan]=\"6\" [nzPull]=\"18\">\n                                <img [src]=\"selected.HinhAnh\" style=\"width: 200px\" />\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </nz-tab>\n\n\n            <nz-tab nzTitle=\"Liệu trình\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <div nz-row>\n\n                            <!-- <div class=\"container\">\n                                <div class=\"main-timeline\"> -->\n\n                            <!-- start experience section-->\n                            <!-- <div class=\"timeline\">\n                                        <div class=\"icon\"></div>\n                                        <div class=\"date-content\">\n                                            <div class=\"date-outer\">\n                                                <span class=\"date\">\n                                                                            <span class=\"month\">2 Years</span>\n                                                <span class=\"year\">2013</span>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"timeline-content\">\n                                            <h5 class=\"title\">Visual Art &amp; Design</h5>\n                                            <p class=\"description\">\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.\n                                            </p>\n                                        </div>\n                                    </div> -->\n                            <!-- end experience section-->\n\n                            <!-- start experience section-->\n                            <!-- <div class=\"timeline\">\n                                        <div class=\"icon\"></div>\n                                        <div class=\"date-content\">\n                                            <div class=\"date-outer\">\n                                                <span class=\"date\">\n                                                                            <span class=\"month\">1 Years</span>\n                                                <span class=\"year\">2015</span>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"timeline-content\">\n                                            <h5 class=\"title\">Product Designer</h5>\n                                            <p class=\"description\">\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.\n                                            </p>\n                                        </div>\n                                    </div> -->\n                            <!-- end experience section-->\n\n                            <!-- start experience section-->\n                            <!-- <div class=\"timeline\">\n                                        <div class=\"icon\"></div>\n                                        <div class=\"date-content\">\n                                            <div class=\"date-outer\">\n                                                <span class=\"date\">\n                                                                            <span class=\"month\">2 Years</span>\n                                                <span class=\"year\">2016</span>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"timeline-content\">\n                                            <h5 class=\"title\">Web Designer</h5>\n                                            <p class=\"description\">\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.\n                                            </p>\n                                        </div>\n                                    </div> -->\n                            <!-- end experience section-->\n\n                            <!-- start experience section-->\n                            <!-- <div class=\"timeline\">\n                                        <div class=\"icon\"></div>\n                                        <div class=\"date-content\">\n                                            <div class=\"date-outer\">\n                                                <span class=\"date\">\n                                                                            <span class=\"month\">2 Years</span>\n                                                <span class=\"year\">2018</span>\n                                                </span>\n                                            </div>\n                                        </div>\n                                        <div class=\"timeline-content\">\n                                            <h5 class=\"title\">Graphic Designer</h5>\n                                            <p class=\"description\">\n                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.\n                                            </p>\n                                        </div>\n                                    </div> -->\n                            <!-- end experience section-->\n\n                            <!-- </div>\n                            </div> -->\n\n                            <div class=\"timeline\">\n                                <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\" *ngFor=\"let item of selected?.ListLieuTrinhs\">\n                                    <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n\n\n                                        <h3 class=\" text-light\">{{item.TenLieuTrinh}}</h3>\n                                        <p [innerHtml]='item.MoTaLieuTrinh'></p>\n                                        <!-- <ul>\n                                                <li style=\"display: inline-block; width: 30px;\">\n                                                    <a (click)=\"editLieuTrinh(item)\" style=\"color: #1890ff;\">\n                                                        <i nz-icon [nzType]=\"'edit'\" [nzTheme]=\"'twotone'\"></i>\n                                                    </a>\n                                                </li>\n                                                <li style=\"display: inline-block; \">\n                                                    <a (click)=\"confirmDeleteLieuTrinh(item)\" style=\"color: red;\">\n                                                        <i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n                                                    </a>\n                                                </li>\n            \n                                            </ul> -->\n\n\n\n                                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p> -->\n                                    </div>\n                                    <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n                                        <img src=\"../../../../../assets/img/bg-img/download.png\" class=\"img-fluid\" alt=\"img\">\n                                    </div>\n                                    <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n                                        <time><a (click)=\"editLieuTrinh(item)\">Chỉnh sửa </a></time>\n                                    </div>\n                                </div>\n                                <!-- <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n                                    <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n                                        <h3 class=\" text-light\">Timeline Heading</h3>\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p>\n                                    </div>\n                                    <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n                                        <img src=\"img/img13.png\" class=\"img-fluid\" alt=\"img\">\n                                    </div>\n                                    <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n                                        <time>2018-02-23</time>\n                                    </div>\n                                </div>\n                                <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n                                    <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n                                        <h3 class=\" text-light\">Timeline Heading</h3>\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p>\n                                    </div>\n                                    <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n                                        <img src=\"img/img13.png\" class=\"img-fluid\" alt=\"img\">\n                                    </div>\n                                    <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n                                        <time>2018-02-23</time>\n                                    </div>\n                                </div>\n                                <div class=\"row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes\">\n                                    <div class=\"col-10 col-md-5 order-3 order-md-1 timeline-content\">\n                                        <h3 class=\" text-light\">Timeline Heading</h3>\n                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.</p>\n                                    </div>\n                                    <div class=\"col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center\">\n                                        <img src=\"img/img13.png\" class=\"img-fluid\" alt=\"img\">\n                                    </div>\n                                    <div class=\"col-10 col-md-5 order-1 order-md-3 py-3 timeline-date\">\n                                        <time>2018-02-23</time>\n                                    </div>\n                                </div> -->\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n            </nz-tab>\n        </nz-tabset>\n    </nz-page-header-content>\n    <!-- <div class=\"wrap\">\n            <div class=\"content\">\n                <div class=\"content\" style=\"margin-left: -680px;\">\n                    <nz-timeline nzMode=\"alternate\">\n                        <nz-timeline-item nzColor=\"red\" nzPosition=\"right\">{{selected.TenThuoc}}</nz-timeline-item>\n                        <nz-timeline-item nzColor=\"red\" nzPosition=\"right\">Công dụng</nz-timeline-item>\n                        <nz-timeline-item nzColor=\"red\" nzPosition=\"left\">\n                            <div [innerHtml]='selected.CongDung'></div>\n                        </nz-timeline-item>\n\n\n                      \n                        <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Cách dùng</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <div [innerHtml]='selected.CachDung'></div>\n                        </nz-timeline-item>\n\n                        <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Lưu ý</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <div [innerHtml]='selected.LuuY'></div>\n                        </nz-timeline-item>\n\n                        <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Thuốc điều trị bệnh</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <p *ngFor=\"let item of selected?.ListBenhs\">{{item.TenBenh}}</p>\n                        </nz-timeline-item>\n\n                        <nz-timeline-item nzColor=\"green\" nzPosition=\"right\">Hình ảnh</nz-timeline-item>\n                        <nz-timeline-item nzPosition=\"left\" nzColor=\"green\">\n                            <img [src]=\"selected.HinhAnh\" style=\"width: 200px\" />-->\n    <!-- <div [innerHtml]='selected.LuuY'></div> -->\n    <!-- </nz-timeline-item>\n\n                    </nz-timeline>\n\n\n                    <ng-template #dotTemplate>\n                        <i nz-icon nzType=\"clock-circle-o\" style=\"font-size: 16px;\"></i>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </nz-page-header-content> -->\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên bệnh</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên thuốc!\">\n                    <input nz-input placeholder=\"Tên thuốc\" [(ngModel)]=\"thuocDto.TenThuoc\" type=\"text\" formControlName=\"_ipText_TenThuoc\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"12\" *ngIf=\"isAdd\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Điều trị bệnh</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"4\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"thuocDto.MaBenhs\" formControlName=\"_selectBox_benh\" nzHasFeedback nzErrorTip=\"Vui lòng chọn bệnh mà thuốc điều trị bệnh\">\n                        <ng-container *ngFor=\"let option of modelbenhModal\">\n                            <nz-option [nzLabel]=\"option.TenBenh\" [nzValue]=\"option.MaBenh\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label>Hình ảnh</nz-form-label>\n                <nz-form-control>\n                    <nz-upload class=\"avatar-uploader\" nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\" nzName=\"_ipUpload_image\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\" [nzBeforeUpload]=\"beforeUpload\" (nzChange)=\"handleChange($event)\">\n                        <ng-container *ngIf=\"!avatarUrl\">\n                            <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n                            <div class=\"ant-upload-text\">Upload</div>\n                        </ng-container>\n                        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" style=\"width: 100%\" />\n                    </nz-upload>\n                </nz-form-control>\n\n                <!-- <img [src]=\"avatarUrl\" style=\"width: 100%\" />\n                <input type=\"file\" (change)=\"seletedFile($event)\" /> -->\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Công dụng</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_CongDung\" [(ngModel)]=\"thuocDto.CongDung\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Cách dùng</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_CachDung\" [(ngModel)]=\"thuocDto.CachDung\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label>Lưu ý </nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_LuuY\" [(ngModel)]=\"thuocDto.LuuY\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle | uppercase}}</nz-page-header-title>\n    <nz-page-header-extra>\n        <input nz-input placeholder=\"Tìm theo tên hoặc công dụng\" [(ngModel)]=\"sName\" type=\"text\" />\n        <!-- button create -->\n        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"create()\">\n  <i nz-icon nzType=\"plus\"></i>Thêm thuốc\n</button>\n\n    </nz-page-header-extra>\n\n    <nz-page-header-content>\n\n\n        <!-- data table -->\n        <nz-table #Table nzBordered [nzData]=\"dataSource\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th>Tên thuốc</th>\n                    <th>Hình ảnh</th>\n                    <th>Điều trị bệnh</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of Table.data | filterThuoc: sName ; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.TenThuoc}}</td>\n                    <td>\n\n                        <img [src]=\"data.HinhAnh\" style=\"width: 100px\" />\n                    </td>\n                    <td>\n                        <ul>\n                            <ng-container *ngFor=\"let item of data.ListBenhs\">\n                                <a (click)=\"viewBenh(item.MaBenh)\">\n                                    <li> {{item.TenBenh}}</li>\n                                </a>\n\n\n                            </ng-container>\n                        </ul>\n                    </td>\n                    <td>\n                        <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"view(data.MaThuoc)\">\n                <i nz-icon nzType=\"eye\"></i>Xem\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"showModal(data)\">\n                <i nz-icon nzType=\"setting\" ></i>Thêm bệnh\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"edit(data)\">\n                <i nz-icon nzType=\"edit\"></i>Sửa\n              </button>\n                        <button nz-button nzType=\"danger\" nzShape=\"round\" (click)=\"confirmDelete(data)\">\n                <i nz-icon nzType=\"delete\"></i>Xóa\n              </button>\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên triệu chứng</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên triệu chứng!\">\n                    <input nz-input placeholder=\"Tên triệu chứng\" [(ngModel)]=\"trieuchungDto.TenTrieuChung\" type=\"text\" formControlName=\"_ipText_Tentrieuchung\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"12\" *ngIf=\"isAddtt\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Triệu chứng của bệnh</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"4\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"trieuchungDto.MaBenhs\" formControlName=\"_selectBox_benh\" nzHasFeedback nzErrorTip=\"Vui lòng chọn bệnh mà thuốc điều trị bệnh\">\n                        <ng-container *ngFor=\"let option of modelbenhModal\">\n                            <nz-option [nzLabel]=\"option.TenBenh\" [nzValue]=\"option.MaBenh\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n\n    <!-- <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Triệu chứng </nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_MoTa\" [(ngModel)]=\"trieuchungDto.MoTaTrieuChung\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div> -->\n\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle | uppercase}}</nz-page-header-title>\n    <nz-page-header-extra>\n        <input nz-input placeholder=\"Tìm theo tên hoặc công dụng\" [(ngModel)]=\"sName\" type=\"text\" />\n        <!-- button create -->\n        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"createTrieuChung()\">\n            <i nz-icon nzType=\"plus\"></i>Thêm triệu chứng\n          </button>\n\n\n\n\n\n    </nz-page-header-extra>\n\n    <nz-page-header-content>\n\n\n\n        <!-- data table -->\n        <nz-table #Table nzBordered [nzData]=\"dataSource\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th>Tên triệu chứng</th>\n\n                    <th>Triệu chứng bệnh</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of Table.data ; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.TenTrieuChung}}</td>\n\n                    <td>\n                        <ul>\n                            <ng-container *ngFor=\"let item of data.ListBenhs\">\n                                <a (click)=\"viewBenh(item.MaBenh)\">\n                                    <li> {{item.TenBenh}}</li>\n                                </a>\n\n\n                            </ng-container>\n                        </ul>\n                    </td>\n                    <td>\n                        <!-- <button nz-button nzType=\"default\" nzShape=\"round\">\n                <i nz-icon nzType=\"eye\"></i>Xem\n              </button> -->\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"showModal(data)\">\n                <i nz-icon nzType=\"setting\" ></i>Thêm bệnh\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"editTrieuChung(data)\">\n                <i nz-icon nzType=\"edit\"></i>Sửa\n              </button>\n                        <button nz-button nzType=\"danger\" nzShape=\"round\">\n                <i nz-icon nzType=\"delete\"></i>Xóa\n              </button>\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col>\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên bệnh</nz-form-label>\n                <nz-form-control>\n                    <nz-select [nzMaxTagCount]=\"4\" nzMode=\"multiple\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzPlaceHolder=\"Please select\" [(ngModel)]=\"maBenhs\" formControlName=\"_selectBox_benh\" Vui lòng chọn thuốc điều trị bệnh>\n                        <ng-container *ngFor=\"let option of modelModal\">\n                            <nz-option [nzLabel]=\"option.TenBenh\" [nzValue]=\"option.MaBenh\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div *nzModalFooter>\n        <button nz-button [nzType]=\"'primary'\" (click)=\"add()\" [disabled]=\"!validateForm.valid\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Checkbox -->\n<form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" novalidate>\n    <!-- Form elements goes here -->\n    <div *ngFor=\"let data of dataSource; let i=index\">\n        <label>\n          <input type=\"checkbox\" [value]=\"data.MaTrieuChung\" (change)=\"onCheckboxChange($event)\" />\n          {{data.TenTrieuChung}}\n        </label>\n    </div>\n    <input type=\"submit\" value=\"Submit\">\n</form>\n\n<nz-table #Table nzBordered [nzData]=\"dataSourceTT\">\n    <thead>\n        <tr>\n            <th>STT</th>\n            <th>Triệu chứng bệnh</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let data of Table.data  ; index as i; \">\n            <td>{{i+1}}</td>\n            <td>\n                <ul>\n                    <li> {{data.Benh.TenBenh}}</li>\n                </ul>\n            </td>\n        </tr>\n    </tbody>\n</nz-table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-tabset>\n    <nz-tab nzTitle=\"Chi tiết\">\n        <div class=\"wrap\">\n            <div class=\"content\">\n                <div nz-row>\n                    <div nz-col [nzSpan]=\"18\" [nzPush]=\"6\">\n                        <h5>{{selected.TenBienThe}}</h5>\n                        <h6>Thuộc chủng loại: {{selected.ChungLoais.TenChungLoai}}</h6>\n                        <h6>Loại: {{selected.Giongs.TenGiong}}</h6>\n                        <h6>Chất lượng: {{selected.ChatLuongs.TenChatLuong}}</h6>\n                        <p [innerHtml]='selected.MoTa'></p>\n                    </div>\n                    <div nz-col [nzSpan]=\"6\" [nzPull]=\"18\">\n                        <img [src]=\"selected.Mahas\" style=\"width: 200px\" />\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </nz-tab>\n    <nz-tab nzTitle=\"Mô tả\">\n        <div class=\"wrap\">\n            <div class=\"content\">\n                <div nz-row>\n                    <div [innerHtml]='selected.ChungLoais.MoTa'></div>\n                </div>\n            </div>\n        </div>\n    </nz-tab>\n    <nz-tab nzTitle=\"Thông tin bổ sung\">\n        <div class=\"wrap\">\n            <div class=\"content\">\n                <div nz-row>\n                    <nz-table nzBordered>\n                        <tbody>\n\n                            <tr>\n                                <td>Loại</td>\n                                <td>{{selected.Giongs.TenGiong}} </td>\n                            </tr>\n                            <tr>\n                                <td>Giống cá Koi</td>\n                                <td>{{selected.ChungLoais.TenChungLoai}} </td>\n                            </tr>\n                            <tr>\n                                <td>Màu sắc</td>\n                                <td>{{selected.ChungLoais.MauSac}} </td>\n                            </tr>\n                            <tr>\n                                <td>Quốc gia</td>\n                                <td>Nhật bản, Việt Nam </td>\n                            </tr>\n                            <tr>\n                                <td>Size</td>\n                                <td>> 15 cm, > 20 cm, > 50 cm,\n                                    <15 cm, 15 – 18 cm, 15 – 25 cm, 18 – 20 cm, 20 – 30 cm, 20 cm, 25 cm, 30 cm, 35 cm, 40 cm, 45 cm, 50 cm,> 60 cm, 10 – 15 cm, 10 – 65 cm, 15 – 20 cm, 20 – 25 cm, 25 – 30 cm, 30 – 35 cm, 35 – 40 cm, 40 – 45 cm, 45 – 50 cm, 50 – 60 cm</td>\n                            </tr>\n                            <tr>\n                                <td>Chất lượng</td>\n                                <td>{{selected.ChatLuongs.TenChatLuong}} </td>\n                            </tr>\n                        </tbody>\n                    </nz-table>\n                </div>\n            </div>\n        </div>\n\n    </nz-tab>\n</nz-tabset>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên biến thể</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên biến thể!\">\n                    <input nz-input placeholder=\"Tên biến thể\" [(ngModel)]=\"bientheDto.TenBienThe\" type=\"text\" formControlName=\"_ipText_TenBienThe\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Thuộc chủng loại</nz-form-label>\n                <nz-form-control>\n                    <nz-select style=\"width: 100%\" nzPlaceHolder=\"Chọn chủng loại cho biến thể\" nzShowSearch formControlName=\"_selectBox_ChungLoai\" [(ngModel)]=\"bientheDto.MaChungLoai\">\n                        <ng-container *ngFor=\"let item of listChungLoai\">\n                            <nz-option nzLabel=\"{{item.TenChungLoai}}\" nzValue=\"{{item.MaChungLoai}}\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Giống</nz-form-label>\n                <nz-form-control>\n                    <nz-select style=\"width: 100%\" nzPlaceHolder=\"Chọn giống\" nzShowSearch formControlName=\"_selectBox_MaGiong\" [(ngModel)]=\"bientheDto.MaGiong\">\n                        <ng-container *ngFor=\"let item of listGiong\">\n                            <nz-option nzLabel=\"{{item.TenGiong}}\" nzValue=\"{{item.MaGiong}}\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Màu sắc</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập màu sắc!\">\n                    <input nz-input [(ngModel)]=\"bientheDto.MauSac\" placeholder=\"Màu sắc\" formControlName=\"_ipTextarea_MauSac\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <!-- //radio -->\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tình trạng</nz-form-label>\n                <nz-form-control nzErrorTip=\"Vui lòng chọn tình trạng !\">\n                    <nz-radio-group formControlName=\"_rdo_gender\" [(ngModel)]=\"bientheDto.TinhTrang\">\n                        <label nz-radio [nzValue]=\"false\">Hết hàng</label>\n                        <label nz-radio [nzValue]=\"true\">Còn hàng</label>\n\n                    </nz-radio-group>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Chất lượng</nz-form-label>\n                <nz-form-control>\n                    <nz-select style=\"width: 100%\" nzPlaceHolder=\"Chọn chất lượng\" nzShowSearch formControlName=\"_selectBox_ChatLuong\" [(ngModel)]=\"bientheDto.MaChatLuong\">\n                        <ng-container *ngFor=\"let item of listChatLuong\">\n                            <nz-option nzLabel=\"{{item.TenChatLuong}}\" nzValue=\"{{item.MaChatLuong}}\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label>Mô tả </nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_MoTa\" [(ngModel)]=\"bientheDto.MoTa\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle | uppercase}}</nz-page-header-title>\n    <nz-page-header-extra>\n\n        <!-- <input nz-input placeholder=\"Tìm theo tên hoặc CMND hoặc Sđt hoặc Email\" [(ngModel)]=\"sName\" type=\"text\" /> -->\n        <!-- button create -->\n        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"create()\">\n  <i nz-icon nzType=\"plus\"></i>Thêm biến thể\n</button>\n    </nz-page-header-extra>\n    <nz-page-header-content>\n        <!-- data table -->\n\n        <!-- <nz-table #groupingTable [nzData]=\"dataSource\" nzBordered nzSize=\"middle\" [nzScroll]=\"{ x: '1200px', y: '240px' }\">\n            <thead>\n                <tr>\n                    <th rowspan=\"4\" nzLeft>Name</th>\n                    <th colspan=\"4\">Other</th>\n                    <th colspan=\"2\">Company</th>\n                    <th rowspan=\"4\" nzRight>Gender</th>\n                </tr>\n                <tr>\n                    <th rowspan=\"3\">Age</th>\n                    <th colspan=\"3\">Address</th>\n                    <th rowspan=\"3\">Company Address</th>\n                    <th rowspan=\"3\">Company Name</th>\n                </tr>\n                <tr>\n                    <th rowspan=\"2\">Street</th>\n                    <th colspan=\"2\">Block</th>\n                </tr>\n                <tr>\n                    <th>Building</th>\n                    <th>Door No.</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of groupingTable.data\">\n                    <td nzLeft>{{ data.TenBienThe }}</td>\n                    <td>{{ data.MauSac }}</td>\n                    <td>{{ data.TinhTrang }}</td>\n                    <td>{{ data.TenBienThe }}</td>\n                    <td>{{ data.TenBienThe }}</td>\n                    <td>{{ data.TenBienThe }}</td>\n                    <td>{{ data.TenBienThe }}</td>\n                    <td nzRight>{{ data.TinhTrang }}</td>\n                </tr>\n            </tbody>\n        </nz-table> -->\n\n        <nz-table #nzTable nzBordered [nzData]=\"dataSource\" nzTableLayout=\"fixed\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th nzWidth=\"20px\">STT</th>\n\n                    <th nzWidth=\"120px\">\n                        Tên biến thể\n                        <!-- <nz-filter-trigger [(nzVisible)]=\"visible\" [nzActive]=\"searchValue.length > 0\" [nzDropdownMenu]=\"menu1\">\n                            <i nz-icon nzType=\"search\"></i>\n                        </nz-filter-trigger> -->\n                    </th>\n                    <th>Thuộc chủng loại</th>\n                    <th>Màu sắc</th>\n                    <th>Hình ảnh</th>\n                    <!-- <th>Tình trạng</th> -->\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of nzTable.data ; index as i; \">\n                    <td>{{i+1}}</td>\n\n                    <td>{{ data.TenBienThe }}</td>\n                    <td>{{ data.ChungLoais.TenChungLoai }}</td>\n                    <td>{{ data.MauSac }}</td>\n                    <td>\n                        <img [src]=\"data.Mahas\" style=\"width: 100px\" /></td>\n                    <td>\n                        <ng-container *ngIf=\"data.TinhTrang == true\">\n                            <span class=\"active\"><i nz-icon nzType=\"check-circle\" nzTheme=\"outline\"></i>Còn hàng</span>\n                        </ng-container>\n                        <ng-container *ngIf=\"data.TinhTrang == false\">\n                            <span class=\"locked\"><i nz-icon nzType=\"lock\" nzTheme=\"outline\"></i>Hết hàng</span>\n                        </ng-container>\n                    </td>\n                    <td>\n                        <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"add(data)\">\n                            <i nz-icon nzType=\"plus\"></i>Ảnh hiển thị\n                          </button>\n                        <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"view(data.MaBienThe)\">\n                <i nz-icon nzType=\"eye\"></i>Xem\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"edit(data)\">\n                <i nz-icon nzType=\"edit\"></i>Sửa\n              </button>\n                        <!-- <button nz-button nzType=\"danger\" nzShape=\"round\">\n                <i nz-icon nzType=\"delete\"></i>Xóa\n              </button> -->\n                    </td>\n                </tr>\n            </tbody>\n            <!-- <nz-dropdown-menu #menu1=\"nzDropdownMenu\">\n                <div class=\"ant-table-filter-dropdown\">\n                    <div class=\"search-box\">\n                        <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\" />\n                        <button nz-button nzSize=\"small\" nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\n                      Search\n                    </button>\n                        <button nz-button nzSize=\"small\" (click)=\"reset()\">Reset</button>\n                    </div>\n                </div>\n            </nz-dropdown-menu> -->\n        </nz-table>\n\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên hình ảnh</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên hình ảnh!\">\n                    <input nz-input placeholder=\"Tên hình ảnh\" [(ngModel)]=\"hinhanhDto.TenHinhAnh\" type=\"text\" formControlName=\"_ipText_lastName\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n\n        <!-- //radio -->\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Chọn ảnh hiển thị</nz-form-label>\n                <nz-form-control nzErrorTip=\"!\">\n                    <nz-radio-group formControlName=\"_rdo_gender\" [(ngModel)]=\"hinhanhDto.ChonAvt\">\n                        <label nz-radio [nzValue]='false'>Không chọn</label>\n                        <label nz-radio [nzValue]='true'>Chọn</label>\n\n                    </nz-radio-group>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n\n        <!-- <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Biến thể được gán hình ảnh</nz-form-label>\n                <nz-form-control>\n                    <nz-select style=\"width: 100%\" nzPlaceHolder=\"Vui lòng biến thể được gán hình ảnh\" nzShowSearch formControlName=\"_selectBox_employeePostition\" [(ngModel)]=\"hinhanhDto.MaBienThe\">\n                        <ng-container *ngFor=\"let item of listBienThe\">\n                            <nz-option nzLabel=\"{{item.TenBienThe}}\" nzValue=\"{{item.MaBienThe}}\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                </nz-form-control>\n            </nz-form-item>\n        </div> -->\n\n\n\n    </div>\n\n\n\n    <div nz-row [nzGutter]=\"24\">\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label>Hình ảnh</nz-form-label>\n                <nz-form-control>\n                    <nz-upload class=\"avatar-uploader\" nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\" nzName=\"_ipUpload_image\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\" [nzBeforeUpload]=\"beforeUpload\" (nzChange)=\"handleChange($event)\">\n                        <ng-container *ngIf=\"!avatarUrl\">\n                            <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n                            <div class=\"ant-upload-text\">Upload</div>\n                        </ng-container>\n                        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" style=\"width: 100%\" />\n                    </nz-upload>\n                </nz-form-control>\n\n                <!-- <img [src]=\"avatarUrl\" style=\"width: 100%\" />\n                <input type=\"file\" (change)=\"seletedFile($event)\" /> -->\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n\n    </div>\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle}} {{selected.TenChungLoai}} </nz-page-header-title>\n    <nz-page-header-extra>\n        <button nz-button nzType=\"default\" nzShape=\"round\" [routerLink]=\"'/admin/chung-loai'\">\n        <i nz-icon nzType=\"arrow-left\"></i>Quay lại danh sách \n      </button>\n        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"create()\">\n        <i nz-icon nzType=\"plus\"></i>Thêm biến thể\n      </button>\n        <button nz-button nzType=\"primary\" nzShape=\"round\">\n        <i nz-icon nzType=\"edit\"></i>Sửa\n      </button>\n    </nz-page-header-extra>\n\n    <nz-page-header-content *ngIf=\"has\">\n\n        <nz-tabset>\n            <nz-tab nzTitle=\"Danh sách biến thể\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <div nz-row>\n                            <nz-table #nzTable nzBordered [nzData]=\"dataSource\" nzTableLayout=\"fixed\">\n                                <thead>\n                                    <tr>\n                                        <th nzWidth=\"20px\">STT</th>\n\n                                        <th nzWidth=\"120px\">\n                                            Tên biến thể\n\n                                        </th>\n                                        <th>Thuộc chủng loại</th>\n                                        <th>Màu sắc</th>\n                                        <th>Hình ảnh</th>\n                                        <!-- <th>Tình trạng</th> -->\n                                        <th></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let data of nzTable.data ; index as i; \">\n                                        <td>{{i+1}}</td>\n\n                                        <td>{{ data.TenBienThe }}</td>\n                                        <td>{{ data.ChungLoais.TenChungLoai }}</td>\n                                        <td>{{ data.MauSac }}</td>\n                                        <td>\n                                            <img [src]=\"data.Mahas\" style=\"width: 100px\" /></td>\n                                        <td>\n                                            <ng-container *ngIf=\"data.TinhTrang == true\">\n                                                <span class=\"active\"><i nz-icon nzType=\"check-circle\" nzTheme=\"outline\"></i>Còn hàng</span>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"data.TinhTrang == false\">\n                                                <span class=\"locked\"><i nz-icon nzType=\"lock\" nzTheme=\"outline\"></i>Hết hàng</span>\n                                            </ng-container>\n                                        </td>\n                                        <td>\n                                            <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"add(data)\">\n                                                <i nz-icon nzType=\"plus\"></i>Ảnh hiển thị\n                                              </button>\n                                            <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"view(data.MaBienThe)\">\n                                    <i nz-icon nzType=\"eye\"></i>Xem\n                                  </button>\n                                            <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"edit(data)\">\n                                    <i nz-icon nzType=\"edit\"></i>Sửa\n                                  </button>\n                                            <!-- <button nz-button nzType=\"danger\" nzShape=\"round\">\n                                    <i nz-icon nzType=\"delete\"></i>Xóa\n                                  </button> -->\n                                        </td>\n                                    </tr>\n                                </tbody>\n\n                            </nz-table>\n\n                        </div>\n                    </div>\n                </div>\n            </nz-tab>\n            <nz-tab nzTitle=\"Chi tiết\">\n                <div class=\"wrap\">\n                    <div class=\"content\">\n                        <div class=\"content\">\n                            <nz-descriptions nzTitle=\"Đôi nét giới thiệu: \">\n                                <!-- <nz-descriptions-item nzTitle=\"Tên chủng loại: \">\n                        </nz-descriptions-item> -->\n                                <nz-descriptions-item nzTitle=\"Màu sắc đặc trưng: \">{{selected.MauSac}}</nz-descriptions-item>\n                            </nz-descriptions>\n                            <nz-descriptions>\n                                <nz-descriptions-item nzTitle=\"Kích thước tối đa: \">{{selected.KichThuocToiDa}}</nz-descriptions-item>\n                            </nz-descriptions>\n                            <nz-descriptions>\n                                <nz-descriptions-item nzTitle=\"Tính cách: \">{{selected.TinhCach}}</nz-descriptions-item>\n                            </nz-descriptions>\n                            <nz-descriptions>\n                                <nz-descriptions-item nzTitle=\"Điều kiện nước\">{{selected.DieuKienNuoc}}</nz-descriptions-item>\n                            </nz-descriptions>\n                            <nz-descriptions>\n                                <nz-descriptions-item nzTitle=\"Chế độ ăn: \">{{selected.CheDoAn}}</nz-descriptions-item>\n                            </nz-descriptions>\n                            <nz-descriptions>\n                                <nz-descriptions-item nzTitle=\"Mức độ chăm sóc: \">{{selected.MucDoChamSoc}}</nz-descriptions-item>\n                            </nz-descriptions>\n                            <nz-descriptions nzTitle=\"Mô tả chi tiết: \">\n                                <nz-descriptions-item>\n                                    <div [innerHtml]='selected.MoTa'></div>\n                                    <!-- {{selected.MoTa}} -->\n                                </nz-descriptions-item>\n                            </nz-descriptions>\n                            <nz-descriptions nzTitle=\"Cách chăm sóc: \">\n                                <nz-descriptions-item>\n                                    <div [innerHtml]='selected.CachChamSoc'></div>\n                                    <!-- {{selected.CachChamSoc}} -->\n                                </nz-descriptions-item>\n                            </nz-descriptions>\n                        </div>\n\n                    </div>\n                </div>\n            </nz-tab>\n\n\n        </nz-tabset>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên chủng loại</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên chủng loại!\">\n                    <input nz-input placeholder=\"Tên chủng loại\" [(ngModel)]=\"chungloaiDto.TenChungLoai\" type=\"text\" formControlName=\"_ipText_TenChungLoai\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Màu sắc</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập màu sắc!\">\n                    <input nz-input [(ngModel)]=\"chungloaiDto.MauSac\" placeholder=\"Màu sắc\" formControlName=\"_ipTextarea_MauSac\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n\n\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Chế độ ăn </nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập chế độ ăn!\">\n\n                    <input nz-input [(ngModel)]=\"chungloaiDto.CheDoAn\" placeholder=\"Ăn tạp\" formControlName=\"_ipTextarea_CheDoAn\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tính cách </nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng tính cách !\">\n\n                    <input nz-input placeholder=\"Hòa bình\" [(ngModel)]=\"chungloaiDto.TinhCach\" type=\"text\" formControlName=\"_ipText_TinhCach\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Mức độ chăm sóc</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập mức độ chăm sóc!\">\n\n                    <input nz-input [(ngModel)]=\"chungloaiDto.MucDoChamSoc\" placeholder=\"Dễ dàng\" formControlName=\"_ipTextarea_MucDoChamSoc\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Điều kiện nước</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập điều kiện nước!\">\n\n                    <input nz-input placeholder=\"Điều kiện nước\" [(ngModel)]=\"chungloaiDto.DieuKienNuoc\" type=\"text\" formControlName=\"_ipText_DieuKienNuoc\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label>Kích thước tối đa</nz-form-label>\n                <nz-form-control>\n\n                    <input nz-input placeholder=\"Kích thước tối đa\" [(ngModel)]=\"chungloaiDto.KichThuocToiDa\" type=\"text\" formControlName=\"_ipText_KichThuocToiDa\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label>Mô tả </nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor formControlName=\"_ipTextarea_MoTa\" [(ngModel)]=\"chungloaiDto.MoTa\"></ckeditor>\n\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"24\">\n            <nz-form-item>\n                <nz-form-label>Cách chăm sóc</nz-form-label>\n                <nz-form-control>\n\n                    <ckeditor [(ngModel)]=\"chungloaiDto.CachChamSoc\" formControlName=\"_ipTextarea_CachChamSoc\"></ckeditor>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle | uppercase}}</nz-page-header-title>\n    <nz-page-header-extra>\n        <input nz-input placeholder=\"Tìm theo tên hoặc màu sắc\" [(ngModel)]=\"sName\" type=\"text\" />\n        <!-- button create -->\n        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"create()\">\n  <i nz-icon nzType=\"plus\"></i>Thêm chủng loại\n</button>\n\n    </nz-page-header-extra>\n\n    <nz-page-header-content>\n\n\n        <!-- data table -->\n        <nz-table #Table nzBordered [nzData]=\"dataSource\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th> Tên chủng loại </th>\n                    <th>Màu sắc</th>\n                    <th>Tính cách</th>\n                    <th>Kích thước tối đa</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of Table.data | filterChungLoai: sName ; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.TenChungLoai}} </td>\n                    <td>{{data.MauSac}} </td>\n                    <td>{{data.TinhCach}} </td>\n                    <td>{{data.KichThuocToiDa}} </td>\n                    <td>\n                        <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"view(data.MaChungLoai)\">\n                <i nz-icon nzType=\"eye\"></i>Xem\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"edit(data)\">\n                <i nz-icon nzType=\"edit\"></i>Sửa\n              </button>\n\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/image-management/img-bienthe/img-list/img-list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/image-management/img-bienthe/img-list/img-list.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n\n    <nz-page-header-extra>\n        <!-- button create -->\n        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"createNhanVien()\">\n  <i nz-icon nzType=\"plus\"></i>Thêm hình ảnh cho biến thể\n</button>\n\n    </nz-page-header-extra>\n    <!--content-->\n    <nz-page-header-content>\n        <!-- data table -->\n        <nz-table #employeeTable [nzData]=\"dataSource\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th>Biến thể</th>\n                    <th>Hình ảnh</th>\n                    <th> </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of employeeTable.data; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.BienThe.TenBienThe}}</td>\n                    <td>{{data.TenHinhAnh}}.png</td>\n\n                    <!-- <td><img src={{data.DuongDan}} /></td> -->\n                    <td>\n                        <!-- <nz-avatar nzIcon=\"user\" nzSrc=\"{{data.DuongDan}}\"></nz-avatar> -->\n                        <img [src]=\"data.DuongDan\" style=\"width: 100px\" />\n                    </td>\n\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên hình ảnh</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên hình ảnh!\">\n                    <input nz-input placeholder=\"Tên hình ảnh\" [(ngModel)]=\"hinhanhDto.TenHinhAnh\" type=\"text\" formControlName=\"_ipText_lastName\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n\n        <!-- //radio -->\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Chọn ảnh hiển thị</nz-form-label>\n                <nz-form-control nzErrorTip=\"!\">\n                    <nz-radio-group formControlName=\"_rdo_gender\" [(ngModel)]=\"hinhanhDto.ChonAvt\">\n                        <label nz-radio nzValue=\"False\">Chọn</label>\n                        <label nz-radio nzValue=\"True\">Không chọn</label>\n\n                    </nz-radio-group>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Biến thể được gán hình ảnh</nz-form-label>\n                <nz-form-control>\n                    <nz-select style=\"width: 100%\" nzPlaceHolder=\"Vui lòng biến thể được gán hình ảnh\" nzShowSearch formControlName=\"_selectBox_employeePostition\" [(ngModel)]=\"hinhanhDto.MaBienThe\">\n                        <ng-container *ngFor=\"let item of listBienThe\">\n                            <nz-option nzLabel=\"{{item.TenBienThe}}\" nzValue=\"{{item.MaBienThe}}\"></nz-option>\n                        </ng-container>\n                    </nz-select>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n\n\n\n    </div>\n\n\n\n    <div nz-row [nzGutter]=\"24\">\n\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label>Hình ảnh</nz-form-label>\n                <nz-form-control>\n                    <nz-upload class=\"avatar-uploader\" nzAction=\"https://www.mocky.io/v2/5cc8019d300000980a055e76\" nzName=\"_ipUpload_image\" nzListType=\"picture-card\" [nzShowUploadList]=\"false\" [nzBeforeUpload]=\"beforeUpload\" (nzChange)=\"handleChange($event)\">\n                        <ng-container *ngIf=\"!avatarUrl\">\n                            <i class=\"upload-icon\" nz-icon [nzType]=\"loading ? 'loading' : 'plus'\"></i>\n                            <div class=\"ant-upload-text\">Upload</div>\n                        </ng-container>\n                        <img *ngIf=\"avatarUrl\" [src]=\"avatarUrl\" style=\"width: 100%\" />\n                    </nz-upload>\n                </nz-form-control>\n\n                <!-- <img [src]=\"avatarUrl\" style=\"width: 100%\" />\n                <input type=\"file\" (change)=\"seletedFile($event)\" /> -->\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n\n    </div>\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout class=\"login-page\">\r\n    <nz-content>\r\n        <div class=\"inner-content\">\r\n            <i class=\"lock-icon\" nz-icon nzType=\"unlock\" nzTheme=\"outline\"></i>\r\n            <h1 class=\"page-header\">{{pageTitle | uppercase}}</h1>\r\n            <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\r\n                <nz-alert class=\"alert-login\" *ngIf=\"isShowMessage\" nzType=\"error\" nzMessage=\"Tên đăng nhập hoặc mật khẩu không đúng\"></nz-alert>\r\n                <nz-form-item>\r\n                    <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên đăng nhập!\">\r\n                        <nz-input-group [nzPrefix]=\"prefixUser\">\r\n                            <input type=\"text\" nz-input formControlName=\"_ipText_userName\" placeholder=\"Tên đăng nhập\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập mật khẩu!\">\r\n                        <nz-input-group [nzPrefix]=\"prefixLock\">\r\n                            <input type=\"password\" nz-input formControlName=\"_ipText_password\" placeholder=\"Mật khẩu\" />\r\n                        </nz-input-group>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n                <nz-form-item>\r\n                    <nz-form-control>\r\n                        <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">Đăng nhập</button>\r\n                    </nz-form-control>\r\n                </nz-form-item>\r\n            </form>\r\n            <ng-template #prefixUser><i nz-icon nzType=\"user\"></i></ng-template>\r\n            <ng-template #prefixLock><i nz-icon nzType=\"lock\"></i></ng-template>\r\n        </div>\r\n    </nz-content>\r\n    <nz-footer style=\"text-align: center;\">{{pageFooter | uppercase}}</nz-footer>\r\n</nz-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\r\n    <nz-page-header-title>{{pageTitle}}</nz-page-header-title>\r\n    <nz-page-header-extra>\r\n        <button nz-button nzType=\"default\" nzShape=\"round\" [routerLink]=\"'/admin/nhanvien-management'\">\r\n        <i nz-icon nzType=\"arrow-left\"></i>Quay lại danh sách nhân viên\r\n      </button>\r\n        <button nz-button nzType=\"primary\" nzShape=\"round\" *ngIf=\"hasNhanvien\" (click)=\"edit(selectedNhanvien)\">\r\n        <i nz-icon nzType=\"edit\"></i>Sửa\r\n      </button>\r\n    </nz-page-header-extra>\r\n    <!--content-->\r\n    <nz-page-header-content *ngIf=\"hasNhanvien\">\r\n        <div class=\"wrap\">\r\n            <div class=\"extra-content\">\r\n                <nz-avatar [ngStyle]=\"{ 'background-color': color }\" [nzText]=\"text\" nzSize=\"large\" style=\"vertical-align: middle;\"></nz-avatar>\r\n                <button nz-button [nzType]=\"'dashed'\" (click)=\"change()\" style=\"margin-left: 16px; vertical-align: middle;\">\r\n                    <span>Change</span>\r\n                  </button>\r\n            </div>\r\n            <div class=\"content\">\r\n                <div class=\"content\">\r\n                    <nz-descriptions [nzColumn]=\"3\">\r\n                        <nz-descriptions-item nzTitle=\"Số CMND\" [nzSpan]=\"1\">{{selectedNhanvien.CMND}}\r\n                        </nz-descriptions-item>\r\n                        <nz-descriptions-item nzTitle=\"Họ và tên\" [nzSpan]=\"1\">{{selectedNhanvien.HoLot}} {{selectedNhanvien.TenNhanVien}}\r\n                        </nz-descriptions-item>\r\n\r\n                        <nz-descriptions-item nzTitle=\"Ngày sinh\" [nzSpan]=\"1\">{{selectedNhanvien.NgaySinh | date :'dd/MM/yyyy'}}\r\n                        </nz-descriptions-item>\r\n                        <nz-descriptions-item nzTitle=\"Giới tính\" [nzSpan]=\"1\">\r\n                            <!-- <ng-container *ngIf=\"selectedNhanvien.GioiTinh == 'False'\">Nam</ng-container>\r\n                            \r\n                            <ng-container *ngIf=\"selectedNhanvien.GioiTinh == 'True'\">Nữ</ng-container> -->\r\n\r\n                            <ng-container *ngIf=\"selectedNhanvien.GioiTinh == true\">\r\n                                Nam\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"selectedNhanvien.GioiTinh == false\">Nữ</ng-container>\r\n\r\n                        </nz-descriptions-item>\r\n                        <nz-descriptions-item nzTitle=\"SĐT\" [nzSpan]=\"1\">{{selectedNhanvien.Sdt}}</nz-descriptions-item>\r\n                        <nz-descriptions-item nzTitle=\"Địa chỉ\" [nzSpan]=\"1\">{{selectedNhanvien.DiaChi}}</nz-descriptions-item>\r\n                        <nz-descriptions-item nzTitle=\"Email\" [nzSpan]=\"1\">{{selectedNhanvien.Email}}</nz-descriptions-item>\r\n\r\n                    </nz-descriptions>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nz-page-header-content>\r\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Tao hoac chinh sua thong tin nhan vien -->\n<form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Số CMND:</nz-form-label>\n                <nz-form-control nzHasFeedback [nzErrorTip]=\"employeeIdErrorTpl\">\n                    <input nz-input placeholder=\"Số chứng minh nhân dân\" [(ngModel)]=\"nhanvienDto.CMND\" type=\"text\" formControlName=\"_ipText_CMND\" minlength=\"8\" maxlength=\"12\" />\n                    <ng-template #employeeIdErrorTpl let-control>\n                        <ng-container *ngIf=\"control.hasError('maxlength')\">Số chứng minh nhân dân tối đa 12 kí tự</ng-container>\n                        <ng-container *ngIf=\"control.hasError('minlength')\">Số chứng minh nhân dân ít nhất 8 kí tự</ng-container>\n                        <ng-container *ngIf=\"control.hasError('required')\">Vui lòng nhập Số chứng minh nhân dân!</ng-container>\n                    </ng-template>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Họ lót</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập Họ lót nhân viên!\">\n                    <input nz-input placeholder=\"Họ lót nhân viên\" [(ngModel)]=\"nhanvienDto.HoLot\" type=\"text\" formControlName=\"_ipText_HoLot\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Tên nhân viên</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập tên nhân viên!\">\n                    <input nz-input placeholder=\"Tên nhân viên\" [(ngModel)]=\"nhanvienDto.TenNhanVien\" type=\"text\" formControlName=\"_ipText_TenNhanVien\" />\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Ngày sinh</nz-form-label>\n                <nz-form-control nzHasFeedback nzErrorTip=\"Vui lòng nhập ngày sinh nhân viên!\">\n                    <nz-date-picker formControlName=\"_ipDate_NgaySinh\" [(ngModel)]=\"nhanvienDto.NgaySinh\" [nzFormat]=\"dateFormat\" nzPlaceHolder=\"Chọn ngày sinh\"></nz-date-picker>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <!-- //radio -->\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Giới tính</nz-form-label>\n                <nz-form-control nzErrorTip=\"Vui lòng chọn giới tính nhân viên!\">\n                    <nz-radio-group formControlName=\"_rdo_gender\" [(ngModel)]=\"nhanvienDto.GioiTinh\">\n                        <label nz-radio [nzValue]=\"false\">Nữ</label>\n                        <label nz-radio [nzValue]=\"true\">Nam</label>\n\n                    </nz-radio-group>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Email</nz-form-label>\n                <nz-form-control nzHasFeedback [nzErrorTip]=\"emailErrorTpl\">\n                    <input nz-input placeholder=\"Email\" [(ngModel)]=\"nhanvienDto.Email\" type=\"text\" formControlName=\"_ipText_email\" />\n                    <ng-template #emailErrorTpl let-control>\n                        <ng-container *ngIf=\"control.hasError('email')\">\n                            Vui lòng nhập email hợp lệ!\n                        </ng-container>\n                        <ng-container *ngIf=\"control.hasError('required')\">\n                            Vui lòng nhập email nhân viên!\n                        </ng-container>\n                    </ng-template>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label nzRequired>Số điện thoại</nz-form-label>\n                <nz-form-control nzHasFeedback [nzErrorTip]=\"SdtErrorTpl\">\n                    <input nz-input placeholder=\"SĐT\" [(ngModel)]=\"nhanvienDto.Sdt\" type=\"text\" formControlName=\"_ipText_Sdt\" maxlength=\"11\" />\n                    <ng-template #SdtErrorTpl let-control>\n                        <ng-container *ngIf=\"control.hasError('maxlength')\">Số điện thoại tối đa 11 kí tự</ng-container>\n                        <ng-container *ngIf=\"control.hasError('required')\">Vui lòng nhập Số điện thoại nhân viên!</ng-container>\n                    </ng-template>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\">\n            <nz-form-item>\n                <nz-form-label>Địa chỉ</nz-form-label>\n                <nz-form-control>\n                    <textarea rows=\"4\" nz-input [(ngModel)]=\"nhanvienDto.DiaChi\" placeholder=\"Địa chỉ\" formControlName=\"_ipTextarea_DiaChi\"></textarea>\n                </nz-form-control>\n            </nz-form-item>\n        </div>\n    </div>\n    <div nz-row [nzGutter]=\"24\">\n    </div>\n    <div *nzModalFooter>\n        <button nz-button nzType=\"default\" (click)=\"handleCancelButton()\">Hủy</button>\n        <button nz-button nzType=\"primary\" [nzLoading]=\"isConfirmLoading\" [disabled]=\"!validateForm.valid\" (click)=\"handleSubmitButton()\">Lưu</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header>\n    <nz-page-header-title>{{pageTitle | uppercase}}</nz-page-header-title>\n    <nz-page-header-extra>\n        <input nz-input placeholder=\"Tìm theo tên hoặc CMND hoặc Sđt hoặc Email\" [(ngModel)]=\"sName\" type=\"text\" />\n        <!-- button create -->\n        <button nz-button nzType=\"primary\" nzShape=\"round\" class=\"btn-create\" (click)=\"createNhanVien()\">\n  <i nz-icon nzType=\"plus\"></i>Thêm nhân viên\n</button>\n    </nz-page-header-extra>\n    <nz-page-header-content>\n        <!-- data table -->\n        <nz-table #nhanvienTable nzBordered [nzData]=\"dataSource\" [nzLoading]=\"isConfirmLoading\">\n            <thead>\n                <tr>\n                    <th>STT</th>\n                    <th>Họ và tên </th>\n                    <th>Ngày Sinh</th>\n                    <th>Giới Tính</th>\n                    <th>SĐT</th>\n                    <th>Email</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let data of nhanvienTable.data | filterNV: sName ; index as i; \">\n                    <td>{{i+1}}</td>\n                    <td>{{data.HoLot}} {{data.TenNhanVien}}</td>\n                    <td> {{data.NgaySinh | date :'dd/MM/yyyy'}}</td>\n                    <!-- <td>\n                        <ng-container *ngIf=\"data.GioiTinh == 'False'\"> Nam </ng-container>\n                        <ng-container *ngIf=\"data.GioiTinh == 'True'\"> Nữ </ng-container>\n                    </td> -->\n                    <td>\n                        <ng-container *ngIf=\"data.GioiTinh == true\">\n                            Nam\n                        </ng-container>\n                        <ng-container *ngIf=\"data.GioiTinh == false\">Nữ</ng-container>\n                    </td>\n                    <td>{{data.Sdt }} </td>\n                    <td>{{data.Email }}</td>\n                    <td>\n                        <button nz-button nzType=\"default\" nzShape=\"round\" (click)=\"viewNhanvien(data.MaNhanVien)\">\n                <i nz-icon nzType=\"eye\"></i>Xem\n              </button>\n                        <button nz-button nzType=\"primary\" nzShape=\"round\" (click)=\"editNhanVien(data)\">\n                <i nz-icon nzType=\"edit\"></i>Sửa\n              </button>\n                        <button nz-button nzType=\"danger\" nzShape=\"round\" (click)=\"confirmDelete(data)\">\n                <i nz-icon nzType=\"delete\"></i>Xóa\n              </button>\n                    </td>\n                </tr>\n            </tbody>\n        </nz-table>\n    </nz-page-header-content>\n</nz-page-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout class=\"app-layout\">\r\n    <nz-sider class=\"menu-sidebar\" style=\"background: #fff;\" nzCollapsible nzWidth=\"256px\" nzBreakpoint=\"md\" [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"null\">\r\n        <div class=\"sidebar-logo\" style=\"background: #1890ff;\">\r\n            <a href=\"#\" target=\"_blank\">\r\n                <!-- <img src=\"https://ng.ant.design/assets/img/logo.svg\" alt=\"logo\"> -->\r\n                <h1>ADMIN</h1>\r\n            </a>\r\n        </div>\r\n        <ul nz-menu nzTheme=\"light-mode\" nzMode=\"inline\" [nzInlineCollapsed]=\"isCollapsed\">\r\n            <li nz-submenu nzOpen nzTitle=\"QL Danh Mục\" nzIcon=\"dashboard\">\r\n                <ul>\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/chung-loai\">Chủng loại</a>\r\n                    </li>\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/bien-the\">Biến thể</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </li>\r\n            <li nz-submenu nzOpen nzTitle=\"QL Nhân Viên\" nzIcon=\"form\">\r\n                <ul>\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/nhanvien-management\">Nhân viên</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li nz-submenu nzOpen nzTitle=\"Quản lý điều trị bệnh\" nzIcon=\"form\">\r\n                <ul>\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/cac-loai-benh\">Các loại bệnh</a>\r\n                    </li>\r\n\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/cac-loai-thuoc\">Các loại thuốc</a>\r\n                    </li>\r\n\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/trieu-chung\">Triệu chứng</a>\r\n                    </li>\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/trieu-chung-benh\">Triệu chứng bệnh</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </li>\r\n            <li nz-submenu nzOpen nzTitle=\"QL hình ảnh\" nzIcon=\"user\">\r\n                <ul>\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/imgBT-management\">Hình ảnh biến thể</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li nz-submenu nzOpen nzTitle=\"QL Tài khoản\" nzIcon=\"user\">\r\n                <ul>\r\n                    <li nz-menu-item nzMatchRouter>\r\n                        <a routerLink=\"/admin/users-management\">Danh sách người dùng</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <!-- <ng-container *ngTemplateOutlet=\"menuTpl; context: { $implicit: menus }\"></ng-container>\r\n            <ng-template #menuTpl let-menus>\r\n                <ng-container *ngFor=\"let menu of menus\">\r\n                    <li nzMatchRouter *ngIf=\"!menu.children\" nz-menu-item [nzPaddingLeft]=\"menu.level * 24\" [nzDisabled]=\"menu.disabled\" [nzSelected]=\"menu.selected\">\r\n                        <a routerLink=\"/{{ menu.path }}\">{{ menu.title }}{{menu.children}}</a>\r\n                    </li>\r\n                    <li nzMatchRouter *ngIf=\"menu.children\" nz-submenu [nzPaddingLeft]=\"menu.level * 24\" [nzOpen]=\"menu.open\" [nzTitle]=\"menu.title\" [nzIcon]=\"menu.icon\" [nzDisabled]=\"menu.disabled\">\r\n                        <ul>\r\n                            <ng-container *ngTemplateOutlet=\"menuTpl; context: { $implicit: menu.children }\"></ng-container>\r\n                        </ul>\r\n                    </li>\r\n                </ng-container>\r\n            </ng-template> -->\r\n        </ul>\r\n    </nz-sider>\r\n    <nz-layout>\r\n        <nz-header style=\"background: #fff; padding:0;\">\r\n            <i class=\"trigger\" nz-icon [type]=\"isCollapsed ? 'menu-unfold' : 'menu-fold'\" (click)=\"isCollapsed = !isCollapsed\"></i>\r\n            <div class=\"profile\">\r\n                <h6 class=\"displayname\"><span>Xin chào, </span></h6>\r\n                <nz-button-group>\r\n                    <button nz-button nz-dropdown nzShape=\"circle\" [nzDropdownMenu]=\"userMenu\" nzPlacement=\"bottomRight\">\r\n                    <i nz-icon nzType=\"user\"></i>\r\n                  </button>\r\n                </nz-button-group>\r\n                <nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\r\n                    <ul nz-menu>\r\n                        <li nz-menu-item>Cập nhật tài khoản</li>\r\n                        <li nz-menu-item><a (click)=\"showModalChangePassword(currentUser)\">Đổi mật khẩu</a>\r\n                        </li>\r\n                        <li nz-menu-divider></li>\r\n                        <li nz-menu-item><a (click)=\"logout()\">Đăng xuất</a></li>\r\n                    </ul>\r\n                </nz-dropdown-menu>\r\n            </div>\r\n        </nz-header>\r\n        <nz-content>\r\n            <div class=\"inner-content\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </nz-content>\r\n        <nz-footer style=\"text-align: center;\">{{pageFooter | uppercase}}</nz-footer>\r\n    </nz-layout>\r\n</nz-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/benh/benh-list/benh-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/benh/benh-list/benh-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ##### Breadcrumb Area Start ##### -->\n<div class=\"breadcrumb-area bg-img bg-overlay jarallax\" style=\"background-image: url('../../../..//assets/img/bg-img/sidle3.jpg');\">\n    <div class=\"container h-100\">\n        <div class=\"row h-100 align-items-center\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb-text\">\n                    <h2>Bệnh cá Koi và thuốc chữa\n                    </h2>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"famie-breadcrumb\">\n    <div class=\"container\">\n        <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"index.html\"><i class=\"fa fa-home\"></i> Home</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Bệnh cá Koi và thuốc chữa\n                </li>\n            </ol>\n        </nav>\n    </div>\n</div>\n<!-- ##### Breadcrumb Area End ##### -->\n\n<!-- ##### Blog Area Start ##### -->\n<section class=\"famie-blog-area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <!-- Posts Area -->\n            <div class=\"col-12 col-md-8\">\n                <div class=\"posts-area\">\n                    <!-- </div> -->\n                    <div hidden *ngIf=\"expression; then hello; else employeeEdit\"></div>\n                    <ng-template #hello>\n                        <!-- <div class=\"posts-area\"> -->\n\n                        <!-- Single Blog Post Area -->\n                        <div style=\"margin-bottom: 15px;\n                        border-bottom: 1px solid #EBEBEB;\n                        padding-bottom: 15px;\n                        cursor: pointer;\" class=\"single-blog-post-area d-flex align-items-center\" data-wow-delay=\"300ms\" *ngFor=\"let data of dataSource\">\n                            <div class=\"col-xs-12 col-sm-4 col-md-3\">\n                                <img [src]=\"data.HinhAnh\" alt=\"\" style=\"width: 180px; margin-right: 30px;\" class=\"post-thumb\">\n                            </div>\n\n                            <div class=\"col-xs-12 col-sm-8 col-md-9\">\n                                <!-- <div class=\"post-content\"> -->\n                                <h3 class=\"head\">{{data.TenBenh}}</h3>\n                                <p [innerHtml]='data.CachDieuTri'></p>\n                            </div>\n                            <!-- <div class=\"post-date\">18 Aug 2018</div> -->\n                            <!-- </div>\n                            <br>\n\n                            <hr> -->\n                        </div>\n                        <!-- </div> -->\n                    </ng-template>\n\n                    <ng-template #employeeEdit>\n                        <h4>Kết quả tìm kiếm: </h4>\n                        <!-- <div class=\"posts-area\"> -->\n                        <div class=\"single-blog-post-area d-flex align-items-center\" data-wow-delay=\"300ms\" *ngFor=\"let data of dataSourceTT\">\n                            <!-- <h6>Post on <a href=\"#\" class=\"post-date\">18 Aug 2018</a> / <a href=\"#\" class=\"post-author\">Peter Crough</a></h6> -->\n\n\n                            <!-- <img [src]=\"data.HinhAnh\" alt=\"\" style=\"width: 180px; margin-right: 30px;\" class=\"post-thumb\"> -->\n\n                            <div class=\"post-content\">\n                                <a href=\"#\" class=\"post-title\">{{data.Benh.TenBenh}}</a>\n                                <div class=\"post-date\">18 Aug 2018</div>\n                            </div>\n                        </div>\n                        <!-- </div> -->\n\n                    </ng-template>\n\n                    <!-- Single Blog Post Area -->\n                    <!-- <div class=\"single-blog-post-area mb-50 wow fadeInUp\" data-wow-delay=\"500ms\">\n                        <h6>Post on <a href=\"#\" class=\"post-date\">18 Aug 2018</a> / <a href=\"#\" class=\"post-author\">Peter Crough</a></h6>\n                        <a href=\"#\" class=\"post-title\">Cattle marts: Cows take a hit at the ringside</a>\n                        <img src=\"../../../../assets/img/bg-img/11.jpg\" alt=\"\" class=\"post-thumb\">\n                        <p class=\"post-excerpt\">\n                            Nunc aliquet, justo non commodo conguet, denim, action bibendum purus selecao samuel eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis quam at...\n                        </p>\n                    </div> -->\n\n                    <!-- Single Blog Post Area -->\n                    <!-- <div class=\"single-blog-post-area mb-50 wow fadeInUp\" data-wow-delay=\"700ms\">\n                        <h6>Post on <a href=\"#\" class=\"post-date\">18 Aug 2018</a> / <a href=\"#\" class=\"post-author\">Peter Crough</a></h6>\n                        <a href=\"#\" class=\"post-title\">Malting barley price negotiations set to commence</a>\n                        <img src=\"../../../../assets/img/bg-img/11.jpg\" alt=\"\" class=\"post-thumb\">\n                        <p class=\"post-excerpt\">\n                            Nunc aliquet, justo non commodo conguet, denim, action bibendum purus selecao samuel eget libero. Maecenas ac viverra enim, et laoreet lacus. Etiam nisi diam, sagittis quam at...\n                        </p>\n                    </div> -->\n\n                </div>\n\n                <!-- pagination -->\n                <!-- <nav>\n                    <ul class=\"pagination wow fadeInUp\" data-wow-delay=\"900ms\">\n                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n                    </ul>\n                </nav> -->\n\n            </div>\n            <!-- Sidebar Area -->\n            <div class=\"col-12 col-md-4\">\n                <div class=\"sidebar-area\">\n\n                    <!-- Single Widget Area -->\n                    <div class=\"single-widget-area\" style=\"margin-bottom: 30px;\">\n                        <form action=\"#\" method=\"post\" class=\"search-widget-form\">\n                            <input type=\"search\" class=\"form-control\" placeholder=\"Search\">\n                            <button type=\"submit\"><i class=\"icon_search\" aria-hidden=\"true\"></i></button>\n                        </form>\n                    </div>\n                    <div class=\"single-widget-area\">\n                        <h4>Tra cứu bệnh: </h4>\n                        <h6>Các triệu chứng thường gặp </h6>\n                        <!-- <div class=\"posts-area\"> -->\n                        <!-- Checkbox -->\n                        <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" novalidate>\n                            <!-- Form elements goes here -->\n                            <div>\n\n                                <label *ngFor=\"let data of dataSourceListTT; let i=index\">\n                             <input type=\"checkbox\"  [value]=\"data.MaTrieuChung\" (change)=\"onCheckboxChange($event)\" />\n                            {{data.TenTrieuChung}}\n                            </label>\n                            </div>\n                            <!-- <label>\n                                <input type=\"checkbox\" [checked]=\"uncheck\" (change)=\"unCheckAll($event)\">\n                                None of Above\n                              </label> -->\n                            <input type=\"submit\" value=\"Tìm\">\n                        </form>\n\n                    </div>\n                    <!-- Single Widget Area -->\n                    <div class=\"single-widget-area\">\n                        <!-- Title -->\n                        <h5 class=\"widget-title\">Danh mục</h5>\n                        <!-- Cata List -->\n                        <ul class=\"cata-list\">\n                            <li><a href=\"#\">Recipe Collections</a></li>\n                            <li><a href=\"#\">The advantage of knowledge</a></li>\n                            <li><a href=\"#\">Organic Farming</a></li>\n                            <li><a href=\"#\">Farming &amp; Agricultural</a></li>\n                            <li><a href=\"#\">Special Diet</a></li>\n                            <li><a href=\"#\">How to Manage Soil Fertility</a></li>\n                        </ul>\n                    </div>\n\n                    <!-- Single Widget Area -->\n                    <div class=\"single-widget-area\">\n                        <!-- Title -->\n                        <h5 class=\"widget-title\">Tin tức </h5>\n\n                        <!-- Single Recent News Start -->\n                        <div class=\"single-recent-blog style-2 d-flex align-items-center\">\n                            <div class=\"post-thumbnail\">\n                                <img src=\"\" alt=\"\">\n                            </div>\n                            <div class=\"post-content\">\n                                <a href=\"#\" class=\"post-title\">US milk production continues its upward trajectory for 2018</a>\n                                <div class=\"post-date\">18 Aug 2018</div>\n                            </div>\n                        </div>\n\n                        <!-- Single Recent News Start -->\n                        <div class=\"single-recent-blog style-2 d-flex align-items-center\">\n                            <div class=\"post-thumbnail\">\n                                <img src=\"\" alt=\"\">\n                            </div>\n                            <div class=\"post-content\">\n                                <a href=\"#\" class=\"post-title\">USDA'S crop ratings more ahead for corn, drop for soybeans</a>\n                                <div class=\"post-date\">18 Aug 2018</div>\n                            </div>\n                        </div>\n\n                        <!-- Single Recent News Start -->\n                        <div class=\"single-recent-blog style-2 d-flex align-items-center\">\n                            <div class=\"post-thumbnail\">\n                                <img src=\"\" alt=\"\">\n                            </div>\n                            <div class=\"post-content\">\n                                <a href=\"#\" class=\"post-title\">Auction report: Bids aplenty for massive John Deere collection</a>\n                                <div class=\"post-date\">18 Aug 2018</div>\n                            </div>\n                        </div>\n\n                        <!-- Single Recent News Start -->\n                        <div class=\"single-recent-blog style-2 d-flex align-items-center\">\n                            <div class=\"post-thumbnail\">\n                                <img src=\"\" alt=\"\">\n                            </div>\n                            <div class=\"post-content\">\n                                <a href=\"#\" class=\"post-title\">Wool prices expected to remain competitive as demand is grow</a>\n                                <div class=\"post-date\">18 Aug 2018</div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- Single Widget Area -->\n                    <div class=\"single-widget-area\">\n                        <!-- Title -->\n                        <h5 class=\"widget-title\">Tags</h5>\n                        <!-- Tags -->\n                        <ul class=\"famie-tags\">\n                            <li><a href=\"#\">All product</a></li>\n                            <li><a href=\"#\">Freshy Fruit</a></li>\n                            <li><a href=\"#\">Sweet Corn</a></li>\n                            <li><a href=\"#\">Chicken</a></li>\n                            <li><a href=\"#\">Organic</a></li>\n                            <li><a href=\"#\">Farm Practices</a></li>\n                            <li><a href=\"#\">Meat</a></li>\n                            <li><a href=\"#\">Special Recipe</a></li>\n                        </ul>\n                    </div>\n\n                    <!-- Single Widget Area -->\n                    <div class=\"single-widget-area\">\n                        <!-- Title -->\n                        <h5 class=\"widget-title\">Sản phẩm</h5>\n\n                        <!-- Single Best Products -->\n                        <div class=\"single-best-product d-flex align-items-center\">\n                            <!-- Product Thumbnail -->\n                            <!-- <div class=\"product-thumbnail\">\n                                <a href=\"#\"><img src=\"\" alt=\"\"></a>\n                            </div> -->\n                            <!-- Product Info -->\n                            <!-- <div class=\"product-info\">\n                                <a href=\"#\" class=\"pro-name\">Strawberry</a>\n                                <h6>$17.99</h6>\n                                <div class=\"product-rating\">\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                </div>\n                            </div> -->\n                        </div>\n\n                        <!-- Single Best Products -->\n                        <div class=\"single-best-product d-flex align-items-center\">\n                            <!-- Product Thumbnail -->\n                            <!-- <div class=\"product-thumbnail\">\n                                <a href=\"#\"><img src=\"\" alt=\"\"></a>\n                            </div> -->\n                            <!-- Product Info -->\n                            <!-- <div class=\"product-info\">\n                                <a href=\"#\" class=\"pro-name\">Pure Honey</a>\n                                <h6>$17.99</h6>\n                                <div class=\"product-rating\">\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                </div>\n                            </div> -->\n                        </div>\n\n                        <!-- Single Best Products -->\n                        <div class=\"single-best-product d-flex align-items-center\">\n                            <!-- Product Thumbnail -->\n                            <!-- <div class=\"product-thumbnail\">\n                                <a href=\"#\"><img src=\"\" alt=\"\"></a>\n                            </div> -->\n                            <!-- Product Info -->\n                            <!-- <div class=\"product-info\">\n                                <a href=\"#\" class=\"pro-name\">Green Apple</a>\n                                <h6>$17.99</h6>\n                                <div class=\"product-rating\">\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                </div>\n                            </div> -->\n                        </div>\n\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</section>\n<!-- ##### Blog Area End ##### -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/gioithieu/gioithieu.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/gioithieu/gioithieu.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ##### Our Products Area Start ##### -->\n<section class=\"our-products-area section-padding-100\" style=\"padding-top:unset; padding-bottom: unset;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Section Heading -->\n                <div class=\"section-heading text-center\">\n                    <p>Giới thiệu</p>\n                    <h2><span>Thông tin về KOIFS</span> </h2>\n                    <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <p>\n                        Hiện nay, thị trường cá cảnh đang phát triển rất mạnh và đa dạng về nhiều chủng loại, trong đó cá Koi Nhật đang là loài được khá nhiều người quan tâm và chọn làm thú nuôi cho mình bởi chúng thể hiện được sự độc đáo về màu sắc với nhiều kích cỡ khác nhau,\n                        từ đó thu hút được người nuôi cá cảnh cả nước nói chung. Tuy nhiên điều khiến cho mọi người cảm thấy lo lắng đó chính là chọn mua giống nuôi có đúng với chất lượng hoặc cam kết là cá được nhập từ Nhật hay không?. Thấu hiểu được\n                        điều đó nên Cá Koi KOIFS đã được hình thành và đây cũng chính là nơi đảm bảo cung cấp đến bạn nhiều giống loại cá Koi đúng chất lượng của Nhật.\n                    </p>\n                    <img style=\"margin-left: 20%;\" src=\"../../../assets/img/bg-img/du-hoc-Nhat-Ban-Koi-1.jpg\">\n\n                    <p style=\"margin-top: 1rem;\">\n                        Cá Koi KOIFS cung cấp nhiều giống cá quý như: Cá Koi Ai Goromo, Cá koi Kin Gin Rin, Cá Koi Ki Utsuri, Cá Koi Doitsu Sanke,Cá Koi Utshuri, Cá Koi Tancho, Cá Koi Taisho Sanke, Cá Koi Showa Sanshoku, Cá koi Showa Goromo, Cá koi Kohaku, Cá Koi Goshiki, Cá\n                        Koi Asagi,.. Nhiều khách hàng có thắc mắc tại sao lại cá Koi lại có nhiều tên gọi khác nhau như vậy? Thật ra những cách gọi này được bắt nguồn từ người Nhật, và họ đặc tên cá dựa trên sự khác biệt về hoa văn của thân, kiểu vây\n                        hoặc kiểu đuôi, từ đó cá có nhiều tên gọi để phân biệt.\n                    </p>\n                    <p>\n                        Cá Koi KOIFS là nơi cung cấp cho bạn nhiều giống cá Koi đạt chất lượng được nhập khẩu trực tiếp từ Nhật, chúng có nhiều màu sắc khác nhau như trắng, đỏ, đen, vàng, cam,.. tùy thuộc vào nhu cầu của quý khách mà bạn có thể chọn nuôi một giống cá cho phù\n                        hợp nhất. Đến với Cá Koi KOIFS quý khách sẽ được tư vấn đầy đủ các thông tin về cách thức chọn lựa giống, cách nuôi cá hoặc cách chăm sóc, xử lý khi cá gặp vấn đề,..\n                    </p>\n                    <p> Bên cạnh đó, trong quá trình nuôi sẽ tùy môi trường cá sẽ có những biểu hiện bất thường, website sẽ cung cấp thông tin các loại bệnh và khách hàng truy cập website sẽ tra cứu các triệu chứng của bệnh để tìm ra phương pháp và liệu trình\n                        điều trị phù hợp.\n                    </p>\n                    <img style=\"margin-left: 20%;\" src=\"../../../assets/img/bg-img/big21427511239.jpg\">\n\n                    <p style=\"margin-top: 1rem;\">\n                        Bên cạnh cung cấp cho quý khách hàng những giống cá Koi tốt nhất, khỏe mạnh nhất thì Cá Koi KOIFS còn không ngừng cung cấp những thông tin cần thiết về cẩm nang nuôi cá Koi, quý khách có thể vào trực tiếp hệ thống website: <b style=\"color: red; font-style: italic ;\">cakoinhat.com</b>                        để theo dõi thường xuyên, hoặc có thể liên hệ trực tiếp cùng chúng tôi để được tư vấn cụ thể và tận tình nhất mọi thông tin mà bạn cần biết về cá Koi. Ngoài ra chúng tôi cung cấp cá Koi với mức giá hấp dẫn nhất do đó quý khách\n                        hàng có thể an tâm khi chọn lựa cơ sở cung cấp cá Koi của chúng tôi.\n                    </p>\n                    <h5>\n                        Thông tin liên hệ tư vấn\n                    </h5>\n                    <h4>\n                        CÁ KOI KOIFS\n                    </h4>\n                    <ul>\n                        <li>\n                            Địa chỉ: Đường 3 tháng 2, Phường Xuân Khánh, Ninh Kiều, Cần Thơ\n                        </li>\n                        <li> Điện Thoại: +84 223 9000</li>\n                        <li> Email: cakoiKOIFS@gmail.com</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- ##### Our Products Area End ##### -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/index/index.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/index/index.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ##### Famie Benefits Area Start ##### -->\n<!-- <section class=\"famie-benefits-area section-padding-100-0 pb-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"benefits-thumbnail mb-50\">\n                    <img src=\"../../../assets/img/bg-img/sidle3.jpg\" alt=\"\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section> -->\n<!-- ##### Famie Benefits Area End ##### -->\n\n<!-- ##### About Us Area Start ##### -->\n<section class=\"about-us-area\" style=\"margin-top: 50px;\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n\n            <!-- About Us Content -->\n            <div class=\"col-12 col-md-8\">\n                <div class=\"about-us-content mb-100\">\n                    <!-- Section Heading -->\n                    <div class=\"section-heading\">\n                        <p>Giới thiệu</p>\n                        <h2><span>Đôi nét về Cá Koi</span></h2>\n                        <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                    </div>\n                    <p>Cá Koi chính là loài Quốc Ngư của nước Nhật Bản, chúng bắt nguồn từ loài cá chép và đã được thuần hóa và lai tạo để được nuôi dưỡng làm cảnh. Hiện nay cá Koi Nhật được phổ biến ở nhiều quốc gia khác nhau và đã có mặt tại Việt Nam trong\n                        nhiều năm qua. Ban đầu cá Koi được nuôi để làm lương thực dự trữ của người Nhật mỗi khi đông về, tuy nhiên sau thời gian nuôi chung thì người dân đã phát hiện chúng tự lai tạo cùng nhau và cho ra loài cá nhiều màu sắc sặc sỡ rất\n                        đẹp mắt. Từ đó người Nhật đã bắt đầu thực hiện lai tạo ra nhiều giống cá Koi khác nhau và được cung ứng đến khắp nơi trên thế giới. </p>\n                    <a routerLink=\"/trangchu/gioi-thieu\" class=\"btn famie-btn mt-30\">Xem thêm</a>\n                </div>\n            </div>\n\n            <!-- Famie Video Play -->\n            <div class=\"col-12 col-md-4\">\n                <div class=\"famie-video-play mb-100\">\n                    <img src=\"../../../assets/img/bg-img/silde2.jpg\" alt=\"\">\n\n                    <!-- Play Icon -->\n                    <a href=\"https://www.youtube.com/watch?v=71hfu-kq4XM\" class=\"play-icon\"><i class=\"fa fa-play\"></i></a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>\n<!-- ##### About Us Area End ##### -->\n\n\n\n<!-- ##### Our Products Area Start ##### -->\n<section class=\"our-products-area section-padding-100\" style=\"padding-top:unset; padding-bottom: unset;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Section Heading -->\n                <div class=\"section-heading text-center\">\n                    <p>Sản phẩm</p>\n                    <h2><span>Các giống Cá Koi</span> </h2>\n                    <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <!-- Single Product Area -->\n            <div class=\"col-12 col-sm-6 col-lg-3\" *ngFor=\"let data of dataSource\">\n                <div class=\"single-product-area mb-50 wow fadeInUp\" data-wow-delay=\"100ms\">\n                    <!-- Product Thumbnail -->\n                    <div class=\"product-thumbnail\">\n                        <img [src]=\"data.Mahas\" alt=\"\" style=\"height: 300px;\">\n                        <!-- Product Tags -->\n                        <span class=\"product-tags\">Hot</span>\n                        <!-- Product Meta Data -->\n                        <div class=\"product-meta-data\">\n                            <!-- <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Favourite\"><i class=\"icon_heart_alt\"></i></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Cart\"><i class=\"icon_cart_alt\"></i></a> -->\n                            <a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Chi tiết\" (click)=\"view(data.MaBienThe)\"><i class=\"arrow_left-right_alt\"></i></a>\n                        </div>\n                    </div>\n                    <!-- Product Description -->\n                    <div class=\"product-desc text-center pt-4\">\n                        <a href=\"#\" class=\"product-title\">{{data.TenBienThe}}</a>\n                        <h6 class=\"price\">Liên hệ đặt hàng</h6>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Single Product Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-3\">\n                <div class=\"single-product-area mb-50 wow fadeInUp\" data-wow-delay=\"300ms\"> -->\n            <!-- Product Thumbnail -->\n            <!-- <div class=\"product-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\"> -->\n            <!-- Product Meta Data -->\n            <!-- <div class=\"product-meta-data\">\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Favourite\"><i class=\"icon_heart_alt\"></i></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Cart\"><i class=\"icon_cart_alt\"></i></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Compare\"><i class=\"arrow_left-right_alt\"></i></a>\n                        </div>\n                    </div> -->\n            <!-- Product Description -->\n            <!-- <div class=\"product-desc text-center pt-4\">\n                        <a href=\"#\" class=\"product-title\">Baked Breads</a>\n                        <h6 class=\"price\">$9.99</h6>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- Single Product Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-3\">\n                <div class=\"single-product-area mb-50 wow fadeInUp\" data-wow-delay=\"500ms\"> -->\n            <!-- Product Thumbnail -->\n            <!-- <div class=\"product-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\"> -->\n            <!-- Product Meta Data -->\n            <!-- <div class=\"product-meta-data\">\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Favourite\"><i class=\"icon_heart_alt\"></i></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Cart\"><i class=\"icon_cart_alt\"></i></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Compare\"><i class=\"arrow_left-right_alt\"></i></a>\n                        </div>\n                    </div> -->\n            <!-- Product Description -->\n            <!-- <div class=\"product-desc text-center pt-4\">\n                        <a href=\"#\" class=\"product-title\">Prime Beef</a>\n                        <h6 class=\"price\">$59.99</h6>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- Single Product Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-3\">\n                <div class=\"single-product-area mb-50 wow fadeInUp\" data-wow-delay=\"700ms\"> -->\n            <!-- Product Thumbnail -->\n            <!-- <div class=\"product-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\"> -->\n            <!-- Product Tags -->\n            <!-- <span class=\"product-tags bg-danger\">Sale</span> -->\n            <!-- Product Meta Data -->\n            <!-- <div class=\"product-meta-data\">\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Favourite\"><i class=\"icon_heart_alt\"></i></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Cart\"><i class=\"icon_cart_alt\"></i></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Compare\"><i class=\"arrow_left-right_alt\"></i></a>\n                        </div>\n                    </div> -->\n            <!-- Product Description -->\n            <!-- <div class=\"product-desc text-center pt-4\">\n                        <a href=\"#\" class=\"product-title\">Pure Honey</a>\n                        <h6 class=\"price\"><span>$29.99</span> $19.99</h6>\n                    </div>\n                </div>\n            </div> -->\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"gotoshop-btn text-center wow fadeInUp\" data-wow-delay=\"900ms\">\n                    <a routerLink=\"/trangchu/san-pham\" class=\"btn famie-btn\">Chi tiết</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- ##### Our Products Area End ##### -->\n\n\n<!-- ##### Farming Practice Area Start ##### -->\n<section class=\"farming-practice-area section-padding-100-50\" style=\"padding-top:50px;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Section Heading -->\n                <div class=\"section-heading text-center\">\n                    <p>Bệnh cá Koi</p>\n                    <h2><span>Một số bệnh thường gặp</span></h2>\n                    <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <!-- Single Farming Practice Area -->\n            <div class=\"col-12 col-sm-6 col-lg-4\" *ngFor=\"let data of dataSourceBenh\">\n                <div class=\"single-farming-practice-area mb-50 wow fadeInUp\" data-wow-delay=\"100ms\">\n                    <!-- Thumbnail -->\n                    <div class=\"farming-practice-thumbnail\">\n                        <img [src]=\"data.HinhAnh\" alt=\"\">\n                    </div>\n                    <!-- Content -->\n                    <div class=\"farming-practice-content text-center\">\n                        <!-- Icon -->\n                        <div class=\"farming-icon\">\n                            <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                        </div>\n                        <span>Bệnh cá Koi</span>\n                        <h4>{{data.TenBenh}}</h4>\n                        <p>...</p>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Single Farming Practice Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-4\">\n                <div class=\"single-farming-practice-area mb-50 wow fadeInUp\" data-wow-delay=\"200ms\"> -->\n            <!-- Thumbnail -->\n            <!-- <div class=\"farming-practice-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                    </div> -->\n            <!-- Content -->\n            <!-- <div class=\"farming-practice-content text-center\"> -->\n            <!-- Icon -->\n            <!-- <div class=\"farming-icon\">\n                            <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                        </div>\n                        <span>Farming practice for</span>\n                        <h4>Pig Farm Management</h4>\n                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- Single Farming Practice Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-4\">\n                <div class=\"single-farming-practice-area mb-50 wow fadeInUp\" data-wow-delay=\"300ms\"> -->\n            <!-- Thumbnail -->\n            <!-- <div class=\"farming-practice-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                    </div> -->\n            <!-- Content -->\n            <!-- <div class=\"farming-practice-content text-center\"> -->\n            <!-- Icon -->\n            <!-- <div class=\"farming-icon\">\n                            <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                        </div>\n                        <span>Farming practice for</span>\n                        <h4>Beef Cattle Farming</h4>\n                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- Single Farming Practice Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-4\">\n                <div class=\"single-farming-practice-area mb-50 wow fadeInUp\" data-wow-delay=\"400ms\"> -->\n            <!-- Thumbnail -->\n            <!-- <div class=\"farming-practice-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                    </div> -->\n            <!-- Content -->\n            <!-- <div class=\"farming-practice-content text-center\"> -->\n            <!-- Icon -->\n            <!-- <div class=\"farming-icon\">\n                            <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                        </div>\n                        <span>Farming practice for</span>\n                        <h4>Improved Rice Cultivation</h4>\n                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- Single Farming Practice Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-4\">\n                <div class=\"single-farming-practice-area mb-50 wow fadeInUp\" data-wow-delay=\"500ms\"> -->\n            <!-- Thumbnail -->\n            <!-- <div class=\"farming-practice-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                    </div> -->\n            <!-- Content -->\n            <!-- <div class=\"farming-practice-content text-center\"> -->\n            <!-- Icon -->\n            <!-- <div class=\"farming-icon\">\n                            <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                        </div>\n                        <span>Farming practice for</span>\n                        <h4>Soil Improvement Techniques</h4>\n                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- Single Farming Practice Area -->\n            <!-- <div class=\"col-12 col-sm-6 col-lg-4\">\n                <div class=\"single-farming-practice-area mb-50 wow fadeInUp\" data-wow-delay=\"600ms\"> -->\n            <!-- Thumbnail -->\n            <!-- <div class=\"farming-practice-thumbnail\">\n                        <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                    </div> -->\n            <!-- Content -->\n            <!-- <div class=\"farming-practice-content text-center\"> -->\n            <!-- Icon -->\n            <!-- <div class=\"farming-icon\">\n                            <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                        </div>\n                        <span>Farming practice for</span>\n                        <h4>Intensive Fruit Farming</h4>\n                        <p>Donec nec justo eget felis facilisis ferme ntum. Aliquam portitor mauris sit amet orci. donec salim...</p>\n                    </div>\n                </div>\n            </div> -->\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"gotoshop-btn text-center wow fadeInUp\" data-wow-delay=\"900ms\">\n                    <a routerLink=\"/trangchu/cac-loai-benh\" class=\"btn famie-btn\">Tra cứu bệnh</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- ##### Farming Practice Area End ##### -->\n\n<!-- ##### Contact Area Start ##### -->\n<section class=\"contact-area section-padding-100-0\" style=\"padding-top:unset ;\">\n    <div class=\"container\">\n        <div class=\"row justify-content-between\">\n\n            <!-- Contact Content -->\n            <div class=\"col-12 col-lg-5\">\n                <div class=\"contact-content mb-100\">\n                    <!-- Section Heading -->\n                    <div class=\"section-heading\">\n                        <!-- <p>Contact now</p> -->\n                        <h2><span>Thông tin liên hệ</span> </h2>\n                        <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                    </div>\n                    <!-- Contact Form Area -->\n                    <div class=\"contact-form-area\">\n                        <form action=\"#\" method=\"post\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Họ và tên\">\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n                                </div>\n                                <div class=\"col-12\">\n                                    <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Tiêu đề\">\n                                </div>\n                                <div class=\"col-12\">\n                                    <textarea name=\"message\" class=\"form-control\" cols=\"30\" rows=\"10\" placeholder=\"Nội dung\"></textarea>\n                                </div>\n                                <div class=\"col-12\">\n                                    <button type=\"submit\" class=\"btn famie-btn\">Gửi</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Contact Maps -->\n            <div class=\"col-lg-6\">\n                <div class=\"contact-maps mb-100\">\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28313.28917392649!2d-88.2740948914384!3d41.76219337461615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efa1199df6109%3A0x8a1293b2ae8e0497!2sE+New+York+St%2C+Aurora%2C+IL%2C+USA!5e0!3m2!1sen!2sbd!4v1542893000723\"\n                        allowfullscreen></iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- ##### Contact Area End ##### -->\n\n<!-- ##### News Area Start ##### -->\n<section class=\"news-area bg-gray section-padding-100-0\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <!-- Featured Post Area -->\n            <div class=\"col-12 col-lg-6\">\n                <div class=\"featured-post-area mb-100 wow fadeInUp\" data-wow-delay=\"100ms\">\n                    <img src=\"../../../assets/img/bg-img/1.jpg\" alt=\"\">\n                    <!-- Post Content -->\n                    <div class=\"post-content\">\n                        <h6>Post on <a href=\"#\">18 Aug 2018</a> / <a href=\"#\">Carlos Bacca</a></h6>\n                        <a href=\"#\" class=\"post-title\">Why innovation is key to maintaining our export market share</a>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Single Blog Area -->\n            <div class=\"col-12 col-lg-6 mb-100\">\n\n                <!-- Single Blog Area -->\n                <div class=\"single-blog-area style-2 wow fadeInUp\" data-wow-delay=\"300ms\">\n                    <!-- Post Content -->\n                    <div class=\"post-content\">\n                        <h6>Post on <a href=\"#\">18 Aug 2018</a> / <a href=\"#\">Peter Crough</a></h6>\n                        <a href=\"#\" class=\"post-title\">Rising cattle supplies see beef export lifted</a>\n                        <p>Maecenas facilisis quam orcit, velo porttitor arcu egestas eu. Maecenas donald imperdiet nibh, quis. Etiam non scelerisque exited sagittis...</p>\n                    </div>\n                </div>\n\n                <!-- Single Blog Area -->\n                <div class=\"single-blog-area style-2 wow fadeInUp\" data-wow-delay=\"500ms\">\n                    <!-- Post Content -->\n                    <div class=\"post-content\">\n                        <h6>Post on <a href=\"#\">18 Aug 2018</a> / <a href=\"#\">Peter Crough</a></h6>\n                        <a href=\"#\" class=\"post-title\">Cattle marts: Cows take a hit at the ringside</a>\n                        <p>Maecenas facilisis quam orcit, velo porttitor arcu egestas eu. Maecenas donald imperdiet nibh, quis. Etiam non scelerisque exited sagittis...</p>\n                    </div>\n                </div>\n\n                <!-- Single Blog Area -->\n                <div class=\"single-blog-area style-2 wow fadeInUp\" data-wow-delay=\"700ms\">\n                    <!-- Post Content -->\n                    <div class=\"post-content\">\n                        <h6>Post on <a href=\"#\">18 Aug 2018</a> / <a href=\"#\">Peter Crough</a></h6>\n                        <a href=\"#\" class=\"post-title\">Malting barley price set to commence</a>\n                        <p>Maecenas facilisis quam orcit, velo porttitor arcu egestas eu. Maecenas donald imperdiet nibh, quis. Etiam non scelerisque exited sagittis...</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n<!-- ##### News Area End ##### -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/lienhe/lienhe.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/lienhe/lienhe.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ##### Breadcrumb Area Start ##### -->\n<div class=\"breadcrumb-area bg-img bg-overlay jarallax\" style=\"background-image: url('../../../assets/img/bg-img/silde2.jpg');\">\n    <div class=\"container h-100\">\n        <div class=\"row h-100 align-items-center\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb-text\">\n                    <h2>Liên hệ</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"famie-breadcrumb\">\n    <div class=\"container\">\n        <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"index.html\"><i class=\"fa fa-home\"></i> Trang chủ</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Liên hệ</li>\n            </ol>\n        </nav>\n    </div>\n</div>\n<!-- ##### Breadcrumb Area End ##### -->\n\n<!-- ##### Contact Information Area Start ##### -->\n<section class=\"contact-info-area\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- Section Heading -->\n                <div class=\"section-heading text-center\">\n                    <p>Thông tin liên hệ</p>\n                    <h2><span>Liên hệ với chúng tôi để được hỗ trợ</span> </h2>\n                    <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <!-- Single Information Area -->\n            <div class=\"col-12 col-md-4\">\n                <div class=\"single-information-area text-center mb-100 wow fadeInUp\" data-wow-delay=\"100ms\">\n                    <div class=\"contact-icon\">\n                        <i class=\"icon_pin_alt\"></i>\n                    </div>\n                    <h5>Địa chỉ</h5>\n                    <h6>Ninh Kiều, Cần Thơ</h6>\n                </div>\n            </div>\n\n            <!-- Single Information Area -->\n            <div class=\"col-12 col-md-4\">\n                <div class=\"single-information-area text-center mb-100 wow fadeInUp\" data-wow-delay=\"500ms\">\n                    <div class=\"contact-icon\">\n                        <i class=\"icon_phone\"></i>\n                    </div>\n                    <h5>Số điện thoại</h5>\n                    <h6>+84 223 9000</h6>\n                </div>\n            </div>\n\n            <!-- Single Information Area -->\n            <div class=\"col-12 col-md-4\">\n                <div class=\"single-information-area text-center mb-100 wow fadeInUp\" data-wow-delay=\"1000ms\">\n                    <div class=\"contact-icon\">\n                        <i class=\"icon_mail_alt\"></i>\n                    </div>\n                    <h5>Email</h5>\n                    <h6>cakoiKOIFS@gmail.com</h6>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"c-border\"></div>\n    </div>\n</section>\n<!-- ##### Contact Information Area End ##### -->\n\n<!-- ##### Contact Area Start ##### -->\n<section class=\"contact-area section-padding-100-0\">\n    <div class=\"container\">\n        <div class=\"row justify-content-between\">\n\n            <!-- Contact Content -->\n            <div class=\"col-12 col-lg-5\">\n                <div class=\"contact-content mb-100\">\n                    <!-- Section Heading -->\n                    <div class=\"section-heading\">\n                        <!-- <p>Contact now</p> -->\n                        <h2><span>Thông tin liên hệ</span> </h2>\n                        <img src=\"../../../assets/img/core-img/decor2.png\" alt=\"\">\n                    </div>\n                    <!-- Contact Form Area -->\n                    <div class=\"contact-form-area\">\n                        <form action=\"#\" method=\"post\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Họ và tên\">\n                                </div>\n                                <div class=\"col-lg-6\">\n                                    <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n                                </div>\n                                <div class=\"col-12\">\n                                    <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Tiêu đề\">\n                                </div>\n                                <div class=\"col-12\">\n                                    <textarea name=\"message\" class=\"form-control\" cols=\"30\" rows=\"10\" placeholder=\"Nội dung\"></textarea>\n                                </div>\n                                <div class=\"col-12\">\n                                    <button type=\"submit\" class=\"btn famie-btn\">Gửi</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n            <!-- Contact Maps -->\n            <div class=\"col-lg-6\">\n                <div class=\"contact-maps mb-100\">\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28313.28917392649!2d-88.2740948914384!3d41.76219337461615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efa1199df6109%3A0x8a1293b2ae8e0497!2sE+New+York+St%2C+Aurora%2C+IL%2C+USA!5e0!3m2!1sen!2sbd!4v1542893000723\"\n                        allowfullscreen></iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- ##### Contact Area End ##### -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/product-detail/product-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/product-detail/product-detail.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ##### About Us Area Start ##### -->\n<section class=\"about-us-area\">\n    <div class=\"container\">\n\n        <!-- <div class=\"container1\">\n            <ul>\n                <li>\n                    <a href=\"./../../../assets/img/bg-img/1.jpg\"><img src=\"./../../../assets/img/bg-img/1.jpg\"></a>\n                </li>\n                <li>\n                    <a href=\"./../../../assets/img/bg-img/10.jpg\"><img src=\"./../../../assets/img/bg-img/10.jpg\"></a>\n                </li>\n                <li>\n                    <a href=\"./../../../assets/img/bg-img/11.jpg\"><img src=\"./../../../assets/img/bg-img/11.jpg\"></a>\n                </li>\n            </ul>\n            <div class=\"imgBox\"><img src=\"./../../../assets/img/bg-img/1.jpg\" alt=\"\"></div>\n        </div> -->\n\n        <div class=\"row align-items-center\">\n\n            <!-- About Us Thumbnail -->\n            <div class=\"col-12 col-lg-6\">\n                <div class=\"about-us-thumbnail mb-100\">\n                    <ul>\n                        <li>\n                            <a><img src=\"./../../../assets/img/bg-img/1.jpg\"></a>\n                        </li>\n                        <li>\n                            <a><img src=\"./../../../assets/img/bg-img/10.jpg\"></a>\n                        </li>\n                        <li>\n                            <a><img src=\"./../../../assets/img/bg-img/11.jpg\"></a>\n                        </li>\n                    </ul>\n                    <img [src]=\"selected.Mahas\" style=\"width: 263px; height: 261px;\" alt=\"\" />\n                </div>\n            </div>\n\n            <!-- About Us Content -->\n            <div class=\"col-12 col-lg-6\">\n                <div class=\"about-us-content mb-100\">\n                    <!-- Section Heading -->\n                    <div class=\"section-heading\">\n                        <p>Thông tin chi tiết</p>\n                        <!-- <h2><span>Farming Practices</span> &amp; Methods</h2> -->\n                        <h2><span>{{selected.TenBienThe}}</span> </h2>\n                        <p [innerHtml]='selected.MoTa'></p>\n                        <h6>Thuộc chủng loại: {{selected.ChungLoais.TenChungLoai}}</h6>\n                        <h6>Loại: {{selected.Giongs.TenGiong}}</h6>\n                        <h6>Chất lượng: {{selected.ChatLuongs.TenChatLuong}}</h6>\n                        <!-- <img [src]=\"selected.Mahas\" alt=\"\"> -->\n                    </div>\n                    <p [innerHtml]='selected.MoTa'></p>\n                    <!-- <a href=\"#\" class=\"btn famie-btn mt-30\">Read More</a> -->\n                </div>\n            </div>\n\n        </div>\n        <!-- <div class=\"row align-items-center\">\n            <nz-tabset>\n\n                <nz-tab nzTitle=\"Mô tả\">\n                    <div class=\"wrap\">\n                        <div class=\"content\">\n                            <div nz-row>\n                                <div [innerHtml]='selected.ChungLoais.MoTa'></div>\n                            </div>\n                        </div>\n                    </div>\n                </nz-tab>\n                <nz-tab nzTitle=\"Thông tin bổ sung\">\n                    <div class=\"wrap\">\n                        <div class=\"content\">\n                            <div nz-row>\n                                <nz-table nzBordered>\n                                    <tbody>\n\n                                        <tr>\n                                            <td>Loại</td>\n                                            <td>{{selected.Giongs.TenGiong}} </td>\n                                        </tr>\n                                        <tr>\n                                            <td>Giống cá Koi</td>\n                                            <td>{{selected.ChungLoais.TenChungLoai}} </td>\n                                        </tr>\n                                        <tr>\n                                            <td>Màu sắc</td>\n                                            <td>{{selected.ChungLoais.MauSac}} </td>\n                                        </tr>\n                                        <tr>\n                                            <td>Quốc gia</td>\n                                            <td>Nhật bản, Việt Nam </td>\n                                        </tr>\n                                        <tr>\n                                            <td>Size</td>\n                                            <td>> 15 cm, > 20 cm, > 50 cm,\n                                                <15 cm, 15 – 18 cm, 15 – 25 cm, 18 – 20 cm, 20 – 30 cm, 20 cm, 25 cm, 30 cm, 35 cm, 40 cm, 45 cm, 50 cm,> 60 cm, 10 – 15 cm, 10 – 65 cm, 15 – 20 cm, 20 – 25 cm, 25 – 30 cm, 30 – 35 cm, 35 – 40 cm, 40 – 45 cm, 45 – 50 cm, 50 – 60 cm</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Chất lượng</td>\n                                            <td>{{selected.ChatLuongs.TenChatLuong}} </td>\n                                        </tr>\n                                    </tbody>\n                                </nz-table>\n                            </div>\n                        </div>\n                    </div>\n\n                </nz-tab>\n            </nz-tabset>\n        </div> -->\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"famie-breadcrumb\">\n    <div class=\"container\">\n        <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"index.html\"><i class=\"fa fa-home\"></i> Trang chủ</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Sản phẩm</li>\n            </ol>\n            <ol>\n\n                <input type=\"search\" class=\"form-control\" placeholder=\"Tìm kiếm\" [(ngModel)]=\"sName\" style=\"margin-left: 82%;\n                width: max-content;\">\n\n                <!-- <input type=\"search\" class=\"form-control\" placeholder=\"Search\"> -->\n                <!-- <button type=\"button\">Search</button> -->\n\n            </ol>\n\n        </nav>\n    </div>\n</div>\n<!-- ##### Breadcrumb Area End ##### -->\n\n<!-- ##### Shop Area Start ##### -->\n<section class=\"shop-area section-padding-0-100\">\n    <div class=\"container\">\n\n        <!-- <div class=\"row\">\n         Shop Filters \n          <div class=\"col-12\">\n                <div class=\"shop-filters mb-30 d-flex align-items-center justify-content-between\">\n                     Product Show -->\n        <!-- <div class=\"product-show\">\n                        <h6>Showing 1–9 of 72 results</h6>\n                    </div> -->\n\n        <!-- Product View Mode -->\n        <!-- <div class=\"produtc-view-mode\">\n                        <a href=\"#\"><i class=\"fa fa-th\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-list-ul\"></i></a>\n                    </div> \n                </div>\n            </div>\n        </div> -->\n\n\n\n        <div class=\"row\">\n            <!-- Shop Sidebar Area -->\n            <div class=\"col-12 col-md-4 col-lg-3\">\n\n                <!-- Shopping Cart -->\n                <!-- <div class=\"shopping-cart mb-50\">\n                    <h5 class=\"mb-30\">Shopping Cart</h5> -->\n                <!-- Cart Table -->\n                <!-- <div class=\"cart-table clearfix\">\n                        <table class=\"table table-responsive\">\n                        \n                            <tbody>\n                              \n                                <tr>\n                                    <td class=\"cart_product_img\">\n                                        <a href=\"#\"><img src=\"./../../assets/img/bg-img/34.jpg\" alt=\"Product\"></a>\n                                    </td>\n                                    <td class=\"cart_product_desc\">\n                                        <p>Bayonne Ham</p>\n                                        <h6>1 x $39.99</h6>\n                                    </td>\n                                    <td class=\"pro-close\">\n                                        <a href=\"#\"><i class=\"icon_close\"></i></a>\n                                    </td>\n                                </tr>\n                           \n                                <tr>\n                                    <td class=\"cart_product_img\">\n                                        <a href=\"#\"><img src=\"./../../assets/img/bg-img/35.jpg\" alt=\"Product\"></a>\n                                    </td>\n                                    <td class=\"cart_product_desc\">\n                                        <p>Bayonne Ham</p>\n                                        <h6>1 x $39.99</h6>\n                                    </td>\n                                    <td class=\"pro-close\">\n                                        <a href=\"#\"><i class=\"icon_close\"></i></a>\n                                    </td>\n                                </tr>\n                              \n                                <tr>\n                                    <td class=\"cart_product_img\">\n                                        <a href=\"#\"><img src=\"./../../assets/img/bg-img/36.jpg\" alt=\"Product\"></a>\n                                    </td>\n                                    <td class=\"cart_product_desc\">\n                                        <p>Bayonne Ham</p>\n                                        <h6>1 x $39.99</h6>\n                                    </td>\n                                    <td class=\"pro-close\">\n                                        <a href=\"#\"><i class=\"icon_close\"></i></a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div> -->\n                <!-- SubTotal -->\n                <!-- <div class=\"cart-summary d-flex align-items-center justify-content-between\">\n                        <div class=\"sub-total\">\n                            <h6>SUBTOTAL</h6>\n                        </div>\n                        <div class=\"total-price\">\n                            <h6>$52.99</h6>\n                        </div>\n                    </div> -->\n                <!-- Checkout -->\n                <!-- <a href=\"#\" class=\"btn famie-btn checkout-btn mt-30 w-100\">Checkout</a>\n                </div> -->\n\n                <!-- Single Widget Area -->\n                <div class=\"single-widget-area\">\n                    <!-- Title -->\n                    <h5 class=\"widget-title\">Danh mục</h5>\n                    <!-- Cata List -->\n                    <ul class=\"cata-list shop-page\">\n                        <li><a routerLink=\"/trangchu/san-pham\">Tất cả</a></li>\n                    </ul>\n                    <ul class=\"cata-list shop-page\" *ngFor=\"let data of dataChungLoai\">\n                        <li><a (click)=\"viewChungLoai(data.MaChungLoai)\">{{data.TenChungLoai}}</a></li>\n                        <!--  <li><a href=\"#\">Các bệnh cá</a></li>\n                        <li><a href=\"#\">Các thuốc trị bệnh</a></li>\n                         <li><a href=\"#\">Rice &amp; Corn (15)</a></li>\n                        <li><a href=\"#\">Meat &amp; Eggs (20)</a></li>\n                        <li><a href=\"#\">Milk &amp; Cheese (15)</a></li>\n                        <li><a href=\"#\">Others (2)</a></li> -->\n                    </ul>\n                </div>\n\n                <!-- Single Widget Area -->\n                <!-- <div class=\"single-widget-area\"> -->\n                <!-- Title -->\n                <!-- <h5 class=\"widget-title\">Sort by</h5> -->\n                <!-- Cata List -->\n                <!-- <ul class=\"cata-list shop-page\">\n                        <li><a href=\"#\">Top rated</a></li>\n                        <li><a href=\"#\">New arrivals</a></li>\n                        <li><a href=\"#\">Alphabetically, A-Z</a></li>\n                        <li><a href=\"#\">Alphabetically, Z-A</a></li>\n                        <li><a href=\"#\">Price: low to high</a></li>\n                        <li><a href=\"#\">Price: high to low</a></li>\n                    </ul>\n                </div> -->\n\n                <!-- Single Widget Area -->\n                <!-- <div class=\"single-widget-area\"> -->\n                <!-- Title -->\n                <!-- <h5 class=\"widget-title\">Price</h5> -->\n                <!-- Cata List -->\n                <!-- <ul class=\"cata-list shop-page\">\n                        <li><a href=\"#\">$0.00 - $10.00</a></li>\n                        <li><a href=\"#\">$10.00 - $50.00</a></li>\n                        <li><a href=\"#\">$50.00 - $100.00</a></li>\n                        <li><a href=\"#\">$100.00+</a></li>\n                    </ul>\n                </div> -->\n\n                <!-- Single Widget Area -->\n                <!-- <div class=\"single-widget-area\">  -->\n                <!-- Title -->\n                <!-- <h5 class=\"widget-title\">Tags</h5> -->\n                <!-- Tags -->\n                <!-- <ul class=\"famie-tags\">\n                        <li><a href=\"#\">All product</a></li>\n                        <li><a href=\"#\">Freshy Fruit</a></li>\n                        <li><a href=\"#\">Sweet Corn</a></li>\n                        <li><a href=\"#\">Chicken</a></li>\n                        <li><a href=\"#\">Organic</a></li>\n                        <li><a href=\"#\">Meat</a></li>\n                    </ul>\n                </div> -->\n\n            </div>\n            <!-- Sản phẩm -->\n\n            <!-- Shop Products Area -->\n            <div class=\"col-12 col-md-8 col-lg-9\">\n                <div class=\"row\">\n\n                    <!-- Single Product Area -->\n                    <div class=\"col-12 col-sm-6 col-lg-3\" *ngFor=\"let data of dataSource | filter: sName\">\n                        <div class=\"single-product-area mb-50\">\n                            <!-- Product Thumbnail -->\n                            <div class=\"product-thumbnail\">\n                                <img [src]=\"data.Mahas\" style=\"height: 300px;\" />\n                                <!-- Product Tags -->\n                                <!-- <span class=\"product-tags\">Hot</span> -->\n                                <!-- Product Meta Data -->\n                                <div class=\"product-meta-data\">\n                                    <!-- <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Favourite\"><i class=\"icon_heart_alt\"></i></a>\n                                    <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Cart\"><i class=\"icon_cart_alt\"></i></a> -->\n                                    <a data-toggle=\"tooltip\" data-placemesnt=\"top\" title=\"Chi tiết\" (click)=\"view(data.MaBienThe)\"><i class=\"arrow_left-right_alt\"></i></a>\n                                </div>\n                            </div>\n\n                            <!-- Product Description -->\n                            <div class=\"product-desc text-center pt-4\">\n                                <a href=\"#\" class=\"product-title\">{{data.TenBienThe}}</a>\n                                <h6 class=\"price\">Giá bán: Liên hệ </h6>\n                                <!-- <h6 class=\"price\">\n                                    <ng-container *ngIf=\"data.TinhTrang == true\">\n                                        Còn hàng\n                                    </ng-container>\n                                    <ng-container *ngIf=\"data.TinhTrang == false\">Hết hàng</ng-container>\n                                </h6> -->\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                </div>\n\n                <!-- Pagination -->\n                <!-- <nav>\n                    <ul class=\"pagination mb-0 mt-50\">\n                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n                    </ul>\n                </nav> -->\n            </div>\n        </div>\n\n    </div>\n</section>\n<!-- ##### Shop Area End ##### -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/sanpham/sanpham.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/sanpham/sanpham.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"famie-breadcrumb\">\n    <div class=\"container\">\n        <nav aria-label=\"breadcrumb\">\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\"><a href=\"index.html\"><i class=\"fa fa-home\"></i> Trang chủ</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Sản phẩm</li>\n            </ol>\n            <ol>\n\n                <input type=\"search\" class=\"form-control\" placeholder=\"Tìm kiếm\" [(ngModel)]=\"sName\" style=\"margin-left: 82%;\n                width: max-content;\">\n\n                <!-- <input type=\"search\" class=\"form-control\" placeholder=\"Search\"> -->\n                <!-- <button type=\"button\">Search</button> -->\n\n            </ol>\n\n        </nav>\n    </div>\n</div>\n<!-- ##### Breadcrumb Area End ##### -->\n\n<!-- ##### Shop Area Start ##### -->\n<section class=\"shop-area section-padding-0-100\">\n    <div class=\"container\">\n\n        <!-- <div class=\"row\">\n         Shop Filters \n          <div class=\"col-12\">\n                <div class=\"shop-filters mb-30 d-flex align-items-center justify-content-between\">\n                     Product Show -->\n        <!-- <div class=\"product-show\">\n                        <h6>Showing 1–9 of 72 results</h6>\n                    </div> -->\n\n        <!-- Product View Mode -->\n        <!-- <div class=\"produtc-view-mode\">\n                        <a href=\"#\"><i class=\"fa fa-th\"></i></a>\n                        <a href=\"#\"><i class=\"fa fa-list-ul\"></i></a>\n                    </div> \n                </div>\n            </div>\n        </div> -->\n\n\n\n        <div class=\"row\">\n            <!-- Shop Sidebar Area -->\n            <div class=\"col-12 col-md-4 col-lg-3\">\n\n                <!-- Shopping Cart -->\n                <!-- <div class=\"shopping-cart mb-50\">\n                    <h5 class=\"mb-30\">Shopping Cart</h5> -->\n                <!-- Cart Table -->\n                <!-- <div class=\"cart-table clearfix\">\n                        <table class=\"table table-responsive\">\n                        \n                            <tbody>\n                              \n                                <tr>\n                                    <td class=\"cart_product_img\">\n                                        <a href=\"#\"><img src=\"./../../assets/img/bg-img/34.jpg\" alt=\"Product\"></a>\n                                    </td>\n                                    <td class=\"cart_product_desc\">\n                                        <p>Bayonne Ham</p>\n                                        <h6>1 x $39.99</h6>\n                                    </td>\n                                    <td class=\"pro-close\">\n                                        <a href=\"#\"><i class=\"icon_close\"></i></a>\n                                    </td>\n                                </tr>\n                           \n                                <tr>\n                                    <td class=\"cart_product_img\">\n                                        <a href=\"#\"><img src=\"./../../assets/img/bg-img/35.jpg\" alt=\"Product\"></a>\n                                    </td>\n                                    <td class=\"cart_product_desc\">\n                                        <p>Bayonne Ham</p>\n                                        <h6>1 x $39.99</h6>\n                                    </td>\n                                    <td class=\"pro-close\">\n                                        <a href=\"#\"><i class=\"icon_close\"></i></a>\n                                    </td>\n                                </tr>\n                              \n                                <tr>\n                                    <td class=\"cart_product_img\">\n                                        <a href=\"#\"><img src=\"./../../assets/img/bg-img/36.jpg\" alt=\"Product\"></a>\n                                    </td>\n                                    <td class=\"cart_product_desc\">\n                                        <p>Bayonne Ham</p>\n                                        <h6>1 x $39.99</h6>\n                                    </td>\n                                    <td class=\"pro-close\">\n                                        <a href=\"#\"><i class=\"icon_close\"></i></a>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div> -->\n                <!-- SubTotal -->\n                <!-- <div class=\"cart-summary d-flex align-items-center justify-content-between\">\n                        <div class=\"sub-total\">\n                            <h6>SUBTOTAL</h6>\n                        </div>\n                        <div class=\"total-price\">\n                            <h6>$52.99</h6>\n                        </div>\n                    </div> -->\n                <!-- Checkout -->\n                <!-- <a href=\"#\" class=\"btn famie-btn checkout-btn mt-30 w-100\">Checkout</a>\n                </div> -->\n\n                <!-- Single Widget Area -->\n                <div class=\"single-widget-area\">\n                    <!-- Title -->\n                    <h5 class=\"widget-title\">Danh mục</h5>\n                    <!-- Cata List -->\n                    <ul class=\"cata-list \">\n                        <li><a routerLink=\"/trangchu/san-pham\">Tất cả</a></li>\n                    </ul>\n                    <ul class=\"cata-list \" *ngFor=\"let data of dataChungLoai\">\n\n                        <li><a (click)=\"viewChungLoai(data.MaChungLoai)\">{{data.TenChungLoai}}</a></li>\n                        <!--  <li><a href=\"#\">Các bệnh cá</a></li>\n                        <li><a href=\"#\">Các thuốc trị bệnh</a></li>\n                         <li><a href=\"#\">Rice &amp; Corn (15)</a></li>\n                        <li><a href=\"#\">Meat &amp; Eggs (20)</a></li>\n                        <li><a href=\"#\">Milk &amp; Cheese (15)</a></li>\n                        <li><a href=\"#\">Others (2)</a></li> -->\n                    </ul>\n                </div>\n\n                <!-- Single Widget Area -->\n                <!-- <div class=\"single-widget-area\"> -->\n                <!-- Title -->\n                <!-- <h5 class=\"widget-title\">Sort by</h5> -->\n                <!-- Cata List -->\n                <!-- <ul class=\"cata-list shop-page\">\n                        <li><a href=\"#\">Top rated</a></li>\n                        <li><a href=\"#\">New arrivals</a></li>\n                        <li><a href=\"#\">Alphabetically, A-Z</a></li>\n                        <li><a href=\"#\">Alphabetically, Z-A</a></li>\n                        <li><a href=\"#\">Price: low to high</a></li>\n                        <li><a href=\"#\">Price: high to low</a></li>\n                    </ul>\n                </div> -->\n\n                <!-- Single Widget Area -->\n                <!-- <div class=\"single-widget-area\"> -->\n                <!-- Title -->\n                <!-- <h5 class=\"widget-title\">Price</h5> -->\n                <!-- Cata List -->\n                <!-- <ul class=\"cata-list shop-page\">\n                        <li><a href=\"#\">$0.00 - $10.00</a></li>\n                        <li><a href=\"#\">$10.00 - $50.00</a></li>\n                        <li><a href=\"#\">$50.00 - $100.00</a></li>\n                        <li><a href=\"#\">$100.00+</a></li>\n                    </ul>\n                </div> -->\n\n                <!-- Single Widget Area -->\n                <!-- <div class=\"single-widget-area\">  -->\n                <!-- Title -->\n                <!-- <h5 class=\"widget-title\">Tags</h5> -->\n                <!-- Tags -->\n                <!-- <ul class=\"famie-tags\">\n                        <li><a href=\"#\">All product</a></li>\n                        <li><a href=\"#\">Freshy Fruit</a></li>\n                        <li><a href=\"#\">Sweet Corn</a></li>\n                        <li><a href=\"#\">Chicken</a></li>\n                        <li><a href=\"#\">Organic</a></li>\n                        <li><a href=\"#\">Meat</a></li>\n                    </ul>\n                </div> -->\n\n            </div>\n            <!-- Sản phẩm -->\n\n            <!-- Shop Products Area -->\n            <div class=\"col-12 col-md-8 col-lg-9\">\n                <div class=\"row\">\n\n                    <!-- Single Product Area -->\n                    <div class=\"col-12 col-sm-6 col-lg-3\" *ngFor=\"let data of dataSource | filter: sName\">\n                        <div class=\"single-product-area mb-50\">\n                            <!-- Product Thumbnail -->\n                            <div class=\"product-thumbnail\">\n                                <img [src]=\"data.Mahas\" style=\"height: 300px;\" />\n                                <!-- Product Tags -->\n                                <!-- <span class=\"product-tags\">Hot</span> -->\n                                <!-- Product Meta Data -->\n                                <div class=\"product-meta-data\">\n                                    <!-- <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Favourite\"><i class=\"icon_heart_alt\"></i></a>\n                                    <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add To Cart\"><i class=\"icon_cart_alt\"></i></a> -->\n                                    <a data-toggle=\"tooltip\" data-placemesnt=\"top\" title=\"Chi tiết\" (click)=\"view(data.MaBienThe)\"><i class=\"arrow_left-right_alt\"></i></a>\n                                </div>\n                            </div>\n\n                            <!-- Product Description -->\n                            <div class=\"product-desc text-center pt-4\">\n                                <a href=\"#\" class=\"product-title\">{{data.TenBienThe}}</a>\n                                <h6 class=\"price\">Giá bán: Liên hệ </h6>\n                                <!-- <h6 class=\"price\">\n                                    <ng-container *ngIf=\"data.TinhTrang == true\">\n                                        Còn hàng\n                                    </ng-container>\n                                    <ng-container *ngIf=\"data.TinhTrang == false\">Hết hàng</ng-container>\n                                </h6> -->\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                </div>\n\n                <!-- Pagination -->\n                <!-- <nav>\n                    <ul class=\"pagination mb-0 mt-50\">\n                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\"><i class=\"fa fa-angle-right\"></i></a></li>\n                    </ul>\n                </nav> -->\n            </div>\n        </div>\n\n    </div>\n</section>\n<!-- ##### Shop Area End ##### -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/trangchu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/trangchu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ##### Header Area Start ##### -->\n<header class=\"header-area\">\n    <!-- Top Header Area -->\n    <!-- <div class=\"top-header-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"top-header-content d-flex align-items-center justify-content-between\"> -->\n    <!-- Top Header Content -->\n    <!-- <div class=\"top-header-meta\">\n                            <p>Welcome to <span>Farmie</span>, we hope you will enjoy our products and have good experience</p>\n                        </div> -->\n    <!-- Top Header Content -->\n    <!-- <div class=\"top-header-meta text-right\">\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"infodeercreative@gmail.com\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> <span>Email: infodeercreative@gmail.com</span></a>\n                            <a href=\"#\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"+1 234 122 122\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> <span>Call Us: +84 223 9000</span></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n    <!-- Navbar Area -->\n    <div class=\"famie-main-menu\">\n        <div class=\"classy-nav-container breakpoint-off\">\n            <div class=\"container\">\n                <!-- Menu -->\n                <nav class=\"classy-navbar justify-content-between\" id=\"famieNav\">\n                    <!-- Nav Brand -->\n                    <a href=\"index.html\" class=\"nav-brand\" style=\"max-width: unset;\"><img src=\"./../../assets/img/core-img/logoKOI.png\" style=\"height: 70px;\" alt=\"\">\n                        <img src=\"./../../assets/img/core-img/logo_By_Wix.jpg\" style=\"height: 70px;\" alt=\"\"></a>\n\n                    <!-- Navbar Toggler -->\n                    <div class=\"classy-navbar-toggler\">\n                        <span class=\"navbarToggler\"><span></span><span></span><span></span></span>\n                    </div>\n                    <!-- Menu -->\n                    <div class=\"classy-menu\" style=\"margin-right: 30%;\">\n                        <!-- Close Button -->\n                        <div class=\"classycloseIcon\">\n                            <div class=\"cross-wrap\"><span class=\"top\"></span><span class=\"bottom\"></span></div>\n                        </div>\n                        <!-- Navbar Start -->\n                        <div class=\"classynav\">\n                            <ul>\n                                <li class=\"active\"><a routerLink=\"/trangchu/index\">Trang chủ</a></li>\n                                <!-- <li><a href=\"about.html\">About</a></li> -->\n                                <!-- <li><a href=\"#\">Pages</a>\n                                    <ul class=\"dropdown\">\n                                        <li><a href=\"index.html\">TRANG CHỦ</a></li>\n                                        <li><a href=\"about.html\">About Us</a></li>\n                                        <li><a href=\"farming-practice.html\">Farming Practice</a></li>\n                                        <li><a href=\"shop.html\">Shop</a>\n                                            <ul class=\"dropdown\">\n                                                <li><a href=\"our-product.html\">Our Products</a></li>\n                                                <li><a href=\"shop.html\">Shop</a></li>\n                                            </ul>\n                                        </li>\n                                        <li><a href=\"news.html\">News</a>\n                                            <ul class=\"dropdown\">\n                                                <li><a href=\"news.html\">News</a></li>\n                                                <li><a href=\"news-details.html\">News Details</a></li>\n                                            </ul>\n                                        </li>\n                                        <li><a href=\"contact.html\">Contact</a></li>\n                                    </ul>\n                                </li> -->\n                                <li><a routerLink=\"/trangchu/gioi-thieu\">Giới thiệu</a></li>\n                                <li><a routerLink=\"/trangchu/san-pham\">Cá koi</a></li>\n\n                                <li><a routerLink=\"/trangchu/cac-loai-benh\">Bệnh</a></li>\n                                <!-- <li><a href=\"farming-practice.html\">Farming Practice</a></li> -->\n                                <!-- <li><a href=\"news.html\">News</a></li> -->\n                                <li><a routerLink=\"/trangchu/lienhe\">LIÊN HỆ</a></li>\n                            </ul>\n                            <!-- Search Icon -->\n                            <!-- <div id=\"searchIcon\">\n                                <i class=\"icon_search\" aria-hidden=\"true\"></i>\n                            </div> -->\n                            <!-- Cart Icon -->\n                            <!-- <div id=\"cartIcon\">\n                                <a href=\"#\">\n                                    <i class=\"icon_cart_alt\" aria-hidden=\"true\"></i>\n                                    <span class=\"cart-quantity\">2</span>\n                                </a>\n                            </div> -->\n                        </div>\n                        <!-- Navbar End -->\n                    </div>\n                </nav>\n\n                <!-- Search Form -->\n                <div class=\"search-form\">\n                    <form action=\"#\" method=\"get\">\n                        <input placeholder=\"Type keywords &amp; press enter...\">\n                        <!-- <input [(ngModel)]=\"TenBienThe\" placeholder=\"Type keywords &amp; press enter...\"> -->\n                        <button type=\"button\" class=\"d-none\"></button>\n                    </form>\n                    <!-- Close Icon -->\n                    <div class=\"closeIcon\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n<!-- ##### Header Area End ##### -->\n\n<router-outlet></router-outlet>\n\n\n\n<!-- ##### Breadcrumb Area Start ##### -->\n<!-- <div class=\"breadcrumb-area bg-img bg-overlay jarallax\" style=\"background-image: url('./../../assets/img/bg-img/sidle3.jpg');\">\n    <div class=\"container h-100\">\n        <div class=\"row h-100 align-items-center\">\n            <div class=\"col-12\">\n                <div class=\"breadcrumb-text\">\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div> -->\n\n\n\n<!-- ##### Footer Area Start ##### -->\n<footer class=\"footer-area\">\n    <!-- Main Footer Area -->\n    <div class=\"main-footer bg-img bg-overlay section-padding-80-0\" style=\"background-image: url(./../../assets/img/bg-img/footer.jpg);\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <!-- Single Footer Widget Area -->\n                <!-- <div class=\"col-12 col-sm-6 col-lg-3\">\n                    <div class=\"footer-widget mb-80\">\n                        <a href=\"#\" class=\"foo-logo d-block mb-30\"><img src=\"./../../assets/img/core-img/logo2.png\" alt=\"\"></a>\n                        <p>Lorem ipsum dolor sit amet, consecte stare adipiscing elit. In act honcus risus atiner Pellentesque risus.</p>\n                        <div class=\"contact-info\">\n                            <p><i class=\"fa fa-map-pin\" aria-hidden=\"true\"></i><span>120 Raymond Rd, New York</span></p>\n                            <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>info.deercreative@gmail.com</span></p>\n                            <p><i class=\"fa fa-phone\" aria-hidden=\"true\"></i><span>+84 223 9000</span></p>\n                        </div>\n                    </div>\n                </div> -->\n\n                <!-- Single Footer Widget Area -->\n                <!-- <div class=\"col-12 col-sm-6 col-lg-3\">\n                    <div class=\"footer-widget mb-80\">\n                        <h5 class=\"widget-title\">QUICK LINK</h5> -->\n                <!-- Footer Widget Nav -->\n                <!-- <nav class=\"footer-widget-nav\">\n                            <ul>\n                                <li><a href=\"#\">Purchase</a></li>\n                                <li><a href=\"#\">Policities</a></li>\n                                <li><a href=\"#\">Shipping</a></li>\n                                <li><a href=\"#\">FAQs</a></li>\n                                <li><a href=\"#\">Return</a></li>\n                                <li><a href=\"#\">Careers</a></li>\n                                <li><a href=\"#\">Payments</a></li>\n                                <li><a href=\"#\">Partners</a></li>\n                                <li><a href=\"#\">Guide</a></li>\n                                <li><a href=\"#\">Standard</a></li>\n                                <li><a href=\"#\">News</a></li>\n                                <li><a href=\"#\">Brands</a></li>\n                            </ul>\n                        </nav>\n                    </div>\n                </div> -->\n\n                <!-- Single Footer Widget Area -->\n                <!-- <div class=\"col-12 col-sm-6 col-lg-3\">\n                    <div class=\"footer-widget mb-80\">\n                        <h5 class=\"widget-title\">RECENT NEWS</h5> -->\n\n                <!-- Single Recent News Start -->\n                <!-- <div class=\"single-recent-blog d-flex align-items-center\">\n                            <div class=\"post-thumbnail\">\n                                <img src=\"./../../assets/img/bg-img/4.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"post-content\">\n                                <a href=\"#\" class=\"post-title\">WA’s largest farming business on the market</a>\n                                <div class=\"post-date\">18 Aug 2018</div>\n                            </div>\n                        </div> -->\n\n                <!-- Single Recent News Start -->\n                <!-- <div class=\"single-recent-blog d-flex align-items-center\">\n                            <div class=\"post-thumbnail\">\n                                <img src=\"./../../assets/img/bg-img/5.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"post-content\">\n                                <a href=\"#\" class=\"post-title\">Beef retail prices hit a record</a>\n                                <div class=\"post-date\">18 Aug 2018</div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div> -->\n\n                <!-- Single Footer Widget Area -->\n                <!-- <div class=\"col-12 col-sm-6 col-lg-3\">\n                    <div class=\"footer-widget mb-80\">\n                        <h5 class=\"widget-title\">STAY CONNECTED</h5> -->\n                <!-- Footer Social Info -->\n                <!-- <div class=\"footer-social-info\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n                                <span>Facebook</span>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                                <span>Twitter</span>\n                            </a>\n                            <a href=\"#\">\n                                <i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i>\n                                <span>Pinterest</span>\n                            </a>\n                        </div>\n                    </div>\n                </div> -->\n\n            </div>\n        </div>\n    </div>\n\n    <!-- Copywrite Area  -->\n    <!-- <div class=\"copywrite-area\">\n        <div class=\"container\">\n            <div class=\"copywrite-text\">\n                <div class=\"row align-items-center\">\n                    <div class=\"col-md-6\">\n                        <p> -->\n    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n    <!-- Copyright &copy;\n                            <script>\n                                document.write(new Date().getFullYear());\n                            </script> All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a> -->\n    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\n    <!-- </p>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"footer-nav\">\n                            <nav>\n                                <ul>\n                                    <li><a href=\"#\">About</a></li>\n                                    <li><a href=\"#\">Produce</a></li>\n                                    <li><a href=\"#\">Practice</a></li>\n                                    <li><a href=\"#\">Products</a></li>\n                                    <li><a href=\"#\">News</a></li>\n                                    <li><a href=\"#\">Contact</a></li>\n                                </ul>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</footer>\n<!-- ##### Footer Area End ##### -->");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trangchu/trangchu.component */ "./src/app/trangchu/trangchu.component.ts");






// const appRoutes: Routes = [
//   {
//     path: '',
//     component: AppComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: '/trangchu',
//         pathMatch: 'full'
//       },
//       {
//         path: 'admin',
//         // loadChildren: './dashboard/dashboard.module#DashboardModule',
//         loadChildren: () => PagesModule,
//         data: {
//           breadcrumb: 'admin'
//         }
//       },
//       // {
//       //   path: 'trangchu',
//       //   // loadChildren: './dashboard/dashboard.module#DashboardModule',
//       //   loadChildren: () => TrangchuModule,
//       //   data: {
//       //     breadcrumb: 'trangchu'
//       //   }
//       // },
//       { path: 'login', component: LoginComponent }
//     ]
//   }
// ];
const appRoutes = [
    { path: '', redirectTo: '/trangchu/index', pathMatch: 'full' },
    // This component defines the shared main content around a router outlet.
    {
        path: 'trangchu', component: _trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_5__["TrangchuComponent"], children: []
    },
    // This component defines the shared admin content around a router outlet.
    { path: 'admin', component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"], children: []
    },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.isCollapsed = false;
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: API_ENDPOINT, localStorageKey, SITENAME, StatusCodeHttp, MENUS_SIDEBAR, MENUS_EMPLOYEE_SIDEBAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_ENDPOINT", function() { return API_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageKey", function() { return localStorageKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SITENAME", function() { return SITENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCodeHttp", function() { return StatusCodeHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUS_SIDEBAR", function() { return MENUS_SIDEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUS_EMPLOYEE_SIDEBAR", function() { return MENUS_EMPLOYEE_SIDEBAR; });
// tslint:disable-next-line: eofline
const API_ENDPOINT = 'http://localhost:51954/';
const localStorageKey = 'access_token';
const SITENAME = 'KOIAPP';
const StatusCodeHttp = {
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404
};
// admin
const MENUS_SIDEBAR = [
    {
        id: '11111',
        level: 1,
        title: 'Quản lý danh mục',
        path: '',
        icon: 'dashboard',
        open: true,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Tình trạng phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Danh mục',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Loại phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
            {
                id: '11111',
                level: 2,
                title: 'Chức vụ',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
            {
                id: '11111',
                level: 2,
                title: 'đ',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý đặt phòng',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Danh sách khách hàng',
                path: 'customer-management',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
            {
                id: '11111',
                level: 2,
                title: 'Danh sách phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý nhân viên',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Danh sách nhân viên',
                path: 'employee-management',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý hệ thống',
        path: '',
        icon: 'team',
        open: true,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Tài khoản',
                path: '',
                icon: '',
                selected: false,
                disabled: false,
                open: false,
            },
            {
                id: '11111',
                level: 2,
                title: 'Vai trò',
                path: '',
                icon: '',
                selected: false,
                disabled: false,
                open: false,
            },
            // {
            //     id: '11111',
            //     level: 2,
            //     title: 'Quản lý API',
            //     path: 'api-management',
            //     icon: '',
            //     selected: false,
            //     disabled: false,
            //     open: false,
            // },
            {
                id: '11111',
                level: 2,
                title: 'Quyền truy cập',
                path: '',
                icon: '',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
];
//Nhân viên 
const MENUS_EMPLOYEE_SIDEBAR = [
    {
        id: '11111',
        level: 1,
        title: 'Dashboard',
        path: '',
        icon: 'dashboard',
        open: true,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Tình trạng phòng',
                path: 'qldatphong',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Danh mục',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Loại phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
            {
                id: '11111',
                level: 2,
                title: 'Dịch vụ',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
    {
        id: '11111',
        level: 1,
        title: 'Quản lý đặt phòng',
        path: '',
        icon: 'team',
        open: false,
        selected: false,
        disabled: false,
        children: [
            {
                id: '11111',
                level: 2,
                title: 'Danh sách khách hàng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
            {
                id: '11111',
                level: 2,
                title: 'Danh sách phòng',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
            {
                id: '11111',
                level: 2,
                title: 'Danh sách hóa đơn',
                path: '',
                icon: 'user',
                selected: false,
                disabled: false,
                open: false,
            },
        ]
    },
];


/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: TypeMessage, FormatDateTime, GioiTinh, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMessage", function() { return TypeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatDateTime", function() { return FormatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioiTinh", function() { return GioiTinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
const TypeMessage = {
    Success: 'success',
    Error: 'error',
    Warning: 'warning'
};
const FormatDateTime = {
    DATE_FMT: 'dd/MMM/yyyy',
    DATE_TIME_FMT: 'dd/MMM/yyyy hh:mm:ss'
};
const GioiTinh = [
    {
        value: 'F', display: 'Female'
    },
    { value: 'M', display: 'Male' }
];
var Role;
(function (Role) {
    Role["NhanVien"] = "Nh\u00E2n vi\u00EAn";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/nhanvien.service */ "./src/app/shared/services/nhanvien.service.ts");
/* harmony import */ var _trangchu_trangchu_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trangchu/trangchu.module */ "./src/app/trangchu/trangchu.module.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");






















Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_15___default.a);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_20__["CKEditorModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_7__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_9__["NzMenuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_16__["PagesModule"],
            _trangchu_trangchu_module__WEBPACK_IMPORTED_MODULE_19__["TrangchuModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"]
        ],
        providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["en_US"] },
            _shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_18__["NhanvienService"]],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/common_base/authentication/authentication.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common_base/authentication/authentication.service.ts ***!
  \**********************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");







let AuthenticationService = class AuthenticationService {
    constructor(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    getTokenFromLocalStorage() {
        return localStorage.getItem(_app_config__WEBPACK_IMPORTED_MODULE_5__["localStorageKey"]);
    }
    setTokenFromLocalStorage(value) {
        localStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_5__["localStorageKey"], value);
    }
    login(loginDto) {
        this.loginService.getToken(loginDto).subscribe(response => {
            if (response && response.Data && response.Data !== 'null') {
                this.setTokenFromLocalStorage(response.Data);
                this.getUser();
            }
        });
        return this.currentUser;
    }
    getUser() {
        this.loginService.getUser().subscribe(response => {
            if (response.Status === false) {
                return;
            }
            if (response && response.Data) {
                localStorage.setItem('currentUser', JSON.stringify(response.Data));
                this.currentUserSubject.next(response.Data);
            }
        });
    }
    logout() {
        // remove user from local storage to log user out
        this.setTokenFromLocalStorage('');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    isAdmin() {
        let result = false;
        //  if (this.currentUserValue.Status === 'Active') {
        // tslint:disable-next-line: only-arrow-functions
        this.currentUserValue.ListRoles.forEach(function (value) {
            // tslint:disable-next-line: triple-equals
            if (value.Name == _app_constant__WEBPACK_IMPORTED_MODULE_6__["Role"].Admin) {
                result = true;
            }
        });
        return result;
    }
    isNhanVien() {
        let result = false;
        //  if (this.currentUserValue.Status === 'Active') {
        // tslint:disable-next-line: only-arrow-functions
        this.currentUserValue.ListRoles.forEach(function (value) {
            // tslint:disable-next-line: triple-equals
            if (value.Name == _app_constant__WEBPACK_IMPORTED_MODULE_6__["Role"].NhanVien) {
                result = true;
            }
        });
        return result;
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/common_base/base.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common_base/base.component.ts ***!
  \***********************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.config */ "./src/app/app.config.ts");


class BaseComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.isLogin();
    }
    setTokenFromLocalStorage(value) {
        localStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_1__["localStorageKey"], value);
    }
    isLogin() {
        const tokenData = this.getTokenFromLocalStorage();
        if (tokenData && tokenData !== 'null') {
        }
        else {
            this.setTokenFromLocalStorage('');
            this.router.navigateByUrl('/login');
        }
    }
    getTokenFromLocalStorage() {
        return localStorage.getItem(_app_config__WEBPACK_IMPORTED_MODULE_1__["localStorageKey"]);
    }
    setTokenLocalStorageWhenLogout() {
        localStorage.removeItem(_app_config__WEBPACK_IMPORTED_MODULE_1__["localStorageKey"]);
    }
    getHeader() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Bearer ' + this.getTokenFromLocalStorage()
        });
        return headers;
    }
}


/***/ }),

/***/ "./src/app/common_base/base.service.ts":
/*!*********************************************!*\
  !*** ./src/app/common_base/base.service.ts ***!
  \*********************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let BaseService = class BaseService {
    constructor(http, message, modal) {
        this.http = http;
        this.message = message;
        this.modal = modal;
    }
    getHeader() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        });
        return headers;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            this.modal.error({
                nzTitle: 'This is an error message',
                nzContent: error.error.message
            });
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    get(url, params) {
        return this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + url, { params, headers: this.getHeader() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError) // then handle the error
        );
    }
    post(url, data) {
        return this.http.post(_app_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + url, data, { headers: this.getHeader() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(result => result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    /** POST: add a new object to the database */
    put(url, data) {
        return this.http.put(_app_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + url, data, { headers: this.getHeader() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(result => result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    /** DELETE: delete the hero from the server */
    delete(url, data) {
        return this.http.delete(_app_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + url, { headers: this.getHeader(), params: data })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(result => result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getDetail(url, id, nameParam) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set(nameParam, id);
        return this.http.get(_app_config__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"] + url, { headers: this.getHeader(), params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(result => result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
};
BaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
BaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaseService);



/***/ }),

/***/ "./src/app/icons-provider.module.ts":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutline"]];
let IconsProviderModule = class IconsProviderModule {
};
IconsProviderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"]],
        exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"]],
        providers: [
            { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NZ_ICONS"], useValue: icons }
        ]
    })
], IconsProviderModule);



/***/ }),

/***/ "./src/app/models/BenhDTO.ts":
/*!***********************************!*\
  !*** ./src/app/models/BenhDTO.ts ***!
  \***********************************/
/*! exports provided: BenhDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhDTO", function() { return BenhDTO; });
class BenhDTO {
}


/***/ }),

/***/ "./src/app/models/BienTheDTO.ts":
/*!**************************************!*\
  !*** ./src/app/models/BienTheDTO.ts ***!
  \**************************************/
/*! exports provided: BienTheDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienTheDTO", function() { return BienTheDTO; });
class BienTheDTO {
}


/***/ }),

/***/ "./src/app/models/ChungLoaiDTO.ts":
/*!****************************************!*\
  !*** ./src/app/models/ChungLoaiDTO.ts ***!
  \****************************************/
/*! exports provided: ChungLoaiDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChungLoaiDTO", function() { return ChungLoaiDTO; });
class ChungLoaiDTO {
}


/***/ }),

/***/ "./src/app/models/HinhAnhBienTheDTO.ts":
/*!*********************************************!*\
  !*** ./src/app/models/HinhAnhBienTheDTO.ts ***!
  \*********************************************/
/*! exports provided: HinhAnhBienTheDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HinhAnhBienTheDTO", function() { return HinhAnhBienTheDTO; });
class HinhAnhBienTheDTO {
}


/***/ }),

/***/ "./src/app/models/NhanVienDTO.ts":
/*!***************************************!*\
  !*** ./src/app/models/NhanVienDTO.ts ***!
  \***************************************/
/*! exports provided: NhanVienDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanVienDTO", function() { return NhanVienDTO; });
class NhanVienDTO {
}


/***/ }),

/***/ "./src/app/models/ThuocDTO.ts":
/*!************************************!*\
  !*** ./src/app/models/ThuocDTO.ts ***!
  \************************************/
/*! exports provided: ThuocDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuocDTO", function() { return ThuocDTO; });
class ThuocDTO {
}


/***/ }),

/***/ "./src/app/models/TrieuChungDTO.ts":
/*!*****************************************!*\
  !*** ./src/app/models/TrieuChungDTO.ts ***!
  \*****************************************/
/*! exports provided: TrieuChungDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungDTO", function() { return TrieuChungDTO; });
class TrieuChungDTO {
}


/***/ }),

/***/ "./src/app/models/UserDTO.ts":
/*!***********************************!*\
  !*** ./src/app/models/UserDTO.ts ***!
  \***********************************/
/*! exports provided: UserDTO, UserChangePasswordDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDTO", function() { return UserDTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangePasswordDTO", function() { return UserChangePasswordDTO; });
class UserDTO {
}
class UserChangePasswordDTO {
}


/***/ }),

/***/ "./src/app/models/base_response.ts":
/*!*****************************************!*\
  !*** ./src/app/models/base_response.ts ***!
  \*****************************************/
/*! exports provided: BaseResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponse", function() { return BaseResponse; });
class BaseResponse {
}
class Error {
}


/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: BaseResponse, NhanVienDTO, UserDTO, UserChangePasswordDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_response */ "./src/app/models/base_response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseResponse", function() { return _base_response__WEBPACK_IMPORTED_MODULE_0__["BaseResponse"]; });

/* harmony import */ var _NhanVienDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NhanVienDTO */ "./src/app/models/NhanVienDTO.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NhanVienDTO", function() { return _NhanVienDTO__WEBPACK_IMPORTED_MODULE_1__["NhanVienDTO"]; });

/* harmony import */ var _UserDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserDTO */ "./src/app/models/UserDTO.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserDTO", function() { return _UserDTO__WEBPACK_IMPORTED_MODULE_2__["UserDTO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserChangePasswordDTO", function() { return _UserDTO__WEBPACK_IMPORTED_MODULE_2__["UserChangePasswordDTO"]; });

// tslint:disable-next-line: eofline





/***/ }),

/***/ "./src/app/pages/account-management/users/user-dialog/user-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-dialog/user-dialog.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtbWFuYWdlbWVudC91c2Vycy91c2VyLWRpYWxvZy91c2VyLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/account-management/users/user-dialog/user-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-dialog/user-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/nhanvien.service */ "./src/app/shared/services/nhanvien.service.ts");
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");









let UserDialogComponent = class UserDialogComponent {
    constructor(userService, fb, message, modal, nhanvienService, roleService) {
        this.userService = userService;
        this.fb = fb;
        this.message = message;
        this.modal = modal;
        this.nhanvienService = nhanvienService;
        this.roleService = roleService;
        this.isConfirmLoading = false;
        this.isShowAdduser = false;
        this.isSaveLoading = false;
        this.hasEmployeeNotAccount = false;
        this.listUser = [];
        this.modelRoleModal = [];
        this.listRole = [];
        this.resetPassword = false;
        this.loading = false;
        this.selectValue = null;
        this.selectedEmployee = [];
        this.hasEmployee = false;
        this.userNameAsyncValidator = (control) => new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
            setTimeout(() => {
                this.userService.getByUserName(control.value).subscribe(response => {
                    if (response.Status && response.Data) {
                        this.selectedEmployee = response.Data;
                        // tslint:disable-next-line: triple-equals
                        if (this.selectedEmployee.Id != this.userDto.Id) {
                            observer.next({ error: true, duplicated: true });
                        }
                        else {
                            observer.next(null);
                        }
                    }
                    else {
                        observer.next(null);
                    }
                    observer.complete();
                });
            }, 1000);
        });
    }
    ngOnInit() {
        if (this.isAdd) {
            this.initFormValidate();
        }
        else {
            this.initFormValidateEdit();
        }
        this.getEmployeeNotAccount();
        this.getRoles();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.userNameAsyncValidator]],
            _selectBox_Employee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _selectBox_role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    initFormValidateEdit() {
        this.validateForm = this.fb.group({
            _ipText_userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], [this.userNameAsyncValidator]],
            _selectBox_Employee: [''],
            _selectBox_role: [''],
        });
    }
    getEmployeeNotAccount() {
        this.nhanvienService.getEmployeeNotAccount().subscribe(response => {
            if (response && response.Status && response.Data) {
                this.listEmployeeNotAccount = response.Data;
                this.hasEmployeeNotAccount = true;
                console.log(this.listEmployeeNotAccount);
            }
        });
    }
    getRoles() {
        this.roleService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listRole = JSON.parse(JSON.stringify(response.Data));
                this.modelRoleModal = JSON.parse(JSON.stringify(response.Data.map(p => {
                    return { name: p.Name, id: p.Id };
                })));
            }
        });
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    saveData() {
        this.isConfirmLoading = true;
        if (!this.userDto || this.isAdd) {
            this.insertUser();
        }
        else {
            this.updateUser();
        }
    }
    insertUser() {
        if (this.userDto) {
            this.userDto.Status = 'Active';
            this.userService.createEmployeeAccount(this.userDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Thêm tài khoản thành công');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Thêm tài khoản thất bại!');
                }
                this.isConfirmLoading = false;
            });
            this.resetForm();
        }
    }
    updateUser() {
        if (this.userDto) {
            this.userService.updateEmployeeAccount(this.userDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Cập nhật tài khoản người dùng thành công');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Cập nhật tài khoản người dùng không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
};
UserDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_6__["NhanvienService"] },
    { type: src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDialogComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDialogComponent.prototype, "userDto", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDialogComponent.prototype, "isShowAddRole", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDialogComponent.prototype, "listRoles", void 0);
UserDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-dialog/user-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-dialog.component.css */ "./src/app/pages/account-management/users/user-dialog/user-dialog.component.css")).default]
    })
], UserDialogComponent);



/***/ }),

/***/ "./src/app/pages/account-management/users/user-list/user-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-list/user-list.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td span [nz-icon] {\r\n    margin-right: 10px;\r\n    vertical-align: 0;\r\n}\r\n\r\ntd span.active i,\r\ntd span.active {\r\n    color: green;\r\n}\r\n\r\ntd span.locked i,\r\ntd span.locked {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC1tYW5hZ2VtZW50L3VzZXJzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50LW1hbmFnZW1lbnQvdXNlcnMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQgc3BhbiBbbnotaWNvbl0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IDA7XHJcbn1cclxuXHJcbnRkIHNwYW4uYWN0aXZlIGksXHJcbnRkIHNwYW4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxudGQgc3Bhbi5sb2NrZWQgaSxcclxudGQgc3Bhbi5sb2NrZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/account-management/users/user-list/user-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-list/user-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_UserDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/UserDTO */ "./src/app/models/UserDTO.ts");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");
/* harmony import */ var _user_role_dialog_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-role-dialog/user-role-dialog.component */ "./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.ts");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-dialog/user-dialog.component */ "./src/app/pages/account-management/users/user-dialog/user-dialog.component.ts");









let UserListComponent = class UserListComponent {
    constructor(userService, modalService, message, loginService) {
        this.userService = userService;
        this.modalService = modalService;
        this.message = message;
        this.loginService = loginService;
        this.pageTitle = 'Danh sách tài khoản người dùng hoạt động';
        this.headerListUserLocked = "Danh sách tài khoản bị khóa";
        this.isShowAddRole = false;
        this.isSaveLoading = false;
        this.isLockAccount = false;
        this.isShowAddUser = false;
        this.isConfirmLoading = false;
        this.listUser = [];
        this.listUserAccountLocked = [];
        this.modelRoleModal = [];
        this.listUserRoles = [];
    }
    ngOnInit() {
        // get danh sách tài khoản người dùng
        this.getListUsers();
        this.isConfirmLoading = false;
        this.getUser();
    }
    getListUsers() {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.userService.getAllUserAccountActive().subscribe(response => {
                if (response && response.Status) {
                    this.listUser = JSON.parse(JSON.stringify(response.Data));
                }
            });
        }, 2000);
        // this.isConfirmLoading = false;
        this.getListUsersAccountLocked();
    }
    getUser() {
        this.loginService.getUser().subscribe(response => {
            if (response.Status === false) {
                return;
            }
            if (response && response.Data) {
                this.currentUser = response.Data;
            }
        });
    }
    createUser() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm tài khoản người dùng',
            nzContent: _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UserDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                userDto: new src_app_models_UserDTO__WEBPACK_IMPORTED_MODULE_4__["UserDTO"]()
            },
            nzWidth: '800',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    getListUsersAccountLocked() {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.userService.getAllUserAccountLocked().subscribe(response => {
                if (response && response.Status) {
                    this.listUserAccountLocked = JSON.parse(JSON.stringify(response.Data));
                }
            });
        }, 1000);
        this.isConfirmLoading = false;
    }
    editUser(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chỉnh sửa thông tin tài khoản ' + data.UserName,
            nzContent: _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UserDialogComponent"],
            nzComponentParams: {
                userDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '480',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    lockAccount(data) {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.changeStatusAccountToLocked(data);
        }, 2000);
    }
    changeStatusAccountToLocked(userSelected) {
        if (userSelected) {
            userSelected.Status = 'Locked';
            this.userService.updateStatusAccount(userSelected).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["TypeMessage"].Success, 'Khóa tài khoản thành công!');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["TypeMessage"].Error, 'Khóa tài khoản không thành công!');
                }
                this.isConfirmLoading = false;
                this.ngOnInit();
            });
        }
    }
    unLockAccount(data) {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.changeStatusAccountToActive(data);
        }, 2000);
    }
    changeStatusAccountToActive(userSelected) {
        if (userSelected) {
            userSelected.Status = 'Active';
            this.userService.updateStatusAccount(userSelected).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["TypeMessage"].Success, 'Mở khóa tài khoản thành công!');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["TypeMessage"].Error, 'Mở khóa tài khoản không thành công!');
                }
                this.isConfirmLoading = false;
                this.ngOnInit();
            });
        }
    }
    resetPassword(data) {
        this.modalService.confirm({
            nzTitle: 'Đặt lại mật khẩu',
            nzContent: `<b style='color: red;'>Bạn có chắc chắn đặt lại mật khẩu cho tài khoản ` + data.UserName + `?</b>`,
            nzOkText: 'Đồng ý',
            nzOkType: 'danger',
            nzOnOk: () => this.handleResetPasswordAccount(data),
            nzCancelText: 'Hủy',
        });
    }
    /* reset password */
    handleResetPasswordAccount(userResetPass) {
        this.userService.resetPasswordAccount(userResetPass).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["TypeMessage"].Success, 'Đặt lại mật khẩu cho tài khoản thành công!');
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["TypeMessage"].Error, 'Đặt lại mật khẩu cho tài khoản không thành công!');
            }
        });
    }
    refreshData() {
        this.getListUsers();
    }
    showModalRole(data) {
        const modalAddRole = this.modalService.create({
            nzTitle: 'Thêm vai trò cho tài khoản ' + data.UserName,
            nzContent: _user_role_dialog_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UserRoleDialogComponent"],
            nzComponentParams: {
                isShowAddRole: true,
                userDto: JSON.parse(JSON.stringify(data)),
                roleIds: JSON.parse(JSON.stringify(data.RoleIds))
            },
            nzWidth: '600',
        });
        // Return a result when closed
        modalAddRole.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
    { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] }
];
UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-list/user-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-list.component.css */ "./src/app/pages/account-management/users/user-list/user-list.component.css")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtbWFuYWdlbWVudC91c2Vycy91c2VyLXJlc2V0LXBhc3N3b3JkL3VzZXItcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: UserResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResetPasswordComponent", function() { return UserResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_common_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common_base/base.component */ "./src/app/common_base/base.component.ts");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/users.service */ "./src/app/shared/services/users.service.ts");









let UserResetPasswordComponent = class UserResetPasswordComponent extends src_app_common_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"] {
    constructor(fb, userService, modal, router, loginService, message) {
        super(router, loginService);
        this.fb = fb;
        this.userService = userService;
        this.modal = modal;
        this.router = router;
        this.loginService = loginService;
        this.message = message;
        this.confirmValidatetor = (control) => {
            if (!control.value) {
                return { error: true, required: true };
            }
            else if (control.value !== this.validateForm.controls._ipText_NewPass.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
    }
    ngOnInit() {
        this.initFormValidate();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_userName: [''],
            _ipText_OldPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipText_NewPass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            _ipText_ConfirmNewPass: ['', [this.confirmValidatetor]],
        });
    }
    validateConfirmPassword() {
        setTimeout(() => this.validateForm.controls._ipText_ConfirmNewPass.updateValueAndValidity());
    }
    submitForm() {
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsDirty();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.saveData();
        setTimeout(() => {
        }, 3000);
        this.modal.destroy();
    }
    saveData() {
        const userChangePassDTO = {
            UserId: this.userDto.Id,
            oldPassword: this.validateForm.controls._ipText_OldPass.value,
            newPassword: this.validateForm.controls._ipText_NewPass.value,
        };
        this.changePassword(userChangePassDTO);
    }
    changePassword(userChangePassDTO) {
        if (userChangePassDTO) {
            this.userService.updatePasswordAccount(userChangePassDTO).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Mật khẩu của bạn vừa được thay đổi, vui lòng đăng nhập lại với mật khẩu mới!');
                    setTimeout(() => {
                    }, 3000);
                    this.logout();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Cập nhật mật khẩu không thành công. Kiểm tra lại mật khẩu hiện tại!');
                }
            });
        }
    }
    logout() {
        this.setTokenFromLocalStorage('');
        const token = this.getTokenFromLocalStorage();
        if (token === '' || token) {
            this.router.navigateByUrl('/login');
        }
    }
};
UserResetPasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserResetPasswordComponent.prototype, "userDto", void 0);
UserResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-reset-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-reset-password.component.css */ "./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.css")).default]
    })
], UserResetPasswordComponent);



/***/ }),

/***/ "./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQtbWFuYWdlbWVudC91c2Vycy91c2VyLXJvbGUtZGlhbG9nL3VzZXItcm9sZS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: UserRoleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleDialogComponent", function() { return UserRoleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/role.service */ "./src/app/shared/services/role.service.ts");






let UserRoleDialogComponent = class UserRoleDialogComponent {
    constructor(fb, roleService, modal, message) {
        this.fb = fb;
        this.roleService = roleService;
        this.modal = modal;
        this.message = message;
        this.listRole = [];
        this.modelRoleModal = [];
        this.userRole = [];
        this.listUser = [];
        this.listRolesOfUser = [];
        this.validateForm = this.fb.group({
            _selectBox_role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.getRoles();
    }
    getRoles() {
        this.roleService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listRole = JSON.parse(JSON.stringify(response.Data));
                this.modelRoleModal = JSON.parse(JSON.stringify(response.Data.map(p => { return { name: p.Name, id: p.Id }; })));
            }
        });
    }
    addRole() {
        const userRole = [];
        this.roleIds.forEach((item) => {
            userRole.push({ userId: this.userDto.Id, roleId: item });
        });
        this.roleService.createRoleUser(userRole).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm vai trò cho tài khoản thành công!');
                this.listUser.find(p => p.Id === this.userDto.Id).ListRoles = this.listRoles;
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm vai trò cho tài khoản không thành công!');
            }
        });
        this.modal.destroy();
    }
};
UserRoleDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserRoleDialogComponent.prototype, "isShowAddRole", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserRoleDialogComponent.prototype, "listRoles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserRoleDialogComponent.prototype, "userDto", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserRoleDialogComponent.prototype, "roleIds", void 0);
UserRoleDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-role-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-role-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-role-dialog.component.css */ "./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.css")).default]
    })
], UserRoleDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\r\n    background-color: #ffffff;\r\n    padding: 24px;\r\n    display: flex;\r\n}\r\n\r\n.extra-content {\r\n    max-width: 240px;\r\n    text-align: left;\r\n    padding-right: 20px;\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n}\r\n\r\n.content-link {\r\n    padding-top: 16px;\r\n}\r\n\r\n.content-link a {\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n    margin-right: 32px;\r\n}\r\n\r\n.content-link a img {\r\n    margin-right: 8px;\r\n}\r\n\r\n.ant-avatar.ant-avatar-icon {\r\n    margin-top: 16px;\r\n    margin-right: 16px;\r\n    width: 120px;\r\n    height: 120px;\r\n    font-size: 75px;\r\n}\r\n\r\n/* detail benh */\r\n\r\n:focus {\r\n    outline: 0px solid transparent !important;\r\n}\r\n\r\n.timeline {\r\n    padding: 50px 0;\r\n    position: relative;\r\n}\r\n\r\n.timeline-nodes {\r\n    padding-bottom: 25px;\r\n    position: relative;\r\n}\r\n\r\n.timeline-nodes:nth-child(even) {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.timeline h3,\r\n.timeline p {\r\n    padding: 5px 15px;\r\n}\r\n\r\n.timeline h3 {\r\n    font-weight: lighter;\r\n    background: var(--blue);\r\n}\r\n\r\n.timeline p,\r\n.timeline time {\r\n    color: var(--blue)\r\n}\r\n\r\n.timeline::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 0;\r\n    border-left: 2px dashed var(--blue);\r\n    height: 100%;\r\n    z-index: 1;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.timeline-content {\r\n    border: 1px solid var(--blue);\r\n    position: relative;\r\n    border-radius: 0 0 10px 10px;\r\n    box-shadow: 0px 3px 25px 0px rgba(10, 55, 90, 0.2)\r\n}\r\n\r\n.timeline-nodes:nth-child(odd) h3,\r\n.timeline-nodes:nth-child(odd) p {\r\n    text-align: right;\r\n}\r\n\r\n.timeline-nodes:nth-child(odd) .timeline-date {\r\n    text-align: left;\r\n}\r\n\r\n.timeline-nodes:nth-child(even) .timeline-date {\r\n    text-align: right;\r\n}\r\n\r\n.timeline-nodes:nth-child(odd) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 100%;\r\n    width: 0;\r\n    border-left: 10px solid var(--blue);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n\r\n.timeline-nodes:nth-child(even) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 100%;\r\n    width: 0;\r\n    border-right: 10px solid var(--blue);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n\r\n.timeline-image {\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n.timeline-image::before {\r\n    content: \"\";\r\n    width: 80px;\r\n    height: 80px;\r\n    border: 2px dashed var(--blue);\r\n    border-radius: 50%;\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: #fff;\r\n    z-index: 1;\r\n}\r\n\r\n.timeline-image img {\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n/*small device style*/\r\n\r\n@media (max-width: 767px) {\r\n    .timeline-nodes:nth-child(odd) h3,\r\n    .timeline-nodes:nth-child(odd) p {\r\n        text-align: left\r\n    }\r\n    .timeline-nodes:nth-child(even) {\r\n        flex-direction: row;\r\n    }\r\n    .timeline::before {\r\n        content: \"\";\r\n        display: block;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 4%;\r\n        width: 0;\r\n        border-left: 2px dashed var(--blue);\r\n        height: 100%;\r\n        z-index: 1;\r\n        transform: translateX(-50%);\r\n    }\r\n    .timeline h3 {\r\n        font-size: 1.7rem;\r\n    }\r\n    .timeline p {\r\n        font-size: 14px;\r\n    }\r\n    .timeline-image {\r\n        position: absolute;\r\n        left: 0%;\r\n        top: 60px;\r\n        /*transform: translateX(-50%;);*/\r\n    }\r\n    .timeline-nodes:nth-child(odd) .timeline-content::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 5%;\r\n        left: auto;\r\n        right: 100%;\r\n        width: 0;\r\n        border-left: 0;\r\n        border-right: 10px solid var(--blue);\r\n        border-top: 10px solid transparent;\r\n        border-bottom: 10px solid transparent;\r\n    }\r\n    .timeline-nodes:nth-child(even) .timeline-content::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 5%;\r\n        right: 100%;\r\n        width: 0;\r\n        border-right: 10px solid var(--blue);\r\n        border-top: 10px solid transparent;\r\n        border-bottom: 10px solid transparent;\r\n    }\r\n    .timeline-nodes:nth-child(even) .timeline-date {\r\n        text-align: left;\r\n    }\r\n    .timeline-image::before {\r\n        width: 65px;\r\n        height: 65px;\r\n    }\r\n}\r\n\r\n/*extra small device style */\r\n\r\n@media (max-width: 575px) {\r\n    .timeline::before {\r\n        content: \"\";\r\n        display: block;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 3%;\r\n    }\r\n    .timeline-image {\r\n        position: absolute;\r\n        left: -5%;\r\n    }\r\n    .timeline-image::before {\r\n        width: 60px;\r\n        height: 60px;\r\n    }\r\n}\r\n\r\n/* thẻ a */\r\n\r\n/* unvisited link */\r\n\r\na {\r\n    font-family: unset !important;\r\n    font-weight: normal;\r\n}\r\n\r\na:link {\r\n    color: #1890ff !important;\r\n}\r\n\r\n/* visited link */\r\n\r\na:visited {\r\n    color: 1890ff !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\na:visited:focus {\r\n    color: 1890ff !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\n/* mouse over link */\r\n\r\na:hover {\r\n    color: #1890ff !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\na:focus {\r\n    color: yellow !important;\r\n}\r\n\r\n/* selected link */\r\n\r\na:active {\r\n    color: #1890ff !important;\r\n    background-color: skyblue !important;\r\n    text-decoration: underline !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuaC1tYW5hZ2VtZW50L2JlbmgvYmVuaC1kZXRhaWwvYmVuaC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFHQSxnQkFBZ0I7O0FBRWhCO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsUUFBUTtJQUNSLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQSxxQkFBcUI7O0FBRXJCO0lBQ0k7O1FBRUk7SUFDSjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sUUFBUTtRQUNSLFFBQVE7UUFDUixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxVQUFVO1FBQ1YsV0FBVztRQUNYLFFBQVE7UUFDUixjQUFjO1FBQ2Qsb0NBQW9DO1FBQ3BDLGtDQUFrQztRQUNsQyxxQ0FBcUM7SUFDekM7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFdBQVc7UUFDWCxRQUFRO1FBQ1Isb0NBQW9DO1FBQ3BDLGtDQUFrQztRQUNsQyxxQ0FBcUM7SUFDekM7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSjs7QUFHQSw0QkFBNEI7O0FBRTVCO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sUUFBUTtJQUNaO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKOztBQUdBLFVBQVU7O0FBR1YsbUJBQW1COztBQUVuQjtJQUNJLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0EsaUJBQWlCOztBQUVqQjtJQUNJLHdCQUF3QjtJQUN4QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUNBQXFDO0FBQ3pDOztBQUdBLG9CQUFvQjs7QUFFcEI7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUdBLGtCQUFrQjs7QUFFbEI7SUFDSSx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHFDQUFxQztBQUN6QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC9iZW5oL2JlbmgtZGV0YWlsL2JlbmgtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leHRyYS1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbnRlbnQtbGluayB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGluayBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGluayBhIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmFudC1hdmF0YXIuYW50LWF2YXRhci1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgZm9udC1zaXplOiA3NXB4O1xyXG59XHJcblxyXG5cclxuLyogZGV0YWlsIGJlbmggKi9cclxuXHJcbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRpbWVsaW5lLW5vZGVzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLnRpbWVsaW5lIGgzLFxyXG4udGltZWxpbmUgcCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLnRpbWVsaW5lIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XHJcbn1cclxuXHJcbi50aW1lbGluZSBwLFxyXG4udGltZWxpbmUgdGltZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxufVxyXG5cclxuLnRpbWVsaW5lOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCB2YXIoLS1ibHVlKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jb250ZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMjVweCAwcHggcmdiYSgxMCwgNTUsIDkwLCAwLjIpXHJcbn1cclxuXHJcbi50aW1lbGluZS1ub2RlczpudGgtY2hpbGQob2RkKSBoMyxcclxuLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChvZGQpIHAge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ub2RlczpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtZGF0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKG9kZCkgLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pbWFnZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCB2YXIoLS1ibHVlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4udGltZWxpbmUtaW1hZ2UgaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuXHJcbi8qc21hbGwgZGV2aWNlIHN0eWxlKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChvZGQpIGgzLFxyXG4gICAgLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChvZGQpIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnRcclxuICAgIH1cclxuICAgIC50aW1lbGluZS1ub2RlczpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDQlO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkIHZhcigtLWJsdWUpO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCU7KTsqL1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50OjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtZGF0ZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZS1pbWFnZTo6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogNjVweDtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKmV4dHJhIHNtYWxsIGRldmljZSBzdHlsZSAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAudGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDMlO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWltYWdlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTUlO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWltYWdlOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIHRo4bq7IGEgKi9cclxuXHJcblxyXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xyXG5cclxuYSB7XHJcbiAgICBmb250LWZhbWlseTogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbmE6bGluayB7XHJcbiAgICBjb2xvcjogIzE4OTBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogdmlzaXRlZCBsaW5rICovXHJcblxyXG5hOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IDE4OTBmZiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuYTp2aXNpdGVkOmZvY3VzIHtcclxuICAgIGNvbG9yOiAxODkwZmYgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxODkwZmYgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmE6Zm9jdXMge1xyXG4gICAgY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5cclxuYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICMxODkwZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BenhDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhDetailComponent", function() { return BenhDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_TrieuChungDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/TrieuChungDTO */ "./src/app/models/TrieuChungDTO.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");
/* harmony import */ var src_app_shared_services_lieutrinh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/lieutrinh.service */ "./src/app/shared/services/lieutrinh.service.ts");
/* harmony import */ var src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/thuoc.service */ "./src/app/shared/services/thuoc.service.ts");
/* harmony import */ var src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/trieuchung.service */ "./src/app/shared/services/trieuchung.service.ts");
/* harmony import */ var _benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../benh-dialog/benh-dialog.component */ "./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.ts");
/* harmony import */ var _new_trieu_chung_new_trieu_chung_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../new-trieu-chung/new-trieu-chung.component */ "./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.ts");
/* harmony import */ var _trieuchung_of_benh_trieuchung_of_benh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../trieuchung-of-benh/trieuchung-of-benh.component */ "./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.ts");













let BenhDetailComponent = class BenhDetailComponent {
    //hasThuoc: any = false;
    constructor(benhService, lieutrinhService, trieuchungService, activatedRoute, modalService, message, thuocService) {
        this.benhService = benhService;
        this.lieutrinhService = lieutrinhService;
        this.trieuchungService = trieuchungService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.message = message;
        this.thuocService = thuocService;
        this.pageTitle = 'Thông tin chi tiết ';
        this.selected = [];
        this.selectedThuoc = [];
        this.hasBenh = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.getDetail(params.mabenh);
        });
    }
    getDetail(mabenh) {
        this.benhService.getDetail(mabenh).subscribe(response => {
            if (response.Status === true) {
                this.selected = response.Data;
                this.hasBenh = true;
            }
            console.log(this.selected);
        });
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chỉnh sửa thông tin ',
            nzContent: _benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_10__["BenhDialogComponent"],
            nzComponentParams: {
                benhDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    create(data) {
        const modalCreate = this.modalService.create({
            nzTitle: 'Cập nhật triệu chứng',
            nzContent: _trieuchung_of_benh_trieuchung_of_benh_component__WEBPACK_IMPORTED_MODULE_12__["TrieuchungOfBenhComponent"],
            nzComponentParams: {
                //  isShowAdd: true,
                benhDto: JSON.parse(JSON.stringify(data)),
                maTrieuchungs: JSON.parse(JSON.stringify(data.MaTrieuChungs))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    createTrieuChung() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm triệu chứng',
            nzContent: _new_trieu_chung_new_trieu_chung_component__WEBPACK_IMPORTED_MODULE_11__["NewTrieuChungComponent"],
            nzComponentParams: {
                isAddtt: true,
                trieuchungDto: new src_app_models_TrieuChungDTO__WEBPACK_IMPORTED_MODULE_5__["TrieuChungDTO"]()
                //  trieuchungDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '500',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    // public confirmDeleteLieuTrinh(data: any) {
    //   const modalDelete = this.modalService.confirm({
    //     nzTitle: 'Bạn có chắc chắn xóa liệu trình này?',
    //     nzContent: `<b style='color: red;'> Thông tin:${data.MoTaLieuTrinh} </b>`,
    //     nzOkText: 'Xóa',
    //     nzOkType: 'danger',
    //     nzOnOk: () => this.deleteLieuTrinh(data.MaLieuTrinh),
    //     nzCancelText: 'Hủy',
    //   });
    //   // Return a result when closed
    //   modalDelete.afterClose.subscribe(() => {
    //     return this.ngOnInit();
    //   });
    // }
    /**
    * delete data
    */
    // private deleteLieuTrinh(malieutrinh: any) {
    //   const param: any = { malieutrinh: malieutrinh };
    //   this.lieutrinhService.delete(param).subscribe(response => {
    //     if (response.Status === true) {
    //       this.message.create(TypeMessage.Success, 'Xóa thành công!');
    //     } else {
    //       this.message.create(TypeMessage.Error, 'Xóa không thành công!');
    //     }
    //   });
    //   }
    /**
   * delete data
   */
    deleteTrieuChung(matrieuchung) {
        const param = { matrieuchung };
        this.trieuchungService.delete(param).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Xóa thành công!');
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Xóa không thành công!');
            }
        });
    }
    confirmDeleteTrieuChung(data) {
        const modalDelete = this.modalService.confirm({
            nzTitle: 'Bạn có chắc chắn xóa triệu chứng này?',
            nzContent: `<b style='color: red;'> Thông tin:${data.MoTaTrieuChung} </b>`,
            nzOkText: 'Xóa',
            nzOkType: 'danger',
            nzOnOk: () => this.deleteTrieuChung(data.MaTrieuChung),
            nzCancelText: 'Hủy',
        });
        // Return a result when closed
        modalDelete.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    // xem chi tiết
    viewLT(mathuoc) {
        // const param: any = { mathuoc };
        this.thuocService.getDetail(mathuoc).subscribe(response => {
            if (response.Status === true) {
                this.selectedThuoc = response.Data;
                //  this.hasThuoc = true;
            }
            console.log(this.selectedThuoc);
        });
    }
};
BenhDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__["BenhService"] },
    { type: src_app_shared_services_lieutrinh_service__WEBPACK_IMPORTED_MODULE_7__["LieutrinhService"] },
    { type: src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_9__["TrieuchungService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_8__["ThuocService"] }
];
BenhDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benh-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./benh-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./benh-detail.component.css */ "./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.css")).default]
    })
], BenhDetailComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC9iZW5oL2JlbmgtZGlhbG9nL2JlbmgtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BenhDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhDialogComponent", function() { return BenhDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");
/* harmony import */ var src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/thuoc.service */ "./src/app/shared/services/thuoc.service.ts");
/* harmony import */ var src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/trieuchung.service */ "./src/app/shared/services/trieuchung.service.ts");









let BenhDialogComponent = class BenhDialogComponent {
    constructor(thuocService, trieuChungService, fb, modal, benhService, message) {
        this.thuocService = thuocService;
        this.trieuChungService = trieuChungService;
        this.fb = fb;
        this.modal = modal;
        this.benhService = benhService;
        this.message = message;
        this.isConfirmLoading = false;
        this.isShowAdd = false;
        this.isSaveLoading = false;
        this.loading = false;
        this.dataSource = [];
        this.listThuoc = [];
        this.modelThuocModal = [];
        this.listTrieuchung = [];
        this.modelTrieuChungModal = [];
        this.beforeUpload = (file) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.message.error('Vui lòng tải lên hình ảnh có định dạng PNG hoặc JPEG!');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.message.error('Vui lòng tải lên hình ảnh có dung lượng nhỏ hơn hoặc bằng 2MB!');
                    observer.complete();
                    return;
                }
                observer.next(isJpgOrPng && isLt2M);
                observer.complete();
            });
        };
    }
    ngOnInit() {
        // if (this.isAdd) {
        //   this.initFormValidate();
        // } else {
        //   this.initFormValidateEdit();
        // }
        this.initFormValidate();
        this.getThuocs();
        this.getTrieuChungs();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_TenBenh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_NguyenNhan: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_CachDieuTri: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_MoTa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_NoiDungHienThi: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _selectBox_thuoc: [''],
            _selectBox_trieuchung: [''],
            _ipUpload_image: ['']
        });
    }
    // private initFormValidateEdit(): void {
    //   this.validateForm = this.fb.group({
    //     _ipText_TenBenh: ['', Validators.required],
    //     _ipTextarea_NguyenNhan: ['', Validators.required],
    //     _ipTextarea_CachDieuTri:  ['', Validators.required],
    //     _ipTextarea_MoTa: ['', Validators.required],
    //    // _selectBox_thuoc: ['', [Validators.required]],
    //   });
    // }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    saveData() {
        this.isConfirmLoading = true;
        if (!this.benhDto || this.isAdd) {
            this.insert();
        }
        else {
            this.update();
        }
    }
    // tao  moi
    insert() {
        if (this.benhDto) {
            this.benhService.InsertAll(this.benhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Thêm thành công!');
                    this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
                this.resetForm();
            });
        }
    }
    update() {
        if (this.benhDto) {
            this.benhService.update(this.benhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Cập nhật bệnh thành công!');
                    console.log(this.benhDto);
                    this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Cập nhật bệnh không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
    getThuocs() {
        this.thuocService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listThuoc = JSON.parse(JSON.stringify(response.Data));
                this.modelThuocModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
    getTrieuChungs() {
        this.trieuChungService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listTrieuchung = JSON.parse(JSON.stringify(response.Data));
                this.modelTrieuChungModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
    loadList() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    handleChange(info) {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.avatarUrl = img;
                    this.benhDto.HinhAnh = this.avatarUrl;
                });
                break;
            case 'error':
                this.message.error('Lỗi mạng!');
                this.loading = false;
                break;
        }
    }
};
BenhDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_7__["ThuocService"] },
    { type: src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_8__["TrieuchungService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__["BenhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BenhDialogComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BenhDialogComponent.prototype, "benhDto", void 0);
BenhDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benh-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./benh-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./benh-dialog.component.css */ "./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.css")).default]
    })
], BenhDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/benh/benh-list/benh-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/benh-list/benh-list.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* unvisited link */\r\n\r\na {\r\n    font-family: unset !important;\r\n    font-weight: normal;\r\n}\r\n\r\na:link {\r\n    color: #1890ff !important;\r\n}\r\n\r\n/* visited link */\r\n\r\na:visited {\r\n    color: #1890ff !important;\r\n}\r\n\r\n/* mouse over link */\r\n\r\na:hover {\r\n    color: #1890ff !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\n/* selected link */\r\n\r\na:active {\r\n    color: #1890ff !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuaC1tYW5hZ2VtZW50L2JlbmgvYmVuaC1saXN0L2JlbmgtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjs7QUFFbkI7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0Esb0JBQW9COztBQUVwQjtJQUNJLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC9iZW5oL2JlbmgtbGlzdC9iZW5oLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHVudmlzaXRlZCBsaW5rICovXHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuXHJcbmE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogIzE4OTBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogbW91c2Ugb3ZlciBsaW5rICovXHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5cclxuYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICMxODkwZmYgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/benh-management/benh/benh-list/benh-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/benh-list/benh-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BenhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhListComponent", function() { return BenhListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_BenhDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/BenhDTO */ "./src/app/models/BenhDTO.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");
/* harmony import */ var _benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../benh-dialog/benh-dialog.component */ "./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.ts");
/* harmony import */ var _thuoc_ofbenh_dialog_thuoc_ofbenh_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component */ "./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.ts");









let BenhListComponent = class BenhListComponent {
    constructor(benhService, message, router, modalService) {
        this.benhService = benhService;
        this.message = message;
        this.router = router;
        this.modalService = modalService;
        this.isConfirmLoading = false;
        this.pageTitle = 'Danh sách các loại bệnh';
        this.dataSource = [];
        this.sName = '';
    }
    ngOnInit() {
        this.isConfirmLoading = true;
        this.loadList();
    }
    loadList() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    create() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm bệnh',
            nzContent: _benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BenhDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                benhDto: new src_app_models_BenhDTO__WEBPACK_IMPORTED_MODULE_5__["BenhDTO"]()
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chỉnh sửa thông tin ',
            nzContent: _benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BenhDialogComponent"],
            nzComponentParams: {
                benhDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    showModal(data) {
        const modalAdd = this.modalService.create({
            nzTitle: 'Thêm thuốc điều trị cho bệnh ',
            nzContent: _thuoc_ofbenh_dialog_thuoc_ofbenh_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ThuocOfbenhDialogComponent"],
            nzComponentParams: {
                isShowAdd: true,
                benhDto: JSON.parse(JSON.stringify(data)),
                maThuocs: JSON.parse(JSON.stringify(data.MaThuocs))
            },
            nzWidth: '600',
        });
        // Return a result when closed
        modalAdd.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    // xem chi tiết 
    view(mabenh) {
        this.navigateDetail(mabenh);
    }
    navigateDetail(mabenh) {
        if (mabenh) {
            // chuyen sang màn hình chi tiết 
            this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    // xem chi tiết 
    viewThuoc(mathuoc) {
        this.navigateDetailThuoc(mathuoc);
    }
    navigateDetailThuoc(mathuoc) {
        if (mathuoc) {
            // chuyen sang màn hình chi tiết 
            this.router.navigate(['admin/cac-loai-thuoc/chitiet/'], { queryParams: { mathuoc: mathuoc } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    confirmDelete(data) {
        const modalDelete = this.modalService.confirm({
            nzTitle: 'Bạn có chắc chắn xóa bệnh này?',
            nzContent: `<b style='color: red;'> Bệnh: ${data.TenBenh}</b>`,
            nzOkText: 'Xóa',
            nzOkType: 'danger',
            nzOnOk: () => this.delete(data.MaBenh),
            nzCancelText: 'Hủy',
        });
        // Return a result when closed
        modalDelete.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    /**
  * delete data
  */
    delete(mabenh) {
        const param = { mabenh: mabenh };
        this.benhService.delete(param).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Xóa thành công!');
                // get lai danh sach nhan vien
                this.loadList();
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Xóa không thành công!');
            }
        });
    }
};
BenhListComponent.ctorParameters = () => [
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__["BenhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
BenhListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benh-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./benh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/benh-list/benh-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./benh-list.component.css */ "./src/app/pages/benh-management/benh/benh-list/benh-list.component.css")).default]
    })
], BenhListComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC9iZW5oL25ldy10cmlldS1jaHVuZy9uZXctdHJpZXUtY2h1bmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NewTrieuChungComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTrieuChungComponent", function() { return NewTrieuChungComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");






let NewTrieuChungComponent = class NewTrieuChungComponent {
    constructor(benhService, message, modal, fb) {
        this.benhService = benhService;
        this.message = message;
        this.modal = modal;
        this.fb = fb;
        this.isConfirmLoading = false;
        this.isShowAdd = false;
        this.isSaveLoading = false;
        this.selected = [];
        this.modelbenhModal = [];
    }
    ngOnInit() {
        this.initFormValidate();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_Tentrieuchung: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    saveData() {
        this.isConfirmLoading = true;
        if (!this.trieuchungDto || this.isAddtt) {
            this.insert();
        }
        else {
            this.update();
        }
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    // tao  moi
    insert() {
        if (this.trieuchungDto) {
            this.benhService.createTrieuChung(this.trieuchungDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm thành công!');
                    //  this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
            });
            this.resetForm();
        }
    }
    update() {
        if (this.trieuchungDto) {
            this.benhService.updateTrieuChung(this.trieuchungDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Cập nhật triệu chứng thành công!');
                    console.log(this.trieuchungDto);
                    // this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Cập nhật triệu chứng không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
};
NewTrieuChungComponent.ctorParameters = () => [
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__["BenhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewTrieuChungComponent.prototype, "isAddtt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewTrieuChungComponent.prototype, "trieuchungDto", void 0);
NewTrieuChungComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-trieu-chung',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-trieu-chung.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-trieu-chung.component.css */ "./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.css")).default]
    })
], NewTrieuChungComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC9iZW5oL3RodW9jLW9mYmVuaC1kaWFsb2cvdGh1b2Mtb2ZiZW5oLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ThuocOfbenhDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuocOfbenhDialogComponent", function() { return ThuocOfbenhDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/thuoc.service */ "./src/app/shared/services/thuoc.service.ts");






let ThuocOfbenhDialogComponent = class ThuocOfbenhDialogComponent {
    constructor(fb, thuocService, modal, message) {
        this.fb = fb;
        this.thuocService = thuocService;
        this.modal = modal;
        this.message = message;
        this.listThuoc = [];
        this.modelRoleModal = [];
        this.thuocdieutri = [];
        this.listBenh = [];
        this.listThuocsOfBenh = [];
        this.validateForm = this.fb.group({
            _selectBox_thuoc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.getThuocs();
    }
    getThuocs() {
        this.thuocService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listThuoc = JSON.parse(JSON.stringify(response.Data));
                this.modelRoleModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
    add() {
        const thuocdieutri = [];
        this.maThuocs.forEach((item) => {
            thuocdieutri.push({ mabenh: this.benhDto.MaBenh, mathuoc: item });
        });
        this.thuocService.CreateThuocDieuTri(thuocdieutri).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm thuốc điều trị thành công!');
                this.listBenh.find(p => p.MaBenh === this.benhDto.MaBenh).ListThuocs = this.listThuocs;
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm thuốc điều trị không thành công!');
            }
        });
        this.modal.destroy();
    }
};
ThuocOfbenhDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_5__["ThuocService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThuocOfbenhDialogComponent.prototype, "isShowAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThuocOfbenhDialogComponent.prototype, "benhDto", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThuocOfbenhDialogComponent.prototype, "listThuocs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThuocOfbenhDialogComponent.prototype, "maThuocs", void 0);
ThuocOfbenhDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thuoc-ofbenh-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./thuoc-ofbenh-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./thuoc-ofbenh-dialog.component.css */ "./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.css")).default]
    })
], ThuocOfbenhDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC9iZW5oL3RyaWV1Y2h1bmctb2YtYmVuaC90cmlldWNodW5nLW9mLWJlbmguY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TrieuchungOfBenhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuchungOfBenhComponent", function() { return TrieuchungOfBenhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/trieuchung.service */ "./src/app/shared/services/trieuchung.service.ts");






let TrieuchungOfBenhComponent = class TrieuchungOfBenhComponent {
    constructor(fb, trieuchungService, modal, message) {
        this.fb = fb;
        this.trieuchungService = trieuchungService;
        this.modal = modal;
        this.message = message;
        this.listTrieuchung = [];
        this.modelModal = [];
        this.trieuchungbenh = [];
        this.listBenh = [];
        this.listTrieuchungsOfBenh = [];
        this.validateForm = this.fb.group({
            _selectBox_trieuchung: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.getTrieuchungs();
    }
    getTrieuchungs() {
        this.trieuchungService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listTrieuchung = JSON.parse(JSON.stringify(response.Data));
                this.modelModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
    add() {
        const trieuchungbenh = [];
        this.maTrieuchungs.forEach((item) => {
            trieuchungbenh.push({ mabenh: this.benhDto.MaBenh, matrieuchung: item });
        });
        this.trieuchungService.Create(trieuchungbenh).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Cập nhật  thành công!');
                this.listBenh.find(p => p.MaBenh === this.benhDto.MaBenh).ListTrieuChungs = this.listTrieuchung;
                this.getTrieuchungs();
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Cập nhật không thành công!');
            }
        });
        this.modal.destroy();
    }
};
TrieuchungOfBenhComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_5__["TrieuchungService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungOfBenhComponent.prototype, "isShowAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungOfBenhComponent.prototype, "benhDto", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungOfBenhComponent.prototype, "listThuocs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungOfBenhComponent.prototype, "maTrieuchungs", void 0);
TrieuchungOfBenhComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trieuchung-of-benh',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trieuchung-of-benh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trieuchung-of-benh.component.css */ "./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.css")).default]
    })
], TrieuchungOfBenhComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90aHVvYy9iZW5oLW9mdGh1b2MtZGlhbG9nL2Jlbmgtb2Z0aHVvYy1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: BenhOfthuocDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhOfthuocDialogComponent", function() { return BenhOfthuocDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");






let BenhOfthuocDialogComponent = class BenhOfthuocDialogComponent {
    constructor(fb, benhService, modal, message) {
        this.fb = fb;
        this.benhService = benhService;
        this.modal = modal;
        this.message = message;
        this.listBenh = [];
        this.modelRoleModal = [];
        this.thuocdieutri = [];
        this.listThuoc = [];
        this.listBenhsOfThuoc = [];
        this.validateForm = this.fb.group({
            _selectBox_benh: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.getBenhs();
    }
    getBenhs() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listBenh = JSON.parse(JSON.stringify(response.Data));
                this.modelRoleModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
    add() {
        const thuocdieutri = [];
        this.maBenhs.forEach((item) => {
            thuocdieutri.push({ mathuoc: this.thuocDto.MaThuoc, mabenh: item });
        });
        this.benhService.CreateDieuTriBenh(thuocdieutri).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm bệnh được thuốc điều trị thành công!');
                this.listThuoc.find(p => p.MaThuoc === this.thuocDto.MaThuoc).ListBenhs = this.listBenhs;
                this.getBenhs();
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm bệnh được thuốc điều trị không thành công!');
            }
        });
        this.modal.destroy();
    }
};
BenhOfthuocDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__["BenhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BenhOfthuocDialogComponent.prototype, "isShowAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BenhOfthuocDialogComponent.prototype, "thuocDto", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BenhOfthuocDialogComponent.prototype, "maBenhs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BenhOfthuocDialogComponent.prototype, "listBenhs", void 0);
BenhOfthuocDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benh-ofthuoc-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./benh-ofthuoc-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./benh-ofthuoc-dialog.component.css */ "./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.css")).default]
    })
], BenhOfthuocDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90aHVvYy9saWV1dHJpbmgtZGlhbG9nL2xpZXV0cmluaC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: LieutrinhDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LieutrinhDialogComponent", function() { return LieutrinhDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/thuoc.service */ "./src/app/shared/services/thuoc.service.ts");






let LieutrinhDialogComponent = class LieutrinhDialogComponent {
    constructor(thuocService, message, modal, fb) {
        this.thuocService = thuocService;
        this.message = message;
        this.modal = modal;
        this.fb = fb;
        this.isConfirmLoading = false;
        this.isShowAdd = false;
        this.isSaveLoading = false;
        this.selected = [];
    }
    ngOnInit() {
        this.initFormValidate();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_Tenlieutrinh: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_MoTa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    saveData() {
        this.isConfirmLoading = true;
        if (!this.lieutrinhDto || this.isAddlt) {
            this.insert();
        }
        else {
            this.update();
        }
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    // tao  moi
    insert() {
        if (this.lieutrinhDto) {
            this.thuocService.createLieuTrinh(this.lieutrinhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm thành công!');
                    //  this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
                this.resetForm();
            });
        }
    }
    update() {
        if (this.lieutrinhDto) {
            this.thuocService.updateLieuTrinh(this.lieutrinhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Cập nhật liệu trình thành công!');
                    console.log(this.lieutrinhDto);
                    // this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Cập nhật liệu trình không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
};
LieutrinhDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_5__["ThuocService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LieutrinhDialogComponent.prototype, "isAddlt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LieutrinhDialogComponent.prototype, "lieutrinhDto", void 0);
LieutrinhDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lieutrinh-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lieutrinh-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lieutrinh-dialog.component.css */ "./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.css")).default]
    })
], LieutrinhDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: #f7f7f7;\r\n    margin-top: 20px;\r\n}\r\n\r\n.main-timeline {\r\n    position: relative\r\n}\r\n\r\n.main-timeline:before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 2px;\r\n    height: 100%;\r\n    background: #c6c6c6;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0\r\n}\r\n\r\n.main-timeline .timeline {\r\n    margin-bottom: 40px;\r\n    position: relative\r\n}\r\n\r\n.main-timeline .timeline:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both\r\n}\r\n\r\n.main-timeline .icon {\r\n    width: 18px;\r\n    height: 18px;\r\n    line-height: 18px;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0\r\n}\r\n\r\n.main-timeline .icon:before,\r\n.main-timeline .icon:after {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: all 0.33s ease-out 0s\r\n}\r\n\r\n.main-timeline .icon:before {\r\n    background: #fff;\r\n    border: 2px solid #232323;\r\n    left: -3px\r\n}\r\n\r\n.main-timeline .icon:after {\r\n    border: 2px solid #c6c6c6;\r\n    left: 3px\r\n}\r\n\r\n.main-timeline .timeline:hover .icon:before {\r\n    left: 3px\r\n}\r\n\r\n.main-timeline .timeline:hover .icon:after {\r\n    left: -3px\r\n}\r\n\r\n.main-timeline .date-content {\r\n    width: 50%;\r\n    float: left;\r\n    margin-top: 22px;\r\n    position: relative\r\n}\r\n\r\n.main-timeline .date-content:before {\r\n    content: \"\";\r\n    width: 36.5%;\r\n    height: 2px;\r\n    background: #c6c6c6;\r\n    margin: auto 0;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 10px;\r\n    bottom: 0\r\n}\r\n\r\n.main-timeline .date-outer {\r\n    width: 125px;\r\n    height: 125px;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    margin: auto;\r\n    z-index: 1\r\n}\r\n\r\n.main-timeline .date-outer:before,\r\n.main-timeline .date-outer:after {\r\n    content: \"\";\r\n    width: 125px;\r\n    height: 125px;\r\n    margin: 0 auto;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    transition: all 0.33s ease-out 0s\r\n}\r\n\r\n.main-timeline .date-outer:before {\r\n    background: #fff;\r\n    border: 2px solid #232323;\r\n    left: -6px\r\n}\r\n\r\n.main-timeline .date-outer:after {\r\n    border: 2px solid #c6c6c6;\r\n    left: 6px\r\n}\r\n\r\n.main-timeline .timeline:hover .date-outer:before {\r\n    left: 6px\r\n}\r\n\r\n.main-timeline .timeline:hover .date-outer:after {\r\n    left: -6px\r\n}\r\n\r\n.main-timeline .date {\r\n    width: 100%;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 27%;\r\n    left: 0\r\n}\r\n\r\n.main-timeline .month {\r\n    font-size: 18px;\r\n    font-weight: 700\r\n}\r\n\r\n.main-timeline .year {\r\n    display: block;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    color: #232323;\r\n    line-height: 36px\r\n}\r\n\r\n.main-timeline .timeline-content {\r\n    width: 50%;\r\n    padding: 20px 0 20px 50px;\r\n    float: right\r\n}\r\n\r\n.main-timeline .title {\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    margin: 0 0 15px 0\r\n}\r\n\r\n.main-timeline .description {\r\n    margin-bottom: 0\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .date-content {\r\n    float: right\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .date-content:before {\r\n    left: 10px\r\n}\r\n\r\n.main-timeline .timeline:nth-child(2n) .timeline-content {\r\n    padding: 20px 50px 20px 0;\r\n    text-align: right\r\n}\r\n\r\n@media only screen and (max-width: 991px) {\r\n    .main-timeline .date-content {\r\n        margin-top: 35px\r\n    }\r\n    .main-timeline .date-content:before {\r\n        width: 22.5%\r\n    }\r\n    .main-timeline .timeline-content {\r\n        padding: 10px 0 10px 30px\r\n    }\r\n    .main-timeline .title {\r\n        font-size: 17px\r\n    }\r\n    .main-timeline .timeline:nth-child(2n) .timeline-content {\r\n        padding: 10px 30px 10px 0\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .main-timeline:before {\r\n        margin: 0;\r\n        left: 7px\r\n    }\r\n    .main-timeline .timeline {\r\n        margin-bottom: 20px\r\n    }\r\n    .main-timeline .timeline:last-child {\r\n        margin-bottom: 0\r\n    }\r\n    .main-timeline .icon {\r\n        margin: auto 0\r\n    }\r\n    .main-timeline .date-content {\r\n        width: 95%;\r\n        float: right;\r\n        margin-top: 0\r\n    }\r\n    .main-timeline .date-content:before {\r\n        display: none\r\n    }\r\n    .main-timeline .date-outer {\r\n        width: 110px;\r\n        height: 110px\r\n    }\r\n    .main-timeline .date-outer:before,\r\n    .main-timeline .date-outer:after {\r\n        width: 110px;\r\n        height: 110px\r\n    }\r\n    .main-timeline .date {\r\n        top: 30%\r\n    }\r\n    .main-timeline .year {\r\n        font-size: 24px\r\n    }\r\n    .main-timeline .timeline-content,\r\n    .main-timeline .timeline:nth-child(2n) .timeline-content {\r\n        width: 95%;\r\n        text-align: center;\r\n        padding: 10px 0\r\n    }\r\n    .main-timeline .title {\r\n        margin-bottom: 10px\r\n    }\r\n}\r\n\r\n:focus {\r\n    outline: 0px solid transparent !important;\r\n}\r\n\r\n.timeline {\r\n    padding: 50px 0;\r\n    position: relative;\r\n}\r\n\r\n.timeline-nodes {\r\n    padding-bottom: 25px;\r\n    position: relative;\r\n}\r\n\r\n.timeline-nodes:nth-child(even) {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.timeline h3,\r\n.timeline p {\r\n    padding: 5px 15px;\r\n}\r\n\r\n.timeline h3 {\r\n    font-weight: lighter;\r\n    background: var(--blue);\r\n}\r\n\r\n.timeline p,\r\n.timeline time {\r\n    color: var(--blue)\r\n}\r\n\r\n.timeline::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    width: 0;\r\n    border-left: 2px dashed var(--blue);\r\n    height: 100%;\r\n    z-index: 1;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.timeline-content {\r\n    border: 1px solid var(--blue);\r\n    position: relative;\r\n    border-radius: 0 0 10px 10px;\r\n    box-shadow: 0px 3px 25px 0px rgba(10, 55, 90, 0.2)\r\n}\r\n\r\n.timeline-nodes:nth-child(odd) h3,\r\n.timeline-nodes:nth-child(odd) p {\r\n    text-align: right;\r\n}\r\n\r\n.timeline-nodes:nth-child(odd) .timeline-date {\r\n    text-align: left;\r\n}\r\n\r\n.timeline-nodes:nth-child(even) .timeline-date {\r\n    text-align: right;\r\n}\r\n\r\n.timeline-nodes:nth-child(odd) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 100%;\r\n    width: 0;\r\n    border-left: 10px solid var(--blue);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n\r\n.timeline-nodes:nth-child(even) .timeline-content::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 5%;\r\n    right: 100%;\r\n    width: 0;\r\n    border-right: 10px solid var(--blue);\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n}\r\n\r\n.timeline-image {\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n.timeline-image::before {\r\n    content: \"\";\r\n    width: 80px;\r\n    height: 80px;\r\n    border: 2px dashed var(--blue);\r\n    border-radius: 50%;\r\n    display: block;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: #fff;\r\n    z-index: 1;\r\n}\r\n\r\n.timeline-image img {\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n/*small device style*/\r\n\r\n@media (max-width: 767px) {\r\n    .timeline-nodes:nth-child(odd) h3,\r\n    .timeline-nodes:nth-child(odd) p {\r\n        text-align: left\r\n    }\r\n    .timeline-nodes:nth-child(even) {\r\n        flex-direction: row;\r\n    }\r\n    .timeline::before {\r\n        content: \"\";\r\n        display: block;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 4%;\r\n        width: 0;\r\n        border-left: 2px dashed var(--blue);\r\n        height: 100%;\r\n        z-index: 1;\r\n        transform: translateX(-50%);\r\n    }\r\n    .timeline h3 {\r\n        font-size: 1.7rem;\r\n    }\r\n    .timeline p {\r\n        font-size: 14px;\r\n    }\r\n    .timeline-image {\r\n        position: absolute;\r\n        left: 0%;\r\n        top: 60px;\r\n        /*transform: translateX(-50%;);*/\r\n    }\r\n    .timeline-nodes:nth-child(odd) .timeline-content::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 5%;\r\n        left: auto;\r\n        right: 100%;\r\n        width: 0;\r\n        border-left: 0;\r\n        border-right: 10px solid var(--blue);\r\n        border-top: 10px solid transparent;\r\n        border-bottom: 10px solid transparent;\r\n    }\r\n    .timeline-nodes:nth-child(even) .timeline-content::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 5%;\r\n        right: 100%;\r\n        width: 0;\r\n        border-right: 10px solid var(--blue);\r\n        border-top: 10px solid transparent;\r\n        border-bottom: 10px solid transparent;\r\n    }\r\n    .timeline-nodes:nth-child(even) .timeline-date {\r\n        text-align: left;\r\n    }\r\n    .timeline-image::before {\r\n        width: 65px;\r\n        height: 65px;\r\n    }\r\n}\r\n\r\n/*extra small device style */\r\n\r\n@media (max-width: 575px) {\r\n    .timeline::before {\r\n        content: \"\";\r\n        display: block;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 3%;\r\n    }\r\n    .timeline-image {\r\n        position: absolute;\r\n        left: -5%;\r\n    }\r\n    .timeline-image::before {\r\n        width: 60px;\r\n        height: 60px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuaC1tYW5hZ2VtZW50L3RodW9jL3RodW9jLWRldGFpbC90aHVvYy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1A7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVDtBQUNKOztBQUVBOztJQUVJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUDtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1I7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1I7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksU0FBUztRQUNUO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1o7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0ksWUFBWTtRQUNaO0lBQ0o7SUFDQTs7UUFFSSxZQUFZO1FBQ1o7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtJQUNBOztRQUVJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEI7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsUUFBUTtJQUNSLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLFFBQVE7SUFDUixvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFHQSxxQkFBcUI7O0FBRXJCO0lBQ0k7O1FBRUk7SUFDSjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sUUFBUTtRQUNSLFFBQVE7UUFDUixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxVQUFVO1FBQ1YsV0FBVztRQUNYLFFBQVE7UUFDUixjQUFjO1FBQ2Qsb0NBQW9DO1FBQ3BDLGtDQUFrQztRQUNsQyxxQ0FBcUM7SUFDekM7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFdBQVc7UUFDWCxRQUFRO1FBQ1Isb0NBQW9DO1FBQ3BDLGtDQUFrQztRQUNsQyxxQ0FBcUM7SUFDekM7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSjs7QUFHQSw0QkFBNEI7O0FBRTVCO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sUUFBUTtJQUNaO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmVuaC1tYW5hZ2VtZW50L3RodW9jL3RodW9jLWRldGFpbC90aHVvYy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGhcclxufVxyXG5cclxuLm1haW4tdGltZWxpbmUgLmljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAuaWNvbjpiZWZvcmUsXHJcbi5tYWluLXRpbWVsaW5lIC5pY29uOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zM3MgZWFzZS1vdXQgMHNcclxufVxyXG5cclxuLm1haW4tdGltZWxpbmUgLmljb246YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjMyMzIzO1xyXG4gICAgbGVmdDogLTNweFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAuaWNvbjphZnRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzZjNmM2O1xyXG4gICAgbGVmdDogM3B4XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpob3ZlciAuaWNvbjpiZWZvcmUge1xyXG4gICAgbGVmdDogM3B4XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpob3ZlciAuaWNvbjphZnRlciB7XHJcbiAgICBsZWZ0OiAtM3B4XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC5kYXRlLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAuZGF0ZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDM2LjUlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzZjNmM2O1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogMFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAuZGF0ZS1vdXRlciB7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgei1pbmRleDogMVxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAuZGF0ZS1vdXRlcjpiZWZvcmUsXHJcbi5tYWluLXRpbWVsaW5lIC5kYXRlLW91dGVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zM3MgZWFzZS1vdXQgMHNcclxufVxyXG5cclxuLm1haW4tdGltZWxpbmUgLmRhdGUtb3V0ZXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjMyMzIzO1xyXG4gICAgbGVmdDogLTZweFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAuZGF0ZS1vdXRlcjphZnRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzZjNmM2O1xyXG4gICAgbGVmdDogNnB4XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpob3ZlciAuZGF0ZS1vdXRlcjpiZWZvcmUge1xyXG4gICAgbGVmdDogNnB4XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpob3ZlciAuZGF0ZS1vdXRlcjphZnRlciB7XHJcbiAgICBsZWZ0OiAtNnB4XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC5kYXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNyU7XHJcbiAgICBsZWZ0OiAwXHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC5tb250aCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC55ZWFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMjMyMzIzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHhcclxufVxyXG5cclxuLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDUwcHg7XHJcbiAgICBmbG9hdDogcmlnaHRcclxufVxyXG5cclxuLm1haW4tdGltZWxpbmUgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHggMFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAuZGF0ZS1jb250ZW50IHtcclxuICAgIGZsb2F0OiByaWdodFxyXG59XHJcblxyXG4ubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAuZGF0ZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAxMHB4XHJcbn1cclxuXHJcbi5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHggNTBweCAyMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubWFpbi10aW1lbGluZSAuZGF0ZS1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4XHJcbiAgICB9XHJcbiAgICAubWFpbi10aW1lbGluZSAuZGF0ZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDIyLjUlXHJcbiAgICB9XHJcbiAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMzBweFxyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHhcclxuICAgIH1cclxuICAgIC5tYWluLXRpbWVsaW5lIC50aW1lbGluZTpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHggMTBweCAwXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5tYWluLXRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxlZnQ6IDdweFxyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbiAgICB9XHJcbiAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMFxyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLmljb24ge1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwXHJcbiAgICB9XHJcbiAgICAubWFpbi10aW1lbGluZSAuZGF0ZS1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwXHJcbiAgICB9XHJcbiAgICAubWFpbi10aW1lbGluZSAuZGF0ZS1jb250ZW50OmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLmRhdGUtb3V0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4XHJcbiAgICB9XHJcbiAgICAubWFpbi10aW1lbGluZSAuZGF0ZS1vdXRlcjpiZWZvcmUsXHJcbiAgICAubWFpbi10aW1lbGluZSAuZGF0ZS1vdXRlcjphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEwcHhcclxuICAgIH1cclxuICAgIC5tYWluLXRpbWVsaW5lIC5kYXRlIHtcclxuICAgICAgICB0b3A6IDMwJVxyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLnllYXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweFxyXG4gICAgfVxyXG4gICAgLm1haW4tdGltZWxpbmUgLnRpbWVsaW5lLWNvbnRlbnQsXHJcbiAgICAubWFpbi10aW1lbGluZSAudGltZWxpbmU6bnRoLWNoaWxkKDJuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwXHJcbiAgICB9XHJcbiAgICAubWFpbi10aW1lbGluZSAudGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgIH1cclxufVxyXG5cclxuOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUge1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGltZWxpbmUtbm9kZXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ub2RlczpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcblxyXG4udGltZWxpbmUgaDMsXHJcbi50aW1lbGluZSBwIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcclxufVxyXG5cclxuLnRpbWVsaW5lIHAsXHJcbi50aW1lbGluZSB0aW1lIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKVxyXG59XHJcblxyXG4udGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkIHZhcigtLWJsdWUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAyNXB4IDBweCByZ2JhKDEwLCA1NSwgOTAsIDAuMilcclxufVxyXG5cclxuLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChvZGQpIGgzLFxyXG4udGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKG9kZCkgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1kYXRlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ub2RlczpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWRhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ub2RlczpudGgtY2hpbGQob2RkKSAudGltZWxpbmUtY29udGVudDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1jb250ZW50OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWltYWdlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIHZhcigtLWJsdWUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pbWFnZSBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG5cclxuLypzbWFsbCBkZXZpY2Ugc3R5bGUqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKG9kZCkgaDMsXHJcbiAgICAudGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKG9kZCkgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdFxyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLW5vZGVzOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC50aW1lbGluZTo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNCU7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBkYXNoZWQgdmFyKC0tYmx1ZSk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIH1cclxuICAgIC50aW1lbGluZSBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJTspOyovXHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKG9kZCkgLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHZhcigtLWJsdWUpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZS1ub2RlczpudGgtY2hpbGQoZXZlbikgLnRpbWVsaW5lLWNvbnRlbnQ6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtbm9kZXM6bnRoLWNoaWxkKGV2ZW4pIC50aW1lbGluZS1kYXRlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWltYWdlOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgIGhlaWdodDogNjVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qZXh0cmEgc21hbGwgZGV2aWNlIHN0eWxlICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC50aW1lbGluZTo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMyU7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtaW1hZ2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNSU7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtaW1hZ2U6OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: ThuocDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuocDetailComponent", function() { return ThuocDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/thuoc.service */ "./src/app/shared/services/thuoc.service.ts");
/* harmony import */ var _lieutrinh_dialog_lieutrinh_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lieutrinh-dialog/lieutrinh-dialog.component */ "./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.ts");
/* harmony import */ var _thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../thuoc-dialog/thuoc-dialog.component */ "./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.ts");







let ThuocDetailComponent = class ThuocDetailComponent {
    constructor(thuocService, activatedRoute, modalService) {
        this.thuocService = thuocService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.pageTitle = 'Thông tin chi tiết';
        this.selected = [];
        this.hasThuoc = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.getDetail(params.mathuoc);
        });
    }
    getDetail(mathuoc) {
        this.thuocService.getDetail(mathuoc).subscribe(response => {
            if (response.Status === true) {
                this.selected = response.Data;
                this.hasThuoc = true;
            }
            console.log(this.selected);
        });
    }
    createLieuTrinh(data) {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm liệu trình',
            nzContent: _lieutrinh_dialog_lieutrinh_dialog_component__WEBPACK_IMPORTED_MODULE_5__["LieutrinhDialogComponent"],
            nzComponentParams: {
                isAddlt: true,
                lieutrinhDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    editLieuTrinh(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chỉnh sửa thông tin ',
            nzContent: _lieutrinh_dialog_lieutrinh_dialog_component__WEBPACK_IMPORTED_MODULE_5__["LieutrinhDialogComponent"],
            nzComponentParams: {
                lieutrinhDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chỉnh sửa thông tin ',
            nzContent: _thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ThuocDialogComponent"],
            nzComponentParams: {
                thuocDto: JSON.parse(JSON.stringify(data)),
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
ThuocDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_4__["ThuocService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
ThuocDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thuoc-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./thuoc-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./thuoc-detail.component.css */ "./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.css")).default]
    })
], ThuocDetailComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90aHVvYy90aHVvYy1kaWFsb2cvdGh1b2MtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ThuocDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuocDialogComponent", function() { return ThuocDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");
/* harmony import */ var src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/thuoc.service */ "./src/app/shared/services/thuoc.service.ts");








let ThuocDialogComponent = class ThuocDialogComponent {
    constructor(benhService, fb, modal, thuocService, message) {
        this.benhService = benhService;
        this.fb = fb;
        this.modal = modal;
        this.thuocService = thuocService;
        this.message = message;
        this.isConfirmLoading = false;
        this.isShowAdd = false;
        this.isSaveLoading = false;
        this.loading = false;
        this.dataSource = [];
        this.listBenh = [];
        this.modelbenhModal = [];
        this.beforeUpload = (file) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.message.error('Vui lòng tải lên hình ảnh có định dạng PNG hoặc JPEG!');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.message.error('Vui lòng tải lên hình ảnh có dung lượng nhỏ hơn hoặc bằng 2MB!');
                    observer.complete();
                    return;
                }
                observer.next(isJpgOrPng && isLt2M);
                observer.complete();
            });
        };
    }
    ngOnInit() {
        // if (this.isAdd) {
        this.initFormValidate();
        // } else {
        //   this.initFormValidateEdit();
        // }
        this.getBenhs();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_TenThuoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_CongDung: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_CachDung: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_LuuY: [''],
            _selectBox_benh: [''],
            _ipUpload_image: ['']
        });
    }
    // private initFormValidateEdit(): void {
    //   this.validateForm = this.fb.group({
    //     _ipText_TenThuoc: ['', Validators.required],
    //     _ipTextarea_CongDung: ['', Validators.required],
    //     _ipTextarea_CachDung:  ['', Validators.required],
    //     _ipTextarea_LuuY: [''],
    //     // _selectBox_benh: ['', [Validators.required]],
    //   });
    // }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    saveData() {
        this.isConfirmLoading = true;
        if (!this.thuocDto || this.isAdd) {
            this.insert();
        }
        else {
            this.update();
        }
    }
    loadList() {
        this.thuocService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    // tao  moi
    insert() {
        if (this.thuocDto) {
            this.thuocService.create(this.thuocDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Thêm thành công!');
                    // this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
                this.resetForm();
            });
        }
    }
    update() {
        if (this.thuocDto) {
            this.thuocService.update(this.thuocDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Cập nhật thành công!');
                    console.log(this.thuocDto);
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Cập nhật không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
    getBenhs() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listBenh = JSON.parse(JSON.stringify(response.Data));
                this.modelbenhModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    handleChange(info) {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.avatarUrl = img;
                    this.thuocDto.HinhAnh = this.avatarUrl;
                });
                break;
            case 'error':
                this.message.error('Lỗi mạng!');
                this.loading = false;
                break;
        }
    }
};
ThuocDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_6__["BenhService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_7__["ThuocService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThuocDialogComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ThuocDialogComponent.prototype, "thuocDto", void 0);
ThuocDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thuoc-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./thuoc-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./thuoc-dialog.component.css */ "./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.css")).default]
    })
], ThuocDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* unvisited link */\r\n\r\na {\r\n    font-family: unset !important;\r\n    font-weight: normal;\r\n}\r\n\r\na:link {\r\n    color: #1890ff !important;\r\n}\r\n\r\n/* visited link */\r\n\r\na:visited {\r\n    color: #1890ff !important;\r\n}\r\n\r\n/* mouse over link */\r\n\r\na:hover {\r\n    color: #1890ff !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\n/* selected link */\r\n\r\na:active {\r\n    color: #1890ff !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuaC1tYW5hZ2VtZW50L3RodW9jL3RodW9jLWxpc3QvdGh1b2MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjs7QUFFbkI7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0Esb0JBQW9COztBQUVwQjtJQUNJLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90aHVvYy90aHVvYy1saXN0L3RodW9jLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHVudmlzaXRlZCBsaW5rICovXHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuXHJcbmE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogIzE4OTBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogbW91c2Ugb3ZlciBsaW5rICovXHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5cclxuYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICMxODkwZmYgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ThuocListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuocListComponent", function() { return ThuocListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_ThuocDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/ThuocDTO */ "./src/app/models/ThuocDTO.ts");
/* harmony import */ var src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/thuoc.service */ "./src/app/shared/services/thuoc.service.ts");
/* harmony import */ var _benh_ofthuoc_dialog_benh_ofthuoc_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../benh-ofthuoc-dialog/benh-ofthuoc-dialog.component */ "./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.ts");
/* harmony import */ var _thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../thuoc-dialog/thuoc-dialog.component */ "./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.ts");









let ThuocListComponent = class ThuocListComponent {
    constructor(thuocService, modalService, message, router) {
        this.thuocService = thuocService;
        this.modalService = modalService;
        this.message = message;
        this.router = router;
        this.isConfirmLoading = false;
        this.pageTitle = 'Danh sách các loại thuốc';
        this.dataSource = [];
        this.sName = '';
    }
    ngOnInit() {
        this.isConfirmLoading = true;
        this.loadList();
    }
    loadList() {
        this.thuocService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    showModal(data) {
        const modalAdd = this.modalService.create({
            nzTitle: 'Thêm bệnh được thuốc điều trị ',
            nzContent: _benh_ofthuoc_dialog_benh_ofthuoc_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BenhOfthuocDialogComponent"],
            nzComponentParams: {
                isShowAdd: true,
                thuocDto: JSON.parse(JSON.stringify(data)),
                maBenhs: JSON.parse(JSON.stringify(data.MaBenhs))
            },
            nzWidth: '600',
        });
        // Return a result when closed
        modalAdd.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    // xem chi tiết
    view(mathuoc) {
        this.navigateDetail(mathuoc);
    }
    navigateDetail(mathuoc) {
        if (mathuoc) {
            // chuyen sang màn hình chi tiết
            this.router.navigate(['admin/cac-loai-thuoc/chitiet/'], { queryParams: { mathuoc: mathuoc } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    create() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm thuốc',
            nzContent: _thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ThuocDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                thuocDto: new src_app_models_ThuocDTO__WEBPACK_IMPORTED_MODULE_5__["ThuocDTO"]()
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chỉnh sửa thông tin ',
            nzContent: _thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ThuocDialogComponent"],
            nzComponentParams: {
                thuocDto: JSON.parse(JSON.stringify(data)),
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    confirmDelete(data) {
        const modalDelete = this.modalService.confirm({
            nzTitle: 'Bạn có chắc chắn xóa thuốc này?',
            nzContent: `<b style='color: red;'> Thuốc: ${data.TenThuoc}</b>`,
            nzOkText: 'Xóa',
            nzOkType: 'danger',
            nzOnOk: () => this.delete(data.MaThuoc),
            nzCancelText: 'Hủy',
        });
        // Return a result when closed
        modalDelete.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    /**
  * delete data
  */
    delete(mathuoc) {
        const param = { mathuoc: mathuoc };
        this.thuocService.delete(param).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Xóa thành công!');
                this.loadList();
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Xóa không thành công!');
            }
        });
    }
    // xem chi tiết 
    viewBenh(mabenh) {
        this.navigateDetailBenh(mabenh);
    }
    navigateDetailBenh(mabenh) {
        if (mabenh) {
            // chuyen sang màn hình chi tiết 
            this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
};
ThuocListComponent.ctorParameters = () => [
    { type: src_app_shared_services_thuoc_service__WEBPACK_IMPORTED_MODULE_6__["ThuocService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ThuocListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thuoc-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./thuoc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./thuoc-list.component.css */ "./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.css")).default]
    })
], ThuocListComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90cmlldWNodW5nL3RyaWV1Y2h1bmctZGlhbG9nL3RyaWV1Y2h1bmctZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TrieuchungDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuchungDialogComponent", function() { return TrieuchungDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");






let TrieuchungDialogComponent = class TrieuchungDialogComponent {
    constructor(benhService, message, modal, fb) {
        this.benhService = benhService;
        this.message = message;
        this.modal = modal;
        this.fb = fb;
        this.isConfirmLoading = false;
        this.isShowAdd = false;
        this.isSaveLoading = false;
        this.selected = [];
        this.listBenh = [];
        this.modelbenhModal = [];
    }
    ngOnInit() {
        this.initFormValidate();
        this.getBenhs();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_Tentrieuchung: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _selectBox_benh: [''],
        });
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    saveData() {
        this.isConfirmLoading = true;
        if (!this.trieuchungDto || this.isAddtt) {
            this.insert();
        }
        else {
            this.update();
        }
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    // tao  moi
    insert() {
        if (this.trieuchungDto) {
            this.benhService.createTrieuChung(this.trieuchungDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm thành công!');
                    //  this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
            });
            this.resetForm();
        }
    }
    update() {
        if (this.trieuchungDto) {
            this.benhService.updateTrieuChung(this.trieuchungDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Cập nhật triệu chứng thành công!');
                    console.log(this.trieuchungDto);
                    // this.loadList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Cập nhật triệu chứng không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
    getBenhs() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listBenh = JSON.parse(JSON.stringify(response.Data));
                this.modelbenhModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
};
TrieuchungDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__["BenhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungDialogComponent.prototype, "isAddtt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungDialogComponent.prototype, "trieuchungDto", void 0);
TrieuchungDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trieuchung-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trieuchung-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trieuchung-dialog.component.css */ "./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.css")).default]
    })
], TrieuchungDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* unvisited link */\r\n\r\na {\r\n    font-family: unset !important;\r\n    font-weight: normal;\r\n}\r\n\r\na:link {\r\n    color: #1890ff !important;\r\n}\r\n\r\n/* visited link */\r\n\r\na:visited {\r\n    color: #1890ff !important;\r\n}\r\n\r\n/* mouse over link */\r\n\r\na:hover {\r\n    color: #1890ff !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\n/* selected link */\r\n\r\na:active {\r\n    color: #1890ff !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuaC1tYW5hZ2VtZW50L3RyaWV1Y2h1bmcvdHJpZXVjaHVuZy1saXN0L3RyaWV1Y2h1bmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjs7QUFFbkI7SUFDSSw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSx5QkFBeUI7QUFDN0I7O0FBR0Esb0JBQW9COztBQUVwQjtJQUNJLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90cmlldWNodW5nL3RyaWV1Y2h1bmctbGlzdC90cmlldWNodW5nLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHVudmlzaXRlZCBsaW5rICovXHJcblxyXG5hIHtcclxuICAgIGZvbnQtZmFtaWx5OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuXHJcbmE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogIzE4OTBmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogbW91c2Ugb3ZlciBsaW5rICovXHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5cclxuYTphY3RpdmUge1xyXG4gICAgY29sb3I6ICMxODkwZmYgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TrieuchungListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuchungListComponent", function() { return TrieuchungListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_TrieuChungDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/TrieuChungDTO */ "./src/app/models/TrieuChungDTO.ts");
/* harmony import */ var src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/trieuchung.service */ "./src/app/shared/services/trieuchung.service.ts");
/* harmony import */ var _trieuchung_dialog_trieuchung_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../trieuchung-dialog/trieuchung-dialog.component */ "./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.ts");
/* harmony import */ var _trieuchungbenh_dialog_trieuchungbenh_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trieuchungbenh-dialog/trieuchungbenh-dialog.component */ "./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.ts");









let TrieuchungListComponent = class TrieuchungListComponent {
    constructor(modalService, trieuchungService, message, router) {
        this.modalService = modalService;
        this.trieuchungService = trieuchungService;
        this.message = message;
        this.router = router;
        // Data: Array<any> = [
        //   { name: 'Pear', value: 'pear' },
        //   { name: 'Plum', value: 'plum' },
        //   { name: 'Kiwi', value: 'kiwi' },
        //   { name: 'Apple', value: 'apple' },
        //   { name: 'Lime', value: 'lime' }
        // ];
        this.pageTitle = 'Danh sách các triệu chứng';
        this.dataSource = [];
        this.isConfirmLoading = false;
    }
    ngOnInit() {
        this.isConfirmLoading = true;
        this.loadList();
    }
    loadList() {
        this.trieuchungService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    createTrieuChung() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm triệu chứng',
            nzContent: _trieuchung_dialog_trieuchung_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TrieuchungDialogComponent"],
            nzComponentParams: {
                isAddtt: true,
                trieuchungDto: new src_app_models_TrieuChungDTO__WEBPACK_IMPORTED_MODULE_5__["TrieuChungDTO"]()
                //  trieuchungDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '500',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    editTrieuChung(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chỉnh sửa thông tin ',
            nzContent: _trieuchung_dialog_trieuchung_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TrieuchungDialogComponent"],
            nzComponentParams: {
                trieuchungDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '500',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    // xem chi tiết 
    viewBenh(mabenh) {
        this.navigateDetailBenh(mabenh);
    }
    navigateDetailBenh(mabenh) {
        if (mabenh) {
            // chuyen sang màn hình chi tiết 
            this.router.navigate(['admin/cac-loai-benh/chitiet/'], { queryParams: { mabenh: mabenh } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    showModal(data) {
        const modalAdd = this.modalService.create({
            nzTitle: 'Thêm bệnh có triệu chứng ',
            nzContent: _trieuchungbenh_dialog_trieuchungbenh_dialog_component__WEBPACK_IMPORTED_MODULE_8__["TrieuchungbenhDialogComponent"],
            nzComponentParams: {
                isShowAdd: true,
                trieuchungDto: JSON.parse(JSON.stringify(data)),
                maBenhs: JSON.parse(JSON.stringify(data.MaBenhs))
            },
            nzWidth: '600',
        });
        // Return a result when closed
        modalAdd.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
TrieuchungListComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_6__["TrieuchungService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TrieuchungListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trieuchung-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trieuchung-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trieuchung-list.component.css */ "./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.css")).default]
    })
], TrieuchungListComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.css ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90cmlldWNodW5nL3RyaWV1Y2h1bmdiZW5oLWRpYWxvZy90cmlldWNodW5nYmVuaC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TrieuchungbenhDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuchungbenhDialogComponent", function() { return TrieuchungbenhDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");
/* harmony import */ var src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/trieuchung.service */ "./src/app/shared/services/trieuchung.service.ts");







let TrieuchungbenhDialogComponent = class TrieuchungbenhDialogComponent {
    constructor(fb, trieuchungService, benhService, modal, message) {
        this.fb = fb;
        this.trieuchungService = trieuchungService;
        this.benhService = benhService;
        this.modal = modal;
        this.message = message;
        this.listBenh = [];
        this.modelModal = [];
        this.trieuchungbenh = [];
        this.listTrieuchung = [];
        this.listBenhsOfTrieuchung = [];
        this.validateForm = this.fb.group({
            _selectBox_benh: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.getBenhs();
    }
    getBenhs() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listBenh = JSON.parse(JSON.stringify(response.Data));
                this.modelModal = JSON.parse(JSON.stringify(response.Data));
            }
        });
    }
    add() {
        const trieuchungbenh = [];
        this.maBenhs.forEach((item) => {
            trieuchungbenh.push({ matrieuchung: this.trieuchungDto.MaTrieuChung, mabenh: item });
        });
        this.trieuchungService.CreateTrieuChungBenh(trieuchungbenh).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm bệnh thành công!');
                this.listTrieuchung.find(p => p.MaTrieuChung === this.trieuchungDto.MaTrieuChung).ListBenhs = this.listBenhs;
                this.getBenhs();
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm bệnh không thành công!');
            }
        });
        this.modal.destroy();
    }
};
TrieuchungbenhDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_6__["TrieuchungService"] },
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__["BenhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungbenhDialogComponent.prototype, "isShowAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungbenhDialogComponent.prototype, "trieuchungDto", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungbenhDialogComponent.prototype, "maBenhs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TrieuchungbenhDialogComponent.prototype, "listBenhs", void 0);
TrieuchungbenhDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trieuchungbenh-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trieuchungbenh-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trieuchungbenh-dialog.component.css */ "./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.css")).default]
    })
], TrieuchungbenhDialogComponent);



/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JlbmgtbWFuYWdlbWVudC90cmlldWNodW5nL3RyaWV1Y2h1bmdiZW5oL3RyaWV1Y2h1bmdiZW5oLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TrieuchungbenhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuchungbenhComponent", function() { return TrieuchungbenhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/trieuchung.service */ "./src/app/shared/services/trieuchung.service.ts");




let TrieuchungbenhComponent = class TrieuchungbenhComponent {
    constructor(fb, trieuchungService) {
        this.fb = fb;
        this.trieuchungService = trieuchungService;
        this.dataSourceTT = [];
        this.dataSource = [];
        this.filterData = {};
        this.trieuchungbenh = [];
    }
    ngOnInit() {
        this.loadList();
        // checkbox
        this.form = this.fb.group({
            trieuchungbenh: this.fb.array([])
        });
    }
    onCheckboxChange(e) {
        if (e.target.checked) {
            this.trieuchungbenh.push({ search: e.target.value });
        }
        else {
            const index = this.trieuchungbenh.indexOf({ search: e.target.value });
            this.trieuchungbenh.splice(index, 1);
        }
    }
    // checkbox
    // onCheckboxChange(e) {
    //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    //   if (e.target.checked) {
    //     checkArray.push(new FormControl(e.target.value));
    //   //  this.loadListBenh(e.target.value);
    //   }
    //   else {
    //     let i: number = 0;
    //     checkArray.controls.forEach((item: FormControl) => {
    //       if (item.value == e.target.value) {
    //         checkArray.removeAt(i);
    //        // this.loadListBenh(e.target.value);
    //         return;
    //       }
    //       i++;
    //     }
    //     );
    //     // this.loadListBenh(checkArray[i]);
    //     // console.log(checkArray[i]);
    //   }
    // }
    submitForm() {
        this.load(this.trieuchungbenh);
        //    this.resetForm();
    }
    // public loadListBenh(value: string) {
    //   this.trieuchungService.GetAllTrieuChung(value).subscribe(response => {
    //     if (response && response.Status) {
    //       this.dataSourceTT = response.Data;
    //       // this.has = true;
    //       // this.isConfirmLoading = false;
    //       console.log(this.dataSourceTT);
    //     }
    //   });
    // }
    load(searchDTO) {
        this.trieuchungService.GetListBenhByListTrieuChung(searchDTO).subscribe(response => {
            if (response && response.Status) {
                this.dataSourceTT = response.Data;
                // this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    loadList() {
        this.trieuchungService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                // this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    resetForm() {
        this.form.reset();
        // tslint:disable-next-line: forin
        for (const key in this.form.controls) {
            this.form.controls[key].markAsPristine();
            this.form.controls[key].updateValueAndValidity();
        }
    }
};
TrieuchungbenhComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_3__["TrieuchungService"] }
];
TrieuchungbenhComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trieuchungbenh',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trieuchungbenh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trieuchungbenh.component.css */ "./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.css")).default]
    })
], TrieuchungbenhComponent);



/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpZW50aGUtbWFuYWdlbWVudC9iaWVudGhlL2JpZW50aGUtZGV0YWlsL2JpZW50aGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BientheDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BientheDetailComponent", function() { return BientheDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");





let BientheDetailComponent = class BientheDetailComponent {
    constructor(bientheService, activatedRoute, modalService) {
        this.bientheService = bientheService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.selected = [];
        this.has = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.getDetail(params.mabienthe);
        });
    }
    getDetail(mabienthe) {
        this.bientheService.getDetail(mabienthe).subscribe(response => {
            if (response.Status === true) {
                this.selected = response.Data;
                this.has = true;
            }
            console.log(this.selected);
        });
    }
};
BientheDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_4__["BientheService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
BientheDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bienthe-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bienthe-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bienthe-detail.component.css */ "./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.css")).default]
    })
], BientheDetailComponent);



/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpZW50aGUtbWFuYWdlbWVudC9iaWVudGhlL2JpZW50aGUtZGlhbG9nL2JpZW50aGUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BientheDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BientheDialogComponent", function() { return BientheDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var src_app_shared_services_chat_luong_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/chat-luong.service */ "./src/app/shared/services/chat-luong.service.ts");
/* harmony import */ var src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/chungloai.service */ "./src/app/shared/services/chungloai.service.ts");
/* harmony import */ var src_app_shared_services_giong_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/giong.service */ "./src/app/shared/services/giong.service.ts");









let BientheDialogComponent = class BientheDialogComponent {
    constructor(chungloaiService, bientheService, giongService, chatluongService, fb, message, modal) {
        this.chungloaiService = chungloaiService;
        this.bientheService = bientheService;
        this.giongService = giongService;
        this.chatluongService = chatluongService;
        this.fb = fb;
        this.message = message;
        this.modal = modal;
        this.isConfirmLoading = false;
        this.isShowAdd = false;
        this.isSaveLoading = false;
        this.loading = false;
    }
    ngOnInit() {
        this.initFormValidate();
        this.getChatLuong();
        this.getChungLoai();
        this.getGiong();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_TenBienThe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_MauSac: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _rdo_gender: ['True', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _selectBox_ChungLoai: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _selectBox_MaGiong: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _selectBox_ChatLuong: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_MoTa: [''],
        });
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    /**
    * check them hoac chinh sua nhan vien
    */
    saveData() {
        this.isConfirmLoading = true;
        if (!this.bientheDto || this.isAdd) {
            this.insert();
        }
        else {
            this.update();
        }
        console.log(this.bientheDto);
    }
    // tao nhan vien moi
    insert() {
        if (this.bientheDto) {
            this.bientheService.create(this.bientheDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm thành công!');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
            });
            this.resetForm();
        }
    }
    update() {
        if (this.bientheDto) {
            this.bientheService.update(this.bientheDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Cập nhật  thành công!');
                    console.log(this.bientheDto);
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Cập nhật không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
    resetForm() {
        this.validateForm.reset();
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    getChungLoai() {
        this.chungloaiService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listChungLoai = response.Data;
            }
        });
    }
    getGiong() {
        this.giongService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listGiong = response.Data;
            }
        });
    }
    getChatLuong() {
        this.chatluongService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listChatLuong = response.Data;
            }
        });
    }
};
BientheDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_7__["ChungloaiService"] },
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__["BientheService"] },
    { type: src_app_shared_services_giong_service__WEBPACK_IMPORTED_MODULE_8__["GiongService"] },
    { type: src_app_shared_services_chat_luong_service__WEBPACK_IMPORTED_MODULE_6__["ChatLuongService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BientheDialogComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BientheDialogComponent.prototype, "bientheDto", void 0);
BientheDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bienthe-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bienthe-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bienthe-dialog.component.css */ "./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.css")).default]
    })
], BientheDialogComponent);



/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td span [nz-icon] {\r\n    margin-right: 10px;\r\n    vertical-align: 0;\r\n}\r\n\r\ntd span.active i,\r\ntd span.active {\r\n    color: green;\r\n}\r\n\r\ntd span.locked i,\r\ntd span.locked {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmllbnRoZS1tYW5hZ2VtZW50L2JpZW50aGUvYmllbnRoZS1saXN0L2JpZW50aGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpZW50aGUtbWFuYWdlbWVudC9iaWVudGhlL2JpZW50aGUtbGlzdC9iaWVudGhlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHNwYW4gW256LWljb25dIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiAwO1xyXG59XHJcblxyXG50ZCBzcGFuLmFjdGl2ZSBpLFxyXG50ZCBzcGFuLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbnRkIHNwYW4ubG9ja2VkIGksXHJcbnRkIHNwYW4ubG9ja2VkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BientheListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BientheListComponent", function() { return BientheListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_BienTheDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/BienTheDTO */ "./src/app/models/BienTheDTO.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var _bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bienthe-dialog/bienthe-dialog.component */ "./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.ts");
/* harmony import */ var _upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../upload-dialog/upload-dialog.component */ "./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.ts");









let BientheListComponent = class BientheListComponent {
    constructor(bienTheService, router, message, modalService) {
        this.bienTheService = bienTheService;
        this.router = router;
        this.message = message;
        this.modalService = modalService;
        this.searchValue = '';
        this.visible = false;
        this.pageTitle = 'Danh sách tất cả biến thể';
        this.dataSource = [];
        this.isConfirmLoading = false;
    }
    ngOnInit() {
        this.isConfirmLoading = true;
        this.loadList();
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.visible = false;
        this.dataSource = this.dataSource.filter((item) => item.TenBienThe.indexOf(this.searchValue) !== -1);
    }
    // get danh sach nhan vien
    loadList() {
        this.bienTheService.getListAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    create() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm biến thể',
            nzContent: _bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BientheDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                bientheDto: new src_app_models_BienTheDTO__WEBPACK_IMPORTED_MODULE_5__["BienTheDTO"]()
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chinh sửa thông tin biến thể',
            nzContent: _bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_7__["BientheDialogComponent"],
            nzComponentParams: {
                bientheDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    view(mabienthe) {
        this.navigateDetail(mabienthe);
    }
    navigateDetail(mabienthe) {
        if (mabienthe) {
            // chuyen sang màn hình chi tiết nhan vien
            this.router.navigate(['admin/bien-the/chitiet/'], { queryParams: { mabienthe: mabienthe } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    add(data) {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm biến thể',
            nzContent: _upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UploadDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                hinhanhDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
BientheListComponent.ctorParameters = () => [
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__["BientheService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
BientheListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bienthe-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bienthe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bienthe-list.component.css */ "./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.css")).default]
    })
], BientheListComponent);



/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .upload-list-inline .ant-upload-list-item {\r\n    float: left;\r\n    width: 200px;\r\n    margin-right: 8px;\r\n}\r\n\r\n :host ::ng-deep .upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {\r\n    float: right;\r\n}\r\n\r\n :host ::ng-deep .upload-list-inline .ant-upload-animate-enter {\r\n    -webkit-animation-name: uploadAnimateInlineIn;\r\n            animation-name: uploadAnimateInlineIn;\r\n}\r\n\r\n :host ::ng-deep .upload-list-inline .ant-upload-animate-leave {\r\n    -webkit-animation-name: uploadAnimateInlineOut;\r\n            animation-name: uploadAnimateInlineOut;\r\n}\r\n\r\n .ant-upload.ant-upload-select-picture-card {\r\n    width: 96px!important;\r\n    height: 96px!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmllbnRoZS1tYW5hZ2VtZW50L2JpZW50aGUvdXBsb2FkLWRpYWxvZy91cGxvYWQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7Q0FFQztJQUNHLFlBQVk7QUFDaEI7O0NBRUM7SUFDRyw2Q0FBcUM7WUFBckMscUNBQXFDO0FBQ3pDOztDQUVDO0lBQ0csOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7Q0FFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iaWVudGhlLW1hbmFnZW1lbnQvYmllbnRoZS91cGxvYWQtZGlhbG9nL3VwbG9hZC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAudXBsb2FkLWxpc3QtaW5saW5lIC5hbnQtdXBsb2FkLWxpc3QtaXRlbSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4gOmhvc3QgOjpuZy1kZWVwIC51cGxvYWQtbGlzdC1pbmxpbmUgW2NsYXNzKj0nLXVwbG9hZC1saXN0LXJ0bCddIC5hbnQtdXBsb2FkLWxpc3QtaXRlbSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiA6aG9zdCA6Om5nLWRlZXAgLnVwbG9hZC1saXN0LWlubGluZSAuYW50LXVwbG9hZC1hbmltYXRlLWVudGVyIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB1cGxvYWRBbmltYXRlSW5saW5lSW47XHJcbn1cclxuXHJcbiA6aG9zdCA6Om5nLWRlZXAgLnVwbG9hZC1saXN0LWlubGluZSAuYW50LXVwbG9hZC1hbmltYXRlLWxlYXZlIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB1cGxvYWRBbmltYXRlSW5saW5lT3V0O1xyXG59XHJcblxyXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQge1xyXG4gICAgd2lkdGg6IDk2cHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5NnB4IWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UploadDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDialogComponent", function() { return UploadDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hinhanh.service */ "./src/app/shared/services/hinhanh.service.ts");








let UploadDialogComponent = class UploadDialogComponent {
    constructor(hinhanhService, fb, message, modal, bientheService) {
        this.hinhanhService = hinhanhService;
        this.fb = fb;
        this.message = message;
        this.modal = modal;
        this.bientheService = bientheService;
        this.isConfirmLoading = false;
        this.isShowAddEmployee = false;
        this.isSaveLoading = false;
        this.loading = false;
        this.selectedValue = null;
        this.beforeUpload = (file) => {
            return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.message.error('Vui lòng tải lên hình ảnh có định dạng PNG hoặc JPEG!');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.message.error('Vui lòng tải lên hình ảnh có dung lượng nhỏ hơn hoặc bằng 2MB!');
                    observer.complete();
                    return;
                }
                observer.next(isJpgOrPng && isLt2M);
                observer.complete();
            });
        };
    }
    ngOnInit() {
        this.initFormValidate();
        if (!this.isAdd) {
            this.avatarUrl = this.hinhanhDto.DuongDan;
        }
        //   this.getBT();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _rdo_gender: ['False', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipUpload_image: ['', ''],
        });
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    handleChange(info) {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.avatarUrl = img;
                    this.hinhanhDto.DuongDan = this.avatarUrl;
                });
                break;
            case 'error':
                this.message.error('Lỗi mạng!');
                this.loading = false;
                break;
        }
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    /**
     * check them hoac chinh sua nhan vien
     */
    saveData() {
        this.isConfirmLoading = true;
        if (!this.hinhanhDto || this.isAdd) {
            this.InsertNhanVien();
        }
        else {
            this.UpdateNhanVien();
        }
    }
    // tao nhan vien moi
    InsertNhanVien() {
        if (this.hinhanhDto) {
            this.hinhanhService.create(this.hinhanhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Thêm thành công!');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
                //this.resetForm();
            });
        }
    }
    UpdateNhanVien() {
        if (this.hinhanhDto) {
            this.hinhanhService.update(this.hinhanhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Cập nhật thành công!');
                    console.log(this.hinhanhDto);
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Cập nhật không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
    getBT() {
        this.bientheService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.listBienThe = response.Data;
            }
        });
    }
};
UploadDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_7__["HinhanhService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__["BientheService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadDialogComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadDialogComponent.prototype, "hinhanhDto", void 0);
UploadDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upload-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./upload-dialog.component.css */ "./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.css")).default]
    })
], UploadDialogComponent);



/***/ }),

/***/ "./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td span [nz-icon] {\r\n    margin-right: 10px;\r\n    vertical-align: 0;\r\n}\r\n\r\ntd span.active i,\r\ntd span.active {\r\n    color: green;\r\n}\r\n\r\ntd span.locked i,\r\ntd span.locked {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmllbnRoZS1tYW5hZ2VtZW50L2NodW5nbG9haS9jaHVuZ2xvYWktZGV0YWlsL2NodW5nbG9haS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iaWVudGhlLW1hbmFnZW1lbnQvY2h1bmdsb2FpL2NodW5nbG9haS1kZXRhaWwvY2h1bmdsb2FpLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQgc3BhbiBbbnotaWNvbl0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IDA7XHJcbn1cclxuXHJcbnRkIHNwYW4uYWN0aXZlIGksXHJcbnRkIHNwYW4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxudGQgc3Bhbi5sb2NrZWQgaSxcclxudGQgc3Bhbi5sb2NrZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ChungloaiDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChungloaiDetailComponent", function() { return ChungloaiDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_BienTheDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/BienTheDTO */ "./src/app/models/BienTheDTO.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/chungloai.service */ "./src/app/shared/services/chungloai.service.ts");
/* harmony import */ var _bienthe_bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../bienthe/bienthe-dialog/bienthe-dialog.component */ "./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.ts");
/* harmony import */ var _bienthe_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../bienthe/upload-dialog/upload-dialog.component */ "./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.ts");










let ChungloaiDetailComponent = class ChungloaiDetailComponent {
    constructor(chungloaiService, activatedRoute, modalService, bienTheService, router, message) {
        this.chungloaiService = chungloaiService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.bienTheService = bienTheService;
        this.router = router;
        this.message = message;
        this.pageTitle = 'Chi tiết cá Koi ';
        this.selected = [];
        this.has = false;
        this.dataSource = [];
        this.isConfirmLoading = false;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.getDetail(params.machungloai);
            this.loadList(params.machungloai);
        });
    }
    getDetail(machungloai) {
        this.chungloaiService.getDetail(machungloai).subscribe(response => {
            if (response.Status === true) {
                this.selected = response.Data;
                this.has = true;
            }
            console.log(this.selected);
        });
    }
    // add
    // get danh sach 
    loadList(machungloai) {
        this.bienTheService.GetListOfChungLoai(machungloai).subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.has = true;
                //this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    create() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm biến thể',
            nzContent: _bienthe_bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_8__["BientheDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                bientheDto: new src_app_models_BienTheDTO__WEBPACK_IMPORTED_MODULE_5__["BienTheDTO"]()
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chinh sửa thông tin biến thể',
            nzContent: _bienthe_bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_8__["BientheDialogComponent"],
            nzComponentParams: {
                bientheDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    view(mabienthe) {
        this.navigateDetail(mabienthe);
    }
    navigateDetail(mabienthe) {
        if (mabienthe) {
            // chuyen sang màn hình chi tiết nhan vien
            this.router.navigate(['admin/bien-the/chitiet/'], { queryParams: { mabienthe: mabienthe } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    add(data) {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm hình ảnh biến thể',
            nzContent: _bienthe_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UploadDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                hinhanhDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
ChungloaiDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_7__["ChungloaiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__["BientheService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }
];
ChungloaiDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chungloai-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chungloai-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chungloai-detail.component.css */ "./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.css")).default]
    })
], ChungloaiDetailComponent);



/***/ }),

/***/ "./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JpZW50aGUtbWFuYWdlbWVudC9jaHVuZ2xvYWkvY2h1bmdsb2FpLWRpYWxvZy9jaHVuZ2xvYWktZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ChungloaiDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChungloaiDialogComponent", function() { return ChungloaiDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/chungloai.service */ "./src/app/shared/services/chungloai.service.ts");






let ChungloaiDialogComponent = class ChungloaiDialogComponent {
    constructor(chungloaiService, fb, message, modal) {
        this.chungloaiService = chungloaiService;
        this.fb = fb;
        this.message = message;
        this.modal = modal;
        this.isConfirmLoading = false;
        this.isShowAdd = false;
        this.isSaveLoading = false;
        this.loading = false;
    }
    ngOnInit() {
        this.initFormValidate();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_TenChungLoai: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            _ipTextarea_MauSac: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_MucDoChamSoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_CheDoAn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipText_TinhCach: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipText_DieuKienNuoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipTextarea_CachChamSoc: ['', ''],
            _ipTextarea_MoTa: ['', ''],
            _ipText_KichThuocToiDa: ['', '']
        });
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    /**
     * check them hoac chinh sua
     */
    saveData() {
        this.isConfirmLoading = true;
        if (!this.chungloaiDto || this.isAdd) {
            this.Insert();
        }
        else {
            this.Update();
        }
    }
    // tao  moi
    Insert() {
        if (this.chungloaiDto) {
            this.chungloaiService.create(this.chungloaiDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm thành công!');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm không thành công!');
                }
                this.isConfirmLoading = false;
            });
            this.resetForm();
        }
    }
    Update() {
        if (this.chungloaiDto) {
            this.chungloaiService.update(this.chungloaiDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Cập nhật chủng loại thành công!');
                    console.log(this.chungloaiDto);
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Cập nhật chủng loại không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
};
ChungloaiDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_5__["ChungloaiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChungloaiDialogComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChungloaiDialogComponent.prototype, "chungloaiDto", void 0);
ChungloaiDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chungloai-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chungloai-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chungloai-dialog.component.css */ "./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.css")).default]
    })
], ChungloaiDialogComponent);



/***/ }),

/***/ "./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[nz-form] {\r\n    max-width: 600px;\r\n}\r\n\r\n.phone-select {\r\n    width: 70px;\r\n}\r\n\r\n.register-are {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.avatar-uploader>.ant-upload {\r\n    width: 128px;\r\n    height: 128px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmllbnRoZS1tYW5hZ2VtZW50L2NodW5nbG9haS9jaHVuZ2xvYWktbGlzdC9jaHVuZ2xvYWktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iaWVudGhlLW1hbmFnZW1lbnQvY2h1bmdsb2FpL2NodW5nbG9haS1saXN0L2NodW5nbG9haS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotZm9ybV0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLnBob25lLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogNzBweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWFyZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5hdmF0YXItdXBsb2FkZXI+LmFudC11cGxvYWQge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ChungloaiListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChungloaiListComponent", function() { return ChungloaiListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models_ChungLoaiDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/ChungLoaiDTO */ "./src/app/models/ChungLoaiDTO.ts");
/* harmony import */ var src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/chungloai.service */ "./src/app/shared/services/chungloai.service.ts");
/* harmony import */ var _chungloai_dialog_chungloai_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chungloai-dialog/chungloai-dialog.component */ "./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.ts");








let ChungloaiListComponent = class ChungloaiListComponent {
    constructor(chungloaiService, router, message, modalService) {
        this.chungloaiService = chungloaiService;
        this.router = router;
        this.message = message;
        this.modalService = modalService;
        this.pageTitle = 'Danh sách chủng loại';
        this.dataSource = [];
        this.isConfirmLoading = false;
        this.sName = '';
    }
    ngOnInit() {
        this.isConfirmLoading = true;
        this.loadList();
    }
    // get danh sach 
    loadList() {
        this.chungloaiService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    // xem chi tiết 
    view(machungloai) {
        this.navigateDetail(machungloai);
    }
    navigateDetail(machungloai) {
        if (machungloai) {
            // chuyen sang màn hình chi tiết 
            this.router.navigate(['admin/chung-loai/chitiet/'], { queryParams: { machungloai: machungloai } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    create() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm chủng loại',
            nzContent: _chungloai_dialog_chungloai_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ChungloaiDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                chungloaiDto: new src_app_models_ChungLoaiDTO__WEBPACK_IMPORTED_MODULE_5__["ChungLoaiDTO"]()
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chinh sửa thông tin chủng loại',
            nzContent: _chungloai_dialog_chungloai_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ChungloaiDialogComponent"],
            nzComponentParams: {
                chungloaiDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '1000',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
ChungloaiListComponent.ctorParameters = () => [
    { type: src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_6__["ChungloaiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
ChungloaiListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chungloai-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chungloai-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chungloai-list.component.css */ "./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.css")).default]
    })
], ChungloaiListComponent);



/***/ }),

/***/ "./src/app/pages/image-management/img-bienthe/img-list/img-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/image-management/img-bienthe/img-list/img-list.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLW1hbmFnZW1lbnQvaW1nLWJpZW50aGUvaW1nLWxpc3QvaW1nLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/image-management/img-bienthe/img-list/img-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/image-management/img-bienthe/img-list/img-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ImgListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgListComponent", function() { return ImgListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_models_HinhAnhBienTheDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/HinhAnhBienTheDTO */ "./src/app/models/HinhAnhBienTheDTO.ts");
/* harmony import */ var src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/hinhanh.service */ "./src/app/shared/services/hinhanh.service.ts");
/* harmony import */ var _upload_img_bt_upload_img_bt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload-img-bt/upload-img-bt.component */ "./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.ts");







let ImgListComponent = class ImgListComponent {
    constructor(modalService, hinhanhService, sanitizer) {
        this.modalService = modalService;
        this.hinhanhService = hinhanhService;
        this.sanitizer = sanitizer;
        this.dataSource = [];
    }
    ngOnInit() {
        this.loadist();
    }
    // get danh sach nhan vien
    loadist() {
        this.hinhanhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                // this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    createNhanVien() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm nhân viên',
            nzContent: _upload_img_bt_upload_img_bt_component__WEBPACK_IMPORTED_MODULE_6__["UploadImgBTComponent"],
            nzComponentParams: {
                isAdd: true,
                hinhanhDto: new src_app_models_HinhAnhBienTheDTO__WEBPACK_IMPORTED_MODULE_4__["HinhAnhBienTheDTO"]()
            },
            nzWidth: '800',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
ImgListComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_5__["HinhanhService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
ImgListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-img-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./img-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/image-management/img-bienthe/img-list/img-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./img-list.component.css */ "./src/app/pages/image-management/img-bienthe/img-list/img-list.component.css")).default]
    })
], ImgListComponent);



/***/ }),

/***/ "./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .upload-list-inline .ant-upload-list-item {\r\n    float: left;\r\n    width: 200px;\r\n    margin-right: 8px;\r\n}\r\n\r\n :host ::ng-deep .upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {\r\n    float: right;\r\n}\r\n\r\n :host ::ng-deep .upload-list-inline .ant-upload-animate-enter {\r\n    -webkit-animation-name: uploadAnimateInlineIn;\r\n            animation-name: uploadAnimateInlineIn;\r\n}\r\n\r\n :host ::ng-deep .upload-list-inline .ant-upload-animate-leave {\r\n    -webkit-animation-name: uploadAnimateInlineOut;\r\n            animation-name: uploadAnimateInlineOut;\r\n}\r\n\r\n .ant-upload.ant-upload-select-picture-card {\r\n    width: 96px!important;\r\n    height: 96px!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW1hZ2UtbWFuYWdlbWVudC9pbWctYmllbnRoZS91cGxvYWQtaW1nLWJ0L3VwbG9hZC1pbWctYnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztDQUVDO0lBQ0csWUFBWTtBQUNoQjs7Q0FFQztJQUNHLDZDQUFxQztZQUFyQyxxQ0FBcUM7QUFDekM7O0NBRUM7SUFDRyw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDOztDQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLW1hbmFnZW1lbnQvaW1nLWJpZW50aGUvdXBsb2FkLWltZy1idC91cGxvYWQtaW1nLWJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnVwbG9hZC1saXN0LWlubGluZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuIDpob3N0IDo6bmctZGVlcCAudXBsb2FkLWxpc3QtaW5saW5lIFtjbGFzcyo9Jy11cGxvYWQtbGlzdC1ydGwnXSAuYW50LXVwbG9hZC1saXN0LWl0ZW0ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4gOmhvc3QgOjpuZy1kZWVwIC51cGxvYWQtbGlzdC1pbmxpbmUgLmFudC11cGxvYWQtYW5pbWF0ZS1lbnRlciB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUlubGluZUluO1xyXG59XHJcblxyXG4gOmhvc3QgOjpuZy1kZWVwIC51cGxvYWQtbGlzdC1pbmxpbmUgLmFudC11cGxvYWQtYW5pbWF0ZS1sZWF2ZSB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUlubGluZU91dDtcclxufVxyXG5cclxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1zZWxlY3QtcGljdHVyZS1jYXJkIHtcclxuICAgIHdpZHRoOiA5NnB4IWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTZweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: UploadImgBTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImgBTComponent", function() { return UploadImgBTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hinhanh.service */ "./src/app/shared/services/hinhanh.service.ts");








let UploadImgBTComponent = class UploadImgBTComponent {
    constructor(hinhanhService, fb, message, modal, bientheService) {
        this.hinhanhService = hinhanhService;
        this.fb = fb;
        this.message = message;
        this.modal = modal;
        this.bientheService = bientheService;
        this.isConfirmLoading = false;
        this.isShowAddEmployee = false;
        this.isSaveLoading = false;
        this.loading = false;
        this.selectedValue = null;
        this.beforeUpload = (file) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]((observer) => {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.message.error('Vui lòng tải lên hình ảnh có định dạng PNG hoặc JPEG!');
                    observer.complete();
                    return;
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.message.error('Vui lòng tải lên hình ảnh có dung lượng nhỏ hơn hoặc bằng 2MB!');
                    observer.complete();
                    return;
                }
                observer.next(isJpgOrPng && isLt2M);
                observer.complete();
            });
        };
    }
    ngOnInit() {
        this.initFormValidate();
        if (!this.isAdd) {
            this.avatarUrl = this.hinhanhDto.DuongDan;
        }
        this.getBT();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _rdo_gender: ['False', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _selectBox_employeePostition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipUpload_image: ['', ''],
        });
    }
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result.toString()));
        reader.readAsDataURL(img);
    }
    handleChange(info) {
        switch (info.file.status) {
            case 'uploading':
                this.loading = true;
                break;
            case 'done':
                // Get this url from response in real world.
                this.getBase64(info.file.originFileObj, (img) => {
                    this.loading = false;
                    this.avatarUrl = img;
                    this.hinhanhDto.DuongDan = this.avatarUrl;
                });
                break;
            case 'error':
                this.message.error('Lỗi mạng!');
                this.loading = false;
                break;
        }
    }
    //image
    // seletedFile(event: any) {
    //   if (event.target.files) {
    //     var reader = new FileReader();
    //     reader.readAsDataURL(event.target.files[0]);
    //     reader.onload = (event: any) => {
    //       this.avatarUrl = event.target.result;
    //       this.hinhanhDto.DuongDan = this.avatarUrl;
    //     };
    //   }
    // }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    /**
     * check them hoac chinh sua nhan vien
     */
    saveData() {
        this.isConfirmLoading = true;
        if (!this.hinhanhDto || this.isAdd) {
            this.InsertNhanVien();
        }
        else {
            this.UpdateNhanVien();
        }
    }
    // tao nhan vien moi
    InsertNhanVien() {
        if (this.hinhanhDto) {
            this.hinhanhService.create(this.hinhanhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Thêm nhân viên thành công!');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Thêm nhân viên không thành công!');
                }
                this.isConfirmLoading = false;
                //this.resetForm();
            });
        }
    }
    UpdateNhanVien() {
        if (this.hinhanhDto) {
            this.hinhanhService.update(this.hinhanhDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Success, 'Cập nhật nhân viên thành công!');
                    console.log(this.hinhanhDto);
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_5__["TypeMessage"].Error, 'Cập nhật nhân viên không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
    getBT() {
        this.bientheService.getListAll().subscribe(response => {
            if (response && response.Status) {
                this.listBienThe = response.Data;
            }
        });
    }
};
UploadImgBTComponent.ctorParameters = () => [
    { type: src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_7__["HinhanhService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__["BientheService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadImgBTComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UploadImgBTComponent.prototype, "hinhanhDto", void 0);
UploadImgBTComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-img-bt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upload-img-bt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./upload-img-bt.component.css */ "./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.css")).default]
    })
], UploadImgBTComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\r\n    max-width: 300px;\r\n    margin: auto;\r\n    padding-top: 50px;\r\n}\r\n\r\n.login-form-button {\r\n    width: 100%;\r\n}\r\n\r\n.alert-login {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.inner-content {\r\n    padding: 90px 0 0;\r\n    text-align: center;\r\n}\r\n\r\n.page-header {\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.login-page .ant-layout-footer {\r\n    color: #fff\r\n}\r\n\r\n.login-page .ant-layout-footer {\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.lock-icon {\r\n    font-size: 60px;\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYWxlcnQtbG9naW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOTBweCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgLmFudC1sYXlvdXQtZm9vdGVyIHtcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIC5hbnQtbGF5b3V0LWZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvY2staWNvbiB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var src_app_common_base_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common_base/authentication/authentication.service */ "./src/app/common_base/authentication/authentication.service.ts");







let LoginComponent = class LoginComponent {
    constructor(fb, loginService, router, authService) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.authService = authService;
        this.pageTitle = _app_config__WEBPACK_IMPORTED_MODULE_3__["SITENAME"];
        this.year = new Date().getFullYear();
        this.pageFooter = _app_config__WEBPACK_IMPORTED_MODULE_3__["SITENAME"] + ' ©' + this.year;
        this.isShowMessage = false;
        document.body.className = "login-body";
    }
    ngOnInit() {
        this.initFormValidate();
        if (this.isLogin()) {
            this.router.navigateByUrl('/admin');
        }
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            _ipText_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    getTokenFromLocalStorage() {
        return localStorage.getItem(_app_config__WEBPACK_IMPORTED_MODULE_3__["localStorageKey"]);
    }
    setTokenFromLocalStorage(value) {
        localStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_3__["localStorageKey"], value);
    }
    isLogin() {
        const tokenData = this.getTokenFromLocalStorage();
        if (tokenData && tokenData !== 'null') {
            return true;
        }
        return false;
    }
    login() {
        const loginDto = {
            username: this.validateForm.controls._ipText_userName.value,
            password: this.validateForm.controls._ipText_password.value,
        };
        this.authService.login(loginDto)
            .pipe()
            .subscribe(data => {
            this.router.navigateByUrl('admin');
        }, error => {
            this.isShowMessage = true;
        });
        // this.loginService.getToken(loginDto).subscribe(response => {
        //   if (response.Status === true && response.Data == null) {
        //     this.isShowMessage = true;
        //   }
        //   if (response && response.Data && response.Data !== 'null') {
        //     this.setTokenFromLocalStorage(response.Data);
        //     this.router.navigateByUrl('/admin');
        //   }
        // });
    }
    submitForm() {
        this.isShowMessage = false;
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        // check valid
        if (this.validateForm.status === 'INVALID') {
            return;
        }
        this.login();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_common_base_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap {\r\n    background-color: #f5f5f5;\r\n    padding: 24px;\r\n    display: flex;\r\n}\r\n\r\n.extra-content {\r\n    max-width: 240px;\r\n    text-align: left;\r\n    padding-right: 20px;\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n}\r\n\r\n.content [nz-descriptions] {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.content-link {\r\n    padding-top: 16px;\r\n}\r\n\r\n.content-link a {\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n    margin-right: 32px;\r\n}\r\n\r\n.content-link a img {\r\n    margin-right: 8px;\r\n}\r\n\r\n.ant-avatar.ant-avatar-icon {\r\n    margin-top: 16px;\r\n    margin-right: 16px;\r\n    width: 120px;\r\n    height: 120px;\r\n    font-size: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmhhbnZpZW4tbWFuYWdlbWVudC9uaGFudmllbi1kZXRhaWwvbmhhbnZpZW4tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uaGFudmllbi1tYW5hZ2VtZW50L25oYW52aWVuLWRldGFpbC9uaGFudmllbi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4dHJhLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiAyNDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY29udGVudCBbbnotZGVzY3JpcHRpb25zXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5hbnQtYXZhdGFyLmFudC1hdmF0YXItaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NhanvienDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanvienDetailComponent", function() { return NhanvienDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/nhanvien.service */ "./src/app/shared/services/nhanvien.service.ts");
/* harmony import */ var _nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nhanvien-dialog/nhanvien-dialog.component */ "./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.ts");






const userList = ['User', 'Admin', 'Accounter', 'Admin1'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
let NhanvienDetailComponent = class NhanvienDetailComponent {
    constructor(nhanvienService, activatedRoute, modalService) {
        this.nhanvienService = nhanvienService;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.pageTitle = 'Chi tiết nhân viên';
        this.selectedNhanvien = [];
        this.hasNhanvien = false;
        this.text = userList[3];
        this.color = colorList[3];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.getDetail(params.manhanvien);
        });
    }
    getDetail(manhanvien) {
        this.nhanvienService.getDetail(manhanvien).subscribe(response => {
            if (response.Status === true) {
                this.selectedNhanvien = response.Data;
                this.hasNhanvien = true;
            }
            console.log(this.selectedNhanvien);
        });
    }
    change() {
        let idx = userList.indexOf(this.text);
        ++idx;
        if (idx === userList.length) {
            idx = 0;
        }
        this.text = userList[idx];
        this.color = colorList[idx];
    }
    edit(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chinh sửa nhân viên',
            nzContent: _nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_5__["NhanvienDialogComponent"],
            nzComponentParams: {
                nhanvienDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '800',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
NhanvienDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_4__["NhanvienService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
NhanvienDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhanvien-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nhanvien-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nhanvien-detail.component.css */ "./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.css")).default]
    })
], NhanvienDetailComponent);



/***/ }),

/***/ "./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ant-upload.ant-upload-select-picture-card {\r\n    width: 96px!important;\r\n    height: 96px!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmhhbnZpZW4tbWFuYWdlbWVudC9uaGFudmllbi1kaWFsb2cvbmhhbnZpZW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmhhbnZpZW4tbWFuYWdlbWVudC9uaGFudmllbi1kaWFsb2cvbmhhbnZpZW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LXVwbG9hZC5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQge1xyXG4gICAgd2lkdGg6IDk2cHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5NnB4IWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NhanvienDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanvienDialogComponent", function() { return NhanvienDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/nhanvien.service */ "./src/app/shared/services/nhanvien.service.ts");






let NhanvienDialogComponent = class NhanvienDialogComponent {
    constructor(nhanvienService, fb, message, modal) {
        this.nhanvienService = nhanvienService;
        this.fb = fb;
        this.message = message;
        this.modal = modal;
        this.isConfirmLoading = false;
        this.isShowAddNhanVien = false;
        this.isSaveLoading = false;
        this.dataSource = [];
        this.dateFormat = 'dd/MM/yyyy';
        this.loading = false;
    }
    ngOnInit() {
        this.initFormValidate();
    }
    initFormValidate() {
        this.validateForm = this.fb.group({
            _ipText_CMND: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            _ipText_HoLot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipText_TenNhanVien: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipDate_NgaySinh: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _rdo_gender: ['False', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            _ipText_email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            _ipText_Sdt: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(13)]],
            _ipTextarea_DiaChi: ['', '']
        });
    }
    resetForm() {
        this.validateForm.reset();
        // tslint:disable-next-line: forin
        for (const key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    }
    handleCancelButton() {
        this.resetForm();
        this.modal.destroy();
    }
    handleSubmitButton() {
        this.isSaveLoading = true;
        this.saveData();
        setTimeout(() => {
            this.isSaveLoading = false;
        }, 1000);
        this.modal.destroy();
    }
    /**
     * check them hoac chinh sua nhan vien
     */
    saveData() {
        this.isConfirmLoading = true;
        if (!this.nhanvienDto || this.isAdd) {
            this.InsertNhanVien();
        }
        else {
            this.UpdateNhanVien();
        }
    }
    // tao nhan vien moi
    InsertNhanVien() {
        if (this.nhanvienDto) {
            this.nhanvienService.create(this.nhanvienDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Thêm nhân viên thành công!');
                    this.loadNhanVienList();
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Thêm nhân viên không thành công!');
                }
                this.isConfirmLoading = false;
            });
            this.resetForm();
        }
    }
    UpdateNhanVien() {
        if (this.nhanvienDto) {
            this.nhanvienService.update(this.nhanvienDto).subscribe(response => {
                if (response && response.Status) {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Cập nhật nhân viên thành công!');
                }
                else {
                    this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Cập nhật nhân viên không thành công!');
                }
                this.isConfirmLoading = false;
            });
        }
    }
    // get danh sach nhan vien
    loadNhanVienList() {
        this.nhanvienService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
};
NhanvienDialogComponent.ctorParameters = () => [
    { type: src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_5__["NhanvienService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhanvienDialogComponent.prototype, "isAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhanvienDialogComponent.prototype, "nhanvienDto", void 0);
NhanvienDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhanvien-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nhanvien-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nhanvien-dialog.component.css */ "./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.css")).default]
    })
], NhanvienDialogComponent);



/***/ }),

/***/ "./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[nz-form] {\r\n    max-width: 600px;\r\n}\r\n\r\n.phone-select {\r\n    width: 70px;\r\n}\r\n\r\n.register-are {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.avatar-uploader>.ant-upload {\r\n    width: 128px;\r\n    height: 128px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmhhbnZpZW4tbWFuYWdlbWVudC9uaGFudmllbi1saXN0L25oYW52aWVuLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmhhbnZpZW4tbWFuYWdlbWVudC9uaGFudmllbi1saXN0L25oYW52aWVuLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1mb3JtXSB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4ucGhvbmUtc2VsZWN0IHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYXJlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmF2YXRhci11cGxvYWRlcj4uYW50LXVwbG9hZCB7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: NhanvienListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanvienListComponent", function() { return NhanvienListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models */ "./src/app/models/index.ts");
/* harmony import */ var src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/nhanvien.service */ "./src/app/shared/services/nhanvien.service.ts");
/* harmony import */ var _nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nhanvien-dialog/nhanvien-dialog.component */ "./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.ts");








let NhanvienListComponent = class NhanvienListComponent {
    constructor(nhanVienService, router, message, modalService) {
        this.nhanVienService = nhanVienService;
        this.router = router;
        this.message = message;
        this.modalService = modalService;
        this.pageTitle = 'Danh sách nhân viên';
        this.dataSource = [];
        this.isConfirmLoading = false;
        this.sName = '';
    }
    ngOnInit() {
        this.isConfirmLoading = true;
        this.loadNhanVienList();
    }
    // get danh sach nhan vien
    loadNhanVienList() {
        this.nhanVienService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    // xem chi tiết nhân viên
    viewNhanvien(manhanvien) {
        this.navigateDetail(manhanvien);
    }
    navigateDetail(manhanvien) {
        if (manhanvien) {
            // chuyen sang màn hình chi tiết nhan vien
            this.router.navigate(['admin/nhanvien-management/detail/'], { queryParams: { manhanvien: manhanvien } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    createNhanVien() {
        const modalCreate = this.modalService.create({
            nzTitle: 'Thêm nhân viên',
            nzContent: _nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NhanvienDialogComponent"],
            nzComponentParams: {
                isAdd: true,
                nhanvienDto: new src_app_models__WEBPACK_IMPORTED_MODULE_5__["NhanVienDTO"]()
            },
            nzWidth: '800',
        });
        // Return a result when closed
        modalCreate.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    editNhanVien(data) {
        const modalEdit = this.modalService.create({
            nzTitle: 'Chinh sửa nhân viên',
            nzContent: _nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NhanvienDialogComponent"],
            nzComponentParams: {
                nhanvienDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '800',
        });
        // Return a result when closed
        modalEdit.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    confirmDelete(data) {
        const modalDelete = this.modalService.confirm({
            nzTitle: 'Bạn có chắc chắn xóa nhân viên này?',
            nzContent: `<b style='color: red;'> Tên nhân viên:${data.HoLot} ${data.TenNhanVien}</b>`,
            nzOkText: 'Xóa',
            nzOkType: 'danger',
            nzOnOk: () => this.deleteNhanVien(data.MaNhanVien),
            nzCancelText: 'Hủy',
        });
        // Return a result when closed
        modalDelete.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
    /**
   * delete data
   */
    deleteNhanVien(manhanvien) {
        const param = { manhanvien: manhanvien };
        this.nhanVienService.delete(param).subscribe(response => {
            if (response.Status === true) {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Success, 'Xóa nhân viên thành công!');
                // get lai danh sach nhan vien
                this.loadNhanVienList();
            }
            else {
                this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Xóa nhân viên không thành công!');
            }
        });
    }
};
NhanvienListComponent.ctorParameters = () => [
    { type: src_app_shared_services_nhanvien_service__WEBPACK_IMPORTED_MODULE_6__["NhanvienService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
NhanvienListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhanvien-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nhanvien-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nhanvien-list.component.css */ "./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.css")).default]
    })
], NhanvienListComponent);



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _account_management_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-management/users/user-list/user-list.component */ "./src/app/pages/account-management/users/user-list/user-list.component.ts");
/* harmony import */ var _benh_management_benh_benh_detail_benh_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./benh-management/benh/benh-detail/benh-detail.component */ "./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.ts");
/* harmony import */ var _benh_management_benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./benh-management/benh/benh-list/benh-list.component */ "./src/app/pages/benh-management/benh/benh-list/benh-list.component.ts");
/* harmony import */ var _benh_management_thuoc_thuoc_detail_thuoc_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./benh-management/thuoc/thuoc-detail/thuoc-detail.component */ "./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.ts");
/* harmony import */ var _benh_management_thuoc_thuoc_list_thuoc_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./benh-management/thuoc/thuoc-list/thuoc-list.component */ "./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.ts");
/* harmony import */ var _benh_management_trieuchung_trieuchung_list_trieuchung_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./benh-management/trieuchung/trieuchung-list/trieuchung-list.component */ "./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.ts");
/* harmony import */ var _benh_management_trieuchung_trieuchungbenh_trieuchungbenh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component */ "./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.ts");
/* harmony import */ var _bienthe_management_bienthe_bienthe_detail_bienthe_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bienthe-management/bienthe/bienthe-detail/bienthe-detail.component */ "./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.ts");
/* harmony import */ var _bienthe_management_bienthe_bienthe_list_bienthe_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bienthe-management/bienthe/bienthe-list/bienthe-list.component */ "./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.ts");
/* harmony import */ var _bienthe_management_chungloai_chungloai_detail_chungloai_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bienthe-management/chungloai/chungloai-detail/chungloai-detail.component */ "./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.ts");
/* harmony import */ var _bienthe_management_chungloai_chungloai_list_chungloai_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bienthe-management/chungloai/chungloai-list/chungloai-list.component */ "./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.ts");
/* harmony import */ var _image_management_img_bienthe_img_list_img_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./image-management/img-bienthe/img-list/img-list.component */ "./src/app/pages/image-management/img-bienthe/img-list/img-list.component.ts");
/* harmony import */ var _nhanvien_management_nhanvien_detail_nhanvien_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nhanvien-management/nhanvien-detail/nhanvien-detail.component */ "./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.ts");
/* harmony import */ var _nhanvien_management_nhanvien_list_nhanvien_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nhanvien-management/nhanvien-list/nhanvien-list.component */ "./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");





















const routes = [
    {
        path: 'admin',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_20__["PagesComponent"],
        children: [
            {
                path: 'nhanvien-management',
                component: _nhanvien_management_nhanvien_list_nhanvien_list_component__WEBPACK_IMPORTED_MODULE_19__["NhanvienListComponent"]
            },
            {
                path: 'nhanvien-management/detail',
                component: _nhanvien_management_nhanvien_detail_nhanvien_detail_component__WEBPACK_IMPORTED_MODULE_18__["NhanvienDetailComponent"]
            },
            {
                path: 'users-management',
                component: _account_management_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"]
            },
            {
                path: 'cac-loai-benh',
                component: _benh_management_benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_8__["BenhListComponent"]
            },
            {
                path: 'cac-loai-thuoc',
                component: _benh_management_thuoc_thuoc_list_thuoc_list_component__WEBPACK_IMPORTED_MODULE_10__["ThuocListComponent"]
            },
            {
                path: 'trieu-chung',
                component: _benh_management_trieuchung_trieuchung_list_trieuchung_list_component__WEBPACK_IMPORTED_MODULE_11__["TrieuchungListComponent"]
            },
            {
                path: 'trieu-chung-benh',
                component: _benh_management_trieuchung_trieuchungbenh_trieuchungbenh_component__WEBPACK_IMPORTED_MODULE_12__["TrieuchungbenhComponent"]
            },
            {
                path: 'imgBT-management',
                component: _image_management_img_bienthe_img_list_img_list_component__WEBPACK_IMPORTED_MODULE_17__["ImgListComponent"]
            },
            {
                path: 'cac-loai-benh/chitiet',
                component: _benh_management_benh_benh_detail_benh_detail_component__WEBPACK_IMPORTED_MODULE_7__["BenhDetailComponent"]
            },
            {
                path: 'cac-loai-thuoc/chitiet',
                component: _benh_management_thuoc_thuoc_detail_thuoc_detail_component__WEBPACK_IMPORTED_MODULE_9__["ThuocDetailComponent"]
            },
            {
                path: 'chung-loai',
                component: _bienthe_management_chungloai_chungloai_list_chungloai_list_component__WEBPACK_IMPORTED_MODULE_16__["ChungloaiListComponent"]
            },
            {
                path: 'chung-loai/chitiet',
                component: _bienthe_management_chungloai_chungloai_detail_chungloai_detail_component__WEBPACK_IMPORTED_MODULE_15__["ChungloaiDetailComponent"]
            },
            {
                path: 'bien-the',
                component: _bienthe_management_bienthe_bienthe_list_bienthe_list_component__WEBPACK_IMPORTED_MODULE_14__["BientheListComponent"]
            },
            {
                path: 'bien-the/chitiet',
                component: _bienthe_management_bienthe_bienthe_detail_bienthe_detail_component__WEBPACK_IMPORTED_MODULE_13__["BientheDetailComponent"]
            },
        ]
    }
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], PagesRoutingModule);



/***/ }),

/***/ "./src/app/pages/pages.component.css":
/*!*******************************************!*\
  !*** ./src/app/pages/pages.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: flex;\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.app-layout {\r\n    height: 100vh;\r\n}\r\n\r\n.menu-sidebar {\r\n    position: relative;\r\n    z-index: 10;\r\n    min-height: 100vh;\r\n    box-shadow: 2px 0 6px rgba(0, 21, 41, .35);\r\n}\r\n\r\n.header-trigger {\r\n    height: 64px;\r\n    padding: 20px 24px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    transition: all .3s, padding 0s;\r\n}\r\n\r\n.trigger:hover {\r\n    color: #1890ff;\r\n}\r\n\r\n.sidebar-logo {\r\n    position: relative;\r\n    height: 64px;\r\n    padding-left: 24px;\r\n    overflow: hidden;\r\n    line-height: 64px;\r\n    background: #001529;\r\n    transition: all .3s;\r\n}\r\n\r\n.sidebar-logo img {\r\n    display: inline-block;\r\n    height: 32px;\r\n    width: 32px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.sidebar-logo h1 {\r\n    display: inline-block;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    font-size: 14px;\r\n    vertical-align: middle;\r\n}\r\n\r\nnz-header {\r\n    padding: 0;\r\n    width: 100%;\r\n    z-index: 2;\r\n}\r\n\r\n.app-header {\r\n    position: relative;\r\n    height: 64px;\r\n    padding: 0;\r\n    background: #fff;\r\n    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);\r\n}\r\n\r\nnz-content {\r\n    margin: 24px;\r\n    flex: 1 0 auto;\r\n}\r\n\r\n.inner-content {\r\n    padding: 24px;\r\n    background: #fff;\r\n    height: 100%;\r\n}\r\n\r\n.trigger {\r\n    font-size: 18px;\r\n    line-height: 64px;\r\n    padding: 0 24px;\r\n    cursor: pointer;\r\n    transition: color 0.3s;\r\n}\r\n\r\n.trigger:hover {\r\n    color: #1890ff;\r\n}\r\n\r\n.logo {\r\n    height: 64px;\r\n    background: rgba(255, 255, 255, 0.2);\r\n    padding: 16px;\r\n    margin-bottom: 16px;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n.setHeight {\r\n    height: 100%;\r\n}\r\n\r\n.profile {\r\n    padding-right: 50px;\r\n    float: right;\r\n}\r\n\r\n.displayname {\r\n    display: inline;\r\n    padding-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi5hcHAtbGF5b3V0IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tZW51LXNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAwIDZweCByZ2JhKDAsIDIxLCA0MSwgLjM1KTtcclxufVxyXG5cclxuLmhlYWRlci10cmlnZ2VyIHtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MsIHBhZGRpbmcgMHM7XHJcbn1cclxuXHJcbi50cmlnZ2VyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTg5MGZmO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBsaW5lLWhlaWdodDogNjRweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDE1Mjk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ28gaDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxubnotaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMjEsIDQxLCAuMDgpO1xyXG59XHJcblxyXG5uei1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcblxyXG4uaW5uZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRyaWdnZXIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xyXG59XHJcblxyXG4udHJpZ2dlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE4OTBmZjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2V0SGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmRpc3BsYXluYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _common_base_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common_base/authentication/authentication.service */ "./src/app/common_base/authentication/authentication.service.ts");
/* harmony import */ var _common_base_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common_base/base.component */ "./src/app/common_base/base.component.ts");
/* harmony import */ var _models_UserDTO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/UserDTO */ "./src/app/models/UserDTO.ts");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _account_management_users_user_reset_password_user_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-management/users/user-reset-password/user-reset-password.component */ "./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.ts");










let PagesComponent = class PagesComponent extends _common_base_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"] {
    constructor(router, loginService, modalService, authenticationService) {
        super(router, loginService);
        this.router = router;
        this.loginService = loginService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.pageTitle = _app_config__WEBPACK_IMPORTED_MODULE_8__["SITENAME"];
        this.year = new Date().getFullYear();
        this.pageFooter = _app_config__WEBPACK_IMPORTED_MODULE_8__["SITENAME"] + ' ©' + this.year;
        this.isCollapsed = false;
        this.mode = false;
        this.dark = false;
        this.menus = [];
        // tslint:disable-next-line: new-parens
        this.user = new _models_UserDTO__WEBPACK_IMPORTED_MODULE_6__["UserDTO"];
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        // console.log(' this.currentUser ' + this.currentUser.RoleIds);
    }
    ngOnInit() {
        // if (this.currentUser.ListRoles[0].Name === CONSTANT.Role.Admin)
        // {
        //   this.menus = CONFIG.MENUS_SIDEBAR;
        //   console.log("isAdmin" + this.authenticationService.isAdmin);
        // } else
        // if (this.currentUser.ListRoles[0].Name === CONSTANT.Role.NhanVien) {
        //   this.menus = CONFIG.MENUS_EMPLOYEE_SIDEBAR;
        //   console.log("isNhanVien");
        // }
        // this.getUser();
    }
    // private getUser() {
    //   this.loginService.getUser().subscribe(response => {
    //     if (response.Status === false) {
    //       return;
    //     }
    //     if (response && response.Data) {
    //       this.currentUser = response.Data;
    //     }
    //   });
    // }
    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
    }
    logout() {
        this.setTokenFromLocalStorage('');
        const token = this.getTokenFromLocalStorage();
        if (token === '' || token) {
            this.router.navigateByUrl('/login');
        }
    }
    showModalChangePassword(data) {
        const modalChangePassword = this.modalService.create({
            nzTitle: 'Đổi mật khẩu cho tài khoản ',
            nzContent: _account_management_users_user_reset_password_user_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["UserResetPasswordComponent"],
            nzComponentParams: {
                userDto: JSON.parse(JSON.stringify(data))
            },
            nzWidth: '480',
        });
        modalChangePassword.afterClose.subscribe(() => {
            return this.ngOnInit();
        });
    }
};
PagesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: _common_base_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
PagesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pages.component.css */ "./src/app/pages/pages.component.css")).default]
    })
], PagesComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nhanvien_management_nhanvien_list_nhanvien_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nhanvien-management/nhanvien-list/nhanvien-list.component */ "./src/app/pages/nhanvien-management/nhanvien-list/nhanvien-list.component.ts");
/* harmony import */ var _nhanvien_management_nhanvien_detail_nhanvien_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nhanvien-management/nhanvien-detail/nhanvien-detail.component */ "./src/app/pages/nhanvien-management/nhanvien-detail/nhanvien-detail.component.ts");
/* harmony import */ var _nhanvien_management_nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nhanvien-management/nhanvien-dialog/nhanvien-dialog.component */ "./src/app/pages/nhanvien-management/nhanvien-dialog/nhanvien-dialog.component.ts");
/* harmony import */ var _account_management_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-management/users/user-list/user-list.component */ "./src/app/pages/account-management/users/user-list/user-list.component.ts");
/* harmony import */ var _image_management_img_bienthe_img_list_img_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-management/img-bienthe/img-list/img-list.component */ "./src/app/pages/image-management/img-bienthe/img-list/img-list.component.ts");
/* harmony import */ var _image_management_img_bienthe_upload_img_bt_upload_img_bt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./image-management/img-bienthe/upload-img-bt/upload-img-bt.component */ "./src/app/pages/image-management/img-bienthe/upload-img-bt/upload-img-bt.component.ts");
/* harmony import */ var _account_management_users_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./account-management/users/user-dialog/user-dialog.component */ "./src/app/pages/account-management/users/user-dialog/user-dialog.component.ts");
/* harmony import */ var _account_management_users_user_reset_password_user_reset_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./account-management/users/user-reset-password/user-reset-password.component */ "./src/app/pages/account-management/users/user-reset-password/user-reset-password.component.ts");
/* harmony import */ var _pipes_filter_nv_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pipes/filter-nv.pipe */ "./src/app/pipes/filter-nv.pipe.ts");
/* harmony import */ var _benh_management_benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./benh-management/benh/benh-list/benh-list.component */ "./src/app/pages/benh-management/benh/benh-list/benh-list.component.ts");
/* harmony import */ var _benh_management_thuoc_thuoc_list_thuoc_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./benh-management/thuoc/thuoc-list/thuoc-list.component */ "./src/app/pages/benh-management/thuoc/thuoc-list/thuoc-list.component.ts");
/* harmony import */ var _benh_management_benh_benh_detail_benh_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./benh-management/benh/benh-detail/benh-detail.component */ "./src/app/pages/benh-management/benh/benh-detail/benh-detail.component.ts");
/* harmony import */ var _account_management_users_user_role_dialog_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account-management/users/user-role-dialog/user-role-dialog.component */ "./src/app/pages/account-management/users/user-role-dialog/user-role-dialog.component.ts");
/* harmony import */ var _benh_management_benh_thuoc_ofbenh_dialog_thuoc_ofbenh_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component */ "./src/app/pages/benh-management/benh/thuoc-ofbenh-dialog/thuoc-ofbenh-dialog.component.ts");
/* harmony import */ var _benh_management_thuoc_benh_ofthuoc_dialog_benh_ofthuoc_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component */ "./src/app/pages/benh-management/thuoc/benh-ofthuoc-dialog/benh-ofthuoc-dialog.component.ts");
/* harmony import */ var _benh_management_benh_benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./benh-management/benh/benh-dialog/benh-dialog.component */ "./src/app/pages/benh-management/benh/benh-dialog/benh-dialog.component.ts");
/* harmony import */ var _bienthe_management_chungloai_chungloai_list_chungloai_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./bienthe-management/chungloai/chungloai-list/chungloai-list.component */ "./src/app/pages/bienthe-management/chungloai/chungloai-list/chungloai-list.component.ts");
/* harmony import */ var _bienthe_management_chungloai_chungloai_dialog_chungloai_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component */ "./src/app/pages/bienthe-management/chungloai/chungloai-dialog/chungloai-dialog.component.ts");
/* harmony import */ var _bienthe_management_chungloai_chungloai_detail_chungloai_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./bienthe-management/chungloai/chungloai-detail/chungloai-detail.component */ "./src/app/pages/bienthe-management/chungloai/chungloai-detail/chungloai-detail.component.ts");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _benh_management_thuoc_thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./benh-management/thuoc/thuoc-dialog/thuoc-dialog.component */ "./src/app/pages/benh-management/thuoc/thuoc-dialog/thuoc-dialog.component.ts");
/* harmony import */ var _benh_management_thuoc_thuoc_detail_thuoc_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./benh-management/thuoc/thuoc-detail/thuoc-detail.component */ "./src/app/pages/benh-management/thuoc/thuoc-detail/thuoc-detail.component.ts");
/* harmony import */ var _pipes_filter_chung_loai_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../pipes/filter-chung-loai.pipe */ "./src/app/pipes/filter-chung-loai.pipe.ts");
/* harmony import */ var _pipes_filter_benh_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../pipes/filter-benh.pipe */ "./src/app/pipes/filter-benh.pipe.ts");
/* harmony import */ var _pipes_filter_thuoc_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../pipes/filter-thuoc.pipe */ "./src/app/pipes/filter-thuoc.pipe.ts");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../pipes/sort.pipe */ "./src/app/pipes/sort.pipe.ts");
/* harmony import */ var _bienthe_management_bienthe_bienthe_list_bienthe_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./bienthe-management/bienthe/bienthe-list/bienthe-list.component */ "./src/app/pages/bienthe-management/bienthe/bienthe-list/bienthe-list.component.ts");
/* harmony import */ var _bienthe_management_bienthe_bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component */ "./src/app/pages/bienthe-management/bienthe/bienthe-dialog/bienthe-dialog.component.ts");
/* harmony import */ var _bienthe_management_bienthe_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./bienthe-management/bienthe/upload-dialog/upload-dialog.component */ "./src/app/pages/bienthe-management/bienthe/upload-dialog/upload-dialog.component.ts");
/* harmony import */ var _bienthe_management_bienthe_bienthe_detail_bienthe_detail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./bienthe-management/bienthe/bienthe-detail/bienthe-detail.component */ "./src/app/pages/bienthe-management/bienthe/bienthe-detail/bienthe-detail.component.ts");
/* harmony import */ var _benh_management_trieuchung_trieuchung_list_trieuchung_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./benh-management/trieuchung/trieuchung-list/trieuchung-list.component */ "./src/app/pages/benh-management/trieuchung/trieuchung-list/trieuchung-list.component.ts");
/* harmony import */ var _benh_management_trieuchung_trieuchungbenh_dialog_trieuchungbenh_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component */ "./src/app/pages/benh-management/trieuchung/trieuchungbenh-dialog/trieuchungbenh-dialog.component.ts");
/* harmony import */ var _benh_management_trieuchung_trieuchung_dialog_trieuchung_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component */ "./src/app/pages/benh-management/trieuchung/trieuchung-dialog/trieuchung-dialog.component.ts");
/* harmony import */ var _benh_management_benh_trieuchung_of_benh_trieuchung_of_benh_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component */ "./src/app/pages/benh-management/benh/trieuchung-of-benh/trieuchung-of-benh.component.ts");
/* harmony import */ var _benh_management_thuoc_lieutrinh_dialog_lieutrinh_dialog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component */ "./src/app/pages/benh-management/thuoc/lieutrinh-dialog/lieutrinh-dialog.component.ts");
/* harmony import */ var _benh_management_trieuchung_trieuchungbenh_trieuchungbenh_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component */ "./src/app/pages/benh-management/trieuchung/trieuchungbenh/trieuchungbenh.component.ts");
/* harmony import */ var _pipes_filter_trieuchungbenh_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../pipes/filter-trieuchungbenh.pipe */ "./src/app/pipes/filter-trieuchungbenh.pipe.ts");
/* harmony import */ var _benh_management_benh_new_trieu_chung_new_trieu_chung_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./benh-management/benh/new-trieu-chung/new-trieu-chung.component */ "./src/app/pages/benh-management/benh/new-trieu-chung/new-trieu-chung.component.ts");















































let PagesModule = class PagesModule {
};
PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_component__WEBPACK_IMPORTED_MODULE_5__["PagesComponent"],
            _nhanvien_management_nhanvien_list_nhanvien_list_component__WEBPACK_IMPORTED_MODULE_9__["NhanvienListComponent"],
            _nhanvien_management_nhanvien_detail_nhanvien_detail_component__WEBPACK_IMPORTED_MODULE_10__["NhanvienDetailComponent"],
            _nhanvien_management_nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NhanvienDialogComponent"],
            _pipes_filter_nv_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterNVPipe"],
            _pipes_filter_chung_loai_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterChungLoaiPipe"],
            _pipes_filter_benh_pipe__WEBPACK_IMPORTED_MODULE_32__["FilterBenhPipe"],
            _pipes_filter_thuoc_pipe__WEBPACK_IMPORTED_MODULE_33__["FilterThuocPipe"],
            _pipes_filter_trieuchungbenh_pipe__WEBPACK_IMPORTED_MODULE_45__["FilterTrieuchungbenhPipe"],
            _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_34__["SortPipe"],
            _account_management_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"],
            _account_management_users_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_15__["UserDialogComponent"],
            _image_management_img_bienthe_img_list_img_list_component__WEBPACK_IMPORTED_MODULE_13__["ImgListComponent"],
            _image_management_img_bienthe_upload_img_bt_upload_img_bt_component__WEBPACK_IMPORTED_MODULE_14__["UploadImgBTComponent"],
            _account_management_users_user_reset_password_user_reset_password_component__WEBPACK_IMPORTED_MODULE_16__["UserResetPasswordComponent"],
            _benh_management_benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_18__["BenhListComponent"],
            _benh_management_thuoc_thuoc_list_thuoc_list_component__WEBPACK_IMPORTED_MODULE_19__["ThuocListComponent"],
            _benh_management_benh_benh_detail_benh_detail_component__WEBPACK_IMPORTED_MODULE_20__["BenhDetailComponent"],
            _account_management_users_user_role_dialog_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UserRoleDialogComponent"],
            _benh_management_benh_thuoc_ofbenh_dialog_thuoc_ofbenh_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ThuocOfbenhDialogComponent"],
            _benh_management_thuoc_benh_ofthuoc_dialog_benh_ofthuoc_dialog_component__WEBPACK_IMPORTED_MODULE_23__["BenhOfthuocDialogComponent"],
            _benh_management_benh_benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_24__["BenhDialogComponent"],
            _bienthe_management_chungloai_chungloai_list_chungloai_list_component__WEBPACK_IMPORTED_MODULE_25__["ChungloaiListComponent"],
            _bienthe_management_chungloai_chungloai_dialog_chungloai_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ChungloaiDialogComponent"],
            _bienthe_management_chungloai_chungloai_detail_chungloai_detail_component__WEBPACK_IMPORTED_MODULE_27__["ChungloaiDetailComponent"],
            _benh_management_thuoc_thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ThuocDialogComponent"],
            _benh_management_thuoc_thuoc_detail_thuoc_detail_component__WEBPACK_IMPORTED_MODULE_30__["ThuocDetailComponent"],
            _benh_management_thuoc_lieutrinh_dialog_lieutrinh_dialog_component__WEBPACK_IMPORTED_MODULE_43__["LieutrinhDialogComponent"],
            _benh_management_trieuchung_trieuchung_dialog_trieuchung_dialog_component__WEBPACK_IMPORTED_MODULE_41__["TrieuchungDialogComponent"],
            _bienthe_management_bienthe_bienthe_list_bienthe_list_component__WEBPACK_IMPORTED_MODULE_35__["BientheListComponent"],
            _bienthe_management_bienthe_bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_36__["BientheDialogComponent"],
            _bienthe_management_bienthe_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_37__["UploadDialogComponent"],
            _bienthe_management_bienthe_bienthe_detail_bienthe_detail_component__WEBPACK_IMPORTED_MODULE_38__["BientheDetailComponent"],
            _benh_management_trieuchung_trieuchung_list_trieuchung_list_component__WEBPACK_IMPORTED_MODULE_39__["TrieuchungListComponent"],
            _benh_management_trieuchung_trieuchungbenh_dialog_trieuchungbenh_dialog_component__WEBPACK_IMPORTED_MODULE_40__["TrieuchungbenhDialogComponent"],
            _benh_management_benh_trieuchung_of_benh_trieuchung_of_benh_component__WEBPACK_IMPORTED_MODULE_42__["TrieuchungOfBenhComponent"],
            _benh_management_trieuchung_trieuchungbenh_trieuchungbenh_component__WEBPACK_IMPORTED_MODULE_44__["TrieuchungbenhComponent"],
            _benh_management_benh_new_trieu_chung_new_trieu_chung_component__WEBPACK_IMPORTED_MODULE_46__["NewTrieuChungComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_28__["CKEditorModule"]
        ],
        providers: [],
        entryComponents: [
            _nhanvien_management_nhanvien_detail_nhanvien_detail_component__WEBPACK_IMPORTED_MODULE_10__["NhanvienDetailComponent"],
            _bienthe_management_bienthe_bienthe_detail_bienthe_detail_component__WEBPACK_IMPORTED_MODULE_38__["BientheDetailComponent"],
            _nhanvien_management_nhanvien_dialog_nhanvien_dialog_component__WEBPACK_IMPORTED_MODULE_11__["NhanvienDialogComponent"],
            _image_management_img_bienthe_upload_img_bt_upload_img_bt_component__WEBPACK_IMPORTED_MODULE_14__["UploadImgBTComponent"],
            _account_management_users_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_15__["UserDialogComponent"],
            _account_management_users_user_role_dialog_user_role_dialog_component__WEBPACK_IMPORTED_MODULE_21__["UserRoleDialogComponent"],
            _benh_management_benh_benh_detail_benh_detail_component__WEBPACK_IMPORTED_MODULE_20__["BenhDetailComponent"],
            _benh_management_benh_benh_dialog_benh_dialog_component__WEBPACK_IMPORTED_MODULE_24__["BenhDialogComponent"],
            _benh_management_thuoc_thuoc_detail_thuoc_detail_component__WEBPACK_IMPORTED_MODULE_30__["ThuocDetailComponent"],
            _benh_management_thuoc_thuoc_dialog_thuoc_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ThuocDialogComponent"],
            _benh_management_thuoc_lieutrinh_dialog_lieutrinh_dialog_component__WEBPACK_IMPORTED_MODULE_43__["LieutrinhDialogComponent"],
            _benh_management_trieuchung_trieuchung_dialog_trieuchung_dialog_component__WEBPACK_IMPORTED_MODULE_41__["TrieuchungDialogComponent"],
            _bienthe_management_chungloai_chungloai_dialog_chungloai_dialog_component__WEBPACK_IMPORTED_MODULE_26__["ChungloaiDialogComponent"],
            _bienthe_management_chungloai_chungloai_detail_chungloai_detail_component__WEBPACK_IMPORTED_MODULE_27__["ChungloaiDetailComponent"],
            _benh_management_benh_thuoc_ofbenh_dialog_thuoc_ofbenh_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ThuocOfbenhDialogComponent"],
            _benh_management_thuoc_benh_ofthuoc_dialog_benh_ofthuoc_dialog_component__WEBPACK_IMPORTED_MODULE_23__["BenhOfthuocDialogComponent"],
            _bienthe_management_bienthe_bienthe_dialog_bienthe_dialog_component__WEBPACK_IMPORTED_MODULE_36__["BientheDialogComponent"],
            _bienthe_management_bienthe_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_37__["UploadDialogComponent"],
            _account_management_users_user_reset_password_user_reset_password_component__WEBPACK_IMPORTED_MODULE_16__["UserResetPasswordComponent"],
            _benh_management_trieuchung_trieuchungbenh_dialog_trieuchungbenh_dialog_component__WEBPACK_IMPORTED_MODULE_40__["TrieuchungbenhDialogComponent"],
            _benh_management_benh_trieuchung_of_benh_trieuchung_of_benh_component__WEBPACK_IMPORTED_MODULE_42__["TrieuchungOfBenhComponent"],
            _benh_management_benh_new_trieu_chung_new_trieu_chung_component__WEBPACK_IMPORTED_MODULE_46__["NewTrieuChungComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/pipes/filter-benh.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/filter-benh.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterBenhPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBenhPipe", function() { return FilterBenhPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterBenhPipe = class FilterBenhPipe {
    transform(value, searchText) {
        if (value.lenght === 0) {
            return value;
        }
        return value.filter(s => s.TenBenh.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
            s.NguyenNhan.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        // s.MaThuocs.includes(searchText.toLocaleLowerCase())
        );
    }
};
FilterBenhPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterBenh'
    })
], FilterBenhPipe);



/***/ }),

/***/ "./src/app/pipes/filter-chung-loai.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/filter-chung-loai.pipe.ts ***!
  \*************************************************/
/*! exports provided: FilterChungLoaiPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterChungLoaiPipe", function() { return FilterChungLoaiPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterChungLoaiPipe = class FilterChungLoaiPipe {
    transform(value, searchText) {
        if (value.lenght === 0) {
            return value;
        }
        return value.filter(s => s.TenChungLoai.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
            s.MauSac.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    }
};
FilterChungLoaiPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterChungLoai'
    })
], FilterChungLoaiPipe);



/***/ }),

/***/ "./src/app/pipes/filter-nv.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/filter-nv.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterNVPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNVPipe", function() { return FilterNVPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterNVPipe = class FilterNVPipe {
    transform(value, searchText) {
        if (value.lenght === 0) {
            return value;
        }
        return value.filter(s => s.TenNhanVien.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
            s.CMND.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
            s.Sdt.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
            s.Email.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
        // return value.filter( function(search) {
        //   return search.CMND.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ;
        // }
    }
};
FilterNVPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterNV'
    })
], FilterNVPipe);



/***/ }),

/***/ "./src/app/pipes/filter-thuoc.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/filter-thuoc.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterThuocPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterThuocPipe", function() { return FilterThuocPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterThuocPipe = class FilterThuocPipe {
    transform(value, searchText) {
        if (value.lenght === 0) {
            return value;
        }
        return value.filter(s => s.TenThuoc.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
            s.CongDung.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
    }
};
FilterThuocPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterThuoc'
    })
], FilterThuocPipe);



/***/ }),

/***/ "./src/app/pipes/filter-trieuchungbenh.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/pipes/filter-trieuchungbenh.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FilterTrieuchungbenhPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTrieuchungbenhPipe", function() { return FilterTrieuchungbenhPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTrieuchungbenhPipe = class FilterTrieuchungbenhPipe {
    //   transform(items: any[], args: any[]): any {
    //     return items.filter(item => item.TenBenh.indexOf(args.TenBenh) > -1);
    // }
    transform(items, filter, arrayValues) {
        if (filter) {
            return items.filter(item => {
                console.log(item['TenBenh']);
                let notMatchingField = Object.keys(filter)
                    .find(key => filter[key].indexOf(item[key]) == -1);
                return !notMatchingField;
            });
        }
        else {
            let notMatchingField = items;
            return notMatchingField;
        }
    }
};
FilterTrieuchungbenhPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterTrieuchungbenh'
    })
], FilterTrieuchungbenhPipe);



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(value, searchText) {
        if (value.lenght === 0) {
            return value;
        }
        return value.filter(s => s.TenBienThe.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
        // return value.filter( function(search) {
        //   return search.CMND.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ;
        // }
    }
};
FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/pipes/sort.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortPipe = class SortPipe {
    transform(value, args) {
        const sortField = args[0];
        const sortDirection = args[1];
        let multiplier = 1;
        if (sortDirection === 'desc') {
            multiplier = -1;
        }
        value.sort((a, b) => {
            if (a[sortField] < b[sortField]) {
                return -1 * multiplier;
            }
            else if (a[sortField] > b[sortField]) {
                return 1 * multiplier;
            }
            else {
                return 0;
            }
        });
        return value;
    }
};
SortPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sort'
    })
], SortPipe);



/***/ }),

/***/ "./src/app/shared/services/benh.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/benh.service.ts ***!
  \*************************************************/
/*! exports provided: BenhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhService", function() { return BenhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let BenhService = class BenhService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAll() {
        return this.baseSevice.get('api/Benh/GetAll');
    }
    getDetail(mabenh) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('mabenh', mabenh);
        return this.baseSevice.get('api/Benh/GetById', httpParams);
    }
    CreateDieuTriBenh(data) {
        return this.baseSevice.post('api/ThuocDieuTri/CreateDieuTriBenh', data);
    }
    InsertAll(data) {
        return this.baseSevice.post('api/Benh/InsertAll', data);
    }
    update(data) {
        return this.baseSevice.put('api/Benh', data);
    }
    createTrieuChung(data) {
        return this.baseSevice.post('api/TrieuChung', data);
    }
    updateTrieuChung(data) {
        return this.baseSevice.put('api/TrieuChung', data);
    }
    delete(data) {
        return this.baseSevice.delete('api/Benh', data);
    }
};
BenhService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
BenhService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BenhService);



/***/ }),

/***/ "./src/app/shared/services/bienthe.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/bienthe.service.ts ***!
  \****************************************************/
/*! exports provided: BientheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BientheService", function() { return BientheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let BientheService = class BientheService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAll() {
        return this.baseSevice.get('api/BienThe/GetAll');
    }
    getDetail(mabienthe) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('mabienthe', mabienthe);
        return this.baseSevice.get('api/BienThe/GetById', httpParams);
    }
    getListAll() {
        return this.baseSevice.get('api/BienThe/GetListAll');
    }
    GetListOfChungLoai(machungloai) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('machungloai', machungloai);
        return this.baseSevice.get('api/BienThe/GetListOfChungLoai', httpParams);
    }
    create(data) {
        return this.baseSevice.post('api/BienThe', data);
    }
    update(data) {
        return this.baseSevice.put('api/BienThe', data);
    }
};
BientheService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
BientheService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BientheService);



/***/ }),

/***/ "./src/app/shared/services/chat-luong.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/chat-luong.service.ts ***!
  \*******************************************************/
/*! exports provided: ChatLuongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLuongService", function() { return ChatLuongService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let ChatLuongService = class ChatLuongService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAll() {
        return this.baseSevice.get('api/ChatLuong/GetAll');
    }
};
ChatLuongService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
ChatLuongService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ChatLuongService);



/***/ }),

/***/ "./src/app/shared/services/chungloai.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/chungloai.service.ts ***!
  \******************************************************/
/*! exports provided: ChungloaiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChungloaiService", function() { return ChungloaiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let ChungloaiService = class ChungloaiService {
    constructor(http, baseService) {
        this.http = http;
        this.baseService = baseService;
    }
    getAll() {
        return this.baseService.get('api/ChungLoai/GetAll');
    }
    create(data) {
        return this.baseService.post('api/ChungLoai', data);
    }
    update(data) {
        return this.baseService.put('api/ChungLoai', data);
    }
    getDetail(machungloai) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('machungloai', machungloai);
        return this.baseService.get('api/ChungLoai/GetById', httpParams);
    }
};
ChungloaiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
ChungloaiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ChungloaiService);



/***/ }),

/***/ "./src/app/shared/services/giong.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/giong.service.ts ***!
  \**************************************************/
/*! exports provided: GiongService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiongService", function() { return GiongService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let GiongService = class GiongService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAll() {
        return this.baseSevice.get('api/Giong/GetAll');
    }
};
GiongService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
GiongService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GiongService);



/***/ }),

/***/ "./src/app/shared/services/hinhanh.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/hinhanh.service.ts ***!
  \****************************************************/
/*! exports provided: HinhanhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HinhanhService", function() { return HinhanhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let HinhanhService = class HinhanhService {
    constructor(http, baseService) {
        this.http = http;
        this.baseService = baseService;
    }
    create(data) {
        return this.baseService.post('api/HinhAnhBienThe', data);
    }
    update(data) {
        return this.baseService.put('api/HinhAnhBienThe', data);
    }
    getAll() {
        return this.baseService.get('api/HinhAnhBienThe/GetAll');
    }
};
HinhanhService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
HinhanhService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HinhanhService);



/***/ }),

/***/ "./src/app/shared/services/lieutrinh.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/lieutrinh.service.ts ***!
  \******************************************************/
/*! exports provided: LieutrinhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LieutrinhService", function() { return LieutrinhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let LieutrinhService = class LieutrinhService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAll() {
        return this.baseSevice.get('api/LieuTrinh/GetAll');
    }
    getDetail(malieutrinh) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('malieutrinh', malieutrinh);
        return this.baseSevice.get('api/LieuTrinh/GetById', httpParams);
    }
    delete(data) {
        return this.baseSevice.delete('api/LieuTrinh', data);
    }
};
LieutrinhService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
LieutrinhService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LieutrinhService);



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");



let LoginService = class LoginService {
    constructor(baseSevice) {
        this.baseSevice = baseSevice;
    }
    getUser() {
        return this.baseSevice.get('api/Account/GetUser');
    }
    getToken(data) {
        return this.baseSevice.post('api/Login', data);
    }
    validateToken() {
        return this.baseSevice.get('api/Account/ValidateToken');
    }
};
LoginService.ctorParameters = () => [
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/shared/services/nhanvien.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/nhanvien.service.ts ***!
  \*****************************************************/
/*! exports provided: NhanvienService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanvienService", function() { return NhanvienService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let NhanvienService = class NhanvienService {
    constructor(http, baseService) {
        this.http = http;
        this.baseService = baseService;
    }
    getAll() {
        return this.baseService.get('api/NhanVien/GetAll');
    }
    getEmployeeNotAccount() {
        return this.baseService.get('api/NhanVien/GetEmployeeNotAccount');
    }
    create(data) {
        return this.baseService.post('api/NhanVien', data);
    }
    update(data) {
        return this.baseService.put('api/NhanVien', data);
    }
    getDetail(manhanvien) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('manhanvien', manhanvien);
        return this.baseService.get('api/NhanVien/GetById', httpParams);
    }
    delete(data) {
        return this.baseService.delete('api/NhanVien', data);
    }
};
NhanvienService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
NhanvienService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], NhanvienService);



/***/ }),

/***/ "./src/app/shared/services/role.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/role.service.ts ***!
  \*************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");



let RoleService = class RoleService {
    constructor(baseSevice) {
        this.baseSevice = baseSevice;
    }
    // GET
    getAll() {
        return this.baseSevice.get('api/Role/GetAll');
    }
    getById(data) {
        return this.baseSevice.get('api/Role/GetByRoleId', data);
    }
    // POST
    create(data) {
        return this.baseSevice.post('api/Role', data);
    }
    update(data) {
        return this.baseSevice.put('api/Role', data);
    }
    delete(data) {
        return this.baseSevice.delete('api/Role', data);
    }
    getRolesOfUser(data) {
        return this.baseSevice.get('api/UserRole/GetRolesOfUser', data);
    }
    createRoleUser(data) {
        return this.baseSevice.post('api/UserRole', data);
    }
};
RoleService.ctorParameters = () => [
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] }
];
RoleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoleService);



/***/ }),

/***/ "./src/app/shared/services/thuoc.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/thuoc.service.ts ***!
  \**************************************************/
/*! exports provided: ThuocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuocService", function() { return ThuocService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let ThuocService = class ThuocService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAll() {
        return this.baseSevice.get('api/Thuoc/GetAll');
    }
    CreateThuocDieuTri(data) {
        return this.baseSevice.post('api/ThuocDieuTri', data);
    }
    create(data) {
        return this.baseSevice.post('api/Thuoc', data);
    }
    update(data) {
        return this.baseSevice.put('api/Thuoc', data);
    }
    getDetail(mathuoc) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('mathuoc', mathuoc);
        return this.baseSevice.get('api/Thuoc/GetById', httpParams);
    }
    delete(data) {
        return this.baseSevice.delete('api/Thuoc', data);
    }
    createLieuTrinh(data) {
        return this.baseSevice.post('api/LieuTrinh', data);
    }
    updateLieuTrinh(data) {
        return this.baseSevice.put('api/LieuTrinh', data);
    }
};
ThuocService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
ThuocService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ThuocService);



/***/ }),

/***/ "./src/app/shared/services/trieuchung.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/trieuchung.service.ts ***!
  \*******************************************************/
/*! exports provided: TrieuchungService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuchungService", function() { return TrieuchungService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let TrieuchungService = class TrieuchungService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAll() {
        return this.baseSevice.get('api/TrieuChung/GetAll');
    }
    getDetail(matrieuchung) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('matrieuchung', matrieuchung);
        return this.baseSevice.get('api/TrieuChung/GetById', httpParams);
    }
    delete(data) {
        return this.baseSevice.delete('api/TrieuChung', data);
    }
    CreateTrieuChungBenh(data) {
        return this.baseSevice.post('api/TrieuChungBenh/CreateTrieuChungBenh', data);
    }
    GetAllTrieuChung(matrieuchung) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('matrieuchung', matrieuchung);
        return this.baseSevice.get('api/TrieuChungBenh/GetAllTrieuChung', httpParams);
    }
    GetAllBenhByType(matrieuchung) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('matrieuchung', matrieuchung);
        return this.baseSevice.get('api/TrieuChungBenh/GetAllBenhByType', httpParams);
    }
    Create(data) {
        return this.baseSevice.post('api/TrieuChungBenh', data);
    }
    GetListBenhByListTrieuChung(data) {
        return this.baseSevice.post('api/TrieuChungBenh/GetAllTrieuChung', data);
    }
};
TrieuchungService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
TrieuchungService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TrieuchungService);



/***/ }),

/***/ "./src/app/shared/services/users.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/users.service.ts ***!
  \**************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common_base/base.service */ "./src/app/common_base/base.service.ts");




let UsersService = class UsersService {
    constructor(http, baseSevice) {
        this.http = http;
        this.baseSevice = baseSevice;
    }
    getAllEmployeeAccount() {
        return this.baseSevice.get('api/User/GetAll');
    }
    createEmployeeAccount(data) {
        return this.baseSevice.post('api/User/CreateEmployeeAccount', data);
    }
    updateEmployeeAccount(data) {
        return this.baseSevice.put('api/User/UpdateEmployeeAccount', data);
    }
    getDetailUser(userId) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userId', userId);
        return this.baseSevice.get('api/User/GetById', httpParams);
    }
    deleteEmployeeAccount(data) {
        return this.baseSevice.delete('api/User/DeleteEmployeeAccount', data);
    }
    getByUserName(userName) {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userName', userName);
        return this.baseSevice.get('api/User/GetByUserName', httpParams);
    }
    getAllUserAccountActive() {
        return this.baseSevice.get('api/User/GetAllUserAccountActive');
    }
    getAllUserAccountLocked() {
        return this.baseSevice.get('api/User/GetAllUserAccountLocked');
    }
    updateStatusAccount(data) {
        return this.baseSevice.put('api/User/UpdateStatusAccount', data);
    }
    resetPasswordAccount(data) {
        return this.baseSevice.put('api/User/ResetPassword', data);
    }
    updatePasswordAccount(data) {
        return this.baseSevice.put('api/User/ChangePassword', data);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_common_base_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/trangchu/benh/benh-list/benh-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/trangchu/benh/benh-list/benh-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head {\r\n    font-size: 18px;\r\n    padding: 0;\r\n    margin: 0 0 10px;\r\n    font-weight: bold;\r\n    line-height: 22px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvYmVuaC9iZW5oLWxpc3QvYmVuaC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdHJhbmdjaHUvYmVuaC9iZW5oLWxpc3QvYmVuaC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/trangchu/benh/benh-list/benh-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/trangchu/benh/benh-list/benh-list.component.ts ***!
  \****************************************************************/
/*! exports provided: BenhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhListComponent", function() { return BenhListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");
/* harmony import */ var src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/trieuchung.service */ "./src/app/shared/services/trieuchung.service.ts");





let BenhListComponent = class BenhListComponent {
    //@ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
    constructor(fb, trieuchungService, benhService) {
        this.fb = fb;
        this.trieuchungService = trieuchungService;
        this.benhService = benhService;
        this.dataSource = [];
        this.dataSourceTT = [];
        this.dataSourceListTT = [];
        this.trieuchungbenh = [];
        this.expression = true;
        // uncheck = false;
        // uncheck1 = false;
        this.diableButton = true;
    }
    ngOnInit() {
        // checkbox
        this.form = this.fb.group({
            trieuchungbenh: this.fb.array([])
        });
        this.loadListTT();
        this.loadList();
    }
    onCheckboxChange(e) {
        if (e.target.checked) {
            this.trieuchungbenh.push({ search: e.target.value });
            //this.uncheck = true;
        }
        else {
            const index = this.trieuchungbenh.indexOf({ search: e.target.value });
            this.trieuchungbenh.splice(index, 1);
        }
    }
    // get danh sach
    loadList() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                // this.expression = true;
                this.dataSource = response.Data;
                this.expression = true;
            }
        });
    }
    submitForm() {
        this.load(this.trieuchungbenh);
        // this.uncheck = false;
        // this.uncheck1 = false;
    }
    load(searchDTO) {
        this.trieuchungService.GetListBenhByListTrieuChung(searchDTO).subscribe(response => {
            if (response && response.Status) {
                this.expression = false;
                this.dataSourceTT = response.Data;
            }
        });
    }
    loadListTT() {
        this.trieuchungService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSourceListTT = response.Data;
            }
        });
    }
};
BenhListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_trieuchung_service__WEBPACK_IMPORTED_MODULE_4__["TrieuchungService"] },
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_3__["BenhService"] }
];
BenhListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-benh-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./benh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/benh/benh-list/benh-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./benh-list.component.css */ "./src/app/trangchu/benh/benh-list/benh-list.component.css")).default]
    })
], BenhListComponent);



/***/ }),

/***/ "./src/app/trangchu/gioithieu/gioithieu.component.css":
/*!************************************************************!*\
  !*** ./src/app/trangchu/gioithieu/gioithieu.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5nY2h1L2dpb2l0aGlldS9naW9pdGhpZXUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/trangchu/gioithieu/gioithieu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/trangchu/gioithieu/gioithieu.component.ts ***!
  \***********************************************************/
/*! exports provided: GioithieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioithieuComponent", function() { return GioithieuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GioithieuComponent = class GioithieuComponent {
    constructor() { }
    ngOnInit() {
    }
};
GioithieuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gioithieu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gioithieu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/gioithieu/gioithieu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gioithieu.component.css */ "./src/app/trangchu/gioithieu/gioithieu.component.css")).default]
    })
], GioithieuComponent);



/***/ }),

/***/ "./src/app/trangchu/index/index.component.css":
/*!****************************************************!*\
  !*** ./src/app/trangchu/index/index.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".famie-btn {\r\n    background-color: #77b122;\r\n    position: relative;\r\n    z-index: 1;\r\n    display: inline-block;\r\n    min-width: 160px;\r\n    height: 50px;\r\n    color: #fff;\r\n    border-radius: 0;\r\n    padding: 0 30px;\r\n    font-size: 16px;\r\n    line-height: 48px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3RyYW5nY2h1L2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFtaWUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2IxMjI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/trangchu/index/index.component.ts":
/*!***************************************************!*\
  !*** ./src/app/trangchu/index/index.component.ts ***!
  \***************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/benh.service */ "./src/app/shared/services/benh.service.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "./src/app/trangchu/product-detail/product-detail.component.ts");








let IndexComponent = class IndexComponent {
    constructor(benhService, bientheService, message, router, modalService) {
        this.benhService = benhService;
        this.bientheService = bientheService;
        this.message = message;
        this.router = router;
        this.modalService = modalService;
        this.dataSource = [];
        this.dataSourceBenh = [];
    }
    ngOnInit() {
        this.loadList();
        this.loadListBenh();
    }
    // get danh sach
    loadList() {
        this.bientheService.getListAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                // this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    // get danh sach
    loadListBenh() {
        this.benhService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSourceBenh = response.Data;
            }
        });
    }
    //  // xem chi tiết 
    view(mabienthe) {
        this.navigateDetail(mabienthe);
    }
    navigateDetail(mabienthe) {
        if (mabienthe) {
            // chuyen sang màn hình chi tiết
            const modalAdd = this.modalService.info({
                nzContent: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"],
                nzComponentParams: {
                    mabienthe: JSON.parse(JSON.stringify(mabienthe)),
                },
                nzWidth: '1200',
                nzOkText: 'Đóng'
            });
            // Return a result when closed
            modalAdd.afterClose.subscribe(() => {
                return this.ngOnInit();
            });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
};
IndexComponent.ctorParameters = () => [
    { type: src_app_shared_services_benh_service__WEBPACK_IMPORTED_MODULE_5__["BenhService"] },
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_6__["BientheService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/index/index.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./index.component.css */ "./src/app/trangchu/index/index.component.css")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/trangchu/lienhe/lienhe.component.css":
/*!******************************************************!*\
  !*** ./src/app/trangchu/lienhe/lienhe.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5nY2h1L2xpZW5oZS9saWVuaGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/trangchu/lienhe/lienhe.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/trangchu/lienhe/lienhe.component.ts ***!
  \*****************************************************/
/*! exports provided: LienheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienheComponent", function() { return LienheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LienheComponent = class LienheComponent {
    constructor() { }
    ngOnInit() {
    }
};
LienheComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lienhe',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lienhe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/lienhe/lienhe.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lienhe.component.css */ "./src/app/trangchu/lienhe/lienhe.component.css")).default]
    })
], LienheComponent);



/***/ }),

/***/ "./src/app/trangchu/product-detail/product-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/trangchu/product-detail/product-detail.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container1 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    float: left;\r\n}\r\n\r\nul li {\r\n    list-style: none;\r\n    margin: 5px;\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    overflow: hidden;\r\n}\r\n\r\nul li img {\r\n    width: 100%;\r\n}\r\n\r\n.imgBox {\r\n    float: left;\r\n    width: 400px;\r\n    height: 400px;\r\n    margin: 5px;\r\n    border: 1px solid rgba(0, 0, 0, .2);\r\n    overflow: hidden;\r\n}\r\n\r\n.imgBox img {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RyYW5nY2h1L3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnVsIGxpIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltZ0JveCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltZ0JveCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/trangchu/product-detail/product-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/trangchu/product-detail/product-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");




let ProductDetailComponent = class ProductDetailComponent {
    constructor(bientheService, activatedRoute) {
        this.bientheService = bientheService;
        this.activatedRoute = activatedRoute;
        this.selected = [];
        this.has = false;
    }
    ngOnInit() {
        // this.activatedRoute.queryParams.subscribe(params => {
        //   this.getDetail(params.mabienthe);
        // });
        this.getDetail(this.mabienthe);
    }
    getDetail(mabienthe) {
        this.bientheService.getDetail(mabienthe).subscribe(response => {
            if (response.Status === true) {
                this.selected = response.Data;
                // this.has = true;
            }
            //console.log(this.selected);
        });
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_3__["BientheService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductDetailComponent.prototype, "mabienthe", void 0);
ProductDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/product-detail/product-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-detail.component.css */ "./src/app/trangchu/product-detail/product-detail.component.css")).default]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:link {\r\n    color: #77b122!important;\r\n}\r\n\r\n\r\n/* visited link */\r\n\r\n\r\na:visited {\r\n    color: #77b122 !important;\r\n}\r\n\r\n\r\n/* mouse over link */\r\n\r\n\r\na:hover {\r\n    color: #77b122 !important;\r\n    text-decoration: underline !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvc2FucGhhbS9zYW5waGFtLW9mLWNodW5nbG9haS9zYW5waGFtLW9mLWNodW5nbG9haS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFHQSxpQkFBaUI7OztBQUVqQjtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBR0Esb0JBQW9COzs7QUFFcEI7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0FBQ3pDIiwiZmlsZSI6InNyYy9hcHAvdHJhbmdjaHUvc2FucGhhbS9zYW5waGFtLW9mLWNodW5nbG9haS9zYW5waGFtLW9mLWNodW5nbG9haS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpsaW5rIHtcclxuICAgIGNvbG9yOiAjNzdiMTIyIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIHZpc2l0ZWQgbGluayAqL1xyXG5cclxuYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAjNzdiMTIyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3N2IxMjIgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SanphamOfChungloaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanphamOfChungloaiComponent", function() { return SanphamOfChungloaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/chungloai.service */ "./src/app/shared/services/chungloai.service.ts");
/* harmony import */ var src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/hinhanh.service */ "./src/app/shared/services/hinhanh.service.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../product-detail/product-detail.component */ "./src/app/trangchu/product-detail/product-detail.component.ts");









let SanphamOfChungloaiComponent = class SanphamOfChungloaiComponent {
    //sName: string = '';
    constructor(bientheService, chungloaiService, hinhanhService, message, router, activatedRoute, modalService) {
        this.bientheService = bientheService;
        this.chungloaiService = chungloaiService;
        this.hinhanhService = hinhanhService;
        this.message = message;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.dataSource = [];
        this.dataChungLoai = [];
        this.Search = '';
        this.sName = '';
        this.selected = [];
        this.has = false;
    }
    ngOnInit() {
        this.loadListChungLoai();
        this.activatedRoute.queryParams.subscribe(params => {
            this.loadList(params.machungloai);
        });
    }
    // onFilter() {
    //   this.Search = this.TenBienThe;
    // }
    // get danh sach 
    loadList(machungloai) {
        this.bientheService.GetListOfChungLoai(machungloai).subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                //this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    // get danh sach 
    loadListChungLoai() {
        this.chungloaiService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataChungLoai = response.Data;
                //this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    viewChungLoai(machungloai) {
        this.navigateChungLoai(machungloai);
    }
    navigateChungLoai(machungloai) {
        if (machungloai) {
            // chuyen sang màn hình chi tiết nhan vien
            this.router.navigate(['trangchu/san-pham/bienthe/'], { queryParams: { machungloai: machungloai } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    //  // xem chi tiết 
    view(mabienthe) {
        this.navigateDetail(mabienthe);
    }
    navigateDetail(mabienthe) {
        if (mabienthe) {
            // chuyen sang màn hình chi tiết
            const modalAdd = this.modalService.info({
                nzContent: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
                nzComponentParams: {
                    mabienthe: JSON.parse(JSON.stringify(mabienthe)),
                },
                nzWidth: '1200',
                nzOkText: 'Đóng'
            });
            // Return a result when closed
            modalAdd.afterClose.subscribe(() => {
                return this.ngOnInit();
            });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
};
SanphamOfChungloaiComponent.ctorParameters = () => [
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__["BientheService"] },
    { type: src_app_shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_6__["ChungloaiService"] },
    { type: src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_7__["HinhanhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
SanphamOfChungloaiComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sanpham-of-chungloai',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sanpham-of-chungloai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sanpham-of-chungloai.component.css */ "./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.css")).default]
    })
], SanphamOfChungloaiComponent);



/***/ }),

/***/ "./src/app/trangchu/sanpham/sanpham.component.css":
/*!********************************************************!*\
  !*** ./src/app/trangchu/sanpham/sanpham.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:link {\r\n    color: #77b122!important;\r\n}\r\n\r\n\r\n/* visited link */\r\n\r\n\r\na:visited {\r\n    color: #77b122 !important;\r\n}\r\n\r\n\r\n/* mouse over link */\r\n\r\n\r\na:hover {\r\n    color: #77b122 !important;\r\n    text-decoration: underline !important;\r\n}\r\n\r\n\r\n/* Colorize-zoom Container */\r\n\r\n\r\n.img-hover-zoom--colorize img {\r\n    transition: transform .5s, filter 1.5s ease-in-out;\r\n    filter: grayscale(100%);\r\n}\r\n\r\n\r\n/* The Transformation */\r\n\r\n\r\n.img-hover-zoom--colorize:hover img {\r\n    filter: grayscale(0);\r\n    transform: scale(1.1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvc2FucGhhbS9zYW5waGFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBLGlCQUFpQjs7O0FBRWpCO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFHQSxvQkFBb0I7OztBQUVwQjtJQUNJLHlCQUF5QjtJQUN6QixxQ0FBcUM7QUFDekM7OztBQUdBLDRCQUE0Qjs7O0FBRTVCO0lBQ0ksa0RBQWtEO0lBQ2xELHVCQUF1QjtBQUMzQjs7O0FBR0EsdUJBQXVCOzs7QUFFdkI7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdHJhbmdjaHUvc2FucGhhbS9zYW5waGFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmxpbmsge1xyXG4gICAgY29sb3I6ICM3N2IxMjIhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogdmlzaXRlZCBsaW5rICovXHJcblxyXG5hOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICM3N2IxMjIgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIG1vdXNlIG92ZXIgbGluayAqL1xyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzc3YjEyMiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIENvbG9yaXplLXpvb20gQ29udGFpbmVyICovXHJcblxyXG4uaW1nLWhvdmVyLXpvb20tLWNvbG9yaXplIGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzLCBmaWx0ZXIgMS41cyBlYXNlLWluLW91dDtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG59XHJcblxyXG5cclxuLyogVGhlIFRyYW5zZm9ybWF0aW9uICovXHJcblxyXG4uaW1nLWhvdmVyLXpvb20tLWNvbG9yaXplOmhvdmVyIGltZyB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/trangchu/sanpham/sanpham.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/trangchu/sanpham/sanpham.component.ts ***!
  \*******************************************************/
/*! exports provided: SanphamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanphamComponent", function() { return SanphamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/hinhanh.service */ "./src/app/shared/services/hinhanh.service.ts");
/* harmony import */ var _shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/chungloai.service */ "./src/app/shared/services/chungloai.service.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "./src/app/trangchu/product-detail/product-detail.component.ts");









let SanphamComponent = class SanphamComponent {
    // sName: string = '';
    constructor(bientheService, chungloaiService, hinhanhService, message, router, modalService) {
        this.bientheService = bientheService;
        this.chungloaiService = chungloaiService;
        this.hinhanhService = hinhanhService;
        this.message = message;
        this.router = router;
        this.modalService = modalService;
        this.dataSource = [];
        this.dataChungLoai = [];
        this.Search = '';
        this.sName = '';
    }
    ngOnInit() {
        this.loadList();
        this.loadListChungLoai();
    }
    // onFilter() {
    //   this.Search = this.TenBienThe;
    // }
    // get danh sach
    loadList() {
        this.bientheService.getListAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                // this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    // get danh sach
    loadListChungLoai() {
        this.chungloaiService.getAll().subscribe(response => {
            if (response && response.Status) {
                this.dataChungLoai = response.Data;
                // this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    //  // xem chi tiết 
    view(mabienthe) {
        this.navigateDetail(mabienthe);
    }
    navigateDetail(mabienthe) {
        if (mabienthe) {
            // chuyen sang màn hình chi tiết
            const modalAdd = this.modalService.info({
                nzContent: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
                nzComponentParams: {
                    mabienthe: JSON.parse(JSON.stringify(mabienthe)),
                },
                nzWidth: '1200',
                nzOkText: 'Đóng'
            });
            // Return a result when closed
            modalAdd.afterClose.subscribe(() => {
                return this.ngOnInit();
            });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
    // showModal(data: any) {
    //   const modalAdd = this.modalService.create({
    //     nzTitle: 'Thêm thuốc điều trị cho bệnh ',
    //     nzContent: ProductDetailComponent,
    //     nzComponentParams: {
    //       bientheDto: JSON.parse(JSON.stringify(data)),
    //    //   maThuocs: JSON.parse(JSON.stringify(data.MaThuocs))
    //     },
    //     nzWidth: '1200',
    //   });
    //   // Return a result when closed
    //   modalAdd.afterClose.subscribe(() => {
    //     return this.ngOnInit();
    //   });
    // }
    viewChungLoai(machungloai) {
        this.navigateChungLoai(machungloai);
    }
    navigateChungLoai(machungloai) {
        if (machungloai) {
            // chuyen sang màn hình chi tiết nhan vien
            this.router.navigate(['trangchu/san-pham/bienthe/'], { queryParams: { machungloai } });
        }
        else {
            this.message.create(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
};
SanphamComponent.ctorParameters = () => [
    { type: src_app_shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__["BientheService"] },
    { type: _shared_services_chungloai_service__WEBPACK_IMPORTED_MODULE_7__["ChungloaiService"] },
    { type: src_app_shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_6__["HinhanhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
SanphamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sanpham',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sanpham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/sanpham/sanpham.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sanpham.component.css */ "./src/app/trangchu/sanpham/sanpham.component.css")).default]
    })
], SanphamComponent);



/***/ }),

/***/ "./src/app/trangchu/trangchu-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/trangchu/trangchu-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrangchuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuRoutingModule", function() { return TrangchuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _trangchu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trangchu.component */ "./src/app/trangchu/trangchu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/trangchu/lienhe/lienhe.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sanpham_sanpham_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sanpham/sanpham.component */ "./src/app/trangchu/sanpham/sanpham.component.ts");
/* harmony import */ var _sanpham_sanpham_of_chungloai_sanpham_of_chungloai_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component */ "./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.ts");
/* harmony import */ var _benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./benh/benh-list/benh-list.component */ "./src/app/trangchu/benh/benh-list/benh-list.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index/index.component */ "./src/app/trangchu/index/index.component.ts");
/* harmony import */ var _gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gioithieu/gioithieu.component */ "./src/app/trangchu/gioithieu/gioithieu.component.ts");













const routes = [
    {
        path: 'trangchu',
        component: _trangchu_component__WEBPACK_IMPORTED_MODULE_2__["TrangchuComponent"],
        children: [
            {
                path: 'index',
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_11__["IndexComponent"]
            },
            {
                path: 'gioi-thieu',
                component: _gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_12__["GioithieuComponent"]
            },
            {
                path: 'lienhe',
                component: _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_4__["LienheComponent"]
            },
            // {
            //   path: 'san-pham/chitiet',
            //   component: ProductDetailComponent
            // },
            {
                path: 'san-pham/bienthe',
                component: _sanpham_sanpham_of_chungloai_sanpham_of_chungloai_component__WEBPACK_IMPORTED_MODULE_9__["SanphamOfChungloaiComponent"]
            },
            {
                path: 'san-pham',
                component: _sanpham_sanpham_component__WEBPACK_IMPORTED_MODULE_8__["SanphamComponent"]
            },
            {
                path: 'cac-loai-benh',
                component: _benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_10__["BenhListComponent"]
            },
        ]
    }
];
let TrangchuRoutingModule = class TrangchuRoutingModule {
};
TrangchuRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        declarations: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["CUSTOM_ELEMENTS_SCHEMA"]],
    })
], TrangchuRoutingModule);



/***/ }),

/***/ "./src/app/trangchu/trangchu.component.css":
/*!*************************************************!*\
  !*** ./src/app/trangchu/trangchu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/******************************************************************\r\n  Template Name: Ogani\r\n  Description:  Ogani eCommerce  HTML Template\r\n  Author: Colorlib\r\n  Author URI: https://colorlib.com\r\n  Version: 1.0\r\n  Created: Colorlib\r\n******************************************************************/\r\n\r\n\r\n/*------------------------------------------------------------------\r\n[Table of contents]\r\n\r\n1.  Template default CSS\r\n\t1.1\tVariables\r\n\t1.2\tMixins\r\n\t1.3\tFlexbox\r\n\t1.4\tReset\r\n2.  Helper Css\r\n3.  Header Section\r\n4.  Hero Section\r\n5.  Service Section\r\n6.  Categories Section\r\n7.  Featured Section\r\n8.  Latest Product Section\r\n9.  Contact\r\n10.  Footer Style\r\n-------------------------------------------------------------------*/\r\n\r\n\r\n/*----------------------------------------*/\r\n\r\n\r\n/* Template default CSS\r\n/*----------------------------------------*/\r\n\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    font-family: \"Cairo\", sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-smoothing: antialiased;\r\n}\r\n\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin: 0;\r\n    color: #111111;\r\n    font-weight: 400;\r\n    font-family: \"Cairo\", sans-serif;\r\n}\r\n\r\n\r\nh1 {\r\n    font-size: 70px;\r\n}\r\n\r\n\r\nh2 {\r\n    font-size: 36px;\r\n}\r\n\r\n\r\nh3 {\r\n    font-size: 30px;\r\n}\r\n\r\n\r\nh4 {\r\n    font-size: 24px;\r\n}\r\n\r\n\r\nh5 {\r\n    font-size: 18px;\r\n}\r\n\r\n\r\nh6 {\r\n    font-size: 16px;\r\n}\r\n\r\n\r\np {\r\n    font-size: 16px;\r\n    font-family: \"Cairo\", sans-serif;\r\n    color: #6f6f6f;\r\n    font-weight: 400;\r\n    line-height: 26px;\r\n    margin: 0 0 15px 0;\r\n}\r\n\r\n\r\nimg {\r\n    max-width: 100%;\r\n}\r\n\r\n\r\n.search-widget-form {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.search-widget-form .form-control {\r\n    padding: 0 15px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.search-widget-form button {\r\n    position: absolute;\r\n    width: auto;\r\n    height: 48px;\r\n    line-height: 50px;\r\n    top: 0;\r\n    right: 15px;\r\n    border: none;\r\n    font-size: 18px;\r\n    color: #707070;\r\n    z-index: 99;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\ninput:focus,\r\nselect:focus,\r\nbutton:focus,\r\ntextarea:focus {\r\n    outline: none;\r\n}\r\n\r\n\r\na:hover,\r\na:focus {\r\n    text-decoration: none;\r\n    outline: none;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\nul,\r\nol {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Helper CSS\r\n-----------------------*/\r\n\r\n\r\n.section-title {\r\n    margin-bottom: 50px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.section-title h2 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    position: relative;\r\n}\r\n\r\n\r\n.section-title h2:after {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -15px;\r\n    right: 0;\r\n    height: 4px;\r\n    width: 80px;\r\n    background: #7fad39;\r\n    content: \"\";\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.set-bg {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: top center;\r\n}\r\n\r\n\r\n.spad {\r\n    padding-top: 100px;\r\n    padding-bottom: 100px;\r\n}\r\n\r\n\r\n.text-white h1,\r\n.text-white h2,\r\n.text-white h3,\r\n.text-white h4,\r\n.text-white h5,\r\n.text-white h6,\r\n.text-white p,\r\n.text-white span,\r\n.text-white li,\r\n.text-white a {\r\n    color: #fff;\r\n}\r\n\r\n\r\n/* buttons */\r\n\r\n\r\n.primary-btn {\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    padding: 10px 28px 10px;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    background: #7fad39;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n\r\n.site-btn {\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    padding: 13px 30px 12px;\r\n    background: #7fad39;\r\n    border: none;\r\n}\r\n\r\n\r\n/* Preloder */\r\n\r\n\r\n#preloder {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 999999;\r\n    background: #000;\r\n}\r\n\r\n\r\n.loader {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -13px;\r\n    margin-left: -13px;\r\n    border-radius: 60px;\r\n    animation: loader 0.8s linear infinite;\r\n    -webkit-animation: loader 0.8s linear infinite;\r\n}\r\n\r\n\r\n@keyframes loader {\r\n    0% {\r\n        transform: rotate(0deg);\r\n        border: 4px solid #f44336;\r\n        border-left-color: transparent;\r\n    }\r\n    50% {\r\n        transform: rotate(180deg);\r\n        border: 4px solid #673ab7;\r\n        border-left-color: transparent;\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n        border: 4px solid #f44336;\r\n        border-left-color: transparent;\r\n    }\r\n}\r\n\r\n\r\n@-webkit-keyframes loader {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        border: 4px solid #f44336;\r\n        border-left-color: transparent;\r\n    }\r\n    50% {\r\n        -webkit-transform: rotate(180deg);\r\n        border: 4px solid #673ab7;\r\n        border-left-color: transparent;\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        border: 4px solid #f44336;\r\n        border-left-color: transparent;\r\n    }\r\n}\r\n\r\n\r\n/*---------------------\r\n  Header\r\n-----------------------*/\r\n\r\n\r\n.header__top {\r\n    background: #f5f5f5;\r\n}\r\n\r\n\r\n.header__top__left {\r\n    padding: 10px 0 13px;\r\n}\r\n\r\n\r\n.header__top__left ul li {\r\n    font-size: 14px;\r\n    color: #1c1c1c;\r\n    display: inline-block;\r\n    margin-right: 45px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.header__top__left ul li:after {\r\n    position: absolute;\r\n    right: -25px;\r\n    top: 1px;\r\n    height: 20px;\r\n    width: 1px;\r\n    background: #000000;\r\n    opacity: 0.1;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.header__top__left ul li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.header__top__left ul li:last-child:after {\r\n    display: none;\r\n}\r\n\r\n\r\n.header__top__left ul li i {\r\n    color: #252525;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.header__top__right {\r\n    text-align: right;\r\n    padding: 10px 0 13px;\r\n}\r\n\r\n\r\n.header__top__right__social {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 35px;\r\n}\r\n\r\n\r\n.header__top__right__social:after {\r\n    position: absolute;\r\n    right: -20px;\r\n    top: 1px;\r\n    height: 20px;\r\n    width: 1px;\r\n    background: #000000;\r\n    opacity: 0.1;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.header__top__right__social a {\r\n    font-size: 14px;\r\n    display: inline-block;\r\n    color: #1c1c1c;\r\n    margin-right: 20px;\r\n}\r\n\r\n\r\n.header__top__right__social a:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.header__top__right__language {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.header__top__right__language:hover ul {\r\n    top: 23px;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n\r\n.header__top__right__language:after {\r\n    position: absolute;\r\n    right: -21px;\r\n    top: 1px;\r\n    height: 20px;\r\n    width: 1px;\r\n    background: #000000;\r\n    opacity: 0.1;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.header__top__right__language img {\r\n    margin-right: 6px;\r\n}\r\n\r\n\r\n.header__top__right__language div {\r\n    font-size: 14px;\r\n    color: #1c1c1c;\r\n    display: inline-block;\r\n    margin-right: 4px;\r\n}\r\n\r\n\r\n.header__top__right__language span {\r\n    font-size: 14px;\r\n    color: #1c1c1c;\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n\r\n\r\n.header__top__right__language ul {\r\n    background: #222222;\r\n    width: 100px;\r\n    text-align: left;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 43px;\r\n    z-index: 9;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.header__top__right__language ul li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n.header__top__right__language ul li a {\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 5px 10px;\r\n}\r\n\r\n\r\n.header__top__right__auth {\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.header__top__right__auth a {\r\n    display: block;\r\n    font-size: 14px;\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.header__top__right__auth a i {\r\n    margin-right: 6px;\r\n}\r\n\r\n\r\n.header__logo {\r\n    padding: 15px 0;\r\n}\r\n\r\n\r\n.header__logo a {\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.header__menu {\r\n    padding: 24px 0;\r\n}\r\n\r\n\r\n.header__menu ul li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 50px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.header__menu ul li .header__menu__dropdown {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50px;\r\n    background: #222222;\r\n    width: 180px;\r\n    z-index: 9;\r\n    padding: 5px 0;\r\n    transition: all, 0.3s;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n.header__menu ul li .header__menu__dropdown li {\r\n    margin-right: 0;\r\n    display: block;\r\n}\r\n\r\n\r\n.header__menu ul li .header__menu__dropdown li:hover>a {\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.header__menu ul li .header__menu__dropdown li a {\r\n    text-transform: capitalize;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n    padding: 5px 15px;\r\n}\r\n\r\n\r\n.header__menu ul li.active a {\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.header__menu ul li:hover .header__menu__dropdown {\r\n    top: 30px;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n\r\n.header__menu ul li:hover>a {\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.header__menu ul li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.header__menu ul li a {\r\n    font-size: 14px;\r\n    color: #252525;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    letter-spacing: 2px;\r\n    transition: all, 0.3s;\r\n    padding: 5px 0;\r\n    display: block;\r\n}\r\n\r\n\r\n.header__cart {\r\n    text-align: right;\r\n    padding: 24px 0;\r\n}\r\n\r\n\r\n.header__cart ul {\r\n    display: inline-block;\r\n    margin-right: 25px;\r\n}\r\n\r\n\r\n.header__cart ul li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.header__cart ul li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.header__cart ul li a {\r\n    position: relative;\r\n}\r\n\r\n\r\n.header__cart ul li a i {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.header__cart ul li a span {\r\n    height: 13px;\r\n    width: 13px;\r\n    background: #7fad39;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    line-height: 13px;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    right: -12px;\r\n}\r\n\r\n\r\n.header__cart .header__cart__price {\r\n    font-size: 14px;\r\n    color: #6f6f6f;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.header__cart .header__cart__price span {\r\n    color: #252525;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.humberger__menu__wrapper {\r\n    display: none;\r\n}\r\n\r\n\r\n.humberger__open {\r\n    display: none;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Hero\r\n-----------------------*/\r\n\r\n\r\n.hero {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n\r\n.hero.hero-normal {\r\n    padding-bottom: 30px;\r\n}\r\n\r\n\r\n.hero.hero-normal .hero__categories {\r\n    position: relative;\r\n}\r\n\r\n\r\n.hero.hero-normal .hero__categories ul {\r\n    display: none;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 46px;\r\n    width: 100%;\r\n    z-index: 9;\r\n    background: #ffffff;\r\n}\r\n\r\n\r\n.hero.hero-normal .hero__search {\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.hero__categories__all {\r\n    background: #7fad39;\r\n    position: relative;\r\n    padding: 10px 25px 10px 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.hero__categories__all i {\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n.hero__categories__all span {\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.hero__categories__all:after {\r\n    position: absolute;\r\n    right: 18px;\r\n    top: 9px;\r\n    content: \"3\";\r\n    font-family: \"ElegantIcons\";\r\n    font-size: 18px;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.hero__categories ul {\r\n    border: 1px solid #ebebeb;\r\n    padding-left: 40px;\r\n    padding-top: 10px;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n\r\n.hero__categories ul li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n.hero__categories ul li a {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    line-height: 39px;\r\n    display: block;\r\n}\r\n\r\n\r\n.hero__search {\r\n    overflow: hidden;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.hero__search__form {\r\n    width: 610px;\r\n    height: 50px;\r\n    border: 1px solid #ebebeb;\r\n    position: relative;\r\n    float: left;\r\n}\r\n\r\n\r\n.hero__search__form form .hero__search__categories {\r\n    width: 30%;\r\n    float: left;\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    padding-left: 18px;\r\n    padding-top: 11px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.hero__search__form form .hero__search__categories:after {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 14px;\r\n    height: 20px;\r\n    width: 1px;\r\n    background: #000000;\r\n    opacity: 0.1;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.hero__search__form form .hero__search__categories span {\r\n    position: absolute;\r\n    right: 14px;\r\n    top: 14px;\r\n}\r\n\r\n\r\n.hero__search__form form input {\r\n    width: 70%;\r\n    border: none;\r\n    height: 48px;\r\n    font-size: 16px;\r\n    color: #b2b2b2;\r\n    padding-left: 20px;\r\n}\r\n\r\n\r\n.hero__search__form form input::-moz-placeholder {\r\n    color: #b2b2b2;\r\n}\r\n\r\n\r\n.hero__search__form form input::placeholder {\r\n    color: #b2b2b2;\r\n}\r\n\r\n\r\n.hero__search__form form button {\r\n    position: absolute;\r\n    right: 0;\r\n    top: -1px;\r\n    height: 50px;\r\n}\r\n\r\n\r\n.hero__search__phone {\r\n    float: right;\r\n}\r\n\r\n\r\n.hero__search__phone__icon {\r\n    font-size: 18px;\r\n    color: #7fad39;\r\n    height: 50px;\r\n    width: 50px;\r\n    background: #f5f5f5;\r\n    line-height: 50px;\r\n    text-align: center;\r\n    border-radius: 50%;\r\n    float: left;\r\n    margin-right: 20px;\r\n}\r\n\r\n\r\n.hero__search__phone__text {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.hero__search__phone__text h5 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.hero__search__phone__text span {\r\n    font-size: 14px;\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.hero__item {\r\n    height: 431px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding-left: 75px;\r\n}\r\n\r\n\r\n.hero__text span {\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    letter-spacing: 4px;\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.hero__text h2 {\r\n    font-size: 46px;\r\n    color: #252525;\r\n    line-height: 52px;\r\n    font-weight: 700;\r\n    margin: 10px 0;\r\n}\r\n\r\n\r\n.hero__text p {\r\n    margin-bottom: 35px;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Categories\r\n-----------------------*/\r\n\r\n\r\n.categories__item {\r\n    height: 270px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.categories__item h5 {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 0 20px;\r\n    bottom: 20px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.categories__item h5 a {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    padding: 12px 0 10px;\r\n    background: #ffffff;\r\n    display: block;\r\n}\r\n\r\n\r\n.categories__slider .col-lg-3 {\r\n    max-width: 100%;\r\n}\r\n\r\n\r\n.categories__slider.owl-carousel .owl-nav button {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    height: 70px;\r\n    width: 30px;\r\n    line-height: 70px;\r\n    text-align: center;\r\n    border: 1px solid #ebebeb;\r\n    position: absolute;\r\n    left: -35px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-35px);\r\n    background: #ffffff;\r\n}\r\n\r\n\r\n.categories__slider.owl-carousel .owl-nav button.owl-next {\r\n    left: auto;\r\n    right: -35px;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Featured\r\n-----------------------*/\r\n\r\n\r\n.featured {\r\n    padding-top: 80px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n\r\n.featured__controls {\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.featured__controls ul li {\r\n    list-style: none;\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    display: inline-block;\r\n    margin-right: 25px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.featured__controls ul li.active:after {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.featured__controls ul li:after {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -2px;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: #7fad39;\r\n    content: \"\";\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.featured__controls ul li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.featured__item {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.featured__item:hover .featured__item__pic .featured__item__pic__hover {\r\n    bottom: 20px;\r\n}\r\n\r\n\r\n.featured__item__pic {\r\n    height: 270px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    background-position: center center;\r\n}\r\n\r\n\r\n.featured__item__pic__hover {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -50px;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: all, 0.5s;\r\n}\r\n\r\n\r\n.featured__item__pic__hover li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n}\r\n\r\n\r\n.featured__item__pic__hover li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.featured__item__pic__hover li:hover a {\r\n    background: #7fad39;\r\n    border-color: #7fad39;\r\n}\r\n\r\n\r\n.featured__item__pic__hover li:hover a i {\r\n    color: #ffffff;\r\n    transform: rotate(360deg);\r\n}\r\n\r\n\r\n.featured__item__pic__hover li a {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    height: 40px;\r\n    width: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    border: 1px solid #ebebeb;\r\n    background: #ffffff;\r\n    display: block;\r\n    border-radius: 50%;\r\n    transition: all, 0.5s;\r\n}\r\n\r\n\r\n.featured__item__pic__hover li a i {\r\n    position: relative;\r\n    transform: rotate(0);\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.featured__item__text {\r\n    text-align: center;\r\n    padding-top: 15px;\r\n}\r\n\r\n\r\n.featured__item__text h6 {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.featured__item__text h6 a {\r\n    color: #252525;\r\n}\r\n\r\n\r\n.featured__item__text h5 {\r\n    color: #252525;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Latest Product\r\n-----------------------*/\r\n\r\n\r\n.latest-product {\r\n    padding-top: 80px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n\r\n.latest-product__text h4 {\r\n    font-weight: 700;\r\n    color: #1c1c1c;\r\n    margin-bottom: 45px;\r\n}\r\n\r\n\r\n.latest-product__slider.owl-carousel .owl-nav {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: -75px;\r\n}\r\n\r\n\r\n.latest-product__slider.owl-carousel .owl-nav button {\r\n    height: 30px;\r\n    width: 30px;\r\n    background: #F3F6FA;\r\n    border: 1px solid #e6e6e6;\r\n    font-size: 14px;\r\n    color: #636363;\r\n    margin-right: 10px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.latest-product__slider.owl-carousel .owl-nav button span {\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.latest-product__slider.owl-carousel .owl-nav button:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.latest-product__item {\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n    display: block;\r\n}\r\n\r\n\r\n.latest-product__item__pic {\r\n    float: left;\r\n    margin-right: 26px;\r\n}\r\n\r\n\r\n.latest-product__item__pic img {\r\n    height: 110px;\r\n    width: 110px;\r\n}\r\n\r\n\r\n.latest-product__item__text {\r\n    overflow: hidden;\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n.latest-product__item__text h6 {\r\n    color: #252525;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n\r\n.latest-product__item__text span {\r\n    font-size: 18px;\r\n    display: block;\r\n    color: #252525;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Form BLog\r\n-----------------------*/\r\n\r\n\r\n.from-blog {\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n\r\n.from-blog .blog__item {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.from-blog__title {\r\n    margin-bottom: 70px;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Breadcrumb\r\n-----------------------*/\r\n\r\n\r\n.breadcrumb-section {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 45px 0 40px;\r\n}\r\n\r\n\r\n.breadcrumb__text h2 {\r\n    font-size: 46px;\r\n    color: #ffffff;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.breadcrumb__option a {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n    font-weight: 700;\r\n    margin-right: 20px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.breadcrumb__option a:after {\r\n    position: absolute;\r\n    right: -12px;\r\n    top: 13px;\r\n    height: 1px;\r\n    width: 10px;\r\n    background: #ffffff;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.breadcrumb__option span {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Sidebar\r\n-----------------------*/\r\n\r\n\r\n.sidebar__item {\r\n    margin-bottom: 35px;\r\n}\r\n\r\n\r\n.sidebar__item.sidebar__item__color--option {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.sidebar__item h4 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.sidebar__item ul li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n.sidebar__item ul li a {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    line-height: 39px;\r\n    display: block;\r\n}\r\n\r\n\r\n.sidebar__item .latest-product__text {\r\n    position: relative;\r\n}\r\n\r\n\r\n.sidebar__item .latest-product__text h4 {\r\n    margin-bottom: 45px;\r\n}\r\n\r\n\r\n.sidebar__item .latest-product__text .owl-carousel .owl-nav {\r\n    right: 0;\r\n}\r\n\r\n\r\n.price-range-wrap .range-slider {\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.price-range-wrap .range-slider .price-input {\r\n    position: relative;\r\n}\r\n\r\n\r\n.price-range-wrap .range-slider .price-input:after {\r\n    position: absolute;\r\n    left: 38px;\r\n    top: 13px;\r\n    height: 1px;\r\n    width: 5px;\r\n    background: #dd2222;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.price-range-wrap .range-slider .price-input input {\r\n    font-size: 16px;\r\n    color: #dd2222;\r\n    font-weight: 700;\r\n    max-width: 20%;\r\n    border: none;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.price-range-wrap .price-range {\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.price-range-wrap .price-range.ui-widget-content {\r\n    border: none;\r\n    background: #ebebeb;\r\n    height: 5px;\r\n}\r\n\r\n\r\n.price-range-wrap .price-range.ui-widget-content .ui-slider-handle {\r\n    height: 13px;\r\n    width: 13px;\r\n    border-radius: 50%;\r\n    background: #ffffff;\r\n    border: none;\r\n    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.price-range-wrap .price-range .ui-slider-range {\r\n    background: #dd2222;\r\n    border-radius: 0;\r\n}\r\n\r\n\r\n.price-range-wrap .price-range .ui-slider-range.ui-corner-all.ui-widget-header:last-child {\r\n    background: #dd2222;\r\n}\r\n\r\n\r\n.sidebar__item__color {\r\n    float: left;\r\n    width: 40%;\r\n}\r\n\r\n\r\n.sidebar__item__color.sidebar__item__color--white label:after {\r\n    border: 2px solid #333333;\r\n    background: transparent;\r\n}\r\n\r\n\r\n.sidebar__item__color.sidebar__item__color--gray label:after {\r\n    background: #E9A625;\r\n}\r\n\r\n\r\n.sidebar__item__color.sidebar__item__color--red label:after {\r\n    background: #D62D2D;\r\n}\r\n\r\n\r\n.sidebar__item__color.sidebar__item__color--black label:after {\r\n    background: #252525;\r\n}\r\n\r\n\r\n.sidebar__item__color.sidebar__item__color--blue label:after {\r\n    background: #249BC8;\r\n}\r\n\r\n\r\n.sidebar__item__color.sidebar__item__color--green label:after {\r\n    background: #3CC032;\r\n}\r\n\r\n\r\n.sidebar__item__color label {\r\n    font-size: 16px;\r\n    color: #333333;\r\n    position: relative;\r\n    padding-left: 32px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.sidebar__item__color label input {\r\n    position: absolute;\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n.sidebar__item__color label:after {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 5px;\r\n    height: 14px;\r\n    width: 14px;\r\n    background: #222;\r\n    content: \"\";\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.sidebar__item__size {\r\n    display: inline-block;\r\n    margin-right: 16px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.sidebar__item__size label {\r\n    font-size: 12px;\r\n    color: #6f6f6f;\r\n    display: inline-block;\r\n    padding: 8px 25px 6px;\r\n    background: #f5f5f5;\r\n    cursor: pointer;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.sidebar__item__size label input {\r\n    position: absolute;\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Shop Grid\r\n-----------------------*/\r\n\r\n\r\n.product {\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n\r\n.product__discount {\r\n    padding-bottom: 50px;\r\n}\r\n\r\n\r\n.product__discount__title {\r\n    text-align: left;\r\n    margin-bottom: 65px;\r\n}\r\n\r\n\r\n.product__discount__title h2 {\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.product__discount__title h2:after {\r\n    margin: 0;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.product__discount__item:hover .product__discount__item__pic .product__item__pic__hover {\r\n    bottom: 20px;\r\n}\r\n\r\n\r\n.product__discount__item__pic {\r\n    height: 270px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.product__discount__item__pic .product__discount__percent {\r\n    height: 45px;\r\n    width: 45px;\r\n    background: #dd2222;\r\n    border-radius: 50%;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    line-height: 45px;\r\n    text-align: center;\r\n    position: absolute;\r\n    left: 15px;\r\n    top: 15px;\r\n}\r\n\r\n\r\n.product__item__pic__hover {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -50px;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: all, 0.5s;\r\n}\r\n\r\n\r\n.product__item__pic__hover li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n}\r\n\r\n\r\n.product__item__pic__hover li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.product__item__pic__hover li:hover a {\r\n    background: #7fad39;\r\n    border-color: #7fad39;\r\n}\r\n\r\n\r\n.product__item__pic__hover li:hover a i {\r\n    color: #ffffff;\r\n    transform: rotate(360deg);\r\n}\r\n\r\n\r\n.product__item__pic__hover li a {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    height: 40px;\r\n    width: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    border: 1px solid #ebebeb;\r\n    background: #ffffff;\r\n    display: block;\r\n    border-radius: 50%;\r\n    transition: all, 0.5s;\r\n}\r\n\r\n\r\n.product__item__pic__hover li a i {\r\n    position: relative;\r\n    transform: rotate(0);\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.product__discount__item__text {\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n\r\n.product__discount__item__text span {\r\n    font-size: 14px;\r\n    color: #b2b2b2;\r\n    display: block;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n\r\n.product__discount__item__text h5 {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n\r\n.product__discount__item__text h5 a {\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.product__discount__item__text .product__item__price {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.product__discount__item__text .product__item__price span {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    text-decoration: line-through;\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.product__discount__slider .col-lg-4 {\r\n    max-width: 100%;\r\n}\r\n\r\n\r\n.product__discount__slider.owl-carousel .owl-dots {\r\n    text-align: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n.product__discount__slider.owl-carousel .owl-dots button {\r\n    height: 12px;\r\n    width: 12px;\r\n    border: 1px solid #b2b2b2;\r\n    border-radius: 50%;\r\n    margin-right: 12px;\r\n}\r\n\r\n\r\n.product__discount__slider.owl-carousel .owl-dots button.active {\r\n    background: #707070;\r\n    border-color: #6f6f6f;\r\n}\r\n\r\n\r\n.product__discount__slider.owl-carousel .owl-dots button:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.filter__item {\r\n    padding-top: 45px;\r\n    border-top: 1px solid #ebebeb;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n\r\n.filter__sort {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.filter__sort span {\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.filter__sort .nice-select {\r\n    background-color: #fff;\r\n    border-radius: 0;\r\n    border: none;\r\n    display: inline-block;\r\n    float: none;\r\n    height: 0;\r\n    line-height: 0;\r\n    padding-left: 18px;\r\n    padding-right: 30px;\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.filter__sort .nice-select span {\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.filter__sort .nice-select:after {\r\n    border-bottom: 1.5px solid #1c1c1c;\r\n    border-right: 1.5px solid #1c1c1c;\r\n    height: 8px;\r\n    margin-top: 0;\r\n    right: 16px;\r\n    width: 8px;\r\n    top: -5px;\r\n}\r\n\r\n\r\n.filter__sort .nice-select.open .list {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    transform: scale(1) translateY(0);\r\n}\r\n\r\n\r\n.filter__sort .nice-select .list {\r\n    border-radius: 0;\r\n    margin-top: 0;\r\n    top: 15px;\r\n}\r\n\r\n\r\n.filter__sort .nice-select .option {\r\n    line-height: 30px;\r\n    min-height: 30px;\r\n}\r\n\r\n\r\n.filter__found {\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.filter__found h6 {\r\n    font-size: 16px;\r\n    color: #b2b2b2;\r\n}\r\n\r\n\r\n.filter__found h6 span {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.filter__option {\r\n    text-align: right;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.filter__option span {\r\n    font-size: 24px;\r\n    color: #b2b2b2;\r\n    margin-right: 10px;\r\n    cursor: pointer;\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.filter__option span:last-child {\r\n    margin: 0;\r\n}\r\n\r\n\r\n.filter__option span:hover {\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.product__item {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.product__item:hover .product__item__pic .product__item__pic__hover {\r\n    bottom: 20px;\r\n}\r\n\r\n\r\n.product__item__pic {\r\n    height: 270px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.product__item__pic__hover {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -50px;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: all, 0.5s;\r\n}\r\n\r\n\r\n.product__item__pic__hover li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n}\r\n\r\n\r\n.product__item__pic__hover li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.product__item__pic__hover li:hover a {\r\n    background: #7fad39;\r\n    border-color: #7fad39;\r\n}\r\n\r\n\r\n.product__item__pic__hover li:hover a i {\r\n    color: #ffffff;\r\n    transform: rotate(360deg);\r\n}\r\n\r\n\r\n.product__item__pic__hover li a {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    height: 40px;\r\n    width: 40px;\r\n    line-height: 40px;\r\n    text-align: center;\r\n    border: 1px solid #ebebeb;\r\n    background: #ffffff;\r\n    display: block;\r\n    border-radius: 50%;\r\n    transition: all, 0.5s;\r\n}\r\n\r\n\r\n.product__item__pic__hover li a i {\r\n    position: relative;\r\n    transform: rotate(0);\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.product__item__text {\r\n    text-align: center;\r\n    padding-top: 15px;\r\n}\r\n\r\n\r\n.product__item__text h6 {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.product__item__text h6 a {\r\n    color: #252525;\r\n}\r\n\r\n\r\n.product__item__text h5 {\r\n    color: #252525;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.product__pagination,\r\n.blog__pagination {\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n.product__pagination a,\r\n.blog__pagination a {\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid #b2b2b2;\r\n    font-size: 14px;\r\n    color: #b2b2b2;\r\n    font-weight: 700;\r\n    line-height: 28px;\r\n    text-align: center;\r\n    margin-right: 16px;\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.product__pagination a:hover,\r\n.blog__pagination a:hover {\r\n    background: #7fad39;\r\n    border-color: #7fad39;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.product__pagination a:last-child,\r\n.blog__pagination a:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Shop Details\r\n-----------------------*/\r\n\r\n\r\n.product-details {\r\n    padding-top: 80px;\r\n}\r\n\r\n\r\n.product__details__pic__item {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.product__details__pic__item img {\r\n    min-width: 100%;\r\n}\r\n\r\n\r\n.product__details__pic__slider img {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.product__details__pic__slider.owl-carousel .owl-item img {\r\n    width: auto;\r\n}\r\n\r\n\r\n.product__details__text h3 {\r\n    color: #252525;\r\n    font-weight: 700;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n\r\n.product__details__text .product__details__rating {\r\n    font-size: 14px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.product__details__text .product__details__rating i {\r\n    margin-right: -2px;\r\n    color: #EDBB0E;\r\n}\r\n\r\n\r\n.product__details__text .product__details__rating span {\r\n    color: #dd2222;\r\n    margin-left: 4px;\r\n}\r\n\r\n\r\n.product__details__text .product__details__price {\r\n    font-size: 30px;\r\n    color: #dd2222;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.product__details__text p {\r\n    margin-bottom: 45px;\r\n}\r\n\r\n\r\n.product__details__text .primary-btn {\r\n    padding: 16px 28px 14px;\r\n    margin-right: 6px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.product__details__text .heart-icon {\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    padding: 13px 16px 13px;\r\n    background: #f5f5f5;\r\n}\r\n\r\n\r\n.product__details__text ul {\r\n    border-top: 1px solid #ebebeb;\r\n    padding-top: 40px;\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.product__details__text ul li {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    list-style: none;\r\n    line-height: 36px;\r\n}\r\n\r\n\r\n.product__details__text ul li b {\r\n    font-weight: 700;\r\n    width: 170px;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.product__details__text ul li span samp {\r\n    color: #dd2222;\r\n}\r\n\r\n\r\n.product__details__text ul li .share {\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.product__details__text ul li .share a {\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    color: #1c1c1c;\r\n    margin-right: 25px;\r\n}\r\n\r\n\r\n.product__details__text ul li .share a:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.product__details__quantity {\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n}\r\n\r\n\r\n.pro-qty {\r\n    width: 140px;\r\n    height: 50px;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: center;\r\n    background: #f5f5f5;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.pro-qty input {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    width: 50px;\r\n    border: none;\r\n    background: #f5f5f5;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.pro-qty .qtybtn {\r\n    width: 35px;\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.product__details__tab {\r\n    padding-top: 85px;\r\n}\r\n\r\n\r\n.product__details__tab .nav-tabs {\r\n    border-bottom: none;\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n\r\n\r\n.product__details__tab .nav-tabs:before {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 12px;\r\n    height: 1px;\r\n    width: 370px;\r\n    background: #ebebeb;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.product__details__tab .nav-tabs:after {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 12px;\r\n    height: 1px;\r\n    width: 370px;\r\n    background: #ebebeb;\r\n    content: \"\";\r\n}\r\n\r\n\r\n.product__details__tab .nav-tabs li {\r\n    margin-bottom: 0;\r\n    margin-right: 65px;\r\n}\r\n\r\n\r\n.product__details__tab .nav-tabs li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.product__details__tab .nav-tabs li a {\r\n    font-size: 16px;\r\n    color: #999999;\r\n    font-weight: 700;\r\n    border: none;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n.product__details__tab .product__details__tab__desc {\r\n    padding-top: 44px;\r\n}\r\n\r\n\r\n.product__details__tab .product__details__tab__desc h6 {\r\n    font-weight: 700;\r\n    color: #333333;\r\n    margin-bottom: 26px;\r\n}\r\n\r\n\r\n.product__details__tab .product__details__tab__desc p {\r\n    color: #666666;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Shop Details\r\n-----------------------*/\r\n\r\n\r\n.related-product {\r\n    padding-bottom: 30px;\r\n}\r\n\r\n\r\n.related__product__title {\r\n    margin-bottom: 70px;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Shop Cart\r\n-----------------------*/\r\n\r\n\r\n.shoping-cart {\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n\r\n.shoping__cart__table {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.shoping__cart__table table {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.shoping__cart__table table thead tr {\r\n    border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\n\r\n.shoping__cart__table table thead th {\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    color: #1c1c1c;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n\r\n.shoping__cart__table table thead th.shoping__product {\r\n    text-align: left;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__item {\r\n    width: 630px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__item img {\r\n    display: inline-block;\r\n    margin-right: 25px;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__item h5 {\r\n    color: #1c1c1c;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__price {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    width: 100px;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__total {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    width: 110px;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__item__close {\r\n    text-align: right;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__item__close span {\r\n    font-size: 24px;\r\n    color: #b2b2b2;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__quantity {\r\n    width: 225px;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty {\r\n    width: 120px;\r\n    height: 40px;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty input {\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty input::-moz-placeholder {\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty input::placeholder {\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.shoping__cart__table table tbody tr td.shoping__cart__quantity .pro-qty .qtybtn {\r\n    width: 15px;\r\n}\r\n\r\n\r\n.primary-btn.cart-btn {\r\n    color: #6f6f6f;\r\n    padding: 14px 30px 12px;\r\n    background: #f5f5f5;\r\n}\r\n\r\n\r\n.primary-btn.cart-btn span {\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n.primary-btn.cart-btn.cart-btn-right {\r\n    float: right;\r\n}\r\n\r\n\r\n.shoping__discount {\r\n    margin-top: 45px;\r\n}\r\n\r\n\r\n.shoping__discount h5 {\r\n    font-size: 20px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.shoping__discount form input {\r\n    width: 255px;\r\n    height: 46px;\r\n    border: 1px solid #cccccc;\r\n    font-size: 16px;\r\n    color: #b2b2b2;\r\n    text-align: center;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.shoping__discount form input::-moz-placeholder {\r\n    color: #b2b2b2;\r\n}\r\n\r\n\r\n.shoping__discount form input::placeholder {\r\n    color: #b2b2b2;\r\n}\r\n\r\n\r\n.shoping__discount form button {\r\n    padding: 15px 30px 11px;\r\n    font-size: 12px;\r\n    letter-spacing: 4px;\r\n    background: #6f6f6f;\r\n}\r\n\r\n\r\n.shoping__checkout {\r\n    background: #f5f5f5;\r\n    padding: 30px;\r\n    padding-top: 20px;\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n.shoping__checkout h5 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    margin-bottom: 28px;\r\n}\r\n\r\n\r\n.shoping__checkout ul {\r\n    margin-bottom: 28px;\r\n}\r\n\r\n\r\n.shoping__checkout ul li {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    list-style: none;\r\n    overflow: hidden;\r\n    border-bottom: 1px solid #ebebeb;\r\n    padding-bottom: 13px;\r\n    margin-bottom: 18px;\r\n}\r\n\r\n\r\n.shoping__checkout ul li:last-child {\r\n    padding-bottom: 0;\r\n    border-bottom: none;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.shoping__checkout ul li span {\r\n    font-size: 18px;\r\n    color: #dd2222;\r\n    float: right;\r\n}\r\n\r\n\r\n.shoping__checkout .primary-btn {\r\n    display: block;\r\n    text-align: center;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Checkout\r\n-----------------------*/\r\n\r\n\r\n.checkout {\r\n    padding-top: 80px;\r\n    padding-bottom: 60px;\r\n}\r\n\r\n\r\n.checkout h6 {\r\n    color: #999999;\r\n    text-align: center;\r\n    background: #f5f5f5;\r\n    border-top: 1px solid #6AB963;\r\n    padding: 12px 0 12px;\r\n    margin-bottom: 75px;\r\n}\r\n\r\n\r\n.checkout h6 span {\r\n    font-size: 16px;\r\n    color: #6AB963;\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n.checkout h6 a {\r\n    text-decoration: underline;\r\n    color: #999999;\r\n}\r\n\r\n\r\n.checkout__form h4 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    border-bottom: 1px solid #e1e1e1;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.checkout__form p {\r\n    -moz-column-rule: #b2b2b2;\r\n         column-rule: #b2b2b2;\r\n}\r\n\r\n\r\n.checkout__input {\r\n    margin-bottom: 24px;\r\n}\r\n\r\n\r\n.checkout__input p {\r\n    color: #1c1c1c;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.checkout__input p span {\r\n    color: #dd2222;\r\n}\r\n\r\n\r\n.checkout__input input {\r\n    width: 100%;\r\n    height: 46px;\r\n    border: 1px solid #ebebeb;\r\n    padding-left: 20px;\r\n    font-size: 16px;\r\n    color: #b2b2b2;\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n.checkout__input input.checkout__input__add {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.checkout__input input::-moz-placeholder {\r\n    color: #b2b2b2;\r\n}\r\n\r\n\r\n.checkout__input input::placeholder {\r\n    color: #b2b2b2;\r\n}\r\n\r\n\r\n.checkout__input__checkbox {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.checkout__input__checkbox label {\r\n    position: relative;\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    padding-left: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.checkout__input__checkbox label input {\r\n    position: absolute;\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n.checkout__input__checkbox label input:checked~.checkmark {\r\n    background: #7fad39;\r\n    border-color: #7fad39;\r\n}\r\n\r\n\r\n.checkout__input__checkbox label input:checked~.checkmark:after {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.checkout__input__checkbox label .checkmark {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 4px;\r\n    height: 16px;\r\n    width: 14px;\r\n    border: 1px solid #a6a6a6;\r\n    content: \"\";\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n.checkout__input__checkbox label .checkmark:after {\r\n    position: absolute;\r\n    left: 1px;\r\n    top: 1px;\r\n    width: 10px;\r\n    height: 8px;\r\n    border: solid white;\r\n    border-width: 3px 3px 0px 0px;\r\n    transform: rotate(127deg);\r\n    content: \"\";\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.checkout__order {\r\n    background: #f5f5f5;\r\n    padding: 40px;\r\n    padding-top: 30px;\r\n}\r\n\r\n\r\n.checkout__order h4 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    border-bottom: 1px solid #e1e1e1;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.checkout__order .checkout__order__products {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.checkout__order .checkout__order__products span {\r\n    float: right;\r\n}\r\n\r\n\r\n.checkout__order ul {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.checkout__order ul li {\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    line-height: 40px;\r\n    list-style: none;\r\n}\r\n\r\n\r\n.checkout__order ul li span {\r\n    font-weight: 700;\r\n    float: right;\r\n}\r\n\r\n\r\n.checkout__order .checkout__order__subtotal {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    border-bottom: 1px solid #e1e1e1;\r\n    border-top: 1px solid #e1e1e1;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 15px;\r\n    padding-top: 15px;\r\n}\r\n\r\n\r\n.checkout__order .checkout__order__subtotal span {\r\n    float: right;\r\n}\r\n\r\n\r\n.checkout__order .checkout__input__checkbox label {\r\n    padding-left: 20px;\r\n}\r\n\r\n\r\n.checkout__order .checkout__order__total {\r\n    font-size: 18px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    border-bottom: 1px solid #e1e1e1;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.checkout__order .checkout__order__total span {\r\n    float: right;\r\n    color: #dd2222;\r\n}\r\n\r\n\r\n.checkout__order button {\r\n    font-size: 18px;\r\n    letter-spacing: 2px;\r\n    width: 100%;\r\n    margin-top: 10px;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Blog\r\n-----------------------*/\r\n\r\n\r\n.blog__item {\r\n    margin-bottom: 60px;\r\n}\r\n\r\n\r\n.blog__item__pic img {\r\n    min-width: 100%;\r\n}\r\n\r\n\r\n.blog__item__text {\r\n    padding-top: 25px;\r\n}\r\n\r\n\r\n.blog__item__text ul {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.blog__item__text ul li {\r\n    font-size: 16px;\r\n    color: #b2b2b2;\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.blog__item__text ul li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.blog__item__text h5 {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.blog__item__text h5 a {\r\n    font-size: 20px;\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.blog__item__text p {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.blog__item__text .blog__btn {\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    color: #1c1c1c;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    border: 1px solid #b2b2b2;\r\n    padding: 14px 20px 12px;\r\n    border-radius: 25px;\r\n}\r\n\r\n\r\n.blog__item__text .blog__btn span {\r\n    position: relative;\r\n    top: 1px;\r\n    margin-left: 5px;\r\n}\r\n\r\n\r\n.blog__pagination {\r\n    padding-top: 5px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.blog__pagination:before {\r\n    position: absolute;\r\n    left: 0;\r\n    top: -29px;\r\n    height: 1px;\r\n    width: 100%;\r\n    background: #000000;\r\n    opacity: 0.1;\r\n    content: \"\";\r\n}\r\n\r\n\r\n/*---------------------\r\n  Blog Sidebar\r\n-----------------------*/\r\n\r\n\r\n.blog__sidebar {\r\n    padding-top: 50px;\r\n}\r\n\r\n\r\n.blog__sidebar__item {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.blog__sidebar__item h4 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\n.blog__sidebar__item ul li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n.blog__sidebar__item ul li a {\r\n    font-size: 16px;\r\n    color: #666666;\r\n    line-height: 48px;\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.blog__sidebar__item ul li a:hover {\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.blog__sidebar__search {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n\r\n.blog__sidebar__search form {\r\n    position: relative;\r\n}\r\n\r\n\r\n.blog__sidebar__search form input {\r\n    width: 100%;\r\n    height: 46px;\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    padding-left: 15px;\r\n    border: 1px solid #e1e1e1;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n.blog__sidebar__search form input::-moz-placeholder {\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.blog__sidebar__search form input::placeholder {\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.blog__sidebar__search form button {\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    background: transparent;\r\n    border: none;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    padding: 0px 18px;\r\n}\r\n\r\n\r\n.blog__sidebar__recent .blog__sidebar__recent__item {\r\n    display: block;\r\n}\r\n\r\n\r\n.blog__sidebar__recent .blog__sidebar__recent__item:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.blog__sidebar__recent__item {\r\n    overflow: hidden;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.blog__sidebar__recent__item__pic {\r\n    float: left;\r\n    margin-right: 20px;\r\n}\r\n\r\n\r\n.blog__sidebar__recent__item__text {\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.blog__sidebar__recent__item__text h6 {\r\n    font-weight: 700;\r\n    color: #333333;\r\n    line-height: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.blog__sidebar__recent__item__text span {\r\n    font-size: 12px;\r\n    color: #999999;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.blog__sidebar__item__tags a {\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    background: #f5f5f5;\r\n    display: inline-block;\r\n    padding: 7px 26px 5px;\r\n    margin-right: 6px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Blog Details Hero\r\n-----------------------*/\r\n\r\n\r\n.blog-details-hero {\r\n    height: 350px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.blog__details__hero__text {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.blog__details__hero__text h2 {\r\n    font-size: 46px;\r\n    color: #ffffff;\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.blog__details__hero__text ul li {\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-right: 45px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.blog__details__hero__text ul li:after {\r\n    position: absolute;\r\n    right: -26px;\r\n    top: 0;\r\n    content: \"|\";\r\n}\r\n\r\n\r\n.blog__details__hero__text ul li:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.blog__details__hero__text ul li:last-child:after {\r\n    display: none;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Blog Details\r\n-----------------------*/\r\n\r\n\r\n.related-blog {\r\n    padding-top: 70px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n\r\n.related-blog-title {\r\n    margin-bottom: 70px;\r\n}\r\n\r\n\r\n.blog-details {\r\n    padding-bottom: 75px;\r\n    border-bottom: 1px solid #e1e1e1;\r\n}\r\n\r\n\r\n.blog__details__text {\r\n    margin-bottom: 45px;\r\n}\r\n\r\n\r\n.blog__details__text img {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.blog__details__text p {\r\n    font-size: 18px;\r\n    line-height: 30px;\r\n}\r\n\r\n\r\n.blog__details__text h3 {\r\n    color: #333333;\r\n    font-weight: 700;\r\n    line-height: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.blog__details__author__pic {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n\r\n\r\n.blog__details__author__pic img {\r\n    height: 92px;\r\n    width: 92px;\r\n    border-radius: 50%;\r\n}\r\n\r\n\r\n.blog__details__author__text {\r\n    overflow: hidden;\r\n    padding-top: 30px;\r\n}\r\n\r\n\r\n.blog__details__author__text h6 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.blog__details__author__text span {\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.blog__details__widget ul {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.blog__details__widget ul li {\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    list-style: none;\r\n    line-height: 30px;\r\n}\r\n\r\n\r\n.blog__details__widget ul li span {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.blog__details__widget .blog__details__social a {\r\n    display: inline-block;\r\n    font-size: 20px;\r\n    color: #6f6f6f;\r\n    margin-right: 24px;\r\n    transition: all, 0.3s;\r\n}\r\n\r\n\r\n.blog__details__widget .blog__details__social a:hover {\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.blog__details__widget .blog__details__social a:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Footer\r\n-----------------------*/\r\n\r\n\r\n.footer {\r\n    background: #F3F6FA;\r\n    padding-top: 70px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n\r\n.footer__about {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.footer__about ul li {\r\n    font-size: 16px;\r\n    color: #1c1c1c;\r\n    line-height: 36px;\r\n    list-style: none;\r\n}\r\n\r\n\r\n.footer__about__logo {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n.footer__about__logo a {\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.footer__widget {\r\n    margin-bottom: 30px;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.footer__widget h6 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n\r\n.footer__widget ul {\r\n    width: 50%;\r\n    float: left;\r\n}\r\n\r\n\r\n.footer__widget ul li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n.footer__widget ul li a {\r\n    color: #1c1c1c;\r\n    font-size: 14px;\r\n    line-height: 32px;\r\n}\r\n\r\n\r\n.footer__widget p {\r\n    font-size: 14px;\r\n    color: #1c1c1c;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.footer__widget form {\r\n    position: relative;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.footer__widget form input {\r\n    width: 100%;\r\n    font-size: 16px;\r\n    padding-left: 20px;\r\n    color: #1c1c1c;\r\n    height: 46px;\r\n    border: 1px solid #ededed;\r\n}\r\n\r\n\r\n.footer__widget form input::-moz-placeholder {\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.footer__widget form input::placeholder {\r\n    color: #1c1c1c;\r\n}\r\n\r\n\r\n.footer__widget form button {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    padding: 0 26px;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.footer__widget .footer__widget__social a {\r\n    display: inline-block;\r\n    height: 41px;\r\n    width: 41px;\r\n    font-size: 16px;\r\n    color: #404040;\r\n    border: 1px solid #ededed;\r\n    border-radius: 50%;\r\n    line-height: 38px;\r\n    text-align: center;\r\n    background: #ffffff;\r\n    transition: all, 0.3s;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n.footer__widget .footer__widget__social a:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n\r\n.footer__widget .footer__widget__social a:hover {\r\n    background: #7fad39;\r\n    color: #ffffff;\r\n    border-color: #ffffff;\r\n}\r\n\r\n\r\n.footer__copyright {\r\n    border-top: 1px solid #ebebeb;\r\n    padding: 15px 0;\r\n    overflow: hidden;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.footer__copyright__text {\r\n    font-size: 14px;\r\n    color: #1c1c1c;\r\n    float: left;\r\n    line-height: 25px;\r\n}\r\n\r\n\r\n.footer__copyright__payment {\r\n    float: right;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Contact\r\n-----------------------*/\r\n\r\n\r\n.contact {\r\n    padding-top: 80px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n\r\n.contact__widget {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n.contact__widget span {\r\n    font-size: 36px;\r\n    color: #7fad39;\r\n}\r\n\r\n\r\n.contact__widget h4 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n    margin-bottom: 6px;\r\n    margin-top: 18px;\r\n}\r\n\r\n\r\n.contact__widget p {\r\n    color: #666666;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Map\r\n-----------------------*/\r\n\r\n\r\n.map {\r\n    height: 500px;\r\n    position: relative;\r\n}\r\n\r\n\r\n.map iframe {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.map .map-inside {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 160px;\r\n    transform: translateX(-175px);\r\n}\r\n\r\n\r\n.map .map-inside i {\r\n    font-size: 48px;\r\n    color: #7fad39;\r\n    position: absolute;\r\n    bottom: -75px;\r\n    left: 50%;\r\n    transform: translateX(-18px);\r\n}\r\n\r\n\r\n.map .map-inside .inside-widget {\r\n    width: 350px;\r\n    background: #ffffff;\r\n    text-align: center;\r\n    padding: 23px 0;\r\n    position: relative;\r\n    z-index: 1;\r\n    box-shadow: 0 0 20px 5px rgba(12, 7, 26, 0.15);\r\n}\r\n\r\n\r\n.map .map-inside .inside-widget:after {\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: -30px;\r\n    transform: translateX(-6px);\r\n    border: 12px solid transparent;\r\n    border-top: 30px solid #ffffff;\r\n    content: \"\";\r\n    z-index: -1;\r\n}\r\n\r\n\r\n.map .map-inside .inside-widget h4 {\r\n    font-size: 22px;\r\n    font-weight: 700;\r\n    color: #1c1c1c;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n\r\n.map .map-inside .inside-widget ul li {\r\n    list-style: none;\r\n    font-size: 16px;\r\n    color: #666666;\r\n    line-height: 26px;\r\n}\r\n\r\n\r\n/*---------------------\r\n  Contact Form\r\n-----------------------*/\r\n\r\n\r\n.contact__form__title {\r\n    margin-bottom: 50px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.contact__form__title h2 {\r\n    color: #1c1c1c;\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n.contact-form {\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n\r\n.contact-form form input {\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    padding-left: 20px;\r\n    margin-bottom: 30px;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 4px;\r\n}\r\n\r\n\r\n.contact-form form input::-moz-placeholder {\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.contact-form form input::placeholder {\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.contact-form form textarea {\r\n    width: 100%;\r\n    height: 150px;\r\n    font-size: 16px;\r\n    color: #6f6f6f;\r\n    padding-left: 20px;\r\n    margin-bottom: 24px;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 4px;\r\n    padding-top: 12px;\r\n    resize: none;\r\n}\r\n\r\n\r\n.contact-form form textarea::-moz-placeholder {\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.contact-form form textarea::placeholder {\r\n    color: #6f6f6f;\r\n}\r\n\r\n\r\n.contact-form form button {\r\n    font-size: 18px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n\r\n/*--------------------------------- Responsive Media Quaries -----------------------------*/\r\n\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .container {\r\n        max-width: 1170px;\r\n    }\r\n}\r\n\r\n\r\n/* Medium Device = 1200px */\r\n\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n    .header__menu ul li {\r\n        margin-right: 45px;\r\n    }\r\n    .hero__search__form {\r\n        width: 490px;\r\n    }\r\n    .hero__categories__all {\r\n        padding: 10px 25px 10px 20px;\r\n    }\r\n    .hero__categories ul {\r\n        padding-left: 20px;\r\n    }\r\n    .latest-product__slider.owl-carousel .owl-nav {\r\n        right: 0;\r\n    }\r\n    .product__details__tab .nav-tabs:before {\r\n        width: 265px;\r\n    }\r\n    .product__details__tab .nav-tabs:after {\r\n        width: 265px;\r\n    }\r\n    .shoping__discount form input {\r\n        width: 240px;\r\n    }\r\n}\r\n\r\n\r\n/* Tablet Device = 768px */\r\n\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n    .hero__categories {\r\n        margin-bottom: 30px;\r\n    }\r\n    .hero__search__form {\r\n        width: 485px;\r\n    }\r\n    .categories__slider.owl-carousel .owl-nav button {\r\n        left: -20px;\r\n    }\r\n    .categories__slider.owl-carousel .owl-nav button.owl-next {\r\n        right: -20px;\r\n    }\r\n    .filter__sort .nice-select {\r\n        padding-left: 5px;\r\n        padding-right: 28px;\r\n    }\r\n    .product__details__quantity {\r\n        margin-bottom: 10px;\r\n    }\r\n    .product__details__text .primary-btn {\r\n        margin-bottom: 10px;\r\n    }\r\n    .product__details__tab .nav-tabs:before {\r\n        width: 150px;\r\n    }\r\n    .product__details__tab .nav-tabs:after {\r\n        width: 150px;\r\n    }\r\n    .blog__details__author {\r\n        overflow: hidden;\r\n        margin-bottom: 25px;\r\n    }\r\n    .humberger__open {\r\n        display: block;\r\n        font-size: 22px;\r\n        color: #1c1c1c;\r\n        height: 35px;\r\n        width: 35px;\r\n        line-height: 33px;\r\n        text-align: center;\r\n        border: 1px solid #1c1c1c;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        right: 15px;\r\n        top: 22px;\r\n    }\r\n    .header .container {\r\n        position: relative;\r\n    }\r\n    .humberger__menu__wrapper {\r\n        width: 300px;\r\n        background: #ffffff;\r\n        position: fixed;\r\n        left: -300px;\r\n        top: 0;\r\n        height: 100%;\r\n        overflow-y: auto;\r\n        z-index: 99;\r\n        padding: 30px;\r\n        padding-top: 50px;\r\n        opacity: 0;\r\n        display: block;\r\n        transition: all, 0.6s;\r\n    }\r\n    .humberger__menu__wrapper.show__humberger__menu__wrapper {\r\n        opacity: 1;\r\n        left: 0;\r\n    }\r\n    .humberger__menu__logo {\r\n        margin-bottom: 30px;\r\n    }\r\n    .humberger__menu__logo a {\r\n        display: inline-block;\r\n    }\r\n    .humberger__menu__contact {\r\n        padding: 10px 0 13px;\r\n    }\r\n    .humberger__menu__contact ul li {\r\n        font-size: 14px;\r\n        color: #1c1c1c;\r\n        position: relative;\r\n        line-height: 30px;\r\n        list-style: none;\r\n    }\r\n    .humberger__menu__contact ul li i {\r\n        color: #252525;\r\n        margin-right: 5px;\r\n    }\r\n    .humberger__menu__cart ul {\r\n        display: inline-block;\r\n        margin-right: 25px;\r\n    }\r\n    .humberger__menu__cart ul li {\r\n        list-style: none;\r\n        display: inline-block;\r\n        margin-right: 15px;\r\n    }\r\n    .humberger__menu__cart ul li:last-child {\r\n        margin-right: 0;\r\n    }\r\n    .humberger__menu__cart ul li a {\r\n        position: relative;\r\n    }\r\n    .humberger__menu__cart ul li a i {\r\n        font-size: 18px;\r\n        color: #1c1c1c;\r\n    }\r\n    .humberger__menu__cart ul li a span {\r\n        height: 13px;\r\n        width: 13px;\r\n        background: #7fad39;\r\n        font-size: 10px;\r\n        color: #ffffff;\r\n        line-height: 13px;\r\n        text-align: center;\r\n        font-weight: 700;\r\n        display: inline-block;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        top: 0;\r\n        right: -12px;\r\n    }\r\n    .humberger__menu__cart .header__cart__price {\r\n        font-size: 14px;\r\n        color: #6f6f6f;\r\n        display: inline-block;\r\n    }\r\n    .humberger__menu__cart .header__cart__price span {\r\n        color: #252525;\r\n        font-weight: 700;\r\n    }\r\n    .humberger__menu__cart {\r\n        margin-bottom: 25px;\r\n    }\r\n    .humberger__menu__widget {\r\n        margin-bottom: 20px;\r\n    }\r\n    .humberger__menu__widget .header__top__right__language {\r\n        margin-right: 20px;\r\n    }\r\n    .humberger__menu__nav {\r\n        display: none;\r\n    }\r\n    .humberger__menu__wrapper .header__top__right__social {\r\n        display: block;\r\n        margin-right: 0;\r\n        margin-bottom: 20px;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_btn {\r\n        display: none;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav .slicknav_item a {\r\n        border-bottom: none !important;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav {\r\n        display: block !important;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_menu {\r\n        background: transparent;\r\n        padding: 0;\r\n        margin-bottom: 30px;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav ul {\r\n        margin: 0;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav a {\r\n        color: #1c1c1c;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n        margin: 0;\r\n        border-bottom: 1px solid #e1e1e1;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav a:hover {\r\n        border-radius: 0;\r\n        background: transparent;\r\n        color: #7fad39;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav .slicknav_row,\r\n    .humberger__menu__wrapper .slicknav_nav a {\r\n        padding: 8px 0;\r\n    }\r\n    .humberger__menu__overlay {\r\n        position: fixed;\r\n        left: 0;\r\n        top: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n        background: rgba(0, 0, 0, 0.5);\r\n        content: \"\";\r\n        z-index: 98;\r\n        visibility: hidden;\r\n        transition: all, 0.6s;\r\n    }\r\n    .humberger__menu__overlay.active {\r\n        visibility: visible;\r\n    }\r\n    .header__top {\r\n        display: none;\r\n    }\r\n    .header__menu {\r\n        display: none;\r\n    }\r\n    .header__cart {\r\n        text-align: center;\r\n        padding: 10px 0 24px;\r\n    }\r\n    .over_hid {\r\n        overflow: hidden;\r\n    }\r\n}\r\n\r\n\r\n/* Wide Mobile = 480px */\r\n\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .hero__categories {\r\n        margin-bottom: 30px;\r\n    }\r\n    .hero__search {\r\n        margin-bottom: 30px;\r\n    }\r\n    .hero__search__form {\r\n        width: 100%;\r\n    }\r\n    .hero__search__form form input {\r\n        width: 100%;\r\n    }\r\n    .hero__search__form form .hero__search__categories {\r\n        display: none;\r\n    }\r\n    .hero__search__phone {\r\n        float: left;\r\n        margin-top: 30px;\r\n    }\r\n    .categories__slider.owl-carousel .owl-nav {\r\n        text-align: center;\r\n        margin-top: 40px;\r\n    }\r\n    .categories__slider.owl-carousel .owl-nav button {\r\n        position: relative;\r\n        left: 0;\r\n        top: 0;\r\n        -webkit-transform: translateY(0);\r\n    }\r\n    .categories__slider.owl-carousel .owl-nav button.owl-next {\r\n        right: -10px;\r\n    }\r\n    .footer__copyright {\r\n        text-align: center;\r\n    }\r\n    .footer__copyright__text {\r\n        float: none;\r\n        margin-bottom: 25px;\r\n    }\r\n    .footer__copyright__payment {\r\n        float: none;\r\n    }\r\n    .filter__item {\r\n        text-align: center;\r\n    }\r\n    .filter__option {\r\n        text-align: center;\r\n    }\r\n    .product__details__pic {\r\n        margin-bottom: 40px;\r\n    }\r\n    .product__details__tab .nav-tabs:before {\r\n        display: none;\r\n    }\r\n    .product__details__tab .nav-tabs:after {\r\n        display: none;\r\n    }\r\n    .shoping__cart__table {\r\n        overflow-y: auto;\r\n    }\r\n    .shoping__discount form input {\r\n        margin-bottom: 15px;\r\n    }\r\n    .blog__details__author {\r\n        overflow: hidden;\r\n        margin-bottom: 25px;\r\n    }\r\n    .humberger__open {\r\n        display: block;\r\n        font-size: 22px;\r\n        color: #1c1c1c;\r\n        height: 35px;\r\n        width: 35px;\r\n        line-height: 33px;\r\n        text-align: center;\r\n        border: 1px solid #1c1c1c;\r\n        cursor: pointer;\r\n        position: absolute;\r\n        right: 15px;\r\n        top: 22px;\r\n    }\r\n    .header .container {\r\n        position: relative;\r\n    }\r\n    .humberger__menu__wrapper {\r\n        width: 300px;\r\n        background: #ffffff;\r\n        position: fixed;\r\n        left: -300px;\r\n        top: 0;\r\n        height: 100%;\r\n        overflow-y: auto;\r\n        z-index: 99;\r\n        padding: 30px;\r\n        padding-top: 50px;\r\n        opacity: 0;\r\n        display: block;\r\n        transition: all, 0.6s;\r\n    }\r\n    .humberger__menu__wrapper.show__humberger__menu__wrapper {\r\n        opacity: 1;\r\n        left: 0;\r\n    }\r\n    .humberger__menu__logo {\r\n        margin-bottom: 30px;\r\n    }\r\n    .humberger__menu__logo a {\r\n        display: inline-block;\r\n    }\r\n    .humberger__menu__contact {\r\n        padding: 10px 0 13px;\r\n    }\r\n    .humberger__menu__contact ul li {\r\n        font-size: 14px;\r\n        color: #1c1c1c;\r\n        position: relative;\r\n        line-height: 30px;\r\n        list-style: none;\r\n    }\r\n    .humberger__menu__contact ul li i {\r\n        color: #252525;\r\n        margin-right: 5px;\r\n    }\r\n    .humberger__menu__cart ul {\r\n        display: inline-block;\r\n        margin-right: 25px;\r\n    }\r\n    .humberger__menu__cart ul li {\r\n        list-style: none;\r\n        display: inline-block;\r\n        margin-right: 15px;\r\n    }\r\n    .humberger__menu__cart ul li:last-child {\r\n        margin-right: 0;\r\n    }\r\n    .humberger__menu__cart ul li a {\r\n        position: relative;\r\n    }\r\n    .humberger__menu__cart ul li a i {\r\n        font-size: 18px;\r\n        color: #1c1c1c;\r\n    }\r\n    .humberger__menu__cart ul li a span {\r\n        height: 13px;\r\n        width: 13px;\r\n        background: #7fad39;\r\n        font-size: 10px;\r\n        color: #ffffff;\r\n        line-height: 13px;\r\n        text-align: center;\r\n        font-weight: 700;\r\n        display: inline-block;\r\n        border-radius: 50%;\r\n        position: absolute;\r\n        top: 0;\r\n        right: -12px;\r\n    }\r\n    .humberger__menu__cart .header__cart__price {\r\n        font-size: 14px;\r\n        color: #6f6f6f;\r\n        display: inline-block;\r\n    }\r\n    .humberger__menu__cart .header__cart__price span {\r\n        color: #252525;\r\n        font-weight: 700;\r\n    }\r\n    .humberger__menu__cart {\r\n        margin-bottom: 25px;\r\n    }\r\n    .humberger__menu__widget {\r\n        margin-bottom: 20px;\r\n    }\r\n    .humberger__menu__widget .header__top__right__language {\r\n        margin-right: 20px;\r\n    }\r\n    .humberger__menu__nav {\r\n        display: none;\r\n    }\r\n    .humberger__menu__wrapper .header__top__right__social {\r\n        display: block;\r\n        margin-right: 0;\r\n        margin-bottom: 20px;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_btn {\r\n        display: none;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav .slicknav_item a {\r\n        border-bottom: none !important;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav {\r\n        display: block !important;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_menu {\r\n        background: transparent;\r\n        padding: 0;\r\n        margin-bottom: 30px;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav ul {\r\n        margin: 0;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav a {\r\n        color: #1c1c1c;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n        margin: 0;\r\n        border-bottom: 1px solid #e1e1e1;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav a:hover {\r\n        border-radius: 0;\r\n        background: transparent;\r\n        color: #7fad39;\r\n    }\r\n    .humberger__menu__wrapper .slicknav_nav .slicknav_row,\r\n    .humberger__menu__wrapper .slicknav_nav a {\r\n        padding: 8px 0;\r\n    }\r\n    .humberger__menu__overlay {\r\n        position: fixed;\r\n        left: 0;\r\n        top: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n        background: rgba(0, 0, 0, 0.5);\r\n        content: \"\";\r\n        z-index: 98;\r\n        visibility: hidden;\r\n        transition: all, 0.6s;\r\n    }\r\n    .humberger__menu__overlay.active {\r\n        visibility: visible;\r\n    }\r\n    .header__top {\r\n        display: none;\r\n    }\r\n    .header__menu {\r\n        display: none;\r\n    }\r\n    .header__cart {\r\n        text-align: center;\r\n        padding: 10px 0 24px;\r\n    }\r\n    .over_hid {\r\n        overflow: hidden;\r\n    }\r\n}\r\n\r\n\r\n/* Small Device = 320px */\r\n\r\n\r\n@media only screen and (max-width: 479px) {\r\n    .hero__search__form form .hero__search__categories {\r\n        display: none;\r\n    }\r\n    .featured__controls ul li {\r\n        margin-bottom: 10px;\r\n    }\r\n    .product__details__text ul li b {\r\n        width: 100px;\r\n    }\r\n    .product__details__tab .nav-tabs li {\r\n        margin-right: 20px;\r\n    }\r\n    .shoping__cart__btns {\r\n        text-align: center;\r\n    }\r\n    .primary-btn.cart-btn.cart-btn-right {\r\n        float: none;\r\n        margin-top: 10px;\r\n    }\r\n    .shoping__checkout .primary-btn {\r\n        display: block;\r\n        text-align: center;\r\n        padding: 10px 15px 10px;\r\n    }\r\n    .map .map-inside {\r\n        transform: translateX(-125px);\r\n    }\r\n    .map .map-inside .inside-widget {\r\n        width: 250px;\r\n    }\r\n    .product__details__tab .nav-tabs li {\r\n        margin-right: 15px;\r\n    }\r\n    .shoping__discount form input {\r\n        width: 100%;\r\n    }\r\n    .checkout__order {\r\n        padding: 20px;\r\n    }\r\n    .blog__details__hero__text h2 {\r\n        font-size: 24px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbmdjaHUvdHJhbmdjaHUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztrRUFPa0U7OztBQUdsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0VBaUJvRTs7O0FBR3BFLDJDQUEyQzs7O0FBRzNDOzJDQUMyQzs7O0FBRTNDOztJQUVJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQjs7O0FBRUE7Ozs7OztJQU1JLFNBQVM7SUFDVCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQzs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7OztBQUVBOzs7O0lBSUksYUFBYTtBQUNqQjs7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOzs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsU0FBUztBQUNiOzs7QUFHQTs7d0JBRXdCOzs7QUFFeEI7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFFBQVE7SUFDUixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOzs7QUFFQTs7Ozs7Ozs7OztJQVVJLFdBQVc7QUFDZjs7O0FBR0EsWUFBWTs7O0FBRVo7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOzs7QUFHQSxhQUFhOzs7QUFFYjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0Qyw4Q0FBOEM7QUFDbEQ7OztBQUVBO0lBQ0k7UUFFSSx1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDhCQUE4QjtJQUNsQztJQUNBO1FBRUkseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6Qiw4QkFBOEI7SUFDbEM7SUFDQTtRQUVJLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsOEJBQThCO0lBQ2xDO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IseUJBQXlCO1FBQ3pCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6Qiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGlDQUFpQztRQUNqQyx5QkFBeUI7UUFDekIsOEJBQThCO0lBQ2xDO0FBQ0o7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBS2xCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUtkLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFLbkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7O3dCQUV3Qjs7O0FBRXhCO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7d0JBRXdCOzs7QUFFeEI7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0FBQ3RDOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFLbEIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUtsQixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUtwQixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFHQTs7d0JBRXdCOzs7QUFFeEI7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7O3dCQUV3Qjs7O0FBRXhCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBR0E7O3dCQUV3Qjs7O0FBRXhCO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFFWiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTs7d0JBRXdCOzs7QUFFeEI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztBQUNmOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBS2xCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFLbEIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFLcEIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUdwQixpQ0FBaUM7QUFDckM7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0FBQ2I7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUtmLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBS2xCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFLbEIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFLcEIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOzs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFLbEIscUJBQXFCO0FBQ3pCOzs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7OztBQUVBOztJQUVJLGVBQWU7QUFDbkI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBR0E7O3dCQUV3Qjs7O0FBRXhCO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7O3dCQUV3Qjs7O0FBRXhCO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdDQUFnQztBQUNwQzs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O3dCQUV3Qjs7O0FBRXhCO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLHlCQUFvQjtTQUFwQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUc3Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBS2pCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7OztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQ0FBZ0M7QUFDcEM7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBS2xCLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLGVBQWU7SUFDZixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUtuQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTs7d0JBRXdCOzs7QUFFeEI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBR0E7O3dCQUV3Qjs7O0FBRXhCO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBR1YsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBR1QsNEJBQTRCO0FBQ2hDOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUVWLDhDQUE4QztBQUNsRDs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGFBQWE7SUFHYiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsV0FBVztBQUNmOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7OztBQUdBOzt3QkFFd0I7OztBQUV4QjtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7OztBQUdBLDJGQUEyRjs7O0FBRTNGO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7O0FBR0EsMkJBQTJCOzs7QUFFM0I7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOzs7QUFHQSwwQkFBMEI7OztBQUUxQjtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7SUFDYjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO1FBQ1osTUFBTTtRQUNOLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGNBQWM7UUFLZCxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFVBQVU7UUFDVixPQUFPO0lBQ1g7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFFSSxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsT0FBTztRQUNQLE1BQU07UUFDTixZQUFZO1FBQ1osV0FBVztRQUNYLDhCQUE4QjtRQUM5QixXQUFXO1FBQ1gsV0FBVztRQUNYLGtCQUFrQjtRQUtsQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7OztBQUdBLHdCQUF3Qjs7O0FBRXhCO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsTUFBTTtRQUNOLGdDQUFnQztJQUNwQztJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGNBQWM7UUFDZCxZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7SUFDYjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixZQUFZO1FBQ1osTUFBTTtRQUNOLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsVUFBVTtRQUNWLGNBQWM7UUFLZCxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFVBQVU7UUFDVixPQUFPO0lBQ1g7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztRQUNkLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFFSSxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsT0FBTztRQUNQLE1BQU07UUFDTixZQUFZO1FBQ1osV0FBVztRQUNYLDhCQUE4QjtRQUM5QixXQUFXO1FBQ1gsV0FBVztRQUNYLGtCQUFrQjtRQUtsQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7OztBQUdBLHlCQUF5Qjs7O0FBRXpCO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLHVCQUF1QjtJQUMzQjtJQUNBO1FBR0ksNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdHJhbmdjaHUvdHJhbmdjaHUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICBUZW1wbGF0ZSBOYW1lOiBPZ2FuaVxyXG4gIERlc2NyaXB0aW9uOiAgT2dhbmkgZUNvbW1lcmNlICBIVE1MIFRlbXBsYXRlXHJcbiAgQXV0aG9yOiBDb2xvcmxpYlxyXG4gIEF1dGhvciBVUkk6IGh0dHBzOi8vY29sb3JsaWIuY29tXHJcbiAgVmVyc2lvbjogMS4wXHJcbiAgQ3JlYXRlZDogQ29sb3JsaWJcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbltUYWJsZSBvZiBjb250ZW50c11cclxuXHJcbjEuICBUZW1wbGF0ZSBkZWZhdWx0IENTU1xyXG5cdDEuMVx0VmFyaWFibGVzXHJcblx0MS4yXHRNaXhpbnNcclxuXHQxLjNcdEZsZXhib3hcclxuXHQxLjRcdFJlc2V0XHJcbjIuICBIZWxwZXIgQ3NzXHJcbjMuICBIZWFkZXIgU2VjdGlvblxyXG40LiAgSGVybyBTZWN0aW9uXHJcbjUuICBTZXJ2aWNlIFNlY3Rpb25cclxuNi4gIENhdGVnb3JpZXMgU2VjdGlvblxyXG43LiAgRmVhdHVyZWQgU2VjdGlvblxyXG44LiAgTGF0ZXN0IFByb2R1Y3QgU2VjdGlvblxyXG45LiAgQ29udGFjdFxyXG4xMC4gIEZvb3RlciBTdHlsZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuXHJcbi8qIFRlbXBsYXRlIGRlZmF1bHQgQ1NTXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzExMTExMTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuaDYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzZmNmY2ZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaC13aWRnZXQtZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uc2VhcmNoLXdpZGdldC1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNlYXJjaC13aWRnZXQtZm9ybSBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG5idXR0b246Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG51bCxcclxub2wge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgSGVscGVyIENTU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMiB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIGgyOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzdmYWQzOTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNldC1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGFkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLnRleHQtd2hpdGUgaDEsXHJcbi50ZXh0LXdoaXRlIGgyLFxyXG4udGV4dC13aGl0ZSBoMyxcclxuLnRleHQtd2hpdGUgaDQsXHJcbi50ZXh0LXdoaXRlIGg1LFxyXG4udGV4dC13aGl0ZSBoNixcclxuLnRleHQtd2hpdGUgcCxcclxuLnRleHQtd2hpdGUgc3BhbixcclxuLnRleHQtd2hpdGUgbGksXHJcbi50ZXh0LXdoaXRlIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBidXR0b25zICovXHJcblxyXG4ucHJpbWFyeS1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyOHB4IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZDogIzdmYWQzOTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5zaXRlLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMTNweCAzMHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2ZhZDM5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogUHJlbG9kZXIgKi9cclxuXHJcbiNwcmVsb2RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICBhbmltYXRpb246IGxvYWRlciAwLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXIgMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjNjczYWI3O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGVyIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICNmNDQzMzY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzY3M2FiNztcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2Y0NDMzNjtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEhlYWRlclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uaGVhZGVyX190b3Age1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmhlYWRlcl9fdG9wX19sZWZ0IHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxM3B4O1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX2xlZnQgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fbGVmdCB1bCBsaTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTI1cHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLmhlYWRlcl9fdG9wX19sZWZ0IHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX2xlZnQgdWwgbGk6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX2xlZnQgdWwgbGkgaSB7XHJcbiAgICBjb2xvcjogIzI1MjUyNTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX3JpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEzcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fcmlnaHRfX3NvY2lhbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fcmlnaHRfX3NvY2lhbDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLmhlYWRlcl9fdG9wX19yaWdodF9fc29jaWFsIGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fcmlnaHRfX3NvY2lhbCBhOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX3JpZ2h0X19sYW5ndWFnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fcmlnaHRfX2xhbmd1YWdlOmhvdmVyIHVsIHtcclxuICAgIHRvcDogMjNweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX3JpZ2h0X19sYW5ndWFnZTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTIxcHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLmhlYWRlcl9fdG9wX19yaWdodF9fbGFuZ3VhZ2UgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX3JpZ2h0X19sYW5ndWFnZSBkaXYge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmhlYWRlcl9fdG9wX19yaWdodF9fbGFuZ3VhZ2Ugc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX3JpZ2h0X19sYW5ndWFnZSB1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNDNweDtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fcmlnaHRfX2xhbmd1YWdlIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fcmlnaHRfX2xhbmd1YWdlIHVsIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmhlYWRlcl9fdG9wX19yaWdodF9fYXV0aCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXJfX3RvcF9fcmlnaHRfX2F1dGggYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG59XHJcblxyXG4uaGVhZGVyX190b3BfX3JpZ2h0X19hdXRoIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLmhlYWRlcl9fbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2xvZ28gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXJfX21lbnUge1xyXG4gICAgcGFkZGluZzogMjRweCAwO1xyXG59XHJcblxyXG4uaGVhZGVyX19tZW51IHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX21lbnUgdWwgbGkgLmhlYWRlcl9fbWVudV9fZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZWFkZXJfX21lbnUgdWwgbGkgLmhlYWRlcl9fbWVudV9fZHJvcGRvd24gbGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXJfX21lbnUgdWwgbGkgLmhlYWRlcl9fbWVudV9fZHJvcGRvd24gbGk6aG92ZXI+YSB7XHJcbiAgICBjb2xvcjogIzdmYWQzOTtcclxufVxyXG5cclxuLmhlYWRlcl9fbWVudSB1bCBsaSAuaGVhZGVyX19tZW51X19kcm9wZG93biBsaSBhIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX21lbnUgdWwgbGkuYWN0aXZlIGEge1xyXG4gICAgY29sb3I6ICM3ZmFkMzk7XHJcbn1cclxuXHJcbi5oZWFkZXJfX21lbnUgdWwgbGk6aG92ZXIgLmhlYWRlcl9fbWVudV9fZHJvcGRvd24ge1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX21lbnUgdWwgbGk6aG92ZXI+YSB7XHJcbiAgICBjb2xvcjogIzdmYWQzOTtcclxufVxyXG5cclxuLmhlYWRlcl9fbWVudSB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmhlYWRlcl9fbWVudSB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGVyX19jYXJ0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMjRweCAwO1xyXG59XHJcblxyXG4uaGVhZGVyX19jYXJ0IHVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG5cclxuLmhlYWRlcl9fY2FydCB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyX19jYXJ0IHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyX19jYXJ0IHVsIGxpIGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVhZGVyX19jYXJ0IHVsIGxpIGEgaSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxufVxyXG5cclxuLmhlYWRlcl9fY2FydCB1bCBsaSBhIHNwYW4ge1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2ZhZDM5O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogLTEycHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2NhcnQgLmhlYWRlcl9fY2FydF9fcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2NhcnQgLmhlYWRlcl9fY2FydF9fcHJpY2Ugc3BhbiB7XHJcbiAgICBjb2xvcjogIzI1MjUyNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5odW1iZXJnZXJfX21lbnVfX3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmh1bWJlcmdlcl9fb3BlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBIZXJvXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5oZXJvIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uaGVyby5oZXJvLW5vcm1hbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmhlcm8uaGVyby1ub3JtYWwgLmhlcm9fX2NhdGVnb3JpZXMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVyby5oZXJvLW5vcm1hbCAuaGVyb19fY2F0ZWdvcmllcyB1bCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNDZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5oZXJvLmhlcm8tbm9ybWFsIC5oZXJvX19zZWFyY2gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmhlcm9fX2NhdGVnb3JpZXNfX2FsbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2ZhZDM5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlcm9fX2NhdGVnb3JpZXNfX2FsbCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaGVyb19fY2F0ZWdvcmllc19fYWxsIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaGVyb19fY2F0ZWdvcmllc19fYWxsOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBjb250ZW50OiBcIjNcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkVsZWdhbnRJY29uc1wiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5oZXJvX19jYXRlZ29yaWVzIHVsIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uaGVyb19fY2F0ZWdvcmllcyB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uaGVyb19fY2F0ZWdvcmllcyB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM5cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaF9fZm9ybSB7XHJcbiAgICB3aWR0aDogNjEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5oZXJvX19zZWFyY2hfX2Zvcm0gZm9ybSAuaGVyb19fc2VhcmNoX19jYXRlZ29yaWVzIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMThweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGVyb19fc2VhcmNoX19mb3JtIGZvcm0gLmhlcm9fX3NlYXJjaF9fY2F0ZWdvcmllczphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaF9fZm9ybSBmb3JtIC5oZXJvX19zZWFyY2hfX2NhdGVnb3JpZXMgc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTRweDtcclxuICAgIHRvcDogMTRweDtcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaF9fZm9ybSBmb3JtIGlucHV0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2IyYjJiMjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaF9fZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2IyYjJiMjtcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaF9fZm9ybSBmb3JtIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogLTFweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaF9fcGhvbmUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaGVyb19fc2VhcmNoX19waG9uZV9faWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzdmYWQzOTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5oZXJvX19zZWFyY2hfX3Bob25lX190ZXh0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5oZXJvX19zZWFyY2hfX3Bob25lX190ZXh0IGg1IHtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmhlcm9fX3NlYXJjaF9fcGhvbmVfX3RleHQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzZmNmY2ZjtcclxufVxyXG5cclxuLmhlcm9fX2l0ZW0ge1xyXG4gICAgaGVpZ2h0OiA0MzFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG59XHJcblxyXG4uaGVyb19fdGV4dCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIGNvbG9yOiAjN2ZhZDM5O1xyXG59XHJcblxyXG4uaGVyb19fdGV4dCBoMiB7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICBjb2xvcjogIzI1MjUyNTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uaGVyb19fdGV4dCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIENhdGVnb3JpZXNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmNhdGVnb3JpZXNfX2l0ZW0ge1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXNfX2l0ZW0gaDUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2F0ZWdvcmllc19faXRlbSBoNSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcGFkZGluZzogMTJweCAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXRlZ29yaWVzX19zbGlkZXIgLmNvbC1sZy0zIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhdGVnb3JpZXNfX3NsaWRlci5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMzVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTM1cHgpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNhdGVnb3JpZXNfX3NsaWRlci5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0IHtcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogLTM1cHg7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEZlYXR1cmVkXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5mZWF0dXJlZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2NvbnRyb2xzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZF9fY29udHJvbHMgdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2NvbnRyb2xzIHVsIGxpLmFjdGl2ZTphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2NvbnRyb2xzIHVsIGxpOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0ycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzdmYWQzOTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2NvbnRyb2xzIHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZlYXR1cmVkX19pdGVtOmhvdmVyIC5mZWF0dXJlZF9faXRlbV9fcGljIC5mZWF0dXJlZF9faXRlbV9fcGljX19ob3ZlciB7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZF9faXRlbV9fcGljIHtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5cclxuLmZlYXR1cmVkX19pdGVtX19waWNfX2hvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCwgMC41cztcclxufVxyXG5cclxuLmZlYXR1cmVkX19pdGVtX19waWNfX2hvdmVyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLmZlYXR1cmVkX19pdGVtX19waWNfX2hvdmVyIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2l0ZW1fX3BpY19faG92ZXIgbGk6aG92ZXIgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2ZhZDM5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjN2ZhZDM5O1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2l0ZW1fX3BpY19faG92ZXIgbGk6aG92ZXIgYSBpIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG5cclxuLmZlYXR1cmVkX19pdGVtX19waWNfX2hvdmVyIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwsIDAuNXM7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2l0ZW1fX3BpY19faG92ZXIgbGkgYSBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbn1cclxuXHJcbi5mZWF0dXJlZF9faXRlbV9fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLmZlYXR1cmVkX19pdGVtX190ZXh0IGg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZF9faXRlbV9fdGV4dCBoNiBhIHtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG59XHJcblxyXG4uZmVhdHVyZWRfX2l0ZW1fX3RleHQgaDUge1xyXG4gICAgY29sb3I6ICMyNTI1MjU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBMYXRlc3QgUHJvZHVjdFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubGF0ZXN0LXByb2R1Y3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmxhdGVzdC1wcm9kdWN0X190ZXh0IGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbi5sYXRlc3QtcHJvZHVjdF9fc2xpZGVyLm93bC1jYXJvdXNlbCAub3dsLW5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogLTc1cHg7XHJcbn1cclxuXHJcbi5sYXRlc3QtcHJvZHVjdF9fc2xpZGVyLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGNkZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNjM2MzYzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYXRlc3QtcHJvZHVjdF9fc2xpZGVyLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24gc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LXByb2R1Y3RfX3NsaWRlci5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubGF0ZXN0LXByb2R1Y3RfX2l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxhdGVzdC1wcm9kdWN0X19pdGVtX19waWMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi5sYXRlc3QtcHJvZHVjdF9faXRlbV9fcGljIGltZyB7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4ubGF0ZXN0LXByb2R1Y3RfX2l0ZW1fX3RleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubGF0ZXN0LXByb2R1Y3RfX2l0ZW1fX3RleHQgaDYge1xyXG4gICAgY29sb3I6ICMyNTI1MjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5sYXRlc3QtcHJvZHVjdF9faXRlbV9fdGV4dCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMyNTI1MjU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBGb3JtIEJMb2dcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmZyb20tYmxvZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZnJvbS1ibG9nIC5ibG9nX19pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mcm9tLWJsb2dfX3RpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIEJyZWFkY3J1bWJcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJyZWFkY3J1bWItc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDQ1cHggMCA0MHB4O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYl9fdGV4dCBoMiB7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iX19vcHRpb24gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iX19vcHRpb24gYTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTEycHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5icmVhZGNydW1iX19vcHRpb24gc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgU2lkZWJhclxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2lkZWJhcl9faXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uc2lkZWJhcl9faXRlbS5zaWRlYmFyX19pdGVtX19jb2xvci0tb3B0aW9uIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtIGg0IHtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtIHVsIGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBsaW5lLWhlaWdodDogMzlweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZWJhcl9faXRlbSAubGF0ZXN0LXByb2R1Y3RfX3RleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2lkZWJhcl9faXRlbSAubGF0ZXN0LXByb2R1Y3RfX3RleHQgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxuLnNpZGViYXJfX2l0ZW0gLmxhdGVzdC1wcm9kdWN0X190ZXh0IC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYge1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5wcmljZS1yYW5nZS13cmFwIC5yYW5nZS1zbGlkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnByaWNlLXJhbmdlLXdyYXAgLnJhbmdlLXNsaWRlciAucHJpY2UtaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJpY2UtcmFuZ2Utd3JhcCAucmFuZ2Utc2xpZGVyIC5wcmljZS1pbnB1dDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzOHB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkMjIyMjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5wcmljZS1yYW5nZS13cmFwIC5yYW5nZS1zbGlkZXIgLnByaWNlLWlucHV0IGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZGQyMjIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1heC13aWR0aDogMjAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJpY2UtcmFuZ2Utd3JhcCAucHJpY2UtcmFuZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnByaWNlLXJhbmdlLXdyYXAgLnByaWNlLXJhbmdlLnVpLXdpZGdldC1jb250ZW50IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnByaWNlLXJhbmdlLXdyYXAgLnByaWNlLXJhbmdlLnVpLXdpZGdldC1jb250ZW50IC51aS1zbGlkZXItaGFuZGxlIHtcclxuICAgIGhlaWdodDogMTNweDtcclxuICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJpY2UtcmFuZ2Utd3JhcCAucHJpY2UtcmFuZ2UgLnVpLXNsaWRlci1yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQyMjIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLnByaWNlLXJhbmdlLXdyYXAgLnByaWNlLXJhbmdlIC51aS1zbGlkZXItcmFuZ2UudWktY29ybmVyLWFsbC51aS13aWRnZXQtaGVhZGVyOmxhc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogI2RkMjIyMjtcclxufVxyXG5cclxuLnNpZGViYXJfX2l0ZW1fX2NvbG9yIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLnNpZGViYXJfX2l0ZW1fX2NvbG9yLnNpZGViYXJfX2l0ZW1fX2NvbG9yLS13aGl0ZSBsYWJlbDphZnRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzMzMzO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtX19jb2xvci5zaWRlYmFyX19pdGVtX19jb2xvci0tZ3JheSBsYWJlbDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTlBNjI1O1xyXG59XHJcblxyXG4uc2lkZWJhcl9faXRlbV9fY29sb3Iuc2lkZWJhcl9faXRlbV9fY29sb3ItLXJlZCBsYWJlbDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDYyRDJEO1xyXG59XHJcblxyXG4uc2lkZWJhcl9faXRlbV9fY29sb3Iuc2lkZWJhcl9faXRlbV9fY29sb3ItLWJsYWNrIGxhYmVsOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyNTI1MjU7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtX19jb2xvci5zaWRlYmFyX19pdGVtX19jb2xvci0tYmx1ZSBsYWJlbDphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjQ5QkM4O1xyXG59XHJcblxyXG4uc2lkZWJhcl9faXRlbV9fY29sb3Iuc2lkZWJhcl9faXRlbV9fY29sb3ItLWdyZWVuIGxhYmVsOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzQ0MwMzI7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtX19jb2xvciBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZGViYXJfX2l0ZW1fX2NvbG9yIGxhYmVsIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLnNpZGViYXJfX2l0ZW1fX2NvbG9yIGxhYmVsOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtX19zaXplIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtX19zaXplIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDI1cHggNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19pdGVtX19zaXplIGxhYmVsIGlucHV0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgU2hvcCBHcmlkXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5wcm9kdWN0IHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2Rpc2NvdW50X190aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjVweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2Rpc2NvdW50X190aXRsZSBoMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudF9fdGl0bGUgaDI6YWZ0ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudF9faXRlbTpob3ZlciAucHJvZHVjdF9fZGlzY291bnRfX2l0ZW1fX3BpYyAucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciB7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudF9faXRlbV9fcGljIHtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGlzY291bnRfX2l0ZW1fX3BpYyAucHJvZHVjdF9fZGlzY291bnRfX3BlcmNlbnQge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQyMjIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWNfX2hvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCwgMC41cztcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIgbGk6aG92ZXIgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2ZhZDM5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjN2ZhZDM5O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaTpob3ZlciBhIGkge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCwgMC41cztcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIgbGkgYSBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudF9faXRlbV9fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2Rpc2NvdW50X19pdGVtX190ZXh0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2Rpc2NvdW50X19pdGVtX190ZXh0IGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2Rpc2NvdW50X19pdGVtX190ZXh0IGg1IGEge1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudF9faXRlbV9fdGV4dCAucHJvZHVjdF9faXRlbV9fcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGlzY291bnRfX2l0ZW1fX3RleHQgLnByb2R1Y3RfX2l0ZW1fX3ByaWNlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudF9fc2xpZGVyIC5jb2wtbGctNCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kaXNjb3VudF9fc2xpZGVyLm93bC1jYXJvdXNlbCAub3dsLWRvdHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2Rpc2NvdW50X19zbGlkZXIub3dsLWNhcm91c2VsIC5vd2wtZG90cyBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjJiMmIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGlzY291bnRfX3NsaWRlci5vd2wtY2Fyb3VzZWwgLm93bC1kb3RzIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNzA3MDtcclxuICAgIGJvcmRlci1jb2xvcjogIzZmNmY2ZjtcclxufVxyXG5cclxuLnByb2R1Y3RfX2Rpc2NvdW50X19zbGlkZXIub3dsLWNhcm91c2VsIC5vd2wtZG90cyBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5maWx0ZXJfX2l0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyX19zb3J0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXJfX3NvcnQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzZmNmY2ZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZpbHRlcl9fc29ydCAubmljZS1zZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpbHRlcl9fc29ydCAubmljZS1zZWxlY3Qgc3BhbiB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxufVxyXG5cclxuLmZpbHRlcl9fc29ydCAubmljZS1zZWxlY3Q6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzFjMWMxYztcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgIzFjMWMxYztcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIHRvcDogLTVweDtcclxufVxyXG5cclxuLmZpbHRlcl9fc29ydCAubmljZS1zZWxlY3Qub3BlbiAubGlzdCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5maWx0ZXJfX3NvcnQgLm5pY2Utc2VsZWN0IC5saXN0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZmlsdGVyX19zb3J0IC5uaWNlLXNlbGVjdCAub3B0aW9uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmZpbHRlcl9fZm91bmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZpbHRlcl9fZm91bmQgaDYge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbn1cclxuXHJcbi5maWx0ZXJfX2ZvdW5kIGg2IHNwYW4ge1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXJfX29wdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXJfX29wdGlvbiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbn1cclxuXHJcbi5maWx0ZXJfX29wdGlvbiBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZmlsdGVyX19vcHRpb24gc3Bhbjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzdmYWQzOTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW06aG92ZXIgLnByb2R1Y3RfX2l0ZW1fX3BpYyAucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciB7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWMge1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWNfX2hvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC01MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCwgMC41cztcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIgbGk6aG92ZXIgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2ZhZDM5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjN2ZhZDM5O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaTpob3ZlciBhIGkge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAwLjVzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC41cztcclxuICAgIHRyYW5zaXRpb246IGFsbCwgMC41cztcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIgbGkgYSBpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX190ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fdGV4dCBoNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fdGV4dCBoNiBhIHtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fdGV4dCBoNSB7XHJcbiAgICBjb2xvcjogIzI1MjUyNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19wYWdpbmF0aW9uLFxyXG4uYmxvZ19fcGFnaW5hdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX3BhZ2luYXRpb24gYSxcclxuLmJsb2dfX3BhZ2luYXRpb24gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMmIyYjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2IyYjJiMjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fcGFnaW5hdGlvbiBhOmhvdmVyLFxyXG4uYmxvZ19fcGFnaW5hdGlvbiBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3ZmFkMzk7XHJcbiAgICBib3JkZXItY29sb3I6ICM3ZmFkMzk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnByb2R1Y3RfX3BhZ2luYXRpb24gYTpsYXN0LWNoaWxkLFxyXG4uYmxvZ19fcGFnaW5hdGlvbiBhOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBTaG9wIERldGFpbHNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnByb2R1Y3QtZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3BpY19faXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fcGljX19pdGVtIGltZyB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX19waWNfX3NsaWRlciBpbWcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fcGljX19zbGlkZXIub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190ZXh0IGgzIHtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190ZXh0IC5wcm9kdWN0X19kZXRhaWxzX19yYXRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3RleHQgLnByb2R1Y3RfX2RldGFpbHNfX3JhdGluZyBpIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTJweDtcclxuICAgIGNvbG9yOiAjRURCQjBFO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGV4dCAucHJvZHVjdF9fZGV0YWlsc19fcmF0aW5nIHNwYW4ge1xyXG4gICAgY29sb3I6ICNkZDIyMjI7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGV4dCAucHJvZHVjdF9fZGV0YWlsc19fcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNkZDIyMjI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3RleHQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGV4dCAucHJpbWFyeS1idG4ge1xyXG4gICAgcGFkZGluZzogMTZweCAyOHB4IDE0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3RleHQgLmhlYXJ0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHggMTNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190ZXh0IHVsIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGV4dCB1bCBsaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3RleHQgdWwgbGkgYiB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGV4dCB1bCBsaSBzcGFuIHNhbXAge1xyXG4gICAgY29sb3I6ICNkZDIyMjI7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190ZXh0IHVsIGxpIC5zaGFyZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190ZXh0IHVsIGxpIC5zaGFyZSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGV4dCB1bCBsaSAuc2hhcmUgYTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3F1YW50aXR5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4ucHJvLXF0eSB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ucHJvLXF0eSBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvLXF0eSAucXR5YnRuIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190YWIge1xyXG4gICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3RhYiAubmF2LXRhYnM6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAzNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGFiIC5uYXYtdGFiczphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzIGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fZGV0YWlsc19fdGFiIC5uYXYtdGFicyBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190YWIgLnByb2R1Y3RfX2RldGFpbHNfX3RhYl9fZGVzYyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDRweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3RhYiAucHJvZHVjdF9fZGV0YWlsc19fdGFiX19kZXNjIGg2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19kZXRhaWxzX190YWIgLnByb2R1Y3RfX2RldGFpbHNfX3RhYl9fZGVzYyBwIHtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBTaG9wIERldGFpbHNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnJlbGF0ZWQtcHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnJlbGF0ZWRfX3Byb2R1Y3RfX3RpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFNob3AgQ2FydFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uc2hvcGluZy1jYXJ0IHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5zaG9waW5nX19jYXJ0X190YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaG9waW5nX19jYXJ0X190YWJsZSB0YWJsZSB0aGVhZCB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcclxufVxyXG5cclxuLnNob3BpbmdfX2NhcnRfX3RhYmxlIHRhYmxlIHRoZWFkIHRoIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGhlYWQgdGguc2hvcGluZ19fcHJvZHVjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGJvZHkgdHIgdGQge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGJvZHkgdHIgdGQuc2hvcGluZ19fY2FydF9faXRlbSB7XHJcbiAgICB3aWR0aDogNjMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGJvZHkgdHIgdGQuc2hvcGluZ19fY2FydF9faXRlbSBpbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGJvZHkgdHIgdGQuc2hvcGluZ19fY2FydF9faXRlbSBoNSB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNob3BpbmdfX2NhcnRfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRkLnNob3BpbmdfX2NhcnRfX3ByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnNob3BpbmdfX2NhcnRfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRkLnNob3BpbmdfX2NhcnRfX3RvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiAxMTBweDtcclxufVxyXG5cclxuLnNob3BpbmdfX2NhcnRfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRkLnNob3BpbmdfX2NhcnRfX2l0ZW1fX2Nsb3NlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGJvZHkgdHIgdGQuc2hvcGluZ19fY2FydF9faXRlbV9fY2xvc2Ugc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2IyYjJiMjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNob3BpbmdfX2NhcnRfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRkLnNob3BpbmdfX2NhcnRfX3F1YW50aXR5IHtcclxuICAgIHdpZHRoOiAyMjVweDtcclxufVxyXG5cclxuLnNob3BpbmdfX2NhcnRfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRkLnNob3BpbmdfX2NhcnRfX3F1YW50aXR5IC5wcm8tcXR5IHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnNob3BpbmdfX2NhcnRfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRkLnNob3BpbmdfX2NhcnRfX3F1YW50aXR5IC5wcm8tcXR5IGlucHV0IHtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGJvZHkgdHIgdGQuc2hvcGluZ19fY2FydF9fcXVhbnRpdHkgLnByby1xdHkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2FydF9fdGFibGUgdGFibGUgdGJvZHkgdHIgdGQuc2hvcGluZ19fY2FydF9fcXVhbnRpdHkgLnByby1xdHkgLnF0eWJ0biB7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuLnByaW1hcnktYnRuLmNhcnQtYnRuIHtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgcGFkZGluZzogMTRweCAzMHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4ucHJpbWFyeS1idG4uY2FydC1idG4gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWJ0bi5jYXJ0LWJ0bi5jYXJ0LWJ0bi1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zaG9waW5nX19kaXNjb3VudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcblxyXG4uc2hvcGluZ19fZGlzY291bnQgaDUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLnNob3BpbmdfX2Rpc2NvdW50IGZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDI1NXB4O1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2hvcGluZ19fZGlzY291bnQgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiMmIyYjI7XHJcbn1cclxuXHJcbi5zaG9waW5nX19kaXNjb3VudCBmb3JtIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmY2ZjZmO1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2hlY2tvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5zaG9waW5nX19jaGVja291dCBoNSB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2hlY2tvdXQgdWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxufVxyXG5cclxuLnNob3BpbmdfX2NoZWNrb3V0IHVsIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5zaG9waW5nX19jaGVja291dCB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zaG9waW5nX19jaGVja291dCB1bCBsaSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjZGQyMjIyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uc2hvcGluZ19fY2hlY2tvdXQgLnByaW1hcnktYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBDaGVja291dFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uY2hlY2tvdXQge1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmNoZWNrb3V0IGg2IHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNkFCOTYzO1xyXG4gICAgcGFkZGluZzogMTJweCAwIDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXQgaDYgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzZBQjk2MztcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXQgaDYgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2Zvcm0gaDQge1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5jaGVja291dF9fZm9ybSBwIHtcclxuICAgIGNvbHVtbi1ydWxlOiAjYjJiMmIyO1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2lucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5jaGVja291dF9faW5wdXQgcCB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jaGVja291dF9faW5wdXQgcCBzcGFuIHtcclxuICAgIGNvbG9yOiAjZGQyMjIyO1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2lucHV0IGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2lucHV0IGlucHV0LmNoZWNrb3V0X19pbnB1dF9fYWRkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jaGVja291dF9faW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2lucHV0X19jaGVja2JveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2lucHV0X19jaGVja2JveCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoZWNrb3V0X19pbnB1dF9fY2hlY2tib3ggbGFiZWwgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2lucHV0X19jaGVja2JveCBsYWJlbCBpbnB1dDpjaGVja2Vkfi5jaGVja21hcmsge1xyXG4gICAgYmFja2dyb3VuZDogIzdmYWQzOTtcclxuICAgIGJvcmRlci1jb2xvcjogIzdmYWQzOTtcclxufVxyXG5cclxuLmNoZWNrb3V0X19pbnB1dF9fY2hlY2tib3ggbGFiZWwgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jaGVja291dF9faW5wdXRfX2NoZWNrYm94IGxhYmVsIC5jaGVja21hcmsge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNoZWNrb3V0X19pbnB1dF9fY2hlY2tib3ggbGFiZWwgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHggM3B4IDBweCAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyN2RlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTI3ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyN2RlZyk7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmNoZWNrb3V0X19vcmRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX29yZGVyIGg0IHtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX29yZGVyIC5jaGVja291dF9fb3JkZXJfX3Byb2R1Y3RzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jaGVja291dF9fb3JkZXIgLmNoZWNrb3V0X19vcmRlcl9fcHJvZHVjdHMgc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jaGVja291dF9fb3JkZXIgdWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmNoZWNrb3V0X19vcmRlciB1bCBsaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzZmNmY2ZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmNoZWNrb3V0X19vcmRlciB1bCBsaSBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jaGVja291dF9fb3JkZXIgLmNoZWNrb3V0X19vcmRlcl9fc3VidG90YWwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX29yZGVyIC5jaGVja291dF9fb3JkZXJfX3N1YnRvdGFsIHNwYW4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX29yZGVyIC5jaGVja291dF9faW5wdXRfX2NoZWNrYm94IGxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNoZWNrb3V0X19vcmRlciAuY2hlY2tvdXRfX29yZGVyX190b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmNoZWNrb3V0X19vcmRlciAuY2hlY2tvdXRfX29yZGVyX190b3RhbCBzcGFuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjZGQyMjIyO1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX29yZGVyIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBCbG9nXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5ibG9nX19pdGVtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5ibG9nX19pdGVtX19waWMgaW1nIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJsb2dfX2l0ZW1fX3RleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5ibG9nX19pdGVtX190ZXh0IHVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5ibG9nX19pdGVtX190ZXh0IHVsIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjYjJiMmIyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmJsb2dfX2l0ZW1fX3RleHQgdWwgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5ibG9nX19pdGVtX190ZXh0IGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5ibG9nX19pdGVtX190ZXh0IGg1IGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYmxvZ19faXRlbV9fdGV4dCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5ibG9nX19pdGVtX190ZXh0IC5ibG9nX19idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMmIyYjI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5ibG9nX19pdGVtX190ZXh0IC5ibG9nX19idG4gc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5ibG9nX19wYWdpbmF0aW9uIHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ibG9nX19wYWdpbmF0aW9uOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAtMjlweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG4gICAgY29udGVudDogXCJcIjtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgQmxvZyBTaWRlYmFyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5ibG9nX19zaWRlYmFyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9faXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9faXRlbSBoNCB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9faXRlbSB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9faXRlbSB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCwgMC4zcztcclxufVxyXG5cclxuLmJsb2dfX3NpZGViYXJfX2l0ZW0gdWwgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzdmYWQzOTtcclxufVxyXG5cclxuLmJsb2dfX3NpZGViYXJfX3NlYXJjaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9fc2VhcmNoIGZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9fc2VhcmNoIGZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzZmNmY2ZjtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9fc2VhcmNoIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9fc2VhcmNoIGZvcm0gYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAxOHB4O1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9fcmVjZW50IC5ibG9nX19zaWRlYmFyX19yZWNlbnRfX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ibG9nX19zaWRlYmFyX19yZWNlbnQgLmJsb2dfX3NpZGViYXJfX3JlY2VudF9faXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5ibG9nX19zaWRlYmFyX19yZWNlbnRfX2l0ZW0ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5ibG9nX19zaWRlYmFyX19yZWNlbnRfX2l0ZW1fX3BpYyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmJsb2dfX3NpZGViYXJfX3JlY2VudF9faXRlbV9fdGV4dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9fcmVjZW50X19pdGVtX190ZXh0IGg2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9fcmVjZW50X19pdGVtX190ZXh0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYmxvZ19fc2lkZWJhcl9faXRlbV9fdGFncyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDdweCAyNnB4IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgQmxvZyBEZXRhaWxzIEhlcm9cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLmJsb2ctZGV0YWlscy1oZXJvIHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJsb2dfX2RldGFpbHNfX2hlcm9fX3RleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmxvZ19fZGV0YWlsc19faGVyb19fdGV4dCBoMiB7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmxvZ19fZGV0YWlsc19faGVyb19fdGV4dCB1bCBsaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX19oZXJvX190ZXh0IHVsIGxpOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMjZweDtcclxuICAgIHRvcDogMDtcclxuICAgIGNvbnRlbnQ6IFwifFwiO1xyXG59XHJcblxyXG4uYmxvZ19fZGV0YWlsc19faGVyb19fdGV4dCB1bCBsaTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmJsb2dfX2RldGFpbHNfX2hlcm9fX3RleHQgdWwgbGk6bGFzdC1jaGlsZDphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBCbG9nIERldGFpbHNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLnJlbGF0ZWQtYmxvZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucmVsYXRlZC1ibG9nLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi5ibG9nLWRldGFpbHMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDc1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcclxufVxyXG5cclxuLmJsb2dfX2RldGFpbHNfX3RleHQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG5cclxuLmJsb2dfX2RldGFpbHNfX3RleHQgaW1nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX190ZXh0IHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX190ZXh0IGgzIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmJsb2dfX2RldGFpbHNfX2F1dGhvcl9fcGljIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYmxvZ19fZGV0YWlsc19fYXV0aG9yX19waWMgaW1nIHtcclxuICAgIGhlaWdodDogOTJweDtcclxuICAgIHdpZHRoOiA5MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYmxvZ19fZGV0YWlsc19fYXV0aG9yX190ZXh0IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmJsb2dfX2RldGFpbHNfX2F1dGhvcl9fdGV4dCBoNiB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX19hdXRob3JfX3RleHQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzZmNmY2ZjtcclxufVxyXG5cclxuLmJsb2dfX2RldGFpbHNfX3dpZGdldCB1bCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX193aWRnZXQgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX193aWRnZXQgdWwgbGkgc3BhbiB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX193aWRnZXQgLmJsb2dfX2RldGFpbHNfX3NvY2lhbCBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX193aWRnZXQgLmJsb2dfX2RldGFpbHNfX3NvY2lhbCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjN2ZhZDM5O1xyXG59XHJcblxyXG4uYmxvZ19fZGV0YWlsc19fd2lkZ2V0IC5ibG9nX19kZXRhaWxzX19zb2NpYWwgYTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgRm9vdGVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0YzRjZGQTtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5mb290ZXJfX2Fib3V0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mb290ZXJfX2Fib3V0IHVsIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyX19hYm91dF9fbG9nbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyX19hYm91dF9fbG9nbyBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZvb3Rlcl9fd2lkZ2V0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9vdGVyX193aWRnZXQgaDYge1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fd2lkZ2V0IHVsIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZvb3Rlcl9fd2lkZ2V0IHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXJfX3dpZGdldCB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5mb290ZXJfX3dpZGdldCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fd2lkZ2V0IGZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fd2lkZ2V0IGZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbn1cclxuXHJcbi5mb290ZXJfX3dpZGdldCBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxufVxyXG5cclxuLmZvb3Rlcl9fd2lkZ2V0IGZvcm0gYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMCAyNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9vdGVyX193aWRnZXQgLmZvb3Rlcl9fd2lkZ2V0X19zb2NpYWwgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICB3aWR0aDogNDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWRlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwsIDAuM3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsLCAwLjNzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyX193aWRnZXQgLmZvb3Rlcl9fd2lkZ2V0X19zb2NpYWwgYTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmZvb3Rlcl9fd2lkZ2V0IC5mb290ZXJfX3dpZGdldF9fc29jaWFsIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzdmYWQzOTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZm9vdGVyX19jb3B5cmlnaHQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fY29weXJpZ2h0X190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmZvb3Rlcl9fY29weXJpZ2h0X19wYXltZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgQ29udGFjdFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uY29udGFjdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uY29udGFjdF9fd2lkZ2V0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0X193aWRnZXQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogIzdmYWQzOTtcclxufVxyXG5cclxuLmNvbnRhY3RfX3dpZGdldCBoNCB7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG59XHJcblxyXG4uY29udGFjdF9fd2lkZ2V0IHAge1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBNYXBcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuLm1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFwIGlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcCAubWFwLWluc2lkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDE2MHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE3NXB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE3NXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTc1cHgpO1xyXG59XHJcblxyXG4ubWFwIC5tYXAtaW5zaWRlIGkge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6ICM3ZmFkMzk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC03NXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE4cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMThweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE4cHgpO1xyXG59XHJcblxyXG4ubWFwIC5tYXAtaW5zaWRlIC5pbnNpZGUtd2lkZ2V0IHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyM3B4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCA1cHggcmdiYSgxMiwgNywgMjYsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggNXB4IHJnYmEoMTIsIDcsIDI2LCAwLjE1KTtcclxufVxyXG5cclxuLm1hcCAubWFwLWluc2lkZSAuaW5zaWRlLXdpZGdldDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IC0zMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xyXG4gICAgYm9yZGVyOiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubWFwIC5tYXAtaW5zaWRlIC5pbnNpZGUtd2lkZ2V0IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLm1hcCAubWFwLWluc2lkZSAuaW5zaWRlLXdpZGdldCB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgQ29udGFjdCBGb3JtXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5jb250YWN0X19mb3JtX190aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFjdF9fZm9ybV9fdGl0bGUgaDIge1xyXG4gICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzZmNmY2ZjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxufVxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFJlc3BvbnNpdmUgTWVkaWEgUXVhcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBNZWRpdW0gRGV2aWNlID0gMTIwMHB4ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XHJcbiAgICAuaGVhZGVyX19tZW51IHVsIGxpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbiAgICAuaGVyb19fc2VhcmNoX19mb3JtIHtcclxuICAgICAgICB3aWR0aDogNDkwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVyb19fY2F0ZWdvcmllc19fYWxsIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHggMTBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlcm9fX2NhdGVnb3JpZXMgdWwge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5sYXRlc3QtcHJvZHVjdF9fc2xpZGVyLm93bC1jYXJvdXNlbCAub3dsLW5hdiB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9fZGV0YWlsc19fdGFiIC5uYXYtdGFiczpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMjY1cHg7XHJcbiAgICB9XHJcbiAgICAuc2hvcGluZ19fZGlzY291bnQgZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyogVGFibGV0IERldmljZSA9IDc2OHB4ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5oZXJvX19jYXRlZ29yaWVzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmhlcm9fX3NlYXJjaF9fZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDQ4NXB4O1xyXG4gICAgfVxyXG4gICAgLmNhdGVnb3JpZXNfX3NsaWRlci5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uIHtcclxuICAgICAgICBsZWZ0OiAtMjBweDtcclxuICAgIH1cclxuICAgIC5jYXRlZ29yaWVzX19zbGlkZXIub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtbmV4dCB7XHJcbiAgICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgfVxyXG4gICAgLmZpbHRlcl9fc29ydCAubmljZS1zZWxlY3Qge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9fZGV0YWlsc19fcXVhbnRpdHkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9fZGV0YWlsc19fdGV4dCAucHJpbWFyeS1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF9fZGV0YWlsc19fdGFiIC5uYXYtdGFiczpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzOmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAuYmxvZ19fZGV0YWlsc19fYXV0aG9yIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19vcGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWMxYzFjO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlciAuY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogLTMwMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsLCAwLjZzO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlci5zaG93X19odW1iZXJnZXJfX21lbnVfX3dyYXBwZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2xvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19sb2dvIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NvbnRhY3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fY29udGFjdCB1bCBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fY29udGFjdCB1bCBsaSBpIHtcclxuICAgICAgICBjb2xvcjogIzI1MjUyNTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IHVsIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgdWwgbGkgYSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fY2FydCB1bCBsaSBhIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgdWwgbGkgYSBzcGFuIHtcclxuICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzdmYWQzOTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAtMTJweDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgLmhlYWRlcl9fY2FydF9fcHJpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzZmNmY2ZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IC5oZWFkZXJfX2NhcnRfX3ByaWNlIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd2lkZ2V0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd2lkZ2V0IC5oZWFkZXJfX3RvcF9fcmlnaHRfX2xhbmd1YWdlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5oZWFkZXJfX3RvcF9fcmlnaHRfX3NvY2lhbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9uYXYgLnNsaWNrbmF2X2l0ZW0gYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbWVudSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9uYXYgYSB7XHJcbiAgICAgICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IGE6aG92ZXIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjN2ZhZDM5O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IC5zbGlja25hdl9yb3csXHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9uYXYgYSB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHotaW5kZXg6IDk4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsLCAwLjZzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19vdmVybGF5LmFjdGl2ZSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX3RvcCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX21lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX19jYXJ0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDI0cHg7XHJcbiAgICB9XHJcbiAgICAub3Zlcl9oaWQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBXaWRlIE1vYmlsZSA9IDQ4MHB4ICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuaGVyb19fY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIC5oZXJvX19zZWFyY2gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuaGVyb19fc2VhcmNoX19mb3JtIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5oZXJvX19zZWFyY2hfX2Zvcm0gZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaGVyb19fc2VhcmNoX19mb3JtIGZvcm0gLmhlcm9fX3NlYXJjaF9fY2F0ZWdvcmllcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5oZXJvX19zZWFyY2hfX3Bob25lIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhdGVnb3JpZXNfX3NsaWRlci5vd2wtY2Fyb3VzZWwgLm93bC1uYXYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmNhdGVnb3JpZXNfX3NsaWRlci5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcmllc19fc2xpZGVyLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLW5leHQge1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIH1cclxuICAgIC5mb290ZXJfX2NvcHlyaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9fY29weXJpZ2h0X190ZXh0IHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9fY29weXJpZ2h0X19wYXltZW50IHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICAgIC5maWx0ZXJfX2l0ZW0ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5maWx0ZXJfX29wdGlvbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RfX2RldGFpbHNfX3BpYyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzOmJlZm9yZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzOmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNob3BpbmdfX2NhcnRfX3RhYmxlIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnNob3BpbmdfX2Rpc2NvdW50IGZvcm0gaW5wdXQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYmxvZ19fZGV0YWlsc19fYXV0aG9yIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19vcGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMWMxYzFjO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlciAuY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogLTMwMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsLCAwLjZzO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlci5zaG93X19odW1iZXJnZXJfX21lbnVfX3dyYXBwZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2xvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19sb2dvIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NvbnRhY3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMCAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fY29udGFjdCB1bCBsaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMWMxYzFjO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fY29udGFjdCB1bCBsaSBpIHtcclxuICAgICAgICBjb2xvcjogIzI1MjUyNTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IHVsIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IHVsIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgdWwgbGkgYSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fY2FydCB1bCBsaSBhIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzFjMWMxYztcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgdWwgbGkgYSBzcGFuIHtcclxuICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzdmYWQzOTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAtMTJweDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2NhcnQgLmhlYWRlcl9fY2FydF9fcHJpY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzZmNmY2ZjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IC5oZWFkZXJfX2NhcnRfX3ByaWNlIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMjUyNTI1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19jYXJ0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd2lkZ2V0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd2lkZ2V0IC5oZWFkZXJfX3RvcF9fcmlnaHRfX2xhbmd1YWdlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5oZWFkZXJfX3RvcF9fcmlnaHRfX3NvY2lhbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9uYXYgLnNsaWNrbmF2X2l0ZW0gYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbWVudSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9uYXYgYSB7XHJcbiAgICAgICAgY29sb3I6ICMxYzFjMWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IGE6aG92ZXIge1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAjN2ZhZDM5O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fd3JhcHBlciAuc2xpY2tuYXZfbmF2IC5zbGlja25hdl9yb3csXHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X193cmFwcGVyIC5zbGlja25hdl9uYXYgYSB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHotaW5kZXg6IDk4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsLCAwLjZzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCwgMC42cztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwsIDAuNnM7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19vdmVybGF5LmFjdGl2ZSB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX3RvcCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5oZWFkZXJfX21lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX19jYXJ0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDI0cHg7XHJcbiAgICB9XHJcbiAgICAub3Zlcl9oaWQge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBTbWFsbCBEZXZpY2UgPSAzMjBweCAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzlweCkge1xyXG4gICAgLmhlcm9fX3NlYXJjaF9fZm9ybSBmb3JtIC5oZXJvX19zZWFyY2hfX2NhdGVnb3JpZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZmVhdHVyZWRfX2NvbnRyb2xzIHVsIGxpIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RfX2RldGFpbHNfX3RleHQgdWwgbGkgYiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3RfX2RldGFpbHNfX3RhYiAubmF2LXRhYnMgbGkge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5zaG9waW5nX19jYXJ0X19idG5zIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeS1idG4uY2FydC1idG4uY2FydC1idG4tcmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2hvcGluZ19fY2hlY2tvdXQgLnByaW1hcnktYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWFwIC5tYXAtaW5zaWRlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1cHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNXB4KTtcclxuICAgIH1cclxuICAgIC5tYXAgLm1hcC1pbnNpZGUgLmluc2lkZS13aWRnZXQge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0X19kZXRhaWxzX190YWIgLm5hdi10YWJzIGxpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2hvcGluZ19fZGlzY291bnQgZm9ybSBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tvdXRfX29yZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmJsb2dfX2RldGFpbHNfX2hlcm9fX3RleHQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/trangchu/trangchu.component.ts":
/*!************************************************!*\
  !*** ./src/app/trangchu/trangchu.component.ts ***!
  \************************************************/
/*! exports provided: TrangchuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuComponent", function() { return TrangchuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/bienthe.service */ "./src/app/shared/services/bienthe.service.ts");
/* harmony import */ var _shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/hinhanh.service */ "./src/app/shared/services/hinhanh.service.ts");







let TrangchuComponent = class TrangchuComponent {
    //sName: string = '';
    constructor(bientheService, hinhanhService, message, router) {
        this.bientheService = bientheService;
        this.hinhanhService = hinhanhService;
        this.message = message;
        this.router = router;
        this.dataSource = [];
        this.Search = '';
        this.sName = '';
    }
    ngOnInit() {
        this.loadList();
    }
    // onFilter() {
    //   this.Search = this.TenBienThe;
    // }
    // get danh sach 
    loadList() {
        this.bientheService.getListAll().subscribe(response => {
            if (response && response.Status) {
                this.dataSource = response.Data;
                //this.isConfirmLoading = false;
                // console.log(this.dataSource);
            }
        });
    }
    // xem chi tiết nhân viên
    view(mabienthe) {
        this.navigateDetail(mabienthe);
    }
    navigateDetail(mabienthe) {
        if (mabienthe) {
            // chuyen sang màn hình chi tiết nhan vien
            this.router.navigate(['trangchu/chitiet/'], { queryParams: { mabienthe: mabienthe } });
        }
        else {
            this.message.create(_app_constant__WEBPACK_IMPORTED_MODULE_4__["TypeMessage"].Error, 'Có lỗi xảy ra!');
        }
    }
};
TrangchuComponent.ctorParameters = () => [
    { type: _shared_services_bienthe_service__WEBPACK_IMPORTED_MODULE_5__["BientheService"] },
    { type: _shared_services_hinhanh_service__WEBPACK_IMPORTED_MODULE_6__["HinhanhService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TrangchuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trangchu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trangchu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trangchu/trangchu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trangchu.component.css */ "./src/app/trangchu/trangchu.component.css")).default]
    })
], TrangchuComponent);



/***/ }),

/***/ "./src/app/trangchu/trangchu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/trangchu/trangchu.module.ts ***!
  \*********************************************/
/*! exports provided: TrangchuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuModule", function() { return TrangchuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/trangchu/lienhe/lienhe.component.ts");
/* harmony import */ var _trangchu_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trangchu-routing.module */ "./src/app/trangchu/trangchu-routing.module.ts");
/* harmony import */ var _trangchu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trangchu.component */ "./src/app/trangchu/trangchu.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/trangchu/product-detail/product-detail.component.ts");
/* harmony import */ var _sanpham_sanpham_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sanpham/sanpham.component */ "./src/app/trangchu/sanpham/sanpham.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _sanpham_sanpham_of_chungloai_sanpham_of_chungloai_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component */ "./src/app/trangchu/sanpham/sanpham-of-chungloai/sanpham-of-chungloai.component.ts");
/* harmony import */ var _benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./benh/benh-list/benh-list.component */ "./src/app/trangchu/benh/benh-list/benh-list.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index/index.component */ "./src/app/trangchu/index/index.component.ts");
/* harmony import */ var _gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gioithieu/gioithieu.component */ "./src/app/trangchu/gioithieu/gioithieu.component.ts");















let TrangchuModule = class TrangchuModule {
};
TrangchuModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_3__["LienheComponent"],
            _trangchu_component__WEBPACK_IMPORTED_MODULE_5__["TrangchuComponent"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"],
            _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
            _sanpham_sanpham_component__WEBPACK_IMPORTED_MODULE_9__["SanphamComponent"],
            _sanpham_sanpham_of_chungloai_sanpham_of_chungloai_component__WEBPACK_IMPORTED_MODULE_11__["SanphamOfChungloaiComponent"],
            _benh_benh_list_benh_list_component__WEBPACK_IMPORTED_MODULE_12__["BenhListComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
            _gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_14__["GioithieuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _trangchu_routing_module__WEBPACK_IMPORTED_MODULE_4__["TrangchuRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"]
        ],
        entryComponents: [
            _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"]
        ],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], TrangchuModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Luan_van_2020\project\frontend\KOIApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map