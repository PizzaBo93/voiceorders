
import { GoogleGenAI, Type } from "@google/genai";
import { MENU_ITEMS } from "../constants";

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  throw new Error("❌ Missing VITE_API_KEY");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });


export const parseVoiceCommand = async (transcript: string) => {
  // Gửi ID, Tên và Giá để AI map chính xác và lấy được giá tiền
  const compressedMenu = MENU_ITEMS.map(i => `${i.id}|${i.name}|${i.price}`).join(";");

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview", 
    contents: `Đơn: "${transcript}"`,
    config: {
      systemInstruction: `Bạn là trợ lý nhận đơn chuyên nghiệp cho nhà hàng Pizza & Nước giải khát. 
Nhiệm vụ: Trích xuất "table_number" và "items" từ văn bản giọng nói.

DANH MỤC THỰC ĐƠN:
${compressedMenu}

QUY TẮC QUAN TRỌNG:
1. ĐỒ UỐNG & BIA: 
   - "bia", "beer" -> khớp chính xác d10 (Local Beer).
   - "đá me" -> khớp chính xác d9.
   - "nước ngọt" -> ưu tiên d1 (ly), nếu khách nói lon thì chọn d2.
   - "trà đào", "trà chanh", "trà sữa" -> khớp chính xác d6, d7, d8.
   - "nước suối", "la vie" -> d3.
2. PIZZA: 
   - "bò/gà/phô mai nhỏ" -> Size S (p1, p3, p2).
   - "bò/gà/phô mai lớn" -> Size L (p7, p9, p8).
3. MÓN NHẸ & COMBO:
   - "mì ý", "10 ý" -> s11.
   - "combo" -> ID bắt đầu bằng c.
4. SỐ LƯỢNG: Nếu khách không đọc số lượng (VD: "bàn 2 trà đào") -> Mặc định số lượng là 1.

TRẢ VỀ JSON DUY NHẤT: { "table_number": string, "items": [{ "id": string, "name": string, "quantity": number, "price": number }] }`,
      temperature: 0,
      thinkingConfig: { thinkingBudget: 0 },
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          table_number: { type: Type.STRING },
          items: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                name: { type: Type.STRING },
                quantity: { type: Type.NUMBER },
                price: { type: Type.NUMBER }
              },
              required: ["id", "name", "quantity", "price"]
            }
          }
        },
        required: ["table_number", "items"]
      }
    }
  });

  return JSON.parse(response.text);
};
