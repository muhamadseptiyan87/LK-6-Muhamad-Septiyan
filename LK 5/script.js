const form = document.getElementById("formPendaftaran");
const notif = document.getElementById("notif");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const kategori = document.getElementById("kategori");
const pesan = document.getElementById("pesan");

const preview = document.getElementById("preview");
const listData = document.getElementById("listData");

// PREVIEW NAMA
nama.addEventListener("input", () => {
  preview.innerHTML = `<p style="color: var(--primary); font-weight: 600;">Halo, <b>${nama.value}</b> 👋</p>`;
});

// SUBMIT FORM
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let error = "";

  // Ambil Jenis Kelamin
  const jk = document.querySelector('input[name="jk"]:checked');

  if (nama.value.length < 3) {
    error = "Nama minimal 3 karakter!";
  } 
  else if (!/^[0-9]{10,}$/.test(hp.value)) {
    error = "No HP harus angka dan minimal 10 digit!";
  } 
  else if (!email.value.includes("@")) {
    error = "Format email tidak valid!";
  } 
  else if (!jk) {
    error = "Pilih jenis kelamin!";
  }
  else if (kategori.value === "") {
    error = "Silakan pilih kategori!";
  }

  if (error !== "") {
    notif.innerHTML = `<div style="color: #B91C1C; background: #FEE2E2; padding: 12px; border-radius: 10px; font-weight: 600; font-size: 14px;">❌ ${error}</div>`;
    return;
  }

  notif.innerHTML = `<div style="color: white; background: linear-gradient(135deg, #10B981, #059669); padding: 12px; border-radius: 10px; font-weight: 600; font-size: 14px; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);">✅ Data berhasil dikirim!</div>`;

  // TAMPILKAN DATA (List Style Modern)
  const li = document.createElement("li");
  li.style.listStyle = "none";
  li.style.background = "white";
  li.style.padding = "20px";
  li.style.borderRadius = "16px";
  li.style.marginTop = "20px";
  li.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.04)";
  li.style.border = "1px solid #E5E7EB";
  li.style.transition = "transform 0.3s ease";
  
  li.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #F3F4F6; padding-bottom: 12px; margin-bottom: 15px;">
      <h3 style="margin: 0; color: var(--primary); font-size: 18px; font-weight: 700;">${nama.value}</h3>
      <span style="background: rgba(79, 70, 229, 0.1); color: var(--primary); padding: 6px 12px; border-radius: 9999px; font-size: 13px; font-weight: 700;">${kategori.value}</span>
    </div>
    <div style="color: var(--text-muted); font-size: 15px; line-height: 1.8;">
      <div style="display: flex; justify-content: space-between;"><strong>Jenis Kelamin:</strong> <span>${jk.value}</span></div>
      <div style="display: flex; justify-content: space-between;"><strong>Email:</strong> <span>${email.value}</span></div>
      <div style="display: flex; justify-content: space-between;"><strong>No HP:</strong> <span>${hp.value}</span></div>
      
      <div style="margin-top: 15px; font-style: italic; background: #F9FAFB; padding: 12px 15px; border-radius: 12px; border-left: 4px solid var(--primary); color: #374151;">"${pesan.value || 'Tidak ada pesan'}"</div>
    </div>
  `;

  listData.prepend(li); // Tampilkan di paling atas

  // RESET
  form.reset();
  preview.innerHTML = "";
});

// HAPUS NOTIF SAAT DIKLIK
notif.addEventListener("click", () => {
  notif.innerHTML = "";
});