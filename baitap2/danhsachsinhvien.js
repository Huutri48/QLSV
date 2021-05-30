function DanhSachSinhVien() {
  this.list = [];

  this.themSinhVien = function (sv) {
    this.list.push(sv);
  };
  this._timVitri = function (maSV) {
    /**
     * tìm vị trí maSV muốn xóa thông qua mảng list
     * 1.duyệt mảng this.list
     * 2.nếu item.maSV == maSV => lấy index(i)
     * 3.splice(index,1)
     */
    var index = -1;
    for (var i = 0; i < this.list.length; i++) {
      if (this.list[i].maSV == maSV.trim()) {
        index = i;
        break;
      }
    }
    return index;
  };
  this._xoaSinhVien = function (maSV) {
    var index = this._timVitri(maSV);
    // Xóa SV
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  };

  this.layThongTinSinhVien = function (maSV) {
    console.log(maSV);
    var index = this._timVitri(maSV);
    // Xóa SV
    if (index !== -1) {
      console.log(index);
      return this.list[index];
    }
  };
}
