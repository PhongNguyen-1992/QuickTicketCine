import React from 'react';
import { useSelector } from 'react-redux';
import { formatCurrency } from './formatCurrency';


export default function PriceInfo({ selectedSeats = [], showTotal = true, showDetails = false }) {
  const { seatData } = useSelector(state => state.booking);
  
  // Tính tổng tiền dựa trên giá từng ghế
  const totalAmount = selectedSeats.reduce((sum, seatId) => {
    const seatInfo = seatData
      .flatMap(hang => hang.danhSachGhe)
      .find(ghe => ghe.soGhe === seatId);
    return sum + (seatInfo ? seatInfo.gia : 0);
  }, 0);

  // Tính giá vé trung bình
  const averagePrice = seatData
    .flatMap(hang => hang.danhSachGhe)
    .filter(ghe => ghe.gia > 0)
    .reduce((sum, ghe, _, array) => sum + ghe.gia / array.length, 0);

  return (
    <div className="space-y-3">
      {/* Thông tin giá vé chi tiết */}
      {showDetails && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-800">
                Giá vé trung bình: {formatCurrency(averagePrice)}
              </p>
              <p className="text-xs text-blue-600">Giá có thể khác nhau theo từng ghế</p>
            </div>
            <div className="text-2xl">🎫</div>
          </div>
        </div>
      )}

      {/* Thông tin giá vé đơn giản */}
      {!showDetails && (
        <div className="bg-amber-50 border border-amber-200 rounded p-2 text-center">
          <span className="text-amber-800 font-semibold">
            💰 Giá vé: {formatCurrency(averagePrice)}
          </span>
        </div>
      )}

      {/* Tổng tiền khi có ghế được chọn */}
      {showTotal && selectedSeats.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-green-700">
                {selectedSeats.length} ghế đã chọn
              </p>
              <p className="text-lg font-bold text-green-800">
                Tổng tiền: {formatCurrency(totalAmount)}
              </p>
              {selectedSeats.length > 1 && (
                <p className="text-xs text-green-600">
                  Chi tiết: {selectedSeats.map(seatId => {
                    const seatInfo = seatData
                      .flatMap(hang => hang.danhSachGhe)
                      .find(ghe => ghe.soGhe === seatId);
                    return `${seatId}(${formatCurrency(seatInfo?.gia || 0)})`;
                  }).join(', ')}
                </p>
              )}
            </div>
            <div className="text-3xl">💰</div>
          </div>
        </div>
      )}
    </div>
  );
}