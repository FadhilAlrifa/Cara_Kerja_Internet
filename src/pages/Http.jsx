export default function Http() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-primary mb-4">🔐 HTTP dan HTTPS</h1>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Definisi</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        <strong>HTTP (Hypertext Transfer Protocol)</strong> adalah protokol komunikasi antara browser (client) dan server untuk mengirim dan menerima data berbasis teks seperti HTML, gambar, dan video.  
        <strong>HTTPS (HTTP Secure)</strong> adalah versi aman dari HTTP yang menggunakan <strong>enkripsi SSL/TLS</strong> agar data tidak bisa disadap.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Cara Kerja</h2>
      <p className="text-gray-700 leading-relaxed">
        1 Ketika pengguna membuka halaman web, browser mengirimkan <strong>HTTP Request</strong> ke server.  <br />
        2 Server menerima permintaan dan mengembalikan <strong>HTTP Response</strong> yang berisi data halaman web.  <br />
        3 Pada HTTPS, data dikirim melalui jalur terenkripsi dengan sertifikat SSL sehingga aman dari penyadapan.  <br />
        4 Browser menampilkan konten dari response tersebut kepada pengguna. <br />
      </p>

      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h3 className="font-semibold text-blue-700 mb-2">Referensi:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>MDN Web Docs - HTTP Overview</li>
          <li>Cloudflare - What is HTTPS?</li>
          <li>RFC 2616 - HTTP 1.1 Specification</li>
        </ul>
      </div>
    </div>
  );
}
