export default function Dns() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-primary mb-4">🧭 DNS (Domain Name System)</h1>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Definisi</h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        DNS adalah sistem yang menerjemahkan nama domain (seperti <em>www.google.com</em>) menjadi alamat IP (seperti <code>142.250.190.14</code>) yang dapat dimengerti komputer.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mb-2">Cara Kerja</h2>
      <p className="text-gray-700 leading-relaxed">
        1 Browser meminta informasi alamat IP dari domain ke <strong>DNS Resolver</strong>.   <br />
        2 Resolver memeriksa cache lokal atau menghubungi server DNS lainnya (Root, TLD, Authoritative).  <br />
        3 Setelah mendapat alamat IP, DNS mengembalikannya ke browser.  <br />
        4 Browser lalu menghubungi server dengan IP tersebut untuk menampilkan halaman web. <br />
      </p>

      <div className="mt-6 bg-blue-50 p-4 rounded-md">
        <h3 className="font-semibold text-blue-700 mb-2">Referensi:</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Cloudflare - What is DNS?</li>
          <li>MDN Web Docs - How DNS Works</li>
        </ul>
      </div>
    </div>
  );
}
