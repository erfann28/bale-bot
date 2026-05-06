const BALE_BOT_TOKEN = '753222363:BPKgKciIIrer2MA-3JGaTqzOIx2b8ZqZYpk';

const LINKS = [
"vless://290bbcd6-26a1-48c1-b57a-1f250801c55a@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-1",
"vless://09ab9bcf-8628-493a-86a5-e47dcdd297dd@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-2",
"vless://259f3ab9-ab15-45d8-bc4a-e75a1730dc6c@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-3",
"vless://ace43630-c7c2-4864-a2bb-6b7c4712bd77@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-4",
"vless://73a54029-639c-4de7-b876-364ce4facf57@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-5",
"vless://1bb8f138-125c-490c-8d95-bf1fdeaf186e@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-6",
"vless://ef2c22de-52a8-4836-b4d3-65b525571ce4@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-7",
"vless://9789b777-4eba-4589-9be1-2ba8bdc69900@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-8",
"vless://721b02f0-3326-4ad5-a6e0-51f94a2641d4@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-9",
"vless://f15ec3e8-50f3-472e-9d04-b490e49bac81@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-10",
"vless://28b503c0-3424-4209-aea4-0a0f0d35f043@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-11",
"vless://57444871-a3a3-48ba-9a21-1ce6799b7a0d@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-12",
"vless://fc910b36-f168-4aa8-902d-13efeed2a204@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-13",
"vless://882961b6-3348-4ab3-90a9-70874f42f1a4@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-14",
"vless://796c1fe3-1350-4742-b72f-ec69edd25205@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-15",
"vless://0cc93104-d6a9-4875-8c17-e8f69f16b508@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-16",
"vless://e571cc60-6a19-4a05-af8d-79af7c216d3b@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-17",
"vless://6126d4f8-5ea8-4e3c-b522-1a9e467dcf34@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-18",
"vless://93d83373-da70-4522-a378-4a9b29613fbf@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-19",
"vless://8da8a27a-0220-4d4f-9f61-4077886030c3@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-20",
"vless://d3360565-cf4f-4ee7-8c14-9fb876ada885@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-21",
"vless://372b3f4e-8eab-4189-a17c-550907fa0607@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-22",
"vless://fb14256b-148e-4712-b990-ad98b05d9dd7@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-23",
"vless://320993c4-e9ee-44c7-b42c-cc5ad0505f37@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-24",
"vless://4be0839f-8d8b-48cc-9d26-1ca50543947e@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-25",
"vless://05a7da72-a074-4747-bdeb-6fbfd87ad411@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-26",
"vless://754b3739-76c0-4049-98e6-a2c3660cea26@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-27",
"vless://037600c0-b137-42e9-b518-aa53eff3f14b@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-28",
"vless://ecc559cd-9217-470e-ac63-c6023cbfe243@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-29",
"vless://fc84e908-0a8f-42d5-bfbe-db23d34b103b@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-30",
"vless://deb3c417-f4ba-4c74-9ff7-a8ab7ad70480@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-31",
"vless://72f23f9c-d97c-4892-a1bc-dc229fd6d08b@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-32",
"vless://77e9d0d2-11dc-409b-b5fc-1cc8dacc2074@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-33",
"vless://28517ce7-a440-4f96-a00e-ae1634cea06a@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-34",
"vless://8ad05659-a005-4151-9ae7-dcff2905655f@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-35",
"vless://d021be0e-0369-4cea-8218-2cfd39ab7bdc@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-36",
"vless://3d087faf-193c-43ee-b7b2-e895a72af3ca@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-37",
"vless://fbec4679-844d-42ae-b888-871625849625@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-38",
"vless://112d27d0-e8cd-443e-bcaf-7d749229bd5a@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-39",
"vless://07151603-2775-438e-bf2e-cfee3e347151@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-40",
"vless://58d54879-62e9-4ddc-97f1-66c14fffa3fa@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-41",
"vless://b056c2bb-3ad9-4a80-a88a-71fc4b62b567@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-42",
"vless://cdaec0d7-ac19-4ce8-8416-0afc78cc32dd@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-43",
"vless://c0fe3e20-cd13-463a-b281-d92b50fe585a@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-44",
"vless://926ca5f1-8e40-4dc8-89c7-bb9becc7b367@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-45",
"vless://e2b6d2b8-cbb0-4899-b3e2-082f412dd664@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-46",
"vless://58d5432c-8b5e-47ee-8327-c9b6ca2a1344@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-47",
"vless://3b259687-6de3-4262-98d5-3f1b08451d10@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-48",
"vless://a822bbf5-c1cf-40d1-b237-ae6379dfa847@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-49",
"vless://e2f382b7-3d0b-4eab-94ac-c83e6e712926@er3.ir:8080?type=ws&encryption=none&path=%2F&host=&security=none#erfan21khz-50"
];

function getLinkForUser(userId) {
  const index = Math.abs(userId) % LINKS.length;
  return LINKS[index];
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).send('OK');
  }

  const { message } = req.body;
  if (!message) return res.status(200).send('OK');

  const chatId = message.chat.id;
  const userId = message.from.id;
  const text = message.text || '';

  if (text === '/start' || text.startsWith('/start ')) {
    const link = getLinkForUser(userId);
    await fetch(`https://tapi.bale.ai/bot${BALE_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: `سلام! 👋\n\nلینک اختصاصی شما:\n${link}` }),
    });
  }

  return res.status(200).send('OK');
}
