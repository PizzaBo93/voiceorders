
import React, { useState } from 'react';
import { DraftOrder, OrderItem } from '../types';

interface OrderReviewProps {
  draft: DraftOrder;
  onConfirm: (final: DraftOrder) => void;
  onCancel: () => void;
}

const OrderReview: React.FC<OrderReviewProps> = ({ draft, onConfirm, onCancel }) => {
  const [items, setItems] = useState<OrderItem[]>(draft.items);

  const updateQty = (id: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl border border-red-50 overflow-hidden animate-in zoom-in-95 duration-300">
      <div className="bg-red-600 p-6 text-white flex justify-between items-center">
        <div>
          <h3 className="text-xl font-black italic tracking-tighter uppercase leading-tight">Kiểm tra đơn</h3>
          <p className="text-[10px] font-bold uppercase opacity-80">Xác nhận trước khi lưu</p>
        </div>
        <div className="bg-white/20 px-5 py-3 rounded-2xl backdrop-blur-md">
          <span className="text-2xl font-black">Bàn {draft.table_number || '?'}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2 max-h-[40vh] overflow-y-auto pr-1">
          {items.map(item => (
            <div key={item.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <p className="font-black text-slate-800 text-sm leading-tight uppercase tracking-tight flex-1 mr-2">{item.name}</p>
                <p className="font-bold text-red-500 text-xs">{(item.price * item.quantity).toLocaleString()}đ</p>
              </div>
              <div className="flex items-center justify-between">
                 <span className="text-[10px] text-slate-400 font-bold">{item.price.toLocaleString()}đ / món</span>
                 <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQty(item.id, -1)}
                      className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-red-600 font-black shadow-sm active:scale-90 transition-transform"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-lg font-black w-5 text-center text-slate-900">{item.quantity}</span>
                    <button 
                      onClick={() => updateQty(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-black shadow-lg active:scale-90 transition-transform"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                 </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-center py-8 text-slate-400 font-bold italic">Chưa có món nào được chọn</p>
          )}
        </div>

        <div className="border-t border-slate-100 pt-4 flex items-center justify-between px-2">
           <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Tổng tiền:</span>
           <span className="text-2xl font-black text-red-600 tracking-tighter italic">{total.toLocaleString()}đ</span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <button 
            onClick={onCancel}
            className="py-5 rounded-2xl bg-slate-100 text-slate-500 font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-colors"
          >
            Hủy
          </button>
          <button 
            onClick={() => onConfirm({ ...draft, items })}
            disabled={items.length === 0}
            className="py-5 rounded-2xl bg-red-600 text-white font-black uppercase text-[10px] tracking-widest shadow-xl shadow-red-100 disabled:opacity-50 active:scale-95 transition-all"
          >
            Xác nhận lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
