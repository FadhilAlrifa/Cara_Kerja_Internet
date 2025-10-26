export default function Browser() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-primary mb-4">🖥️ Browser</h1>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Definisi</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Browser adalah aplikasi yang digunakan untuk mengakses, menampilkan, dan berinteraksi dengan konten di internet. Contohnya Google Chrome, Mozilla Firefox, dan Safari.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Cara Kerja</h2>
      <p className="text-gray-700 leading-relaxed">
        1 Saat pengguna memasukkan URL, browser mengirimkan <strong>HTTP/HTTPS request</strong> ke server.  <br />
        2 Server mengirimkan kembali file HTML, CSS, dan JavaScript.  <br />
        3 Browser membaca dan memproses file tersebut melalui mesin render (misalnya Blink di Chrome). <br /> 
        4 Setelah itu, browser menampilkan hasil visual halaman web di layar pengguna. <br />
      </p>

      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h3 className="font-semibold text-blue-700 mb-2">Referensi:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>MDN - How Browsers Work</li>
          <li>Google Developers - Inside Look at Modern Web Browsers</li>
        </ul>
      </div>
    </div>
  );
}
