export default function Hosting() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-primary mb-4">💾 Hosting</h1>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Definisi</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        Hosting adalah layanan penyimpanan online tempat file website disimpan agar bisa diakses oleh pengguna melalui internet. File seperti HTML, gambar, CSS, dan JavaScript berada di server hosting.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Cara Kerja</h2>
      <p className="text-gray-700 leading-relaxed">
        1 Saat browser mengetahui alamat IP dari DNS, browser mengirimkan permintaan ke <strong>server hosting</strong> tempat file situs disimpan.  <br />
        2 Server hosting merespons dengan mengirim file website ke browser.  <br />
        3 Browser kemudian menampilkan file tersebut sebagai halaman web.  <br />
        4 Server hosting selalu aktif 24/7 agar website dapat diakses kapan pun. <br />
      </p>

      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h3 className="font-semibold text-blue-700 mb-2">Referensi:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Hostinger Academy - What is Web Hosting?</li>
          <li>Bluehost Learning Center</li>
        </ul>
      </div>
    </div>
  );
}
